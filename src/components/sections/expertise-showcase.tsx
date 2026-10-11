import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/ui/image-slot";
import { CertificateGallery } from "./certificate-gallery";

interface CertificationEntry {
  title: string;
  institution: string;
  year?: string;
  description?: string;
}

interface TimelineEntry {
  year: string;
  title: string;
  detail: string;
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
  /** Doctor's training timeline (education → specialist → consultant). */
  timeline?: TimelineEntry[];
  /** Paths to certificate images (empty = using placeholders). */
  certificates: Array<{ src?: string; alt: string; title: string }>;
}

/**
 * Section 9: The Surgeon — trust centerpiece
 * Editorial spread: sticky portrait image slot, narrative, numbered training
 * timeline, aesthetic-training list (placeholders preserved), and CTAs.
 * The surgical credential is the anchor of the trust story.
 */
export function ExpertiseShowcase({
  doctorName,
  credential,
  portraitSrc,
  portraitAlt,
  narrative,
  certifications,
  timeline = [],
  certificates,
}: ExpertiseShowcaseProps) {
  return (
    <section className="bg-paper py-20 sm:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        <p className="font-aesthetic text-sm italic text-clay-600">
          The surgeon behind the work
        </p>
        <h2 className="mt-3 max-w-3xl text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
          Where Surgical Training Meets Aesthetic Precision
        </h2>
        <p className="mt-3 font-aesthetic text-sm italic text-ink-600">
          {doctorName} · {credential}
        </p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Portrait — sticky */}
          <div className="lg:sticky lg:top-28">
            <ImageSlot
              src={portraitSrc}
              alt={portraitAlt}
              label="Dr. Saloni Gupta"
              ratio="4 / 5"
            />
          </div>

          {/* Narrative + credentials */}
          <div className="flex flex-col gap-10">
            <p className="text-pretty text-base leading-relaxed text-ink-600 sm:text-lg">
              {narrative}
            </p>

            {/* Training timeline — numbered */}
            {timeline.length > 0 && (
              <div>
                <h3 className="font-aesthetic text-lg italic text-clay-600">
                  Training &amp; credentials
                </h3>
                <ol className="mt-5 border-t border-ink-900/10">
                  {timeline.map((t, i) => (
                    <li
                      key={`${t.year}-${i}`}
                      className="grid grid-cols-[auto_1fr] gap-5 border-b border-ink-900/10 py-4"
                    >
                      <span
                        aria-hidden="true"
                        className="font-aesthetic text-2xl italic text-clay-500"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
                          {t.year}
                        </p>
                        <p className="mt-1 font-semibold text-ink-900">
                          {t.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-600">
                          {t.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Aesthetic training listing */}
            <div>
              <h3 className="font-aesthetic text-lg italic text-clay-600">
                Aesthetic training
              </h3>
              <dl className="mt-5 border-t border-ink-900/10">
                {certifications.map((c, i) => (
                  <div key={i} className="border-b border-ink-900/10 py-4">
                    <dt className="font-semibold text-ink-900">{c.title}</dt>
                    <dd className="mt-0.5 text-sm text-ink-600">
                      {c.institution}
                      {c.year && (
                        <>
                          {" "}
                          <span aria-hidden="true">·</span> {c.year}
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
                <p className="mt-3 text-xs italic text-ink-600">
                  Aesthetic course details pending doctor input [CLINICAL
                  REVIEW REQUIRED]
                </p>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="clay" size="lg">
                <Link href="/contact">Schedule a consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">More about Dr. Gupta</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Certificate gallery strip */}
        <div>
          <CertificateGallery certificates={certificates} />
        </div>
      </div>
    </section>
  );
}
