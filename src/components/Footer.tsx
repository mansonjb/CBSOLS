import Link from 'next/link'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

export function Footer() {
  const mainCities = cities.filter((c) => ['la-rochelle', 'saint-martin-de-re', 'rochefort', 'saintes', 'royan', 'le-bois-plage-en-re', 'aytré', 'rivedoux-plage', 'lagord', 'puilboreau'].includes(c.slug))

  return (
    <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--cream)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              CB <span style={{ color: 'var(--terra)' }}>Sols</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '240px' }}>
              Artisan du revêtement de sol depuis 25 ans en Charente-Maritime. La Rochelle, Île de Ré et environs.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { href: company.social.instagram, label: 'Instagram' },
                { href: company.social.facebook, label: 'Facebook' },
                { href: company.social.linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    padding: '0.375rem 0.75rem',
                    border: '1px solid var(--border)',
                    transition: 'all 0.2s',
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Nos Services</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Zones d'Intervention</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {mainCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/revetement-sol-${c.slug}`}
                    style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/zones" style={{ fontSize: '0.75rem', color: 'var(--terra)', textDecoration: 'none' }}>
                  Voir toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Téléphone</div>
                <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1rem', color: 'var(--cream)', textDecoration: 'none', fontWeight: 500 }}>
                  {company.phone}
                </a>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Email</div>
                <a href={`mailto:${company.email}`} style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', textDecoration: 'none' }}>
                  {company.email}
                </a>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Adresse</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                  {company.address.street}<br />
                  {company.address.zip} {company.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>
            © {new Date().getFullYear()} CB Sols Revêtements — Tous droits réservés
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { href: '/mentions-legales', label: 'Mentions légales' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
