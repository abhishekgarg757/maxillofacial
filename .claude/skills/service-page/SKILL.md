---
name: service-page
description: End-to-end procedure/service page creation on this site. Load this skill when creating or redesigning a procedure page — it covers data entry via content-model, the existing [slug] route mechanics, medical copy standards, SEO metadata, and JSON-LD. Produces a draft-worthy procedure page with clinical-review markers.
---

# Service Page Creation (Procedures)

## Purpose

Create or significantly revise a procedure/service page on this Next.js 16
clinic site — e.g. "Jaw Reconstruction", "Orthognathic Surgery", "Dental Implants".
The site renders procedures from data (`src/content/procedures.ts`) through an
existing dynamic route (`src/app/procedures/[slug]/page.tsx`), so service pages
are mostly *data + copy*, not new UI.

## Workflow

1. **Load prerequisites:** `project-conventions` + `healthcare-content`
   (medical-drafting guardrails) + `content-model`. Read
   `src/app/procedures/[slug]/page.tsx` to see exactly what fields render.
2. **Choose an entry**: 
   - New service → add a full `Procedure` object (all fields incl. `recovery`,
     `sources`, `faqs`) to `src/content/procedures.ts`.
   - Existing service → edit/expand the relevant object.
3. **Write healthcare-grade copy** (draft): apply the `healthcare-content`
   guardrails — draft-first markers, no unverifiable precision, risks beside
   benefits, sourcing in `sources`. Add `TODO: clinical review` markers for
   anything awaiting Dr. Gupta's sign-off.
4. **Update SEO if page content changed meaningfully**: the detail route's
   metadata and `src/lib/jsonld.ts` `medicalProcedureJsonLd` use the object —
   confirm description/summary read naturally as meta description.
5. **Verify**: `npx tsc --noEmit`, `npm run lint`, and (if UI changed) check the
   section's rendering pattern still fits (`ProcedureCard`, detail sections).

## Expected inputs

- Procedure name / existing slug to modify
- Intended audience need (patient-education angle)
- Real facts available (duration, anaesthesia approach) or explicit TODO for them
- Optional: clinical review status

## Expected outputs

- Updated `src/content/procedures.ts` (typed object)
- Confirmed matching `src/lib/types.ts` `Procedure` interface
- Any metadata/JSON-LD updates
- A short diff summary + reminder that content is a draft pending clinical review

## Limitations

- Content only — no new page template unless the [slug] route is insufficient.
- Does not replace human clinical sign-off; output is a draft.
- New routes still need `sitemap.ts`/`robots.ts` wiring (rare here — dynamic route exists).

## Examples

- **"Create a page for TMJ surgery"** → append a `Procedure` for
  `jaw-tmj-surgery` with recovery stages and sources; homepage grid and
  /procedures and /procedures/[slug] all pick it up automatically.
- **"Fix the jaw reconstruction page"** → edit the existing object's sections,
  verify rendering, flag any new claims for review.