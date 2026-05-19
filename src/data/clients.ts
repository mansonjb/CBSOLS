/**
 * Liste centralisée des clients référencés CB Sols.
 * Logos + lien vers leur site (utilisé sur home + /realisations).
 *
 * URLs vérifiées : seuls les sites accessibles sont liés. Les logos
 * sans href restent non cliquables (évite tout 404 ou redirection cassée).
 */
export interface ClientReference {
  src: string
  alt: string
  /** URL du site officiel du client. Si absent : logo non cliquable. */
  href?: string
}

export const clientLogos: ClientReference[] = [
  { src: '/images/clients/Hotel_La_Baronnie.webp', alt: 'Hôtel La Baronnie', href: 'https://www.hotel-labaronnie.com/' },
  { src: '/images/clients/LaGrandeTerrasse.webp', alt: 'La Grande Terrasse', href: 'https://www.la-grande-terrasse.com/' },
  { src: '/images/clients/Logo_GolfDeLaPree.webp', alt: 'Golf de la Prée', href: 'https://golflarochelle.fr' },
  // Gaya est l'un des restaurants de La Grande Terrasse
  { src: '/images/clients/Logo_Gaya.webp', alt: 'Restaurant Gaya, La Grande Terrasse', href: 'https://www.la-grande-terrasse.com/' },
  { src: '/images/clients/Masqhotel.webp', alt: 'Masq Hôtel', href: 'https://www.masqhotel.com/' },
  { src: '/images/clients/LogoHotelGrandLarge.webp', alt: 'Hôtel Grand Large', href: 'https://www.hotelgrandlarge.com/' },
  { src: '/images/clients/HotelSaintNicolas.webp', alt: 'Hôtel Saint-Nicolas', href: 'https://www.hotel-saint-nicolas.com/' },
  { src: '/images/clients/CLR_Hotels.webp', alt: 'CLR Hotels', href: 'http://www.clrhotels.fr/fr/' },
  // Ibis, chaîne (pas d'établissement spécifique identifié), logo non cliquable
  { src: '/images/clients/Ibis.webp', alt: 'Ibis' },
  { src: '/images/clients/MammaMiaRestaurant.webp', alt: 'Mamma Mia Restaurant', href: 'https://mammamia-lr.com/' },
  { src: '/images/clients/HotelLaMarine.webp', alt: 'Hôtel La Marine', href: 'https://www.hotelmarine.fr/' },
  { src: '/images/clients/LogoMaisonDesAmbassadeurs.webp', alt: 'Maison des Ambassadeurs', href: 'https://maisondesambassadeurs.com/' },
  { src: '/images/clients/AmauryLafonta.png', alt: 'Amaury Lafonta Pâtisserie', href: 'https://www.amaury-lafonta.com/' },
  { src: '/images/clients/CointetAssocies.png', alt: 'Cointet Associés' },
  { src: '/images/clients/AtlantiqueBureau.png', alt: 'Atlantique Bureau', href: 'https://www.atlantiquebureau.com/' },
  { src: '/images/clients/ApiviaMutuelle.png', alt: 'Apivia Mutuelle', href: 'https://www.apivia-mutuelle.fr/' },
  { src: '/images/clients/Amel.png', alt: 'Amel' },
  { src: '/images/clients/AXA_Logo.png', alt: 'AXA' },
]

/** Architectes & studios partenaires affichés sur /architectes */
export const architectePartners: ClientReference[] = [
  { src: '/images/clients/ABP_Architectes.webp', alt: 'ABP Architectes', href: 'https://www.abp-architecture.fr/' },
  { src: '/images/clients/AnneBoulletStudio.webp', alt: 'Anne Boullet Studio', href: 'https://anneboullet.fr/' },
  { src: '/images/clients/Atelier715.webp', alt: 'Atelier 715', href: 'https://www.facebook.com/Atelier715/' },
  { src: '/images/clients/ZestArchitecture.webp', alt: 'Zest Architecture', href: 'https://www.atelierzest.com/' },
  { src: '/images/clients/AgnesMagord.webp', alt: 'Agnès Magord', href: 'https://agnes-magord.fr/' },
  { src: '/images/clients/DUOConcept.png', alt: 'DUO Concept' },
  { src: '/images/clients/GRASSIN.png', alt: 'Grassin Décors' },
  { src: '/images/clients/AtlantiqueBureau.png', alt: 'Atlantique Bureau', href: 'https://www.atlantiquebureau.com/' },
  { src: '/images/clients/Cohea.png', alt: 'COHEA Architectes', href: 'https://cohea.fr/' },
  { src: '/images/clients/ContrastDesign.png', alt: 'Contrast Design', href: 'https://contrast-design.fr/' },
  { src: '/images/clients/GdvArchitectes.png', alt: 'GDV Architectes', href: 'https://www.gdvarchitecture.com/' },
  { src: '/images/clients/Igloo.png', alt: 'IGLOO Architecte d’intérieur', href: 'https://www.ig-loo.fr/' },
  { src: '/images/clients/MpArchitecte.png', alt: 'MP Architecte', href: 'https://www.mp-architecte.com/' },
  { src: '/images/clients/Sok.png', alt: 'SOK Architecture d’intérieur', href: 'https://www.sok-architecture-interieur.com/' },
]
