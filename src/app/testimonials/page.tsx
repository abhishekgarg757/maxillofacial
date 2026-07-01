import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read what patients say about their experience with Dr. Saloni Gupta — from jaw surgery and dental implants to facial trauma and TMJ care.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Testimonials", url: `${site.url}/testimonials` },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Patient stories"
        title="Trusted by patients"
        description="Real outcomes and real confidence. (Illustrative testimonials shown — these will be replaced with genuine, consented patient feedback.)"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      <Section>
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <StaggerItem key={i} className="h-full">
              <figure className="flex h-full flex-col gap-4 rounded-3xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Quote className="size-5" />
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-accent-500 text-accent-500"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-1 text-pretty leading-relaxed text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-ink-100 pt-4">
                  <span className="grid size-10 place-items-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-700">
                    {t.author
                      .replace(/[^A-Za-z]/g, "")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-ink-900">
                      {t.author}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t.context}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Patient testimonials reflect individual experiences; results and
          experiences vary. Shared with consent.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
