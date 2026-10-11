# Dr. Saloni Gupta — Oral & Maxillofacial Surgery

Production website for a Delhi-based oral & maxillofacial surgery practice.
Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript (strict)**,
**Tailwind CSS v4**, and the **Vercel AI SDK** — content-driven, SEO-first, and
healthcare-grade.

> ⚠️ This is an evolving site. Real clinic details (address, phone, email,
> credentials, domain) are marked `TODO:` in `src/content/site.ts` and `doctor.ts` —
> they must be filled in and reviewed before public launch. This is a Next.js 16
> repo; its APIs differ from older Next.js training data. `AGENTS.md` is the
> contract for anyone (human or AI) working here.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.9 (App Router, RSC-first) |
| UI | React 19, Tailwind v4 (`@theme` tokens), Radix primitives, `motion` |
| Content | Typed TS in `src/content/` + MDX blog (`gray-matter`, `next-mdx-remote`) |
| AI assistant | Vercel AI SDK + Google Gemini (`/api/chat`) |
| Contact | Resend email API (`/api/contact`), Zod + rate-limit guarded |
| Analytics | Vercel Analytics + SpeedInsights |
| Quality | ESLint 9, `tsc --noEmit`, GitHub Actions CI |

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — the site degrades gracefully without it
npm run dev                  # http://localhost:3000
```

Scripts:

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run check      # lint + typecheck
npm run build      # production build
```

## Project structure

```
src/
  app/            # routes (App Router): pages + api/{chat,contact}
  components/     # ui/ primitives · sections/ page blocks · layout/ · chat/ · motion/
  content/        # typed content: site, procedures, faqs, testimonials, before-after, doctor + blog/*.mdx
  lib/            # types.ts, utils.ts, jsonld.ts, contact-schema.ts, rate-limit.ts, icons.ts
public/           # static placeholders (SVG) — real photos come later with consent
.claude/          # AI operating system: agents/, skills/, commands/, settings.json (local, gitignored)
.github/workflows/ # CI (lint + typecheck + build + secrets guard)
```

## Content model

Content is **schema-driven** (types live in `src/lib/types.ts`), so it can
later feed a CMS, appointments, calculators, multilingual (hi/en-IN), and email
automation without rework.

- **Site-wide facts / NAP** → `src/content/site.ts` (single source of truth).
- **Procedures** → `src/content/procedures.ts` (rendered by `/procedures/[slug]`).
- **Blog** → `src/content/blog/*.mdx` (frontmatter driven).
- **FAQs / testimonials / before-after** → typed arrays in `src/content/`.

**Rule:** adding content? Extend or use the interface in `src/lib/types.ts`
first. Copy belongs in content files, never hardcoded in components.

## Medical content policy

1. All medical copy is a **draft pending clinical review** by Dr. Gupta — no
   AI workflow publishes without human sign-off.
2. No diagnosis, no unverifiable precision, no invented statistics.
3. Risks are presented alongside benefits; claims cite reputable sources
   (AAOMS, Cleveland Clinic, Mayo, NHS, Johns Hopkins, NIDCR).
4. Patient photos/testimonials require consent; current items are marked
   illustrative placeholders.

## AI operating system (`.claude/`)

The repo is wired as a complete AI development environment for long-term,
healthcare-safe development. It is fully documented in `AGENTS.md`.

- **Agents** (`.claude/agents/`) — a cooperating pipeline:
  `architect → seo-writer → nextjs-engineer → ui-designer → medical-content-reviewer →
  accessibility/performance → code-reviewer → deployment-engineer`, plus
  `assistant-guardian` for the AI chat.
- **Skills** (`.claude/skills/`) — task knowledge: `project-conventions`
  (the substrate), content/service/blog/SEO skills, audit skills, and
  `production-readiness`.
- **Commands** — slash commands for recurring work:
  - **Pipeline:** `/feature "<business requirement>"` · `/page <route> [intent]`
  - **Audit & release:** `/audit [route] [focus]` · `/production-check [pre|post]` · `/todo`
  - **Content:** `/new-procedure` · `/doctor-blog` · `/generate-faq` · `/generate-testimonials`
  - **Copy/CRO:** `/improve-copy` · `/improve-conversions`
  - **Engineering:** `/create-component` · `/refactor-page` · `/find-dead-code` · `/review-code`

Audit helpers live in `.claude/scripts/` (`check.sh`, `audit-placeholders.sh`).

## AI orchestration model

You describe **what** you want; Claude decides **how** and does the work:

- `/feature "Create a Dental Implants service page optimized for local SEO and
  conversions"` → Claude plans (for your approval), routes through architect →
  seo-writer → medical gate → nextjs-engineer → ui-designer → parallel audits →
  code review, and reports only what needs your decision.
- `/todo` shows the two-track backlog in `TODO.md`: what Claude can build next
  (Track A) and what's blocked on a human (Track B — NAP, credentials, patient
  consent, pricing, clinical sign-off). Nothing ships, deploys, or is clinically
  approved without a human.

## Deployment

Vercel. The CI workflow runs lint + typecheck + build on every PR/push and
guards against committing the local AI settings (`.claude/settings.json`).

Env vars (see `.env.example`): `GOOGLE_GENERATIVE_AI_API_KEY`,
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, optional `CONTACT_FROM_EMAIL`,
`NEXT_PUBLIC_SITE_URL`.

> Before first production launch: fill in real values in `src/content/site.ts`
> and `doctor.ts`, obtain consent for any real patient content, and run
> `/production-check pre`.