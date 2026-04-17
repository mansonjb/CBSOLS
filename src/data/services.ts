export interface Service {
  slug: string
  name: string
  shortName: string
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
    icon: '▦',
    description: 'Moquettes haut de gamme sur mesure, pose professionnelle pour particuliers et professionnels.',
    longDescription:
      "La moquette reste le revêtement de sol qui offre le meilleur confort acoustique et thermique. Seul revêtement capable d'empêcher la dispersion de particules fines, elle est idéale pour les espaces de vie, les hôtels et les bureaux. CB Sols sélectionne pour vous les meilleures collections des marques EGE et Balsan.",
    benefits: [
      'Confort acoustique exceptionnel',
      'Isolation thermique naturelle',
      'Retient les particules fines',
      'Vaste choix de textures et coloris',
      'Durabilité professionnelle certifiée',
    ],
    useCases: ['Chambres d\'hôtel', 'Salles de réunion', 'Bureaux', 'Escaliers', 'Couloirs'],
    brands: ['EGE', 'Balsan', 'Forbo', 'Balta'],
    geoVerb: 'Pose de moquette à',
    metaTitle: (city) => `Pose de Moquette ${city} — CB Sols, Artisan Certifié`,
    metaDescription: (city) =>
      `Pose de moquette professionnelle à ${city} et environs. CB Sols : artisan spécialiste depuis 25 ans, devis gratuit. Hôtels, bureaux, particuliers.`,
    h1: (city) => `Pose de Moquette à ${city}`,
  },
  {
    slug: 'sol-pvc-lames-dalles',
    name: 'Sol PVC Lames & Dalles',
    shortName: 'Sol PVC',
    icon: '▣',
    description: 'Lames et dalles PVC haut de gamme, résistantes et esthétiques pour tous espaces.',
    longDescription:
      "Les lames et dalles PVC de dernière génération combinent l'esthétique du bois ou de la pierre avec une résistance à l'eau et à l'usure incomparable. Idéales pour les commerces, résidences et espaces collectifs, elles supportent les passages intensifs tout en restant simples d'entretien.",
    benefits: [
      'Résistance à l\'eau et à l\'humidité',
      'Facilité d\'entretien',
      'Imitation bois ou pierre très réaliste',
      'Pose rapide sans travaux lourds',
      'Adapté aux passages intensifs',
    ],
    useCases: ['Commerces', 'Cuisines professionnelles', 'Couloirs', 'Open spaces', 'Rénovation rapide'],
    brands: ['Gerflor', 'Tarkett', 'Forbo', 'Armstrong'],
    geoVerb: 'Sol PVC à',
    metaTitle: (city) => `Sol PVC Lames & Dalles ${city} — CB Sols`,
    metaDescription: (city) =>
      `Pose de sol PVC lames et dalles à ${city}. CB Sols installe les meilleures marques (Gerflor, Tarkett) pour professionnels et particuliers. Devis gratuit.`,
    h1: (city) => `Sol PVC Lames & Dalles à ${city}`,
  },
  {
    slug: 'sol-pvc-les',
    name: 'Sol PVC en Lés',
    shortName: 'PVC en Lés',
    icon: '▬',
    description: 'Revêtement vinyle en rouleaux, pose soignée avec plinthes et soudure à chaud.',
    longDescription:
      "Le PVC en lés (ou vinyle en rouleaux) est le revêtement de référence pour les espaces professionnels exigeants. Sa pose en continuité sans joints, avec soudure à chaud, garantit une parfaite étanchéité — idéale pour les cuisines, salles de soins et espaces collectifs nécessitant un nettoyage intensif.",
    benefits: [
      'Aucun joint = hygiène maximale',
      'Soudure à chaud étanche',
      'Résistance chimique et bactériologique',
      'Large choix de coloris et motifs',
      'Longévité en milieu professionnel',
    ],
    useCases: ['Cuisines professionnelles', 'Établissements de santé', 'Laboratoires', 'Couloirs collectifs', 'Amphithéâtres'],
    brands: ['Gerflor', 'Tarkett', 'Forbo Flooring', 'Altro'],
    geoVerb: 'PVC en lés à',
    metaTitle: (city) => `Sol PVC en Lés ${city} — Pose Professionnelle CB Sols`,
    metaDescription: (city) =>
      `Pose de sol PVC en lés à ${city} par CB Sols. Revêtement vinyle en rouleaux avec soudure à chaud, idéal pour professionnels de santé et collectivités.`,
    h1: (city) => `Sol PVC en Lés à ${city}`,
  },
  {
    slug: 'douche-integrale-pvc',
    name: 'Douche Intégrale PVC',
    shortName: 'Douche PVC',
    icon: '◫',
    description: 'Système de douche 100% PVC, étanche, hygiénique, sans joints de carrelage.',
    longDescription:
      "La douche intégrale en PVC révolutionne la salle de bain : aucun joint de carrelage susceptible de noircir, étanchéité totale garantie par la soudure à chaud, entretien réduit à son minimum. Solution privilégiée par les hôtels, résidences de tourisme et EHPAD pour sa durabilité et son esthétique contemporaine.",
    benefits: [
      'Zéro joint = zéro moisissure',
      'Étanchéité parfaite garantie',
      'Entretien ultra-simplifié',
      'Pose rapide (1 à 2 jours)',
      'Adapté PMR (accessibilité)',
    ],
    useCases: ['Hôtels & résidences', 'EHPAD & maisons de retraite', 'Campings premium', 'Particuliers en rénovation', 'Résidences de tourisme'],
    brands: ['Altro', 'Gerflor', 'Forbo'],
    geoVerb: 'Douche intégrale PVC à',
    metaTitle: (city) => `Douche Intégrale PVC ${city} — CB Sols`,
    metaDescription: (city) =>
      `Installation de douches intégrales PVC à ${city}. Étanchéité parfaite, sans joints, entretien facile. Idéal hôtels, EHPAD et rénovation. CB Sols, devis gratuit.`,
    h1: (city) => `Douche Intégrale PVC à ${city}`,
  },
  {
    slug: 'tapis-sur-mesure',
    name: 'Tapis Sur Mesure',
    shortName: 'Tapis Sur Mesure',
    icon: '◈',
    description: 'Création de tapis décoratifs sur mesure, finitions premium pour hôtels et espaces de prestige.',
    longDescription:
      "Le tapis sur mesure est la signature d'un espace de prestige. CB Sols collabore avec les designers et architectes d'intérieur pour concevoir des pièces uniques : forme, couleur, matière, finition de bords — tout est personnalisable. Idéal pour les lobbys d'hôtels, restaurants gastronomiques et résidences de luxe.",
    benefits: [
      'Dimension et forme au millimètre',
      'Choix illimité de coloris et matières',
      'Finitions lisérées, frangées ou surjetées',
      'Logo ou motif possible',
      'Résistance adaptée à l\'usage',
    ],
    useCases: ['Lobbys d\'hôtels', 'Restaurants gastronomiques', 'Salles de réception', 'Résidences de luxe', 'Boutiques premium'],
    brands: ['EGE', 'Brintons', 'Balsan', 'Lano'],
    geoVerb: 'Tapis sur mesure à',
    metaTitle: (city) => `Tapis Sur Mesure ${city} — CB Sols, Création Sur-Mesure`,
    metaDescription: (city) =>
      `Tapis décoratifs sur mesure à ${city}. CB Sols crée vos tapis uniques pour hôtels, restaurants et espaces prestige. Devis personnalisé.`,
    h1: (city) => `Tapis Sur Mesure à ${city}`,
  },
  {
    slug: 'tapis-de-proprete',
    name: 'Tapis de Propreté',
    shortName: 'Tapis Propreté',
    icon: '▤',
    description: "Tapis d'entrée professionnels, protection de vos sols intérieurs et image soignée.",
    longDescription:
      "Le tapis de propreté est le premier contact avec votre espace. Il protège vos revêtements intérieurs, retient 80% des salissures à l'entrée et contribue à l'image de votre établissement. CB Sols propose des solutions sur mesure aux dimensions exactes de vos sas d'entrée, avec logo intégré possible.",
    benefits: [
      'Retient 80% des salissures dès l\'entrée',
      'Protège vos revêtements intérieurs',
      'Dimensions et formes sur mesure',
      'Logo de l\'entreprise intégrable',
      'Entretien professionnel disponible',
    ],
    useCases: ['Entrées d\'hôtels', 'Commerces', 'Bureaux & entreprises', 'Collectivités', 'Résidences'],
    brands: ['Coba', 'Forbo', 'Coral', 'Notrax'],
    geoVerb: 'Tapis de propreté à',
    metaTitle: (city) => `Tapis de Propreté ${city} — CB Sols, Sur Mesure`,
    metaDescription: (city) =>
      `Tapis de propreté professionnels à ${city}. Sur mesure, avec logo possible. CB Sols protège vos sols et soigne l'image de votre établissement.`,
    h1: (city) => `Tapis de Propreté à ${city}`,
  },
  {
    slug: 'nettoyage-moquette',
    name: 'Nettoyage de Moquette',
    shortName: 'Nettoyage',
    icon: '◎',
    description: 'Nettoyage professionnel par injection-extraction, redonne vie à vos moquettes.',
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
    brands: ['Prochem', 'Karcher', 'Chemspec'],
    geoVerb: 'Nettoyage de moquette à',
    metaTitle: (city) => `Nettoyage de Moquette ${city} — CB Sols, Injection-Extraction`,
    metaDescription: (city) =>
      `Nettoyage professionnel de moquette à ${city} par injection-extraction. CB Sols restitue l'éclat de vos moquettes. Intervention rapide, devis gratuit.`,
    h1: (city) => `Nettoyage de Moquette à ${city}`,
  },
  {
    slug: 'revetement-sol',
    name: 'Revêtement de Sol',
    shortName: 'Revêtement Sol',
    icon: '⬛',
    description: 'Expertise complète en revêtement de sol : conseil, fourniture, pose et entretien.',
    longDescription:
      "Depuis plus de 25 ans, CB Sols accompagne particuliers et professionnels de Charente-Maritime dans tous leurs projets de revêtement de sol. De la sélection des matériaux en showroom jusqu'à la pose et l'entretien, CB Sols est votre interlocuteur unique pour un projet réussi de A à Z.",
    benefits: [
      'Interlocuteur unique de A à Z',
      'Showroom avec 500+ échantillons',
      'Devis gratuit sous 48h',
      'Pose par des artisans qualifiés',
      'Garantie décennale',
    ],
    useCases: ['Maisons et appartements', 'Bureaux et commerces', 'Hôtels et restaurants', 'Collectivités', 'Chantiers neufs et rénovation'],
    brands: ['Gerflor', 'Forbo', 'EGE', 'Tarkett', 'Balsan'],
    geoVerb: 'Revêtement de sol à',
    metaTitle: (city) => `Revêtement de Sol ${city} — CB Sols, Artisan Spécialiste`,
    metaDescription: (city) =>
      `Pose de revêtement de sol à ${city} par CB Sols. Spécialiste depuis 25 ans en Charente-Maritime : moquette, PVC, tapis. Devis gratuit, intervention rapide.`,
    h1: (city) => `Revêtement de Sol à ${city}`,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
