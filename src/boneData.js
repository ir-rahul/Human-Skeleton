// Anatomical knowledge base for all 201 human skeleton bones

export const REGIONS = {
  skull: { id: 'skull', name: 'Cranium & Face', color: '#38bdf8', count: 22 },
  spine: { id: 'spine', name: 'Vertebral Column', color: '#a855f7', count: 26 },
  thorax: { id: 'thorax', name: 'Thoracic Cage', color: '#f59e0b', count: 27 },
  upper_limb: { id: 'upper_limb', name: 'Pectoral & Upper Limbs', color: '#10b981', count: 10 },
  hand: { id: 'hand', name: 'Carpals & Hands', color: '#06b6d4', count: 54 },
  pelvis: { id: 'pelvis', name: 'Pelvic Girdle', color: '#ec4899', count: 2 },
  lower_limb: { id: 'lower_limb', name: 'Lower Limbs', color: '#eab308', count: 8 },
  foot: { id: 'foot', name: 'Tarsals & Feet', color: '#84cc16', count: 56 }
};

const BONE_DATABASE = {
  // CRANIUM & FACE
  'frontal bone': {
    title: 'Frontal Bone',
    latin: 'Os frontale',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'Forms the smooth forehead, the bony superior rim of the eye sockets (orbits), and the anterior portion of the cranial base.',
    function: 'Protects the frontal lobes of the cerebral cortex, supports facial musculature, and contains the frontal sinuses which lighten skull weight and resonate voice.',
    articulations: 'Parietal bones (coronal suture), Sphenoid, Ethmoid, Zygomatic, and Nasal bones.',
    clinical: 'Direct blunt force trauma can cause depressed frontal skull fractures. Frontal sinusitis causes intense pressure headaches above the brows.',
    trivia: 'At birth, the frontal bone is divided into two halves separated by the frontal (metopic) suture, which typically fuses completely by age 6 to 8.'
  },
  'occipital bone': {
    title: 'Occipital Bone',
    latin: 'Os occipitale',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'Trapezoid-shaped bone located at the lower back of the cranium. Houses the foramen magnum through which the brainstem connects to the spinal cord.',
    function: 'Encloses and protects the occipital lobe and cerebellum. Features the occipital condyles which articulate with the atlas (C1 vertebra) allowing nodding movements.',
    articulations: 'Atlas (C1), Parietal bones (lambdoid suture), Temporal bones, and Sphenoid bone.',
    clinical: 'Basilar skull fractures involving the occipital condyles can risk damage to the lower cranial nerves and jugular foramen contents.',
    trivia: 'The external occipital protuberance (inion) at the back of your skull is usually much more prominent in males and serves as a major muscle anchor point.'
  },
  'parietal bone': {
    title: 'Parietal Bone',
    latin: 'Os parietale',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'Paired quadrilateral curved bones that form the bulk of the cranial vault ceiling and lateral walls.',
    function: 'Encloses the parietal lobes of the brain, protecting neural sensory processing centers from external impact.',
    articulations: 'Opposing Parietal bone (sagittal suture), Frontal bone (coronal suture), Occipital bone (lambdoid suture), and Temporal bone (squamous suture).',
    clinical: 'The pterion junction beneath the anterior-inferior corner of the parietal bone lies directly over the middle meningeal artery; fractures here can cause life-threatening epidural hematomas.',
    trivia: 'Parietal is derived from the Latin word "paries", meaning "wall", signifying the walls of the braincase.'
  },
  'temporal bone': {
    title: 'Temporal Bone',
    latin: 'Os temporale',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Irregular Bone',
    description: 'Situated at the sides and base of the skull. Encapsulates the delicate middle and inner ear auditory and vestibular balance organs.',
    function: 'Houses hearing and balance apparatus (cochlea, semicircular canals, tympanic membrane), and contains the mandibular fossa for the temporomandibular joint (TMJ).',
    articulations: 'Mandible, Parietal, Occipital, Sphenoid, and Zygomatic bones.',
    clinical: 'Temporal bone fractures often cause hemotympanum, Battle sign (mastoid ecchymosis), sensorineural hearing loss, or facial nerve palsy.',
    trivia: 'The petrous part of the temporal bone is the hardest and densest bone tissue in the entire human body!'
  },
  'sphenoid bone': {
    title: 'Sphenoid Bone',
    latin: 'Os sphenoidale',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Pneumatic / Irregular Bone',
    description: 'Butterfly or bat-shaped keystone bone of the skull base, touching almost every other neurocranial bone.',
    function: 'Houses the pituitary gland within the sella turcica ("Turkish saddle") and provides conduits for optic nerves and ophthalmic arteries.',
    articulations: 'Frontal, Parietal, Temporal, Occipital, Ethmoid, Vomer, Zygomatic, and Palatine bones.',
    clinical: 'Pituitary gland tumors are surgically resected using a minimally invasive transsphenoidal approach through the nasal cavity and sphenoid sinus.',
    trivia: 'Because it articulates with 12 other bones, the sphenoid acts as the architectural keystone locking the entire skull together.'
  },
  'ethmoid': {
    title: 'Ethmoid Bone',
    latin: 'Os ethmoidale',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Pneumatic Bone',
    description: 'Delicate, sponge-like bone situated at the roof of the nasal cavity and between the two orbital cavities.',
    function: 'Separates the nasal cavity from the cranial cavity via the cribriform plate, through which olfactory nerve fibers transmit the sense of smell.',
    articulations: 'Frontal, Sphenoid, Nasal, Maxillary, Lacrimal, Palatine, and Vomer bones.',
    clinical: 'Fracture of the cribriform plate can rupture the meninges, leading to CSF rhinorrhea (cerebrospinal fluid leaking into nasal passages) and loss of smell (anosmia).',
    trivia: 'The crista galli ("cock\'s comb") rises upright from the ethmoid bone to anchor the falx cerebri fold of the brain dura mater.'
  },
  'mandible': {
    title: 'Mandible (Lower Jaw)',
    latin: 'Mandibula',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Irregular Bone',
    description: 'The largest, strongest, and only movable bone of the adult human facial skeleton.',
    function: 'Holds the lower teeth in place, provides powerful leverage for mastication (chewing) via masseter and temporalis muscles, and supports speech articulation.',
    articulations: 'Temporal bones bilaterally at the Temporomandibular Joints (TMJ).',
    clinical: 'Common site of trauma; TMJ dysfunction can cause chronic jaw clicking, locked jaw, and severe facial pain.',
    trivia: 'The human jaw muscles can exert an astonishing bite force exceeding 200 pounds of pressure on the molars!'
  },
  'maxilla': {
    title: 'Maxilla (Upper Jaw)',
    latin: 'Maxilla',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Irregular / Pneumatic Bone',
    description: 'Paired bones forming the upper jaw, roof of the mouth (hard palate), floor of the orbits, and side walls of the nasal cavity.',
    function: 'Anchors the upper teeth, lightens the skull via the maxillary sinuses, and shapes facial aesthetics.',
    articulations: 'Frontal, Ethmoid, Nasal, Zygomatic, Lacrimal, Palatine, Vomer, and opposite Maxilla.',
    clinical: 'Le Fort classification (types I, II, and III) defines surgical and traumatic midfacial fractures of the maxilla.',
    trivia: 'The maxillary sinus is the largest of all paranasal air sinuses and was first illustrated by Leonardo da Vinci in 1489.'
  },
  'zygomatic bone': {
    title: 'Zygomatic Bone (Cheekbone)',
    latin: 'Os zygomaticum',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Irregular Bone',
    description: 'Paired diamond-shaped bones that form the high prominence of the cheeks and lateral rim of each eye socket.',
    function: 'Shields the eyes from lateral impacts and forms the zygomatic arch with the temporal bone for the masseter muscle.',
    articulations: 'Maxilla, Temporal, Sphenoid, and Frontal bones.',
    clinical: 'Tripod fractures are a frequent sport and vehicle collision injury separating the zygomatic bone from its three primary suture lines.',
    trivia: 'The name comes from the Greek "zygon" meaning yoke, because it yokes together the neurocranium and facial skeleton.'
  },
  'nasal bone': {
    title: 'Nasal Bone',
    latin: 'Os nasale',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'Two small, oblong bones located side by side at the upper bridge of the nose.',
    function: 'Forms the rigid bony bridge of the nose, supporting upper lateral nasal cartilages.',
    articulations: 'Frontal bone, Ethmoid bone, Maxilla, and opposing Nasal bone.',
    clinical: 'The nasal bone is by far the most commonly fractured bone of the entire human face due to its exposed, anterior projection.',
    trivia: 'Most of the visible exterior nose is made of hyaline cartilage, while only the top third bridge is actual bone.'
  },
  'vomer': {
    title: 'Vomer',
    latin: 'Vomer',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'Thin, plow-shaped bone positioned vertically in the midsagittal plane.',
    function: 'Forms the posterior-inferior portion of the nasal septum that divides the left and right nasal airways.',
    articulations: 'Sphenoid, Ethmoid, Maxillae, and Palatine bones.',
    clinical: 'Septal deviation often involves misalignment of the vomer and perpendicular plate of the ethmoid, causing chronic nasal obstruction.',
    trivia: '"Vomer" literally translates to "plowshare" in Latin due to its sharp agricultural blade profile.'
  },
  'palatine bone': {
    title: 'Palatine Bone',
    latin: 'Os palatinum',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Irregular Bone',
    description: 'L-shaped paired bones situated at the back of the nasal cavity between the maxilla and sphenoid.',
    function: 'Forms the posterior quarter of the hard palate (roof of the mouth) and parts of the floor and lateral walls of the nasal cavity.',
    articulations: 'Sphenoid, Ethmoid, Maxilla, Inferior nasal concha, Vomer, and opposing Palatine bone.',
    clinical: 'Cleft palate can occur when the horizontal plates of the palatine bones fail to fuse during embryonic development.',
    trivia: 'Despite their small size, palatine bones contribute to the walls of three separate cavities: the mouth, nose, and eye orbits.'
  },
  'lacrimal bone': {
    title: 'Lacrimal Bone',
    latin: 'Os lacrimale',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'The smallest and most fragile bone of the facial skeleton, about the size and thickness of a fingernail.',
    function: 'Forms part of the medial wall of the orbit and houses the lacrimal sac which drains tears into the nasal cavity.',
    articulations: 'Frontal bone, Ethmoid bone, Maxilla, and Inferior nasal concha.',
    clinical: 'Damage can block tear drainage (dacryostenosis), causing continuous overflow of tears (epiphora) onto the cheeks.',
    trivia: 'Named from the Latin "lacrima" meaning "tear", because it accommodates our tear-drainage system.'
  },
  'hyoid bone': {
    title: 'Hyoid Bone',
    latin: 'Os hyoideum',
    category: 'skull',
    division: 'Axial Skeleton',
    type: 'Sesamoid / Irregular Bone',
    description: 'U-shaped solitary bone located in the anterior neck at the level of the C3 vertebra, between the chin and thyroid cartilage.',
    function: 'Acts as an anchor for the tongue musculature and suspends the larynx; critical for swallowing, speech, and open airway maintenance.',
    articulations: 'Articulates with NO other bone! Suspended entirely by stylohyoid ligaments and suprahyoid/infrahyoid muscles.',
    clinical: 'A fractured hyoid bone is a primary forensic autopsy indicator of manual strangulation.',
    trivia: 'The hyoid is uniquely the ONLY completely free-floating bone in the human body with zero direct bony articulations!'
  },

  // VERTEBRAL COLUMN & SPINE
  'atlas': {
    title: 'Atlas (C1 Vertebra)',
    latin: 'Atlas',
    category: 'spine',
    division: 'Axial Skeleton',
    type: 'Irregular Bone (Ring-shaped)',
    description: 'The first cervical vertebra (C1), named after the mythological Greek titan who held up the heavens.',
    function: 'Directly supports the globe of the head. Its concave superior facets cup the occipital condyles, permitting the nodding ("yes") movement.',
    articulations: 'Occipital bone superiorly, Axis (C2 vertebra) inferiorly.',
    clinical: 'A high-impact axial load on the top of the skull can cause a burst fracture of the atlas ring, known as a Jefferson fracture.',
    trivia: 'Unlike other vertebrae, the atlas has no vertebral body and no spinous process—it is a continuous bony ring.'
  },
  'axis': {
    title: 'Axis (C2 Vertebra)',
    latin: 'Axis',
    category: 'spine',
    division: 'Axial Skeleton',
    type: 'Irregular Bone',
    description: 'The second cervical vertebra (C2), characterized by a prominent upward vertical peg called the dens (odontoid process).',
    function: 'Serves as the pivot pivot-axle around which the atlas and skull rotate, allowing horizontal head shaking ("no" motion).',
    articulations: 'Atlas (C1) superiorly, C3 vertebra inferiorly.',
    clinical: 'Hangman fracture refers to bilateral pedicle fractures of the axis, historically caused by hanging and modern high-speed vehicle deceleration.',
    trivia: 'The dens was originally the embryological body of the atlas that detached and fused onto the axis during evolution.'
  },
  'cervical vertebra': {
    title: 'Cervical Vertebra',
    latin: 'Vertebra cervicalis',
    category: 'spine',
    division: 'Axial Skeleton',
    type: 'Irregular Bone',
    description: 'One of the seven vertebrae (C1-C7) comprising the flexible cervical lordosis curve of the neck.',
    function: 'Supports head weight, allows maximal multi-axial rotation, flexion and extension, and protects the cervical spinal cord.',
    articulations: 'Adjacent cervical vertebrae via intervertebral discs and facet joints.',
    clinical: 'Cervical radiculopathy occurs when herniated discs or osteophytes compress exiting spinal nerves, radiating pain down the arm.',
    trivia: 'Almost all mammals, including humans and long-necked giraffes, have exactly seven cervical vertebrae!'
  },
  'thoracic vertebra': {
    title: 'Thoracic Vertebra',
    latin: 'Vertebra thoracica',
    category: 'spine',
    division: 'Axial Skeleton',
    type: 'Irregular Bone',
    description: 'One of the 12 vertebrae (T1-T12) of the mid-back, uniquely featuring costal facets for rib articulations.',
    function: 'Anchors the ribcage to protect heart and lungs, limits excessive spinal rotation, and carries body weight into the lumbar spine.',
    articulations: 'Adjacent thoracic vertebrae and the heads/tubercles of the 12 pairs of ribs.',
    clinical: 'Thoracic kyphosis ("hunchback") can develop with age, osteoporosis compression fractures, or Scheuermann disease.',
    trivia: 'Spinous processes of thoracic vertebrae angle steeply downward like overlapping roof tiles to prevent hyperextension injuries.'
  },
  'lumbar vertebra': {
    title: 'Lumbar Vertebra',
    latin: 'Vertebra lumbalis',
    category: 'spine',
    division: 'Axial Skeleton',
    type: 'Irregular Bone',
    description: 'One of the 5 massive vertebrae (L1-L5) forming the lower back lordosis, with large kidney-shaped bodies.',
    function: 'Bears the tremendous compressive weight of the entire upper torso, head, and arms, transferring load into the pelvis.',
    articulations: 'Adjacent lumbar vertebrae and L5 articulates with the sacrum at the lumbosacral joint.',
    clinical: 'L4-L5 and L5-S1 are the most common sites of disc herniation in humans, causing sciatica and radiating nerve compression.',
    trivia: 'The L5 vertebra body is significantly taller in front than behind, creating the characteristic human lumbar lordotic arch that enables upright bipedal walking.'
  },

  // THORACIC CAGE
  'manubrium': {
    title: 'Manubrium of Sternum',
    latin: 'Manubrium sterni',
    category: 'thorax',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'The broad, thick upper segment of the breastbone resembling the handle of a Roman sword.',
    function: 'Forms the jugular (suprasternal) notch, anchors the collarbones (clavicles) and the first pair of ribs.',
    articulations: 'Clavicles (sternoclavicular joints), Rib 1, Rib 2 (demifacet), and Body of Sternum.',
    clinical: 'The sternal angle (angle of Louis) between manubrium and body is a key clinical landmark for locating the 2nd rib, aortic arch, and carina.',
    trivia: '"Manubrium" is Latin for "handle", continuing the anatomical theme of the sternum as a gladiator gladius sword.'
  },
  'body of sternum': {
    title: 'Body of Sternum (Gladiolus)',
    latin: 'Corpus sterni',
    category: 'thorax',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'The elongated, flat middle portion of the breastbone.',
    function: 'Shields the heart and great vessels from anterior chest impact; anchors costal cartilages of ribs 2 through 7.',
    articulations: 'Manubrium, Xiphoid process, and costal cartilages of Ribs 2 to 7.',
    clinical: 'A median sternotomy divides the sternal body down the midline to provide wide exposure for open-heart surgery.',
    trivia: 'The sternal marrow cavity remains an active hematopoietic site throughout life and is sometimes aspirated for bone marrow biopsies.'
  },
  'xiphoid process': {
    title: 'Xiphoid Process',
    latin: 'Processus xiphoideus',
    category: 'thorax',
    division: 'Axial Skeleton',
    type: 'Cartilaginous / Flat Bone',
    description: 'The smallest and most inferior distal tip of the sternum, initially hyaline cartilage that ossifies in adulthood.',
    function: 'Provides crucial attachment points for the diaphragm, rectus abdominis muscle ("abs"), and linea alba.',
    articulations: 'Body of sternum superiorly.',
    clinical: 'Improper CPR hand placement too low on the chest can fracture the xiphoid, driving bone fragments into the liver or diaphragm.',
    trivia: 'Derived from the Greek word "xiphos", meaning straight sword.'
  },
  'rib': {
    title: 'Rib',
    latin: 'Costa',
    category: 'thorax',
    division: 'Axial Skeleton',
    type: 'Flat Bone',
    description: 'One of the 24 curved, elastic bones arranged in 12 bilateral pairs enclosing the thoracic cavity.',
    function: 'Expands and contracts rhythmically to enable pulmonary respiration while protecting heart, lungs, liver, and spleen.',
    articulations: 'Thoracic vertebrae posteriorly; Ribs 1-7 attach directly to sternum (true ribs), 8-10 indirectly (false ribs), 11-12 float free (floating ribs).',
    clinical: 'Rib fractures can lacerate intercostal vessels causing hemothorax, or puncture lung pleura causing pneumothorax.',
    trivia: 'During deep breathing, the ribcage moves like a combination of a "pump-handle" and a "bucket-handle" to dramatically increase chest volume.'
  },

  // SHOULDER & UPPER LIMB
  'clavicle': {
    title: 'Clavicle (Collarbone)',
    latin: 'Clavicula',
    category: 'upper_limb',
    division: 'Appendicular Skeleton',
    type: 'Long Bone (S-shaped)',
    description: 'Double-curved horizontal strut bone connecting the arm to the trunk at the root of the neck.',
    function: 'Acts as a mechanical shock absorber and boom strut that holds the shoulder girdle away from the thorax, allowing maximal arm mobility.',
    articulations: 'Manubrium of sternum (sternoclavicular joint) and acromion of scapula (acromioclavicular joint).',
    clinical: 'The clavicle is one of the most commonly fractured bones in humans, frequently broken during falls onto an outstretched hand or shoulder.',
    trivia: 'The clavicle is the very first bone to begin ossification in human embryos (week 5) and the last to finish (around age 25).'
  },
  'scapula': {
    title: 'Scapula (Shoulder Blade)',
    latin: 'Scapula',
    category: 'upper_limb',
    division: 'Appendicular Skeleton',
    type: 'Flat Bone',
    description: 'Large, triangular flat bone resting against the postero-lateral chest wall across ribs 2 to 7.',
    function: 'Provides extensive attachment surface for 17 muscles including the rotator cuff; houses the glenoid cavity for the shoulder ball-and-socket joint.',
    articulations: 'Clavicle (acromioclavicular joint) and Humerus (glenohumeral joint). Moves across thoracic wall via a muscular physiological joint.',
    clinical: 'Scapular winging occurs when the long thoracic nerve is damaged, paralyzing serratus anterior and causing the blade to lift off the ribcage.',
    trivia: 'The shoulder joint formed by the scapula has the greatest range of motion of any joint in the human body.'
  },
  'humerus': {
    title: 'Humerus (Upper Arm Bone)',
    latin: 'Humerus',
    category: 'upper_limb',
    division: 'Appendicular Skeleton',
    type: 'Long Bone',
    description: 'The largest and longest bone of the upper limb, extending from the shoulder to the elbow.',
    function: 'Transfers muscular forces for lifting, throwing, pushing, and pulling; accommodates the radial nerve in the radial groove.',
    articulations: 'Scapula (glenoid fossa) proximally; Radius and Ulna distally at the elbow joint.',
    clinical: 'Midshaft humerus fractures risk damaging the radial nerve, resulting in "wrist drop" (loss of wrist extension).',
    trivia: 'The colloquial term "funny bone" is a pun on humerus and describes bumping the ulnar nerve near the medial epicondyle!'
  },
  'radius': {
    title: 'Radius (Forearm Bone)',
    latin: 'Radius',
    category: 'upper_limb',
    division: 'Appendicular Skeleton',
    type: 'Long Bone',
    description: 'Lateral forearm bone running parallel to the ulna on the thumb side; wider at the wrist.',
    function: 'Rotates around the ulna to allow pronation (palm down) and supination (palm up) of the hand; forms the primary wrist joint with carpal bones.',
    articulations: 'Humerus and Ulna proximally; Scaphoid, Lunate, and Ulna distally.',
    clinical: 'A Colles fracture (distal radius fracture) is the classic "dinner fork" wrist deformity from bracing a fall on an outstretched hand.',
    trivia: 'Named "radius" (Latin for spoke of a wheel) because it literally rotates like a wheel spoke around the stationary ulna during hand twisting.'
  },
  'ulna': {
    title: 'Ulna (Forearm Bone)',
    latin: 'Ulna',
    category: 'upper_limb',
    division: 'Appendicular Skeleton',
    type: 'Long Bone',
    description: 'Medial forearm bone running parallel to the radius on the pinky finger side; wider at the elbow.',
    function: 'Forms the primary hinge joint of the elbow via its hook-like olecranon process, preventing arm hyperextension.',
    articulations: 'Humerus (trochlea) and Radius proximally; Radius distally via the ulnar notch.',
    clinical: 'Olecranon bursitis ("miner\'s elbow" or "student\'s elbow") causes fluid swelling over the bony point of the ulna.',
    trivia: 'The olecranon tip of your ulna is what you rest on a desk when propping your chin up with your hands.'
  },

  // CARPALS & HAND
  'carpal': {
    title: 'Carpal Bone (Wrist)',
    latin: 'Ossa carpi',
    category: 'hand',
    division: 'Appendicular Skeleton',
    type: 'Short Bone',
    description: 'One of eight small pebble-like bones arranged in two rows forming the dynamic flexibility of the wrist.',
    function: 'Allows 3D wrist circumduction, flexion, and deviation while forming the rigid carpal tunnel arch for flexor tendons and median nerve.',
    articulations: 'Radius, articular disc of ulna, neighboring carpals, and metacarpals 1 to 5.',
    clinical: 'The scaphoid is prone to avascular necrosis after fracture due to retrograde blood supply. Carpal tunnel syndrome compresses the median nerve.',
    trivia: 'A classic medical mnemonic for the 8 carpals is: "Some Lovers Try Positions That They Cannot Handle" (Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate).'
  },
  'metacarpal': {
    title: 'Metacarpal Bone',
    latin: 'Ossa metacarpalia',
    category: 'hand',
    division: 'Appendicular Skeleton',
    type: 'Long Bone (Miniature)',
    description: 'One of the five cylindrical bones forming the structural palm framework of each hand.',
    function: 'Supports the palm, allows cupping of the hand, and provides a stable base for the highly mobile fingers and opposable thumb.',
    articulations: 'Carpals proximally and proximal phalanges distally at the knuckles (metacarpophalangeal joints).',
    clinical: 'A Boxer fracture is a fracture of the neck of the 5th (or 4th) metacarpal, typically caused by punching a hard surface with a closed fist.',
    trivia: 'The 1st metacarpal (thumb) articulates via a unique saddle joint with the trapezium, giving humans our evolutionary opposable grasp.'
  },
  'phalanx of hand': {
    title: 'Phalanx of Hand (Finger Bone)',
    latin: 'Phalanges manus',
    category: 'hand',
    division: 'Appendicular Skeleton',
    type: 'Long Bone (Miniature)',
    description: 'One of the 14 bones comprising the thumb (2 phalanges) and four fingers (3 phalanges each: proximal, middle, distal).',
    function: 'Permits intricate fine-motor manipulation, tool use, pinching, typing, playing musical instruments, and power gripping.',
    articulations: 'Adjacent phalanges (interphalangeal joints) and metacarpals (MCP knuckles).',
    clinical: 'Mallet finger occurs when an extensor tendon snaps off the dorsal base of the distal phalanx (often from a basketball impact).',
    trivia: 'The human hand has no muscles inside the fingers themselves! Fingers are moved like marionettes by muscles located in the forearm and palm.'
  },

  // PELVIS & LOWER LIMB
  'hip bone': {
    title: 'Hip Bone (Pelvis / Os Coxae)',
    latin: 'Os coxae',
    category: 'pelvis',
    division: 'Appendicular Skeleton',
    type: 'Flat / Irregular Bone',
    description: 'Large, flared bone formed by the embryological fusion of three bones: the Ilium, Ischium, and Pubis.',
    function: 'Transfers upper body weight to the lower extremities, protects pelvic reproductive and urinary viscera, and houses the deep acetabular hip socket.',
    articulations: 'Sacrum posteriorly (sacroiliac joint), opposite hip bone anteriorly (pubic symphysis), and Femur (acetabulofemoral hip joint).',
    clinical: 'Pelvic ring fractures from high-energy collisions carry a high mortality rate due to potential tearing of internal iliac vessels.',
    trivia: 'The female pelvis is wider, shallower, and has an pubic arch greater than 90 degrees to accommodate childbirth, whereas the male arch is narrower (<70 degrees).'
  },
  'femur': {
    title: 'Femur (Thighbone)',
    latin: 'Os femoris',
    category: 'lower_limb',
    division: 'Appendicular Skeleton',
    type: 'Long Bone',
    description: 'The longest, heaviest, and strongest bone in the human body, spanning the hip to the knee.',
    function: 'Carries all compressive loads during walking, running, and jumping; provides leverage for massive hip and thigh extensor muscles.',
    articulations: 'Acetabulum of hip bone proximally; Patella and Tibia distally at the knee joint.',
    clinical: 'Femoral neck fractures in elderly patients with osteoporosis are a major health crisis; midshaft fractures can cause up to 1.5 liters of internal blood loss.',
    trivia: 'The human femur can withstand an axial compressive force of up to 30 times human body weight—stronger than solid reinforced concrete!'
  },
  'patella': {
    title: 'Patella (Kneecap)',
    latin: 'Patella',
    category: 'lower_limb',
    division: 'Appendicular Skeleton',
    type: 'Sesamoid Bone',
    description: 'Flat, inverted triangular bone embedded inside the quadriceps tendon at the front of the knee.',
    function: 'Acts as a mechanical fulcrum pulley, increasing the quadriceps tendon angle of pull by over 30% to maximize knee extension torque.',
    articulations: 'Patellofemoral groove of the femur. Does not articulate with the tibia!',
    clinical: 'Patellofemoral pain syndrome ("runner\'s knee") involves cartilage softening and friction behind the kneecap.',
    trivia: 'Babies are born without a solid bony patella! Their kneecaps begin as soft cartilage and do not fully ossify into solid bone until ages 3 to 6.'
  },
  'tibia': {
    title: 'Tibia (Shinbone)',
    latin: 'Tibia',
    category: 'lower_limb',
    division: 'Appendicular Skeleton',
    type: 'Long Bone',
    description: 'The large, weight-bearing medial bone of the lower leg, easily felt beneath the skin along the front of the shin.',
    function: 'Bears over 85% of all ground-reaction body weight transmitted down through the knee to the ankle.',
    articulations: 'Femur and Fibula proximally; Talus and Fibula distally (forming the medial malleolus bump of the inner ankle).',
    clinical: 'Tibial plateau fractures occur in vehicle bumpers hitting knees; shin splints (tibial stress syndrome) plague long-distance runners.',
    trivia: 'Ancient flute-like instruments were carved from the long hollow tibia bones of birds and animals, giving the bone its Latin name "tibia" (pipe/flute).'
  },
  'fibula': {
    title: 'Fibula (Calf Bone)',
    latin: 'Fibula',
    category: 'lower_limb',
    division: 'Appendicular Skeleton',
    type: 'Long Bone',
    description: 'Slender, pin-like bone running alongside the tibia on the lateral (outer) side of the leg.',
    function: 'Provides anchoring for foot evertor muscles and forms the lateral malleolus outer ankle bracket that stabilizes the ankle mortise.',
    articulations: 'Tibia proximally; Tibia and Talus distally. Bears only about 10-15% of body weight.',
    clinical: 'Because the fibula is largely non-weight bearing, orthopedic surgeons frequently harvest middle segments as vascularized bone grafts to reconstruct jaws or arms!',
    trivia: 'Derived from Latin for "clasp" or "brooch pin", resembling an ancient safety pin fastening a Roman toga.'
  },

  // TARSALS & FOOT
  'calcaneus': {
    title: 'Calcaneus (Heel Bone)',
    latin: 'Calcaneus',
    category: 'foot',
    division: 'Appendicular Skeleton',
    type: 'Short / Irregular Bone',
    description: 'The largest and strongest bone of the foot, forming the anatomical heel.',
    function: 'Acts as the primary initial impact cushion during heel strike and provides a powerful lever arm for the Achilles tendon.',
    articulations: 'Talus superiorly and Cuboid bone anteriorly.',
    clinical: 'Calcaneal spurs and plantar fasciitis cause intense morning heel pain. Falling from ladders onto heels causes Lover fracture.',
    trivia: 'The Achilles tendon anchored to the calcaneus is the thickest and strongest tendon in the human body, capable of withstanding 1,000 lbs of tension!'
  },
  'talus': {
    title: 'Talus (Ankle Bone)',
    latin: 'Talus',
    category: 'foot',
    division: 'Appendicular Skeleton',
    type: 'Short Bone',
    description: 'Saddle-shaped bone resting atop the heel bone, serving as the central keystone connecting leg to foot.',
    function: 'Distributes the entire weight of the body across the calcaneus and the transverse/longitudinal foot arches.',
    articulations: 'Tibia, Fibula, Calcaneus, and Navicular bone.',
    clinical: 'Over 60% of the talus surface is coated in slippery articular cartilage with no direct muscle insertions, making its blood supply precarious and vulnerable to necrosis.',
    trivia: 'In ancient Greece and Rome, sheep and goat talus bones (astragali) were used as four-sided dice for games of chance!'
  },
  'tarsal': {
    title: 'Tarsal Bone (Foot Arch)',
    latin: 'Ossa tarsi',
    category: 'foot',
    division: 'Appendicular Skeleton',
    type: 'Short Bone',
    description: 'One of the midfoot bones (Navicular, Cuboid, Medial, Intermediate, and Lateral Cuneiforms).',
    function: 'Forms the resilient shock-absorbing transverse and medial longitudinal arches of the human foot.',
    articulations: 'Neighboring tarsals, the talus/calcaneus behind, and metatarsals in front.',
    clinical: 'Lisfranc joint fracture-dislocations involve the tarsometatarsal articulation and are severe athletic or trauma injuries.',
    trivia: 'The human foot arch acts as a natural mechanical spring, returning up to 17% of elastic kinetic energy with every running step.'
  },
  'metatarsal': {
    title: 'Metatarsal Bone',
    latin: 'Ossa metatarsalia',
    category: 'foot',
    division: 'Appendicular Skeleton',
    type: 'Long Bone (Miniature)',
    description: 'One of the five elongated bones connecting the ankle tarsals to the toe phalanges.',
    function: 'Forms the ball of the foot and provides propulsion during the toe-off phase of the gait cycle.',
    articulations: 'Tarsals proximally and proximal toe phalanges distally.',
    clinical: 'Stress fractures ("march fractures") of the 2nd and 3rd metatarsals frequently occur in military recruits and marathon runners.',
    trivia: 'The first metatarsal (behind the big toe) bears twice the load of any other metatarsal and absorbs enormous thrust during sprinting.'
  },
  'phalanx of foot': {
    title: 'Phalanx of Foot (Toe Bone)',
    latin: 'Phalanges pedis',
    category: 'foot',
    division: 'Appendicular Skeleton',
    type: 'Long Bone (Miniature)',
    description: 'One of the 14 bones comprising the toes (2 in the hallux/big toe, 3 in each lesser toe).',
    function: 'Maintains balance, stabilizes footing on uneven terrain, and grips surfaces during locomotion.',
    articulations: 'Metatarsals (MTP joints) and adjacent phalanges (interphalangeal joints).',
    clinical: 'Stubbing the little toe can easily cause a painful fracture of the proximal or middle phalanx (buddy-taping is the standard treatment).',
    trivia: 'During human evolution, our toes became much shorter and straighter than those of tree-dwelling primates, specialized for bipedal endurance running.'
  },
  'sesamoid': {
    title: 'Sesamoid Bone of Foot',
    latin: 'Ossa sesamoidea pedis',
    category: 'foot',
    division: 'Appendicular Skeleton',
    type: 'Sesamoid Bone',
    description: 'Small pea-shaped bones embedded beneath the first metatarsophalangeal joint (ball of big toe).',
    function: 'Shields the flexor hallucis brevis tendon from crushing ground pressures and acts as a mechanical lever for the big toe.',
    articulations: 'Glides within grooved facets on the plantar surface of the 1st metatarsal head.',
    clinical: 'Sesamoiditis is painful chronic inflammation caused by repetitive pounding in ballet dancers, sprinters, and basketball players.',
    trivia: 'The name "sesamoid" was coined by ancient physicians because these tiny rounded bones resemble sesame seeds.'
  }
};

// Smart resolver to match GLB node names like "left femur", "fifth thoracic vertebra", "distal phalanx of left thumb"
export function getBoneInfo(rawName) {
  if (!rawName) return null;
  const name = rawName.toLowerCase().trim();

  // 1. Direct match
  if (BONE_DATABASE[name]) {
    return enrichBone(rawName, BONE_DATABASE[name]);
  }

  // 2. Identify side (left / right)
  const isLeft = name.includes('left');
  const isRight = name.includes('right');
  const side = isLeft ? 'Left' : (isRight ? 'Right' : '');

  // 3. Strip left / right for matching
  const cleanName = name
    .replace(/\bleft\b/g, '')
    .replace(/\bright\b/g, '')
    .replace(/\(2\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Try matching stripped name
  if (BONE_DATABASE[cleanName]) {
    return enrichBone(rawName, BONE_DATABASE[cleanName], side);
  }

  // 4. Pattern matches
  // Vertebrae
  if (name.includes('cervical vertebra') || name.includes('cervical')) {
    return enrichBone(rawName, BONE_DATABASE['cervical vertebra'], '', extractVertebraOrdinal(name, 'C'));
  }
  if (name.includes('thoracic vertebra') || name.includes('thoracic')) {
    return enrichBone(rawName, BONE_DATABASE['thoracic vertebra'], '', extractVertebraOrdinal(name, 'T'));
  }
  if (name.includes('lumbar vertebra') || name.includes('lumbar')) {
    return enrichBone(rawName, BONE_DATABASE['lumbar vertebra'], '', extractVertebraOrdinal(name, 'L'));
  }

  // Ribs
  if (name.includes('rib')) {
    const num = extractNumberWord(name);
    return enrichBone(rawName, BONE_DATABASE['rib'], side, num ? `${num} Rib` : 'Rib');
  }

  // Metacarpals & Metatarsals
  if (name.includes('metacarpal')) {
    const num = extractNumberWord(name);
    return enrichBone(rawName, BONE_DATABASE['metacarpal'], side, num ? `${num} Metacarpal` : 'Metacarpal');
  }
  if (name.includes('metatarsal')) {
    const num = extractNumberWord(name);
    return enrichBone(rawName, BONE_DATABASE['metatarsal'], side, num ? `${num} Metatarsal` : 'Metatarsal');
  }

  // Hand Phalanges
  if (name.includes('phalanx') && (name.includes('finger') || name.includes('thumb'))) {
    return enrichBone(rawName, BONE_DATABASE['phalanx of hand'], side, formatPhalanxName(rawName));
  }

  // Foot Phalanges
  if (name.includes('phalanx') && (name.includes('toe') || name.includes('hallux'))) {
    return enrichBone(rawName, BONE_DATABASE['phalanx of foot'], side, formatPhalanxName(rawName));
  }

  // Carpal sub-bones
  const carpals = ['scaphoid', 'lunate', 'triquetrum', 'pisiform', 'trapezium', 'trapezoid', 'capitate', 'hamate'];
  for (const c of carpals) {
    if (name.includes(c)) {
      return enrichBone(rawName, BONE_DATABASE['carpal'], side, capitalize(c) + ' Bone');
    }
  }

  // Tarsal sub-bones
  const tarsals = ['cuboid', 'cuneiform', 'navicular'];
  for (const t of tarsals) {
    if (name.includes(t)) {
      return enrichBone(rawName, BONE_DATABASE['tarsal'], side, capitalizeWords(cleanName));
    }
  }

  // Foot sesamoid
  if (name.includes('sesamoid')) {
    return enrichBone(rawName, BONE_DATABASE['sesamoid'], side);
  }

  // Generic fallback: check keywords
  for (const [key, data] of Object.entries(BONE_DATABASE)) {
    if (cleanName.includes(key) || key.includes(cleanName)) {
      return enrichBone(rawName, data, side);
    }
  }

  // Default fallback
  return {
    rawName,
    title: capitalizeWords(rawName),
    latin: 'Os skeleti',
    category: 'skeleton',
    division: 'Axial or Appendicular',
    type: 'Bone',
    description: `Anatomical component of the human skeleton: ${rawName}.`,
    function: 'Contributes to body structural integrity, organ protection, calcium homeostasis, and muscular locomotion.',
    articulations: 'Adjacent anatomical skeletal structures.',
    clinical: 'Subject to mechanical stresses, osteological remodeling, and age-related changes.',
    trivia: 'The human adult skeleton is composed of approximately 206 individual bones continuously remodeling throughout life.'
  };
}

function enrichBone(rawName, baseData, side = '', overrideTitle = '') {
  let title = overrideTitle || baseData.title;
  if (side && !title.toLowerCase().includes(side.toLowerCase())) {
    title = `${side} ${title}`;
  }
  return {
    rawName,
    title,
    latin: baseData.latin,
    category: baseData.category,
    division: baseData.division,
    type: baseData.type,
    description: baseData.description,
    function: baseData.function,
    articulations: baseData.articulations,
    clinical: baseData.clinical,
    trivia: baseData.trivia
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

function extractNumberWord(text) {
  const map = {
    first: '1st',
    second: '2nd',
    third: '3rd',
    fourth: '4th',
    fifth: '5th',
    sixth: '6th',
    seventh: '7th',
    eighth: '8th',
    ninth: '9th',
    tenth: '10th',
    eleventh: '11th',
    twelfth: '12th'
  };
  for (const [w, n] of Object.entries(map)) {
    if (text.includes(w)) return n;
  }
  return '';
}

function extractVertebraOrdinal(text, prefix) {
  const map = {
    first: '1', second: '2', third: '3', fourth: '4', fifth: '5',
    sixth: '6', seventh: '7', eighth: '8', ninth: '9', tenth: '10',
    eleventh: '11', twelfth: '12'
  };
  for (const [w, n] of Object.entries(map)) {
    if (text.includes(w)) return `${prefix}${n} Vertebra (${capitalize(w)})`;
  }
  return `${prefix} Vertebra`;
}

function formatPhalanxName(name) {
  return capitalizeWords(name.replace(/\(2\)/g, ''));
}
