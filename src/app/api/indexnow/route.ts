import { NextResponse } from 'next/server'
import { pingIndexNow } from '@/lib/indexnow'

/**
 * Endpoint manuel pour pinger IndexNow.
 *
 * Sécurité : nécessite le header Authorization: Bearer <CRON_SECRET> (la même
 * variable que celle utilisée par le cron des leads).
 *
 * Usage :
 *   curl -X POST https://cbsols.fr/api/indexnow \
 *     -H "Authorization: Bearer <CRON_SECRET>" \
 *     -H "Content-Type: application/json" \
 *     -d '{"urls": ["https://cbsols.fr/sol-pvc-pharmacie"]}'
 *
 * Ou pour une URL unique en GET :
 *   curl "https://cbsols.fr/api/indexnow?url=https://cbsols.fr/sol-pvc-pharmacie&secret=<CRON_SECRET>"
 */

function checkAuth(req: Request): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false

  // 1) Header Authorization: Bearer <secret>
  const authHeader = req.headers.get('authorization') ?? ''
  if (authHeader === `Bearer ${secret}`) return true

  // 2) Query param ?secret=<secret> (pratique pour les tests rapides curl/browser)
  const url = new URL(req.url)
  const querySecret = url.searchParams.get('secret')
  if (querySecret === secret) return true

  return false
}

export async function POST(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
  }

  let body: { urls?: string[] }
  try {
    body = (await req.json()) as { urls?: string[] }
  } catch {
    return NextResponse.json({ ok: false, message: 'Body JSON invalide' }, { status: 400 })
  }

  const urls = body.urls
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ ok: false, message: 'Champ urls (array) requis' }, { status: 400 })
  }

  const result = await pingIndexNow(urls)
  return NextResponse.json(result, { status: result.ok ? 200 : 502 })
}

export async function GET(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
  }

  const url = new URL(req.url).searchParams.get('url')
  if (!url) {
    return NextResponse.json({ ok: false, message: 'Param url requis' }, { status: 400 })
  }

  const result = await pingIndexNow(url)
  return NextResponse.json(result, { status: result.ok ? 200 : 502 })
}
