import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  DM_Sans,
  JetBrains_Mono,
  Playfair_Display,
  Instrument_Serif,
  Inter_Tight,
  Fraunces,
} from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scalify Labs — Agence média indépendante",
  description:
    "Nous pilotons vos campagnes Meta et Google Ads comme un véritable actif : tracking serveur, arbitrages quotidiens, reporting transparent.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scalify Labs",
  url: "https://scalifylabs.com",
  logo: "https://scalifylabs.com/assets/logo-scalify-cropped.png",
  description:
    "Agence média indépendante — acquisition payante, tracking serveur, reporting transparent.",
  sameAs: [
    "https://www.linkedin.com/company/scalify-labs",
    "https://www.instagram.com/scalifylabs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakartaSans.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${instrumentSerif.variable} ${interTight.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
