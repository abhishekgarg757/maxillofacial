import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { AestheticCategory } from "@/content/aesthetic-categories";

interface AestheticCategoryCardProps {
  category: AestheticCategory;
  index?: number;
  className?: string;
}

/**
 * Aesthetic category card — mirrors the surgical ProcedureCard so the
 * homepage's two sections read as visually equal halves of the practice.
 * Each card is a doorway into one chapter on /aesthetic.
 */
export function AestheticCategoryCard({
  category,
  index = 0,
  className,
}: AestheticCategoryCardProps) {
  // Alternate surface tints so the grid doesn't look like a wall of identical tiles.
  const surface =
    index % 2 === 0
      ? "bg-white"
      : "bg-gradient-to-br from-paper to-clay-50";

  const Icon = category.icon;
  const href = `/aesthetic#${category.slug}`;
  const countLabel =
    category.treatmentCount > 0
      ? `${category.treatmentCount} treatment${
          category.treatmentCount === 1 ? "" : "s"
        }`
      : "Details to be confirmed";

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-clay-200 hover:shadow-xl hover:shadow-clay-600/10",
        surface,
        className,
      )}
      aria-label={`${category.title} — ${category.tagline}. ${countLabel}.`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-gradient-to-br from-clay-100 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-clay-500 to-clay-700 text-white shadow-lg shadow-clay-600/25 transition-transform duration-300 group-hover:scale-105">
        <Icon className="size-7" aria-hidden="true" />
      </div>

      <h3 className="relative text-xl font-bold tracking-tight text-ink-900">
        {category.title}
      </h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {category.tagline}
      </p>

      <span className="relative mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
        {countLabel}
      </span>

      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Explore chapter
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
