---
name: code-review
description: Code review checklist for this repo's .ts/.tsx UI, routes, content, and API code. Use when reviewing a diff/PR or conducting /review-code. Production, opinionated, healthcare-aware — emphasizes correctness, TS strictness, conventions compliance, security, and surgical changes over style bikeshedding.
---

# Code Review

## Purpose

A fast, high-signal review that catches real defects before merge — on THIS
repo's conventions (Next 16 App Router, TS strict, Tailwind v4, content-driven,
medical guardrails).

## When to use

- Diff/PR about to merge (see `git diff main...HEAD` or working tree).
- After nextjs-engineer / ui-designer edits; before deployment-engineer.
- User runs `/review-code`.

## Review rails (in priority order)

1. **Correctness** — logic, async/await, edge cases, null-safety, server/client
   data flow. Trace the actual code path of changed components/routes.
2. **Type safety** — no `any`, no unsafe `as`, content fields typed in
   `src/lib/types.ts`; new types added before new data. `npx tsc --noEmit` clean.
3. **Conventions & reuse** — tokens only (`bg-ink-*`, `text-brand-*`), `cn()` for
   merging, `cva` for variants, components in correct dirs, patterns matched to
   neighbor files. Prefer reusing primitives over duplication.
4. **Security** — API routes have Zod + rate limiting; no secrets in code/diffs
   (grep for suspicious keys); no raw HTML injection; chat guardrails intact.
5. **Medical-safety look** — content classified correctly as draft; no
   unverifiable claims introduced; TODO clinical-review markers preserved. (Full
   clinical gate = `medical-content-reviewer`.)
6. **Surgical scope** — change does only what the task asked; no drive-by
   refactors; gitignore/README changes justified.
7. **Quality gates run** — `npm run lint` clean; build unaffected (`npm run build`
   if UI/route changed).

## Output format

- VERDICT: APPROVE / REQUEST CHANGES
- Findings as numbered list: `file:line — issue — concrete fix — severity`
  (Blocking vs Nit). Only flag things that change behavior or risk.

## Limits

- No clinical sign-off (medical-content-reviewer + human).
- No style bikeshedding; if it matches surrounding file, leave it.

## Examples

- **"Review route X"** → run rails 1–4, find missing rate limit or an `as`
  cast, report as Blocking with the fix, approve after change.
- **"Review content PR"** → rails 3–6 dominate; verify types + draft markers + no NAP invention.