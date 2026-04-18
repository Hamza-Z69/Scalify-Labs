# SCALIFY — Cahier des Charges Complet pour le Site Web

## Document de référence pour Claude Code
**Version:** 1.0
**Date:** Avril 2026
**Auteur:** Hamza — Fondateur de Scalify
**Objectif:** Construire un site web premium, moderne et conversion-oriented pour positionner Scalify comme l'agence de référence en acquisition digitale pour les réseaux de franchise au Maroc et en Afrique.

---

## TABLE DES MATIÈRES

1. [Contexte & Positionnement](#1-contexte--positionnement)
2. [Objectifs du Site](#2-objectifs-du-site)
3. [Architecture du Site (Sitemap)](#3-architecture-du-site-sitemap)
4. [Design System & Direction Artistique](#4-design-system--direction-artistique)
5. [Contenu Détailé par Page](#5-contenu-détaillé-par-page)
6. [Composants UI Réutilisables](#6-composants-ui-réutilisables)
7. [Animations & Micro-interactions](#7-animations--micro-interactions)
8. [SEO & Performance](#8-seo--performance)
9. [Stack Technique](#9-stack-technique)
10. [Responsive & Mobile-First](#10-responsive--mobile-first)
11. [Intégrations](#11-intégrations)
12. [Multilingue](#12-multilingue)
13. [Guidelines de Contenu (Tone of Voice)](#13-guidelines-de-contenu-tone-of-voice)
14. [Checklist de Livraison](#14-checklist-de-livraison)

---

## 1. CONTEXTE & POSITIONNEMENT

### 1.1 Qui est Scalify ?

Scalify est une agence de marketing digital basée au Maroc, spécialisée dans l'acquisition digitale pour les réseaux de franchise. L'agence intervient sur deux axes majeurs :

- **Recrutement de franchisés** (acquisition B2B) : Générer des candidatures qualifiées de futurs franchisés pour les enseignes qui souhaitent développer leur réseau au Maroc et en Afrique.
- **Génération de trafic local** (acquisition B2C) : Créer des campagnes publicitaires localisées pour chaque point de vente franchisé afin de générer du trafic client et des ventes.

En complément, Scalify propose des services d'accompagnement digital global : brand image, création de sites web, et stratégie digitale.

### 1.2 Proposition de valeur unique (USP)

> **"L'agence qui parle franchise."**

Scalify se différencie des agences généralistes par :
- Une expertise sectorielle franchise (B2B recrutement franchisés + B2C trafic local)
- Une connaissance approfondie du marché marocain et africain
- L'utilisation de l'IA pour accélérer la mise en place et l'optimisation des campagnes
- Un rapport qualité/prix imbattable grâce à sa base marocaine
- Une approche data-driven avec reporting transparent

### 1.3 Cibles prioritaires

| Cible | Profil | Besoin principal |
|-------|--------|-----------------|
| **Franchiseurs internationaux** | Enseignes FR/EU/US qui veulent s'implanter au Maroc | Trouver des franchisés qualifiés localement |
| **Franchiseurs marocains** | Marques locales en structuration réseau | Recruter des franchisés + digitaliser l'acquisition |
| **Réseaux existants** | Enseignes avec 5-50+ points de vente | Générer du trafic local pour chaque point de vente |
| **Master franchisés** | Opérateurs multi-sites | Optimiser la performance digitale du réseau |

### 1.4 Concurrence & différenciation

Les concurrents directs sont :
- **Agences spé franchise françaises** (Franchise Management, Progressium) → Cher, pas sur le terrain marocain
- **Agences digitales marocaines généralistes** → Pas d'expertise franchise
- **Freelances / traffic managers** → Pas de structure, pas de vision stratégique

**Scalify occupe un espace vide** : expertise franchise + présence locale Maroc + tarifs compétitifs + IA.

---

## 2. OBJECTIFS DU SITE

### 2.1 Objectifs business

1. **Générer des leads qualifiés** : Franchiseurs et réseaux qui cherchent un partenaire acquisition
2. **Établir la crédibilité** : Positionner Scalify comme expert sectoriel franchise
3. **Éduquer le marché** : Montrer la valeur de l'acquisition digitale aux franchiseurs
4. **Convertir les visiteurs en rendez-vous** : Chaque page doit pousser vers un CTA

### 2.2 KPIs du site

- Taux de conversion visiteur → lead : objectif 3-5%
- Nombre de demandes de rendez-vous / mois
- Temps passé sur le site (engagement)
- Pages vues par session
- Taux de rebond < 40%

### 2.3 Parcours utilisateur cible

```
Arrivée (LinkedIn / Google / Référence)
    → Homepage (comprend immédiatement ce que fait Scalify)
    → Page Service pertinente (découvre l'offre en détail)
    → Étude de cas (voit les résultats concrets)
    → Page Contact / Audit gratuit (convertit)
```

---

## 3. ARCHITECTURE DU SITE (SITEMAP)

```
scalify.ma/
│
├── / (Homepage)
│
├── /services/
│   ├── /services/recrutement-franchises (Acquisition B2B franchisés)
│   ├── /services/trafic-local (Acquisition B2C points de vente)
│   ├── /services/accompagnement-digital (Stratégie, branding, sites)
│   └── /services/ia-performance (IA & automatisation publicitaire)
│
├── /cas-clients/ (Études de cas / Portfolio)
│   ├── /cas-clients/[slug-etude-1]
│   └── /cas-clients/[slug-etude-2]
│
├── /franchise-maroc/ (Page pilier SEO — Le guide de la franchise au Maroc)
│
├── /a-propos/ (L'agence, l'équipe, les valeurs)
│
├── /blog/ (Articles SEO + expertise)
│   └── /blog/[slug-article]
│
├── /contact/ (Formulaire + Audit gratuit)
│
├── /mentions-legales
└── /politique-confidentialite
```

### 3.1 Navigation principale (Header)

```
[LOGO Scalify]    Services ▾    Cas clients    Franchise Maroc    À propos    Blog    [CTA: Audit Gratuit]
```

- "Services" est un dropdown avec les 4 sous-pages
- Le CTA "Audit Gratuit" est toujours visible, bouton plein (filled)
- Navigation sticky au scroll avec fond blur/glassmorphism

### 3.2 Navigation footer

```
─────────────────────────────────────────────────────────
SCALIFY                          Services               Ressources            Contact
L'acquisition digitale           Recrutement franchisés  Blog                  hello@scalify.ma
au service de votre réseau.      Trafic local            Guide Franchise       +212 XXX XXX XXX
                                 Accompagnement digital  Cas clients           Casablanca, Maroc
[LinkedIn] [Instagram]           IA & Performance        
─────────────────────────────────────────────────────────
© 2026 Scalify. Tous droits réservés.  Mentions légales  |  Politique de confidentialité
```

---

## 4. DESIGN SYSTEM & DIRECTION ARTISTIQUE

### 4.1 Direction créative

**Concept : "Premium Intelligence"**

Le site doit dégager une impression de **sophistication technologique** et de **confiance professionnelle**. On est entre le monde corporate de la franchise (sérieux, résultats, chiffres) et l'innovation tech (IA, data, automatisation). Le design doit être audacieux sans être flashy, élégant sans être froid.

**Moodboard mental :**
- L'élégance de Stripe.com (clarté, espaces, typographie)
- La puissance visuelle de Linear.app (dark mode, animations fluides)
- Le storytelling de Rally.co (narration scroll-driven)
- La crédibilité de McKinsey Digital (data, expertise, cas clients)

**Ambiance :**
- Dark mode par défaut (fond sombre profond) avec possibilité light mode
- Accents de couleur vifs et lumineux sur fond sombre
- Typographie premium avec paires de fonts distinctives
- Animations fluides et intentionnelles (pas de gratuit)
- Utilisation de gradients subtils, grain textures, glassmorphism

### 4.2 Palette de couleurs

```css
:root {
  /* === FOND === */
  --bg-primary: #0A0A0F;        /* Noir profond bleuté — fond principal */
  --bg-secondary: #12121A;      /* Noir légèrement plus clair — sections alternées */
  --bg-tertiary: #1A1A28;       /* Fond cartes et éléments surélevés */
  --bg-surface: #222233;        /* Surface interactive (hover, inputs) */

  /* === ACCENT PRINCIPAL — Bleu électrique === */
  --accent-primary: #4F6BFF;    /* Bleu principal — CTAs, liens, éléments actifs */
  --accent-primary-hover: #6B83FF;
  --accent-primary-glow: rgba(79, 107, 255, 0.15); /* Pour les effets glow */

  /* === ACCENT SECONDAIRE — Cyan / Turquoise === */
  --accent-secondary: #00D4AA;  /* Vert-cyan — Succès, métriques positives, highlights */
  --accent-secondary-hover: #00E8BB;
  --accent-secondary-glow: rgba(0, 212, 170, 0.15);

  /* === ACCENT TERTIAIRE — Violet === */
  --accent-tertiary: #8B5CF6;   /* Violet — Tags, badges, éléments décoratifs */

  /* === GRADIENT SIGNATURE === */
  --gradient-hero: linear-gradient(135deg, #4F6BFF 0%, #00D4AA 50%, #8B5CF6 100%);
  --gradient-text: linear-gradient(90deg, #4F6BFF, #00D4AA); /* Pour textes gradient */
  --gradient-card: linear-gradient(145deg, rgba(79,107,255,0.08), rgba(0,212,170,0.08));
  --gradient-cta: linear-gradient(135deg, #4F6BFF, #6B83FF);

  /* === TEXTE === */
  --text-primary: #F0F0F5;      /* Blanc cassé — Titres, texte principal */
  --text-secondary: #A0A0B8;    /* Gris lavande — Texte secondaire, descriptions */
  --text-tertiary: #6B6B80;     /* Gris sombre — Labels, captions, meta */
  --text-inverse: #0A0A0F;      /* Pour texte sur fond clair (boutons) */

  /* === BORDURES & SÉPARATEURS === */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-default: rgba(255, 255, 255, 0.10);
  --border-hover: rgba(255, 255, 255, 0.15);

  /* === EFFETS === */
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.3);
  --shadow-elevated: 0 8px 48px rgba(0, 0, 0, 0.4);
  --shadow-glow-blue: 0 0 30px rgba(79, 107, 255, 0.2);
  --shadow-glow-cyan: 0 0 30px rgba(0, 212, 170, 0.2);

  /* === GLASS === */
  --glass-bg: rgba(18, 18, 26, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-blur: blur(20px);
}
```

#### Light mode (optionnel, toggle en haut)
```css
[data-theme="light"] {
  --bg-primary: #FAFAFE;
  --bg-secondary: #F0F0F5;
  --bg-tertiary: #FFFFFF;
  --bg-surface: #E8E8F0;
  --text-primary: #0A0A0F;
  --text-secondary: #4A4A60;
  --text-tertiary: #8888A0;
  --border-subtle: rgba(0, 0, 0, 0.06);
  --border-default: rgba(0, 0, 0, 0.10);
  /* Accents restent les mêmes */
}
```

### 4.3 Typographie

**Option recommandée :**

```css
/* Display / Titres — Font distinctive et premium */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

/* Body / Texte courant — Lisible et moderne */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

:root {
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace; /* Pour les chiffres/métriques */
}
```

**Alternatives acceptables :**
- Display : Clash Display, Satoshi, General Sans, Cabinet Grotesk
- Body : Outfit, Manrope, Sora

**INTERDIT :** Inter, Roboto, Arial, Open Sans, Lato, Montserrat (trop génériques, "AI slop")

**Échelle typographique :**

```css
/* Mobile-first, puis responsive */
--text-hero: clamp(2.5rem, 5vw, 4.5rem);      /* H1 Hero — Très grand, impactant */
--text-h1: clamp(2rem, 4vw, 3.5rem);           /* H1 pages intérieures */
--text-h2: clamp(1.5rem, 3vw, 2.5rem);         /* H2 sections */
--text-h3: clamp(1.25rem, 2vw, 1.75rem);       /* H3 sous-sections */
--text-h4: clamp(1.1rem, 1.5vw, 1.35rem);      /* H4 */
--text-body: 1rem;                               /* 16px — Corps de texte */
--text-body-lg: 1.125rem;                        /* 18px — Intros, leads */
--text-small: 0.875rem;                          /* 14px — Captions, meta */
--text-xs: 0.75rem;                              /* 12px — Labels, badges */

/* Line heights */
--leading-tight: 1.1;    /* Titres */
--leading-normal: 1.6;   /* Corps de texte */
--leading-relaxed: 1.8;  /* Paragraphes longs */

/* Letter spacing */
--tracking-tight: -0.02em;   /* Titres grands */
--tracking-normal: 0;
--tracking-wide: 0.05em;     /* Labels, uppercase */
--tracking-wider: 0.1em;     /* Tags, badges uppercase */
```

### 4.4 Espacement

```css
--space-xs: 0.25rem;     /* 4px */
--space-sm: 0.5rem;      /* 8px */
--space-md: 1rem;        /* 16px */
--space-lg: 1.5rem;      /* 24px */
--space-xl: 2rem;        /* 32px */
--space-2xl: 3rem;       /* 48px */
--space-3xl: 4rem;       /* 64px */
--space-4xl: 6rem;       /* 96px */
--space-5xl: 8rem;       /* 128px */
--space-section: clamp(4rem, 8vw, 8rem);  /* Espacement entre sections */
```

### 4.5 Bordures & Rayons

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;   /* Pills, badges */
```

### 4.6 Iconographie

- Utiliser **Lucide Icons** (cohérent, clean, open source)
- Style : stroke 1.5px, taille 20-24px par défaut
- Les icônes de service peuvent être customisées avec des effets glow

---

## 5. CONTENU DÉTAILLÉ PAR PAGE

### 5.1 HOMEPAGE ( / )

La homepage est la page la plus importante. Elle doit communiquer immédiatement ce que fait Scalify, pour qui, et pourquoi on est différent.

#### SECTION 1 — Hero

```
STRUCTURE :
[Nav sticky]

[Petite ligne d'accroche en haut — badge/pill animé]
🚀 L'agence #1 en acquisition digitale pour les franchises au Maroc

[Titre Hero — très grand, impactant]
Développez votre réseau
de franchise avec le digital.

[Sous-titre — 2 lignes max]
Scalify aide les franchiseurs à recruter des franchisés qualifiés
et à générer du trafic pour chaque point de vente.

[2 CTAs côte à côte]
[Demander un audit gratuit]  (bouton plein, accent primary)
[Voir nos résultats →]       (bouton outline/ghost)

[En dessous — Social proof discret]
+50 campagnes gérées  •  +3M MAD de budget optimisé  •  Maroc & Afrique
```

**Notes design :**
- Le titre hero peut utiliser un gradient text sur le mot "franchise" ou "digital"
- Background : grid subtile animée ou particules très discrètes, grain texture
- Les chiffres de social proof doivent utiliser la font mono et un effet de count-up au scroll
- Le badge en haut peut avoir un effet pulse/glow

#### SECTION 2 — Problématique / Pain Points

```
STRUCTURE :
[Titre de section]
Les défis des franchiseurs aujourd'hui

[3 cards en grid, avec icônes]

Card 1 : "Recruter les bons franchisés"
Les méthodes traditionnelles (salons, bouche-à-oreille) ne suffisent plus.
Le digital permet de cibler précisément les profils d'investisseurs qualifiés.

Card 2 : "Générer du trafic pour chaque point de vente"
Chaque franchisé a besoin de clients. Les campagnes nationales ne suffisent pas,
il faut une stratégie locale, point de vente par point de vente.

Card 3 : "Piloter la performance du réseau"
Sans data centralisée ni reporting unifié, impossible de savoir
quels points de vente performent et lesquels ont besoin de soutien.
```

**Notes design :**
- Cards avec bordure subtile, effet glow au hover
- Icônes custom avec couleur accent
- Alternance de fond (bg-secondary)

#### SECTION 3 — Services (Aperçu)

```
STRUCTURE :
[Titre section]
Ce que nous faisons

[Sous-titre]
Trois leviers d'acquisition pour votre réseau

[3 grandes cards ou blocs côte à côte, chacun cliquable vers la page service]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Recrutement de Franchisés

Nous générons des candidatures de franchisés
qualifiés via Meta Ads, Google Ads et LinkedIn.
Ciblage précis, coût par lead maîtrisé.

[En savoir plus →]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Trafic Local par Point de Vente

Campagnes géolocalisées pour chaque franchisé.
Plus de clients en magasin, plus de commandes en ligne.
Résultats mesurables par point de vente.

[En savoir plus →]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 IA & Performance

Monitoring automatisé, alertes proactives,
mise en place accélérée. L'IA au service
de la performance de votre réseau.

[En savoir plus →]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Notes design :**
- Chaque card peut avoir un numéro décoratif (01, 02, 03) en grand et semi-transparent
- Effet hover : léger mouvement + glow de la bordure
- Les icônes peuvent être remplacées par des illustrations abstraites custom

#### SECTION 4 — Chiffres / Résultats

```
STRUCTURE :
[Bandeau ou section à fond contrasté]
[Titre] Des résultats mesurables

[4 métriques en ligne, grands chiffres]

+50           3M+ MAD         -40%           +200%
Campagnes     Budget          Coût par       Taux de
gérées        optimisé        lead           conversion
```

**Notes design :**
- Chiffres en font mono, très grands (4-5rem)
- Animation count-up quand la section entre dans le viewport
- Fond avec gradient subtil ou pattern
- Ligne de séparation ou bordures entre les métriques

#### SECTION 5 — Pourquoi Scalify (Différenciateurs)

```
STRUCTURE :
[Titre] Pourquoi les franchiseurs nous choisissent

[Grid 2x2 ou liste verticale]

✦ Experts franchise
Nous ne faisons pas "un peu de tout". Notre spécialité,
c'est l'acquisition pour les réseaux de franchise.

✦ Basés au Maroc, connectés au monde
Présents sur le terrain, au fuseau horaire de l'Europe,
avec un rapport qualité/prix imbattable.

✦ Propulsés par l'IA
Nos outils d'intelligence artificielle accélèrent
le setup, le monitoring et l'optimisation de vos campagnes.

✦ 100% transparent
Reporting en temps réel, accès à toutes les données,
pas de boîte noire. Vous voyez tout.
```

#### SECTION 6 — Le marché franchise au Maroc (mini-section SEO)

```
STRUCTURE :
[Titre] Le Maroc, terre de franchise

[Texte court + chiffres clés sur le marché]

745 réseaux de franchise actifs
+25% de croissance annuelle sur 15 ans
20 milliards MAD de volume d'affaires
Coupe du Monde 2030 : un accélérateur majeur

[CTA] Découvrir notre guide complet sur la franchise au Maroc →
```

**Notes design :**
- Peut inclure une carte stylisée du Maroc avec les villes principales
- Chiffres animés
- Lien vers la page pilier /franchise-maroc/

#### SECTION 7 — Cas client en vedette (Teaser)

```
STRUCTURE :
[Titre] Ils nous font confiance

[1 étude de cas mise en avant avec résultat]

"Grâce à Scalify, nous avons recruté 12 franchisés
qualifiés en 6 mois avec un coût par candidature
divisé par 3."

— [Nom], [Titre], [Enseigne]

[Résultats clés]
CPL : 45 MAD (vs 135 MAD avant)
Candidatures qualifiées : 234
Franchisés signés : 12

[Voir toutes nos études de cas →]
```

**Notes design :**
- Grande citation avec guillemets décoratifs
- Photo ou logo du client si disponible
- Cards de résultat avec icônes check/trending up

#### SECTION 8 — CTA Final

```
STRUCTURE :
[Fond accent gradient ou image stylisée]

[Titre] Prêt à développer votre réseau ?

[Sous-titre] Réservez un audit gratuit de 30 minutes.
Nous analysons votre potentiel d'acquisition digitale.

[CTA gros bouton] Réserver mon audit gratuit

[Texte micro] Sans engagement • Réponse sous 24h
```

**Notes design :**
- Section pleine largeur avec gradient signature
- Bouton CTA large, blanc sur fond coloré ou inversé
- Éventuellement un formulaire email simplifié inline

#### SECTION 9 — Footer

Voir structure en section 3.2.

---

### 5.2 PAGE SERVICE — Recrutement de Franchisés ( /services/recrutement-franchises )

```
HERO :
[Badge] Acquisition B2B

[Titre] Trouvez vos futurs franchisés.

[Sous-titre]
Nous créons des campagnes digitales ciblées pour attirer
des candidats investisseurs qualifiés pour votre réseau.

[CTA] Demander un audit gratuit

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Le problème
Titre : Le recrutement de franchisés à l'ancienne ne suffit plus

- Les salons franchise coûtent cher et ne génèrent pas assez de volume
- Le bouche-à-oreille est aléatoire et non scalable
- Les portails franchise en ligne génèrent des leads peu qualifiés
- Vous perdez du temps avec des candidats qui n'ont pas le profil

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Notre approche
Titre : Comment nous recrutons vos franchisés

[Process en 4 étapes visuelles, timeline verticale ou horizontale]

Étape 1 : Audit & Stratégie
Analyse de votre concept, profil franchisé idéal,
zones géographiques cibles, budget recommandé.

Étape 2 : Création des campagnes
Rédaction des annonces, création des visuels,
landing pages dédiées, setup tracking.
Canaux : Meta Ads, Google Ads, LinkedIn Ads.

Étape 3 : Lancement & Optimisation
Déploiement, A/B testing continu,
optimisation des audiences et des enchères.
Monitoring quotidien.

Étape 4 : Qualification & Reporting
Leads qualifiés transmis en temps réel.
Reporting hebdomadaire avec KPIs clairs :
CPL, taux de qualification, coût par franchisé signé.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Canaux & Plateformes
[Logos ou icônes] Meta Ads • Google Ads • LinkedIn Ads • Landing Pages

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Résultats types
[3 métriques]
CPL moyen : 35-80 MAD
Taux de qualification : 25-40%
Délai premier lead : < 7 jours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — FAQ
[Accordion]
- Quel budget minimum pour recruter des franchisés ?
- Combien de temps avant les premiers résultats ?
- Quels profils de franchisés pouvez-vous cibler ?
- Travaillez-vous avec des franchises internationales ?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — CTA
[Même CTA final que homepage, adapté au contexte]
```

### 5.3 PAGE SERVICE — Trafic Local ( /services/trafic-local )

```
HERO :
[Badge] Acquisition B2C

[Titre] Plus de clients pour chaque point de vente.

[Sous-titre]
Campagnes géolocalisées, personnalisées par zone,
pour chaque franchisé de votre réseau.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Le défi
Titre : Un réseau, des dizaines de zones de chalandise

Chaque point de vente a sa propre zone, sa propre concurrence,
ses propres enjeux. Une campagne nationale ne suffit pas.
Il faut penser local, agir local, mesurer local.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Notre approche
[4 étapes similaires adaptées B2C]

1. Mapping du réseau — Analyse des zones de chalandise, concurrence locale
2. Stratégie par point de vente — Budget, canaux, messages adaptés
3. Déploiement multi-local — Campagnes par zone avec créatifs localisés
4. Reporting réseau — Dashboard unifié + vue par point de vente

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Cas d'usage
- Lancement d'un nouveau point de vente
- Offre promotionnelle locale
- Saisonnalité (rentrée, soldes, Ramadan, etc.)
- Drive-to-store pour augmenter la fréquentation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Résultats + FAQ + CTA (même structure)
```

### 5.4 PAGE SERVICE — Accompagnement Digital ( /services/accompagnement-digital )

```
HERO :
[Badge] Stratégie Digitale

[Titre] Votre image de marque, partout.

[Sous-titre]
Sites web, identité visuelle, stratégie de contenu.
Nous construisons la présence digitale de votre réseau.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Services inclus
[Grid de cards]

- Création de sites web (vitrine, multi-pages, landing pages)
- Identité visuelle & charte graphique
- Gestion des réseaux sociaux
- Création de contenu (posts, vidéos, stories)
- Brand guidelines pour réseaux de franchise

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Pourquoi c'est important pour une franchise
Un réseau de franchise doit avoir une image cohérente
sur tous ses points de vente. Nous créons les assets
et les guidelines qui garantissent cette cohérence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CTA
```

### 5.5 PAGE SERVICE — IA & Performance ( /services/ia-performance )

```
HERO :
[Badge] Intelligence Artificielle

[Titre] L'IA au service de votre réseau.

[Sous-titre]
Setup accéléré, monitoring intelligent, optimisation continue.
Nous utilisons l'intelligence artificielle pour maximiser
la performance de vos campagnes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Ce que l'IA change concrètement

[Avant / Après — tableau comparatif ou split view]

AVANT (sans IA) :
- Setup campagne : 3-5 jours
- Monitoring : vérification manuelle quotidienne
- Alertes : aucune, on découvre les problèmes après
- Reporting : tableaux Excel manuels

APRÈS (avec Scalify + IA) :
- Setup campagne : quelques heures
- Monitoring : continu et automatisé 24/7
- Alertes : notification proactive si anomalie détectée
- Reporting : dashboards en temps réel, générés automatiquement

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Comment ça fonctionne
[Schéma visuel / infographie]

Vos données → Nos agents IA → Analyse continue → Actions & Alertes → Résultats optimisés

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Bénéfices
- 3x plus rapide sur le setup de campagnes
- Détection d'anomalies en temps réel
- Optimisation budgétaire automatique
- Reporting client automatisé

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CTA
```

### 5.6 PAGE CAS CLIENTS ( /cas-clients/ )

```
HERO :
[Titre] Nos résultats parlent d'eux-mêmes.
[Sous-titre] Découvrez comment nous aidons les réseaux de franchise
à accélérer leur croissance digitale.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Grid de cards — études de cas]

Chaque card :
- Logo ou visuel du client
- Nom de l'enseigne
- Secteur + pays
- Résultat clé (ex: "CPL divisé par 3")
- [Lire l'étude de cas →]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAGE INDIVIDUELLE D'ÉTUDE DE CAS :

Structure type :
1. Contexte — Qui est le client, quel était son challenge
2. Objectifs — Ce qu'il voulait atteindre
3. Stratégie — Ce que Scalify a mis en place
4. Résultats — Chiffres clés, avant/après
5. Témoignage — Citation du client
6. CTA — "Vous voulez des résultats similaires ?"
```

### 5.7 PAGE PILIER — Franchise au Maroc ( /franchise-maroc/ )

**Objectif :** Page SEO longue pour capter le trafic organique sur les requêtes franchise Maroc.

```
HERO :
[Titre] Le guide complet de la franchise au Maroc

[Sous-titre] Tout ce qu'un franchiseur doit savoir pour développer
son réseau sur le marché marocain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Table des matières sticky sur le côté — navigation intra-page]

SECTIONS :

1. Le marché de la franchise au Maroc en chiffres
   - 745 réseaux actifs, +25%/an, 20 milliards MAD
   - Secteurs porteurs : restauration, textile, beauté, fitness, éducation
   - Répartition géographique (Casablanca 30%, puis Rabat, Marrakech, Tanger...)

2. Pourquoi le Maroc est un marché attractif
   - Classe moyenne en croissance
   - Urbanisation rapide
   - Coupe du Monde 2030
   - Position géographique (hub vers l'Afrique)
   - Stabilité politique et économique

3. Cadre juridique de la franchise au Maroc
   - Pas de loi spécifique mais droit commun des contrats
   - Code de commerce, loi sur la concurrence
   - Protection de la propriété industrielle
   - Les obligations contractuelles clés

4. Les modèles d'implantation
   - Franchise directe
   - Master franchise
   - Succursale
   - Joint-venture
   - Comparatif avantages/inconvénients

5. Comment recruter des franchisés au Maroc
   - Profil type du franchisé marocain
   - Canaux de recrutement
   - Budget et investissement initial moyen
   - Le rôle du digital dans le recrutement

6. Les villes à cibler
   - Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir
   - Villes secondaires en croissance : Kénitra, Meknès, Oujda, Tétouan

7. Le salon Franchise Exhibition Morocco
   - Présentation de l'événement annuel
   - Chiffres clés de l'édition 2025 et 2026

8. Comment Scalify accompagne les franchiseurs au Maroc
   - [Transition vers offre commerciale, CTA]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CTA : "Vous souhaitez développer votre franchise au Maroc ?
      Parlons de votre projet."
```

### 5.8 PAGE À PROPOS ( /a-propos/ )

```
HERO :
[Titre] L'agence qui parle franchise.

[Sous-titre] Scalify est née d'une conviction :
les réseaux de franchise méritent un partenaire digital
qui comprend leur métier.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Notre histoire
[Texte narratif court]
Fondée en 2026 à Casablanca, Scalify est née de l'expertise
de son fondateur en acquisition digitale pour les réseaux de franchise.
Après des années à gérer des campagnes pour des enseignes en France,
Hamza a fondé Scalify avec une mission claire : rendre l'acquisition
digitale accessible et performante pour les franchiseurs
qui veulent se développer au Maroc et en Afrique.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Nos valeurs
[3-4 valeurs avec descriptions courtes]

Expertise > Généralisme
Transparence > Boîte noire
Innovation > Status quo
Résultats > Promesses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — L'équipe
[Photo + bio courte du fondateur]
[Si pertinent : postes clés ou mention "équipe en croissance"]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION — Nos partenaires technologiques
[Logos] Meta Business Partner • Google Partner • LinkedIn Marketing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CTA
```

### 5.9 PAGE BLOG ( /blog/ )

```
HERO :
[Titre] Insights & Expertise
[Sous-titre] Nos articles sur l'acquisition digitale,
la franchise et le marché marocain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Grid de cards articles — 2 ou 3 colonnes]

Chaque card :
- Image ou illustration
- Catégorie (tag coloré)
- Titre de l'article
- Date + temps de lecture
- Extrait (2 lignes)
- [Lire →]

[Catégories filtres]
Tout • Franchise • Acquisition • Meta Ads • Google Ads • Marché Maroc • IA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAGE ARTICLE INDIVIDUEL :
- Header avec image/illustration
- Titre + date + temps de lecture + auteur
- Table des matières sticky (si article long)
- Contenu riche : texte, images, chiffres, citations
- CTA en fin d'article
- Articles liés en bas
```

### 5.10 PAGE CONTACT ( /contact/ )

```
HERO :
[Titre] Parlons de votre projet.

[Sous-titre] Réservez un audit gratuit de 30 minutes.
Nous analysons votre potentiel d'acquisition digitale
et vous présentons une stratégie sur mesure.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Layout 2 colonnes]

COLONNE GAUCHE — Formulaire
Champs :
- Nom complet
- Email professionnel
- Téléphone
- Nom de l'enseigne / entreprise
- Type de projet (dropdown) :
  • Recrutement de franchisés
  • Trafic local points de vente
  • Accompagnement digital
  • Autre
- Message / Détails du projet (textarea)
- Budget indicatif (dropdown optionnel) :
  • < 10 000 MAD/mois
  • 10 000 - 30 000 MAD/mois
  • 30 000 - 100 000 MAD/mois
  • > 100 000 MAD/mois
- [Bouton] Envoyer ma demande

COLONNE DROITE — Informations
- Email : hello@scalify.ma
- Téléphone : +212 XXX XXX XXX
- Adresse : Casablanca, Maroc
- LinkedIn : linkedin.com/company/scalify
- Instagram : @scalify.ma
- Horaires : Lun-Ven, 9h-18h (GMT+1)

[Note en bas] Réponse garantie sous 24h • Sans engagement
```

---

## 6. COMPOSANTS UI RÉUTILISABLES

### 6.1 Boutons

```
PRIMARY    → Fond accent-primary, texte blanc, radius-lg, padding 14px 28px
             Hover : légère montée (translateY -2px) + shadow glow
             Active : légère descente

SECONDARY  → Fond transparent, bordure accent-primary, texte accent-primary
             Hover : fond accent-primary-glow

GHOST      → Pas de bordure, texte accent-primary, underline au hover
             Avec flèche → animée au hover

LARGE CTA  → Version XL du primary, padding 18px 36px, font-size 1.125rem

DISABLED   → Opacité 0.5, cursor not-allowed
```

### 6.2 Cards

```
CARD SERVICE :
- Fond bg-tertiary, bordure border-subtle
- Padding 32px, radius-lg
- Icône + Titre (h3) + Description + Lien
- Hover : bordure border-hover + shadow-card + légère montée

CARD ÉTUDE DE CAS :
- Image en haut (ratio 16:9), radius-lg overflow hidden
- Padding 24px en bas
- Logo client + Titre + Résultat clé + [Lire →]
- Hover : image zoom légèrement (scale 1.03)

CARD ARTICLE BLOG :
- Image (ratio 3:2)
- Tag catégorie (pill colored)
- Titre + date + excerpt
- Hover : titre change de couleur

CARD MÉTRIQUE :
- Fond transparent ou bg-tertiary
- Grand chiffre (font mono, text-h1, couleur accent)
- Label en dessous (text-small, text-tertiary)
- Bordure left accent-primary (4px)
```

### 6.3 Badges / Pills

```
- Fond semi-transparent de la couleur accent correspondante
- Texte uppercase, tracking-wider, text-xs, font-weight 600
- Padding 6px 14px, radius-full
- Variantes : blue, cyan, violet, outline
```

### 6.4 Sections

```
SECTION STANDARD :
- max-width 1200px, centered
- Padding section : space-section vertical
- Titre section : text-h2, font-display, font-weight 700
- Sous-titre : text-body-lg, text-secondary, max-width 600px

SECTION FULL-WIDTH :
- Fond bg-secondary ou gradient
- Contenu interne max-width 1200px

SECTION CTA :
- Fond gradient-hero ou image + overlay
- Texte centré, blanc
- Grand bouton inversé
```

### 6.5 FAQ Accordion

```
- Bordure-bottom entre les items
- Question : font-weight 600, clickable, avec icône +/- ou chevron
- Réponse : text-secondary, animation slide-down smooth
- Active : icône tourne, couleur accent sur la question
```

### 6.6 Process / Timeline

```
HORIZONTAL (desktop) :
[01]────────[02]────────[03]────────[04]
Audit       Création    Lancement   Reporting
             campagnes  & Opti

VERTICAL (mobile) :
│ 01 ── Audit & Stratégie
│      Description...
│
│ 02 ── Création des campagnes
│      Description...
│
│ etc.

- Numéros en accent-primary, font-mono
- Ligne de connexion avec animation de progression au scroll
```

### 6.7 Navbar

```
- Sticky au top
- Fond glass (bg transparent + backdrop-blur)
- Bordure-bottom border-subtle
- Logo à gauche
- Liens au centre
- CTA bouton à droite
- Mobile : hamburger → sidebar ou fullscreen menu
- Transition : fond devient plus opaque au scroll
```

---

## 7. ANIMATIONS & MICRO-INTERACTIONS

### 7.1 Principes

- **Intentionnelles** : chaque animation a un but (guider l'attention, feedback, delight)
- **Fluides** : easing custom (cubic-bezier), jamais linear
- **Subtiles par défaut** : le contenu prime sur l'animation
- **Performance** : uniquement transform et opacity pour les animations fréquentes
- **Respecter prefers-reduced-motion** : désactiver les animations si l'utilisateur le demande

### 7.2 Animations à implémenter

```css
/* Easing custom */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);

/* Durées */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-entrance: 600ms;
```

| Élément | Animation | Trigger |
|---------|-----------|---------|
| Titres de section | Fade-up (translateY 30px → 0, opacity 0 → 1) | Scroll into viewport |
| Cards | Staggered fade-up (delay 100ms entre chaque) | Scroll into viewport |
| Métriques (chiffres) | Count-up animé (0 → valeur finale) | Scroll into viewport |
| Boutons CTA | Subtle glow pulse continu | Toujours |
| Boutons hover | translateY(-2px) + shadow expand | Hover |
| Cards hover | Border glow + slight lift | Hover |
| Navigation | Fond opacity transition | Scroll |
| Badge hero | Subtle pulse/shimmer | Toujours |
| Page transitions | Fade cross-dissolve | Navigation |
| Cursor | Custom cursor (circle) sur desktop | Global |
| Images | Subtle parallax | Scroll |
| Progress bar | Slide-in depuis la gauche | Scroll into viewport |
| FAQ accordion | Slide-down + fade | Click |
| Menu mobile | Slide-in depuis droite + overlay | Click hamburger |
| Texte gradient hero | Subtle shimmer/shift des couleurs | Continu, lent |
| Logos partenaires | Scroll horizontal infini (marquee) | Toujours |

### 7.3 Scroll-triggered animations (Intersection Observer)

```javascript
// Utiliser IntersectionObserver ou une lib comme framer-motion (React)
// Threshold : 0.2 (déclencher quand 20% de l'élément est visible)
// Animation par défaut : fade-up avec stagger

// Classe CSS à ajouter sur les éléments :
// .reveal — Animation au scroll
// .reveal-stagger — Animation avec délai entre siblings
```

---

## 8. SEO & PERFORMANCE — EXIGENCE SCORE PARFAIT

> **⚠️ OBJECTIF NON NÉGOCIABLE : Le site DOIT obtenir un score Lighthouse de 100/100 sur les 4 catégories (Performance, Accessibility, Best Practices, SEO). Chaque page doit être testée et validée individuellement. Aucun compromis.**

### 8.0 POURQUOI C'EST CRITIQUE

Scalify est une agence de marketing digital. Un site mal noté en SEO ou en performance, c'est un anti-argument commercial immédiat. Le site Scalify doit être une vitrine technique irréprochable. Un franchiseur ou un concurrent qui passe le site dans Lighthouse ou PageSpeed Insights doit voir 100/100 partout.

### 8.1 SEO On-Page — Score SEO Lighthouse 100

**Structure titres (obligatoire sur chaque page) :**
- Chaque page a un seul H1 unique et descriptif
- H2 pour les sections principales
- H3 pour les sous-sections
- Ne JAMAIS sauter de niveaux (pas de H1 → H3 directement)
- L'ordre des headings doit être séquentiel dans le DOM

**Meta tags par page (tous obligatoires) :**

| Page | Title (max 60 car.) | Meta Description (max 155 car.) |
|------|-------|-----------------|
| Homepage | Scalify — Acquisition digitale pour réseaux de franchise | Scalify accompagne les franchiseurs dans le recrutement de franchisés et la génération de trafic local. Agence spécialisée franchise au Maroc. |
| Recrutement franchisés | Recrutement de franchisés par le digital — Scalify | Générez des candidatures de franchisés qualifiés via Meta Ads, Google Ads et LinkedIn. Résultats mesurables, coût par lead maîtrisé. |
| Trafic local | Trafic local pour réseaux de franchise — Scalify | Campagnes géolocalisées pour générer des clients dans chaque point de vente de votre réseau de franchise. |
| Accompagnement digital | Accompagnement digital pour franchises — Scalify | Sites web, identité visuelle et stratégie de contenu pour les réseaux de franchise. Cohérence de marque sur tous vos points de vente. |
| IA & Performance | IA & Performance publicitaire franchise — Scalify | Setup accéléré, monitoring intelligent et optimisation continue de vos campagnes franchise grâce à l'intelligence artificielle. |
| Cas clients | Études de cas franchise — Résultats Scalify | Découvrez comment Scalify aide les réseaux de franchise à recruter des franchisés et générer du trafic local. Résultats concrets. |
| Franchise Maroc | Guide de la franchise au Maroc 2026 — Scalify | Tout savoir sur le marché de la franchise au Maroc : chiffres clés, cadre juridique, opportunités et stratégie de développement réseau. |
| À propos | À propos de Scalify — Agence franchise Maroc | Découvrez Scalify, l'agence spécialisée en acquisition digitale pour les réseaux de franchise au Maroc et en Afrique. |
| Blog | Blog — Insights franchise & acquisition — Scalify | Articles et analyses sur l'acquisition digitale, le marché de la franchise au Maroc et les stratégies de développement réseau. |
| Contact | Contact — Audit gratuit franchise digital — Scalify | Réservez un audit gratuit de 30 minutes. Nous analysons votre potentiel d'acquisition digitale pour votre réseau de franchise. |

**Checklist SEO on-page (chaque page) :**
- [ ] `<title>` unique, mot-clé principal en premier, max 60 caractères
- [ ] `<meta name="description">` unique, contient le mot-clé, max 155 caractères, incite au clic
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` présent
- [ ] `<html lang="fr">` défini correctement
- [ ] Un seul `<h1>` par page, contenant le mot-clé principal
- [ ] Headings en ordre séquentiel (H1 → H2 → H3, jamais de saut)
- [ ] Tous les liens ont du texte descriptif (pas de "cliquez ici")
- [ ] Tous les `<img>` ont un attribut `alt` descriptif et pertinent
- [ ] Tous les `<img>` ont `width` et `height` explicites (évite le CLS)
- [ ] `<meta name="robots" content="index, follow">` sur les pages publiques
- [ ] `<link rel="canonical" href="...">` sur chaque page
- [ ] Pas de contenu dupliqué entre les pages
- [ ] Texte lisible (contraste suffisant, taille min 16px pour le body)

**Mots-clés cibles principaux :**

| Mot-clé | Volume estimé | Page cible | Priorité |
|---------|--------------|------------|----------|
| franchise maroc | Élevé | /franchise-maroc/ | ★★★ |
| ouvrir franchise maroc | Moyen | /franchise-maroc/ | ★★★ |
| développement franchise maroc | Moyen | /franchise-maroc/ | ★★★ |
| recrutement franchisés | Moyen | /services/recrutement-franchises | ★★★ |
| agence franchise maroc | Faible (niche) | Homepage | ★★★ |
| agence marketing franchise | Faible (niche) | Homepage | ★★ |
| franchise digital marketing | Faible | /services/recrutement-franchises | ★★ |
| trafic local franchise | Faible (niche) | /services/trafic-local | ★★ |
| acquisition franchisés | Faible | /services/recrutement-franchises | ★★ |
| salon franchise maroc 2026 | Saisonnier | /blog/ article dédié | ★ |
| franchise casablanca | Moyen | /franchise-maroc/ | ★★ |

**Stratégie de maillage interne (obligatoire) :**

Chaque page doit contenir au minimum 3 liens internes vers d'autres pages du site. Voici la matrice de liens :

```
Homepage → toutes les pages services + cas clients + franchise maroc
Services → cas clients liés + franchise maroc + contact
Cas clients → services liés + contact
Franchise Maroc → services + cas clients + contact + blog articles liés
Blog articles → services liés + franchise maroc + contact
À propos → services + contact
Contact → services (texte "découvrez nos services")
```

### 8.2 Technical SEO — Zéro erreur

**Fichiers obligatoires à générer :**

```
/sitemap.xml        → Auto-généré, mis à jour à chaque build
                       Inclut toutes les pages publiques
                       <lastmod> avec la vraie date de modification
                       <changefreq> et <priority> pour chaque URL

/robots.txt         → 
                       User-agent: *
                       Allow: /
                       Disallow: /api/
                       Sitemap: https://scalify.ma/sitemap.xml

/favicon.ico        → Favicon classique
/apple-touch-icon.png → 180x180
/icon-192.png       → PWA icon
/icon-512.png       → PWA icon
/site.webmanifest   → PWA manifest
```

**Open Graph + Twitter Card (chaque page) :**

```html
<!-- Open Graph -->
<meta property="og:title" content="[Title de la page]" />
<meta property="og:description" content="[Meta description]" />
<meta property="og:image" content="https://scalify.ma/og/[page-name].png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://scalify.ma/[path]" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_MA" />
<meta property="og:site_name" content="Scalify" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Title]" />
<meta name="twitter:description" content="[Description]" />
<meta name="twitter:image" content="https://scalify.ma/og/[page-name].png" />
```

**OG Images à générer :**
- Créer un template OG image brandé Scalify (1200x630px)
- Générer une OG image unique par page avec le titre de la page
- Utiliser `@vercel/og` ou `satori` pour la génération dynamique
- Format : PNG, optimisé, < 200KB

**Schema.org JSON-LD (obligatoire) :**

```javascript
// Homepage — Organization + LocalBusiness
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Scalify",
  "description": "Agence de marketing digital spécialisée dans l'acquisition pour les réseaux de franchise au Maroc",
  "url": "https://scalify.ma",
  "logo": "https://scalify.ma/logo.png",
  "image": "https://scalify.ma/og/homepage.png",
  "telephone": "+212XXXXXXXXX",
  "email": "hello@scalify.ma",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressCountry": "MA"
  },
  "areaServed": ["MA", "FR", "DZ", "TN", "SN", "CI"],
  "sameAs": [
    "https://linkedin.com/company/scalify",
    "https://instagram.com/scalify.ma"
  ],
  "serviceType": ["Franchise Development", "Digital Marketing", "Lead Generation"]
}

// Pages Services — Service schema
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Nom du service]",
  "description": "[Description]",
  "provider": { "@type": "Organization", "name": "Scalify" },
  "areaServed": { "@type": "Country", "name": "Morocco" },
  "serviceType": "[Type]"
}

// Articles Blog — Article schema
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Titre]",
  "description": "[Excerpt]",
  "author": { "@type": "Person", "name": "Hamza" },
  "publisher": { "@type": "Organization", "name": "Scalify" },
  "datePublished": "[Date]",
  "dateModified": "[Date]",
  "image": "[URL image]"
}

// Page Franchise Maroc — FAQPage schema (si FAQ incluse)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question]",
      "acceptedAnswer": { "@type": "Answer", "text": "[Réponse]" }
    }
  ]
}

// Breadcrumbs — sur toutes les pages sauf homepage
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://scalify.ma" },
    { "@type": "ListItem", "position": 2, "name": "[Page]", "item": "https://scalify.ma/[path]" }
  ]
}
```

**URLs :**
- Propres, descriptives, en minuscules, avec tirets
- Pas de trailing slash (ou toujours avec — être consistant)
- Redirections 301 si une URL change
- Pas de paramètres inutiles (?id=, ?ref=, etc.)

**Autres exigences techniques :**
- [ ] Pas de ressources bloquées par robots.txt
- [ ] Pas de pages orphelines (chaque page a au moins 1 lien entrant interne)
- [ ] Pas de liens cassés (404) — vérifier avec un crawler
- [ ] Pas de redirections en chaîne (A → B → C)
- [ ] Pas de contenu mixte (HTTP sur HTTPS)
- [ ] HTTPS obligatoire avec redirection HTTP → HTTPS
- [ ] Header `X-Robots-Tag` correctement configuré
- [ ] Pagination correcte si applicable (rel="next"/"prev" ou scroll infini)

### 8.3 Accessibilité — Score Lighthouse 100

**Exigences WCAG 2.1 AA obligatoires :**

- [ ] Ratio de contraste texte/fond ≥ 4.5:1 (texte normal) et ≥ 3:1 (texte large > 18px)
- [ ] Tous les éléments interactifs sont accessibles au clavier (Tab, Enter, Escape)
- [ ] Focus visible sur tous les éléments interactifs (outline ou ring custom, JAMAIS `outline: none` sans alternative)
- [ ] Tous les `<img>` ont un `alt` descriptif (ou `alt=""` si décoratif)
- [ ] Tous les `<svg>` ont un `role="img"` et `aria-label` ou sont marqués `aria-hidden="true"`
- [ ] Les formulaires ont des `<label>` associés à chaque `<input>` (via `htmlFor` / `id`)
- [ ] Les erreurs de formulaire sont annoncées (aria-live, aria-describedby)
- [ ] Les boutons ont du texte accessible (texte visible ou `aria-label`)
- [ ] Les liens ouvrant un nouvel onglet ont une indication visuelle + `aria-label` incluant "(nouvelle fenêtre)"
- [ ] `<html lang="fr">` correctement défini
- [ ] Structure de landmarks sémantiques : `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- [ ] Les animations respectent `prefers-reduced-motion` :

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] Les couleurs ne sont pas le seul moyen de transmettre une information
- [ ] Taille de texte minimum 16px pour le body
- [ ] Zones cliquables minimum 44x44px sur mobile
- [ ] Skip-to-content link en premier élément focusable :

```html
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded">
  Aller au contenu principal
</a>
```

- [ ] L'accordion FAQ utilise les bons attributs ARIA (`aria-expanded`, `aria-controls`, `role="button"`)
- [ ] Le menu mobile utilise `aria-expanded`, `aria-label="Menu principal"`, focus trap

### 8.4 Performance — Score Lighthouse 100

**Objectifs Core Web Vitals (obligatoires) :**

| Métrique | Objectif | Seuil "Good" Google |
|----------|----------|---------------------|
| LCP (Largest Contentful Paint) | < 1.5s | < 2.5s |
| FID / INP (Interaction to Next Paint) | < 100ms | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.05 | < 0.1 |
| FCP (First Contentful Paint) | < 1.0s | < 1.8s |
| TTFB (Time to First Byte) | < 200ms | < 800ms |
| TBT (Total Blocking Time) | < 150ms | < 200ms |
| Speed Index | < 2.0s | < 3.4s |

**Optimisation images (critique) :**

```javascript
// Next.js Image component — TOUJOURS utiliser
import Image from 'next/image'

// Règles :
// - Format : WebP (fallback JPEG), AVIF si supporté
// - Responsive : srcset avec sizes appropriés
// - Lazy loading : par défaut (sauf hero image → priority)
// - Dimensions : TOUJOURS spécifier width + height (évite CLS)
// - Placeholder : blur (blurDataURL pour le chargement progressif)

<Image
  src="/images/hero.webp"
  alt="Description descriptive"
  width={1200}
  height={630}
  priority          // Seulement pour les images above the fold
  placeholder="blur"
  blurDataURL="..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
/>
```

**Optimisation fonts :**

```javascript
// next/font — OBLIGATOIRE (pas d'import Google Fonts via <link>)
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',        // OBLIGATOIRE — évite FOIT
  variable: '--font-display',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})
```

**Optimisation CSS :**
- Critical CSS inliné dans le `<head>` (Next.js le fait automatiquement avec App Router)
- Tailwind avec purge activé (automatique en production)
- Pas de CSS inutilisé — vérifier avec Coverage tool de Chrome DevTools
- Pas de `@import` en cascade dans les CSS
- Utiliser `contain: content` ou `content-visibility: auto` sur les sections below the fold

**Optimisation JavaScript :**
- Code-split par route (automatique avec Next.js App Router)
- Tree-shaking activé (automatique avec Webpack/Turbopack)
- Dynamic imports pour les composants lourds (carousels, animations complexes) :

```javascript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // Si pas besoin de SSR
})
```

- Pas de bibliothèques JS lourdes inutiles
- Framer Motion : importer seulement les composants nécessaires (`import { motion } from 'framer-motion'` — tree-shakable)
- Pas de scripts tiers bloquants (analytics en async/defer, chargé après consentement cookies)

**Optimisation serveur / hosting :**
- Déploiement sur Vercel (Edge Network, CDN global automatique)
- Compression Brotli (automatique sur Vercel)
- Headers de cache appropriés :
  - Assets statiques (images, fonts, CSS, JS) : `Cache-Control: public, max-age=31536000, immutable`
  - HTML : `Cache-Control: public, max-age=0, must-revalidate` (ISR/SSG)
- HTTP/2 ou HTTP/3 (automatique sur Vercel)
- Preconnect aux domaines tiers si nécessaire :

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

**Anti-CLS (Cumulative Layout Shift) — checklist :**
- [ ] Toutes les images ont `width` et `height` (ou aspect-ratio CSS)
- [ ] Les fonts ont `font-display: swap` + fallback similaire
- [ ] Pas d'injection de contenu au-dessus du fold après le chargement
- [ ] Les embeds/iframes ont des dimensions réservées
- [ ] Le cookie banner ne pousse pas le contenu (utiliser position fixed/sticky)
- [ ] Les animations n'utilisent que `transform` et `opacity` (pas `width`, `height`, `top`, `left`)

### 8.5 Best Practices — Score Lighthouse 100

- [ ] HTTPS partout, pas de mixed content
- [ ] Pas d'erreurs dans la console browser (JS errors, 404 resources)
- [ ] Pas d'API deprecated utilisées
- [ ] CSP (Content Security Policy) headers configurés
- [ ] Pas de `document.write()`
- [ ] Pas de `target="_blank"` sans `rel="noopener noreferrer"`
- [ ] Pas de vulnérabilités connues dans les dépendances (`npm audit`)
- [ ] Images avec le bon aspect ratio (pas étirées/compressées)
- [ ] Charset UTF-8 déclaré : `<meta charset="utf-8">`

### 8.6 Validation finale — Process obligatoire

**Avant chaque mise en production, exécuter :**

```bash
# 1. Build de production
npm run build

# 2. Lighthouse CI sur chaque page
# Installer : npm install -g @lhci/cli
lhci autorun --collect.url=https://scalify.ma
lhci autorun --collect.url=https://scalify.ma/services/recrutement-franchises
lhci autorun --collect.url=https://scalify.ma/services/trafic-local
lhci autorun --collect.url=https://scalify.ma/franchise-maroc
lhci autorun --collect.url=https://scalify.ma/contact
lhci autorun --collect.url=https://scalify.ma/a-propos
lhci autorun --collect.url=https://scalify.ma/blog

# 3. Objectif : CHAQUE page doit avoir :
# Performance: 100
# Accessibility: 100
# Best Practices: 100
# SEO: 100

# 4. Si une page est < 100 sur une catégorie :
# → Identifier le problème dans le rapport Lighthouse
# → Corriger
# → Re-tester
# → Ne PAS déployer tant que ce n'est pas 100/100
```

**Outils de validation complémentaires :**
- Google PageSpeed Insights : https://pagespeed.web.dev/
- Google Rich Results Test : https://search.google.com/test/rich-results (vérifier le Schema.org)
- W3C HTML Validator : https://validator.w3.org/
- WAVE Accessibility : https://wave.webaim.org/
- Screaming Frog : crawl complet pour liens cassés, meta manquantes, etc.

**Monitoring continu post-lancement :**
- Google Search Console : indexation, erreurs, performances de recherche
- Google Analytics 4 : trafic, comportement, conversions
- CrUX (Chrome UX Report) : Core Web Vitals terrain réel
- Alertes si score Lighthouse descend sous 95 sur n'importe quelle catégorie

---

## 9. STACK TECHNIQUE

### 9.1 Recommandation principale

```
Framework :     Next.js 14+ (App Router)
Styling :       Tailwind CSS + CSS custom properties (design tokens)
Animations :    Framer Motion
Déploiement :   Vercel (ou Netlify)
CMS (blog) :    Notion API, Contentful, ou MDX local
Formulaire :    React Hook Form + API route (ou Formspree/Resend)
Analytics :     Google Analytics 4 + Google Tag Manager
Hébergement :   Vercel (edge, CDN global)
Domaine :       scalify.ma
```

### 9.2 Alternative (plus simple)

```
Framework :     Astro (SSG, très performant)
Styling :       Tailwind CSS
Animations :    CSS animations + JS vanilla (Intersection Observer)
CMS (blog) :    Markdown/MDX files
Formulaire :    Formspree ou Netlify Forms
Déploiement :   Netlify ou Cloudflare Pages
```

### 9.3 Structure de fichiers (Next.js)

```
scalify/
├── app/
│   ├── layout.tsx              (Layout principal + font + meta)
│   ├── page.tsx                (Homepage)
│   ├── services/
│   │   ├── recrutement-franchises/page.tsx
│   │   ├── trafic-local/page.tsx
│   │   ├── accompagnement-digital/page.tsx
│   │   └── ia-performance/page.tsx
│   ├── cas-clients/
│   │   ├── page.tsx            (Liste)
│   │   └── [slug]/page.tsx     (Détail)
│   ├── franchise-maroc/page.tsx
│   ├── a-propos/page.tsx
│   ├── blog/
│   │   ├── page.tsx            (Liste)
│   │   └── [slug]/page.tsx     (Article)
│   ├── contact/page.tsx
│   ├── mentions-legales/page.tsx
│   └── politique-confidentialite/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Accordion.tsx
│   │   ├── MetricCounter.tsx
│   │   └── SectionHeader.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── MetricsBar.tsx
│   │   ├── TestimonialFeature.tsx
│   │   ├── CTASection.tsx
│   │   └── ProcessTimeline.tsx
│   └── shared/
│       ├── SEO.tsx
│       ├── ScrollReveal.tsx
│       └── GradientText.tsx
├── lib/
│   ├── constants.ts            (Textes, chiffres, config)
│   ├── utils.ts
│   └── blog.ts                 (Fonctions CMS)
├── styles/
│   ├── globals.css             (Design tokens, reset, base)
│   └── animations.css
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── og-image.png
├── content/
│   ├── blog/                   (Articles MDX si local)
│   └── case-studies/           (Études de cas MDX)
└── tailwind.config.ts
```

---

## 10. RESPONSIVE & MOBILE-FIRST

### 10.1 Breakpoints

```css
/* Mobile-first approach */
/* Base styles = mobile (< 640px) */

sm: 640px    /* Petits tablettes */
md: 768px    /* Tablettes */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Ultra large */
```

### 10.2 Adaptations clés

| Élément | Mobile | Desktop |
|---------|--------|---------|
| Nav | Hamburger + sidebar | Liens horizontaux |
| Hero titre | text-hero (clamp) | Plus grand |
| Grid services | 1 colonne | 3 colonnes |
| Grid cas clients | 1 colonne | 2-3 colonnes |
| Process timeline | Verticale | Horizontale |
| Contact form | Full width, stacked | 2 colonnes |
| Footer | Stacked, centré | 4 colonnes |
| Métriques | 2x2 grid | 4 en ligne |
| Section padding | space-3xl | space-5xl |
| Contenu max-width | 100% - 32px | 1200px centré |

### 10.3 Touch & Mobile UX

- Tous les éléments cliquables : min 44x44px
- Pas de hover-only interactions (tout doit marcher au tap)
- Formulaires : inputs full-width, labels au-dessus
- CTAs : boutons full-width sur mobile
- Scroll horizontal : seulement pour les carousels, avec indicateurs
- Menu mobile : animation fluide, overlay, fermeture au tap extérieur

---

## 11. INTÉGRATIONS

### 11.1 Formulaire de contact

- **Service recommandé :** Resend (emails transactionnels) ou Formspree
- **Notification :** Email à hello@scalify.ma pour chaque soumission
- **Auto-réponse :** Email de confirmation au prospect
- **Anti-spam :** Honeypot field + rate limiting (pas de CAPTCHA visible)
- **Validation :** Côté client (React Hook Form / Zod) + côté serveur

### 11.2 Analytics

- Google Analytics 4 (GA4) via Google Tag Manager
- Événements à tracker :
  - Page views
  - CTA clicks (chaque bouton "Audit gratuit")
  - Formulaire : start, abandon, submit
  - Scroll depth (25%, 50%, 75%, 100%)
  - Clicks liens sortants
  - Temps sur page

### 11.3 Cookie consent

- Bannière cookies conforme (RGPD/CNDP Maroc)
- Consentement avant chargement des scripts analytics
- Design intégré au design system (pas un widget externe moche)

### 11.4 Chat / WhatsApp (optionnel)

- Bouton WhatsApp flottant en bas à droite
- Lien wa.me/ avec message pré-rempli
- Design custom (pas le widget WhatsApp par défaut)

---

## 12. MULTILINGUE

### 12.1 Langues

- **Français** : langue principale (défaut)
- **Anglais** : secondaire (pour les franchiseurs internationaux non francophones)
- **Arabe** : optionnel (V2, si pertinent pour le marché local)

### 12.2 Implémentation

- Next.js i18n routing : `/fr/` et `/en/`
- Ou préfixe uniquement pour la version non-défaut
- Switcher de langue discret dans le header
- Hreflang tags pour le SEO
- Contenu traduit manuellement (pas de traduction automatique)

---

## 13. GUIDELINES DE CONTENU (TONE OF VOICE)

### 13.1 Ton général

- **Expert mais accessible** : On parle franchise couramment, mais sans jargon inutile
- **Direct et confiant** : Pas de formulations molles ("nous essayons de...", "nous pouvons potentiellement...")
- **Orienté résultats** : Toujours ramener aux bénéfices concrets, aux chiffres
- **Humain et chaleureux** : Pas corporate froid. On est une équipe, pas une machine

### 13.2 Formulations à privilégier

| ❌ Éviter | ✅ Préférer |
|-----------|------------|
| "Nous proposons des solutions digitales" | "Nous générons des franchisés qualifiés" |
| "Notre équipe d'experts" | "Notre expertise franchise" |
| "Contactez-nous pour en savoir plus" | "Réservez votre audit gratuit" |
| "Nous offrons un large éventail de services" | "Trois leviers pour développer votre réseau" |
| "N'hésitez pas à..." | "Parlons de votre projet" |

### 13.3 Vocabulaire récurrent

```
Mots à utiliser souvent :
réseau, franchise, franchiseur, franchisé, points de vente,
acquisition, recrutement, trafic local, performance, résultats,
audit, stratégie, campagnes, data, ROI, leads qualifiés

Mots à éviter :
solutions, synergies, paradigme, disruption, game-changer,
best-in-class, cutting-edge, next-gen
```

---

## 14. CHECKLIST DE LIVRAISON

### 14.1 Design & UX

- [ ] Design system complet implémenté (couleurs, typo, composants)
- [ ] Dark mode par défaut, light mode toggle fonctionnel
- [ ] Navigation responsive (desktop + mobile hamburger)
- [ ] Toutes les pages du sitemap créées
- [ ] Formulaire de contact fonctionnel
- [ ] CTA visibles sur chaque page
- [ ] Animations scroll-triggered implémentées
- [ ] FAQ accordion fonctionnel
- [ ] Process/timeline animé
- [ ] Métriques avec count-up animé

### 14.2 Contenu

- [ ] Textes de toutes les pages rédigés et intégrés
- [ ] Meta titles + descriptions pour chaque page
- [ ] Open Graph images pour chaque page
- [ ] Alt text sur toutes les images
- [ ] Au moins 1 étude de cas (même fictive/anonymisée pour le lancement)
- [ ] Au moins 3 articles de blog

### 14.3 Technique

- [ ] Score Lighthouse > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Responsive testé sur : iPhone SE, iPhone 14, iPad, Desktop 1440px
- [ ] Sitemap XML généré
- [ ] robots.txt configuré
- [ ] Schema.org JSON-LD
- [ ] Cookie consent banner
- [ ] Google Analytics 4 intégré
- [ ] Formulaire avec validation + anti-spam
- [ ] prefers-reduced-motion respecté
- [ ] 404 page custom
- [ ] Favicon + app icons

### 14.4 Déploiement

- [ ] Domaine scalify.ma configuré
- [ ] SSL/HTTPS actif
- [ ] Redirections WWW → non-WWW (ou inverse)
- [ ] CDN actif (Vercel Edge / Cloudflare)
- [ ] Compression Brotli/Gzip
- [ ] CI/CD configuré (auto-deploy on push)

---

## ANNEXES

### A. Assets à préparer

1. **Logo Scalify** — SVG, versions : couleur sur fond sombre, couleur sur fond clair, monochrome blanc, favicon
2. **Photos équipe** — Portrait professionnel du fondateur (min)
3. **Visuels clients** — Logos des clients/enseignes (avec autorisation)
4. **Illustrations** — Style custom ou bibliothèque premium (pas de stock photos génériques)
5. **OG Image** — 1200x630px, branded, pour le partage social

### B. Inspirations de sites à étudier

- [stripe.com](https://stripe.com) — Clarté, espaces, typographie
- [linear.app](https://linear.app) — Dark mode, animations
- [vercel.com](https://vercel.com) — Gradient, grid, tech premium
- [ramp.com](https://ramp.com) — Corporate moderne
- [mercury.com](https://mercury.com) — Élégance, crédibilité
- [franchise.mcdonalds.com](https://franchise.mcdonalds.com) — Référence franchise

### C. Contenu prioritaire pour le lancement (MVP)

Pour un lancement rapide, prioriser :
1. Homepage (complète)
2. 1 page service (Recrutement franchisés)
3. Page Contact
4. Page À propos
5. Le reste peut arriver en V2 dans les semaines suivantes

---

**FIN DU CAHIER DES CHARGES**

*Ce document est la source de vérité pour la construction du site Scalify.
Toute décision de design, contenu ou technique doit s'y référer.
En cas de doute, privilégier : clarté > complexité, conversion > esthétique, mobile > desktop.*
