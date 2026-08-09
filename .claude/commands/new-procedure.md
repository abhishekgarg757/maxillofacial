---
description: Create a new procedure/service page end-to-end.
argument_hint: <procedure name or slug>
---

# New Procedure Page

## Purpose
Create a full production procedure page for a new service (e.g., "TMJ surgery") by adding a typed `Procedure` object to `src/content/procedures.ts`, which the existing dynamic routes (`/procedures`, `/procedures/[slug]`, homepage grid) render automatically.

## When to use
- The clinic adds a new service that deserves its own page.
- You're given a procedure name, or a user request like "add a page for X".

## Expected input
- Procedure name (e.g., "TMJ Surgery", "Cleft Orthognathic Care")
- Optional: clinical facts (duration, anaesthesia, recovery, indications) — else explicit placeholders
- Optional: desired slug (defaults to slugified name)

## Expected output
- New `Procedure` object in `src/content/procedures.ts` with ALL fields from the `Procedure` interface in `src/lib/types.ts` (icon, tagline, summary, sections, indications, benefits, risks, anaesthesia, duration, recovery, faqs, sources)
- `npx tsc --noEmit` and `npm run lint` passing
- Diff summary; confirmation that the page renders on `[slug]` route
- Reminder: content is a DRAFT pending Dr. Gupta's clinical review

## Best practices
- Load `project-conventions`, `content-model`, `service-page`, `medical-blog` skills first.
- Types first: if a field is missing in `src/lib/types.ts`, extend it BEFORE the data.
- Cite reputable sources (AAOMS, Cleveland Clinic, Mayo, NHS, JHU, NIDCR) in `sources`.
- Risks alongside benefits; no unverifiable precision; no diagnosis.
- Preserve `TODO: clinical review` markers; never invent NAP/phone/credentials.
- Match the style of an existing procedure object (e.g., "jaw-reconstruction").

## Example
`/new-procedure "TMJ (Jaw Joint) Surgery"` → append a `Procedure` with slug `tmj-jaw-joint-surgery`, honest sections, recovery stages, procedure FAQs, and sources; verify the existing `/procedures/tmj-jaw-joint-surgery` route, homepage grid, sitemap, and chat prompt pick it up.