import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Études de cas franchise — Scalify Labs",
  description:
    "Découvrez nos résultats concrets : recrutement de franchisés, génération de candidatures qualifiées et accélération du développement réseau.",
};

/* ───────────────────────── Data ───────────────────────── */

const caseStudies = [
  {
    sector: "Restauration",
    enseigne: "Réseau de restauration rapide",
    challenge:
      "Recruter des franchisés qualifiés dans 6 villes en moins d'un an.",
    kpiValue: "CPL \u00f73",
    description:
      "Stratégie Meta Ads multi-villes avec scoring automatisé — CPL passé de 135 à 45 MAD en 8 semaines.",
  },
  {
    sector: "Retail",
    enseigne: "Chaîne de prêt-à-porter",
    challenge:
      "Générer assez de candidatures pour un plan d'expansion ambitieux.",
    kpiValue: "+180% candidatures",
    description:
      "Campagnes Google + LinkedIn ciblant des investisseurs à fort apport — volume qualifié x2,8 en 3 mois.",
  },
  {
    sector: "Services",
    enseigne: "Réseau de centres fitness",
    challenge:
      "Lancer le développement franchise depuis zéro, sans notoriété digitale.",
    kpiValue: "12 franchisés en 6 mois",
    description:
      "Funnel complet de conversion et nurturing automatisé — de 0 à 12 franchisés signés, budget maîtrisé.",
  },
];

/* ───────────────────────── Page ───────────────────────── */

export default function CasClientsPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">CAS CLIENTS</span>

            <h1 className="g-title-hero font-serif">
              Nos résultats parlent d&apos;eux-mêmes.
            </h1>

            <p className="g-text mt-6 mx-auto max-w-[580px] text-lg leading-relaxed">
              Des campagnes concrètes, des chiffres vérifiables, des franchiseurs
              satisfaits. Découvrez comment nous avons accompagné ces enseignes.
            </p>

            <div className="g-line" />
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── CASE STUDIES ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="g-card p-7 h-full flex flex-col">
                  <span className="g-pill text-xs w-fit">{cs.sector}</span>

                  <h3
                    className="font-serif text-lg font-bold mt-4"
                    style={{ color: "#f0ece5" }}
                  >
                    {cs.enseigne}
                  </h3>

                  <p className="g-text text-sm mt-2 leading-relaxed">
                    <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                      Défi :
                    </span>{" "}
                    {cs.challenge}
                  </p>

                  <div className="my-5 py-4" style={{ borderTop: "1px solid rgba(232,134,42,0.10)", borderBottom: "1px solid rgba(232,134,42,0.10)" }}>
                    <div className="g-kpi font-serif text-[clamp(1.5rem,3vw,2rem)] text-center">
                      {cs.kpiValue}
                    </div>
                  </div>

                  <p className="g-text text-sm leading-relaxed flex-1">
                    {cs.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── TÉMOIGNAGE ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <div className="g-card p-10 md:p-12 max-w-3xl mx-auto text-center">
              <div
                className="font-serif text-[2rem] leading-none mb-6"
                style={{ color: "rgba(232,134,42,0.15)" }}
              >
                &ldquo;
              </div>
              <blockquote>
                <p
                  className="font-serif text-lg md:text-xl font-medium leading-relaxed"
                  style={{ color: "#f0ece5" }}
                >
                  Grâce à Scalify Labs, nous avons recruté 12 franchisés qualifiés
                  en 6 mois avec un coût par candidature divisé par 3. Leur approche
                  data-driven et leur connaissance du marché franchise ont fait la
                  différence.
                </p>
                <footer className="g-text mt-6 text-sm">
                  — Directeur Développement, Réseau de restauration rapide
                </footer>
              </blockquote>

              <div
                className="mt-8 pt-8 grid grid-cols-3 gap-4"
                style={{ borderTop: "1px solid rgba(232,134,42,0.10)" }}
              >
                <div>
                  <div className="g-kpi font-serif text-2xl">45 MAD</div>
                  <p className="g-text text-xs mt-1">CPL (vs 135 avant)</p>
                </div>
                <div>
                  <div className="g-kpi font-serif text-2xl">234</div>
                  <p className="g-text text-xs mt-1">Candidatures qualifiées</p>
                </div>
                <div>
                  <div className="g-kpi font-serif text-2xl">12</div>
                  <p className="g-text text-xs mt-1">Franchisés signés</p>
                </div>
              </div>
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
              Envie de résultats similaires ?
            </h2>

            <p className="g-text mt-5 mx-auto max-w-[520px] text-base leading-relaxed">
              Chaque réseau est unique. Discutons de votre situation et construisons
              ensemble une stratégie sur mesure.
            </p>

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
