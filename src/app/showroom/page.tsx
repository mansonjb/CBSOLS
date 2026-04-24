import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

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

      {/* Déroulé d'une visite */}
      <section style={{ padding: '4.5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Déroulé d&apos;une visite</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.02em', maxWidth: '640px', lineHeight: 1.15 }}>
            Une heure pour comprendre votre projet, trois jours pour le chiffrer.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: 'Échange initial', desc: 'Nous discutons de votre espace, de son usage, du trafic, de la lumière. Chaque contrainte oriente le choix du matériau.' },
              { num: '02', title: 'Sélection des échantillons', desc: 'Nous sortons 5 à 10 références adaptées dans la matière, la couleur, la finition. Vous les touchez, les comparez à côté.' },
              { num: '03', title: 'Échantillons à emporter', desc: 'Vous repartez avec vos 2 ou 3 préférés pour valider chez vous, à la lumière naturelle de la pièce.' },
              { num: '04', title: 'Devis sous 48 à 72h', desc: 'Après visite technique si nécessaire, vous recevez un devis détaillé : fourniture, pose, préparation du sol, délais.' },
            ].map((step) => (
              <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 600, marginBottom: '0.75rem' }}>{step.num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>{step.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
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
                <Button href={`tel:${company.phoneClean}`} external variant="primary" size="md" style={{ display: 'flex', width: '100%' }}>
                  Appeler pour un RDV
                </Button>
                <Button href="/contact" variant="outline" size="md" style={{ display: 'flex', width: '100%' }}>
                  Formulaire de contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
