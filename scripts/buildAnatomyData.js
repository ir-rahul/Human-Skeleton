// Script to generate src/anatomyData.js from Skeleton.txt, Muscle.txt, and Nervous System data
import fs from 'fs';

const skelRaw = fs.readFileSync('Skeleton.txt', 'utf8').split('\n').filter(Boolean).slice(1);
const musRaw = fs.readFileSync('Muscle.txt', 'utf8').split('\n').filter(Boolean).slice(1);

const skelList = [];
for (const line of skelRaw) {
  const parts = line.split('\t').map(s => s.trim());
  if (parts.length >= 2) {
    skelList.push({ name: parts[0], classification: parts[1], system: 'Skeleton' });
  }
}

const musList = [];
for (const line of musRaw) {
  const parts = line.split('\t').map(s => s.trim());
  if (parts.length >= 2) {
    musList.push({ name: parts[0], classification: parts[1], system: 'Muscle' });
  }
}

const nerveList = [
  { name: 'Brain (Cerebrum & Cerebellum)', classification: 'Nerve → Central Nervous System → Brain', system: 'Nerve' },
  { name: 'Cervical Spinal Cord (C1-C8)', classification: 'Nerve → Central Nervous System → Spinal Cord → Cervical', system: 'Nerve' },
  { name: 'Thoracic Spinal Cord (T1-T12)', classification: 'Nerve → Central Nervous System → Spinal Cord → Thoracic', system: 'Nerve' },
  { name: 'Lumbar Spinal Cord (L1-L5)', classification: 'Nerve → Central Nervous System → Spinal Cord → Lumbar', system: 'Nerve' },
  { name: 'Sacral Spinal Cord & Cauda Equina', classification: 'Nerve → Central Nervous System → Spinal Cord → Sacral', system: 'Nerve' },
  { name: 'Optic Nerve (CN II)', classification: 'Nerve → Cranial Nerves → CN II → Optic', system: 'Nerve' },
  { name: 'Oculomotor Nerve (CN III)', classification: 'Nerve → Cranial Nerves → CN III → Oculomotor', system: 'Nerve' },
  { name: 'Trigeminal Nerve (CN V)', classification: 'Nerve → Cranial Nerves → CN V → Trigeminal', system: 'Nerve' },
  { name: 'Facial Nerve (CN VII)', classification: 'Nerve → Cranial Nerves → CN VII → Facial', system: 'Nerve' },
  { name: 'Vagus Nerve (CN X)', classification: 'Nerve → Cranial Nerves → CN X → Vagus', system: 'Nerve' },
  { name: 'Phrenic Nerve', classification: 'Nerve → Cervical Plexus → Phrenic nerve (Diaphragm)', system: 'Nerve' },
  { name: 'Left Brachial Plexus', classification: 'Nerve → Peripheral → Upper Limb → Left → Brachial Plexus', system: 'Nerve' },
  { name: 'Right Brachial Plexus', classification: 'Nerve → Peripheral → Upper Limb → Right → Brachial Plexus', system: 'Nerve' },
  { name: 'Left Musculocutaneous Nerve', classification: 'Nerve → Peripheral → Upper Limb → Left → Musculocutaneous', system: 'Nerve' },
  { name: 'Right Musculocutaneous Nerve', classification: 'Nerve → Peripheral → Upper Limb → Right → Musculocutaneous', system: 'Nerve' },
  { name: 'Left Axillary Nerve', classification: 'Nerve → Peripheral → Upper Limb → Left → Axillary nerve', system: 'Nerve' },
  { name: 'Right Axillary Nerve', classification: 'Nerve → Peripheral → Upper Limb → Right → Axillary nerve', system: 'Nerve' },
  { name: 'Left Radial Nerve', classification: 'Nerve → Peripheral → Upper Limb → Left → Radial nerve', system: 'Nerve' },
  { name: 'Right Radial Nerve', classification: 'Nerve → Peripheral → Upper Limb → Right → Radial nerve', system: 'Nerve' },
  { name: 'Left Median Nerve', classification: 'Nerve → Peripheral → Upper Limb → Left → Median nerve', system: 'Nerve' },
  { name: 'Right Median Nerve', classification: 'Nerve → Peripheral → Upper Limb → Right → Median nerve', system: 'Nerve' },
  { name: 'Left Ulnar Nerve', classification: 'Nerve → Peripheral → Upper Limb → Left → Ulnar nerve', system: 'Nerve' },
  { name: 'Right Ulnar Nerve', classification: 'Nerve → Peripheral → Upper Limb → Right → Ulnar nerve', system: 'Nerve' },
  { name: 'Left Femoral Nerve', classification: 'Nerve → Peripheral → Lower Limb → Left → Femoral nerve', system: 'Nerve' },
  { name: 'Right Femoral Nerve', classification: 'Nerve → Peripheral → Lower Limb → Right → Femoral nerve', system: 'Nerve' },
  { name: 'Left Obturator Nerve', classification: 'Nerve → Peripheral → Lower Limb → Left → Obturator nerve', system: 'Nerve' },
  { name: 'Right Obturator Nerve', classification: 'Nerve → Peripheral → Lower Limb → Right → Obturator nerve', system: 'Nerve' },
  { name: 'Left Sciatic Nerve', classification: 'Nerve → Peripheral → Lower Limb → Left → Sciatic nerve', system: 'Nerve' },
  { name: 'Right Sciatic Nerve', classification: 'Nerve → Peripheral → Lower Limb → Right → Sciatic nerve', system: 'Nerve' },
  { name: 'Left Common Fibular (Peroneal) Nerve', classification: 'Nerve → Peripheral → Lower Limb → Left → Common Fibular', system: 'Nerve' },
  { name: 'Right Common Fibular (Peroneal) Nerve', classification: 'Nerve → Peripheral → Lower Limb → Right → Common Fibular', system: 'Nerve' },
  { name: 'Left Tibial Nerve', classification: 'Nerve → Peripheral → Lower Limb → Left → Tibial nerve', system: 'Nerve' },
  { name: 'Right Tibial Nerve', classification: 'Nerve → Peripheral → Lower Limb → Right → Tibial nerve', system: 'Nerve' },
  { name: 'Left Sural Nerve', classification: 'Nerve → Peripheral → Lower Limb → Left → Sural nerve', system: 'Nerve' },
  { name: 'Right Sural Nerve', classification: 'Nerve → Peripheral → Lower Limb → Right → Sural nerve', system: 'Nerve' }
];

console.log('Skeleton count:', skelList.length);
console.log('Muscle count:', musList.length);
console.log('Nerve count:', nerveList.length);

const outContent = `// Comprehensive anatomical knowledge base generated from client specification:
// Skeleton.txt (${skelList.length} items), Muscle.txt (${musList.length} items), and Nervous System (${nerveList.length} items).

export const SYSTEMS_META = {
  skeleton: { id: 'skeleton', label: 'Skeletal System', icon: '🦴', color: '#38bdf8', defaultVisible: true },
  muscle: { id: 'muscle', label: 'Muscular System', icon: '💪', color: '#f43f5e', defaultVisible: true },
  nerve: { id: 'nerve', label: 'Nervous System', icon: '⚡', color: '#fbbf24', defaultVisible: true }
};

export const SKELETON_ITEMS = ${JSON.stringify(skelList, null, 2)};
export const MUSCLE_ITEMS = ${JSON.stringify(musList, null, 2)};
export const NERVE_ITEMS = ${JSON.stringify(nerveList, null, 2)};

// Build fast lookup dictionary
const LOOKUP_MAP = new Map();

function indexItems(list) {
  for (const item of list) {
    LOOKUP_MAP.set(item.name.toLowerCase().trim(), item);
  }
}
indexItems(SKELETON_ITEMS);
indexItems(MUSCLE_ITEMS);
indexItems(NERVE_ITEMS);

// Smart resolver to match GLB mesh names (which might have descriptive suffixes or anatomical phrasing)
export function getAnatomyData(rawName, systemHint = null) {
  if (!rawName) return null;
  const name = rawName.toLowerCase().trim();

  // 1. Direct match
  if (LOOKUP_MAP.has(name)) {
    return enrichEntry(LOOKUP_MAP.get(name), rawName);
  }

  // 2. Identify side
  const isLeft = name.includes('left');
  const isRight = name.includes('right');
  const side = isLeft ? 'Left' : (isRight ? 'Right' : '');

  // 3. Normalized name without side or numbers
  const clean = name
    .replace(/\\bleft\\b/g, '')
    .replace(/\\bright\\b/g, '')
    .replace(/\\(2\\)/g, '')
    .replace(/\\(3\\)/g, '')
    .replace(/\\./g, '')
    .replace(/\\s+/g, ' ')
    .trim();

  // Check lookup with side prefixed
  if (side && LOOKUP_MAP.has(\`\${side.toLowerCase()} \${clean}\`)) {
    return enrichEntry(LOOKUP_MAP.get(\`\${side.toLowerCase()} \${clean}\`), rawName);
  }

  // Check without side
  if (LOOKUP_MAP.has(clean)) {
    const base = LOOKUP_MAP.get(clean);
    return enrichEntry(base, rawName, side);
  }

  // 4. Fuzzy / substring matching across items
  let bestMatch = null;
  let highestScore = 0;

  const candidatePool = systemHint === 'muscle' 
    ? MUSCLE_ITEMS 
    : (systemHint === 'nerve' ? NERVE_ITEMS : (systemHint === 'skeleton' ? SKELETON_ITEMS : [...MUSCLE_ITEMS, ...SKELETON_ITEMS, ...NERVE_ITEMS]));

  for (const item of candidatePool) {
    const itemName = item.name.toLowerCase();
    
    // Check key anatomical matches
    if (name.includes(itemName) || itemName.includes(clean)) {
      const score = itemName.length;
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }
  }

  if (bestMatch) {
    return enrichEntry(bestMatch, rawName, side);
  }

  // 5. Fallback determination based on keywords
  let determinedSystem = systemHint || 'Skeleton';
  if (name.includes('muscle') || name.includes('pectoralis') || name.includes('deltoid') || name.includes('trapezius') || name.includes('biceps') || name.includes('rectus') || name.includes('gluteus')) {
    determinedSystem = 'Muscle';
  } else if (name.includes('nerve') || name.includes('spinal') || name.includes('brain') || name.includes('cord')) {
    determinedSystem = 'Nerve';
  }

  const fallbackTitle = formatDisplayName(rawName);
  return {
    rawName,
    title: fallbackTitle,
    latin: getLatinEstimate(fallbackTitle, determinedSystem),
    system: determinedSystem,
    classification: \`\${determinedSystem} → \${determinedSystem === 'Muscle' ? 'Musculoskeletal' : (determinedSystem === 'Nerve' ? 'Neuroanatomy' : 'Osteology')} → \${fallbackTitle}\`,
    description: getDynamicDescription(fallbackTitle, determinedSystem),
    function: getDynamicFunction(fallbackTitle, determinedSystem),
    connections: getDynamicConnections(fallbackTitle, determinedSystem),
    clinical: getDynamicClinical(fallbackTitle, determinedSystem),
    trivia: getDynamicTrivia(fallbackTitle, determinedSystem)
  };
}

function enrichEntry(item, rawName, side = '') {
  let title = item.name;
  if (side && !title.toLowerCase().includes(side.toLowerCase())) {
    title = \`\${side} \${title}\`;
  }

  return {
    rawName,
    title,
    latin: getLatinEstimate(title, item.system),
    system: item.system,
    classification: item.classification,
    description: getDynamicDescription(title, item.system, item.classification),
    function: getDynamicFunction(title, item.system, item.classification),
    connections: getDynamicConnections(title, item.system, item.classification),
    clinical: getDynamicClinical(title, item.system, item.classification),
    trivia: getDynamicTrivia(title, item.system, item.classification)
  };
}

function formatDisplayName(str) {
  return str
    .replace(/_/g, ' ')
    .replace(/\\(2\\)/g, '')
    .replace(/\\(3\\)/g, '')
    .replace(/\\s+/g, ' ')
    .trim()
    .replace(/\\b\\w/g, c => c.toUpperCase());
}

function getLatinEstimate(title, system) {
  const t = title.toLowerCase();
  if (system === 'Muscle') {
    if (t.includes('biceps')) return 'Musculus biceps';
    if (t.includes('triceps')) return 'Musculus triceps';
    if (t.includes('deltoid')) return 'Musculus deltoideus';
    if (t.includes('trapezius')) return 'Musculus trapezius';
    if (t.includes('pectoralis')) return 'Musculus pectoralis major';
    if (t.includes('rectus femoris')) return 'Musculus rectus femoris';
    if (t.includes('gastrocnemius')) return 'Musculus gastrocnemius';
    if (t.includes('gluteus')) return 'Musculus gluteus';
    if (t.includes('latissimus')) return 'Musculus latissimus dorsi';
    return \`Musculus \${title.toLowerCase().replace(/^(left|right)\\s+/i, '')}\`;
  }
  if (system === 'Nerve') {
    if (t.includes('sciatic')) return 'Nervus ischiadicus';
    if (t.includes('femoral')) return 'Nervus femoralis';
    if (t.includes('radial')) return 'Nervus radialis';
    if (t.includes('median')) return 'Nervus medianus';
    if (t.includes('ulnar')) return 'Nervus ulnaris';
    if (t.includes('vagus')) return 'Nervus vagus';
    return \`Nervus \${title.toLowerCase().replace(/^(left|right)\\s+/i, '')}\`;
  }
  // Skeleton
  if (t.includes('femur')) return 'Os femoris';
  if (t.includes('humerus')) return 'Humerus';
  if (t.includes('tibia')) return 'Tibia';
  if (t.includes('fibula')) return 'Fibula';
  if (t.includes('radius')) return 'Radius';
  if (t.includes('ulna')) return 'Ulna';
  if (t.includes('clavicle')) return 'Clavicula';
  if (t.includes('scapula')) return 'Scapula';
  if (t.includes('patella')) return 'Patella';
  if (t.includes('mandible')) return 'Mandibula';
  if (t.includes('sternum')) return 'Sternum';
  return \`Os \${title.toLowerCase().replace(/^(left|right)\\s+/i, '')}\`;
}

function getDynamicDescription(title, system, classification = '') {
  const t = title.toLowerCase();
  if (system === 'Muscle') {
    return \`Major contractile muscle structure (\${title}) of the human muscular system. Composed of aligned myofibrils encased in fascial sheaths, providing active mechanical force generation and joint stabilization.\`;
  }
  if (system === 'Nerve') {
    return \`Vital neural pathway (\${title}) of the nervous system. Transmits afferent sensory action potentials toward the central axis and efferent motor commands to somatic target musculature.\`;
  }
  return \`Structural rigid mineralized osseous element (\${title}) of the skeletal system. Provides mechanical structural scaffolding, vital organ protection, and osteocyte-mediated mineral reservoir homeostasis.\`;
}

function getDynamicFunction(title, system, classification = '') {
  const t = title.toLowerCase();
  if (system === 'Muscle') {
    if (t.includes('deltoid')) return 'Powerful shoulder abduction, flexion, and extension of the upper extremity.';
    if (t.includes('biceps')) return 'Elbow flexion and powerful forearm supination.';
    if (t.includes('triceps')) return 'Primary extensor of the elbow joint and stabilizer of the glenohumeral joint.';
    if (t.includes('pectoralis')) return 'Adduction, internal rotation, and horizontal flexion of the arm at the shoulder.';
    if (t.includes('trapezius')) return 'Scapular elevation, retraction, upward rotation, and cervical extension.';
    if (t.includes('rectus femoris') || t.includes('quadriceps')) return 'Knee extension and hip flexion during gait propulsion.';
    if (t.includes('gastrocnemius')) return 'Plantarflexion of the ankle and weak flexion of the knee joint.';
    if (t.includes('gluteus')) return 'Hip extension, abduction, lateral rotation, and maintaining upright posture.';
    return 'Produces dynamic musculoskeletal movement, stabilizes joint kinematics, and maintains postural tone.';
  }
  if (system === 'Nerve') {
    if (t.includes('sciatic')) return 'Provides sensory innervation to skin of foot/leg and motor innervation to hamstrings and all lower leg/foot muscles.';
    if (t.includes('femoral')) return 'Motor supply to quadriceps extensor group; sensory supply to anterior thigh and medial leg (saphenous).';
    if (t.includes('radial')) return 'Motor supply to all extensor muscles of the arm and forearm; sensation to dorsum of hand.';
    if (t.includes('median')) return 'Motor innervation to anterior forearm flexors, thenar muscles, and sensation to lateral 3.5 digits.';
    if (t.includes('ulnar')) return 'Motor control for fine intrinsic hand movements and sensory innervation to the medial 1.5 fingers.';
    return 'Rapid electrochemical conduction of motor efferent impulses and somatic sensory tactile feedback.';
  }
  // Skeleton
  return 'Transfers biomechanical load, resists compressive forces, and anchors muscular and ligamentous attachments.';
}

function getDynamicConnections(title, system, classification = '') {
  if (system === 'Muscle') {
    return 'Originates from skeletal bone landmarks and inserts via fibrous tendinous junctions into adjacent articulating bones.';
  }
  if (system === 'Nerve') {
    return 'Originates from spinal cord nerve rootlets / brainstem and branches into terminal intramuscular and cutaneous arborizations.';
  }
  return 'Articulates with adjacent skeletal elements via synovial, cartilaginous, or fibrous suture joints.';
}

function getDynamicClinical(title, system, classification = '') {
  const t = title.toLowerCase();
  if (system === 'Muscle') {
    if (t.includes('rotator') || t.includes('supraspinatus')) return 'Prone to impingement syndrome and rotator cuff tendon tears from repetitive overhead activity.';
    if (t.includes('hamstring') || t.includes('biceps femoris')) return 'Common site of athletic muscle strain during high-speed sprint deceleration.';
    if (t.includes('gastrocnemius')) return 'Susceptible to acute rupture ("tennis leg") at the myotendinous junction and Achilles tendonitis.';
    return 'Subject to acute strains, myofascial trigger points, chronic compartment tightness, and age-related sarcopenia.';
  }
  if (system === 'Nerve') {
    if (t.includes('sciatic')) return 'Sciatica causes radiating neuropathic pain down the posterior leg from herniated disc or piriformis syndrome.';
    if (t.includes('median')) return 'Carpal tunnel syndrome causes compression at the flexor retinaculum, resulting in thenar atrophy and paresthesias.';
    if (t.includes('radial')) return 'Radial nerve compression ("Saturday night palsy") leads to wrist drop and inability to extend fingers.';
    return 'Susceptible to entrapment neuropathies, mechanical compression, traction neuropraxia, and diabetic peripheral neuropathy.';
  }
  return 'Prone to traumatic fractures, osteoporotic bone density reduction, stress remodeling microfractures, and degenerative osteoarthritis.';
}

function getDynamicTrivia(title, system, classification = '') {
  if (system === 'Muscle') {
    return 'Skeletal muscle tissue accounts for roughly 40% of adult body mass and serves as the primary heat-generating metabolic tissue.';
  }
  if (system === 'Nerve') {
    return 'Nerve impulses travel along myelinated axons at velocities reaching up to 120 meters per second (over 268 mph)!';
  }
  return 'Human bone matrix combines hydroxyapatite mineral crystals with flexible type-I collagen fibers, achieving a strength-to-weight ratio superior to steel reinforced concrete.';
}
`;

fs.writeFileSync('src/anatomyData.js', outContent);
console.log('Successfully wrote src/anatomyData.js!');
