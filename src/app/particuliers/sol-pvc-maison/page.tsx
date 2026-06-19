import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Sol PVC Maison Particulier | Salle de Bains, Cuisine, Buanderie',
  description: "Pose de sol PVC haut de gamme pour particuliers : salle de bains, cuisine, buanderie, sous-sol, garage aménagé. 100% waterproof, marques Gerflor & objectflor. Devis sur mesure.",
  alternates: { canonical: 'https://cbsols.fr/particuliers/sol-pvc-maison' },
}

const cas = [
  { title: 'Salle de bains & douche', desc: 'Vinyles design ou lame PVC : 100% étanche, pas de joints qui noircissent, marche pieds nus, antidérapant R10 ou R11 selon usage.' },
  { title: 'Cuisine ouverte ou fermée', desc: 'Imitation parquet, béton ciré ou pierre, en lames LVT haute résistance. Hygiène maximale, nettoyage facile, durée de vie 15-20 ans.' },
  { title: 'Buanderie, cellier, sous-sol', desc: 'Résiste à l\'humidité, aux produits ménagers, à la machine à laver qui vibre. Une fois posé, vous l\'oubliez.' },
  { title: 'Garage aménagé, atelier maison', desc: 'PVC industriel résistant aux roulettes, aux taches d\'huile, aux variations de température. Idéal home gym, atelier, espace bricolage.' },
]

const produits = [
  { name: 'Gerflor Taralay Premium', desc: 'PVC en lés soudés à chaud, classement U4P3, antidérapant R10. La solution pièces humides et zones à fort passage.' },
  { name: 'objectflor LVT (Lames & Dalles)', desc: 'Imitations bois, pierre, béton de très haute qualité visuelle. Pose libre ou collée selon le projet.' },
  { name: 'Gerflor Insight & Creation', desc: 'Lames LVT premium pour pièces de vie. Esthétique parquet sans les contraintes du bois (humidité, entretien).' },
]

const process = [
  { step: 'Visite', desc: 'État des lieux du support actuel (carrelage, dalle béton, ancien lino), prise de mesures, identification des contraintes.' },
  { step: 'Showroom', desc: 'Choix du produit en showroom : pose à plat des lames, comparaison des veinages, test de la sensation pieds nus.' },
  { step: 'Devis', desc: 'Devis sous 48h, ragréage inclus. Décomposition claire : produit, préparation support, pose, finitions.' },
  { step: 'Pose', desc: 'Préparation support, ragréage P3 ou fibré selon support, pose collée ou plombante, soudure à chaud pour les pièces humides.' },
  { step: 'Réception', desc: 'Visite avec vous, contrôle des soudures et finitions, remise des certificats produits et conseils d\'entretien.' },
]

const faq = [
  { q: 'Le PVC est-il un produit haut de gamme ?', a: "Le PVC d'entrée de gamme est médiocre — c'est ce qu'on trouve en grande surface. Les gammes professionnelles que nous posons (Gerflor Taralay, objectflor LVT) sont à un autre niveau : épaisseur 5-8 mm, couche d'usure 0,55 à 0,8 mm, durée de vie 15-25 ans. Visuellement et tactilement, c'est très loin du lino bas de gamme." },
  { q: 'Peut-on poser du PVC sur du carrelage existant ?', a: "Oui, dans la majorité des cas. Le carrelage doit être plan, propre et stable. Un ragréage de surfaçage est presque toujours nécessaire pour neutraliser les joints (sinon ils ressortent à travers le PVC). Nous évaluons cela à la visite." },
  { q: 'Le PVC en salle de bains, c\'est vraiment étanche ?', a: "Oui, à condition d'utiliser du PVC en lés (rouleaux) avec soudure à chaud des joints. Les lames LVT ne sont pas adaptées à la douche italienne. Nous vous orientons vers le bon produit selon votre configuration." },
  { q: 'Compatibilité chauffage au sol ?', a: "Oui, la plupart des PVC professionnels sont compatibles chauffage au sol (résistance thermique faible). À vérifier sur la fiche produit : nous ne posons que des produits validés." },
  { q: 'Combien coûte un PVC pour une salle de bains de 8 m² ?', a: "À titre indicatif, comptez 60 à 130 €/m² posé pour du PVC pièces humides haut de gamme (produit + ragréage + pose + soudure). Le devis précis est gratuit après visite." },
]

export default function SolPvcMaisonPage() {
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sol PVC maison</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Sol PVC pour la maison<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>100% waterproof.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Salle de bains, cuisine, buanderie, sous-sol, garage aménagé : nous posons les gammes Gerflor et objectflor que nous installons aussi en cuisine professionnelle. Étanche, esthétique, durable. Pas de PVC discount, pas de pose bâclée.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=sol-pvc-maison" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">RDV showroom</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/particuliers/photo-2.jpg" alt="Sol PVC parquet dans une cuisine ouverte" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* Cas */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle pièce ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre pièces où le PVC <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>simplifie la vie.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Produits que nous posons chez les particuliers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Les gammes que nous posons aussi <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>en cuisine professionnelle.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {produits.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < produits.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>aucune surprise.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#fff' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.step}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Sol PVC maison, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses techniques.</em>
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
            Une SDB ou cuisine <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>à refaire ?</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Devis sur mesure, gratuit, après visite. La Rochelle, Île de Ré, Île d&apos;Oléron, Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-maison" variant="primary" size="md">Demander un devis</Button>
            <Button href="/showroom" variant="outline" size="md">RDV showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Ou <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
