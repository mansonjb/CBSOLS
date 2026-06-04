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
  // Migration progressive : ajoute la colonne archived sur les bases déjà
  // créées avant l'introduction de l'archivage (les demandes test ne doivent
  // pas polluer les stats).
  await q`ALTER TABLE leads ADD COLUMN IF NOT EXISTS archived BOOLEAN NOT NULL DEFAULT FALSE;`

  // Index pour les requêtes de listing par date / statut / archivage
  await q`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);`
  await q`CREATE INDEX IF NOT EXISTS leads_statut_idx ON leads (statut);`
  await q`CREATE INDEX IF NOT EXISTS leads_archived_idx ON leads (archived);`

  // ── Table contacts (regroupe les infos pérennes d'une personne, un contact
  //    peut avoir plusieurs leads dans le temps) ──
  await q`
    CREATE TABLE IF NOT EXISTS contacts (
      id            TEXT PRIMARY KEY,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      nom           TEXT NOT NULL,
      telephone     TEXT NOT NULL,
      email         TEXT,
      ville         TEXT,
      segment       TEXT,
      notes         JSONB NOT NULL DEFAULT '[]'::jsonb,
      tags          JSONB NOT NULL DEFAULT '[]'::jsonb
    );
  `
  await q`CREATE INDEX IF NOT EXISTS contacts_nom_idx ON contacts (LOWER(nom));`
  await q`CREATE INDEX IF NOT EXISTS contacts_telephone_idx ON contacts (telephone);`

  await q`ALTER TABLE leads ADD COLUMN IF NOT EXISTS contact_id TEXT REFERENCES contacts(id) ON DELETE SET NULL;`
  await q`CREATE INDEX IF NOT EXISTS leads_contact_id_idx ON leads (contact_id);`

  _migrated = true
}

/**
 * Backfill : associe un contact à chaque lead orphelin. Ne tourne qu'une fois
 * grâce au flag _backfilled (mémoire process). Idempotent : un second appel
 * ne recrée pas de doublon car on cherche d'abord par téléphone exact.
 */
let _backfilled = false
export async function backfillContacts() {
  if (_backfilled) return
  await ensureSchema()
  const q = sql()
  const orphans = (await q`
    SELECT id, nom, telephone, email, ville, segment
    FROM leads
    WHERE contact_id IS NULL
  `) as unknown as Array<{
    id: string
    nom: string
    telephone: string
    email: string | null
    ville: string | null
    segment: string | null
  }>
  for (const ld of orphans) {
    const existing = (await q`
      SELECT id FROM contacts WHERE telephone = ${ld.telephone} LIMIT 1
    `) as unknown as Array<{ id: string }>
    let contactId: string
    if (existing.length > 0) {
      contactId = existing[0].id
    } else {
      contactId = `ct_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`
      await q`
        INSERT INTO contacts (id, nom, telephone, email, ville, segment)
        VALUES (${contactId}, ${ld.nom}, ${ld.telephone}, ${ld.email}, ${ld.ville}, ${ld.segment})
      `
    }
    await q`UPDATE leads SET contact_id = ${contactId} WHERE id = ${ld.id}`
  }
  _backfilled = true
}

/**
 * Trouve un contact existant ou en crée un. Utilisé à chaque soumission de
 * formulaire pour lier le nouveau lead à un contact pérenne. Match : tel exact,
 * sinon email exact, sinon (nom + ville) insensible casse.
 */
export async function findOrCreateContact(params: {
  nom: string
  telephone: string
  email: string | null
  ville: string | null
  segment: string | null
}): Promise<string> {
  await ensureSchema()
  const q = sql()
  const { nom, telephone, email, ville, segment } = params

  // 1. Match par téléphone
  const byPhone = (await q`SELECT id FROM contacts WHERE telephone = ${telephone} LIMIT 1`) as unknown as Array<{ id: string }>
  if (byPhone.length > 0) return byPhone[0].id

  // 2. Match par email
  if (email) {
    const byEmail = (await q`SELECT id FROM contacts WHERE email = ${email} LIMIT 1`) as unknown as Array<{ id: string }>
    if (byEmail.length > 0) return byEmail[0].id
  }

  // 3. Match par nom + ville (insensible casse)
  if (ville) {
    const byNomVille = (await q`
      SELECT id FROM contacts
      WHERE LOWER(nom) = LOWER(${nom}) AND LOWER(ville) = LOWER(${ville})
      LIMIT 1
    `) as unknown as Array<{ id: string }>
    if (byNomVille.length > 0) return byNomVille[0].id
  }

  // 4. Création
  const contactId = `ct_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`
  await q`
    INSERT INTO contacts (id, nom, telephone, email, ville, segment)
    VALUES (${contactId}, ${nom}, ${telephone}, ${email}, ${ville}, ${segment})
  `
  return contactId
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
  archived: boolean
  contact_id: string | null
}

export type ContactRow = {
  id: string
  created_at: string
  updated_at: string
  nom: string
  telephone: string
  email: string | null
  ville: string | null
  segment: string | null
  notes: { date: string; content: string; auteur: string }[]
  tags: string[]
}
