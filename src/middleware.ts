import { NextResponse, type NextRequest } from 'next/server'
import { verifySessionToken } from '@/lib/admin-session'

const ADMIN_COOKIE = 'cbsols-admin-session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ne protège que /admin/* (sauf /admin/login lui-même)
  if (!pathname.startsWith('/admin')) return NextResponse.next()
  if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) return NextResponse.next()

  const secret = process.env.ADMIN_SESSION_SECRET
  const token = request.cookies.get(ADMIN_COOKIE)?.value

  // Pas de secret côté serveur → on bloque tout accès admin (état non configuré)
  if (!secret || secret.length < 32) {
    const loginUrl = new URL('/admin/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  const ok = await verifySessionToken(token, secret)
  if (!ok) {
    const loginUrl = new URL('/admin/login', request.url)
    // Sanitize next : seules les URL internes /admin sont acceptées
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
      loginUrl.searchParams.set('next', pathname)
    }
    const res = NextResponse.redirect(loginUrl)
    // Supprime le cookie invalide / expiré pour ne pas boucler
    if (token) res.cookies.delete(ADMIN_COOKIE)
    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
