import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Info,
  MessageCircle,
  Stethoscope,
  Syringe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { ProcedureCard } from "@/components/sections/procedure-card";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { getProcedure, procedures, procedureSlugs } from "@/content/procedures";
import { site, WHATSAPP_DEFAULT_MESSAGE } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdScript,
  medicalProcedureJsonLd,
} from "@/lib/jsonld";

export function generateStaticParams() {
  return procedureSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) return {};
  return {
    title: procedure.title,
    description: procedure.summary,
    alternates: { canonical: `/procedures/${procedure.slug}` },
    openGraph: {
      title: `${procedure.title} · ${site.doctorName}`,
      description: procedure.summary,
      url: `${site.url}/procedures/${procedure.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${procedure.title} · ${site.doctorName}`,
      description: procedure.summary,
    },
  };
}

export default async function ProcedureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) notFound();

  const related = procedures.filter((p) => p.slug !== procedure.slug).slice(0, 3);
  const waMessage = `Hello, I'd like to know more about ${procedure.title}.`;

  return (
    <>
      <script {...jsonLdScript(medicalProcedureJsonLd(procedure))} />
      <script {...jsonLdScript(faqJsonLd(procedure.faqs))} />
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Procedures", url: `${site.url}/procedures` },
            {
              name: procedure.title,
              url: `${site.url}/procedures/${procedure.slug}`,
            },
          ]),
        )}
      />

      <PageHeader
        eyebrow="Procedure"
        title={procedure.title}
        description={procedure.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Procedures", href: "/procedures" },
          { label: procedure.title },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">
              <CalendarCheck />
              Book a consultation
            </Link>
          </Button>
          <Button asChild variant="glass" size="lg">
            <a
              href={whatsappUrl(site.whatsappDigits, waMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              Ask on WhatsApp
            </a>
          </Button>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_0.9fr]">
          {/* Main content */}
          <div className="flex flex-col gap-12">
            {procedure.sections.map((s, i) => (
              <Reveal key={i}>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                    {s.heading}
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  {s.points ? (
                    <ul className="mt-5 grid gap-3">
                      {s.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                          <span className="text-sm leading-relaxed text-ink-700">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}

            {/* Indications */}
            <Reveal>
              <div className="rounded-3xl border border-ink-100 bg-ink-50 p-7">
                <h2 className="text-xl font-bold text-ink-900">
                  Is this procedure for you?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  It may be recommended in situations such as:
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {procedure.indications.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-ink-700">
                        {ind}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Benefits & risks */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-clay-200 bg-clay-50/50 p-7">
                  <h3 className="text-lg font-bold text-ink-900">Benefits</h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {procedure.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-ink-700">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="h-full rounded-3xl border border-ink-100 bg-white p-7">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-ink-900">
                    <Info className="size-5 text-accent" />
                    Risks &amp; considerations
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {procedure.risks.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm leading-relaxed text-ink-700">
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Recovery */}
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                  Recovery timeline
                </h2>
                <div className="mt-6 grid gap-4">
                  {procedure.recovery.map((stage, i) => (
                    <div
                      key={i}
                      className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-clay-600 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-ink-900">
                          {stage.period}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {stage.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* FAQs */}
            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                Frequently asked questions
              </h2>
              <FaqAccordion items={procedure.faqs} />
            </div>

            {/* Sources + disclaimer */}
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6 text-sm">
              <p className="font-semibold text-ink-800">Sources &amp; further reading</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {procedure.sources.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent hover:underline"
                    >
                      {src.label}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                This information is general education, not individual medical
                advice. Outcomes vary between patients. Please consult Dr. Gupta
                about your specific situation.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
              <div className="flex items-center gap-3 border-b border-ink-100 bg-ink-50 p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-clay-500 to-clay-700 text-white">
                  <DynamicIcon name={procedure.icon} className="size-6" />
                </span>
                <div>
                  <p className="font-display font-bold text-ink-900">
                    {procedure.title}
                  </p>
                  <p className="text-xs text-muted-foreground">Quick facts</p>
                </div>
              </div>
              <dl className="flex flex-col divide-y divide-ink-100 p-6 text-sm">
                <div className="flex items-start gap-3 pb-4">
                  <Syringe className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-semibold text-ink-900">Anaesthesia</dt>
                    <dd className="mt-0.5 text-muted-foreground">
                      {procedure.anaesthesia}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-semibold text-ink-900">
                      Typical duration
                    </dt>
                    <dd className="mt-0.5 text-muted-foreground">
                      {procedure.duration}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4">
                  <Stethoscope className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-semibold text-ink-900">Approach</dt>
                    <dd className="mt-0.5 text-muted-foreground">
                      Personalised plan after a thorough consultation and, where
                      useful, 3D imaging.
                    </dd>
                  </div>
                </div>
              </dl>
              <div className="border-t border-ink-100 p-6">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">
                    <CalendarCheck />
                    Book a consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-2 w-full"
                  size="md"
                >
                  <a
                    href={whatsappUrl(site.whatsappDigits, WHATSAPP_DEFAULT_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle />
                    Message on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Related */}
      <Section className="bg-ink-50">
        <SectionHeading
          align="left"
          eyebrow="Related procedures"
          title="Explore more treatments"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProcedureCard key={p.slug} procedure={p} />
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/procedures">
              All procedures
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
