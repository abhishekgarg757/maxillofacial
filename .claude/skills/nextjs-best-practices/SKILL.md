---
name: nextjs-best-practices
description: Next.js 16 (App Router) best-practice checklist for this repo. Use while implementing or reviewing Next code to stay current with the installed major (docs are in node_modules/next/dist/docs/), avoid deprecated APIs, and apply App Router idioms. Supplements project-conventions.
---

# Next.js Best Practices

## Purpose

Keep Next.js code idiomatic and future-proof for **Next 16.2.9** — the version
installed. Your training data is often older; verify against
`node_modules/next/dist/docs/` for any API you touch.

## Core practices

1. **App Router idioms**
   - Server Components by default; `"use client"` ONLY for interactivity
     (forms, accordion/dialog, chat widget, sliders, Reveal/motion*).
   - Colocate layouts (`layout.tsx`), not per-page chrome duplication.
   - Use `generateMetadata` for dynamic routes ([slug] pages) — returns `Metadata`.
2. **Data & caching** — this site reads files (gray-matter/blog) and typed
   content at build/request. Prefer the current data-fetching primitives
   (server-side reads; `next/font`; no legacy `getStaticProps`).
3. **Routing** — new public route = folder + `page.tsx` + update
   `sitemap.ts` (+ nav in `site.ts` where appropriate). Keep slugs kebab-case.
4. **Images** — `next/image` (`src/app/layout.tsx` config allows SVG with a strict
   CSP). Use `priority` on LCP, right `sizes`, real width/height to avoid CLS.
5. **Fonts** — `next/font/google` already self-hosts Inter + Sora via CSS vars;
   don't add webfont links in `<Head>`/`<head>`.
6. **Config** — `next.config.ts` minimal; don't set `output: 'export'` unless the
   deployment requires it (Vercel default is fine).

## Anti-patterns to flag in review

- Using Pages Router/legacy APIs in new code.
- `<a href>` for internal navigation (use `next/link`), except genuinely external.
- Client-side heavy lifting that could be a Server Component.
- Adding `<head>`/layout weirdness instead of App Router `metadata`.
- Importing a whole library client-side when `dynamic-import` or a server read
  is better (see `performance-audit`).

## Workflow

1. Load `project-conventions`. Identify the Next feature the task needs.
2. **Read the corresponding guide in `node_modules/next/dist/docs/`** before
   writing code (the AGENTS.md golden rule — do not skip).
3. Implement; verify with `tsc --noEmit`, lint, build.

## Limits

- Doesn't override repo conventions (AGENTS.md > this skill > code style).
- No speculative upgrades/hyphenated Next features that aren't installed.

## Examples

- **"Route: /procedures/[slug]"** → read the dynamic-routes doc, ensure
  `generateMetadata` + `notFound()` for bad slugs, add to sitemap.
- **"Logout/nav state"** → keep client boundary minimal; confirm only interactive
  leaf components carry `"use client"`.