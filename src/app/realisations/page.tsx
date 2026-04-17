import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Réalisations — Projets Moquette, Sol PVC & Tapis CB Sols',
  description:
    "Découvrez les réalisations de CB Sols : pose de moquette en hôtel, sol PVC en bureaux, tapis sur mesure en restaurant. Artisan revêtement de sol en Charente-Maritime.",
}

const projects = [
  { title: 'Hôtel Île de Ré — Chambres & Salles de Bain', type: 'Moquette chambres + Douches intégrales PVC', sector: 'Hôtellerie 4★', year: '2024', surface: '800 m²', desc: 'Remplacement complet des revêtements de sol et des douches carrelage par des douches intégrales PVC. Moquette EGE haut de gamme en chambre.', bg: '#1a1410' },
  { title: 'Restaurant Gastronomique — La Rochelle', type: 'Moquette acoustique sur mesure', sector: 'Restauration', year: '2024', surface: '220 m²', desc: 'Pose d\'une moquette acoustique haut de gamme en salle de restaurant pour améliorer le confort sonore des convives. Finitions soignées en plinthes bois.', bg: '#121610' },
  { title: 'Cabinet Comptable — Rochefort', type: 'Dalles PVC résistantes aux roulettes bureau', sector: 'Tertiaire', year: '2023', surface: '350 m²', desc: 'Remplacement de la moquette ancienne par des dalles PVC haute résistance adaptées aux chaises à roulettes. Pose le week-end sans interruption d\'activité.', bg: '#141012' },
  { title: 'Golf de Charente-Maritime — Clubhouse & Vestiaires', type: 'Moquette contrat + Sol PVC vestiaires', sector: 'Sport & Loisirs', year: '2023', surface: '600 m²', desc: 'Refonte complète des sols du clubhouse avec une moquette contrat résistante et élégante, et des sols PVC étanches dans les vestiaires.', bg: '#101412' },
  { title: 'EHPAD — Saintes', type: 'PVC en lés + Douches PVC PMR', sector: 'Santé', year: '2023', surface: '1200 m²', desc: 'Chantier en milieu ouvert : pose de PVC en lés dans les circulations et les chambres, et installation de douches PVC PMR accessibles aux résidents.', bg: '#101214' },
  { title: 'Amphithéâtre Universitaire — La Rochelle', type: 'Sol PVC haute résistance', sector: 'Collectivité', year: '2022', surface: '450 m²', desc: 'Remplacement du sol d\'un amphithéâtre de 450 places par un PVC en lés haute résistance. Pose pendant les vacances universitaires d\'été.', bg: '#12101a' },
  { title: 'Cabinet d\'Assurances — La Rochelle', type: 'Dalles PVC + Tapis de propreté sur mesure', sector: 'Tertiaire', year: '2026', surface: '180 m²', desc: 'Renovation complète des sols avec dalles PVC et installation de tapis de propreté à l\'entrée avec logo de l\'entreprise.', bg: '#1a1312' },
  { title: 'Bistrot de la Grande Terrasse — La Rochelle', type: 'Moquette salle + Sol PVC cuisine', sector: 'Restauration', year: '2026', surface: '280 m²', desc: 'Renovation sol salle de restaurant et cuisine. Moquette acoustique en salle, PVC résistant en cuisine professionnelle.', bg: '#121412' },
]

export default function RealisationsPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Portfolio</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Nos réalisations
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            Hôtels, restaurants, bureaux, collectivités — chaque projet a ses contraintes, ses matériaux, son ambiance. Voici quelques-uns des espaces que CB Sols a transformés en Charente-Maritime.
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
                  backgroundColor: project.bg,
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
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 20px)', pointerEvents: 'none' }} />
                <div style={{ padding: '2rem', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)' }}>{project.sector}</span>
                    <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>{project.year} · {project.surface}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--cream)', margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h2>
                  <div style={{ fontSize: '0.75rem', color: 'var(--terra)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{project.type}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', marginBottom: '2rem' }}>
              Ces réalisations représentent une sélection de notre portfolio. Consultez-nous pour découvrir d'autres projets similaires au vôtre.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: 'var(--cream)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
