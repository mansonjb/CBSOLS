import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Architectes & Prescripteurs — CB Sols, Partenaire Revêtement de Sol',
  description: 'CB Sols accompagne architectes, décorateurs et maîtres d\'œuvre en Charente-Maritime. Fiches techniques, nuanciers, suivi de chantier dédié. Devis prescripteur sous 24h.',
  alternates: { canonical: 'https://cbsols.fr/architectes' },
}

const atouts = [
  {
    num: '01',
    title: 'Fiches techniques complètes',
    desc: 'Classements feu, acoustique, résistance chimique, formats de pose — tous les documents nécessaires à vos DOE et CCTP disponibles sur demande.',
  },
  {
    num: '02',
    title: 'Showroom sur rendez-vous prescripteur',
    desc: 'Visite privée du showroom à Villedoux. 500+ échantillons EGE, Balsan, Gerflor, Tarkett à emporter. Conseil technique de Valentin Prévoteau directement.',
  },
  {
    num: '03',
    title: 'Devis sous 24h (vs 48h standard)',
    desc: 'Les dossiers architectes sont traités en priorité. Envoyez vos plans DXF/PDF et vos spécifications — retour chiffré le lendemain.',
  },
  {
    num: '04',
    title: 'Intervention sans interruption d\'activité',
    desc: 'CB Sols organise les chantiers en rotation ou de nuit pour respecter le planning de votre maître d\'ouvrage. Zéro retard de livraison de notre fait.',
  },
  {
    num: '05',
    title: 'Suivi de chantier dédié',
    desc: 'Un interlocuteur unique du devis à la réception. Photos d\'avancement, compte rendu de pose, réserves levées dans les délais contractuels.',
  },
  {
    num: '06',
    title: 'Garantie décennale + certificats',
    desc: 'Attestation décennale à jour, assurance RC pro, certificats de conformité des produits — dossier complet pour votre DOE à la livraison.',
  },
]

const process = [
  { step: 'Brief', desc: 'Envoyez vos plans, votre programme et vos exigences techniques. CB Sols analyse la faisabilité et vous rappelle sous 4h.' },
  { step: 'Proposition', desc: 'Sélection de produits adaptés à vos spécifications (classements, esthétique, budget maître d\'ouvrage) avec alternatives.' },
  { step: 'Devis CCTP', desc: 'Devis détaillé par poste, compatible avec votre CCTP, incluant fiches techniques et références normatives.' },
  { step: 'Chantier', desc: 'Pose par l\'équipe CB Sols — pas de sous-traitance. Planning respect, photos d\'avancement si souhaité.' },
  { step: 'DOE', desc: 'Remise du dossier des ouvrages exécutés complet : produits posés, fiches techniques, attestations, garanties.' },
]

const secteurs = [
  { label: 'Hôtellerie & tourisme', desc: 'Îles de Ré et Oléron, La Rochelle, Royan — hôtels 2 à 5 étoiles, résidences, campings' },
  { label: 'Bureaux & tertiaire', desc: 'Open spaces, salles de réunion, accueil — dalles acoustiques, LVT, moquette contrat' },
  { label: 'EHPAD & santé', desc: 'Moquettes bactériostatiques, PVC homogènes certifiés, accessibilité PMR' },
  { label: 'Restauration & CHR', desc: 'Cuisines pro R11 soudées, salles acoustiques, espaces mixtes' },
  { label: 'Collectivités & ERP', desc: 'Appels d\'offres, classements feu, accessibilité — dossiers conformes' },
]

export default function ArchitectesPage() {
  return (
    <div style={{ paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 30%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Prescripteurs</span>
          </div>
          <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(196,113,74,0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
            Architectes · Décorateurs · Maîtres d'œuvre
          </span>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            CB Sols,{' '}
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>votre partenaire sol.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Vous prescrivez les matériaux, CB Sols les pose. Devis sous 24h, fiches techniques complètes, chantiers menés sans interruption d'activité. Un interlocuteur technique unique de votre brief jusqu'au DOE.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
              Contacter CB Sols
            </Link>
            <Link href="/showroom" style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px' }}>
              Visiter le showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce que CB Sols apporte aux prescripteurs</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Un partenaire <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>qui simplifie votre travail</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {atouts.map((a) => (
              <div key={a.num} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>{a.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>{a.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Process prescripteur</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Du brief au DOE
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#fff' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.step}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Secteurs d'intervention</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {secteurs.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.375rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--border-strong)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--muted)' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact direct */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Contact prescripteur</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Parlons de votre projet
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--dark-2)' }}>Valentin Prévoteau</strong> — {company.phone}
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
            Réponse sous 4h en semaine. Envoyez plans et spécifications à{' '}
            <a href={`mailto:${company.email}`} style={{ color: 'var(--terra)', textDecoration: 'none' }}>{company.email}</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
              Envoyer un brief
            </Link>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
