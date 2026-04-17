import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { cities } from '@/data/cities'
import { company } from '@/data/company'

const projects = [
  { title: 'Bistrot de la Grande Terrasse', type: 'Moquette acoustique', sector: 'Restauration', img: '/images/bistrot-restaurant.jpg' },
  { title: 'Restaurant Christopher Coutanceau', type: 'Moquette gastronomique', sector: 'Restauration étoilée', img: '/images/restaurant-coutanceau.jpg' },
  { title: 'Restaurant Gaya', type: 'Moquette salle', sector: 'Restauration', img: '/images/restaurant-gaya.jpg' },
  { title: 'Hôtel La Baronnie — Île de Ré', type: 'Tapis sur mesure', sector: 'Hôtellerie', img: '/images/tapis-hotel.jpg' },
  { title: 'Golf de la Prée', type: 'Moquette + PVC vestiaires', sector: 'Sport & Loisirs', img: '/images/golf.jpg' },
  { title: 'Cuisine Professionnelle', type: 'PVC soudé à chaud', sector: 'Restauration pro', img: '/images/cuisine-pro.jpg' },
]

export default function Home() {
  const zoneGroups = [
    { label: 'Agglomération de La Rochelle', cities: cities.filter(c => c.zone === 'la-rochelle') },
    { label: 'Île de Ré', cities: cities.filter(c => c.zone === 'ile-de-re') },
    { label: 'Charente-Maritime', cities: cities.filter(c => c.zone === 'charente-maritime') },
  ]

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section style={{ paddingTop: '72px', minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="hero-grid">
        {/* Left: text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 4rem 6rem 2rem', maxWidth: '660px', marginLeft: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--terra)' }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 500 }}>
              Artisan certifié · Depuis 1999
            </span>
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(3rem, 4.5vw, 5.5rem)', fontWeight: 400, color: 'var(--dark)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.75rem' }}>
            Le sol qui définit<br />
            <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>votre espace.</em>
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--dark-2)', lineHeight: 1.7, maxWidth: '440px', marginBottom: '2.5rem' }}>
            Moquette, sol PVC, tapis sur mesure — CB Sols accompagne particuliers, hôtels, restaurants et entreprises en Charente-Maritime depuis 25 ans.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600 }}>
              Devis gratuit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/realisations" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.25rem', border: '1px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Voir les réalisations
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
            {[{ v: '+25', l: "ans d'expérience" }, { v: '500+', l: 'projets réalisés' }, { v: '31', l: 'communes couvertes' }].map(s => (
              <div key={s.v}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2.25rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em', marginTop: '0.375rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }} className="hero-photo">
          <Image
            src="/images/tapis-hotel.jpg"
            alt="Tapis sur mesure Hôtel La Baronnie — CB Sols"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="50vw"
          />
          {/* Caption */}
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', padding: '0.875rem 1.25rem', maxWidth: '240px' }}>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.3rem' }}>Hôtel La Baronnie · Île de Ré</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--dark)', fontWeight: 500 }}>Tapis sur mesure — Chambre</div>
          </div>
        </div>
      </section>

      {/* ─── MARQUES ─────────────────────────────────────────────── */}
      <section style={{ padding: '1.75rem 2rem', backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', flexShrink: 0 }}>Partenaires</span>
          {company.brands.map(b => (
            <span key={b} style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--muted-light)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{b}</span>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Expertise</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--dark)' }}>Nos spécialités</h2>
            </div>
            <Link href="/services" style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dark-2)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Tous les services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
            {services.map((service, i) => (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{ backgroundColor: '#fff', padding: '2.25rem', height: '100%', transition: 'background-color 0.2s' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '3.5rem', color: 'var(--terra)', opacity: 0.2, fontWeight: 700, lineHeight: 1, marginBottom: '1.5rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.2rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.875rem', lineHeight: 1.3 }}>{service.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    En savoir plus
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RÉALISATIONS ────────────────────────────────────────── */}
      <section style={{ padding: '7rem 2rem', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Portfolio</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--dark)' }}>Dernières réalisations</h2>
            </div>
            <Link href="/realisations" style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dark-2)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Voir tout
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="projects-grid">
            {projects.map((p, i) => (
              <Link key={p.title} href="/realisations" style={{ textDecoration: 'none', gridColumn: i === 0 ? 'span 2' : 'span 1' }} className={i === 0 ? 'span-2' : ''}>
                <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#e8e4de', aspectRatio: i === 0 ? '16/9' : '4/3' }}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                    className="project-img"
                  />
                </div>
                <div style={{ padding: '1rem 0 0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.25rem', fontWeight: 500 }}>{p.sector}</div>
                    <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '0.95rem', color: 'var(--dark)', fontWeight: 400 }}>{p.title}</div>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', flexShrink: 0, marginTop: '0.25rem' }}>{p.type}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── B2B SECTEURS ────────────────────────────────────────── */}
      <section style={{ padding: '7rem 2rem', backgroundColor: '#fff', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }} className="b2b-grid">
            <div style={{ position: 'sticky', top: '96px' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Professionnels</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 400, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                Solutions pour chaque secteur
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                CB Sols maîtrise les contraintes spécifiques de chaque secteur — normes incendie, hygiène, accessibilité PMR, passages intensifs. Devis pro sous 48h.
              </p>
              <Link href="/secteurs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', backgroundColor: 'var(--dark)', color: '#fff', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600 }}>
                Toutes les solutions pro
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {sectors.map((s, i) => (
                <Link key={s.slug} href={`/secteurs/${s.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.75rem 0', borderBottom: '1px solid var(--border)', transition: 'padding 0.2s' }}>
                    <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2.5rem', color: 'var(--border-strong)', fontWeight: 700, lineHeight: 1, flexShrink: 0, width: '48px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.375rem', letterSpacing: '-0.01em' }}>{s.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontStyle: 'italic' }}>{s.tagline}</div>
                        </div>
                        <div style={{ fontSize: '1.5rem', flexShrink: 0, marginLeft: '1rem' }}>{s.icon}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZONES ───────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 2rem', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Territoire</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--dark)' }}>
              Nous intervenons partout<br />en Charente-Maritime
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem' }}>
            {zoneGroups.map(group => (
              <div key={group.label}>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dark)', fontWeight: 600, marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid var(--terra)' }}>
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {group.cities.map(city => (
                    <Link key={city.slug} href={`/revetement-sol-${city.slug}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.82rem', color: 'var(--dark-2)', textDecoration: 'none', transition: 'color 0.15s' }}>
                      <span>{city.name}</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: 'var(--muted-light)', flexShrink: 0 }}>
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SHOWROOM ────────────────────────────────────────────── */}
      <section style={{ padding: '0', backgroundColor: '#fff', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="showroom-grid">
          {/* Photo */}
          <div style={{ position: 'relative', minHeight: '500px', overflow: 'hidden', backgroundColor: '#e8e4de' }}>
            <Image
              src="/images/moquette-chambre.jpg"
              alt="Showroom CB Sols — échantillons moquette"
              fill
              style={{ objectFit: 'cover' }}
              sizes="50vw"
            />
          </div>
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 4rem' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 500 }}>Showroom · Sur rendez-vous</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 400, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Venez toucher, voir, <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>choisir.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '0.875rem', maxWidth: '420px' }}>
              Plus de 500 échantillons vous attendent dans notre espace confidentiel de Villedoux — 10 minutes de La Rochelle. Conseil personnalisé par Valentin Prévoteau.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
              8 rue des Merises, 17230 Villedoux
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/showroom" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600 }}>
                Prendre rendez-vous
              </Link>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 1.5rem', border: '1px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500 }}>
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POURQUOI NOUS ───────────────────────────────────────── */}
      <section style={{ padding: '7rem 2rem', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Notre différence</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--dark)' }}>
              25 ans de sol sous les pieds<br />de la Charente-Maritime
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', backgroundColor: 'var(--border)' }}>
            {[
              { num: '01', title: 'Showroom exclusif', desc: '500+ échantillons de moquettes, PVC et tapis. Conseil sur rendez-vous, sans pression.' },
              { num: '02', title: 'Devis sous 48h', desc: 'Déplacement gratuit pour estimer votre projet. Devis détaillé et transparent.' },
              { num: '03', title: 'Artisans qualifiés', desc: 'Équipe CB Sols — pas de sous-traitance. Les mêmes mains du début à la fin du chantier.' },
              { num: '04', title: 'Garantie décennale', desc: 'Tous nos travaux sont couverts. Marques de référence : EGE, Gerflor, Forbo, Tarkett.' },
            ].map(item => (
              <div key={item.num} style={{ backgroundColor: '#fff', padding: '2.5rem 2rem' }}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '3rem', color: 'var(--terra)', opacity: 0.15, fontWeight: 700, lineHeight: 1, marginBottom: '1.25rem' }}>{item.num}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ───────────────────────────────────────────── */}
      <section style={{ padding: '7rem 2rem', backgroundColor: 'var(--dark)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Image src="/images/logo-cbsols.png" alt="CB Sols" width={52} height={49} style={{ margin: '0 auto 2rem', opacity: 0.6 }} />
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: '#F0EBE3', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Votre projet mérite<br />un artisan qui l'écoute.
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(240,235,227,0.55)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Devis gratuit sous 48h. Intervention sur La Rochelle, l'Île de Ré et toute la Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1.125rem 2.75rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600 }}>
              Demander un devis
            </Link>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '1.125rem 2rem', border: '1px solid rgba(240,235,227,0.2)', color: 'rgba(240,235,227,0.7)', fontSize: '0.95rem', textDecoration: 'none', fontWeight: 500 }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { min-height: 400px !important; }
          .b2b-grid { grid-template-columns: 1fr !important; }
          .showroom-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .span-2 { grid-column: span 1 !important; }
        }
        a:hover { color: var(--terra) !important; }
      `}</style>
    </>
  )
}
