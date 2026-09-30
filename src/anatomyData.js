// Comprehensive anatomical knowledge base generated from client specification:
// Skeleton.txt (378 items), Muscle.txt (372 items), and Nervous System (35 items).

export const SYSTEMS_META = {
  skeleton: { id: 'skeleton', label: 'Skeletal System', icon: '🦴', color: '#38bdf8', defaultVisible: true },
  muscle: { id: 'muscle', label: 'Muscular System', icon: '💪', color: '#f43f5e', defaultVisible: true },
  nerve: { id: 'nerve', label: 'Nervous System', icon: '⚡', color: '#fbbf24', defaultVisible: true }
};

export const SKELETON_ITEMS = [
  {
    "name": "Occipital bone",
    "classification": "Bone → Skull / Craniofacial → Occipital bone",
    "system": "Skeleton"
  },
  {
    "name": "Frontal bone",
    "classification": "Bone → Skull / Craniofacial → Frontal bone",
    "system": "Skeleton"
  },
  {
    "name": "Parietal bone",
    "classification": "Bone → Skull / Craniofacial → Parietal bone",
    "system": "Skeleton"
  },
  {
    "name": "Temporal bone",
    "classification": "Bone → Skull / Craniofacial → Temporal bone",
    "system": "Skeleton"
  },
  {
    "name": "Sphenoid bone",
    "classification": "Bone → Skull / Craniofacial → Sphenoid bone",
    "system": "Skeleton"
  },
  {
    "name": "Ethmoid bone",
    "classification": "Bone → Skull / Craniofacial → Ethmoid bone",
    "system": "Skeleton"
  },
  {
    "name": "Maxilla",
    "classification": "Bone → Skull / Craniofacial → Maxilla",
    "system": "Skeleton"
  },
  {
    "name": "Mandible",
    "classification": "Bone → Skull / Craniofacial → Mandible",
    "system": "Skeleton"
  },
  {
    "name": "Zygomatic bone",
    "classification": "Bone → Skull / Craniofacial → Zygomatic bone",
    "system": "Skeleton"
  },
  {
    "name": "Nasal bone",
    "classification": "Bone → Skull / Craniofacial → Nasal bone",
    "system": "Skeleton"
  },
  {
    "name": "Vomer",
    "classification": "Bone → Skull / Craniofacial → Vomer",
    "system": "Skeleton"
  },
  {
    "name": "Palatine bone",
    "classification": "Bone → Skull / Craniofacial → Palatine bone",
    "system": "Skeleton"
  },
  {
    "name": "C1 (Atlas)",
    "classification": "Bone → Vertebrae → Cervical → C1 (Atlas)",
    "system": "Skeleton"
  },
  {
    "name": "C2 (Axis)",
    "classification": "Bone → Vertebrae → Cervical → C2 (Axis)",
    "system": "Skeleton"
  },
  {
    "name": "C3 vertebra",
    "classification": "Bone → Vertebrae → Cervical → C3 vertebra",
    "system": "Skeleton"
  },
  {
    "name": "C4 vertebra",
    "classification": "Bone → Vertebrae → Cervical → C4 vertebra",
    "system": "Skeleton"
  },
  {
    "name": "C5 vertebra",
    "classification": "Bone → Vertebrae → Cervical → C5 vertebra",
    "system": "Skeleton"
  },
  {
    "name": "C6 vertebra",
    "classification": "Bone → Vertebrae → Cervical → C6 vertebra",
    "system": "Skeleton"
  },
  {
    "name": "C7 vertebra",
    "classification": "Bone → Vertebrae → Cervical → C7 vertebra",
    "system": "Skeleton"
  },
  {
    "name": "T1 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T1",
    "system": "Skeleton"
  },
  {
    "name": "T2 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T2",
    "system": "Skeleton"
  },
  {
    "name": "T3 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T3",
    "system": "Skeleton"
  },
  {
    "name": "T4 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T4",
    "system": "Skeleton"
  },
  {
    "name": "T5 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T5",
    "system": "Skeleton"
  },
  {
    "name": "T6 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T6",
    "system": "Skeleton"
  },
  {
    "name": "T7 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T7",
    "system": "Skeleton"
  },
  {
    "name": "T8 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T8",
    "system": "Skeleton"
  },
  {
    "name": "T9 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T9",
    "system": "Skeleton"
  },
  {
    "name": "T10 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T10",
    "system": "Skeleton"
  },
  {
    "name": "T11 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T11",
    "system": "Skeleton"
  },
  {
    "name": "T12 vertebra",
    "classification": "Bone → Vertebrae → Thoracic → T12",
    "system": "Skeleton"
  },
  {
    "name": "L1 vertebra",
    "classification": "Bone → Vertebrae → Lumbar → L1",
    "system": "Skeleton"
  },
  {
    "name": "L2 vertebra",
    "classification": "Bone → Vertebrae → Lumbar → L2",
    "system": "Skeleton"
  },
  {
    "name": "L3 vertebra",
    "classification": "Bone → Vertebrae → Lumbar → L3",
    "system": "Skeleton"
  },
  {
    "name": "L4 vertebra",
    "classification": "Bone → Vertebrae → Lumbar → L4",
    "system": "Skeleton"
  },
  {
    "name": "L5 vertebra",
    "classification": "Bone → Vertebrae → Lumbar → L5",
    "system": "Skeleton"
  },
  {
    "name": "Sacrum",
    "classification": "Bone → Sacrum / Coccyx → Sacrum",
    "system": "Skeleton"
  },
  {
    "name": "Coccyx",
    "classification": "Bone → Sacrum / Coccyx → Coccyx",
    "system": "Skeleton"
  },
  {
    "name": "S1",
    "classification": "Bone → Sacrum / Coccyx → S1",
    "system": "Skeleton"
  },
  {
    "name": "S2",
    "classification": "Bone → Sacrum / Coccyx → S2",
    "system": "Skeleton"
  },
  {
    "name": "S3",
    "classification": "Bone → Sacrum / Coccyx → S3",
    "system": "Skeleton"
  },
  {
    "name": "S4",
    "classification": "Bone → Sacrum / Coccyx → S4",
    "system": "Skeleton"
  },
  {
    "name": "S5",
    "classification": "Bone → Sacrum / Coccyx → S5",
    "system": "Skeleton"
  },
  {
    "name": "Co1",
    "classification": "Bone → Sacrum / Coccyx → Co1",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 1",
    "classification": "Bone → Ribs → Left → Rib 1",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 1",
    "classification": "Bone → Ribs → Right → Rib 1",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 2",
    "classification": "Bone → Ribs → Left → Rib 2",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 2",
    "classification": "Bone → Ribs → Right → Rib 2",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 3",
    "classification": "Bone → Ribs → Left → Rib 3",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 3",
    "classification": "Bone → Ribs → Right → Rib 3",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 4",
    "classification": "Bone → Ribs → Left → Rib 4",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 4",
    "classification": "Bone → Ribs → Right → Rib 4",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 5",
    "classification": "Bone → Ribs → Left → Rib 5",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 5",
    "classification": "Bone → Ribs → Right → Rib 5",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 6",
    "classification": "Bone → Ribs → Left → Rib 6",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 6",
    "classification": "Bone → Ribs → Right → Rib 6",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 7",
    "classification": "Bone → Ribs → Left → Rib 7",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 7",
    "classification": "Bone → Ribs → Right → Rib 7",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 8",
    "classification": "Bone → Ribs → Left → Rib 8",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 8",
    "classification": "Bone → Ribs → Right → Rib 8",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 9",
    "classification": "Bone → Ribs → Left → Rib 9",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 9",
    "classification": "Bone → Ribs → Right → Rib 9",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 10",
    "classification": "Bone → Ribs → Left → Rib 10",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 10",
    "classification": "Bone → Ribs → Right → Rib 10",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 11",
    "classification": "Bone → Ribs → Left → Rib 11",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 11",
    "classification": "Bone → Ribs → Right → Rib 11",
    "system": "Skeleton"
  },
  {
    "name": "Left rib 12",
    "classification": "Bone → Ribs → Left → Rib 12",
    "system": "Skeleton"
  },
  {
    "name": "Right rib 12",
    "classification": "Bone → Ribs → Right → Rib 12",
    "system": "Skeleton"
  },
  {
    "name": "Manubrium",
    "classification": "Bone → Thoracic cage → Sternum → Manubrium",
    "system": "Skeleton"
  },
  {
    "name": "Sternal body",
    "classification": "Bone → Thoracic cage → Sternum → Sternal body",
    "system": "Skeleton"
  },
  {
    "name": "Xiphoid process",
    "classification": "Bone → Thoracic cage → Sternum → Xiphoid process",
    "system": "Skeleton"
  },
  {
    "name": "Left Ilium",
    "classification": "Bone → Pelvis → Left → Ilium",
    "system": "Skeleton"
  },
  {
    "name": "Right Ilium",
    "classification": "Bone → Pelvis → Right → Ilium",
    "system": "Skeleton"
  },
  {
    "name": "Left Iliac crest",
    "classification": "Bone → Pelvis → Left → Iliac crest",
    "system": "Skeleton"
  },
  {
    "name": "Right Iliac crest",
    "classification": "Bone → Pelvis → Right → Iliac crest",
    "system": "Skeleton"
  },
  {
    "name": "Left ASIS",
    "classification": "Bone → Pelvis → Left → ASIS",
    "system": "Skeleton"
  },
  {
    "name": "Right ASIS",
    "classification": "Bone → Pelvis → Right → ASIS",
    "system": "Skeleton"
  },
  {
    "name": "Left AIIS",
    "classification": "Bone → Pelvis → Left → AIIS",
    "system": "Skeleton"
  },
  {
    "name": "Right AIIS",
    "classification": "Bone → Pelvis → Right → AIIS",
    "system": "Skeleton"
  },
  {
    "name": "Left PSIS",
    "classification": "Bone → Pelvis → Left → PSIS",
    "system": "Skeleton"
  },
  {
    "name": "Right PSIS",
    "classification": "Bone → Pelvis → Right → PSIS",
    "system": "Skeleton"
  },
  {
    "name": "Left PIIS",
    "classification": "Bone → Pelvis → Left → PIIS",
    "system": "Skeleton"
  },
  {
    "name": "Right PIIS",
    "classification": "Bone → Pelvis → Right → PIIS",
    "system": "Skeleton"
  },
  {
    "name": "Left Ischium",
    "classification": "Bone → Pelvis → Left → Ischium",
    "system": "Skeleton"
  },
  {
    "name": "Right Ischium",
    "classification": "Bone → Pelvis → Right → Ischium",
    "system": "Skeleton"
  },
  {
    "name": "Left Ischial tuberosity",
    "classification": "Bone → Pelvis → Left → Ischial tuberosity",
    "system": "Skeleton"
  },
  {
    "name": "Right Ischial tuberosity",
    "classification": "Bone → Pelvis → Right → Ischial tuberosity",
    "system": "Skeleton"
  },
  {
    "name": "Left Pubis",
    "classification": "Bone → Pelvis → Left → Pubis",
    "system": "Skeleton"
  },
  {
    "name": "Right Pubis",
    "classification": "Bone → Pelvis → Right → Pubis",
    "system": "Skeleton"
  },
  {
    "name": "Left Superior pubic ramus",
    "classification": "Bone → Pelvis → Left → Superior pubic ramus",
    "system": "Skeleton"
  },
  {
    "name": "Right Superior pubic ramus",
    "classification": "Bone → Pelvis → Right → Superior pubic ramus",
    "system": "Skeleton"
  },
  {
    "name": "Left Inferior pubic ramus",
    "classification": "Bone → Pelvis → Left → Inferior pubic ramus",
    "system": "Skeleton"
  },
  {
    "name": "Right Inferior pubic ramus",
    "classification": "Bone → Pelvis → Right → Inferior pubic ramus",
    "system": "Skeleton"
  },
  {
    "name": "Left Clavicle",
    "classification": "Bone → Shoulder girdle → Left → Clavicle",
    "system": "Skeleton"
  },
  {
    "name": "Right Clavicle",
    "classification": "Bone → Shoulder girdle → Right → Clavicle",
    "system": "Skeleton"
  },
  {
    "name": "Left Scapula",
    "classification": "Bone → Shoulder girdle → Left → Scapula",
    "system": "Skeleton"
  },
  {
    "name": "Right Scapula",
    "classification": "Bone → Shoulder girdle → Right → Scapula",
    "system": "Skeleton"
  },
  {
    "name": "Left Acromion",
    "classification": "Bone → Shoulder girdle → Left → Acromion",
    "system": "Skeleton"
  },
  {
    "name": "Right Acromion",
    "classification": "Bone → Shoulder girdle → Right → Acromion",
    "system": "Skeleton"
  },
  {
    "name": "Left Coracoid process",
    "classification": "Bone → Shoulder girdle → Left → Coracoid process",
    "system": "Skeleton"
  },
  {
    "name": "Right Coracoid process",
    "classification": "Bone → Shoulder girdle → Right → Coracoid process",
    "system": "Skeleton"
  },
  {
    "name": "Left Humerus",
    "classification": "Bone → Upper limb → Left → Humerus",
    "system": "Skeleton"
  },
  {
    "name": "Right Humerus",
    "classification": "Bone → Upper limb → Right → Humerus",
    "system": "Skeleton"
  },
  {
    "name": "Left Medial epicondyle",
    "classification": "Bone → Upper limb → Left → Medial epicondyle",
    "system": "Skeleton"
  },
  {
    "name": "Right Medial epicondyle",
    "classification": "Bone → Upper limb → Right → Medial epicondyle",
    "system": "Skeleton"
  },
  {
    "name": "Left Lateral epicondyle",
    "classification": "Bone → Upper limb → Left → Lateral epicondyle",
    "system": "Skeleton"
  },
  {
    "name": "Right Lateral epicondyle",
    "classification": "Bone → Upper limb → Right → Lateral epicondyle",
    "system": "Skeleton"
  },
  {
    "name": "Left Olecranon",
    "classification": "Bone → Upper limb → Left → Olecranon",
    "system": "Skeleton"
  },
  {
    "name": "Right Olecranon",
    "classification": "Bone → Upper limb → Right → Olecranon",
    "system": "Skeleton"
  },
  {
    "name": "Left Radius",
    "classification": "Bone → Forearm → Left → Radius",
    "system": "Skeleton"
  },
  {
    "name": "Right Radius",
    "classification": "Bone → Forearm → Right → Radius",
    "system": "Skeleton"
  },
  {
    "name": "Left Ulna",
    "classification": "Bone → Forearm → Left → Ulna",
    "system": "Skeleton"
  },
  {
    "name": "Right Ulna",
    "classification": "Bone → Forearm → Right → Ulna",
    "system": "Skeleton"
  },
  {
    "name": "Left Radial head",
    "classification": "Bone → Forearm → Left → Radial head",
    "system": "Skeleton"
  },
  {
    "name": "Right Radial head",
    "classification": "Bone → Forearm → Right → Radial head",
    "system": "Skeleton"
  },
  {
    "name": "Left Ulnar head",
    "classification": "Bone → Forearm → Left → Ulnar head",
    "system": "Skeleton"
  },
  {
    "name": "Right Ulnar head",
    "classification": "Bone → Forearm → Right → Ulnar head",
    "system": "Skeleton"
  },
  {
    "name": "Left Scaphoid",
    "classification": "Bone → Wrist → Left → Scaphoid",
    "system": "Skeleton"
  },
  {
    "name": "Right Scaphoid",
    "classification": "Bone → Wrist → Right → Scaphoid",
    "system": "Skeleton"
  },
  {
    "name": "Left Lunate",
    "classification": "Bone → Wrist → Left → Lunate",
    "system": "Skeleton"
  },
  {
    "name": "Right Lunate",
    "classification": "Bone → Wrist → Right → Lunate",
    "system": "Skeleton"
  },
  {
    "name": "Left Triquetrum",
    "classification": "Bone → Wrist → Left → Triquetrum",
    "system": "Skeleton"
  },
  {
    "name": "Right Triquetrum",
    "classification": "Bone → Wrist → Right → Triquetrum",
    "system": "Skeleton"
  },
  {
    "name": "Left Pisiform",
    "classification": "Bone → Wrist → Left → Pisiform",
    "system": "Skeleton"
  },
  {
    "name": "Right Pisiform",
    "classification": "Bone → Wrist → Right → Pisiform",
    "system": "Skeleton"
  },
  {
    "name": "Left Trapezium",
    "classification": "Bone → Wrist → Left → Trapezium",
    "system": "Skeleton"
  },
  {
    "name": "Right Trapezium",
    "classification": "Bone → Wrist → Right → Trapezium",
    "system": "Skeleton"
  },
  {
    "name": "Left Trapezoid",
    "classification": "Bone → Wrist → Left → Trapezoid",
    "system": "Skeleton"
  },
  {
    "name": "Right Trapezoid",
    "classification": "Bone → Wrist → Right → Trapezoid",
    "system": "Skeleton"
  },
  {
    "name": "Left Capitate",
    "classification": "Bone → Wrist → Left → Capitate",
    "system": "Skeleton"
  },
  {
    "name": "Right Capitate",
    "classification": "Bone → Wrist → Right → Capitate",
    "system": "Skeleton"
  },
  {
    "name": "Left Hamate",
    "classification": "Bone → Wrist → Left → Hamate",
    "system": "Skeleton"
  },
  {
    "name": "Right Hamate",
    "classification": "Bone → Wrist → Right → Hamate",
    "system": "Skeleton"
  },
  {
    "name": "Left metacarpal 1",
    "classification": "Bone → Hand → Left → Metacarpal 1",
    "system": "Skeleton"
  },
  {
    "name": "Right metacarpal 1",
    "classification": "Bone → Hand → Right → Metacarpal 1",
    "system": "Skeleton"
  },
  {
    "name": "Left metacarpal 2",
    "classification": "Bone → Hand → Left → Metacarpal 2",
    "system": "Skeleton"
  },
  {
    "name": "Right metacarpal 2",
    "classification": "Bone → Hand → Right → Metacarpal 2",
    "system": "Skeleton"
  },
  {
    "name": "Left metacarpal 3",
    "classification": "Bone → Hand → Left → Metacarpal 3",
    "system": "Skeleton"
  },
  {
    "name": "Right metacarpal 3",
    "classification": "Bone → Hand → Right → Metacarpal 3",
    "system": "Skeleton"
  },
  {
    "name": "Left metacarpal 4",
    "classification": "Bone → Hand → Left → Metacarpal 4",
    "system": "Skeleton"
  },
  {
    "name": "Right metacarpal 4",
    "classification": "Bone → Hand → Right → Metacarpal 4",
    "system": "Skeleton"
  },
  {
    "name": "Left metacarpal 5",
    "classification": "Bone → Hand → Left → Metacarpal 5",
    "system": "Skeleton"
  },
  {
    "name": "Right metacarpal 5",
    "classification": "Bone → Hand → Right → Metacarpal 5",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of thumb",
    "classification": "Bone → Hand → Left → thumb → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of thumb",
    "classification": "Bone → Hand → Right → thumb → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of thumb",
    "classification": "Bone → Hand → Left → thumb → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of thumb",
    "classification": "Bone → Hand → Right → thumb → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of index finger",
    "classification": "Bone → Hand → Left → index finger → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of index finger",
    "classification": "Bone → Hand → Right → index finger → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left middle phalanx of index finger",
    "classification": "Bone → Hand → Left → index finger → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right middle phalanx of index finger",
    "classification": "Bone → Hand → Right → index finger → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of index finger",
    "classification": "Bone → Hand → Left → index finger → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of index finger",
    "classification": "Bone → Hand → Right → index finger → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of middle finger",
    "classification": "Bone → Hand → Left → middle finger → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of middle finger",
    "classification": "Bone → Hand → Right → middle finger → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left middle phalanx of middle finger",
    "classification": "Bone → Hand → Left → middle finger → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right middle phalanx of middle finger",
    "classification": "Bone → Hand → Right → middle finger → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of middle finger",
    "classification": "Bone → Hand → Left → middle finger → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of middle finger",
    "classification": "Bone → Hand → Right → middle finger → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of ring finger",
    "classification": "Bone → Hand → Left → ring finger → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of ring finger",
    "classification": "Bone → Hand → Right → ring finger → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left middle phalanx of ring finger",
    "classification": "Bone → Hand → Left → ring finger → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right middle phalanx of ring finger",
    "classification": "Bone → Hand → Right → ring finger → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of ring finger",
    "classification": "Bone → Hand → Left → ring finger → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of ring finger",
    "classification": "Bone → Hand → Right → ring finger → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of little finger",
    "classification": "Bone → Hand → Left → little finger → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of little finger",
    "classification": "Bone → Hand → Right → little finger → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left middle phalanx of little finger",
    "classification": "Bone → Hand → Left → little finger → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right middle phalanx of little finger",
    "classification": "Bone → Hand → Right → little finger → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of little finger",
    "classification": "Bone → Hand → Left → little finger → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of little finger",
    "classification": "Bone → Hand → Right → little finger → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left Femur",
    "classification": "Bone → Hip / Thigh → Left → Femur",
    "system": "Skeleton"
  },
  {
    "name": "Right Femur",
    "classification": "Bone → Hip / Thigh → Right → Femur",
    "system": "Skeleton"
  },
  {
    "name": "Left Femoral head",
    "classification": "Bone → Hip / Thigh → Left → Femoral head",
    "system": "Skeleton"
  },
  {
    "name": "Right Femoral head",
    "classification": "Bone → Hip / Thigh → Right → Femoral head",
    "system": "Skeleton"
  },
  {
    "name": "Left Femoral neck",
    "classification": "Bone → Hip / Thigh → Left → Femoral neck",
    "system": "Skeleton"
  },
  {
    "name": "Right Femoral neck",
    "classification": "Bone → Hip / Thigh → Right → Femoral neck",
    "system": "Skeleton"
  },
  {
    "name": "Left Greater trochanter",
    "classification": "Bone → Hip / Thigh → Left → Greater trochanter",
    "system": "Skeleton"
  },
  {
    "name": "Right Greater trochanter",
    "classification": "Bone → Hip / Thigh → Right → Greater trochanter",
    "system": "Skeleton"
  },
  {
    "name": "Left Lesser trochanter",
    "classification": "Bone → Hip / Thigh → Left → Lesser trochanter",
    "system": "Skeleton"
  },
  {
    "name": "Right Lesser trochanter",
    "classification": "Bone → Hip / Thigh → Right → Lesser trochanter",
    "system": "Skeleton"
  },
  {
    "name": "Left Patella",
    "classification": "Bone → Knee → Left → Patella",
    "system": "Skeleton"
  },
  {
    "name": "Right Patella",
    "classification": "Bone → Knee → Right → Patella",
    "system": "Skeleton"
  },
  {
    "name": "Left Medial femoral condyle",
    "classification": "Bone → Knee → Left → Medial femoral condyle",
    "system": "Skeleton"
  },
  {
    "name": "Right Medial femoral condyle",
    "classification": "Bone → Knee → Right → Medial femoral condyle",
    "system": "Skeleton"
  },
  {
    "name": "Left Lateral femoral condyle",
    "classification": "Bone → Knee → Left → Lateral femoral condyle",
    "system": "Skeleton"
  },
  {
    "name": "Right Lateral femoral condyle",
    "classification": "Bone → Knee → Right → Lateral femoral condyle",
    "system": "Skeleton"
  },
  {
    "name": "Left Medial tibial plateau",
    "classification": "Bone → Knee → Left → Medial tibial plateau",
    "system": "Skeleton"
  },
  {
    "name": "Right Medial tibial plateau",
    "classification": "Bone → Knee → Right → Medial tibial plateau",
    "system": "Skeleton"
  },
  {
    "name": "Left Lateral tibial plateau",
    "classification": "Bone → Knee → Left → Lateral tibial plateau",
    "system": "Skeleton"
  },
  {
    "name": "Right Lateral tibial plateau",
    "classification": "Bone → Knee → Right → Lateral tibial plateau",
    "system": "Skeleton"
  },
  {
    "name": "Left Tibia",
    "classification": "Bone → Lower leg → Left → Tibia",
    "system": "Skeleton"
  },
  {
    "name": "Right Tibia",
    "classification": "Bone → Lower leg → Right → Tibia",
    "system": "Skeleton"
  },
  {
    "name": "Left Fibula",
    "classification": "Bone → Lower leg → Left → Fibula",
    "system": "Skeleton"
  },
  {
    "name": "Right Fibula",
    "classification": "Bone → Lower leg → Right → Fibula",
    "system": "Skeleton"
  },
  {
    "name": "Left Medial malleolus",
    "classification": "Bone → Lower leg → Left → Medial malleolus",
    "system": "Skeleton"
  },
  {
    "name": "Right Medial malleolus",
    "classification": "Bone → Lower leg → Right → Medial malleolus",
    "system": "Skeleton"
  },
  {
    "name": "Left Lateral malleolus",
    "classification": "Bone → Lower leg → Left → Lateral malleolus",
    "system": "Skeleton"
  },
  {
    "name": "Right Lateral malleolus",
    "classification": "Bone → Lower leg → Right → Lateral malleolus",
    "system": "Skeleton"
  },
  {
    "name": "Left Talus",
    "classification": "Bone → Ankle / Hindfoot → Left → Talus",
    "system": "Skeleton"
  },
  {
    "name": "Right Talus",
    "classification": "Bone → Ankle / Hindfoot → Right → Talus",
    "system": "Skeleton"
  },
  {
    "name": "Left Calcaneus",
    "classification": "Bone → Ankle / Hindfoot → Left → Calcaneus",
    "system": "Skeleton"
  },
  {
    "name": "Right Calcaneus",
    "classification": "Bone → Ankle / Hindfoot → Right → Calcaneus",
    "system": "Skeleton"
  },
  {
    "name": "Left Navicular",
    "classification": "Bone → Ankle / Hindfoot → Left → Navicular",
    "system": "Skeleton"
  },
  {
    "name": "Right Navicular",
    "classification": "Bone → Ankle / Hindfoot → Right → Navicular",
    "system": "Skeleton"
  },
  {
    "name": "Left Cuboid",
    "classification": "Bone → Ankle / Hindfoot → Left → Cuboid",
    "system": "Skeleton"
  },
  {
    "name": "Right Cuboid",
    "classification": "Bone → Ankle / Hindfoot → Right → Cuboid",
    "system": "Skeleton"
  },
  {
    "name": "Left Medial cuneiform",
    "classification": "Bone → Ankle / Hindfoot → Left → Medial cuneiform",
    "system": "Skeleton"
  },
  {
    "name": "Right Medial cuneiform",
    "classification": "Bone → Ankle / Hindfoot → Right → Medial cuneiform",
    "system": "Skeleton"
  },
  {
    "name": "Left Intermediate cuneiform",
    "classification": "Bone → Ankle / Hindfoot → Left → Intermediate cuneiform",
    "system": "Skeleton"
  },
  {
    "name": "Right Intermediate cuneiform",
    "classification": "Bone → Ankle / Hindfoot → Right → Intermediate cuneiform",
    "system": "Skeleton"
  },
  {
    "name": "Left Lateral cuneiform",
    "classification": "Bone → Ankle / Hindfoot → Left → Lateral cuneiform",
    "system": "Skeleton"
  },
  {
    "name": "Right Lateral cuneiform",
    "classification": "Bone → Ankle / Hindfoot → Right → Lateral cuneiform",
    "system": "Skeleton"
  },
  {
    "name": "Left metatarsal 1",
    "classification": "Bone → Foot → Left → Metatarsal 1",
    "system": "Skeleton"
  },
  {
    "name": "Right metatarsal 1",
    "classification": "Bone → Foot → Right → Metatarsal 1",
    "system": "Skeleton"
  },
  {
    "name": "Left metatarsal 2",
    "classification": "Bone → Foot → Left → Metatarsal 2",
    "system": "Skeleton"
  },
  {
    "name": "Right metatarsal 2",
    "classification": "Bone → Foot → Right → Metatarsal 2",
    "system": "Skeleton"
  },
  {
    "name": "Left metatarsal 3",
    "classification": "Bone → Foot → Left → Metatarsal 3",
    "system": "Skeleton"
  },
  {
    "name": "Right metatarsal 3",
    "classification": "Bone → Foot → Right → Metatarsal 3",
    "system": "Skeleton"
  },
  {
    "name": "Left metatarsal 4",
    "classification": "Bone → Foot → Left → Metatarsal 4",
    "system": "Skeleton"
  },
  {
    "name": "Right metatarsal 4",
    "classification": "Bone → Foot → Right → Metatarsal 4",
    "system": "Skeleton"
  },
  {
    "name": "Left metatarsal 5",
    "classification": "Bone → Foot → Left → Metatarsal 5",
    "system": "Skeleton"
  },
  {
    "name": "Right metatarsal 5",
    "classification": "Bone → Foot → Right → Metatarsal 5",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of great toe",
    "classification": "Bone → Foot → Left → great toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of great toe",
    "classification": "Bone → Foot → Right → great toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of great toe",
    "classification": "Bone → Foot → Left → great toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of great toe",
    "classification": "Bone → Foot → Right → great toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of 2nd toe",
    "classification": "Bone → Foot → Left → 2nd toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of 2nd toe",
    "classification": "Bone → Foot → Right → 2nd toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left middle phalanx of 2nd toe",
    "classification": "Bone → Foot → Left → 2nd toe → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right middle phalanx of 2nd toe",
    "classification": "Bone → Foot → Right → 2nd toe → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of 2nd toe",
    "classification": "Bone → Foot → Left → 2nd toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of 2nd toe",
    "classification": "Bone → Foot → Right → 2nd toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of 3rd toe",
    "classification": "Bone → Foot → Left → 3rd toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of 3rd toe",
    "classification": "Bone → Foot → Right → 3rd toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left middle phalanx of 3rd toe",
    "classification": "Bone → Foot → Left → 3rd toe → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right middle phalanx of 3rd toe",
    "classification": "Bone → Foot → Right → 3rd toe → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of 3rd toe",
    "classification": "Bone → Foot → Left → 3rd toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of 3rd toe",
    "classification": "Bone → Foot → Right → 3rd toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of 4th toe",
    "classification": "Bone → Foot → Left → 4th toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of 4th toe",
    "classification": "Bone → Foot → Right → 4th toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left middle phalanx of 4th toe",
    "classification": "Bone → Foot → Left → 4th toe → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right middle phalanx of 4th toe",
    "classification": "Bone → Foot → Right → 4th toe → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of 4th toe",
    "classification": "Bone → Foot → Left → 4th toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of 4th toe",
    "classification": "Bone → Foot → Right → 4th toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left proximal phalanx of 5th toe",
    "classification": "Bone → Foot → Left → 5th toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right proximal phalanx of 5th toe",
    "classification": "Bone → Foot → Right → 5th toe → proximal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left middle phalanx of 5th toe",
    "classification": "Bone → Foot → Left → 5th toe → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right middle phalanx of 5th toe",
    "classification": "Bone → Foot → Right → 5th toe → middle phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left distal phalanx of 5th toe",
    "classification": "Bone → Foot → Left → 5th toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Right distal phalanx of 5th toe",
    "classification": "Bone → Foot → Right → 5th toe → distal phalanx",
    "system": "Skeleton"
  },
  {
    "name": "Left C2-C3 facet joint",
    "classification": "Joint → Cervical spine → Left → C2-C3 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right C2-C3 facet joint",
    "classification": "Joint → Cervical spine → Right → C2-C3 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left C3-C4 facet joint",
    "classification": "Joint → Cervical spine → Left → C3-C4 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right C3-C4 facet joint",
    "classification": "Joint → Cervical spine → Right → C3-C4 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left C4-C5 facet joint",
    "classification": "Joint → Cervical spine → Left → C4-C5 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right C4-C5 facet joint",
    "classification": "Joint → Cervical spine → Right → C4-C5 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left C5-C6 facet joint",
    "classification": "Joint → Cervical spine → Left → C5-C6 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right C5-C6 facet joint",
    "classification": "Joint → Cervical spine → Right → C5-C6 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left C6-C7 facet joint",
    "classification": "Joint → Cervical spine → Left → C6-C7 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right C6-C7 facet joint",
    "classification": "Joint → Cervical spine → Right → C6-C7 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left C7-T1 facet joint",
    "classification": "Joint → Cervical spine → Left → C7-T1 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right C7-T1 facet joint",
    "classification": "Joint → Cervical spine → Right → C7-T1 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T1-T2 facet joint",
    "classification": "Joint → Thoracic spine → Left → T1-T2 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T1-T2 facet joint",
    "classification": "Joint → Thoracic spine → Right → T1-T2 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T2-T3 facet joint",
    "classification": "Joint → Thoracic spine → Left → T2-T3 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T2-T3 facet joint",
    "classification": "Joint → Thoracic spine → Right → T2-T3 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T3-T4 facet joint",
    "classification": "Joint → Thoracic spine → Left → T3-T4 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T3-T4 facet joint",
    "classification": "Joint → Thoracic spine → Right → T3-T4 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T4-T5 facet joint",
    "classification": "Joint → Thoracic spine → Left → T4-T5 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T4-T5 facet joint",
    "classification": "Joint → Thoracic spine → Right → T4-T5 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T5-T6 facet joint",
    "classification": "Joint → Thoracic spine → Left → T5-T6 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T5-T6 facet joint",
    "classification": "Joint → Thoracic spine → Right → T5-T6 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T6-T7 facet joint",
    "classification": "Joint → Thoracic spine → Left → T6-T7 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T6-T7 facet joint",
    "classification": "Joint → Thoracic spine → Right → T6-T7 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T7-T8 facet joint",
    "classification": "Joint → Thoracic spine → Left → T7-T8 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T7-T8 facet joint",
    "classification": "Joint → Thoracic spine → Right → T7-T8 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T8-T9 facet joint",
    "classification": "Joint → Thoracic spine → Left → T8-T9 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T8-T9 facet joint",
    "classification": "Joint → Thoracic spine → Right → T8-T9 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T9-T10 facet joint",
    "classification": "Joint → Thoracic spine → Left → T9-T10 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T9-T10 facet joint",
    "classification": "Joint → Thoracic spine → Right → T9-T10 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T10-T11 facet joint",
    "classification": "Joint → Thoracic spine → Left → T10-T11 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T10-T11 facet joint",
    "classification": "Joint → Thoracic spine → Right → T10-T11 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T11-T12 facet joint",
    "classification": "Joint → Thoracic spine → Left → T11-T12 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T11-T12 facet joint",
    "classification": "Joint → Thoracic spine → Right → T11-T12 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left T12-T13 facet joint",
    "classification": "Joint → Thoracic spine → Left → T12-T13 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right T12-T13 facet joint",
    "classification": "Joint → Thoracic spine → Right → T12-T13 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left L1-L2 facet joint",
    "classification": "Joint → Lumbar spine → Left → L1-L2 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right L1-L2 facet joint",
    "classification": "Joint → Lumbar spine → Right → L1-L2 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left L2-L3 facet joint",
    "classification": "Joint → Lumbar spine → Left → L2-L3 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right L2-L3 facet joint",
    "classification": "Joint → Lumbar spine → Right → L2-L3 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left L3-L4 facet joint",
    "classification": "Joint → Lumbar spine → Left → L3-L4 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right L3-L4 facet joint",
    "classification": "Joint → Lumbar spine → Right → L3-L4 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left L4-L5 facet joint",
    "classification": "Joint → Lumbar spine → Left → L4-L5 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right L4-L5 facet joint",
    "classification": "Joint → Lumbar spine → Right → L4-L5 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left L5-S1 facet joint",
    "classification": "Joint → Lumbar spine → Left → L5-S1 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Right L5-S1 facet joint",
    "classification": "Joint → Lumbar spine → Right → L5-S1 facet joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Costovertebral joint",
    "classification": "Joint → Ribs → Left → Costovertebral joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Costovertebral joint",
    "classification": "Joint → Ribs → Right → Costovertebral joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Costotransverse joint",
    "classification": "Joint → Ribs → Left → Costotransverse joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Costotransverse joint",
    "classification": "Joint → Ribs → Right → Costotransverse joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Sternocostal joint",
    "classification": "Joint → Ribs → Left → Sternocostal joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Sternocostal joint",
    "classification": "Joint → Ribs → Right → Sternocostal joint",
    "system": "Skeleton"
  },
  {
    "name": "Sacroiliac joint",
    "classification": "Joint → Pelvis → Sacroiliac joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Glenohumeral joint",
    "classification": "Joint → Shoulder → Left → Glenohumeral joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Glenohumeral joint",
    "classification": "Joint → Shoulder → Right → Glenohumeral joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Acromioclavicular joint",
    "classification": "Joint → Shoulder → Left → Acromioclavicular joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Acromioclavicular joint",
    "classification": "Joint → Shoulder → Right → Acromioclavicular joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Sternoclavicular joint",
    "classification": "Joint → Shoulder → Left → Sternoclavicular joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Sternoclavicular joint",
    "classification": "Joint → Shoulder → Right → Sternoclavicular joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Scapulothoracic articulation",
    "classification": "Joint → Shoulder → Left → Scapulothoracic articulation",
    "system": "Skeleton"
  },
  {
    "name": "Right Scapulothoracic articulation",
    "classification": "Joint → Shoulder → Right → Scapulothoracic articulation",
    "system": "Skeleton"
  },
  {
    "name": "Left Humeroulnar joint",
    "classification": "Joint → Elbow → Left → Humeroulnar joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Humeroulnar joint",
    "classification": "Joint → Elbow → Right → Humeroulnar joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Humeroradial joint",
    "classification": "Joint → Elbow → Left → Humeroradial joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Humeroradial joint",
    "classification": "Joint → Elbow → Right → Humeroradial joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Proximal radioulnar joint",
    "classification": "Joint → Elbow → Left → Proximal radioulnar joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Proximal radioulnar joint",
    "classification": "Joint → Elbow → Right → Proximal radioulnar joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Distal radioulnar joint",
    "classification": "Joint → Wrist → Left → Distal radioulnar joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Distal radioulnar joint",
    "classification": "Joint → Wrist → Right → Distal radioulnar joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Radiocarpal joint",
    "classification": "Joint → Wrist → Left → Radiocarpal joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Radiocarpal joint",
    "classification": "Joint → Wrist → Right → Radiocarpal joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Midcarpal joints",
    "classification": "Joint → Wrist → Left → Midcarpal joints",
    "system": "Skeleton"
  },
  {
    "name": "Right Midcarpal joints",
    "classification": "Joint → Wrist → Right → Midcarpal joints",
    "system": "Skeleton"
  },
  {
    "name": "Left Thumb carpometacarpal joint",
    "classification": "Joint → Hand → Left → Thumb carpometacarpal joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Thumb carpometacarpal joint",
    "classification": "Joint → Hand → Right → Thumb carpometacarpal joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Metacarpophalangeal joints",
    "classification": "Joint → Hand → Left → Metacarpophalangeal joints",
    "system": "Skeleton"
  },
  {
    "name": "Right Metacarpophalangeal joints",
    "classification": "Joint → Hand → Right → Metacarpophalangeal joints",
    "system": "Skeleton"
  },
  {
    "name": "Left Interphalangeal joints",
    "classification": "Joint → Hand → Left → Interphalangeal joints",
    "system": "Skeleton"
  },
  {
    "name": "Right Interphalangeal joints",
    "classification": "Joint → Hand → Right → Interphalangeal joints",
    "system": "Skeleton"
  },
  {
    "name": "Left Hip joint",
    "classification": "Joint → Hip → Left → Hip joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Hip joint",
    "classification": "Joint → Hip → Right → Hip joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Tibiofemoral joint",
    "classification": "Joint → Knee → Left → Tibiofemoral joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Tibiofemoral joint",
    "classification": "Joint → Knee → Right → Tibiofemoral joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Patellofemoral joint",
    "classification": "Joint → Knee → Left → Patellofemoral joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Patellofemoral joint",
    "classification": "Joint → Knee → Right → Patellofemoral joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Proximal tibiofibular joint",
    "classification": "Joint → Knee → Left → Proximal tibiofibular joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Proximal tibiofibular joint",
    "classification": "Joint → Knee → Right → Proximal tibiofibular joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Distal tibiofibular joint",
    "classification": "Joint → Ankle → Left → Distal tibiofibular joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Distal tibiofibular joint",
    "classification": "Joint → Ankle → Right → Distal tibiofibular joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Talocrural joint",
    "classification": "Joint → Ankle → Left → Talocrural joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Talocrural joint",
    "classification": "Joint → Ankle → Right → Talocrural joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Subtalar joint",
    "classification": "Joint → Ankle → Left → Subtalar joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Subtalar joint",
    "classification": "Joint → Ankle → Right → Subtalar joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Talonavicular joint",
    "classification": "Joint → Foot → Left → Talonavicular joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Talonavicular joint",
    "classification": "Joint → Foot → Right → Talonavicular joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Calcaneocuboid joint",
    "classification": "Joint → Foot → Left → Calcaneocuboid joint",
    "system": "Skeleton"
  },
  {
    "name": "Right Calcaneocuboid joint",
    "classification": "Joint → Foot → Right → Calcaneocuboid joint",
    "system": "Skeleton"
  },
  {
    "name": "Left Tarsometatarsal joints",
    "classification": "Joint → Foot → Left → Tarsometatarsal joints",
    "system": "Skeleton"
  },
  {
    "name": "Right Tarsometatarsal joints",
    "classification": "Joint → Foot → Right → Tarsometatarsal joints",
    "system": "Skeleton"
  },
  {
    "name": "Left Metatarsophalangeal joints",
    "classification": "Joint → Foot → Left → Metatarsophalangeal joints",
    "system": "Skeleton"
  },
  {
    "name": "Right Metatarsophalangeal joints",
    "classification": "Joint → Foot → Right → Metatarsophalangeal joints",
    "system": "Skeleton"
  },
  {
    "name": "Temporomandibular joint",
    "classification": "Joint → Head / Jaw → Temporomandibular joint",
    "system": "Skeleton"
  },
  {
    "name": "Atlanto-occipital joint",
    "classification": "Joint → Head / Jaw → Atlanto-occipital joint",
    "system": "Skeleton"
  },
  {
    "name": "Atlantoaxial joint",
    "classification": "Joint → Head / Jaw → Atlantoaxial joint",
    "system": "Skeleton"
  },
  {
    "name": "C2-C3 intervertebral disc",
    "classification": "Disc → Cervical spine → C2-C3 disc",
    "system": "Skeleton"
  },
  {
    "name": "C3-C4 intervertebral disc",
    "classification": "Disc → Cervical spine → C3-C4 disc",
    "system": "Skeleton"
  },
  {
    "name": "C4-C5 intervertebral disc",
    "classification": "Disc → Cervical spine → C4-C5 disc",
    "system": "Skeleton"
  },
  {
    "name": "C5-C6 intervertebral disc",
    "classification": "Disc → Cervical spine → C5-C6 disc",
    "system": "Skeleton"
  },
  {
    "name": "C6-C7 intervertebral disc",
    "classification": "Disc → Cervical spine → C6-C7 disc",
    "system": "Skeleton"
  },
  {
    "name": "C7-T1 intervertebral disc",
    "classification": "Disc → Cervical spine → C7-T1 disc",
    "system": "Skeleton"
  },
  {
    "name": "T1-T2 intervertebral disc",
    "classification": "Disc → Thoracic spine → T1-T2 disc",
    "system": "Skeleton"
  },
  {
    "name": "T2-T3 intervertebral disc",
    "classification": "Disc → Thoracic spine → T2-T3 disc",
    "system": "Skeleton"
  },
  {
    "name": "T3-T4 intervertebral disc",
    "classification": "Disc → Thoracic spine → T3-T4 disc",
    "system": "Skeleton"
  },
  {
    "name": "T4-T5 intervertebral disc",
    "classification": "Disc → Thoracic spine → T4-T5 disc",
    "system": "Skeleton"
  },
  {
    "name": "T5-T6 intervertebral disc",
    "classification": "Disc → Thoracic spine → T5-T6 disc",
    "system": "Skeleton"
  },
  {
    "name": "T6-T7 intervertebral disc",
    "classification": "Disc → Thoracic spine → T6-T7 disc",
    "system": "Skeleton"
  },
  {
    "name": "T7-T8 intervertebral disc",
    "classification": "Disc → Thoracic spine → T7-T8 disc",
    "system": "Skeleton"
  },
  {
    "name": "T8-T9 intervertebral disc",
    "classification": "Disc → Thoracic spine → T8-T9 disc",
    "system": "Skeleton"
  },
  {
    "name": "T9-T10 intervertebral disc",
    "classification": "Disc → Thoracic spine → T9-T10 disc",
    "system": "Skeleton"
  },
  {
    "name": "T10-T11 intervertebral disc",
    "classification": "Disc → Thoracic spine → T10-T11 disc",
    "system": "Skeleton"
  },
  {
    "name": "T11-T12 intervertebral disc",
    "classification": "Disc → Thoracic spine → T11-T12 disc",
    "system": "Skeleton"
  },
  {
    "name": "T12-L1 intervertebral disc",
    "classification": "Disc → Thoracic spine → T12-L1 disc",
    "system": "Skeleton"
  },
  {
    "name": "L1-L2 intervertebral disc",
    "classification": "Disc → Lumbar spine → L1-L2 disc",
    "system": "Skeleton"
  },
  {
    "name": "L2-L3 intervertebral disc",
    "classification": "Disc → Lumbar spine → L2-L3 disc",
    "system": "Skeleton"
  },
  {
    "name": "L3-L4 intervertebral disc",
    "classification": "Disc → Lumbar spine → L3-L4 disc",
    "system": "Skeleton"
  },
  {
    "name": "L4-L5 intervertebral disc",
    "classification": "Disc → Lumbar spine → L4-L5 disc",
    "system": "Skeleton"
  },
  {
    "name": "L5-S1 intervertebral disc",
    "classification": "Disc → Lumbar spine → L5-S1 disc",
    "system": "Skeleton"
  }
];
export const MUSCLE_ITEMS = [
  {
    "name": "Left Sternocleidomastoid",
    "classification": "Muscle → Neck / Cervical → Left → Sternocleidomastoid",
    "system": "Muscle"
  },
  {
    "name": "Right Sternocleidomastoid",
    "classification": "Muscle → Neck / Cervical → Right → Sternocleidomastoid",
    "system": "Muscle"
  },
  {
    "name": "Left Scalenus anterior",
    "classification": "Muscle → Neck / Cervical → Left → Scalenus anterior",
    "system": "Muscle"
  },
  {
    "name": "Right Scalenus anterior",
    "classification": "Muscle → Neck / Cervical → Right → Scalenus anterior",
    "system": "Muscle"
  },
  {
    "name": "Left Scalenus medius",
    "classification": "Muscle → Neck / Cervical → Left → Scalenus medius",
    "system": "Muscle"
  },
  {
    "name": "Right Scalenus medius",
    "classification": "Muscle → Neck / Cervical → Right → Scalenus medius",
    "system": "Muscle"
  },
  {
    "name": "Left Scalenus posterior",
    "classification": "Muscle → Neck / Cervical → Left → Scalenus posterior",
    "system": "Muscle"
  },
  {
    "name": "Right Scalenus posterior",
    "classification": "Muscle → Neck / Cervical → Right → Scalenus posterior",
    "system": "Muscle"
  },
  {
    "name": "Left Longus colli",
    "classification": "Muscle → Neck / Cervical → Left → Longus colli",
    "system": "Muscle"
  },
  {
    "name": "Right Longus colli",
    "classification": "Muscle → Neck / Cervical → Right → Longus colli",
    "system": "Muscle"
  },
  {
    "name": "Left Longus capitis",
    "classification": "Muscle → Neck / Cervical → Left → Longus capitis",
    "system": "Muscle"
  },
  {
    "name": "Right Longus capitis",
    "classification": "Muscle → Neck / Cervical → Right → Longus capitis",
    "system": "Muscle"
  },
  {
    "name": "Left Splenius capitis",
    "classification": "Muscle → Neck / Cervical → Left → Splenius capitis",
    "system": "Muscle"
  },
  {
    "name": "Right Splenius capitis",
    "classification": "Muscle → Neck / Cervical → Right → Splenius capitis",
    "system": "Muscle"
  },
  {
    "name": "Left Splenius cervicis",
    "classification": "Muscle → Neck / Cervical → Left → Splenius cervicis",
    "system": "Muscle"
  },
  {
    "name": "Right Splenius cervicis",
    "classification": "Muscle → Neck / Cervical → Right → Splenius cervicis",
    "system": "Muscle"
  },
  {
    "name": "Left Semispinalis capitis",
    "classification": "Muscle → Neck / Cervical → Left → Semispinalis capitis",
    "system": "Muscle"
  },
  {
    "name": "Right Semispinalis capitis",
    "classification": "Muscle → Neck / Cervical → Right → Semispinalis capitis",
    "system": "Muscle"
  },
  {
    "name": "Left Semispinalis cervicis",
    "classification": "Muscle → Neck / Cervical → Left → Semispinalis cervicis",
    "system": "Muscle"
  },
  {
    "name": "Right Semispinalis cervicis",
    "classification": "Muscle → Neck / Cervical → Right → Semispinalis cervicis",
    "system": "Muscle"
  },
  {
    "name": "Left Rectus capitis posterior major",
    "classification": "Muscle → Neck / Cervical → Left → Rectus capitis posterior major",
    "system": "Muscle"
  },
  {
    "name": "Right Rectus capitis posterior major",
    "classification": "Muscle → Neck / Cervical → Right → Rectus capitis posterior major",
    "system": "Muscle"
  },
  {
    "name": "Left Rectus capitis posterior minor",
    "classification": "Muscle → Neck / Cervical → Left → Rectus capitis posterior minor",
    "system": "Muscle"
  },
  {
    "name": "Right Rectus capitis posterior minor",
    "classification": "Muscle → Neck / Cervical → Right → Rectus capitis posterior minor",
    "system": "Muscle"
  },
  {
    "name": "Left Obliquus capitis superior",
    "classification": "Muscle → Neck / Cervical → Left → Obliquus capitis superior",
    "system": "Muscle"
  },
  {
    "name": "Right Obliquus capitis superior",
    "classification": "Muscle → Neck / Cervical → Right → Obliquus capitis superior",
    "system": "Muscle"
  },
  {
    "name": "Left Obliquus capitis inferior",
    "classification": "Muscle → Neck / Cervical → Left → Obliquus capitis inferior",
    "system": "Muscle"
  },
  {
    "name": "Right Obliquus capitis inferior",
    "classification": "Muscle → Neck / Cervical → Right → Obliquus capitis inferior",
    "system": "Muscle"
  },
  {
    "name": "Left Levator scapulae",
    "classification": "Muscle → Neck / Cervical → Left → Levator scapulae",
    "system": "Muscle"
  },
  {
    "name": "Right Levator scapulae",
    "classification": "Muscle → Neck / Cervical → Right → Levator scapulae",
    "system": "Muscle"
  },
  {
    "name": "Left Trapezius",
    "classification": "Muscle → Shoulder / Upper back → Left → Trapezius",
    "system": "Muscle"
  },
  {
    "name": "Right Trapezius",
    "classification": "Muscle → Shoulder / Upper back → Right → Trapezius",
    "system": "Muscle"
  },
  {
    "name": "Left Rhomboid major",
    "classification": "Muscle → Shoulder / Upper back → Left → Rhomboid major",
    "system": "Muscle"
  },
  {
    "name": "Right Rhomboid major",
    "classification": "Muscle → Shoulder / Upper back → Right → Rhomboid major",
    "system": "Muscle"
  },
  {
    "name": "Left Rhomboid minor",
    "classification": "Muscle → Shoulder / Upper back → Left → Rhomboid minor",
    "system": "Muscle"
  },
  {
    "name": "Right Rhomboid minor",
    "classification": "Muscle → Shoulder / Upper back → Right → Rhomboid minor",
    "system": "Muscle"
  },
  {
    "name": "Left Serratus anterior",
    "classification": "Muscle → Shoulder / Upper back → Left → Serratus anterior",
    "system": "Muscle"
  },
  {
    "name": "Right Serratus anterior",
    "classification": "Muscle → Shoulder / Upper back → Right → Serratus anterior",
    "system": "Muscle"
  },
  {
    "name": "Left Supraspinatus",
    "classification": "Muscle → Shoulder / Upper back → Left → Supraspinatus",
    "system": "Muscle"
  },
  {
    "name": "Right Supraspinatus",
    "classification": "Muscle → Shoulder / Upper back → Right → Supraspinatus",
    "system": "Muscle"
  },
  {
    "name": "Left Infraspinatus",
    "classification": "Muscle → Shoulder / Upper back → Left → Infraspinatus",
    "system": "Muscle"
  },
  {
    "name": "Right Infraspinatus",
    "classification": "Muscle → Shoulder / Upper back → Right → Infraspinatus",
    "system": "Muscle"
  },
  {
    "name": "Left Teres minor",
    "classification": "Muscle → Shoulder / Upper back → Left → Teres minor",
    "system": "Muscle"
  },
  {
    "name": "Right Teres minor",
    "classification": "Muscle → Shoulder / Upper back → Right → Teres minor",
    "system": "Muscle"
  },
  {
    "name": "Left Teres major",
    "classification": "Muscle → Shoulder / Upper back → Left → Teres major",
    "system": "Muscle"
  },
  {
    "name": "Right Teres major",
    "classification": "Muscle → Shoulder / Upper back → Right → Teres major",
    "system": "Muscle"
  },
  {
    "name": "Left Subscapularis",
    "classification": "Muscle → Shoulder / Upper back → Left → Subscapularis",
    "system": "Muscle"
  },
  {
    "name": "Right Subscapularis",
    "classification": "Muscle → Shoulder / Upper back → Right → Subscapularis",
    "system": "Muscle"
  },
  {
    "name": "Left Deltoid",
    "classification": "Muscle → Shoulder / Upper back → Left → Deltoid",
    "system": "Muscle"
  },
  {
    "name": "Right Deltoid",
    "classification": "Muscle → Shoulder / Upper back → Right → Deltoid",
    "system": "Muscle"
  },
  {
    "name": "Left Pectoralis major",
    "classification": "Muscle → Shoulder / Upper back → Left → Pectoralis major",
    "system": "Muscle"
  },
  {
    "name": "Right Pectoralis major",
    "classification": "Muscle → Shoulder / Upper back → Right → Pectoralis major",
    "system": "Muscle"
  },
  {
    "name": "Left Pectoralis minor",
    "classification": "Muscle → Shoulder / Upper back → Left → Pectoralis minor",
    "system": "Muscle"
  },
  {
    "name": "Right Pectoralis minor",
    "classification": "Muscle → Shoulder / Upper back → Right → Pectoralis minor",
    "system": "Muscle"
  },
  {
    "name": "Left Latissimus dorsi",
    "classification": "Muscle → Shoulder / Upper back → Left → Latissimus dorsi",
    "system": "Muscle"
  },
  {
    "name": "Right Latissimus dorsi",
    "classification": "Muscle → Shoulder / Upper back → Right → Latissimus dorsi",
    "system": "Muscle"
  },
  {
    "name": "Left Biceps brachii",
    "classification": "Muscle → Arm → Left → Biceps brachii",
    "system": "Muscle"
  },
  {
    "name": "Right Biceps brachii",
    "classification": "Muscle → Arm → Right → Biceps brachii",
    "system": "Muscle"
  },
  {
    "name": "Left Triceps brachii",
    "classification": "Muscle → Arm → Left → Triceps brachii",
    "system": "Muscle"
  },
  {
    "name": "Right Triceps brachii",
    "classification": "Muscle → Arm → Right → Triceps brachii",
    "system": "Muscle"
  },
  {
    "name": "Left Brachialis",
    "classification": "Muscle → Arm → Left → Brachialis",
    "system": "Muscle"
  },
  {
    "name": "Right Brachialis",
    "classification": "Muscle → Arm → Right → Brachialis",
    "system": "Muscle"
  },
  {
    "name": "Left Coracobrachialis",
    "classification": "Muscle → Arm → Left → Coracobrachialis",
    "system": "Muscle"
  },
  {
    "name": "Right Coracobrachialis",
    "classification": "Muscle → Arm → Right → Coracobrachialis",
    "system": "Muscle"
  },
  {
    "name": "Left Anconeus",
    "classification": "Muscle → Arm → Left → Anconeus",
    "system": "Muscle"
  },
  {
    "name": "Right Anconeus",
    "classification": "Muscle → Arm → Right → Anconeus",
    "system": "Muscle"
  },
  {
    "name": "Left Brachioradialis",
    "classification": "Muscle → Forearm → Left → Brachioradialis",
    "system": "Muscle"
  },
  {
    "name": "Right Brachioradialis",
    "classification": "Muscle → Forearm → Right → Brachioradialis",
    "system": "Muscle"
  },
  {
    "name": "Left Pronator teres",
    "classification": "Muscle → Forearm → Left → Pronator teres",
    "system": "Muscle"
  },
  {
    "name": "Right Pronator teres",
    "classification": "Muscle → Forearm → Right → Pronator teres",
    "system": "Muscle"
  },
  {
    "name": "Left Pronator quadratus",
    "classification": "Muscle → Forearm → Left → Pronator quadratus",
    "system": "Muscle"
  },
  {
    "name": "Right Pronator quadratus",
    "classification": "Muscle → Forearm → Right → Pronator quadratus",
    "system": "Muscle"
  },
  {
    "name": "Left Supinator",
    "classification": "Muscle → Forearm → Left → Supinator",
    "system": "Muscle"
  },
  {
    "name": "Right Supinator",
    "classification": "Muscle → Forearm → Right → Supinator",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor carpi radialis",
    "classification": "Muscle → Forearm → Left → Flexor carpi radialis",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor carpi radialis",
    "classification": "Muscle → Forearm → Right → Flexor carpi radialis",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor carpi ulnaris",
    "classification": "Muscle → Forearm → Left → Flexor carpi ulnaris",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor carpi ulnaris",
    "classification": "Muscle → Forearm → Right → Flexor carpi ulnaris",
    "system": "Muscle"
  },
  {
    "name": "Left Palmaris longus",
    "classification": "Muscle → Forearm → Left → Palmaris longus",
    "system": "Muscle"
  },
  {
    "name": "Right Palmaris longus",
    "classification": "Muscle → Forearm → Right → Palmaris longus",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor digitorum superficialis",
    "classification": "Muscle → Forearm → Left → Flexor digitorum superficialis",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor digitorum superficialis",
    "classification": "Muscle → Forearm → Right → Flexor digitorum superficialis",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor digitorum profundus",
    "classification": "Muscle → Forearm → Left → Flexor digitorum profundus",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor digitorum profundus",
    "classification": "Muscle → Forearm → Right → Flexor digitorum profundus",
    "system": "Muscle"
  },
  {
    "name": "Left Extensor carpi radialis longus",
    "classification": "Muscle → Forearm → Left → Extensor carpi radialis longus",
    "system": "Muscle"
  },
  {
    "name": "Right Extensor carpi radialis longus",
    "classification": "Muscle → Forearm → Right → Extensor carpi radialis longus",
    "system": "Muscle"
  },
  {
    "name": "Left Extensor carpi radialis brevis",
    "classification": "Muscle → Forearm → Left → Extensor carpi radialis brevis",
    "system": "Muscle"
  },
  {
    "name": "Right Extensor carpi radialis brevis",
    "classification": "Muscle → Forearm → Right → Extensor carpi radialis brevis",
    "system": "Muscle"
  },
  {
    "name": "Left Extensor carpi ulnaris",
    "classification": "Muscle → Forearm → Left → Extensor carpi ulnaris",
    "system": "Muscle"
  },
  {
    "name": "Right Extensor carpi ulnaris",
    "classification": "Muscle → Forearm → Right → Extensor carpi ulnaris",
    "system": "Muscle"
  },
  {
    "name": "Left Extensor digitorum",
    "classification": "Muscle → Forearm → Left → Extensor digitorum",
    "system": "Muscle"
  },
  {
    "name": "Right Extensor digitorum",
    "classification": "Muscle → Forearm → Right → Extensor digitorum",
    "system": "Muscle"
  },
  {
    "name": "Left Thenar muscles",
    "classification": "Muscle → Hand → Left → Thenar muscles",
    "system": "Muscle"
  },
  {
    "name": "Right Thenar muscles",
    "classification": "Muscle → Hand → Right → Thenar muscles",
    "system": "Muscle"
  },
  {
    "name": "Left Hypothenar muscles",
    "classification": "Muscle → Hand → Left → Hypothenar muscles",
    "system": "Muscle"
  },
  {
    "name": "Right Hypothenar muscles",
    "classification": "Muscle → Hand → Right → Hypothenar muscles",
    "system": "Muscle"
  },
  {
    "name": "Left Lumbricals",
    "classification": "Muscle → Hand → Left → Lumbricals",
    "system": "Muscle"
  },
  {
    "name": "Right Lumbricals",
    "classification": "Muscle → Hand → Right → Lumbricals",
    "system": "Muscle"
  },
  {
    "name": "Left Dorsal interossei",
    "classification": "Muscle → Hand → Left → Dorsal interossei",
    "system": "Muscle"
  },
  {
    "name": "Right Dorsal interossei",
    "classification": "Muscle → Hand → Right → Dorsal interossei",
    "system": "Muscle"
  },
  {
    "name": "Left Palmar interossei",
    "classification": "Muscle → Hand → Left → Palmar interossei",
    "system": "Muscle"
  },
  {
    "name": "Right Palmar interossei",
    "classification": "Muscle → Hand → Right → Palmar interossei",
    "system": "Muscle"
  },
  {
    "name": "Left Rectus abdominis",
    "classification": "Muscle → Abdomen / Trunk → Left → Rectus abdominis",
    "system": "Muscle"
  },
  {
    "name": "Right Rectus abdominis",
    "classification": "Muscle → Abdomen / Trunk → Right → Rectus abdominis",
    "system": "Muscle"
  },
  {
    "name": "Left External oblique",
    "classification": "Muscle → Abdomen / Trunk → Left → External oblique",
    "system": "Muscle"
  },
  {
    "name": "Right External oblique",
    "classification": "Muscle → Abdomen / Trunk → Right → External oblique",
    "system": "Muscle"
  },
  {
    "name": "Left Internal oblique",
    "classification": "Muscle → Abdomen / Trunk → Left → Internal oblique",
    "system": "Muscle"
  },
  {
    "name": "Right Internal oblique",
    "classification": "Muscle → Abdomen / Trunk → Right → Internal oblique",
    "system": "Muscle"
  },
  {
    "name": "Left Transversus abdominis",
    "classification": "Muscle → Abdomen / Trunk → Left → Transversus abdominis",
    "system": "Muscle"
  },
  {
    "name": "Right Transversus abdominis",
    "classification": "Muscle → Abdomen / Trunk → Right → Transversus abdominis",
    "system": "Muscle"
  },
  {
    "name": "Left Quadratus lumborum",
    "classification": "Muscle → Abdomen / Trunk → Left → Quadratus lumborum",
    "system": "Muscle"
  },
  {
    "name": "Right Quadratus lumborum",
    "classification": "Muscle → Abdomen / Trunk → Right → Quadratus lumborum",
    "system": "Muscle"
  },
  {
    "name": "Left Erector spinae",
    "classification": "Muscle → Abdomen / Trunk → Left → Erector spinae",
    "system": "Muscle"
  },
  {
    "name": "Right Erector spinae",
    "classification": "Muscle → Abdomen / Trunk → Right → Erector spinae",
    "system": "Muscle"
  },
  {
    "name": "Left Multifidus",
    "classification": "Muscle → Abdomen / Trunk → Left → Multifidus",
    "system": "Muscle"
  },
  {
    "name": "Right Multifidus",
    "classification": "Muscle → Abdomen / Trunk → Right → Multifidus",
    "system": "Muscle"
  },
  {
    "name": "Left Rotatores",
    "classification": "Muscle → Abdomen / Trunk → Left → Rotatores",
    "system": "Muscle"
  },
  {
    "name": "Right Rotatores",
    "classification": "Muscle → Abdomen / Trunk → Right → Rotatores",
    "system": "Muscle"
  },
  {
    "name": "Left Intercostal muscles",
    "classification": "Muscle → Abdomen / Trunk → Left → Intercostal muscles",
    "system": "Muscle"
  },
  {
    "name": "Right Intercostal muscles",
    "classification": "Muscle → Abdomen / Trunk → Right → Intercostal muscles",
    "system": "Muscle"
  },
  {
    "name": "Left Gluteus maximus",
    "classification": "Muscle → Hip / Gluteal → Left → Gluteus maximus",
    "system": "Muscle"
  },
  {
    "name": "Right Gluteus maximus",
    "classification": "Muscle → Hip / Gluteal → Right → Gluteus maximus",
    "system": "Muscle"
  },
  {
    "name": "Left Gluteus medius",
    "classification": "Muscle → Hip / Gluteal → Left → Gluteus medius",
    "system": "Muscle"
  },
  {
    "name": "Right Gluteus medius",
    "classification": "Muscle → Hip / Gluteal → Right → Gluteus medius",
    "system": "Muscle"
  },
  {
    "name": "Left Gluteus minimus",
    "classification": "Muscle → Hip / Gluteal → Left → Gluteus minimus",
    "system": "Muscle"
  },
  {
    "name": "Right Gluteus minimus",
    "classification": "Muscle → Hip / Gluteal → Right → Gluteus minimus",
    "system": "Muscle"
  },
  {
    "name": "Left Piriformis",
    "classification": "Muscle → Hip / Gluteal → Left → Piriformis",
    "system": "Muscle"
  },
  {
    "name": "Right Piriformis",
    "classification": "Muscle → Hip / Gluteal → Right → Piriformis",
    "system": "Muscle"
  },
  {
    "name": "Left Tensor fasciae latae",
    "classification": "Muscle → Hip / Gluteal → Left → Tensor fasciae latae",
    "system": "Muscle"
  },
  {
    "name": "Right Tensor fasciae latae",
    "classification": "Muscle → Hip / Gluteal → Right → Tensor fasciae latae",
    "system": "Muscle"
  },
  {
    "name": "Left Iliacus",
    "classification": "Muscle → Hip / Gluteal → Left → Iliacus",
    "system": "Muscle"
  },
  {
    "name": "Right Iliacus",
    "classification": "Muscle → Hip / Gluteal → Right → Iliacus",
    "system": "Muscle"
  },
  {
    "name": "Left Psoas major",
    "classification": "Muscle → Hip / Gluteal → Left → Psoas major",
    "system": "Muscle"
  },
  {
    "name": "Right Psoas major",
    "classification": "Muscle → Hip / Gluteal → Right → Psoas major",
    "system": "Muscle"
  },
  {
    "name": "Left Iliopsoas",
    "classification": "Muscle → Hip / Gluteal → Left → Iliopsoas",
    "system": "Muscle"
  },
  {
    "name": "Right Iliopsoas",
    "classification": "Muscle → Hip / Gluteal → Right → Iliopsoas",
    "system": "Muscle"
  },
  {
    "name": "Left Rectus femoris",
    "classification": "Muscle → Thigh → Left → Rectus femoris",
    "system": "Muscle"
  },
  {
    "name": "Right Rectus femoris",
    "classification": "Muscle → Thigh → Right → Rectus femoris",
    "system": "Muscle"
  },
  {
    "name": "Left Vastus lateralis",
    "classification": "Muscle → Thigh → Left → Vastus lateralis",
    "system": "Muscle"
  },
  {
    "name": "Right Vastus lateralis",
    "classification": "Muscle → Thigh → Right → Vastus lateralis",
    "system": "Muscle"
  },
  {
    "name": "Left Vastus medialis",
    "classification": "Muscle → Thigh → Left → Vastus medialis",
    "system": "Muscle"
  },
  {
    "name": "Right Vastus medialis",
    "classification": "Muscle → Thigh → Right → Vastus medialis",
    "system": "Muscle"
  },
  {
    "name": "Left Vastus intermedius",
    "classification": "Muscle → Thigh → Left → Vastus intermedius",
    "system": "Muscle"
  },
  {
    "name": "Right Vastus intermedius",
    "classification": "Muscle → Thigh → Right → Vastus intermedius",
    "system": "Muscle"
  },
  {
    "name": "Left Biceps femoris",
    "classification": "Muscle → Thigh → Left → Biceps femoris",
    "system": "Muscle"
  },
  {
    "name": "Right Biceps femoris",
    "classification": "Muscle → Thigh → Right → Biceps femoris",
    "system": "Muscle"
  },
  {
    "name": "Left Semitendinosus",
    "classification": "Muscle → Thigh → Left → Semitendinosus",
    "system": "Muscle"
  },
  {
    "name": "Right Semitendinosus",
    "classification": "Muscle → Thigh → Right → Semitendinosus",
    "system": "Muscle"
  },
  {
    "name": "Left Semimembranosus",
    "classification": "Muscle → Thigh → Left → Semimembranosus",
    "system": "Muscle"
  },
  {
    "name": "Right Semimembranosus",
    "classification": "Muscle → Thigh → Right → Semimembranosus",
    "system": "Muscle"
  },
  {
    "name": "Left Sartorius",
    "classification": "Muscle → Thigh → Left → Sartorius",
    "system": "Muscle"
  },
  {
    "name": "Right Sartorius",
    "classification": "Muscle → Thigh → Right → Sartorius",
    "system": "Muscle"
  },
  {
    "name": "Left Adductor longus",
    "classification": "Muscle → Thigh → Left → Adductor longus",
    "system": "Muscle"
  },
  {
    "name": "Right Adductor longus",
    "classification": "Muscle → Thigh → Right → Adductor longus",
    "system": "Muscle"
  },
  {
    "name": "Left Adductor brevis",
    "classification": "Muscle → Thigh → Left → Adductor brevis",
    "system": "Muscle"
  },
  {
    "name": "Right Adductor brevis",
    "classification": "Muscle → Thigh → Right → Adductor brevis",
    "system": "Muscle"
  },
  {
    "name": "Left Adductor magnus",
    "classification": "Muscle → Thigh → Left → Adductor magnus",
    "system": "Muscle"
  },
  {
    "name": "Right Adductor magnus",
    "classification": "Muscle → Thigh → Right → Adductor magnus",
    "system": "Muscle"
  },
  {
    "name": "Left Gracilis",
    "classification": "Muscle → Thigh → Left → Gracilis",
    "system": "Muscle"
  },
  {
    "name": "Right Gracilis",
    "classification": "Muscle → Thigh → Right → Gracilis",
    "system": "Muscle"
  },
  {
    "name": "Left Pectineus",
    "classification": "Muscle → Thigh → Left → Pectineus",
    "system": "Muscle"
  },
  {
    "name": "Right Pectineus",
    "classification": "Muscle → Thigh → Right → Pectineus",
    "system": "Muscle"
  },
  {
    "name": "Left Gastrocnemius",
    "classification": "Muscle → Lower leg → Left → Gastrocnemius",
    "system": "Muscle"
  },
  {
    "name": "Right Gastrocnemius",
    "classification": "Muscle → Lower leg → Right → Gastrocnemius",
    "system": "Muscle"
  },
  {
    "name": "Left Soleus",
    "classification": "Muscle → Lower leg → Left → Soleus",
    "system": "Muscle"
  },
  {
    "name": "Right Soleus",
    "classification": "Muscle → Lower leg → Right → Soleus",
    "system": "Muscle"
  },
  {
    "name": "Left Plantaris",
    "classification": "Muscle → Lower leg → Left → Plantaris",
    "system": "Muscle"
  },
  {
    "name": "Right Plantaris",
    "classification": "Muscle → Lower leg → Right → Plantaris",
    "system": "Muscle"
  },
  {
    "name": "Left Tibialis anterior",
    "classification": "Muscle → Lower leg → Left → Tibialis anterior",
    "system": "Muscle"
  },
  {
    "name": "Right Tibialis anterior",
    "classification": "Muscle → Lower leg → Right → Tibialis anterior",
    "system": "Muscle"
  },
  {
    "name": "Left Tibialis posterior",
    "classification": "Muscle → Lower leg → Left → Tibialis posterior",
    "system": "Muscle"
  },
  {
    "name": "Right Tibialis posterior",
    "classification": "Muscle → Lower leg → Right → Tibialis posterior",
    "system": "Muscle"
  },
  {
    "name": "Left Fibularis longus",
    "classification": "Muscle → Lower leg → Left → Fibularis longus",
    "system": "Muscle"
  },
  {
    "name": "Right Fibularis longus",
    "classification": "Muscle → Lower leg → Right → Fibularis longus",
    "system": "Muscle"
  },
  {
    "name": "Left Fibularis brevis",
    "classification": "Muscle → Lower leg → Left → Fibularis brevis",
    "system": "Muscle"
  },
  {
    "name": "Right Fibularis brevis",
    "classification": "Muscle → Lower leg → Right → Fibularis brevis",
    "system": "Muscle"
  },
  {
    "name": "Left Extensor hallucis longus",
    "classification": "Muscle → Lower leg → Left → Extensor hallucis longus",
    "system": "Muscle"
  },
  {
    "name": "Right Extensor hallucis longus",
    "classification": "Muscle → Lower leg → Right → Extensor hallucis longus",
    "system": "Muscle"
  },
  {
    "name": "Left Extensor digitorum longus",
    "classification": "Muscle → Lower leg → Left → Extensor digitorum longus",
    "system": "Muscle"
  },
  {
    "name": "Right Extensor digitorum longus",
    "classification": "Muscle → Lower leg → Right → Extensor digitorum longus",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor hallucis longus",
    "classification": "Muscle → Lower leg → Left → Flexor hallucis longus",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor hallucis longus",
    "classification": "Muscle → Lower leg → Right → Flexor hallucis longus",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor digitorum longus",
    "classification": "Muscle → Lower leg → Left → Flexor digitorum longus",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor digitorum longus",
    "classification": "Muscle → Lower leg → Right → Flexor digitorum longus",
    "system": "Muscle"
  },
  {
    "name": "Left Abductor hallucis",
    "classification": "Muscle → Foot → Left → Abductor hallucis",
    "system": "Muscle"
  },
  {
    "name": "Right Abductor hallucis",
    "classification": "Muscle → Foot → Right → Abductor hallucis",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor hallucis brevis",
    "classification": "Muscle → Foot → Left → Flexor hallucis brevis",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor hallucis brevis",
    "classification": "Muscle → Foot → Right → Flexor hallucis brevis",
    "system": "Muscle"
  },
  {
    "name": "Left Adductor hallucis",
    "classification": "Muscle → Foot → Left → Adductor hallucis",
    "system": "Muscle"
  },
  {
    "name": "Right Adductor hallucis",
    "classification": "Muscle → Foot → Right → Adductor hallucis",
    "system": "Muscle"
  },
  {
    "name": "Left Abductor digiti minimi",
    "classification": "Muscle → Foot → Left → Abductor digiti minimi",
    "system": "Muscle"
  },
  {
    "name": "Right Abductor digiti minimi",
    "classification": "Muscle → Foot → Right → Abductor digiti minimi",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor digiti minimi brevis",
    "classification": "Muscle → Foot → Left → Flexor digiti minimi brevis",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor digiti minimi brevis",
    "classification": "Muscle → Foot → Right → Flexor digiti minimi brevis",
    "system": "Muscle"
  },
  {
    "name": "Left Quadratus plantae",
    "classification": "Muscle → Foot → Left → Quadratus plantae",
    "system": "Muscle"
  },
  {
    "name": "Right Quadratus plantae",
    "classification": "Muscle → Foot → Right → Quadratus plantae",
    "system": "Muscle"
  },
  {
    "name": "Left Plantar interossei",
    "classification": "Muscle → Foot → Left → Plantar interossei",
    "system": "Muscle"
  },
  {
    "name": "Right Plantar interossei",
    "classification": "Muscle → Foot → Right → Plantar interossei",
    "system": "Muscle"
  },
  {
    "name": "Left Supraspinatus tendon",
    "classification": "Tendon → Shoulder → Left → Supraspinatus tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Supraspinatus tendon",
    "classification": "Tendon → Shoulder → Right → Supraspinatus tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Infraspinatus tendon",
    "classification": "Tendon → Shoulder → Left → Infraspinatus tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Infraspinatus tendon",
    "classification": "Tendon → Shoulder → Right → Infraspinatus tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Subscapularis tendon",
    "classification": "Tendon → Shoulder → Left → Subscapularis tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Subscapularis tendon",
    "classification": "Tendon → Shoulder → Right → Subscapularis tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Teres minor tendon",
    "classification": "Tendon → Shoulder → Left → Teres minor tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Teres minor tendon",
    "classification": "Tendon → Shoulder → Right → Teres minor tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Long-head biceps tendon",
    "classification": "Tendon → Shoulder → Left → Long-head biceps tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Long-head biceps tendon",
    "classification": "Tendon → Shoulder → Right → Long-head biceps tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Common extensor tendon",
    "classification": "Tendon → Elbow → Left → Common extensor tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Common extensor tendon",
    "classification": "Tendon → Elbow → Right → Common extensor tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Common flexor tendon",
    "classification": "Tendon → Elbow → Left → Common flexor tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Common flexor tendon",
    "classification": "Tendon → Elbow → Right → Common flexor tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Biceps tendon",
    "classification": "Tendon → Elbow → Left → Biceps tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Biceps tendon",
    "classification": "Tendon → Elbow → Right → Biceps tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Triceps tendon",
    "classification": "Tendon → Elbow → Left → Triceps tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Triceps tendon",
    "classification": "Tendon → Elbow → Right → Triceps tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor tendons",
    "classification": "Tendon → Wrist / Hand → Left → Flexor tendons",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor tendons",
    "classification": "Tendon → Wrist / Hand → Right → Flexor tendons",
    "system": "Muscle"
  },
  {
    "name": "Left Extensor tendons",
    "classification": "Tendon → Wrist / Hand → Left → Extensor tendons",
    "system": "Muscle"
  },
  {
    "name": "Right Extensor tendons",
    "classification": "Tendon → Wrist / Hand → Right → Extensor tendons",
    "system": "Muscle"
  },
  {
    "name": "Left Thumb extensor tendons",
    "classification": "Tendon → Wrist / Hand → Left → Thumb extensor tendons",
    "system": "Muscle"
  },
  {
    "name": "Right Thumb extensor tendons",
    "classification": "Tendon → Wrist / Hand → Right → Thumb extensor tendons",
    "system": "Muscle"
  },
  {
    "name": "Left Finger flexor tendons",
    "classification": "Tendon → Wrist / Hand → Left → Finger flexor tendons",
    "system": "Muscle"
  },
  {
    "name": "Right Finger flexor tendons",
    "classification": "Tendon → Wrist / Hand → Right → Finger flexor tendons",
    "system": "Muscle"
  },
  {
    "name": "Left Gluteal tendons",
    "classification": "Tendon → Hip / Thigh → Left → Gluteal tendons",
    "system": "Muscle"
  },
  {
    "name": "Right Gluteal tendons",
    "classification": "Tendon → Hip / Thigh → Right → Gluteal tendons",
    "system": "Muscle"
  },
  {
    "name": "Left Hamstring tendons",
    "classification": "Tendon → Hip / Thigh → Left → Hamstring tendons",
    "system": "Muscle"
  },
  {
    "name": "Right Hamstring tendons",
    "classification": "Tendon → Hip / Thigh → Right → Hamstring tendons",
    "system": "Muscle"
  },
  {
    "name": "Left Adductor tendons",
    "classification": "Tendon → Hip / Thigh → Left → Adductor tendons",
    "system": "Muscle"
  },
  {
    "name": "Right Adductor tendons",
    "classification": "Tendon → Hip / Thigh → Right → Adductor tendons",
    "system": "Muscle"
  },
  {
    "name": "Left Iliopsoas tendon",
    "classification": "Tendon → Hip / Thigh → Left → Iliopsoas tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Iliopsoas tendon",
    "classification": "Tendon → Hip / Thigh → Right → Iliopsoas tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Quadriceps tendon",
    "classification": "Tendon → Knee → Left → Quadriceps tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Quadriceps tendon",
    "classification": "Tendon → Knee → Right → Quadriceps tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Patellar tendon",
    "classification": "Tendon → Knee → Left → Patellar tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Patellar tendon",
    "classification": "Tendon → Knee → Right → Patellar tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Pes anserine tendons",
    "classification": "Tendon → Knee → Left → Pes anserine tendons",
    "system": "Muscle"
  },
  {
    "name": "Right Pes anserine tendons",
    "classification": "Tendon → Knee → Right → Pes anserine tendons",
    "system": "Muscle"
  },
  {
    "name": "Left Achilles tendon",
    "classification": "Tendon → Ankle / Foot → Left → Achilles tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Achilles tendon",
    "classification": "Tendon → Ankle / Foot → Right → Achilles tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Tibialis anterior tendon",
    "classification": "Tendon → Ankle / Foot → Left → Tibialis anterior tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Tibialis anterior tendon",
    "classification": "Tendon → Ankle / Foot → Right → Tibialis anterior tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Tibialis posterior tendon",
    "classification": "Tendon → Ankle / Foot → Left → Tibialis posterior tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Tibialis posterior tendon",
    "classification": "Tendon → Ankle / Foot → Right → Tibialis posterior tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Fibularis longus tendon",
    "classification": "Tendon → Ankle / Foot → Left → Fibularis longus tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Fibularis longus tendon",
    "classification": "Tendon → Ankle / Foot → Right → Fibularis longus tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Fibularis brevis tendon",
    "classification": "Tendon → Ankle / Foot → Left → Fibularis brevis tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Fibularis brevis tendon",
    "classification": "Tendon → Ankle / Foot → Right → Fibularis brevis tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Flexor hallucis tendon",
    "classification": "Tendon → Ankle / Foot → Left → Flexor hallucis tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Flexor hallucis tendon",
    "classification": "Tendon → Ankle / Foot → Right → Flexor hallucis tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Extensor hallucis tendon",
    "classification": "Tendon → Ankle / Foot → Left → Extensor hallucis tendon",
    "system": "Muscle"
  },
  {
    "name": "Right Extensor hallucis tendon",
    "classification": "Tendon → Ankle / Foot → Right → Extensor hallucis tendon",
    "system": "Muscle"
  },
  {
    "name": "Left Anterior longitudinal ligament",
    "classification": "Ligament → Cervical → Left → Anterior longitudinal ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Anterior longitudinal ligament",
    "classification": "Ligament → Cervical → Right → Anterior longitudinal ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Posterior longitudinal ligament",
    "classification": "Ligament → Cervical → Left → Posterior longitudinal ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Posterior longitudinal ligament",
    "classification": "Ligament → Cervical → Right → Posterior longitudinal ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Ligamentum flavum",
    "classification": "Ligament → Cervical → Left → Ligamentum flavum",
    "system": "Muscle"
  },
  {
    "name": "Right Ligamentum flavum",
    "classification": "Ligament → Cervical → Right → Ligamentum flavum",
    "system": "Muscle"
  },
  {
    "name": "Left Interspinous ligament",
    "classification": "Ligament → Cervical → Left → Interspinous ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Interspinous ligament",
    "classification": "Ligament → Cervical → Right → Interspinous ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Supraspinous ligament",
    "classification": "Ligament → Cervical → Left → Supraspinous ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Supraspinous ligament",
    "classification": "Ligament → Cervical → Right → Supraspinous ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Nuchal ligament",
    "classification": "Ligament → Cervical → Left → Nuchal ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Nuchal ligament",
    "classification": "Ligament → Cervical → Right → Nuchal ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Facet capsular ligament",
    "classification": "Ligament → Cervical → Left → Facet capsular ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Facet capsular ligament",
    "classification": "Ligament → Cervical → Right → Facet capsular ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Iliolumbar ligament",
    "classification": "Ligament → Lumbar → Left → Iliolumbar ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Iliolumbar ligament",
    "classification": "Ligament → Lumbar → Right → Iliolumbar ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Anterior sacroiliac ligament",
    "classification": "Ligament → Pelvis → Left → Anterior sacroiliac ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Anterior sacroiliac ligament",
    "classification": "Ligament → Pelvis → Right → Anterior sacroiliac ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Interosseous sacroiliac ligament",
    "classification": "Ligament → Pelvis → Left → Interosseous sacroiliac ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Interosseous sacroiliac ligament",
    "classification": "Ligament → Pelvis → Right → Interosseous sacroiliac ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Posterior sacroiliac ligament",
    "classification": "Ligament → Pelvis → Left → Posterior sacroiliac ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Posterior sacroiliac ligament",
    "classification": "Ligament → Pelvis → Right → Posterior sacroiliac ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Sacrospinous ligament",
    "classification": "Ligament → Pelvis → Left → Sacrospinous ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Sacrospinous ligament",
    "classification": "Ligament → Pelvis → Right → Sacrospinous ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Sacrotuberous ligament",
    "classification": "Ligament → Pelvis → Left → Sacrotuberous ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Sacrotuberous ligament",
    "classification": "Ligament → Pelvis → Right → Sacrotuberous ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Acromioclavicular ligament",
    "classification": "Ligament → Shoulder → Left → Acromioclavicular ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Acromioclavicular ligament",
    "classification": "Ligament → Shoulder → Right → Acromioclavicular ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Coracoclavicular ligament",
    "classification": "Ligament → Shoulder → Left → Coracoclavicular ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Coracoclavicular ligament",
    "classification": "Ligament → Shoulder → Right → Coracoclavicular ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Coracoacromial ligament",
    "classification": "Ligament → Shoulder → Left → Coracoacromial ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Coracoacromial ligament",
    "classification": "Ligament → Shoulder → Right → Coracoacromial ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Glenohumeral ligaments",
    "classification": "Ligament → Shoulder → Left → Glenohumeral ligaments",
    "system": "Muscle"
  },
  {
    "name": "Right Glenohumeral ligaments",
    "classification": "Ligament → Shoulder → Right → Glenohumeral ligaments",
    "system": "Muscle"
  },
  {
    "name": "Left Sternoclavicular ligaments",
    "classification": "Ligament → Shoulder → Left → Sternoclavicular ligaments",
    "system": "Muscle"
  },
  {
    "name": "Right Sternoclavicular ligaments",
    "classification": "Ligament → Shoulder → Right → Sternoclavicular ligaments",
    "system": "Muscle"
  },
  {
    "name": "Left Ulnar collateral ligament",
    "classification": "Ligament → Elbow → Left → Ulnar collateral ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Ulnar collateral ligament",
    "classification": "Ligament → Elbow → Right → Ulnar collateral ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Radial collateral ligament",
    "classification": "Ligament → Elbow → Left → Radial collateral ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Radial collateral ligament",
    "classification": "Ligament → Elbow → Right → Radial collateral ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Annular ligament",
    "classification": "Ligament → Elbow → Left → Annular ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Annular ligament",
    "classification": "Ligament → Elbow → Right → Annular ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Scapholunate ligament",
    "classification": "Ligament → Wrist / Hand → Left → Scapholunate ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Scapholunate ligament",
    "classification": "Ligament → Wrist / Hand → Right → Scapholunate ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Lunotriquetral ligament",
    "classification": "Ligament → Wrist / Hand → Left → Lunotriquetral ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Lunotriquetral ligament",
    "classification": "Ligament → Wrist / Hand → Right → Lunotriquetral ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Thumb collateral ligament",
    "classification": "Ligament → Wrist / Hand → Left → Thumb collateral ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Thumb collateral ligament",
    "classification": "Ligament → Wrist / Hand → Right → Thumb collateral ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Wrist collateral ligaments",
    "classification": "Ligament → Wrist / Hand → Left → Wrist collateral ligaments",
    "system": "Muscle"
  },
  {
    "name": "Right Wrist collateral ligaments",
    "classification": "Ligament → Wrist / Hand → Right → Wrist collateral ligaments",
    "system": "Muscle"
  },
  {
    "name": "Left Iliofemoral ligament",
    "classification": "Ligament → Hip → Left → Iliofemoral ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Iliofemoral ligament",
    "classification": "Ligament → Hip → Right → Iliofemoral ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Pubofemoral ligament",
    "classification": "Ligament → Hip → Left → Pubofemoral ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Pubofemoral ligament",
    "classification": "Ligament → Hip → Right → Pubofemoral ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Ischiofemoral ligament",
    "classification": "Ligament → Hip → Left → Ischiofemoral ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Ischiofemoral ligament",
    "classification": "Ligament → Hip → Right → Ischiofemoral ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Ligamentum teres",
    "classification": "Ligament → Hip → Left → Ligamentum teres",
    "system": "Muscle"
  },
  {
    "name": "Right Ligamentum teres",
    "classification": "Ligament → Hip → Right → Ligamentum teres",
    "system": "Muscle"
  },
  {
    "name": "Left Anterior cruciate ligament (ACL)",
    "classification": "Ligament → Knee → Left → Anterior cruciate ligament (ACL)",
    "system": "Muscle"
  },
  {
    "name": "Right Anterior cruciate ligament (ACL)",
    "classification": "Ligament → Knee → Right → Anterior cruciate ligament (ACL)",
    "system": "Muscle"
  },
  {
    "name": "Left Posterior cruciate ligament (PCL)",
    "classification": "Ligament → Knee → Left → Posterior cruciate ligament (PCL)",
    "system": "Muscle"
  },
  {
    "name": "Right Posterior cruciate ligament (PCL)",
    "classification": "Ligament → Knee → Right → Posterior cruciate ligament (PCL)",
    "system": "Muscle"
  },
  {
    "name": "Left Medial collateral ligament (MCL)",
    "classification": "Ligament → Knee → Left → Medial collateral ligament (MCL)",
    "system": "Muscle"
  },
  {
    "name": "Right Medial collateral ligament (MCL)",
    "classification": "Ligament → Knee → Right → Medial collateral ligament (MCL)",
    "system": "Muscle"
  },
  {
    "name": "Left Lateral collateral ligament (LCL)",
    "classification": "Ligament → Knee → Left → Lateral collateral ligament (LCL)",
    "system": "Muscle"
  },
  {
    "name": "Right Lateral collateral ligament (LCL)",
    "classification": "Ligament → Knee → Right → Lateral collateral ligament (LCL)",
    "system": "Muscle"
  },
  {
    "name": "Left Patellar retinaculum",
    "classification": "Ligament → Knee → Left → Patellar retinaculum",
    "system": "Muscle"
  },
  {
    "name": "Right Patellar retinaculum",
    "classification": "Ligament → Knee → Right → Patellar retinaculum",
    "system": "Muscle"
  },
  {
    "name": "Left Deltoid ligament",
    "classification": "Ligament → Ankle / Foot → Left → Deltoid ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Deltoid ligament",
    "classification": "Ligament → Ankle / Foot → Right → Deltoid ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Anterior talofibular ligament",
    "classification": "Ligament → Ankle / Foot → Left → Anterior talofibular ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Anterior talofibular ligament",
    "classification": "Ligament → Ankle / Foot → Right → Anterior talofibular ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Calcaneofibular ligament",
    "classification": "Ligament → Ankle / Foot → Left → Calcaneofibular ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Calcaneofibular ligament",
    "classification": "Ligament → Ankle / Foot → Right → Calcaneofibular ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Posterior talofibular ligament",
    "classification": "Ligament → Ankle / Foot → Left → Posterior talofibular ligament",
    "system": "Muscle"
  },
  {
    "name": "Right Posterior talofibular ligament",
    "classification": "Ligament → Ankle / Foot → Right → Posterior talofibular ligament",
    "system": "Muscle"
  },
  {
    "name": "Left Lisfranc ligaments",
    "classification": "Ligament → Ankle / Foot → Left → Lisfranc ligaments",
    "system": "Muscle"
  },
  {
    "name": "Right Lisfranc ligaments",
    "classification": "Ligament → Ankle / Foot → Right → Lisfranc ligaments",
    "system": "Muscle"
  },
  {
    "name": "Left Deep cervical fascia",
    "classification": "Fascia / Soft Tissue → Neck → Left → Deep cervical fascia",
    "system": "Muscle"
  },
  {
    "name": "Right Deep cervical fascia",
    "classification": "Fascia / Soft Tissue → Neck → Right → Deep cervical fascia",
    "system": "Muscle"
  },
  {
    "name": "Left Prevertebral fascia",
    "classification": "Fascia / Soft Tissue → Neck → Left → Prevertebral fascia",
    "system": "Muscle"
  },
  {
    "name": "Right Prevertebral fascia",
    "classification": "Fascia / Soft Tissue → Neck → Right → Prevertebral fascia",
    "system": "Muscle"
  },
  {
    "name": "Left Thoracolumbar fascia",
    "classification": "Fascia / Soft Tissue → Trunk → Left → Thoracolumbar fascia",
    "system": "Muscle"
  },
  {
    "name": "Right Thoracolumbar fascia",
    "classification": "Fascia / Soft Tissue → Trunk → Right → Thoracolumbar fascia",
    "system": "Muscle"
  },
  {
    "name": "Left Pectoral fascia",
    "classification": "Fascia / Soft Tissue → Trunk → Left → Pectoral fascia",
    "system": "Muscle"
  },
  {
    "name": "Right Pectoral fascia",
    "classification": "Fascia / Soft Tissue → Trunk → Right → Pectoral fascia",
    "system": "Muscle"
  },
  {
    "name": "Left Intercostal fascia",
    "classification": "Fascia / Soft Tissue → Trunk → Left → Intercostal fascia",
    "system": "Muscle"
  },
  {
    "name": "Right Intercostal fascia",
    "classification": "Fascia / Soft Tissue → Trunk → Right → Intercostal fascia",
    "system": "Muscle"
  },
  {
    "name": "Left Iliotibial tract",
    "classification": "Fascia / Soft Tissue → Hip / Thigh → Left → Iliotibial tract",
    "system": "Muscle"
  },
  {
    "name": "Right Iliotibial tract",
    "classification": "Fascia / Soft Tissue → Hip / Thigh → Right → Iliotibial tract",
    "system": "Muscle"
  },
  {
    "name": "Left Fascia lata",
    "classification": "Fascia / Soft Tissue → Hip / Thigh → Left → Fascia lata",
    "system": "Muscle"
  },
  {
    "name": "Right Fascia lata",
    "classification": "Fascia / Soft Tissue → Hip / Thigh → Right → Fascia lata",
    "system": "Muscle"
  },
  {
    "name": "Left Gluteal fascia",
    "classification": "Fascia / Soft Tissue → Hip / Thigh → Left → Gluteal fascia",
    "system": "Muscle"
  },
  {
    "name": "Right Gluteal fascia",
    "classification": "Fascia / Soft Tissue → Hip / Thigh → Right → Gluteal fascia",
    "system": "Muscle"
  },
  {
    "name": "Left Crural fascia",
    "classification": "Fascia / Soft Tissue → Lower leg → Left → Crural fascia",
    "system": "Muscle"
  },
  {
    "name": "Right Crural fascia",
    "classification": "Fascia / Soft Tissue → Lower leg → Right → Crural fascia",
    "system": "Muscle"
  },
  {
    "name": "Left Plantar fascia",
    "classification": "Fascia / Soft Tissue → Foot → Left → Plantar fascia",
    "system": "Muscle"
  },
  {
    "name": "Right Plantar fascia",
    "classification": "Fascia / Soft Tissue → Foot → Right → Plantar fascia",
    "system": "Muscle"
  },
  {
    "name": "Left Cervical plexus",
    "classification": "Plexus → Left → Cervical plexus",
    "system": "Muscle"
  },
  {
    "name": "Right Cervical plexus",
    "classification": "Plexus → Right → Cervical plexus",
    "system": "Muscle"
  },
  {
    "name": "Left Brachial plexus",
    "classification": "Plexus → Left → Brachial plexus",
    "system": "Muscle"
  },
  {
    "name": "Right Brachial plexus",
    "classification": "Plexus → Right → Brachial plexus",
    "system": "Muscle"
  },
  {
    "name": "Left Lumbar plexus",
    "classification": "Plexus → Left → Lumbar plexus",
    "system": "Muscle"
  },
  {
    "name": "Right Lumbar plexus",
    "classification": "Plexus → Right → Lumbar plexus",
    "system": "Muscle"
  },
  {
    "name": "Left Sacral plexus",
    "classification": "Plexus → Left → Sacral plexus",
    "system": "Muscle"
  },
  {
    "name": "Right Sacral plexus",
    "classification": "Plexus → Right → Sacral plexus",
    "system": "Muscle"
  },
  {
    "name": "Left Lumbosacral plexus",
    "classification": "Plexus → Left → Lumbosacral plexus",
    "system": "Muscle"
  },
  {
    "name": "Right Lumbosacral plexus",
    "classification": "Plexus → Right → Lumbosacral plexus",
    "system": "Muscle"
  },
  {
    "name": "Left Brachial plexus upper trunk",
    "classification": "Plexus → Left → Brachial plexus upper trunk",
    "system": "Muscle"
  },
  {
    "name": "Right Brachial plexus upper trunk",
    "classification": "Plexus → Right → Brachial plexus upper trunk",
    "system": "Muscle"
  },
  {
    "name": "Left Brachial plexus middle trunk",
    "classification": "Plexus → Left → Brachial plexus middle trunk",
    "system": "Muscle"
  },
  {
    "name": "Right Brachial plexus middle trunk",
    "classification": "Plexus → Right → Brachial plexus middle trunk",
    "system": "Muscle"
  },
  {
    "name": "Left Brachial plexus lower trunk",
    "classification": "Plexus → Left → Brachial plexus lower trunk",
    "system": "Muscle"
  },
  {
    "name": "Right Brachial plexus lower trunk",
    "classification": "Plexus → Right → Brachial plexus lower trunk",
    "system": "Muscle"
  },
  {
    "name": "Left Brachial plexus lateral cord",
    "classification": "Plexus → Left → Brachial plexus lateral cord",
    "system": "Muscle"
  },
  {
    "name": "Right Brachial plexus lateral cord",
    "classification": "Plexus → Right → Brachial plexus lateral cord",
    "system": "Muscle"
  },
  {
    "name": "Left Brachial plexus medial cord",
    "classification": "Plexus → Left → Brachial plexus medial cord",
    "system": "Muscle"
  },
  {
    "name": "Right Brachial plexus medial cord",
    "classification": "Plexus → Right → Brachial plexus medial cord",
    "system": "Muscle"
  },
  {
    "name": "Left Brachial plexus posterior cord",
    "classification": "Plexus → Left → Brachial plexus posterior cord",
    "system": "Muscle"
  },
  {
    "name": "Right Brachial plexus posterior cord",
    "classification": "Plexus → Right → Brachial plexus posterior cord",
    "system": "Muscle"
  }
];
export const NERVE_ITEMS = [
  {
    "name": "Brain (Cerebrum & Cerebellum)",
    "classification": "Nerve → Central Nervous System → Brain",
    "system": "Nerve"
  },
  {
    "name": "Cervical Spinal Cord (C1-C8)",
    "classification": "Nerve → Central Nervous System → Spinal Cord → Cervical",
    "system": "Nerve"
  },
  {
    "name": "Thoracic Spinal Cord (T1-T12)",
    "classification": "Nerve → Central Nervous System → Spinal Cord → Thoracic",
    "system": "Nerve"
  },
  {
    "name": "Lumbar Spinal Cord (L1-L5)",
    "classification": "Nerve → Central Nervous System → Spinal Cord → Lumbar",
    "system": "Nerve"
  },
  {
    "name": "Sacral Spinal Cord & Cauda Equina",
    "classification": "Nerve → Central Nervous System → Spinal Cord → Sacral",
    "system": "Nerve"
  },
  {
    "name": "Optic Nerve (CN II)",
    "classification": "Nerve → Cranial Nerves → CN II → Optic",
    "system": "Nerve"
  },
  {
    "name": "Oculomotor Nerve (CN III)",
    "classification": "Nerve → Cranial Nerves → CN III → Oculomotor",
    "system": "Nerve"
  },
  {
    "name": "Trigeminal Nerve (CN V)",
    "classification": "Nerve → Cranial Nerves → CN V → Trigeminal",
    "system": "Nerve"
  },
  {
    "name": "Facial Nerve (CN VII)",
    "classification": "Nerve → Cranial Nerves → CN VII → Facial",
    "system": "Nerve"
  },
  {
    "name": "Vagus Nerve (CN X)",
    "classification": "Nerve → Cranial Nerves → CN X → Vagus",
    "system": "Nerve"
  },
  {
    "name": "Phrenic Nerve",
    "classification": "Nerve → Cervical Plexus → Phrenic nerve (Diaphragm)",
    "system": "Nerve"
  },
  {
    "name": "Left Brachial Plexus",
    "classification": "Nerve → Peripheral → Upper Limb → Left → Brachial Plexus",
    "system": "Nerve"
  },
  {
    "name": "Right Brachial Plexus",
    "classification": "Nerve → Peripheral → Upper Limb → Right → Brachial Plexus",
    "system": "Nerve"
  },
  {
    "name": "Left Musculocutaneous Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Left → Musculocutaneous",
    "system": "Nerve"
  },
  {
    "name": "Right Musculocutaneous Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Right → Musculocutaneous",
    "system": "Nerve"
  },
  {
    "name": "Left Axillary Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Left → Axillary nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Axillary Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Right → Axillary nerve",
    "system": "Nerve"
  },
  {
    "name": "Left Radial Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Left → Radial nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Radial Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Right → Radial nerve",
    "system": "Nerve"
  },
  {
    "name": "Left Median Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Left → Median nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Median Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Right → Median nerve",
    "system": "Nerve"
  },
  {
    "name": "Left Ulnar Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Left → Ulnar nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Ulnar Nerve",
    "classification": "Nerve → Peripheral → Upper Limb → Right → Ulnar nerve",
    "system": "Nerve"
  },
  {
    "name": "Left Femoral Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Left → Femoral nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Femoral Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Right → Femoral nerve",
    "system": "Nerve"
  },
  {
    "name": "Left Obturator Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Left → Obturator nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Obturator Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Right → Obturator nerve",
    "system": "Nerve"
  },
  {
    "name": "Left Sciatic Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Left → Sciatic nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Sciatic Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Right → Sciatic nerve",
    "system": "Nerve"
  },
  {
    "name": "Left Common Fibular (Peroneal) Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Left → Common Fibular",
    "system": "Nerve"
  },
  {
    "name": "Right Common Fibular (Peroneal) Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Right → Common Fibular",
    "system": "Nerve"
  },
  {
    "name": "Left Tibial Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Left → Tibial nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Tibial Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Right → Tibial nerve",
    "system": "Nerve"
  },
  {
    "name": "Left Sural Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Left → Sural nerve",
    "system": "Nerve"
  },
  {
    "name": "Right Sural Nerve",
    "classification": "Nerve → Peripheral → Lower Limb → Right → Sural nerve",
    "system": "Nerve"
  }
];

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
    .replace(/\bleft\b/g, '')
    .replace(/\bright\b/g, '')
    .replace(/\(2\)/g, '')
    .replace(/\(3\)/g, '')
    .replace(/\./g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Check lookup with side prefixed
  if (side && LOOKUP_MAP.has(`${side.toLowerCase()} ${clean}`)) {
    return enrichEntry(LOOKUP_MAP.get(`${side.toLowerCase()} ${clean}`), rawName);
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
    classification: `${determinedSystem} → ${determinedSystem === 'Muscle' ? 'Musculoskeletal' : (determinedSystem === 'Nerve' ? 'Neuroanatomy' : 'Osteology')} → ${fallbackTitle}`,
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
    title = `${side} ${title}`;
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
    .replace(/\(2\)/g, '')
    .replace(/\(3\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());
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
    return `Musculus ${title.toLowerCase().replace(/^(left|right)\s+/i, '')}`;
  }
  if (system === 'Nerve') {
    if (t.includes('sciatic')) return 'Nervus ischiadicus';
    if (t.includes('femoral')) return 'Nervus femoralis';
    if (t.includes('radial')) return 'Nervus radialis';
    if (t.includes('median')) return 'Nervus medianus';
    if (t.includes('ulnar')) return 'Nervus ulnaris';
    if (t.includes('vagus')) return 'Nervus vagus';
    return `Nervus ${title.toLowerCase().replace(/^(left|right)\s+/i, '')}`;
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
  return `Os ${title.toLowerCase().replace(/^(left|right)\s+/i, '')}`;
}

function getDynamicDescription(title, system, classification = '') {
  const t = title.toLowerCase();
  if (system === 'Muscle') {
    return `Major contractile muscle structure (${title}) of the human muscular system. Composed of aligned myofibrils encased in fascial sheaths, providing active mechanical force generation and joint stabilization.`;
  }
  if (system === 'Nerve') {
    return `Vital neural pathway (${title}) of the nervous system. Transmits afferent sensory action potentials toward the central axis and efferent motor commands to somatic target musculature.`;
  }
  return `Structural rigid mineralized osseous element (${title}) of the skeletal system. Provides mechanical structural scaffolding, vital organ protection, and osteocyte-mediated mineral reservoir homeostasis.`;
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
