import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Réalisations | Projets Moquette, Sol PVC & Tapis CB Sols',
  description:
    "Découvrez les réalisations de CB Sols : pose de moquette en hôtel, sol PVC en bureaux, tapis sur mesure en restaurant. Artisan revêtement de sol en Charente-Maritime.",
}

const projects = [
  { title: 'Hôtel La Baronnie, Île de Ré', type: 'Tapis sur mesure & moquettes chambres', sector: 'Hôtellerie', year: '2025', surface: '600 m²', desc: "Création de tapis sur mesure au motif exclusif pour les espaces communs et chambres. Moquette EGE haut de gamme dans les chambres.", img: '/images/tapis-hotel-real.webp' },
  { title: 'Bistrot de la Grande Terrasse', type: 'Moquette acoustique salle', sector: 'Restauration', year: '2026', surface: '280 m²', desc: "Rénovation complète du sol de la salle de restaurant. Moquette acoustique pour améliorer le confort sonore des convives.", img: '/images/bistrot-restaurant-real.webp' },
  { title: 'Restaurant Christopher Coutanceau', type: 'Moquette gastronomique sur mesure', sector: 'Restauration étoilée', year: '2025', surface: '220 m²', desc: "Pose d'une moquette sur mesure dans un restaurant gastronomique de La Rochelle. Couleurs et motifs coordonnés à la décoration intérieure.", img: '/images/restaurant-etoile-real.webp' },
  { title: 'Golf de la Prée', type: 'Moquette contrat + Sol PVC vestiaires', sector: 'Sport & Loisirs', year: '2023', surface: '600 m²', desc: "Refonte complète des sols du clubhouse avec moquette contrat résistante, et sols PVC étanches dans les vestiaires.", img: '/images/golf-real.webp' },
  { title: 'Bureaux Charente-Maritime', type: 'Moquette dalles haute résistance', sector: 'Tertiaire', year: '2024', surface: '350 m²', desc: "Pose de moquette dalles adaptées aux chaises à roulettes. Pose le week-end sans interruption d'activité.", img: '/images/moquette-bureau-real.webp' },
  { title: 'Cuisine Professionnelle', type: 'Sol PVC soudé à chaud', sector: 'Restauration Pro', year: '2024', surface: '80 m²', desc: "Pose de PVC en lés avec soudure à chaud. Aucun joint pour une hygiène maximale, nettoyage intensif facilité.", img: '/images/cuisine-pro-real.webp' },
  { title: 'Restaurant Gaya, La Rochelle', type: 'Moquette salle de restaurant', sector: 'Restauration', year: '2025', surface: '180 m²', desc: "Réfection complète des sols de la salle principale avec moquette de qualité professionnelle.", img: '/images/restaurant-gaya.webp' },
  { title: 'Tapis Hôtel La Baronnie, détail', type: 'Création tapis sur mesure', sector: 'Hôtellerie', year: '2025', surface: 'Motif exclusif', desc: "Motif exclusif créé sur mesure pour l'Hôtel La Baronnie. Design coordonné à l'identité visuelle de l'établissement.", img: '/images/tapis-hotel-baronnie.webp' },
  { title: 'Chambre haut de gamme', type: 'Moquette résidentielle sur mesure', sector: 'Résidentiel', year: '2025', surface: '45 m²', desc: "Moquette avec motif graphique pour une chambre privée. Choix du motif et des couleurs réalisé en showroom.", img: '/images/moquette-chambre-motif.webp' },
  { title: 'Chambre résidentielle', type: 'Moquette résidentielle', sector: 'Résidentiel', year: '2025', surface: '35 m²', desc: "Moquette coloris bleu pour une chambre particulier. Conseil personnalisé en showroom sur la teinte et la texture.", img: '/images/moquette-chambre-bleu.webp' },
]

export default function RealisationsPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Portfolio</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Nos réalisations
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            Hôtels, restaurants, bureaux, collectivités : chaque projet a ses contraintes, ses matériaux, son ambiance. Voici quelques-uns des espaces que CB Sols a transformés en Charente-Maritime.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {projects.map((project) => (
              <div
                key={project.title}
                style={{
                  backgroundColor: '#1a1410',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '320px',
                  transition: 'border-color 0.2s',
                }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.65 }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.9) 0%, rgba(13,12,10,0.3) 50%, transparent 100%)', pointerEvents: 'none' }} />
                <div style={{ padding: '2rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)' }}>{project.sector}</span>
                    <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: 'rgba(240,235,227,0.45)' }}>{project.year} · {project.surface}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: '#F0EBE3', margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h2>
                  <div style={{ fontSize: '0.75rem', color: 'var(--terra)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{project.type}</div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(240,235,227,0.6)', margin: 0, lineHeight: 1.6 }}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', marginBottom: '2rem' }}>
              Ces réalisations représentent une sélection de notre portfolio. Consultez-nous pour découvrir d'autres projets similaires au vôtre.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </section>

      {/* Clients / références */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Références professionnelles</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#F0EBE3', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>Ils nous ont fait confiance</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,235,227,0.65)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
              Hôtels, restaurants, architectes, collectivités : une sélection de clients qui nous ont confié leurs projets en Charente-Maritime.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
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
              { src: '/images/clients/ABP_Architectes.webp', alt: 'ABP Architectes' },
              { src: '/images/clients/AnneBoulletStudio.webp', alt: 'Anne Boullet Studio' },
              { src: '/images/clients/Atelier715.webp', alt: 'Atelier 715' },
              { src: '/images/clients/ZestArchitecture.webp', alt: 'Zest Architecture' },
            ].map(c => (
              <div key={c.alt} className="client-card-dark" style={{ border: '1px solid rgba(240,235,227,0.08)', borderRadius: '8px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem', transition: 'border-color 0.2s, transform 0.2s' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt={c.alt} style={{ maxHeight: '80px', maxWidth: '100%', width: 'auto', objectFit: 'contain', opacity: 0.9 }} />
              </div>
            ))}
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(240,235,227,0.1)' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>&ldquo;</div>
            <blockquote style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: '#F0EBE3', lineHeight: 1.6, margin: '0 0 1.5rem', fontWeight: 300 }}>
              Valentin a su comprendre l&apos;atmosphère que nous voulions pour nos chambres. Le résultat est à la hauteur de nos attentes, et la pose a été impeccable, dans les délais.
            </blockquote>
            <div style={{ fontSize: '0.75rem', color: 'rgba(240,235,227,0.5)', letterSpacing: '0.08em' }}>Hôtellerie · Île de Ré</div>
          </div>
        </div>
      </section>
    </div>
  )
}
