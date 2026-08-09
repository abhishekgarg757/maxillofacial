---
description: Post-deploy / pre-deploy hygiene check (release-lite).
argument_hint: [target: pre | post]
---

# Deployment Check

## Purpose
A lighter readiness/hygiene pass than `/prepare-release`: verify the build is green, env is correct, routes/SEO are sane, and the deploy is safe — for fast pre-deploy confirmations or post-deploy verification.

## When to use
- Before a quick deploy (small fix, content-only change).
- After a deploy to verify production health (routes 200, sitemap, env present).
- Daily/weekly sanity check.

## Expected input
- Phase: `pre` (default) or `post`
- Optional focus items

## Expected output
- Pre: green build (`lint`, `tsc`, `build`), env keys vs `.env.example`, no secrets in diff, no index/blocker regressions → go flag
- Post: key routes 200 (/, /procedures/<slug>, /blog, /contact), sitemap reachable, contact form sends (graceful fallback if unconfigured), chat responds (or graceful 503)
- Any blocking item clearly flagged with owner

## Best practices
- Load `project-conventions`, `production-readiness` (but run the lite list).
- Re-check `.gitignore` (settings.json + .env*) still guard secrets.
- Don't over-run the full release checklist when a quick check suffices.

## Example
`/deployment-check post`
→ after a Vercel deploy, verify app boots, key routes + sitemap return, contact/chat degrade gracefully; flag anything 500.