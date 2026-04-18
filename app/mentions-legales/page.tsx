import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Mentions légales — Scalify Labs",
  description:
    "Mentions légales du site Scalify Labs : éditeur, hébergeur, conditions d'utilisation.",
};

export default function MentionsLegalesPage() {
  return (
    <PageShell>
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <h1 className="g-title font-serif text-center mb-14">
              Mentions légales
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-[700px] mx-auto space-y-10">
              {/* Éditeur */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Éditeur du site
                </h2>
                <div className="g-text text-sm leading-relaxed space-y-1">
                  <p>Scalify Labs</p>
                  <p>Casablanca, Maroc</p>
                  <p>
                    Contact :{" "}
                    <a
                      href="mailto:hello@scalify.ma"
                      style={{ color: "#E8862A" }}
                    >
                      hello@scalify.ma
                    </a>
                  </p>
                </div>
              </div>

              <hr className="g-sep" />

              {/* Directeur de publication */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Directeur de la publication
                </h2>
                <p className="g-text text-sm leading-relaxed">
                  [Nom du directeur]
                </p>
              </div>

              <hr className="g-sep" />

              {/* Hébergeur */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Hébergeur
                </h2>
                <div className="g-text text-sm leading-relaxed space-y-1">
                  <p>Vercel Inc.</p>
                  <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p>
                    Site :{" "}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#E8862A" }}
                    >
                      vercel.com
                    </a>
                  </p>
                </div>
              </div>

              <hr className="g-sep" />

              {/* Propriété intellectuelle */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Propriété intellectuelle
                </h2>
                <p className="g-text text-sm leading-relaxed">
                  L&apos;ensemble du contenu de ce site (textes, images, logos,
                  graphismes, icônes, sons, logiciels, etc.) est la propriété
                  exclusive de Scalify Labs ou de ses partenaires. Toute
                  reproduction, représentation, modification, publication ou
                  adaptation de tout ou partie des éléments du site, quel que soit
                  le moyen ou le procédé utilisé, est interdite sans
                  l&apos;autorisation écrite préalable de Scalify Labs.
                </p>
              </div>

              <hr className="g-sep" />

              {/* Limitation de responsabilité */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Limitation de responsabilité
                </h2>
                <p className="g-text text-sm leading-relaxed">
                  Scalify Labs s&apos;efforce de fournir des informations aussi
                  précises que possible sur ce site. Toutefois, Scalify Labs ne
                  pourra être tenue responsable des omissions, des inexactitudes
                  et des carences dans la mise à jour, qu&apos;elles soient de son
                  fait ou du fait des tiers partenaires qui lui fournissent ces
                  informations.
                </p>
              </div>

              <hr className="g-sep" />

              {/* Droit applicable */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Droit applicable
                </h2>
                <p className="g-text text-sm leading-relaxed">
                  Le présent site et ses mentions légales sont régis par le droit
                  marocain. En cas de litige, et après échec de toute tentative de
                  recherche d&apos;une solution amiable, les tribunaux de
                  Casablanca seront seuls compétents.
                </p>
              </div>

              <hr className="g-sep" />

              {/* Contact */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Contact
                </h2>
                <p className="g-text text-sm leading-relaxed">
                  Pour toute question relative aux mentions légales, vous pouvez
                  nous contacter à l&apos;adresse :{" "}
                  <a
                    href="mailto:hello@scalify.ma"
                    style={{ color: "#E8862A" }}
                  >
                    hello@scalify.ma
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
