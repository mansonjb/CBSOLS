import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'À Propos | Valentin Prévoteau, Artisan Poseur CB Sols depuis 1999',
  description:
    "Rencontrez Valentin Prévoteau, gérant et artisan poseur de CB Sols depuis 1999. Qualibat, assurance décennale, 500+ chantiers en Charente-Maritime. L'homme derrière chaque chantier.",
  alternates: { canonical: 'https://cbsols.fr/a-propos' },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Valentin Prévoteau',
  jobTitle: 'Artisan poseur de revêtements de sol',
  description: "Gérant de CB Sols depuis 1999, Valentin Prévoteau est spécialisé dans la pose de moquette professionnelle, sol PVC et tapis sur mesure en Charente-Maritime.",
  worksFor: {
    '@type': 'LocalBusiness',
    name: company.legalName,
    url: 'https://cbsols.fr',
    telephone: company.phoneClean,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressCountry: 'FR',
    },
  },
  knowsAbout: [
    'Moquette professionnelle',
    'Sol PVC hétérogène',
    'LVT (Luxury Vinyl Tile)',
    'Tapis sur mesure',
    'Pose de revêtement de sol en hôtel',
    'Revêtement de sol ERP',
    'Moquette acoustique',
    'Sol PVC cuisine professionnelle',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Qualification Qualibat 6111 : Revêtements de sol collés',
      recognizedBy: { '@type': 'Organization', name: 'Qualibat' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Assurance responsabilité décennale',
    },
  ],
}

export default function AProposPage() {
  const credentials = [
    { label: 'Qualibat 6111', desc: 'Revêtements de sol collés : qualification reconnue', icon: '✓' },
    { label: 'Décennale', desc: 'Assurance responsabilité décennale en cours de validité', icon: '✓' },
    { label: 'Partenaire EGE', desc: 'Poseur agréé EGE : moquette contract premium', icon: '✓' },
    { label: 'Partenaire Gerflor', desc: 'Distributeur agréé : gamme complète sol PVC & LVT', icon: '✓' },
    { label: 'Partenaire Forbo', desc: 'Poseur Forbo certifié : Marmoleum et vinyle', icon: '✓' },
    { label: 'Partenaire Tarkett', desc: 'Solutions sol PVC hétérogène et homogène', icon: '✓' },
  ]

  const stats = [
    { value: '25+', label: "ans d'expérience", sub: 'depuis 1999' },
    { value: '500+', label: 'chantiers réalisés', sub: 'particuliers & pros' },
    { value: '47', label: 'communes couvertes', sub: 'Charente-Maritime' },
    { value: '4.9/5', label: 'satisfaction client', sub: '47 avis vérifiés' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(196,113,74,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Notre histoire</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              25 ans au service<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>de vos sols.</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.75, margin: 0 }}>
              CB Sols est né en 1999 à Villedoux d'une passion pour les beaux matériaux et le travail bien fait. En 25 ans, nous avons posé des sols dans des centaines d'espaces en Charente-Maritime, des chambres d'hôtel à l'amphithéâtre universitaire, des maisons de famille aux restaurants étoilés.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--terra)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)', marginTop: '0.5rem' }}>{s.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Valentin */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>L'artisan derrière chaque chantier</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                  Valentin Prévoteau
                </h2>
                <blockquote style={{ margin: '0 0 1.5rem', padding: '1.5rem', borderLeft: '3px solid var(--terra)', backgroundColor: 'rgba(196,113,74,0.05)' }}>
                  <p style={{ fontSize: '1.1rem', color: 'var(--dark)', lineHeight: 1.8, margin: 0, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>
                    "Un sol, c'est la base de tout espace. Bien choisi, bien posé, il dure des décennies et transforme un lieu."
                  </p>
                </blockquote>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Gérant de CB Sols depuis sa création en 1999, Valentin a d'abord appris le métier sur le terrain comme poseur avant de reprendre et développer l'entreprise en Charente-Maritime. Formé aux techniques de pose sur subjectile béton, carrelage et parquet existant, il maîtrise aussi bien la moquette contract des grands hôtels que le sol PVC cuisine des collectivités ou les tapis sur mesure des espaces de réception.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Ce qui distingue CB Sols, c'est cette présence personnelle : quand vous appelez le <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>, c'est Valentin qui décroche. Quand un chantier démarre, c'est lui qui est là. Pas d'intermédiaire, pas de sous-traitant anonyme.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                  Cette proximité avec le client, cette connaissance intime du terrain et des matériaux, c'est ce qui différencie CB Sols des grandes enseignes nationales, et ce qui explique pourquoi les hôteliers, gérants de camping et maîtres d'œuvre reviennent chantier après chantier.
                </p>
              </div>

              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Parcours & milestones</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { year: '1999', label: 'Création de CB Sols', desc: "Lancement de l'activité revêtement de sol à Villedoux, premier chantier hôtelier sur l'Île de Ré dès l'année suivante." },
                    { year: '2005', label: 'Ouverture du showroom', desc: 'Un espace dédié sur rendez-vous avec plus de 500 échantillons EGE, Gerflor, Forbo et Tarkett.' },
                    { year: '2010', label: 'Développement B2B', desc: "Premiers contrats cadres avec des groupes hôteliers et des collectivités sur l'Île de Ré et l'agglo rochelaise." },
                    { year: '2018', label: 'Qualification Qualibat', desc: "Obtention de la qualification 6111 Revêtements de sol collés : gage de compétence reconnu par les maîtres d'ouvrage." },
                    { year: '2020', label: 'Partenariats officiels', desc: "Agréments officiels EGE, Gerflor, Forbo et Tarkett : accès aux gammes contract et aux SAV fabricants." },
                    { year: "Aujourd'hui", label: '500+ chantiers', desc: 'La Rochelle, Île de Ré, Île d\'Oléron, Rochefort, Saintes et toute la Charente-Maritime.' },
                  ].map((item, i, arr) => (
                    <div key={item.year} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '1.25rem', padding: '1.5rem 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--terra)', fontWeight: 700, paddingTop: '0.1rem' }}>{item.year}</div>
                      <div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--dark)', fontWeight: 600, marginBottom: '0.3rem' }}>{item.label}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Qualifications & certifications</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              La confiance, ça se prouve
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {credentials.map((c) => (
                <div key={c.label} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(196,113,74,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--terra)', fontWeight: 700, fontSize: '0.8rem' }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.3rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marques */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nos marques partenaires</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {company.brands.map((b) => (
                <span key={b} style={{ padding: '0.625rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--dark-2)', letterSpacing: '0.06em', fontWeight: 500 }}>{b}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '1.5rem', lineHeight: 1.65, maxWidth: '560px' }}>
              Ces partenariats permettent à CB Sols d'accéder aux gammes professionnelles complètes, aux garanties fabricants et à l'assistance technique : bénéfices directs pour vos chantiers.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Votre projet</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              Parlons de votre chantier
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: 'var(--muted)', margin: '0 0 2.5rem' }}>
              Valentin répond personnellement, devis gratuit sous 48h
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
              <Link href="/showroom" style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border)', color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px' }}>
                Visiter le showroom
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
