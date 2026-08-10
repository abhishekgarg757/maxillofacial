---
description: Create or improve a specific route end-to-end (same pipeline as /feature, route-scoped).
argument_hint: <route or page path> [intent]
---

# Page

## Purpose
The deterministic, route-scoped variant of `/feature`. Use when you know the
target route; `/feature` is for when scope needs discovering.

## When to use
- You point at a page: `/page /procedures/dental-implants "improve for local SEO + conversions"`.
- A route exists but underperforms; you want the full pipeline on it.

## Expected input
- Route or page path.
- Optional intent (local SEO, conversions, copy, structure).

## Expected output
Same as `/feature`: plan approval, pipeline, audits, done-as-draft report.

## Best practices
- Same as `/feature`; loads `feature-pipeline`.
- If the route doesn't exist, propose creating it (or defer to `/feature`).

## Example
`/page /about "make it warmer and clearer without changing facts"`
→ architect scopes copy-only change → seo-writer → medical gate → engineer →
/audit → code review.
