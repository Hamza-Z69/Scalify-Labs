import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Scalify Labs",
  description:
    "Politique de confidentialité de Scalify Labs : données collectées, utilisation, cookies et droits des utilisateurs.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <PageShell>
      <section className="pt-[140px] pb-24">
        <div className="mx-auto max-w-[900px] px-6">
          <ScrollReveal>
            <h1 className="g-title font-serif text-center mb-14">
              Politique de confidentialité
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-[700px] mx-auto space-y-10">
              {/* Introduction */}
              <div>
                <p className="g-text text-sm leading-relaxed">
                  Scalify Labs s&apos;engage à protéger la vie privée de ses
                  utilisateurs. La présente politique de confidentialité décrit les
                  données personnelles que nous collectons, la manière dont nous
                  les utilisons et les droits dont vous disposez. Cette politique
                  est conforme à la loi marocaine n° 09-08 relative à la
                  protection des personnes physiques à l&apos;égard du traitement
                  des données à caractère personnel, ainsi qu&apos;au Règlement
                  Général sur la Protection des Données (RGPD) pour nos
                  utilisateurs européens.
                </p>
              </div>

              <hr className="g-sep" />

              {/* Données collectées */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Données collectées
                </h2>
                <div className="g-text text-sm leading-relaxed space-y-3">
                  <p>
                    Nous collectons les données personnelles que vous nous
                    transmettez volontairement via notre formulaire de contact :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Nom et prénom</li>
                    <li>Adresse e-mail</li>
                    <li>Numéro de téléphone (facultatif)</li>
                    <li>Nom de l&apos;entreprise ou de l&apos;enseigne</li>
                    <li>Message et informations relatives à votre projet</li>
                  </ul>
                  <p>
                    Ces données sont collectées uniquement lorsque vous remplissez
                    et soumettez le formulaire de contact sur notre site.
                  </p>
                </div>
              </div>

              <hr className="g-sep" />

              {/* Utilisation des données */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Utilisation des données
                </h2>
                <div className="g-text text-sm leading-relaxed space-y-3">
                  <p>
                    Les données collectées sont utilisées exclusivement pour :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      Répondre à vos demandes de contact et de renseignements
                    </li>
                    <li>Vous proposer un audit ou un accompagnement adapté</li>
                    <li>
                      Vous envoyer des communications relatives à nos services
                      (uniquement avec votre consentement)
                    </li>
                    <li>
                      Améliorer la qualité de nos services et de notre site web
                    </li>
                  </ul>
                  <p>
                    Vos données ne sont jamais vendues, louées ou transmises à des
                    tiers à des fins commerciales.
                  </p>
                </div>
              </div>

              <hr className="g-sep" />

              {/* Cookies */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Cookies et technologies de suivi
                </h2>
                <div className="g-text text-sm leading-relaxed space-y-3">
                  <p>Notre site peut utiliser les technologies suivantes :</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                        Cookies essentiels :
                      </span>{" "}
                      nécessaires au bon fonctionnement du site (session,
                      préférences)
                    </li>
                    <li>
                      <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                        Cookies analytiques :
                      </span>{" "}
                      pour comprendre comment les visiteurs utilisent notre site
                      (Google Analytics ou équivalent)
                    </li>
                    <li>
                      <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                        Pixels de conversion :
                      </span>{" "}
                      Meta Pixel et Google Ads pour mesurer l&apos;efficacité de
                      nos campagnes publicitaires
                    </li>
                  </ul>
                  <p>
                    Vous pouvez à tout moment désactiver les cookies via les
                    paramètres de votre navigateur. La désactivation de certains
                    cookies peut affecter votre expérience de navigation.
                  </p>
                </div>
              </div>

              <hr className="g-sep" />

              {/* Durée de conservation */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Durée de conservation
                </h2>
                <p className="g-text text-sm leading-relaxed">
                  Vos données personnelles sont conservées pendant une durée
                  maximale de 3 ans à compter de votre dernier contact avec
                  Scalify Labs, sauf obligation légale de conservation plus longue.
                </p>
              </div>

              <hr className="g-sep" />

              {/* Droits des utilisateurs */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Droits des utilisateurs
                </h2>
                <div className="g-text text-sm leading-relaxed space-y-3">
                  <p>
                    Conformément à la réglementation applicable, vous disposez des
                    droits suivants concernant vos données personnelles :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                        Droit d&apos;accès :
                      </span>{" "}
                      obtenir la confirmation que vos données sont traitées et en
                      recevoir une copie
                    </li>
                    <li>
                      <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                        Droit de rectification :
                      </span>{" "}
                      demander la correction de données inexactes ou incomplètes
                    </li>
                    <li>
                      <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                        Droit de suppression :
                      </span>{" "}
                      demander l&apos;effacement de vos données personnelles
                    </li>
                    <li>
                      <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                        Droit d&apos;opposition :
                      </span>{" "}
                      vous opposer au traitement de vos données pour des motifs
                      légitimes
                    </li>
                    <li>
                      <span style={{ color: "rgba(240,236,229,0.7)", fontWeight: 600 }}>
                        Droit à la portabilité :
                      </span>{" "}
                      recevoir vos données dans un format structuré et lisible
                    </li>
                  </ul>
                  <p>
                    Pour exercer ces droits, contactez-nous à l&apos;adresse
                    ci-dessous.
                  </p>
                </div>
              </div>

              <hr className="g-sep" />

              {/* Contact DPO */}
              <div>
                <h2
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "#f0ece5" }}
                >
                  Contact
                </h2>
                <p className="g-text text-sm leading-relaxed">
                  Pour toute question relative à la protection de vos données
                  personnelles, vous pouvez nous contacter à :{" "}
                  <a
                    href="mailto:hello@scalify.ma"
                    style={{ color: "#E8862A" }}
                  >
                    hello@scalify.ma
                  </a>
                </p>
              </div>

              <hr className="g-sep" />

              {/* Mise à jour */}
              <div>
                <p className="g-text-muted text-xs">
                  Dernière mise à jour : avril 2026
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
