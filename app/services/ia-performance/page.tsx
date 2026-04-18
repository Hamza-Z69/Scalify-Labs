import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA & Performance publicitaire franchise — Scalify Labs",
  description:
    "Intelligence artificielle pour accélérer le setup, le monitoring et l'optimisation de vos campagnes publicitaires franchise.",
};

/* ───────────────────────── Data ───────────────────────── */

const steps = [
  { number: "01", title: "Connexion" },
  { number: "02", title: "Analyse IA" },
  { number: "03", title: "Optimisation" },
  { number: "04", title: "Reporting" },
];

const kpis = [
  { value: "×3", suffix: "", label: "Rapidité" },
  { value: "-30", suffix: "%", label: "Gaspillage" },
  { value: "24/7", suffix: "", label: "Monitoring" },
];

const faqItems = [
  {
    question: "Quels outils d'IA utilisez-vous ?",
    answer:
      "Agents IA propriétaires intégrés aux APIs Meta Ads, Google Ads et analytics. ML pour la prédiction, LLMs pour les recommandations.",
  },
  {
    question: "L'IA remplace-t-elle l'expertise humaine ?",
    answer:
      "Non, elle l'augmente. L'IA gère le monitoring et les tâches répétitives, nos experts se concentrent sur la stratégie.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Connexions chiffrées, aucun partage tiers, environnement sécurisé. NDA sur demande.",
  },
];

/* ───────────────────────── Page ───────────────────────── */

export default function IAPerformancePage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">INTELLIGENCE ARTIFICIELLE</span>

            <h1 className="g-title-hero font-serif">
              L&apos;IA au service de votre réseau.
            </h1>

            <p className="g-text mt-6 text-lg">
              Setup accéléré, monitoring intelligent, optimisation continue.
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
                    {kpi.suffix && <span className="text-[0.55em] ml-1">{kpi.suffix}</span>}
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
              Prêt à accélérer avec l&apos;IA ?
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
