---
description: Generate or expand patient testimonials (clearly sourced vs illustrative).
argument_hint: [count] [service]
---

# Generate Testimonials

## Purpose
Create or expand testimonial content in `src/content/testimonials.ts` (and the homepage marquee path) — either from real, consented patient feedback the clinic provides, or clearly-labeled illustrative samples, matching the existing disclosed-policy style.

## When to use
- The testimonials page or homepage marquee needs more entries.
- Real consented testimonials were provided to format.
- User asks to expand social proof (with the honest labeling the site already uses).

## Expected input
- Count (optional, default ~6) and/or service line (e.g., "orthognathic", "implants")
- Real quotes if available (preferred; consented)

## Expected output
- Updated `src/content/testimonials.ts` with `{ quote, author, context, rating }` objects
- Explicit separation: REAL (pending consent) vs ILLUSTRATIVE (marked, matching the site's current disclosure callout)
- No invented success metrics in quotes
- `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `testimonial-creation`, `content-model`.
- Match the honest stance already on the homepage ("Illustrative testimonials — to be replaced with consented patient feedback").
- Never fabricate real patient identities or unverifiable outcomes.
- Keep `context` mapped to actual service lines.

## Example
`/generate-testimonials 6 implants`
→ add 6 sample quotes marked illustrative, or format 6 consented quotes, on-testimonial-marquee shape.