import { HeartPulse, Sparkles, Syringe } from "lucide-react";

import { aestheticTreatments } from "@/content/aesthetic-treatments";

/**
 * Homepage aesthetic-categories content. Mirrors the three-chapter structure
 * of /aesthetic (Facials & Skin, Injectables & Contouring, Regenerative) but
 * exposes only the category level — individual treatment detail lives on the
 * /aesthetic page (see src/content/aesthetic-treatments.ts).
 *
 * Treatment counts are derived from `aestheticTreatments` so this file
 * stays in sync as treatments are added or removed.
 *
 * Copy is editorial/structural only — no clinical claims, statistics, or
 * outcomes. All clinical copy requires review by Dr. Gupta before publish.
 */

export type AestheticCategorySlug = "facials" | "injectables" | "regenerative";

export interface AestheticCategory {
  /** URL anchor on /aesthetic — also used as the link href fragment. */
  slug: AestheticCategorySlug;
  /** Lucide icon rendered in the card's gradient tile. */
  icon: typeof Sparkles;
  /** Card title — e.g. "Facials & Skin". */
  title: string;
  /** One-line patient-education summary. */
  tagline: string;
  /** Number of individual treatments in this category (excluding the chapter intro). */
  treatmentCount: number;
}

const countBy = (slug: AestheticCategorySlug): number =>
  aestheticTreatments.filter((t) => t.category === slug && t.slug !== slug)
    .length;

export const aestheticCategories: AestheticCategory[] = [
  {
    slug: "facials",
    icon: Sparkles,
    title: "Facials & Skin",
    tagline:
      "Skin rejuvenation treatments for hydration, brightness, and refined texture — Hydrafacial, chemical peels, photofacial and more.",
    treatmentCount: countBy("facials"),
  },
  {
    slug: "injectables",
    icon: Syringe,
    title: "Injectables & Contouring",
    tagline:
      "Botox, dermal fillers, and thread lift — precise facial enhancement informed by surgical-grade anatomy.",
    treatmentCount: countBy("injectables"),
  },
  {
    slug: "regenerative",
    icon: HeartPulse,
    title: "Regenerative",
    tagline:
      "Treatments that harness your body's own healing processes for natural tissue renewal.",
    treatmentCount: countBy("regenerative"),
  },
];
