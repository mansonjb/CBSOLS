/**
 * Admin session tokens : HMAC-SHA256 signés via Web Crypto.
 *
 * Compatible Node runtime (Server Actions) ET Edge runtime (middleware).
 * Format du token : `<payload-base64url>.<signature-base64url>`
 * où payload = JSON({ v, sub, iat, exp, nonce })
 */

const TOKEN_VERSION = 'v2'

function b64urlEncode(input: string | Uint8Array): string {
  const bytes = typeof input === 'string' ? new TextEncoder().encode(input) : input
  let str = ''
  for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i])
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

function b64urlDecode(b64: string): Uint8Array {
  const pad = (4 - (b64.length % 4)) % 4
  const padded = (b64.replace(/-/g, '+').replace(/_/g, '/')) + '='.repeat(pad)
  const str = atob(padded)
  const bytes = new Uint8Array(str.length)
  for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i)
  return bytes
}

async function getKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

export async function createSessionToken(secret: string, maxAgeMs: number): Promise<string> {
  const now = Date.now()
  const payload = {
    v: TOKEN_VERSION,
    sub: 'admin',
    iat: now,
    exp: now + maxAgeMs,
    // nonce empêche deux tokens consécutifs d'être identiques même à la même ms
    nonce: crypto.randomUUID(),
  }
  const payloadB64 = b64urlEncode(JSON.stringify(payload))
  const key = await getKey(secret)
  const sigBuf = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payloadB64))
  const sigB64 = b64urlEncode(new Uint8Array(sigBuf))
  return `${payloadB64}.${sigB64}`
}

export async function verifySessionToken(token: string | undefined, secret: string): Promise<boolean> {
  if (!token || typeof token !== 'string') return false
  const parts = token.split('.')
  if (parts.length !== 2) return false
  const [payloadB64, sigB64] = parts

  try {
    const key = await getKey(secret)
    // Force le type vers ArrayBuffer (non-shared) pour satisfaire BufferSource
    const sigBytes = b64urlDecode(sigB64)
    const sigBuf = sigBytes.buffer.slice(sigBytes.byteOffset, sigBytes.byteOffset + sigBytes.byteLength) as ArrayBuffer
    const ok = await crypto.subtle.verify(
      'HMAC',
      key,
      sigBuf,
      new TextEncoder().encode(payloadB64),
    )
    if (!ok) return false

    const payload = JSON.parse(new TextDecoder().decode(b64urlDecode(payloadB64)))
    if (payload.v !== TOKEN_VERSION) return false
    if (payload.sub !== 'admin') return false
    if (typeof payload.exp !== 'number') return false
    if (payload.exp < Date.now()) return false
    return true
  } catch {
    return false
  }
}

/**
 * Comparaison de chaînes en temps constant (anti timing attack).
 * Travaille en bytes UTF-8 pour gérer correctement les caractères non-ASCII.
 */
export function timingSafeEqual(a: string, b: string): boolean {
  const aBytes = new TextEncoder().encode(a)
  const bBytes = new TextEncoder().encode(b)
  if (aBytes.length !== bBytes.length) {
    // toujours faire un travail constant pour ne pas leaker la longueur
    let dummy = 0
    for (let i = 0; i < aBytes.length; i++) dummy |= aBytes[i] ^ aBytes[i]
    return false || dummy === 1
  }
  let result = 0
  for (let i = 0; i < aBytes.length; i++) {
    result |= aBytes[i] ^ bBytes[i]
  }
  return result === 0
}
