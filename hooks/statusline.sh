#!/bin/bash
set -euo pipefail

FLAG="$HOME/.claude/.saucy-status"

# Vérifier existence sans suivre symlinks
if [ ! -e "$FLAG" ] || [ -L "$FLAG" ]; then
  exit 0
fi

# Size check
SIZE=$(wc -c < "$FLAG" 2>/dev/null || echo 99)
if [ "$SIZE" -gt 10 ]; then
  exit 0
fi

MODE=$(tr -d '[:space:]' < "$FLAG" 2>/dev/null)

case "$MODE" in
  saucy)
    printf '\033[35m[SAUCY]\033[0m'
    ;;
  gooning)
    printf '\033[31m[GOONING]\033[0m'
    ;;
  *)
    exit 0
    ;;
esac
