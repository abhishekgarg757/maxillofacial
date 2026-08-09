---
description: Accessibility audit (WCAG 2.2 AA) of a page or component.
argument_hint: <target route or component>
---

# Review Accessibility

## Purpose
Run the WCAG 2.2 AA accessibility audit on a target page/component — semantics, keyboard support, focus, labels, contrast, motion safety, target size — grounded in code, with file:line fixes.

## When to use
- Before release of any UI change.
- After building new sections (accordions, dialogs, sliders, chat, forms).
- User reports a screen-reader/keyboard issue.

## Expected input
- Target route (e.g., `/contact`) or component file
- Optional focus (forms / modals / navigation / contrast)

## Expected output
- Findings: `file:line — WCAG 2.2 AA criterion — issue — concrete fix`
- Prioritized: BLOCKING / SHOULD-FIX / NICE
- PASS checklist recap + recommended assistive-technology testing note

## Best practices
- Load `project-conventions`, `accessibility-audit`.
- Read the actual code (Radix usage, chat widget, forms, sliders) — trace keyboard paths.
- Check contrast via token pairs (ink-* on dark, muted-foreground on muted).
- Confirm reduced-motion global rule + Reveal/Stagger transform-only animation.
- Hand fixes to ui-designer/nextjs-engineer; don't redesign yourself.

## Example
`/review-accessibility /contact`
→ audit the contact form + chat widget: label wiring, error announcement, focus-visible, honeypot-hidden; report Blocking items with exact fixes.