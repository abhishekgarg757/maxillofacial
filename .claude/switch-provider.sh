#!/usr/bin/env bash

set -euo pipefail

CLAUDE_DIR=".claude"
PROFILES_DIR="${CLAUDE_DIR}/profiles"
SETTINGS_FILE="${CLAUDE_DIR}/settings.json"
BACKUP_DIR="${CLAUDE_DIR}/backups"

RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
NC="\033[0m"

error() {
    echo -e "${RED}❌ $1${NC}"
    exit 1
}

info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

usage() {
cat <<EOF

Claude Provider Switcher

Usage:

  ./.claude/switch-provider.sh list
  ./.claude/switch-provider.sh current
  ./.claude/switch-provider.sh openrouter
  ./.claude/switch-provider.sh omnirouter
  ./.claude/switch-provider.sh anthropic

EOF
}

require_project() {

    [ -d "$CLAUDE_DIR" ] || error ".claude directory not found."

    [ -d "$PROFILES_DIR" ] || error "profiles directory not found."
}

validate_json() {

    python3 -m json.tool "$1" >/dev/null \
        || error "Invalid JSON: $1"
}

list_profiles() {

    echo
    echo "Available profiles:"
    echo

    for f in "$PROFILES_DIR"/*.json
    do
        basename "$f" .json
    done

    echo
}

current_profile() {

    [ -f "$SETTINGS_FILE" ] || error "settings.json not found."

    python3 <<EOF
import json

with open("$SETTINGS_FILE") as f:
    d=json.load(f)

env=d.get("env",{})

print("Current configuration")
print("---------------------")
print("Base URL :",env.get("ANTHROPIC_BASE_URL","Anthropic Default"))
print("Model    :",env.get("ANTHROPIC_MODEL","Default"))
EOF

}

switch_profile() {

    PROFILE="$1"

    SOURCE="${PROFILES_DIR}/${PROFILE}.json"

    [ -f "$SOURCE" ] || error "Profile '${PROFILE}' not found."

    validate_json "$SOURCE"

    mkdir -p "$BACKUP_DIR"

    if [ -f "$SETTINGS_FILE" ]; then

        cp "$SETTINGS_FILE" \
        "${BACKUP_DIR}/settings.$(date +%Y%m%d_%H%M%S).json"

    fi

    cp "$SOURCE" "$SETTINGS_FILE"

    success "Switched to profile: ${PROFILE}"

    current_profile
}

#############################

require_project

ACTION="${1:-}"

case "$ACTION" in

list)

    list_profiles
    ;;

current)

    current_profile
    ;;

openrouter|omnirouter|anthropic)

    switch_profile "$ACTION"
    ;;

*)

    usage
    ;;

esac