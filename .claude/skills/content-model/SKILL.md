---
name: content-model
description: How to add or extend typed content on this site — procedures, FAQs, testimonials, before/after cases, blog post frontmatter, site config. Use whenever new content data must be modeled. Guarantees schema-driven, CMS-ready, TypeScript-safe content that matches src/lib/types.ts.
---

# Content Model

## Purpose

Structural rulebook for this repo's content: every content file in `src/content/`
is backed by an interface in `src/lib/types.ts`. This skill makes adding content
mechanical and future-proof for a CMS, appointments, multilingual (hi/en-IN),
calculators, and analytics.

## Workflow

1. **Identify the type** — open `src/lib/types.ts`. Find the matching interface:
   - Procedures → `Procedure` (with `Section`, `RecoveryStage`, `FAQ`, `Source`)
   - FAQs → `FAQ`
   - Testimonials → `Testimonial`
   - Before/after → `BeforeAfterCase`
   - Blog → `BlogPostMeta` (defined in file frontmatter, read by `src/lib/blog.ts`)
   - Site/NAP → `SiteConfig` in `src/content/site.ts`
   - Doctor → `doctor` object in `src/content/doctor.ts`
2. **Extend the type first, never the data alone.** If a field is missing, add it
   to the interface, then update ALL existing data objects and any component that
   consumes the field. Surfaces compile errors = your safety net.
3. **New content file → register it.** Add exports/imports where consumed
   (home page slices posts, procedures grid, FAQ page, etc.). Grep for existing
   imports of the file you touch.
4. **Keep structure over prose.** Prefer fields arrays (`indications[]`,
   `recovery[]`, `points[]`) over a wall of text — markdown-like prose in a
   single `body` field is allowed only where the existing type defines it.
5. **Preserve placeholders & clinical-review markers.** Never invent NAP, phone,
   email, credentials, or stats — leave TODO markers.

## Expected inputs

- The type of content to add (procedure, FAQ, testimonial, blog post, before/after case, site setting)
- Optional: a draft written by seo-writer or the user
- Optional: slug/ID conventions (kebab-case, e.g. `preparing-for-jaw-surgery`)

## Expected outputs

- Updated interface in `src/lib/types.ts` (if new field needed)
- New or updated content in `src/content/` (typed object or MDX with frontmatter)
- Compile-clean code (`npx tsc --noEmit`)

## Limitations

- Does NOT create pages/components — that's `service-page` / `homepage-design` /
  nextjs-engineer. This skill is the data layer only.
- Does NOT validate clinical claims — medical-content-reviewer + human review does.
- Existing content types must not be silently changed in incompatible ways
  without updating all consumers.

## Examples

- **Add a discipline FAQ**: add `{ question, answer, category }` object to an
  array in `src/content/faqs.ts` → confirm `FAQ` interface has those fields → page renders it.
- **Add a new procedure**: match the full `Procedure` interface (slug, icon,
  sections, indications, benefits, risks, anaesthesia, duration, recovery, faqs,
  sources). Then a `[slug]` route already exists — no page work needed.
- **Add a blog post**: create `src/content/blog/<slug>.mdx` with frontmatter
  (`title`, `excerpt`, `date`, `readingMinutes`, `tags`, optional `cover`).