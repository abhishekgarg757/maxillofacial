import type { Metadata } from "next";
import { Info } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";
import { CtaBand } from "@/components/sections/cta-band";
import { beforeAfterCases } from "@/content/before-after";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Drag-to-compare before & after examples of oral & maxillofacial procedures — jaw alignment, dental implants, chin correction and facial trauma repair.",
  alternates: { canonical: "/before-after" },
};

export default function BeforeAfterPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Before & After", url: `${site.url}/before-after` },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Before & after"
        title="See the transformation"
        description="Drag each slider to reveal the before and after. These examples illustrate the kind of change modern maxillofacial surgery can achieve."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Before & After" }]}
      />

      <Section>
        <Reveal>
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
            <Info className="mt-0.5 size-5 shrink-0 text-brand-600" />
            <p className="text-sm leading-relaxed text-ink-700">
              <span className="font-semibold text-ink-900">
                About these images:
              </span>{" "}
              The visuals shown are neutral, AI/illustrated placeholders — they
              do not depict real patients — and will be replaced with genuine,
              consented case photographs. Individual results vary; these examples
              are for illustration only.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {beforeAfterCases.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 0.05}>
              <BeforeAfterSlider cases={[c]} selectable={false} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
