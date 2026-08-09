---
description: Full production-readiness gate + release plan before shipping.
argument_hint: [branch or target]
---

# Prepare Release

## Purpose
Run the complete production-readiness gate (`production-readiness` skill — build, env, routes, SEO, consent, security) and produce the go/no-go recommendation + ordered human release plan. The last stage before deploy (human executes deploy).

## When to use
- Right before shipping a release (major content, new routes, code changes).
- User wants a full release checklist executed.

## Expected input
- Target: branch or current working tree (default)
- Optional: deployment scope (Vercel prod, preview)

## Expected output
- Evidence table across gates: lint, tsc, build (warnings/routes), dev smoke (key 200s), env contract, `.gitignore`/secrets check, sitemap↔routes, per-page metadata, JSON-LD `@id`s, consent/draft markers, API route security (Zod+rate-limit), chat guardrails
- BLOCKERS list (must-fix before release) vs NICE
- Ordered human release plan: env keys in Vercel → merge/deploy → verify URLs → monitor (SpeedInsights) → rollback note
- Go/No-Go verdict

## Best practices
- Load `project-conventions`, `production-readiness`; run checks yourself (don't trust memory).
- Explicitly separate "verified by me" vs "verify during deploy".
- Never deploy/merge yourself; the human executes.

## Example
`/prepare-release`
→ run all gates; if build fails flag as blocker; if NAP still TODO, list as a "resolve before public launch" item; output the ordered release plan.