---
name: local-seo
description: Local SEO for this Delhi clinic — the highest-ROI channel. Use when working on Google Business Profile alignment, NAP consistency, localization schema, area/locality service targeting, or review strategy. India-specific (Delhi NCR, healthcare) — not generic local SEO.
---

# Local SEO

## Purpose

Make the clinic the obvious local choice for "oral and maxillofacial surgeon in
Delhi" and its NCR sub-localities. Because healthcare decisions are local and
high-intent, this site's Local SEO is about trust + consistent NAP + structured
signals — never about gaming maps.

## Workflow

1. Load `project-conventions`. Read `src/content/site.ts` — the single NAP
   source: name, address, phone, hours, WhatsApp, URL, `url`.
2. **NAP & GBP consistency check** — every surface that exposes NAP must match
   `site.ts`: JSON-LD (`src/lib/jsonld.ts` organizationJsonLd), footer, contact
   page, chat answers (chat-system-prompt references contact route). Flag any
   drift as the #1 finding.
3. **Business Profile signal review**:
   - Primary category: Oral Surgeon / Dentist (maps to GBP).
   - Service area vs storefront: is the clinic addressable? (Address-based schema
     is correct when it's a storefront; use `areaServed` for locality reach.)
   - Hours + WhatsApp consistency (site.hours vs GBP).
4. **Locality/area targeting** in content (Delhi, NCR, Gurgaon, Noida,
   Ghaziabad, Faridabad as appropriate) — as natural, patient-questions copy,
   NOT keyword-stuffing. Only claim areas the clinic actually serves.
5. **Reviews strategy** — point to `Testimonial` objects being real/consented;
   recommend the exact ask (Google review link after consults) if missing.
6. **Schema completeness** via `structured-data` skill: MedicalClinic +
   Physician, `address`, `geo` (add if real lat/lng known), `openingHours`,
   `url`, `sameAs`, `medicalSpecialty`.

## Expected inputs

- A locality / goal ("rank in Saket", "fix GBP mismatch"), or the audit request.
- Optional: real address, phone, GBP URL, geo coordinates (else keep TODOs).

## Expected outputs

- NAP consistency diff (which files touch NAP; what must match)
- Priority checklist of Local SEO fixes w/ exact file edits
- GBP-specific actions for the human (category, hours, review link, photos)

## Limitations

- Local SEO ranking depends on off-site signals (GBP, citations, reviews) which
  live outside this codebase — I can only audit + prep on-site readiness and emit
  human checklists.
- Real NAP/geo values remain TODO until the clinic supplies them; never invent.

## Examples

- **"Fix NAP consistency"** → grep `site.ts`, `jsonld.ts`, footer, contact for
  phone/address; produce one-source-of-truth report + edits so all consumers
  read from `site.ts`.
- **"Review for 'orthognathic surgeon in Delhi'"** → ensure `/procedures/*` copy
  and metadata naturally target the query + area, cite the MedicalClinic schema,
  and flag the GBP category action for the human.