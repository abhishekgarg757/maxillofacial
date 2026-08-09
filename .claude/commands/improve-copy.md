---
description: Improve copy on a page in the site's medical-trust voice.
argument_hint: <target page or content file>
---

# Improve Copy

## Purpose
Rewrite/improve user-facing copy on a target page or content file to be clearer, more reassuring, more honest, and more persuasive — in the house voice (calm, plain-language, clinically responsible). Improves readability and trust; never inflates claims.

## When to use
- Copy feels stiff, jargon-heavy, alarmist, or unconvincing.
- A page's messaging should better match the care philosophy (patient-first, evidence-based).
- Post-release polish of tone and clarity.

## Expected input
- Target page or content file (e.g., `src/content/procedures.ts` section, homepage hero, `/about`)
- Optional: intent (more reassuring / clearer / shorter / more benefit-led)

## Expected output
- Edited copy in place (content files preferred over components)
- Before/after summary of the tone/meaning changes
- Guardrails honored: no new claims, risks kept, no diagnosis, no unverifiable stats
- `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `landing-review`, and the domain skill for the content type (e.g., `medical-blog`, `service-page`).
- Edit CONTENT files, not components, for copy changes (content-driven UI).
- Keep medical facts unchanged; improve expression only, unless the user authorizes fact changes.
- Flag anything that introduces a new claim as needing clinical review.

## Example
`/improve-copy src/app/about/page.tsx`
→ tighten the about page's biography and philosophy into warmer, clearer patient language without changing factual claims.