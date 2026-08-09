---
name: technical-seo
description: Technical SEO audit and implementation for this Next.js 16 site — metadata, sitemap, robots, canonical, crawl/index signals, structured site anatomy. Use for SEO audits, new-route SEO wiring, metadata generation, and any /seo-audit work. Complements local-seo (local/GBP) and structured-data (schema).
---

# Technical SEO

## Purpose

Guarantee that every page is discoverable, correctly canonical, and indexable with
accurate metadata — the plumbing that lets this Next.js App Router site's great
content actually rank.

## Key repo facts (verify, don't assume)

- Metadata is **per-page**: each `page.tsx` exports `export const metadata`.
- App-level metadata/template lives in `src/app/layout.tsx`
  (`%s · Dr. Saloni Gupta` template, `metadataBase`, OG/Twitter defaults).
- `src/app/sitemap.ts` is data-driven — new static routes must be added there.
- `src/app/robots.ts` — check allow/disallow + (optionally) sitemap ref.
- JSON-LD builders centralized in `src/lib/jsonld.ts` (see `structured-data` skill).

## Audit checklist

Runtime-correct (read the code):
1. Every public page has `metadata` w/ unique `title` + `description`, `canonical`
   (or `alternates.canonical`) — no duplicate/empty titles.
2. `metadataBase` set (site.url) so relative OG images resolve.
3. No page is accidentally `noindex` (layout robots currently index/follow).
4. Dynamic routes ([procedure slug], [blog slug]) generate `generateMetadata`
   (server-validated from content) — 404s must not emit indexable pages.
5. sitemap entries match real routes; robots doesn't block content.

Content-correct:
6. Headings (`h1` per page, logical `h2`/`h3`), keyword-phrased but natural.
7. Internal links: breadcrumbs → Detail pages, FAQ → procedures, blog ↔ services.
8. OG image exists or is abstracted in metadata (no broken `og:image`).

Health:
9. `npm run build` output lists all routes; confirm no hydration/404 noise.
10. Mobile-friendliness + speed are in `performance-audit`, but flag crawl-blocking
    (`Disallow`) or orphan pages here.

## Expected inputs

- A page/route to wire up, or an audit target (route/route group)
- Optional: target keywords from local-seo

## Expected outputs

- Corrected `metadata`/sitemap/robots edits with file:line
- Findings list, ranked by impact (crawl/index > on-page > copy)

## Workflow

1. Load `project-conventions` + relevant content file (`content-model`) to shape
   metadata accurately from the real content (never invent descriptions).
2. Audit entries 1–10; apply fixes surgically per route.
3. Verify `tsc --noEmit`, lint, `npm run build` (route list), and greps for
   duplicate titles.

## Limitations

- Ranking depends on authoritativeness/backlinks (off-page) — I audit on-site
   signals. No keyword-stuffing or doorway pages.
- No fake content to inflate pages; metadata must describe what's actually there.

## Examples

- **"/seo-audit whole site"** → iterate routes, apply the 10-point checklist,
  report ranked findings + fixes (dup titles, missing canonicals, sitemap gaps).
- **Wire a new route's metadata** → per-page `metadata` consistent with layout
  template + add to sitemap + confirm in build output.