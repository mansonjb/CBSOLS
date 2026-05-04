'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const ADMIN_PASSWORD = 'CBSOLSCRM' // proto only, en prod : env var hashée + bcrypt
const ADMIN_COOKIE = 'cbsols-admin-session'
const ADMIN_TOKEN = 'cbsols-admin-ok-v1'
const COOKIE_MAX_AGE = 60 * 60 * 8 // 8h

export interface LoginState {
  status: 'idle' | 'error'
  message: string
}

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get('password')?.toString() ?? ''
  const next = formData.get('next')?.toString() || '/admin'

  if (password !== ADMIN_PASSWORD) {
    return { status: 'error', message: 'Mot de passe incorrect.' }
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE, ADMIN_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  })

  redirect(next)
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE)
  redirect('/admin/login')
}
