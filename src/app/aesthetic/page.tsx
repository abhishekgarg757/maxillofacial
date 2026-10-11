import type { Metadata } from "next";

import { AestheticHero } from "@/components/sections/aesthetic-hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { EditorialNarrative } from "@/components/sections/editorial-narrative";
import { TreatmentIndex } from "@/components/sections/treatment-index";
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
    "Non-surgical aesthetic treatments by Dr. Saloni Gupta — oral & maxillofacial surgeon in New Delhi. Botox, dermal fillers, thread lift, Hydrafacial, and more.",
  alternates: { canonical: "/aesthetic" },
  openGraph: {
    title: "Aesthetic Treatments · Dr. Saloni Gupta",
    description:
      "Precision aesthetics delivered by a surgeon. Botox, fillers, facials, and regenerative treatments.",
    url: `${site.url}/aesthetic`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Treatments · Dr. Saloni Gupta",
    description:
      "Precision aesthetics delivered by a surgeon. Botox, fillers, facials, and regenerative treatments.",
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

/** Injectable chapter count derived from content (keeps the index honest). */
const injectablesCount = aestheticTreatments.filter(
  (t) => t.category === "injectables",
).length;

/** Shared description for the injectables chapter (index + section). */
const injectablesDescription =
  "Botox, dermal fillers, and thread lift — precise facial enhancement.";

/** Facials grid tiles — masonry layout with intentional asymmetry */
const facialsTiles = aestheticTreatments
  .filter((t) => t.category === "facials" && t.slug !== "facials")
  .map((t) => ({
    slug: t.slug,
    title: t.displayTitle.replace("Facials & Skin Rejuvenation — ", ""),
    imageSrc: PH(`treatment-${t.slug}`),
    imageAlt: `Illustrative placeholder for the ${t.displayTitle.toLowerCase()} treatment`,
  }));

/** Regenerative sub-treatments from content (empty until Dr. Gupta confirms them). */
const regenerativeTreatments = aestheticTreatments
  .filter((t) => t.category === "regenerative" && t.slug !== "regenerative")
  .map((t) => ({
    slug: t.slug,
    title: t.displayTitle,
    imageSrc: PH(`treatment-${t.slug}`),
    imageAlt: `Illustrative placeholder for the ${t.displayTitle.toLowerCase()} treatment`,
  }));

const facialsCategories = [
  {
    slug: "facials",
    title: "Facials & Skin",
    description:
      "Skin rejuvenation treatments for hydration, brightness, and refined texture.",
    treatmentCount: facialsTiles.length,
    imageSrc: PH("category-facials"),
    imageAlt: "Illustrative placeholder for a facial treatment in a clinical setting",
  },
  {
    slug: "injectables",
    title: "Injectables & Contouring",
    description: injectablesDescription,
    treatmentCount: injectablesCount,
    imageSrc: PH("category-injectables"),
    imageAlt:
      "Illustrative placeholder for an injectable treatment setup in a clinical environment",
  },
  {
    slug: "regenerative",
    title: "Regenerative",
    description:
      "Treatments that harness your body's own healing processes.",
    treatmentCount: regenerativeTreatments.length,
    imageSrc: PH("category-regenerative"),
    imageAlt: "Illustrative placeholder for regenerative treatment preparation",
  },
];

/** Before/after cases specific to aesthetics (reuse existing slider component; data TBD by doctor). */
const aestheticBeforeAfterCases = beforeAfterCases[0] ? [beforeAfterCases[0]] : [];

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
        imageAlt="Illustrative placeholder for Dr. Saloni Gupta performing an aesthetic treatment in clinic"
        title={
          <>
            Precision aesthetics,{" "}
            <em className="font-aesthetic font-normal italic text-clay-600">
              delivered by a surgeon.
            </em>
          </>
        }
        subtitle="Non-surgical treatments informed by surgical-grade anatomical knowledge and evidence-based practice."
        credential={doctor.credentials}
      />

      {/* ── Section 2: Trust Strip ── */}
      <TrustStrip
        items={[
          { label: doctor.credentials },
          { label: `${site.address.city}, India` },
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
        imageAlt="Illustrative placeholder for a doctor–patient consultation about aesthetic treatment options"
        imagePosition="right"
      />

      {/* ── Section 4: Treatment Index — numbered chapters ── */}
      <TreatmentIndex categories={facialsCategories} />

      {/* ── Section 5: Facials & Skin — Visual Treatment Navigation ── */}
      <TreatmentVisualGrid treatments={facialsTiles} />

      {/* ── Section 6: Injectables — Featured Individual Treatments ── */}
      <section
        id="injectables"
        className="scroll-mt-24 bg-paper pt-20 sm:pt-28"
      >
        <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
          <p className="font-aesthetic text-sm italic text-clay-600">
            Chapter 02 · Injectables &amp; Contouring
          </p>
          <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
              Injectables &amp; Contouring
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-600">
              {injectablesDescription}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <FeaturedTreatment
            num="01"
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
            imageAlt="Illustrative placeholder for a doctor preparing a Botox injection in a clinical setting"
            imageSide="left"
          />

          <FeaturedTreatment
            num="02"
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
            imageAlt="Illustrative placeholder for a dermal filler syringe displayed in a clinical environment"
            imageSide="right"
          />

          <FeaturedTreatment
            num="03"
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
            imageAlt="Illustrative placeholder for a thread lift device shown in clinical context"
            imageSide="left"
            dark
          />
        </div>
      </section>

      {/* ── Section 7: Regenerative — editorial chapter ── */}
      <TreatmentGroup
        title="Regenerative Facial Treatments"
        description="Treatments that harness your body's own healing power for facial rejuvenation, using self-derived materials for natural tissue renewal."
        treatments={regenerativeTreatments}
      />

      {/* ── Section 8: Before & After Preview ── */}
      {aestheticBeforeAfterCases[0] ? (
        <BeforeAfterPreview featuredCase={aestheticBeforeAfterCases[0]} />
      ) : null}

      {/* ── Section 9: Doctor Expertise — trust centerpiece ── */}
      <ExpertiseShowcase
        doctorName={doctor.name}
        credential={doctor.credentials}
        portraitSrc={expertisePortraitSrc}
        portraitAlt={`Illustrative placeholder for Dr. Saloni Gupta in clinical setting`}
        narrative={[
          `[CLINICAL REVIEW REQUIRED — narrative and credential claims to be confirmed by Dr. Gupta]

Your injector's surgical background means something. Every needle placement, every millimetre of product, every assessment of whether you're suitable — it's all informed by a deep understanding of facial anatomy that goes far beyond a beauty course.

Dr. Gupta has completed advanced training in aesthetic medicine to complement her surgical qualifications. This combination ensures that non-surgical treatments are performed with the same anatomical precision and clinical safety standards that govern surgical practice.

[A full list of courses, institutions, and dates will be added once provided by Dr. Gupta. All entries below are placeholders.]`,
        ].join("\n\n")}
        certifications={certifications}
        timeline={doctor.timeline}
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
