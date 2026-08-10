---
name: image-optimization
description: Image optimization guidance for this clinic site — next/image usage, SVG placeholders, raster essentials, alt/consent for photos. Use when adding images, replacing placeholder art, or auditing image performance (/audit perf). Coordinates with performance-audit (vitals) and accessibility (alt text).
---

# Image Optimization

## Purpose

Ensure every image on the site loads fast, stays accessible, and is legally safe
(consent for patient photos). This site mostly ships lightweight SVG placeholders
today; the skill covers both SVG hygiene and the real-photo path.

## Current state (verify, don't assume)

- Static placeholders: `public/doctor-portrait.svg`, `public/before-after/*.svg`,
  etc. are local, tiny, and safe.
- `next.config.ts` sets `dangerouslyAllowSVG` **with** a strict
  `contentSecurityPolicy` + `contentDispositionType: attachment` — keep that
  pairing if any SVG remains served via `next/image`. For non-image `<svg>`
  components (Lucide), that path isn't needed.
- OG images: metadata references OG; if no OG image exists, that's a gap to flag.

## Rules

### Adding `next/image`
1. Use `next/image` for raster photos (jpg/webp/avif); pass real `width`+`height`
   or `fill` with a sized parent (prevents CLS).
2. LCP image: `priority` + proper `sizes` (e.g., `sizes="(min-width:1024px) 60vw, 100vw"`).
3. No scaling up: provide source ≥ needed display size.
4. Keep default `sizes` sensible; don't leave `fill` without container dimensions.

### SVG assets
- Keep them small, first-party, and static; never upload user-supplied SVG to
  public/ (XSS surface) — placeholders are internal.
- Alt text: decorative `alt=""` (`aria-hidden`), meaningful otherwise.

### Real patient photos (future)
- **Consent before publish** — replace illustrative placeholders only with
  patient-consented images (this is a hard clinical/legal rule; flag as TODO
  until provided).
- Add `width/height`, `alt` describing exactly the case (e.g., "side profile
  before and after orthognathic surgery"), and store in `public/` or remote
  optimized via `next/image`.

## Workflow

1. Load `project-conventions` + `performance-audit`.
2. For an image task: classify (placeholder vs real) → same rules → implement
   via `next/image` or keep inline-SVG.
3. For `/audit perf`: grep `public/` + `next/image` usage; report largest
   bytes, missing dimensions, missing alt, consent gaps.

## Expected outputs

- `next/image` props corrected / added per image
- Alt + consent status checklist
- Guidance on OG image if metadata references a missing one

## Limits

- No compressing of SVGs beyond current (they're already tiny);
- Patient photos require human-provided, consented assets — I can't conjure real
  before/after cases from nothing (flag, don't invent).

## Examples

- **"/audit perf"** → list `public/*.svg` sizes, audit `next/image` usage in
  Hero/BeforeAfterSlider for priority+dims, flag OG image gap; fix what's code-fixable.
- **Swap doctor portrait** → keep `next/image` with proper dims + alt "Dr. Saloni
  Gupta" unless the actual file stays an inline svg.