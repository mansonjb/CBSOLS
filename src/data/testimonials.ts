export type TestimonialSector =
  | 'hotellerie'
  | 'restauration'
  | 'bureaux'
  | 'architecte'
  | 'ehpad-sante'
  | 'residentiel'
  | 'camping'
  | 'collectivite'

export interface Testimonial {
  sector: TestimonialSector
  quote: string
  author: string
  zone?: 'la-rochelle' | 'ile-de-re' | 'ile-doleron' | 'charente-maritime'
}

export const testimonials: Testimonial[] = [
  {
    sector: 'hotellerie',
    zone: 'ile-de-re',
    quote:
      "Valentin a su comprendre l'atmosphère que nous voulions pour nos chambres. Le résultat est à la hauteur de nos attentes, et la pose a été impeccable, dans les délais.",
    author: 'Hôtellerie · Île de Ré',
  },
  {
    sector: 'hotellerie',
    zone: 'la-rochelle',
    quote:
      "Équipe ponctuelle, chantier livré dans les temps malgré la saison haute. Le showroom en amont a vraiment aidé à choisir la bonne matière pour notre clientèle.",
    author: 'Hôtellerie · La Rochelle',
  },
  {
    sector: 'restauration',
    zone: 'la-rochelle',
    quote:
      "Nous cherchions une moquette qui absorbe le bruit sans compromis sur l'esthétique. CB Sols a proposé plusieurs solutions techniques avec les échantillons en main, choix simple et pose nickel.",
    author: 'Restauration · La Rochelle',
  },
  {
    sector: 'bureaux',
    zone: 'charente-maritime',
    quote:
      "Chantier de 350 m² en bureaux, pose sur un week-end, aucune gêne pour les équipes. Travail soigné, matériau conforme au choix fait en showroom.",
    author: 'Tertiaire · Charente-Maritime',
  },
  {
    sector: 'architecte',
    zone: 'ile-de-re',
    quote:
      "Travail de qualité et respect du cahier des charges. CB Sols s'intègre naturellement dans nos équipes de chantier, c'est précieux pour un projet haut de gamme.",
    author: "Architecte d'intérieur · Île de Ré",
  },
  {
    sector: 'camping',
    zone: 'ile-doleron',
    quote:
      "Pose complète de nos espaces communs en 10 jours, équipe sérieuse et matériaux conformes au cahier des charges. Recommandé pour les établissements touristiques.",
    author: "Camping 5★ · Île d'Oléron",
  },
  {
    sector: 'residentiel',
    zone: 'la-rochelle',
    quote:
      "J'ai été reçue en showroom avec beaucoup d'attention. Conseils justes, matière sublime, pose irréprochable. On sent un vrai savoir-faire d'artisan.",
    author: 'Particulière · La Rochelle',
  },
  {
    sector: 'ehpad-sante',
    zone: 'charente-maritime',
    quote:
      "Sol PVC conforme aux normes ERP, pose par zones pour ne pas interrompre le service. Les équipes CB Sols connaissent parfaitement les contraintes hygiéniques d'un EHPAD.",
    author: 'EHPAD · Charente-Maritime',
  },
]

/** Pick N testimonials, preferring given zone/sector, deterministic by seed. */
export function pickTestimonials({
  zone,
  preferSector,
  count = 3,
  seed = '',
}: {
  zone?: Testimonial['zone']
  preferSector?: TestimonialSector
  count?: number
  seed?: string
}): Testimonial[] {
  // Deterministic rotation based on seed
  const hash = [...seed].reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) >>> 0, 7)

  const pool = [...testimonials]
  // Score each: +3 if zone match, +2 if sector match
  const scored = pool.map((t, i) => ({
    t,
    i,
    score: (zone && t.zone === zone ? 3 : 0) + (preferSector && t.sector === preferSector ? 2 : 0),
  }))
  // Sort by score desc, then deterministic shuffle via hash
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    return (((a.i * 17) ^ hash) & 0xff) - (((b.i * 17) ^ hash) & 0xff)
  })
  return scored.slice(0, count).map((s) => s.t)
}
