import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ImageSlotProps {
  /** Path to a real photograph. Omit, or pass a `/placeholder/...` path, to render the art-directed placeholder frame. */
  src?: string;
  /** Accessible description of the image. Empty string for decorative. */
  alt: string;
  /** Short editorial caption shown on the placeholder frame. */
  label?: string;
  /** CSS aspect-ratio, e.g. "4 / 5". */
  ratio?: string;
  /** Marks an above-the-fold image for eager loading + priority. */
  priority?: boolean;
  /** Responsive sizes hint for real `next/image` renders. */
  sizes?: string;
  className?: string;
}

/**
 * Editorial "image slot" for the aesthetic page.
 *
 * Real photography renders through `next/image`; missing imagery renders as an
 * intentional art-directed frame (warm paper fill, hairline keyline, subtle
 * grain, serif label) so the page reads as finished today and accepts real
 * photos later without any re-layout. The placeholder frame exposes the alt
 * text as its accessible name.
 */
export function ImageSlot({
  src,
  alt,
  label,
  ratio = "4 / 5",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
}: ImageSlotProps) {
  const isPlaceholder = !src || src.startsWith("/placeholder");
  const decorative = alt.length === 0;
  const noiseId = React.useId().replace(/:/g, "");

  return (
    <div
      style={{ aspectRatio: ratio }}
      aria-hidden={isPlaceholder && decorative ? true : undefined}
      role={isPlaceholder && !decorative ? "img" : undefined}
      aria-label={isPlaceholder && !decorative ? alt : undefined}
      className={cn("relative overflow-hidden bg-paper-deep", className)}
    >
      {isPlaceholder ? (
        <>
          {/* Grain overlay */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full opacity-[0.05]"
          >
            <filter id={noiseId}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="2"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter={`url(#${noiseId})`} />
          </svg>

          {/* Hairline inner keyline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 border border-ink-900/10"
          />

          {/* Editorial label — decorative duplicate of the aria-label */}
          {label ? (
            <div className="absolute inset-0 flex items-end p-5 sm:p-6">
              <span
                aria-hidden="true"
                className="font-aesthetic text-sm italic leading-snug text-ink-600"
              >
                {label}
              </span>
            </div>
          ) : null}
        </>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}
    </div>
  );
}
