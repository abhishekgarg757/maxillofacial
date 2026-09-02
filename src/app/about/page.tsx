import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { getIcon } from "@/lib/icons";
import { doctor } from "@/content/doctor";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr. Saloni Gupta, a Delhi-based oral & maxillofacial surgeon committed to evidence-based, patient-first surgical care.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dr. Saloni Gupta",
    description:
      "Meet Dr. Saloni Gupta, a Delhi-based oral & maxillofacial surgeon committed to evidence-based, patient-first surgical care.",
    url: `${site.url}/about`,
    siteName: site.name,
    locale: site.locale,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Saloni Gupta",
    description:
      "Meet Dr. Saloni Gupta, a Delhi-based oral & maxillofacial surgeon committed to evidence-based, patient-first surgical care.",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "About", url: `${site.url}/about` },
          ]),
        )}
      />
      <PageHeader
        eyebrow="About"
        title="Meet Dr. Saloni Gupta"
        description="A surgeon who blends meticulous, evidence-based technique with genuine warmth — so you feel informed, supported and at ease."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Bio + Expertise Showcase */}
      <section className="bg-clay-50 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-clay-200/40 to-clay-100/30 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] bg-clay-950 shadow-2xl">
                <Image
                  src={doctor.portrait}
                  alt={`Portrait of ${doctor.name}`}
                  width={900}
                  height={1100}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold tracking-tight text-clay-900 sm:text-4xl">
                {doctor.name}
              </h2>
              <p className="mt-1 text-clay-700">{doctor.credentials}</p>

              <p className="text-pretty text-base leading-relaxed text-clay-700 sm:text-lg">
                {doctor.intro}
              </p>

              <div className="rounded-3xl border border-clay-100 bg-clay-50 p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-clay-900">
                  <GraduationCap className="size-5 text-accent" />
                  Registrations & memberships
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {doctor.memberships.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2.5 text-sm text-clay-700"
                    >
                      <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" />
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-clay-600">
                  Note: Credentials shown are placeholders pending confirmation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <CalendarCheck />
                    Book a consultation
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/procedures">
                    See procedures
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care philosophy - restyled with clay cards */}
      <Section className="bg-clay-50">
        <SectionHeading
          eyebrow="Care philosophy"
          title="What you can expect"
          description="Four principles that shape every consultation and every procedure."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctor.philosophy.map((p, i) => {
            const Icon = getIcon(p.icon);
            return (
              <StaggerItem key={p.title} index={i} className="h-full">
                <FeatureCard
                  icon={Icon}
                  title={p.title}
                  body={p.body}
                  tone="neutral"
                />
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Journey / timeline - clay-styled */}
      <Section className="bg-clay-50">
        <SectionHeading
          eyebrow="The journey"
          title="Training & experience"
          description="A path built on rigorous training and an ongoing commitment to learning."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative border-l border-clay-100 pl-8">
            {doctor.timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className="mb-10 last:mb-0">
                  <span className="absolute -left-[9px] mt-1.5 size-4 rounded-full border-2 border-white bg-clay-600 shadow" />
                  <span className="text-xs font-bold uppercase tracking-wider text-clay-700">
                    {t.year}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-clay-900">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-clay-700">
                    {t.detail}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}