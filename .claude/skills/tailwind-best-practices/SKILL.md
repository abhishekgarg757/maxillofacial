---
name: tailwind-best-practices
description: Tailwind CSS v4 best practices for this repo — tokens, composition, responsive/theme utilities, and the typography plugin. Use when implementing or reviewing any styling. Supplements project-conventions §4 design system.
---

# Tailwind Best Practices

## Purpose

Write maintainable, token-driven, consistent utility styling on **Tailwind 4**
(CSS-first `@theme` in `src/app/globals.css`). The site's design language is
"modern & bold, dark hero + light airy sections" with brand/ink tokens.

## Core practices

1. **Tokens only** — never hardcode hex/rgb/oklch in components. Use:
   - `brand-*` (teal/cyan) for clinical/trust accents
   - `accent-*` (warm coral) for CTAs/highlights
   - `ink-*` for text & dark sections (`ink-950` = dark section bg)
   - semantic: `bg-background`, `text-foreground`, `text-muted-foreground`,
     `border`, `card`, `ring`
   Add new colors ONLY by extending `@theme` tokens, not inline values.
2. **Composition style** — `cn()` merges conditionals (see `ui/button.tsx`);
   `cva` owns variant sets; keep utility strings readable/multi-line when long.
3. **Layout** — `Container` for max-width; `Section` (`py-20 sm:py-28`) for rhythm;
   `SectionHeading` for eyebrow+title+description blocks; grid rhythm with
   `gap-5/6`.
4. **Typography** — headings auto `font-display` + tight tracking; body `font-sans`;
   use `text-balance` / `text-pretty` for headings/paragraphs (house style).
5. **Dark sections** — `bg-ink-950`, with `bg-grid` + `blur-3xl` brand glow
   blobs reserved for dramatic areas; ensure white/ink-300 text contrast.
6. **Motion** — `Reveal`/`Stagger`; never add custom animation tokens
   unnecessarily (existing `--animate-*` cover the site). Respect reduced motion
   (already global).
7. **Responsive** — mobile-first (`sm:`, `md:`, `lg:`); test key breakpoints.

## Anti-patterns

- Inline `style={\{...\}}` for colors/animations.
- Duplicating `shadow-brand-600/20`-style magic instead of a `Button` variant.
- New `@keyframes` for a one-off (extend the existing animation set).

## Workflow

1. Load `project-conventions`. Glance at `globals.css` tokens before styling.
2. Compose from existing primitives; add utility classes following neighbors.
3. Sanity-check contrast on dark sections + focus-visible states.
4. Verify build/lint after any global css change.

## Limits

- Doesn't cover copy/IA (seo-writer); only execution of the design system.

## Examples

- **A new CTA section** → `Section` + `SectionHeading(tone dark)` on `ink-950`
  with `bg-grid`; `Button variant="light"` for the CTA — no hardcoded colors.
- **Accent a stat** → `text-brand-600 font-bold` using existing token; never
  `text-[#0d9488]`.