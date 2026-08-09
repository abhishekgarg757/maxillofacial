---
description: Generate or fix page metadata (title, description, OG, canonical).
argument_hint: <page path or route>
---

# Generate Metadata

## Purpose
Generate, correct, or audit per-page metadata (`export const metadata` in each `page.tsx`) — title/description, canonical, OG/Twitter, robots — consistent with the layout template (`%s · Dr. Saloni Gupta`) and the page's actual content. Never fabricated; always mirroring the rendered copy.

## When to use
- A new page/route is added but metadata is missing or boilerplate.
- Existing metadata drifts from the actual content (title too long, stale description, wrong canonical).
- User runs a metadata sweep across pages (`/generate-metadata all`).

## Expected input
- Page path/route to fix, or `all` to audit the whole site
- Optional: target keyword angle from local-seo

## Expected output
- Corrected `export const metadata` for the target page(s):
  - `title` (unique, ≤ ~60 chars, uses template), `description` (≤ ~160, honest)
  - `alternates.canonical`, `openGraph` (+ twitter card), `robots` (index/follow unless 404/utility)
- A findings list for multi-page runs
- `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `technical-seo`, `content-model`.
- READ the page's content to shape the description — no invented phrasing.
- Dynamic routes (`[slug]`) need `generateMetadata`.
- Don't duplicate the app-level default title for every page; give each page an identity.

## Example
`/generate-metadata src/app/faq/page.tsx`
→ write metadata using the site's real FAQ subjects; canonical `/faq`; OG defaults; verify build.