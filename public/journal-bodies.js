// Full article bodies for the Journal modal.
// Keys match the French/English title (normalized). Fallback shown if not found.
window.SCALIFY_JOURNAL_BODIES = {
  fr: [
    {
      // 0 — Tracking serveur
      body: [
        { kind: "lede", text: "En douze mois, nous avons audité 60 comptes Meta et Google. Dans 9 cas sur 10, la cause principale du plateau de performance n'est ni la créa, ni l'enchère, ni le budget : c'est un tracking mal branché." },
        { kind: "h3", text: "01. Le pixel seul ne suffit plus." },
        { kind: "p", text: "iOS 14.5, ITP, le consentement cookies, les extensions — à chaque couche, c'est 5 à 15 % du signal qui disparaît. Quand on additionne, on se retrouve avec des algorithmes qui prennent des décisions sur 50 à 70 % de la réalité. L'algorithme ne ment pas ; il est juste mal nourri." },
        { kind: "h3", text: "02. Le serveur-side n'est pas une option — c'est la base." },
        { kind: "p", text: "Nous installons systématiquement une Conversions API côté Meta et un Enhanced Conversions côté Google. Le gain mesuré sur les 20 derniers comptes : +18 % de signaux remontés en moyenne, jusqu'à +42 % sur les comptes en mauvais état initial. Ce n'est pas marginal. C'est ce qui sépare un compte qui scale d'un compte qui stagne." },
        { kind: "h3", text: "03. Les trois erreurs récurrentes." },
        { kind: "p", text: "Déduplication manquante entre pixel et CAPI — vous comptez chaque conversion deux fois. Paramètre client_user_data incomplet — Meta n'arrive plus à matcher l'événement à un utilisateur. Event timestamp décalé — vous remontez des conversions avec la date du cron, pas celle de l'achat." },
        { kind: "p", text: "Ces trois erreurs, nous les voyons partout. Y compris chez des agences sérieuses. La différence se joue sur 30 minutes de vérification hebdomadaire — que personne ne fait." },
        { kind: "callout", text: "Notre règle : aucune campagne scale sans un tracking audité et documenté. Si le sol tremble, rien ne tient." },
      ],
    },
    {
      // 1 — Pipeline créa
      body: [
        { kind: "lede", text: "La créa est redevenue la variable n°1 de la performance. Plus que l'enchère, plus que l'audience. Voici comment nous sortons 20 à 30 variations par mois, sans faire baisser la qualité." },
        { kind: "h3", text: "La boucle hebdomadaire." },
        { kind: "p", text: "Lundi : lecture des performances de la semaine passée, identification des 2-3 angles qui décollent. Mardi : brief précis (hook, corps, call-to-action, format). Mercredi : tournage — un créateur, un kit, trois formats (vidéo, statique, carrousel). Jeudi : montage et lancement. Vendredi : lecture des premières lectures de signal." },
        { kind: "h3", text: "La règle du 3x3." },
        { kind: "p", text: "Chaque angle est décliné en 3 hooks × 3 formats = 9 variations. On ne sort jamais un seul asset : on sort une matrice. Meta a besoin de volume de créa pour bien apprendre ; ne pas lui en donner, c'est brider la machine." },
        { kind: "h3", text: "Ce que nous avons arrêté de faire." },
        { kind: "p", text: "Les productions à 2 000 €. Les scripts à six intervenants. Les délais à trois semaines. Tout ce qui ralentit la boucle. La créa gagnante est rarement celle qu'on a la plus travaillée — c'est celle qu'on a le plus testée." },
      ],
    },
    {
      // 2 — ROAS
      body: [
        { kind: "lede", text: "Le ROAS affiché dans le Business Manager n'est pas faux. Il est juste incomplet. Nous exposons le modèle de contribution simple que nous utilisons pour réellement piloter." },
        { kind: "h3", text: "Pourquoi le ROAS seul ne suffit plus." },
        { kind: "p", text: "Meta attribue à Meta. Google attribue à Google. TikTok attribue à TikTok. Si vous additionnez les ROAS plateformes, vous dépassez souvent 100 % du chiffre d'affaires réel. Ce n'est pas de la malhonnêteté — c'est une logique d'attribution last-click isolée par plateforme." },
        { kind: "h3", text: "Le modèle de contribution Scalify." },
        { kind: "p", text: "Nous travaillons sur trois niveaux : (1) le ROAS plateforme — utile pour l'arbitrage intra-plateforme ; (2) le MER (media efficiency ratio) — chiffre d'affaires total / dépense marketing totale — qui donne la santé globale ; (3) le iMER — MER incrémental, calculé via holdouts géographiques ou temporels, qui isole la vraie valeur apportée par les médias payants." },
        { kind: "h3", text: "Ce que ça change concrètement." },
        { kind: "p", text: "Sur un de nos clients DTC, le ROAS affiché était de 3,8. Le MER était de 2,4. Le iMER était de 1,6. Nous avons coupé 22 % du budget sur les campagnes brand (sur-attribuées), et réinvesti sur prospecting cold. Résultat à 60 jours : chiffre d'affaires total +14 %, marge brute +19 %." },
      ],
    },
    {
      // 3 — PMax
      body: [
        { kind: "lede", text: "Performance Max reste une boîte noire, par construction. Mais après 40 campagnes opérées, nous avons identifié 7 leviers qui changent la trajectoire — et trois pièges qui la brisent." },
        { kind: "h3", text: "Les 7 leviers." },
        { kind: "p", text: "(1) Segmenter par marge, pas par produit. (2) Feed de shopping enrichi : titres, attributs personnalisés, labels. (3) Audiences signal — pas en targeting, en priorisation. (4) Exclusion des termes brand pour mesurer l'incrémentalité. (5) Value bidding avec coût par acquisition cible (tCPA) plancher. (6) Asset groups par thème, pas par format. (7) Scripts de monitoring quotidien sur search terms." },
        { kind: "h3", text: "Les 3 pièges." },
        { kind: "p", text: "Ne pas isoler le brand — vous allez cannibaliser votre propre Search. Ne pas surveiller les search terms — vous payez du trafic générique à prix fort. Ne pas itérer sur les créas — PMax aime la nouveauté, la lassitude tue le ROAS en 3 semaines." },
      ],
    },
    {
      // 4 — Franchisés
      body: [
        { kind: "lede", text: "Depuis deux ans, nous recrutons entre 8 et 25 candidats-franchisés qualifiés par mois pour trois réseaux. Coût par rendez-vous qualifié : entre 60 et 180 €. Voici comment." },
        { kind: "h3", text: "Le funnel qui marche." },
        { kind: "p", text: "Ads Meta (lookalikes sur franchisés existants + audiences d'intérêts entrepreneuriaux) → landing dédiée avec 4-5 preuves ultra-concrètes → formulaire long (8-12 questions) pour auto-qualifier → appel de découverte de 20 min → dossier complet. Le formulaire long, c'est la clé : il filtre 70 % des curieux." },
        { kind: "h3", text: "Ce qui plombe les réseaux." },
        { kind: "p", text: "Formulaires trop courts (vous payez des candidats non sérieux), vidéos de franchisés pas assez incarnées (on veut le vrai, pas le corporate), parcours d'admission qui traîne (plus de 2 semaines = 40 % d'abandons). La vitesse d'exécution du réseau compte autant que le média." },
      ],
    },
    {
      // 5 — SaaS Google Ads
      body: [
        { kind: "lede", text: "En B2B SaaS, le Search seul ne suffit plus. Combiner Search + Display remarketing + LinkedIn, et surtout mesurer la contribution — pas l'attribution — change tout." },
        { kind: "h3", text: "Le trio qui scale." },
        { kind: "p", text: "Search Google pour capter l'intention haute (mots-clés concurrents + catégoriels). Display remarketing pour relancer les visiteurs non convertis avec des preuves métier. LinkedIn Ads Audience Matching sur les comptes cibles — ABM léger, sans le coût d'une vraie plateforme ABM." },
        { kind: "h3", text: "Le KPI qui compte vraiment." },
        { kind: "p", text: "Pas le coût par lead. Pas le coût par MQL. Le coût par opportunité qualifiée sortie du pipeline commercial. C'est le seul chiffre qui parle aux équipes finance et qui permet de réellement arbitrer entre canaux." },
      ],
    },
  ],
  en: [
    {
      // 0
      body: [
        { kind: "lede", text: "Over twelve months, we audited 60 Meta and Google accounts. In 9 out of 10 cases, the main cause of the performance plateau wasn't creative, wasn't bidding, wasn't budget: it was tracking wired wrong." },
        { kind: "h3", text: "01. The pixel alone isn't enough anymore." },
        { kind: "p", text: "iOS 14.5, ITP, cookie consent, extensions — each layer strips 5 to 15 % of signal. Stacked, you end up with algorithms making decisions on 50-70 % of reality. The algorithm isn't lying; it's just poorly fed." },
        { kind: "h3", text: "02. Server-side isn't optional — it's the foundation." },
        { kind: "p", text: "We systematically install Meta Conversions API and Google Enhanced Conversions. Measured gain across the last 20 accounts: +18 % additional signal on average, up to +42 % on accounts in poor initial state. Not marginal. This is what separates accounts that scale from accounts that stall." },
        { kind: "h3", text: "03. The three recurring mistakes." },
        { kind: "p", text: "Missing deduplication between pixel and CAPI — you're double-counting. Incomplete client_user_data — Meta can't match the event to a user anymore. Shifted event timestamp — you're sending conversions with the cron date, not the purchase date." },
        { kind: "p", text: "We see these mistakes everywhere. Including at serious agencies. The difference comes down to 30 minutes of weekly verification — which nobody does." },
        { kind: "callout", text: "Our rule: no campaign scales without audited and documented tracking. If the floor shakes, nothing stands." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "Creative has become the #1 performance variable again. More than bidding, more than audience. Here's how we ship 20-30 variations a month without losing quality." },
        { kind: "h3", text: "The weekly loop." },
        { kind: "p", text: "Monday: read last week's performance, identify the 2-3 angles lifting off. Tuesday: precise brief (hook, body, CTA, format). Wednesday: shoot — one creator, one kit, three formats. Thursday: edit and launch. Friday: read early signals." },
        { kind: "h3", text: "The 3×3 rule." },
        { kind: "p", text: "Each angle is declined in 3 hooks × 3 formats = 9 variations. We never ship a single asset: we ship a matrix. Meta needs creative volume to learn well; starving it cripples the machine." },
        { kind: "h3", text: "What we stopped doing." },
        { kind: "p", text: "The $2,000 productions. The six-stakeholder scripts. The three-week timelines. Anything that slows the loop. The winning creative is rarely the one you've polished most — it's the one you've tested most." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "The ROAS displayed in Business Manager isn't wrong. It's just incomplete. Here's the simple contribution model we actually use to steer." },
        { kind: "h3", text: "Why ROAS alone isn't enough." },
        { kind: "p", text: "Meta attributes to Meta. Google to Google. TikTok to TikTok. Add them up and you often exceed 100 % of real revenue. Not dishonesty — just per-platform last-click logic in isolation." },
        { kind: "h3", text: "The Scalify contribution model." },
        { kind: "p", text: "Three levels: (1) platform ROAS — useful for intra-platform arbitrage; (2) MER — total revenue / total marketing spend — gives global health; (3) iMER — incremental MER via geo or time holdouts — isolates true paid-media lift." },
        { kind: "h3", text: "What it changes." },
        { kind: "p", text: "On one DTC client, reported ROAS was 3.8. MER was 2.4. iMER was 1.6. We cut 22 % of brand budget (over-attributed), reinvested in cold prospecting. 60-day result: +14 % total revenue, +19 % gross margin." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "Performance Max remains a black box by design. But after 40 campaigns operated, we've identified 7 levers that change the trajectory — and three traps that break it." },
        { kind: "h3", text: "The 7 levers." },
        { kind: "p", text: "(1) Segment by margin, not by product. (2) Enriched shopping feed: titles, custom attributes, labels. (3) Audience signals — as priority, not targeting. (4) Exclude brand terms to measure incrementality. (5) Value bidding with tCPA floor. (6) Asset groups by theme, not format. (7) Daily search-terms monitoring scripts." },
        { kind: "h3", text: "The 3 traps." },
        { kind: "p", text: "Not isolating brand — you'll cannibalise your own Search. Not watching search terms — you pay premium for generic traffic. Not iterating on creative — PMax loves novelty, fatigue kills ROAS in 3 weeks." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "For two years we've been recruiting 8 to 25 qualified franchisee candidates per month for three networks. Cost per qualified meeting: €60-180. Here's how." },
        { kind: "h3", text: "The funnel that works." },
        { kind: "p", text: "Meta Ads (lookalikes on existing franchisees + entrepreneurial interest audiences) → dedicated landing with 4-5 ultra-concrete proofs → long form (8-12 questions) for self-qualification → 20-min discovery call → full application. The long form is the key: it filters 70 % of curious browsers." },
        { kind: "h3", text: "What sinks networks." },
        { kind: "p", text: "Too-short forms (you pay for non-serious candidates), franchisee videos not embodied enough (we want real, not corporate), dragging admission journeys (over 2 weeks = 40 % drop-off). Network execution speed matters as much as media." },
      ],
    },
    {
      body: [
        { kind: "lede", text: "In B2B SaaS, Search alone isn't enough. Combining Search + Display remarketing + LinkedIn — and above all measuring contribution, not attribution — changes everything." },
        { kind: "h3", text: "The trio that scales." },
        { kind: "p", text: "Google Search for high intent (competitor + categorical keywords). Display remarketing to re-engage unconverted visitors with business proof. LinkedIn Ads Audience Matching on target accounts — lightweight ABM without the real ABM platform cost." },
        { kind: "h3", text: "The KPI that matters." },
        { kind: "p", text: "Not cost per lead. Not cost per MQL. Cost per qualified opportunity out of the sales pipeline. The only number that speaks to finance and actually lets you arbitrate between channels." },
      ],
    },
  ],
};
