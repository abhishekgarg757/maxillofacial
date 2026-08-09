---
description: Visual/UX audit of a page against the design system.
argument_hint: <page or route> [focus]
---

# Review UI

## Purpose
Audit a page's visual quality and UX against the site's design language (tokens, rhythm, hierarchy, motion, reuse) and output concrete, code-grounded fixes. Runs the `ui-audit` checklist.

## When to use
- After building/reworking any page or section.
- Pre-release visual QA.
- User flags something "looks off" or "inconsistent".

## Expected input
- Target route/page (e.g., `/procedures` or a component path)
- Optional focus: hierarchy / spacing / consistency / CTAs

## Expected output
- Findings per dimension with `file:line — issue — suggested fix — severity`
- Verdict: PASS / POLISH-NEEDED
- Ownership: which agent/command fixes what (typically nextjs-engineer + ui-designer)

## Best practices
- Load `project-conventions`, `ui-audit`, `tailwind-best-practices`.
- Judge against the design language, not personal taste.
- Check tokens (no hardcoded colors/fonts), rhythm (`py-20 sm:py-28`, gaps), hierarchy (`SectionHeading` chain), motion (Reveal/Stagger, reduced-motion).
- Only flag what maps to a real fix in the code.

## Example
`/review-ui /before-after`
→ inspect the before/after section (slider, captions, dark treatment); report contrast/motion/spacing issues with the exact className fix.