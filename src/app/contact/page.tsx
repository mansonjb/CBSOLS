import type { Metadata } from 'next'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Contact & Devis Gratuit — CB Sols La Rochelle',
  description:
    'Demandez votre devis gratuit à CB Sols. Artisan revêtement de sol à La Rochelle, Île de Ré et Charente-Maritime. Réponse sous 48h.',
}

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem', minHeight: '80vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'start' }}>

            {/* Left: infos */}
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Contact</div>
              <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Parlons de<br /><em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>votre projet.</em>
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '3rem' }}>
                Devis gratuit sous 48h. Nous nous déplaçons sur l'ensemble de la Charente-Maritime pour évaluer votre chantier.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Téléphone</div>
                  <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair, Georgia, serif)', color: 'var(--cream)', textDecoration: 'none', fontWeight: 400 }}>
                    {company.phone}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Email</div>
                  <a href={`mailto:${company.email}`} style={{ fontSize: '1rem', color: 'var(--cream-muted)', textDecoration: 'none' }}>{company.email}</a>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Showroom (sur RDV)</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                    {company.address.full}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Zones d'intervention</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                    {company.zones.join(' · ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '3rem' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Demande de devis</div>
              <form
                action={`mailto:${company.email}`}
                method="get"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', display: 'block', marginBottom: '0.5rem' }}>Nom *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--cream)', padding: '0.875rem 1rem', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', display: 'block', marginBottom: '0.5rem' }}>Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--cream)', padding: '0.875rem 1rem', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', display: 'block', marginBottom: '0.5rem' }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--cream)', padding: '0.875rem 1rem', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', display: 'block', marginBottom: '0.5rem' }}>Ville / Lieu du chantier</label>
                  <input
                    type="text"
                    name="city"
                    style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--cream)', padding: '0.875rem 1rem', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', display: 'block', marginBottom: '0.5rem' }}>Type de projet</label>
                  <select
                    name="project_type"
                    style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--cream)', padding: '0.875rem 1rem', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit', appearance: 'none' }}
                  >
                    <option value="">Choisir…</option>
                    <option>Pose de moquette</option>
                    <option>Sol PVC (lames ou dalles)</option>
                    <option>Sol PVC en lés</option>
                    <option>Douche intégrale PVC</option>
                    <option>Tapis sur mesure</option>
                    <option>Tapis de propreté</option>
                    <option>Nettoyage de moquette</option>
                    <option>Autre / Conseil</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', display: 'block', marginBottom: '0.5rem' }}>Message / Description du projet</label>
                  <textarea
                    name="message"
                    rows={4}
                    style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--cream)', padding: '0.875rem 1rem', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                    placeholder="Surface approximative, type de local, délai souhaité…"
                  />
                </div>

                <button
                  type="submit"
                  style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: 'var(--cream)', border: 'none', cursor: 'pointer', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, fontFamily: 'inherit', transition: 'background-color 0.2s' }}
                >
                  Envoyer ma demande
                </button>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>
                  Réponse garantie sous 48h ouvrées
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
