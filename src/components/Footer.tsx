import Link from 'next/link'
import Image from 'next/image'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

export function Footer() {
  const mainCities = cities.filter(c =>
    ['la-rochelle','saint-martin-de-re','rochefort','saintes','royan','le-bois-plage-en-re','aytré','rivedoux-plage','lagord','puilboreau'].includes(c.slug)
  )

  return (
    <footer style={{ backgroundColor: 'var(--bg-inv)', color: 'rgba(240,235,227,0.7)' }}>
      {/* Top band */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Image src="/images/logo-cbsols.png" alt="CB Sols" width={36} height={34} style={{ objectFit: 'contain', opacity: 0.9 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: '#F0EBE3', letterSpacing: '-0.02em' }}>
                  CB <span style={{ color: 'var(--terra)' }}>Sols</span>
                </div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.16em', color: 'rgba(240,235,227,0.4)', textTransform: 'uppercase' }}>Revêtements · La Rochelle</div>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '220px' }}>
              Artisan du revêtement de sol depuis 25 ans. La Rochelle, Île de Ré, Charente-Maritime.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[{ href: company.social.instagram, l: 'IG' },{ href: company.social.facebook, l: 'FB' },{ href: company.social.linkedin, l: 'LI' }].map(s => (
                <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.6rem', letterSpacing: '0.1em', padding: '0.4rem 0.7rem', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(240,235,227,0.5)', textDecoration: 'none', transition: 'all 0.2s' }}>
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* CB Sols */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>CB Sols</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/a-propos', label: 'Valentin & l\'équipe' },
                { href: '/showroom', label: 'Showroom' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/tarifs', label: 'Tarifs indicatifs' },
                { href: '/marques', label: 'Nos marques' },
                { href: '/architectes', label: 'Architectes & MOE' },
              ].map(i => (
                <li key={i.href}>
                  <Link href={i.href} style={{ fontSize: '0.8rem', color: 'rgba(240,235,227,0.55)', textDecoration: 'none' }}>{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Services</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} style={{ fontSize: '0.8rem', color: 'rgba(240,235,227,0.55)', textDecoration: 'none' }}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Zones</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {mainCities.map(c => (
                <li key={c.slug}>
                  <Link href={`/revetement-sol-${c.slug}`} style={{ fontSize: '0.8rem', color: 'rgba(240,235,227,0.55)', textDecoration: 'none' }}>{c.name}</Link>
                </li>
              ))}
              <li><Link href="/zones" style={{ fontSize: '0.75rem', color: 'var(--terra)', textDecoration: 'none' }}>Toutes les zones →</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1.25rem', color: '#F0EBE3', textDecoration: 'none', fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 400 }}>{company.phone}</a>
              </div>
              <div>
                <a href={`mailto:${company.email}`} style={{ fontSize: '0.8rem', color: 'rgba(240,235,227,0.55)', textDecoration: 'none' }}>{company.email}</a>
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{company.address.street}<br />{company.address.zip} {company.address.city}</p>
              </div>
              <div style={{ paddingTop: '0.5rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,235,227,0.3)', marginBottom: '0.5rem' }}>Showroom · Sur RDV</div>
                <p style={{ fontSize: '0.75rem', color: 'rgba(240,235,227,0.4)' }}>Lun – Ven · 8h–18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '1.25rem 2rem', maxWidth: '1320px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(240,235,227,0.3)' }}>© {new Date().getFullYear()} CB Sols Revêtements</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[{ href: '/mentions-legales', l: 'Mentions légales' },{ href: '/contact', l: 'Contact' }].map(i => (
            <Link key={i.href} href={i.href} style={{ fontSize: '0.7rem', color: 'rgba(240,235,227,0.3)', textDecoration: 'none' }}>{i.l}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
