# 3D Interactive Human Anatomy System (OSTEON 3D)

An interactive, high-fidelity 3D Human Anatomy System developed with **Three.js**, **GSAP**, and modern **Vanilla CSS**.

Featuring three integrated anatomical systems with **over 400 interactive anatomical structures**:
1. 🦴 **Skeletal System**: High-resolution 201-bone anatomical model mapped to [`Skeleton.txt`](file:///c:/Users/imrah/Downloads/Human%20Skeleton/Skeleton.txt).
2. 💪 **Muscular System**: High-detail muscular model ([`man_muscle_human_body.glb`](file:///c:/Users/imrah/Downloads/Human%20Skeleton/man_muscle_human_body.glb)) mapped to all 372 muscle structures in [`Muscle.txt`](file:///c:/Users/imrah/Downloads/Human%20Skeleton/Muscle.txt).
3. ⚡ **Nervous System**: Central nervous system (Brain & Spinal Cord segments) and peripheral nerve pathways (Sciatic, Femoral, Radial, Ulnar, Median, Phrenic, etc.).

---

## ✨ Features

- **Click to Extract & Pop Out**: Click on any bone in the 3D scene (or pick from search / categories). The selected bone smoothly detaches and comes out from the body along its natural anatomical displacement trajectory.
- **Dynamic Framing Camera**: Automatically pans and frames the selected bone with smooth GSAP camera interpolation, accounting for bone proportions and UI layout.
- **Rich Anatomical Information Panel (HUD)**:
  - Scientific Name & Latin / Classical nomenclature (*Os femoris*, *Mandibula*, etc.)
  - Skeletal Division (Axial vs. Appendicular Skeleton)
  - Morphological Classification (Long Bone, Flat Bone, Irregular Bone, Sesamoid Bone)
  - Comprehensive Anatomical Overview
  - Primary Biomechanical Function
  - Articulations & Joint Connections
  - Clinical Significance & Common Pathologies (fractures, sports injuries, surgical notes)
  - Osteological Insights & Evolutionary Trivia
  - Text-to-Speech (TTS) voice narration
  - Previous / Next bone navigation
- **Isolate Bone Mode**: Hide all other bones with a single click to inspect the extracted bone in 360-degree isolation.
- **Exploded View Slider**: Smoothly separate all 201 bones radially (from 0% to 100%) to study exploded skeletal architecture and reassemble seamlessly.
- **Smart Search & Autocomplete**: Instant search across all 201 bones by English name, Latin name, region, or anatomical classification.
- **Region Filter Chips**:
  - Cranium & Face
  - Vertebral Column (Cervical, Thoracic, Lumbar)
  - Thoracic Cage (Ribs & Sternum)
  - Pectoral Girdle & Upper Limbs (Shoulders & Arms)
  - Carpals & Hands
  - Pelvic Girdle
  - Lower Limbs (Femur, Patella, Tibia, Fibula)
  - Tarsals & Feet
- **Shading & Material Modes**:
  - 🦴 **Natural Bone**: Warm calcium/ivory PBR shading with realistic roughness and contour lighting.
  - 🎨 **Color by Region**: Chromatic coding by anatomical subsystem.
  - ⚡ **X-Ray Blue**: Medical blueprint luminous holographic mode.
  - 👻 **Translucent Ghost**: Glassmorphic ghost skeleton.
- **Camera View Presets**: Front, Back, Left, Right, Skull Close-up, Torso, Pelvis, and Full Reset.
- **Procedural Audio Feedback**: Ambient synthesizer feedback using the Web Audio API with mute toggle.

---

## 🚀 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:3000/`.

---

## 🕹️ Controls

| Interaction | Action |
| --- | --- |
| **Left Click on Bone** | Select, extract & pop out bone + open info panel |
| **Left Click Background** | Deselect & return bone back to skeleton |
| **Left Mouse Drag** | Orbit / rotate 3D view |
| **Right Mouse Drag** | Pan camera |
| **Mouse Scroll / Pinch** | Zoom in / out |
| **Top Slider** | Explode / reassemble skeleton (0% - 100%) |
| **Search Bar** | Instant bone finder with fly-to navigation |
