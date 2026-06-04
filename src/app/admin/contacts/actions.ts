'use server'

import { revalidatePath } from 'next/cache'
import { sql, ensureSchema } from '@/lib/db'

/**
 * Édite les champs identitaires d'un contact. Propage les changements vers
 * tous les leads liés (pour garder cohérence sur les pages /admin/leads).
 */
export async function updateContact(formData: FormData): Promise<void> {
  const id = formData.get('id')?.toString().trim() ?? ''
  if (!id || !id.startsWith('ct_')) return

  const nom = formData.get('nom')?.toString().trim() || null
  const telephone = formData.get('telephone')?.toString().trim() || null
  const emailRaw = formData.get('email')?.toString().trim() ?? ''
  const email = emailRaw.length > 0 ? emailRaw : null
  const villeRaw = formData.get('ville')?.toString().trim() ?? ''
  const ville = villeRaw.length > 0 ? villeRaw : null
  const segmentRaw = formData.get('segment')?.toString().trim() ?? ''
  const segment = segmentRaw.length > 0 ? segmentRaw : null

  await ensureSchema()
  const q = sql()
  await q`
    UPDATE contacts SET
      nom = COALESCE(${nom}, nom),
      telephone = COALESCE(${telephone}, telephone),
      email = ${email},
      ville = ${ville},
      segment = ${segment},
      updated_at = NOW()
    WHERE id = ${id}
  `
  // Propagation aux leads liés
  await q`
    UPDATE leads SET
      nom = COALESCE(${nom}, nom),
      telephone = COALESCE(${telephone}, telephone),
      email = COALESCE(${email}, email),
      ville = COALESCE(${ville}, ville),
      updated_at = NOW()
    WHERE contact_id = ${id}
  `

  revalidatePath('/admin/contacts')
  revalidatePath(`/admin/contacts/${id}`)
  revalidatePath('/admin/leads')
}

/**
 * Ajoute une note au contact (append au tableau JSONB `notes`).
 */
export async function addContactNote(formData: FormData): Promise<void> {
  const id = formData.get('id')?.toString().trim() ?? ''
  const content = formData.get('content')?.toString().trim() ?? ''

  if (!id || !id.startsWith('ct_')) return
  if (!content || content.length === 0) return
  if (content.length > 2000) return

  const note = {
    date: new Date().toISOString(),
    content,
    auteur: 'Valentin',
  }

  await ensureSchema()
  const q = sql()
  await q`
    UPDATE contacts
    SET notes = COALESCE(notes, '[]'::jsonb) || ${JSON.stringify([note])}::jsonb,
        updated_at = NOW()
    WHERE id = ${id}
  `
  revalidatePath(`/admin/contacts/${id}`)
}
