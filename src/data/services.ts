export interface Service {
  slug: string
  name: string
  shortName: string
  /** Label utilisé dans les phrases "À propos {aboutLabel}" — inclut l'article (ex. "de la moquette", "du PVC en lés", "du tapis sur mesure"). */
  aboutLabel: string
  /** Étiquette générique pour CTA WhatsApp etc. — inclut un article indéfini ou défini (ex. "une pose de moquette", "un sol PVC", "un nettoyage de moquette"). */
  ctaLabel: string
  /** Vrai si le service correspond à un produit avec échantillons exposables en showroom. */
  hasShowroom: boolean
  icon: string
  description: string
  longDescription: string
  benefits: string[]
  useCases: string[]
  brands: string[]
  geoVerb: string // "Pose de moquette à" / "Sol PVC à"
  metaTitle: (city: string) => string
  metaDescription: (city: string) => string
  h1: (city: string) => string
}

export const services: Service[] = [
  {
    slug: 'pose-moquette',
    name: 'Pose de Moquette',
    shortName: 'Moquette',
    aboutLabel: 'de la moquette',
    ctaLabel: 'une pose de moquette',
    hasShowroom: true,
    icon: '▦',
    description: 'Moquettes haut de gamme sur mesure, pose professionnelle pour particuliers et professionnels.',
    longDescription:
      "La moquette reste le revêtement de sol qui offre le meilleur confort acoustique et thermique. Seul revêtement capable d'empêcher la dispersion de particules fines, elle est idéale pour les espaces de vie, les hôtels et les bureaux. CB Sols sélectionne avec soin les meilleures collections des marques partenaires : EGE en tête de gamme, complétée par d'autres références choisies pour la spécificité de chaque projet.",
    benefits: [
      'Confort acoustique exceptionnel',
      'Isolation thermique naturelle',
      'Retient les particules fines',
      'Vaste choix de textures et coloris',
      'Durabilité professionnelle certifiée',
    ],
    useCases: ['Chambres d\'hôtel', 'Suite parentale', 'Chambre d\'enfant', 'Bibliothèque', 'Dressing', 'Salles de réunion', 'Bureaux', 'Escaliers', 'Couloirs'],
    brands: ['EGE'],
    geoVerb: 'Pose de moquette à',
    metaTitle: (city) => `Pose de Moquette ${city} | Devis Gratuit sous 48h`,
    metaDescription: (city) =>
      `Pose de moquette professionnelle à ${city} et environs. CB Sols : artisan spécialiste depuis 27 ans, devis gratuit. Hôtels, bureaux, particuliers.`,
    h1: (city) => `Pose de Moquette à ${city}`,
  },
  {
    slug: 'sol-pvc-lames-dalles',
    name: 'Sol PVC Lames & Dalles',
    shortName: 'Sol PVC',
    aboutLabel: 'du sol PVC',
    ctaLabel: 'un sol PVC',
    hasShowroom: true,
    icon: '▣',
    description: 'Lames et dalles PVC haut de gamme, résistantes et esthétiques. Pour particuliers et professionnels.',
    longDescription:
      "Les lames et dalles PVC de dernière génération combinent l'esthétique du bois ou de la pierre avec une résistance à l'eau et à l'usure incomparable. Idéales pour les commerces, résidences et espaces collectifs, elles supportent les passages intensifs tout en restant simples d'entretien.",
    benefits: [
      'Résistance à l\'eau et à l\'humidité',
      'Facilité d\'entretien',
      'Imitation bois ou pierre très réaliste',
      'Pose rapide sans travaux lourds',
      'Adapté aux passages intensifs',
    ],
    useCases: ['Maison individuelle', 'Chambre', 'Salle de bain', 'Commerces', 'Cuisines professionnelles', 'Couloirs', 'Open spaces', 'Rénovation rapide'],
    brands: ['Gerflor', 'objectflor'],
    geoVerb: 'Sol PVC à',
    metaTitle: (city) => `Sol PVC Lames & Dalles ${city} | Pose & Devis 48h`,
    metaDescription: (city) =>
      `Pose de sol PVC lames et dalles à ${city}. CB Sols installe des marques sélectionnées avec soin (Gerflor, objectflor) pour professionnels et particuliers. Devis gratuit.`,
    h1: (city) => `Sol PVC Lames & Dalles à ${city}`,
  },
  {
    slug: 'sol-pvc-les',
    name: 'Sol PVC en Lés',
    shortName: 'PVC en Lés',
    aboutLabel: 'du PVC en lés',
    ctaLabel: 'un sol PVC en lés',
    hasShowroom: true,
    icon: '▬',
    description: 'Revêtement vinyle en rouleaux, pose soignée avec plinthes et soudure à chaud. Pour particuliers et professionnels.',
    longDescription:
      "Le PVC en lés (ou vinyle en rouleaux) est le revêtement de référence pour les espaces professionnels exigeants. Sa pose en continuité sans joints, avec soudure à chaud, garantit une parfaite étanchéité : idéale pour les cuisines, salles de soins et espaces collectifs nécessitant un nettoyage intensif.",
    benefits: [
      'Aucun joint = hygiène maximale',
      'Soudure à chaud étanche',
      'Résistance chimique et bactériologique',
      'Large choix de coloris et motifs',
      'Longévité en milieu professionnel',
    ],
    useCases: ['Maison individuelle', 'Cuisines professionnelles', 'Établissements de santé', 'Laboratoires', 'Couloirs collectifs', 'Amphithéâtres'],
    brands: ['Gerflor', 'objectflor'],
    geoVerb: 'PVC en lés à',
    metaTitle: (city) => `Sol PVC en Lés ${city} | Pose Pro, Devis Gratuit`,
    metaDescription: (city) =>
      `Pose de sol PVC en lés à ${city} par CB Sols. Revêtement vinyle en rouleaux avec soudure à chaud, idéal pour professionnels de santé et collectivités.`,
    h1: (city) => `Sol PVC en Lés à ${city}`,
  },
  {
    slug: 'tapis-sur-mesure',
    name: 'Tapis Sur Mesure',
    shortName: 'Tapis Sur Mesure',
    aboutLabel: 'du tapis sur mesure',
    ctaLabel: 'un tapis sur mesure',
    hasShowroom: true,
    icon: '◈',
    description: 'Création de tapis décoratifs sur mesure, finitions premium. Pour hôtels, espaces de prestige et particuliers exigeants.',
    longDescription:
      "Le tapis sur mesure est la signature d'un espace de prestige. CB Sols collabore avec les designers et architectes d'intérieur pour concevoir des pièces uniques : forme, couleur, matière, finition de bords, tout est personnalisable. Idéal pour les lobbys d'hôtels, restaurants gastronomiques et résidences de luxe.",
    benefits: [
      'Dimension et forme au millimètre',
      'Choix illimité de coloris et matières',
      'Finitions lisérées, frangées ou surjetées',
      'Logo ou motif possible',
      'Résistance adaptée à l\'usage',
    ],
    useCases: ['Maison individuelle', 'Lobbys d\'hôtels', 'Restaurants gastronomiques', 'Salles de réception', 'Résidences de luxe', 'Boutiques premium'],
    brands: ['EGE', 'Atelier sur mesure CB Sols'],
    geoVerb: 'Tapis sur mesure à',
    metaTitle: (city) => `Tapis Sur Mesure ${city} | Création Artisan`,
    metaDescription: (city) =>
      `Tapis décoratifs sur mesure à ${city}. CB Sols crée vos tapis uniques pour hôtels, restaurants et espaces prestige. Devis personnalisé.`,
    h1: (city) => `Tapis Sur Mesure à ${city}`,
  },
  {
    slug: 'tapis-de-proprete',
    name: 'Tapis de Propreté',
    shortName: 'Tapis Propreté',
    aboutLabel: 'du tapis de propreté',
    ctaLabel: 'un tapis de propreté',
    hasShowroom: true,
    icon: '▤',
    description: "Tapis d'entrée pour professionnels et particuliers, protection de vos sols intérieurs et image soignée.",
    longDescription:
      "Le tapis de propreté est le premier contact avec votre espace. Il protège vos revêtements intérieurs, retient 80% des salissures à l'entrée et contribue à l'image de votre établissement. CB Sols propose des solutions sur mesure aux dimensions exactes de vos sas d'entrée, avec logo intégré possible.",
    benefits: [
      'Retient 80% des salissures dès l\'entrée',
      'Protège vos revêtements intérieurs',
      'Dimensions et formes sur mesure',
      'Logo de l\'entreprise intégrable',
      'Entretien professionnel disponible',
    ],
    useCases: ['Maison individuelle', 'Entrées d\'hôtels', 'Commerces', 'Bureaux & entreprises', 'Collectivités', 'Résidences'],
    brands: ['Romus'],
    geoVerb: 'Tapis de propreté à',
    metaTitle: (city) => `Tapis de Propreté ${city} sur Mesure | Devis 48h`,
    metaDescription: (city) =>
      `Tapis de propreté professionnels à ${city}. Sur mesure, avec logo possible. CB Sols protège vos sols et soigne l'image de votre établissement.`,
    h1: (city) => `Tapis de Propreté à ${city}`,
  },
  {
    slug: 'nettoyage-moquette',
    name: 'Nettoyage de Moquette',
    shortName: 'Nettoyage',
    aboutLabel: 'du nettoyage de moquette',
    ctaLabel: 'un nettoyage de moquette',
    hasShowroom: false,
    icon: '◎',
    description: 'Nettoyage professionnel par injection-extraction, redonne vie à vos moquettes. Particuliers et professionnels.',
    longDescription:
      "Le nettoyage professionnel par injection-extraction est la méthode la plus efficace pour rénover vos moquettes sans les remplacer. CB Sols intervient avec un matériel professionnel qui injecte une solution nettoyante puis l'aspire avec les saletés incrustées. Résultat : moquette comme neuve, séchage en quelques heures.",
    benefits: [
      'Élimination des taches profondes',
      'Désinfection et déodorisation',
      'Séchage rapide (2 à 4 heures)',
      'Prolonge la durée de vie de 30 à 50%',
      'Traitement anti-tache possible',
    ],
    useCases: ['Hôtels entre saisons', 'Bureaux', 'Salles de conférence', 'Résidences', 'Campings premium'],
    brands: [],
    geoVerb: 'Nettoyage de moquette à',
    metaTitle: (city) => `Nettoyage Moquette ${city} | Injection-Extraction`,
    metaDescription: (city) =>
      `Nettoyage professionnel de moquette à ${city} par injection-extraction. CB Sols restitue l'éclat de vos moquettes. Intervention rapide, devis gratuit.`,
    h1: (city) => `Nettoyage de Moquette à ${city}`,
  },
  {
    slug: 'revetement-sol',
    name: 'Revêtement de Sol',
    shortName: 'Revêtement Sol',
    aboutLabel: 'du revêtement de sol',
    ctaLabel: 'un revêtement de sol',
    hasShowroom: true,
    icon: '⬛',
    description: 'Expertise complète en revêtement de sol : conseil, fourniture, pose et entretien. Particuliers et professionnels.',
    longDescription:
      "Depuis 27 ans, CB Sols accompagne particuliers et professionnels de Charente-Maritime dans tous leurs projets de revêtement de sol. De la sélection des matériaux en showroom jusqu'à la pose et l'entretien, CB Sols est votre interlocuteur unique pour un projet réussi de A à Z.",
    benefits: [
      'Interlocuteur unique de A à Z',
      'Showroom avec 500+ échantillons',
      'Devis gratuit sous 48h',
      'Pose par des artisans qualifiés',
      'Garantie décennale',
    ],
    useCases: ['Maisons et appartements', 'Bureaux et commerces', 'Hôtels et restaurants', 'Collectivités', 'Projets neufs et rénovation'],
    brands: ['EGE', 'Gerflor', 'objectflor'],
    geoVerb: 'Revêtement de sol à',
    metaTitle: (city) => `Revêtement de Sol ${city} | Devis Gratuit sous 48h`,
    metaDescription: (city) =>
      `Pose de revêtement de sol à ${city} par CB Sols. Spécialiste depuis 27 ans en Charente-Maritime : moquette, PVC, tapis. Devis gratuit, intervention rapide.`,
    h1: (city) => `Revêtement de Sol à ${city}`,
  },
  {
    slug: 'salle-cinema',
    name: 'Salle de Cinéma',
    shortName: 'Salle de cinéma',
    aboutLabel: 'de la salle de cinéma',
    ctaLabel: 'un sol pour salle de cinéma',
    hasShowroom: false,
    icon: '◉',
    description: 'Aménagement acoustique et esthétique des salles de cinéma privées et home-cinémas haut de gamme.',
    longDescription:
      "Une salle de cinéma exige un sol qui absorbe les bruits d'impact, qui ne réfléchit pas la lumière de l'écran et qui résiste aux passages fréquents avec sièges fixes. Nous installons des moquettes haute densité (classement 33-34), avec sous-couche acoustique renforcée et finitions sombres adaptées à la projection. CB Sols intervient sur les home-cinémas privés des résidences haut de gamme et sur les salles de projection professionnelles.",
    benefits: [
      'Absorption acoustique optimale (-15 à -25 dB d\'impact)',
      'Finitions sombres anti-reflets pour la projection',
      'Tenue parfaite sous sièges fixes et fauteuils inclinables',
      'Couleurs sourdes pour ne pas perturber l\'œil',
      'Sous-couche renforcée pour le confort longue durée',
    ],
    useCases: ['Home-cinémas privés', 'Salles de projection résidences', 'Espaces multimédia hôteliers', 'Salles de spectacle', 'Auditoriums'],
    brands: ['EGE'],
    geoVerb: 'Salle de cinéma à',
    metaTitle: (city) => `Sol Salle de Cinéma ${city} | Moquette Acoustique`,
    metaDescription: (city) =>
      `Aménagement sol pour salle de cinéma et home-cinéma à ${city}. CB Sols : moquette acoustique haute densité, finitions anti-reflets, sous-couche renforcée. Devis gratuit.`,
    h1: (city) => `Sol pour salle de cinéma à ${city}`,
  },
  {
    slug: 'coin-lecture',
    name: 'Espace & Coin Lecture',
    shortName: 'Coin lecture',
    aboutLabel: 'du coin lecture',
    ctaLabel: 'un aménagement coin lecture',
    hasShowroom: false,
    icon: '❍',
    description: 'Création d\'espaces lecture cosy et acoustiquement maîtrisés en hôtellerie, résidences et bibliothèques privées.',
    longDescription:
      "Un coin lecture réussi se sent autant qu'il se voit. Le sol doit absorber les pas et les bruits ambiants, offrir une chaleur tactile et visuelle, et durer dans le temps. CB Sols sélectionne des moquettes en laine ou velours bouclé pour les espaces lecture résidentiels et hôteliers, couloirs littéraires, salons de lecture, bibliothèques privées, mezzanines en hôtels boutique. Possibilité de combiner avec un tapis sur mesure pour ancrer la zone.",
    benefits: [
      'Confort acoustique propice à la concentration',
      'Chaleur tactile et visuelle',
      'Couleurs et textures favorisant l\'apaisement',
      'Définition d\'une zone par tapis sur mesure',
      'Solutions adaptées aux espaces de standing',
    ],
    useCases: ['Salons de lecture hôteliers', 'Bibliothèques privées', 'Mezzanines en suites', 'Coins lecture résidentiels', 'Espaces étude haut de gamme'],
    brands: ['EGE', 'Atelier tapis sur mesure CB Sols'],
    geoVerb: 'Coin lecture à',
    metaTitle: (city) => `Sol Coin Lecture ${city} | Aménagement sur Mesure`,
    metaDescription: (city) =>
      `Création d'espaces et coins lecture à ${city}. Moquette feutrée, tapis sur mesure, ambiance cosy et acoustique maîtrisée. CB Sols, devis gratuit.`,
    h1: (city) => `Coin lecture à ${city}`,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
