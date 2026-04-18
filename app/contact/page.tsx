import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PageShell } from "@/components/shared/PageShell";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Scalify Labs",
  description:
    "Réservez votre audit gratuit et parlons de votre projet franchise. Scalify Labs, agence spécialisée en acquisition digitale pour les réseaux de franchise.",
};

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@scalify.ma",
    href: "mailto:hello@scalify.ma",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+212 6XX XXX XXX",
    href: "tel:+2126XXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Casablanca, Maroc",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Ven, 9h-18h (GMT+1)",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      {/* Scoped hover styles */}
      <style>{`
        .sl-social-link {
          display: flex;
          height: 40px;
          width: 40px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid rgba(232,134,42,0.10);
          background: rgba(232,134,42,0.04);
          color: rgba(240,236,229,0.55);
          transition: all 0.25s cubic-bezier(.22,1,.36,1);
        }
        .sl-social-link:hover {
          border-color: rgba(232,134,42,0.30);
          color: #E8862A;
        }
        .sl-contact-link {
          display: block;
          transition: opacity 0.2s cubic-bezier(.22,1,.36,1);
        }
        .sl-contact-link:hover {
          opacity: 0.8;
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="pt-[140px] pb-16">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <ScrollReveal>
            <span className="g-label">CONTACT</span>

            <h1 className="g-title-hero font-serif">
              Parlons de votre projet.
            </h1>

            <p className="g-text mt-4 text-lg leading-relaxed max-w-xl mx-auto">
              Réservez un audit gratuit de 30 minutes. Nous analysons votre
              potentiel d&apos;acquisition digitale et vous présentons une
              stratégie sur mesure pour votre réseau.
            </p>

            <div className="g-line" />
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left — Form (3/5) */}
            <ScrollReveal className="lg:col-span-3">
              <div className="g-card p-8">
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right — Contact info (2/5) */}
            <ScrollReveal delay={0.15} className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="font-serif text-lg font-semibold" style={{ color: "#f0ece5" }}>
                  Coordonnées
                </h3>

                <ul className="space-y-4" role="list">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <li key={item.label} className="flex items-start gap-4">
                        <span className="g-icon-box">
                          <Icon className="h-5 w-5" style={{ color: "#E8862A" }} />
                        </span>
                        <div>
                          <p className="g-text-muted text-[11px] font-semibold uppercase tracking-[0.08em]">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium" style={{ color: "#f0ece5" }}>
                            {item.value}
                          </p>
                        </div>
                      </li>
                    );

                    if (item.href) {
                      return (
                        <a key={item.label} href={item.href} className="sl-contact-link">
                          {content}
                        </a>
                      );
                    }

                    return content;
                  })}
                </ul>

                {/* Social links */}
                <div>
                  <p className="g-text-muted text-[11px] font-semibold uppercase tracking-[0.08em] mb-3">
                    Réseaux sociaux
                  </p>
                  <div className="flex gap-3">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/scalify-labs"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="sl-social-link"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/scalify.ma"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="sl-social-link"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Guarantee note */}
                <div className="g-card p-5">
                  <p className="g-text text-sm leading-relaxed">
                    <span className="font-semibold" style={{ color: "#f0ece5" }}>
                      Réponse garantie sous 24h
                    </span>{" "}
                    &bull; Sans engagement
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
