import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ProcedureSection {
  heading: string;
  body: string;
  /** Optional bullet points rendered under the body. */
  points?: string[];
}

export interface RecoveryStage {
  period: string;
  detail: string;
}

export interface Procedure {
  slug: string;
  /** Lucide icon name resolved in the UI layer. */
  icon: string;
  title: string;
  /** Short one-liner used on cards and the procedures grid. */
  tagline: string;
  /** 1–2 sentence summary for meta description + hero. */
  summary: string;
  /** Longer narrative sections shown on the detail page. */
  sections: ProcedureSection[];
  /** Who is this procedure for / indications. */
  indications: string[];
  /** Key patient-facing benefits. */
  benefits: string[];
  /** Honest risks / considerations. */
  risks: string[];
  /** Typical anaesthesia approach. */
  anaesthesia: string;
  /** Rough duration range, e.g. "1–3 hours". */
  duration: string;
  /** Recovery timeline stages. */
  recovery: RecoveryStage[];
  /** Procedure-specific FAQs. */
  faqs: FAQ[];
  /** Reputable sources backing the content. */
  sources: Source[];
}

export interface FAQ {
  question: string;
  answer: string;
  /** Optional grouping used on the FAQ page. */
  category?: string;
}

export interface Source {
  label: string;
  url: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  /** e.g. "Orthognathic surgery patient". */
  context: string;
  rating: number;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  procedureSlug: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  note: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  cover?: string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  doctorName: string;
  credentials: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  phoneDisplay: string;
  phoneE164: string;
  whatsappDigits: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    mapQuery: string;
  };
  hours: { day: string; time: string }[];
  socials: { label: string; href: string; icon: string }[];
  nav: NavLink[];
}

export type IconMap = Record<string, LucideIcon>;
