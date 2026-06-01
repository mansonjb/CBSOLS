'use server'

import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createSessionToken, timingSafeEqual } from '@/lib/admin-session'

const ADMIN_COOKIE = 'cbsols-admin-session'
const COOKIE_MAX_AGE_S = 60 * 60 * 8 // 8h

// ── Rate-limit du login : 5 tentatives / IP / 15 min ─────────────
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000
const loginAttempts = new Map<string, { count: number; until: number }>()

function getClientIp(h: Headers): string {
  // Vercel/proxy : x-forwarded-for est une liste "ip1, ip2, ip3" — le client est en tête
  const xff = h.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return h.get('x-real-ip') || 'unknown'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  // Cleanup occasionnel des entrées expirées
  if (loginAttempts.size > 500) {
    for (const [k, v] of loginAttempts) {
      if (v.until < now) loginAttempts.delete(k)
    }
  }
  const entry = loginAttempts.get(ip)
  if (!entry || entry.until < now) {
    loginAttempts.set(ip, { count: 1, until: now + WINDOW_MS })
    return true
  }
  if (entry.count >= MAX_ATTEMPTS) return false
  entry.count++
  return true
}

function resetRateLimit(ip: string) {
  loginAttempts.delete(ip)
}

export interface LoginState {
  status: 'idle' | 'error'
  message: string
}

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const adminPassword = process.env.ADMIN_PASSWORD
  const sessionSecret = process.env.ADMIN_SESSION_SECRET

  // Configuration manquante côté serveur : on bloque proprement
  if (!adminPassword || !sessionSecret) {
    console.error('ADMIN_PASSWORD ou ADMIN_SESSION_SECRET manquant dans les variables d\'environnement')
    return { status: 'error', message: 'Authentification indisponible. Contactez l\'administrateur.' }
  }
  if (sessionSecret.length < 32) {
    console.error('ADMIN_SESSION_SECRET doit faire au moins 32 caractères')
    return { status: 'error', message: 'Authentification indisponible. Contactez l\'administrateur.' }
  }

  const h = await headers()
  const ip = getClientIp(h)

  if (!checkRateLimit(ip)) {
    return { status: 'error', message: 'Trop de tentatives. Réessayez dans quelques minutes.' }
  }

  const password = formData.get('password')?.toString() ?? ''
  const next = formData.get('next')?.toString() || '/admin'
  // sanitize la cible : empêche un open-redirect ailleurs que sur /admin
  const safeNext = next.startsWith('/admin') ? next : '/admin'

  if (!timingSafeEqual(password, adminPassword)) {
    return { status: 'error', message: 'Mot de passe incorrect.' }
  }

  resetRateLimit(ip)

  const token = await createSessionToken(sessionSecret, COOKIE_MAX_AGE_S * 1000)
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE_S,
  })

  redirect(safeNext)
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE)
  redirect('/admin/login')
}
