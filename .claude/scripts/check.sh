#!/usr/bin/env bash
set -euo pipefail

# check.sh — quick quality gate for this repo.
# Usage: .claude/scripts/check.sh   (or: npm run check)
cd "$(dirname "$0")/../.."

echo "→ Lint…"
npm run lint

echo "→ Typecheck…"
npm run typecheck

echo "✓ All checks passed."