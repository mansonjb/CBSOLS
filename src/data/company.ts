// Auto-calcul de l'expérience : années depuis août 1999, incrémenté chaque août
function computeExperience(): number {
  const founded = new Date(1999, 7, 1) // août = mois 7 (0-indexed)
  const now = new Date()
  let years = now.getFullYear() - founded.getFullYear()
  if (now.getMonth() < founded.getMonth()) years -= 1
  return years
}

const yearsOfExperience = computeExperience()

export const company = {
  name: 'CB Sols',
  legalName: 'CB SOLS REVÊTEMENTS',
  tagline: `Artisan solier moquettiste depuis plus de 25 ans`,
  description:
    'Spécialiste des revêtements de sol sur mesure en Charente-Maritime. Moquettes, sols PVC, tapis : posés par des artisans qualifiés pour particuliers et professionnels.',
  phone: '06 85 05 28 80',
  phoneClean: '+33685052880',
  email: 'contact@cbsols.fr',
  address: {
    street: '8 rue des Merises',
    area: 'ZA les Cerisiers',
    zip: '17230',
    city: 'Villedoux',
    full: '8 rue des Merises, ZA les Cerisiers, 17230 Villedoux',
  },
  geo: {
    lat: 46.2012,
    lng: -1.0923,
  },
  contact: 'Valentin Prévoteau',
  since: 1999,
  yearsOfExperience,
  experience: `plus de 25 ans`,
  showroom: {
    description: 'Showroom sur rendez-vous : espace confidentiel avec plus de 500 échantillons',
    appointment: true,
  },
  zones: ['La Rochelle', "L'Île de Ré", "L'Île d'Oléron", 'Rochefort', 'Saintes', 'Royan', 'Charente-Maritime'],
  brands: ['EGE', 'Gerflor', 'objectflor', 'Bostik', 'Romus'],
  social: {
    instagram: 'https://www.instagram.com/cb.sols/',
    linkedin: 'https://www.linkedin.com/company/cb-sols/',
  },
  siret: '492 385 091 00029',
  director: 'Valentin Prévoteau',
  schema: {
    type: 'HomeAndConstructionBusiness',
    priceRange: '€€',
  },
}
