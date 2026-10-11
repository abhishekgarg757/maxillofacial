---
name: structured-data
description: JSON-LD (Schema.org) authoring and validation for this healthcare site. Use when creating/auditing structured data (FAQPage, MedicalProcedure, MedicalWebPage, MedicalClinic, Physician, breadcrumbs) or generating schema. Everything lives in src/lib/jsonld.ts — extend it, don't scatter inline scripts.
---

# Structured Data

## Purpose

Author and QA the site's Schema.org JSON-LD so search engines understand the
clinic and its content accurately — a core trust + rich-result signal for
healthcare entities.

## Architecture (repo convention)

- All builders live in **`src/lib/jsonld.ts`**: `organizationJsonLd`,
  `breadcrumbJsonLd`, `faqJsonLd`, `medicalProcedureJsonLd`, `articleJsonLd`,
  `jsonLdScript` (returns `type: "application/ld+json"` dangerously-safe props).
- `@id` anchors: `${site.url}/#clinic` (MedicalClinic) + `#physician` — keep IDs
  consistent so entities link (Physician `worksFor`/`memberOf` Clinic).
- Render: `layout.tsx` injects organization graph; pages inject their entity via
  `<script {...jsonLdScript(...)} />` in the page component.

## Workflow

1. Load `project-conventions`. Read `src/lib/jsonld.ts` before writing.
2. **Match schema to the page's true content** — never markup what isn't there.
   - FAQ page/accordion → `faqJsonLd` from the same data the UI renders.
   - Procedure detail → `medicalProcedureJsonLd` (title/summary/slug) + consider
     `breadcrumb`.
   - Blog post → `articleJsonLd` (MedicalWebPage; datePublished/modified,
     author Dr. Gupta, publisher `@id`).
3. **Add a new entity type** by extending `jsonld.ts` (typed args), then render
   it in the page. Keep `@context: https://schema.org`.
4. **Validate**: 
   - References resolve (`@id`s exist; `provider`/`worksFor`).
   - No placeholder NAP leaked; use `site.ts` values (or keep TODO and skip a
     field rather than emit fake data).
   - JSON parses (inspect rendered script tag) — no unescaped `</script>`.
5. Health check: `<script>` count balanced; no duplicate FAQPage on one URL.

## Expected inputs

- Page/section needing schema, or an audit request
- Optional: target entity type (FAQPage, MedicalProcedure, BreadcrumbList…)

## Expected outputs

- Extended `src/lib/jsonld.ts` + page render updates
- Validation notes (@id graph, NAP consistency, no dupes)

## Limitations

- No fabricated IDs/data; a TODO signals "wait for real value", not invent one.
- Doesn't guarantee rich results (Google decides eligibility), only correctness.

## Examples

- **"Add schema for the new TMJ surgery page"** → `medicalProcedureJsonLd` via
  the existing builder + breadcrumb; render in the detail page; no new inline script.
- **/generate-schema** → audit every page's injected entity for @id resolution,
  NAP correctness, and duplicates; emit corrected jsonld.ts diffs.