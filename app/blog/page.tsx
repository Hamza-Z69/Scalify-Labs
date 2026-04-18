import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Blog — Insights franchise & acquisition — Scalify Labs",
  description:
    "Articles, guides et analyses sur le recrutement de franchisés, Meta Ads et le marché de la franchise au Maroc.",
};

/* ───────────────────────── Data ───────────────────────── */

const articles = [
  {
    date: "Mars 2026",
    category: "Franchise",
    title: "Comment recruter des franchisés via le digital en 2026",
    excerpt:
      "Les méthodes traditionnelles de recrutement montrent leurs limites. Découvrez les stratégies digitales qui permettent aux franchiseurs d'attirer des candidats qualifiés à grande échelle.",
  },
  {
    date: "Février 2026",
    category: "Meta Ads",
    title: "Meta Ads pour les franchises : guide complet",
    excerpt:
      "De la structure de campagne au ciblage des investisseurs, en passant par la création de landing pages à haute conversion. Tout ce qu'un franchiseur doit savoir sur Meta Ads.",
  },
  {
    date: "Janvier 2026",
    category: "Marché Maroc",
    title: "Le marché de la franchise au Maroc : chiffres clés 2026",
    excerpt:
      "745 réseaux actifs, +25 % de croissance annuelle, Coupe du Monde 2030 en ligne de mire. Analyse complète du marché marocain de la franchise et de ses opportunités.",
  },
];

/* ───────────────────────── Page ───────────────────────── */

export default function BlogPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">BLOG</span>

            <h1 className="g-title-hero font-serif">
              Insights &amp; Expertise
            </h1>

            <p className="g-text mt-6 mx-auto max-w-[580px] text-lg leading-relaxed">
              Analyses, guides pratiques et retours d&apos;expérience sur
              l&apos;acquisition digitale pour les réseaux de franchise.
            </p>

            <div className="g-line" />
          </ScrollReveal>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── ARTICLES ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="g-card p-7 h-full flex flex-col">
                  <p className="g-text-muted text-xs tracking-wide uppercase">
                    {article.date}
                  </p>

                  <span className="g-pill text-xs w-fit mt-3">
                    {article.category}
                  </span>

                  <h3
                    className="font-serif text-lg font-bold mt-4 leading-snug"
                    style={{ color: "#f0ece5" }}
                  >
                    {article.title}
                  </h3>

                  <p className="g-text text-sm mt-3 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  <a
                    href="#"
                    className="mt-5 inline-block text-sm font-semibold"
                    style={{ color: "#E8862A" }}
                  >
                    Lire l&apos;article &rarr;
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="g-sep" />

      {/* ── NOTE ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <p className="g-text text-base leading-relaxed">
              Plus d&apos;articles à venir —{" "}
              <span style={{ color: "#E8862A", fontWeight: 600 }}>
                Abonnez-vous à notre newsletter
              </span>{" "}
              pour ne rien manquer.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
