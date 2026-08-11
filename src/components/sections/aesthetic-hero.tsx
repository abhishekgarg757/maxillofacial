import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Reveal } from "@/components/motion/reveal";

interface AestheticHeroProps {
  /** Path to hero photograph. */
  imageSrc: string;
  /** Accessibility alt text. */
  imageAlt: string;
  /** Headline — ~8 words. */
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

/**
 * Section 1: Aesthetic Hero
 * Full-bleed photographer-led hero setting the visual tone for /aesthetic.
 *
 * Desktop: image fills viewport width × ~70vh, text overlaid lower-third left.
 * Mobile: image fills full height, text at bottom third, stacked CTAs.
 */
export function AestheticHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  credential,
  primaryCTA = { label: "Book a consultation", href: "/contact" },
  secondaryCTA = { label: "Explore treatments", href: "#treatments" },
}: AestheticHeroProps) {
  const isPlaceholder = imageSrc.startsWith("/placeholder");

  return (
    <section className="relative">
      {/* Hero image area */}
      <div className="relative min-h-[70svh] bg-ink-950 sm:min-h-[80svh] lg:min-h-0 lg:h-screen">
        {isPlaceholder ? (
          /* Placeholder when no real photo available */
          <PhotoPlaceholder
            label="Aesthetic hero photography required"
            note="Doctor portrait or treatment environment — warm-neutral lighting, clinical setting"
            ratio="16 / 9"
            className="h-full w-full rounded-none"
          />
        ) : (
          /* Real image: overlay + gradient */
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
          </div>
        )}

        {/* Text content overlay */}
        <div className="relative flex h-full items-end">
          <Container className="pb-16 sm:pb-20 lg:pb-28 xl:pb-36">
            <div className="max-w-xl">
              <Reveal>
                <Badge variant="glass">
                  <span className="size-1.5 rounded-full bg-brand-400" />
                  Aesthetic Treatments
                </Badge>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[4rem]">
                  {title}
                </h1>
              </Reveal>

              {subtitle && (
                <Reveal delay={0.1}>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-200 sm:text-lg">
                    {subtitle}
                  </p>
                </Reveal>
              )}

              {credential && (
                <Reveal delay={0.12}>
                  <p className="mt-2 text-sm text-ink-300">{credential}</p>
                </Reveal>
              )}

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild variant="accent" size="lg">
                    <Link href={primaryCTA.href}>
                      <CalendarCheck />
                      {primaryCTA.label}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-ink-400/30 text-white hover:bg-white/10 hover:border-white/40"
                  >
                    <Link href={secondaryCTA.href}>
                      {secondaryCTA.label}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
