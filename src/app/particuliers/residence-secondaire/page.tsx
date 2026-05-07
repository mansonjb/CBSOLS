import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Résidence Secondaire Île de Ré, Oléron | Pose Sol Clé en Main, Photos d\'Avancement',
  description: "Vous habitez Paris, Bordeaux, Nantes : nous gérons les travaux de votre résidence secondaire à distance. Île de Ré, Île d'Oléron, La Rochelle. Photos d'avancement, livraison clé en main.",
  alternates: { canonical: 'https://cbsols.fr/particuliers/residence-secondaire' },
}

const cas = [
  { title: 'Île de Ré (Saint-Martin, Ars, La Couarde, Le Bois-Plage)', desc: 'Maisons de famille, longères rénovées, villas vue mer : pose de moquette, PVC pièces humides, tapis sur mesure. Spécialité humidité côtière (gestion du salin, ventilation des supports).' },
  { title: 'Île d\'Oléron & La Tremblade', desc: 'Résidences secondaires et locations saisonnières. Pose en intersaison (octobre à mars) pour ne pas pénaliser la saison d\'exploitation si vous louez.' },
  { title: 'La Rochelle, Châtelaillon, Aytré', desc: 'Appartements bord de mer, maisons de ville, résidences haut de gamme. Intervention rapide pour les sinistres ou rénovations urgentes.' },
  { title: 'Marais de Charente, Brouage, Marennes', desc: 'Maisons anciennes, parquets fatigués, escaliers en pierre, sols à reprendre intégralement. Diagnostic du support et solutions adaptées au bâti.' },
]

const livrable = [
  { num: '01', title: 'Visite à votre place', desc: "Vous nous donnez les clés, ou un voisin/agent immobilier nous ouvre. Nous mesurons, photographions, identifions les contraintes et vous envoyons un compte-rendu détaillé sous 48h." },
  { num: '02', title: 'Devis envoyé par mail', desc: "Devis détaillé par poste avec photos du support, recommandations produits, alternatives selon budget. Validation à distance par signature électronique." },
  { num: '03', title: 'Choix matériau à distance', desc: "Échantillons envoyés à votre domicile principal pour validation, ou RDV showroom à Villedoux si vous passez en Charente-Maritime. Visio possible avec écran sur les nuanciers." },
  { num: '04', title: 'Photos d\'avancement quotidiennes', desc: "Pendant le projet, nous vous envoyons par WhatsApp ou mail des photos en début et fin de journée : préparation, support, première pose, finitions. Vous suivez sans vous déplacer." },
  { num: '05', title: 'Livraison clé en main', desc: 'Projet propre, gravats évacués, mobilier remis en place si nous l\'avions déplacé. Vous découvrez le résultat fini lors de votre prochaine venue. Visite de réception ensemble si possible, sinon par visio.' },
  { num: '06', title: 'SAV à distance', desc: "Pour toute question post-pose : tache à traiter, joint à reprendre, conseil d'entretien. Nous vous accompagnons à distance ou repassons sur place lors de votre prochain séjour." },
]

const garanties = [
  'Référencement vérifié par hôteliers et restaurateurs locaux',
  'Photos systématiques en début et fin de chaque journée de projet',
  'Compte-rendu écrit envoyé après chaque étape clé',
  'Décennale + RC pro à jour, attestation fournie au devis',
  'Paiement échelonné : acompte / mi-projet / réception',
  'Aucun encaissement avant validation des photos finales par vous',
]

const faq = [
  { q: 'Vous prenez les clés en notre absence ?', a: "Oui, nous le faisons régulièrement. Soit vous nous confiez un jeu de clés en main propre lors d'un précédent passage, soit un voisin de confiance, un gardien ou votre agent immobilier nous ouvre. Nous fonctionnons par confiance progressive : pour un premier projet, nous préférons un intermédiaire local sur place le premier jour." },
  { q: 'Comment je valide les choix matériau sans venir au showroom ?', a: "Trois options. (1) Vous venez au showroom à Villedoux lors d'un passage en Charente-Maritime. (2) Nous vous envoyons des échantillons physiques à votre domicile principal. (3) Visio avec écran sur les nuanciers et lumière naturelle. Pour les projets premium, l'option 1 ou 2 est toujours préférable." },
  { q: 'Quel est le mode de paiement le plus courant ?', a: "Acompte à la commande (30%), versement intermédiaire à mi-projet (40%), solde à la réception après validation des photos finales (30%). Virement, chèque ou paiement en ligne sécurisé. Aucune carte bancaire à distance, jamais." },
  { q: 'Vous intervenez en intersaison pour ne pas pénaliser la location ?', a: "Oui, c'est même la période privilégiée pour les résidences secondaires en location. Nous calons les projets entre octobre et mars (hors vacances scolaires si la maison est louée Toussaint/Noël/février). Possibilité d'intervention sur 2 weekends consécutifs si la fenêtre est étroite." },
  { q: 'Et si je veux assister à une partie du projet ?', a: "Aucun problème, c'est même bienvenu pour le démarrage et la réception. Beaucoup de nos clients viennent un weekend en début de projet (validation matériau in situ) et un autre à la livraison. Le reste se gère à distance." },
  { q: 'Vous travaillez avec quelles agences immobilières / conciergeries ?', a: "Nous sommes recommandés par plusieurs agences et conciergeries de l'Île de Ré et de La Rochelle. Nous pouvons vous mettre en relation directe avec un client précédent qui habite hors région, sur demande." },
]

export default function ResidenceSecondairePage() {
  return (
    <div style={{ paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/particuliers" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Particuliers</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Résidence secondaire</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.25rem' }}>
                Spécialité Île de Ré, Oléron, La Rochelle
              </span>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Votre résidence secondaire,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>gérée en votre absence.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Vous habitez Paris, Nantes, Bordeaux, Lyon : votre maison sur l&apos;Île de Ré, à Oléron ou à La Rochelle a besoin d&apos;un nouveau sol. Nous gérons le projet de A à Z, photos d&apos;avancement régulières, livraison clé en main. Vous découvrez le résultat à votre prochaine venue.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=residence-secondaire" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">RDV showroom</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/particuliers/photo-4.jpg" alt="Résidence secondaire avec parquet et terrazzo" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* Cas géographiques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Toute la côte <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>charentaise.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em', lineHeight: 1.35 }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livrable / process clé en main */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche clé en main</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Six étapes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>sans vous déplacer.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {livrable.map((p) => (
              <div key={p.num} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{p.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties confiance */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Garanties pour les clients à distance</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Confier sa maison <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>en toute confiance.</em>
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {garanties.map((g, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--dark-2)', lineHeight: 1.65, padding: '0.5rem 0', borderBottom: i < garanties.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0, fontSize: '1.1rem' }}>✓</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes des clients à distance</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Vos vraies questions, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>nos réponses honnêtes.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faq.map((f, i) => (
              <details key={i} style={{ border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', padding: '1.25rem 1.5rem' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{f.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75, margin: '1rem 0 0' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre maison vous attend, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>laissez-nous faire.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Devis gratuit après visite sur place. Île de Ré, Île d&apos;Oléron, La Rochelle, toute la Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=residence-secondaire" variant="primary" size="md">Demander un devis</Button>
            <Button href="/showroom" variant="outline" size="md">RDV showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Ou appelez Valentin : <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
