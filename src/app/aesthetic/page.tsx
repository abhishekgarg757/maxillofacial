import type { Metadata } from "next";

import { AestheticHero } from "@/components/sections/aesthetic-hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { EditorialNarrative } from "@/components/sections/editorial-narrative";
import { TreatmentCategoryRow } from "@/components/sections/treatment-category-row";
import { TreatmentVisualGrid } from "@/components/sections/treatment-visual-grid";
import { FeaturedTreatment } from "@/components/sections/featured-treatment";
import { TreatmentGroup } from "@/components/sections/treatment-group";
import { BeforeAfterPreview } from "@/components/sections/before-after-preview";
import { ExpertiseShowcase } from "@/components/sections/expertise-showcase";
import { ConsultationCTA } from "@/components/sections/consultation-cta";
import { site } from "@/content/site";
import { doctor } from "@/content/doctor";
import { beforeAfterCases } from "@/content/before-after";
import { aestheticTreatments } from "@/content/aesthetic-treatments";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Aesthetic Treatments",
  description:
    "Non-surgical aesthetic treatments by Dr. Saloni Gupta — oral & maxillofacial surgeon in Delhi. Botox, dermal fillers, thread lift, Hydrafacial, PRP, and more.",
  alternates: { canonical: "/aesthetic" },
  openGraph: {
    title: "Aesthetic Treatments · Dr. Saloni Gupta",
    description:
      "Precision aesthetics delivered by a surgeon. Botox, fillers, facials, and regenerative treatments.",
    url: `${site.url}/aesthetic`,
    type: "website",
  },
};

// ───────────── Content constants (data-driven) ─────────────

/** Placeholder markers for missing imagery — replace paths with real photos when available. */
const PH = (desc: string) => `/placeholder/${desc}.svg`;

const heroImageSrc = PH("aesthetic-hero"); // Doctor portrait / treatment environment
const philosophyPortraitSrc = PH(
  "doctor-philosophy-portrait",
); // Candid at-work shot
const expertisePortraitSrc = PH(
  "doctor-expertise-portrait",
); // Different candid for expertise section

const facialsCategories = [
  {
    slug: "facials",
    title: "Facials & Skin",
    description:
      "Skin rejuvenation treatments for hydration, brightness, and refined texture.",
    treatmentCount: 7,
    imageSrc: PH("category-facials"),
    imageAlt: "Facial skin treatment in clinical setting",
  },
  {
    slug: "injectables",
    title: "Injectables & Contouring",
    description:
      "Botox, dermal fillers, and thread lift — precise facial enhancement.",
    treatmentCount: 3,
    imageSrc: PH("category-injectables"),
    imageAlt: "Injectable treatment setup in clinical environment",
  },
  {
    slug: "regenerative",
    title: "Regenerative",
    description:
      "PRP/GFC, microneedling — harnessing your body's own healing processes.",
    treatmentCount: 1,
    imageSrc: PH("category-regenerative"),
    imageAlt: "Regenerative treatment preparation",
  },
];

/** Facials grid tiles — masonry layout with intentional asymmetry */
const facialsTiles = aestheticTreatments
  .filter((t) => t.category === "facials" && t.slug !== "facials")
  .map((t) => ({
    slug: t.slug,
    title: t.displayTitle.replace("Facials & Skin Rejuvenation — ", ""),
    imageSrc: PH(`treatment-${t.slug}`),
    imageAlt: `Photograph of ${t.displayTitle.toLowerCase()} treatment`,
  }));

/** Grouped treatments for display context */
const injectablesList = aestheticTreatments
  .filter((t) => t.category === "injectables" && t.slug !== "botox" && t.slug !== "dermal-fillers" && t.slug !== "thread-lift")
  .map((t) => ({
    slug: t.slug,
    title: t.displayTitle.replace(/Injectables & Contouring — /, ""),
    imageSrc: PH(`treatment-${t.slug}`),
    imageAlt: `Photograph of ${t.displayTitle.toLowerCase()} treatment`,
  }));

/** Before/after cases specific to aesthetics (reuse existing slider component; data TBD by doctor). */
const aestheticBeforeAfterCases = [beforeAfterCases[0]];

/** Doctor certification placeholders — replace with real data from doctor. */
const certifications: CertificationEntry[] = [
  {
    title: "[Course name — to be confirmed]",
    institution: "[Issuing body — to be confirmed]",
    year: "",
    description: "[CLINICAL REVIEW REQUIRED]",
  },
];

interface CertificationEntry {
  title: string;
  institution: string;
  year?: string;
  description?: string;
}

const certificateImages: Array<{ src?: string; alt: string; title: string }> =
  [];

// ───────────── Page component ─────────────

export default function AestheticPage() {
  return (
    <>
      {/* JSON-LD breadcrumbs */}
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Aesthetic Treatments", url: `${site.url}/aesthetic` },
          ]),
        )}
      />

      {/* ── Section 1: Aesthetic Hero ── */}
      <AestheticHero
        imageSrc={heroImageSrc}
        imageAlt="Dr. Saloni Gupta performing an aesthetic treatment in clinic"
        title="Precision aesthetics, delivered by a surgeon."
        subtitle="Non-surgical treatments informed by surgical-grade anatomical knowledge and evidence-based practice."
        credential={doctor.credentials}
      />

      {/* ── Section 2: Trust Strip ── */}
      <TrustStrip
        items={[
          { label: doctor.credentials },
          { label: "Delhi, India" },
          { label: "Evidence-Based Approach" },
        ]}
      />

      {/* ── Section 3: Editorial Narrative ── */}
      <EditorialNarrative
        title="Where Surgical Precision Meets Aesthetic Judgment"
        paragraphs={[
          {
            text: `[CLINICAL REVIEW REQUIRED — this narrative paragraph needs to be written or reviewed by Dr. Gupta]

Dr. Saloni Gupta trained as an Oral & Maxillofacial Surgeon — one of the most rigorous surgical specialities in dentistry. That training gives her a deep understanding of facial anatomy, nerve pathways, blood supply, and tissue behaviour that few non-surgical aestheticians possess.

Every aesthetic treatment she offers is grounded in that anatomical mastery. Whether planning a Botox injection near the crow's feet or assessing suitability for a chemical peel, the same precision that guides jaw reconstruction informs every decision.

This is not cosmetic beauty work practiced in isolation. It is medicine applied thoughtfully to questions of appearance, function, and confidence.`,
          },
        ]}
        imageSrc={philosophyPortraitSrc}
        imageAlt="Dr. Saloni Gupta consulting with a patient about aesthetic treatment options"
        imagePosition="right"
      />

      {/* ── Section 4: Treatment Categories Overview ── */}
      <TreatmentCategoryRow categories={facialsCategories} />

      {/* ── Section 5: Facials & Skin — Visual Treatment Navigation ── */}
      <TreatmentVisualGrid treatments={facialsTiles} />

      {/* ── Section 6: Injectables — Featured Individual Treatments ── */}
      <FeaturedTreatment
        title="Botox"
        subtitle={`Natural-looking reduction of expression lines`}
        narrative={[
          {
            text: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific protocol]

Botulinum toxin type A injections temporarily relax the muscles responsible for dynamic wrinkles — those lines formed by repeated facial expression. Common treatment areas include crow's feet, frown lines between the brows, and forehead lines.

The procedure takes approximately 10–20 minutes. Results begin appearing within 3–7 days and peak around two weeks. When administered conservatively and correctly, Botox softens existing lines without eliminating the ability to express natural emotion.`,
          },
        ]}
        quickFacts={[
          { label: "Duration", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Downtime", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Longevity", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Session type", value: "[CLINICAL REVIEW REQUIRED]" },
        ]}
        imageSrc={PH("treatment-botox")}
        imageAlt="Doctor preparing Botox injection in clinical setting"
        imageSide="left"
      />

      <FeaturedTreatment
        title="Dermal Fillers"
        subtitle="Restore volume, redefine contours, enhance natural features."
        narrative={[
          {
            text: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific filler types]

Modern dermal fillers offer a versatile toolkit for facial enhancement when used judiciously by skilled practitioners. Hyaluronic acid fillers integrate with the body's own tissues, providing natural-feeling volume that can be adjusted and — uniquely — reversed if needed using hyaluronidase enzyme.

Treatment areas include lips, mid-face (cheeks), jawline definition, nasolabial folds, and under-eye hollows. Each area requires a different product viscosity and injection technique.`,
          },
        ]}
        quickFacts={[
          { label: "Duration", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Downtime", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Longevity", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Session type", value: "[CLINICAL REVIEW REQUIRED]" },
        ]}
        imageSrc={PH("treatment-dermal-fillers")}
        imageAlt="Dermal filler syringe displayed in clinical environment"
        imageSide="right"
      />

      <FeaturedTreatment
        title="Thread Lift"
        subtitle="A minimally invasive alternative for subtle lifting."
        narrative={[
          {
            text: `[CLINICAL REVIEW REQUIRED — replace with clinic-specific thread type and technique]

A thread lift uses dissolvable sutures placed beneath the skin to physically lift and reposition sagging tissue, while simultaneously stimulating the body's natural collagen production for longer-lasting structural improvement.

Barbed threads anchor into tissue providing an immediate lifting effect. Over the following months, the threads dissolve while new collagen forms, contributing to continued quality improvement beyond the initial lift. Best suited for mild-to-moderate laxity — advanced cases may require surgical evaluation.`,
          },
        ]}
        quickFacts={[
          { label: "Duration", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Downtime", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Longevity", value: "[CLINICAL REVIEW REQUIRED]" },
          { label: "Session type", value: "[CLINICAL REVIEW REQUIRED]" },
        ]}
        imageSrc={PH("treatment-thread-lift")}
        imageAlt="Thread lift device shown in clinical context"
        imageSide="left"
        dark
      />

      {/* ── Section 7: Regenerative — Grouped Presentation ── */}
      <TreatmentGroup
        title="Regenerative Facial Treatments"
        description="Harness your body's own healing power for facial rejuvenation. These procedures prioritise safety through autologous (self-derived) materials and promote natural tissue renewal."
        treatments={injectablesList.length > 0 ? injectablesList : [{ slug: "prp-gfc", title: "PRP / GFC", imageSrc: PH("treatment-prp-gfc"), imageAlt: "PRP preparation" }, { slug: "vampire-facial", title: "Vampire Facial", imageSrc: PH("treatment-vampire-facial"), imageAlt: "Vampire facial treatment" }, { slug: "microneedling", title: "Microneedling", imageSrc: PH("treatment-microneedling"), imageAlt: "Microneedling treatment" }]}
      />

      {/* ── Section 8: Before & After Preview ── */}
      <BeforeAfterPreview featuredCase={aestheticBeforeAfterCases[0]} />

      {/* ── Section 9: Doctor Expertise ── */}
      <ExpertiseShowcase
        doctorName={doctor.name}
        credential={doctor.credentials}
        portraitSrc={expertisePortraitSrc}
        portraitAlt={`Dr. Saloni Gupta in clinical setting discussing aesthetic treatment options`}
        narrative={[
          `Your injector's surgical background means something. Every needle placement, every millimetre of product, every assessment of whether you're suitable — it's all informed by a deep understanding of facial anatomy that goes far beyond a beauty course.

Dr. Gupta has completed advanced training in aesthetic medicine to complement her surgical qualifications. This combination ensures that non-surgical treatments are performed with the same anatomical precision and clinical safety standards that govern surgical practice.

[A full list of courses, institutions, and dates will be added once provided by Dr. Gupta. All entries below are placeholders.]`,
        ].join("\n\n")}
        certifications={certifications}
        certificates={certificateImages}
      />

      {/* ── Section 10: Final Conversion Band ── */}
      <ConsultationCTA
        headline="Ready to explore your options?"
        subheadline="Book a consultation with Dr. Gupta for a personalised assessment of your aesthetic goals."
      />
    </>
  );
}
