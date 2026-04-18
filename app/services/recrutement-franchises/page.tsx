import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";
import { RoiSimulator } from "@/components/sections/RoiSimulator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recrutement de franchisés par le digital — Scalify Labs",
  description:
    "Générez des candidatures de franchisés qualifiés via Meta Ads, Google Ads et LinkedIn.",
};

/* ───────────────────────── Data ───────────────────────── */

const steps = [
  { number: "01", title: "Audit" },
  { number: "02", title: "Campagnes" },
  { number: "03", title: "Optimisation" },
  { number: "04", title: "Reporting" },
];

const kpis = [
  { value: "35-80", suffix: "MAD", label: "CPL moyen" },
  { value: "25-40", suffix: "%", label: "Taux de qualification" },
  { value: "< 7", suffix: "jours", label: "Délai premier lead" },
];

const faqItems = [
  {
    question: "Quel budget minimum pour recruter des franchisés ?",
    answer:
      "5 000 à 15 000 MAD/mois. CPL entre 35 et 80 MAD, qualification 25-40%.",
  },
  {
    question: "Combien de temps avant les premiers résultats ?",
    answer:
      "Premières candidatures sous 48-72h. Rythme de croisière après 6 semaines.",
  },
  {
    question: "Quels profils de franchisés pouvez-vous cibler ?",
    answer:
      "Tous profils : apport 100K-500K+ MAD, reconversion, cadres, multi-franchisés. Ciblage par zone et comportements.",
  },
];

/* ───────────────────────── Page ───────────────────────── */

export default function RecrutementFranchisesPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">ACQUISITION B2B</span>

            <h1 className="g-title-hero font-serif">
              Trouvez vos futurs franchisés.
            </h1>

            <p className="g-text mt-6 text-lg">
              Des campagnes digitales pour recruter vos futurs franchisés.
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

      {/* ── ROI SIMULATOR ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <RoiSimulator />
          </ScrollReveal>
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
              Prêt à recruter vos prochains franchisés ?
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
