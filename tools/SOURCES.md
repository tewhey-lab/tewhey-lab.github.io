# Hosted tools — sources

The HTML tools in this directory are **copies** of files maintained in other
Tewhey Lab GitHub repos. They are served from this GitHub Pages site at
`https://tewheylab.org/tools/`. When the upstream source changes, re-pull it
here (see `update_tools.sh`) and commit.

| Local file          | Served at                                  | Upstream source (repo path) |
|---------------------|--------------------------------------------|-----------------------------|
| `qPCR_viewer.html`  | https://tewheylab.org/tools/qPCR_viewer.html  | [tewhey-lab/scripts-and-tools → qPCR/qPCR_viewer.html](https://github.com/tewhey-lab/scripts-and-tools/blob/main/qPCR/qPCR_viewer.html) |
| `pdf_to_json.html`  | https://tewheylab.org/tools/pdf_to_json.html  | [tewhey-lab/scripts-and-tools → google_workspace_tools/QuoteFinder/pdf_engine/pdf_to_json.html](https://github.com/tewhey-lab/scripts-and-tools/blob/main/google_workspace_tools/QuoteFinder/pdf_engine/pdf_to_json.html) (part of the **QuoteFinder** tool) |

## Refreshing from upstream

Run `bash update_tools.sh` from this `tools/` directory to re-download both
files from their `main` branch, then review the diff and commit.

Raw URLs used:
- https://raw.githubusercontent.com/tewhey-lab/scripts-and-tools/main/qPCR/qPCR_viewer.html
- https://raw.githubusercontent.com/tewhey-lab/scripts-and-tools/main/google_workspace_tools/QuoteFinder/pdf_engine/pdf_to_json.html
