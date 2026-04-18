import Link from 'next/link'
import type { Metadata } from 'next'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: "Revêtement de Sol Île de Ré | CB Sols, Artisan Certifié",
  description: "CB Sols intervient sur toute l'Île de Ré pour la pose de moquette, sol PVC et tapis sur mesure. Hôtels, campings, résidences. Devis gratuit sous 48h.",
  alternates: { canonical: 'https://cbsols.fr/ile-de-re' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Revêtement de Sol Île de Ré",
  description: "Pose de revêtement de sol sur l'Île de Ré par CB Sols : moquette, sol PVC, tapis sur mesure.",
  areaServed: { '@type': 'Place', name: "Île de Ré" },
  provider: {
    '@type': 'LocalBusiness',
    name: 'CB SOLS REVÊTEMENTS',
    telephone: company.phoneClean,
  },
}

export default function IleDeRePage() {
  const reCities = cities.filter(c => c.zone === 'ile-de-re')
  const nearbyZones = [
    { label: 'La Rochelle & agglomération', href: '/revetement-sol-la-rochelle' },
    { label: "Île d'Oléron", href: '/ile-doleron' },
    { label: 'Rochefort', href: '/revetement-sol-rochefort' },
    { label: 'Royan', href: '/revetement-sol-royan' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
              <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href="/zones" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Zones</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Île de Ré</span>
            </div>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(196,113,74,0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              Île de Ré · Charente-Maritime · 17
            </span>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Revêtement de Sol
              <br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>Île de Ré</em>
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              CB Sols intervient sur toute l'Île de Ré, 1re île touristique de la côte Atlantique, reliée à La Rochelle par le viaduc depuis 1988. Moquette hôtelière, sol PVC cuisine professionnelle, tapis sur mesure pour campings et résidences de tourisme : nous maîtrisons les contraintes spécifiques de l'île.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Devis gratuit sur l'île
              </Link>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Spécificités Île de Ré */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularités de l'île</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                Ce que nous savons de l'Île de Ré
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Environnement marin exigeant', desc: "L'air iodé et l'hygrométrie élevée de l'Île de Ré imposent des produits certifiés résistants à l'humidité. CB Sols sélectionne des colles, primers et revêtements testés pour le climat atlantique insulaire." },
                  { title: 'Saisonnalité serrée', desc: "Les hôtels et campings de l'île doivent être prêts avant Pâques. CB Sols planifie les interventions entre octobre et mars pour garantir la livraison avant l'ouverture de la haute saison." },
                  { title: 'Logistique viaduc optimisée', desc: "Depuis Villedoux, CB Sols est à 20 minutes du viaduc. Nos équipes interviennent sans surcoût insulaire sur tout le territoire de la Communauté de communes de l'Île de Ré." },
                  { title: 'Établissements haut de gamme', desc: "L'Île de Ré concentre des hôtels de charme, des campings 5 étoiles et des résidences de tourisme premium. CB Sols maîtrise les exigences esthétiques et fonctionnelles de ces établissements." },
                ].map((item) => (
                  <div key={item.title} style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nos interventions sur l'île</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                Communes desservies
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {reCities.map((city) => (
                  <Link key={city.slug} href={`/revetement-sol-${city.slug}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.15rem' }}>{city.name}</div>
                      <div style={{ fontSize: '0.73rem', color: 'var(--muted)', fontStyle: 'italic' }}>{city.description}</div>
                    </div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', flexShrink: 0 }}>Voir →</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nos prestations sur l'île</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              Tous types de revêtements
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {services.slice(0, 6).map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="service-card" style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.5rem' }}>{service.name}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: '0 0 1rem', lineHeight: 1.6 }}>{service.description}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)' }}>Voir →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Zones voisines */}
        <section style={{ padding: '4rem 2rem 5rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nous intervenons aussi</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {nearbyZones.map((z) => (
                <Link key={z.href} href={z.href} style={{ display: 'inline-block', padding: '0.625rem 1.25rem', fontSize: '0.8rem', color: 'var(--dark-2)', textDecoration: 'none', border: '1px solid var(--border)', borderRadius: '999px' }}>
                  {z.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
