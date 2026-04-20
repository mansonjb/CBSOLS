import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { cities } from '@/data/cities'
import { company } from '@/data/company'
import { HeroSlider } from '@/components/HeroSlider'

const projects = [
  { title: 'Hôtel La Baronnie', type: 'Tapis sur mesure', sector: 'Hôtellerie', surface: '600 m²', img: '/images/tapis-hotel-real.webp' },
  { title: 'Restaurant Coutanceau', type: 'Moquette gastronomique', sector: 'Restauration étoilée', surface: '220 m²', img: '/images/restaurant-etoile-real.webp' },
  { title: 'Golf de la Prée', type: 'Moquette + PVC vestiaires', sector: 'Sport & Loisirs', surface: '600 m²', img: '/images/golf-real.webp' },
  { title: 'Bistrot Grande Terrasse', type: 'Moquette acoustique', sector: 'Restauration', surface: '280 m²', img: '/images/bistrot-restaurant-real.webp' },
  { title: 'Bureaux Charente-Maritime', type: 'Dalles haute résistance', sector: 'Tertiaire', surface: '350 m²', img: '/images/moquette-bureau-real.webp' },
  { title: 'Cuisine Professionnelle', type: 'PVC soudé à chaud', sector: 'Pro & CHR', surface: '80 m²', img: '/images/cuisine-pro-real.webp' },
]

const testimonials = [
  {
    quote: "CB Sols a créé des tapis sur mesure avec un motif exclusif pour nos chambres. Ponctualité, qualité d'exécution irréprochable, nous les avons rappelés pour la deuxième phase.",
    name: "Véronique A.", role: "Directrice", company: "Hôtel La Baronnie", location: "Saint-Martin-de-Ré", stars: 5,
  },
  {
    quote: "Refonte complète du clubhouse et des vestiaires. Pose le week-end sans une heure d'interruption. L'équipe connaît les contraintes du secteur. Résultat impeccable.",
    name: "Éric D.", role: "Directeur général", company: "Golf de la Prée", location: "La Couarde-sur-Mer", stars: 5,
  },
  {
    quote: "Ce qui m'a convaincue : les vrais échantillons en showroom, pas des visuels sur écran. On repart avec la moquette dans les mains. La pose a suivi une semaine après.",
    name: "Sophie M.", role: "Particulière", company: "", location: "La Rochelle", stars: 5,
  },
]

const brandPartners = [
  { name: 'EGE', src: '/images/brands/ege.webp', href: 'https://www.ege.dk/fr/' },
  { name: 'Gerflor', src: '/images/brands/gerflor.svg', href: 'https://www.gerflor.fr' },
  { name: 'Tarkett', src: '/images/brands/tarkett.svg', href: 'https://www.tarkett.fr' },
  { name: 'Balsan', src: '/images/brands/balsan.webp', href: 'https://www.balsan.com/fr/' },
  { name: 'Interface', src: '/images/brands/interface.webp', href: 'https://www.interface.com/EU/fr-FR/' },
]

const garanties = [
  { title: 'Artisan certifié', desc: 'Qualification Qualibat : compétence vérifiée sur tous les revêtements de sol.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg> },
  { title: "25 ans d'expertise", desc: "Fondé en 1999. Plus de 500 chantiers à La Rochelle, l'Île de Ré et en Charente-Maritime.", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg> },
  { title: 'Devis gratuit 48h', desc: 'Déplacement et mesures offerts. Chiffrage transparent, sans engagement.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg> },
  { title: 'Pose week-end', desc: "Intervention hors heures ouvrées pour les professionnels. Zéro interruption d'activité.", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
]

const processSteps = [
  { num: '01', title: 'Contact & rendez-vous', desc: 'Appelez-nous ou remplissez le formulaire. Réponse sous 24h, RDV planifié.' },
  { num: '02', title: 'Visite & devis', desc: 'Déplacement gratuit partout en Charente-Maritime. Mesures précises et devis sous 48h.' },
  { num: '03', title: 'Choix des matériaux', desc: '500+ échantillons en showroom : EGE, Gerflor, Tarkett. À emporter chez vous.' },
  { num: '04', title: 'Pose & réception', desc: 'Artisans CB Sols uniquement, aucune sous-traitance. Garantie décennale.' },
]

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--terra)" stroke="none">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  )
}

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Le devis est-il vraiment gratuit, même pour une petite surface ?', acceptedAnswer: { '@type': 'Answer', text: "Oui, sans minimum de surface et sans engagement. CB Sols se déplace gratuitement dans toute la Charente-Maritime pour mesurer, évaluer l'état du support et vous remettre un devis détaillé sous 48h. Que ce soit pour 15 m² ou 1 500 m²." } },
    { '@type': 'Question', name: "Peut-on poser la moquette sans fermer l'hôtel ou le bureau ?", acceptedAnswer: { '@type': 'Answer', text: "Oui. CB Sols travaille en rotation dans les hôtels (chambre par chambre sur les libérations) et le week-end dans les bureaux. La grande majorité des chantiers professionnels se font sans interrompre une seule journée d'activité." } },
    { '@type': 'Question', name: 'Quelle est la différence entre la moquette contrat et la moquette résidentielle ?', acceptedAnswer: { '@type': 'Answer', text: "La moquette contrat est classée 32-33 selon la norme EN 1307, certifiée Bfl-s1 (incendie) et testée pour des centaines de milliers de passages. C'est la seule option légale dans un hôtel, des bureaux ou un ERP." } },
    { '@type': 'Question', name: 'CB Sols sous-traite-t-il la pose ?', acceptedAnswer: { '@type': 'Answer', text: "Non. La pose est toujours réalisée par l'équipe CB Sols, aucune sous-traitance. Valentin Prévoteau supervise personnellement les chantiers. Garantie décennale incluse." } },
    { '@type': 'Question', name: "CB Sols intervient-il sur l'Île de Ré et l'Île d'Oléron ?", acceptedAnswer: { '@type': 'Answer', text: "Oui, régulièrement. CB Sols équipe des hôtels, campings et résidences sur les deux îles depuis 25 ans. Les contraintes insulaires sont parfaitement intégrées dans les devis et plannings." } },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section style={{ paddingTop: '72px', backgroundColor: 'var(--bg)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', minHeight: 'calc(100vh - 72px)', paddingTop: '3rem', paddingBottom: '4rem' }} className="hero-grid">

            {/* Left - text */}
            <div>
              {/* Pill badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.125rem', border: '1px solid var(--border-mid)', borderRadius: '999px', marginBottom: '2.5rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dark-2)', fontWeight: 500 }}>500+ projets réalisés</span>
              </div>

              {/* Headline - bold sans + italic serif (NexArch pattern) */}
              <h1 style={{ fontSize: 'clamp(3rem, 5.5vw, 6.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 2rem', fontWeight: 800, color: 'var(--dark)' }}>
                <span style={{ fontFamily: 'var(--font-sans, system-ui, sans-serif)', fontWeight: 800, display: 'block' }}>Le sol qui</span>
                <span style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontWeight: 300, fontStyle: 'italic', display: 'block' }}>définit</span>
                <span style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontWeight: 300, fontStyle: 'italic', color: 'var(--terra)', display: 'block' }}>votre espace.</span>
              </h1>

              {/* Description */}
              <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)', color: 'var(--dark-2)', lineHeight: 1.7, maxWidth: '440px', margin: '0 0 2.5rem' }}>
                Moquette, sol PVC, tapis sur mesure : CB Sols accompagne particuliers, hôtels et entreprises en Charente-Maritime depuis <strong>25 ans</strong>.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.875rem 2rem', backgroundColor: 'var(--btn-inv-bg)', color: 'var(--btn-inv-text)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                  Devis gratuit
                  <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
                <Link href="/realisations" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, borderRadius: '999px' }}>
                  Réalisations
                </Link>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '0', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
                {[{ v: '+25', l: "ans d'expérience" }, { v: '500+', l: 'projets réalisés' }, { v: '47', l: 'communes couvertes' }, { v: '4.9★', l: 'note Google' }].map((s) => (
                  <div key={s.v} style={{ flex: '1 1 auto', minWidth: '100px', paddingRight: '2rem' }}>
                    <div style={{ fontFamily: 'var(--font-sans, system-ui)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.06em', marginTop: '0.4rem' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - hero slider */}
            <div style={{ position: 'relative' }} className="hero-photo-col">
              <div style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '3/4', position: 'relative', maxHeight: '680px' }}>
                <HeroSlider />
              </div>
              {/* Location badge */}
              <div style={{ position: 'absolute', top: '1.5rem', right: '-1rem', backgroundColor: 'var(--bg-inv)', color: 'rgba(240,235,227,0.7)', borderRadius: '999px', padding: '0.5rem 1rem', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                La Rochelle · Île de Ré · 17
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─────────────────────────────────────────────── */}
      <div style={{ backgroundColor: 'var(--bg-inv)', padding: '0.75rem 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap' }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'inline-flex', gap: '2.5rem', paddingRight: '2.5rem', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,235,227,0.4)', flexShrink: 0 }}>
              {['Moquette', 'Sol PVC', 'Tapis sur mesure', 'La Rochelle', 'Île de Ré', 'Charente-Maritime', 'Pose professionnelle', 'Devis 48h', 'Artisan certifié', 'Showroom Villedoux'].map(t => (
                <span key={t}>{t} <span style={{ color: 'var(--terra)' }}>·</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── GARANTIES ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--bg-inv)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="garanties-grid">
          {garanties.map((g, i) => (
            <div key={g.title} style={{ padding: '2rem 2.5rem', borderRight: i < garanties.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }} className="garantie-item">
              <div style={{ color: 'var(--terra)', marginBottom: '1.25rem' }}>{g.icon}</div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.05rem', fontWeight: 400, color: '#F0EBE3', marginBottom: '0.625rem' }}>{g.title}</div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(240,235,227,0.5)', lineHeight: 1.65, margin: 0 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MARQUES ─────────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-light)', flexShrink: 0 }}>Fournitures agréées</span>
          <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border-mid)' }} className="brand-divider" />
          {brandPartners.map(b => (
            <a key={b.name} href={b.href} target="_blank" rel="noopener noreferrer" className="brand-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={b.name} style={{ height: '28px', width: 'auto', maxWidth: '110px', objectFit: 'contain' }} />
            </a>
          ))}
        </div>
      </section>

      {/* ─── CLIENTS ─────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', textAlign: 'center' }}>Références</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#F0EBE3', margin: '0 0 2.5rem', textAlign: 'center', letterSpacing: '-0.02em' }}>Ils nous ont fait confiance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
            {[
              { src: '/images/clients/Hotel_La_Baronnie.webp', alt: 'Hôtel La Baronnie' },
              { src: '/images/clients/LaGrandeTerrasse.webp', alt: 'La Grande Terrasse' },
              { src: '/images/clients/Logo_GolfDeLaPree.webp', alt: 'Golf de la Prée' },
              { src: '/images/clients/Logo_Gaya.webp', alt: 'Restaurant Gaya' },
              { src: '/images/clients/Masqhotel.webp', alt: 'Masq Hôtel' },
              { src: '/images/clients/LogoHotelGrandLarge.webp', alt: 'Hôtel Grand Large' },
              { src: '/images/clients/HotelSaintNicolas.webp', alt: 'Hôtel Saint-Nicolas' },
              { src: '/images/clients/CLR_Hotels.webp', alt: 'CLR Hotels' },
              { src: '/images/clients/Ibis.webp', alt: 'Ibis' },
              { src: '/images/clients/MammaMiaRestaurant.webp', alt: 'Mamma Mia Restaurant' },
              { src: '/images/clients/HotelLaMarine.webp', alt: 'Hôtel La Marine' },
              { src: '/images/clients/LogoMaisonDesAmbassadeurs.webp', alt: 'Maison des Ambassadeurs' },
            ].map(c => (
              <div key={c.alt} className="client-card-dark" style={{ border: '1px solid rgba(240,235,227,0.08)', borderRadius: '8px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', transition: 'border-color 0.2s, transform 0.2s' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt={c.alt} style={{ maxHeight: '48px', maxWidth: '100%', width: 'auto', objectFit: 'contain', opacity: 0.85 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJETS (horizontal scroll) ─────────────────────────── */}
      <section style={{ padding: '8rem 0 6rem', backgroundColor: 'var(--bg)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto 3rem', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 500 }}>Portfolio</p>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
              Nos<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>réalisations</em>
            </h2>
          </div>
          <Link href="/realisations" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, borderRadius: '999px', flexShrink: 0 }}>
            Voir tout →
          </Link>
        </div>

        {/* Scroll container */}
        <div style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', paddingLeft: 'max(2rem, calc((100vw - 1320px) / 2))', paddingRight: '2rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="projects-scroll">
          {projects.map(p => (
            <Link key={p.title} href="/realisations" style={{ textDecoration: 'none', flexShrink: 0, width: 'clamp(260px, 28vw, 360px)', scrollSnapAlign: 'start', display: 'block' }}>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4', backgroundColor: 'var(--bg-alt)' }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  sizes="360px"
                  className="project-img"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.85) 0%, rgba(13,12,10,0.1) 55%, transparent 100%)' }} />

                {/* Top pill */}
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  <span style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0.92)', padding: '0.35rem 0.875rem', borderRadius: '999px', color: '#1A1916', fontWeight: 600 }}>
                    {p.sector}
                  </span>
                </div>

                {/* Bottom info */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1.75rem' }}>
                  <div style={{ fontSize: '0.6rem', color: 'var(--terra)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>{p.surface} · {p.type}</div>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.2rem', color: '#F0EBE3', fontWeight: 400, lineHeight: 1.2 }}>{p.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-alt)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 500 }}>Expertise</p>
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
                Nos<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300 }}>spécialités</em>
              </h2>
            </div>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, borderRadius: '999px', flexShrink: 0 }}>
              Tous les services →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {services.map((service, i) => (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{ backgroundColor: 'var(--bg-card)', padding: '2.25rem', borderRadius: '16px', height: '100%', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 1px 3px rgba(26,25,22,0.06)' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '3rem', color: 'var(--terra)', opacity: 0.15, fontWeight: 700, lineHeight: 1, marginBottom: '1.5rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.15rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.875rem', lineHeight: 1.3 }}>{service.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Découvrir →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MATIÈRES ────────────────────────────────────────────── */}
      <section style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', backgroundColor: 'var(--bg-inv)' }} className="materials-grid">
          {[
            { img: '/images/moquette-bureau.webp', label: 'Moquette', caption: 'Laine & synthétique : hôtellerie, bureaux, résidentiel', href: '/services/pose-moquette', brand: 'EGE · Balsan · Interface' },
            { img: '/images/cuisine-pro.webp', label: 'Sol PVC & LVT', caption: 'Lames, dalles, lés soudés : zones humides incluses', href: '/services/sol-pvc-lames-dalles', brand: 'Gerflor · Tarkett · Forbo' },
            { img: '/images/motif-tapis-hotel.webp', label: 'Tapis sur mesure', caption: 'Motif exclusif, forme libre, coloris personnalisés', href: '/services/tapis-sur-mesure', brand: 'EGE · Balsan · Balta' },
          ].map(mat => (
            <Link key={mat.label} href={mat.href} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '4/5' }} className="material-tile">
              <Image src={mat.img} alt={mat.label} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} sizes="33vw" className="project-img" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,25,22,0.92) 0%, rgba(26,25,22,0.15) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 2rem 2.5rem' }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem', fontWeight: 600 }}>{mat.brand}</div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#F0EBE3', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{mat.label}</h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(240,235,227,0.6)', margin: 0, lineHeight: 1.5 }}>{mat.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── MÉTHODE ─────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
              Notre<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>méthode</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '380px', margin: 0 }}>
              De la prise de contact à la réception de chantier : un accompagnement complet, sans sous-traitance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative' }} className="process-grid">
            <div style={{ position: 'absolute', top: '44px', left: '44px', right: '44px', height: '1px', backgroundColor: 'var(--border-mid)' }} className="process-line" />
            {processSteps.map(step => (
              <div key={step.num} style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '88px', height: '88px', borderRadius: '50%', border: '1.5px solid var(--terra)', backgroundColor: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: 'var(--terra)' }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.05rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.25 }}>{step.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES ─────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
              Ils nous<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300 }}>font confiance</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem', flexShrink: 0 }}>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[1,2,3,4,5].map(i => <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--terra)" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>4.9 / 5 sur Google</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="temoignages-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ padding: '2.25rem', backgroundColor: 'var(--bg-card)', borderRadius: '16px', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <Stars n={t.stars} />
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

      {/* ─── VALENTIN ────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-inv)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>L'artisan derrière chaque chantier</p>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#F0EBE3', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 1.5rem' }}>
              Valentin Prévoteau<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>depuis 1999.</em>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,235,227,0.6)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '2rem' }}>
              Gérant, poseur, interlocuteur unique. Quand vous appelez CB Sols, c'est lui qui décroche, pas un commercial, pas un sous-traitant. 25 ans de métier, des centaines de chantiers en Charente-Maritime.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {['Qualibat 6111', 'Décennale', 'Partenaire EGE', 'Partenaire Gerflor'].map(c => (
                <span key={c} style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,235,227,0.55)', padding: '0.3rem 0.875rem', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '999px' }}>{c}</span>
              ))}
            </div>
            <Link href="/a-propos" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid rgba(196,113,74,0.6)', color: 'var(--terra)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px', transition: 'all 0.2s' }}>
              Notre histoire →
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              <div style={{ aspectRatio: '4/5', backgroundColor: 'rgba(196,113,74,0.08)', border: '1px solid rgba(196,113,74,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👷</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F0EBE3', letterSpacing: '-0.02em' }}>Valentin Prévoteau</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(240,235,227,0.4)', marginTop: '0.4rem', letterSpacing: '0.06em' }}>Artisan poseur · CB Sols</div>
                  <div style={{ marginTop: '2rem', padding: '1.25rem', backgroundColor: 'rgba(196,113,74,0.1)', borderRadius: '10px', borderLeft: '2px solid var(--terra)' }}>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(240,235,227,0.7)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
                      "Un sol bien posé, c'est discret et dure des décennies. Un sol mal posé, ça se voit tout de suite."
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-12px', right: '-12px', padding: '0.5rem 0.875rem', backgroundColor: 'var(--terra)', borderRadius: '999px', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
                500+ chantiers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── B2B ─────────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }} className="b2b-grid">
            <div style={{ position: 'sticky', top: '96px' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Professionnels</p>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
                Par secteur<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300 }}>d'activité</em>
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Hôtel, restaurant, bureau ou EHPAD : chaque secteur a ses normes. CB Sols les connaît toutes.
              </p>
              <Link href="/secteurs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.875rem 1.75rem', backgroundColor: 'var(--btn-inv-bg)', color: 'var(--btn-inv-text)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Solutions pro →
              </Link>
            </div>
            <div>
              {sectors.map((s, i) => (
                <Link key={s.slug} href={`/secteurs/${s.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2rem', color: 'var(--border-strong)', fontWeight: 700, lineHeight: 1, flexShrink: 0, width: '44px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontStyle: 'italic' }}>{s.tagline}</div>
                    </div>
                    <div style={{ fontSize: '1.25rem', flexShrink: 0 }}>{s.icon}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZONES ───────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 500 }}>Zone d'intervention</p>
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
                Nous intervenons<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>partout.</em>
              </h2>
            </div>
            <Link href="/zones" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, borderRadius: '999px', flexShrink: 0 }}>
              47 communes →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { zone: 'la-rochelle', label: 'La Rochelle & agglo', desc: 'La Rochelle, Aytré, Lagord, Villedoux, Puilboreau…', href: '/revetement-sol-la-rochelle', count: cities.filter(c => c.zone === 'la-rochelle').length },
              { zone: 'ile-de-re', label: 'Île de Ré', desc: 'Saint-Martin, La Flotte, Rivedoux, Ars-en-Ré…', href: '/ile-de-re', count: cities.filter(c => c.zone === 'ile-de-re').length },
              { zone: 'ile-doleron', label: "Île d'Oléron", desc: 'Saint-Pierre, Saint-Georges, Le Château…', href: '/ile-doleron', count: cities.filter(c => c.zone === 'ile-doleron').length },
              { zone: 'charente-maritime', label: 'Charente-Maritime', desc: 'Rochefort, Saintes, Royan, Jonzac, Saujon…', href: '/zones', count: cities.filter(c => c.zone === 'charente-maritime').length },
            ].map(z => (
              <Link key={z.zone} href={z.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="service-card" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px', padding: '2rem', height: '100%', transition: 'transform 0.2s' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(196,113,74,0.1)', marginBottom: '1.25rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--terra)" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{z.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{z.desc}</div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{z.count} communes →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SHOWROOM ────────────────────────────────────────────── */}
      <section style={{ padding: '0', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="showroom-grid">
          <div style={{ position: 'relative', minHeight: '520px', overflow: 'hidden', backgroundColor: 'var(--bg-alt)', borderRadius: '0 0 0 0' }}>
            <Image src="/images/moquette-chambre.webp" alt="Showroom CB Sols, échantillons moquette" fill style={{ objectFit: 'cover' }} sizes="50vw" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 4rem' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 500 }}>Showroom · Sur rendez-vous</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 400, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Venez toucher, voir, <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>choisir.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '0.875rem', maxWidth: '400px' }}>
              500+ échantillons à Villedoux, 10 min de La Rochelle. Conseil par Valentin Prévoteau.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>8 rue des Merises, 17230 Villedoux</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/showroom" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.875rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Prendre rendez-vous
              </Link>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 1.5rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500, borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ HOMEPAGE ────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }} className="b2b-grid">
            <div style={{ position: 'sticky', top: '96px' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Questions fréquentes</p>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                Ce que nos clients<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>nous demandent.</em>
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Des réponses claires, sans langue de bois. Pour aller plus loin, consultez nos guides.
              </p>
              <Link href="/guide/choisir-sa-moquette" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Voir tous les guides →
              </Link>
            </div>
            <div>
              {[
                {
                  q: "Le devis est-il vraiment gratuit, même pour une petite surface ?",
                  a: "Oui, sans minimum de surface et sans engagement. CB Sols se déplace gratuitement dans toute la Charente-Maritime pour mesurer, évaluer l'état du support et vous remettre un devis détaillé sous 48h. Que ce soit pour 15 m² ou 1 500 m²."
                },
                {
                  q: "Peut-on poser la moquette sans fermer l'hôtel ou le bureau ?",
                  a: "Oui. CB Sols travaille en rotation dans les hôtels (chambre par chambre sur les libérations) et le week-end dans les bureaux. La grande majorité des chantiers professionnels se font sans interrompre une seule journée d'activité."
                },
                {
                  q: "Quelle est la différence entre la moquette contrat et la moquette résidentielle ?",
                  a: "La moquette contrat est classée 32-33 selon la norme EN 1307, certifiée Bfl-s1 (incendie) et testée pour des centaines de milliers de passages. C'est la seule option légale dans un hôtel, des bureaux ou un ERP. CB Sols ne pose que de la moquette contrat sur les chantiers professionnels."
                },
                {
                  q: "CB Sols sous-traite-t-il la pose ?",
                  a: "Non. La pose est toujours réalisée par l'équipe CB Sols, aucune sous-traitance. Valentin Prévoteau supervise personnellement les chantiers. C'est la garantie d'un résultat irréprochable et d'un interlocuteur unique du devis à la réception."
                },
                {
                  q: "CB Sols intervient-il sur l'Île de Ré et l'Île d'Oléron ?",
                  a: "Oui, régulièrement. CB Sols équipe des hôtels, campings et résidences sur les deux îles depuis 25 ans. Les contraintes insulaires (logistique, hygrométrie, saisonnalité) sont parfaitement intégrées dans nos devis et plannings."
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.75rem 0', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{item.q}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                </div>
              ))}
              <div style={{ paddingTop: '1.5rem' }}>
                <Link href="/faq/devis-revetement-sol-gratuit" style={{ fontSize: '0.75rem', color: 'var(--terra)', textDecoration: 'none', letterSpacing: '0.06em' }}>
                  Toutes les questions fréquentes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-inv)', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Image src="/images/logo-cbsols.png" alt="CB Sols" width={52} height={49} style={{ margin: '0 auto 2rem', opacity: 0.45 }} />
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 800, color: '#F0EBE3', marginBottom: '1.25rem', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
            Votre projet mérite<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>un artisan qui l'écoute.</em>
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(240,235,227,0.5)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Devis gratuit sous 48h. La Rochelle, Île de Ré, Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
              Demander un devis
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', border: '1.5px solid rgba(240,235,227,0.2)', color: 'rgba(240,235,227,0.7)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500, borderRadius: '999px' }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .marquee-track { animation: marquee 28s linear infinite; }
        .projects-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 900px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
          .b2b-grid { grid-template-columns: 1fr !important; }
          .showroom-grid { grid-template-columns: 1fr !important; }
          .materials-grid { grid-template-columns: 1fr !important; }
          .temoignages-grid { grid-template-columns: 1fr !important; }
          .garanties-grid { grid-template-columns: repeat(2,1fr) !important; }
          .garantie-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .process-grid { grid-template-columns: repeat(2,1fr) !important; gap: 2rem !important; }
          .process-line { display: none !important; }
          .brand-divider { display: none !important; }
        }
        @media (max-width: 600px) {
          .garanties-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
        .service-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,25,22,0.1) !important; }
        .brand-logo:hover { opacity: 0.9 !important; }
        .brand-logo:hover img { filter: grayscale(0) !important; }
        a:hover { color: var(--terra) !important; }
      `}</style>
    </>
  )
}
