import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Tarifs | Pourquoi Nous Ne Publions Pas de Grille de Prix — CB Sols',
  description:
    "Chez CB Sols chaque projet est sur mesure : surface, matériau, support, accessibilité, contraintes locales. Plutôt qu'une grille trompeuse, nous faisons un vrai devis gratuit sous 48 h.",
  alternates: { canonical: 'https://cbsols.fr/tarifs' },
}

const reasons = [
  {
    title: 'Chaque chantier a ses contraintes',
    body:
      "Un sol PVC en cuisine de restaurant (plinthes relevées, soudure à chaud, norme EN 13845) n'a rien à voir avec un LVT posé en bureau. Appliquer une même fourchette serait trompeur.",
  },
  {
    title: 'Le support conditionne 30 % du prix',
    body:
      "Un ragréage fibré sur vieux plancher bois, un DPE humide, une chape défaillante : ces préparations invisibles peuvent doubler le poste de pose. Impossible à chiffrer sans avoir vu le support.",
  },
  {
    title: 'Les matériaux ont 20 niveaux de gamme',
    body:
      "Moquette bureau premier prix : 22 €/m² posé. Moquette EGE Contract sur mesure pour suite hôtelière 5★ : 150 €/m² posé. Même service, 7× d'écart. Une fourchette moyenne n'aurait aucun sens.",
  },
  {
    title: 'La surface change le prix au m²',
    body:
      "50 m² dans un appartement en ville vs 800 m² dans un hall d'hôtel : le tarif au mètre carré peut varier de 30 %. Le déplacement, la logistique, la mobilisation d'équipe sont proportionnés à la taille du chantier.",
  },
  {
    title: "L'accessibilité joue sur les délais",
    body:
      "Étage sans ascenseur, livraison en centre-ville piéton, horaires commerçants, pose de nuit en hôtel ouvert : ces contraintes ajoutent des heures et du matériel. Impossible à tarifer en théorie.",
  },
  {
    title: "Nous préférons l'honnêteté au clickbait",
    body:
      "Beaucoup de sites affichent « à partir de 15 €/m² » pour attirer. Une fois sur place, le devis final triple. Nous refusons cette mécanique. Un devis CB Sols est toujours le prix réel, sans surprise.",
  },
]

const steps = [
  { num: '01', title: 'Premier échange', body: "Téléphone, WhatsApp ou formulaire. Vous nous décrivez votre espace, son usage, vos attentes." },
  { num: '02', title: 'Visite technique gratuite', body: "Nous venons sur place pour mesurer, diagnostiquer le support, identifier les contraintes. Gratuit, sans engagement." },
  { num: '03', title: 'Sélection en showroom', body: "Vous venez à Villedoux choisir les matériaux parmi 500+ échantillons. Nous vous guidons selon votre usage et votre budget." },
  { num: '04', title: 'Devis détaillé sous 48 h', body: "Métrés, fourniture, préparation support, pose, main d'œuvre, TVA : tout est lisible ligne par ligne. Pas de forfait opaque." },
]

const garanties = [
  { title: 'Déplacement et devis gratuits', desc: "Partout en Charente-Maritime, Île de Ré et Île d'Oléron. Sans condition d'engagement." },
  { title: 'Prix ferme et définitif', desc: "Le chiffre du devis est celui de la facture. Pas de supplément surprise au milieu du chantier." },
  { title: 'Détail lisible', desc: 'Fourniture, pose, préparation support, TVA : chaque poste est isolé. Vous savez exactement ce que vous payez.' },
  { title: 'Paiement à la fin', desc: 'Acompte raisonnable (20 à 30 %), solde à la réception du chantier après validation.' },
  { title: 'Garantie décennale et Qualibat', desc: 'Toutes nos poses sont couvertes. Attestations fournies sur demande.' },
]

export default function TarifsPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Tarifs</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Pourquoi nous ne publions pas<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>de grille de prix.</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            Chez CB Sols, chaque projet est traité <strong style={{ color: 'var(--dark)' }}>individuellement</strong>. Afficher une fourchette générique serait au mieux imprécis, au pire trompeur. Nous préférons prendre le temps de comprendre votre chantier avant de chiffrer.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2.5rem' }}>
            Notre engagement : <strong style={{ color: 'var(--dark)' }}>devis détaillé et gratuit sous 48 h</strong>, sans frais cachés ni révision post-signature.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, borderRadius: '999px' }}>
              Demander mon devis
            </Link>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 500 }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 6 raisons */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Notre approche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
            Six raisons pour lesquelles un devis sur mesure est plus juste.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {reasons.map((r, i) => (
              <div key={r.title} style={{ padding: '2rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '1rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process de devis */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Notre process de devis</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Comment nous chiffrons un projet.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {steps.map((step) => (
              <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 700, marginBottom: '0.75rem' }}>{step.num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>{step.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Ce que vous êtes certain d&apos;avoir</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Nos engagements en matière de prix.
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {garanties.map((g) => (
              <li key={g.title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.5rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.3rem' }}>{g.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{g.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(196,113,74,0.1) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Parlons de <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>votre projet.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Décrivez-nous votre espace. Nous revenons vers vous sous 48 h avec un devis précis, sans surprise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href={`/contact?from=tarifs`} style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, borderRadius: '999px' }}>
              Demander un devis
            </Link>
            <Link href="/showroom" style={{ display: 'inline-block', padding: '0.95rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px', fontWeight: 600 }}>
              Visiter le showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
