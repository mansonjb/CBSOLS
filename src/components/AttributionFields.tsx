'use client'

import type { AttributionData } from '@/lib/attribution'

/**
 * Champs cachés d'attribution injectés dans les formulaires. Les valeurs sont
 * lues depuis sessionStorage par le composant parent (via readAttribution) et
 * passées ici. `attr` peut être null tant que le client n'a pas hydraté : on
 * rend alors des valeurs vides pour ne pas casser le form.
 */
export function AttributionFields({ attr }: { attr: AttributionData | null }) {
  return (
    <>
      <input type="hidden" name="attr_referrer" value={attr?.referrer ?? ''} />
      <input type="hidden" name="attr_landing" value={attr?.landing ?? ''} />
      <input type="hidden" name="attr_utm_source" value={attr?.utm_source ?? ''} />
      <input type="hidden" name="attr_utm_medium" value={attr?.utm_medium ?? ''} />
      <input type="hidden" name="attr_utm_campaign" value={attr?.utm_campaign ?? ''} />
      <input type="hidden" name="attr_gclid" value={attr?.gclid ?? ''} />
    </>
  )
}
