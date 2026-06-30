'use client'

import { useEffect } from 'react'
import { captureFirstTouch } from '@/lib/attribution'

/**
 * Composant invisible monté dans le layout. Au premier rendu côté client, il
 * fige le first-touch de la session (referrer, UTM, gclid, page d'atterrissage)
 * en sessionStorage, sans rien afficher.
 */
export function AttributionTracker() {
  useEffect(() => {
    captureFirstTouch()
  }, [])
  return null
}
