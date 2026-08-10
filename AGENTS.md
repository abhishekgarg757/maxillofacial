# AGENTS.md — The Maxillofacial AI Operating System

This file defines how AI agents, skills, and commands work on this repository.
Read it before working here. It is the contract every agent operates under.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Golden rules

1. **This is NOT the Next.js you know** (rules above). Next.js 16 decided
   file-structure, API, and deprecation changes — always consult
   `node_modules/next/dist/docs/` before writing Next.js code.
2. **Medical content is a *draft* until a human clinician signs off.** Dr. Gupta
   is the only authority who can approve medical claims, credentials,
   statistics, success rates, or patient stories. Nothing an agent produces is
   publishable.
3. **Never invent clinic facts.** The site ships with deliberate `TODO:`
   placeholders for the real clinic address, phone, email, credentials, and
   domain. Any unverified fact must be flagged, not fabricated.
4. **Guardrails are inherited, not optional.** The AI assistant's safety rules
   (no diagnosis, emergency triage, no prices, off-topic refusal) apply to
   *every* AI-generated artifact on this site, not just the chat widget.

---

## Repo at a glance

| Area | Path | Notes |
|---|---|---|
| Pages | `src/app/**/page.tsx` | App Router; one folder per route |
| API routes | `src/app/api/*/route.ts` | `chat` (AI assistant), `contact` (Resend) |
| Content | `src/content/` | Schema-typed TS + MDX blog. **Single source of truth** |
| Components | `src/components/{ui,layout,sections,chat,motion}` | `ui` = primitives, `sections` = page blocks |
| SEO | `src/lib/jsonld.ts`, `src/app/sitemap.ts`, `src/app/robots.ts` | Schema.org graph is centralized |
| Types | `src/lib/types.ts` | All content is typed; extend, don't duplicate |
| Site config | `src/content/site.ts` | NAP, hours, socials, nav — edit in one place |
| Work tracking | `TODO.md` | Two-track: build backlog (Track A) + human-decision queue (Track B) |

---

## How to route work

- **Orchestration** — the user describes **WHAT**; Claude decides **HOW**. Give
  business requirements via `/feature "<requirement>"` (full pipeline) or
  `/page <route>` (route-scoped). Run `/audit` after implementation,
  `/production-check` before release, and `/todo` to see what's blocked on a
  human. The `feature-pipeline` skill defines routing, gates, and stop points;
  `TODO.md` is the two-track backlog + human-decision queue (Track A =
  Claude-executable, Track B = human-only).
- **Agents** (`.claude/agents/`) — specialized workers. Invoke one for any
  non-trivial task instead of doing it ad hoc. The orchestrator (main session)
  selects and sequences them per the `feature-pipeline` skill.
- **Skills** (`.claude/skills/`) — procedural knowledge: *how we do things in
  this codebase.* Load `project-conventions` plus the relevant domain skill
  before starting a task. Medical drafting always loads `healthcare-content`
  (shared guardrails, not per-skill restatement).
- **Commands** (`.claude/commands/`) — interactive entry points. Current set:
  - **Pipeline:** `/feature <req>` · `/page <route> [intent]`
  - **Audit & release:** `/audit [route] [focus]` · `/production-check [pre|post]` · `/todo`
  - **Content:** `/new-procedure` · `/doctor-blog` · `/generate-faq` · `/generate-testimonials` · `/generate-metadata` · `/generate-schema`
  - **Copy/CRO:** `/improve-copy` · `/improve-conversions`
  - **Engineering:** `/create-component` · `/refactor-page` · `/find-dead-code` · `/review-code`

### The production pipeline

```
Architect ──▶ SEO Writer ──▶ Next.js Engineer ──▶ UI Designer
                 │                   │                  │
                 └─── medical-content-reviewer ◀───────┤   (safety gate, before UI)
                                                     │
accessibility-reviewer & performance-reviewer ───────┤   (parallel, after UI)
                                                     ▼
                                        code-reviewer ──▶ deployment-engineer
                                                              │
                                                              ▼
                                                    human sign-off (Dr. Gupta / owner)
```

This pipeline is **executable**: `/feature "<requirement>"` runs it end-to-end,
stopping only at the upfront plan approval and at the hard stops below. `medical-content-reviewer`
is a required gate **before** implementation, not after.

- **Hand-offs are explicit.** The agent finishing a stage names the next agent
  and passes the baton in its final report.
- **Parallelize freely** for independent audits (accessibility ∥ performance,
  UI review ∥ SEO review) — the pipeline is an order of dependencies, not a
  suggestion to work serially. `/audit` runs them together.

### Never delegate

These are **always** human decisions. Route them back to the user; no agent,
skill, or command may decide them:

- Clinical sign-off on any medical content (claims, statistics, patient stories).
  An agent marking something APPROVED means "safe as a draft" — **never**
  clinically final. Sign-off is logged in `TODO.md` Track B by a human.
- Anything touching real patient data, photos, consent, or PHI.
- Sending real email / WhatsApp / booking confirmations to real people.
- Merging, pushing, or deploying to production.
- Creating or rotating credentials/secrets.
- Choosing the clinic's real NAP values (address, phone, domain).
- Pricing posture — what (if anything) is quoted online vs "estimate at consultation".

---

## Medical content guardrails

Applies to procedures, blog posts, FAQs, testimonials, chat answers, and JSON-LD.

1. **Tone:** calm, honest, plain-language. Explain jargon when used.
2. **No diagnosis or individual advice** — never interpret a reader's symptoms
   into "what they have." Always route to a consultation.
3. **No unverifiable precision** — figures stay qualitative or within common
   published ranges. Never invent outcomes, rates, or credentials.
4. **Risks must be stated honestly** alongside benefits.
5. **Sourcing:** clinical claims must reference reputable patient-education
   sources (AAOMS, Cleveland Clinic, Mayo Clinic, NHS, Johns Hopkins, NIDCR).
6. **Every medical artifact is a *draft* with explicit "requires clinical
   review" markers** until `medical-content-reviewer` (as a human-driven gate)
   signs off.
7. **Assistants stay in lane:** refuse non-clinic topics; escalate emergencies
   to urgent care; never quote prices.

---

## Engineering conventions

- **TypeScript strict.** All content lives behind interfaces in
  `src/lib/types.ts`. Define a type before you add content — no `any`, no
  untyped content blobs.
- **Content-driven UI.** Pages read from `src/content/*` — never hardcode copy
  in a component. Edit content files, not components, for copy changes.
- **Design tokens only.** Use Tailwind v4 theme variables (`bg-brand-*`,
  `text-ink-*`, `font-display`) from `src/app/globals.css`. No hardcoded colors.
- **Component taxonomy:** `ui/` = primitives (Button, Card, Container),
  `sections/` = page-level blocks (Hero, FaqAccordion). New blocks go in
  `sections/` and compose `ui/` primitives.
- **SEO is structural.** Metadata lives in each page's `export const metadata`,
  JSON-LD lives in `src/lib/jsonld.ts`, and new routes must update `sitemap.ts`
  and navigation in `site.ts` where applicable.
- **Routes:** follow App Router conventions. Server components by default;
  `"use client"` only where interactivity requires it.
- **Keep changes minimal and surgical.** Don't rewrite what works; extend the
  existing patterns in the file you're touching.

---

## Repository evolution

The content model is deliberately schema-driven so it can later support, without
rework: appointment booking, blog/comms pipelines, clinical calculators,
multilingual content (en-IN/hi), a CMS, analytics segments, email automation,
and marketing pages. When adding content, choose structure over prose — a
structured field is future-CMS-ready and needs no migration.

---

*Maintain this file. It is the operating system — when the framework grows
(new agent, skill, command, or guardrail), update this contract in the same
change, never after.*