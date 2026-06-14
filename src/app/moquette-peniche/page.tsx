import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moquette Péniche | Habitation et Commerce Fluvial',
  description: "Pose de moquette pour péniche habitée et péniche commerciale (restaurant, événementiel) en Charente-Maritime. Humidité fluviale, classement feu ERP fluvial, surfaces planes.",
  alternates: { canonical: 'https://cbsols.fr/moquette-peniche' },
  openGraph: {
    title: 'Moquette Péniche | La Rochelle, Charente',
    description: "Revêtements de sol pour péniches habitées et péniches restaurant. Polypropylène, laine traitée, PVC marine. Conforme classement feu ERP fluvial.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-peniche.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Salon & espace de vie principal', desc: "Cœur de la péniche habitée : large, traversant, parfois avec poêle à bois ou cuisine ouverte. Surface généralement plane, calepinage proche d’une pose appartement, mais sous-couche adaptée à l’humidité du fond de cale." },
  { title: 'Cabines & couchettes', desc: "Surfaces petites, beaucoup d’angles autour des couchages intégrés. Confort acoustique recherché : la péniche transmet les bruits d’une cabine à l’autre par la coque acier. Moquette épaisse, sous-couche mousse fermée." },
  { title: 'Salle de bain & cuisine de bord', desc: "Zones humides. Sol PVC marine soudé à chaud, jonction étanche aux murs, pas de feutre. Sur péniche, la condensation est forte au niveau de la flottaison : aucune tolérance d’infiltration." },
  { title: 'Péniche commerciale (restaurant, événementiel)', desc: "Cas particulier : classement feu ERP fluvial obligatoire, accueil du public, usage intensif. Moquette Bfl-s1 minimum, dossier sécurité ERP à fournir à la commission. Nous accompagnons sur la documentation matériaux." },
]

const produits = [
  { name: 'Moquette polypropylène fluvial 1100 g/m²', desc: "Standard péniche habitée. Insensible à l’humidité du fond de cale, séchage rapide en cas d’infiltration localisée, classement Bfl-s1. Coloris larges, durée de vie 10-15 ans en usage résidentiel à quai." },
  { name: 'Laine vierge traitée anti-feu', desc: "Pour les péniches d’habitation luxe à quai en eau calme, chauffées et ventilées. Toucher chaleureux, vieillissement noble. Plus sensible à l’humidité que le polypropylène : à réserver aux espaces vraiment maîtrisés." },
  { name: 'Sol PVC marine soudé à chaud', desc: "Indispensable en cuisine de bord et salle de bain. Soudure à 200°C des joints, étanchéité totale, hygiène. Pour péniche restaurant : aussi en cuisine professionnelle, classement R10-R11 antidérapant si plonge." },
]

const process = [
  { step: 'Visite à quai', desc: "Relevé de toutes les pièces, photos, mesure d’humidité du support (souvent contre-plaqué marine ou parquet sur lambourdes). Diagnostic des éventuelles infiltrations passées." },
  { step: 'Cas d’usage', desc: "Échange sur l’usage : résidence principale à quai, résidence secondaire, location courte durée, péniche commerciale ERP. La réglementation change radicalement entre ces cas." },
  { step: 'Devis & documentation', desc: "Devis détaillé sous 48h. Pour les ERP fluvial, dossier matériaux (PV feu, fiches techniques) fourni pour la commission de sécurité." },
  { step: 'Confection atelier', desc: "Découpe en atelier Villedoux selon calque. Sur péniche, les surfaces sont plus régulières que sur bateau : confection plus rapide, mais nous gardons la rigueur calepinage marine." },
  { step: 'Pose à quai', desc: "Pose à quai, colle polyuréthane adaptée fluvial, soudure à chaud pour les sols PVC. La péniche étant stable (pas de roulis), nous travaillons dans des conditions confortables proches d’un chantier appartement." },
]

const faq = [
  { q: 'Quelle différence entre une péniche habitée et un appartement ?', a: "Trois différences principales pour le revêtement de sol. Premièrement, l’humidité ambiante est plus forte (proximité de l’eau, condensation), même sans sel. Deuxièmement, le poids embarqué importe moins qu’en plaisance (la péniche est à quai en permanence) : on peut monter en grammage et en confort. Troisièmement, les supports sont souvent moins plans qu’un appartement : ragréage local fréquent, parfois remise à niveau." },
  { q: 'Faut-il un classement feu spécifique sur une péniche d’habitation ?', a: "Pour une péniche d’habitation privée à quai, la réglementation est moins stricte qu’en plaisance mer (pas d’IMO FTP). Nous recommandons néanmoins Bfl-s1 par sécurité, un incendie sur péniche est un risque réel, l’évacuation par une seule passerelle complique tout. Pour une péniche commerciale (restaurant, salle de réception, hôtel), le classement feu ERP fluvial s’applique : Bfl-s1 minimum, justificatifs à fournir à la commission de sécurité." },
  { q: 'Peut-on poser de la moquette sur tout le sol d’une péniche ?', a: "Non, et c’est une erreur courante. La cuisine de bord et la salle de bain doivent rester en sol PVC marine soudé, étanche. Le reste (salon, cabines, coursives) peut être en moquette. Cette répartition garantit la longévité de l’ensemble : la moquette ne supporte pas l’eau stagnante, point." },
  { q: 'Comment gérer l’humidité du fond de cale ?', a: "Avant toute pose, nous vérifions le support. Si l’humidité du support dépasse 4% (mesure au testeur capacitif), on temporise ou on installe une barrière vapeur. Sur péniche acier ancienne, il arrive de devoir traiter la corrosion intérieure avant pose : ce n’est pas notre métier mais nous coordonnons avec le menuisier de marine concerné." },
  { q: 'Combien de temps prend une pose sur une péniche entière ?', a: "Pour une péniche habitée de 25-30 mètres avec 3-4 chambres, salon, cuisine, salle de bain : comptez 4 à 6 jours en atelier (confection) puis 3 à 5 jours sur place. Le timing dépend beaucoup de l’état du support et de la dépose éventuelle de l’ancien revêtement." },
  { q: 'Faites-vous aussi les péniches commerciales (restaurant, événementiel) ?', a: "Oui. Nous avons travaillé sur des péniches restaurant et événementielles. La logique change : ERP, usage intensif, dossiers de sécurité, planning calé sur la fermeture annuelle ou les périodes creuses. Nous fournissons toute la documentation matériaux pour le dossier ERP fluvial." },
  { q: 'Intervenez-vous hors Charente-Maritime ?', a: "Pour la péniche, oui : nous nous déplaçons sur la Charente, la Dordogne, l’Aquitaine et jusqu’aux canaux du Centre sur des chantiers structurés. La péniche étant un chantier plus prévisible qu’un bateau en mer, la logistique est plus simple. Devis sur demande avec déplacement chiffré." },
]

export default function MoquettePenichePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/moquette-peniche#service',
        name: 'Pose de moquette pour péniche habitée et péniche commerciale',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Charente-Maritime', 'Charente', 'Dordogne'],
        serviceType: 'Revêtement de sol fluvial pour péniches d’habitation et péniches ERP',
        description: 'Conception et pose de moquette polypropylène, laine traitée et sol PVC marine pour péniches. Conformité classement feu ERP fluvial pour usage commercial.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Moquette bateau', item: 'https://cbsols.fr/moquette-bateau' },
          { '@type': 'ListItem', position: 3, name: 'Moquette péniche', item: 'https://cbsols.fr/moquette-peniche' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/moquette-bateau" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Moquette bateau</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moquette péniche</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moquette péniche,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>habitation et fluvial.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Péniche habitée, péniche restaurant ou événementielle : pose de moquette et sols PVC marine adaptés à l&apos;humidité fluviale et au classement feu ERP. {company.experience} d&apos;expérience artisan, chantiers en Charente-Maritime, Charente et au-delà sur devis.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=moquette-peniche" variant="primary" size="md">Demander un devis</Button>
                <Button href="/moquette-bateau" variant="outline" size="md">Voir la page moquette bateau</Button>
              </div>
            </div>
            {/* TODO: ajouter photo intérieur péniche */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Particularité péniche</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Une péniche, ce n&apos;est ni tout à fait un bateau ni tout à fait un appartement. C&apos;est un appartement humide qui flotte. Le sol doit faire le pont entre ces deux mondes. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle zone de la péniche ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre espaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre logiques.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {zones.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habitation vs commerciale */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Habitation ou commerciale ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Deux usages, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>deux cadres réglementaires.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Péniche habitation</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem' }}>Comme un appartement, en plus humide</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                Usage privé, pas d&apos;accueil du public. Réglementation feu allégée mais nous recommandons Bfl-s1 par sécurité. Liberté de matériaux : polypropylène, laine traitée, PVC marine selon zones. Confort acoustique et thermique prioritaires. Possibilité d&apos;installer des moquettes plus douces et plus chaleureuses qu&apos;en plaisance mer, car pas de sel et pas de roulis.
              </p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Péniche commerciale ERP</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem' }}>Restaurant, salle de réception, hôtel flottant</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                Classement feu ERP fluvial obligatoire : Bfl-s1 minimum, justificatifs PV feu fournis à la commission de sécurité. Usage intensif : grammage 1400 g/m² minimum, coloris foncés qui pardonnent. Pose à caler sur fermeture annuelle ou semaine creuse. Nous accompagnons sur le dossier matériaux pour la documentation ERP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après comparatif habitation vs commerciale */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en tête ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Habitation ou ERP, on connaît.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Péniche habitée, péniche restaurant, hôtel flottant : visite à quai et dossier matériaux préparé pour la commission de sécurité.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=moquette-peniche" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qui distingue la péniche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois différences par rapport <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>à la plaisance mer.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pas de sel, mais beaucoup d&apos;eau douce</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>L&apos;atmosphère fluviale est moins corrosive que l&apos;atmosphère marine (pas de sel), mais l&apos;humidité y est tout aussi élevée. Les colles polyuréthane marine fonctionnent parfaitement, on peut aussi utiliser certaines colles polyuréthane intérieur haut de gamme certifiées résistance humidité.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Surfaces planes, supports stables</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Une péniche aménagée a généralement des surfaces planes (contre-plaqué marine sur lambourdes, parfois parquet). Le calepinage se rapproche d&apos;un chantier appartement. Avantage : confection plus rapide, finitions plus fines possibles. Vigilance : tester l&apos;humidité du support avant pose.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pas de roulis, poids non limitant</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Une péniche à quai en eau calme ne roule pas. Cela autorise des moquettes plus épaisses, plus confortables, avec sous-couche plus généreuse, impensable en plaisance mer pour des raisons de poids et de comportement. C&apos;est un vrai gain pour le confort de vie à bord.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Produits que nous posons sur péniche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois matériaux, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>combinés selon les zones.</em>
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

      {/* Réglementation ERP fluvial */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Réglementation ERP fluvial</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Péniche commerciale : <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>la commission de sécurité demande des PV.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Pour une péniche restaurant, salle de réception ou hôtel flottant, le classement ERP fluvial impose une traçabilité matériau complète. Voici les pièces que la commission de sécurité demandera, et que nous fournissons dans le dossier de pose.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>PV feu Bfl-s1</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Procès-verbal d&apos;essai feu délivré par un laboratoire accrédité (Efectis, LNE) selon EN 13501-1. Document obligatoire pour tout revêtement de sol en ERP. Validité 5 ans, à renouveler lors d&apos;une rénovation.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Fiche technique fabricant</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Référence produit, composition fibre, grammage, classement feu, classement usage (UPEC, durabilité ISO). Permet de prouver l&apos;adéquation entre l&apos;usage commercial et le matériau posé.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Attestation de pose</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Document signé par le poseur certifiant que le matériau a été mis en œuvre conformément aux prescriptions du fabricant (colle, sous-couche, préparation support). Le PV feu n&apos;a pas de valeur sans cette attestation.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Décennale & responsabilité civile</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Attestation d&apos;assurance décennale et RC pro de l&apos;entreprise de pose. CB Sols les fournit systématiquement avec le devis pour toute péniche commerciale, sans demande spécifique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Préparation du support spécifique péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Préparation du support fluvial</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            L&apos;humidité du fond de cale, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>premier ennemi du sol.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Diagnostic des supports</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur une péniche aménagée, le sol existant est généralement un plancher en contreplaqué marine 18-22 mm posé sur lambourdes bois ou métal, parfois un parquet massif sur dalles flottantes. Première étape : sondage acoustique au maillet pour détecter les zones creuses (lambourde décollée, contreplaqué détrempé). Une zone creuse refaite à neuf coûte moins qu&apos;un sol qui s&apos;effondre 18 mois après pose.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Mesure d&apos;humidité résiduelle</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Testeur capacitif sur 8 à 15 points par pièce, seuil tolérance 4% sur bois, 2,5% CM sur ragréage ciment. Au-delà : déshumidificateur 48 à 72h avant pose. Sur péniche acier ancienne, l&apos;humidité provient parfois d&apos;une rouille interne du fond, diagnostic complémentaire nécessaire avec un menuisier de marine.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ragréage et mise à niveau</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Les supports de péniche sont rarement plans à 2 mm près. Ragréage autolissant fibré, épaisseur 3 à 8 mm selon les écarts. Sur péniche ancienne réaménagée, repose parfois sur un système plancher technique surélevé pour neutraliser les ondulations de coque acier. Cette préparation représente 15 à 25% du budget total chantier sur les supports compliqués.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Barrière vapeur sur zones critiques</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Au-dessus des cuves d&apos;eau, des sanitaires, des compartiments machine, on installe systématiquement une barrière vapeur polyéthylène 200 microns avant la sous-couche. Sans cette barrière, l&apos;humidité du compartiment technique remonte par capillarité et détruit la moquette en 2-3 ans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Une péniche, c&apos;est rarement plat et c&apos;est toujours humide. Une visite à quai s&apos;impose avant tout chiffrage : sans ça, on chiffre à l&apos;aveugle. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=moquette-peniche-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Charente-Maritime, Charente, Dordogne</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la visite à la livraison.</em>
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
            Moquette péniche, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses techniques.</em>
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

      {/* Entretien péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Entretien long terme</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Sur péniche, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>l&apos;humidité ne se voit pas, elle s&apos;anticipe.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Aspiration et nettoyage courant</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Aspiration deux fois par semaine en péniche habitée à plein temps. Sur péniche restaurant, aspiration quotidienne en fin de service avec aspirateur professionnel à filtration HEPA pour les zones accueil et salle.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Injection-extraction annuelle</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Nettoyage à l&apos;injection-extraction une fois par an sur péniche habitée, deux fois par an en péniche restaurant. Produit neutre sans rinçage, séchage forcé avec ventilateur pour éviter toute reprise d&apos;humidité dans la sous-couche.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Traitement antimicrobien</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur péniche stationnée en eau calme l&apos;hiver (Saintes, Marans, canaux Centre), traitement antimicrobien préventif en pulvérisation tous les 2 ans. Lutte contre l&apos;apparition de moisissures sous le sol, risque réel sur les supports bois insuffisamment ventilés.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Surveillance des jonctions humides</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Contrôle visuel annuel des jonctions moquette / PVC marine soudé en zones humides (salle de bain, cuisine). Une jonction qui se relève ou un joint qui blanchit annonce une infiltration. Réparation locale possible si détectée tôt, refonte complète si laissée filer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA après FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Péniche à équiper ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Devis sous 48h, dossier ERP inclus si besoin.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Habitation, restaurant, événementiel : visite à quai en Charente-Maritime, Charente et au-delà sur devis.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=moquette-peniche-faq" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Voir aussi</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette bateau (hub) →</Link>
            <Link href="/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette catamaran →</Link>
            <Link href="/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette yacht →</Link>
            <Link href="/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Pose de moquette →</Link>
            <Link href="/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Tapis sur mesure →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre péniche, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>refaite à neuf.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite à quai, devis sous 48h. Habitation ou commercial, dossier ERP fluvial accompagné.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-peniche" variant="primary" size="md">Demander un devis</Button>
            <Button href="/showroom" variant="outline" size="md">RDV showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Ou <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
