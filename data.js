// Tewhey Lab data — extracted and lightly trimmed from the source Jekyll repo.

const MEMBERS = [
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
    name: "Takeshi Iwasaki",
    role: "Postdoctoral Fellow",
    image: "assets/members/takeshi.jpg",
    altImage: "assets/members/takeshi_alt.jpg",
    bio: "Takeshi began his career as a medical doctor specializing in autoimmune diseases. Through his clinical work, he encountered many patients with severe disease courses. These experiences made him acutely aware of current medical limitations and motivated him to research underlying disease mechanisms. During his PhD, he uncovered genetic and molecular characteristics of autoimmune diseases that could potentially lead to new treatment approaches. At the Tewhey lab, he will further investigate the precise genetic mechanisms of these diseases using both experimental and computational technologies.",
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
    name: "John Butts",
    role: "Graduate Student",
    image: "assets/members/john.jpg",
    altImage: "assets/members/john_alt.jpg",
    email: "john.butts (at) jax.org",
    bio: "John graduated from University of Dayton with a B.S./M.S. in Biology where he first began his interest in gene regulation, particularly cis-regulatory elements. He then worked at Dr. Victoria Meller's lab at Wayne State University as Lab Manager and Research Assistant. As a PhD student, John hopes to continue to probe the logic underlying CREs and how advancements in experimental methods can enhance this study.",
  },
  {
    name: "Kehinde Adeniran",
    role: "Graduate Student",
    image: null,
    altImage: "assets/members/kehinde_alt.jpg",
    bio: "Kehinde graduated from the University of Ibadan, Nigeria, with a B.Sc. in Biochemistry. Before joining JAX, she worked as a research assistant at the Center for Genomics Research and Innovation, where she took a keen interest in Genomics and Bioinformatics. Her research projects focused on environmental microbiome, computational drug discovery, and cattle genomics. Now a graduate student in the Tewhey lab, Kehinde studies the role of non-coding variants in modulating the regulatory networks in complex traits. She is also interested in understanding how the process of evolution readapts important regulatory networks across several organisms. In her free time, she enjoys watching action movies and loves trying out new food — she could also be a great cook when she wants to.",
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
    name: "Debi Foster",
    role: "Research Administrative Assistant",
    image: "assets/members/debi.jpg",
    altImage: "assets/members/debi_alt.jpg",
    email: "debi.foster (at) jax.org",
    bio: "Before joining JAX, Debi spent 20 years in admin roles primarily in the medical field. As the RAA for the Tewhey Lab, Debi handles ordering, conference travel, expenses, and meeting coordination for the group.",
  },
];

const PUBLICATIONS = [
  {
    year: 2023, month: 8,
    title: "Machine-guided design of synthetic cell type-specific cis-regulatory elements",
    authors: "Gosai SJ, Castro RI, Fuentes N, Butts JC, Kales S, Noche RR, Mouri K, Sabeti PC, Reilly SK, Tewhey R.",
    venue: "bioRxiv",
    type: "preprint",
    url: "https://www.biorxiv.org/content/10.1101/2023.08.08.552077v1",
  },
  {
    year: 2023, month: 4,
    title: "The functional and evolutionary impacts of human-specific deletions in conserved elements",
    authors: "Xue JR, Mackay-Smith A, Mouri K, Fernandez Garcia M, Dong MX, Akers JF, Noble M, Li X, Zoonomia Consortium, Lindblad-Toh K, Karlsson EK, Noonan JP, Capellini TD, Brennand KJ, Tewhey R, Sabeti PC, Reilly SK.",
    venue: "Science",
    type: "journal",
    url: "https://www.science.org/doi/10.1126/science.abn2253",
  },
  {
    year: 2023, month: 2,
    title: "Widespread perturbation of ETS factor binding sites in cancer",
    authors: "Carrasco Pro S, Hook H, Bray D, Berenzy D, Moyer D, Yin M, Labadorf AT, Tewhey R, Siggers T, Fuxman Bass JI.",
    venue: "Nature Communications",
    type: "journal",
    url: "https://www.nature.com/articles/s41467-023-36535-8",
  },
  {
    year: 2023, month: 2,
    title: "Whole genome functional characterization of RE1 silencers using a modified massively parallel reporter assay",
    authors: "Mouri K, Dewey HB, Castro R, Berenzy D, Kales S, Tewhey R.",
    venue: "Cell Genomics",
    type: "journal",
    url: "https://www.sciencedirect.com/science/article/pii/S2666979X22001926",
  },
  {
    year: 2022, month: 12,
    title: "Multi-center integrated analysis of non-coding CRISPR screens",
    authors: "Yao D, Tycko J, Oh JW, Bounds LR, Gosai SJ, et al. (ENCODE4 Consortium), Tewhey R, Kundaje A, Greenleaf WJ, Sabeti PC, Reilly SK, Bassik MC.",
    venue: "bioRxiv",
    type: "preprint",
    url: "https://www.biorxiv.org/content/10.1101/2022.12.21.520137v1",
  },
  {
    year: 2022, month: 12,
    title: "Three linked opposing regulatory variants under selection associate with IVD",
    authors: "Brown EA, Kales S, Boyle MJ, Vitti J, Kotliar D, Schaffner SF, Tewhey R, Sabeti PC.",
    venue: "bioRxiv",
    type: "preprint",
    url: "https://www.biorxiv.org/content/10.1101/2022.12.22.521605v1",
  },
  {
    year: 2022, month: 5,
    title: "Prioritization of autoimmune disease-associated genetic variants that perturb regulatory element activity in T cells",
    authors: "Mouri K, Guo MH, de Boer CG, Newby GA, Gentili M, Liu DR, Hacohen N, Tewhey R, Ray JP.",
    venue: "Nature Genetics",
    type: "journal",
    url: "https://www.nature.com/articles/s41588-022-01056-5",
  },
  {
    year: 2022, month: 4,
    title: "Comparative transmissibility of SARS-CoV-2 variants Delta and Alpha in New England, USA",
    authors: "Earnest R, Uddin R, Matluk N, et al., Dewey HB, Kales S, Berenzy D, et al., Tewhey R, Adams MD, Park DJ, Lemieux JE, Grubaugh ND.",
    venue: "Cell Reports Medicine",
    type: "journal",
    url: "https://www.sciencedirect.com/science/article/pii/S2666379122000908",
  },
  {
    year: 2021, month: 12,
    title: "Synthetic DNA spike-ins (SDSIs) enable sample tracking and detection of inter-sample contamination in SARS-CoV-2 sequencing workflows",
    authors: "Lagerborg KA, Normandin E, Bauer MR, et al.",
    venue: "Nature Microbiology",
    type: "journal",
    url: "https://www.nature.com/articles/s41564-021-01019-2",
  },
  {
    year: 2021, month: 9,
    title: "Genome-wide functional screen of 3′UTR variants uncovers causal variants for human disease and evolution",
    authors: "Griesemer D, Xue J, Reilly S, Ulirsch J, Kukreja K, Davis J, Kanai M, Yang D, Butts J, Montgomery S, Novina C, Tewhey R, Sabeti P.",
    venue: "Cell",
    type: "journal",
    url: "https://www.sciencedirect.com/science/article/pii/S0092867421009995",
  },
  {
    year: 2021, month: 7,
    title: "Direct characterization of cis-regulatory elements and functional dissection of complex genetic associations using HCR-FlowFISH",
    authors: "Reilly SK, Gosai SJ, Gutierrez A, Ulirsch JC, Kanai M, Mouri K, Berenzy D, Kales S, Butler GB, Gladden-Young A, Bhuiyan RM, Stitzel ML, Finucane HK, Sabeti PC, Tewhey R.",
    venue: "Nature Genetics",
    type: "journal",
    url: "https://www.nature.com/articles/s41588-021-00900-4",
  },
  {
    year: 2021, month: 9,
    title: "Functional characterization of thousands of type 2 diabetes-associated and chromatin-modulating variants under steady state and endoplasmic reticulum stress",
    authors: "Khetan S, Kales S, Kursawe R, Jillette A, Reilly SK, Ucar D, Tewhey R, Stitzel ML.",
    venue: "Nature Communications",
    type: "journal",
    url: "https://www.nature.com/articles/s41467-021-25514-6",
  },
  {
    year: 2020, month: 10,
    title: "A MicroRNA Linking Human Positive Selection and Metabolic Disorders",
    authors: "Wang L, Sinnott-Armstrong N, Wagschal A, et al., Tewhey R, Sabeti PC, et al., Näär AM.",
    venue: "Cell",
    type: "journal",
    url: "https://www.sciencedirect.com/science/article/pii/S0092867420311582",
  },
  {
    year: 2020, month: 3,
    title: "Prioritizing disease and trait causal variants at the TNFAIP3 locus using functional and genomic features",
    authors: "Ray JP, de Boer CG, Fulco CP, Lareau CA, Kanai M, Ulirsch JC, Tewhey R, et al., Hacohen N.",
    venue: "Nature Communications",
    type: "journal",
    url: "https://www.nature.com/articles/s41467-020-15022-4",
  },
  {
    year: 2016, month: 6,
    title: "Direct Identification of Hundreds of Expression-Modulating Variants using a Multiplexed Reporter Assay",
    authors: "Tewhey R, Kotliar D, Park DS, Liu B, Winnicki S, Reilly SK, Andersen KG, Mikkelsen TS, Lander ES, Schaffner SF, Sabeti PC.",
    venue: "Cell",
    type: "journal",
    url: "https://www.sciencedirect.com/science/article/pii/S0092867416304214",
  },
  {
    year: 2011, month: 3,
    title: "The importance of phase information for human genomics",
    authors: "Tewhey R, Bansal V, Torkamani A, Topol EJ, Schork NJ.",
    venue: "Nature Reviews Genetics",
    type: "journal",
    url: "https://pubmed.ncbi.nlm.nih.gov/21301473/",
  },
  {
    year: 2009, month: 11,
    title: "Microdroplet-based PCR enrichment for large-scale targeted sequencing",
    authors: "Tewhey R, Warner JB, Nakano M, et al., Link DR, Frazer KA.",
    venue: "Nature Biotechnology",
    type: "journal",
    url: "https://pubmed.ncbi.nlm.nih.gov/19881494/",
  },
];

const NEWS = [
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
    date: "2022-05-05",
    title: "Autoimmune GWAS work published at Nature Genetics",
    body: "Postdoctoral Associate Kousuke Mouri's first author paper 'Prioritization of autoimmune disease-associated genetic variants that perturb regulatory element activity in T cells' is now out at Nature Genetics. Using MPRA, 18,000 GWAS variants across 6 T-cell autoimmune diseases were tested for functional activity.",
    link: "https://www.nature.com/articles/s41588-022-01056-5",
    linkLabel: "Nature Genetics",
  },
  {
    date: "2022-06-11",
    title: "New members joining the Tewhey Lab",
    body: "We're excited to welcome new members joining the lab this summer. Welcome aboard!",
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
  home:         { src: "assets/banners/home_still_harbor.png",        title: "Still Harbor", artist: "Tom Curry", artistUrl: "http://tomcurrymaineartist.com/" },
  research:     { src: "assets/banners/research_fall_birches.png",    title: "Fall Birches", artist: "Philip Barter", artistUrl: "http://thebarterarthouse.com/philip-barter" },
  publications: { src: "assets/banners/publications_thoroughfare.png", title: "Thoroughfare, Islands with Roses", artist: "Eric Hopkins", artistUrl: "http://www.erichopkins.com/" },
  members:      { src: "assets/banners/members_labor_mural.png",      title: "Labor Mural (detail)", artist: "Judy Taylor", artistUrl: "http://www.judytaylorstudio.com/" },
  resources:    { src: "assets/banners/resources_storm_light.png",    title: "Storm Light", artist: "Judy Taylor", artistUrl: "http://www.judytaylorstudio.com/" },
  gratitude:    { src: "assets/banners/gratitude_long_meadow.png",    title: "Long Meadow and Islands", artist: "Tom Curry", artistUrl: "http://tomcurrymaineartist.com/" },
  contact:      { src: "assets/banners/contact_calico_jungle.jpg",    title: "The Calico Jungle", artist: "Dahlov Ipcar", artistUrl: "https://www.dahlovipcarart.com/", note: "© 1968 Dahlov Ipcar, © 2019 Robert Ipcar. Reprinted with permission of McIntosh & Otis, Inc." },
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
