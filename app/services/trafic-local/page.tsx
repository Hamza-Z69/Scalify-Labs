import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trafic local pour réseaux de franchise — Scalify Labs",
  description:
    "Campagnes géolocalisées pour générer du trafic en magasin sur chaque point de vente de votre réseau de franchise.",
};

/* ───────────────────────── Data ───────────────────────── */

const steps = [
  { number: "01", title: "Mapping" },
  { number: "02", title: "Stratégie" },
  { number: "03", title: "Déploiement" },
  { number: "04", title: "Reporting" },
];

const kpis = [
  { value: "+35", suffix: "%", label: "Trafic en magasin" },
  { value: "-25", suffix: "%", label: "Coût par visite" },
  { value: "< 48", suffix: "h", label: "Mise en ligne" },
];

const faqItems = [
  {
    question: "Quel budget prévoir par point de vente ?",
    answer:
      "2 000 à 8 000 MAD/mois selon la zone et la concurrence locale.",
  },
  {
    question: "Comment personnalisez-vous par zone ?",
    answer:
      "Créatifs et offres adaptés au contexte local. Ciblage géographique au rayon de chalandise réel.",
  },
  {
    question: "Peut-on lancer pour un seul point de vente ?",
    answer:
      "Oui, un seul ou tout le réseau. Chaque campagne est indépendante et mesurée.",
  },
];

/* ───────────────────────── Page ───────────────────────── */

export default function TraficLocalPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">ACQUISITION B2C</span>

            <h1 className="g-title-hero font-serif">
              Plus de clients pour chaque point de vente.
            </h1>

            <p className="g-text mt-6 text-lg">
              Campagnes géolocalisées pour chaque franchisé de votre réseau.
            </p>

            <div className="mt-10">
              <Link href="/contact" className="g-btn">
                Demander un audit gratuit
              </Link>
            </div>

            <div className="g-line" />
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── PROCESS — 4 étapes horizontal ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <h2 className="g-title font-serif text-center mb-14">
              Comment ça marche
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="g-card p-6 text-center">
                  <div className="g-kpi font-serif text-[clamp(1.75rem,3.5vw,2.5rem)]">
                    {step.number}
                  </div>
                  <p className="mt-3 text-[14px] font-semibold" style={{ color: "#f0ece5" }}>
                    {step.title}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── KPIs ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <h2 className="g-title font-serif text-center mb-14">
              Résultats types
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {kpis.map((kpi, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="g-card p-10 text-center">
                  <div className="g-kpi font-serif text-[clamp(2rem,4vw,2.75rem)]">
                    {kpi.value}
                    <span className="text-[0.55em] ml-1">{kpi.suffix}</span>
                  </div>
                  <p className="g-text mt-3 text-[13px] tracking-wide">
                    {kpi.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[740px] px-6">
          <ScrollReveal>
            <h2 className="g-title font-serif text-center mb-12">
              Questions fréquentes
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div
              style={{
                // @ts-expect-error CSS custom properties
                "--text-primary": "#f0ece5",
                "--text-secondary": "rgba(240,236,229,0.55)",
                "--border-default": "rgba(232,134,42,0.12)",
              }}
            >
              <Accordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── CTA FINAL ── */}
      <section className="py-24">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <ScrollReveal>
            <h2 className="g-title font-serif">
              Prêt à booster le trafic de votre réseau ?
            </h2>

            <div className="mt-9">
              <Link href="/contact" className="g-btn">
                Demander un audit gratuit
              </Link>
            </div>

            <p className="g-text-muted mt-4 text-xs">
              Audit de 30 minutes — Sans engagement
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
