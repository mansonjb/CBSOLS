/**
 * Liste centralisée des clients référencés CB Sols.
 * Logos + lien vers leur site (utilisé sur home + /realisations).
 */
export interface ClientReference {
  src: string
  alt: string
  /** URL du site officiel du client (clic → ouvre dans un nouvel onglet) */
  href?: string
}

export const clientLogos: ClientReference[] = [
  { src: '/images/clients/Hotel_La_Baronnie.webp', alt: 'Hôtel La Baronnie',         href: 'https://www.hotel-la-baronnie.com/' },
  { src: '/images/clients/LaGrandeTerrasse.webp',  alt: 'La Grande Terrasse',        href: 'https://www.la-grande-terrasse-hotel-spa-la-rochelle.com/' },
  { src: '/images/clients/Logo_GolfDeLaPree.webp', alt: 'Golf de la Prée',           href: 'https://www.golf-de-la-pree-larochelle.com/' },
  { src: '/images/clients/Logo_Gaya.webp',         alt: 'Restaurant Gaya',           href: 'https://www.restaurant-gaya.com/' },
  { src: '/images/clients/Masqhotel.webp',         alt: 'Masq Hôtel',                href: 'https://www.masqhotel.com/' },
  { src: '/images/clients/LogoHotelGrandLarge.webp', alt: 'Hôtel Grand Large',       href: 'https://www.hotel-grand-large.com/' },
  { src: '/images/clients/HotelSaintNicolas.webp',  alt: 'Hôtel Saint-Nicolas',      href: 'https://www.hotel-saint-nicolas.com/' },
  { src: '/images/clients/CLR_Hotels.webp',         alt: 'CLR Hotels',                href: 'https://www.clr-hotels.com/' },
  { src: '/images/clients/Ibis.webp',               alt: 'Ibis',                      href: 'https://all.accor.com/brands/ibis-hotels.fr.shtml' },
  { src: '/images/clients/MammaMiaRestaurant.webp', alt: 'Mamma Mia Restaurant',     href: 'https://mammamia-larochelle.fr/' },
  { src: '/images/clients/HotelLaMarine.webp',      alt: 'Hôtel La Marine',          href: 'https://www.hotel-lamarine-iledere.com/' },
  { src: '/images/clients/LogoMaisonDesAmbassadeurs.webp', alt: 'Maison des Ambassadeurs', href: 'https://www.maisondesambassadeurs.com/' },
]

/** Architectes & studios partenaires affichés sur /architectes */
export const architectePartners: ClientReference[] = [
  { src: '/images/clients/ABP_Architectes.webp',  alt: 'ABP Architectes',     href: 'https://www.abp-architectes.fr/' },
  { src: '/images/clients/AnneBoulletStudio.webp', alt: 'Anne Boullet Studio', href: 'https://www.anneboulletstudio.com/' },
  { src: '/images/clients/Atelier715.webp',        alt: 'Atelier 715',         href: 'https://www.atelier715.fr/' },
  { src: '/images/clients/ZestArchitecture.webp',  alt: 'Zest Architecture',   href: 'https://www.zest-architecture.com/' },
  { src: '/images/clients/AgnesMagord.webp',       alt: 'Agnès Magord',        href: 'https://www.agnes-magord.com/' },
]
