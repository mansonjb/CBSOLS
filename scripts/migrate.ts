/**
 * Migration runner CLI.
 *
 * Usage : `pnpm db:migrate` (ou `npx tsx scripts/migrate.ts`).
 *
 * Re-utilise `ensureSchema` et `backfillContacts` de `src/lib/db.ts`.
 * Le marker persistant `_schema_meta` evite de rejouer les CREATE/ALTER
 * une fois la base initialisee.
 *
 * Necessite DATABASE_URL dans l'environnement.
 */
import { ensureSchema, backfillContacts } from '../src/lib/db'

async function main() {
  if (!process.env.DATABASE_URL && !process.env.POSTGRES_URL) {
    console.error('DATABASE_URL (ou POSTGRES_URL) doit etre defini.')
    process.exit(1)
  }
  console.log('Running ensureSchema...')
  await ensureSchema()
  console.log('Running backfillContacts...')
  await backfillContacts()
  console.log('Migrations OK.')
}

main().then(
  () => process.exit(0),
  (err) => {
    console.error('Migration failed:', err)
    process.exit(1)
  },
)
