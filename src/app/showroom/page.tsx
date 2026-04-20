import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Showroom Revêtement Sol La Rochelle | CB Sols, Sur Rendez-vous',
  description:
    'Visitez le showroom CB Sols à Villedoux (10 min de La Rochelle). Plus de 500 échantillons de moquettes, sols PVC et tapis sur mesure. Sur rendez-vous.',
}

export default function ShowroomPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Showroom · Sur rendez-vous</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Venez toucher,<br />voir, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>choisir.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
            Notre showroom est un espace confidentiel, loin des grandes surfaces. Vous êtes reçu par un expert qui prend le temps de comprendre votre projet, votre usage, vos envies.
          </p>
        </div>
      </section>

      {/* Photo showroom */}
      <section style={{ padding: '0', maxHeight: '480px', overflow: 'hidden', position: 'relative' }}>
        <Image
          src="/images/showroom-interieur.webp"
          alt="Showroom CB Sols Villedoux — espace confidentiel avec plus de 500 échantillons"
          width={1024}
          height={509}
          style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(250,250,248,0.6) 100%)' }} />
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce que vous trouverez</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { label: '500+ échantillons', desc: 'Moquettes, lames PVC, dalles, vinyles en rouleaux, tapis : toute la gamme CB Sols' },
                  { label: 'Conseil personnalisé', desc: 'Valentin Prévoteau ou un membre de son équipe vous accompagne dans votre choix' },
                  { label: 'Échantillons à emporter', desc: 'Repartez avec vos coups de cœur pour les comparer chez vous à la lumière naturelle' },
                  { label: 'Visualisation in situ', desc: 'Nous vous aidons à projeter le rendu final dans votre espace avec des outils de visualisation' },
                  { label: 'Devis immédiat', desc: 'Sur place ou dans les 48h suivant votre visite' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.5rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.25rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '3rem' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Prendre rendez-vous</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Adresse</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--cream)', margin: 0, lineHeight: 1.6 }}>
                    8 rue des Merises, ZA les Cerisiers<br />17230 Villedoux<br />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(10 minutes de La Rochelle)</span>
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Contact</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--cream)', margin: 0 }}>{company.contact}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Accueil</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', margin: 0 }}>Lun – Ven · 8h – 18h<br />Sur rendez-vous uniquement</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={`tel:${company.phoneClean}`}
                  style={{ display: 'block', textAlign: 'center', padding: '1rem 2rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}
                >
                  Appeler pour un RDV
                </a>
                <Link href="/contact" style={{ display: 'block', textAlign: 'center', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px' }}>
                  Formulaire de contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
