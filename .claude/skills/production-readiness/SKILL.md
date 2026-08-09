---
name: production-readiness
description: Release checklist and production-readiness verification for this clinic site. Use before any deploy (/prepare-release, /deployment-check) or when auditing readiness. Covers build, env, routes, SEO, consent, security toggles, and the human release plan. Execution agent: deployment-engineer.
---

# Production Readiness

## Purpose

Take a finished branch from "code is good" to "safe to ship & here's the exact
steps". Healthcare + production = grace degradation, consent compliance, and no
surprises on Vercel.

## Gate checklist (verify each with evidence)

### Build & correctness
1. `npm run lint` passes.
2. `npx tsc --noEmit` passes (types-first content stays clean).
3. `npm run build` succeeds; note any warnings; confirm expected routes in output.
4. `npm run dev` boot + smoke: `/`, `/procedures/<valid-slug>`, `/blog`,
   `/contact` return 200; API routes return graceful errors when unconfigured.

### Env & config
5. Every `process.env.*` used has `.env.example` entry; site works with zero env
   set (graceful fallback) — servers fail-fast only where truly required.
6. `.env.local` / secrets NOT committed; `.gitignore` covers `.claude/settings.json`,
   `.env*` (guard verified).
7. `next.config.ts` sane (image CSP for SVG stays paired).

### Routes & SEO
8. sitemap/robots reflect live routes; no indexable 404s from dynamic pages
   (use `notFound()` correctly).
9. Per-page metadata present; canonical/no index flags correct; JSON-LD `@id`s resolve.

### Content & consent
10. No un-consented patient photos/testimonials present as real (only
    illustrative markers or consented assets — consistent with `testimonials.ts`
    + home page disclosure).
11. Medical artifacts carry clinical-review/draft markers where still pending —
    nothing fabricated.

### Security & resilience
12. API routes: Zod parse + rate limit (chat/contact both) — presence confirmed.
13. Chat assistant guardrails intact (assistant-guardian checklist).
14. No hardcoded credentials/keys in the diff; no open redirects.

## Release plan (human-executed)

For the deployment-engineer output: ordered steps for the human —
1. Set/verify env keys in Vercel (per `.env.example`).
2. Merge → deploy (Vercel auto or manual); watch build logs.
3. Verify: canonical URL, sitemap, a dynamic route, contact-form grace, chat.
4. Monitor: Vercel Analytics/SpeedInsights first hours; webhook/HTTP logs.
5. Rollback note: Vercel promotion/rollback path.

## Process

1. Load `project-conventions`; run the checks you can execute (lint/tsc/build/smoke).
2. Grep-triggered checks (secrets, `.env*`, consent markers).
3. Distinguish verified-by-me vs verify-on-deploy (be explicit; no false "all good").

## Limits

- Not a substitute for Dr. Gupta's clinical review or the human merge/deploy decision.
- Some external checks (GBP, domain DNS) live outside this repo — emit as human steps.

## Examples

- **"/prepare-release"** → run gates 1–14, output the evidence table + the
  ordered human release plan + any blockers (e.g., "build fails: ..." or
  "consent TODO present").
- **"/deployment-check"** → same checklist but release-lite (post-deploy hygiene).