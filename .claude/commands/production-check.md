---
description: Full production-readiness gate (build, env, routes, SEO, consent, security) + ordered human release plan. Replaces /prepare-release and /deployment-check.
argument_hint: [pre | post] [focus]
---

# Production Check

## Purpose
Single entry to release readiness. `pre` = go/no-go gate + human release plan;
`post` = verify a live deploy. The human executes the deploy; nothing auto-ships.

## When to use
- Before shipping a release (`pre`).
- After a deploy to verify health (`post`).
- The user asks "are we ready to ship?"

## Expected input
- Phase: `pre` (default) or `post`.
- Optional focus (routes, env, SEO, security).

## Expected output
- Evidence across gates: lint, tsc, build, route smoke, env contract vs
  `.env.example`, sitemap/robots↔routes, per-page metadata, JSON-LD `@id`s,
  secrets scan, consent/draft markers, API security (Zod + rate-limit), chat
  guardrails.
- BLOCKERS vs NICE list; explicit "verified by me" vs "verify on deploy".
- Ordered human release plan: env keys → merge/deploy → verify → monitor →
  rollback.
- Go/No-Go recommendation (the human decides).

## Best practices
- Load `project-conventions`, `production-readiness`. Run the checks yourself.
- Flag unresolved NAP/credentials as launch-blocking (`TODO.md` Track B).
- Never deploy, merge, or push.

## Example
`/production-check pre`
→ run all gates; if build fails flag blocker; output the ordered release plan.
