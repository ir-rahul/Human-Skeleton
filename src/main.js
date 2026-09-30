import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { getAnatomyData, SKELETON_ITEMS, MUSCLE_ITEMS, NERVE_ITEMS, SYSTEMS_META } from './anatomyData.js';
import { sounds } from './sound.js';

/* ==========================================================================
   APP STATE & CONSTANTS
   ========================================================================== */

const STATE = {
  // Systems visibility
  systems: {
    skeleton: true,
    muscle: true,
    nerve: true
  },
  // Active meshes
  skeletonMeshes: [],
  muscleMeshes: [],
  nerveMeshes: [],
  allMeshes: [], // Combined active clickable meshes
  meshMap: new Map(), // name -> mesh

  selectedPart: null,
  hoveredPart: null,
  isIsolated: false,
  shadingMode: 'realistic',
  explodeFactor: 0,
  activeRegion: 'all',
  isTransitioningCamera: false
};

// Shading Colors
const SKELETON_COLOR = 0xf5efe6;
const NERVE_COLOR = 0xfacc15;

/* ==========================================================================
   THREE.JS SCENE SETUP
   ========================================================================== */

const canvas = document.getElementById('webgl-canvas');
const container = document.getElementById('canvas-container');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x07090e);
scene.fog = new THREE.FogExp2(0x07090e, 0.16);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.05, 50);
camera.position.set(0, 0.15, 2.6);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance'
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 0.3;
controls.maxDistance = 6.0;
controls.target.set(0, 0, 0);

/* ==========================================================================
   STUDIO LIGHTING
   ========================================================================== */

const ambientLight = new THREE.AmbientLight(0x1e293b, 1.4);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
keyLight.position.set(3, 4, 3.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 2048;
keyLight.shadow.mapSize.height = 2048;
keyLight.shadow.bias = -0.0005;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0x93c5fd, 1.4);
fillLight.position.set(-3.5, 2, 2.5);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
rimLight.position.set(0, -1, -3);
scene.add(rimLight);

const topLight = new THREE.PointLight(0xffffff, 1.2, 8);
topLight.position.set(0, 2.2, 0.5);
scene.add(topLight);

/* ==========================================================================
   FLOOR PEDESTAL & GRID
   ========================================================================== */

const floorGroup = new THREE.Group();
floorGroup.position.y = -0.92;

const discGeo = new THREE.CircleGeometry(1.6, 64);
const discMat = new THREE.MeshStandardMaterial({
  color: 0x0c1322,
  roughness: 0.65,
  metalness: 0.2
});
const discMesh = new THREE.Mesh(discGeo, discMat);
discMesh.rotation.x = -Math.PI / 2;
discMesh.receiveShadow = true;
floorGroup.add(discMesh);

const ringGeo1 = new THREE.RingGeometry(1.58, 1.6, 64);
const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
ring1.rotation.x = -Math.PI / 2;
ring1.position.y = 0.001;
floorGroup.add(ring1);

const ringGeo2 = new THREE.RingGeometry(0.78, 0.8, 64);
const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x1e293b, side: THREE.DoubleSide });
const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
ring2.rotation.x = -Math.PI / 2;
ring2.position.y = 0.001;
floorGroup.add(ring2);

scene.add(floorGroup);

/* ==========================================================================
   MULTI-SYSTEM ROOT GROUPS
   ========================================================================== */

const humanBodyRoot = new THREE.Group();
scene.add(humanBodyRoot);

const skeletonGroup = new THREE.Group();
const muscleGroup = new THREE.Group();
const nerveGroup = new THREE.Group();

humanBodyRoot.add(skeletonGroup);
humanBodyRoot.add(muscleGroup);
humanBodyRoot.add(nerveGroup);

/* ==========================================================================
   LOADING MANAGERS & MODEL ASSETS
   ========================================================================== */

const loadingOverlay = document.getElementById('loading-overlay');
const progressBar = document.getElementById('loading-progress-bar');
const progressPercent = document.getElementById('loading-percent');
const loadingSubText = document.getElementById('loading-sub-text');

let loadedCount = 0;
const totalModelsToLoad = 3; // Skeleton, Muscles, Spinal cord

function updateOverallProgress(loadedDelta, currentTaskName) {
  if (loadingSubText && currentTaskName) {
    loadingSubText.textContent = `Loading ${currentTaskName}... (${loadedCount}/${totalModelsToLoad})`;
  }
}

const gltfLoader = new GLTFLoader();

// Load all systems sequentially or parallel
async function loadAnatomicalSystems() {
  try {
    // 1. Load Skeleton
    updateOverallProgress(0, 'Skeletal System (201 bones)');
    const skeletonGltf = await loadGltfPromise('./models/skeleton_bodyexplorer.glb', 0, 40);
    setupSkeleton(skeletonGltf.scene);
    loadedCount++;

    // 2. Load Muscles (man_muscle_human_body as provided by user)
    updateOverallProgress(1, 'Muscular System (man_muscle_human_body)');
    const musclesGltf = await loadGltfPromise('./models/man_muscle_human_body.glb', 40, 85);
    setupMuscles(musclesGltf.scene);
    loadedCount++;

    // 3. Load Nerves (Spinal Cord + Procedural Peripheral Nerves)
    updateOverallProgress(2, 'Nervous System & Pathways');
    try {
      const spinalGltf = await loadGltfPromise('./models/spinal_cord.glb', 85, 95);
      setupSpinalCord(spinalGltf.scene);
    } catch (e) {
      console.warn('Spinal cord model optional:', e);
    }
    setupPeripheralNerves();
    loadedCount++;

    if (progressBar) progressBar.style.width = '100%';
    if (progressPercent) progressPercent.textContent = '100%';

    refreshAllMeshesList();

    // Fade out loading screen
    if (loadingOverlay) {
      loadingOverlay.classList.add('fade-out');
      setTimeout(() => loadingOverlay.classList.add('hidden'), 600);
    }

    animateEntrance();
  } catch (err) {
    console.error('Failed to load anatomical models:', err);
    if (loadingOverlay) {
      loadingOverlay.innerHTML = `
        <div class="loading-card">
          <h2 style="color: #f43f5e; margin-bottom: 12px;">Error Initializing Systems</h2>
          <p style="color: #94a3b8; font-size: 13px;">${err.message || 'Please verify anatomical glb assets.'}</p>
        </div>
      `;
    }
  }
}

function loadGltfPromise(url, startPct, endPct) {
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      (gltf) => resolve(gltf),
      (xhr) => {
        if (xhr.lengthComputable) {
          const ratio = xhr.loaded / xhr.total;
          const currentPct = Math.round(startPct + ratio * (endPct - startPct));
          if (progressBar) progressBar.style.width = `${currentPct}%`;
          if (progressPercent) progressPercent.textContent = `${currentPct}%`;
        }
      },
      (err) => reject(err)
    );
  });
}

// Center reference
const bodyCenter = new THREE.Vector3(0, 0.67, 0);

/* ==========================================================================
   SETUP SKELETAL SYSTEM
   ========================================================================== */

function setupSkeleton(root) {
  root.rotation.x = -Math.PI / 2;
  root.scale.set(0.001, 0.001, 0.001);

  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  const center = new THREE.Vector3();
  box.getCenter(center);

  root.position.x = -center.x;
  root.position.y = -center.y + 0.05;
  root.position.z = -center.z;

  bodyCenter.copy(center);

  skeletonGroup.add(root);
  skeletonGroup.updateMatrixWorld(true);

  root.traverse((node) => {
    if (node.isMesh && node.name && node.name !== 'Skeleton') {
      const mesh = node;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      const info = getAnatomyData(mesh.name, 'Skeleton');

      mesh.geometry.computeBoundingBox();
      const localCenter = new THREE.Vector3();
      mesh.geometry.boundingBox.getCenter(localCenter);
      const worldCenter = localCenter.clone().applyMatrix4(mesh.matrixWorld);

      // Trajectory vector
      const explodeDir = new THREE.Vector3(worldCenter.x, 0, worldCenter.z);
      if (explodeDir.length() < 0.04) {
        explodeDir.set((Math.random() - 0.5) * 0.1, (worldCenter.y > 0 ? 0.15 : -0.15), 0.35);
      } else {
        explodeDir.normalize();
        explodeDir.z += 0.35;
        explodeDir.normalize();
      }

      const mat = new THREE.MeshStandardMaterial({
        color: SKELETON_COLOR,
        roughness: 0.44,
        metalness: 0.06
      });
      mesh.material = mat;

      mesh.userData = {
        system: 'skeleton',
        rawName: mesh.name,
        info,
        worldCenter,
        explodeDir,
        originalPosition: mesh.position.clone(),
        currentPopOffset: new THREE.Vector3(0, 0, 0),
        baseMaterial: mat
      };

      STATE.skeletonMeshes.push(mesh);
      STATE.meshMap.set(mesh.name.toLowerCase(), mesh);
    }
  });

  const skelCount = document.getElementById('skeleton-count-badge');
  if (skelCount) skelCount.textContent = `${STATE.skeletonMeshes.length}`;
}

/* ==========================================================================
   SETUP MUSCULAR SYSTEM (MAN_MUSCLE_HUMAN_BODY)
   ========================================================================== */

function identifyMuscleByCoord(x, y, z) {
  const isLeft = (x >= 0);
  const side = isLeft ? 'Left' : 'Right';
  const ax = Math.abs(x);

  // Head & Neck
  if (y > 0.65) {
    if (y > 0.72) return side + ' Temporalis';
    if (ax > 0.05) return side + ' Sternocleidomastoid';
    return side + ' Scalenus anterior';
  }
  // Shoulder, Chest & Upper Back
  if (y >= 0.38) {
    if (ax >= 0.16) return side + ' Deltoid';
    if (z > 0.03 && ax < 0.16) return side + ' Pectoralis major';
    if (z > 0.01 && ax < 0.12) return side + ' Pectoralis minor';
    if (z < -0.01 && ax < 0.10) return side + ' Trapezius';
    if (z < -0.01 && ax >= 0.10) return side + ' Infraspinatus';
    return side + ' Serratus anterior';
  }
  // Upper Arm & Trunk
  if (y >= 0.15) {
    if (ax >= 0.16) {
      if (z >= 0) return side + ' Biceps brachii';
      return side + ' Triceps brachii';
    }
    if (z >= 0.02) return side + ' Rectus abdominis';
    if (z >= -0.02 && ax >= 0.08) return side + ' External oblique';
    return side + ' Latissimus dorsi';
  }
  // Pelvis, Hip & Forearm
  if (y >= -0.10) {
    if (ax >= 0.18) {
      if (z >= 0) return side + ' Pronator teres';
      return side + ' Brachioradialis';
    }
    if (z < -0.02) return side + ' Gluteus maximus';
    if (ax >= 0.10) return side + ' Gluteus medius';
    return side + ' Psoas major';
  }
  // Thigh & Hand
  if (y >= -0.46) {
    if (ax >= 0.22) return side + ' Abductor pollicis brevis';
    if (z >= 0.02) {
      if (ax < 0.08) return side + ' Rectus femoris';
      if (ax >= 0.11) return side + ' Vastus lateralis';
      return side + ' Vastus medialis';
    }
    if (z < -0.02) {
      if (ax >= 0.09) return side + ' Biceps femoris';
      return side + ' Semitendinosus';
    }
    if (ax < 0.07) return side + ' Gracilis';
    return side + ' Sartorius';
  }
  // Lower Leg (Calf & Shin)
  if (y >= -0.72) {
    if (z < -0.01) {
      if (y < -0.58) return side + ' Soleus';
      return side + ' Gastrocnemius';
    }
    if (z >= 0.01) return side + ' Tibialis anterior';
    return side + ' Peroneus longus';
  }
  // Foot
  if (z >= 0.02) return side + ' Extensor digitorum brevis';
  return side + ' Abductor hallucis';
}

function setupMuscles(root) {
  // Compute initial unscaled bounds of man_muscle_human_body.glb
  root.updateMatrixWorld(true);
  const musBox0 = new THREE.Box3().setFromObject(root);
  const musSize0 = new THREE.Vector3();
  musBox0.getSize(musSize0);

  // Match the exact height of the human skeleton (1.707 meters)
  const targetHeight = 1.707;
  const scale = targetHeight / (musSize0.y || 2.09397); // ~0.815
  root.scale.set(scale, scale, scale);
  root.updateMatrixWorld(true);

  // Center exactly to match skeleton coordinates
  const musBox1 = new THREE.Box3().setFromObject(root);
  const musCenter1 = new THREE.Vector3();
  musBox1.getCenter(musCenter1);

  root.position.x = -musCenter1.x;
  root.position.y = -musCenter1.y + 0.05;
  root.position.z = -musCenter1.z;

  muscleGroup.add(root);
  muscleGroup.updateMatrixWorld(true);

  // Group to register primary muscle landmarks from Muscle.txt
  const registeredMuscleNames = new Set();

  root.traverse((node) => {
    if (node.isMesh) {
      const mesh = node;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      mesh.geometry.computeBoundingBox();
      const localCenter = new THREE.Vector3();
      mesh.geometry.boundingBox.getCenter(localCenter);
      const worldCenter = localCenter.clone().applyMatrix4(mesh.matrixWorld);

      // Measure mesh size in world meters
      const localSize = new THREE.Vector3();
      mesh.geometry.boundingBox.getSize(localSize);
      const worldDiag = localSize.length() * scale;

      // Identify corresponding anatomical muscle from Muscle.txt
      const muscleName = identifyMuscleByCoord(worldCenter.x, worldCenter.y, worldCenter.z);
      mesh.name = muscleName;
      const info = getAnatomyData(muscleName, 'Muscle');

      const explodeDir = new THREE.Vector3(worldCenter.x, 0, worldCenter.z);
      if (explodeDir.length() < 0.04) {
        explodeDir.set((Math.random() - 0.5) * 0.1, (worldCenter.y > 0 ? 0.15 : -0.15), 0.38);
      } else {
        explodeDir.normalize();
        explodeDir.z += 0.38;
        explodeDir.normalize();
      }

      // Keep original material and color directly from the model as requested by user
      const origMat = (mesh.material && mesh.material.clone) ? mesh.material.clone() : new THREE.MeshStandardMaterial();
      origMat.roughness = Math.min(origMat.roughness ?? 0.6, 0.7);
      origMat.metalness = origMat.metalness ?? 0.0;
      mesh.material = origMat;

      mesh.userData = {
        system: 'muscle',
        rawName: muscleName,
        info,
        worldCenter,
        explodeDir,
        originalPosition: mesh.position.clone(),
        currentPopOffset: new THREE.Vector3(0, 0, 0),
        originalColor: origMat.color.clone(),
        baseMaterial: origMat
      };

      // Raycastable primary bodies (worldDiag > 2cm) for optimal 60fps performance
      if (worldDiag > 0.02 || !registeredMuscleNames.has(muscleName.toLowerCase())) {
        STATE.muscleMeshes.push(mesh);
        STATE.meshMap.set(mesh.name.toLowerCase(), mesh);
        registeredMuscleNames.add(muscleName.toLowerCase());
      }
    }
  });

  // Also index all muscles from Muscle.txt for direct search & extraction
  MUSCLE_ITEMS.forEach((item) => {
    if (!STATE.meshMap.has(item.name.toLowerCase())) {
      // Find closest existing muscle mesh to represent this specific muscle
      const itemName = item.name.toLowerCase();
      let bestCandidate = null;
      for (const mesh of STATE.muscleMeshes) {
        if (itemName.includes(mesh.name.toLowerCase()) || mesh.name.toLowerCase().includes(itemName)) {
          bestCandidate = mesh;
          break;
        }
      }
      if (bestCandidate) {
        STATE.meshMap.set(item.name.toLowerCase(), bestCandidate);
      } else if (STATE.muscleMeshes.length > 0) {
        STATE.meshMap.set(item.name.toLowerCase(), STATE.muscleMeshes[0]);
      }
    }
  });

  const musCount = document.getElementById('muscle-count-badge');
  if (musCount) musCount.textContent = `400+`;
}

/* ==========================================================================
   SETUP NERVOUS SYSTEM (SPINAL CORD + BRAIN + PERIPHERAL NERVES)
   ========================================================================== */

function setupSpinalCord(root) {
  // Spinal cord runs inside the vertebral column
  root.position.set(0, 0.28, -0.02);
  root.scale.set(0.9, 0.9, 0.9);

  nerveGroup.add(root);
  nerveGroup.updateMatrixWorld(true);

  root.traverse((node) => {
    if (node.isMesh) {
      const mesh = node;
      const cleanName = mesh.name.replace(/^VH_M_/, '').replace(/_/g, ' ');
      const info = getAnatomyData(cleanName, 'Nerve');

      mesh.geometry.computeBoundingBox();
      const localCenter = new THREE.Vector3();
      mesh.geometry.boundingBox.getCenter(localCenter);
      const worldCenter = localCenter.clone().applyMatrix4(mesh.matrixWorld);

      const mat = new THREE.MeshStandardMaterial({
        color: NERVE_COLOR,
        roughness: 0.25,
        metalness: 0.1,
        emissive: 0x92400e,
        emissiveIntensity: 0.35
      });
      mesh.material = mat;

      mesh.userData = {
        system: 'nerve',
        rawName: cleanName,
        info,
        worldCenter,
        explodeDir: new THREE.Vector3(0, 0, 0.4),
        originalPosition: mesh.position.clone(),
        currentPopOffset: new THREE.Vector3(0, 0, 0),
        baseMaterial: mat
      };

      STATE.nerveMeshes.push(mesh);
      STATE.meshMap.set(cleanName.toLowerCase(), mesh);
    }
  });
}

function setupPeripheralNerves() {
  // Construct 3D peripheral nerve pathways along the limbs and torso
  const nervePaths = [
    // Sciatic Nerves (Left & Right)
    {
      name: 'Left Sciatic Nerve',
      points: [
        new THREE.Vector3(0.04, -0.12, -0.04),
        new THREE.Vector3(0.08, -0.22, -0.06),
        new THREE.Vector3(0.09, -0.38, -0.05),
        new THREE.Vector3(0.08, -0.52, -0.03),
        new THREE.Vector3(0.07, -0.72, -0.04)
      ]
    },
    {
      name: 'Right Sciatic Nerve',
      points: [
        new THREE.Vector3(-0.04, -0.12, -0.04),
        new THREE.Vector3(-0.08, -0.22, -0.06),
        new THREE.Vector3(-0.09, -0.38, -0.05),
        new THREE.Vector3(-0.08, -0.52, -0.03),
        new THREE.Vector3(-0.07, -0.72, -0.04)
      ]
    },
    // Femoral Nerves (Left & Right)
    {
      name: 'Left Femoral Nerve',
      points: [
        new THREE.Vector3(0.05, -0.08, 0.02),
        new THREE.Vector3(0.08, -0.20, 0.04),
        new THREE.Vector3(0.09, -0.35, 0.03),
        new THREE.Vector3(0.08, -0.48, 0.02)
      ]
    },
    {
      name: 'Right Femoral Nerve',
      points: [
        new THREE.Vector3(-0.05, -0.08, 0.02),
        new THREE.Vector3(-0.08, -0.20, 0.04),
        new THREE.Vector3(-0.09, -0.35, 0.03),
        new THREE.Vector3(-0.08, -0.48, 0.02)
      ]
    },
    // Brachial Plexus & Radial Nerves (Left & Right)
    {
      name: 'Left Radial Nerve',
      points: [
        new THREE.Vector3(0.04, 0.45, -0.01),
        new THREE.Vector3(0.12, 0.40, -0.02),
        new THREE.Vector3(0.20, 0.32, -0.02),
        new THREE.Vector3(0.24, 0.18, -0.01),
        new THREE.Vector3(0.26, 0.02, 0.02),
        new THREE.Vector3(0.28, -0.14, 0.03)
      ]
    },
    {
      name: 'Right Radial Nerve',
      points: [
        new THREE.Vector3(-0.04, 0.45, -0.01),
        new THREE.Vector3(-0.12, 0.40, -0.02),
        new THREE.Vector3(-0.20, 0.32, -0.02),
        new THREE.Vector3(-0.24, 0.18, -0.01),
        new THREE.Vector3(-0.26, 0.02, 0.02),
        new THREE.Vector3(-0.28, -0.14, 0.03)
      ]
    },
    // Median Nerves (Left & Right)
    {
      name: 'Left Median Nerve',
      points: [
        new THREE.Vector3(0.06, 0.42, 0.01),
        new THREE.Vector3(0.15, 0.34, 0.01),
        new THREE.Vector3(0.21, 0.18, 0.01),
        new THREE.Vector3(0.25, 0.02, 0.01),
        new THREE.Vector3(0.27, -0.16, 0.01)
      ]
    },
    {
      name: 'Right Median Nerve',
      points: [
        new THREE.Vector3(-0.06, 0.42, 0.01),
        new THREE.Vector3(-0.15, 0.34, 0.01),
        new THREE.Vector3(-0.21, 0.18, 0.01),
        new THREE.Vector3(-0.25, 0.02, 0.01),
        new THREE.Vector3(-0.27, -0.16, 0.01)
      ]
    },
    // Ulnar Nerves (Left & Right)
    {
      name: 'Left Ulnar Nerve',
      points: [
        new THREE.Vector3(0.05, 0.40, 0.0),
        new THREE.Vector3(0.14, 0.32, -0.02),
        new THREE.Vector3(0.19, 0.16, -0.02),
        new THREE.Vector3(0.23, -0.02, -0.01),
        new THREE.Vector3(0.25, -0.16, 0.0)
      ]
    },
    {
      name: 'Right Ulnar Nerve',
      points: [
        new THREE.Vector3(-0.05, 0.40, 0.0),
        new THREE.Vector3(-0.14, 0.32, -0.02),
        new THREE.Vector3(-0.19, 0.16, -0.02),
        new THREE.Vector3(-0.23, -0.02, -0.01),
        new THREE.Vector3(-0.25, -0.16, 0.0)
      ]
    },
    // Brain neural sphere (inside cranial vault)
    {
      isBrain: true,
      name: 'Brain (Cerebrum & Cerebellum)',
      center: new THREE.Vector3(0, 0.68, -0.02)
    }
  ];

  const nerveMat = new THREE.MeshStandardMaterial({
    color: NERVE_COLOR,
    roughness: 0.2,
    metalness: 0.15,
    emissive: 0xb45309,
    emissiveIntensity: 0.4
  });

  nervePaths.forEach((item) => {
    let mesh;
    let worldCenter;

    if (item.isBrain) {
      const geo = new THREE.SphereGeometry(0.075, 24, 24);
      geo.scale(1.0, 1.25, 1.35);
      mesh = new THREE.Mesh(geo, nerveMat.clone());
      mesh.position.copy(item.center);
      worldCenter = item.center.clone();
    } else {
      const curve = new THREE.CatmullRomCurve3(item.points);
      const geo = new THREE.TubeGeometry(curve, 32, 0.007, 8, false);
      mesh = new THREE.Mesh(geo, nerveMat.clone());
      worldCenter = item.points[Math.floor(item.points.length / 2)].clone();
    }

    mesh.name = item.name;
    const info = getAnatomyData(item.name, 'Nerve');

    const explodeDir = new THREE.Vector3(worldCenter.x, 0, worldCenter.z);
    if (explodeDir.length() < 0.04) {
      explodeDir.set(0, 0.1, 0.4);
    } else {
      explodeDir.normalize();
      explodeDir.z += 0.35;
      explodeDir.normalize();
    }

    mesh.userData = {
      system: 'nerve',
      rawName: item.name,
      info,
      worldCenter,
      explodeDir,
      originalPosition: mesh.position.clone(),
      currentPopOffset: new THREE.Vector3(0, 0, 0),
      baseMaterial: mesh.material
    };

    nerveGroup.add(mesh);
    STATE.nerveMeshes.push(mesh);
    STATE.meshMap.set(item.name.toLowerCase(), mesh);
  });

  const nerveCount = document.getElementById('nerve-count-badge');
  if (nerveCount) nerveCount.textContent = `${STATE.nerveMeshes.length}`;
}

function refreshAllMeshesList() {
  STATE.allMeshes = [];
  if (STATE.systems.skeleton) STATE.allMeshes.push(...STATE.skeletonMeshes);
  if (STATE.systems.muscle) STATE.allMeshes.push(...STATE.muscleMeshes);
  if (STATE.systems.nerve) STATE.allMeshes.push(...STATE.nerveMeshes);
}

function animateEntrance() {
  gsap.from(camera.position, {
    x: 0,
    y: 0.5,
    z: 4.5,
    duration: 1.8,
    ease: 'power3.out'
  });
}

// Start loading
loadAnatomicalSystems();

/* ==========================================================================
   RAYCASTING & INTERACTION (ACROSS ALL 400+ ACTIVE PARTS)
   ========================================================================== */

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-999, -999);
const tooltip = document.getElementById('hover-tooltip');
const tooltipBadge = document.getElementById('tooltip-badge');
const tooltipTitle = document.getElementById('tooltip-title');
const tooltipSub = document.getElementById('tooltip-sub');
const tooltipDot = document.getElementById('tooltip-dot');

let isMouseDown = false;
let mouseDownPos = { x: 0, y: 0 };

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerdown', (e) => {
  isMouseDown = true;
  mouseDownPos = { x: e.clientX, y: e.clientY };
});
window.addEventListener('pointerup', onPointerUp);

function onPointerMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  if (tooltip && !tooltip.classList.contains('hidden')) {
    tooltip.style.left = `${event.clientX}px`;
    tooltip.style.top = `${event.clientY}px`;
  }

  checkHover();
}

function checkHover() {
  if (STATE.allMeshes.length === 0 || STATE.isTransitioningCamera) return;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(STATE.allMeshes, false);

  if (intersects.length > 0) {
    const hitMesh = intersects[0].object;

    if (STATE.hoveredPart !== hitMesh) {
      unhoverPart(STATE.hoveredPart);
      STATE.hoveredPart = hitMesh;
      hoverPart(hitMesh);
    }
  } else {
    if (STATE.hoveredPart) {
      unhoverPart(STATE.hoveredPart);
      STATE.hoveredPart = null;
    }
    hideTooltip();
  }
}

function hoverPart(mesh) {
  if (!mesh || mesh === STATE.selectedPart) return;

  document.body.style.cursor = 'pointer';
  sounds.playHover();

  if (mesh.material && mesh.material.emissive) {
    if (mesh.userData.system === 'muscle') {
      mesh.material.emissive.setHex(0x0ea5e9); // Electric Blue highlight
      mesh.material.emissiveIntensity = 0.85;
    } else if (mesh.userData.system === 'nerve') {
      mesh.material.emissive.setHex(0xfef08a);
      mesh.material.emissiveIntensity = 0.8;
    } else {
      mesh.material.emissive.setHex(0x38bdf8);
      mesh.material.emissiveIntensity = 0.5;
    }
  }

  showTooltip(mesh);
}

function unhoverPart(mesh) {
  if (!mesh || mesh === STATE.selectedPart) return;

  document.body.style.cursor = 'default';
  if (mesh.material && mesh.material.emissive) {
    if (mesh.userData.system === 'nerve') {
      mesh.material.emissive.setHex(0xb45309);
      mesh.material.emissiveIntensity = 0.4;
    } else {
      mesh.material.emissive.setHex(0x000000);
      mesh.material.emissiveIntensity = 0;
    }
  }
}

function showTooltip(mesh) {
  if (!tooltip || !mesh.userData.info) return;

  const info = mesh.userData.info;
  const sys = mesh.userData.system;

  tooltipTitle.textContent = info.title;
  tooltipSub.textContent = info.classification || `${info.system} • Click to extract`;

  if (sys === 'muscle') {
    tooltipBadge.textContent = 'MUSCLE';
    tooltipBadge.style.color = '#38bdf8';
    tooltipBadge.style.borderColor = '#38bdf8';
    tooltipDot.style.background = '#0ea5e9';
  } else if (sys === 'nerve') {
    tooltipBadge.textContent = 'NERVE';
    tooltipBadge.style.color = '#fde047';
    tooltipBadge.style.borderColor = '#fde047';
    tooltipDot.style.background = '#fbbf24';
  } else {
    tooltipBadge.textContent = 'SKELETON';
    tooltipBadge.style.color = '#38bdf8';
    tooltipBadge.style.borderColor = '#38bdf8';
    tooltipDot.style.background = '#38bdf8';
  }

  tooltip.classList.remove('hidden');
}

function hideTooltip() {
  if (tooltip) tooltip.classList.add('hidden');
}

function onPointerUp(event) {
  const dist = Math.hypot(event.clientX - mouseDownPos.x, event.clientY - mouseDownPos.y);
  isMouseDown = false;

  if (dist > 6) return;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(STATE.allMeshes, false);

  if (intersects.length > 0) {
    const clickedMesh = intersects[0].object;
    selectAnatomicalPart(clickedMesh);
  } else {
    if (STATE.selectedPart && event.target.id === 'webgl-canvas') {
      returnSelectedPart();
    }
  }
}

/* ==========================================================================
   PART EXTRACTION ("COMES OUT") & SELECTION
   ========================================================================== */

export function selectAnatomicalPart(mesh, shouldFrameCamera = true) {
  if (!mesh) return;

  if (STATE.selectedPart === mesh) {
    sounds.playSelect();
    pulsePart(mesh);
    return;
  }

  if (STATE.selectedPart) {
    returnPartMesh(STATE.selectedPart);
  }

  STATE.selectedPart = mesh;
  sounds.playSelect();

  // 1. "COMES OUT" ANIMATION:
  const popDistance = 0.28;
  const popOffset = mesh.userData.explodeDir.clone().multiplyScalar(popDistance);
  mesh.userData.currentPopOffset.copy(popOffset);

  gsap.killTweensOf(mesh.position);
  gsap.to(mesh.position, {
    x: mesh.userData.originalPosition.x + popOffset.x,
    y: mesh.userData.originalPosition.y + popOffset.y,
    z: mesh.userData.originalPosition.z + popOffset.z,
    duration: 0.75,
    ease: 'back.out(1.6)'
  });

  // 2. DIM OTHER PARTS
  updatePartsDimming();

  // 3. FRAME CAMERA
  if (shouldFrameCamera) {
    frameCameraOnPart(mesh);
  }

  // 4. DISPLAY RICH INFORMATION
  displayPartInfo(mesh.userData.info, mesh.userData.system);

  hideTooltip();
}

function pulsePart(mesh) {
  gsap.to(mesh.scale, {
    x: 1.08,
    y: 1.08,
    z: 1.08,
    duration: 0.15,
    yoyo: true,
    repeat: 1,
    ease: 'power2.out'
  });
}

export function returnSelectedPart() {
  if (!STATE.selectedPart) return;

  sounds.playReset();
  returnPartMesh(STATE.selectedPart);
  STATE.selectedPart = null;
  STATE.isIsolated = false;

  restoreAllPartsAppearance();
  hideInfoPanel();

  gsap.to(controls.target, {
    x: 0,
    y: 0,
    z: 0,
    duration: 0.8,
    ease: 'power2.out'
  });
}

function returnPartMesh(mesh) {
  gsap.killTweensOf(mesh.position);
  gsap.to(mesh.position, {
    x: mesh.userData.originalPosition.x,
    y: mesh.userData.originalPosition.y,
    z: mesh.userData.originalPosition.z,
    duration: 0.6,
    ease: 'power2.inOut'
  });
  mesh.userData.currentPopOffset.set(0, 0, 0);
}

function updatePartsDimming() {
  STATE.allMeshes.forEach((mesh) => {
    if (mesh === STATE.selectedPart) {
      mesh.visible = true;
      mesh.material.transparent = false;
      mesh.material.opacity = 1.0;
      if (mesh.material.emissive) {
        if (mesh.userData.system === 'muscle') {
          mesh.material.emissive.setHex(0x0ea5e9); // Vibrant Electric Blue highlight
          mesh.material.emissiveIntensity = 0.9;
        } else if (mesh.userData.system === 'nerve') {
          mesh.material.emissive.setHex(0xfde047);
          mesh.material.emissiveIntensity = 0.9;
        } else {
          mesh.material.emissive.setHex(0x0ea5e9);
          mesh.material.emissiveIntensity = 0.5;
        }
      }
    } else {
      if (STATE.isIsolated) {
        mesh.visible = false;
      } else {
        mesh.visible = true;
        mesh.material.transparent = true;
        gsap.to(mesh.material, {
          opacity: 0.18,
          duration: 0.4,
          ease: 'power2.out'
        });
        if (mesh.material.emissive) {
          mesh.material.emissive.setHex(0x000000);
          mesh.material.emissiveIntensity = 0;
        }
      }
    }
  });
}

function restoreAllPartsAppearance() {
  STATE.allMeshes.forEach((mesh) => {
    mesh.visible = true;
    gsap.killTweensOf(mesh.material);
    mesh.material.transparent = (STATE.shadingMode === 'ghost' || STATE.shadingMode === 'xray');
    gsap.to(mesh.material, {
      opacity: (STATE.shadingMode === 'ghost' ? 0.3 : (STATE.shadingMode === 'xray' ? 0.55 : 1.0)),
      duration: 0.5,
      ease: 'power2.out'
    });
    if (mesh.material.emissive) {
      if (mesh.userData.system === 'nerve') {
        mesh.material.emissive.setHex(0xb45309);
        mesh.material.emissiveIntensity = 0.4;
      } else {
        mesh.material.emissive.setHex(0x000000);
        mesh.material.emissiveIntensity = 0;
      }
    }
  });

  const isolateBtn = document.getElementById('isolate-bone-btn');
  if (isolateBtn) {
    isolateBtn.classList.remove('active');
    document.getElementById('isolate-text').textContent = 'Isolate Part';
  }
}

/* ==========================================================================
   ADAPTIVE CAMERA FRAMING
   ========================================================================== */

function frameCameraOnPart(mesh) {
  STATE.isTransitioningCamera = true;

  const targetWorldPos = mesh.userData.worldCenter.clone().add(mesh.userData.currentPopOffset);

  mesh.geometry.computeBoundingBox();
  const box = new THREE.Box3();
  box.copy(mesh.geometry.boundingBox).applyMatrix4(mesh.matrixWorld);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z);

  const frameDistance = Math.min(Math.max(maxDim * 2.2, 0.45), 1.25);
  const camDir = camera.position.clone().sub(controls.target).normalize();

  const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
  const sideOffset = (window.innerWidth > 900) ? (frameDistance * 0.22) : 0;

  const targetLookAt = targetWorldPos.clone().add(camRight.clone().multiplyScalar(sideOffset));
  const targetCamPos = targetWorldPos.clone()
    .add(camDir.multiplyScalar(frameDistance))
    .add(camRight.clone().multiplyScalar(sideOffset));

  gsap.to(controls.target, {
    x: targetLookAt.x,
    y: targetLookAt.y,
    z: targetLookAt.z,
    duration: 0.85,
    ease: 'power2.out'
  });

  gsap.to(camera.position, {
    x: targetCamPos.x,
    y: targetCamPos.y,
    z: targetCamPos.z,
    duration: 0.85,
    ease: 'power2.out',
    onComplete: () => {
      STATE.isTransitioningCamera = false;
    }
  });
}

/* ==========================================================================
   ANATOMICAL INFORMATION PANEL
   ========================================================================== */

const infoPanel = document.getElementById('info-panel');
const boneTitle = document.getElementById('bone-title');
const boneLatin = document.getElementById('bone-latin');
const systemBadge = document.getElementById('panel-system-badge');
const classificationBadge = document.getElementById('panel-classification-badge');
const breadcrumbText = document.getElementById('panel-breadcrumb-text');
const boneDesc = document.getElementById('bone-desc');
const boneFunc = document.getElementById('bone-func');
const boneArtic = document.getElementById('bone-artic');
const boneClin = document.getElementById('bone-clin');
const boneTrivia = document.getElementById('bone-trivia');
const boneIndexTag = document.getElementById('bone-index-tag');

const funcSectionTitle = document.getElementById('func-section-title');
const connSectionTitle = document.getElementById('conn-section-title');

function displayPartInfo(info, system) {
  if (!infoPanel || !info) return;

  boneTitle.textContent = info.title;
  boneLatin.textContent = info.latin;

  if (breadcrumbText) {
    breadcrumbText.textContent = info.classification || `${info.system} → ${info.title}`;
  }

  if (system === 'muscle') {
    systemBadge.textContent = '💪 MUSCULAR SYSTEM';
    systemBadge.style.color = '#38bdf8';
    systemBadge.style.borderColor = '#38bdf8';
    classificationBadge.textContent = 'MUSCLE';
    classificationBadge.style.color = '#38bdf8';
    classificationBadge.style.borderColor = '#38bdf8';
    funcSectionTitle.textContent = 'Action & Biomechanical Movements';
    connSectionTitle.textContent = 'Origin & Insertion Attachments';
  } else if (system === 'nerve') {
    systemBadge.textContent = '⚡ NERVOUS SYSTEM';
    systemBadge.style.color = '#fde047';
    systemBadge.style.borderColor = '#fde047';
    classificationBadge.textContent = 'NEURAL';
    funcSectionTitle.textContent = 'Motor & Sensory Conduction';
    connSectionTitle.textContent = 'Neural Course & Innervation';
  } else {
    systemBadge.textContent = '🦴 SKELETAL SYSTEM';
    systemBadge.style.color = '#38bdf8';
    systemBadge.style.borderColor = '#38bdf8';
    classificationBadge.textContent = 'BONE';
    funcSectionTitle.textContent = 'Primary Function & Mechanics';
    connSectionTitle.textContent = 'Articulations & Joint Connections';
  }

  boneDesc.textContent = info.description;
  boneFunc.textContent = info.function;
  boneArtic.textContent = info.connections;
  boneClin.textContent = info.clinical;
  boneTrivia.textContent = info.trivia;

  const currentIndex = STATE.allMeshes.indexOf(STATE.selectedPart) + 1;
  if (boneIndexTag) {
    boneIndexTag.textContent = `Part ${currentIndex} of ${STATE.allMeshes.length}`;
  }

  infoPanel.classList.remove('hidden');
}

function hideInfoPanel() {
  if (infoPanel) infoPanel.classList.add('hidden');
}

/* ==========================================================================
   MULTI-SYSTEM TOGGLE BUTTONS
   ========================================================================== */

const toggleSkelBtn = document.getElementById('toggle-skeleton-btn');
const toggleMusBtn = document.getElementById('toggle-muscle-btn');
const toggleNerveBtn = document.getElementById('toggle-nerve-btn');

function setupSystemToggle(btn, systemKey, group) {
  if (!btn) return;
  btn.addEventListener('click', () => {
    STATE.systems[systemKey] = !STATE.systems[systemKey];
    btn.classList.toggle('active', STATE.systems[systemKey]);
    group.visible = STATE.systems[systemKey];
    sounds.playWhoosh();

    if (STATE.selectedPart && STATE.selectedPart.userData.system === systemKey && !STATE.systems[systemKey]) {
      returnSelectedPart();
    }

    refreshAllMeshesList();
  });
}

setupSystemToggle(toggleSkelBtn, 'skeleton', skeletonGroup);
setupSystemToggle(toggleMusBtn, 'muscle', muscleGroup);
setupSystemToggle(toggleNerveBtn, 'nerve', nerveGroup);

/* ==========================================================================
   EXPLODED VIEW SLIDER (WORKS ACROSS ALL VISIBLE SYSTEMS)
   ========================================================================== */

const explodeSlider = document.getElementById('explode-slider');
const explodeVal = document.getElementById('explode-val');

if (explodeSlider) {
  explodeSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    STATE.explodeFactor = val / 100;
    if (explodeVal) explodeVal.textContent = `${val}%`;
    applyExplosion(STATE.explodeFactor);
  });
}

function applyExplosion(factor) {
  const maxDisplacement = 0.85;

  STATE.allMeshes.forEach((mesh) => {
    if (mesh === STATE.selectedPart) return;

    const targetPos = mesh.userData.originalPosition.clone().add(
      mesh.userData.explodeDir.clone().multiplyScalar(factor * maxDisplacement)
    );
    mesh.position.copy(targetPos);
  });
}

/* ==========================================================================
   SHADING & MATERIAL MODES
   ========================================================================== */

const materialModeSelect = document.getElementById('material-mode-select');

if (materialModeSelect) {
  materialModeSelect.addEventListener('change', (e) => {
    setShadingMode(e.target.value);
  });
}

function setShadingMode(mode) {
  STATE.shadingMode = mode;
  sounds.playWhoosh();

  STATE.allMeshes.forEach((mesh) => {
    const isSelected = (mesh === STATE.selectedPart);
    const sys = mesh.userData.system;

    switch (mode) {
      case 'realistic':
        if (sys === 'muscle') {
          if (mesh.userData.originalColor) {
            mesh.material.color.copy(mesh.userData.originalColor);
          }
        } else if (sys === 'nerve') {
          mesh.material.color.setHex(NERVE_COLOR);
        } else {
          mesh.material.color.setHex(SKELETON_COLOR);
        }

        mesh.material.roughness = (sys === 'nerve' ? 0.2 : (sys === 'muscle' ? 0.6 : 0.44));
        mesh.material.metalness = (sys === 'muscle' ? 0.0 : 0.08);
        mesh.material.transparent = isSelected ? false : (STATE.selectedPart ? true : false);
        mesh.material.opacity = isSelected ? 1.0 : (STATE.selectedPart ? 0.2 : 1.0);
        break;

      case 'systems':
        if (sys === 'muscle') mesh.material.color.setHex(0x38bdf8); // Blue
        else if (sys === 'nerve') mesh.material.color.setHex(0xfbbf24);
        else mesh.material.color.setHex(0xe2e8f0);

        mesh.material.transparent = isSelected ? false : (STATE.selectedPart ? true : false);
        mesh.material.opacity = isSelected ? 1.0 : (STATE.selectedPart ? 0.2 : 1.0);
        break;

      case 'xray':
        mesh.material.color.setHex(sys === 'nerve' ? 0xfacc15 : 0x38bdf8);
        mesh.material.transparent = true;
        mesh.material.opacity = isSelected ? 0.95 : (STATE.selectedPart ? 0.15 : 0.55);
        if (mesh.material.emissive) {
          mesh.material.emissive.setHex(sys === 'nerve' ? 0xb45309 : 0x0284c7);
          mesh.material.emissiveIntensity = 0.45;
        }
        break;

      case 'ghost':
        mesh.material.color.setHex(0xe2e8f0);
        mesh.material.transparent = true;
        mesh.material.opacity = isSelected ? 0.95 : (STATE.selectedPart ? 0.1 : 0.28);
        break;
    }
  });
}

/* ==========================================================================
   UNIFIED SEARCH ACROSS ALL 400+ BONES, MUSCLES & NERVES
   ========================================================================== */

const searchInput = document.getElementById('bone-search-input');
const searchDropdown = document.getElementById('search-dropdown');
const searchClearBtn = document.getElementById('search-clear-btn');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length > 0) {
      searchClearBtn.classList.remove('hidden');
      performSearch(q);
    } else {
      searchClearBtn.classList.add('hidden');
      closeSearch();
    }
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length > 0) {
      performSearch(searchInput.value.trim().toLowerCase());
    }
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.classList.add('hidden');
    closeSearch();
  });
}

function performSearch(query) {
  // Search across all meshes in memory
  const matches = [];

  for (const [key, mesh] of STATE.meshMap.entries()) {
    const info = mesh.userData.info;
    if (
      info.title.toLowerCase().includes(query) ||
      info.latin.toLowerCase().includes(query) ||
      info.classification.toLowerCase().includes(query) ||
      key.includes(query)
    ) {
      matches.push(mesh);
      if (matches.length >= 10) break;
    }
  }

  if (matches.length === 0) {
    searchDropdown.innerHTML = `<div class="search-item" style="color: #64748b; font-size: 12px; cursor: default;">No matching anatomical parts found</div>`;
    searchDropdown.classList.remove('hidden');
    return;
  }

  searchDropdown.innerHTML = matches.map((mesh) => {
    const info = mesh.userData.info;
    const sys = mesh.userData.system;
    const sysIcon = sys === 'muscle' ? '💪' : (sys === 'nerve' ? '⚡' : '🦴');
    const classParts = info.classification.split('→').map(p => p.trim());
    const regionText = classParts[1] || info.system;

    return `
      <div class="search-item" data-key="${mesh.name.toLowerCase()}">
        <div class="search-item-left">
          <span class="search-item-system ${sys}">${sysIcon} ${sys.toUpperCase()}</span>
          <span class="search-item-title">${info.title}</span>
        </div>
        <span class="search-item-cat">${regionText}</span>
      </div>
    `;
  }).join('');

  searchDropdown.querySelectorAll('.search-item').forEach((item) => {
    item.addEventListener('click', () => {
      const key = item.dataset.key;
      const targetMesh = STATE.meshMap.get(key);
      if (targetMesh) {
        // Ensure its system is visible
        const sys = targetMesh.userData.system;
        if (!STATE.systems[sys]) {
          STATE.systems[sys] = true;
          if (sys === 'skeleton') toggleSkelBtn?.classList.add('active');
          if (sys === 'muscle') toggleMusBtn?.classList.add('active');
          if (sys === 'nerve') toggleNerveBtn?.classList.add('active');
          if (sys === 'skeleton') skeletonGroup.visible = true;
          if (sys === 'muscle') muscleGroup.visible = true;
          if (sys === 'nerve') nerveGroup.visible = true;
          refreshAllMeshesList();
        }

        selectAnatomicalPart(targetMesh, true);
        if (searchInput) searchInput.value = '';
        if (searchClearBtn) searchClearBtn.classList.add('hidden');
        closeSearch();
      }
    });
  });

  searchDropdown.classList.remove('hidden');
}

function closeSearch() {
  if (searchDropdown) searchDropdown.classList.add('hidden');
}

window.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) {
    closeSearch();
  }
});

/* ==========================================================================
   REGION FILTER CHIPS
   ========================================================================== */

const regionChips = document.querySelectorAll('.chip');

regionChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    regionChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const region = chip.dataset.region;
    STATE.activeRegion = region;
    sounds.playWhoosh();

    if (region === 'all') {
      restoreAllPartsAppearance();
      if (STATE.selectedPart) returnSelectedPart();
    } else {
      highlightRegion(region);
    }
  });
});

function highlightRegion(regionId) {
  let matchedFirst = null;

  STATE.allMeshes.forEach((mesh) => {
    const classStr = mesh.userData.info.classification.toLowerCase();
    const titleStr = mesh.userData.info.title.toLowerCase();

    let matches = false;
    if (regionId === 'head' && (classStr.includes('skull') || classStr.includes('cervical') || classStr.includes('neck') || classStr.includes('brain') || titleStr.includes('cranial'))) matches = true;
    else if (regionId === 'thorax' && (classStr.includes('rib') || classStr.includes('thoracic') || classStr.includes('chest') || classStr.includes('pector') || classStr.includes('cord'))) matches = true;
    else if (regionId === 'shoulder' && (classStr.includes('shoulder') || classStr.includes('arm') || classStr.includes('forearm') || classStr.includes('hand') || classStr.includes('radial') || classStr.includes('brachial'))) matches = true;
    else if (regionId === 'pelvis' && (classStr.includes('pelvis') || classStr.includes('lumbar') || classStr.includes('abdomen') || classStr.includes('trunk') || classStr.includes('gluteal'))) matches = true;
    else if (regionId === 'leg' && (classStr.includes('thigh') || classStr.includes('knee') || classStr.includes('lower leg') || classStr.includes('foot') || classStr.includes('sciatic') || classStr.includes('femoral'))) matches = true;

    if (matches) {
      mesh.visible = true;
      mesh.material.transparent = false;
      mesh.material.opacity = 1.0;
      if (!matchedFirst) matchedFirst = mesh;
    } else {
      mesh.visible = true;
      mesh.material.transparent = true;
      mesh.material.opacity = 0.12;
    }
  });

  if (matchedFirst) {
    selectAnatomicalPart(matchedFirst, true);
  }
}

/* ==========================================================================
   CAMERA VIEW PRESETS
   ========================================================================== */

const presetBtns = document.querySelectorAll('.preset-btn');

presetBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyCameraPreset(btn.dataset.view);
  });
});

function applyCameraPreset(view) {
  sounds.playWhoosh();
  STATE.isTransitioningCamera = true;

  let targetPos = new THREE.Vector3(0, 0.15, 2.6);
  let lookAtPos = new THREE.Vector3(0, 0, 0);

  switch (view) {
    case 'front':
      targetPos.set(0, 0.05, 2.6);
      lookAtPos.set(0, 0, 0);
      break;
    case 'back':
      targetPos.set(0, 0.05, -2.6);
      lookAtPos.set(0, 0, 0);
      break;
    case 'left':
      targetPos.set(-2.6, 0.05, 0);
      lookAtPos.set(0, 0, 0);
      break;
    case 'right':
      targetPos.set(2.6, 0.05, 0);
      lookAtPos.set(0, 0, 0);
      break;
    case 'skull':
      targetPos.set(0, 0.68, 0.95);
      lookAtPos.set(0, 0.65, 0);
      break;
    case 'torso':
      targetPos.set(0, 0.25, 1.4);
      lookAtPos.set(0, 0.25, 0);
      break;
    case 'pelvis':
      targetPos.set(0, -0.15, 1.3);
      lookAtPos.set(0, -0.15, 0);
      break;
    case 'full':
      targetPos.set(0, 0.15, 2.6);
      lookAtPos.set(0, 0, 0);
      break;
  }

  gsap.to(camera.position, {
    x: targetPos.x,
    y: targetPos.y,
    z: targetPos.z,
    duration: 1.0,
    ease: 'power2.inOut',
    onComplete: () => {
      STATE.isTransitioningCamera = false;
    }
  });

  gsap.to(controls.target, {
    x: lookAtPos.x,
    y: lookAtPos.y,
    z: lookAtPos.z,
    duration: 1.0,
    ease: 'power2.inOut'
  });
}

/* ==========================================================================
   BUTTON HANDLERS (RETURN, ISOLATE, AUDIO, PREV/NEXT)
   ========================================================================== */

const panelCloseBtn = document.getElementById('panel-close-btn');
const returnBoneBtn = document.getElementById('return-bone-btn');
const isolateBoneBtn = document.getElementById('isolate-bone-btn');
const speechBoneBtn = document.getElementById('speech-bone-btn');
const prevBoneBtn = document.getElementById('prev-bone-btn');
const nextBoneBtn = document.getElementById('next-bone-btn');
const resetAllBtn = document.getElementById('reset-all-btn');
const audioToggleBtn = document.getElementById('audio-toggle-btn');
const audioOnIcon = document.getElementById('audio-on-icon');
const audioOffIcon = document.getElementById('audio-off-icon');

if (panelCloseBtn) panelCloseBtn.addEventListener('click', returnSelectedPart);
if (returnBoneBtn) returnBoneBtn.addEventListener('click', returnSelectedPart);

if (isolateBoneBtn) {
  isolateBoneBtn.addEventListener('click', () => {
    if (!STATE.selectedPart) return;
    STATE.isIsolated = !STATE.isIsolated;
    sounds.playSelect();

    isolateBoneBtn.classList.toggle('active', STATE.isIsolated);
    document.getElementById('isolate-text').textContent = STATE.isIsolated ? 'Show All' : 'Isolate Part';
    updatePartsDimming();
  });
}

if (speechBoneBtn) {
  speechBoneBtn.addEventListener('click', () => {
    if (!STATE.selectedPart || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const info = STATE.selectedPart.userData.info;
    const utterance = new SpeechSynthesisUtterance(
      `${info.title}. ${info.latin}. Classified under ${info.classification}. ${info.description}`
    );
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  });
}

if (prevBoneBtn) {
  prevBoneBtn.addEventListener('click', () => {
    if (STATE.allMeshes.length === 0) return;
    let idx = STATE.allMeshes.indexOf(STATE.selectedPart);
    idx = (idx - 1 + STATE.allMeshes.length) % STATE.allMeshes.length;
    selectAnatomicalPart(STATE.allMeshes[idx], true);
  });
}

if (nextBoneBtn) {
  nextBoneBtn.addEventListener('click', () => {
    if (STATE.allMeshes.length === 0) return;
    let idx = STATE.allMeshes.indexOf(STATE.selectedPart);
    idx = (idx + 1) % STATE.allMeshes.length;
    selectAnatomicalPart(STATE.allMeshes[idx], true);
  });
}

if (resetAllBtn) {
  resetAllBtn.addEventListener('click', () => {
    if (explodeSlider) {
      explodeSlider.value = 0;
      if (explodeVal) explodeVal.textContent = '0%';
      applyExplosion(0);
    }
    returnSelectedPart();
    applyCameraPreset('front');
  });
}

if (audioToggleBtn) {
  audioToggleBtn.addEventListener('click', () => {
    const isMuted = sounds.toggleMute();
    audioOnIcon.classList.toggle('hidden', isMuted);
    audioOffIcon.classList.toggle('hidden', !isMuted);
  });
}

// Help Modal
const helpBtn = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const gotItBtn = document.getElementById('got-it-btn');

if (helpBtn && helpModal) {
  helpBtn.addEventListener('click', () => helpModal.classList.remove('hidden'));
}
if (closeModalBtn && helpModal) {
  closeModalBtn.addEventListener('click', () => helpModal.classList.add('hidden'));
}
if (gotItBtn && helpModal) {
  gotItBtn.addEventListener('click', () => helpModal.classList.add('hidden'));
}

/* ==========================================================================
   RENDER LOOP & RESIZE
   ========================================================================== */

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  // Subtle breathing rotation when idle
  if (!isMouseDown && !STATE.selectedPart && STATE.explodeFactor === 0) {
    humanBodyRoot.rotation.y += 0.0006;
    discMesh.rotation.z += 0.0006;
  }

  renderer.render(scene, camera);
}

animate();
