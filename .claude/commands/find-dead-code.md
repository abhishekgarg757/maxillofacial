---
description: Find unused exports, dead files, and orphaned content in the repo.
argument_hint: [scope: all | route]
---

# Find Dead Code

## Purpose
Scan the repo for dead code: unused exports, orphaned component files, unreferenced content entries, unused dependencies, and stale assets — then remove or flag them surgically (unless a TODO/plan needs them).

## When to use
- Before a release or dependency cleanup.
- Repo hygiene / refactor prep.
- User asks "what can be cleaned up".

## Expected input
- Scope: `all` (default) or a route/component focus

## Expected output
- Report grouped by confidence:
  - High-confidence dead: removed (or listed for removal) with why
  - Suspicious: usage hints (e.g., import now missing) listed as suggestions
  - Keepers: files referenced from sitemap/JSON-LD/nav/content even if not obviously imported
- Guarded deletions: anything referenced by content/sitemap/metadata/schema skipped + explained
- `tsc --noEmit`, lint, optional `npm run build` pass

## Best practices
- Load `project-conventions`; grep imports thoroughly (typo-proof) before removing.
- Never delete a file referenced by `sitemap.ts`, `robots.ts`, content, or assets config.
- Keep `public/` placeholders marked TODO (before/after images) even if "unused" visually.
- Bias toward reporting over deleting when shaky (content files double as future CMS seeds).

## Example
`/find-dead-code all`
→ list unused `components/ui/*` exports + bygone `public/` SVGs + unused deps in package.json; remove the clear ones; report the keepers and why.