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

export const brands: Brand[] = [
  {
    slug: 'ege',
    name: 'EGE',
    fullName: 'EGE Carpets',
    country: 'Danemark',
    logoSrc: '/images/brands/ege.png',
    metaTitle: 'EGE Carpets — Revendeur agréé CB Sols, La Rochelle & Île de Ré',
    metaDescription: 'CB Sols est revendeur agréé EGE Carpets en Charente-Maritime. Moquettes hôtelières et bureaux de référence danoise. Showroom à Villedoux. Devis gratuit.',
    tagline: 'La référence danoise de la moquette hôtelière',
    intro: 'EGE est le fabricant danois de moquettes le plus reconnu dans l\'hôtellerie et le tertiaire haut de gamme en Europe. Fondée en 1938 à Herning (Danemark), la marque équipe les plus grands hôtels et sièges sociaux du monde. CB Sols est revendeur agréé EGE en Charente-Maritime depuis plus de 15 ans.',
    expertise: [
      'Moquette hôtelière Hospitality Collection',
      'Moquette bureaux et tertiaire',
      'Tapis sur mesure Axminster et Wilton',
      'Dalles de moquette pour open spaces',
      'Revêtements acoustiques haute performance',
    ],
    topCollections: [
      { name: 'Hospitality', desc: 'Collection phare pour l\'hôtellerie — motifs élaborés, classement Bfl-s1, grammages de 700 à 1100 g/m²', useCases: 'Chambres, couloirs, lobbys hôteliers' },
      { name: 'Reform', desc: 'Dalles de moquette modulaires pour le tertiaire — recyclables, certifiées Cradle to Cradle Silver', useCases: 'Bureaux, open spaces, salles de réunion' },
      { name: 'Sense', desc: 'Collection résidentielle et hôtellerie douce — textures velours et boucles, coloris neutres', useCases: 'Chambres boutique-hôtel, résidences haut de gamme' },
    ],
    certifications: ['Cradle to Cradle Silver', 'ISO 14001', 'EU Ecolabel', 'Oeko-Tex Standard 100', 'Bfl-s1 (classement incendie EU)'],
    why: 'EGE est la marque que CB Sols recommande en premier pour les projets hôteliers exigeants. La qualité de finition, la profondeur des gammes et la disponibilité des certifications techniques font d\'EGE un choix sûr pour les commissions de sécurité et les architectes d\'intérieur.',
    services: ['pose-moquette', 'tapis-sur-mesure'],
  },
  {
    slug: 'gerflor',
    name: 'Gerflor',
    fullName: 'Gerflor',
    country: 'France',
    logoSrc: '/images/brands/gerflor.svg',
    metaTitle: 'Gerflor — Revendeur agréé CB Sols, Charente-Maritime',
    metaDescription: 'CB Sols pose les sols Gerflor en Charente-Maritime. PVC professionnel pour hôtels, EHPAD, restaurants et collectivités. Devis gratuit à La Rochelle et Île de Ré.',
    tagline: 'Le leader français du sol PVC professionnel',
    intro: 'Gerflor est le leader français des revêtements de sol PVC pour les professionnels. Fondée en 1937 à Villeurbanne, la marque équipe les hôpitaux, hôtels, EHPAD et collectivités du monde entier. Ses produits couvrent tous les usages : du LVT design aux PVC homogènes pour cuisines professionnelles.',
    expertise: [
      'Sol PVC homogène pour cuisines et zones humides',
      'LVT (Luxury Vinyl Tile) pour hôtellerie',
      'Revêtements de sol pour EHPAD',
      'Solutions acoustiques',
      'Systèmes de douche intégrale',
    ],
    topCollections: [
      { name: 'Creation 55 Clic', desc: 'LVT haute résistance à clipser — aspect bois ou béton ultra-réaliste, 5,5mm d\'épaisseur', useCases: 'Hôtels, boutiques, bureaux' },
      { name: 'Taralay Impression', desc: 'PVC hétérogène compact de référence — classement 43/34, motifs variés', useCases: 'Couloirs collectivités, commerces, restaurants' },
      { name: 'Mipolam Symbioz', desc: 'PVC homogène pour milieux médicaux — certifié hygièné, résistance chimique R10', useCases: 'EHPAD, cliniques, salles de soins' },
    ],
    certifications: ['ISO 14001', 'Cradle to Cradle', 'FloorScore', 'NF Environnement', 'R10/R11 antidérapant'],
    why: 'Gerflor est le premier choix de CB Sols pour les projets EHPAD, cuisines professionnelles et zones humides. La gamme homogène offre la meilleure résistance chimique du marché, et le réseau technico-commercial Gerflor facilite les dossiers techniques pour les appels d\'offres.',
    services: ['sol-pvc-les', 'sol-pvc-lames-dalles', 'douche-integrale-pvc'],
  },
  {
    slug: 'tarkett',
    name: 'Tarkett',
    fullName: 'Tarkett',
    country: 'France / Suède',
    logoSrc: '/images/brands/tarkett.svg',
    metaTitle: 'Tarkett — Revendeur agréé CB Sols, La Rochelle & Charente-Maritime',
    metaDescription: 'CB Sols est revendeur Tarkett en Charente-Maritime. Sols PVC, LVT et moquette pour bureaux, commerces et collectivités. Devis gratuit 48h.',
    tagline: 'Solutions globales de sol pour tous les espaces',
    intro: 'Tarkett est l\'un des leaders mondiaux des revêtements de sol avec plus de 130 ans d\'histoire. La marque propose une gamme exhaustive : PVC hétérogène et homogène, LVT, moquette, parquet et gazon synthétique. Ses gammes iQ sont la référence pour les cuisines professionnelles et les collectivités exigeantes.',
    expertise: [
      'Gamme iQ (PVC homogène) pour cuisines et santé',
      'Laminate et PVC pour tertiaire',
      'Solutions acoustiques et sous-couches',
      'Moquette bureau et collectivité',
      'Dalles vinyle LVT modular',
    ],
    topCollections: [
      { name: 'iQ Granit', desc: 'PVC homogène de référence mondiale — résistance chimique maximale, longévité 30 ans', useCases: 'Cuisines professionnelles, hôpitaux, collectivités' },
      { name: 'Starfloor Click', desc: 'LVT à clipser 100% imperméable — pose flottante rapide, 22 décors disponibles', useCases: 'Hôtels, bureaux, commerces en rénovation rapide' },
      { name: 'Desso AirMaster', desc: 'Moquette anti-particules fines — capte les allergènes et particules PM10', useCases: 'Bureaux, salles de réunion, espaces santé' },
    ],
    certifications: ['Cradle to Cradle', 'ReStart (programme recyclage)', 'ISO 14001', 'FloorScore', 'NF Environnement'],
    why: 'Tarkett est le partenaire de CB Sols pour les projets tertiaires et les cuisines professionnelles. La gamme iQ est incontournable pour les appels d\'offres collectivités, et le programme ReStart de reprise en fin de vie rassure les maîtres d\'ouvrage engagés RSE.',
    services: ['sol-pvc-les', 'sol-pvc-lames-dalles'],
  },
  {
    slug: 'balsan',
    name: 'Balsan',
    fullName: 'Balsan (Groupe Tarkett)',
    country: 'France',
    logoSrc: '/images/brands/balsan.png',
    metaTitle: 'Balsan — Moquette Professionnelle, Revendeur CB Sols Charente-Maritime',
    metaDescription: 'CB Sols revendeur Balsan en Charente-Maritime. Moquettes bureaux, hôtels et EHPAD de la marque française de référence. Showroom Villedoux. Devis gratuit.',
    tagline: 'La moquette française pour les professionnels exigeants',
    intro: 'Balsan est la marque française de référence pour les moquettes professionnelles. Fabricant historique basé à Bourges, racheté par le groupe Tarkett, Balsan équipe les bureaux, hôtels et établissements de santé avec des moquettes alliant technicité et esthétique. CB Sols distribue Balsan depuis sa création.',
    expertise: [
      'Moquette bureaux et open spaces',
      'Moquette hôtelière classement contrat',
      'Revêtements EHPAD et établissements de santé',
      'Dalles de moquette modulaires',
      'Solutions acoustiques pour open space',
    ],
    topCollections: [
      { name: 'Balsan Contract', desc: 'Gamme bureaux et tertiaire — classements 32 à 33, large palette de coloris, dalle ou lé', useCases: 'Bureaux, open spaces, salles de réunion' },
      { name: 'Balsan Hotel', desc: 'Gamme hôtelière certifiée Bfl-s1 — motifs sobres et contemporains, grammage 650-850 g/m²', useCases: 'Chambres et couloirs hôteliers' },
      { name: 'Balsan Health', desc: 'Gamme établissements de santé — bactériostatique, résistante aux fauteuils roulants', useCases: 'EHPAD, cliniques, maisons de retraite' },
    ],
    certifications: ['Bfl-s1', 'Oeko-Tex', 'GUT (faibles émissions COV)', 'ISO 9001', 'NF'],
    why: 'Balsan est le choix CB Sols pour les budgets maîtrisés qui ne veulent pas sacrifier la qualité. La gamme est solide, les délais de livraison courts (stock France), et les certifications complètes pour tous les types d\'ERP.',
    services: ['pose-moquette', 'tapis-sur-mesure'],
  },
  {
    slug: 'interface',
    name: 'Interface',
    fullName: 'Interface Inc.',
    country: 'États-Unis / Europe',
    logoSrc: '/images/brands/interface.png',
    metaTitle: 'Interface Dalles Moquette — Revendeur CB Sols, La Rochelle',
    metaDescription: 'CB Sols distribue Interface en Charente-Maritime. Dalles de moquette design pour bureaux et espaces de travail. Engagement carbone négatif. Devis gratuit.',
    tagline: 'Les dalles moquette pionnières du zéro carbone',
    intro: 'Interface est le fabricant américain de dalles de moquette le plus engagé en matière de développement durable. Première entreprise mondiale à s\'être déclarée "carbone négatif" sur ses produits, Interface propose des dalles modulaires de très haute qualité esthétique pour les espaces de travail contemporains.',
    expertise: [
      'Dalles de moquette 50×50 cm design',
      'Collections architecturales inspirées de la nature',
      'Systèmes de dalles posées libre (sans colle)',
      'Solutions acoustiques pour open space',
      'Programme de reprise et recyclage Carbon Neutral Floors',
    ],
    topCollections: [
      { name: 'Net Effect', desc: 'Collection inspirée de l\'eau et des océans — fibre recyclée, designs naturels abstraits', useCases: 'Bureaux design, espaces de coworking, lobbys' },
      { name: 'Human Nature', desc: 'Dalles imitant les textures naturelles (pierre, bois, métal) — certifiées Carbon Negative', useCases: 'Open spaces, espaces d\'accueil contemporains' },
      { name: 'Walk the Plank', desc: 'Format planche 25×100 cm effet parquet — pose en chevrons ou droite', useCases: 'Bureaux, restauration, hôtellerie boutique' },
    ],
    certifications: ['Carbon Negative Product (vérifiable)', 'Cradle to Cradle Gold', 'ISO 14001', 'LEED compatible', 'Declare Label'],
    why: 'Interface est le choix CB Sols pour les clients soucieux de leur bilan carbone et de l\'esthétique contemporaine. Si votre entreprise a des engagements RSE ou visez une certification BREEAM/LEED, Interface est la réponse.',
    services: ['pose-moquette'],
  },
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug)
}
