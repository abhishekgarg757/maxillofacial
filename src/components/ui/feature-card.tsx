import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Visual tone for the icon tile and body text. The card surface itself is
 * always white-on-paper-light (matches the project's editorial card style);
 * only the icon background and body text colour differ.
 *
 * - `neutral` — clay gradient tile, body in clay-700. Used on warm/light pages.
 * - `ink`     — softer clay-on-clay tile, body in muted-foreground. Used on
 *               pages that lean toward the ink-50 surface palette.
 */
export type FeatureCardTone = "neutral" | "ink";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  body: React.ReactNode;
  tone?: FeatureCardTone;
  className?: string;
}

/**
 * Icon-tile + title + body card. Used in philosophy / credentials / why-choose
 * grids. Pairs with a `Stagger` / `StaggerItem` parent for the entrance.
 */
export function FeatureCard({
  icon: Icon,
  title,
  body,
  tone = "neutral",
  className,
}: FeatureCardProps) {
  const isInk = tone === "ink";
  // Differentiated surface: warm clay tint for the neutral tone, soft white
  // for the ink tone, so a row of cards doesn't look like a wall of identical
  // tiles.
  const surface = isInk
    ? "bg-white"
    : "bg-gradient-to-br from-paper to-clay-50";
  return (
    <div
      className={cn(
        "group flex h-full flex-col rounded-3xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        isInk ? "border-ink-100" : "border-clay-100",
        surface,
        className,
      )}
    >
      <span
        className={cn(
          "mb-5 grid size-13 place-items-center rounded-2xl transition-colors duration-300",
          isInk
            ? "bg-gradient-to-br from-clay-500/10 to-clay-600/10 text-clay-700 group-hover:from-clay-500 group-hover:to-clay-700 group-hover:text-white"
            : "bg-gradient-to-br from-clay-100/50 to-clay-200/40 text-clay-700 group-hover:from-clay-200 group-hover:to-clay-300 group-hover:text-clay-800",
        )}
      >
        <Icon className="size-6" />
      </span>
      <h3
        className={cn(
          "text-lg font-bold",
          isInk ? "text-ink-900" : "text-clay-900",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          isInk ? "text-muted-foreground" : "text-clay-700",
        )}
      >
        {body}
      </p>
    </div>
  );
}
