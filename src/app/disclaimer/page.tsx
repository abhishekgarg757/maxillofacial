import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important information about the educational nature of this website and the limits of the information provided.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Medical Disclaimer"
        description="Please read this important information about how to use the content on this website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      />
      <Section>
        <div className="prose prose-lg mx-auto max-w-3xl prose-headings:font-display prose-headings:text-ink-900 prose-p:text-ink-700 prose-li:text-ink-700 prose-a:text-accent">
          <h2>General information only</h2>
          <p>
            All content on this website — including procedure descriptions,
            articles, FAQs and assistant responses — is provided for general
            educational purposes only. It is not a substitute for professional
            medical advice, diagnosis or treatment.
          </p>

          <h2>No doctor–patient relationship</h2>
          <p>
            Reading this website or interacting with the on-site assistant does
            not create a doctor–patient relationship. A relationship is
            established only through a formal consultation.
          </p>

          <h2>Individual results vary</h2>
          <p>
            Outcomes of any procedure depend on individual circumstances. Any
            before-and-after images shown are illustrative placeholders and do
            not depict guaranteed results. Statistics referenced are general and
            drawn from published sources.
          </p>

          <h2>Always seek professional advice</h2>
          <p>
            Never disregard professional medical advice, or delay seeking it,
            because of something you have read here. Always consult a qualified
            oral &amp; maxillofacial surgeon or doctor about your specific
            condition.
          </p>

          <h2>In an emergency</h2>
          <p>
            If you think you may have a medical emergency — such as severe
            bleeding, difficulty breathing or swallowing, or a significant facial
            injury — call your local emergency number or go to the nearest
            emergency department immediately.
          </p>

          <h2>About the AI assistant</h2>
          <p>
            The on-site assistant provides general information and cannot
            diagnose conditions or recommend treatment. It may occasionally be
            inaccurate. Please verify important information during a consultation.
          </p>
        </div>
      </Section>
    </>
  );
}
