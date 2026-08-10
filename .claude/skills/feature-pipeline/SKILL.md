---
name: feature-pipeline
description: The orchestration engine for this repo. Load this skill when running /feature or /page — or whenever a business requirement must be turned into a production feature end-to-end. Defines the agent pipeline, skill routing, gate points, and hard human-decision stops. The user describes WHAT; this skill determines HOW.
---

# Feature Pipeline

Turn a business requirement into a finished, audited, draft-marked feature —
stopping only for human decisions. The main session is the orchestrator: it
selects agents, loads skills, and sequences the pipeline. No agent drives
itself; nothing ships without a human.

## Golden rule

The user describes **WHAT** they want. This pipeline decides **HOW**: which
agent, which skill, which files, which audits, which gates. The user is asked
only for (1) approval of the plan, once at the start, and (2) decisions that are
human-only (see Hard stops). Everything else is autonomous.

## When to use

- A business requirement mentions a page, procedure, feature, or data model
  (`/feature`).
- A specific route needs creating or improving (`/page`).
- The request is ambiguous, cross-cutting, or touches 3+ files.

## Phase 0 — Interpret & reconcile (orchestrator)

1. Load `project-conventions`. Read `TODO.md` — if the request is already a
   tracked item, mark it `in-progress`.
2. Reconcile with existing state **before** planning:
   - Does the page/route already exist? (e.g. `dental-implants` is already a
     procedure) → treat as **IMPROVE**, not create.
   - Does the content type already exist in `src/lib/types.ts` / `src/content/*`?
   - Do any Track B items block this feature?
3. If blocked → **STOP**. Report the blocking item(s) to the user. Never invent
   NAP, credentials, claims, consent, or pricing to unblock.

## Phase 1 — Architect → plan → user approval (HARD STOP #1)

1. Invoke `architect` with the reconciled scope. It produces: a file-level touch
   list, content-model changes, routing + data flow, SEO implications, and open
   questions.
2. Present the plan to the user as a short approval request: scope, files to
   touch, and **every fact that will need a human decision** (claims, NAP,
   credentials, consent, pricing). Do **not** begin implementation before
   approval. This one upfront stop keeps everything after it autonomous.

## Phase 2 — Content authorship (seo-writer)

1. For content-heavy work, invoke `seo-writer` with the approved design plus the
   domain skill: `service-page` | `medical-blog` | `faq-creation` |
   `testimonial-creation` | `homepage-design`. For SEO wiring:
   `local-seo` / `technical-seo` / `structured-data`.
2. Guardrails come from the shared `healthcare-content` skill — never restate
   them per agent.
3. Every unverified fact is written as a `TODO: clinical review` / `TODO` marker.
   No fabricated claims, stats, credentials, NAP, or prices.

## Phase 3 — Medical gate (medical-content-reviewer) — BEFORE implementation

1. Invoke `medical-content-reviewer` on the authored drafts + their source files
   before any UI work.
2. Its verdict is a **quality** gate: "APPROVED FOR ENGINEERING" means safe to
   build *as a draft* — it is **never** clinical sign-off. Dr. Gupta's approval
   is logged in `TODO.md` Track B and is the only final authority.
3. REJECTED / CHANGES REQUIRED → loop back to seo-writer; do not proceed.

## Phase 4 — Implementation (nextjs-engineer)

1. Invoke `nextjs-engineer` with the approved design + content drafts. It loads
   the engineering skills (`nextjs-best-practices`, `typescript-best-practices`,
   `tailwind-best-practices`) and `content-model` as needed.
2. Engineering self-gates: `npx tsc --noEmit` + `npm run lint` pass.
3. If `/api/chat` or chat components are touched → also invoke
   `assistant-guardian`.
4. If the result is visually new/changed → hand to `ui-designer` for polish.

## Phase 5 — Parallel audits (via /audit)

Run the audit suite on the finished diff: `ui-designer` (ui-audit) ∥
`accessibility-reviewer` ∥ `performance-reviewer` ∥ `seo-writer` (seo-audit).
Consolidate into one prioritized report with an owner per finding. Fix
P0/Blocking findings through the owning agent before continuing.

## Phase 6 — Code review (code-reviewer)

1. Invoke `code-reviewer` on the full diff. VERDICT must be APPROVE for the
   feature to be "done-as-draft".
2. REQUEST CHANGES → back to the owning agent; re-run.

## Phase 7 — Report

Report to the user:
- What shipped — as a **DRAFT** unless Track B says otherwise.
- Every human decision required, as new/updated `TODO.md` Track B items.
- Next step: `/audit` re-run if desired, or `/production-check pre` to release.

## Hard stops (never delegate)

| Decision | Owner |
|---|---|
| Clinical sign-off (claims, statistics, patient stories) | Dr. Gupta — logged in `TODO.md` Track B |
| Real NAP values (address, phone, domain, email) | User |
| Patient data, photos, consent, PHI | User |
| Pricing posture | User |
| Sending real email / WhatsApp / bookings | User |
| Merge, push, deploy | User — via `/production-check` |
| Creating / rotating credentials & secrets | User |

## Routing table (short form)

| Request shape | Entry | Pipeline |
|---|---|---|
| New/improved page or procedure | `/feature` · `/page` | architect → seo-writer → medical gate → nextjs-engineer → ui-designer → /audit → code-reviewer |
| New component only | `/create-component` | nextjs-engineer |
| Blog post | `/doctor-blog` | seo-writer → medical gate → nextjs-engineer → /audit |
| FAQ / testimonial batch | `/generate-faq` · `/generate-testimonials` | seo-writer → medical gate |
| Copy polish (no fact changes) | `/improve-copy` | seo-writer → medical gate (if claims touched) |
| Conversion work | `/improve-conversions` | seo-writer + ui-designer → /audit |
| Refactor (no behavior change) | `/refactor-page` | nextjs-engineer → code-reviewer |
| Full audit after any change | `/audit` | all reviewers in parallel |
| Release readiness | `/production-check` | deployment-engineer (+ code-reviewer, assistant-guardian if chat changed) |
