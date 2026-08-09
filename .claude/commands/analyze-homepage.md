---
description: Analyze the homepage for structure, conversion flow, and SEO.
argument_hint: [focus: structure|conversion|seo|all]
---

# Analyze Homepage

## Purpose
Deep-read the homepage (`src/app/page.tsx` and its sections) and report a prioritized assessment of structure, conversion flow, and SEO — grounded in the actual code, not generic advice.

## When to use
- Before reworking the homepage.
- User wants a diagnosis of why the page underperforms, or what to build next.
- Part of `/seo-audit` style review focusing on the landing page.

## Expected input
- Focus (optional): `structure` (composition/order), `conversion` (CTA & trust), `seo` (metadata/schema), or `all` (default)

## Expected output
- Section-by-section map of the current page + what each contributes
- Prioritized findings: structure gaps, conversion friction, SEO metadata/schema issues, missing trust signals
- Concrete, token-aware fixes with file references
- Recommendation of which agents/commands to run next (e.g., `improve-conversions`)

## Best practices
- Load `project-conventions`, `homepage-design`, `landing-review`, `technical-seo`.
- Read `page.tsx` + sections + `globals.css` before judging.
- Keep the current proven order in mind (Hero→Stats→Procedures→Before/After→WhyChoose→About→Testimonials→FAQ→Blog→CTA) — only suggest order changes with a reason.
- No fabricated web-vitals numbers; speak in code-level patterns.

## Example
`/analyze-homepage conversion`
→ walk the CTA chain (hero, WhatsApp, contact form, chat widget, cta-band) and trust signals; report 2–3 highest-leverage changes.