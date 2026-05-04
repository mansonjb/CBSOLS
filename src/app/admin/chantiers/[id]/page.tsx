import { notFound } from 'next/navigation'
import Link from 'next/link'
import { chantiers, getChantierById, getClientById, CHANTIER_STATUS_LABEL } from '@/data/crm-fixtures'

const eur = (n: number) => n.toLocaleString('fr-FR') + ' € HT'
const dt = (iso?: string) => (iso ? new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : ',')

export function generateStaticParams() {
  return chantiers.map((c) => ({ id: c.id }))
}

export default async function ChantierDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const ch = getChantierById(id)
  if (!ch) notFound()

  const client = getClientById(ch.client_id)
  const status = CHANTIER_STATUS_LABEL[ch.statut]
  const margePct = ch.marge_ht && ch.montant_ht > 0 ? Math.round((ch.marge_ht / ch.montant_ht) * 100) : null

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1100px' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
        <Link href="/admin/chantiers" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Chantiers</Link>
        <span>/</span>
        <span style={{ color: 'var(--terra)' }}>{ch.id}</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
            {ch.titre}
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
            {client ? <Link href={`/admin/clients/${client.id}`} style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>{client.nom}</Link> : ','} · {ch.ville}
          </p>
        </div>
        <span style={{ fontSize: '0.7rem', color: status.color, fontWeight: 700, padding: '0.5rem 1rem', border: `1.5px solid ${status.color}`, borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {status.label}
        </span>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <KPI label="Surface" value={`${ch.surface_m2} m²`} />
        <KPI label="Montant HT" value={eur(ch.montant_ht)} accent />
        {ch.marge_ht !== undefined && <KPI label="Marge HT" value={`${eur(ch.marge_ht)}${margePct ? ` (${margePct}%)` : ''}`} />}
        <KPI label="Prix au m²" value={ch.surface_m2 > 0 ? `${Math.round(ch.montant_ht / ch.surface_m2)} €/m²` : ','} />
      </div>

      {/* Detail card */}
      <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
          Détails du chantier
        </h2>
        <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', margin: 0 }}>
          <Field label="Type de prestation" value={ch.type_prestation} />
          {ch.marque_principale && <Field label="Marque / Produit" value={ch.marque_principale} />}
          <Field label="Date du devis" value={dt(ch.date_devis)} />
          {ch.date_debut && <Field label="Début prévu" value={dt(ch.date_debut)} />}
          {ch.date_fin && <Field label="Fin prévue / réelle" value={dt(ch.date_fin)} />}
          <Field label="Équipe" value={ch.equipe.length > 0 ? ch.equipe.join(', ') : 'À assigner'} />
        </dl>
      </section>

      {/* Notes */}
      {ch.notes && (
        <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
          <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>
            Notes de chantier
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--dark-2)', margin: 0, lineHeight: 1.75 }}>
            {ch.notes}
          </p>
        </section>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        <button disabled style={{ padding: '0.65rem 1.4rem', backgroundColor: 'var(--terra)', color: '#fff', border: 'none', borderRadius: '999px', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, cursor: 'not-allowed', opacity: 0.85, fontFamily: 'inherit' }}>
          Mettre à jour le statut
        </button>
        <button disabled style={{ padding: '0.6rem 1.4rem', border: '1.5px solid var(--border-strong)', backgroundColor: 'transparent', color: 'var(--dark-2)', borderRadius: '999px', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, cursor: 'not-allowed', opacity: 0.85, fontFamily: 'inherit' }}>
          Ajouter une photo
        </button>
        <button disabled style={{ padding: '0.6rem 1.4rem', border: '1.5px solid var(--border-strong)', backgroundColor: 'transparent', color: 'var(--dark-2)', borderRadius: '999px', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, cursor: 'not-allowed', opacity: 0.85, fontFamily: 'inherit' }}>
          Générer le devis PDF
        </button>
      </div>
      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.75rem', fontStyle: 'italic' }}>
        Mode prototype : actions en lecture seule pour l&apos;instant.
      </p>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: '0.88rem', color: 'var(--dark)', lineHeight: 1.5 }}>{value}</div>
    </div>
  )
}

function KPI({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', borderLeft: accent ? '3px solid var(--terra)' : '1px solid var(--border)' }}>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 800, color: accent ? 'var(--terra)' : 'var(--dark)', letterSpacing: '-0.01em' }}>{value}</div>
    </div>
  )
}
