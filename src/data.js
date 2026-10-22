
//  • Entourez un mot d'astérisques pour le mettre en couleur : "des *produits* tech".
//  • PHOTOS : déposez vos images dans /public puis indiquez le chemin
//    (ex: '/photo.jpg'). Champ vide '' = emplacement « Votre photo ici ».
//  • PROJETS : pour chaque projet, renseignez `link` (site en ligne) et
//    `repo` (dépôt Git). Un bouton n'apparaît que si le champ est rempli.
//  • "À compléter" = valeur d'exemple à remplacer.
// ====================================================================

export const profile = {
  name: 'Nanda Tatmba Wilfried',
  firstName: 'Wilfried',
  initials: 'NW',
  role: { fr: 'Fondateur d’ORYVO · Étudiant Bachelor 3 Informatique & IA', en: 'Founder of ORYVO · Bachelor 3 Computer Science & AI Student' },
  school: 'KEYCE',
  location: 'À compléter', // ex: 'Douala, Cameroun'
  badge: { fr: 'Disponible pour de nouveaux projets', en: 'Available for new projects' },

  // ---- PHOTOS (chemins vers /public) ----
  photo: '/portrait.jpg', // portrait (section Fondateur)
  heroImage: '/profile.jpg', // visuel du hero (même photo, cadrée sur le visage)
  logo: '/oryvo-mark.png', // pastille en haut à gauche (symbole ORYVO)
  oryvoLogo: '/oryvo-logo.png', // logo complet ORYVO (section ORYVO)
  cvFile: '', // ex: '/CV-Wilfried.pdf'

  contact: {
    email: 'brekennando@gmail.com',
    phone: '',
    whatsapp: '', // ex: '+237600000000'
    linkedin: '',
    github: '',
    website: '', // site officiel d'ORYVO
  },
}

export const hero = {
  kicker: { fr: 'Fondateur & CEO — ORYVO', en: 'Founder & CEO — ORYVO' },
  pre: { fr: 'Je construis des', en: 'I build' },
  words: {
    fr: ['produits tech', 'startups', 'solutions IA', 'MVP qui marchent'],
    en: ['tech products', 'startups', 'AI solutions', 'MVPs that work'],
  },
  post: { fr: 'qui changent la donne.', en: 'that change the game.' },
  text: {
    fr: 'Fondateur d’ORYVO, startup d’innovation technologique, je conçois et livre des produits digitaux — et j’accompagne les entrepreneurs de l’idée jusqu’au lancement.',
    en: 'Founder of ORYVO, a technology innovation startup, I design and ship digital products — and I guide entrepreneurs from idea to launch.',
  },
  chips: ['AI', 'Trading', 'Startup'],
  // auto: 'projects' = nombre de projets de la section Réalisations
  stats: [
    { auto: 'projects', suffix: '', label: { fr: 'projets réalisés', en: 'projects built' } },
    { text: 'Exness', label: { fr: 'Business Developer B1 · Remote', en: 'Business Developer B1 · Remote' } },
    { text: 'KEYCE', label: { fr: 'Bachelor 3 · Info & IA', en: 'Bachelor 3 · CS & AI' } },
  ],
}

export const marquee = {
  row1: ['React', 'Python', 'Node.js', 'Machine Learning', 'LLM', 'TypeScript', 'SQL', 'Git', 'API', 'Cloud'],
  row2: {
    fr: ['Cadrage', 'MVP', 'Design UI/UX', 'Développement', 'Lancement', 'Mentorat tech', 'Croissance'],
    en: ['Scoping', 'MVP', 'UI/UX Design', 'Development', 'Launch', 'Tech mentoring', 'Growth'],
  },
}

export const manifesto = {
  label: { fr: 'Manifeste', en: 'Manifesto' },
  text: {
    fr: 'Un seul interlocuteur, de l’idée au produit en ligne. Je conçois, je code et j’ajoute de l’*intelligence* à chaque projet, pour que votre vision devienne *réalité*.',
    en: 'One single contact, from idea to live product. I design, code and add *intelligence* to every project, so your vision becomes *reality*.',
  },
}

export const about = {
  label: { fr: 'Le fondateur', en: 'The founder' },
  title: { fr: 'Étudiant le jour, *bâtisseur* en continu.', en: 'Student by day, *builder* non-stop.' },
  tag: 'Founder · AI · Dev', // étiquette sur la photo
  paragraphs: {
    fr: [
      'Je suis en Bachelor 3 Informatique & Intelligence Artificielle à KEYCE, et le fondateur d’ORYVO. Je mets en pratique ce que j’apprends en construisant de vrais produits pour de vrais utilisateurs.',
      'À compléter : votre histoire — ce qui vous a poussé à créer ORYVO, votre vision de la tech et l’impact que vous visez.',
    ],
    en: [
      'I am a 3rd-year Bachelor student in Computer Science & AI at KEYCE, and the founder of ORYVO. I put what I learn into practice by building real products for real users.',
      'To complete: your story — what pushed you to create ORYVO, your vision of tech and the impact you aim for.',
    ],
  },
  stats: [
    { value: 3, suffix: '', label: { fr: 'année de Bachelor Info & IA', en: 'Bachelor year, CS & AI' } },
    { auto: 'projects', suffix: '', label: { fr: 'projets réalisés, de l’académique au produit', en: 'projects built, from academic to product' } },
    { value: 2, suffix: '', label: { fr: 'rôles actifs : fondateur d’ORYVO & Business Developer', en: 'active roles: ORYVO founder & Business Developer' } },
  ],
  values: {
    label: { fr: 'Mes principes', en: 'My principles' },
    items: [
      { word: 'Rigueur', text: { fr: 'Code propre, testé, documenté.', en: 'Clean, tested, documented code.' } },
      { word: 'Vitesse', text: { fr: 'Livrer vite, itérer mieux.', en: 'Ship fast, iterate better.' } },
      { word: 'Impact', text: { fr: 'Des solutions utiles qui durent.', en: 'Useful solutions that last.' } },
    ],
  },
}

export const oryvo = {
  label: { fr: 'ORYVO', en: 'ORYVO' },
  title: { fr: 'ORYVO, la startup qui *transforme* les idées en produits.', en: 'ORYVO, the startup that *turns* ideas into products.' },
  text: {
    fr: 'ORYVO est une startup d’innovation technologique. Nous concevons nos propres produits et nous accompagnons les entrepreneurs dans la réalisation des leurs, du cadrage à la mise en ligne.',
    en: 'ORYVO is a technology innovation startup. We build our own products and help entrepreneurs bring theirs to life, from scoping to going live.',
  },
  extra: {
    fr: 'À compléter : mission, vision, année de création, équipe, positionnement.',
    en: 'To complete: mission, vision, founding year, team, positioning.',
  },
  pillars: [
    { icon: 'rocket', title: { fr: 'Nos produits', en: 'Our products' }, text: { fr: 'Des solutions technologiques conçues, développées et déployées en interne.', en: 'Technology solutions designed, built and deployed in-house.' } },
    { icon: 'compass', title: { fr: 'Accompagnement', en: 'Guidance' }, text: { fr: 'Un partenaire technique pour les entrepreneurs, de l’idée au lancement.', en: 'A technical partner for entrepreneurs, from idea to launch.' } },
    { icon: 'bolt', title: { fr: 'Innovation', en: 'Innovation' }, text: { fr: 'IA, automatisation et technologies modernes au service des projets.', en: 'AI, automation and modern tech serving every project.' } },
  ],
  stats: [
    { auto: 'projects', suffix: '', label: { fr: 'projets réalisés', en: 'projects delivered' } },
    { value: 0, suffix: '+', label: { fr: 'entrepreneurs accompagnés', en: 'entrepreneurs supported' } },
    { value: 2026, suffix: '', label: { fr: 'année de création (à vérifier)', en: 'founding year (to check)' }, plain: true },
  ],
}

export const support = {
  label: { fr: 'Accompagnement', en: 'Guidance' },
  title: { fr: 'Votre idée mérite plus qu’un *prototype*.', en: 'Your idea deserves more than a *prototype*.' },
  intro: {
    fr: 'ORYVO accompagne les entrepreneurs de bout en bout : un seul partenaire pour cadrer, construire et lancer.',
    en: 'ORYVO supports entrepreneurs end to end: one partner to scope, build and launch.',
  },
  stepsLabel: { fr: 'Notre méthode', en: 'Our method' },
  steps: [
    {
      title: { fr: 'Idée & cadrage', en: 'Idea & scoping' },
      text: { fr: 'On clarifie le problème, la cible et la proposition de valeur. On définit ce qui doit exister en premier.', en: 'We clarify the problem, the audience and the value proposition, and define what must exist first.' },
      out: { fr: ['Cahier des charges', 'Fonctionnalités prioritaires', 'Roadmap'], en: ['Requirements', 'Priority features', 'Roadmap'] },
    },
    {
      title: { fr: 'Validation & MVP', en: 'Validation & MVP' },
      text: { fr: 'On construit la plus petite version utile pour tester l’idée auprès de vrais utilisateurs, vite et à moindre coût.', en: 'We build the smallest useful version to test the idea with real users, fast and affordably.' },
      out: { fr: ['Maquettes', 'MVP fonctionnel', 'Retours utilisateurs'], en: ['Mockups', 'Working MVP', 'User feedback'] },
    },
    {
      title: { fr: 'Design & développement', en: 'Design & development' },
      text: { fr: 'Interface soignée, code solide, architecture pensée pour grandir : le produit prend sa forme définitive.', en: 'Polished interface, solid code, architecture built to scale: the product takes its final shape.' },
      out: { fr: ['UI/UX complet', 'Application web / mobile', 'Tests & qualité'], en: ['Full UI/UX', 'Web / mobile app', 'Tests & quality'] },
    },
    {
      title: { fr: 'Lancement', en: 'Launch' },
      text: { fr: 'Déploiement, mise en ligne, mise en place du suivi : votre produit est prêt à rencontrer son public.', en: 'Deployment, going live and monitoring set-up: your product is ready to meet its audience.' },
      out: { fr: ['Mise en production', 'Suivi & analytics', 'Documentation'], en: ['Go-live', 'Monitoring & analytics', 'Documentation'] },
    },
    {
      title: { fr: 'Croissance', en: 'Growth' },
      text: { fr: 'On continue : évolutions, nouvelles fonctionnalités, automatisation et conseils pour faire grandir l’activité.', en: 'We keep going: updates, new features, automation and advice to grow the business.' },
      out: { fr: ['Évolutions continues', 'Automatisation', 'Conseil stratégique tech'], en: ['Continuous updates', 'Automation', 'Tech strategy advice'] },
    },
  ],
  offersLabel: { fr: 'Ce que je propose', en: 'What I offer' },
  offers: [
    { title: { fr: 'Cadrage de projet', en: 'Project scoping' }, text: { fr: 'Transformer une idée floue en plan clair.', en: 'Turn a fuzzy idea into a clear plan.' }, tags: ['Workshop', 'Roadmap'] },
    { title: { fr: 'MVP clé en main', en: 'Turnkey MVP' }, text: { fr: 'Une première version utilisable en quelques semaines.', en: 'A usable first version in a few weeks.' }, tags: ['Web', 'Mobile', 'IA'] },
    { title: { fr: 'Produit complet', en: 'Full product' }, text: { fr: 'Conception, développement et déploiement de A à Z.', en: 'Design, development and deployment from A to Z.' }, tags: ['UI/UX', 'Full-Stack'] },
    { title: { fr: 'Mentorat tech', en: 'Tech mentoring' }, text: { fr: 'Conseils et revue technique pour votre équipe.', en: 'Advice and technical review for your team.' }, tags: ['Conseil', 'Revue de code'] },
  ],
}

// ─────────────────────────────────────────────────────────────────────
//  RÉALISATIONS — classées par catégorie ('academic' | 'personal').
//  • featured: true  → le projet est mis en grande vitrine de sa catégorie.
//  • image / video   → fichiers dans /public/projets (la vidéo ne se charge
//    qu'au survol ou à l'ouverture de la fiche : le site reste rapide).
//  • link = site en ligne, repo = dépôt Git (boutons affichés si remplis).
//  • fit: 'cover' | 'contain' (cadrage de l'image), bg: couleur de fond.
// ─────────────────────────────────────────────────────────────────────
export const projects = {
  label: { fr: 'Réalisations', en: 'Work' },
  title: { fr: 'Des projets *livrés*, pas seulement imaginés.', en: 'Projects *shipped*, not just imagined.' },
  intro: {
    fr: 'Du cadre académique à mes propres produits : chaque projet m’a appris quelque chose de précis, et je le montre.',
    en: 'From academic work to my own products: every project taught me something specific, and I show it.',
  },
  single: {
    academic: { fr: 'Académique', en: 'Academic' },
    personal: { fr: 'Personnel', en: 'Personal' },
  },
  tabs: {
    all: { fr: 'Tous', en: 'All' },
    academic: { fr: 'Académiques', en: 'Academic' },
    personal: { fr: 'Personnels', en: 'Personal' },
  },
  labels: {
    featured: { fr: 'À la une', en: 'Featured' },
    open: { fr: 'Voir la fiche', en: 'View details' },
    demo: { fr: 'Voir la démo', en: 'Watch demo' },
    live: { fr: 'Voir en ligne', en: 'Live site' },
    code: { fr: 'Code source', en: 'Source code' },
    close: { fr: 'Fermer', en: 'Close' },
    stack: { fr: 'Technologies', en: 'Tech' },
    features: { fr: 'Fonctionnalités', en: 'Features' },
    video: { fr: 'Vidéo', en: 'Video' },
  },
  // Bloc affiché au-dessus des projets personnels
  research: {
    label: { fr: 'Domaine d’expertise', en: 'Area of expertise' },
    title: { fr: 'Analyse quantitative des marchés financiers & stratégies de trading', en: 'Quantitative market analysis & trading strategies' },
    points: {
      fr: [
        'Analyse technique des marchés Forex à l’aide des concepts ICT, CRT et SMC.',
        'Étude de la structure des marchés, de la liquidité et des configurations de prix.',
        'Gestion du risque et évaluation des performances des stratégies.',
        'Conception et développement d’un robot de trading automatisé en MQL5.',
      ],
      en: [
        'Technical analysis of Forex markets using ICT, CRT and SMC concepts.',
        'Study of market structure, liquidity and price patterns.',
        'Risk management and performance evaluation of strategies.',
        'Design and development of an automated trading robot in MQL5.',
      ],
    },
  },
  items: [
    // ───────────── ACADÉMIQUES ─────────────
    {
      id: 'vernet',
      category: 'academic',
      featured: true,
      title: 'Centre VERNET',
      org: 'KEYCE',
      tagline: { fr: 'Prise en charge intelligente du surpoids', en: 'Intelligent overweight care platform' },
      type: { fr: 'Stage académique · Application intelligente', en: 'Academic internship · Intelligent application' },
      status: { fr: 'Stage académique', en: 'Academic internship' },
      summary: {
        fr: 'Application intelligente de gestion, de suivi et de prise en charge des personnes en surpoids : suivi du poids et des objectifs, rendez-vous, conseils nutritionnels, messagerie et assistant IA personnalisé.',
        en: 'Intelligent application to manage, track and support people living with overweight: weight and goal tracking, appointments, nutrition advice, messaging and a personalised AI assistant.',
      },
      body: {
        fr: [
          'Réalisée lors de mon stage académique, cette application accompagne chaque personne tout au long de son parcours de perte de poids, en respectant l’organisation réelle de l’entreprise.',
          'Elle réunit dans une même plateforme les outils dont les équipes et les bénéficiaires ont besoin : suivi, planification, communication et accompagnement automatisé.',
        ],
        en: [
          'Built during my academic internship, this application supports each person throughout their weight-loss journey while respecting the company’s real organisation.',
          'It brings together, in one platform, the tools that teams and beneficiaries need: tracking, scheduling, communication and automated support.',
        ],
      },
      learnedLabel: { fr: 'Ce que ce projet m’a permis de maîtriser', en: 'What this project let me master' },
      learned: {
        fr: [
          { t: 'Les API', d: 'Conception et intégration d’API pour relier l’interface, les données de suivi et les différents services de la plateforme.' },
          { t: 'Agents IA & chatbot personnalisé', d: 'Création d’un assistant conversationnel adapté au contexte du centre et au parcours de chaque utilisateur.' },
          { t: 'Organigramme & droits d’accès', d: 'Gestion des rôles alignée sur la hiérarchie de l’entreprise : chaque utilisateur n’accède qu’à ce qui relève de sa fonction.' },
        ],
        en: [
          { t: 'APIs', d: 'Designing and integrating APIs to connect the interface, tracking data and the platform’s various services.' },
          { t: 'AI agents & custom chatbot', d: 'Building a conversational assistant tailored to the centre’s context and each user’s journey.' },
          { t: 'Org chart & access rights', d: 'Role management aligned with the company hierarchy: each user only accesses what belongs to their function.' },
        ],
      },
      tags: ['API', 'Agents IA', 'Chatbot', 'Droits d’accès'],
      image: '/projets/vernet.jpg',
      video: '/projets/vernet.mp4',
      link: '',
      repo: '',
    },

    {
      id: 'crushfood',
      category: 'academic',
      title: 'Crush Food',
      org: 'KEYCE',
      tagline: { fr: 'Plateforme web de gastronomie & restauration', en: 'Gastronomy & restaurant web platform' },
      type: { fr: 'Projet de cours · PHP & API REST', en: 'Course project · PHP & REST API' },
      status: { fr: 'Projet académique', en: 'Academic project' },
      summary: {
        fr: 'Application web de gastronomie et de restauration : découverte des restaurants, navigation par catégories et commande de plats, construite sur une API REST développée en PHP.',
        en: 'Gastronomy and restaurant web app: restaurant discovery, category browsing and dish ordering, built on a REST API developed in PHP.',
      },
      body: {
        fr: [
          'Réalisé dans le cadre du cours de PHP et d’API REST, Crush Food m’a fait passer de la théorie à un produit complet : une interface moderne, un back-end structuré et une API qui expose proprement les données du service.',
          'Le projet est pensé comme une vraie plateforme : parcours utilisateur fluide, catégories de cuisine, restaurants recommandés et plats tendances.',
        ],
        en: [
          'Built for the PHP and REST API course, Crush Food took me from theory to a complete product: a modern interface, a structured back-end and an API that cleanly exposes the service’s data.',
          'The project is designed as a real platform: smooth user journey, cuisine categories, recommended restaurants and trending dishes.',
        ],
      },
      learnedLabel: { fr: 'Ce que ce projet m’a apporté', en: 'What this project gave me' },
      learned: {
        fr: [
          { t: 'Conception d’API REST', d: 'Routes, verbes HTTP, réponses JSON et codes de statut : une API claire, réutilisable par le web comme par le mobile.' },
          { t: 'Back-end PHP structuré', d: 'Organisation du code, séparation des responsabilités et logique métier maintenable.' },
          { t: 'Interface orientée produit', d: 'Un parcours de commande pensé comme une vraie application, pas comme un simple exercice.' },
        ],
        en: [
          { t: 'REST API design', d: 'Routes, HTTP verbs, JSON responses and status codes: a clear API usable by web and mobile alike.' },
          { t: 'Structured PHP back-end', d: 'Code organisation, separation of concerns and maintainable business logic.' },
          { t: 'Product-oriented interface', d: 'An ordering journey designed like a real application, not a mere exercise.' },
        ],
      },
      tags: ['PHP', 'API REST', 'JSON', 'UI/UX'],
      image: '/projets/crushfood.jpg',
      video: '/projets/crushfood.mp4',
      link: '',
      repo: '',
    },
    // ───────────── PERSONNELS ─────────────
    {
      id: 'scading',
      category: 'personal',
      featured: true,
      title: 'Scading',
      org: 'Africa Prime Trader',
      tagline: { fr: 'L’IA qui analyse les marchés et trade pour vous', en: 'The AI that analyses markets and trades for you' },
      type: { fr: 'Produit IA · Trading algorithmique', en: 'AI product · Algorithmic trading' },
      status: { fr: 'Produit IA', en: 'AI product' },
      summary: {
        fr: 'Une intelligence artificielle qui analyse les marchés financiers et trade automatiquement à votre place, même pendant que vous dormez.',
        en: 'An artificial intelligence that analyses financial markets and trades automatically on your behalf, even while you sleep.',
      },
      body: {
        fr: [
          'Scading est né de mon travail d’analyse quantitative des marchés Forex : transformer une méthode rigoureuse en un système autonome qui observe, décide et exécute sans émotion.',
          'Le système s’appuie sur la lecture de la structure de marché, de la liquidité et des configurations de prix, avec une gestion du risque intégrée à chaque décision.',
        ],
        en: [
          'Scading grew out of my quantitative analysis of Forex markets: turning a rigorous method into an autonomous system that observes, decides and executes without emotion.',
          'The system relies on reading market structure, liquidity and price patterns, with risk management built into every decision.',
        ],
      },
      learnedLabel: { fr: 'Les fondations', en: 'The foundations' },
      learned: {
        fr: [
          { t: 'Analyse technique ICT, CRT & SMC', d: 'Lecture des marchés Forex par la structure, la liquidité et les configurations de prix.' },
          { t: 'Gestion du risque', d: 'Contrôle de l’exposition et évaluation continue de la performance des stratégies.' },
          { t: 'Robot de trading en MQL5', d: 'Conception et développement d’un robot automatisé qui exécute la stratégie sans intervention.' },
        ],
        en: [
          { t: 'ICT, CRT & SMC technical analysis', d: 'Reading Forex markets through structure, liquidity and price patterns.' },
          { t: 'Risk management', d: 'Controlling exposure and continuously evaluating strategy performance.' },
          { t: 'Trading robot in MQL5', d: 'Designing and building an automated robot that executes the strategy hands-free.' },
        ],
      },
      note: {
        fr: 'Le trading comporte des risques de perte en capital. Les performances passées ne préjugent pas des résultats futurs.',
        en: 'Trading involves a risk of capital loss. Past performance does not guarantee future results.',
      },
      tags: ['IA', 'MQL5', 'Forex', 'Algo-trading'],
      image: '/projets/scading.jpg',
      fit: 'contain',
      bg: '#ffffff',
      video: '/projets/scading.mp4',
      link: '',
      repo: '',
    },
    {
      id: 'enko',
      category: 'personal',
      title: 'Enko',
      org: 'Achetez · Commandez · Profitez',
      tagline: { fr: 'Le e-commerce pensé pour l’Afrique', en: 'E-commerce built for Africa' },
      type: { fr: 'Plateforme e-commerce · Marché africain', en: 'E-commerce platform · African market' },
      status: { fr: 'En production', en: 'In production' },
      badge: { fr: 'Recherche de collaborations', en: 'Open to collaboration' },
      summary: {
        fr: 'Plateforme tout-en-un pour acheter, commander et se faire livrer : produits variés, restaurants & repas, livraison rapide et paiement sécurisé.',
        en: 'All-in-one platform to buy, order and get delivered: varied products, restaurants & meals, fast delivery and secure payment.',
      },
      body: {
        fr: [
          'Enko est un projet en production. Il a désormais besoin de collaborations solides — partenaires, commerçants, investisseurs, développeurs — pour son implémentation effective sur le marché africain.',
          'Si vous partagez cette vision, unissons nos forces pour la rendre réelle.',
        ],
        en: [
          'Enko is a project in production. It now needs strong collaborations — partners, merchants, investors, developers — for its effective rollout in the African market.',
          'If you share this vision, let’s join forces to make it real.',
        ],
      },
      features: {
        fr: ['Produits variés', 'Restaurants & repas', 'Livraison rapide', 'Paiement sécurisé'],
        en: ['Varied products', 'Restaurants & meals', 'Fast delivery', 'Secure payment'],
      },
      cta: { label: { fr: 'Collaborer sur Enko', en: 'Collaborate on Enko' }, href: '#contact' },
      tags: ['E-commerce', 'Mobile', 'Livraison', 'Afrique'],
      image: '/projets/enko.jpg',
      pos: '50% 34%',
      link: '',
      repo: '',
    },
    {
      id: 'jackmyiphone',
      category: 'personal',
      title: 'JackMyIphone',
      org: 'Tombola',
      tagline: { fr: 'Application de tombola sécurisée', en: 'Secure raffle application' },
      type: { fr: 'Application mobile · Tombola', en: 'Mobile app · Raffle' },
      status: { fr: 'Projet personnel', en: 'Personal project' },
      summary: {
        fr: 'Application de tombola sécurisée : achat de tickets, compte à rebours du prochain tirage et participation en quelques clics pour tenter de gagner un iPhone.',
        en: 'Secure raffle app: ticket purchase, countdown to the next draw and participation in a few taps for a chance to win an iPhone.',
      },
      body: {
        fr: ['Un parcours pensé pour inspirer confiance : tirage transparent, tickets numérotés et participation en trois étapes — créer son compte, acheter ses tickets, participer au tirage.'],
        en: ['A journey designed to inspire trust: transparent draw, numbered tickets and participation in three steps — create an account, buy tickets, join the draw.'],
      },
      features: {
        fr: ['Tombola sécurisée', 'Tickets numérotés', 'Compte à rebours du tirage', 'Participation rapide'],
        en: ['Secure raffle', 'Numbered tickets', 'Draw countdown', 'Fast participation'],
      },
      tags: ['Mobile', 'UI/UX', 'Tickets', 'Tirage'],
      image: '/projets/jackmyiphone.jpg',
      video: '/projets/jackmyiphone.mp4',
      link: '',
      repo: '',
    },
  ],
}

export const stack = {
  label: { fr: 'Stack', en: 'Stack' },
  title: { fr: 'Les outils que je *maîtrise*.', en: 'The tools I *master*.' },
  groups: [
    { name: { fr: 'Intelligence Artificielle', en: 'Artificial Intelligence' }, items: ['Python', 'Machine Learning', 'LLM & Prompting', 'Agents IA', 'Chatbots'] },
    { name: { fr: 'Développement', en: 'Development' }, items: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'PHP', 'HTML / CSS'] },
    { name: { fr: 'Back-end & Data', en: 'Back-end & Data' }, items: ['API REST', 'SQL', 'Droits d’accès (rôles)', 'Git / GitHub', 'Linux'] },
    { name: { fr: 'Marchés & Trading', en: 'Markets & Trading' }, items: ['ICT / SMC / CRT', 'Analyse technique', 'Gestion du risque', 'MQL5', 'Trading algorithmique'] },
    { name: { fr: 'Produit & Méthode', en: 'Product & Method' }, items: ['UI/UX', 'Agile / Scrum', 'Cadrage MVP', 'Gestion de projet'] },
  ],
}

// ─────────────────────────────────────────────────────────────────────
//  PARCOURS — une seule frise, de la plus récente à la plus ancienne.
//  type : 'work' (expérience) | 'edu' (formation)
//  live : true → pastille verte « en cours ». year : optionnel, affiché
//  en grand à gauche à la place du numéro (ex: year: '2026').
//  bullets : points clés (affichés sur deux colonnes).
// ─────────────────────────────────────────────────────────────────────
export const journey = {
  label: { fr: 'Parcours', en: 'Journey' },
  title: { fr: 'Un parcours *construit* pas à pas.', en: 'A journey *built* step by step.' },
  railLabel: { fr: 'Parcours professionnel & académique', en: 'Professional & academic path' },
  types: {
    work: { fr: 'Expérience', en: 'Experience' },
    edu: { fr: 'Formation', en: 'Education' },
  },
  entries: [
    {
      id: 'exness',
      type: 'work',
      live: true,
      title: { fr: 'Business Developer (B1)', en: 'Business Developer (B1)' },
      org: 'Exness',
      status: { fr: 'En poste', en: 'Current role' },
      period: { fr: 'En cours · Télétravail', en: 'Ongoing · Remote' },
      summary: {
        fr: 'Poste en télétravail au sein d’Exness, courtier international : développement d’affaires sur les marchés financiers.',
        en: 'Remote position at Exness, an international broker: business development in the financial markets.',
      },
      bullets: {
        fr: [
          'Travail à distance au sein d’une organisation internationale',
          'Développement d’affaires dans l’univers des marchés financiers',
          'Solide culture du Forex : analyse technique et gestion du risque',
        ],
        en: [
          'Remote work within an international organisation',
          'Business development in the financial markets universe',
          'Strong Forex background: technical analysis and risk management',
        ],
      },
      location: { fr: 'À distance', en: 'Remote' },
      tags: ['Business Development', 'Marchés financiers', 'Remote'],
      image: '/projets/exness.jpg',
      video: '/projets/exness.mp4',
      link: 'https://one.exnessonelink.com/a/kg73s6re8e', // mon lien partenaire Exness
      linkLabel: { fr: 'Ouvrir Exness', en: 'Open Exness' },
    },
    {
      id: 'oryvo',
      type: 'work',
      live: true,
      title: { fr: 'Fondateur & CEO', en: 'Founder & CEO' },
      org: 'ORYVO',
      status: { fr: 'En poste', en: 'Current role' },
      period: { fr: 'Présent', en: 'Present' },
      summary: {
        fr: 'Fondateur d’ORYVO, startup d’innovation technologique : conception de produits et accompagnement des entrepreneurs.',
        en: 'Founder of ORYVO, a technology innovation startup: product design and support for entrepreneurs.',
      },
      bullets: {
        fr: [
          'Direction de la startup et de sa vision produit',
          'Conception et développement de produits digitaux et d’outils d’IA',
          'Accompagnement des entrepreneurs, du cadrage au lancement',
        ],
        en: [
          'Leading the startup and its product vision',
          'Designing and building digital products and AI tools',
          'Supporting entrepreneurs, from scoping to launch',
        ],
      },
      tags: ['Leadership', 'Produit', 'IA'],
    },
    {
      id: 'keyce',
      type: 'edu',
      live: true,
      title: { fr: 'Bachelor 3 — Informatique & Intelligence Artificielle', en: 'Bachelor 3 — Computer Science & Artificial Intelligence' },
      org: 'KEYCE',
      status: { fr: 'En cours', en: 'In progress' },
      period: { fr: '2025 — 2026', en: '2025 — 2026' },
      summary: {
        fr: 'Formation en développement logiciel, data et intelligence artificielle appliquée.',
        en: 'Training in software development, data and applied artificial intelligence.',
      },
      bullets: {
        fr: [
          'Développement logiciel et architectures web',
          'IA appliquée : machine learning, agents IA et chatbots',
          'Projet de cours PHP & API REST : Crush Food',
          'Stage académique : application intelligente de suivi (Centre VERNET)',
        ],
        en: [
          'Software development and web architectures',
          'Applied AI: machine learning, AI agents and chatbots',
          'PHP & REST API course project: Crush Food',
          'Academic internship: intelligent tracking application (Centre VERNET)',
        ],
      },
      tags: ['PHP', 'API REST', 'Agents IA', 'Python'],
    },
  ],
  extraLabels: {
    certs: { fr: 'Certifications', en: 'Certifications' },
    languages: { fr: 'Langues', en: 'Languages' },
  },
  certs: [
    // { name: 'Nom de la certification', org: 'Organisme', year: '2026' },
  ],
  languages: [
    { name: { fr: 'Français', en: 'French' }, level: { fr: 'Courant', en: 'Fluent' } },
    { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'À compléter', en: 'To complete' } },
  ],
}

// enabled: true quand vous aurez de vrais témoignages (section masquée sinon)
export const testimonials = {
  enabled: false,
  label: { fr: 'Ils en parlent', en: 'Testimonials' },
  title: { fr: 'Ce que disent les *entrepreneurs*.', en: 'What *entrepreneurs* say.' },
  items: [
    {
      quote: { fr: 'À compléter : le retour d’un entrepreneur accompagné par ORYVO.', en: 'To complete: feedback from an entrepreneur supported by ORYVO.' },
      name: 'Nom du client',
      role: { fr: 'Fondateur, Entreprise', en: 'Founder, Company' },
    },
    {
      quote: { fr: 'À compléter : un second témoignage pour crédibiliser votre accompagnement.', en: 'To complete: a second testimonial to back up your guidance.' },
      name: 'Nom du client',
      role: { fr: 'CEO, Entreprise', en: 'CEO, Company' },
    },
  ],
}
