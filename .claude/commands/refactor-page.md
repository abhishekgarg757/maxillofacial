---
description: Refactor/restructure an existing page or component safely.
argument_hint: <page or component path>
---

# Refactor Page

## Purpose
Restructure an existing page or component (improve structure, split sections, fix conventions drift, reduce duplication) WITHOUT changing user-visible behavior or content meaning. Surgical, diff-respecting refactor.

## When to use
- A page grew monolithically (`page.tsx` too long; interleaved markup).
- Repeated markup/duplicated patterns that could use a shared section.
- Convention drift to correct (hardcoded colors, wrong component folder, missing types).

## Expected input
- Target file(s) or route (e.g., `src/app/procedures/page.tsx`)
- Optional stated goal you want preserved (keep identical render)

## Expected output
- Refactored code with behavior preserved (same rendered output, same metadata/JSON-LD)
- Reuse of existing primitives/sections where applicable
- `tsc --noEmit`, lint pass; optional `npm run build`
- A before/after summary of structural changes

## Best practices
- Load `project-conventions`, `code-review`; run a git diff stash-first discipline
  if unsure (avoid mutating behavior inadvertently).
- READ the file before rewriting; match surrounding file style.
- Never change copy/content meaning during a refactor — that's `seo-writer` territory.
- Keep imports tidy; prefer `@/` alias; remove dead code you touch.
- Small, reviewable chunks over huge rewrites.

## Example
`/refactor-page src/app/procedures/page.tsx`
→ split hero/list into existing `SectionHeading` + `ProcedureCard` composition; verify identical render; report the diff.