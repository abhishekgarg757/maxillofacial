import type { BeforeAfterCase } from "@/lib/types";

/**
 * Before / after showcase.
 *
 * IMPORTANT: The images referenced here are neutral, AI/illustrated
 * PLACEHOLDERS (no real patients) so there are no copyright or consent
 * issues. TODO: replace the SVGs in /public/before-after with real,
 * consented patient photos or commissioned AI-generated faces, keeping the
 * same file names, and update the alt text. Always obtain written patient
 * consent before publishing clinical photographs.
 */
export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "orthognathic-profile",
    title: "Jaw alignment & profile balance",
    procedureSlug: "orthognathic-surgery",
    beforeSrc: "/before-after/orthognathic-before.svg",
    afterSrc: "/before-after/orthognathic-after.svg",
    beforeAlt: "Illustrative profile before jaw-alignment surgery (placeholder)",
    afterAlt: "Illustrative profile after jaw-alignment surgery (placeholder)",
    note: "Illustrative example of improved facial balance after jaw repositioning.",
  },
  {
    id: "implants-smile",
    title: "Restored smile with dental implants",
    procedureSlug: "dental-implants",
    beforeSrc: "/before-after/implants-before.svg",
    afterSrc: "/before-after/implants-after.svg",
    beforeAlt: "Illustrative smile with a missing tooth (placeholder)",
    afterAlt: "Illustrative restored smile after a dental implant (placeholder)",
    note: "Illustrative example of a gap restored with an implant-supported tooth.",
  },
  {
    id: "chin-genioplasty",
    title: "Chin harmony (genioplasty)",
    procedureSlug: "corrective-jaw-surgery",
    beforeSrc: "/before-after/chin-before.svg",
    afterSrc: "/before-after/chin-after.svg",
    beforeAlt: "Illustrative profile before chin correction (placeholder)",
    afterAlt: "Illustrative profile after chin correction (placeholder)",
    note: "Illustrative example of improved profile harmony after chin correction.",
  },
  {
    id: "trauma-symmetry",
    title: "Facial symmetry after trauma repair",
    procedureSlug: "facial-trauma-surgery",
    beforeSrc: "/before-after/trauma-before.svg",
    afterSrc: "/before-after/trauma-after.svg",
    beforeAlt: "Illustrative face before cheekbone trauma repair (placeholder)",
    afterAlt: "Illustrative face after cheekbone trauma repair (placeholder)",
    note: "Illustrative example of restored symmetry after fracture repair.",
  },
];
