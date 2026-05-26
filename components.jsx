// Shared components: Topbar, Banner, Footer, Avatar
// Loaded as a separate <script type="text/babel"> — exports to window at bottom.

const { useState, useEffect, useMemo, useRef } = React;

// ─── Topbar ──────────────────────────────────────────────────────────────────
function Topbar({ route, setRoute }) {
  const links = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "members", label: "Members" },
  { id: "resources", label: "Resources" },
  { id: "gratitude", label: "Gratitude" }];

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="brand" href="#home" onClick={(e) => {e.preventDefault();setRoute("home");}} aria-label="Tewhey Lab — home">
          <img src="assets/logos/tewhey_lab_logo.png" alt="Tewhey Lab" className="brand-logo" />
        </a>
        <nav className="nav" aria-label="Primary">
          {links.map((l) =>
          <button
            key={l.id}
            className={"nav-item" + (route === l.id ? " active" : "")}
            onClick={() => setRoute(l.id)}>
            
              {l.label}
            </button>
          )}
        </nav>
        <div className="affil">
          <a href="https://www.jax.org" target="_blank" rel="noopener" aria-label="The Jackson Laboratory">
            <img src="assets/logos/jax_helix_mono.png" alt="The Jackson Laboratory" className="affil-logo" />
          </a>
        </div>
      </div>
    </header>);

}

// ─── Banner ──────────────────────────────────────────────────────────────────
// Three treatments: bleed / plate / split
function Banner({ banner, treatment, pageTitle, pageEyebrow }) {
  if (!banner) return null;
  const meta =
  <>
      <span className="work">{banner.title}</span>
      <span className="artist">
        by <a href={banner.artistUrl} target="_blank" rel="noopener">{banner.artist}</a>
      </span>
      {banner.note && <span className="note">{banner.note}</span>}
    </>;


  if (treatment === "bleed") {
    return (
      <section className={`banner-block banner--bleed`}>
        <div className="banner-img-wrap">
          <img src={banner.src} alt={banner.title} />
        </div>
        <div className="banner-meta">{meta}</div>
      </section>);

  }

  if (treatment === "split") {
    return (
      <section className={`banner-block banner--split`}>
        <div className="banner-side">
          {pageEyebrow && <span className="eyebrow">{pageEyebrow}</span>}
          <h1>{pageTitle}</h1>
          <div className="banner-meta">{meta}</div>
        </div>
        <div className="banner-img-wrap">
          <img src={banner.src} alt={banner.title} />
        </div>
      </section>);

  }

  // default: plate
  return (
    <section className={`banner-block banner--plate`}>
      <div className="banner-img-wrap">
        <img src={banner.src} alt={banner.title} />
      </div>
      <div className="banner-meta">{meta}</div>
    </section>);

}

// ─── PageHead ───────────────────────────────────────────────────────────────
// When the banner treatment is bleed/plate the page renders its own title block.
// For split the title is inside the banner so this returns null.
function PageHead({ eyebrow, title, lede, treatment, withinPage = true }) {
  if (treatment === "split") return null;
  return (
    <div style={{ padding: "48px 0 24px", borderBottom: withinPage ? "1px solid var(--rule)" : "0" }}>
      {eyebrow && <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>{eyebrow}</span>}
      <h1 style={{ maxWidth: "20ch", marginBottom: lede ? 20 : 0 }}>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </div>);

}

// ─── Avatar ─────────────────────────────────────────────────────────────────
function Avatar({ name, image, altImage, large }) {
  const cls = "avatar avatar--photo" + (large ? " avatar--large" : "");
  if (image) {
    return (
      <div className={cls + (altImage ? " avatar--has-alt" : "")}>
        <img className="avatar-img avatar-img--primary" src={image} alt={name} />
        {altImage && <img className="avatar-img avatar-img--alt" src={altImage} alt="" aria-hidden />}
      </div>);

  }
  const initials = name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("");
  return <div className={"avatar" + (large ? " avatar--large" : "")}>{initials}</div>;
}

// ─── SectionRule ────────────────────────────────────────────────────────────
function SectionRule({ label }) {
  return (
    <div className="section-rule"><span className="eyebrow">{label}</span></div>);

}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer({ setRoute }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h5>Tewhey Lab</h5>
          <a href="https://www.jax.org/research-and-faculty/research-labs/the-tewhey-lab" target="_blank" rel="noopener" className="footer-jax" aria-label="The Jackson Laboratory">
            <img src="assets/logos/jax_helix.png" alt="" />
            <span>A laboratory of<br /><b>The Jackson Laboratory</b>.</span>
          </a>
          <p style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 18 }}>
            info <span style={{ color: "var(--ink-3)" }}>(at)</span> tewheylab.org
          </p>
        </div>
        <div>
          <h5>Visit</h5>
          <ul>
            <li><a onClick={() => setRoute("research")}>Research</a></li>
            <li><a onClick={() => setRoute("publications")}>Publications</a></li>
            <li><a onClick={() => setRoute("members")}>Members</a></li>
            <li><a onClick={() => setRoute("resources")}>Resources & Tools</a></li>
          </ul>
        </div>
        <div>
          <h5>Elsewhere</h5>
          <ul data-comment-anchor="cd98be4d3e-ul-155-11">
            <li><a href="https://github.com/tewhey-lab" target="_blank" rel="noopener">GitHub — tewhey-lab</a></li>
            <li><a href="https://twitter.com/r_tewhey" target="_blank" rel="noopener">Twitter — @r_tewhey</a></li>
            <li><a href="https://bsky.app/profile/tewhey.bsky.social" target="_blank" rel="noopener">Bluesky — @tewhey.bsky.social</a></li>
            <li><a href="https://www.jax.org/research-and-faculty/research-labs/the-tewhey-lab" target="_blank" rel="noopener">The Jackson Laboratory</a></li>
          </ul>
          <p className="colophon" style={{ marginTop: 24 }}>
            Artwork on this site by Maine artists, reproduced with permission.
          </p>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Topbar, Banner, PageHead, Avatar, SectionRule, Footer });