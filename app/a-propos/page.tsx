import type { Metadata } from "next";
import { Brain, Eye, Lightbulb, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Scalify Labs",
  description:
    "Découvrez Scalify Labs, l'agence spécialisée en acquisition digitale pour les réseaux de franchise au Maroc et en Afrique.",
};

const values = [
  {
    icon: Brain,
    title: "Expertise > Généralisme",
    description:
      "Acquisition digitale pour la franchise, c'est tout ce qu'on fait.",
  },
  {
    icon: Eye,
    title: "Transparence > Boîte noire",
    description:
      "Dashboards en temps réel, reporting clair, chaque dirham tracé.",
  },
  {
    icon: Lightbulb,
    title: "Innovation > Status quo",
    description:
      "IA, automatisation et créatifs data-driven au service de vos résultats.",
  },
  {
    icon: TrendingUp,
    title: "Résultats > Promesses",
    description:
      "Chaque action est mesurée, chaque campagne optimisée pour votre ROI.",
  },
];

export default function AProposPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-16">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">À PROPOS</span>

            <h1 className="g-title-hero font-serif">
              L&apos;agence qui parle franchise.
            </h1>

            <p className="g-text mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
              Scalify Labs est née d&apos;une conviction : les réseaux de
              franchise méritent un partenaire digital qui comprend leur
              métier.
            </p>

            <div className="g-line" />
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── NOTRE HISTOIRE ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[700px] px-6">
          <ScrollReveal>
            <h2 className="g-title font-serif text-center mb-8">
              Notre histoire
            </h2>

            <p className="g-text text-base leading-relaxed">
              Fondée en 2026 à Casablanca, Scalify Labs est née de
              l&apos;expérience acquise auprès de dizaines de réseaux de
              franchise en France. Le constat était simple : le marché
              marocain et africain manquait d&apos;un partenaire véritablement
              spécialisé. Notre mission :{" "}
              <span style={{ color: "#E8862A", fontWeight: 600 }}>
                rendre l&apos;acquisition digitale accessible, performante et
                transparente pour les franchiseurs au Maroc et en Afrique
              </span>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── NOS VALEURS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="g-title font-serif">
                Nos valeurs
              </h2>
              <p className="g-text mt-3 text-base">
                Les principes qui guident chacune de nos décisions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="g-card p-7 h-full">
                    <div className="flex items-start gap-4">
                      <span className="g-icon-box">
                        <Icon className="h-6 w-6" style={{ color: "#E8862A" }} />
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-bold" style={{ color: "#f0ece5" }}>
                          {value.title}
                        </h3>
                        <p className="g-text mt-2 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── L'ÉQUIPE ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="g-title font-serif">
                L&apos;équipe
              </h2>
              <p className="g-text mt-3 text-base">
                Les personnes derrière Scalify Labs.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex justify-center">
            <ScrollReveal delay={0.1}>
              <div className="g-card max-w-md text-center p-8">
                {/* Initials avatar */}
                <div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full"
                  style={{ background: "#E8862A" }}
                >
                  <span className="font-serif text-2xl font-bold text-white">
                    HZ
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-bold" style={{ color: "#f0ece5" }}>
                  Hamza
                </h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "#E8862A" }}>
                  Fondateur
                </p>
                <p className="g-text mt-4 text-sm leading-relaxed">
                  Spécialiste de l&apos;acquisition digitale pour la franchise,
                  forgé par +50 campagnes pilotées en France et au Maroc.
                  Expert en recrutement B2B de franchisés et génération de
                  trafic local B2C.
                </p>

                <div
                  className="mt-6 pt-6"
                  style={{ borderTop: "1px solid rgba(232,134,42,0.10)" }}
                >
                  <span className="g-pill text-xs uppercase tracking-wider">
                    Équipe en croissance
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── CTA FINAL ── */}
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="g-title font-serif">
                Prêt à accélérer votre croissance ?
              </h2>

              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="g-btn">
                  Réserver un audit gratuit
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
