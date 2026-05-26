// Tewhey Lab data — extracted and lightly trimmed from the source Jekyll repo.
//
// ─── Live updates from Google Sheets ────────────────────────────────────────
// News and Publications are driven from public Google Sheets. To edit:
//   1. Open the sheet linked below.
//   2. Add or edit rows. Keep the header row exactly as-is.
//   3. Save (Sheets autosaves) — changes appear on next page load.
//
// Sheet schemas:
//   News:         date | title | body | link | linkLabel
//                 (date as YYYY-MM-DD plain text; link / linkLabel optional.)
//   Publications: year | month | title | authors | venue | type | url | authors_html
//                 (type = "journal" or "preprint"; authors_html optional —
//                  only fill to override auto-bolding for a row.)
//
// Sheet must be shared "Anyone with the link → Viewer".
// Leave id empty to fall back to the static arrays in this file.

const GOOGLE_SHEETS = {
  news:         { id: "1Wwlm2226mdTOzjhOtfszVrMJN05noBw2Ff2zcjGC9LM", tab: "" }, // empty tab = first tab
  publications: {
    id: "1VTL19ccMFUlj_NQ-mebcs-hI_EDBSeBlx3dA8QbUYO4",
    tab: "Website Publications",
    pressTab: "Website News", // optional sibling tab; rows joined to publications by PMID
  },
};

const MEMBERS = [
  {
    name: "Kehinde Adeniran",
    role: "Graduate Student",
    image: "assets/members/kehinde.jpg",
    altImage: "assets/members/kehinde_alt.jpg",
    bio: "Kehinde graduated from the University of Ibadan, Nigeria, with a B.Sc. in Biochemistry. Before joining JAX, she worked as a research assistant at the Center for Genomics Research and Innovation, where she took a keen interest in Genomics and Bioinformatics. Her research projects focused on environmental microbiome, computational drug discovery, and cattle genomics. Now a graduate student in the Tewhey lab, Kehinde studies the role of non-coding variants in modulating the regulatory networks in complex traits. She is also interested in understanding how the process of evolution readapts important regulatory networks across several organisms. In her free time, she enjoys watching action movies and loves trying out new food — she could also be a great cook when she wants to.",
  },
  {
    name: "John Butts",
    role: "Graduate Student",
    image: "assets/members/john.jpg",
    altImage: "assets/members/john_alt.jpg",
    email: "john.butts (at) jax.org",
    bio: "John graduated from University of Dayton with a B.S./M.S. in Biology where he first began his interest in gene regulation, particularly cis-regulatory elements. He then worked at Dr. Victoria Meller's lab at Wayne State University as Lab Manager and Research Assistant. As a PhD student, John hopes to continue to probe the logic underlying CREs and how advancements in experimental methods can enhance this study.",
  },
  {
    name: "Rodrigo Castro",
    role: "Associate Computational Scientist",
    image: "assets/members/rodrigo.jpg",
    altImage: "assets/members/rodrigo_alt.jpg",
    email: "rodrigo.castro (at) jax.org",
    github: "irodcast",
    twitter: "i_rodcast",
    bio: "Rodrigo holds a doctorate in mathematics from Georgia State University, focused on deep learning research. As a computational scientist in the Tewhey lab, Rodrigo works on generative deep-learning models for cis-regulatory elements and deriving new synthetic elements for desired regulatory functions.",
  },
  {
    name: "Debi Foster",
    role: "Research Administrative Assistant",
    image: "assets/members/debi.jpg",
    altImage: "assets/members/debi_alt.jpg",
    email: "debi.foster (at) jax.org",
    bio: "Before joining JAX, Debi spent 20 years in admin roles primarily in the medical field. As the RAA for the Tewhey Lab, Debi handles ordering, conference travel, expenses, and meeting coordination for the group.",
  },
  {
    name: "Takeshi Iwasaki",
    role: "Postdoctoral Fellow",
    image: "assets/members/takeshi.jpg",
    altImage: "assets/members/takeshi_alt.jpg",
    bio: "Takeshi began his career as a medical doctor specializing in autoimmune diseases. Through his clinical work, he encountered many patients with severe disease courses. These experiences made him acutely aware of current medical limitations and motivated him to research underlying disease mechanisms. During his PhD, he uncovered genetic and molecular characteristics of autoimmune diseases that could potentially lead to new treatment approaches. At the Tewhey lab, he will further investigate the precise genetic mechanisms of these diseases using both experimental and computational technologies.",
  },
  {
    name: "Susan Kales",
    role: "Associate Lab Manager",
    image: "assets/members/susan.jpg",
    altImage: "assets/members/susan_alt.jpg",
    email: "susan.kales (at) jax.org",
    bio: "Susan graduated from the University of Colorado, Boulder with a degree in Molecular Cellular Developmental Biology. Before joining JAX, Susan worked at Merck & Co., the Jessell and Axel labs at Columbia University, and MSKCC. Susan is a Research Assistant in the Tewhey Lab and contributes to many different projects but her expertise is in ES cell work.",
  },
  {
    name: "Lila Lyons",
    role: "Graduate Student",
    image: null,
    altImage: null,
    bio: "Bio coming soon.",
  },
  {
    name: "Zoe Mattingly",
    role: "Graduate Student",
    image: "assets/members/zoe.jpg",
    altImage: null,
    bio: "Zoe graduated from Northeastern University with a B.S. in Behavioral Neuroscience and graduate work in Nanomedicine and Biotechnology. At Northeastern, Zoe worked in numerous labs on an array of neuroscience topics from early development to movement and rehabilitation. Postgraduate work as a research technician and lab manager was done at Massachusetts General Hospital where Zoe worked on a diagnostic biomarker panel for Alzheimer's disease and gained experience with human pluripotent stem cells and brain organoids. As a PhD student in the Tewhey lab, Zoe aims to develop tools for the study and manipulation of diverse cell types.",
  },
  {
    name: "Kousuke Mouri",
    role: "Research Scientist",
    pronounce: "KOH-skay",
    image: "assets/members/kousuke.jpg",
    altImage: "assets/members/kousuke_alt.jpg",
    email: "kousuke.mouri (at) jax.org",
    twitter: "kousuke_mouri",
    orcid: "0000-0003-1712-6833",
    bio: "Kousuke graduated from Kyoto University in life science. Before joining JAX, he was a postdoctoral fellow at the National Institute of Genetics, Japan. Now, as a postdoctoral associate in the Tewhey lab, Kousuke works on human genetics to decipher the mechanisms of the cis-regulatory elements that produce the wide variety of animal morphology and phenotype.",
  },
  {
    name: "Niketa Nerurkar",
    role: "Graduate Student",
    image: "assets/members/niketa.jpg",
    altImage: "assets/members/niketa_alt.jpg",
    email: "niketa.nerurkar (at) jax.org",
    twitter: "niketa_n",
    orcid: "0000-0002-7707-9373",
    bio: "Niketa graduated from Christ University, Bangalore with a triple major B.S. in Biotechnology, Chemistry and Zoology. Following graduation, Niketa joined Dr. Sangeeta Bhatia's lab at MIT working as a research technician and assistant lab manager, studying liver-stage malaria and circadian patterns of drug metabolism. Now, as a graduate student in the Tewhey lab, Niketa aims to study how regulatory variants contribute to complex disease.",
  },
  {
    name: "Ryan Tewhey",
    role: [
      "Principal Investigator",
      "Associate Professor, The Jackson Laboratory",
      "Associate Research Professor, Tufts University School of Medicine (Neuroscience & GMCB)",
      "Faculty, University of Maine (Graduate School of Biomedical Science and Engineering)",
      "Visiting Scientist, The Broad Institute of MIT and Harvard",
    ],
    pronounce: null,
    image: "assets/members/ryan.jpg",
    altImage: "assets/members/ryan_alt.jpg",
    email: "ryan.tewhey (at) jax.org",
    twitter: "r_tewhey",
    orcid: "0000-0002-4607-8001",
    github: "rtewhey",
    bio: "Ryan is a human geneticist with expertise in developing large-scale screening methods to understand how genetic variation impacts human traits and disease. His primary research focus is the investigation of non-coding regions of the genome that control gene expression. He has pioneered the use of massively parallel reporter assays (MPRA) and CRISPR based screens of non-coding regions to identify causal alleles from genome wide association studies. Ryan completed his undergraduate degree at the University of Maine, received his PhD from UC San Diego in 2012, and completed his postdoctoral work at Harvard and the Broad Institute. His awards include Forbes 30 under 30, the Charles J. Epstein Award, an NIH Pathway to Independence Award, and the NHGRI Genomic Innovator Award.",
  },
];

const PUBLICATIONS = [
  {
    year: 2026, month: 4,
    title: "Atlas of HIV cis-regulatory elements reveals extensive transcriptional variation across clades, isolates, and within individuals.",
    authors: "Engin B, ElSadec MY, Finkelberg JA, Taslim TH, Bryant DL, Soto-Ugaldi L, Kales S, Ho CH, Dashtiahangar M, Muñoz-Esquivel G, Morara E, Purinton J, D'Elia B, Castro R, Chandok H, Paz MA, Siggers T, Ray JP, Henderson AJ, Tewhey R, Bass JIF",
    venue: "bioRxiv",
    pmid: "41959410",
    preprint: "https://doi.org/10.64898/2026.04.03.716403",
    news: [],
  },
  {
    year: 2026, month: 2,
    title: "Functional dissection of complex trait variants at single-nucleotide resolution.",
    authors: "Siraj L, Castro RI, Dewey HB, Kales S, Butts JC, Nguyen TTL, Kanai M, Berenzy D, Mouri K, Wang QS, Fiziev PP, Tsuo K, McCaw ZR, Gosai SJ, Aguet F, Cui R, Kassam I, McRae J, Vockley CM, Lareau CA, Abramov S, Boystov A, Vierstra J, Okada Y, Gusev A, Jones TR, Lander ES, Sabeti PC, Finucane HK, Reilly SK, Ulirsch JC, Tewhey R",
    venue: "Nature",
    pmid: "41741648",
    peerReviewed: "https://doi.org/10.1038/s41586-026-10121-6",
    preprint: "https://doi.org/10.1101/2024.05.05.592437",
    news: [
      { label: "Press Release", url: "https://www.jax.org/news-and-insights/2026/february/scientists-sharpen-genetic-maps-to-help-pinpoint-dna-changes-that-influence-human-health-traits-and-disease-risk" },
      { label: "GEN", url: "https://www.genengnews.com/topics/omics/key-genetic-variants-that-influence-disease-risk-human-health-traits-identified/" },
    ],
  },
  {
    year: 2026, month: 1,
    title: "Systematic functional dissection of germline noncoding risk variants impacting clonal hematopoiesis.",
    authors: "Nguyen T, Jeejan J, Iwasaki T, Kales S, Chakraborty J, Yanase C, Shekhar A, Kwasniak D, Hegde A, Voit R, Stengel K, Ito K, Tewhey R, Nandakumar S",
    venue: "bioRxiv",
    pmid: "41648522",
    preprint: "https://doi.org/10.64898/2026.01.21.700897",
    news: [],
  },
  {
    year: 2025, month: 10,
    title: "Genetic and epigenetic screens in primary human T cells link candidate causal autoimmune variants to T cell networks.",
    authors: "Ho CH, Dippel MA, McQuade MS, Nguyen LP, Mishra A, Pribitzer S, Hardy S, Chandok H, Chardon FM, McDiarmid TA, DeBerg HA, Buckner JH, Shendure J, de Boer CG, Guo MH, Tewhey R, Ray JP",
    venue: "Nature genetics",
    pmid: "40968290",
    peerReviewed: "https://doi.org/10.1038/s41588-025-02301-3",
    preprint: "https://doi.org/10.1101/2024.10.07.617092",
    news: [],
  },
  {
    year: 2025, month: 7,
    title: "Global cis-regulatory landscape of double-stranded DNA viruses.",
    authors: "Taslim TH, Finkelberg JA, Kales S, Soto-Ugaldi L, D'Elia B, Engin B, Muñoz-Esquivel G, Morara E, Purinton J, Chandok H, Rottenberg JT, Castro R, Martinez-Cuesta L, Paz MA, Tewhey R, Bass JIF",
    venue: "bioRxiv",
    pmid: "40791439",
    preprint: "https://doi.org/10.1101/2025.07.20.665756",
    news: [],
  },
  {
    year: 2024, month: 10,
    title: "Machine-guided design of cell-type-targeting cis-regulatory elements.",
    authors: "Gosai SJ, Castro RI, Fuentes N, Butts JC, Mouri K, Alasoadura M, Kales S, Nguyen TTL, Noche RR, Rao AS, Joy MT, Sabeti PC, Reilly SK, Tewhey R",
    venue: "Nature",
    pmid: "39443793",
    peerReviewed: "https://doi.org/10.1038/s41586-024-08070-z",
    preprint: "https://doi.org/10.1101/2023.08.08.552077",
    news: [
      { label: "Press Release", url: "https://www.jax.org/news-and-insights/2026/february/scientists-sharpen-genetic-maps-to-help-pinpoint-dna-changes-that-influence-human-health-traits-and-disease-risk" },
      { label: "GEN", url: "https://www.genengnews.com/topics/omics/ai-designed-dna-switches-flip-gene-expression-on-and-off/" },
      { label: "SINC", url: "https://www.agenciasinc.es/Noticias/Disenan-con-IA-interruptores-que-activan-genes-de-forma-especifica-en-cada-tejido" },
      { label: "Maine Public", url: "https://www.mainepublic.org/health/2024-10-23/breakthrough-technology-from-the-jackson-laboratory-could-treat-alzheimers-other-diseases" },
    ],
  },
  {
    year: 2024, month: 4,
    title: "Multicenter integrated analysis of noncoding CRISPRi screens.",
    authors: "Yao D, Tycko J, Oh JW, Bounds LR, Gosai SJ, Lataniotis L, Mackay-Smith A, Doughty BR, Gabdank I, Schmidt H, Guerrero-Altamirano T, Siklenka K, Guo K, White AD, Youngworth I, Andreeva K, Ren X, Barrera A, Luo Y, Yardımcı GG, Tewhey R, Kundaje A, Greenleaf WJ, Sabeti PC, Leslie C, Pritykin Y, Moore JE, Beer MA, Gersbach CA, Reddy TE, Shen Y, Engreitz JM, Bassik MC, Reilly SK",
    venue: "Nature methods",
    pmid: "38504114",
    peerReviewed: "https://doi.org/10.1038/s41592-024-02216-7",
    preprint: "https://doi.org/10.1101/2022.12.21.520137",
    news: [],
  },
  {
    year: 2024, month: 2,
    title: "CAGI, the Critical Assessment of Genome Interpretation, establishes progress and prospects for computational genetic variant interpretation methods.",
    authors: "Critical Assessment of Genome Interpretation Consortium",
    venue: "Genome biology",
    pmid: "38389099",
    peerReviewed: "https://doi.org/10.1186/s13059-023-03113-6",
    news: [],
  },
  {
    year: 2024, month: 1,
    title: "Three linked variants have opposing regulatory effects on isovaleryl-CoA dehydrogenase gene expression.",
    authors: "Brown EA, Kales S, Boyle MJ, Vitti J, Kotliar D, Schaffner S, Tewhey R, Sabeti PC",
    venue: "Human molecular genetics",
    pmid: "37930192",
    peerReviewed: "https://doi.org/10.1093/hmg/ddad177",
    preprint: "https://doi.org/10.1101/2022.12.22.521605",
    news: [],
  },
  {
    year: 2023, month: 4,
    title: "The functional and evolutionary impacts of human-specific deletions in conserved elements.",
    authors: "Xue JR, Mackay-Smith A, Mouri K, Garcia MF, Dong MX, Akers JF, Noble M, Li X, Zoonomia Consortium†, Lindblad-Toh K, Karlsson EK, Noonan JP, Capellini TD, Brennand KJ, Tewhey R, Sabeti PC, Reilly SK",
    venue: "Science",
    pmid: "37104592",
    peerReviewed: "https://doi.org/10.1126/science.abn2253",
    news: [],
  },
  {
    year: 2023, month: 1,
    title: "Whole-genome functional characterization of RE1 silencers using a modified massively parallel reporter assay.",
    authors: "Mouri K, Dewey HB, Castro R, Berenzy D, Kales S, Tewhey R",
    venue: "Cell genomics",
    pmid: "36777181",
    peerReviewed: "https://doi.org/10.1016/j.xgen.2022.100234",
    news: [],
  },
  {
    year: 2022, month: 5,
    title: "Prioritization of autoimmune disease-associated genetic variants that perturb regulatory element activity in T cells.",
    authors: "Mouri K, Guo MH, de Boer CG, Lissner MM, Harten IA, Newby GA, DeBerg HA, Platt WF, Gentili M, Liu DR, Campbell DJ, Hacohen N, Tewhey R, Ray JP",
    venue: "Nature genetics",
    pmid: "35513721",
    peerReviewed: "https://doi.org/10.1038/s41588-022-01056-5",
    news: [],
  },
  {
    year: 2022, month: 4,
    title: "Comparative transmissibility of SARS-CoV-2 variants Delta and Alpha in New England, USA.",
    authors: "Earnest R, Uddin R, Matluk N, Renzette N, Turbett SE, Siddle KJ, Loreth C, Adams G, Tomkins-Tinch CH, Petrone ME, Rothman JE, Breban MI, Koch RT, Billig K, Fauver JR, Vogels CBF, Bilguvar K, De Kumar B, Landry ML, Peaper DR, Kelly K, Omerza G, Grieser H, Meak S, Martha J, Dewey HB, Kales S, Berenzy D, Carpenter-Azevedo K, King E, Huard RC, Novitsky V, Howison M, Darpolor J, Manne A, Kantor R, Smole SC, Brown CM, Fink T, Lang AS, Gallagher GR, Pitzer VE, Sabeti PC, Gabriel S, MacInnis BL, New England Variant Investigation Team, Tewhey R, Adams MD, Park DJ, Lemieux JE, Grubaugh ND",
    venue: "Cell reports. Medicine",
    pmid: "35480627",
    peerReviewed: "https://doi.org/10.1016/j.xcrm.2022.100583",
    preprint: "https://doi.org/10.1101/2021.10.06.21264641",
    news: [],
  },
  {
    year: 2021, month: 9,
    title: "Genome-wide functional screen of 3'UTR variants uncovers causal variants for human disease and evolution.",
    authors: "Griesemer D, Xue JR, Reilly SK, Ulirsch JC, Kukreja K, Davis JR, Kanai M, Yang DK, Butts JC, Guney MH, Luban J, Montgomery SB, Finucane HK, Novina CD, Tewhey R, Sabeti PC",
    venue: "Cell",
    pmid: "34534445",
    peerReviewed: "https://doi.org/10.1016/j.cell.2021.08.025",
    preprint: "https://doi.org/10.1101/2021.01.13.424697",
    news: [],
  },
  {
    year: 2021, month: 9,
    title: "Functional characterization of T2D-associated SNP effects on baseline and ER stress-responsive β cell transcriptional activation.",
    authors: "Khetan S, Kales S, Kursawe R, Jillette A, Ulirsch JC, Reilly SK, Ucar D, Tewhey R, Stitzel ML",
    venue: "Nature communications",
    pmid: "34475398",
    peerReviewed: "https://doi.org/10.1038/s41467-021-25514-6",
    preprint: "https://doi.org/10.1101/2020.02.12.939348",
    news: [],
  },
  {
    year: 2021, month: 8,
    title: "Direct characterization of cis-regulatory elements and functional dissection of complex genetic associations using HCR-FlowFISH.",
    authors: "Reilly SK, Gosai SJ, Gutierrez A, Mackay-Smith A, Ulirsch JC, Kanai M, Mouri K, Berenzy D, Kales S, Butler GM, Gladden-Young A, Bhuiyan RM, Stitzel ML, Finucane HK, Sabeti PC, Tewhey R",
    venue: "Nature genetics",
    pmid: "34326544",
    peerReviewed: "https://doi.org/10.1038/s41588-021-00900-4",
    preprint: "https://doi.org/10.1101/2020.05.11.078675",
    news: [],
  },
  {
    year: 2020, month: 3,
    title: "Prioritizing disease and trait causal variants at the TNFAIP3 locus using functional and genomic features.",
    authors: "Ray JP, de Boer CG, Fulco CP, Lareau CA, Kanai M, Ulirsch JC, Tewhey R, Ludwig LS, Reilly SK, Bergman DT, Engreitz JM, Issner R, Finucane HK, Lander ES, Regev A, Hacohen N",
    venue: "Nature communications",
    pmid: "32144282",
    peerReviewed: "https://doi.org/10.1038/s41467-020-15022-4",
    news: [],
  },
  {
    year: 2017, month: 9,
    title: "Predicting gene expression in massively parallel reporter assays: A comparative study.",
    authors: "Kreimer A, Zeng H, Edwards MD, Guo Y, Tian K, Shin S, Welch R, Wainberg M, Mohan R, Sinnott-Armstrong NA, Li Y, Eraslan G, Amin TB, Tewhey R, Sabeti PC, Goke J, Mueller NS, Kellis M, Kundaje A, Beer MA, Keles S, Gifford DK, Yosef N",
    venue: "Human mutation",
    pmid: "28220625",
    peerReviewed: "https://doi.org/10.1002/humu.23197",
    news: [],
  },
  {
    year: 2017, month: 2,
    title: "Systematic dissection of genomic features determining transcription factor binding and enhancer function.",
    authors: "Grossman SR, Zhang X, Wang L, Engreitz J, Melnikov A, Rogov P, Tewhey R, Isakova A, Deplancke B, Bernstein BE, Mikkelsen TS, Lander ES",
    venue: "Proceedings of the National Academy of Sciences of the United States of America",
    pmid: "28137873",
    peerReviewed: "https://doi.org/10.1073/pnas.1621150114",
    news: [],
  },
  {
    year: 2016, month: 6,
    title: "Direct Identification of Hundreds of Expression-Modulating Variants using a Multiplexed Reporter Assay.",
    authors: "Tewhey R, Kotliar D, Park DS, Liu B, Winnicki S, Reilly SK, Andersen KG, Mikkelsen TS, Lander ES, Schaffner SF, Sabeti PC",
    venue: "Cell",
    pmid: "27259153",
    peerReviewed: "https://doi.org/10.1016/j.cell.2016.04.027",
    news: [],
  },
  {
    year: 2014, month: 5,
    title: "Mechanisms of linezolid resistance among coagulase-negative staphylococci determined by whole-genome sequencing.",
    authors: "Tewhey R, Gu B, Kelesidis T, Charlton C, Bobenchik A, Hindler J, Schork NJ, Humphries RM",
    venue: "mBio",
    pmid: "24915435",
    peerReviewed: "https://doi.org/10.1128/mBio.00894-14",
    news: [],
  },
  {
    year: 2014, month: 1,
    title: "De novo finished 2.8 Mbp Staphylococcus aureus genome assembly from 100 bp short and long range paired-end reads.",
    authors: "Hernandez D, Tewhey R, Veyrieras JB, Farinelli L, Østerås M, François P, Schrenzel J",
    venue: "Bioinformatics",
    pmid: "24130309",
    peerReviewed: "https://doi.org/10.1093/bioinformatics/btt590",
    news: [],
  },
  {
    year: 2012, month: 9,
    title: "Genetic structure of community acquired methicillin-resistant Staphylococcus aureus USA300.",
    authors: "Tewhey R, Cannavino CR, Leake JA, Bansal V, Topol EJ, Torkamani A, Bradley JS, Schork NJ",
    venue: "BMC genomics",
    pmid: "23009684",
    peerReviewed: "https://doi.org/10.1186/1471-2164-13-508",
    news: [],
  },
  {
    year: 2012, month: 6,
    title: "Whole genome sequencing analysis of Plasmodium vivax using whole genome capture.",
    authors: "Bright AT, Tewhey R, Abeles S, Chuquiyauri R, Llanos-Cuentas A, Ferreira MU, Schork NJ, Vinetz JM, Winzeler EA",
    venue: "BMC genomics",
    pmid: "22721170",
    peerReviewed: "https://doi.org/10.1186/1471-2164-13-262",
    news: [],
  },
  {
    year: 2011, month: 3,
    title: "The importance of phase information for human genomics.",
    authors: "Tewhey R, Bansal V, Torkamani A, Topol EJ, Schork NJ",
    venue: "Nature reviews. Genetics",
    pmid: "21301473",
    peerReviewed: "https://doi.org/10.1038/nrg2950",
    news: [],
  },
  {
    year: 2009, month: 11,
    title: "Microdroplet-based PCR enrichment for large-scale targeted sequencing.",
    authors: "Tewhey R, Warner JB, Nakano M, Libby B, Medkova M, David PH, Kotsopoulos SK, Samuels ML, Hutchison JB, Larson JW, Topol EJ, Weiner MP, Harismendy O, Olson J, Link DR, Frazer KA",
    venue: "Nature biotechnology",
    pmid: "19881494",
    peerReviewed: "https://doi.org/10.1038/nbt.1583",
    news: [],
  },
  {
    year: 2009, month: 7,
    title: "Enrichment of sequencing targets from the human genome by solution hybridization.",
    authors: "Tewhey R, Nakano M, Wang X, Pabón-Peña C, Novak B, Giuffre A, Lin E, Happe S, Roberts DN, LeProust EM, Topol EJ, Harismendy O, Frazer KA",
    venue: "Genome biology",
    pmid: "19835619",
    peerReviewed: "https://doi.org/10.1186/gb-2009-10-10-r116",
    news: [],
  },
  {
    year: 2007, month: 6,
    title: "Genome-wide association analysis identifies loci for type 2 diabetes and triglyceride levels.",
    authors: "Diabetes Genetics Initiative of Broad Institute of Harvard and MIT, Lund University, and Novartis Institutes of BioMedical Research, Saxena R, Voight BF, Lyssenko V, Burtt NP, de Bakker PI, Chen H, Roix JJ, Kathiresan S, Hirschhorn JN, Daly MJ, Hughes TE, Groop L, Altshuler D, Almgren P, Florez JC, Meyer J, Ardlie K, Bengtsson Boström K, Isomaa B, Lettre G, Lindblad U, Lyon HN, Melander O, Newton-Cheh C, Nilsson P, Orho-Melander M, Råstam L, Speliotes EK, Taskinen MR, Tuomi T, Guiducci C, Berglund A, Carlson J, Gianniny L, Hackett R, Hall L, Holmkvist J, Laurila E, Sjögren M, Sterner M, Surti A, Svensson M, Svensson M, Tewhey R, Blumenstiel B, Parkin M, Defelice M, Barry R, Brodeur W, Camarata J, Chia N, Fava M, Gibbons J, Handsaker B, Healy C, Nguyen K, Gates C, Sougnez C, Gage D, Nizzari M, Gabriel SB, Chirn GW, Ma Q, Parikh H, Richardson D, Ricke D, Purcell S",
    venue: "Science",
    pmid: "17463246",
    peerReviewed: "https://doi.org/10.1126/science.1142358",
    news: [],
  },
];

const NEWS = [
  {
    date: "2026-02-25",
    title: "New publication!",
    body: "Our large-scale functional dissection of GWAS and eQTL variants has been published in Nature. This was one of the first projects started in the Tewhey Lab, and we are thrilled to see it in print. Congratulations to Layla, Jacob, and all co-authors.",
    link: "https://www.nature.com/articles/s41586-026-10121-6",
    linkLabel: "Nature",
  },
  {
    date: "2025-11-25",
    title: "John Butts defends!!",
    body: "The first graduate student of the Tewhey Lab has successfully defended his thesis. Congratulations to the newly minted Dr. John Butts!",
  },
  {
    date: "2024-10-23",
    title: "Synthetic CRE paper published",
    body: "The CODA manuscript has been published in Nature. The work describes the first fully synthetic cis-regulatory elements in mammals and demonstrates that synthetic CREs can outperform natural CREs found in the human genome.",
    link: "https://www.nature.com/articles/s41586-024-08070-z",
    linkLabel: "Nature",
  },
  {
    date: "2023-02-06",
    title: "Ryan gives promotion seminar for Associate Professor at JAX",
    body: "Congratulations to Ryan, who just gave his promotion seminar. The title of his talk was 'Defining the genetic basis of complex traits and disease through the (de)coding of regulatory syntax.'",
  },
  {
    date: "2022-12-16",
    title: "MPRAduo out now in Cell Genomics",
    body: "Our work on characterizing genome-wide RE1 silencers using MPRAduo is out in Cell Genomics. Our team, led by post-doc Kousuke Mouri, modified MPRA to test repressive elements and characterized ~13,000 human RE1.",
    link: "https://www.cell.com/cell-genomics/pdfExtended/S2666-979X(22)00192-6",
    linkLabel: "Read the paper",
  },
  {
    date: "2022-06-11",
    title: "New members joining the Tewhey Lab",
    body: "We're excited to welcome new members joining the lab this summer. Welcome aboard!",
  },
  {
    date: "2022-05-05",
    title: "Autoimmune GWAS work published at Nature Genetics",
    body: "Postdoctoral Associate Kousuke Mouri's first author paper 'Prioritization of autoimmune disease-associated genetic variants that perturb regulatory element activity in T cells' is now out at Nature Genetics. Using MPRA, 18,000 GWAS variants across 6 T-cell autoimmune diseases were tested for functional activity.",
    link: "https://www.nature.com/articles/s41588-022-01056-5",
    linkLabel: "Nature Genetics",
  },
];

const COLLABORATORS = [
  { name: "Juan Fuxman Bass", inst: "Boston University", url: "https://www.fuxmanlab.com/" },
  { name: "John Ray", inst: "Benaroya Research Institute", url: "https://www.benaroyaresearch.org/our-research/labs-research/lab/ray-lab" },
  { name: "Steve Reilly", inst: "Yale", url: "https://www.reilly-lab.com" },
  { name: "Pardis Sabeti", inst: "The Broad Institute", url: "https://www.sabetilab.org" },
  { name: "Trevor Siggers", inst: "Boston University", url: "https://blogs.bu.edu/tsiggers/home/" },
  { name: "Michael Stitzel", inst: "JAX", url: "https://www.jax.org/research-and-faculty/research-labs/the-stitzel-lab" },
];

const FUNDING = [
  "NIH/NHGRI Genomic Innovator, R35 — HG011329",
  "NIH/NIA Longevity Consortium, Project 2 — U19 AG023122",
  "NIH/NHGRI Pathway to Independence, K99/R00 — HG008179 (2014–2020)",
  "NIH/NHGRI ENCODE Characterization Center, UM1 — HG009435 (2017–2021)",
  "NIH/NIAID R01 — AI151051 (2020–2025)",
  "NIH/NIAMS R21 — AR071878 (2018–2020)",
];

const ARTISTS = [
  { name: "Tom Curry", url: "http://tomcurrymaineartist.com/" },
  { name: "Judy Taylor", url: "http://www.judytaylorstudio.com/" },
  { name: "Eric Hopkins", url: "http://www.erichopkins.com/" },
  { name: "Philip Barter", url: "http://thebarterarthouse.com/philip-barter" },
  { name: "Dahlov Ipcar", url: "https://www.dahlovipcarart.com/" },
];

// Banner per page — image + artist + title + license note
const BANNERS = {
  home:         { src: "assets/banners/gratitude_long_meadow.png",    title: "Long Meadow and Islands", artist: "Tom Curry", artistUrl: "http://tomcurrymaineartist.com/" },
  research:     { src: "assets/banners/home_still_harbor.png",        title: "Still Harbor", artist: "Tom Curry", artistUrl: "http://tomcurrymaineartist.com/" },
  publications: { src: "assets/banners/publications_thoroughfare.png", title: "Thoroughfare, Islands with Roses", artist: "Eric Hopkins", artistUrl: "http://www.erichopkins.com/" },
  members:      { src: "assets/banners/members_labor_mural.png",      title: "Labor Mural (detail)", artist: "Judy Taylor", artistUrl: "http://www.judytaylorstudio.com/" },
  resources:    { src: "assets/banners/resources_storm_light.png",    title: "Storm Light", artist: "Judy Taylor", artistUrl: "http://www.judytaylorstudio.com/" },
  gratitude:    { src: "assets/banners/contact_calico_jungle.jpg",    title: "The Calico Jungle", artist: "Dahlov Ipcar", artistUrl: "https://www.dahlovipcarart.com/", note: "© 1968 Dahlov Ipcar, © 2019 Robert Ipcar. Reprinted with permission of McIntosh & Otis, Inc." },
  contact:      { src: "assets/banners/research_fall_birches.png",    title: "Fall Birches", artist: "Philip Barter", artistUrl: "http://thebarterarthouse.com/philip-barter" },
};

const ALUMNI = [
  {
    name: "Hannah Dewey",
    labRole: "Data Analyst",
    years: "2019 – 2024",
    nowAt: "PhD Student, Tufts University",
  },
  {
    name: "Natalia Fuentes",
    labRole: "Summer Student",
    years: "2019 – 2023",
    nowAt: "Research Technician, Rizzuto Lab (MSKCC)",
  },
];

window.LAB_DATA = { MEMBERS, ALUMNI, PUBLICATIONS, NEWS, COLLABORATORS, FUNDING, ARTISTS, BANNERS };

// ─── Sheets fetcher (gviz endpoint, no auth needed for link-shared sheets) ──
async function fetchSheetTab(cfg) {
  const params = new URLSearchParams({ tqx: "out:json", headers: "1" });
  if (cfg.tab) params.set("sheet", cfg.tab);
  const url = `https://docs.google.com/spreadsheets/d/${cfg.id}/gviz/tq?${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sheet ${cfg.id}/${cfg.tab || "(first)"} fetch failed: ${res.status}`);
  const text = await res.text();
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error(`Unexpected gviz response for "${tabName}"`);
  const json = JSON.parse(text.slice(start, end + 1));
  const cols = (json.table && json.table.cols) || [];
  const rows = (json.table && json.table.rows) || [];
  const fields = cols.map(c => String(c.label || c.id || "").trim().toLowerCase());
  return rows.filter(r => r && r.c).map(r => {
    const obj = {};
    r.c.forEach((cell, i) => {
      const key = fields[i];
      if (!key) return;
      obj[key] = cell == null ? null : (cell.v != null ? cell.v : (cell.f != null ? cell.f : null));
      if (cell && cell.f != null && (key === "date")) obj[key] = cell.f; // prefer formatted date strings
    });
    return obj;
  });
}

function normalizeSheetDate(v) {
  if (v == null || v === "") return "";
  if (v instanceof Date) {
    const y = v.getFullYear(), m = String(v.getMonth() + 1).padStart(2, "0"), d = String(v.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const s = String(v).trim();
  // "Date(YYYY,M,D)" — gviz Date type; month is 0-indexed
  const m1 = s.match(/^Date\((\d+),(\d+),(\d+)/);
  if (m1) return `${m1[1]}-${String(+m1[2] + 1).padStart(2, "0")}-${m1[3].padStart(2, "0")}`;
  // "M/D/YYYY"
  const m2 = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m2) return `${m2[3]}-${m2[1].padStart(2, "0")}-${m2[2].padStart(2, "0")}`;
  return s; // assume ISO-ish (YYYY-MM-DD)
}

function parseNewsRows(rows) {
  return rows
    .filter(r => r.date && r.title)
    .map(r => ({
      date: normalizeSheetDate(r.date),
      title: String(r.title || ""),
      body: String(r.body || ""),
      link: r.link || null,
      linkLabel: r.linklabel || r.linkLabel || null,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function hostnameFor(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch (e) { return url; }
}

function normalizePubType(raw) {
  if (raw == null) return null;
  const s = String(raw).toLowerCase().trim();
  if (!s) return null;
  if (/^(peer.?reviewed|journal|published|paper)$/.test(s)) return "peerReviewed";
  if (/^(preprint|biorxiv|medrxiv|arxiv)$/.test(s)) return "preprint";
  return null;
}

// Scan a row for repeated type/url column pairs (type, type_1, type_2, …).
// Also accepts legacy peer_reviewed_url / preprint_url fallbacks.
function extractTypeUrlPairs(row) {
  const out = { peerReviewed: null, preprint: null };
  const keys = Object.keys(row);
  const pairKeys = keys.filter(k => /^type(_\d+)?$/.test(k));
  pairKeys.forEach((tk) => {
    const suffix = tk.slice(4); // "" or "_1", "_2", ...
    const uk = "url" + suffix;
    const bucket = normalizePubType(row[tk]);
    const url = row[uk];
    if (bucket && url && !out[bucket]) out[bucket] = String(url);
  });
  if (!out.peerReviewed && row.peer_reviewed_url) out.peerReviewed = String(row.peer_reviewed_url);
  if (!out.preprint     && row.preprint_url)      out.preprint     = String(row.preprint_url);
  return out;
}

// Legacy single-cell news_links column: lines like "Label | URL" or just URLs.
function parseNewsLinks(raw) {
  if (!raw) return [];
  return String(raw)
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(line => {
      const parts = line.split("|").map(s => s.trim());
      if (parts.length >= 2) return { label: parts[0], url: parts[1] };
      return { label: hostnameFor(line), url: line };
    });
}

function parsePressRows(rows) {
  const map = new Map();
  rows.forEach((r) => {
    const pmid = r.pmid != null ? String(r.pmid).trim() : "";
    const url  = r.url ? String(r.url).trim() : "";
    if (!pmid || !url) return;
    const label = r.source ? String(r.source).trim() : hostnameFor(url);
    if (!map.has(pmid)) map.set(pmid, []);
    map.get(pmid).push({ label, url });
  });
  return map;
}

function parsePublicationRows(rows, pressByPmid) {
  const press = pressByPmid || new Map();
  return rows
    .filter(r => r.title)
    .map(r => {
      const { peerReviewed, preprint } = extractTypeUrlPairs(r);
      const pmid = r.pmid != null && r.pmid !== "" ? String(r.pmid).trim() : null;
      const joined = pmid && press.has(pmid) ? press.get(pmid) : null;
      const news = joined || parseNewsLinks(r.news_links);
      return {
        year: Number(r.year) || 0,
        month: Number(r.month) || 0,
        title: String(r.title),
        authors: String(r.authors || ""),
        authorsHtml: r.authors_html || r.authorshtml || null,
        venue: String(r.venue || ""),
        pmid,
        peerReviewed,
        preprint,
        news,
      };
    })
    .sort((a, b) => (b.year - a.year) || (b.month - a.month));
}

// Sequential fetcher — publications need the press join, so press loads first.
async function fetchAndApplySheets() {
  const newsCfg = GOOGLE_SHEETS.news;
  const pubCfg  = GOOGLE_SHEETS.publications;
  if (!newsCfg.id && !pubCfg.id) return false;
  let updated = false;

  if (newsCfg.id) {
    try {
      const news = parseNewsRows(await fetchSheetTab(newsCfg));
      if (news.length) { window.LAB_DATA.NEWS = news; updated = true; }
    } catch (e) { console.warn("News sheet fetch failed:", e); }
  }

  if (pubCfg.id) {
    let pressByPmid = new Map();
    if (pubCfg.pressTab) {
      try {
        pressByPmid = parsePressRows(await fetchSheetTab({ id: pubCfg.id, tab: pubCfg.pressTab }));
      } catch (e) { console.warn("Press sheet fetch failed:", e); }
    }
    try {
      const pubs = parsePublicationRows(await fetchSheetTab(pubCfg), pressByPmid);
      if (pubs.length) { window.LAB_DATA.PUBLICATIONS = pubs; updated = true; }
    } catch (e) { console.warn("Publications sheet fetch failed:", e); }
  }

  return updated;
}

window.GOOGLE_SHEETS_ENABLED = !!(GOOGLE_SHEETS.news.id || GOOGLE_SHEETS.publications.id);
window.fetchAndApplySheets = fetchAndApplySheets;
