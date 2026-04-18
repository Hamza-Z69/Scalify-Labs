"use client";

import { useState, useEffect, useRef, Fragment, type CSSProperties } from "react";
import Image from "next/image";
import { SCALIFY_CONTENT, JOURNAL_BODIES, type SiteContent, type JournalBodyBlock } from "@/lib/content";
import { PALETTES, TYPE_PAIRS, type PaletteMode } from "@/lib/palettes";

/* ═══════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════ */
interface Tweaks {
  theme: "light" | "dark";
  palette: string;
  lang: string;
  hero: "a" | "b" | "c";
  typo: string;
  density: "cozy" | "default" | "airy";
}

const DEFAULTS: Tweaks = {
  theme: "dark",
  palette: "terracotta",
  lang: "fr",
  hero: "a",
  typo: "editorial",
  density: "default",
};

/* ═══════════════════════════════════════════════════════
   THEME APPLICATION
   ═══════════════════════════════════════════════════════ */
function applyTheme(tweaks: Tweaks) {
  const p = PALETTES[tweaks.palette] || PALETTES.terracotta;
  const mode: PaletteMode = tweaks.theme === "dark" ? p.dark : p.light;
  const typo = TYPE_PAIRS[tweaks.typo] || TYPE_PAIRS.editorial;
  const root = document.documentElement;
  (Object.entries(mode) as [string, string][]).forEach(([k, v]) => root.style.setProperty("--" + k, v));
  root.style.setProperty("--font-display", typo.display);
  root.style.setProperty("--font-sans", typo.sans);
  root.style.setProperty("--font-mono", typo.mono);
  const pad = tweaks.density === "cozy" ? "10px" : tweaks.density === "airy" ? "18px" : "14px";
  root.style.setProperty("--pad", pad);
}

/* ═══════════════════════════════════════════════════════
   SHARED COMPONENTS
   ═══════════════════════════════════════════════════════ */
function Logo({ style, size = 96, showTagline = false }: { style?: CSSProperties; size?: number; showTagline?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, ...style }}>
      <Image src="/assets/logo-scalify-cropped.png" alt="Scalify Labs" width={size} height={size} style={{ height: size, width: "auto", display: "block" }} />
      {showTagline && (
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted)", lineHeight: 1.3, borderLeft: "1px solid var(--rule)", paddingLeft: 12 }}>
          Digital growth<br />agency
        </div>
      )}
    </div>
  );
}

function Section({ id, children, style, dark, cream }: { id?: string; children: React.ReactNode; style?: CSSProperties; dark?: boolean; cream?: boolean }) {
  const bg = cream ? "var(--cream)" : dark ? "var(--panel, var(--fg))" : "transparent";
  const fg = cream ? "var(--creamFg)" : dark ? "var(--panelFg, var(--bg))" : "var(--fg)";
  return (
    <section id={id} style={{ padding: "calc(var(--pad) * 4) var(--pad-x)", borderTop: "1px solid var(--rule)", background: bg, color: fg, ...style }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function Eyebrow({ children, num }: { children: React.ReactNode; num?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--muted)" }}>
      <span style={{ width: 28, height: 1, background: "currentColor", opacity: 0.5 }} />
      {num && <span>{num}</span>}
      <span>{children}</span>
    </div>
  );
}

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data), min = Math.min(...data);
  const w = 70, h = 22;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / ((max - min) || 1)) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const last = pts[pts.length - 1].split(",");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline points={pts.join(" ")} fill="none" stroke="var(--accent)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      <circle cx={last[0]} cy={last[1]} r="2" fill="var(--accent)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════ */
function Nav({ t, lang, setLang }: { t: SiteContent; lang: string; setLang: (l: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const link: CSSProperties = { color: "var(--fg)", textDecoration: "none", fontFamily: "var(--font-sans)", fontSize: 13.5, opacity: 0.8, transition: "opacity .2s" };
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 40, padding: "18px var(--pad-x)", backdropFilter: scrolled ? "blur(14px)" : "none", WebkitBackdropFilter: scrolled ? "blur(14px)" : "none", background: scrolled ? "color-mix(in oklab, var(--bg), transparent 25%)" : "transparent", borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent", transition: "all .25s ease" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1440, margin: "0 auto" }}>
        <a href="#top" style={{ color: "var(--fg)", textDecoration: "none" }}><Logo /></a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="#services" style={link} className="nav-link">{t.nav.services}</a>
          <a href="#process" style={link} className="nav-link">{t.nav.process}</a>
          <a href="#results" style={link} className="nav-link">{t.nav.work}</a>
          <a href="#franchise" style={link} className="nav-link">{t.nav.franchise}</a>
          <a href="#journal" style={link} className="nav-link">{t.nav.journal}</a>
          <a href="#contact" style={link} className="nav-link">{t.nav.contact}</a>
          <div style={{ display: "flex", gap: 2, fontFamily: "var(--font-mono)", fontSize: 11, border: "1px solid var(--rule)", borderRadius: 999, padding: 2 }}>
            {(["fr", "en"] as const).map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ padding: "4px 9px", border: 0, borderRadius: 999, cursor: "pointer", background: lang === l ? "var(--fg)" : "transparent", color: lang === l ? "var(--bg)" : "var(--muted)", fontFamily: "inherit", fontSize: "inherit", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</button>
            ))}
          </div>
          <a href="#contact" style={{ background: "var(--fg)", color: "var(--bg)", padding: "10px 18px", borderRadius: 999, textDecoration: "none", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500 }}>{t.nav.cta} →</a>
        </nav>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO VARIANTS
   ═══════════════════════════════════════════════════════ */
function HeroA({ t, title, sub }: { t: SiteContent; title: string; sub: string }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 1200, margin: "0 auto", position: "relative", paddingTop: 12 }}>
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 28, height: 28, borderTop: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: 28, height: 28, borderTop: "1px solid var(--rule)", borderRight: "1px solid var(--rule)" }} />
      <div style={{ display: "inline-flex", alignItems: "center", gap: 14, fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: 44 }}>
        <span>{"\u00a7"} 01</span>
        <span style={{ width: 24, height: 1, background: "var(--rule)" }} />
        <span>{t.hero.eyebrow}</span>
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(48px, 8.2vw, 148px)", lineHeight: 0.96, letterSpacing: "-0.028em", margin: 0, textWrap: "balance" as never }}>
        {title.split("\u00a0").map((chunk, i, arr) => (
          <Fragment key={i}>
            {i === 1 ? <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{chunk}</em> : chunk}
            {i < arr.length - 1 && "\u00a0"}
          </Fragment>
        ))}
      </h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "44px auto 0", opacity: 0.5 }}>
        <span style={{ width: 80, height: 1, background: "var(--rule)" }} />
        <span style={{ width: 6, height: 6, border: "1px solid var(--accent)", transform: "rotate(45deg)" }} />
        <span style={{ width: 80, height: 1, background: "var(--rule)" }} />
      </div>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(16px, 1.35vw, 19px)", lineHeight: 1.6, maxWidth: "58ch", margin: "36px auto 0", opacity: 0.82, textWrap: "pretty" as never }}>{sub}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 44, flexWrap: "wrap" }}>
        <a href="#contact" style={{ background: "var(--fg)", color: "var(--bg)", padding: "16px 28px", borderRadius: 999, textDecoration: "none", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500 }}>{t.hero.cta_primary} →</a>
        <a href="#process" style={{ border: "1px solid var(--rule)", color: "var(--fg)", padding: "16px 24px", borderRadius: 999, textDecoration: "none", fontFamily: "var(--font-sans)", fontSize: 15 }}>{t.hero.cta_secondary}</a>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginTop: 36, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 0 3px color-mix(in oklab, var(--accent), transparent 78%)", animation: "pulse 2.2s ease-in-out infinite" }} />
        <span>{t.hero.availability}</span>
      </div>
      <div aria-hidden="true" style={{ position: "absolute", bottom: -24, left: 0, width: 28, height: 28, borderBottom: "1px solid var(--rule)", borderLeft: "1px solid var(--rule)" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: -24, right: 0, width: 28, height: 28, borderBottom: "1px solid var(--rule)", borderRight: "1px solid var(--rule)" }} />
    </div>
  );
}

function HeroPortfolioCard() {
  const rows = [
    { code: "AN-07", sector: "DTC \u00b7 Mode", spend: "\u20ac184k", roas: "4.8\u00d7", trend: [12, 14, 13, 16, 18, 17, 21, 24, 22, 26, 29, 32] },
    { code: "KS-02", sector: "SaaS \u00b7 B2B", spend: "\u20ac96k", roas: "3.2\u00d7", trend: [8, 9, 11, 10, 13, 15, 14, 16, 18, 17, 19, 22] },
    { code: "MV-11", sector: "Beaut\u00e9 \u00b7 Intl.", spend: "\u20ac312k", roas: "5.1\u00d7", trend: [20, 22, 21, 25, 28, 27, 30, 33, 35, 38, 41, 44] },
  ];
  const hh = String(new Date().getHours()).padStart(2, "0");
  const mm = String(new Date().getMinutes()).padStart(2, "0");
  return (
    <div style={{ border: "1px solid var(--rule)", background: "color-mix(in oklab, var(--card), var(--bg) 30%)", borderRadius: 14, padding: "18px 20px 16px", fontFamily: "var(--font-sans)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottom: "1px solid var(--rule)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--muted)", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 0 3px color-mix(in oklab, var(--accent), transparent 78%)", animation: "pulse 2.2s ease-in-out infinite" }} />
          Portfolio \u00b7 live
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)" }}>{hh}:{mm} CET</div>
      </div>
      <div>
        {rows.map((r, i) => (
          <div key={r.code} style={{ display: "grid", gridTemplateColumns: "58px 1fr 70px 54px 46px", alignItems: "center", gap: 10, padding: "13px 0", borderBottom: i < rows.length - 1 ? "1px solid var(--rule)" : "none" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)" }}>{r.code}</div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, letterSpacing: "-0.01em", lineHeight: 1.1 }}>{r.sector}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--muted)", marginTop: 2 }}>{r.spend} \u00b7 30j</div>
            </div>
            <Sparkline data={r.trend} />
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--accent)", fontStyle: "italic", textAlign: "right" }}>{r.roas}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--muted)", textAlign: "right" }}>ROAS</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        <span>Extrait \u00b7 3 / 14 comptes</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)" }} />Sync</span>
      </div>
    </div>
  );
}

function HeroB({ t, title, sub }: { t: SiteContent; title: string; sub: string }) {
  return (
    <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "calc(var(--pad) * 2)", alignItems: "center" }}>
      <div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(42px, 6vw, 96px)", lineHeight: 1, letterSpacing: "-0.025em", margin: 0 }}>
          {title.split("\u00a0").map((c, i, a) => <Fragment key={i}>{i === 1 ? <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{c}</em> : c}{i < a.length - 1 && "\u00a0"}</Fragment>)}
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.55, maxWidth: "48ch", marginTop: 32, opacity: 0.82 }}>{sub}</p>
        <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
          <a href="#contact" style={{ background: "var(--fg)", color: "var(--bg)", padding: "14px 24px", borderRadius: 999, textDecoration: "none", fontSize: 14.5, fontWeight: 500 }}>{t.hero.cta_primary} →</a>
          <a href="#process" style={{ border: "1px solid var(--rule)", color: "var(--fg)", padding: "14px 20px", borderRadius: 999, textDecoration: "none", fontSize: 14.5 }}>{t.hero.cta_secondary}</a>
        </div>
      </div>
      <HeroPortfolioCard />
    </div>
  );
}

function HeroC({ t, title, sub }: { t: SiteContent; title: string; sub: string }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(44px, 7vw, 108px)", lineHeight: 1, letterSpacing: "-0.025em", margin: 0 }}>
        {title.split("\u00a0").map((c, i, a) => <Fragment key={i}>{i % 2 === 1 ? <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{c}</em> : c}{i < a.length - 1 && "\u00a0"}</Fragment>)}
      </h1>
      <p style={{ fontSize: 17.5, lineHeight: 1.55, maxWidth: "56ch", margin: "36px auto 0", opacity: 0.82 }}>{sub}</p>
      <div style={{ display: "flex", gap: 12, marginTop: 40, justifyContent: "center" }}>
        <a href="#contact" style={{ background: "var(--fg)", color: "var(--bg)", padding: "14px 24px", borderRadius: 999, textDecoration: "none", fontSize: 14.5, fontWeight: 500 }}>{t.hero.cta_primary} →</a>
        <a href="#process" style={{ border: "1px solid var(--rule)", color: "var(--fg)", padding: "14px 20px", borderRadius: 999, textDecoration: "none", fontSize: 14.5 }}>{t.hero.cta_secondary}</a>
      </div>
    </div>
  );
}

function Hero({ t, variant }: { t: SiteContent; variant: string }) {
  const title = variant === "a" ? t.hero.title_a : variant === "b" ? t.hero.title_b : t.hero.title_c;
  const sub = variant === "a" ? t.hero.sub_a : variant === "b" ? t.hero.sub_b : t.hero.sub_c;
  return (
    <section id="top" style={{ padding: "calc(var(--pad) * 9) var(--pad-x) calc(var(--pad) * 3)", minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(to right, var(--rule) 1px, transparent 1px)", backgroundSize: "calc(100% / 12) 100%", opacity: 0.25 }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "calc(var(--pad) * 2.5)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--muted)", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 0 3px color-mix(in oklab, var(--accent), transparent 75%)" }} />
            {t.hero.eyebrow}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--muted)" }}>{t.hero.availability}</div>
        </div>
        {variant === "a" && <HeroA t={t} title={title} sub={sub} />}
        {variant === "b" && <HeroB t={t} title={title} sub={sub} />}
        {variant === "c" && <HeroC t={t} title={title} sub={sub} />}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   METRICS
   ═══════════════════════════════════════════════════════ */
function Metrics({ t }: { t: SiteContent }) {
  return (
    <Section id="metrics" cream>
      <Eyebrow>{t.metrics.title}</Eyebrow>
      <div className="metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
        {t.metrics.items.map((m, i) => (
          <div key={i} style={{ padding: "40px 32px 40px 0", borderRight: i < 3 ? "1px solid var(--creamRule)" : "none", paddingLeft: i === 0 ? 0 : 32 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 5.5vw, 112px)", lineHeight: 0.95, letterSpacing: "-0.035em", color: "var(--accent)" }}>{m.big}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.4, marginTop: 14, maxWidth: "22ch", color: "var(--creamMuted)" }}>{m.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════════ */
function ServiceCard({ s, hover, onEnter }: { s: SiteContent["services"]["items"][0]; hover: boolean; onEnter: () => void }) {
  return (
    <article onMouseEnter={onEnter} style={{ background: hover ? "color-mix(in oklab, var(--accent), var(--bg) 92%)" : "var(--bg)", padding: "36px 36px 32px", position: "relative", transition: "background .3s", minHeight: 380, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em" }}>{s.num} / 06</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "flex-end", maxWidth: 220 }}>
          {s.tags.map(tag => (
            <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, textTransform: "uppercase", letterSpacing: "0.1em", padding: "3px 8px", border: "1px solid var(--rule)", borderRadius: 999, color: "var(--muted)" }}>{tag}</span>
          ))}
        </div>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 3vw, 48px)", letterSpacing: "-0.02em", lineHeight: 1, fontWeight: 400, margin: "0 0 10px", color: hover ? "var(--accent)" : "var(--fg)", transition: "color .3s" }}>{s.name}</h3>
      <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 20, lineHeight: 1.3, color: "var(--muted)", maxWidth: "32ch", marginBottom: 18 }}>{s.promise}</div>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, maxWidth: "44ch", opacity: 0.82, margin: "0 0 24px" }}>{s.body}</p>
      <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid var(--rule)", display: "flex", flexDirection: "column", gap: 9 }}>
        {s.outcomes.map(o => (
          <div key={o} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontFamily: "var(--font-sans)" }}>
            <span style={{ width: 14, height: 14, borderRadius: "50%", border: "1px solid var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 4 L3.2 6 L7 2" stroke="var(--accent)" strokeWidth="1.3" fill="none" /></svg>
            </span>
            <span style={{ opacity: 0.85 }}>{o}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function Services({ t }: { t: SiteContent }) {
  const [active, setActive] = useState(0);
  return (
    <Section id="services">
      <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "calc(var(--pad) * 2)", marginBottom: "calc(var(--pad) * 2.5)" }}>
        <div>
          <Eyebrow num={"\u00a7 01"}>{t.services.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.2vw, 68px)", lineHeight: 1, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never }}>{t.services.title}</h2>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.55, alignSelf: "end", maxWidth: "56ch", opacity: 0.82, margin: 0 }}>{t.services.sub}</p>
      </div>
      <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--rule)", border: "1px solid var(--rule)", borderRadius: 16, overflow: "hidden" }}>
        {t.services.items.map((s, i) => <ServiceCard key={i} s={s} hover={active === i} onEnter={() => setActive(i)} />)}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   ANATOMY
   ═══════════════════════════════════════════════════════ */
function Anatomy({ t }: { t: SiteContent }) {
  const a = t.anatomy;
  const [active, setActive] = useState(0);
  return (
    <Section id="anatomy" dark>
      <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "calc(var(--pad) * 2)", marginBottom: "calc(var(--pad) * 3)" }}>
        <div>
          <Eyebrow num={"\u00a7 02"}>{a.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never }}>
            {a.title}
          </h2>
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, alignSelf: "end", maxWidth: "52ch", opacity: 0.72, margin: 0 }}>{a.sub}</p>
      </div>
      <div className="anatomy-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1.2fr", gap: 60, alignItems: "start" }}>
        <div style={{ position: "relative", padding: "8px 0" }}>
          {a.layers.map((l, i) => {
            const isActive = active === i;
            const depth = i * 12;
            return (
              <div key={i} onMouseEnter={() => setActive(i)}
                style={{
                  position: "relative", marginBottom: 14, padding: "22px 26px",
                  background: isActive ? "color-mix(in oklab, var(--accent), var(--fg) 78%)" : "color-mix(in oklab, var(--bg), transparent 88%)",
                  border: `1px solid ${isActive ? "var(--accent)" : "color-mix(in oklab, var(--bg), transparent 82%)"}`,
                  borderRadius: 12, marginLeft: depth, marginRight: (a.layers.length - 1 - i) * 12,
                  transition: "all .3s ease", cursor: "default",
                  display: "grid", gridTemplateColumns: "64px 1fr auto", alignItems: "center", gap: 18,
                }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", color: isActive ? "var(--accent)" : "var(--muted)", textTransform: "uppercase" }}>{l.num}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 26, letterSpacing: "-0.015em", lineHeight: 1, color: isActive ? "var(--accent)" : "inherit", transition: "color .3s" }}>{l.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", marginTop: 5, letterSpacing: "0.06em" }}>{l.sub}</div>
                </div>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: isActive ? "var(--accent)" : "color-mix(in oklab, var(--bg), transparent 70%)", boxShadow: isActive ? "0 0 0 4px color-mix(in oklab, var(--accent), transparent 82%)" : "none", transition: "all .3s" }} />
              </div>
            );
          })}
          <div style={{ marginTop: 22, paddingLeft: 4, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{a.footer_note}</div>
        </div>
        <div style={{ position: "sticky", top: 120, padding: "28px 30px", border: "1px solid color-mix(in oklab, var(--bg), transparent 82%)", borderRadius: 16, background: "color-mix(in oklab, var(--bg), transparent 94%)", minHeight: 320 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: "1px solid color-mix(in oklab, var(--bg), transparent 80%)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.14em", color: "var(--accent)", textTransform: "uppercase" }}>{a.layers[active].num} \u00b7 {a.layers[active].name}</div>
            <div style={{ display: "flex", gap: 6 }}>
              {a.layers.map((_, i) => <div key={i} style={{ width: 18, height: 2, background: i === active ? "var(--accent)" : "color-mix(in oklab, var(--bg), transparent 70%)", transition: "background .3s" }} />)}
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 32, letterSpacing: "-0.01em", lineHeight: 1.2, marginTop: 22, color: "var(--accent)", maxWidth: "22ch" }}>{a.layers[active].sub}.</div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.65, marginTop: 18, opacity: 0.82, maxWidth: "50ch" }}>{a.layers[active].body}</p>
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid color-mix(in oklab, var(--bg), transparent 80%)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{a.signal_label}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontStyle: "italic" }}>{"\u2197"} {a.layers[active].signal}</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   CLIENTS MARQUEE
   ═══════════════════════════════════════════════════════ */
function Clients({ t }: { t: SiteContent }) {
  const names = [...t.clients.names, ...t.clients.names];
  return (
    <section style={{ padding: "calc(var(--pad) * 1.5) 0", background: "var(--cream)", color: "var(--creamFg)", borderTop: "1px solid var(--creamRule)", borderBottom: "1px solid var(--creamRule)", overflow: "hidden" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--creamMuted)", textAlign: "center", marginBottom: 18 }}>{t.clients.title}</div>
      <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 40s linear infinite" }}>
        {names.map((n, i) => (
          <span key={i} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 54px)", letterSpacing: "-0.02em", padding: "0 32px", opacity: 0.85, fontStyle: i % 2 ? "italic" : "normal" }}>
            {n}<span style={{ opacity: 0.3, marginLeft: 32 }}>\u00b7</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════════════════════ */
function Process({ t }: { t: SiteContent }) {
  return (
    <Section id="process">
      <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "calc(var(--pad) * 2)", marginBottom: "calc(var(--pad) * 2.5)" }}>
        <div>
          <Eyebrow num={"\u00a7 03"}>{t.process.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.2vw, 68px)", lineHeight: 1, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never }}>{t.process.title}</h2>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, alignSelf: "end", maxWidth: "52ch", opacity: 0.75, margin: 0 }}>{t.process.sub}</p>
      </div>
      <div style={{ position: "relative" }}>
        <div className="process-timeline-line" style={{ position: "absolute", left: 28, top: 8, bottom: 8, width: 1, background: "var(--rule)" }} />
        {t.process.items.map((p, i) => (
          <div key={i} className="process-step" style={{ display: "grid", gridTemplateColumns: "80px 1fr 1.3fr 240px", gap: 32, padding: "32px 0", borderBottom: i < t.process.items.length - 1 ? "1px solid var(--rule)" : "none", alignItems: "start", position: "relative" }}>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--bg)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)", letterSpacing: "0.05em" }}>{p.num}</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 2.4vw, 38px)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 10 }}>{p.name}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)" }}>{p.duration}</div>
            </div>
            <div style={{ fontSize: 15.5, lineHeight: 1.6, maxWidth: "48ch", opacity: 0.85 }}>{p.body}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", padding: "12px 14px", border: "1px dashed var(--rule)", borderRadius: 10, alignSelf: "start" }}>
              <div style={{ textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6, opacity: 0.6 }}>Livrable</div>
              <div style={{ color: "var(--fg)", fontSize: 12.5, lineHeight: 1.4 }}>{p.deliverable}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   RESULTS
   ═══════════════════════════════════════════════════════ */
function Results({ t }: { t: SiteContent }) {
  return (
    <Section id="results">
      <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "calc(var(--pad) * 2)", marginBottom: "calc(var(--pad) * 2.5)" }}>
        <div>
          <Eyebrow num={"\u00a7 04"}>{t.results.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.2vw, 68px)", lineHeight: 1, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never }}>{t.results.title}</h2>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, alignSelf: "end", maxWidth: "52ch", opacity: 0.75, margin: 0 }}>{t.results.sub}</p>
      </div>
      <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--rule)", border: "1px solid var(--rule)", borderRadius: 16, overflow: "hidden" }}>
        {t.results.pillars.map((p, i) => (
          <article key={i} style={{ background: "var(--bg)", padding: "36px 28px 28px", display: "grid", gridTemplateRows: "auto auto auto 1fr auto", gap: 0, minHeight: 380, position: "relative" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em", height: 20, display: "flex", alignItems: "center" }}>{p.num} \u00b7 {p.label}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 5.5vw, 96px)", lineHeight: 1, letterSpacing: "-0.03em", color: "var(--accent)", fontStyle: "italic", marginTop: 24, height: "clamp(56px, 5.5vw, 96px)", display: "flex", alignItems: "flex-start" }}>{p.metric}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 10, height: 16 }}>{p.unit}</div>
            <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.82, marginTop: 24, marginBottom: 0 }}>{p.body}</p>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em", marginTop: 24, paddingTop: 14, borderTop: "1px solid var(--rule)" }}>{"\u21b3"} {p.proof}</div>
          </article>
        ))}
      </div>
      <div style={{ marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.06em" }}>{t.results.footer}</div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   FRANCHISE
   ═══════════════════════════════════════════════════════ */
function Franchise({ t }: { t: SiteContent }) {
  const f = t.franchise;
  return (
    <Section id="franchise" cream>
      <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "calc(var(--pad) * 3)", marginBottom: "calc(var(--pad) * 3)", alignItems: "start" }}>
        <div>
          <Eyebrow num={"\u00a7 05"}>{f.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 84px)", lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never, color: "var(--creamFg)" }}>
            Franchises &amp; <em style={{ fontStyle: "italic", color: "var(--accent)" }}>réseaux.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(20px, 1.6vw, 26px)", lineHeight: 1.35, margin: "36px 0 0", maxWidth: "38ch", color: "var(--creamFg)", opacity: 0.8, textWrap: "balance" as never }}>{f.sub}</p>
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.7, margin: 0, color: "var(--creamFg)", opacity: 0.78, maxWidth: "46ch", alignSelf: "end", borderLeft: "1px solid var(--creamRule)", paddingLeft: 28 }}>{f.intro}</p>
      </div>
      <div className="franchise-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--creamRule)", border: "1px solid var(--creamRule)", borderRadius: 16, overflow: "hidden", marginBottom: 60 }}>
        {f.pillars.map(p => (
          <div key={p.num} style={{ padding: "30px 26px 34px", background: "var(--cream)", display: "grid", gridTemplateRows: "auto auto 1fr", gap: 0 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 18 }}>{p.num}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, letterSpacing: "-0.01em", lineHeight: 1.1, fontWeight: 400, margin: "0 0 14px", color: "var(--creamFg)" }}>{p.name}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, color: "var(--creamFg)", opacity: 0.72 }}>{p.body}</p>
          </div>
        ))}
      </div>
      <div className="network-header" style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr", gap: 48, paddingTop: 40, borderTop: "1px solid var(--creamRule)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--creamMuted)", marginBottom: 14 }}>{f.network.title}</div>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 24, lineHeight: 1.25, margin: 0, color: "var(--creamFg)", opacity: 0.85, textWrap: "balance" as never }}>Secteurs où notre méthode s&apos;applique déjà. Premiers indicateurs issus de pilotes en cours.</p>
        </div>
        <div>
          {f.network.items.map((n, i) => (
            <div key={i} className="network-row" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 120px", gap: 20, alignItems: "baseline", padding: "22px 0", borderBottom: "1px solid var(--creamRule)", borderTop: i === 0 ? "1px solid var(--creamRule)" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "-0.01em", color: "var(--creamFg)" }}>{n.sector}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--creamMuted)", letterSpacing: "0.08em" }}>{n.points}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--accent)", fontStyle: "italic", letterSpacing: "-0.02em" }}>{n.kpi}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--creamMuted)", textAlign: "right", letterSpacing: "0.08em", textTransform: "uppercase" }}>{n.period}</div>
            </div>
          ))}
          <div style={{ marginTop: 32 }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "var(--accentFg)", padding: "14px 24px", borderRadius: 999, textDecoration: "none", fontSize: 14.5, fontWeight: 500 }}>{f.cta} →</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   JOURNAL
   ═══════════════════════════════════════════════════════ */
function Journal({ t, lang }: { t: SiteContent; lang: string }) {
  const [open, setOpen] = useState(-1);
  const bodies = JOURNAL_BODIES[lang] || JOURNAL_BODIES.fr || [];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(-1); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open >= 0 ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const current = open >= 0 ? t.journal.items[open] : null;
  const body: JournalBodyBlock[] = open >= 0 ? (bodies[open]?.body || []) : [];

  return (
    <Section id="journal">
      <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "calc(var(--pad) * 2)", marginBottom: "calc(var(--pad) * 2.5)" }}>
        <div>
          <Eyebrow num={"\u00a7 06"}>{t.journal.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.2vw, 68px)", lineHeight: 1, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never }}>{t.journal.title}</h2>
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, alignSelf: "end", maxWidth: "52ch", opacity: 0.75, margin: 0 }}>{t.journal.sub}</p>
      </div>
      <div className="journal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "var(--rule)", border: "1px solid var(--rule)", borderRadius: 16, overflow: "hidden" }}>
        {t.journal.items.map((j, i) => (
          <a key={i} href="#" onClick={e => { e.preventDefault(); setOpen(i); }}
            style={{ display: "flex", flexDirection: "column", padding: "28px 28px 26px", background: "var(--bg)", color: "var(--fg)", textDecoration: "none", minHeight: 260, transition: "background .2s", cursor: "pointer" }}
            onMouseEnter={e => (e.currentTarget.style.background = "color-mix(in oklab, var(--accent), var(--bg) 92%)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>
              <span style={{ color: "var(--accent)" }}>{j.cat}</span>
              <span style={{ color: "var(--muted)" }}>{j.date} \u00b7 {j.read}</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, letterSpacing: "-0.01em", lineHeight: 1.15, fontWeight: 400, margin: "0 0 14px", textWrap: "balance" as never }}>{j.title}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, opacity: 0.72, flex: 1 }}>{j.excerpt}</p>
            <div style={{ marginTop: 18, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.06em" }}>Lire →</div>
          </a>
        ))}
      </div>

      {current && (
        <div className="modal-overlay" onClick={() => setOpen(-1)} style={{ position: "fixed", inset: 0, background: "color-mix(in oklab, #000, transparent 25%)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "60px 24px", overflowY: "auto", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}>
          <article onClick={e => e.stopPropagation()} style={{ background: "var(--bg)", color: "var(--fg)", maxWidth: 760, width: "100%", borderRadius: 18, border: "1px solid var(--rule)", padding: "52px 60px 60px", position: "relative", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.35)" }}>
            <button onClick={() => setOpen(-1)} aria-label="Fermer" style={{ position: "absolute", top: 18, right: 18, width: 42, height: 42, borderRadius: 999, border: "1px solid var(--rule)", background: "var(--bg)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 18, color: "var(--muted)" }}>{"\u2715"}</button>
            <div style={{ display: "flex", gap: 14, fontFamily: "var(--font-mono)", fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 22 }}>
              <span style={{ color: "var(--accent)" }}>{current.cat}</span>
              <span style={{ color: "var(--muted)" }}>{current.date}</span>
              <span style={{ color: "var(--muted)" }}>{current.read}</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 28px", fontWeight: 400, textWrap: "balance" as never }}>{current.title}</h1>
            <div style={{ height: 1, background: "var(--rule)", margin: "0 0 28px" }} />
            {body.length === 0 ? (
              <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.75 }}>{current.excerpt}</p>
            ) : body.map((block, i) => {
              if (block.kind === "lede") return <p key={i} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, lineHeight: 1.4, margin: "0 0 32px", color: "var(--fg)", opacity: 0.92, textWrap: "pretty" as never }}>{block.text}</p>;
              if (block.kind === "h3") return <h3 key={i} style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.2, fontWeight: 400, letterSpacing: "-0.01em", margin: "36px 0 14px" }}>{block.text}</h3>;
              if (block.kind === "callout") return <aside key={i} style={{ background: "color-mix(in oklab, var(--accent), var(--bg) 88%)", borderLeft: "3px solid var(--accent)", padding: "20px 24px", margin: "32px 0", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18, lineHeight: 1.5, borderRadius: "0 12px 12px 0" }}>{block.text}</aside>;
              return <p key={i} style={{ fontSize: 16, lineHeight: 1.7, margin: "0 0 18px", opacity: 0.85, textWrap: "pretty" as never }}>{block.text}</p>;
            })}
            <div style={{ marginTop: 44, paddingTop: 28, borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>{"\u2014"} SCALIFY LABS \u00b7 JOURNAL</div>
              <a href="#contact" onClick={() => setOpen(-1)} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "var(--accentFg)", padding: "12px 22px", borderRadius: 999, textDecoration: "none", fontSize: 13.5, fontWeight: 500 }}>Parler à l&apos;équipe →</a>
            </div>
          </article>
        </div>
      )}
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════ */
function FAQ({ t }: { t: SiteContent }) {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq">
      <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "calc(var(--pad) * 2)" }}>
        <div style={{ position: "sticky", top: 120, alignSelf: "start" }}>
          <Eyebrow num={"\u00a7 07"}>{t.faq.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 3.5vw, 60px)", lineHeight: 1, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never }}>{t.faq.title}</h2>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {t.faq.items.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--rule)" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, padding: "26px 0", background: "transparent", border: 0, cursor: "pointer", color: "var(--fg)", textAlign: "left", fontFamily: "var(--font-display)", fontSize: "clamp(20px, 1.7vw, 26px)", letterSpacing: "-0.01em" }}>
                <span>{f.q}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 18, color: "var(--muted)", transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform .25s" }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 400 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, paddingBottom: 28, maxWidth: "64ch", margin: 0, opacity: 0.8 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   BEFORE / AFTER
   ═══════════════════════════════════════════════════════ */
function BeforeAfter({ t }: { t: SiteContent }) {
  const b = t.ba;
  return (
    <Section id="before-after" dark>
      <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "calc(var(--pad) * 2)", marginBottom: "calc(var(--pad) * 3)" }}>
        <div>
          <Eyebrow num={"\u00a7 08"}>{b.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never }}>{b.title}</h2>
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, alignSelf: "end", maxWidth: "52ch", opacity: 0.72, margin: 0 }}>{b.sub}</p>
      </div>
      <div style={{ border: "1px solid color-mix(in oklab, var(--bg), transparent 80%)", borderRadius: 16, overflow: "hidden" }}>
        <div className="ba-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 0, padding: "18px 28px", background: "color-mix(in oklab, var(--bg), transparent 92%)", borderBottom: "1px solid color-mix(in oklab, var(--bg), transparent 80%)" }}>
          <div />
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--muted)" }}>{b.before_label}</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)", paddingLeft: 28 }}>{b.after_label}</div>
        </div>
        {b.rows.map((r, i) => (
          <div key={i} className="ba-row"
            style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 0, padding: "26px 28px", borderBottom: i < b.rows.length - 1 ? "1px solid color-mix(in oklab, var(--bg), transparent 85%)" : "none", alignItems: "start", transition: "background .2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "color-mix(in oklab, var(--accent), transparent 94%)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "-0.01em", lineHeight: 1.1, paddingRight: 20 }}>{r.label}</div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingRight: 24, opacity: 0.58 }}>
              <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", border: "1px solid color-mix(in oklab, var(--bg), transparent 65%)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                <svg width="8" height="8" viewBox="0 0 8 8"><path d="M2 2 L6 6 M6 2 L2 6" stroke="currentColor" strokeWidth="1.2" /></svg>
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, textDecoration: "line-through", textDecorationColor: "var(--accent)", textDecorationThickness: "1px" }}>{r.before}</span>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingLeft: 28, borderLeft: "1px solid color-mix(in oklab, var(--bg), transparent 85%)" }}>
              <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", border: "1px solid var(--accent)", background: "color-mix(in oklab, var(--accent), transparent 82%)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                <svg width="9" height="9" viewBox="0 0 9 9"><path d="M1.5 4.5 L3.5 6.5 L7.5 2.5" stroke="var(--accent)" strokeWidth="1.4" fill="none" /></svg>
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.55 }}>{r.after}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>{b.stamp}</div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════════════ */
function Field({ label, value, onChange, type = "text", textarea }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; type?: string; textarea?: boolean }) {
  const [focus, setFocus] = useState(false);
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="form-field" style={{ display: "grid", gridTemplateColumns: "180px 1fr", alignItems: "start", padding: "18px 24px", borderBottom: "1px solid color-mix(in oklab, var(--bg), transparent 85%)" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", paddingTop: 14, opacity: 0.65 }}>{label}</span>
      <div style={{
        background: "var(--cream)", borderRadius: 10, padding: "10px 16px",
        border: focus ? "1px solid var(--accent)" : "1px solid color-mix(in oklab, var(--creamRule), transparent 40%)",
        transition: "border-color .2s, box-shadow .2s",
        boxShadow: focus ? "0 0 0 3px color-mix(in oklab, var(--accent), transparent 82%)" : "none",
      }}>
        <Tag
          value={value} onChange={onChange}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          type={type} rows={textarea ? 3 : undefined}
          style={{
            background: "transparent", border: 0, outline: "none",
            fontFamily: textarea ? "var(--font-sans)" : "var(--font-display)",
            fontSize: textarea ? 15 : 22, letterSpacing: textarea ? 0 : "-0.01em",
            color: "var(--creamFg)", width: "100%", padding: "4px 0", resize: "none",
            caretColor: "var(--accent)",
          }}
        />
      </div>
    </label>
  );
}

function BudgetField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="form-field" style={{ display: "grid", gridTemplateColumns: "180px 1fr", alignItems: "center", padding: "18px 24px", borderBottom: "1px solid color-mix(in oklab, var(--bg), transparent 85%)" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.65 }}>{label}</span>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {options.map(o => {
          const selected = value === o;
          return (
            <button type="button" key={o} onClick={() => onChange(o)}
              style={{
                padding: "10px 16px", borderRadius: 999,
                border: selected ? "1px solid var(--accent)" : "1px solid color-mix(in oklab, var(--creamRule), transparent 40%)",
                background: selected ? "var(--accent)" : "var(--cream)",
                color: selected ? "var(--accentFg)" : "var(--creamFg)",
                cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)", transition: "all .18s",
              }}>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Contact({ t }: { t: SiteContent }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const on = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(f => ({ ...f, [k]: e.target.value }));
  return (
    <Section id="contact" dark>
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "calc(var(--pad) * 2.5)" }}>
        <div>
          <Eyebrow num={"\u00a7 09"}>{t.contact.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 4.5vw, 76px)", lineHeight: 1, letterSpacing: "-0.025em", margin: 0, textWrap: "balance" as never }}>{t.contact.title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.55, marginTop: 28, maxWidth: "44ch", opacity: 0.75 }}>{t.contact.sub}</p>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, marginTop: 36, opacity: 0.6, letterSpacing: "0.05em" }}>{t.contact.direct}</div>
        </div>
        {sent ? (
          <div style={{ alignSelf: "center", padding: 40, border: "1px solid color-mix(in oklab, var(--bg), transparent 80%)", borderRadius: 16, background: "color-mix(in oklab, var(--bg), transparent 92%)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 36 }}>Merci, <em style={{ color: "var(--accent)" }}>{form.name || "\u2014"}</em>.</div>
            <p style={{ fontSize: 15, marginTop: 16, opacity: 0.75 }}>Votre demande est arriv\u00e9e. Nous revenons vers vous sous 48 h ouvr\u00e9es.</p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: 0, border: "1px solid color-mix(in oklab, var(--bg), transparent 80%)", borderRadius: 16, overflow: "hidden" }}>
            <Field label={t.contact.form.name} value={form.name} onChange={on("name")} />
            <Field label={t.contact.form.company} value={form.company} onChange={on("company")} />
            <Field label={t.contact.form.email} value={form.email} onChange={on("email")} type="email" />
            <BudgetField label={t.contact.form.budget} value={form.budget} onChange={v => setForm(f => ({ ...f, budget: v }))} options={t.contact.form.budget_opts} />
            <Field label={t.contact.form.message} value={form.message} onChange={on("message")} textarea />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "color-mix(in oklab, var(--bg), transparent 92%)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, opacity: 0.55, maxWidth: "40ch" }}>{t.contact.form.consent}</div>
              <button type="submit" style={{ background: "var(--accent)", color: "var(--accentFg)", border: 0, padding: "14px 26px", borderRadius: 999, cursor: "pointer", fontSize: 14, fontWeight: 500 }}>{t.contact.form.submit} →</button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */
function LegalModal({ doc, onClose }: { doc: { title: string; body: { h: string; p: string }[] }; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(10, 9, 8, 0.72)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div className="legal-modal-inner" onClick={e => e.stopPropagation()} style={{ background: "var(--cream)", color: "var(--creamFg)", maxWidth: 780, width: "100%", maxHeight: "86vh", borderRadius: 18, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
        <div className="legal-modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 36px", borderBottom: "1px solid var(--creamRule)", background: "var(--cream)", position: "sticky", top: 0, zIndex: 2 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--creamMuted)", marginBottom: 6 }}>
              Scalify Labs \u00b7 Document l\u00e9gal
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{doc.title}</div>
          </div>
          <button onClick={onClose} aria-label="Fermer" style={{ border: "1px solid var(--creamRule)", background: "transparent", width: 40, height: 40, borderRadius: 999, cursor: "pointer", color: "var(--creamFg)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 24 }}>
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
        <div className="legal-modal-body" style={{ overflowY: "auto", padding: "32px 36px 40px", fontFamily: "var(--font-sans)" }}>
          {doc.body.map((s, i) => (
            <section key={i} style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--creamMuted)", letterSpacing: "0.12em" }}>
                  {"\u00a7"} {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, letterSpacing: "-0.015em", margin: 0, color: "var(--creamFg)" }}>{s.h}</h3>
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, margin: 0, color: "var(--creamFg)", opacity: 0.85, textWrap: "pretty" as never }}>{s.p}</p>
            </section>
          ))}
        </div>
        <div className="legal-modal-footer" style={{ padding: "18px 36px", borderTop: "1px solid var(--creamRule)", fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--creamMuted)", display: "flex", justifyContent: "space-between", background: "color-mix(in oklab, var(--cream), #000 3%)" }}>
          <span>Mise \u00e0 jour \u00b7 Avril 2026</span>
          <span>contact@scalifylabs.com</span>
        </div>
      </div>
    </div>
  );
}

function FooterSection({ t }: { t: SiteContent }) {
  const [openLegal, setOpenLegal] = useState<string | null>(null);
  const legal = t.footer.legal || {};
  return (
    <footer style={{ padding: "calc(var(--pad) * 2) var(--pad-x)", borderTop: "1px solid var(--rule)" }}>
      <div className="footer-grid" style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <Logo size={160} showTagline />
          <div style={{ fontFamily: "var(--font-display)", fontSize: 28, letterSpacing: "-0.02em", marginTop: 24, maxWidth: "18ch", lineHeight: 1.15 }}>{t.footer.tagline}</div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: 14 }}>Paris</div>
          <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.8 }}>{t.footer.address}</div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: 14 }}>Contact</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.8 }}>contact@scalifylabs.com<br/>+33 1 84 80 42 11</div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: 14 }}>L\u00e9gal</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.8, display: "flex", flexDirection: "column", gap: 4 }}>
            {t.footer.links.map(l => (
              <a key={l} href="#" onClick={e => { e.preventDefault(); if (legal[l]) setOpenLegal(l); }}
                style={{ color: "inherit", textDecoration: "none", cursor: "pointer", transition: "color .2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseOut={e => (e.currentTarget.style.color = "inherit")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1440, margin: "72px auto 0", paddingTop: 24, borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
        <span>{t.footer.copy}</span>
        <span>v2026.04.19</span>
      </div>
      {openLegal && legal[openLegal] && (
        <LegalModal doc={legal[openLegal]} onClose={() => setOpenLegal(null)} />
      )}
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   TWEAKS PANEL
   ═══════════════════════════════════════════════════════ */
function TweaksPanel({ tweaks, setTweaks, visible }: { tweaks: Tweaks; setTweaks: (t: Tweaks) => void; visible: boolean }) {
  if (!visible) return null;
  const upd = (k: keyof Tweaks, v: string) => setTweaks({ ...tweaks, [k]: v });
  const row: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--rule)" };
  const rowLast: CSSProperties = { ...row, borderBottom: 0 };
  const lbl: CSSProperties = { fontFamily: "var(--font-mono)", fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted)" };
  const btn = (active: boolean): CSSProperties => ({ padding: "5px 10px", border: `1px solid ${active ? "var(--accent)" : "var(--rule)"}`, borderRadius: 6, background: active ? "color-mix(in oklab, var(--accent), transparent 82%)" : "transparent", color: "var(--fg)", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 10.5 });
  return (
    <div className="tweaks-panel" style={{ position: "fixed", bottom: 20, right: 20, zIndex: 100, width: 300, padding: 20, background: "var(--bg)", color: "var(--fg)", border: "1px solid var(--rule)", borderRadius: 14, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.2)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>Tweaks</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)" }}>LIVE</div>
      </div>
      <div style={row}><span style={lbl}>Theme</span><div style={{ display: "flex", gap: 4 }}>{(["light", "dark"] as const).map(m => <button key={m} onClick={() => upd("theme", m)} style={btn(tweaks.theme === m)}>{m}</button>)}</div></div>
      <div style={row}><span style={lbl}>Palette</span><div style={{ display: "flex", gap: 4 }}>{Object.keys(PALETTES).map(p => <button key={p} onClick={() => upd("palette", p)} style={btn(tweaks.palette === p)}>{PALETTES[p].name}</button>)}</div></div>
      <div style={row}><span style={lbl}>Language</span><div style={{ display: "flex", gap: 4 }}>{["fr", "en"].map(l => <button key={l} onClick={() => upd("lang", l)} style={btn(tweaks.lang === l)}>{l.toUpperCase()}</button>)}</div></div>
      <div style={row}><span style={lbl}>Hero</span><div style={{ display: "flex", gap: 4 }}>{(["a", "b", "c"] as const).map(v => <button key={v} onClick={() => upd("hero", v)} style={btn(tweaks.hero === v)}>{v.toUpperCase()}</button>)}</div></div>
      <div style={row}><span style={lbl}>Typo</span><div style={{ display: "flex", gap: 4 }}>{Object.keys(TYPE_PAIRS).map(tp => <button key={tp} onClick={() => upd("typo", tp)} style={btn(tweaks.typo === tp)}>{TYPE_PAIRS[tp].name}</button>)}</div></div>
      <div style={rowLast}><span style={lbl}>Density</span><div style={{ display: "flex", gap: 4 }}>{(["cozy", "default", "airy"] as const).map(d => <button key={d} onClick={() => upd("density", d)} style={btn(tweaks.density === d)}>{d}</button>)}</div></div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   APP (PAGE)
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  const [tweaks, setTweaks] = useState<Tweaks>(() => {
    if (typeof window === "undefined") return DEFAULTS;
    // Always start fresh with defaults (dark mode)
    try { localStorage.removeItem("scalify-tweaks"); } catch {}
    return DEFAULTS;
  });
  const [tweaksVisible, setTweaksVisible] = useState(false);

  useEffect(() => {
    applyTheme(tweaks);
    try { localStorage.setItem("scalify-tweaks", JSON.stringify(tweaks)); } catch {}
  }, [tweaks]);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setTweaksVisible(true);
      if (d.type === "__deactivate_edit_mode") setTweaksVisible(false);
    };
    window.addEventListener("message", onMsg);
    // Allow toggling tweaks via keyboard shortcut (Ctrl+Shift+T)
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "T") setTweaksVisible(v => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("message", onMsg);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const t = SCALIFY_CONTENT[tweaks.lang] || SCALIFY_CONTENT.fr;

  return (
    <>
      <style>{`
        :root {
          --bg: #1a1510;
          --fg: #efe4d1;
          --muted: #a59583;
          --rule: #332a22;
          --card: #231c16;
          --accent: #ff8c4a;
          --accentFg: #1a1510;
          --panel: #120e0a;
          --panelFg: #efe4d1;
          --cream: #e8dcc4;
          --creamFg: #2a1f15;
          --creamRule: #c7b896;
          --creamMuted: #7a6853;
          --font-display: var(--font-instrument-serif), 'Instrument Serif', Georgia, serif;
          --font-sans: 'Geist', 'Helvetica Neue', Arial, sans-serif;
          --font-mono: var(--font-jetbrains-mono), 'JetBrains Mono', ui-monospace, monospace;
          --pad: 14px;
          --pad-x: 56px;
        }
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: var(--bg); color: var(--fg); }
        body {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        ::selection { background: var(--accent); color: var(--accentFg); }
        a { color: inherit; }
        button { font: inherit; color: inherit; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        @media (max-width: 960px) {
          :root { --pad-x: 24px; }
          .nav-link { display: none !important; }
        }

        @media (max-width: 768px) {
          :root { --pad-x: 18px; }

          /* 2 — Hero split (variant B) */
          .hero-split { grid-template-columns: 1fr !important; gap: 32px !important; }

          /* 3 — Metrics */
          .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .metrics-grid > div { border-right: none !important; padding: 24px 0 !important; }
          .metrics-grid > div:nth-child(-n+2) { border-bottom: 1px solid var(--creamRule); }

          /* 4, 7, 9, 11 — Section headers (2-col → stack) */
          .section-header-grid { grid-template-columns: 1fr !important; gap: 16px !important; }

          /* 5 — Services cards */
          .services-grid { grid-template-columns: 1fr !important; }

          /* 6 — Anatomy */
          .anatomy-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .anatomy-grid > div:last-child { position: static !important; }

          /* 8 — Process steps */
          .process-step { grid-template-columns: 56px 1fr !important; gap: 16px !important; }
          .process-step > div:nth-child(3) { grid-column: 2 / -1; }
          .process-step > div:nth-child(4) { grid-column: 2 / -1; }

          /* 10 — Results pillars */
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }

          /* 12 — Franchise pillars */
          .franchise-pillars { grid-template-columns: repeat(2, 1fr) !important; }

          /* 13 — Franchise network rows */
          .network-row { grid-template-columns: 1fr 1fr !important; gap: 8px 16px !important; padding: 18px 0 !important; }
          .network-row > div:nth-child(3),
          .network-row > div:nth-child(4) { text-align: left !important; }

          /* 14 — Franchise network header */
          .network-header { grid-template-columns: 1fr !important; gap: 20px !important; }

          /* 15 — Journal cards */
          .journal-grid { grid-template-columns: 1fr !important; }

          /* 16 — FAQ */
          .faq-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .faq-grid > div:first-child { position: static !important; }

          /* 17 — Before/After header & rows */
          .ba-header { grid-template-columns: 1fr !important; gap: 16px !important; }
          .ba-row { grid-template-columns: 1fr !important; gap: 12px !important; padding: 20px 16px !important; }
          .ba-row > div:last-child { padding-left: 0 !important; border-left: none !important; }

          /* 18 — Contact */
          .contact-grid { grid-template-columns: 1fr !important; gap: 28px !important; }

          /* 19 — Contact form fields */
          .form-field { grid-template-columns: 1fr !important; gap: 8px !important; padding: 14px 16px !important; }

          /* 20 — Footer */
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }

          /* Touch targets — minimum 44px */
          .faq-grid button { min-height: 48px; }
          a[href="#contact"], button[type="submit"] { min-height: 44px; }

          /* Modals — full-screen on mobile */
          .modal-overlay { padding: 16px !important; align-items: flex-start !important; }
          .modal-overlay > article,
          .modal-overlay > div { border-radius: 12px !important; padding: 28px 20px 32px !important; max-height: 92vh !important; overflow-y: auto !important; }

          /* Legal modal adjustments */
          .legal-modal-inner { max-height: 94vh !important; }
          .legal-modal-header { padding: 20px 20px !important; }
          .legal-modal-body { padding: 24px 20px 28px !important; }
          .legal-modal-footer { padding: 14px 20px !important; }

          /* Tweaks panel — full width on mobile */
          .tweaks-panel { left: 16px !important; right: 16px !important; width: auto !important; bottom: 16px !important; }

          /* Process timeline line hidden on mobile */
          .process-timeline-line { display: none !important; }
        }
      `}</style>

      <Nav t={t} lang={tweaks.lang} setLang={(l) => setTweaks({ ...tweaks, lang: l })} />
      <main>
        <Hero t={t} variant={tweaks.hero} />
        <Metrics t={t} />
        <Services t={t} />
        <Anatomy t={t} />
        <Clients t={t} />
        <Process t={t} />
        <Results t={t} />
        <Franchise t={t} />
        <Journal t={t} lang={tweaks.lang} />
        <FAQ t={t} />
        <BeforeAfter t={t} />
        <Contact t={t} />
      </main>
      <FooterSection t={t} />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} visible={tweaksVisible} />
    </>
  );
}
