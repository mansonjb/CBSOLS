import type { City } from './cities'

export type ZoneKey = 'la-rochelle' | 'ile-de-re' | 'ile-doleron' | 'charente-maritime'

export interface ZoneContent {
  key: ZoneKey
  label: string
  /** Hero photo path (webp) */
  photo: string
  /** Short accent tagline shown in hero */
  tagline: string
  /** Zone-specific rich paragraph about local constraints */
  specificsTitle: string
  specificsBody: string
  /** 3-4 bullet challenges adapted to this zone */
  challenges: { label: string; desc: string }[]
  /** Testimonial shown on city page */
  testimonial: {
    quote: string
    author: string
  }
  /** Related project slugs/titles from realisations page, by zone */
  projectHighlights: { title: string; sector: string; year: string; img: string; desc: string }[]
  /** Zone-specific FAQ questions (added to the 3 generic ones) */
  zoneFaq: { q: string; a: string }[]
  /** Typical establishments by city size */
  typicalEstablishments: string[]
}

export const zones: Record<ZoneKey, ZoneContent> = {
  'la-rochelle': {
    key: 'la-rochelle',
    label: 'Agglomération de La Rochelle',
    photo: '/images/restaurant-coutanceau-real.webp',
    tagline: 'Intervention rapide depuis Villedoux, à 10 min du centre-ville.',
    specificsTitle: "Les contraintes du bâti rochelais",
    specificsBody:
      "L'agglomération de La Rochelle mélange bâti ancien en pierre (hôtels particuliers, immeubles du port) et constructions récentes des zones d'activité. Le bâti historique présente des planchers irréguliers, parfois humides, qui demandent une préparation soignée du support. Sur le littoral, la proximité de l'océan impose des matériaux qui tolèrent bien l'humidité ambiante. Nous préconisons des sous-couches techniques adaptées, une ventilation du support quand c'est nécessaire, et des produits de pose compatibles avec les conditions côtières.",
    challenges: [
      { label: 'Bâti ancien en pierre', desc: 'Planchers irréguliers, ragréage fibré souvent requis avant pose.' },
      { label: 'Humidité côtière', desc: 'Produits de pose et sous-couches spécifiques aux environnements marins.' },
      { label: 'Chantiers urbains', desc: 'Accès parking, horaires commerçants, copropriétés : logistique adaptée.' },
      { label: 'Forte densité ERP', desc: 'Hôtels, restaurants, bureaux : normes incendie M3/M4 maîtrisées.' },
    ],
    testimonial: {
      quote:
        "Équipe ponctuelle, chantier livré dans les temps malgré la saison haute. Le showroom en amont a vraiment aidé à choisir la bonne matière pour notre clientèle.",
      author: 'Hôtellerie · La Rochelle',
    },
    projectHighlights: [
      { title: 'Restaurant Christopher Coutanceau', sector: 'Restauration étoilée', year: '2025', img: '/images/restaurant-etoile-real.webp', desc: 'Moquette sur mesure coordonnée à la décoration.' },
      { title: 'Restaurant Gaya', sector: 'Restauration', year: '2025', img: '/images/restaurant-gaya.webp', desc: 'Réfection complète de la salle principale.' },
      { title: 'Bureaux Charente-Maritime', sector: 'Tertiaire', year: '2024', img: '/images/moquette-bureau-real.webp', desc: 'Moquette dalles haute résistance, pose week-end.' },
    ],
    zoneFaq: [
      {
        q: "Intervenez-vous dans les immeubles anciens du centre de La Rochelle ?",
        a: "Oui, c'est même une partie importante de notre activité. Les immeubles du centre historique ont souvent des planchers bois ou des dalles anciennes qui nécessitent un diagnostic avant pose. Nous réalisons ce diagnostic gratuitement lors du devis.",
      },
      {
        q: "Pouvez-vous poser sans interrompre l'activité d'un commerce ?",
        a: "Oui. Pour les restaurants, hôtels et commerces de La Rochelle, nous proposons des interventions nocturnes, en week-end ou par zones. La moquette dalles est particulièrement adaptée à ce type de chantier.",
      },
    ],
    typicalEstablishments: [
      'Hôtels du Vieux Port',
      'Restaurants gastronomiques',
      'Bureaux et sièges sociaux',
      "Cabinets d'architectes",
      'Résidences de prestige',
      "Cliniques et cabinets médicaux",
    ],
  },

  'ile-de-re': {
    key: 'ile-de-re',
    label: 'Île de Ré',
    photo: '/images/tapis-hotel-baronnie.webp',
    tagline: 'Artisan rétais — 20 min via le pont depuis Villedoux.',
    specificsTitle: "Les particularités des chantiers rétais",
    specificsBody:
      "L'Île de Ré impose une exigence haut de gamme presque partout : hôtels de charme, maisons secondaires de standing, résidences avec architectes d'intérieur. La saisonnalité est centrale — l'essentiel des rénovations se fait entre octobre et avril, avec des délais courts. L'hygrométrie insulaire élevée toute l'année et les embruns salins orientent les choix matière : moquettes en laine mélangée, sols PVC stables dimensionnellement, traitements anti-humidité. Nous connaissons les communes, les artisans complémentaires, les règles d'urbanisme propres à chaque village.",
    challenges: [
      { label: "Saisonnalité", desc: "Chantiers concentrés hors saison — planning réservé tôt." },
      { label: "Hygrométrie élevée", desc: "Matériaux et colles sélectionnés pour milieux humides." },
      { label: "Logistique pont", desc: "Livraisons matériaux coordonnées avec le passage du pont." },
      { label: "Exigences hôtelières", desc: "Hôtels de charme, villas : finitions irréprochables." },
    ],
    testimonial: {
      quote:
        "Valentin a su comprendre l'atmosphère que nous voulions pour nos chambres. Le résultat est à la hauteur de nos attentes, et la pose a été impeccable, dans les délais.",
      author: 'Hôtellerie · Île de Ré',
    },
    projectHighlights: [
      { title: 'Hôtel La Baronnie', sector: 'Hôtellerie', year: '2025', img: '/images/tapis-hotel-real.webp', desc: 'Tapis sur mesure motif exclusif + moquette EGE chambres.' },
      { title: 'Tapis sur mesure, détail', sector: 'Hôtellerie', year: '2025', img: '/images/tapis-hotel-baronnie.webp', desc: "Motif coordonné à l'identité de l'établissement." },
      { title: 'Chambre haut de gamme', sector: 'Résidentiel', year: '2025', img: '/images/moquette-chambre-motif.webp', desc: 'Moquette motif graphique, sélection en showroom.' },
    ],
    zoneFaq: [
      {
        q: "Pouvez-vous intervenir en saison sur l'Île de Ré ?",
        a: "Oui, mais nous privilégions fortement la période d'octobre à avril pour les rénovations importantes. En haute saison, nous gérons les petites interventions et les dépannages — le planning se réserve plusieurs mois à l'avance.",
      },
      {
        q: "Travaillez-vous avec les architectes d'intérieur rétais ?",
        a: "Oui, nous collaborons régulièrement avec plusieurs agences d'architecture d'intérieur de l'île (Anne Boullet Studio, Atelier 715, ABP Architectes). Nous participons au choix des matières en amont et réalisons la pose selon le cahier des charges.",
      },
    ],
    typicalEstablishments: [
      'Hôtels de charme',
      'Maisons secondaires',
      "Villas d'architectes",
      'Restaurants de plage',
      "Chambres d'hôtes",
      'Boutiques & galeries',
    ],
  },

  'ile-doleron': {
    key: 'ile-doleron',
    label: "Île d'Oléron",
    photo: '/images/golf-real.webp',
    tagline: "Artisan oléronnais — pont gratuit, accès direct depuis la Rochelle.",
    specificsTitle: "Les spécificités oléronnaises",
    specificsBody:
      "L'Île d'Oléron est la plus grande île française après la Corse. Les typologies sont variées : hôtels saisonniers, campings haut de gamme, résidences secondaires, commerces de villages. Comme sur Ré, la saisonnalité guide les plannings. Le sol sableux et la proximité immédiate de l'océan imposent des sols techniques pour les établissements d'accueil. Les campings multi-étoilés investissent dans des revêtements durables pour leurs mobil-homes et espaces communs — un segment où nous intervenons régulièrement.",
    challenges: [
      { label: 'Campings haut de gamme', desc: 'PVC technique pour mobil-homes, sols acoustiques restauration.' },
      { label: 'Saisonnalité forte', desc: 'Rénovations concentrées novembre à mars.' },
      { label: 'Sol sableux', desc: 'Tapis de propreté performants indispensables.' },
      { label: 'ERP touristiques', desc: 'Normes incendie, résistance trafic intense.' },
    ],
    testimonial: {
      quote:
        "Pose complète de nos espaces communs en 10 jours, équipe sérieuse et matériaux conformes au cahier des charges. Recommandé pour les établissements touristiques.",
      author: "Camping 5★ · Île d'Oléron",
    },
    projectHighlights: [
      { title: 'Golf de la Prée', sector: 'Sport & Loisirs', year: '2023', img: '/images/golf-real.webp', desc: 'Moquette contrat clubhouse + PVC vestiaires.' },
      { title: 'Bistrot de la Grande Terrasse', sector: 'Restauration', year: '2026', img: '/images/bistrot-restaurant-real.webp', desc: 'Moquette acoustique salle de restaurant.' },
      { title: 'Cuisine Professionnelle', sector: 'Restauration Pro', year: '2024', img: '/images/cuisine-pro-real.webp', desc: 'Sol PVC soudé à chaud, zéro joint.' },
    ],
    zoneFaq: [
      {
        q: "Intervenez-vous sur les campings et mobil-homes d'Oléron ?",
        a: "Oui, c'est une part significative de notre activité insulaire. Nous posons des sols PVC techniques dans les mobil-homes, des moquettes acoustiques dans les espaces communs, et des tapis de propreté aux entrées.",
      },
      {
        q: "Quels délais pour un chantier saisonnier sur Oléron ?",
        a: "Pour les campings et hôtels, nous calons les interventions entre octobre et mars. Un devis demandé en été est généralement planifié pour l'automne suivant. Pour les petits chantiers résidentiels, les délais sont plus courts (4 à 6 semaines).",
      },
    ],
    typicalEstablishments: [
      'Campings 4 et 5 étoiles',
      'Hôtels saisonniers',
      'Restaurants de front de mer',
      'Résidences secondaires',
      'Commerces de villages',
      'Mobil-homes premium',
    ],
  },

  'charente-maritime': {
    key: 'charente-maritime',
    label: 'Charente-Maritime (17)',
    photo: '/images/moquette-bureau-real.webp',
    tagline: 'Intervention sur toute la Charente-Maritime depuis Villedoux.',
    specificsTitle: 'Les chantiers du département',
    specificsBody:
      "Au-delà du littoral, la Charente-Maritime compte des bureaux, collectivités, établissements scolaires, EHPAD, bâtiments agricoles reconvertis, et un tissu résidentiel varié. Les contraintes techniques diffèrent du littoral : moins d'humidité, plus de trafic piéton intensif en tertiaire, exigences acoustiques en milieu scolaire et EHPAD, normes ERP strictes. Nous intervenons sur l'ensemble du département pour les chantiers structurants, avec une logistique rodée pour les sites éloignés (Saintes, Royan, Cognac, Rochefort).",
    challenges: [
      { label: 'Tertiaire et bureaux', desc: 'Moquette dalles, résistance chaises à roulettes, acoustique.' },
      { label: 'EHPAD et écoles', desc: 'Sols PVC ERP, classements feu, facilité d\'entretien.' },
      { label: 'Exploitations agricoles', desc: 'Conversions en gîtes, sols techniques salles d\'accueil.' },
      { label: 'Logistique départementale', desc: 'Déplacements optimisés, devis maintenu en clarté.' },
    ],
    testimonial: {
      quote:
        "Chantier de 350 m² en bureaux, pose sur un week-end, aucune gêne pour les équipes. Travail soigné, matériau conforme au choix fait en showroom.",
      author: 'Tertiaire · Charente-Maritime',
    },
    projectHighlights: [
      { title: 'Bureaux Charente-Maritime', sector: 'Tertiaire', year: '2024', img: '/images/moquette-bureau-real.webp', desc: 'Moquette dalles, pose week-end sans interruption.' },
      { title: 'Cuisine Professionnelle', sector: 'Restauration Pro', year: '2024', img: '/images/cuisine-pro-real.webp', desc: 'Sol PVC soudé, hygiène maximale.' },
      { title: 'Golf de la Prée', sector: 'Sport & Loisirs', year: '2023', img: '/images/golf-real.webp', desc: 'Refonte clubhouse et vestiaires.' },
    ],
    zoneFaq: [
      {
        q: "Intervenez-vous loin de La Rochelle (Saintes, Royan, Rochefort) ?",
        a: "Oui, nous couvrons toute la Charente-Maritime. Les frais de déplacement sont intégrés dans le devis de manière transparente, sans surprise. Pour les gros chantiers, ils sont souvent proportionnellement très faibles.",
      },
      {
        q: "Travaillez-vous pour les collectivités et EHPAD ?",
        a: "Oui. Nous sommes référencés pour répondre aux appels d'offres publics et marchés privés de collectivité. Garantie décennale, qualification Qualibat, assurances à jour.",
      },
    ],
    typicalEstablishments: [
      'Bureaux et sièges',
      'EHPAD et cliniques',
      'Écoles et collèges',
      'Bâtiments agricoles',
      'Commerces et boutiques',
      'Logements collectifs',
    ],
  },
}

export function getZoneContent(key: ZoneKey): ZoneContent {
  return zones[key]
}

/** Rough typical establishment descriptor based on population */
export function citySizeDescriptor(pop?: number): string {
  if (!pop) return 'commune'
  if (pop > 50000) return 'grande ville'
  if (pop > 15000) return 'ville'
  if (pop > 5000) return 'commune structurée'
  if (pop > 2000) return 'commune rurale'
  return 'petite commune'
}

/** Approximate project count by zone for credibility counter */
export function cityChantierCount(city: City): number {
  // Base chantiers par zone + bonus selon population
  const base: Record<ZoneKey, number> = {
    'la-rochelle': 180,
    'ile-de-re': 95,
    'ile-doleron': 55,
    'charente-maritime': 140,
  }
  const popBonus = Math.min(Math.floor((city.population ?? 3000) / 2000), 12)
  return base[city.zone] + popBonus
}
