---
description: Create a new React component following repo conventions.
argument_hint: <component name> [type: ui|section|layout] [props..]
---

# Create Component

## Purpose
Scaffold a new TypeScript/React component in the correct folder following the repo's component taxonomy and conventions (tokens, `cn()`, `cva`, Radix `Slot`/`asChild` for primitives). Avoids off-pattern drift and keeps code review clean.

## When to use
- A piece of UI doesn't map to an existing component/primitive.
- You need a reusable building block (e.g., a Tabs block, a stats grid).

## Expected input
- Component name (PascalCase, e.g., `StatsCard`)
- Type: `ui` (primitive), `section` (page block), `layout`, or `motion`
- Optional: props, whether it needs `"use client"` (interactivity)

## Expected output
- New file at `src/components/<type>/<name>.tsx` (e.g. `ui/status-card.tsx`) with:
  - typed props (interface), correct Server/Client boundary
  - `cn()` for class merging; `cva` if variants; tokens only (brand/accent/ink)
  - JSDoc for public API; house import style (`@/components/...`, `@/lib/...`)
- If `ui`: Radix `Slot`/`asChild` support where composable
- `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `tailwind-best-practices`, `typescript-best-practices`.
- First ASK: does an existing component already do this? Compose before creating.
- Only add `"use client"` if it truly needs interactivity (framer `motion`, state, hooks).
- Keep the file focused; don't build the whole page.
- Name files kebab-case, export PascalCase.

## Example
`/create-component StatsCard ui`
→ creates `src/components/ui/stats-card.tsx` `function StatsCard({ value, label, className })` using tokens + `cn`, no client directive, mirroring the style of `ui/card.tsx`.