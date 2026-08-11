interface CertificateItem {
  /** Path to certificate image or placeholder path. */
  src?: string;
  /** Accessibility alt text. */
  alt: string;
  /** Human-readable title for screen readers and accessibility. */
  title: string;
}

interface CertificateGalleryProps {
  certificates: CertificateItem[];
}

/**
 * Section 9 sub-component: Certificate Gallery
 * Horizontal scroll row of certificate thumbnails.
 * Each thumbnail is clickable to enlarge.
 * Uses PhotoPlaceholder when real certificate images are not available.
 */
export function CertificateGallery({ certificates }: CertificateGalleryProps) {
  if (certificates.length === 0) return null;

  return (
    <section aria-label="Certificates" className="mt-8">
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Certifications
      </h3>
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 sm:gap-4">
        {certificates.map((c, i) => (
          <CertificateThumbnail key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

function CertificateThumbnail({ src, alt, title }: CertificateItem) {
  const showImage = !!src && !src.startsWith("/placeholder");
  const isPlaceholder = src && src.startsWith("/placeholder");

  return (
    <figure
      className={`min-w-[160px] max-w-[200px] shrink-0 rounded border border-ink-100 bg-white ${showImage ? "overflow-hidden" : ""}`}
    >
      {showImage ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          className="h-[220px] w-full object-cover"
          style={{ aspectRatio: "5 / 7" }}
        />
      ) : isPlaceholder ? (
        // Use a visual placeholder styled for certificate look
        <div className="flex h-[220px] w-full items-center justify-center bg-stone-100 p-4">
          {/* Placeholder representation */}
          <svg className="size-10 opacity-30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ) : null}

      <figcaption className="p-3 text-[11px] leading-snug text-muted-foreground">
        {title || alt}
      </figcaption>
    </figure>
  );
}
