/**
 * CRM data — proto admin views.
 *
 * Données réelles vidées pour des raisons de confidentialité (le repo est
 * public). Les tableaux exportés sont vides, les types et helpers restent
 * pour que les pages /admin/* compilent et affichent des états vides.
 *
 * Pour brancher de vraies données, alimentez ces exports depuis une base
 * de données (Postgres/Supabase) — l'interface CRM existante reste
 * compatible (un mock vide vs des entrées remplies).
 */

export type LeadStatus =
  | 'nouveau'
  | 'contacte'
  | 'devis_envoye'
  | 'relance'
  | 'converti'
  | 'perdu'

export type LeadSource =
  | 'site_web'
  | 'whatsapp'
  | 'telephone'
  | 'showroom'
  | 'recommandation'
  | 'architecte'

export interface Lead {
  id: string
  date: string
  source: LeadSource
  nom: string
  telephone: string
  email?: string
  ville: string
  type_projet: string
  surface_estimee?: string
  budget_estime?: string
  message?: string
  statut: LeadStatus
  derniere_interaction: string
  prochaine_action?: string
  notes: { date: string; content: string; auteur: string }[]
  segment: 'particulier' | 'hotel' | 'restaurant' | 'bureau' | 'collectivite' | 'architecte' | 'commerce' | 'camping'
}

export type ClientType = 'particulier' | 'pro'

export interface Client {
  id: string
  nom: string
  type: ClientType
  entreprise?: string
  segment: Lead['segment']
  contact_principal: string
  telephone: string
  email: string
  adresse: string
  ville: string
  date_premier_contact: string
  ca_total_ht: number
  nombre_projets: number
  derniere_intervention: string
  notes?: string
  tags: string[]
}

export type ProjetStatut =
  | 'devis_en_cours'
  | 'devis_envoye'
  | 'planifie'
  | 'en_cours'
  | 'termine'
  | 'sav'
  | 'annule'

export interface Projet {
  id: string
  client_id: string
  titre: string
  ville: string
  type_prestation: string
  surface_m2: number
  montant_ht: number
  statut: ProjetStatut
  date_devis: string
  date_debut?: string
  date_fin?: string
  equipe: string[]
  marque_principale?: string
  notes: string
  marge_ht?: number
}

// ── DATA VIDÉE (à brancher sur une vraie source en prod) ─────────
export const leads: Lead[] = []
export const clients: Client[] = []
export const projets: Projet[] = []

// ── Helpers (compatibles avec les listes vides) ──────────────────
export function getLeadById(id: string): Lead | undefined {
  return leads.find((l) => l.id === id)
}

export function getClientById(id: string): Client | undefined {
  return clients.find((c) => c.id === id)
}

export function getProjetById(id: string): Projet | undefined {
  return projets.find((p) => p.id === id)
}

export function getProjetsForClient(clientId: string): Projet[] {
  return projets.filter((p) => p.client_id === clientId)
}

export function computeKPIs() {
  const now = new Date()
  const startMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const startNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  const endNextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0)

  const ca_mois_en_cours = projets
    .filter((p) => p.date_fin && new Date(p.date_fin) >= startMonth && new Date(p.date_fin) < startNextMonth && p.statut === 'termine')
    .reduce((s, p) => s + p.montant_ht, 0)

  const ca_planifie_mois_prochain = projets
    .filter((p) => p.date_debut && new Date(p.date_debut) >= startNextMonth && new Date(p.date_debut) <= endNextMonth)
    .reduce((s, p) => s + p.montant_ht, 0)

  const leads_a_relancer = leads.filter((l) => {
    if (l.statut === 'converti' || l.statut === 'perdu') return false
    const days = (now.getTime() - new Date(l.derniere_interaction).getTime()) / (1000 * 60 * 60 * 24)
    return days >= 7
  }).length

  const leads_actifs = leads.filter((l) => l.statut !== 'converti' && l.statut !== 'perdu').length

  const total_leads_ce_mois = leads.filter((l) => new Date(l.date) >= startMonth).length
  const conversions_ce_mois = leads.filter(
    (l) => new Date(l.date) >= startMonth && (l.statut === 'converti' || l.statut === 'devis_envoye')
  ).length
  const taux_conversion = total_leads_ce_mois > 0 ? Math.round((conversions_ce_mois / total_leads_ce_mois) * 100) : 0

  const projets_actifs = projets.filter((p) => p.statut === 'en_cours' || p.statut === 'planifie').length

  const top_sources: Record<string, number> = {}
  for (const l of leads) {
    top_sources[l.source] = (top_sources[l.source] || 0) + 1
  }

  return {
    ca_mois_en_cours,
    ca_planifie_mois_prochain,
    leads_a_relancer,
    leads_actifs,
    taux_conversion,
    projets_actifs,
    total_clients: clients.length,
    top_sources,
  }
}

// ── Labels d'affichage (consommés par les vues admin) ────────────
export const LEAD_STATUS_LABEL: Record<LeadStatus, { label: string; color: string }> = {
  nouveau: { label: 'Nouveau', color: 'var(--terra)' },
  contacte: { label: 'Contacté', color: '#5C8CB5' },
  devis_envoye: { label: 'Devis envoyé', color: '#7A6FCC' },
  relance: { label: 'À relancer', color: '#D9802F' },
  converti: { label: 'Converti', color: '#5DA37C' },
  perdu: { label: 'Perdu', color: '#999' },
}

export const CHANTIER_STATUS_LABEL: Record<ProjetStatut, { label: string; color: string }> = {
  devis_en_cours: { label: 'Devis en cours', color: '#999' },
  devis_envoye: { label: 'Devis envoyé', color: '#7A6FCC' },
  planifie: { label: 'Planifié', color: '#5C8CB5' },
  en_cours: { label: 'En cours', color: 'var(--terra)' },
  termine: { label: 'Terminé', color: '#5DA37C' },
  sav: { label: 'SAV', color: '#D9802F' },
  annule: { label: 'Annulé', color: '#999' },
}

// Alias rétro-compatibilité (admin CRM utilise encore "chantier")
export const chantiers = projets
export type ChantierStatut = ProjetStatut
export const getChantierById = getProjetById

export const SOURCE_LABEL: Record<LeadSource, string> = {
  site_web: 'Site web',
  whatsapp: 'WhatsApp',
  telephone: 'Téléphone',
  showroom: 'Showroom',
  recommandation: 'Recommandation',
  architecte: 'Architecte',
}
