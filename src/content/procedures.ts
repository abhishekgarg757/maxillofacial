import type { Procedure } from "@/lib/types";

/**
 * Patient-education content for each procedure.
 *
 * Sourcing: written from well-established oral & maxillofacial surgery
 * clinical practice and cross-checked against reputable patient-education
 * sources (AAOMS, Cleveland Clinic, Mayo Clinic, NHS, Johns Hopkins, NIDCR).
 * Figures are kept qualitative or expressed as ranges commonly reported in
 * the literature to avoid overstating precision. This is general education,
 * not individual medical advice — every plan is tailored in consultation.
 *
 * TODO (clinical review): Dr. Gupta to review and sign off all copy before
 * publishing, and adjust any wording to match her specific practice.
 */
export const procedures: Procedure[] = [
  {
    slug: "jaw-reconstruction",
    icon: "Bone",
    title: "Jaw Reconstruction",
    tagline: "Rebuilding the jaw's form and function after injury, disease or tumour.",
    summary:
      "Jaw reconstruction restores the structure of the upper (maxilla) or lower (mandible) jaw after trauma, tumour removal, infection or developmental loss — using bone grafts, microvascular free flaps and patient-specific 3D planning to rebuild the jaw and create a foundation for teeth.",
    sections: [
      {
        heading: "What jaw reconstruction involves",
        body: "Reconstruction re-establishes the continuity, shape and strength of the jawbone so that the face is supported, the bite works, and speech and swallowing are restored. Depending on the size and location of the defect, the surgeon may use the patient's own bone, contoured titanium plates, or a combination, frequently planned in advance with 3D imaging.",
      },
      {
        heading: "Techniques we may use",
        body: "Modern reconstruction is highly individualised. The right approach depends on how much bone and soft tissue is missing, the health of the surrounding area and whether teeth need to be replaced afterwards.",
        points: [
          "Bone grafting — using the patient's own bone (commonly from the hip, lower leg or skull) or processed graft material to fill defects.",
          "Microvascular free-flap surgery — transferring bone with its own blood supply (for example a fibula free flap) to rebuild larger segments of jaw.",
          "Distraction osteogenesis — gradually lengthening bone by slowly separating cut segments so new bone forms in the gap.",
          "Virtual surgical planning with patient-specific, 3D-printed cutting guides and titanium plates for precise, predictable results.",
        ],
      },
      {
        heading: "Restoring your teeth and smile",
        body: "Once the reconstructed bone has healed and matured, dental implants can often be placed to support fixed teeth — completing the journey from reconstruction back to confident chewing and a natural-looking smile. This is usually staged over several months.",
      },
    ],
    indications: [
      "Jaw defects after removal of cysts, benign tumours (such as ameloblastoma) or oral cancer",
      "Severe facial trauma with loss of bone",
      "Osteonecrosis or chronic infection (osteomyelitis) of the jaw",
      "Congenital or developmental under-development of the jaw",
      "A severely thin (atrophic) jaw that needs bone before dental implants",
    ],
    benefits: [
      "Restored facial symmetry and profile",
      "Improved chewing, swallowing and speech",
      "A stable foundation for dental implants and fixed teeth",
      "Better long-term oral health and quality of life",
    ],
    risks: [
      "Graft or flap healing problems, occasionally needing revision surgery",
      "Infection",
      "Temporary or, less commonly, lasting numbness of the lip, chin or tongue",
      "Discomfort or altered function at the donor site",
    ],
    anaesthesia:
      "General anaesthesia, usually with a planned hospital stay; complex free-flap cases involve longer monitoring.",
    duration: "Typically 2–8+ hours depending on the complexity of the defect.",
    recovery: [
      {
        period: "Hospital stay",
        detail:
          "Close monitoring for several days, especially after free-flap reconstruction, with pain control and early nutrition support.",
      },
      {
        period: "First few weeks",
        detail:
          "A soft or liquid diet, gentle oral hygiene and careful wound care while swelling settles.",
      },
      {
        period: "Bone healing (weeks to months)",
        detail:
          "The reconstructed bone consolidates over several months; activity is increased gradually under guidance.",
      },
      {
        period: "Dental rehabilitation",
        detail:
          "If planned, dental implants and fixed teeth are added in a later stage once healing is complete.",
      },
    ],
    faqs: [
      {
        question: "Will I be able to eat and speak normally again?",
        answer:
          "The goal of reconstruction is to restore both function and appearance. Most patients regain comfortable chewing, swallowing and clear speech as healing progresses, particularly once any planned dental rehabilitation is completed. Your recovery plan is tailored to your specific reconstruction.",
      },
      {
        question: "Where does the bone for grafting come from?",
        answer:
          "Bone is most often taken from your own body — commonly the hip, lower leg (fibula) or skull — because it integrates well. In some situations processed graft material or patient-specific implants are used instead or in combination. Your surgeon will explain the safest option for your case.",
      },
      {
        question: "How soon can I have dental implants after reconstruction?",
        answer:
          "Implants are usually placed in a later stage, after the reconstructed bone has healed and matured — often several months later. This staged approach gives the most reliable long-term result.",
      },
    ],
    sources: [
      { label: "AAOMS — Oral & Maxillofacial Surgery", url: "https://myoms.org" },
      { label: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org" },
      { label: "Cleveland Clinic", url: "https://my.clevelandclinic.org" },
    ],
  },

  {
    slug: "facial-trauma-surgery",
    icon: "ShieldPlus",
    title: "Facial Trauma Surgery",
    tagline: "Expert repair of facial injuries to restore form, function and confidence.",
    summary:
      "Facial trauma surgery treats injuries to the facial skeleton and soft tissues — including fractures of the jaw, cheekbone, eye socket and nose, dental injuries and lacerations — using precise techniques designed to restore the bite, protect the eyes and airway, and preserve appearance.",
    sections: [
      {
        heading: "Injuries we treat",
        body: "Oral and maxillofacial surgeons are core members of the facial trauma team. Injuries range from a single broken tooth to complex, multi-bone facial fractures, and each is assessed carefully — often with CT imaging — to plan the safest repair.",
        points: [
          "Lower jaw (mandible) fractures",
          "Upper jaw (maxilla / Le Fort) fractures",
          "Cheekbone (zygomatic) and eye-socket (orbital) fractures",
          "Nasal fractures",
          "Tooth and dento-alveolar injuries",
          "Facial soft-tissue lacerations",
        ],
      },
      {
        heading: "How fractures are repaired",
        body: "The aim is to return the bones to their correct position and hold them stable while they heal, with particular attention to restoring the bite exactly. Treatment is matched to the injury.",
        points: [
          "Closed reduction — repositioning bones without incisions, sometimes supported by temporarily securing the bite (maxillomandibular fixation).",
          "Open reduction and internal fixation (ORIF) — repositioning the bones through carefully hidden incisions and fixing them with small titanium plates and screws.",
          "Orbital floor and cheekbone repair to protect eye position and movement.",
          "Careful, layered repair of soft-tissue wounds to minimise scarring.",
        ],
      },
      {
        heading: "Restoring the bite and appearance",
        body: "Because even small changes can affect how the teeth meet, restoring an accurate bite is central to facial trauma care. Where possible, incisions are placed inside the mouth or within natural creases to keep scars discreet.",
      },
    ],
    indications: [
      "Displaced fractures of the jaw, cheekbone, eye socket or nose",
      "A bite that no longer meets correctly after injury",
      "Knocked-out, loosened or fractured teeth",
      "Facial lacerations requiring specialist repair",
    ],
    benefits: [
      "Restored, accurate bite and jaw function",
      "Protection of the eyes, airway and facial nerves",
      "Preserved facial symmetry and appearance",
      "Discreet scarring through hidden or intra-oral incisions",
    ],
    risks: [
      "Infection",
      "Temporary or lasting numbness in the lip, cheek, chin or around the eye",
      "A change in bite (malocclusion) that may need adjustment",
      "Occasionally, plates may need to be removed later",
    ],
    anaesthesia:
      "Local anaesthesia for minor injuries; general anaesthesia for fractures and complex repairs.",
    duration: "From under an hour for simple injuries to several hours for complex fractures.",
    recovery: [
      {
        period: "First 1–2 weeks",
        detail:
          "Swelling and bruising are greatest early on and then settle; a soft diet and meticulous oral hygiene are important.",
      },
      {
        period: "Bite and bone healing (about 4–6 weeks)",
        detail:
          "Fractures generally unite over roughly six weeks; you may be guided with elastics or dietary restrictions during this time.",
      },
      {
        period: "Return to activity",
        detail:
          "Contact sports and strenuous activity are reintroduced gradually once healing is confirmed.",
      },
    ],
    faqs: [
      {
        question: "Will I have visible scars on my face?",
        answer:
          "Surgeons go to great lengths to avoid them. Many repairs are done through incisions inside the mouth, and when external incisions are unavoidable they are placed within natural skin creases or hairlines to keep them as discreet as possible.",
      },
      {
        question: "Do the titanium plates have to be removed later?",
        answer:
          "Usually not. The small plates and screws used to fix facial fractures are designed to stay in place permanently and are well tolerated. They are only removed if they cause a problem such as irritation or infection.",
      },
      {
        question: "My tooth was knocked out — what should I do?",
        answer:
          "Time matters. Handle the tooth by the crown (not the root), keep it moist — ideally in milk or saliva — and seek emergency dental or maxillofacial care immediately, as a tooth can sometimes be re-implanted if treated quickly.",
      },
    ],
    sources: [
      { label: "AAOMS — Facial Injury / Trauma", url: "https://myoms.org" },
      { label: "Cleveland Clinic", url: "https://my.clevelandclinic.org" },
      { label: "NHS", url: "https://www.nhs.uk" },
    ],
  },

  {
    slug: "orthognathic-surgery",
    icon: "Ruler",
    title: "Orthognathic Surgery",
    tagline: "Repositioning the jaws to correct the bite, breathing and facial balance.",
    summary:
      "Orthognathic (jaw-alignment) surgery repositions the upper and/or lower jaw to correct skeletal discrepancies that affect biting, chewing, speech, breathing and facial harmony. It is usually combined with orthodontics and planned in 3D for a precise, predictable result.",
    sections: [
      {
        heading: "When jaws don't line up",
        body: "When the upper and lower jaws are different sizes or positions, braces or aligners alone cannot fully correct the bite. Orthognathic surgery moves the bones themselves into the correct relationship, addressing problems such as open bites, pronounced under- or over-bites and facial asymmetry, and can also help certain cases of obstructive sleep apnoea.",
      },
      {
        heading: "The surgical–orthodontic journey",
        body: "Treatment is a partnership between your orthodontist and surgeon, typically over a planned timeline.",
        points: [
          "Orthodontics first — braces or aligners align the teeth within each jaw in preparation.",
          "3D planning — CT and digital models are used to plan the exact movements and surgical guides.",
          "Surgery — the jaws are repositioned through incisions inside the mouth and secured with small titanium plates and screws.",
          "Finishing orthodontics — fine-tuning the bite after the bones have healed.",
        ],
      },
      {
        heading: "Common procedures",
        body: "The specific operation depends on which jaw needs to move and in which direction.",
        points: [
          "Le Fort I osteotomy — repositioning the upper jaw (maxilla).",
          "Bilateral sagittal split osteotomy (BSSO) — repositioning the lower jaw (mandible).",
          "Genioplasty — reshaping or repositioning the chin to improve balance.",
        ],
      },
    ],
    indications: [
      "A bite that cannot be corrected by orthodontics alone",
      "Pronounced underbite, overbite or open bite",
      "Difficulty biting, chewing or swallowing",
      "Facial imbalance or asymmetry related to jaw position",
      "Selected cases of obstructive sleep apnoea",
    ],
    benefits: [
      "A functional, comfortable and stable bite",
      "Easier chewing, speaking and — in some cases — breathing",
      "Improved facial balance and profile",
      "Long-lasting, structural correction",
    ],
    risks: [
      "Temporary or, less commonly, lasting numbness of the lip, chin or cheek",
      "Swelling and a period of dietary restriction",
      "Need for finishing orthodontics to perfect the bite",
      "Rarely, relapse or the need for revision",
    ],
    anaesthesia: "General anaesthesia, with a short hospital stay.",
    duration: "Usually 1–4 hours depending on whether one or both jaws are moved.",
    recovery: [
      {
        period: "First 2 weeks",
        detail:
          "Most swelling occurs early; many people take around two weeks away from work or study and follow a soft or liquid diet.",
      },
      {
        period: "6–12 weeks",
        detail:
          "Bone healing progresses; guiding elastics may be used and diet is advanced gradually as comfort allows.",
      },
      {
        period: "Several months",
        detail:
          "Final settling of the bite and completion of orthodontics; numbness, if present, continues to improve.",
      },
    ],
    faqs: [
      {
        question: "Do I need braces as well as surgery?",
        answer:
          "In most cases, yes. Orthodontics before surgery aligns the teeth within each jaw so they fit together correctly once the jaws are repositioned, and a short phase afterwards fine-tunes the bite. Surgery and orthodontics work together as one plan.",
      },
      {
        question: "How long until I look and feel normal again?",
        answer:
          "Early swelling settles substantially over the first few weeks, with many people returning to work or study at around two weeks. Subtle swelling can take a few months to fully resolve, and the final result becomes clear as healing completes.",
      },
      {
        question: "Are the incisions on my face?",
        answer:
          "Almost always the surgery is performed through incisions inside the mouth, so there are no visible facial scars in the great majority of cases.",
      },
    ],
    sources: [
      { label: "AAOMS — Corrective Jaw Surgery", url: "https://myoms.org" },
      { label: "Cleveland Clinic", url: "https://my.clevelandclinic.org" },
      { label: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org" },
    ],
  },

  {
    slug: "dental-implants",
    icon: "Anchor",
    title: "Dental Implants",
    tagline: "Permanent, natural-looking replacements for missing teeth.",
    summary:
      "Dental implants are small titanium posts placed into the jawbone to replace the roots of missing teeth. They fuse with the bone (osseointegration) to provide a stable, long-lasting foundation for crowns, bridges or secure dentures — and are reported in the dental literature to have high long-term success rates.",
    sections: [
      {
        heading: "How dental implants work",
        body: "An implant acts as an artificial tooth root. After it is placed, the surrounding bone grows onto its surface over a few months, locking it firmly in place. A natural-looking crown, bridge or denture is then attached, restoring both the look and the function of your teeth.",
      },
      {
        heading: "Solutions for every situation",
        body: "Implant treatment can replace a single tooth or rehabilitate a whole mouth.",
        points: [
          "Single-tooth implants — replacing one tooth without affecting the neighbouring teeth.",
          "Implant bridges — replacing several missing teeth in a row.",
          "Full-arch solutions — a fixed set of teeth supported by a small number of implants.",
          "Implant-retained dentures — clipping a denture securely onto implants to stop it slipping.",
        ],
      },
      {
        heading: "When extra bone is needed",
        body: "If the jaw lacks enough bone to hold an implant, procedures such as bone grafting or a sinus lift can rebuild the site first, making implant treatment possible for more people.",
      },
    ],
    indications: [
      "One or more missing teeth",
      "Loose, uncomfortable or poorly fitting dentures",
      "A failing tooth that cannot be saved",
      "A wish for a fixed alternative to a denture or bridge",
    ],
    benefits: [
      "Look, feel and function like natural teeth",
      "Help preserve jawbone and facial structure",
      "Don't rely on grinding down neighbouring teeth",
      "Durable and long-lasting with good care",
    ],
    risks: [
      "Infection or inflammation around the implant (peri-implantitis)",
      "Implant failing to fuse with the bone, occasionally requiring replacement",
      "Proximity to nerves or the sinus, which careful planning is designed to avoid",
      "Need for bone grafting in some cases",
    ],
    anaesthesia:
      "Usually local anaesthesia, with sedation available for anxious patients or longer procedures.",
    duration: "Often around an hour for a single implant; longer for multiple or full-arch cases.",
    recovery: [
      {
        period: "First few days",
        detail:
          "Mild swelling or discomfort that is generally well controlled with simple measures; a soft diet is advised.",
      },
      {
        period: "Osseointegration (about 3–6 months)",
        detail:
          "The implant fuses with the bone beneath the gum; a temporary tooth can often be worn in the meantime.",
      },
      {
        period: "Final restoration",
        detail:
          "Once integration is confirmed, the permanent crown, bridge or denture is fitted.",
      },
    ],
    faqs: [
      {
        question: "How long do dental implants last?",
        answer:
          "With good oral hygiene and regular check-ups, implants are designed to last many years, and dental studies commonly report high long-term success — frequently around 95% survival over ten years. Long-term health depends on keeping the gums and bone around the implant healthy.",
      },
      {
        question: "Is getting an implant painful?",
        answer:
          "The procedure itself is carried out under local anaesthetic, so it is not painful at the time. Afterwards, most people experience only mild soreness that settles within a few days and is managed with simple pain relief.",
      },
      {
        question: "Am I a suitable candidate?",
        answer:
          "Many adults are, provided they have reasonably healthy gums and enough bone to support an implant — and bone grafting can help when bone is lacking. Smoking and some medical conditions can affect healing, so a personal assessment is the best way to know.",
      },
    ],
    sources: [
      { label: "NIDCR (US National Institute of Dental Research)", url: "https://www.nidcr.nih.gov" },
      { label: "Mayo Clinic", url: "https://www.mayoclinic.org" },
      { label: "AAOMS — Dental Implant Surgery", url: "https://myoms.org" },
    ],
  },

  {
    slug: "jaw-joint-surgery",
    icon: "Activity",
    title: "Jaw Joint (TMJ) Surgery",
    tagline: "Relieving pain and restoring movement in the temporomandibular joint.",
    summary:
      "Jaw joint surgery treats problems of the temporomandibular joint (TMJ) — the hinge connecting the lower jaw to the skull — when they do not respond to non-surgical care. Options range from minimally invasive techniques to joint reconstruction, chosen according to the specific problem.",
    sections: [
      {
        heading: "Conservative care comes first",
        body: "Most temporomandibular disorders improve with non-surgical measures, and these are almost always tried first. Surgery is reserved for specific structural problems or pain that persists despite appropriate conservative treatment.",
        points: [
          "Bite splints or night guards",
          "Jaw physiotherapy and exercises",
          "Anti-inflammatory or muscle-relaxant medication",
          "Stress and habit management",
        ],
      },
      {
        heading: "Surgical options when needed",
        body: "When surgery is indicated, the least invasive option that will solve the problem is preferred.",
        points: [
          "Arthrocentesis — flushing the joint with sterile fluid through fine needles to reduce inflammation and improve movement.",
          "Arthroscopy — keyhole surgery using a tiny camera to treat the joint through very small incisions.",
          "Open joint surgery (arthroplasty) — repairing or repositioning the joint or its disc for more advanced problems.",
          "Total joint replacement — reconstructing a severely damaged joint, for example in advanced degeneration or ankylosis.",
        ],
      },
      {
        heading: "A tailored, step-wise approach",
        body: "Because the TMJ is a complex joint, treatment is highly individualised. Careful diagnosis — often including specialised imaging — guides the choice between conservative care and the appropriate level of surgery.",
      },
    ],
    indications: [
      "Persistent jaw-joint pain despite conservative treatment",
      "Significant limitation in opening the mouth, or locking",
      "Internal derangement (disc displacement) confirmed on imaging",
      "Advanced joint degeneration, injury or ankylosis",
    ],
    benefits: [
      "Reduced jaw pain",
      "Improved mouth opening and jaw movement",
      "Easier chewing and speaking",
      "Better day-to-day quality of life",
    ],
    risks: [
      "Incomplete relief of symptoms in some cases",
      "Temporary weakness or numbness near the joint from proximity to facial nerves",
      "Infection",
      "Need for further treatment in complex cases",
    ],
    anaesthesia:
      "Minimally invasive procedures may use sedation or general anaesthesia; open and replacement surgery uses general anaesthesia.",
    duration: "From around 30–60 minutes for minimally invasive procedures to several hours for joint replacement.",
    recovery: [
      {
        period: "After minimally invasive surgery",
        detail:
          "Many people recover quickly, following a soft diet and gentle jaw exercises for a short period.",
      },
      {
        period: "After open or replacement surgery",
        detail:
          "A longer recovery with structured physiotherapy to restore movement and strength.",
      },
      {
        period: "Ongoing",
        detail:
          "Continued jaw exercises and review help protect and maintain the result.",
      },
    ],
    faqs: [
      {
        question: "Will I definitely need surgery for my TMJ problem?",
        answer:
          "Most people will not. The majority of temporomandibular disorders settle with conservative measures such as splints, physiotherapy and medication. Surgery is considered only for specific structural problems or when symptoms persist despite appropriate non-surgical care.",
      },
      {
        question: "What is arthrocentesis?",
        answer:
          "It is one of the least invasive joint procedures. The joint is gently washed out with sterile fluid through fine needles to remove inflammatory by-products and improve movement, often providing relief without any incisions.",
      },
      {
        question: "How soon will my jaw movement improve?",
        answer:
          "After minimally invasive procedures many people notice improvement quite quickly, while open or reconstructive surgery involves a more gradual recovery supported by physiotherapy. Your surgeon will give you a timeline based on your procedure.",
      },
    ],
    sources: [
      { label: "AAOMS — TMJ & Facial Pain", url: "https://myoms.org" },
      { label: "Cleveland Clinic", url: "https://my.clevelandclinic.org" },
      { label: "NHS", url: "https://www.nhs.uk" },
    ],
  },

  {
    slug: "corrective-jaw-surgery",
    icon: "Smile",
    title: "Corrective Jaw Surgery",
    tagline: "Comprehensive correction of jaw deformities for function and confidence.",
    summary:
      "Corrective jaw surgery addresses functional and aesthetic problems caused by jaw deformities — including asymmetry, a receding or prominent chin, difficulty chewing, and some cases of obstructive sleep apnoea. It brings together precise surgery, orthodontics and 3D planning to deliver comprehensive, lasting correction.",
    sections: [
      {
        heading: "More than the bite",
        body: "While it shares techniques with orthognathic surgery, corrective jaw surgery is best thought of as the whole journey of diagnosing and treating jaw deformity — restoring how the jaws work and how the face looks and feels, from chewing and breathing to profile and confidence.",
      },
      {
        heading: "Conditions we correct",
        body: "Treatment is planned around your individual anatomy and goals.",
        points: [
          "Facial asymmetry where one side of the jaw differs from the other",
          "A chin that is set too far back or forward (improved with genioplasty)",
          "Difficulty closing the lips, chewing or biting comfortably",
          "Obstructive sleep apnoea suitable for jaw advancement (maxillomandibular advancement)",
          "Long-standing bite problems combined with aesthetic concerns",
        ],
      },
      {
        heading: "Planned in 3D for predictable results",
        body: "Using CT scans and digital planning, the exact movements are rehearsed before surgery and custom guides are prepared. Working closely with your orthodontist, this gives a coordinated plan and a result you can preview and trust.",
      },
    ],
    indications: [
      "Jaw asymmetry or imbalance affecting function and appearance",
      "Chin position that affects facial harmony",
      "Functional problems with chewing, biting or lip closure",
      "Obstructive sleep apnoea suitable for surgical jaw advancement",
    ],
    benefits: [
      "Comprehensive correction of both function and aesthetics",
      "Improved chewing, speech and — where relevant — breathing",
      "A balanced, harmonious facial profile",
      "Coordinated, 3D-planned and predictable treatment",
    ],
    risks: [
      "Temporary or, less commonly, lasting numbness of the lip or chin",
      "Swelling and a period of dietary restriction",
      "Need for orthodontics before and after surgery",
      "Rarely, relapse or the need for revision",
    ],
    anaesthesia: "General anaesthesia, with a short hospital stay.",
    duration: "Usually 1–4 hours, depending on the combination of procedures.",
    recovery: [
      {
        period: "First 2 weeks",
        detail:
          "The most noticeable swelling settles; a soft or liquid diet and rest are recommended, with many returning to routine at around two weeks.",
      },
      {
        period: "6–12 weeks",
        detail:
          "Bones heal and diet is advanced gradually; any guiding elastics are managed during this time.",
      },
      {
        period: "Several months",
        detail:
          "Final results emerge as residual swelling resolves and orthodontic finishing is completed.",
      },
    ],
    faqs: [
      {
        question: "How is this different from orthognathic surgery?",
        answer:
          "They overlap closely. 'Orthognathic surgery' refers specifically to the operations that reposition the jaws, while 'corrective jaw surgery' describes the complete journey of diagnosing and treating a jaw deformity — including chin correction and aesthetic goals. In practice they are planned together as one tailored treatment.",
      },
      {
        question: "Can jaw surgery help my sleep apnoea?",
        answer:
          "In selected patients, yes. Advancing the upper and lower jaws (maxillomandibular advancement) enlarges the airway and can significantly improve obstructive sleep apnoea. Whether it is right for you depends on a thorough assessment, often alongside a sleep specialist.",
      },
      {
        question: "Will my face look very different?",
        answer:
          "The aim is balance and harmony rather than a dramatic change. Because the procedure is planned in 3D, your surgeon can discuss the expected changes to your profile with you in advance so there are no surprises.",
      },
    ],
    sources: [
      { label: "AAOMS — Corrective Jaw Surgery", url: "https://myoms.org" },
      { label: "Cleveland Clinic", url: "https://my.clevelandclinic.org" },
      { label: "Mayo Clinic", url: "https://www.mayoclinic.org" },
    ],
  },
];

export function getProcedure(slug: string) {
  return procedures.find((p) => p.slug === slug);
}

export const procedureSlugs = procedures.map((p) => p.slug);
