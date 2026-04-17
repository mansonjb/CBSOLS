import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'À Propos — CB Sols, 25 ans de Revêtement de Sol en Charente-Maritime',
  description:
    "L'histoire de CB Sols, artisan du revêtement de sol à La Rochelle depuis 1999. Valentin Prévoteau et son équipe au service des particuliers et professionnels de Charente-Maritime.",
}

export default function AProposPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Notre histoire</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            25 ans au service<br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>de vos sols.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            CB Sols est né en 1999 d'une passion pour les beaux matériaux et le travail bien fait. En 25 ans, nous avons posé des sols dans des centaines d'espaces en Charente-Maritime — des chambres d'hôtel à l'amphithéâtre universitaire, des maisons de famille aux restaurants étoilés.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Valentin Prévoteau</div>
              <p style={{ fontSize: '1.1rem', color: 'var(--cream)', lineHeight: 1.8, marginBottom: '1.5rem', fontFamily: 'var(--font-playfair, Georgia, serif)', fontStyle: 'italic' }}>
                "Un sol, c'est la base de tout espace. Bien choisi, bien posé, il dure des décennies et transforme un lieu."
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Gérant de CB Sols depuis sa création, Valentin a commencé comme poseur avant de reprendre et développer l'entreprise. Il est aujourd'hui l'interlocuteur direct de tous nos clients — particuliers comme professionnels.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7 }}>
                Cette proximité avec le client, cette connaissance du terrain, c'est ce qui différencie CB Sols des grandes enseignes : quand vous appelez le {company.phone}, c'est lui qui décroche.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { year: '1999', label: 'Création de CB Sols', desc: "Lancement de l'activité revêtement de sol à Villedoux, Charente-Maritime" },
                  { year: '2005', label: 'Ouverture du showroom', desc: 'Un espace dédié à la sélection des matériaux, sur rendez-vous' },
                  { year: '2010', label: 'Développement B2B', desc: "Premiers contrats hôteliers et collectivités sur l'Île de Ré et l'agglo rochelaise" },
                  { year: '2020', label: 'Certification et partenariats', desc: 'Partenaire officiel EGE, Gerflor, Forbo et Tarkett' },
                  { year: "Aujourd'hui", label: '500+ chantiers réalisés', desc: 'La Rochelle, Île de Ré, Rochefort, Saintes et toute la Charente-Maritime' },
                ].map((item) => (
                  <div key={item.year} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '0.9rem', color: 'var(--terra)', fontWeight: 700 }}>{item.year}</div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--cream)', fontWeight: 500, marginBottom: '0.25rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '4rem 2rem 6rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Nos marques partenaires</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '4rem' }}>
            {company.brands.map((b) => (
              <span key={b} style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--cream)', letterSpacing: '0.08em' }}>{b}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Nous contacter
            </Link>
            <Link href="/showroom" style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Visiter le showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
