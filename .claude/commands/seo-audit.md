---
description: Full on-site technical + local SEO audit.
argument_hint: [scope: all | route]
---

# SEO Audit

## Purpose
Run the site's on-page technical + local SEO audit (metadata, sitemap, robots, canonical, JSON-LD, NAP/local signals) grounded in the real code and content — producing prioritized, file-level fixes.

## When to use
- Pre-launch or major content release.
- Ranking/diagnostics review requested.
- User wants the site's search posture assessed.

## Expected input
- Scope: `all` (whole site) or a specific route
- Optional: focus (technical / local / schema / metadata)

## Expected output
- Crawl/index/on-page findings, ranked by impact:
  - technical: per-page metadata uniqueness, canonicals, sitemap↔routes, robots
  - local: NAP consistency (site.ts vs JSON-LD vs footer/contact), area targeting, GBP readiness checklist for human
  - schema: `@id` resolution, no dupes, NAP-sourced (`structured-data` skill)
  - content: internal links / headings sanity (no keyword stuffing)
- Fixed items applied (where code-fixable); human-action items (GBP, DNS) clearly separated
- `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `technical-seo`, `local-seo`, `structured-data`.
- Metadata must mirror actual content — no fake descriptions.
- Keep NAP sourced from `src/content/site.ts`; never invent clinic data.
- Rank: crawl/index blockers first, then on-page, then local/off-page actions.

## Example
`/seo-audit all`
→ sweep every route against the 10-point technical-seo checklist + local NAP check; report the top 10 fixes and the human GBP task list.