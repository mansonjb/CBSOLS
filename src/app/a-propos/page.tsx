import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'À Propos | Valentin Prévoteau, Artisan Poseur CB Sols depuis 1999',
  description:
    "Rencontrez Valentin Prévoteau, gérant et artisan poseur de CB Sols depuis 1999. Assurance décennale, 500+ chantiers en Charente-Maritime. L'homme derrière chaque chantier.",
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
      name: 'Assurance responsabilité décennale',
    },
  ],
}

export default function AProposPage() {
  const credentials = [
    { label: 'Décennale', desc: 'Assurance responsabilité décennale en cours de validité', icon: '✓' },
    { label: '25+ ans d\'expérience', desc: 'Fondé en 1999, 500+ chantiers livrés en Charente-Maritime', icon: '✓' },
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
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(44, 85, 48, 0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
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
                <blockquote style={{ margin: '0 0 1.5rem', padding: '1.5rem', borderLeft: '3px solid var(--terra)', backgroundColor: 'rgba(44, 85, 48, 0.05)' }}>
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
                    { year: '2005', label: 'Ouverture du showroom', desc: 'Un espace dédié sur rendez-vous avec plus de 500 échantillons EGE, Gerflor, Bostik et objectflor.' },
                    { year: '2010', label: 'Développement B2B', desc: "Premiers contrats cadres avec des groupes hôteliers et des collectivités sur l'Île de Ré et l'agglo rochelaise." },
                    { year: '2018', label: 'Reconnaissance professionnelle', desc: "Adhésion aux fédérations professionnelles, intégration des normes les plus exigeantes pour les marchés ERP et hôteliers." },
                    { year: '2020', label: 'Partenariats officiels', desc: "Agréments officiels EGE, Gerflor, Bostik et objectflor : accès aux gammes contract et aux SAV fabricants." },
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

        {/* Credentials & artisanat */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Notre engagement</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              La confiance, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>ça se prouve.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--dark-2)', lineHeight: 1.85, maxWidth: '760px', margin: '0 0 2rem' }}>
              L&apos;artisanat, c&apos;est un choix. Celui de prendre le temps de bien faire, de revenir sur un détail jusqu&apos;à ce qu&apos;il soit juste, de refuser le compromis quand il n&apos;est pas nécessaire. Chez CB Sols, l&apos;excellence n&apos;est pas un slogan : c&apos;est la posture quotidienne. Nous mesurons trois fois pour couper une fois, nous calepinons un motif au millimètre, nous reprenons une jonction qui n&apos;est pas parfaite, parce que c&apos;est ce que nous attendrions chez nous.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--dark-2)', lineHeight: 1.85, maxWidth: '760px', margin: '0 0 3rem' }}>
              Cette minutie, on la doit aux clients qui nous font confiance, hôteliers, restaurateurs, architectes, particuliers, et on la doit aussi aux compagnons qui font ce métier depuis vingt-cinq ans avec nous. Un sol bien posé, c&apos;est invisible. C&apos;est exactement ça, le travail bien fait.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {credentials.map((c) => (
                <div key={c.label} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(44, 85, 48, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--terra)', fontWeight: 700, fontSize: '0.8rem' }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.3rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avis Google */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Avis clients vérifiés</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                  Ce que disent nos clients sur Google
                </h2>
              </div>
              <a
                href="https://share.google/86MXB40I3QuKofiI4"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '999px', textDecoration: 'none', color: 'var(--dark)' }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark)' }}>4,9</span>
                <span style={{ display: 'inline-flex', gap: 1 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04" stroke="none">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.02em' }}>· 47 avis</span>
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {[
                {
                  name: "Véronique A.",
                  context: "Hôtel La Baronnie · Saint-Martin-de-Ré",
                  date: "il y a 2 mois",
                  text: "CB Sols a créé des tapis sur mesure avec un motif exclusif pour nos chambres. Ponctualité, qualité d'exécution irréprochable, écoute parfaite. Nous les avons rappelés pour la deuxième phase de notre rénovation.",
                },
                {
                  name: "Pierre L.",
                  context: "Bistro de la Grande Terrasse · Châtelaillon",
                  date: "il y a 3 mois",
                  text: "Rénovation complète de la moquette de notre salle de restaurant. L'équipe est intervenue sans interrompre le service. Résultat impeccable, confort acoustique nettement amélioré, conseil très pro pour le choix du modèle.",
                },
                {
                  name: "Éric D.",
                  context: "Golf de la Prée · Marsilly",
                  date: "il y a 6 mois",
                  text: "Refonte complète du clubhouse et des vestiaires. Pose réalisée le week-end sans une heure d'interruption. L'équipe connaît parfaitement les contraintes d'un établissement recevant du public. Travail très soigné.",
                },
                {
                  name: "Sophie M.",
                  context: "Particulière · La Rochelle",
                  date: "il y a 4 mois",
                  text: "Ce qui m'a convaincue : les vrais échantillons en showroom, pas des visuels sur écran. On repart avec la moquette dans les mains, on la voit chez soi à la lumière du jour. La pose a suivi une semaine après, parfaite.",
                },
                {
                  name: "Anne B.",
                  context: "Architecte d'intérieur · Île de Ré",
                  date: "il y a 5 mois",
                  text: "Travail de qualité et respect du cahier des charges au millimètre. CB Sols s'intègre naturellement dans nos équipes de chantier, c'est précieux pour un projet haut de gamme. Recommandé sans réserve aux confrères.",
                },
                {
                  name: "Christophe D.",
                  context: "Restaurant · La Rochelle",
                  date: "il y a 1 mois",
                  text: "Sol PVC en lés posé dans la cuisine pro avec soudures à chaud. Travail très méticuleux sur les remontées en plinthes et autour des siphons. Résultat conforme aux normes HACCP, contrôle d'hygiène passé sans réserve.",
                },
              ].map((review, i) => (
                <article key={i} style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.2rem' }}>{review.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.4 }}>{review.context}</div>
                    </div>
                    <div style={{ display: 'inline-flex', gap: 1, flexShrink: 0 }}>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} width="11" height="11" viewBox="0 0 24 24" fill="#FBBC04" stroke="none">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--dark-2)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                    « {review.text} »
                  </p>
                  <div style={{ fontSize: '0.7rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M21.35 11.1H12v3.18h5.59c-.26 1.5-1.5 4.4-5.59 4.4-3.36 0-6.1-2.78-6.1-6.2s2.74-6.2 6.1-6.2c1.91 0 3.2.81 3.93 1.5l2.68-2.59C16.9 3.65 14.66 2.7 12 2.7 6.92 2.7 2.8 6.82 2.8 11.9s4.12 9.2 9.2 9.2c5.31 0 8.83-3.73 8.83-9 0-.6-.07-1.05-.18-1.5z" fill="#4285F4"/>
                    </svg>
                    Avis Google · {review.date}
                  </div>
                </article>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <a
                href="https://share.google/86MXB40I3QuKofiI4"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.75rem', border: '1.5px solid var(--terra)', color: 'var(--terra)',
                  fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  textDecoration: 'none', fontWeight: 700, borderRadius: '999px',
                }}
              >
                Lire les 47 avis sur Google →
              </a>
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
