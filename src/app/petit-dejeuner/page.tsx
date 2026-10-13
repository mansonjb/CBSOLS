import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { RsvpForm } from './RsvpForm'

export const metadata: Metadata = {
  title: 'Matières & Projets · Petit-déjeuner CB SOLS × KRETZ',
  description: "Inscription au petit-déjeuner Matières & Projets organisé par CB SOLS et KRETZ, le vendredi 23 octobre 2026 à la Maison Saint-Nicolas, La Rochelle.",
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://cbsols.fr/petit-dejeuner' },
}

const infos = [
  { k: 'Quand', v: 'Vendredi 23 octobre 2026', sub: 'de 8h à 12h, passez quand vous voulez' },
  { k: 'Où', v: 'Maison Saint-Nicolas', sub: 'au sein de l’Hôtel Saint-Nicolas · 13 rue Sardinerie, La Rochelle' },
  { k: 'Avec', v: 'CB SOLS × KRETZ', sub: 'Valentin Prévoteau & William Page' },
]

export default function PetitDejeunerPage() {
  return (
    <div style={{ paddingTop: '72px', backgroundColor: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ padding: '4.5rem 2rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em' }}>CB <span style={{ fontWeight: 400 }}>Sols</span></span>
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>×</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--dark)', letterSpacing: '0.18em' }}>KRETZ</span>
          </div>
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 600 }}>Invitation · Petit-déjeuner</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 5vw, 3.8rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
            Matières <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>&amp; Projets</em>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0, maxWidth: '820px' }}>
            Un petit-déjeuner convivial et gourmand pour se rencontrer, échanger et imaginer de nouveaux projets. CB SOLS et KRETZ réunissent architectes, professionnels de l’immobilier, clients et partenaires du territoire. L’occasion aussi de découvrir une sélection de matières, sols, nouveautés et échantillons de marques.
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section style={{ padding: '3rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {infos.map((i) => (
            <div key={i.k}>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.6rem', fontWeight: 700 }}>{i.k}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>{i.v}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>{i.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em' }}>
            Je confirme <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>ma présence.</em>
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.25rem' }}>
            Merci de nous indiquer qui vient, pour organiser l’accueil. Confirmation souhaitée avant le <strong style={{ color: 'var(--dark)' }}>mardi 20 octobre</strong>.
          </p>
          <RsvpForm />
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginTop: '2rem' }}>
            Une question ? Écrivez-nous à <a href={`mailto:${company.email}`} style={{ color: 'var(--terra)', fontWeight: 600, textDecoration: 'none' }}>{company.email}</a> ou appelez le <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra)', fontWeight: 600, textDecoration: 'none' }}>{company.phone}</a>.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/" style={{ fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>← Retour au site CB Sols</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
