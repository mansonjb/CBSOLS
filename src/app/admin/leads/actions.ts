'use server'

import { revalidatePath } from 'next/cache'
import { sql, ensureSchema } from '@/lib/db'

const ALLOWED_STATUTS = [
  'nouveau',
  'contacte',
  'devis_envoye',
  'relance',
  'converti',
  'perdu',
] as const
type Statut = (typeof ALLOWED_STATUTS)[number]

function isValidStatut(s: string): s is Statut {
  return (ALLOWED_STATUTS as readonly string[]).includes(s)
}

/**
 * Met à jour le statut d'un lead + bump derniere_interaction.
 * Sécurisé : le middleware /admin protège déjà l'action (cookie HMAC).
 */
export async function updateLeadStatus(formData: FormData): Promise<void> {
  const id = formData.get('id')?.toString().trim() ?? ''
  const statut = formData.get('statut')?.toString().trim() ?? ''

  if (!id || !id.startsWith('ld_')) {
    console.warn('updateLeadStatus: invalid id', id)
    return
  }
  if (!isValidStatut(statut)) {
    console.warn('updateLeadStatus: invalid statut', statut)
    return
  }

  await ensureSchema()
  const q = sql()
  await q`
    UPDATE leads
    SET statut = ${statut},
        derniere_interaction = NOW(),
        updated_at = NOW()
    WHERE id = ${id}
  `
  revalidatePath('/admin')
  revalidatePath('/admin/leads')
  revalidatePath(`/admin/leads/${id}`)
}

/**
 * Archive un lead (test, doublon, spam). Les leads archivés :
 *  - n'apparaissent plus dans la liste par défaut (filtrable)
 *  - sont exclus de toutes les stats du dashboard
 *  - restent consultables individuellement (URL /admin/leads/[id] OK)
 *  - peuvent être désarchivés à tout moment
 */
export async function archiveLead(formData: FormData): Promise<void> {
  const id = formData.get('id')?.toString().trim() ?? ''
  if (!id || !id.startsWith('ld_')) return

  await ensureSchema()
  const q = sql()
  await q`UPDATE leads SET archived = TRUE, updated_at = NOW() WHERE id = ${id}`
  revalidatePath('/admin')
  revalidatePath('/admin/leads')
  revalidatePath(`/admin/leads/${id}`)
}

export async function unarchiveLead(formData: FormData): Promise<void> {
  const id = formData.get('id')?.toString().trim() ?? ''
  if (!id || !id.startsWith('ld_')) return

  await ensureSchema()
  const q = sql()
  await q`UPDATE leads SET archived = FALSE, updated_at = NOW() WHERE id = ${id}`
  revalidatePath('/admin')
  revalidatePath('/admin/leads')
  revalidatePath(`/admin/leads/${id}`)
}

/**
 * Ajoute une note à un lead (append au tableau JSONB `notes`).
 */
export async function addLeadNote(formData: FormData): Promise<void> {
  const id = formData.get('id')?.toString().trim() ?? ''
  const content = formData.get('content')?.toString().trim() ?? ''

  if (!id || !id.startsWith('ld_')) {
    console.warn('addLeadNote: invalid id', id)
    return
  }
  if (!content || content.length === 0) return
  if (content.length > 2000) {
    console.warn('addLeadNote: note too long')
    return
  }

  const note = {
    date: new Date().toISOString(),
    content,
    auteur: 'Valentin',
  }

  await ensureSchema()
  const q = sql()
  await q`
    UPDATE leads
    SET notes = COALESCE(notes, '[]'::jsonb) || ${JSON.stringify([note])}::jsonb,
        derniere_interaction = NOW(),
        updated_at = NOW()
    WHERE id = ${id}
  `
  revalidatePath(`/admin/leads/${id}`)
}
