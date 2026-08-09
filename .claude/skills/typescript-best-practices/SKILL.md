---
name: typescript-best-practices
description: TypeScript strict-mode best practices for this repo. Use when adding types, refactoring, or reviewing .ts/.tsx. Enforces types-first content modeling, strictness, and idiomatic React 19 + TS usage. Supplements project-conventions.
---

# TypeScript Best Practices

## Purpose

Keep the codebase strict, typed-first, and maintainable. This repo centralizes
content types in `src/lib/types.ts` and shares UI/helper types across components.
TS here is a safety net that catches content-model drift at compile time.

## Core practices

1. **Types first** — content lives behind interfaces. Add to/amend
   `src/lib/types.ts` before adding data; don't type content inline.
2. **Strictness** — no `any`; no unsafe casts. Use `unknown` + type guards where
   inputs are untrusted (API bodies already use Zod). Prefer `satisfies` over
   widening where a shape is exact.
3. **React 19 idioms** — typed props via interfaces; `forwardRef` for primitives
   (see `ui/button.tsx`); polymorphic primitives used via Radix `Slot`/`asChild`
   typed through `React.ComponentProps`.
4. **Libraries typed** — `cva` VariantProps pattern (Button) is the house style;
   `lucide-react` icons via `LucideIcon` type (`src/lib/types.ts` IconMap).
5. **No type-only import bloat** — use `import type` for type-only imports
   (house style throughout); keeps `isolatedModules`-clean.
6. **Helper typing** — `src/lib/utils.ts` helpers have narrow signatures
   (e.g., `cn(...inputs: ClassValue[])`).

## Anti-patterns to flag

- `as` for "just making it compile"; `any` in new code.
- Duplicating a type that already exists in `types.ts` (extend, don't fork).
- Non-null assertions (`!`) on values that could be falsy from real API/data.

## Workflow

1. Load `project-conventions`. Check `src/lib/types.ts` for the relevant shape.
2. Extend types surgically (add field → update all data objects → consumers
   surface compile errors — that's intended).
3. Clean compile: `npx tsc --noEmit`.

## Limits

- Stylistic preference follows surrounding files; this skill is the baseline, not
  a forum for every choice.

## Examples

- **Add `duration` to Procedure** → edit interface + `src/content/procedures.ts`
  objects + any consumer rendering it (compile-guided).
- **API safety** → keep `body unknown` -> Zod parse pattern already in
  `src/app/api/contact/route.ts`, never trust raw `req` bodies as typed.