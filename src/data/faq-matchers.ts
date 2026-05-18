import { faqs, type Faq } from './faqs'

// Mappe un slug de service vers une liste ordonnée de catégories de FAQ pertinentes
const serviceFaqCategories: Record<string, string[]> = {
  'pose-moquette': ['Moquette', 'Technique de Pose', 'Devis & Process'],
  'sol-pvc-lames-dalles': ['Sol PVC', 'Technique de Pose', 'Devis & Process'],
  'sol-pvc-les': ['Sol PVC', 'Technique de Pose', 'Devis & Process'],
  'tapis-sur-mesure': ['Moquette', 'Devis & Process'],
  'tapis-de-proprete': ['Moquette', 'Devis & Process'],
  'nettoyage-moquette': ['Moquette', 'Devis & Process'],
  'revetement-sol': ['Moquette', 'Sol PVC', 'Devis & Process'],
  'salle-cinema': ['Moquette', 'Technique de Pose'],
  'coin-lecture': ['Moquette', 'Technique de Pose'],
}

// Mappe un slug de secteur vers une liste ordonnée de catégories de FAQ pertinentes
const sectorFaqCategories: Record<string, string[]> = {
  hotellerie: ['Moquette', 'Sol PVC', 'Devis & Process'],
  restauration: ['Sol PVC', 'Moquette', 'Devis & Process'],
  'bureaux-entreprises': ['Moquette', 'Sol PVC', 'Devis & Process'],
  collectivites: ['Sol PVC', 'Moquette', 'Devis & Process'],
  commerces: ['Sol PVC', 'Moquette', 'Devis & Process'],
  'campings-tourisme': ['Sol PVC', 'Moquette', 'Devis & Process'],
  'golf-sport': ['Moquette', 'Sol PVC', 'Devis & Process'],
}

function pickByCategories(cats: string[], limit: number): Faq[] {
  const result: Faq[] = []
  const seen = new Set<string>()
  for (const cat of cats) {
    for (const f of faqs) {
      if (f.category === cat && !seen.has(f.slug)) {
        result.push(f)
        seen.add(f.slug)
        if (result.length >= limit) return result
      }
    }
  }
  // Toujours inclure le devis si présent et pas encore dedans
  const devis = faqs.find((f) => f.slug === 'devis-revetement-sol-gratuit')
  if (devis && !seen.has(devis.slug) && result.length < limit) {
    result.push(devis)
  }
  return result.slice(0, limit)
}

export function getFaqsForService(slug: string, limit = 4): Faq[] {
  const cats = serviceFaqCategories[slug] ?? ['Moquette', 'Sol PVC', 'Devis & Process']
  return pickByCategories(cats, limit)
}

export function getFaqsForSector(slug: string, limit = 4): Faq[] {
  const cats = sectorFaqCategories[slug] ?? ['Moquette', 'Sol PVC', 'Devis & Process']
  return pickByCategories(cats, limit)
}
