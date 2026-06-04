'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { sql, ensureSchema, geocodeAndUpdateContact } from '@/lib/db'

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
 * Édite les champs principaux d'un lead. Whitelist stricte des colonnes pour
 * éviter toute injection via formData. `nom` et `telephone` ne peuvent pas
 * être nullifiés (NOT NULL en DB), les autres champs oui.
 * Si le lead est lié à un contact, on synchronise nom/tel/email/ville.
 */
export async function updateLead(formData: FormData): Promise<void> {
  const id = formData.get('id')?.toString().trim() ?? ''
  if (!id || !id.startsWith('ld_')) return

  const nom = formData.get('nom')?.toString().trim() || null
  const telephone = formData.get('telephone')?.toString().trim() || null
  const emailRaw = formData.get('email')?.toString().trim() ?? ''
  const email = emailRaw.length > 0 ? emailRaw : null
  const villeRaw = formData.get('ville')?.toString().trim() ?? ''
  const ville = villeRaw.length > 0 ? villeRaw : null
  const typeProjetRaw = formData.get('type_projet')?.toString().trim() ?? ''
  const type_projet = typeProjetRaw.length > 0 ? typeProjetRaw : null
  const surfaceRaw = formData.get('surface')?.toString().trim() ?? ''
  const surface = surfaceRaw.length > 0 ? surfaceRaw : null
  const messageRaw = formData.get('message')?.toString().trim() ?? ''
  const message = messageRaw.length > 0 ? messageRaw : null
  const prochaineActionRaw = formData.get('prochaine_action')?.toString().trim() ?? ''
  const prochaine_action = prochaineActionRaw.length > 0 ? prochaineActionRaw : null

  await ensureSchema()
  const q = sql()
  await q`
    UPDATE leads SET
      nom = COALESCE(${nom}, nom),
      telephone = COALESCE(${telephone}, telephone),
      email = ${email},
      ville = ${ville},
      type_projet = ${type_projet},
      surface = ${surface},
      message = ${message},
      prochaine_action = ${prochaine_action},
      updated_at = NOW()
    WHERE id = ${id}
  `

  // Sync contact lié (si le lead a un contact_id)
  const rows = (await q`SELECT contact_id FROM leads WHERE id = ${id} LIMIT 1`) as unknown as Array<{ contact_id: string | null }>
  const contactId = rows[0]?.contact_id ?? null
  if (contactId) {
    const prev = (await q`SELECT ville FROM contacts WHERE id = ${contactId} LIMIT 1`) as unknown as Array<{ ville: string | null }>
    const prevVille = prev[0]?.ville ?? null
    await q`
      UPDATE contacts SET
        nom = COALESCE(${nom}, nom),
        telephone = COALESCE(${telephone}, telephone),
        email = COALESCE(${email}, email),
        ville = COALESCE(${ville}, ville),
        updated_at = NOW()
      WHERE id = ${contactId}
    `
    if (ville && (prevVille || '').trim().toLowerCase() !== ville.trim().toLowerCase()) {
      await q`UPDATE contacts SET lat = NULL, lng = NULL WHERE id = ${contactId}`
      geocodeAndUpdateContact(contactId, ville).catch((e) => console.error('geocode hook error:', e))
    }
    revalidatePath(`/admin/contacts/${contactId}`)
  }

  revalidatePath('/admin')
  revalidatePath('/admin/leads')
  revalidatePath(`/admin/leads/${id}`)

  // Sortie du mode édition : retour à la vue lecture de la fiche
  redirect(`/admin/leads/${id}`)
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
