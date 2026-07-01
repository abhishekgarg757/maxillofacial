import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { ProcedureCard } from "@/components/sections/procedure-card";
import { CtaBand } from "@/components/sections/cta-band";
import { procedures } from "@/content/procedures";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Procedures",
  description:
    "Explore oral & maxillofacial procedures offered by Dr. Saloni Gupta — jaw reconstruction, facial trauma surgery, orthognathic & corrective jaw surgery, dental implants and TMJ surgery.",
  alternates: { canonical: "/procedures" },
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
      <PageHeader
        eyebrow="What we treat"
        title="Procedures & treatments"
        description="Each procedure is explained in clear, honest detail — what it involves, who it helps, recovery and answers to common questions. Tap any card to learn more."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Procedures" }]}
      />

      <Section>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <ProcedureCard procedure={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand />
    </>
  );
}
