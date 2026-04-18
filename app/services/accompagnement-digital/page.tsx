import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompagnement digital pour franchises — Scalify Labs",
  description:
    "Image de marque, sites web, réseaux sociaux et création de contenu pour les réseaux de franchise.",
};

/* ───────────────────────── Data ───────────────────────── */

const steps = [
  { number: "01", title: "Audit brand" },
  { number: "02", title: "Création" },
  { number: "03", title: "Déploiement" },
  { number: "04", title: "Suivi" },
];

const kpis = [
  { value: "100", suffix: "%", label: "Franchisés équipés" },
  { value: "< 2", suffix: "sem.", label: "Délai de livraison" },
  { value: "+60", suffix: "%", label: "Cohérence brand" },
];

const faqItems = [
  {
    question: "Travaillez-vous avec des franchises qui ont déjà une charte graphique ?",
    answer:
      "Oui. Nous déclinons votre charte existante sur tous les supports digitaux, avec ajustements si nécessaire.",
  },
  {
    question: "Comment assurez-vous la cohérence entre les franchisés ?",
    answer:
      "Kit de brand guidelines, templates réutilisables et process de validation. Chaque franchisé reçoit ses assets personnalisés.",
  },
  {
    question: "Quel est le délai pour créer un site web complet ?",
    answer:
      "Site vitrine en 1-2 semaines. Site multi-pages en 3-4 semaines. Landing pages en 3-5 jours.",
  },
];

/* ───────────────────────── Page ───────────────────────── */

export default function AccompagnementDigitalPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">STRATÉGIE DIGITALE</span>

            <h1 className="g-title-hero font-serif">
              Votre image de marque, partout.
            </h1>

            <p className="g-text mt-6 text-lg">
              La cohérence de votre marque sur tous vos points de vente.
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
              Prêt à structurer votre présence digitale ?
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
