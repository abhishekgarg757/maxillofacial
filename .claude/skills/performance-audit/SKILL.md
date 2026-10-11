---
name: performance-audit
description: Core Web Vitals & performance audit for this Next.js 16 site — LCP/INP/CLS, images, bundle, fonts, render blocking, client/server split. Use for /audit perf or pre-release. Produces prioritized actionable findings. Complements ui-audit/accessibility-audit.
---

# Performance Audit

## Purpose

Protect Core Web Vitals (LCP, INP, CLS, TTFB) on a Vercel-hosted Next.js 16 app.
High-leverage areas in this repo: hero LCP image, `motion` usage, compare-slider
library, font loading, client bundle.

## Audit dimensions (code-grounded)

1. **LCP** — is the largest above-the-fold element an `next/image` with
   `priority` (no `loading=lazy`)? Is the page server-rendered (no client
   blocked render before LCP)? Search "priority" on pages with hero images.
2. **Images** — all `<img>` are `next/image` (except inline svg placeholders);
   correct `sizes`/`width`/`height` (no layout shift); no scaling up;
   `contentDispositionType: attachment` CSP config intact.
3. **Fonts** — Inter/Sora via `next/font` (self-hosted, swap); no external font
   `<link>`; `display: "swap"` set (already in layout).
4. **Client/server split** — heavy libs (`motion`, `react-compare-slider`,
   `lucide-react`, `ai`) client-loaded where needed only:
   - `"use client"` boundaries minimal; prefer Server Components.
   - `dynamic(() => import(...), { ssr: false })` only if genuinely required.
   - No giant module in the main bundle (check `next build` output).
5. **JS budget** — route-level analysis from `next build`; flag any chunk
   suspiciously large; suggest MDX/blog as-is but lazy-loaded if needed.
6. **INP** — long main-thread tasks (heavy reveal animations, marquee ticking)
   throttled; animations cheap (opacity/transform); see `globals.css` tokens.
7. **CLS** — images have dimensions; `before-after` images fixed aspect; fonts
   no layout shift (size-adjust/swap); ads/none present.
8. **Caching/SSG** — static routes fully static-ready; dynamic routes use
   generateStaticParams where content is finite (procedures, blog) to avoid
   runtime render — check `[slug]` routes and sitemap.

## Output

Prioritized findings: `P0 (bug fix) / P1 (improvement) / P2 (nice)` with
`file:line — issue — evidence — recommended change`.
Evidence can be `next build` output or code pattern; don't fabricate Lighthouse
numbers — reccomending a page-speed run as a follow-up step instead.

## Process

1. Load `project-conventions` + `nextjs-best-practices`.
2. Read pages, sections, layout; run `npm run build` and inspect route/chunk sizes.
3. Audit dimension by dimension; hand fixes to nextjs-engineer (P0/P1).

## Limits

- No live measurements unless run; qualitative code-level flags + a recommended
  exact tool (Vercel Analytics SpeedInsights already present).
- Not a security/reliability audit.

## Examples

- **Homepage LCP** → hero image should be `priority`; if it is, check it's a
  real `Image` with explicit dimensions. Report if it's an inline svg (fine) vs
  a massive `<img>` (bad).
- **Compare slider weight** → if `react-compare-slider` on homepage pulls hefty
  client JS, suggest `dynamic` import only on the /before-after route.