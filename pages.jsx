// Page components for the Tewhey Lab site.
// All page components receive { treatment, setRoute, banners }.

const { useState: useStateP, useMemo: useMemoP } = React;

// ─── HOME ────────────────────────────────────────────────────────────────────
function HomePage({ treatment, setRoute }) {
  const data = window.LAB_DATA;
  const banner = data.BANNERS.home;

  return (
    <>
      <Banner banner={banner} treatment={treatment} pageTitle="The Tewhey Lab" pageEyebrow="Functional Genomics · The Jackson Laboratory" />
      <main className="page">
        {treatment !== "split" &&
        <section className="hero">
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 18 }}>The Tewhey Lab · est. 2017</span>
              <h1>Decoding the regulatory grammar of the human genome.</h1>
              <p className="lede">
                We are a group of human geneticists, molecular biologists, and computational
                scientists studying how genetic variation in non-coding regions shapes human
                traits and risk to disease.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                <button className="btn" onClick={() => setRoute("research")}>
                  Research <span className="arrow">→</span>
                </button>
                <button className="btn ghost" onClick={() => setRoute("publications")}>
                  Publications
                </button>
              </div>
            </div>
            <aside className="stat-card">
              <div className="stat-row"><span className="k">Institution</span><span className="v">The Jackson Laboratory</span></div>
              <div className="stat-row"><span className="k">Location</span><span className="v">Bar Harbor, Maine</span></div>
              <div className="stat-row"><span className="k">PI</span><span className="v">Ryan Tewhey, PhD</span></div>
              <div className="stat-row"><span className="k">Group size</span><span className="v">{data.MEMBERS.length} members</span></div>
            </aside>
          </section>
        }

        {/* News */}
        <section className="section" style={{ borderBottom: "0" }} data-comment-anchor="2f7ce071a0-section-44-9">
          <div className="section-head">
            <div className="left">
              <SectionRule label="News & Updates" />
              <p style={{ fontSize: 14, color: "var(--ink-3)" }}>
                Papers, talks, and welcomes — most recent first.
              </p>
            </div>
            <div className="news-list">
              {data.NEWS.slice(0, 3).map((n, i) =>
              <article key={i} className="news-item">
                  <div className="date">{formatDate(n.date)}</div>
                  <div className="body">
                    <h4>{n.title}</h4>
                    <p>{n.body}</p>
                    {n.link && <a className="more" href={n.link} target="_blank" rel="noopener">{n.linkLabel || "Read more"} →</a>}
                  </div>
                </article>
              )}
              <div className="news-archive-link">
                <a onClick={() => setRoute("timeline")} role="button">
                  View timeline archive <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>);

}

function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ─── RESEARCH ────────────────────────────────────────────────────────────────
function ResearchPage({ treatment }) {
  const banner = window.LAB_DATA.BANNERS.research;
  return (
    <>
      <Banner banner={banner} treatment={treatment} pageTitle="Research" pageEyebrow="What we work on" />
      <main className="page">
        <PageHead
          eyebrow="Research"
          title="What we work on."
          lede="Our lab is focused on identifying the precise genetic mechanisms influencing human complex traits and risk to disease."
          treatment={treatment} />
        

        <section style={{ padding: "56px 0 0" }}>
          <div className="narrow" style={{ margin: "0 auto" }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink)" }}>
              The past decade has seen a transformational change in our understanding of the human genome and the role
              it plays in influencing disease risk. ENCODE has identified tens of thousands of non-coding regions of the
              genome that influence gene expression. GWAS have identified thousands of loci that influence human health.
              Together, these efforts have shown that the predominant contributors of heritability for complex phenotypes
              are common polymorphisms within non-coding regions of the genome.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)" }}>
              Despite our progress in mapping cis-regulatory elements (CREs) and disease-correlated genetic signatures,
              very few examples mechanistically link genotypic variation to disease risk. This gap is driven by our
              inability to understand the sequence context of active CREs and their targets. Our work aims to close it.
            </p>
          </div>
        </section>

        <section className="section">
          <div style={{ padding: "0" }}>
            <div className="topic">
              <span className="topic-num">Area 01</span>
              <div className="topic-body">
                <h3>Learning the grammar of cis-regulatory elements and their impact on human traits.</h3>
                <p>
                  Our group develops and applies novel high-throughput experimental methods to characterize regulatory
                  elements in the human genome. We pioneered MPRA as a tool to understand the impact of genetic variation,
                  and we have developed CRISPR-based screens to identify regulatory elements and their target genes.
                  We collaborate with domain experts for specific diseases — currently focusing on type 2 diabetes,
                  colorectal cancer, and autoimmune diseases.
                </p>
                <div className="keywords">
                  <span className="kw">MPRA</span><span className="kw">CRISPR screens</span>
                  <span className="kw">HCR-FlowFISH</span><span className="kw">Variant prioritization</span>
                </div>
              </div>
            </div>

            <div className="topic">
              <span className="topic-num">Area 02</span>
              <div className="topic-body">
                <h3>Mouse models that better reflect human disease risk.</h3>
                <p>
                  To understand the role regulatory elements play in disease risk we use the mouse as a model organism
                  to capture the full (patho)physiological environment — a level of complexity not possible with a
                  standard cell-culture approach. Our work focuses on characterizing both individual regulatory elements
                  and developing methods to multiplex modifications at scale. Our goal: mouse models that aggregate
                  multiple human risk alleles across many loci.
                </p>
                <div className="keywords">
                  <span className="kw">Mouse genetics</span><span className="kw">Multiplexed editing</span>
                  <span className="kw">In vivo MPRA</span>
                </div>
              </div>
            </div>

            <div className="topic">
              <span className="topic-num">Area 03</span>
              <div className="topic-body">
                <h3>Conservation of gene regulation between species.</h3>
                <p>
                  Modification of gene regulatory elements is a significant driver of evolution. While protein coding
                  regions of the mouse are over 85% similar to humans, non-coding elements are conserved at a
                  significantly lower rate. Our group develops improved maps of homologous CREs between human and mouse —
                  not by sequence homology alone, but by direct functional measurement.
                </p>
                <div className="keywords">
                  <span className="kw">Comparative genomics</span><span className="kw">Evolution</span>
                  <span className="kw">Cross-species MPRA</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>);

}

// ─── PUBLICATIONS ────────────────────────────────────────────────────────────
const PUB_FILTERS = [
  { key: "all",            label: "All" },
  { key: "peer-reviewed",  label: "Peer-reviewed" },
  { key: "preprint",       label: "Preprint" },
  { key: "news",           label: "News" },
];

function PublicationsPage({ treatment }) {
  const banner = window.LAB_DATA.BANNERS.publications;
  const pubs = window.LAB_DATA.PUBLICATIONS;
  const [filter, setFilter] = useStateP("all");
  const [q, setQ] = useStateP("");
  const [openNewsKey, setOpenNewsKey] = useStateP(null);

  const filtered = useMemoP(() => {
    return pubs.filter((p) => {
      if (filter === "peer-reviewed" && !p.peerReviewed) return false;
      if (filter === "preprint" && !p.preprint) return false;
      if (filter === "news" && !(p.news && p.news.length > 0)) return false;
      if (q) {
        const hay = (p.title + " " + p.authors + " " + p.venue).toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [filter, q, pubs]);

  const byYear = useMemoP(() => {
    const map = new Map();
    filtered.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year).push(p);
    });
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  // Bold names of lab members in author lists
  const labNames = ["Tewhey R", "Mouri K", "Castro R", "Dewey HB", "Kales S", "Berenzy D", "Butts J", "Butts JC", "Fuentes N", "Nerurkar N", "Castro RI"];
  function renderAuthors(s) {
    let html = s;
    labNames.forEach((n) => {
      const re = new RegExp("\\b" + n.replace(/\s/g, '\\s') + "\\b", "g");
      html = html.replace(re, "<b>" + n + "</b>");
    });
    return html;
  }

  return (
    <>
      <Banner banner={banner} treatment={treatment} pageTitle="Publications" pageEyebrow="Selected work, 2007 – present" />
      <main className="page">
        <PageHead
          eyebrow="Publications"
          title="Selected work, 2007 – present."
          lede="Lab members are bolded. For a complete record see Ryan's ORCID or Google Scholar."
          treatment={treatment} />

        <div className="pub-filters">
          {PUB_FILTERS.map((f) =>
          <button key={f.key} className={"pub-filter" + (filter === f.key ? " active" : "")} onClick={() => setFilter(f.key)}>
              {f.label}
            </button>
          )}
          <input
            className="pub-search"
            placeholder="Search title, author, venue…"
            value={q}
            onChange={(e) => setQ(e.target.value)} />
        </div>

        {byYear.length === 0 &&
        <p style={{ padding: "48px 0", color: "var(--ink-3)" }}>No publications match that query.</p>
        }

        {byYear.map(([year, list]) =>
        <div key={year} className="year-block">
            <div className="year">{year}</div>
            <div className="pubs">
              {list.map((p, i) => {
                const newsKey = `${year}-${i}`;
                const newsOpen = openNewsKey === newsKey;
                const titleHref = p.peerReviewed || p.preprint || null;
                const hasNews = p.news && p.news.length > 0;
                return (
                  <article key={i} className="pub">
                    <h3 className="pub-title">
                      {titleHref ? <a href={titleHref} target="_blank" rel="noopener">{p.title}</a> : p.title}
                    </h3>
                    <div className="pub-authors" dangerouslySetInnerHTML={{ __html: p.authorsHtml || renderAuthors(p.authors) }} />
                    <div className="pub-venue">
                      <span className="venue-name">{p.venue}</span>
                      <div className="pub-chips">
                        {p.peerReviewed &&
                          <a className="pub-chip pub-chip--peer" href={p.peerReviewed} target="_blank" rel="noopener">
                            Peer-reviewed <span className="pub-chip-arrow">↗</span>
                          </a>
                        }
                        {p.preprint &&
                          <a className="pub-chip pub-chip--preprint" href={p.preprint} target="_blank" rel="noopener">
                            Preprint <span className="pub-chip-arrow">↗</span>
                          </a>
                        }
                        {hasNews &&
                          <button
                            className={"pub-chip pub-chip--news pub-chip--button" + (newsOpen ? " open" : "")}
                            aria-expanded={newsOpen}
                            onClick={() => setOpenNewsKey(newsOpen ? null : newsKey)}>
                            News
                            {p.news.length > 1 && <span className="pub-chip-count">{p.news.length}</span>}
                            <span className="pub-chip-caret">▾</span>
                          </button>
                        }
                      </div>
                    </div>
                    {hasNews && newsOpen &&
                      <ul className="pub-news-list">
                        {p.news.map((n, j) =>
                          <li key={j}>
                            <a href={n.url} target="_blank" rel="noopener">
                              <span className="pub-news-label">{n.label}</span>
                              <span className="pub-news-arrow">↗</span>
                            </a>
                          </li>
                        )}
                      </ul>
                    }
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </>);

}

// ─── MEMBERS ────────────────────────────────────────────────────────────────
function MembersPage({ treatment }) {
  const banner = window.LAB_DATA.BANNERS.members;
  const members = window.LAB_DATA.MEMBERS;
  return (
    <>
      <Banner banner={banner} treatment={treatment} pageTitle="Members" pageEyebrow="The people in the lab" />
      <main className="page">
        <PageHead
          eyebrow="Members"
          title="The people in the lab."
          lede="A mixed group of geneticists, molecular biologists and computational scientists — and the people who keep us all running."
          treatment={treatment} />
        

        <div className="member-grid">
          {members.map((m) =>
          <div key={m.name} className="member">
              <Avatar name={m.name} image={m.image} altImage={m.altImage} large />
              <div>
                <h4>{m.name}{m.pronounce && <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--ink-3)", fontSize: 14, marginLeft: 8 }}>{m.pronounce}</span>}</h4>
                <div className="role">
                  {Array.isArray(m.role) ? m.role.map((r, i) => <div key={i}>{r}</div>) : m.role}
                </div>
                <p>{m.bio}</p>
                <div className="links">
                  {m.email && <a href={`mailto:${m.email.replace(" (at) ", "@")}`}>Email</a>}
                  {m.github && <a href={`https://github.com/${m.github}`} target="_blank" rel="noopener">GitHub</a>}
                  {m.twitter && <a href={`https://twitter.com/${m.twitter}`} target="_blank" rel="noopener">Twitter</a>}
                  {m.orcid && <a href={`https://orcid.org/${m.orcid}`} target="_blank" rel="noopener">ORCID</a>}
                </div>
              </div>
            </div>
          )}
        </div>

        <section className="section section--alumni">
          <div className="section-head">
            <div className="left">
              <SectionRule label="Alumni" />
              <p style={{ fontSize: 14, color: "var(--ink-3)" }}>
                Where former lab members went next.
              </p>
            </div>
            <ul className="alumni-list">
              <li className="alumnus alumnus--head">
                <div>Name</div>
                <div>Position in Tewhey Lab</div>
                <div>Current Position</div>
              </li>
              {window.LAB_DATA.ALUMNI.map((a) =>
              <li key={a.name} className="alumnus">
                  <div className="alumnus-name">{a.name}</div>
                  <div className="alumnus-meta">
                    <span className="alumnus-role">{a.labRole}</span>
                    <span className="alumnus-years">{a.years}</span>
                  </div>
                  <div className="alumnus-now">{a.nowAt}</div>
                </li>
              )}
            </ul>
          </div>
        </section>
      </main>
    </>);

}

// ─── RESOURCES ───────────────────────────────────────────────────────────────
const RES_ICONS = {
  pdf:
  <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v5h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 13h6M9 16h6M9 19h3" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>,

  github:
  <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.85c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49C19.14 20.56 22 16.73 22 12.22 22 6.58 17.52 2 12 2z" fill="currentColor" />
    </svg>,

  tool:
  <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path d="M14.7 6.3a4 4 0 0 0-5.7 5l-6 6 2.7 2.7 6-6a4 4 0 0 0 5-5.7l-2.5 2.5-2-2 2.5-2.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>,

  open:
  <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path d="M14 3h7v7M10 14 21 3M19 14v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>

};

function ResourcesPage({ treatment }) {
  const banner = window.LAB_DATA.BANNERS.resources;

  const SECTIONS = [
  {
    key: "protocols",
    title: "Protocols",
    blurb: "Wet-lab and computational protocols developed and used by the lab, distributed as PDFs.",
    items: [
    {
      title: "MPRA Protocol",
      body: "The Tewhey Lab MPRA wet-lab protocol used for ENCODE characterization.",
      links: [{ label: "PDF", icon: "pdf", href: "https://github.com/tewhey-lab" }]
    }]

  },
  {
    key: "code",
    title: "Code",
    blurb: "Open-source pipelines on GitHub under tewhey-lab — everything from oligo barcode matching to allelic skew modeling.",
    items: [
    {
      title: "MPRAmatch + MPRAcount",
      body: <><code>MPRAmatch</code> aligns sequenced oligos with the reference and pulls the barcodes associated with each sequence. <code>MPRAcount</code> takes the sequenced barcodes for each cell type tested and arranges a barcode-level count table.</>,
      links: [{ label: "GitHub", icon: "github", href: "https://github.com/tewhey-lab/MPRA_oligo_barcode_pipeline" }]
    },
    {
      title: "MPRAmodel",
      body: <>Performs an analysis of a barcode-level count table and uses DESeq to determine activity and allelic skew of variants in the dataset.</>,
      links: [{ label: "GitHub", icon: "github", href: "https://github.com/tewhey-lab/MPRAmodel" }]
    },
    {
      title: "SARS-CoV-2-Consensus",
      body: <>In collaboration with the State of Maine, the lab sequenced positive COVID-19 samples and placed them into a state-wide tree. The analysis pipeline is open.</>,
      links: [{ label: "GitHub", icon: "github", href: "https://github.com/tewhey-lab/SARS-CoV-2-Consensus" }]
    }]

  },
  {
    key: "tools",
    title: "Tools",
    blurb: "Interactive web tools built by the lab for exploring assay data.",
    items: [
    {
      title: "qPCR Viewer",
      body: "Browser-based viewer for inspecting qPCR runs interactively.",
      links: [{ label: "Open tool", icon: "tool", href: "https://tewheylab.org/tools/qPCR_viewer.html" }]
    }]

  }];


  return (
    <>
      <Banner banner={banner} treatment={treatment} pageTitle="Resources" pageEyebrow="Protocols, code & tools" />
      <main className="page">
        <PageHead
          eyebrow="Resources"
          title="Protocols, code & tools."
          lede="Open-source software and protocols used and developed by the Tewhey Lab. Most code lives on GitHub under tewhey-lab."
          treatment={treatment} />
        

        {SECTIONS.map((sec) =>
        <section key={sec.key} className="section">
            <div className="section-head">
              <div className="left">
                <SectionRule label={sec.title} />
                <p style={{ fontSize: 14, color: "var(--ink-3)" }}>{sec.blurb}</p>
              </div>
              <div className="res-grid">
                {sec.items.map((it, i) =>
              <div key={i} className="res">
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                    <div className="res-links">
                      {it.links.map((l, j) =>
                  <a key={j} href={l.href} target="_blank" rel="noopener">
                          {l.icon && <span className="res-link-icon">{RES_ICONS[l.icon]}</span>}
                          {l.label}
                        </a>
                  )}
                    </div>
                  </div>
              )}
              </div>
            </div>
          </section>
        )}
      </main>
    </>);

}

// ─── GRATITUDE ──────────────────────────────────────────────────────────────
function GratitudePage({ treatment }) {
  const banner = window.LAB_DATA.BANNERS.gratitude;
  const data = window.LAB_DATA;
  return (
    <>
      <Banner banner={banner} treatment={treatment} pageTitle="Gratitude" pageEyebrow="Collaborators, funders, artists" />
      <main className="page">
        <PageHead
          eyebrow="Gratitude"
          title="With thanks."
          lede="Our work is the work of a community — collaborators, funding agencies, and the Maine artists whose paintings adorn this site."
          treatment={treatment} />
        

        <div className="thank-grid">
          <div className="thank-col">
            <h3>Collaborators</h3>
            <ul>
              {data.COLLABORATORS.map((c) =>
              <li key={c.name}>
                  <a href={c.url} target="_blank" rel="noopener">{c.name}</a>
                  <span className="inst">{c.inst}</span>
                </li>
              )}
            </ul>
          </div>
          <div className="thank-col funding">
            <h3>Current & past funding</h3>
            <ul>
              {data.FUNDING.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        <section className="section" style={{ borderBottom: 0 }}>
          <div className="section-head">
            <div className="left">
              <SectionRule label="Maine artists" />
              <p style={{ fontSize: 14, color: "var(--ink-3)" }}>
                The artwork on this site is used with the permission of the Maine artists who created it.
                We are grateful for their generosity. Click a name to see more of their work.
              </p>
            </div>
            <div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 0 }}>
                {data.ARTISTS.map((a, i) =>
                <li key={a.name} style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  padding: "18px 0",
                  borderBottom: i === data.ARTISTS.length - 1 ? "0" : "1px solid var(--rule)"
                }}>
                    <a href={a.url} target="_blank" rel="noopener" style={{ color: "var(--ink)" }}>{a.name}</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>);

}

// ─── CONTACT ────────────────────────────────────────────────────────────────
function ContactPage({ treatment }) {
  const banner = window.LAB_DATA.BANNERS.contact;
  return (
    <>
      <Banner banner={banner} treatment={treatment} pageTitle="Contact" pageEyebrow="Find us in Bar Harbor" />
      <main className="page">
        <PageHead
          eyebrow="Contact"
          title="Find us in Bar Harbor."
          lede="Inquiries about joining the lab, collaborations, and reagent requests are welcome."
          treatment={treatment} />
        

        <div className="contact-grid">
          <div className="contact-block">
            <h4>Lab Area</h4>
            <div className="name">The Tewhey Lab</div>
            <div className="line">The Jackson Laboratory</div>
            <div className="line">Bar Harbor, Maine</div>
          </div>
          <div className="contact-block">
            <h4>Principal Investigator</h4>
            <div className="name">Ryan Tewhey, PhD</div>
            <div className="line">Associate Professor</div>
            <div className="line">The Jackson Laboratory</div>
            <div className="line" style={{ marginTop: 10 }}>info <span style={{ color: "var(--ink-3)" }}>(at)</span> tewheylab.org</div>
          </div>
          <div className="contact-block">
            <h4>Research Admin</h4>
            <div className="name">Debi Foster</div>
            <div className="line">Research Administrative Assistant</div>
            <div className="line" style={{ marginTop: 10 }}>debi.foster <span style={{ color: "var(--ink-3)" }}>(at)</span> jax.org</div>
          </div>
        </div>

        <div className="map-frame">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Where we are</div>
            <div className="where-big">On the Bar Harbor campus of The Jackson Laboratory.</div>
          </div>
          <div className="coords">
            Bar Harbor<br />
            Maine
          </div>
        </div>
      </main>
    </>);

}

// ─── TIMELINE ARCHIVE ───────────────────────────────────────────────────────
function TimelinePage({ treatment, setRoute }) {
  const news = window.LAB_DATA.NEWS;

  // Group news by year, sorted descending
  const byYear = (() => {
    const map = new Map();
    news.forEach((n) => {
      const y = new Date(n.date + "T12:00:00").getFullYear();
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(n);
    });
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  })();

  const banner = window.LAB_DATA.BANNERS.home;

  return (
    <>
      <Banner banner={banner} treatment={treatment} pageTitle="Timeline Archive" pageEyebrow="A complete record" />
      <main className="page">
        <PageHead
          eyebrow="Timeline archive"
          title="A complete record."
          lede="Every update, talk, paper, and welcome from the Tewhey Lab — grouped by year, most recent first."
          treatment={treatment}
        />

        {byYear.map(([year, entries]) => (
          <section key={year} className="year-block" style={{borderTop: "1px solid var(--rule)", borderBottom: 0, paddingTop: 32}}>
            <div className="year">{year}</div>
            <div style={{display: "grid", gap: 24}}>
              {entries.map((n, i) => (
                <article key={i} className="news-item" style={{borderTop: 0, padding: 0, gridTemplateColumns: "110px 1fr"}}>
                  <div className="date">{formatDate(n.date)}</div>
                  <div className="body">
                    <h4>{n.title}</h4>
                    <p>{n.body}</p>
                    {n.link && <a className="more" href={n.link} target="_blank" rel="noopener">{n.linkLabel || "Read more"} →</a>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div style={{padding: "48px 0 0"}}>
          <button className="btn ghost" onClick={() => setRoute("home")}>
            <span style={{transform: "scaleX(-1)", display: "inline-block"}}>→</span> Back to home
          </button>
        </div>
      </main>
    </>
  );
}

Object.assign(window, {
  HomePage, ResearchPage, PublicationsPage,
  MembersPage, ResourcesPage, GratitudePage, ContactPage,
  TimelinePage,
});