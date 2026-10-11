#!/usr/bin/env bash
set -uo pipefail

# audit-placeholders.sh — find content placeholders that must be resolved
# before a serious production launch: unverified clinic facts, dummy NAP,
# lorem text, example URLs. Skips intentional draft markers.
#
# Usage: .claude/scripts/audit-placeholders.sh
cd "$(dirname "$0")/../.."

echo "== TODO / placeholder markers in source =="
grep -rn --include='*.ts' --include='*.tsx' --include='*.mdx' \
  -E 'TODO|FIXME|XXX' src/ || true

echo
echo "== Dummy / unverified NAP patterns =="
grep -rn --include='*.ts' --include='*.tsx' --include='*.mdx' \
  -E '98XXX|XXXXX|0000XX|lorem|example\.com|onboarding@resend\.dev' src/ || true

echo
echo "== Real patient photos marked illustrative (consent) =="
grep -rn --include='*.tsx' -E 'illustrative|Illustrative|placeholder' src/ || true

echo
echo "(no matches is good — but see per-item comments; some are deliberate placeholders)"