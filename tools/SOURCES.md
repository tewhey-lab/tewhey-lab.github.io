# Hosted resources — sources

The tool HTMLs in this directory and the protocol PDF under `../static/pdf/`
are **copies** of files maintained in other Tewhey Lab GitHub repos. They are
served from this GitHub Pages site. When an upstream source changes, re-pull it
here (see `update_tools.sh`) and commit.

| Local file                                    | Served at                                                   | Upstream source (repo path) |
|-----------------------------------------------|-------------------------------------------------------------|-----------------------------|
| `qPCR_viewer.html`                            | https://tewheylab.org/tools/qPCR_viewer.html                | [tewhey-lab/scripts-and-tools → qPCR/qPCR_viewer.html](https://github.com/tewhey-lab/scripts-and-tools/blob/main/qPCR/qPCR_viewer.html) |
| `pdf_to_json.html`                            | https://tewheylab.org/tools/pdf_to_json.html                | [tewhey-lab/scripts-and-tools → google_workspace_tools/QuoteFinder/pdf_engine/pdf_to_json.html](https://github.com/tewhey-lab/scripts-and-tools/blob/main/google_workspace_tools/QuoteFinder/pdf_engine/pdf_to_json.html) (part of the **QuoteFinder** tool) |
| `../static/pdf/ENCODE_MPRA_Protocol-Tewhey_Lab.pdf` | https://tewheylab.org/static/pdf/ENCODE_MPRA_Protocol-Tewhey_Lab.pdf | [tewhey-lab/protocols → mpra/ENCODE_MPRA_Protocol-Tewhey_Lab.pdf](https://github.com/tewhey-lab/protocols/blob/main/mpra/ENCODE_MPRA_Protocol-Tewhey_Lab.pdf) |

## Refreshing from upstream

Run `bash update_tools.sh` from this `tools/` directory to re-download all the
files from their `main` branch, then review the diff and commit. HTML downloads
are validated as HTML and PDF downloads as PDF before overwriting the live file.

Raw URLs used:
- https://raw.githubusercontent.com/tewhey-lab/scripts-and-tools/main/qPCR/qPCR_viewer.html
- https://raw.githubusercontent.com/tewhey-lab/scripts-and-tools/main/google_workspace_tools/QuoteFinder/pdf_engine/pdf_to_json.html
- https://raw.githubusercontent.com/tewhey-lab/protocols/main/mpra/ENCODE_MPRA_Protocol-Tewhey_Lab.pdf
