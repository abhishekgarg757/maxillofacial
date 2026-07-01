import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { getIcon } from "@/lib/icons";
import { doctor } from "@/content/doctor";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Dr. Saloni Gupta",
  description:
    "Meet Dr. Saloni Gupta, a Delhi-based oral & maxillofacial surgeon committed to evidence-based, patient-first surgical care.",
  alternates: { canonical: "/about" },
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

      {/* Bio */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 to-accent-200/40 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-ink-100 bg-ink-950 shadow-2xl">
                <Image
                  src={doctor.portrait}
                  alt={`Portrait of ${doctor.name}`}
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  {doctor.name}
                </h2>
                <p className="mt-1 text-brand-700">{doctor.credentials}</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {doctor.intro}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-ink-100 bg-ink-50 p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
                  <GraduationCap className="size-5 text-brand-600" />
                  Registrations &amp; memberships
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {doctor.memberships.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2.5 text-sm text-ink-700"
                    >
                      <BadgeCheck className="mt-0.5 size-5 shrink-0 text-brand-600" />
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Note: Credentials shown are placeholders pending confirmation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
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
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-ink-50">
        <SectionHeading
          eyebrow="Care philosophy"
          title="What you can expect"
          description="Four principles that shape every consultation and every procedure."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctor.philosophy.map((p) => {
            const Icon = getIcon(p.icon);
            return (
              <StaggerItem
                key={p.title}
                className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-5 grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 text-brand-700 transition-colors duration-300 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Journey / timeline */}
      <Section>
        <SectionHeading
          eyebrow="The journey"
          title="Training & experience"
          description="A path built on rigorous training and an ongoing commitment to learning."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative border-l border-ink-200 pl-8">
            {doctor.timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className="mb-10 last:mb-0">
                  <span className="absolute -left-[9px] mt-1.5 size-4 rounded-full border-2 border-white bg-brand-600 shadow" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    {t.year}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-ink-900">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
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
