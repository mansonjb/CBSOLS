export interface Brand {
  slug: string
  name: string
  fullName: string
  country: string
  logoSrc: string
  metaTitle: string
  metaDescription: string
  tagline: string
  intro: string
  expertise: string[]
  topCollections: { name: string; desc: string; useCases: string }[]
  certifications: string[]
  why: string
  services: string[]
}

/**
 * Marques sélectionnées avec soin par CB Sols.
 * Liste alignée avec celles disponibles en showroom et reprise de l'ancien site.
 */
export const brands: Brand[] = [
  {
    slug: 'ege',
    name: 'EGE',
    fullName: 'EGE Carpets',
    country: 'Danemark',
    logoSrc: '/images/brands/ege.webp',
    metaTitle: 'EGE Carpets | Revendeur agréé CB Sols, La Rochelle & Île de Ré',
    metaDescription: 'CB Sols est revendeur agréé EGE Carpets en Charente-Maritime. Moquettes hôtelières et bureaux de référence danoise. Showroom à Villedoux. Devis gratuit.',
    tagline: 'La référence danoise de la moquette hôtelière',
    intro: "EGE est le fabricant danois de moquettes le plus reconnu dans l'hôtellerie et le tertiaire haut de gamme en Europe. Fondée en 1938 à Herning (Danemark), la marque équipe les plus grands hôtels et sièges sociaux du monde. CB Sols est revendeur agréé EGE en Charente-Maritime depuis plus de 15 ans.",
    expertise: [
      'Moquette hôtelière Hospitality Collection',
      'Moquette bureaux et tertiaire',
      'Tapis sur mesure Axminster et Wilton',
      'Dalles de moquette pour open spaces',
      'Revêtements acoustiques haute performance',
    ],
    topCollections: [
      { name: 'Hospitality', desc: "Collection phare pour l'hôtellerie : motifs élaborés, classement Bfl-s1, grammages de 910 à 2000 g/m²", useCases: 'Chambres, couloirs, lobbys hôteliers' },
      { name: 'Reform', desc: 'Dalles de moquette modulaires pour le tertiaire : recyclables, certifiées Cradle to Cradle Silver', useCases: 'Bureaux, open spaces, salles de réunion' },
      { name: 'Sense', desc: 'Collection résidentielle et hôtellerie douce : textures velours et boucles, coloris neutres', useCases: 'Chambres boutique-hôtel, résidences haut de gamme' },
    ],
    certifications: ['Cradle to Cradle Silver', 'ISO 14001', 'EU Ecolabel', 'Oeko-Tex Standard 100', 'Bfl-s1 (classement incendie EU)'],
    why: "EGE est la marque que CB Sols recommande en premier pour les projets hôteliers exigeants. La qualité de finition, la profondeur des gammes et la disponibilité des certifications techniques font d'EGE un choix sûr pour les commissions de sécurité et les architectes d'intérieur.",
    services: ['pose-moquette', 'tapis-sur-mesure'],
  },
  {
    slug: 'gerflor',
    name: 'Gerflor',
    fullName: 'Gerflor',
    country: 'France',
    logoSrc: '/images/brands/gerflor.svg',
    metaTitle: 'Gerflor | Revendeur agréé CB Sols, Charente-Maritime',
    metaDescription: 'CB Sols pose les sols Gerflor en Charente-Maritime. PVC professionnel pour hôtels, restaurants et collectivités. Devis gratuit à La Rochelle et Île de Ré.',
    tagline: 'Le leader français du sol PVC professionnel',
    intro: "Gerflor est le leader français des revêtements de sol PVC pour les professionnels. Fondée en 1937 à Villeurbanne, la marque équipe les hôpitaux, hôtels et collectivités du monde entier. Ses produits couvrent tous les usages : du LVT design aux PVC homogènes pour cuisines professionnelles.",
    expertise: [
      'Sol PVC homogène pour cuisines et zones humides',
      'LVT (Luxury Vinyl Tile) pour hôtellerie',
      'Revêtements de sol pour collectivités',
      'Solutions acoustiques',
      'Coins lecture et salles de cinéma',
    ],
    topCollections: [
      { name: 'Creation 55 Clic', desc: "LVT haute résistance à clipser : aspect bois ou béton ultra-réaliste, 5,5 mm d'épaisseur", useCases: 'Hôtels, boutiques, bureaux' },
      { name: 'Taralay Impression', desc: 'PVC hétérogène compact de référence : classement 43/34, motifs variés', useCases: 'Couloirs collectivités, commerces, restaurants' },
      { name: 'Mipolam Symbioz', desc: 'PVC homogène pour milieux médicaux : certifié hygiène, résistance chimique R10', useCases: 'cliniques, salles de soins' },
    ],
    certifications: ['ISO 14001', 'Cradle to Cradle', 'FloorScore', 'NF Environnement', 'R10/R11 antidérapant'],
    why: "Gerflor est un partenaire historique de CB Sols. La gamme homogène offre la meilleure résistance chimique du marché, et le réseau technico-commercial Gerflor facilite les dossiers techniques pour les appels d'offres. CB Sols est aussi acteur du programme de recyclage Seconde Vie de Gerflor (chutes de pose recyclées en partenariat avec Paprec).",
    services: ['sol-pvc-les', 'sol-pvc-lames-dalles'],
  },
  {
    slug: 'objectflor',
    name: 'objectflor',
    fullName: 'objectflor (Expona / Polyflor)',
    country: 'Allemagne / Royaume-Uni',
    logoSrc: '/images/brands/objectflor.svg',
    metaTitle: 'objectflor | Revendeur CB Sols, Charente-Maritime',
    metaDescription: 'CB Sols distribue objectflor en Charente-Maritime. Lames et dalles vinyle haute résistance pour bureaux, hôtels et commerces. Devis gratuit.',
    tagline: 'Le vinyle design haut de gamme allemand',
    intro: "objectflor est la marque allemande de référence pour les revêtements vinyle design haute résistance. Distributeur exclusif des collections Expona et Polyflor en Europe, la marque cible les espaces de travail premium, les hôtels boutique et les commerces de standing. Ses lames LVT au rendu textile, bois ou pierre sont parmi les plus convaincantes du marché.",
    expertise: [
      'Lames LVT design haute résistance',
      'Dalles vinyle modulaires pour le tertiaire',
      'Solutions sol PVC heterogene Expona',
      'Effets bois, pierre, béton ciré, textile',
      'Collections sur mesure pour projets B2B',
    ],
    topCollections: [
      { name: 'Expona Commercial', desc: 'Lames vinyle premium 3 mm : couche d\'usure 0,7 mm, classement 33/42, +130 décors', useCases: "Hôtels, bureaux, commerces, restaurants" },
      { name: 'Expona Domestic', desc: 'Gamme résidentielle : lames LVT couche d\'usure 0,3 mm, plus économique', useCases: 'Logements, résidences secondaires' },
      { name: 'Polyflor Bloc', desc: 'PVC homogène 2 mm pour usage intensif : résistance chimique, facilité d\'entretien', useCases: 'Cuisines pro, ateliers, vestiaires' },
    ],
    certifications: ['EN 14041', 'Bfl-s1', 'EN 14904 (sols sportifs)', 'A+ COV', 'EU Ecolabel'],
    why: "objectflor est le choix CB Sols quand l'esthétique compte autant que la résistance. La couche d'usure 0,7 mm d'Expona Commercial est l'une des plus épaisses du marché, durée de vie effective 20+ ans en bureau. Pour les projets architecte exigeants, c'est souvent la marque qui fait basculer le choix.",
    services: ['sol-pvc-lames-dalles', 'sol-pvc-les'],
  },
  {
    slug: 'bostik',
    name: 'Bostik',
    fullName: 'Bostik (Groupe Arkema)',
    country: 'France',
    logoSrc: '/images/brands/bostik.svg',
    metaTitle: 'Bostik | Colles & Préparation Support, Partenaire CB Sols',
    metaDescription: "Bostik est le partenaire colles et préparation de support de CB Sols : ragréages, primaires, colles techniques pour moquette et PVC. Garantie de tenue.",
    tagline: 'La référence colles et préparation de support',
    intro: "Bostik (groupe Arkema) est le leader mondial des adhésifs et préparations de support pour les revêtements de sol. Fondée en 1889, la marque équipe les soliers professionnels avec une gamme exhaustive de colles, ragréages, primaires et résines. CB Sols utilise systématiquement Bostik en préparation pour garantir la tenue de chaque pose.",
    expertise: [
      'Ragréages auto-lissants P3 et fibrés',
      'Primaires d\'accrochage et anti-humidité',
      'Colles acryliques pour moquette',
      'Colles techniques pour PVC homogène',
      'Mastics de soudure à chaud',
    ],
    topCollections: [
      { name: 'Stickoflex', desc: "Colle acrylique haute performance : pour moquettes lourdes en lés ou dalles, séchage rapide", useCases: 'Moquette hôtels, bureaux, dalles modulaires' },
      { name: 'Solplan', desc: 'Ragréage auto-lissant P3 fibré : épaisseurs 1 à 30 mm, support bois ou béton', useCases: 'Tous projets de rénovation' },
      { name: 'Eponal', desc: 'Résine époxy barrière anti-humidité : protège contre les remontées capillaires', useCases: 'Rez-de-chaussée sur vide sanitaire ou cave' },
    ],
    certifications: ['EMICODE EC1 Plus (très faibles émissions)', 'NF DTU 53.12', 'A+ qualité de l\'air', 'Bfl-s1 (système complet)'],
    why: "Bostik est notre partenaire colles et préparation depuis l'origine de CB Sols. Le bon revêtement avec une mauvaise colle, c'est un projet raté. Bostik garantit la compatibilité système (colle + ragréage + primaire) pour engager notre garantie décennale en toute sérénité.",
    services: ['pose-moquette', 'sol-pvc-les', 'sol-pvc-lames-dalles'],
  },
  {
    slug: 'romus',
    name: 'Romus',
    fullName: 'Romus',
    country: 'France',
    logoSrc: '/images/brands/romus.svg',
    metaTitle: 'Romus | Profilés et Accessoires Sol, Partenaire CB Sols',
    metaDescription: "Romus fournit les profilés, nez de marche et barres de seuil utilisés par CB Sols : aluminium, laiton, inox. Pour finition pro de tous les projets.",
    tagline: 'Profilés et accessoires de finition de référence',
    intro: "Romus est le fabricant français spécialisé dans les profilés de finition pour revêtements de sol : nez de marche, barres de seuil, joints de dilatation, profilés d'angle. Fondé en 1973, l'entreprise basée près de Saint-Étienne fournit les soliers professionnels avec une gamme complète en aluminium anodisé, laiton, inox et PVC. CB Sols travaille avec Romus depuis ses débuts.",
    expertise: [
      'Nez de marche aluminium, laiton et inox',
      'Barres de seuil et profilés de transition',
      'Joints de dilatation et de fractionnement',
      'Profilés d\'arrêt et plinthes techniques',
      'Solutions accessibilité PMR (clous podotactiles)',
    ],
    topCollections: [
      { name: 'Aluminium anodisé', desc: 'Gamme standard du marché : durable, économique, large choix de finitions', useCases: 'Bureaux, hôtels, commerces, ERP' },
      { name: 'Laiton massif', desc: 'Finition haut de gamme avec patine naturelle : poli ou brossé, très grande durée de vie', useCases: 'Hôtels prestige, restaurants gastronomiques' },
      { name: 'Inox brossé', desc: 'Look industriel et hygiène maximale : recommandé en milieu humide ou alimentaire', useCases: 'Cuisines pro, vestiaires, sols industriels' },
    ],
    certifications: ['NF Environnement', 'EN 13501-1 (réaction au feu)', 'NF P 98-351 (accessibilité PMR)'],
    why: "Romus est notre partenaire pour la finition de chaque projet. Un beau revêtement avec un nez de marche bas de gamme, c'est l'élément qui dévalue tout le reste. La gamme Romus permet d'aligner la finition sur le niveau du projet, du standard ERP au laiton hôtellerie prestige.",
    services: ['pose-moquette', 'sol-pvc-lames-dalles'],
  },
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug)
}
