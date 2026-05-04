import Link from 'next/link'
import { chantiers, getClientById, CHANTIER_STATUS_LABEL, type ChantierStatut } from '@/data/crm-fixtures'

const eur = (n: number) => n.toLocaleString('fr-FR') + ' €'

const COLUMNS: { key: ChantierStatut; label: string }[] = [
  { key: 'devis_en_cours', label: 'Devis en cours' },
  { key: 'devis_envoye', label: 'Devis envoyé' },
  { key: 'planifie', label: 'Planifié' },
  { key: 'en_cours', label: 'En cours' },
  { key: 'termine', label: 'Terminé' },
  { key: 'sav', label: 'SAV' },
]

export default function ChantiersBoardPage() {
  const totalCAEnCours = chantiers
    .filter((c) => c.statut === 'en_cours' || c.statut === 'planifie')
    .reduce((s, c) => s + c.montant_ht, 0)

  const totalCAEnAttente = chantiers
    .filter((c) => c.statut === 'devis_en_cours' || c.statut === 'devis_envoye')
    .reduce((s, c) => s + c.montant_ht, 0)

  return (
    <div style={{ padding: '2.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Chantiers</div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em' }}>
          Pipeline de production
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          {chantiers.length} chantiers · CA actif : <strong style={{ color: 'var(--dark)' }}>{eur(totalCAEnCours)} HT</strong> · En attente devis : <strong style={{ color: 'var(--dark)' }}>{eur(totalCAEnAttente)} HT</strong>
        </p>
      </div>

      {/* Kanban board */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${COLUMNS.length}, minmax(240px, 1fr))`, gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {COLUMNS.map((col) => {
          const items = chantiers.filter((c) => c.statut === col.key)
          const colCA = items.reduce((s, c) => s + c.montant_ht, 0)
          const meta = CHANTIER_STATUS_LABEL[col.key]
          return (
            <div key={col.key} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '0.4rem 0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: meta.color }} />
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{col.label}</span>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>· {items.length}</span>
                </div>
              </div>
              {items.length === 0 ? (
                <div style={{ padding: '1.5rem 0.6rem', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic', border: '1px dashed var(--border)', borderRadius: '8px' }}>
                  Vide
                </div>
              ) : (
                items.map((ch) => {
                  const client = getClientById(ch.client_id)
                  return (
                    <Link key={ch.id} href={`/admin/chantiers/${ch.id}`} style={{ textDecoration: 'none' }}>
                      <article style={{ padding: '1rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', borderLeft: `3px solid ${meta.color}`, transition: 'transform 0.15s, box-shadow 0.15s' }} className="kanban-card">
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                          {ch.titre}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                          {client?.nom ?? ','} · {ch.ville}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border)' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{ch.surface_m2} m²</span>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)' }}>{eur(ch.montant_ht)}</span>
                        </div>
                      </article>
                    </Link>
                  )
                })
              )}
              {items.length > 0 && colCA > 0 && (
                <div style={{ padding: '0.5rem 0.6rem', fontSize: '0.68rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', textAlign: 'right', fontWeight: 600 }}>
                  ∑ {eur(colCA)} HT
                </div>
              )}
            </div>
          )
        })}
      </div>

      <style>{`.kanban-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.06); }`}</style>
    </div>
  )
}
