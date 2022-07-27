---
title: Tewhey Lab Resources
layout: default
group: resources
---

<img class="img-fluid mx-auto d-block" src="/static/img/resources_storm_light_judy_taylor.png" alt="Storm Light by Judy Taylor" style="paddig-bottom:0.5em;">
Storm Light by [Judy Taylor](http://www.judytaylorstudio.com/)

# Resources
---
## MPRA Protocol

If you want to follow our MPRA Protocol you can find a pdf document describing it [here](/static/pdf/ENCODE_MPRA_Protocol-Tewhey_Lab.pdf)

## MPRA Processing Pipelines

`MPRAmatch` and `MPRAcount` cover the first two steps of processing MPRA data. `MPRAmatch` aligns sequenced oligos with the reference and pulls the barcods associated with each sequence. `MPRAcount` takes the sequenced barcodes for each cell type tested and arranges a barcode level count table to be used for further analysis.

Both `MPRAmatch` and `MPRAcount` can be found [here](https://github.com/tewhey-lab/MPRA_oligo_barcode_pipeline).

`MPRAmodel` performs an analysis of a barcode level count table and uses DESeq to determine activity and allelic skew of variants if present in the dataset.

`MPRAmodel` can be found [here](https://github.com/tewhey-lab/MPRAmodel).

## COVID-19 analyses

The Tewhey lab is working with the State of Maine to sequence positive COVID-19 samples from across the state and place them into a state-wide tree. The analysis pipeline being used can be found [here](https://github.com/tewhey-lab/SARS-CoV-2-Consensus), and the state-wide tree (including samples sequenced in other states of Maine residents) can be found [here](https://github.com/tewhey-lab/SARS-CoV-2-Consensus)
