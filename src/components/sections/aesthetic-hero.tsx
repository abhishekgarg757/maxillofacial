import Link from "next/link";
import { ArrowDown, CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ImageSlot } from "@/components/ui/image-slot";
import { site } from "@/content/site";

interface AestheticHeroProps {
  /** Path to hero photograph. */
  imageSrc: string;
  /** Accessibility alt text. */
  imageAlt: string;
  /** Headline — may include a serif-accent `<em>`. */
  title: React.ReactNode;
  /** Subheadline — one sentence describing the aesthetic approach. */
  subtitle?: string;
  /** Credential line, e.g. "BDS, MDS — Oral & Maxillofacial Surgery" */
  credential?: string;
  /** Primary CTA label and destination. */
  primaryCTA?: { label: string; href: string };
  /** Secondary CTA label and destination. */
  secondaryCTA?: { label: string; href: string };
}

/** Editorial chapter rail linking to on-page treatment sections. */
const chapters = [
  { index: "01", label: "Facials & Skin", href: "#facials" },
  { index: "02", label: "Injectables & Contouring", href: "#injectables" },
  { index: "03", label: "Regenerative", href: "#regenerative" },
];

/**
 * Section 1: Aesthetic Hero (editorial)
 * Warm paper canvas, oversized display type, portrait image slot with an
 * offset keyline frame, and a hairline chapter rail. Deliberately distinct
 * from the site-wide dark hero. Renders statically (no entrance animation)
 * so the above-the-fold content is never hidden to JS-free crawlers.
 */
export function AestheticHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  credential,
  primaryCTA = { label: "Book a consultation", href: "/contact" },
  secondaryCTA = { label: "Explore treatments", href: "#index" },
}: AestheticHeroProps) {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Top hairline */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-ink-900/10"
      />

      <Container className="pt-24 pb-10 sm:pt-28 lg:pt-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Typography */}
          <div className="flex flex-col items-start pt-2 lg:pt-10">
            <p className="font-aesthetic text-sm italic text-clay-600">
              Aesthetic medicine · {site.address.city}
            </p>

            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-600 sm:text-lg">
                {subtitle}
              </p>
            )}

            {credential && (
              <p className="mt-5 border-l-2 border-clay-500 pl-3 font-aesthetic text-sm italic text-ink-600">
                {credential}
              </p>
            )}

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild variant="clay" size="lg">
                <Link href={primaryCTA.href}>
                  <CalendarCheck />
                  {primaryCTA.label}
                </Link>
              </Button>
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 underline decoration-ink-300 underline-offset-4 transition-colors hover:text-clay-700 hover:decoration-clay-400"
              >
                {secondaryCTA.label}
                <ArrowDown className="size-4" />
              </Link>
            </div>
          </div>

          {/* Portrait image slot with offset keyline frame */}
          <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full border border-ink-900/10"
            />
            <ImageSlot
              src={imageSrc}
              alt={imageAlt}
              label="Dr. Saloni Gupta — aesthetic consultation"
              ratio="4 / 5"
              priority
            />
          </div>
        </div>

        {/* Chapter rail */}
        <nav
          aria-label="Treatment categories"
          className="mt-16 hidden border-t border-ink-900/10 pt-5 lg:block"
        >
          <ul className="flex divide-x divide-ink-900/10">
            {chapters.map((c) => (
              <li key={c.href} className="flex-1">
                <Link
                  href={c.href}
                  className="group flex items-baseline gap-3 px-4 py-2 transition-colors first:pl-0 hover:text-clay-700"
                >
                  <span className="font-aesthetic text-sm italic text-clay-600">
                    {c.index}
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-ink-700 group-hover:text-ink-900">
                    {c.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
