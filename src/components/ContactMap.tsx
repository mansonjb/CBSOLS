'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

export type MapContact = {
  id: string
  nom: string
  ville: string | null
  lat: number
  lng: number
}

/**
 * Carte des chantiers / contacts geo-localises. Vanilla Leaflet (pas
 * react-leaflet pour compat React 19). SSR off via dynamic import depuis la
 * page server-component.
 */
export default function ContactMap({ contacts }: { contacts: MapContact[] }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (!ref.current) return
    let cancelled = false
    ;(async () => {
      const L = (await import('leaflet')).default
      if (cancelled || !ref.current) return

      // Fix icon assets via CDN (sinon Next bundler casse les paths)
      const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png'
      const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png'
      const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
      // @ts-expect-error _getIconUrl is private mais necessaire pour fix Webpack
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl })

      const map = L.map(ref.current).setView([46.1591, -1.1517], 9)
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 19,
      }).addTo(map)

      const bounds: [number, number][] = []
      for (const c of contacts) {
        const marker = L.marker([c.lat, c.lng]).addTo(map)
        const safeNom = String(c.nom).replace(/</g, '&lt;')
        const safeVille = c.ville ? String(c.ville).replace(/</g, '&lt;') : ''
        marker.bindPopup(
          `<div style="font-family: system-ui, sans-serif; font-size: 13px;">
            <strong>${safeNom}</strong><br/>
            ${safeVille ? safeVille + '<br/>' : ''}
            <a href="/admin/contacts/${c.id}" style="color:#2C5530; font-weight:600;">Voir la fiche</a>
          </div>`
        )
        bounds.push([c.lat, c.lng])
      }
      if (bounds.length > 1) {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 })
      } else if (bounds.length === 1) {
        map.setView(bounds[0], 11)
      }
    })()

    return () => {
      cancelled = true
      const m = mapRef.current as { remove?: () => void } | null
      if (m && typeof m.remove === 'function') m.remove()
      mapRef.current = null
    }
  }, [contacts])

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '70vh',
        minHeight: 480,
        borderRadius: '10px',
        border: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    />
  )
}
