---
name: ui-audit
description: Visual/UX design audit for this clinic site. Use when reviewing a page's visual quality, hierarchy, consistency, and polish against the design system (tokens, spacing, motion, component reuse). For /audit ui. Complements accessibility-audit (inclusion) and performance-audit (speed).
---

# UI Audit

## Purpose

Judge how a page *looks and feels* against the site's "modern & bold, dark hero
+ light airy sections" design language — and produce concrete, token-level fixes.

## When to use

- After building/reworking a page or section.
- User runs `/audit ui` on a target route.
- Before a release to catch visual drift.

## Audit dimensions (code-grounded)

1. **Token hygiene** — any hardcoded colors/fonts instead of `brand/accent/ink`
   tokens? (grep for hex/oklch/rgba in `.tsx`). Colors match globals.css theme?
2. **Rhythm & spacing** — consistent `py-20 sm:py-28` sections, `gap-5/6` grids,
   `Container` max-widths, alignment (`mx-auto`, grid columns) intentional.
3. **Typography hierarchy** — h1→h3 via display font with tight tracking;
   `text-balance`/`text-pretty`; muted descriptions vs readable body contrast
   (`text-muted-foreground` only on light, `ink-300` on dark).
4. **Component reuse** — pages compose `Button`, `SectionHeading`, `Reveal`,
   cards etc. rather than bespoke markup that drifts visually.
5. **Buttons/CTAs** — consistent variants (primary/accent signals), consistent
   sizes, Icon+text conventions, no gold buttons everywhere.
6. **Dark-section treatment** — `bg-ink-950` + `bg-grid`/glows used sparingly;
   text contrast OK; not overusing dramatic treatments.
7. **Motion** — `Reveal`/`Stagger` consistent, subtle, reduced-motion respected.
8. **Responsiveness intent** — sm/md/lg behavior sensible (grid collapse,
   hero layout, nav).

## Output

Per-finding: `file:line — issue — suggested fix (token/class) — severity`.
Final verdict: PASS / POLISH-NEEDED with a prioritized list.
Wire agnostic of content correctness (that's seo-writer + medical-reviewer).

## Process

1. Load `project-conventions` + `tailwind-best-practices`. Read the target page
   (+ its sections). Optionally `npm run dev` for visual confirmation.
2. Run dimensions 1–8 on the actual code.
3. Report strictly visual/UX; hand ownership to `ui-designer` for fixes.

## Limits

- Not a11y (accessibility-audit) nor speed (performance-audit); those are peers.
- Not subjective taste; fixes must map to the existing design language.

## Examples

- **Audit homepage** → find hardcoded `#123456` in a section → report
  `src/app/page.tsx:NN` → fix: `bg-brand-600` or add token if genuinely new.
- **Card grid drift** → margins inconsistent → align to `Stagger` + `gap-5` pattern used by analogous sections.