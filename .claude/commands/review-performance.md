---
description: Performance audit (Core Web Vitals) of a page or the whole site.
argument_hint: [target: page | all]
---

# Review Performance

## Purpose
Audit Core Web Vitals posture (LCP, INP, CLS, bundle) for a page or the whole site — images, fonts, client/server split, render blocking — producing prioritized, code-grounded fixes. Coordinates with `performance-audit` skill and Vercel SpeedInsights.

## When to use
- Pre-release performance gate.
- After adding heavy components (sliders, animations, chat) or images.
- User wants a perf review.

## Expected input
- Target: a page/route or `all` (default)
- Optional focus (images / bundle / LCP / INP)

## Expected output
- Findings ranked: `P0 / P1 / P2` with `file:line — issue — evidence — recommended change`
- Image audit (dimensions, priority, sizes), font audit, `"use client"` boundary audit
- `npm run build` route/chunk-size evidence (no fabricated Lighthouse numbers)
- Recommendation to watch Vercel SpeedInsights/analytics for real metrics

## Best practices
- Load `project-conventions`, `performance-audit`, `nextjs-best-practices`.
- Read the build output and code; quantify where possible.
- Suggest `dynamic import` only where the cost is real.
- LCP image priority + hero SSR are the first checks.

## Example
`/review-performance /`
→ audit homepage: hero image priority/dims, `before-after-slider` client cost, reveal animation cost, build output for chunk size; P0/P1 fixes.