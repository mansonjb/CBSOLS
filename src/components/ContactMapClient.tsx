'use client'

import dynamic from 'next/dynamic'
import type { MapContact } from './ContactMap'

/**
 * Wrapper client autour de ContactMap pour faire un dynamic import avec
 * ssr: false. Dans Next 16, `ssr: false` n'est plus autorisé directement
 * dans un Server Component, on doit passer par un Client Component.
 *
 * Leaflet référence `window` au chargement du module, on doit donc
 * impérativement le charger uniquement côté client.
 */
const ContactMap = dynamic(() => import('./ContactMap'), { ssr: false })

export function ContactMapClient(props: { contacts: MapContact[] }) {
  return <ContactMap contacts={props.contacts} />
}
