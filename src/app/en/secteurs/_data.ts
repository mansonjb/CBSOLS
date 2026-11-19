// EN-only sector content, colocated under /en (FR data left untouched).
export interface EnSector {
  slug: string
  name: string
  tagline: string
  description: string
  challenges: string[]
  solutions: string[]
  referencesExamples: string[]
  recommendedServices: string[] // EN service slugs (shared slugs)
  metaTitle: string
  metaDescription: string
  faqs: { question: string; answer: string }[]
}

export const enSectors: EnSector[] = [
  {
    slug: 'hotellerie',
    name: 'Hotels & Accommodation',
    tagline: 'Floors worthy of your stars',
    description:
      'Hospitality demands floor coverings that combine faultless looks, resistance to intensive footfall and ease of daily upkeep. CB Sols has worked with 2- to 5-star hotels, tourist residences and premium guesthouses across Charente-Maritime for over 28 years.',
    challenges: [
      'Intensive footfall in corridors and common areas',
      'Fast turnaround between guests',
      'Visual consistency across spaces',
      'M1/M2 fire regulations',
      'Accessibility for reduced-mobility guests',
    ],
    solutions: [
      'High-end Bfl-s1 certified carpet for bedrooms',
      'Hard-wearing vinyl for common areas and corridors',
      'Bespoke logo rugs for lobbies',
      'Soft, acoustically controlled reading lounges',
      'Annual maintenance contract (hot-water-extraction cleaning)',
    ],
    referencesExamples: [
      'Île de Ré hotels (carpet bedrooms + vinyl bathrooms)',
      'La Rochelle tourist residences',
      'Premium guesthouses in Charente-Maritime',
    ],
    recommendedServices: ['pose-moquette', 'tapis-sur-mesure', 'nettoyage-moquette'],
    metaTitle: 'Floor Covering for Hotels | CB Sols',
    metaDescription:
      'CB Sols, floor-covering partner for hotels and accommodation in Charente-Maritime. Floors worthy of your stars. Free quote, fast turnaround.',
    faqs: [
      { question: 'Can you refit rooms without closing the hotel?', answer: 'Yes. We work room by room or floor by floor, scheduling around occupancy so you keep letting rooms while the refit progresses.' },
      { question: 'Is your carpet fire-rated for hotel use?', answer: 'We fit Bfl-s1 certified carpet that meets the fire regulations for public accommodation, with the documentation to back it.' },
      { question: 'Do you offer ongoing maintenance?', answer: 'We provide annual hot-water-extraction cleaning contracts that keep corridors and common areas looking their best between seasons.' },
    ],
  },
  {
    slug: 'restauration',
    name: 'Restaurants & Brasseries',
    tagline: 'The atmosphere starts under your guests’ feet',
    description:
      'In hospitality dining, the floor contributes directly to atmosphere and acoustic comfort. CB Sols equips fine-dining restaurants, brasseries and cafés with solutions that absorb noise and stand up to footfall, dropped glasses and intensive daily cleaning.',
    challenges: [
      'Noise in the dining room (acoustic comfort)',
      'Resistance to spills and dropped items',
      'Intensive daily cleaning',
      'A look that matches the restaurant’s positioning',
      'Minimal fitting time (reduced closure)',
    ],
    solutions: [
      'High-acoustic-performance carpet for dining rooms',
      'Hard-wearing vinyl for professional kitchens',
      'Bespoke rugs to define zones in the dining room',
      'Fitting within 48h to keep closure to a minimum',
    ],
    referencesExamples: [
      'Michelin-starred restaurant in La Rochelle (carpet + bespoke rug)',
      'Bistros & brasseries on Île de Ré',
      'Hotel restaurants in Charente-Maritime',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-les', 'tapis-sur-mesure', 'tapis-de-proprete'],
    metaTitle: 'Floor Covering for Restaurants | CB Sols',
    metaDescription:
      'CB Sols, floor-covering partner for restaurants and brasseries in Charente-Maritime. The atmosphere starts under your guests’ feet. Free quote.',
    faqs: [
      { question: 'What floor keeps a dining room quiet?', answer: 'Acoustic carpet absorbs chatter and footsteps far better than hard floors, lifting comfort in a busy room. We can combine it with bespoke rugs to zone the space.' },
      { question: 'Which flooring suits a professional kitchen?', answer: 'Heat-welded sheet vinyl: seamless, watertight and resistant to grease and intensive cleaning, the right choice behind the pass.' },
      { question: 'How quickly can you fit so we lose less trade?', answer: 'Many dining-room projects are fitted within 48 hours, scheduled around service to keep closure to a minimum.' },
    ],
  },
  {
    slug: 'bureaux-entreprises',
    name: 'Offices & Businesses',
    tagline: 'A floor that inspires performance',
    description:
      'Modern workplaces need coverings that aid concentration, absorb noise and reflect the company’s image. CB Sols supports SMEs, practices and large accounts across Charente-Maritime in creating high-performing work spaces.',
    challenges: [
      'Acoustic comfort for concentration',
      'A professional, modern image',
      'Resistance to castor chairs',
      'Daily upkeep by cleaning teams',
      'Work with no interruption to activity',
    ],
    solutions: [
      'Carpet tiles (partial replacement possible)',
      'Vinyl flooring resistant to office castors',
      'Logo entrance matting at the door',
      'Work in occupied premises or in phases so activity never stops',
    ],
    referencesExamples: [
      'Accountancy practices in La Rochelle',
      'Insurance firms in Charente-Maritime',
      'SME open-plan offices in La Rochelle',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-lames-dalles', 'tapis-de-proprete'],
    metaTitle: 'Floor Covering for Offices | CB Sols',
    metaDescription:
      'CB Sols, floor-covering partner for offices and businesses in Charente-Maritime. A floor that inspires performance. Free quote, fast turnaround.',
    faqs: [
      { question: 'Why carpet tiles rather than broadloom in an office?', answer: 'Tiles let you replace a worn or stained area without redoing the whole floor, which keeps long-term upkeep simple and cost-effective.' },
      { question: 'Will the floor survive castor chairs?', answer: 'Yes. We specify carpet and vinyl rated for castor use so daily rolling does not wear through or mark the surface.' },
      { question: 'Can you work while we stay open?', answer: 'We fit in occupied premises or in phases, zone by zone or out of hours, so your teams keep working throughout.' },
    ],
  },
  {
    slug: 'collectivites',
    name: 'Public Bodies & Schools',
    tagline: 'Durability and safety for public spaces',
    description:
      'Public-sector contracts call for certified, durable coverings that meet safety standards. CB Sols responds to tenders and works with town halls, schools, media libraries and community halls across Charente-Maritime.',
    challenges: [
      'Compliance with fire regulations (Euroclass)',
      'Resistance to very intensive footfall',
      'A controlled budget (public tenders)',
      'Tight project windows (school holidays)',
      'Mandatory reduced-mobility accessibility',
    ],
    solutions: [
      'Bfl-s1 certified sheet vinyl for circulation areas',
      'Hard-wearing vinyl for lecture halls and multi-purpose rooms',
      'Acoustic carpet for libraries and media libraries',
      'Tender submissions',
    ],
    referencesExamples: [
      'University lecture hall in La Rochelle (sheet vinyl)',
      'Media libraries in Charente-Maritime',
      'Meeting rooms for public bodies',
    ],
    recommendedServices: ['sol-pvc-les', 'sol-pvc-lames-dalles', 'pose-moquette'],
    metaTitle: 'Floor Covering for Public Bodies & Schools | CB Sols',
    metaDescription:
      'CB Sols, floor-covering partner for public bodies and schools in Charente-Maritime. Durability and safety for public spaces. Free quote.',
    faqs: [
      { question: 'Do you respond to public tenders?', answer: 'Yes. We regularly answer public-sector tenders and supply the certified technical documentation they require.' },
      { question: 'Can you work within school-holiday windows?', answer: 'We plan projects around tight windows such as school holidays so classrooms and halls are ready for reopening.' },
      { question: 'Is your flooring certified for public buildings?', answer: 'We fit Bfl-s1 certified vinyl and carpet that meet the Euroclass fire requirements for public premises.' },
    ],
  },
  {
    slug: 'commerces',
    name: 'Shops & Retail',
    tagline: 'The floor that shows your products off',
    description:
      'In retail, the floor guides the customer, sets the mood and must withstand thousands of visits a day. CB Sols equips shops, showrooms and commercial spaces with solutions that pair looks with performance.',
    challenges: [
      'Resistance to very intensive footfall',
      'Showing products off (reflections, colours)',
      'Fast fitting to limit closure',
      'Easy daily upkeep',
      'A consistent brand image',
    ],
    solutions: [
      'High-resistance LVT planks and tiles',
      'Very hard-wearing loop-pile carpet for boutiques',
      'Logo entrance matting at the door',
      'Work in occupied premises',
    ],
    referencesExamples: [
      'City-centre boutiques in La Rochelle',
      'Commercial showrooms in Charente-Maritime',
    ],
    recommendedServices: ['sol-pvc-lames-dalles', 'tapis-de-proprete', 'pose-moquette'],
    metaTitle: 'Floor Covering for Shops & Retail | CB Sols',
    metaDescription:
      'CB Sols, floor-covering partner for shops and retail in Charente-Maritime. The floor that shows your products off. Free quote, fast turnaround.',
    faqs: [
      { question: 'Which floor copes with heavy retail footfall?', answer: 'High-resistance LVT or tough loop-pile carpet, both rated for intensive traffic and easy to keep clean day to day.' },
      { question: 'Can you fit outside opening hours?', answer: 'Yes. We work in occupied premises or out of hours so the shop keeps trading while we fit.' },
      { question: 'Can the floor carry our brand look?', answer: 'Colours, finishes and logo entrance mats can all be chosen to match your brand and set the right mood at the door.' },
    ],
  },
  {
    slug: 'campings-tourisme',
    name: 'Campsites & Tourism',
    tagline: 'Quality of welcome, from floor to ceiling',
    description:
      'Charente-Maritime is among the French départements with the most campsites. CB Sols equips high-end mobile homes, bungalows and the common areas of 4- and 5-star campsites with coverings that resist damp and suit intensive seasonal use.',
    challenges: [
      'Damp and temperature swings',
      'Intensive footfall over the summer',
      'Fast replacement between seasons',
      'Optimised budget (seasonal returns)',
      'A modern, welcoming look',
    ],
    solutions: [
      '100% waterproof vinyl for mobile homes',
      'Sheet vinyl for shared sanitary blocks',
      'Entrance matting for bungalow doorways',
      'Annual off-season maintenance contract',
    ],
    referencesExamples: [
      '4/5-star campsites on Île de Ré',
      'Tourist residences in Charente-Maritime',
    ],
    recommendedServices: ['sol-pvc-lames-dalles', 'sol-pvc-les', 'tapis-de-proprete'],
    metaTitle: 'Floor Covering for Campsites & Tourism | CB Sols',
    metaDescription:
      'CB Sols, floor-covering partner for campsites and tourism in Charente-Maritime. Quality of welcome, from floor to ceiling. Free quote.',
    faqs: [
      { question: 'Which flooring handles damp in a mobile home?', answer: '100% waterproof vinyl: it shrugs off humidity and temperature swings far better than any textile floor in a seasonal unit.' },
      { question: 'Can you replace floors fast between seasons?', answer: 'Yes. Vinyl fits quickly with no heavy works, so units are ready to let again with minimal downtime.' },
      { question: 'What about the shared sanitary blocks?', answer: 'Heat-welded sheet vinyl gives a seamless, watertight, easy-to-clean floor that stands up to constant summer use.' },
    ],
  },
  {
    slug: 'golf-sport',
    name: 'Golf & Sports Venues',
    tagline: 'Performance and elegance for your spaces',
    description:
      'Golf clubs and premium sports venues need coverings suited to their particular spaces: an elegant clubhouse, hard-wearing changing rooms, corridors with heavy seasonal traffic. CB Sols has equipped several golf clubs in Charente-Maritime.',
    challenges: [
      'Resistance to damp in changing rooms',
      'Elegance in the clubhouse and dining area',
      'Resistance to golf shoes (spikes)',
      'Simplified upkeep',
    ],
    solutions: [
      'Contract carpet for the clubhouse and restaurant',
      'Hard-wearing vinyl for changing rooms',
      'Bespoke rugs for VIP lounges',
      'Entrance matting at the door',
    ],
    referencesExamples: [
      'Charente-Maritime golf club (carpet + changing-room floors)',
      'Country clubs in the La Rochelle area',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-les', 'tapis-sur-mesure'],
    metaTitle: 'Floor Covering for Golf & Sports Venues | CB Sols',
    metaDescription:
      'CB Sols, floor-covering partner for golf clubs and sports venues in Charente-Maritime. Performance and elegance for your spaces. Free quote.',
    faqs: [
      { question: 'What flooring suits a clubhouse?', answer: 'Contract carpet brings warmth and elegance to lounges and dining, while hard-wearing vinyl handles the wetter changing areas.' },
      { question: 'Will the floor survive golf spikes?', answer: 'We specify coverings rated for the traffic and the spikes, so corridors from course to clubhouse hold up through the season.' },
      { question: 'How do you keep changing rooms hygienic?', answer: 'Water-resistant vinyl, easy to clean and quick to dry, keeps damp changing areas sound and sanitary.' },
    ],
  },
]

export function getEnSectorBySlug(slug: string): EnSector | undefined {
  return enSectors.find((s) => s.slug === slug)
}
