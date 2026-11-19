// EN-only zone content, colocated under /en (FR data left untouched).
import type { EnCity } from './cities'

export type ZoneKey = 'la-rochelle' | 'ile-de-re' | 'ile-doleron' | 'charente-maritime'

export interface EnZoneContent {
  key: ZoneKey
  label: string
  photo: string
  tagline: string
  specificsTitle: string
  specificsBody: string
  challenges: { label: string; desc: string }[]
  testimonial: { quote: string; author: string }
  projectHighlights: { title: string; sector: string; year: string; img: string; desc: string }[]
  zoneFaq: { q: string; a: string }[]
  typicalEstablishments: string[]
}

export const enZones: Record<ZoneKey, EnZoneContent> = {
  'la-rochelle': {
    key: 'la-rochelle',
    label: 'Greater La Rochelle',
    photo: '/images/restaurant-etoile-real.webp',
    tagline: 'Fast response from Villedoux, 10 min from the town centre.',
    specificsTitle: 'The constraints of La Rochelle buildings',
    specificsBody:
      "Greater La Rochelle mixes old stone buildings (townhouses, harbour blocks) with recent construction on the business parks. The historic stock has uneven, sometimes damp floors that call for careful substrate preparation. On the coast, the proximity of the ocean demands materials that tolerate ambient damp well. We recommend suitable technical underlays, substrate ventilation where needed, and laying products compatible with coastal conditions.",
    challenges: [
      { label: 'Old stone buildings', desc: 'Uneven floors; a fibre-reinforced levelling compound is often required before laying.' },
      { label: 'Coastal damp', desc: 'Laying products and underlays specific to marine environments.' },
      { label: 'Urban projects', desc: 'Parking access, shop hours, shared ownership: adapted logistics.' },
      { label: 'High density of public buildings', desc: 'Hotels, restaurants, offices: M3/M4 fire regulations handled.' },
    ],
    testimonial: {
      quote:
        'A punctual team, project delivered on time despite the high season. The showroom beforehand really helped us choose the right material for our clientele.',
      author: 'Hospitality · La Rochelle',
    },
    projectHighlights: [
      { title: '3-star fine-dining restaurant', sector: 'Fine dining', year: '2025', img: '/images/restaurant-etoile-real.webp', desc: 'Bespoke carpet coordinated with the interior scheme.' },
      { title: 'Restaurant Gaya', sector: 'Restaurant', year: '2025', img: '/images/restaurant-gaya.webp', desc: 'Complete refit of the main dining room.' },
      { title: 'Charente-Maritime offices', sector: 'Commercial', year: '2024', img: '/images/moquette-bureau-real.webp', desc: 'High-resistance carpet tiles, fitted in occupied premises.' },
    ],
    zoneFaq: [
      {
        q: 'Do you work in the old buildings of central La Rochelle?',
        a: "Yes, it is even a significant part of what we do. The buildings in the historic centre often have timber floors or old slabs that need a survey before laying. We carry out that survey free of charge when we quote.",
      },
      {
        q: 'Can you lay without interrupting a shop’s activity?',
        a: 'Yes. For restaurants, hotels and shops in La Rochelle, we offer work in occupied premises: laying zone by zone, in rotation or at off-peak hours. Carpet tiles are particularly suited to this kind of project.',
      },
    ],
    typicalEstablishments: [
      'Vieux-Port hotels',
      'Fine-dining restaurants',
      'Offices and head offices',
      'Architecture practices',
      'Prestige residences',
      'Clinics and medical practices',
    ],
  },

  'ile-de-re': {
    key: 'ile-de-re',
    label: 'Île de Ré',
    photo: '/images/tapis-hotel-baronnie.webp',
    tagline: 'A Ré craftsman, 20 min via the bridge from Villedoux.',
    specificsTitle: 'What makes Île de Ré projects particular',
    specificsBody:
      "Île de Ré demands a high-end standard almost everywhere: boutique hotels, upmarket second homes, residences with interior architects. Seasonality is central, most renovations happening between October and April, with short lead times. The year-round high island humidity and the salt spray steer material choices: wool-blend carpets, dimensionally stable vinyl floors, anti-damp treatments. We know the villages, the complementary trades, the planning rules particular to each one.",
    challenges: [
      { label: 'Seasonality', desc: 'Projects concentrated off-season, schedules booked early.' },
      { label: 'High humidity', desc: 'Materials and adhesives selected for damp environments.' },
      { label: 'Bridge logistics', desc: 'Material deliveries coordinated with the bridge crossing.' },
      { label: 'Hotel requirements', desc: 'Boutique hotels, villas: faultless finishes.' },
    ],
    testimonial: {
      quote:
        'Valentin understood the atmosphere we wanted for our rooms. The result lives up to our expectations, and the fitting was impeccable and on time.',
      author: 'Hospitality · Île de Ré',
    },
    projectHighlights: [
      { title: 'Hôtel La Baronnie', sector: 'Hospitality', year: '2025', img: '/images/tapis-hotel-real.webp', desc: 'Bespoke rug with an exclusive motif + EGE carpet in the rooms.' },
      { title: 'Bespoke rug, detail', sector: 'Hospitality', year: '2025', img: '/images/tapis-hotel-baronnie.webp', desc: "A motif coordinated with the establishment's identity." },
      { title: 'High-end bedroom', sector: 'Residential', year: '2025', img: '/images/moquette-chambre-motif.webp', desc: 'Graphic-patterned carpet, selected in the showroom.' },
    ],
    zoneFaq: [
      {
        q: 'Can you work during the season on Île de Ré?',
        a: 'Yes, but we strongly favour the October-to-April period for major renovations. In high season we handle small jobs and repairs; the schedule is booked several months ahead.',
      },
      {
        q: 'Do you work with Île de Ré interior architects?',
        a: 'Yes, we regularly collaborate with several interior-architecture agencies on the island (Anne Boullet Studio, Atelier 715, ABP Architectes). We take part in the choice of materials upstream and carry out the fitting to the specification.',
      },
    ],
    typicalEstablishments: [
      'Boutique hotels',
      'Second homes',
      "Architects' villas",
      'Beach restaurants',
      'Guesthouses',
      'Boutiques & galleries',
    ],
  },

  'ile-doleron': {
    key: 'ile-doleron',
    label: "Île d'Oléron",
    photo: '/images/golf-real.webp',
    tagline: 'An Oléron craftsman, free bridge, direct access from La Rochelle.',
    specificsTitle: 'What is specific to Oléron',
    specificsBody:
      "Île d'Oléron is the largest French island after Corsica. The building types are varied: seasonal hotels, upmarket campsites, second homes, village shops. As on Ré, seasonality drives the schedules. The sandy ground and the immediate proximity of the ocean call for technical floors in reception establishments. The multi-star campsites invest in durable coverings for their mobile homes and common areas, a segment where we work regularly.",
    challenges: [
      { label: 'Upmarket campsites', desc: 'Technical vinyl for mobile homes, acoustic floors for dining areas.' },
      { label: 'Strong seasonality', desc: 'Renovations concentrated from November to March.' },
      { label: 'Sandy ground', desc: 'High-performance entrance matting is essential.' },
      { label: 'Tourist public buildings', desc: 'Fire regulations, resistance to heavy traffic.' },
    ],
    testimonial: {
      quote:
        'Full fitting of our common areas in 10 days, a serious team and materials compliant with the specification. Recommended for tourist establishments.',
      author: "5-star campsite · Île d'Oléron",
    },
    projectHighlights: [
      { title: 'Golf de la Prée', sector: 'Sport & leisure', year: '2023', img: '/images/golf-real.webp', desc: 'Contract carpet for the clubhouse + vinyl in the changing rooms.' },
      { title: 'Bistrot de la Grande Terrasse', sector: 'Restaurant', year: '2026', img: '/images/bistrot-restaurant-real.webp', desc: 'Acoustic carpet in the dining room.' },
      { title: 'Professional kitchen', sector: 'Professional catering', year: '2024', img: '/images/cuisine-pro-real.webp', desc: 'Heat-welded vinyl floor, zero seams.' },
    ],
    zoneFaq: [
      {
        q: "Do you work on campsites and mobile homes on Oléron?",
        a: 'Yes, it is a significant part of our island work. We lay technical vinyl floors in mobile homes, acoustic carpet in common areas, and entrance matting at the doorways.',
      },
      {
        q: 'What lead times for a seasonal project on Oléron?',
        a: 'For campsites and hotels, we schedule work between October and March. A quote requested in summer is generally planned for the following autumn. For small residential projects, lead times are shorter (4 to 6 weeks).',
      },
    ],
    typicalEstablishments: [
      '4- and 5-star campsites',
      'Seasonal hotels',
      'Seafront restaurants',
      'Second homes',
      'Village shops',
      'Premium mobile homes',
    ],
  },

  'charente-maritime': {
    key: 'charente-maritime',
    label: 'Charente-Maritime',
    photo: '/images/moquette-bureau-real.webp',
    tagline: 'Work across the whole of Charente-Maritime from Villedoux.',
    specificsTitle: 'Projects across the département',
    specificsBody:
      "Beyond the coast, Charente-Maritime has offices, public bodies, schools, converted farm buildings and a varied residential fabric. The technical constraints differ from the coast: less damp, more intensive foot traffic in commercial settings, acoustic requirements in schools and strict public-building regulations. We work across the whole département on structuring projects, with well-honed logistics for far-flung sites (Saintes, Royan, Cognac, Rochefort).",
    challenges: [
      { label: 'Offices and commercial', desc: 'Carpet tiles, resistance to castor chairs, acoustics.' },
      { label: 'Schools', desc: 'Public-building vinyl floors, fire ratings, easy upkeep.' },
      { label: 'Farm buildings', desc: 'Conversions into gîtes, technical floors for reception rooms.' },
      { label: 'Département-wide logistics', desc: 'Optimised travel, quote kept clear.' },
    ],
    testimonial: {
      quote:
        'A 350 m² office project, fitted over a weekend, no disruption to the teams. Careful work, material matching the choice made in the showroom.',
      author: 'Commercial · Charente-Maritime',
    },
    projectHighlights: [
      { title: 'Charente-Maritime offices', sector: 'Commercial', year: '2024', img: '/images/moquette-bureau-real.webp', desc: 'Carpet tiles, fitted in occupied premises with no interruption.' },
      { title: 'Professional kitchen', sector: 'Professional catering', year: '2024', img: '/images/cuisine-pro-real.webp', desc: 'Welded vinyl floor, maximum hygiene.' },
      { title: 'Golf de la Prée', sector: 'Sport & leisure', year: '2023', img: '/images/golf-real.webp', desc: 'Clubhouse and changing-room overhaul.' },
    ],
    zoneFaq: [
      {
        q: 'Do you work far from La Rochelle (Saintes, Royan, Rochefort)?',
        a: 'Yes, we cover the whole of Charente-Maritime. Travel costs are included in the quote transparently, with no surprises. For large projects they are often proportionally very small.',
      },
      {
        q: 'Do you work for public bodies?',
        a: 'Yes. We are registered to respond to public tenders and private public-body contracts. Ten-year structural guarantee, insurance up to date.',
      },
    ],
    typicalEstablishments: [
      'Offices and head offices',
      'Clinics',
      'Schools and colleges',
      'Farm buildings',
      'Shops and boutiques',
      'Multi-unit housing',
    ],
  },
}

export function getEnZoneContent(key: ZoneKey): EnZoneContent {
  return enZones[key]
}
