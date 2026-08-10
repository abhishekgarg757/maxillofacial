---
description: Run the full audit suite (UI, accessibility, performance, SEO, code) in parallel and consolidate into one prioritized report with owners.
argument_hint: [route or diff] [focus: all|ui|a11y|perf|seo|code|local]
---

# Audit

## Purpose
One command for every review pass. Replaces `/review-ui`,
`/review-accessibility`, `/review-performance`, `/seo-audit`,
`/analyze-homepage`, and `/optimize-images`.

## When to use
- After any implementation/UI work.
- Before a release.
- A route is underperforming and you want the full diagnosis.

## Expected input
- Optional target (route, page path, or `diff` for the working tree).
- Optional focus: `all | ui | a11y | perf | seo | code | local` (default all).

## Expected output
- Parallel findings from `ui-designer` (ui-audit), `accessibility-reviewer`,
  `performance-reviewer`, `seo-writer` (technical + local SEO), and
  `code-reviewer`.
- Consolidated prioritized report: `file:line — issue — fix — owner`.
- Findings touching medical claims/NAP/consent → `TODO.md` Track B (human).
- PASS/FAIL verdict per dimension; P0/Blocking must be fixed before release.

## Best practices
- Load `project-conventions` + the relevant audit skills.
- Ground every finding in code/build output — no fabricated Lighthouse numbers.
- Fix P0/Blocking through the owning agent (nextjs-engineer / ui-designer).

## Example
`/audit /procedures/dental-implants`
→ parallel UI/a11y/perf/SEO/code pass on that route; one report, owners assigned.
