---
description: Optimize images across the site (dimensions, format, size, alt, consent).
argument_hint: [scope: all | page]
---

# Optimize Images

## Purpose
Audit and fix image usage across the site — `next/image` props (priority, sizes, dimensions), SVG asset hygiene, alt text (accessibility), and consent-safety for patient photos. Coordinates with `performance-audit` and `image-optimization` skill.

## When to use
- Before a perf-sensitive release.
- After adding images (placeholders or real photos).
- User runs a site-wide image health check.

## Expected input
- Scope (`all` default) or a specific page
- Optional: whether real patient images are now available (consent to respect)

## Expected output
- Findings list (priority ordered):
  - every raster via `next/image` with real `width/height` or `fill`+sized parent
  - `priority` on LCP hero; sensible `sizes`
  - alt text present (decorative = `alt=""` / `aria-hidden`)
  - largest static SVG/file sizes flagged
  - consent status: placeholders vs consented real photos (TODO where missing)
- Fixes applied to code; `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `image-optimization`, `performance-audit`.
- Never invent real before/after imagery; keep `TODO` for consented photos.
- Keep the `dangerouslyAllowSVG` + CSP pairing in `next.config.ts` if SVGs remain via `next/image`.
- No layout shift: always give images box dimensions.

## Example
`/optimize-images all`
→ scan `public/` + all `next/image` sites; report missing dims/priority/alt, largest files, consent TODO; fix code-level items.