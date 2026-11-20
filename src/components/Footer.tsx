'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { enServices } from '@/app/en/services/_data'
import { enCities } from '@/app/en/_lib/cities'
import { esServices } from '@/app/es/services/_data'
import { esCities } from '@/app/es/_lib/cities'
import { localeFromPath, localeBase } from '@/lib/locale'

const MAIN_CITY_SLUGS = ['la-rochelle', 'saint-martin-de-re', 'rochefort', 'saintes', 'royan', 'le-bois-plage-en-re', 'aytre', 'rivedoux-plage', 'lagord', 'puilboreau']

const FOOTER = {
  fr: {
    tagline: 'Artisan solier moquettiste depuis plus de 28 ans. La Rochelle, Île de Ré, Charente-Maritime.',
    colBrand: 'Revêtements · La Rochelle',
    colCbsols: 'CB Sols',
    cbsolsLinks: [
      { href: '/a-propos', label: "Valentin & l'équipe" },
      { href: '/showroom', label: 'Showroom' },
      { href: '/realisations', label: 'Réalisations' },
      { href: '/tarifs', label: 'Notre approche tarifs' },
      { href: '/marques', label: 'Nos marques' },
      { href: '/architectes', label: 'Architectes & MOE' },
      { href: '/guide', label: 'Guides' },
      { href: '/faq', label: 'FAQ' },
      { href: '/solutions', label: 'Solutions' },
      { href: '/nettoyage-moquettes', label: 'Nettoyage moquettes' },
      { href: '/nettoyage-sols', label: 'Nettoyage de sols' },
    ],
    colServices: 'Services',
    colZones: 'Zones',
    allZones: 'Toutes les zones →',
    colContact: 'Contact',
    showroomLabel: 'Showroom · Sur RDV',
    hours: 'Lun – Ven · 8h–18h',
    legal: 'Mentions légales',
    contact: 'Contact',
    copyright: 'Revêtements',
  },
  en: {
    tagline: 'Flooring and carpet craftsman for over 28 years. La Rochelle, Île de Ré, Charente-Maritime.',
    colBrand: 'Coverings · La Rochelle',
    colCbsols: 'CB Sols',
    cbsolsLinks: [
      { href: '/a-propos', label: 'Valentin & the team' },
      { href: '/showroom', label: 'Showroom' },
      { href: '/realisations', label: 'Projects' },
      { href: '/tarifs', label: 'Our approach to pricing' },
      { href: '/marques', label: 'Our brands' },
      { href: '/architectes', label: 'Architects & project managers' },
      { href: '/guide', label: 'Guides' },
      { href: '/faq', label: 'FAQ' },
      { href: '/solutions', label: 'Solutions' },
      { href: '/nettoyage-moquettes', label: 'Carpet cleaning' },
      { href: '/nettoyage-sols', label: 'Floor cleaning' },
    ],
    colServices: 'Services',
    colZones: 'Areas',
    allZones: 'All areas →',
    colContact: 'Contact',
    showroomLabel: 'Showroom · By appointment',
    hours: 'Mon – Fri · 8am–6pm',
    legal: 'Legal notice',
    contact: 'Contact',
    copyright: 'Flooring',
  },
  es: {
    tagline: 'Artesano instalador de suelos y moquetas desde hace más de 28 años. La Rochelle, Île de Ré, Charente-Maritime.',
    colBrand: 'Revestimientos · La Rochelle',
    colCbsols: 'CB Sols',
    cbsolsLinks: [
      { href: '/a-propos', label: 'Valentin y el equipo' },
      { href: '/showroom', label: 'Showroom' },
      { href: '/realisations', label: 'Proyectos' },
      { href: '/tarifs', label: 'Nuestra forma de presupuestar' },
      { href: '/marques', label: 'Nuestras marcas' },
      { href: '/architectes', label: 'Arquitectos y direcciones de obra' },
      { href: '/guide', label: 'Guías' },
      { href: '/faq', label: 'Preguntas frecuentes' },
      { href: '/solutions', label: 'Soluciones' },
      { href: '/nettoyage-moquettes', label: 'Limpieza de moquetas' },
      { href: '/nettoyage-sols', label: 'Limpieza de suelos' },
    ],
    colServices: 'Servicios',
    colZones: 'Zonas',
    allZones: 'Todas las zonas →',
    colContact: 'Contacto',
    showroomLabel: 'Showroom · Con cita previa',
    hours: 'Lun – Vie · 8 h–18 h',
    legal: 'Aviso legal',
    contact: 'Contacto',
    copyright: 'Revestimientos',
  },
} as const

export function Footer() {
  const pathname = usePathname() ?? ''
  const locale = localeFromPath(pathname)
  const base = localeBase(locale)
  const p = (href: string) => `${base}${href}`

  const t = FOOTER[locale]

  const servicesList = locale === 'en' ? enServices : locale === 'es' ? esServices : services
  const citiesList = locale === 'en' ? enCities : locale === 'es' ? esCities : cities
  const mainCities = citiesList.filter((c) => MAIN_CITY_SLUGS.includes(c.slug))

  return (
    <footer style={{ backgroundColor: 'var(--bg-inv)', color: 'var(--text-on-dark-muted)' }}>
      {/* Top band */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Image src="/images/logo-cbsols.png" alt="CB Sols" width={36} height={34} style={{ objectFit: 'contain', opacity: 0.9 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-on-dark)', letterSpacing: '-0.02em' }}>
                  CB <span style={{ color: 'var(--terra)' }}>Sols</span>
                </div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.16em', color: 'var(--text-on-dark-faint)', textTransform: 'uppercase' }}>{t.colBrand}</div>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '220px' }}>
              {t.tagline}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[{ href: company.social.instagram, l: 'IG' }, { href: company.social.linkedin, l: 'LI' }].map((s) => (
                <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.6rem', letterSpacing: '0.1em', padding: '0.4rem 0.7rem', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text-on-dark-faint)', textDecoration: 'none', transition: 'all 0.2s' }}>
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* CB Sols */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>{t.colCbsols}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {t.cbsolsLinks.map((i) => (
                <li key={i.href}>
                  <Link href={p(i.href)} style={{ fontSize: '0.8rem', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>{t.colServices}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {servicesList.map((s) => (
                <li key={s.slug}>
                  <Link href={p(`/services/${s.slug}`)} style={{ fontSize: '0.8rem', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>{t.colZones}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {mainCities.map((c) => (
                <li key={c.slug}>
                  <Link href={p(`/revetement-sol-${c.slug}`)} style={{ fontSize: '0.8rem', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>{c.name}</Link>
                </li>
              ))}
              <li><Link href={p('/zones')} style={{ fontSize: '0.75rem', color: 'var(--terra)', textDecoration: 'none' }}>{t.allZones}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>{t.colContact}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1.25rem', color: 'var(--text-on-dark)', textDecoration: 'none', fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 400 }}>{company.phone}</a>
              </div>
              <div>
                <a href={`mailto:${company.email}`} style={{ fontSize: '0.8rem', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>{company.email}</a>
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{company.address.street}<br />{company.address.zip} {company.address.city}</p>
              </div>
              <div style={{ paddingTop: '0.5rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,235,227,0.3)', marginBottom: '0.5rem' }}>{t.showroomLabel}</div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-on-dark-faint)' }}>{t.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '1.25rem 2rem', maxWidth: '1320px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(240,235,227,0.3)' }}>© {new Date().getFullYear()} CB Sols {t.copyright}</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[{ href: '/mentions-legales', l: t.legal }, { href: '/contact', l: t.contact }].map((i) => (
            <Link key={i.href} href={p(i.href)} style={{ fontSize: '0.7rem', color: 'rgba(240,235,227,0.3)', textDecoration: 'none' }}>{i.l}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
