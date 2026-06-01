import { neon } from '@neondatabase/serverless'

/**
 * Client Neon serverless — utilisé par les Server Actions et les Server
 * Components pour lire/écrire dans la DB Postgres CB Sols.
 *
 * La string de connexion est injectée automatiquement par l'intégration
 * Vercel ↔ Neon dans la variable DATABASE_URL.
 */
function getConnectionString(): string {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL
  if (!url) {
    throw new Error(
      'DATABASE_URL non défini. Vérifie que l\'intégration Neon est bien liée au projet Vercel.',
    )
  }
  return url
}

/**
 * Lazily-initialised SQL client (re-use de la connexion entre invocations
 * Lambda). Le module @neondatabase/serverless gère le pooling HTTP.
 */
let _sql: ReturnType<typeof neon> | null = null
export function sql() {
  if (!_sql) _sql = neon(getConnectionString())
  return _sql
}

/**
 * Migration idempotente : crée la table `leads` au premier appel si elle
 * n'existe pas. Appelée par les Server Actions avant insert/select.
 *
 * Schéma aligné sur l'interface Lead de src/data/crm-fixtures.ts.
 */
let _migrated = false
export async function ensureSchema() {
  if (_migrated) return
  const q = sql()

  await q`
    CREATE TABLE IF NOT EXISTS leads (
      id            TEXT PRIMARY KEY,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      source        TEXT NOT NULL,
      nom           TEXT NOT NULL,
      telephone     TEXT NOT NULL,
      email         TEXT,
      ville         TEXT,
      type_projet   TEXT,
      surface       TEXT,
      message       TEXT,
      statut        TEXT NOT NULL DEFAULT 'nouveau',
      derniere_interaction TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      prochaine_action TEXT,
      notes         JSONB NOT NULL DEFAULT '[]'::jsonb,
      segment       TEXT,
      ua            TEXT,
      referer       TEXT,
      ip_hash       TEXT
    );
  `
  // Index pour les requêtes de listing par date / statut
  await q`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);`
  await q`CREATE INDEX IF NOT EXISTS leads_statut_idx ON leads (statut);`

  _migrated = true
}

export type LeadRow = {
  id: string
  created_at: string
  updated_at: string
  source: string
  nom: string
  telephone: string
  email: string | null
  ville: string | null
  type_projet: string | null
  surface: string | null
  message: string | null
  statut: string
  derniere_interaction: string
  prochaine_action: string | null
  notes: { date: string; content: string; auteur: string }[]
  segment: string | null
  ua: string | null
  referer: string | null
  ip_hash: string | null
}
