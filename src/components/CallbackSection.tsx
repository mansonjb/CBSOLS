import { CallbackForm } from '@/components/CallbackForm'

/**
 * Encart "On vous rappelle gratuitement" : lève la friction pour les
 * prospects qui ne veulent ni appeler ni remplir un long formulaire.
 * Réutilisable sur la home et la page contact.
 */
export function CallbackSection() {
  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
      <div
        className="callback-grid"
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3.5rem',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginBottom: '1rem' }}>
            Rappel gratuit
          </div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            On vous rappelle <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>gratuitement.</em>
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
            Pas le temps d&apos;écrire ? Laissez votre numéro et le moment qui vous arrange, on s&apos;occupe du reste.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
          <CallbackForm />
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .callback-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
