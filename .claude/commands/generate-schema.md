---
description: Generate or audit Schema.org structured data (JSON-LD).
argument_hint: [scope: page|all]
---

# Generate Schema

## Purpose
Generate or audit the site's structured data by extending `src/lib/jsonld.ts` builders and rendering them on pages — always matching the actual content (never markup-what's-not-there). Covers MedicalClinic/Physician, FAQPage, MedicalProcedure, MedicalWebPage (blog), BreadcrumbList.

## When to use
- A new page/section needs structured data (procedure page, FAQ, blog post, breadcrumbs).
- User runs an audit: are all entities correct, `@id`-resolved, NAP-consistent?
- Before release to catch schema drift.

## Expected input
- Scope: `all` (audit the whole site) or a page/entity to add
- Optional: entity type to add

## Expected output
- Extended `src/lib/jsonld.ts` (typed builders) + page render `<script {...jsonLdScript(...)} />`
- Audit report: @id graph resolves, no duplicate FAQPage per URL, NAP from `site.ts`, no fabricated data
- `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `structured-data`, `technical-seo`.
- Everything flows through `jsonld.ts` — no scattered inline scripts.
- Don't emit schema for values that are still TODO (skip the field, keep the TODO).
- Validate JSON escapes; no `</script>` injection.

## Example
`/generate-schema procedures/tmj-jaw-joint-surgery`
→ use `medicalProcedureJsonLd` + breadcrumb for the new procedure; render on the page; report @id/NAP correctness.