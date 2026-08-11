import * as React from "react";

import { cn } from "@/lib/utils";

interface PhotoOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main image to display behind the overlay. */
  src: string;
  /** Accessibility alt text for the image. */
  alt: string;
  /** Optional secondary/background image for layered effect. */
  bgSrc?: string;
}

/**
 * Hero photograph with a gradient overlay ensuring text legibility.
 * Uses next/image <Image> with fill sizing.
 */
export function PhotoOverlay({
  src,
  alt,
  className,
  children,
  ...rest
}: PhotoOverlayProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} {...rest}>
      {/* Background image — fills parent, covers area */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          style={{ contain: "paint" }}
        />
      </div>

      {/* Gradient overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

      {/* Foreground content */}
      {children}
    </div>
  );
}
