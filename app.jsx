// Main app: SPA-style router + Tweaks panel.

const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "treatment": "bleed",
  "accent": "jax",
  "background": "porcelain",
  "typePair": "newsreader-instrument"
}/*EDITMODE-END*/;

// Accents — JAX Navy + Cyan is the default; rest are alternatives drawn from the artwork.
const ACCENTS = {
  // JAX Navy as primary ink-accent (links / hover), JAX Cyan as the secondary
  // highlight used sparingly (active-nav tick, preprint tag border).
  "jax":        { swatch: "#05396B", css:  "#05396B", ink: "#042a52", accent2: "#0085CA" },
  "deep-teal":  { swatch: "#1f4f63", css:  "oklch(42% 0.085 235)", ink: "oklch(28% 0.055 235)", accent2: "oklch(65% 0.13 235)" },
  "burnt":      { swatch: "#8a3a1d", css:  "oklch(45% 0.115 40)",  ink: "oklch(30% 0.080 40)",  accent2: "oklch(68% 0.16 40)" },
  "moss":       { swatch: "#3a5a37", css:  "oklch(42% 0.080 145)", ink: "oklch(28% 0.055 145)", accent2: "oklch(65% 0.13 145)" },
  "ink":        { swatch: "#262626", css:  "oklch(28% 0.014 250)", ink: "oklch(20% 0.014 250)", accent2: "oklch(50% 0.014 250)" },
};

// Background palettes — each has a paper, paper-2 (cards), rule color, and ink trio.
const BACKGROUNDS = {
  "ivory":       { swatch: "#f7f4ee", paper: "oklch(97.5% 0.008 80)",  paper2: "oklch(95.0% 0.011 80)",  rule: "oklch(86% 0.010 80)",  ruleStrong: "oklch(70% 0.012 80)",  ink: "oklch(20.5% 0.014 250)", ink2: "oklch(35% 0.015 250)", ink3: "oklch(55% 0.012 250)" },
  "porcelain":   { swatch: "#fafafa", paper: "oklch(98.5% 0.002 250)", paper2: "oklch(96.5% 0.003 250)", rule: "oklch(88% 0.004 250)", ruleStrong: "oklch(72% 0.006 250)", ink: "oklch(20%   0.014 250)", ink2: "oklch(35% 0.012 250)", ink3: "oklch(55% 0.010 250)" },
  "fog":         { swatch: "#eef1f3", paper: "oklch(96.0% 0.008 230)", paper2: "oklch(93.5% 0.011 230)", rule: "oklch(85% 0.012 230)", ruleStrong: "oklch(68% 0.014 230)", ink: "oklch(18%   0.020 250)", ink2: "oklch(33% 0.018 250)", ink3: "oklch(52% 0.014 250)" },
  "soft-cyan":   { swatch: "#eef5fb", paper: "oklch(97.0% 0.015 230)", paper2: "oklch(94.5% 0.022 230)", rule: "oklch(85% 0.022 230)", ruleStrong: "oklch(68% 0.030 230)", ink: "oklch(20%   0.020 250)", ink2: "oklch(34% 0.018 250)", ink3: "oklch(53% 0.014 250)" },
  "deep-navy":   { swatch: "#0f1d2c", paper: "oklch(20.0% 0.030 250)", paper2: "oklch(24.0% 0.035 250)", rule: "oklch(32% 0.030 250)", ruleStrong: "oklch(48% 0.040 250)", ink: "oklch(95%   0.010 80)",  ink2: "oklch(80% 0.012 80)",  ink3: "oklch(60% 0.014 80)" },
};

const TYPE_PAIRS = {
  "fraunces-instrument":   { serif: '"Fraunces", Georgia, serif',                        sans: '"Instrument Sans", -apple-system, sans-serif',           label: "Fraunces + Instrument Sans" },
  "newsreader-instrument": { serif: '"Newsreader", "Source Serif Pro", Georgia, serif',  sans: '"Instrument Sans", -apple-system, sans-serif',           label: "Newsreader + Instrument Sans" },
  "instrument-pair":       { serif: '"Instrument Serif", Georgia, serif',                sans: '"Instrument Sans", -apple-system, sans-serif',           label: "Instrument Serif + Sans" },
  "newsreader-inter":      { serif: '"Newsreader", "Source Serif Pro", Georgia, serif',  sans: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif', label: "Newsreader + Inter" },
  "fraunces-inter":        { serif: '"Fraunces", Georgia, serif',                        sans: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif', label: "Fraunces + Inter" },
  "plex-serif-plex-sans":  { serif: '"IBM Plex Serif", Georgia, serif',                  sans: '"IBM Plex Sans", -apple-system, sans-serif',             label: "IBM Plex Serif + Sans" },
};

function App() {
  // route from hash so deep-links work
  const [route, setRoute] = useStateA(() => {
    const h = (location.hash || "").replace("#", "");
    return h && ROUTES[h] ? h : "home";
  });

  useEffectA(() => {
    if ((location.hash || "").replace("#", "") !== route) {
      history.replaceState(null, "", "#" + route);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  useEffectA(() => {
    const onHash = () => {
      const h = (location.hash || "").replace("#", "");
      if (h && ROUTES[h]) setRoute(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweak CSS vars
  useEffectA(() => {
    const a = ACCENTS[t.accent] || ACCENTS["jax"];
    const p = TYPE_PAIRS[t.typePair] || TYPE_PAIRS["fraunces-instrument"];
    const bg = BACKGROUNDS[t.background] || BACKGROUNDS["ivory"];
    const r = document.documentElement.style;
    r.setProperty("--accent",     a.css);
    r.setProperty("--accent-ink", a.ink);
    r.setProperty("--accent-2",   a.accent2);
    r.setProperty("--serif",      p.serif);
    r.setProperty("--sans",       p.sans);
    r.setProperty("--paper",        bg.paper);
    r.setProperty("--paper-2",      bg.paper2);
    r.setProperty("--rule",         bg.rule);
    r.setProperty("--rule-strong",  bg.ruleStrong);
    r.setProperty("--ink",          bg.ink);
    r.setProperty("--ink-2",        bg.ink2);
    r.setProperty("--ink-3",        bg.ink3);
  }, [t.accent, t.background, t.typePair]);

  const Page = ROUTES[route];

  return (
    <div className="app">
      <Topbar route={route} setRoute={setRoute} />
      <Page treatment={t.treatment} setRoute={setRoute} />
      <Footer setRoute={setRoute} />

      <TweaksPanel>
        <TweakSection label="Banner treatment" />
        <TweakRadio
          label="Layout"
          value={t.treatment}
          options={["bleed", "plate", "split"]}
          onChange={(v) => setTweak("treatment", v)}
        />
        <p style={{margin: "2px 0 0", fontSize: 10.5, color: "rgba(41,38,27,.55)", lineHeight: 1.4}}>
          <b>bleed</b> — full-width edge-to-edge (default).<br/>
          <b>plate</b> — gallery-framed image with caption beneath.<br/>
          <b>split</b> — image right, page title left.
        </p>

        <TweakSection label="Background" />
        <TweakColor
          label="Paper"
          value={BACKGROUNDS[t.background]?.swatch || "#f7f4ee"}
          options={Object.values(BACKGROUNDS).map(b => b.swatch)}
          onChange={(v) => {
            const key = Object.keys(BACKGROUNDS).find(k => BACKGROUNDS[k].swatch === v) || "ivory";
            setTweak("background", key);
          }}
        />
        <p style={{margin: "2px 0 0", fontSize: 10.5, color: "rgba(41,38,27,.55)", lineHeight: 1.4}}>
          Ivory · Porcelain · Fog · Soft Cyan · Deep Navy
        </p>

        <TweakSection label="Accent" />
        <TweakColor
          label="Color"
          value={ACCENTS[t.accent]?.swatch || "#05396B"}
          options={Object.values(ACCENTS).map(a => a.swatch)}
          onChange={(v) => {
            const key = Object.keys(ACCENTS).find(k => ACCENTS[k].swatch === v) || "jax";
            setTweak("accent", key);
          }}
        />
        <p style={{margin: "2px 0 0", fontSize: 10.5, color: "rgba(41,38,27,.55)", lineHeight: 1.4}}>
          <b>JAX</b> — Navy links + Cyan highlights (default).
        </p>

        <TweakSection label="Typography" />
        <TweakSelect
          label="Type pairing"
          value={t.typePair}
          options={Object.entries(TYPE_PAIRS).map(([value, p]) => ({ value, label: p.label }))}
          onChange={(v) => setTweak("typePair", v)}
        />
      </TweaksPanel>
    </div>
  );
}

const ROUTES = {
  home:         HomePage,
  research:     ResearchPage,
  publications: PublicationsPage,
  members:      MembersPage,
  resources:    ResourcesPage,
  gratitude:    GratitudePage,
  contact:      ContactPage,
  timeline:     TimelinePage,
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
