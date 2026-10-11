---
name: project-conventions
description: The normative conventions for this Next.js 16 maxillofacial-clinic repo — architecture map, content model, design tokens, component taxonomy, TypeScript/SEO/medical-content rules. Load this skill before ANY task here, and reference it as the canonical answer when conventions conflict. Pairs with AGENTS.md (contract) — this is the executable checklist. See healthcare-content for medical drafting; see the agenda commands for task entry points.
---

# Project Conventions — Dr. Saloni Gupta, OMFS

## 1. Mandatory context

- **This is NOT the Next.js you know.** This repo runs **Next.js 16.2.9**
  (App Router). Before writing any Next.js code, read the relevant guide in
  **`node_modules/next/dist/docs/`** (01-app, 02-pages, 03-architecture).
  Heed deprecation notices. Do not trust training-data conventions over this repo.
- Stack: React 19, TypeScript 5 (strict), **Tailwind CSS v4** (CSS-first
  `@theme` config, `@tailwindcss/typography`), `motion` (framer-motion v12) for
  animation, Radix UI primitives, Vercel AI SDK v6 (`ai`, `@ai-sdk/google`),
  Zod for validation.
- The app is **content-driven**: pages render from `src/content/*`, never from
  hardcoded copy in components.

## 2. Architecture map

| Concern | Location | Rule |
|---|---|---|
| Routes | `src/app/**/page.tsx` | One folder per route; server components by default |
| API routes | `src/app/api/<name>/route.ts` | `chat` (AI assistant), `contact` (Resend). Guard every route: rate-limit + Zod |
| Layout chrome | `src/components/layout/` | `navbar`, `footer`, `social-icon` |
| Page sections | `src/components/sections/` | `hero`, `procedure-card`, `before-after-slider`, … each a page block |
| UI primitives | `src/components/ui/` | `button`, `card`, `container`, `section`, `badge`, `badge`… composable atoms |
| Motion | `src/components/motion/reveal.tsx` | `Reveal`, `Stagger`, `StaggerItem` helpers |
| Content (source of truth) | `src/content/` | `site.ts`, `procedures.ts`, `faqs.ts`, `testimonials.ts`, `before-after.ts`, `doctor.ts`, `chat-system-prompt.ts`, `blog/*.mdx` |
| Shared types | `src/lib/types.ts` | **All** content interfaces live here. Extend, never duplicate |
| Utilities | `src/lib/utils.ts` | `cn()`, `whatsappUrl()`, `formatDate()`, `slugify()`. Add shared helpers here |
| SEO | `src/lib/jsonld.ts` + `src/lib/contact-schema.ts` | Centralize Schema.org builders; per-page `export const metadata` |
| Static routes | `src/app/sitemap.ts`, `robots.ts` | Update when routes are added |
| Runtime ask | `src/app/api/chat/route.ts` | Gemini 2.5 Flash via AI SDK; guarded prompt in `chat-system-prompt.ts` |

## 3. Content model

Content is **typed, schema-driven, future-CMS-ready** (appointments, multilingual,
analytics to come). Rules:

1. **Types first** — open `src/lib/types.ts`. If the content shape doesn't exist,
   add the interface there before writing content. No `any`, no inline `as`.
2. **Location** — content lives in `src/content/` as typed TS (arrays of objects)
   or MDX (blog). Copy is data, not JSX.
3. **Site-wide fact** — address, phone, hours, socials, nav, NAP, domain live in
   `src/content/site.ts`. Change them there; every page/layout/JSON-LD reads from it.
4. **Placeholders** — real clinic values are `TODO:`s. Never invent NAP, phone,
   email, credentials, or success stats. Leave `TODO` markers; do not fabricate data.
5. **New routes** — a new page must wire into: `src/app/<route>/page.tsx`,
   nav in `site.ts` (where applicable), `sitemap.ts`, and JSON-LD as needed.

## 4. Design system (Tailwind v4 tokens)

Defined in `src/app/globals.css` `@theme`. **Use tokens only — never hardcoded
colors.** Direction: "Modern & bold. Dark hero + light, airy sections."

- **`brand-*`** (teal/cyan) — trust/clinical. `brand-600` primary buttons.
- **`accent-*`** (warm coral) — CTAs/highlights. `accent-600` accent buttons.
- **`ink-*`** (deep slate) — dark sections & typography. Dark sections use `ink-950`.
- **Semantic** — `background`, `foreground`, `muted`, `muted-foreground`, `border`,
  `card`, `ring`.
- **Fonts** — `--font-sans` (Inter) body; `--font-display` (Sora) for
  `h1`–`h4` (auto-applied in CSS). Headings get `letter-spacing: -0.02em`.
- **Radii** — `--radius-*` tokens (`xl` 1rem, `2xl` 1.5rem, `3xl` 2rem).
- **Motion** — use `motion`/`Reveal`; respect `prefers-reduced-motion` (site-wide
  CSS already disables animations).
- **Utilities** — `bg-grid` (subtle grid backdrop for dark sections),
  `.text-gradient` (brand→accent text), `blur-3xl` glow blobs on dark sections.

Component conventions (see `ui/button.tsx`, `ui/section.tsx` as exemplars):
- Primitives use **class-variance-authority** (`cva`) variants + `cn()` merge.
- Radix `Slot` + `asChild` pattern for polymorphic composability.
- New primitives → `src/components/ui/`; new page blocks → `src/components/sections/`
  composing primitives; wrapper props forwarded via `cn(className)`.
- Icons: `lucide-react`; dynamic icon resolution via `src/lib/icons.ts` +
  `src/components/ui/dynamic-icon.tsx` (string keys → components).

## 5. Medical content guardrails (non-negotiable)

Applies to procedures, blog, FAQs, testimonials, JSON-LD, chat.

1. **Draft-first** — every medical artifact is a *draft* pending human clinical
   review. Keep the `TODO: clinical review` markers; never auto-mark as final.
2. **No diagnosis / no individual advice** — never map a reader's symptoms to a
   condition. Route to a consultation.
3. **No unverifiable precision** — qualitative or common published ranges only.
   Never invent success rates, outcomes, or credentials.
4. **Risks alongside benefits** — honest risk framing is required.
5. **Sourcing** — cite reputable patient-education sources (AAOMS, Cleveland
   Clinic, Mayo, NHS, Johns Hopkins, NIDCR) for clinical claims.
6. **Chat assistant** — system prompt in `chat-system-prompt.ts`; guardrails:
   no diagnosis, emergency escalation, no prices, off-topic refusal. Never weaken.
7. **Tone** — calm, honest, plain language; explain jargon.

## 6. TypeScript & API conventions

- **Strict mode; interfaces in `src/lib/types.ts`.** Alias `@/*` → `src/*`.
- Server components by default; `"use client"` only for interactivity (forms,
  accordions, chat, sliders, motion-wrapped interactive blocks).
- **API routes** — each must: parse+Zod-validate body, rate-limit (see
  `src/lib/rate-limit.ts`), fail gracefully (503/429 with user-safe messages)
  when env not configured.
- **Env** — add keys to `.env.example` (copy → `.env.local`). Site must degrade
  gracefully without any env var. Never commit secrets.
- Follow existing file style: named exports, `function` components in sections,
  `forwardRef` for primitives, JSDoc for public helpers, minimal comments.

## 7. SEO conventions

- **Per-page metadata** — `export const metadata: Metadata` in each `page.tsx`
  (title template `%s · Dr. Saloni Gupta`).
- **JSON-LD** — extend `src/lib/jsonld.ts` builders (`organizationJsonLd`,
  `breadcrumbJsonLd`, `faqJsonLd`, `medicalProcedureJsonLd`, `articleJsonLd`).
  Inject via `jsonLdScript()`.
- **New pages** — add to `src/app/sitemap.ts` and `robots.ts` if applicable.
- Structured data must reflect content truthfully (matches page copy).

## 8. Quality gates & commands

- **Lint**: `npm run lint` (ESLint 9). Type-check via `tsc --noEmit` (also
  covered by `next build`). Build: `npm run build`.
- Always run lint + typecheck + build before declaring a change done.
- Save memory: decisions that aren't in the code belong in `.claude/` config or
  this skill — not in blanket "remember" rules.

## 9. When conventions conflict

**Resolution order:** `AGENTS.md` (contract) → this skill (checklist) →
`node_modules/next/dist/docs/` (framework truth) → existing code style
(visible from the file being touched).