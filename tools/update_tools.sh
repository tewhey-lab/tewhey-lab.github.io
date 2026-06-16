#!/usr/bin/env bash
# Re-pull hosted tools from their upstream GitHub repos.
# Run from this tools/ directory:  bash update_tools.sh
# After running, review `git diff` and commit if the changes look right.
# See SOURCES.md for the file-to-source mapping.
set -euo pipefail
cd "$(dirname "$0")"

# Each entry: "local_file<TAB>raw_url". Add a line here when a new tool is hosted.
TOOLS="
qPCR_viewer.html	https://raw.githubusercontent.com/tewhey-lab/scripts-and-tools/main/qPCR/qPCR_viewer.html
pdf_to_json.html	https://raw.githubusercontent.com/tewhey-lab/scripts-and-tools/main/google_workspace_tools/QuoteFinder/pdf_engine/pdf_to_json.html
"

printf '%s\n' "$TOOLS" | while IFS=$'\t' read -r file url; do
  [ -z "$file" ] && continue
  echo "Updating $file ← $url"
  curl -fsSL "$url" -o "$file.tmp"
  # Only replace if the download is non-empty and looks like HTML.
  if [ -s "$file.tmp" ] && head -1 "$file.tmp" | grep -qi "<!doctype\|<html"; then
    mv "$file.tmp" "$file"
    echo "  ✓ $file updated"
  else
    rm -f "$file.tmp"
    echo "  ✗ skipped $file (download empty or not HTML)"
  fi
done

echo "Done. Review with: git diff tools/"
