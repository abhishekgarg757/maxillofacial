import type { Stat } from "@/lib/types";

/**
 * Doctor profile content.
 * TODO: Replace placeholder biography, credentials, qualifications and the
 * portrait at /public/doctor-portrait.svg with Dr. Gupta's real details.
 */
export const doctor = {
  name: "Dr. Saloni Gupta",
  credentials: "BDS, MDS — Oral & Maxillofacial Surgery",
  role: "Consultant Oral & Maxillofacial Surgeon",
  location: "New Delhi, India",
  portrait: "/doctor-portrait.svg",
  intro:
    "Dr. Saloni Gupta is a Delhi-based oral & maxillofacial surgeon dedicated to restoring function, comfort and confidence. She combines meticulous, evidence-based surgery with a warm, patient-first approach — taking the time to explain every option clearly so you feel informed and at ease.",
  philosophy: [
    {
      title: "Patient-first care",
      body: "Every plan starts by listening. You'll always understand your options, the reasons behind a recommendation, and what to expect at each step.",
      icon: "HeartPulse",
    },
    {
      title: "Evidence-based surgery",
      body: "Treatment is grounded in current best practice and the latest peer-reviewed evidence — never guesswork.",
      icon: "Microscope",
    },
    {
      title: "Precision & technology",
      body: "3D imaging and virtual surgical planning are used where they add value, for predictable, tailored results.",
      icon: "ScanFace",
    },
    {
      title: "Gentle, calm experience",
      body: "From anxious patients to complex cases, comfort and clear communication are at the heart of the experience.",
      icon: "Stethoscope",
    },
  ],
  // TODO: confirm/replace with real qualifications and milestones.
  timeline: [
    {
      year: "Education",
      title: "Bachelor of Dental Surgery (BDS)",
      detail: "Foundational training in dentistry and oral health.",
    },
    {
      year: "Specialisation",
      title: "Master of Dental Surgery (MDS) — Oral & Maxillofacial Surgery",
      detail: "Advanced surgical training in the face, jaws and mouth.",
    },
    {
      year: "Practice",
      title: "Consultant Oral & Maxillofacial Surgeon",
      detail:
        "Comprehensive care across jaw surgery, implants, facial trauma and TMJ disorders.",
    },
    {
      year: "Ongoing",
      title: "Continuing professional development",
      detail:
        "Active commitment to the latest techniques, safety standards and evidence.",
    },
  ],
  // TODO: confirm registrations/memberships (e.g. DCI, AOMSI).
  memberships: [
    "Dental Council of India (registration) — TODO confirm",
    "Association of Oral & Maxillofacial Surgeons of India (AOMSI) — TODO confirm",
  ],
};

export const stats: Stat[] = [
  { value: "6+", label: "Core surgical specialities", icon: "Layers" },
  { value: "3D", label: "Virtual surgical planning", icon: "ScanFace" },
  { value: "1-on-1", label: "Personalised consultations", icon: "Users" },
  { value: "Evidence", label: "Based, modern techniques", icon: "Award" },
];
