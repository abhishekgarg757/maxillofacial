import type { Metadata } from "next";

import { AestheticHero } from "@/components/sections/aesthetic-hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { EditorialNarrative } from "@/components/sections/editorial-narrative";
import { TreatmentIndex } from "@/components/sections/treatment-index";
import { TreatmentVisualGrid } from "@/components/sections/treatment-visual-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Procedures",
  description:
    "Oral & maxillofacial procedures in Delhi — jaw reconstruction, orthognathic, facial trauma, dental implants, TMJ and corrective jaw surgery.",
  alternates: { canonical: "/procedures" },
  openGraph: {
    title: "Procedures — Dr. Saloni Gupta",
    description:
      "Oral & maxillofacial procedures in Delhi — jaw reconstruction, orthognathic, facial trauma, dental implants, TMJ and corrective jaw surgery.",
    url: `${site.url}/procedures`,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Procedures — Dr. Saloni Gupta",
    description:
      "Oral & maxillofacial procedures in Delhi — jaw reconstruction, orthognathic, facial trauma, dental implants, TMJ and corrective jaw surgery.",
  },
};

export default function ProceduresPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Procedures", url: `${site.url}/procedures` },
          ]),
        )}
      />
      <AestheticHero
        imageSrc="/placeholder/hero-procedures.svg"
        imageAlt="Illustrative placeholder for procedures page hero"
        title="Procedures & treatments"
        subtitle="Each procedure is explained in clear, honest detail — what it involves, who it helps, recovery and answers to common questions."
        credential={""}
      />

      {/* Trust Strip for procedures page */}
      <TrustStrip
        items={[
          { label: "Dr. Saloni Gupta" },
          { label: "Delhi, India" },
          { label: "Evidence-Based Approach" },
        ]}
      />

      {/* Editorial Narrative */}
      <EditorialNarrative
        title="Precision in Every Procedure"
        paragraphs={[
          {
            text:
              "Every procedure on this page is grounded in current best practice and the latest peer-reviewed evidence. We believe in honest, clear explanations — what each treatment involves, who it helps, what recovery looks like, and answers to common questions. Your plan will always be tailored in consultation with Dr. Gupta, never guesswork.",
          },
        ]}
        imageSrc="/placeholder/doctor-consultation.svg"
        imageAlt="Illustrative placeholder for a doctor consulting with a patient about treatment options"
        imagePosition="right"
      />

      {/* Treatment Index + Visual Grid */}
      <section className="bg-clay-50 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
          <TreatmentIndex
            categories={[
              {
                slug: "jaw-reconstruction",
                title: "Jaw Reconstruction",
                description:
                  "Rebuilding the jaw's form and function after injury, disease or tumour.",
                treatmentCount: 1,
                imageSrc: "/placeholder/treatment-jaw-reconstruction.svg",
                imageAlt: "Illustrative placeholder for jaw reconstruction",
              },
              {
                slug: "facial-trauma-surgery",
                title: "Facial Trauma Surgery",
                description:
                  "Repairing facial injuries and restoring form after trauma.",
                treatmentCount: 1,
                imageSrc: "/placeholder/treatment-facial-trauma.svg",
                imageAlt: "Illustrative placeholder for facial trauma surgery",
              },
              {
                slug: "orthognathic-surgery",
                title: "Orthognathic Surgery",
                description:
                  "Corrective jaw surgery for alignment and functional improvement.",
                treatmentCount: 1,
                imageSrc: "/placeholder/treatment-orthognathic.svg",
                imageAlt: "Illustrative placeholder for orthognathic surgery",
              },
              {
                slug: "dental-implants",
                title: "Dental Implants",
                description:
                  "Permanent tooth replacement with natural-looking results.",
                treatmentCount: 1,
                imageSrc: "/placeholder/treatment-dental-implants.svg",
                imageAlt: "Illustrative placeholder for dental implants",
              },
              {
                slug: "jaw-joint-surgery",
                title: "Jaw Joint (TMJ) Surgery",
                description:
                  "Treatment for jaw joint disorders and pain relief.",
                treatmentCount: 1,
                imageSrc: "/placeholder/treatment-tmj.svg",
                imageAlt: "Illustrative placeholder for TMJ surgery",
              },
              {
                slug: "corrective-jaw-surgery",
                title: "Corrective Jaw Surgery",
                description:
                  "Surgical repositioning of the jaws for function and aesthetics.",
                treatmentCount: 1,
                imageSrc: "/placeholder/treatment-corrective-jaw.svg",
                imageAlt: "Illustrative placeholder for corrective jaw surgery",
              },
            ]}
          />

          <TreatmentVisualGrid
            treatments={[
              {
                slug: "jaw-reconstruction",
                title: "Jaw Reconstruction",
                imageSrc: "/placeholder/treatment-jaw-reconstruction.svg",
                imageAlt: "Illustrative placeholder for jaw reconstruction",
              },
              {
                slug: "facial-trauma-surgery",
                title: "Facial Trauma Surgery",
                imageSrc: "/placeholder/treatment-facial-trauma.svg",
                imageAlt: "Illustrative placeholder for facial trauma surgery",
              },
              {
                slug: "orthognathic-surgery",
                title: "Orthognathic Surgery",
                imageSrc: "/placeholder/treatment-orthognathic.svg",
                imageAlt: "Illustrative placeholder for orthognathic surgery",
              },
              {
                slug: "dental-implants",
                title: "Dental Implants",
                imageSrc: "/placeholder/treatment-dental-implants.svg",
                imageAlt: "Illustrative placeholder for dental implants",
              },
              {
                slug: "jaw-joint-surgery",
                title: "Jaw Joint (TMJ) Surgery",
                imageSrc: "/placeholder/treatment-tmj.svg",
                imageAlt: "Illustrative placeholder for TMJ surgery",
              },
              {
                slug: "corrective-jaw-surgery",
                title: "Corrective Jaw Surgery",
                imageSrc: "/placeholder/treatment-corrective-jaw.svg",
                imageAlt: "Illustrative placeholder for corrective jaw surgery",
              },
            ]}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}