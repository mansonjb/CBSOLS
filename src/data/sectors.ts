export interface Sector {
  slug: string
  name: string
  icon: string
  tagline: string
  description: string
  challenges: string[]
  solutions: string[]
  referencesExamples: string[]
  recommendedServices: string[]
}

export const sectors: Sector[] = [
  {
    slug: 'hotellerie',
    name: 'Hôtellerie & Hébergement',
    icon: '🏨',
    tagline: 'Des sols à la hauteur de vos étoiles',
    description:
      "L'hôtellerie exige des revêtements de sol qui allient esthétique irréprochable, résistance aux passages intensifs et facilité d'entretien quotidien. CB Sols travaille avec des hôtels 2 à 5 étoiles, résidences de tourisme et gîtes premium en Charente-Maritime depuis plus de 25 ans.",
    challenges: [
      'Passages intensifs en couloirs et parties communes',
      'Maintenance rapide entre deux occupants',
      'Cohérence esthétique entre les espaces',
      'Normes incendie M1/M2',
      'Accessibilité PMR',
    ],
    solutions: [
      'Moquettes haut de gamme certifiées Bfl-s1 pour les chambres',
      'Sol PVC résistant pour les espaces communs et couloirs',
      'Douches intégrales PVC sans joints pour les salles de bain',
      'Tapis sur mesure avec logo pour les lobbys',
      'Contrat d\'entretien annuel (nettoyage injection-extraction)',
    ],
    referencesExamples: [
      'Hôtels Île de Ré (chambres moquette + SDB PVC)',
      'Résidences de tourisme La Rochelle',
      'Gîtes premium Charente-Maritime',
    ],
    recommendedServices: ['pose-moquette', 'douche-integrale-pvc', 'tapis-sur-mesure', 'nettoyage-moquette'],
  },
  {
    slug: 'restauration',
    name: 'Restauration & Brasseries',
    icon: '🍽️',
    tagline: 'L\'ambiance commence sous les pieds de vos clients',
    description:
      "En restauration, le sol contribue directement à l'ambiance et au confort acoustique. CB Sols équipe restaurants gastronomiques, brasseries et cafés avec des solutions qui absorbent le bruit, résistent aux passages, aux chutes de verres et au nettoyage quotidien intensif.",
    challenges: [
      'Bruit en salle (confort acoustique)',
      'Résistance aux chutes et aux liquides',
      'Nettoyage quotidien intensif',
      'Esthétique adaptée au positionnement du restaurant',
      'Durée de pose minimale (fermeture réduite)',
    ],
    solutions: [
      'Moquettes à hautes performances acoustiques pour les salles',
      'Sol PVC résistant en cuisine professionnelle',
      'Tapis sur mesure en salle pour délimiter les espaces',
      'Pose en 48h pour minimiser la fermeture',
    ],
    referencesExamples: [
      'Restaurant étoilé La Rochelle (moquette + tapis sur mesure)',
      'Bistrot & brasseries de l\'Île de Ré',
      'Restaurants d\'hôtels Charente-Maritime',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-les', 'tapis-sur-mesure', 'tapis-de-proprete'],
  },
  {
    slug: 'bureaux-entreprises',
    name: 'Bureaux & Entreprises',
    icon: '🏢',
    tagline: 'Un sol qui inspire la performance',
    description:
      "Les espaces de travail modernes requièrent des revêtements qui favorisent la concentration, absorbent le bruit et reflètent l'image de l'entreprise. CB Sols accompagne PME, cabinets et grands comptes de Charente-Maritime dans la création d'espaces de travail performants.",
    challenges: [
      'Confort acoustique pour la concentration',
      'Image professionnelle et moderne',
      'Résistance aux chaises à roulettes',
      'Entretien quotidien par les équipes de nettoyage',
      'Intervention sans interruption d\'activité',
    ],
    solutions: [
      'Dalles de moquette (remplacement partiel possible)',
      'Sol PVC résistant aux roulettes de bureau',
      'Tapis de propreté à l\'entrée avec logo',
      'Pose le week-end ou en phases pour ne pas interrompre l\'activité',
    ],
    referencesExamples: [
      'Cabinets comptables La Rochelle',
      'Cabinets d\'assurances Charente-Maritime',
      'Open spaces PME La Rochelle',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-lames-dalles', 'tapis-de-proprete'],
  },
  {
    slug: 'collectivites',
    name: 'Collectivités & Établissements Scolaires',
    icon: '🏫',
    tagline: 'Durabilité et sécurité pour les espaces publics',
    description:
      "Les marchés publics exigent des revêtements certifiés, durables et conformes aux normes de sécurité. CB Sols répond aux appels d'offres et travaille avec mairies, écoles, médiathèques et salles communales en Charente-Maritime.",
    challenges: [
      'Conformité aux normes incendie (Euroclasse)',
      'Résistance aux passages très intensifs',
      'Budget maîtrisé (marchés publics)',
      'Délais de chantier contraints (vacances scolaires)',
      'Accessibilité PMR obligatoire',
    ],
    solutions: [
      'PVC en lés certifié Bfl-s1 pour les circulations',
      'Sol PVC résistant pour amphithéâtres et salles polyvalentes',
      'Moquette acoustique pour bibliothèques et médiathèques',
      'Réponse aux appels d\'offres',
    ],
    referencesExamples: [
      'Amphithéâtre universitaire La Rochelle (sol PVC lés)',
      'Médiathèques Charente-Maritime',
      'Salles de réunion collectivités',
    ],
    recommendedServices: ['sol-pvc-les', 'sol-pvc-lames-dalles', 'pose-moquette'],
  },
  {
    slug: 'commerces',
    name: 'Commerces & Retail',
    icon: '🛍️',
    tagline: 'Le sol qui met vos produits en valeur',
    description:
      "En commerce, le sol guide le client, crée l'ambiance et doit résister à des milliers de passages quotidiens. CB Sols équipe boutiques, showrooms et espaces commerciaux avec des solutions qui allient esthétique et performance.",
    challenges: [
      'Résistance aux passages très intensifs',
      'Mise en valeur des produits (reflets, couleurs)',
      'Pose rapide pour limiter la fermeture',
      'Facilité d\'entretien quotidien',
      'Image de marque cohérente',
    ],
    solutions: [
      'Sol PVC lames/dalles haute résistance',
      'Moquette bouclée très résistante pour boutiques',
      'Tapis de propreté avec logo à l\'entrée',
      'Intervention nocturne ou week-end',
    ],
    referencesExamples: [
      'Boutiques centre-ville La Rochelle',
      'Showrooms commerciaux Charente-Maritime',
    ],
    recommendedServices: ['sol-pvc-lames-dalles', 'tapis-de-proprete', 'pose-moquette'],
  },
  {
    slug: 'campings-tourisme',
    name: 'Campings & Tourisme',
    icon: '⛺',
    tagline: 'La qualité d\'accueil, du sol au plafond',
    description:
      "La Charente-Maritime compte parmi les régions les plus campées de France. CB Sols équipe les mobil-homes haut de gamme, les bungalows et les espaces communs des campings 4 et 5 étoiles avec des revêtements résistants à l'humidité et adaptés aux usages intensifs saisonniers.",
    challenges: [
      'Humidité et variations de température',
      'Passages intensifs en période estivale',
      'Remplacement rapide entre saisons',
      'Budget optimisé (rentabilité saisonnière)',
      'Esthétique moderne et accueillante',
    ],
    solutions: [
      'Sol PVC 100% waterproof pour mobil-homes',
      'PVC en lés pour espaces sanitaires communs',
      'Tapis de propreté pour entrées de bungalows',
      'Contrat de maintenance annuel intersaison',
    ],
    referencesExamples: [
      'Campings 4/5 étoiles Île de Ré',
      'Résidences de tourisme Charente-Maritime',
    ],
    recommendedServices: ['sol-pvc-lames-dalles', 'sol-pvc-les', 'tapis-de-proprete'],
  },
  {
    slug: 'sante-ehpad',
    name: 'Santé & EHPAD',
    icon: '🏥',
    tagline: 'Hygiène, confort et accessibilité',
    description:
      "Les établissements de santé et EHPAD imposent les standards les plus stricts en matière d'hygiène, de sécurité et d'accessibilité. CB Sols maîtrise les normes spécifiques à ces environnements et intervient en milieu ouvert avec des solutions sans perturbation.",
    challenges: [
      'Conformité normes RABC (hygiène)',
      'Antidérapance obligatoire (sécurité)',
      'Accessibilité PMR totale',
      'Résistance aux produits désinfectants',
      'Intervention en milieu occupé',
    ],
    solutions: [
      'Douche intégrale PVC sans joints (EHPAD)',
      'PVC en lés soudé à chaud pour les circulations',
      'Revêtements certifiés R9/R10 (antidérapance)',
      'Pose en zones, sans interruption de service',
    ],
    referencesExamples: [
      'EHPAD Charente-Maritime',
      'Cabinets médicaux La Rochelle',
      'Cliniques régionales',
    ],
    recommendedServices: ['douche-integrale-pvc', 'sol-pvc-les', 'sol-pvc-lames-dalles'],
  },
  {
    slug: 'golf-sport',
    name: 'Golf & Espaces Sportifs',
    icon: '⛳',
    tagline: 'Performance et élégance pour vos espaces',
    description:
      "Les clubs de golf et espaces sportifs premium requièrent des revêtements adaptés à leurs espaces spécifiques : clubhouse élégant, vestiaires résistants, couloirs intensément fréquentés en saison. CB Sols a équipé plusieurs golfs de Charente-Maritime.",
    challenges: [
      'Résistance à l\'humidité dans les vestiaires',
      'Élégance dans le clubhouse et la restauration',
      'Résistance aux chaussures de golf (crampons)',
      'Entretien simplifié',
    ],
    solutions: [
      'Moquette contrat pour clubhouse et restaurant',
      'Sol PVC résistant pour vestiaires',
      'Tapis sur mesure pour salons VIP',
      'Tapis de propreté à l\'entrée',
    ],
    referencesExamples: [
      'Golf de Charente-Maritime (moquette + sols vestiaires)',
      'Country clubs région rochelaise',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-les', 'tapis-sur-mesure'],
  },
]

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug)
}
