#!/usr/bin/env bash
# Re-pull hosted resources (tool HTMLs + protocol PDFs) from their upstream
# GitHub repos. Run from this tools/ directory:  bash update_tools.sh
# After running, review `git diff` and commit if the changes look right.
# See SOURCES.md for the file-to-source mapping.
#
# Paths are relative to this tools/ directory (use ../ to reach elsewhere in
# the repo). Add a line to the TOOLS block below when a new file is hosted.
set -euo pipefail
cd "$(dirname "$0")"

# Each entry: "local_path<TAB>raw_url"
TOOLS="
qPCR_viewer.html	https://raw.githubusercontent.com/tewhey-lab/scripts-and-tools/main/qPCR/qPCR_viewer.html
pdf_to_json.html	https://raw.githubusercontent.com/tewhey-lab/scripts-and-tools/main/google_workspace_tools/QuoteFinder/pdf_engine/pdf_to_json.html
../static/pdf/ENCODE_MPRA_Protocol-Tewhey_Lab.pdf	https://raw.githubusercontent.com/tewhey-lab/protocols/main/mpra/ENCODE_MPRA_Protocol-Tewhey_Lab.pdf
"

printf '%s\n' "$TOOLS" | while IFS=$'\t' read -r file url; do
  [ -z "$file" ] && continue
  echo "Updating $file ← $url"
  curl -fsSL "$url" -o "$file.tmp"
  # Validate the download by type before replacing the live file.
  valid=0
  if [ -s "$file.tmp" ]; then
    case "$file" in
      *.pdf)  head -c 4 "$file.tmp" | grep -q "%PDF" && valid=1 ;;
      *)      head -1 "$file.tmp" | grep -qi "<!doctype\|<html" && valid=1 ;;
    esac
  fi
  if [ "$valid" = "1" ]; then
    mv "$file.tmp" "$file"
    echo "  ✓ $file updated"
  else
    rm -f "$file.tmp"
    echo "  ✗ skipped $file (download empty or wrong type)"
  fi
done

echo "Done. Review with: git diff"
