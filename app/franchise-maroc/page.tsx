import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide de la franchise au Maroc 2026 — Scalify Labs",
  description:
    "Tout ce qu'un franchiseur doit savoir pour s'implanter au Maroc : chiffres clés, secteurs porteurs, villes cibles et accompagnement Scalify Labs.",
};

/* ───────────────────────── Data ───────────────────────── */

const keyFigures = [
  { value: "745", label: "Réseaux de franchise actifs" },
  { value: "+25%", label: "Croissance annuelle sur 15 ans" },
  { value: "20 Mds", suffix: "MAD", label: "Volume d'affaires" },
  { value: "2030", label: "Coupe du Monde : accélérateur majeur" },
];

/* ───────────────────────── Page ───────────────────────── */

export default function FranchiseMarocPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">GUIDE</span>

            <h1 className="g-title-hero font-serif">
              Le guide complet de la franchise au Maroc
            </h1>

            <p className="g-text mt-6 mx-auto max-w-[620px] text-lg leading-relaxed">
              Tout ce qu&apos;un franchiseur doit savoir pour s&apos;implanter au
              Maroc : marché, réglementation, secteurs porteurs et stratégie
              d&apos;acquisition.
            </p>

            <div className="g-line" />
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── CHIFFRES CLÉS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <h2 className="g-title font-serif text-center mb-14">
              Chiffres clés du marché
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {keyFigures.map((kpi, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="g-card p-8 text-center">
                  <div className="g-kpi font-serif text-[clamp(1.75rem,3.5vw,2.5rem)]">
                    {kpi.value}
                    {kpi.suffix && (
                      <span className="text-[0.5em] ml-1">{kpi.suffix}</span>
                    )}
                  </div>
                  <p className="g-text mt-3 text-[13px] leading-snug">
                    {kpi.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── POURQUOI LE MAROC ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <h2 className="g-title font-serif text-center mb-8">
              Pourquoi le Maroc est un marché attractif
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-[700px] mx-auto">
              <p className="g-text text-base leading-relaxed">
                Avec une{" "}
                <span style={{ color: "#E8862A", fontWeight: 600 }}>
                  classe moyenne en pleine expansion
                </span>
                , un taux d&apos;urbanisation dépassant 65 % et une position
                stratégique entre l&apos;Europe et l&apos;Afrique subsaharienne,
                le Maroc est la porte d&apos;entrée de la franchise sur le
                continent. Stabilité politique, infrastructures modernes et cadre
                réglementaire favorable renforcent son attractivité.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── SECTEURS PORTEURS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <h2 className="g-title font-serif text-center mb-10">
              Les secteurs porteurs
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {["Restauration", "Textile & Mode", "Beauté & Cosmétique", "Fitness & Bien-être", "Éducation & Formation"].map(
                (sector) => (
                  <span key={sector} className="g-pill">
                    {sector}
                  </span>
                )
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-[700px] mx-auto mt-10">
              <p className="g-text text-base leading-relaxed">
                Restauration et mode restent les locomotives, mais fitness,
                beauté et éducation connaissent une croissance accélérée.
                L&apos;appétit des consommateurs marocains pour les marques
                structurées crée des opportunités dans tous les secteurs de
                services.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── VILLES À CIBLER ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <h2 className="g-title font-serif text-center mb-10">
              Les villes à cibler
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-[700px] mx-auto">
              <p className="g-text text-base leading-relaxed">
                <span style={{ color: "#E8862A", fontWeight: 600 }}>
                  Casablanca concentre 30 % des franchises
                </span>{" "}
                et reste le point d&apos;entrée naturel. Rabat offre un pouvoir
                d&apos;achat élevé, Marrakech et Tanger un flux touristique
                massif. Fès et Agadir complètent le maillage avec des marchés
                en forte croissance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["Casablanca (30%)", "Rabat", "Marrakech", "Tanger", "Fès", "Agadir"].map(
                (city) => (
                  <span key={city} className="g-pill">
                    {city}
                  </span>
                )
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <ScrollReveal>
            <h2 className="g-title font-serif">
              Comment Scalify Labs accompagne les franchiseurs
            </h2>

            <p className="g-text mt-5 mx-auto max-w-[560px] text-base leading-relaxed">
              De l&apos;étude de marché à la génération de candidatures
              qualifiées, nous vous accompagnons à chaque étape de votre
              implantation au Maroc.
            </p>

            <div className="mt-9">
              <Link href="/contact" className="g-btn">
                Discuter de votre projet
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
