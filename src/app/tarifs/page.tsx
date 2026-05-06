import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Tarifs | Pourquoi Nous Ne Publions Pas de Grille de Prix',
  description:
    "Chez CB Sols chaque projet est sur mesure : surface, matériau, support, accessibilité, contraintes locales. Plutôt qu'une grille trompeuse, nous faisons un vrai devis gratuit sous 48 h.",
  alternates: { canonical: 'https://cbsols.fr/tarifs' },
}

const reasons = [
  {
    title: 'Chaque projet a ses contraintes',
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
      "Moquette bureau premier prix : 30 €/m² posé. Moquette EGE Contract sur mesure pour suite hôtelière 5★ : 150 €/m² posé. Même service, 7× d'écart. Une fourchette moyenne n'aurait aucun sens.",
  },
  {
    title: 'La surface change le prix au m²',
    body:
      "50 m² dans un appartement en ville vs 800 m² dans un hall d'hôtel : le tarif au mètre carré peut varier de 30 %. Le déplacement, la logistique, la mobilisation d'équipe sont proportionnés à la taille du projet.",
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
  { title: 'Prix ferme et définitif', desc: "Le chiffre du devis est celui de la facture. Pas de supplément surprise au milieu du projet." },
  { title: 'Détail lisible', desc: 'Fourniture, pose, préparation support, TVA : chaque poste est isolé. Vous savez exactement ce que vous payez.' },
  { title: 'Paiement à la fin', desc: 'Acompte de 30 %, solde à la réception du projet après validation.' },
  { title: 'Garantie décennale', desc: 'Toutes nos poses sont couvertes. Attestations fournies sur demande.' },
]

export default function TarifsPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Tarifs</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Pourquoi nous ne publions pas<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>de grille de prix.</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            Chez CB Sols, chaque projet est traité <strong style={{ color: 'var(--dark)' }}>individuellement</strong>, qu&apos;il soit pour un particulier ou un professionnel. Afficher une fourchette générique serait au mieux imprécis, au pire trompeur. Nous préférons prendre le temps de comprendre votre projet avant de chiffrer.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '1.25rem' }}>
            Notre engagement : <strong style={{ color: 'var(--dark)' }}>devis détaillé et gratuit sous 48 h</strong>, sans frais cachés ni révision post-signature.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2.5rem', fontStyle: 'italic' }}>
            Pour vous aider à <strong style={{ color: 'var(--dark)', fontStyle: 'normal' }}>budgétiser en amont</strong>, nos <Link href="/guide" style={{ color: 'var(--terra)', textDecoration: 'underline' }}>guides chiffrés</Link> donnent les fourchettes du marché poste par poste (pose, ragréage, fourniture). Ce sont des repères pédagogiques, pas notre grille tarifaire : votre prix réel sortira du devis.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary" size="lg">Demander mon devis</Button>
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

      {/* Décryptage devis, 6 postes */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Les 6 postes d&apos;un devis sérieux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Que doit contenir <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>un devis de pose de sol ?</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Nos devis suivent les indications du <strong style={{ color: 'var(--dark)' }}>DTU 53.12</strong>, référentiel national des bonnes pratiques pour la pose de revêtements de sol collés. Chaque poste est isolé pour que vous puissiez comparer rationnellement et comprendre où va votre argent.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                num: '01',
                title: 'La dépose',
                body: "Différente selon le type de revêtement et son poids. Un parquet stratifié est un déchet lourd, plus coûteux au m² retraité qu'une moquette. Évacuation déchetterie incluse, attestation de retraitement disponible.",
              },
              {
                num: '02',
                title: 'La barrière anti-humidité',
                body: "Obligatoire sur les rez-de-chaussée sans polyane sous chape, vide sanitaire ou cave ventilée. Sa présence ou non doit être explicite, sans elle, garantie décennale compromise.",
              },
              {
                num: '03',
                title: 'Le ragréage',
                body: "Obligatoire dans la quasi-totalité des projets de rénovation. Type P3 standard pour les supports béton, fibré (plus cher) sur supports bois ou pour les fortes épaisseurs. Ce qui fait la différence entre une pose qui dure 15 ans et une qui marque dès 6 mois.",
              },
              {
                num: '04',
                title: 'La fourniture',
                body: "Le prix varie avec le type (PVC lés/dalles/lames, moquette dalles ou en lés), la marque, et la quantité, plus c'est grand, moins c'est cher au m². Nous réceptionnons la matière, vérifions quantités et coloris (lots fabricant), débit en atelier.",
              },
              {
                num: '05',
                title: 'La pose',
                body: "Variable selon le revêtement, la quantité, le type de pose (droite vs bâton rompu vs incrustation d'arrondis), les difficultés d'acheminement et le stationnement. Une pose simple et une pose technique n'ont rien à voir en temps passé.",
              },
              {
                num: '06',
                title: 'Accessoires & accessibilité',
                body: "Nez de marche et barres de seuil selon la matière retenue : laiton (haut de gamme), aluminium (standard), inox brossé. Pour les ERP, mise en accessibilité PMR avec clous podotactiles obligatoires.",
              },
            ].map((p) => (
              <div key={p.num} style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '8px' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>
                  {p.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* Encart : équipe interne */}
          <div style={{ marginTop: '2.5rem', padding: '2rem 2.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '10px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }} className="no-subcontract-card">
            <div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem', fontWeight: 700 }}>
                Le facteur humain
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>
                Une équipe de soliers-moquettistes qualifiés. Aucun sous-traitant.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
                Chaque projet CB Sols est posé par notre propre équipe, supervisé par Valentin Prévoteau. Cette continuité garantit le respect du cahier des charges initial, des plannings, et la levée rapide des réserves. Une entreprise qui sous-traite peut afficher un prix plus bas, l&apos;écart paie le sous-traitant et la marge intermédiaire.
              </p>
            </div>
          </div>

          {/* Lien vers guide complet */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link
              href="/guide/comprendre-un-devis-pose-de-sol"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.95rem 1.75rem',
                border: '1.5px solid var(--terra)',
                color: 'var(--terra)',
                fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                textDecoration: 'none', fontWeight: 700, borderRadius: '999px',
              }}
            >
              Lire le guide complet : comment décrypter un devis →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .no-subcontract-card { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* CTA final */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Parlons de <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>votre projet.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Décrivez-nous votre espace. Nous revenons vers vous sous 48 h avec un devis précis, sans surprise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href={`/contact?from=tarifs`} variant="primary" size="lg">Demander un devis</Button>
            <Button href="/showroom" variant="outline" size="md">Visiter le showroom</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
