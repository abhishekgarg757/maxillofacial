---
name: medical-blog
description: Generate or revise healthcare blog posts for this site — the highest-stakes content type. Use when writing/editing MDX posts in src/content/blog/. Enforces E-E-A-T, honest sourcing, no-unfounded-claims, proper structure, and the existing frontmatter contract so posts render correctly on /blog and /blog/[slug]. Always flags output as draft pending clinical review.
---

# Medical Blog Generation

## Purpose

Create search-visible, clinically responsible patient-education articles that
earn trust and rank for this OMFS practice. Blog posts live as MDX in
`src/content/blog/<slug>.mdx`, read by `src/lib/blog.ts`, rendered by
`src/app/blog/[slug]/page.tsx` (via `next-mdx-remote` + typography styles).

## Frontmatter contract (must match `BlogPostMeta`)

```yaml
---
title: "…"
excerpt: "…"          # used in meta desc + cards
date: "YYYY-MM-DD"
readingMinutes: 5
tags: ["…", …]
# optional: cover: "/path/or/object-key"
---
```

## Workflow

1. Load `project-conventions` + `content-model`; read an existing post
   (`src/content/blog/preparing-for-jaw-surgery.mdx`) for house style.
2. **Pick a search-worthy topic** from the practice's service lines (jaw
   surgery, orthognathic, implants, trauma, TMJ, reconstruction) and patient
   questions. Long-tail "is X right for me" angles fit patients best.
3. **Draft** with E-E-A-T and medical guardrails:
   - Author: Dr. Saloni Gupta; tone calm/plain; explain jargon.
   - No diagnosis; always "every plan is tailored in consultation".
   - No unverifiable precision — ranges and qualitative framing only.
   - Cite reputable sources (AAOMS, Cleveland Clinic, Mayo, NHS, JHU, NIDCR)
     for clinical claims — inline links or a closing source list.
   - Honest risk/content caveats; add `TODO: clinical review` if any
     claim is new or unverified.
4. **Structure for reading**: intro → scannable `##` sections → FAQs/bullets →
   clear contact/consult CTA (WhatsApp via `whatsappUrl`, `/contact`).
5. **Verify**: valid frontmatter (all fields), `next-mdx-remote`-compatible MDX
   (no raw HTML/imports), `tsc --noEmit`, lint, and confirm the post surfaces on
   `/blog` + sitemap (sitemap is content-file-driven — check `sitemap.ts`).

## Expected inputs

- Topic or keyword focus; optional clinical facts provided by the clinic
- Existing post slug (for revision)

## Expected outputs

- New/updated `src/content/blog/<slug>.mdx` (frontmatter + body)
- Checklist of sources used + any TODO/unknowns flagged for Dr. Gupta

## Limitations

- NOT medical advice — output is a *draft* pending human clinical review.
- Not a ranking guarantee: no keyword-stuffing or invented stats.
- MDX only; no dynamic components unless existing rendering supports them.

## Examples

- **"Write a post about dental implants vs bridges"** → update/extend the
  existing `dental-implants-vs-bridges.mdx` with fresh, sourced, plain-language
  comparisons and a consult CTA, keeping frontmatter intact.
- **"Blog about recovery after jaw surgery"** → create a new post following the
  structure of `preparing-for-jaw-surgery.mdx` (before/during/after + nutrition
  + red flags asking to seek urgent care).