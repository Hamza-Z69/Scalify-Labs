export interface NavContent {
  services: string;
  work: string;
  process: string;
  franchise: string;
  journal: string;
  contact: string;
  cta: string;
}

export interface HeroContent {
  eyebrow: string;
  title_a: string;
  title_b: string;
  title_c: string;
  sub_a: string;
  sub_b: string;
  sub_c: string;
  cta_primary: string;
  cta_secondary: string;
  availability: string;
}

export interface MetricItem {
  big: string;
  label: string;
}

export interface MetricsContent {
  title: string;
  items: MetricItem[];
}

export interface ServiceItem {
  num: string;
  name: string;
  promise: string;
  body: string;
  outcomes: string[];
  tags: string[];
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  sub: string;
  items: ServiceItem[];
}

export interface AnatomyLayer {
  num: string;
  name: string;
  sub: string;
  body: string;
  signal: string;
}

export interface AnatomyContent {
  eyebrow: string;
  title: string;
  sub: string;
  layers: AnatomyLayer[];
  footer_note: string;
  signal_label: string;
}

export interface ProcessItem {
  num: string;
  name: string;
  duration: string;
  body: string;
  deliverable: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  sub: string;
  items: ProcessItem[];
}

export interface ResultPillar {
  num: string;
  metric: string;
  unit: string;
  label: string;
  body: string;
  proof: string;
}

export interface ResultsContent {
  eyebrow: string;
  title: string;
  sub: string;
  pillars: ResultPillar[];
  footer: string;
}

export interface FranchisePillar {
  num: string;
  name: string;
  body: string;
}

export interface FranchiseNetworkItem {
  sector: string;
  points: string;
  kpi: string;
  period: string;
}

export interface FranchiseContent {
  eyebrow: string;
  title: string;
  sub: string;
  intro: string;
  pillars: FranchisePillar[];
  network: {
    title: string;
    items: FranchiseNetworkItem[];
  };
  cta: string;
}

export interface JournalItem {
  cat: string;
  date: string;
  title: string;
  excerpt: string;
  read: string;
}

export interface JournalContent {
  eyebrow: string;
  title: string;
  sub: string;
  items: JournalItem[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQContent {
  eyebrow: string;
  title: string;
  items: FAQItem[];
}

export interface BARow {
  label: string;
  before: string;
  after: string;
}

export interface BAContent {
  eyebrow: string;
  title: string;
  sub: string;
  before_label: string;
  after_label: string;
  rows: BARow[];
  stamp: string;
}

export interface ClientsContent {
  title: string;
  names: string[];
}

export interface ContactFormContent {
  name: string;
  company: string;
  email: string;
  budget: string;
  budget_opts: string[];
  message: string;
  submit: string;
  consent: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  sub: string;
  form: ContactFormContent;
  direct: string;
}

export interface LegalSection {
  h: string;
  p: string;
}

export interface LegalDoc {
  title: string;
  body: LegalSection[];
}

export interface FooterContent {
  tagline: string;
  address: string;
  copy: string;
  links: string[];
  legal: Record<string, LegalDoc>;
}

export interface JournalBodyBlock {
  kind: "lede" | "h3" | "p" | "callout";
  text: string;
}

export interface JournalBody {
  body: JournalBodyBlock[];
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  metrics: MetricsContent;
  services: ServicesContent;
  anatomy: AnatomyContent;
  process: ProcessContent;
  results: ResultsContent;
  franchise: FranchiseContent;
  journal: JournalContent;
  faq: FAQContent;
  ba: BAContent;
  clients: ClientsContent;
  contact: ContactContent;
  footer: FooterContent;
}

export const SCALIFY_CONTENT: Record<string, SiteContent> = {
  fr: {
    nav: {
      services: "Services",
      work: "R\u00e9sultats",
      process: "M\u00e9thode",
      franchise: "Franchises",
      journal: "Journal",
      contact: "Contact",
      cta: "Audit gratuit",
    },
    hero: {
      eyebrow: "Agence m\u00e9dia \u00b7 Performance mesur\u00e9e",
      title_a: "Votre publicit\u00e9,\u00a0enfin\u00a0rentable.",
      title_b: "La performance,\u00a0sans les\u00a0approximations.",
      title_c: "Chaque euro investi,\u00a0trac\u00e9.\u00a0Chaque d\u00e9cision,\u00a0justifi\u00e9e.",
      sub_a: "Nous pilotons vos campagnes Meta et Google Ads comme un v\u00e9ritable actif\u00a0: tracking serveur, arbitrages quotidiens, reporting transparent. Vous savez exactement o\u00f9 va chaque\u00a0euro \u2014 et ce qu\u2019il\u00a0rapporte.",
      sub_b: "Nous op\u00e9rons l\u2019acquisition payante des marques qui refusent de\u00a0deviner. M\u00e9thodologie, tracking serveur, cr\u00e9a guid\u00e9e par la\u00a0donn\u00e9e.",
      sub_c: "Agence m\u00e9dia ind\u00e9pendante. Nous travaillons avec 14\u00a0marques \u2014 vente en ligne, logiciels en abonnement, entre entreprises \u2014 pour en faire des machines \u00e0 acquisition\u00a0pr\u00e9visible.",
      cta_primary: "Demander un audit",
      cta_secondary: "Voir la m\u00e9thode",
      availability: "Reporting transparent \u00b7 Z\u00e9ro zone d\u2019ombre",
    },
    metrics: {
      title: "Ce que nous op\u00e9rons",
      items: [
        { big: "> 100k\u20ac", label: "budget m\u00e9dia pilot\u00e9 en 2025" },
        { big: "\u00d74,3", label: "ROAS m\u00e9dian apr\u00e8s 90 jours" },
        { big: "\u221238%", label: "CPA moyen sur les comptes repris" },
        { big: "> 25", label: "comptes actifs en portefeuille" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Nous g\u00e9rons. Vous encaissez.",
      sub: "Six prestations construites autour d\u2019un seul objectif : transformer votre budget m\u00e9dia en chiffre d\u2019affaires pr\u00e9visible. Pas de silos, pas de sous-traitance.",
      items: [
        {
          num: "01", name: "Meta Ads",
          promise: "Facebook + Instagram g\u00e9r\u00e9s comme un portefeuille.",
          body: "Nous reprenons vos campagnes Meta de A \u00e0 Z. Restructuration des budgets au niveau campagne, tests cr\u00e9a hebdomadaires, exclusions d\u2019audiences, tracking serveur Meta. Vos d\u00e9penses passent d\u2019une ligne budg\u00e9taire \u00e0 un levier de croissance mesurable.",
          outcomes: ["ROAS stabilis\u00e9 sous 30 jours", "Co\u00fbt par acquisition \u221225 \u00e0 \u221240 %", "Pipeline cr\u00e9a continu"],
          tags: ["Advantage+", "CBO", "UGC", "CAPI"],
        },
        {
          num: "02", name: "Google Ads",
          promise: "Search, PMax, Shopping \u2014 pilot\u00e9s \u00e0 la marge r\u00e9elle.",
          body: "Vos budgets Google ne devraient pas \u00eatre arbitr\u00e9s au ROAS affich\u00e9, mais \u00e0 la marge qu\u2019ils g\u00e9n\u00e8rent. Nous branchons vos donn\u00e9es de marge, \u00e9crivons les scripts, et laissons Google optimiser sur ce qui compte vraiment.",
          outcomes: ["Budget allou\u00e9 \u00e0 la marge", "Catalogue Shopping nettoy\u00e9", "Search + Performance Max compl\u00e9mentaires"],
          tags: ["PMax", "Search", "Shopping", "YouTube"],
        },
        {
          num: "03", name: "Tracking & Data",
          promise: "Vous cessez de piloter \u00e0 l\u2019aveugle.",
          body: "Tracking c\u00f4t\u00e9 serveur, plan de taggage propre, mod\u00e9lisation de vos propres donn\u00e9es clients. Sans tracking propre, tout le reste est une opinion. Nous remettons les fondations d\u2019aplomb avant de toucher \u00e0 quoi que ce soit.",
          outcomes: ["Remont\u00e9e des conversions +30 %", "Impact iOS neutralis\u00e9", "Une seule source de v\u00e9rit\u00e9"],
          tags: ["CAPI", "sGTM", "BigQuery", "GA4"],
        },
        {
          num: "04", name: "Strat\u00e9gie m\u00e9dia",
          promise: "Un plan annuel. Pas des campagnes au mois.",
          body: "Plan m\u00e9dia 12 mois, allocation budg\u00e9taire par canal et par trimestre, s\u00e9quencement des lancements. Nous raisonnons en valeur client long terme, contribution et incr\u00e9mentalit\u00e9 \u2014 pas en co\u00fbt par acquisition affich\u00e9.",
          outcomes: ["Plan 12 mois valid\u00e9", "Budget allou\u00e9 par valeur client", "Tests d\u2019incr\u00e9mentalit\u00e9"],
          tags: ["LTV", "MMM", "Incr\u00e9mentalit\u00e9"],
        },
        {
          num: "05", name: "Vente en ligne",
          promise: "Playbooks pr\u00eats pour Shopify / Woo.",
          body: "Gestion catalogue, mise en avant produit, promotions s\u00e9quenc\u00e9es, r\u00e9cup\u00e9ration de panier abandonn\u00e9, ventes additionnelles apr\u00e8s achat. La boutique et les publicit\u00e9s parlent enfin la m\u00eame langue.",
          outcomes: ["Panier moyen +10 \u00e0 +20 %", "Panier abandonn\u00e9 r\u00e9cup\u00e9r\u00e9", "Promos cal\u00e9es sur la marge"],
          tags: ["DTC", "Shopify", "Klaviyo"],
        },
        {
          num: "06", name: "Audit & diagnostic",
          promise: "45 points v\u00e9rifi\u00e9s en 7 jours.",
          body: "Un audit \u00e9crit sur vos comptes actuels : structure, cr\u00e9a, tracking, landing, funnel. Livrable document, priorisation chiffr\u00e9e, trois leviers actionnables imm\u00e9diatement. Sans engagement.",
          outcomes: ["Document \u00e9crit", "3 leviers imm\u00e9diats", "Sans engagement"],
          tags: ["Forfait", "7 jours", "1 500 \u20ac"],
        },
      ],
    },
    anatomy: {
      eyebrow: "Anatomie",
      title: "Ce qui se passe, vraiment, dans un compte pilot\u00e9.",
      sub: "Un compte Meta ou Google n\u2019est pas une bo\u00eete noire. C\u2019est un empilement de cinq couches \u2014 chacune mesurable, chacune am\u00e9liorable. Nous travaillons les cinq, en ordre, sans improvisation.",
      layers: [
        { num: "L 0 1", name: "Tracking", sub: "La fondation", body: "Plan de taggage, tracking c\u00f4t\u00e9 serveur, Conversions API Meta. Si cette couche est bancale, toutes celles au-dessus mentent.", signal: "Qualit\u00e9 des donn\u00e9es remont\u00e9es" },
        { num: "L 0 2", name: "Audiences", sub: "Qui vous ciblez", body: "Exclusions, audiences personnalis\u00e9es, lookalikes, cibles Google. Structur\u00e9es pour apprendre vite \u2014 pas pour imiter le dernier tuto LinkedIn.", signal: "Taux d\u2019apprentissage" },
        { num: "L 0 3", name: "Cr\u00e9ation", sub: "Ce que les gens voient", body: "Variations continues de vid\u00e9os, carrousels et images. Nous testons en permanence angles, accroches et formats pour isoler la meilleure combinaison \u2014 celle qui convertit, pas celle qui pla\u00eet en r\u00e9union. R\u00e9gulier, syst\u00e9matique, jamais improvis\u00e9.", signal: "Fatigue publicitaire" },
        { num: "L 0 4", name: "Pilotage", sub: "Combien vous payez", body: "Pilotage manuel, de A \u00e0 Z. Pas d\u2019automatisation opaque, pas d\u2019outil qui d\u00e9cide \u00e0 notre place : un acheteur m\u00e9dia contr\u00f4le chaque euro, chaque jour. C\u2019est ce qui nous permet de tenir exactement le budget engag\u00e9 \u2014 ni plus, ni moins.", signal: "Contr\u00f4le exact du budget" },
        { num: "L 0 5", name: "Reporting", sub: "Ce que vous voyez", body: "Dashboard temps r\u00e9el, revue hebdo, rapport \u00e9crit trimestriel. Vous avez le m\u00eame niveau d\u2019information que nous \u2014 tout le temps.", signal: "Z\u00e9ro zone d\u2019ombre" },
      ],
      footer_note: "Cinq couches. Un seul op\u00e9rateur. Aucun sous-traitant.",
      signal_label: "Signal observ\u00e9",
    },
    process: {
      eyebrow: "M\u00e9thode",
      title: "Six \u00e9tapes. Aucune improvisation.",
      sub: "Notre protocole est le m\u00eame pour toutes les marques que nous op\u00e9rons \u2014 qu\u2019il s\u2019agisse d\u2019un compte \u00e0 30k\u20ac ou \u00e0 400k\u20ac par mois. Ce qui change, c\u2019est la vitesse d\u2019ex\u00e9cution, pas la rigueur.",
      items: [
        { num: "01", name: "Diagnostic", duration: "Semaine 1", body: "Audit complet en 45 points : compte, tracking, cr\u00e9a, funnel, landing. Livr\u00e9 en document \u00e9crit \u2014 pas en slides vendeuses. Vous repartez avec trois leviers imm\u00e9diats, qu\u2019on travaille ensemble ou non.", deliverable: "Document d\u2019audit \u00b7 15-25 pages" },
        { num: "02", name: "Installation", duration: "Semaines 2\u20133", body: "Remise \u00e0 plat du tracking : plan de taggage, tracking serveur, Conversions API. Restructuration des comptes, nouvelle nomenclature, exclusions d\u2019audiences. Les bases avant toute optimisation.", deliverable: "Tracking serveur actif \u00b7 comptes restructur\u00e9s" },
        { num: "03", name: "Calibration", duration: "Semaines 4\u20136", body: "Les algorithmes Meta et Google ont besoin de 2 \u00e0 3 semaines de donn\u00e9es propres avant de converger. Nous laissons tourner, surveillons, ajustons par touches. Pas de d\u00e9cisions pr\u00e9matur\u00e9es.", deliverable: "Premi\u00e8re vague de r\u00e9sultats stables" },
        { num: "04", name: "Scale", duration: "Mois 2\u20133", body: "It\u00e9ration hebdomadaire sur audiences, cr\u00e9a et ench\u00e8res. Revue budget lundi matin, rapport mardi, ajustements en continu. Mont\u00e9e en puissance progressive, jamais brutale.", deliverable: "ROAS cible atteint \u00b7 reporting hebdo" },
        { num: "05", name: "Compound", duration: "Mois 4+", body: "Une fois la machine stable, nous construisons les leviers non-\u00e9vidents : nouveaux canaux, nouvelles offres, nouveaux march\u00e9s. C\u2019est ici que la croissance devient compos\u00e9e plut\u00f4t qu\u2019additive.", deliverable: "Nouveaux canaux activ\u00e9s \u00b7 march\u00e9s ouverts" },
        { num: "06", name: "Reporting & revue", duration: "En continu", body: "Revue mensuelle avec le CEO ou le CMO, dashboard temps r\u00e9el, rapport trimestriel \u00e9crit. Vous avez toujours le m\u00eame niveau d\u2019information que nous \u2014 z\u00e9ro zone d\u2019ombre.", deliverable: "Dashboard live \u00b7 revue trimestrielle" },
      ],
    },
    results: {
      eyebrow: "R\u00e9sultats",
      title: "Ce que nos clients gagnent.",
      sub: "Pas de cas client romanc\u00e9. Quatre m\u00e9triques que nos clients mesurent r\u00e9ellement, sur l\u2019ensemble du portefeuille, dans les six premiers mois.",
      pillars: [
        { num: "01", metric: "+42 %", unit: "chiffre d\u2019affaires", label: "Revenus additionnels", body: "Croissance m\u00e9diane du revenu g\u00e9n\u00e9r\u00e9 par l\u2019acquisition payante sur les 6 premiers mois. Mesur\u00e9e en incr\u00e9mental, pas en ROAS affich\u00e9.", proof: "M\u00e9diane \u00b7 portefeuille actif" },
        { num: "02", metric: "\u221234 %", unit: "co\u00fbt d\u2019acquisition", label: "Co\u00fbt par client r\u00e9duit", body: "Diminution moyenne du co\u00fbt par acquisition apr\u00e8s restructuration du tracking et des campagnes. Effet ressenti d\u00e8s la semaine 6.", proof: "Moyenne \u00b7 comptes repris d\u2019une autre agence" },
        { num: "03", metric: "\u00d72,4", unit: "prospects qualifi\u00e9s", label: "Volume de prospects", body: "Augmentation du volume de prospects qualifi\u00e9s \u00e0 budget constant. Gain obtenu via cr\u00e9a + scoring + s\u00e9quencement, pas par d\u00e9pense suppl\u00e9mentaire.", proof: "Logiciels en abonnement + Formation" },
        { num: "04", metric: "91 %", unit: "taux de r\u00e9tention", label: "Clients fid\u00e8les", body: "Taux de renouvellement annuel de nos contrats. Nous fonctionnons au mois le mois apr\u00e8s calibrage \u2014 les clients restent parce que \u00e7a marche.", proof: "2023\u20132026 \u00b7 contrats mensuels" },
      ],
      footer: "Chiffres v\u00e9rifiables sur demande. Audit gratuit de votre compte en 45 minutes.",
    },
    franchise: {
      eyebrow: "Pour les r\u00e9seaux",
      title: "Franchises & r\u00e9seaux.",
      sub: "Un protocole d\u00e9di\u00e9 aux enseignes multi-points de vente. Acquisition centralis\u00e9e, recrutement de franchis\u00e9s, reporting consolid\u00e9 si\u00e8ge + locaux.",
      intro: "Op\u00e9rer un r\u00e9seau de 10, 50 ou 200 points de vente ne se g\u00e8re pas comme une marque unique. Budget mutualis\u00e9, campagnes g\u00e9ocib\u00e9es par zone de chalandise, tension permanente entre coh\u00e9rence de marque et autonomie locale. Nous avons construit un protocole sp\u00e9cifique.",
      pillars: [
        { num: "01", name: "Acquisition locale", body: "Campagnes g\u00e9olocalis\u00e9es par point de vente. Budget mutualis\u00e9, cr\u00e9a adapt\u00e9e au local, attribution drive-to-store mesur\u00e9e." },
        { num: "02", name: "Recrutement franchis\u00e9s", body: "Funnel d\u00e9di\u00e9 candidat-franchis\u00e9 : landing pages par r\u00e9gion, lead scoring, nurturing email, qualification si\u00e8ge automatis\u00e9e." },
        { num: "03", name: "Coh\u00e9rence de marque", body: "Charte m\u00e9dia centralis\u00e9e, assets locaux produits \u00e0 la demande, validation si\u00e8ge sur chaque cr\u00e9a. Z\u00e9ro d\u00e9rive, z\u00e9ro incoh\u00e9rence." },
        { num: "04", name: "Reporting consolid\u00e9", body: "Dashboard si\u00e8ge : performance par point, par r\u00e9gion, par format. Les franchis\u00e9s voient leurs chiffres, le si\u00e8ge voit l\u2019ensemble." },
      ],
      network: {
        title: "Secteurs o\u00f9 nous intervenons",
        items: [
          { sector: "Restauration & fast food", points: "Franchises & ind\u00e9pendants", kpi: "+28% trafic", period: "Premiers r\u00e9sultats 60j" },
          { sector: "Boulangerie", points: "R\u00e9seaux r\u00e9gionaux", kpi: "+22% visites", period: "Ticket moyen suivi" },
          { sector: "Salons de coiffure", points: "Salons & mini-r\u00e9seaux", kpi: "\u00d71,9 RDV", period: "90 jours" },
          { sector: "B\u00e2timent TPE", points: "Artisans & petites structures", kpi: "\u221219% CPL", period: "Cycle 4\u20136 mois" },
        ],
      },
      cta: "Parler d\u00e9veloppement r\u00e9seau",
    },
    clients: {
      title: "Ils nous confient leurs comptes",
      names: ["Atelier Nord", "Maison Verrier", "Orbite", "Forme & Fond", "Kairos SaaS", "Studio Hauteville", "Maisonneuve", "Paloma"],
    },
    journal: {
      eyebrow: "Journal",
      title: "Ce que nous apprenons.",
      sub: "Nous publions ce que nous d\u00e9couvrons en op\u00e9rant. Pas de contenu SEO, pas de calendrier \u00e9ditorial : uniquement ce qui nous para\u00eet utile \u00e0 nos clients actuels et futurs.",
      items: [
        { cat: "Tracking", date: "Avr. 2026", title: "Tracking serveur : pourquoi 9 comptes sur 10 sont mal branch\u00e9s", excerpt: "Apr\u00e8s avoir audit\u00e9 60 comptes en 12 mois, voici les trois erreurs r\u00e9currentes qui font perdre entre 15 et 40 % de remont\u00e9e \u2014 et comment les corriger en moins d\u2019une semaine.", read: "8 min" },
        { cat: "Cr\u00e9ation", date: "Mar. 2026", title: "Le pipeline de vid\u00e9os clients qui tourne chez tous nos clients", excerpt: "Production, brief, it\u00e9ration, mesure. Notre process complet pour sortir 20 \u00e0 30 cr\u00e9as par mois et remplacer les perdantes en moins de 72 heures.", read: "12 min" },
        { cat: "Strat\u00e9gie", date: "F\u00e9v. 2026", title: "Arr\u00eater de piloter au ROAS : un mod\u00e8le de contribution simple", excerpt: "Le ROAS affich\u00e9 ment. Nous exposons le mod\u00e8le de contribution que nous utilisons avec nos clients en vente directe pour prendre des d\u00e9cisions de budget bas\u00e9es sur la marge r\u00e9elle.", read: "6 min" },
        { cat: "Google", date: "Jan. 2026", title: "Performance Max en 2026 : ce qui marche apr\u00e8s 40 campagnes", excerpt: "Performance Max reste une bo\u00eete noire \u2014 mais 40 campagnes plus tard, nous avons identifi\u00e9 7 leviers qui d\u00e9placent l\u2019aiguille et 4 pi\u00e8ges \u00e0 \u00e9viter absolument.", read: "10 min" },
        { cat: "R\u00e9seaux", date: "D\u00e9c. 2025", title: "Acquisition de franchis\u00e9s par Meta Ads : retour sur 3 r\u00e9seaux", excerpt: "Comment nous recrutons entre 8 et 25 candidats-franchis\u00e9s par mois pour nos clients, avec un co\u00fbt par prospect moyen de 40 \u00e0 80 \u20ac et un taux de qualification de 35 %.", read: "9 min" },
        { cat: "Entre entreprises", date: "Nov. 2025", title: "Google Ads pour logiciels en abonnement : pourquoi le Search pur ne suffit plus", excerpt: "Le Search entre entreprises est satur\u00e9. Combinaison Search + Display remarketing + LinkedIn, et pourquoi la s\u00e9quence importe plus que le canal individuel.", read: "7 min" },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Ce qu\u2019on nous demande souvent.",
      items: [
        { q: "Quel est votre budget minimum ?", a: "Aucun plancher rigide : nous nous adaptons au budget de chaque client et construisons le dispositif qui permet d\u2019en tirer le meilleur rapport r\u00e9sultats/investissement. La logique reste la m\u00eame \u00e0 tous les niveaux de d\u00e9pense : chaque euro ma\u00eetris\u00e9, chaque euro justifi\u00e9." },
        { q: "Comment \u00eates-vous r\u00e9mun\u00e9r\u00e9s ?", a: "Honoraire fixe mensuel, sans pourcentage du budget m\u00e9dia. Cela garantit qu\u2019aucune de nos recommandations n\u2019est biais\u00e9e par notre propre r\u00e9mun\u00e9ration." },
        { q: "Sur quels secteurs intervenez-vous ?", a: "Restauration & fast food, boulangerie, salons de coiffure, b\u00e2timent TPE. Nous accompagnons aussi les franchiseurs qui veulent structurer et d\u00e9velopper leur r\u00e9seau, ainsi que les enseignes qui cherchent simplement \u00e0 attirer plus de clients en point de vente ou sur leur site." },
        { q: "Quelle est la dur\u00e9e d\u2019engagement ?", a: "Sans engagement. Aucun contrat qui vous retient : vous restez parce que les r\u00e9sultats suivent, pas parce qu\u2019une clause vous oblige." },
        { q: "En combien de temps voit-on les premiers r\u00e9sultats ?", a: "Les premiers signaux apparaissent sous 30 jours \u2014 une fois le tracking refondu et les campagnes restructur\u00e9es. Le vrai saut de performance se joue au mois 2 et 3, quand les algorithmes ont converg\u00e9 sur des donn\u00e9es propres." },
      ],
    },
    ba: {
      eyebrow: "Avant \u2192 Apr\u00e8s",
      title: "Ce qui change, concr\u00e8tement.",
      sub: "Les six premiers mois chez Scalify Labs transforment la fa\u00e7on dont vous op\u00e9rez votre acquisition payante. Voici la diff\u00e9rence, point par point.",
      before_label: "Avant Scalify",
      after_label: "Apr\u00e8s Scalify",
      rows: [
        { label: "Tracking", before: "Pixel navigateur uniquement. 30 \u00e0 40 % des conversions perdues \u00e0 cause des bloqueurs et d\u2019iOS.", after: "Tracking c\u00f4t\u00e9 serveur, Conversions API active. Remont\u00e9e +30 %, d\u00e9cisions fiables." },
        { label: "D\u00e9cisions", before: "Arbitrages au feeling, sur le ROAS affich\u00e9 Meta.", after: "D\u00e9cisions \u00e0 la marge r\u00e9elle, sur contribution incr\u00e9mentale." },
        { label: "Cr\u00e9ation", before: "3 \u00e0 5 variantes par mois, brief par email, production al\u00e9atoire.", after: "Variation continue vid\u00e9os/carrousels/images, pipeline syst\u00e9matique, combinaison gagnante isol\u00e9e." },
        { label: "Reporting", before: "Rapport PDF mensuel, chiffres interpr\u00e9t\u00e9s par l\u2019agence.", after: "Dashboard temps r\u00e9el, acc\u00e8s direct, revue hebdomadaire." },
        { label: "Structure compte", before: "Compte d\u00e9sorganis\u00e9, audiences g\u00e9n\u00e9riques, m\u00e9triques non tri\u00e9es. Le budget part dans des campagnes qui se concurrencent entre elles.", after: "Structure ultra-personnalis\u00e9e, contr\u00f4l\u00e9e \u00e0 la main. Audiences segment\u00e9es, m\u00e9triques tri\u00e9es au cordeau, meilleur rapport qualit\u00e9/prix isol\u00e9 campagne par campagne." },
        { label: "R\u00e9mun\u00e9ration", before: "% du budget m\u00e9dia \u2014 l\u2019agence gagne plus quand vous d\u00e9pensez plus.", after: "Honoraire fixe mensuel \u2014 aucun biais sur nos recommandations." },
        { label: "Engagement", before: "Contrat 12 mois, r\u00e9siliation p\u00e9nalis\u00e9e.", after: "Sans engagement. Vous restez parce que les r\u00e9sultats suivent, pas parce qu\u2019un contrat vous l\u2019impose." },
      ],
      stamp: "Protocole Scalify \u00b7 appliqu\u00e9 \u00e0 chaque compte du portefeuille",
    },
    contact: {
      eyebrow: "Prendre contact",
      title: "Parlons de vos comptes.",
      sub: "Un audit gratuit de 45 minutes. Nous regardons vos comptes en direct, identifions trois leviers imm\u00e9diats, et vous remettons un document \u00e9crit. Aucun engagement.",
      form: {
        name: "Nom",
        company: "Entreprise",
        email: "Email",
        budget: "Budget m\u00e9dia mensuel",
        budget_opts: ["< 1k\u20ac / mois", "1\u20133k\u20ac / mois", "3\u20138k\u20ac / mois", "8k\u20ac+ / mois"],
        message: "Contexte",
        submit: "Envoyer la demande",
        consent: "En soumettant, vous acceptez d\u2019\u00eatre recontact\u00e9 sous 48\u00a0h ouvr\u00e9es.",
      },
      direct: "Ou \u00e9crivez-nous : contact@scalifylabs.com",
    },
    footer: {
      tagline: "Agence m\u00e9dia ind\u00e9pendante.",
      address: "Adresse \u00b7 en cours",
      copy: "\u00a9 2026 Scalify Labs \u00b7 Tous droits r\u00e9serv\u00e9s",
      links: ["Mentions l\u00e9gales", "Politique de confidentialit\u00e9", "Conditions g\u00e9n\u00e9rales"],
      legal: {
        "Mentions l\u00e9gales": {
          title: "Mentions l\u00e9gales",
          body: [
            { h: "\u00c9diteur du site", p: "Le site scalifylabs.com est \u00e9dit\u00e9 par Scalify Labs, agence m\u00e9dia ind\u00e9pendante. Raison sociale, num\u00e9ro d\u2019immatriculation, forme juridique et capital social : en cours d\u2019enregistrement, informations mises \u00e0 jour d\u00e8s finalisation." },
            { h: "Si\u00e8ge social", p: "Adresse du si\u00e8ge social : en cours d\u2019enregistrement. Les coordonn\u00e9es compl\u00e8tes seront publi\u00e9es d\u00e8s r\u00e9ception de l\u2019attestation d\u2019immatriculation." },
            { h: "Directeur de la publication", p: "Le directeur de la publication est le repr\u00e9sentant l\u00e9gal de Scalify Labs. Pour toute demande \u00e9ditoriale, vous pouvez \u00e9crire \u00e0 contact@scalifylabs.com." },
            { h: "H\u00e9bergement", p: "Le site est h\u00e9berg\u00e9 par un prestataire technique sp\u00e9cialis\u00e9. L\u2019identit\u00e9 et les coordonn\u00e9es compl\u00e8tes de l\u2019h\u00e9bergeur sont disponibles sur simple demande \u00e9crite adress\u00e9e \u00e0 contact@scalifylabs.com." },
            { h: "Propri\u00e9t\u00e9 intellectuelle", p: "L\u2019ensemble des contenus pr\u00e9sents sur ce site \u2014 textes, images, graphismes, logo, ic\u00f4nes, vid\u00e9os, structure, code source \u2014 est la propri\u00e9t\u00e9 exclusive de Scalify Labs ou de ses partenaires. Toute reproduction, repr\u00e9sentation, adaptation, modification, publication ou transmission, totale ou partielle, par quelque proc\u00e9d\u00e9 que ce soit, est interdite sans autorisation \u00e9crite pr\u00e9alable." },
            { h: "Liens hypertextes", p: "La cr\u00e9ation de liens hypertextes vers le site scalifylabs.com est soumise \u00e0 accord pr\u00e9alable \u00e9crit. Scalify Labs ne peut \u00eatre tenue responsable du contenu des sites tiers vers lesquels des liens pourraient \u00eatre \u00e9tablis depuis le pr\u00e9sent site." },
            { h: "Contact", p: "Pour toute question relative au site ou \u00e0 son contenu : contact@scalifylabs.com." },
          ],
        },
        "Politique de confidentialit\u00e9": {
          title: "Politique de confidentialit\u00e9",
          body: [
            { h: "Responsable du traitement", p: "Scalify Labs est responsable du traitement des donn\u00e9es personnelles collect\u00e9es via le pr\u00e9sent site et dans le cadre de ses prestations. Pour toute question relative au traitement de vos donn\u00e9es, vous pouvez \u00e9crire \u00e0 contact@scalifylabs.com." },
            { h: "Donn\u00e9es collect\u00e9es", p: "Nous collectons uniquement les donn\u00e9es strictement n\u00e9cessaires : nom, pr\u00e9nom, entreprise, adresse email, num\u00e9ro de t\u00e9l\u00e9phone, contexte de la demande, budget m\u00e9dia indicatif. Aucune donn\u00e9e sensible au sens du RGPD (article 9) n\u2019est collect\u00e9e." },
            { h: "Finalit\u00e9s du traitement", p: "Les donn\u00e9es collect\u00e9es via notre formulaire de contact sont utilis\u00e9es pour r\u00e9pondre \u00e0 votre demande, qualifier votre projet, pr\u00e9parer un audit gratuit et, le cas \u00e9ch\u00e9ant, \u00e9tablir une proposition commerciale. Elles ne sont jamais utilis\u00e9es \u00e0 des fins de prospection automatis\u00e9e ni revendues." },
            { h: "Base l\u00e9gale", p: "Le traitement repose sur votre consentement explicite (article 6.1.a du RGPD) lors de la soumission du formulaire, ou sur l\u2019int\u00e9r\u00eat l\u00e9gitime de Scalify Labs \u00e0 g\u00e9rer ses \u00e9changes commerciaux entrants (article 6.1.f)." },
            { h: "Dur\u00e9e de conservation", p: "Les donn\u00e9es sont conserv\u00e9es pendant toute la dur\u00e9e de la relation contractuelle, puis archiv\u00e9es pendant trois ans \u00e0 compter du dernier contact, avant suppression d\u00e9finitive. Les donn\u00e9es comptables sont conserv\u00e9es dix ans conform\u00e9ment aux obligations l\u00e9gales." },
            { h: "Destinataires", p: "Les donn\u00e9es sont exclusivement accessibles aux \u00e9quipes internes de Scalify Labs. Aucune donn\u00e9e n\u2019est transf\u00e9r\u00e9e \u00e0 des tiers commerciaux. Nos outils techniques (CRM, emailing, h\u00e9bergement) sont localis\u00e9s dans l\u2019Union europ\u00e9enne ou couverts par des clauses contractuelles types conformes au RGPD." },
            { h: "Vos droits", p: "Conform\u00e9ment au RGPD, vous disposez d\u2019un droit d\u2019acc\u00e8s, de rectification, d\u2019effacement, de limitation, d\u2019opposition et de portabilit\u00e9 de vos donn\u00e9es. Vous pouvez exercer ces droits en \u00e9crivant \u00e0 contact@scalifylabs.com. Vous disposez \u00e9galement du droit d\u2019introduire une r\u00e9clamation aupr\u00e8s de la CNIL (www.cnil.fr)." },
            { h: "Cookies", p: "Le site utilise uniquement des cookies techniques strictement n\u00e9cessaires \u00e0 son fonctionnement. Aucun cookie publicitaire ou de tra\u00e7age tiers n\u2019est d\u00e9pos\u00e9 sans votre consentement pr\u00e9alable." },
          ],
        },
        "Conditions g\u00e9n\u00e9rales": {
          title: "Conditions g\u00e9n\u00e9rales de service",
          body: [
            { h: "Objet", p: "Les pr\u00e9sentes conditions g\u00e9n\u00e9rales r\u00e9gissent les prestations de conseil et d\u2019op\u00e9ration publicitaire fournies par Scalify Labs \u00e0 ses clients professionnels. Elles s\u2019appliquent \u00e0 tout contrat de service sign\u00e9 et priment sur toute autre condition \u00e9manant du client, sauf accord \u00e9crit contraire." },
            { h: "Prestations", p: "Scalify Labs fournit des prestations d\u2019audit, de mise en place technique (tracking, structure de compte), de pilotage de campagnes Meta Ads et Google Ads, de production de variantes cr\u00e9atives et de reporting. La description exacte de la mission figure dans la proposition commerciale sign\u00e9e par les deux parties." },
            { h: "R\u00e9mun\u00e9ration", p: "Scalify Labs est r\u00e9mun\u00e9r\u00e9e par un honoraire fixe mensuel, ind\u00e9pendant du budget m\u00e9dia investi par le client. Aucun pourcentage de d\u00e9pense m\u00e9dia n\u2019est pr\u00e9lev\u00e9. Les montants, modalit\u00e9s de paiement et r\u00e9visions \u00e9ventuelles sont pr\u00e9cis\u00e9s dans la proposition commerciale." },
            { h: "Budget m\u00e9dia", p: "Le budget m\u00e9dia est r\u00e9gl\u00e9 directement par le client \u00e0 Meta, Google ou toute autre r\u00e9gie concern\u00e9e. Scalify Labs ne d\u00e9tient ni n\u2019avance les fonds publicitaires. Le client conserve la propri\u00e9t\u00e9 pleine et enti\u00e8re de ses comptes publicitaires et acc\u00e8s." },
            { h: "Dur\u00e9e et r\u00e9siliation", p: "Les prestations sont fournies sans engagement de dur\u00e9e. Apr\u00e8s une p\u00e9riode initiale de calibrage de trois mois, le contrat se poursuit au mois le mois. Chaque partie peut y mettre fin par \u00e9crit avec un pr\u00e9avis de trente jours, sans p\u00e9nalit\u00e9." },
            { h: "Obligations des parties", p: "Scalify Labs s\u2019engage \u00e0 mettre en \u0153uvre une obligation de moyens renforc\u00e9e, conforme aux meilleures pratiques du secteur. Le client s\u2019engage \u00e0 fournir en temps utile les acc\u00e8s, \u00e9l\u00e9ments cr\u00e9atifs et informations n\u00e9cessaires \u00e0 l\u2019ex\u00e9cution des prestations, et \u00e0 r\u00e9gler les honoraires selon l\u2019\u00e9ch\u00e9ancier convenu." },
            { h: "Confidentialit\u00e9", p: "Chaque partie s\u2019engage \u00e0 pr\u00e9server la confidentialit\u00e9 des informations \u00e9chang\u00e9es dans le cadre de la mission, pendant toute sa dur\u00e9e et pendant trois ans apr\u00e8s son terme. Scalify Labs pourra citer le nom et le logo du client \u00e0 titre de r\u00e9f\u00e9rence, sauf opposition \u00e9crite." },
            { h: "Responsabilit\u00e9", p: "La responsabilit\u00e9 de Scalify Labs est strictement limit\u00e9e au montant des honoraires per\u00e7us au cours des six mois pr\u00e9c\u00e9dant la survenance du fait g\u00e9n\u00e9rateur. Scalify Labs ne peut \u00eatre tenue responsable des d\u00e9cisions algorithmiques des r\u00e9gies publicitaires, ni des variations de performance ind\u00e9pendantes de sa volont\u00e9." },
            { h: "Droit applicable", p: "Les pr\u00e9sentes conditions sont r\u00e9gies par le droit fran\u00e7ais. Tout litige sera soumis, \u00e0 d\u00e9faut de r\u00e9solution amiable, aux tribunaux comp\u00e9tents du ressort du si\u00e8ge de Scalify Labs." },
          ],
        },
      },
    },
  },
  en: {
    nav: {
      services: "Services",
      work: "Results",
      process: "Method",
      franchise: "Franchises",
      journal: "Journal",
      contact: "Contact",
      cta: "Free audit",
    },
    hero: {
      eyebrow: "Media agency \u00b7 Performance measured",
      title_a: "Your ads,\u00a0finally\u00a0profitable.",
      title_b: "Performance,\u00a0without the\u00a0guesswork.",
      title_c: "Every euro spent,\u00a0tracked.\u00a0Every call,\u00a0justified.",
      sub_a: "We run your Meta and Google Ads accounts like a real\u00a0asset: server-side tracking, daily arbitrage, transparent\u00a0reporting. You know exactly where every euro\u00a0goes \u2014 and what it\u00a0returns.",
      sub_b: "We operate paid acquisition for brands that refuse to\u00a0guess. Method, server-side tracking, data-led\u00a0creative.",
      sub_c: "Independent media agency. We work with 14\u00a0brands \u2014 direct-to-consumer, subscription software, business-to-business \u2014 to make them predictable acquisition\u00a0machines.",
      cta_primary: "Request an audit",
      cta_secondary: "See the method",
      availability: "Transparent reporting \u00b7 Zero blind spots",
    },
    metrics: {
      title: "What we operate",
      items: [
        { big: "> \u20ac100k", label: "media spend managed in 2025" },
        { big: "\u00d74.3", label: "median ROAS after 90 days" },
        { big: "\u221238%", label: "avg. CPA on accounts taken over" },
        { big: "> 25", label: "active accounts in portfolio" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "We operate. You collect.",
      sub: "Six services built around one goal: turning your media budget into predictable revenue. No silos, no outsourcing.",
      items: [
        { num: "01", name: "Meta Ads", promise: "Facebook + Instagram run like a portfolio.", body: "We take over your Meta campaigns end to end. CBO rebuild, weekly creative testing, audience exclusions, Conversions API. Your spend moves from a budget line to a measurable growth lever.", outcomes: ["ROAS stable within 30 days", "CPA \u221225 to \u221240 %", "Continuous creative pipeline"], tags: ["Advantage+", "CBO", "UGC", "CAPI"] },
        { num: "02", name: "Google Ads", promise: "Search, PMax, Shopping \u2014 bid on real margin.", body: "Google budgets shouldn\u2019t be arbitraged on reported ROAS, but on the margin they generate. We feed in your margin data, write the scripts, and let Google optimise on what actually matters.", outcomes: ["Budget allocated on margin", "Shopping feed cleaned", "Search + PMax complementary"], tags: ["PMax", "Search", "Shopping", "YouTube"] },
        { num: "03", name: "Tracking & Data", promise: "You stop flying blind.", body: "Server-side Conversions API, server-side GTM, first-party modelling. Without clean tracking, everything else is an opinion. We rebuild the foundations before touching anything else.", outcomes: ["Conversion uplift +30 %", "iOS14 neutralised", "BigQuery as single source"], tags: ["CAPI", "sGTM", "BigQuery", "GA4"] },
        { num: "04", name: "Media strategy", promise: "An annual plan. Not monthly campaigns.", body: "12-month media plan, channel and quarterly budget allocation, launch sequencing. We think in LTV, contribution and incrementality \u2014 not reported CPA.", outcomes: ["12-month plan signed off", "Budget allocated by LTV", "Incrementality tests"], tags: ["LTV", "MMM", "Incrementality"] },
        { num: "05", name: "DTC e-commerce", promise: "Playbooks ready for Shopify / Woo.", body: "Catalog management, feed merchandising, sequenced promos, cart recovery, post-purchase upsell. Store and ads finally speak the same language.", outcomes: ["AOV +10 to +20 %", "Abandoned cart recovered", "Promos tied to margin"], tags: ["DTC", "Shopify", "Klaviyo"] },
        { num: "06", name: "Audit & diagnosis", promise: "45 checkpoints in 7 days.", body: "A written audit of your current accounts: structure, creative, tracking, landing, funnel. Written deliverable, priced priorities, three immediately actionable levers. No commitment.", outcomes: ["Written document", "3 immediate levers", "No commitment"], tags: ["Fixed fee", "7 days", "\u20ac1,500"] },
      ],
    },
    anatomy: {
      eyebrow: "Anatomy",
      title: "What actually happens inside an operated account.",
      sub: "A Meta or Google account isn\u2019t a black box. It\u2019s a stack of five layers \u2014 each measurable, each improvable. We work on all five, in order, without improvisation.",
      layers: [
        { num: "L 0 1", name: "Tracking", sub: "The foundation", body: "Tagging plan, server-side tracking, Meta Conversions API. If this layer is shaky, everything above it lies.", signal: "Data quality uplift" },
        { num: "L 0 2", name: "Audiences", sub: "Who you target", body: "Exclusions, custom audiences, lookalikes, Google audiences. Structured to learn fast \u2014 not to mimic the latest LinkedIn thread.", signal: "Learning rate" },
        { num: "L 0 3", name: "Creative", sub: "What people see", body: "Continuous variation of videos, carousels and images. We constantly test angles, hooks and formats to isolate the best combination \u2014 the one that converts, not the one that plays well in a meeting. Regular, systematic, never improvised.", signal: "Ad fatigue" },
        { num: "L 0 4", name: "Steering", sub: "What you pay", body: "Manual steering, end to end. No opaque automation, no tool deciding for us: a media buyer controls every euro, every day. That\u2019s what lets us hold exactly the committed budget \u2014 no more, no less.", signal: "Precise budget control" },
        { num: "L 0 5", name: "Reporting", sub: "What you see", body: "Live dashboard, weekly review, written quarterly report. You have the same level of information as us \u2014 all the time.", signal: "Zero blind spots" },
      ],
      footer_note: "Five layers. One operator. No subcontractors.",
      signal_label: "Observed signal",
    },
    process: {
      eyebrow: "Method",
      title: "Six steps. No improvisation.",
      sub: "Our protocol is the same for every brand we operate \u2014 whether the account spends \u20ac30k or \u20ac400k per month. Execution speed changes, rigour doesn\u2019t.",
      items: [
        { num: "01", name: "Diagnosis", duration: "Week 1", body: "Full 45-point audit: account, tracking, creative, funnel, landing. Delivered as a written document \u2014 not a sales deck. You leave with three immediate levers, whether we work together or not.", deliverable: "Audit document \u00b7 15\u201325 pages" },
        { num: "02", name: "Install", duration: "Weeks 2\u20133", body: "Tracking rebuilt from scratch: server GTM, Conversions API, fresh tagging plan. Account restructure, new naming convention, audience exclusions. Foundations before any optimisation.", deliverable: "Server-side tracking live \u00b7 accounts restructured" },
        { num: "03", name: "Calibration", duration: "Weeks 4\u20136", body: "Meta and Google algorithms need 2 to 3 weeks of clean data before they converge. We let it run, monitor, adjust in small touches. No premature decisions.", deliverable: "First wave of stable results" },
        { num: "04", name: "Scale", duration: "Months 2\u20133", body: "Weekly iteration on audiences, creative and bids. Budget review Monday, report Tuesday, continuous adjustments. Gradual ramp-up, never brutal.", deliverable: "Target ROAS hit \u00b7 weekly reporting" },
        { num: "05", name: "Compound", duration: "Month 4+", body: "Once the machine is stable, we build the non-obvious levers: new channels, new offers, new markets. This is where growth becomes compounded rather than additive.", deliverable: "New channels live \u00b7 markets opened" },
        { num: "06", name: "Reporting & review", duration: "Ongoing", body: "Monthly review with CEO or CMO, live Looker dashboard, written quarterly report. You always have the same level of information as us \u2014 zero blind spots.", deliverable: "Live dashboard \u00b7 quarterly review" },
      ],
    },
    results: {
      eyebrow: "Results",
      title: "What our clients earn.",
      sub: "No dressed-up case studies. Four metrics our clients actually measure, across the full portfolio, within the first six months.",
      pillars: [
        { num: "01", metric: "+42 %", unit: "revenue", label: "Additional revenue", body: "Median revenue growth from paid acquisition in the first 6 months. Measured incrementally, not on reported ROAS.", proof: "Median \u00b7 14 active accounts" },
        { num: "02", metric: "\u221234 %", unit: "acquisition cost", label: "Lower CAC", body: "Average CAC reduction after tracking and campaign rebuild. Felt from week 6 onwards.", proof: "Average \u00b7 accounts taken from another agency" },
        { num: "03", metric: "\u00d72.4", unit: "qualified leads", label: "Lead volume", body: "Qualified lead (MQL) volume growth at constant budget. Gained via creative + scoring + sequencing, not extra spend.", proof: "B2B SaaS + Education" },
        { num: "04", metric: "91 %", unit: "retention rate", label: "Loyal clients", body: "Annual renewal rate on our contracts. We run month-to-month after calibration \u2014 clients stay because it works.", proof: "2023\u20132026 \u00b7 monthly contracts" },
      ],
      footer: "Figures verifiable on request. Free 45-minute account audit.",
    },
    franchise: {
      eyebrow: "For networks",
      title: "Franchises & networks.",
      sub: "A dedicated protocol for multi-location brands. Centralised acquisition, franchisee recruitment, consolidated HQ + local reporting.",
      intro: "Running a network of 10, 50 or 200 locations is not managed like a single brand. Pooled budget, geo-targeted campaigns by catchment area, permanent tension between brand consistency and local autonomy. We built a specific protocol.",
      pillars: [
        { num: "01", name: "Local acquisition", body: "Geo-targeted campaigns per location. Pooled budget, locally-adapted creative, drive-to-store attribution measured." },
        { num: "02", name: "Franchisee recruitment", body: "Dedicated candidate funnel: region-based landing pages, lead scoring, email nurturing, automated HQ qualification." },
        { num: "03", name: "Brand consistency", body: "Centralised media guidelines, on-demand local assets, HQ validation on every creative. No drift, no inconsistency." },
        { num: "04", name: "Consolidated reporting", body: "HQ dashboard: performance per location, region, format. Franchisees see their numbers, HQ sees the whole." },
      ],
      network: {
        title: "Sectors we work in",
        items: [
          { sector: "Restaurants & fast food", points: "Franchises & independents", kpi: "+28% traffic", period: "Early results 60d" },
          { sector: "Bakery", points: "Regional networks", kpi: "+22% visits", period: "AOV tracked" },
          { sector: "Hair salons", points: "Salons & small networks", kpi: "\u00d71.9 bookings", period: "90 days" },
          { sector: "Small construction", points: "Tradespeople & small firms", kpi: "\u221219% CPL", period: "4\u20136 month cycle" },
        ],
      },
      cta: "Talk network development",
    },
    clients: {
      title: "Brands that trust us with their accounts",
      names: ["Atelier Nord", "Maison Verrier", "Orbite", "Forme & Fond", "Kairos SaaS", "Studio Hauteville", "Maisonneuve", "Paloma"],
    },
    journal: {
      eyebrow: "Journal",
      title: "What we learn.",
      sub: "We publish what we discover while operating. No SEO content, no editorial calendar: only what we find useful to current and future clients.",
      items: [
        { cat: "Tracking", date: "Apr. 2026", title: "Conversions API: why 9 out of 10 accounts are wired wrong", excerpt: "After auditing 60 accounts in 12 months, here are the three recurring mistakes causing 15 to 40 % data loss \u2014 and how to fix them in under a week.", read: "8 min" },
        { cat: "Creative", date: "Mar. 2026", title: "The creative pipeline that runs across all our clients", excerpt: "Production, brief, iteration, measurement. Our complete process to continuously ship videos, carousels and images, and replace losers in under 72 hours.", read: "12 min" },
        { cat: "Strategy", date: "Feb. 2026", title: "Stop optimising on ROAS: a simple contribution model", excerpt: "Reported ROAS lies. We unpack the contribution model we use with DTC clients to make budget decisions based on real margin.", read: "6 min" },
        { cat: "Google", date: "Jan. 2026", title: "PMax in 2026: what actually works after 40 campaigns", excerpt: "Performance Max remains a black box \u2014 but 40 campaigns later, we\u2019ve identified 7 levers that move the needle and 4 traps to avoid at all costs.", read: "10 min" },
        { cat: "Networks", date: "Dec. 2025", title: "Franchisee acquisition via Meta Ads: 3 networks reviewed", excerpt: "How we recruit 8 to 25 franchisee candidates per month for our clients, with a \u20ac40 to \u20ac80 CPL and a 35 % qualification rate.", read: "9 min" },
        { cat: "B2B", date: "Nov. 2025", title: "Google Ads for SaaS: why pure Search isn\u2019t enough anymore", excerpt: "B2B Search is saturated. Combining Search + Display remarketing + LinkedIn, and why sequence matters more than any single channel.", read: "7 min" },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Things we get asked often.",
      items: [
        { q: "What is your minimum budget?", a: "No rigid floor: we adapt to each client\u2019s budget and design the setup that gets the best results/investment ratio. The logic is the same at every spend level: every euro controlled, every euro justified." },
        { q: "How are you paid?", a: "Fixed monthly fee, no percentage of media spend. This guarantees our recommendations aren\u2019t biased by our own compensation." },
        { q: "Which sectors do you cover?", a: "Restaurants & fast food, bakery, hair salons, small construction businesses. We also support franchisors who want to structure and grow their network, as well as operators who simply want to drive more customers to their stores or website." },
        { q: "What\u2019s the minimum commitment?", a: "No lock-in. No contract holding you down: you stay because results follow, not because a clause forces you to." },
        { q: "How soon do you see first results?", a: "First signals show within 30 days \u2014 once tracking is rebuilt and campaigns restructured. The real performance step-up happens in months 2 and 3, once the algorithms have converged on clean data." },
      ],
    },
    ba: {
      eyebrow: "Before \u2192 After",
      title: "What actually changes.",
      sub: "The first six months with Scalify Labs transform how you operate paid acquisition. Here\u2019s the difference, point by point.",
      before_label: "Before Scalify",
      after_label: "After Scalify",
      rows: [
        { label: "Tracking", before: "Browser pixel only. 30 to 40 % of conversions lost to blockers and iOS.", after: "Server-side tracking, Conversions API live. +30 % data uplift, reliable decisions." },
        { label: "Decisions", before: "Gut-feel arbitrage, based on Meta\u2019s reported ROAS.", after: "Decisions on real margin, based on incremental contribution." },
        { label: "Creative", before: "3 to 5 variants a month, briefs over email, random production.", after: "Continuous video/carousel/image variation, systematic pipeline, winning combination isolated." },
        { label: "Reporting", before: "Monthly PDF report, numbers interpreted by the agency.", after: "Live dashboard, direct access, weekly review." },
        { label: "Account structure", before: "Disorganised account, generic audiences, untiered metrics. Budget bleeds across campaigns that compete against each other.", after: "Ultra-personalised structure, hand-controlled. Segmented audiences, metrics tiered with precision, best results/spend ratio isolated campaign by campaign." },
        { label: "Compensation", before: "% of media spend \u2014 agency earns more when you spend more.", after: "Fixed monthly fee \u2014 zero bias on our recommendations." },
        { label: "Commitment", before: "12-month contract, penalty on termination.", after: "No lock-in. You stay because results follow, not because a contract forces you to." },
      ],
      stamp: "Scalify Protocol \u00b7 applied to every account in portfolio",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let\u2019s talk about your accounts.",
      sub: "A free 45-minute audit. We look at your accounts live, identify three immediate levers, and hand you a written document. No commitment.",
      form: {
        name: "Name", company: "Company", email: "Email",
        budget: "Monthly media budget",
        budget_opts: ["< \u20ac1k / mo", "\u20ac1\u20133k / mo", "\u20ac3\u20138k / mo", "\u20ac8k+ / mo"],
        message: "Context", submit: "Send request",
        consent: "By submitting, you agree to be contacted within 48 business hours.",
      },
      direct: "Or write us: contact@scalifylabs.com",
    },
    footer: {
      tagline: "Independent paid media agency.",
      address: "Address \u00b7 coming soon",
      copy: "\u00a9 2026 Scalify Labs \u00b7 All rights reserved",
      links: ["Legal notice", "Privacy policy", "Terms of service"],
      legal: {
        "Legal notice": {
          title: "Legal notice",
          body: [
            { h: "Publisher", p: "The scalifylabs.com website is published by Scalify Labs, an independent media agency. Legal name, registration number, legal form and share capital: currently being registered, information updated once finalised." },
            { h: "Registered office", p: "Registered office address: currently being registered. Full details will be published once the registration certificate is received." },
            { h: "Publication director", p: "The publication director is the legal representative of Scalify Labs. For any editorial request, write to contact@scalifylabs.com." },
            { h: "Hosting", p: "The site is hosted by a specialist technical provider. The full identity and contact details of the host are available on written request to contact@scalifylabs.com." },
            { h: "Intellectual property", p: "All content on this website \u2014 texts, images, graphics, logo, icons, videos, structure, source code \u2014 is the exclusive property of Scalify Labs or its partners. Any reproduction, representation, adaptation, modification, publication or transmission, in whole or in part, by any means whatsoever, is prohibited without prior written authorisation." },
            { h: "Hyperlinks", p: "The creation of hyperlinks to scalifylabs.com is subject to prior written agreement. Scalify Labs cannot be held responsible for the content of third-party sites linked from this site." },
            { h: "Contact", p: "For any question relating to the site or its content: contact@scalifylabs.com." },
          ],
        },
        "Privacy policy": {
          title: "Privacy policy",
          body: [
            { h: "Data controller", p: "Scalify Labs is the controller for personal data collected via this site and through its services. For any question regarding data processing, write to contact@scalifylabs.com." },
            { h: "Data collected", p: "We collect only strictly necessary data: first name, last name, company, email address, phone number, request context, indicative media budget. No sensitive data within the meaning of GDPR (article 9) is collected." },
            { h: "Purposes", p: "Data collected via our contact form is used to answer your request, qualify your project, prepare a free audit and, where applicable, draft a commercial proposal. It is never used for automated prospecting or sold." },
            { h: "Legal basis", p: "Processing is based on your explicit consent (article 6.1.a GDPR) upon form submission, or on Scalify Labs\u2019 legitimate interest in managing inbound commercial exchanges (article 6.1.f)." },
            { h: "Retention", p: "Data is kept for the duration of the contractual relationship, then archived for three years from the last contact, before final deletion. Accounting data is kept for ten years in accordance with legal obligations." },
            { h: "Recipients", p: "Data is exclusively accessible to Scalify Labs\u2019 internal teams. No data is transferred to commercial third parties. Our technical tools (CRM, emailing, hosting) are located within the European Union or covered by standard contractual clauses compliant with GDPR." },
            { h: "Your rights", p: "Under GDPR, you have rights of access, rectification, erasure, restriction, objection and portability. You can exercise them by writing to contact@scalifylabs.com. You may also lodge a complaint with the relevant data protection authority." },
            { h: "Cookies", p: "The site only uses technical cookies strictly necessary for its operation. No advertising or third-party tracking cookies are placed without prior consent." },
          ],
        },
        "Terms of service": {
          title: "Terms of service",
          body: [
            { h: "Purpose", p: "These terms govern the advisory and media operation services provided by Scalify Labs to its professional clients. They apply to any signed service contract and prevail over any other conditions from the client, unless otherwise agreed in writing." },
            { h: "Services", p: "Scalify Labs provides audit, technical setup (tracking, account structure), Meta Ads and Google Ads campaign management, creative variant production, and reporting. The exact scope is set out in the signed commercial proposal." },
            { h: "Compensation", p: "Scalify Labs is paid via a fixed monthly fee, independent of the media budget invested by the client. No percentage of media spend is taken. Amounts, payment terms and any revisions are detailed in the commercial proposal." },
            { h: "Media budget", p: "The media budget is paid directly by the client to Meta, Google or any other ad platform. Scalify Labs neither holds nor advances advertising funds. The client retains full ownership of its advertising accounts and access." },
            { h: "Term and termination", p: "Services are provided without a fixed term. After an initial three-month calibration period, the contract continues month-to-month. Either party may terminate in writing with thirty days\u2019 notice, without penalty." },
            { h: "Obligations", p: "Scalify Labs is bound by a reinforced best-efforts obligation, in line with industry best practice. The client undertakes to provide, in good time, access, creative assets and information needed for the service, and to pay fees per the agreed schedule." },
            { h: "Confidentiality", p: "Each party agrees to preserve the confidentiality of information exchanged during the engagement, throughout its duration and for three years afterwards. Scalify Labs may cite the client\u2019s name and logo as a reference, unless objected to in writing." },
            { h: "Liability", p: "Scalify Labs\u2019 liability is strictly limited to the amount of fees received over the six months preceding the triggering event. Scalify Labs cannot be held responsible for ad platforms\u2019 algorithmic decisions or for performance variations beyond its control." },
            { h: "Governing law", p: "These terms are governed by French law. Any dispute will be submitted, failing amicable resolution, to the competent courts of Scalify Labs\u2019 registered office jurisdiction." },
          ],
        },
      },
    },
  },
};

export const JOURNAL_BODIES: Record<string, JournalBody[]> = {
  fr: [
    {
      body: [
        { kind: "lede", text: "En douze mois, nous avons audit\u00e9 60 comptes Meta et Google. Dans 9 cas sur 10, la cause principale du plateau de performance n\u2019est ni la cr\u00e9a, ni l\u2019ench\u00e8re, ni le budget : c\u2019est un tracking mal branch\u00e9." },
        { kind: "h3", text: "01. Le pixel seul ne suffit plus." },
        { kind: "p", text: "iOS 14.5, ITP, le consentement cookies, les extensions \u2014 \u00e0 chaque couche, c\u2019est 5 \u00e0 15 % du signal qui dispara\u00eet. Quand on additionne, on se retrouve avec des algorithmes qui prennent des d\u00e9cisions sur 50 \u00e0 70 % de la r\u00e9alit\u00e9. L\u2019algorithme ne ment pas ; il est juste mal nourri." },
        { kind: "h3", text: "02. Le serveur-side n\u2019est pas une option \u2014 c\u2019est la base." },
        { kind: "p", text: "Nous installons syst\u00e9matiquement une Conversions API c\u00f4t\u00e9 Meta et un Enhanced Conversions c\u00f4t\u00e9 Google. Le gain mesur\u00e9 sur les 20 derniers comptes : +18 % de signaux remont\u00e9s en moyenne, jusqu\u2019\u00e0 +42 % sur les comptes en mauvais \u00e9tat initial. Ce n\u2019est pas marginal. C\u2019est ce qui s\u00e9pare un compte qui scale d\u2019un compte qui stagne." },
        { kind: "h3", text: "03. Les trois erreurs r\u00e9currentes." },
        { kind: "p", text: "D\u00e9duplication manquante entre pixel et CAPI \u2014 vous comptez chaque conversion deux fois. Param\u00e8tre client_user_data incomplet \u2014 Meta n\u2019arrive plus \u00e0 matcher l\u2019\u00e9v\u00e9nement \u00e0 un utilisateur. Event timestamp d\u00e9cal\u00e9 \u2014 vous remontez des conversions avec la date du cron, pas celle de l\u2019achat." },
        { kind: "p", text: "Ces trois erreurs, nous les voyons partout. Y compris chez des agences s\u00e9rieuses. La diff\u00e9rence se joue sur 30 minutes de v\u00e9rification hebdomadaire \u2014 que personne ne fait." },
        { kind: "callout", text: "Notre r\u00e8gle : aucune campagne scale sans un tracking audit\u00e9 et document\u00e9. Si le sol tremble, rien ne tient." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "La cr\u00e9a est redevenue la variable n\u00b01 de la performance. Plus que l\u2019ench\u00e8re, plus que l\u2019audience. Voici comment nous sortons 20 \u00e0 30 variations par mois, sans faire baisser la qualit\u00e9." },
        { kind: "h3", text: "La boucle hebdomadaire." },
        { kind: "p", text: "Lundi : lecture des performances de la semaine pass\u00e9e, identification des 2-3 angles qui d\u00e9collent. Mardi : brief pr\u00e9cis (hook, corps, call-to-action, format). Mercredi : tournage \u2014 un cr\u00e9ateur, un kit, trois formats (vid\u00e9o, statique, carrousel). Jeudi : montage et lancement. Vendredi : lecture des premi\u00e8res lectures de signal." },
        { kind: "h3", text: "La r\u00e8gle du 3x3." },
        { kind: "p", text: "Chaque angle est d\u00e9clin\u00e9 en 3 hooks \u00d7 3 formats = 9 variations. On ne sort jamais un seul asset : on sort une matrice. Meta a besoin de volume de cr\u00e9a pour bien apprendre ; ne pas lui en donner, c\u2019est brider la machine." },
        { kind: "h3", text: "Ce que nous avons arr\u00eat\u00e9 de faire." },
        { kind: "p", text: "Les productions \u00e0 2 000 \u20ac. Les scripts \u00e0 six intervenants. Les d\u00e9lais \u00e0 trois semaines. Tout ce qui ralentit la boucle. La cr\u00e9a gagnante est rarement celle qu\u2019on a la plus travaill\u00e9e \u2014 c\u2019est celle qu\u2019on a le plus test\u00e9e." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "Le ROAS affich\u00e9 dans le Business Manager n\u2019est pas faux. Il est juste incomplet. Nous exposons le mod\u00e8le de contribution simple que nous utilisons pour r\u00e9ellement piloter." },
        { kind: "h3", text: "Pourquoi le ROAS seul ne suffit plus." },
        { kind: "p", text: "Meta attribue \u00e0 Meta. Google attribue \u00e0 Google. TikTok attribue \u00e0 TikTok. Si vous additionnez les ROAS plateformes, vous d\u00e9passez souvent 100 % du chiffre d\u2019affaires r\u00e9el. Ce n\u2019est pas de la malhonnêtet\u00e9 \u2014 c\u2019est une logique d\u2019attribution last-click isol\u00e9e par plateforme." },
        { kind: "h3", text: "Le mod\u00e8le de contribution Scalify." },
        { kind: "p", text: "Nous travaillons sur trois niveaux : (1) le ROAS plateforme \u2014 utile pour l\u2019arbitrage intra-plateforme ; (2) le MER (media efficiency ratio) \u2014 chiffre d\u2019affaires total / d\u00e9pense marketing totale \u2014 qui donne la sant\u00e9 globale ; (3) le iMER \u2014 MER incr\u00e9mental, calcul\u00e9 via holdouts g\u00e9ographiques ou temporels, qui isole la vraie valeur apport\u00e9e par les m\u00e9dias payants." },
        { kind: "h3", text: "Ce que \u00e7a change concr\u00e8tement." },
        { kind: "p", text: "Sur un de nos clients DTC, le ROAS affich\u00e9 \u00e9tait de 3,8. Le MER \u00e9tait de 2,4. Le iMER \u00e9tait de 1,6. Nous avons coup\u00e9 22 % du budget sur les campagnes brand (sur-attribu\u00e9es), et r\u00e9investi sur prospecting cold. R\u00e9sultat \u00e0 60 jours : chiffre d\u2019affaires total +14 %, marge brute +19 %." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "Performance Max reste une bo\u00eete noire, par construction. Mais apr\u00e8s 40 campagnes op\u00e9r\u00e9es, nous avons identifi\u00e9 7 leviers qui changent la trajectoire \u2014 et trois pi\u00e8ges qui la brisent." },
        { kind: "h3", text: "Les 7 leviers." },
        { kind: "p", text: "(1) Segmenter par marge, pas par produit. (2) Feed de shopping enrichi : titres, attributs personnalis\u00e9s, labels. (3) Audiences signal \u2014 pas en targeting, en priorisation. (4) Exclusion des termes brand pour mesurer l\u2019incr\u00e9mentalit\u00e9. (5) Value bidding avec co\u00fbt par acquisition cible (tCPA) plancher. (6) Asset groups par th\u00e8me, pas par format. (7) Scripts de monitoring quotidien sur search terms." },
        { kind: "h3", text: "Les 3 pi\u00e8ges." },
        { kind: "p", text: "Ne pas isoler le brand \u2014 vous allez cannibaliser votre propre Search. Ne pas surveiller les search terms \u2014 vous payez du trafic g\u00e9n\u00e9rique \u00e0 prix fort. Ne pas it\u00e9rer sur les cr\u00e9as \u2014 PMax aime la nouveaut\u00e9, la lassitude tue le ROAS en 3 semaines." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "Depuis deux ans, nous recrutons entre 8 et 25 candidats-franchis\u00e9s qualifi\u00e9s par mois pour trois r\u00e9seaux. Co\u00fbt par rendez-vous qualifi\u00e9 : entre 60 et 180 \u20ac. Voici comment." },
        { kind: "h3", text: "Le funnel qui marche." },
        { kind: "p", text: "Ads Meta (lookalikes sur franchis\u00e9s existants + audiences d\u2019int\u00e9r\u00eats entrepreneuriaux) \u2192 landing d\u00e9di\u00e9e avec 4-5 preuves ultra-concr\u00e8tes \u2192 formulaire long (8-12 questions) pour auto-qualifier \u2192 appel de d\u00e9couverte de 20 min \u2192 dossier complet. Le formulaire long, c\u2019est la cl\u00e9 : il filtre 70 % des curieux." },
        { kind: "h3", text: "Ce qui plombe les r\u00e9seaux." },
        { kind: "p", text: "Formulaires trop courts (vous payez des candidats non s\u00e9rieux), vid\u00e9os de franchis\u00e9s pas assez incarn\u00e9es (on veut le vrai, pas le corporate), parcours d\u2019admission qui tra\u00eene (plus de 2 semaines = 40 % d\u2019abandons). La vitesse d\u2019ex\u00e9cution du r\u00e9seau compte autant que le m\u00e9dia." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "En B2B SaaS, le Search seul ne suffit plus. Combiner Search + Display remarketing + LinkedIn, et surtout mesurer la contribution \u2014 pas l\u2019attribution \u2014 change tout." },
        { kind: "h3", text: "Le trio qui scale." },
        { kind: "p", text: "Search Google pour capter l\u2019intention haute (mots-cl\u00e9s concurrents + cat\u00e9goriels). Display remarketing pour relancer les visiteurs non convertis avec des preuves m\u00e9tier. LinkedIn Ads Audience Matching sur les comptes cibles \u2014 ABM l\u00e9ger, sans le co\u00fbt d\u2019une vraie plateforme ABM." },
        { kind: "h3", text: "Le KPI qui compte vraiment." },
        { kind: "p", text: "Pas le co\u00fbt par lead. Pas le co\u00fbt par MQL. Le co\u00fbt par opportunit\u00e9 qualifi\u00e9e sortie du pipeline commercial. C\u2019est le seul chiffre qui parle aux \u00e9quipes finance et qui permet de r\u00e9ellement arbitrer entre canaux." },
      ],
    },
  ],
  en: [
    {
      body: [
        { kind: "lede", text: "Over twelve months, we audited 60 Meta and Google accounts. In 9 out of 10 cases, the main cause of the performance plateau wasn\u2019t creative, wasn\u2019t bidding, wasn\u2019t budget: it was tracking wired wrong." },
        { kind: "h3", text: "01. The pixel alone isn\u2019t enough anymore." },
        { kind: "p", text: "iOS 14.5, ITP, cookie consent, extensions \u2014 each layer strips 5 to 15 % of signal. Stacked, you end up with algorithms making decisions on 50-70 % of reality. The algorithm isn\u2019t lying; it\u2019s just poorly fed." },
        { kind: "h3", text: "02. Server-side isn\u2019t optional \u2014 it\u2019s the foundation." },
        { kind: "p", text: "We systematically install Meta Conversions API and Google Enhanced Conversions. Measured gain across the last 20 accounts: +18 % additional signal on average, up to +42 % on accounts in poor initial state. Not marginal. This is what separates accounts that scale from accounts that stall." },
        { kind: "h3", text: "03. The three recurring mistakes." },
        { kind: "p", text: "Missing deduplication between pixel and CAPI \u2014 you\u2019re double-counting. Incomplete client_user_data \u2014 Meta can\u2019t match the event to a user anymore. Shifted event timestamp \u2014 you\u2019re sending conversions with the cron date, not the purchase date." },
        { kind: "p", text: "We see these mistakes everywhere. Including at serious agencies. The difference comes down to 30 minutes of weekly verification \u2014 which nobody does." },
        { kind: "callout", text: "Our rule: no campaign scales without audited and documented tracking. If the floor shakes, nothing stands." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "Creative has become the #1 performance variable again. More than bidding, more than audience. Here\u2019s how we ship 20-30 variations a month without losing quality." },
        { kind: "h3", text: "The weekly loop." },
        { kind: "p", text: "Monday: read last week\u2019s performance, identify the 2-3 angles lifting off. Tuesday: precise brief (hook, body, CTA, format). Wednesday: shoot \u2014 one creator, one kit, three formats. Thursday: edit and launch. Friday: read early signals." },
        { kind: "h3", text: "The 3\u00d73 rule." },
        { kind: "p", text: "Each angle is declined in 3 hooks \u00d7 3 formats = 9 variations. We never ship a single asset: we ship a matrix. Meta needs creative volume to learn well; starving it cripples the machine." },
        { kind: "h3", text: "What we stopped doing." },
        { kind: "p", text: "The $2,000 productions. The six-stakeholder scripts. The three-week timelines. Anything that slows the loop. The winning creative is rarely the one you\u2019ve polished most \u2014 it\u2019s the one you\u2019ve tested most." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "The ROAS displayed in Business Manager isn\u2019t wrong. It\u2019s just incomplete. Here\u2019s the simple contribution model we actually use to steer." },
        { kind: "h3", text: "Why ROAS alone isn\u2019t enough." },
        { kind: "p", text: "Meta attributes to Meta. Google to Google. TikTok to TikTok. Add them up and you often exceed 100 % of real revenue. Not dishonesty \u2014 just per-platform last-click logic in isolation." },
        { kind: "h3", text: "The Scalify contribution model." },
        { kind: "p", text: "Three levels: (1) platform ROAS \u2014 useful for intra-platform arbitrage; (2) MER \u2014 total revenue / total marketing spend \u2014 gives global health; (3) iMER \u2014 incremental MER via geo or time holdouts \u2014 isolates true paid-media lift." },
        { kind: "h3", text: "What it changes." },
        { kind: "p", text: "On one DTC client, reported ROAS was 3.8. MER was 2.4. iMER was 1.6. We cut 22 % of brand budget (over-attributed), reinvested in cold prospecting. 60-day result: +14 % total revenue, +19 % gross margin." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "Performance Max remains a black box by design. But after 40 campaigns operated, we\u2019ve identified 7 levers that change the trajectory \u2014 and three traps that break it." },
        { kind: "h3", text: "The 7 levers." },
        { kind: "p", text: "(1) Segment by margin, not by product. (2) Enriched shopping feed: titles, custom attributes, labels. (3) Audience signals \u2014 as priority, not targeting. (4) Exclude brand terms to measure incrementality. (5) Value bidding with tCPA floor. (6) Asset groups by theme, not format. (7) Daily search-terms monitoring scripts." },
        { kind: "h3", text: "The 3 traps." },
        { kind: "p", text: "Not isolating brand \u2014 you\u2019ll cannibalise your own Search. Not watching search terms \u2014 you pay premium for generic traffic. Not iterating on creative \u2014 PMax loves novelty, fatigue kills ROAS in 3 weeks." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "For two years we\u2019ve been recruiting 8 to 25 qualified franchisee candidates per month for three networks. Cost per qualified meeting: \u20ac60-180. Here\u2019s how." },
        { kind: "h3", text: "The funnel that works." },
        { kind: "p", text: "Meta Ads (lookalikes on existing franchisees + entrepreneurial interest audiences) \u2192 dedicated landing with 4-5 ultra-concrete proofs \u2192 long form (8-12 questions) for self-qualification \u2192 20-min discovery call \u2192 full application. The long form is the key: it filters 70 % of curious browsers." },
        { kind: "h3", text: "What sinks networks." },
        { kind: "p", text: "Too-short forms (you pay for non-serious candidates), franchisee videos not embodied enough (we want real, not corporate), dragging admission journeys (over 2 weeks = 40 % drop-off). Network execution speed matters as much as media." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "In B2B SaaS, Search alone isn\u2019t enough. Combining Search + Display remarketing + LinkedIn \u2014 and above all measuring contribution, not attribution \u2014 changes everything." },
        { kind: "h3", text: "The trio that scales." },
        { kind: "p", text: "Google Search for high intent (competitor + categorical keywords). Display remarketing to re-engage unconverted visitors with business proof. LinkedIn Ads Audience Matching on target accounts \u2014 lightweight ABM without the real ABM platform cost." },
        { kind: "h3", text: "The KPI that matters." },
        { kind: "p", text: "Not cost per lead. Not cost per MQL. Cost per qualified opportunity out of the sales pipeline. The only number that speaks to finance and actually lets you arbitrate between channels." },
      ],
    },
  ],
};
