import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { cities } from '@/data/cities'
import { company } from '@/data/company'
import { HeroSlider } from '@/components/HeroSlider'

const projects = [
  { title: 'Bistrot de la Grande Terrasse', type: 'Moquette acoustique', sector: 'Restauration', img: '/images/bistrot-restaurant.jpg' },
  { title: 'Restaurant Christopher Coutanceau', type: 'Moquette gastronomique', sector: 'Restauration étoilée', img: '/images/restaurant-coutanceau.jpg' },
  { title: 'Restaurant Gaya', type: 'Moquette salle', sector: 'Restauration', img: '/images/restaurant-gaya.jpg' },
  { title: 'Hôtel La Baronnie — Île de Ré', type: 'Tapis sur mesure', sector: 'Hôtellerie', img: '/images/tapis-hotel.jpg' },
  { title: 'Golf de la Prée', type: 'Moquette + PVC vestiaires', sector: 'Sport & Loisirs', img: '/images/golf.jpg' },
  { title: 'Cuisine Professionnelle', type: 'PVC soudé à chaud', sector: 'Restauration pro', img: '/images/cuisine-pro.jpg' },
]

const testimonials = [
  {
    quote: "CB Sols a créé des tapis sur mesure avec un motif exclusif pour nos chambres et espaces communs. Ponctualité, qualité d'exécution irréprochable — nous les avons rappelés pour la deuxième phase de rénovation.",
    name: "Véronique A.",
    role: "Directrice",
    company: "Hôtel La Baronnie",
    location: "Saint-Martin-de-Ré",
    stars: 5,
  },
  {
    quote: "Refonte complète du clubhouse et des vestiaires — pose le week-end sans une heure d'interruption. L'équipe connaît les contraintes du secteur. Résultat impeccable, délais tenus.",
    name: "Éric D.",
    role: "Directeur général",
    company: "Golf de la Prée",
    location: "La Couarde-sur-Mer",
    stars: 5,
  },
  {
    quote: "Ce qui m'a convaincue : les vrais échantillons en showroom, pas des visuels sur écran. On repart avec la moquette dans les mains, on voit, on touche. La pose a suivi une semaine après.",
    name: "Sophie M.",
    role: "Particulière",
    company: "",
    location: "La Rochelle",
    stars: 5,
  },
]

const brandPartners = [
  { name: 'EGE', src: '/images/brands/ege.png', href: 'https://www.ege.dk/fr/', title: 'EGE — Moquettes haut de gamme, Danemark' },
  { name: 'Gerflor', src: '/images/brands/gerflor.svg', href: 'https://www.gerflor.fr', title: 'Gerflor — Sol PVC & revêtements professionnels' },
  { name: 'Tarkett', src: '/images/brands/tarkett.svg', href: 'https://www.tarkett.fr', title: 'Tarkett — Revêtements de sol durables' },
  { name: 'Balsan', src: '/images/brands/balsan.png', href: 'https://www.balsan.com/fr/', title: 'Balsan — Moquettes & tapis créatifs' },
  { name: 'Interface', src: '/images/brands/interface.png', href: 'https://www.interface.com/EU/fr-FR/', title: 'Interface — Dalles moquette design' },
]

const processSteps = [
  {
    num: '01',
    title: 'Contact & rendez-vous',
    desc: 'Appelez-nous ou remplissez le formulaire. Réponse sous 24h, RDV de mesure planifié selon vos disponibilités.',
  },
  {
    num: '02',
    title: 'Visite & devis détaillé',
    desc: 'Déplacement gratuit partout en Charente-Maritime. Mesures précises, conseil technique, devis sous 48h.',
  },
  {
    num: '03',
    title: 'Choix des matériaux',
    desc: 'En showroom (500+ échantillons) ou sur catalogue — EGE, Gerflor, Tarkett. Échantillons à emporter chez vous.',
  },
  {
    num: '04',
    title: 'Pose & réception',
    desc: 'Artisans CB Sols uniquement, aucune sous-traitance. Chantier propre, réception avec vous. Garantie décennale.',
  },
]

const garanties = [
  {
    title: 'Artisan certifié',
    desc: 'Qualification Qualibat — compétence vérifiée sur tous les types de revêtements de sol.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9,12 11,14 15,10"/>
      </svg>
    ),
  },
  {
    title: "25 ans d'expertise",
    desc: "Fondé en 1999. Plus de 500 chantiers réalisés à La Rochelle, l'Île de Ré et en Charente-Maritime.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ),
  },
  {
    title: 'Devis gratuit 48h',
    desc: 'Déplacement et mesures offerts. Chiffrage transparent, sans surprise, sans engagement de votre part.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
  },
  {
    title: 'Pose week-end',
    desc: "Intervention hors heures ouvrées pour les professionnels. Zéro interruption d'activité, ouverture le lundi.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--terra)" stroke="none">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  )
}

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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 4rem 6rem 2rem', maxWidth: '660px', marginLeft: 'auto' }}>

          {/* Badge certif */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', marginBottom: '2.5rem', padding: '0.45rem 1rem', border: '1px solid var(--border-mid)', width: 'fit-content' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--terra)" strokeWidth="1.8" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9,12 11,14 15,10"/>
            </svg>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dark-2)', fontWeight: 500 }}>
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
            {[{ v: '+25', l: "ans d'expérience" }, { v: '500+', l: 'projets réalisés' }, { v: '31', l: 'communes couvertes' }, { v: '4.9', l: 'note Google' }].map(s => (
              <div key={s.v}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2.25rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em', marginTop: '0.375rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo slider */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }} className="hero-photo">
          <HeroSlider />
        </div>
      </section>

      {/* ─── GARANTIES (bande sombre) ─────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--dark)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="garanties-grid">
          {garanties.map((g, i) => (
            <div key={g.title} style={{ padding: '2rem 2.5rem', borderRight: i < garanties.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }} className="garantie-item">
              <div style={{ color: 'var(--terra)', marginBottom: '1.25rem' }}>{g.icon}</div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.05rem', fontWeight: 400, color: '#F0EBE3', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>{g.title}</div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(240,235,227,0.5)', lineHeight: 1.65, margin: 0 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MARQUES PARTENAIRES ──────────────────────────────────── */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-light)', flexShrink: 0 }}>Fournitures agréées</span>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-mid)' }} className="brand-divider" />
            {brandPartners.map(brand => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                title={brand.title}
                style={{ display: 'flex', alignItems: 'center', opacity: 0.45, transition: 'opacity 0.2s' }}
                className="brand-logo"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.src}
                  alt={brand.name}
                  style={{ height: '28px', width: 'auto', maxWidth: '100px', objectFit: 'contain', filter: 'grayscale(1)' }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTRE MÉTHODE ───────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Méthode</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--dark)' }}>
                De la visite à la pose —<br />
                <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>on s'occupe de tout.</em>
              </h2>
            </div>
            <Link href="/contact" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dark-2)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
              Prendre contact
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }} className="process-grid">
            {/* Connecting line */}
            <div style={{ position: 'absolute', top: '40px', left: '40px', right: '40px', height: '1px', backgroundColor: 'var(--border-mid)', zIndex: 0 }} className="process-line" />

            {processSteps.map((step, i) => (
              <div key={step.num} style={{ padding: '0 2rem 0 0', position: 'relative', zIndex: 1 }} className="process-step">
                {/* Circle */}
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px solid var(--terra)', backgroundColor: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: 'var(--terra)' }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.1rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.25 }}>{step.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#fff' }}>
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
                <div className="service-card" style={{ backgroundColor: '#fff', padding: '2.5rem 2.25rem', height: '100%', transition: 'background-color 0.2s' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '3.5rem', color: 'var(--terra)', opacity: 0.18, fontWeight: 700, lineHeight: 1, marginBottom: '1.5rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.2rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.875rem', lineHeight: 1.3 }}>{service.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem' }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    Découvrir
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MATIÈRES (bande texture) ─────────────────────────────── */}
      <section style={{ padding: '0', backgroundColor: 'var(--dark)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="materials-grid">
          {[
            { img: '/images/moquette-bureau.jpg', label: 'Moquette', caption: 'Laine & synthétique — hôtellerie, bureaux, résidentiel haut de gamme', href: '/services/pose-moquette', brand: 'EGE · Balsan · Interface' },
            { img: '/images/cuisine-pro.jpg', label: 'Sol PVC & LVT', caption: 'Lames, dalles, lés soudés à chaud — zones humides incluses', href: '/services/sol-pvc-lames-dalles', brand: 'Gerflor · Tarkett · Forbo' },
            { img: '/images/motif-tapis-hotel.jpg', label: 'Tapis sur mesure', caption: 'Motif exclusif, forme libre, coloris personnalisés en showroom', href: '/services/tapis-sur-mesure', brand: 'EGE · Balsan · Balta' },
          ].map(mat => (
            <Link key={mat.label} href={mat.href} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '4/5' }} className="material-tile">
              <Image
                src={mat.img}
                alt={mat.label}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                sizes="33vw"
                className="project-img"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,25,22,0.92) 0%, rgba(26,25,22,0.2) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 2rem 2.5rem' }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem', fontWeight: 600 }}>{mat.brand}</div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#F0EBE3', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{mat.label}</h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(240,235,227,0.6)', margin: 0, lineHeight: 1.5 }}>{mat.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── RÉALISATIONS ────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg)' }}>
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

      {/* ─── TÉMOIGNAGES ─────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#fff', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Avis clients</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: 'var(--dark)' }}>
                Ils nous font confiance
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--terra)" stroke="none">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>4.9/5 sur Google</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="temoignages-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ padding: '2.25rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                <StarRating count={t.stars} />
                <blockquote style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--dark)', lineHeight: 1.75, margin: '0 0 1.75rem', flex: 1 }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--terra)' }}>{t.role}{t.company ? ` · ${t.company}` : ''}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.1rem' }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── B2B SECTEURS ────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }} className="b2b-grid">
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
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg)' }}>
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          <div style={{ position: 'relative', minHeight: '520px', overflow: 'hidden', backgroundColor: '#e8e4de' }}>
            <Image
              src="/images/moquette-chambre.jpg"
              alt="Showroom CB Sols — échantillons moquette et revêtements"
              fill
              style={{ objectFit: 'cover' }}
              sizes="50vw"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 4rem' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 500 }}>Showroom · Sur rendez-vous</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 400, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Venez toucher, voir, <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>choisir.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '0.875rem', maxWidth: '420px' }}>
              Plus de 500 échantillons dans notre espace confidentiel de Villedoux — 10 minutes de La Rochelle. Conseil personnalisé par Valentin Prévoteau.
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

      {/* ─── CTA FINAL ───────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--dark)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Image src="/images/logo-cbsols.png" alt="CB Sols" width={52} height={49} style={{ margin: '0 auto 2rem', opacity: 0.5 }} />
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: '#F0EBE3', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Votre projet mérite<br />un artisan qui l'écoute.
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(240,235,227,0.5)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
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
          .garanties-grid { grid-template-columns: repeat(2,1fr) !important; }
          .garantie-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .process-grid { grid-template-columns: repeat(2,1fr) !important; gap: 2rem !important; }
          .process-line { display: none !important; }
          .materials-grid { grid-template-columns: 1fr !important; }
          .temoignages-grid { grid-template-columns: 1fr !important; }
          .brand-divider { display: none !important; }
        }
        @media (max-width: 600px) {
          .garanties-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
        .brand-logo:hover { opacity: 0.9 !important; }
        .brand-logo:hover img { filter: grayscale(0) !important; }
        a:hover { color: var(--terra) !important; }
      `}</style>
    </>
  )
}
