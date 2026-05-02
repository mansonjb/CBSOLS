import { NextResponse, type NextRequest } from 'next/server'

const ADMIN_COOKIE = 'cbsols-admin-session'
const ADMIN_TOKEN = 'cbsols-admin-ok-v1' // valeur attendue dans le cookie

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ne protège que /admin/* (sauf /admin/login lui-même)
  if (!pathname.startsWith('/admin')) return NextResponse.next()
  if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) return NextResponse.next()

  const session = request.cookies.get(ADMIN_COOKIE)
  if (session?.value !== ADMIN_TOKEN) {
    const loginUrl = new URL('/admin/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
