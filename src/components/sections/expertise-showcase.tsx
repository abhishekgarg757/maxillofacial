import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CertificateGallery } from "./certificate-gallery";

interface CertificationEntry {
  title: string;
  institution: string;
  year?: string;
  description?: string;
}

interface ExpertiseShowcaseProps {
  /** Doctor's name for accessibility/context. */
  doctorName: string;
  /** Credential line, e.g. "BDS, MDS — Oral & Maxillofacial Surgery" */
  credential: string;
  /** Path to doctor-at-work photograph for this section. */
  portraitSrc: string;
  /** Alt text for the portrait. */
  portraitAlt: string;
  /** Philosophy paragraph about aesthetic training. */
  narrative: string;
  /** Aesthetic certifications completed (placeholder list if real data not yet provided). */
  certifications: CertificationEntry[];
  /** Paths to certificate images (empty = using placeholders). */
  certificates: Array<{ src?: string; alt: string; title: string }>;
}

/**
 * Section 9: Doctor Expertise — Training & Certification
 * Visual showcase of doctor's aesthetic-specific training.
 *
 * Desktop: large portrait photo left + training narrative right + certificate thumbnails below.
 * Mobile: stacked — portrait first, then text, then certificates.
 */
export function ExpertiseShowcase({
  doctorName,
  credential,
  portraitSrc,
  portraitAlt,
  narrative,
  certifications,
  certificates,
}: ExpertiseShowcaseProps) {
  const showImage = !!portraitSrc && !portraitSrc.startsWith("/placeholder");
  const isPlaceholder = portraitSrc && portraitSrc.startsWith("/placeholder");

  return (
    <section className="py-20 sm:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        {/* Heading */}
        <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
          Where Surgical Training Meets Aesthetic Precision
        </h2>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
          {doctorName} · {credential}
        </p>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: Portrait image */}
          <div className="lg:sticky lg:top-28">
            {showImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={portraitSrc}
                alt={portraitAlt}
                className="w-full rounded-sm object-cover"
                style={{ aspectRatio: "4 / 5" }}
              />
            ) : isPlaceholder ? (
              <PhotoPlaceholder
                label="Doctor at-work photography required"
                note="Candid shot of Dr. Gupta performing or consulting for an aesthetic treatment"
                ratio="4 / 5"
                className="w-full rounded-sm bg-ink-900"
              />
            ) : null}
          </div>

          {/* Right: Narrative + certifications */}
          <div className="flex flex-col gap-8">
            {/* Philosophy paragraph */}
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {narrative}
            </p>

            {/* Aesthetic training listing */}
            <div>
              <Badge>Aesthetic Training</Badge>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-ink-900">
                Advanced Clinical Training
              </h3>

              <dl className="mt-5 space-y-5">
                {certifications.map((c, i) => (
                  <div key={i}>
                    <dt className="font-display text-base font-semibold text-ink-900">
                      {c.title}
                    </dt>
                    <dd className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{c.institution}</span>
                      {c.year && (
                        <>
                          <span aria-hidden="true">&middot;</span>
                          <span>{c.year}</span>
                        </>
                      )}
                    </dd>
                    {c.description && (
                      <dd className="mt-1 text-sm leading-relaxed text-ink-600">
                        {c.description}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>

              {/* Clear placeholder indicator when no real data */}
              {certifications.length === 0 && (
                <p className="mt-3 text-xs italic text-muted-foreground">
                  Aesthetic course details pending doctor input [CLINICAL REVIEW REQUIRED]
                </p>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="accent">
                <Link href="/contact">Schedule a consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">More about Dr. Gupta</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Certificate gallery strip */}
        <CertificateGallery certificates={certificates} />
      </div>
    </section>
  );
}
