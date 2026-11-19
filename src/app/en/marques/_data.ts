// EN-only brand content, colocated under /en (FR data left untouched).
export interface EnBrand {
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

export const enBrands: EnBrand[] = [
  {
    slug: 'ege',
    name: 'EGE',
    fullName: 'EGE Carpets',
    country: 'Denmark',
    logoSrc: '/images/brands/ege.webp',
    metaTitle: 'EGE Carpets | Approved CB Sols Dealer, La Rochelle & Île de Ré',
    metaDescription: 'CB Sols is an approved EGE Carpets dealer in Charente-Maritime. Benchmark Danish carpet for hotels and offices. Showroom in Villedoux. Free quote.',
    tagline: 'The Danish benchmark for hotel carpet',
    intro: 'EGE is the most respected Danish carpet maker in high-end hospitality and commercial interiors across Europe. Founded in 1938 in Herning, Denmark, the brand floors the world’s leading hotels and head offices. CB Sols has been an approved EGE dealer in Charente-Maritime since 2012.',
    expertise: [
      'Hospitality Collection hotel carpet',
      'Carpet for offices and commercial space',
      'Bespoke Axminster and Wilton rugs',
      'Carpet tiles for open-plan offices',
      'High-performance acoustic coverings',
    ],
    topCollections: [
      { name: 'Hospitality', desc: 'Flagship hospitality collection: elaborate patterns, Bfl-s1 rating, weights from 910 to 2000 g/m²', useCases: 'Hotel bedrooms, corridors, lobbies' },
      { name: 'Reform', desc: 'Modular carpet tiles for the workplace: recyclable, Cradle to Cradle Silver certified', useCases: 'Offices, open-plan spaces, meeting rooms' },
      { name: 'Sense', desc: 'Soft residential and hospitality collection: velvet and loop textures, neutral tones', useCases: 'Boutique-hotel rooms, high-end homes' },
    ],
    certifications: ['Cradle to Cradle Silver', 'ISO 14001', 'EU Ecolabel', 'Oeko-Tex Standard 100', 'Bfl-s1 (EU fire rating)'],
    why: 'EGE is the brand CB Sols recommends first for demanding hotel projects. The quality of finish, the depth of the ranges and the availability of technical certifications make EGE a safe choice for safety committees and interior architects alike.',
    services: ['pose-moquette', 'tapis-sur-mesure'],
  },
  {
    slug: 'gerflor',
    name: 'Gerflor',
    fullName: 'Gerflor',
    country: 'France',
    logoSrc: '/images/brands/gerflor.svg',
    metaTitle: 'Gerflor | Approved CB Sols Dealer, Charente-Maritime',
    metaDescription: 'CB Sols fits Gerflor floors in Charente-Maritime. Professional vinyl for hotels, restaurants and public bodies. Free quote in La Rochelle and Île de Ré.',
    tagline: 'The French leader in professional vinyl flooring',
    intro: 'Gerflor is the French leader in PVC floor coverings for professionals. Founded in 1937 in Villeurbanne, the brand floors hospitals, hotels and public bodies worldwide. Its products cover every use: from design LVT to homogeneous vinyl for professional kitchens.',
    expertise: [
      'Homogeneous vinyl for kitchens and wet areas',
      'LVT (Luxury Vinyl Tile) for hospitality',
      'Floor coverings for public bodies',
      'Acoustic solutions',
      'Reading nooks and cinema rooms',
    ],
    topCollections: [
      { name: 'Creation 55 Clic', desc: 'High-resistance click-fit LVT: ultra-realistic wood or concrete look, 5.5 mm thick', useCases: 'Hotels, shops, offices' },
      { name: 'Taralay Impression', desc: 'Benchmark compact heterogeneous vinyl: 43/34 rating, varied patterns', useCases: 'Public-body corridors, shops, restaurants' },
      { name: 'Mipolam Symbioz', desc: 'Homogeneous vinyl for medical settings: hygiene certified, R10 chemical resistance', useCases: 'Clinics, treatment rooms' },
    ],
    certifications: ['ISO 14001', 'Cradle to Cradle', 'FloorScore', 'NF Environnement', 'R10/R11 anti-slip'],
    why: 'Gerflor is a long-standing partner of CB Sols. The homogeneous range offers the best chemical resistance on the market, and Gerflor’s technical sales network makes the technical files for public tenders far easier. CB Sols also takes part in Gerflor’s Second Life recycling programme (offcuts recycled in partnership with Paprec).',
    services: ['sol-pvc-les', 'sol-pvc-lames-dalles'],
  },
  {
    slug: 'objectflor',
    name: 'objectflor',
    fullName: 'objectflor (Expona / Polyflor)',
    country: 'Germany / United Kingdom',
    logoSrc: '/images/brands/objectflor.svg',
    metaTitle: 'objectflor | CB Sols Dealer, Charente-Maritime',
    metaDescription: 'CB Sols supplies objectflor in Charente-Maritime. High-resistance vinyl planks and tiles for offices, hotels and shops. Free quote.',
    tagline: 'High-end German design vinyl',
    intro: 'objectflor is the benchmark German brand for high-resistance design vinyl coverings. Exclusive distributor of the Expona and Polyflor collections in Europe, the brand targets premium workplaces, boutique hotels and upmarket retail. Its LVT planks with a textile, wood or stone look are among the most convincing on the market.',
    expertise: [
      'High-resistance design LVT planks',
      'Modular vinyl tiles for the workplace',
      'Expona heterogeneous vinyl solutions',
      'Wood, stone, polished concrete and textile effects',
      'Bespoke collections for professional projects',
    ],
    topCollections: [
      { name: 'Expona Commercial', desc: 'Premium 3 mm vinyl planks: 0.7 mm wear layer, 33/42 rating, over 130 designs', useCases: 'Hotels, offices, shops, restaurants' },
      { name: 'Expona Domestic', desc: 'Residential range: LVT planks with a 0.3 mm wear layer, more economical', useCases: 'Homes, second homes' },
      { name: 'Polyflor Bloc', desc: '2 mm homogeneous vinyl for intensive use: chemical resistance, easy upkeep', useCases: 'Professional kitchens, workshops, changing rooms' },
    ],
    certifications: ['EN 14041', 'Bfl-s1', 'EN 14904 (sports floors)', 'A+ VOC', 'EU Ecolabel'],
    why: 'objectflor is the CB Sols choice when looks matter as much as resistance. The 0.7 mm wear layer of Expona Commercial is one of the thickest on the market, giving an effective life of over 20 years in an office. For demanding architect-led projects, it is often the brand that tips the decision.',
    services: ['sol-pvc-lames-dalles', 'sol-pvc-les'],
  },
  {
    slug: 'bostik',
    name: 'Bostik',
    fullName: 'Bostik (Arkema Group)',
    country: 'France',
    logoSrc: '/images/brands/bostik.svg',
    metaTitle: 'Bostik | Adhesives & Substrate Prep, CB Sols Partner',
    metaDescription: 'Bostik is the adhesives and substrate-preparation partner of CB Sols: levelling compounds, primers, technical adhesives for carpet and vinyl. Guaranteed hold.',
    tagline: 'The benchmark for adhesives and substrate preparation',
    intro: 'Bostik (Arkema Group) is the world leader in adhesives and substrate preparation for floor coverings. Founded in 1889, the brand equips professional floor-layers with a comprehensive range of adhesives, levelling compounds, primers and resins. CB Sols uses Bostik as standard in preparation to guarantee the hold of every installation.',
    expertise: [
      'P3 self-levelling and fibre-reinforced compounds',
      'Bonding and anti-damp primers',
      'Acrylic adhesives for carpet',
      'Technical adhesives for homogeneous vinyl',
      'Hot-weld seam sealants',
    ],
    topCollections: [
      { name: 'Stickoflex', desc: 'High-performance acrylic adhesive: for heavy carpet in rolls or tiles, fast curing', useCases: 'Hotel and office carpet, modular tiles' },
      { name: 'Solplan', desc: 'P3 fibre-reinforced self-levelling compound: 1 to 30 mm thickness, wood or concrete substrate', useCases: 'All refurbishment projects' },
      { name: 'Eponal', desc: 'Epoxy anti-damp barrier resin: protects against rising damp', useCases: 'Ground floors over a crawl space or cellar' },
    ],
    certifications: ['EMICODE EC1 Plus (very low emissions)', 'NF DTU 53.12', 'A+ air quality', 'Bfl-s1 (complete system)'],
    why: 'Bostik has been our adhesives and preparation partner since CB Sols began. The right covering with the wrong adhesive is a failed project. Bostik guarantees system compatibility (adhesive + levelling compound + primer) so we can stand behind our ten-year structural guarantee with complete peace of mind.',
    services: ['pose-moquette', 'sol-pvc-les', 'sol-pvc-lames-dalles'],
  },
  {
    slug: 'romus',
    name: 'Romus',
    fullName: 'Romus',
    country: 'France',
    logoSrc: '/images/brands/romus.svg',
    metaTitle: 'Romus | Floor Profiles & Trims, CB Sols Partner',
    metaDescription: 'Romus supplies the profiles, stair nosings and threshold bars used by CB Sols: aluminium, brass, stainless steel. For a professional finish on every project.',
    tagline: 'The benchmark for finishing profiles and trims',
    intro: 'Romus is the French maker specialising in finishing profiles for floor coverings: stair nosings, threshold bars, expansion joints, corner profiles. Founded in 1973, the company, based near Saint-Étienne, supplies professional floor-layers with a complete range in anodised aluminium, brass, stainless steel and PVC. CB Sols has worked with Romus from the start.',
    expertise: [
      'Aluminium, brass and stainless-steel stair nosings',
      'Threshold bars and transition profiles',
      'Expansion and division joints',
      'Edge-stop profiles and technical skirting',
      'Reduced-mobility accessibility solutions (tactile studs)',
    ],
    topCollections: [
      { name: 'Anodised aluminium', desc: 'The market standard range: durable, economical, a wide choice of finishes', useCases: 'Offices, hotels, shops, public buildings' },
      { name: 'Solid brass', desc: 'High-end finish with a natural patina: polished or brushed, very long life', useCases: 'Prestige hotels, fine-dining restaurants' },
      { name: 'Brushed stainless steel', desc: 'Industrial look and maximum hygiene: recommended in wet or food areas', useCases: 'Professional kitchens, changing rooms, industrial floors' },
    ],
    certifications: ['NF Environnement', 'EN 13501-1 (reaction to fire)', 'NF P 98-351 (reduced-mobility accessibility)'],
    why: 'Romus is our partner for the finish of every project. A fine covering with a cheap stair nosing is the one detail that cheapens all the rest. The Romus range lets us match the finish to the level of the project, from a public-building standard to prestige-hotel brass.',
    services: ['pose-moquette', 'sol-pvc-lames-dalles'],
  },
]

export function getEnBrandBySlug(slug: string): EnBrand | undefined {
  return enBrands.find((b) => b.slug === slug)
}
