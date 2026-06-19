/**
 * Liste blanche des créneaux de rappel proposés au prospect.
 * Module neutre (ni 'use server' ni 'use client') pour être importable
 * depuis la server action ET le composant client sans contrainte.
 */
export const CRENEAUX = [
  'Ce matin',
  'Cet après-midi',
  'Demain matin',
  'Demain après-midi',
  'Dès que possible',
] as const

export type Creneau = (typeof CRENEAUX)[number]
