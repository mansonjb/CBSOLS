'use client'

import { deleteContact } from '../actions'

/**
 * Bouton de suppression d'une fiche contact. Confirmation native avant
 * d'appeler le Server Action `deleteContact`. Les leads liés ne sont pas
 * supprimés, leur `contact_id` repasse à NULL.
 */
export function DeleteContactButton({ id, nom }: { id: string; nom: string }) {
  return (
    <form
      action={deleteContact}
      onSubmit={(e) => {
        const ok = window.confirm(
          `Supprimer la fiche contact de "${nom}" ?\n\nLes demandes de devis liées (leads) restent en place, seule la fiche contact disparaît.\n\nCette action est irréversible.`,
        )
        if (!ok) e.preventDefault()
      }}
      style={{ display: 'inline-block' }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        style={{
          padding: '0.55rem 1.1rem',
          backgroundColor: 'transparent',
          color: '#b71c1c',
          border: '1px solid #b71c1c',
          borderRadius: '999px',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        Supprimer la fiche
      </button>
    </form>
  )
}
