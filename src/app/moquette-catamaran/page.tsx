import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moquette Catamaran | Carré, Cabines, Coques | CB Sols La Rochelle',
  description: "Pose de moquette marine pour catamaran à La Rochelle : Lagoon, Bali, Fountaine Pajot, Catana, Outremer. Polypropylène Bfl-s1, colle polyuréthane, soudure à chaud.",
  alternates: { canonical: 'https://cbsols.fr/moquette-catamaran' },
  openGraph: {
    title: 'Moquette Catamaran | La Rochelle',
    description: "Spécialiste moquette marine pour catamaran : carré, cabines, deux coques. Confection atelier, pose à quai au Port des Minimes ou La Flotte.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-catamaran.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Carré principal', desc: "La pièce centrale du catamaran, exposée plein soleil par les baies vitrées, traversée toute la journée. Moquette polypropylène 1100 g/m² classement Bfl-s1, calepinée pour épouser la bavette de poutre centrale et les passages d’escalier vers chaque coque." },
  { title: 'Cabines propriétaires (coques)', desc: "Cabines généralement situées à l’arrière de chaque coque, plus humides que le carré (proximité de la flottaison, condensation accrue). Moquette respirante, sous-couche mousse à cellules fermées, jamais de feutre absorbant." },
  { title: 'Cabines invités & couchettes avant', desc: "Espaces compacts, beaucoup d’angles, souvent sous trappes de pont. Découpe au calque, joints soudés à chaud, finitions soignées sur les seuils." },
  { title: 'Coursives & marches', desc: "Zones de circulation très sollicitées, parfois mouillées (descente depuis le cockpit). Combinaison possible moquette + sol PVC marine soudé pour les zones humides immédiates." },
]

const produits = [
  { name: 'Moquette polypropylène marine 1100 g/m²', desc: "Standard catamaran de croisière. Insensible à l’humidité, séchage rapide, classement feu Bfl-s1. Coloris sable, gris, anthracite : des classiques qui supportent le rythme charter ou famille." },
  { name: 'Moquette polyamide nylon traité', desc: "Pour les propriétaires qui veulent un toucher plus doux dans le carré. Traitement ignifuge intégré, résistance aux UV améliorée. À réserver aux unités bien ventilées et climatisées." },
  { name: 'Sol PVC marine soudé pour cuisine de bord', desc: "Galley exposée à l’eau, aux projections, à la chaleur. Sous-couche mousse fermée, joints soudés à chaud à 200°C, étanchéité totale. Compatible MED pour usage charter commercial." },
]

const process = [
  { step: 'Visite à quai', desc: "Relevé sur les deux coques + carré, photos systématiques, mesure d’humidité du support bois ou composite. Identification des points durs : bavette de poutre, passages techniques, trappes." },
  { step: 'Calque & sélection', desc: "Calque précis de chaque zone. En parallèle, vous choisissez la matière en showroom Villedoux ou par envoi d’échantillons." },
  { step: 'Devis détaillé', desc: "Devis chiffré par zone (carré, cabine bâbord, cabine tribord, etc.). Vous arbitrez si vous voulez tout faire ou par étapes." },
  { step: 'Confection atelier', desc: "Découpe en atelier selon calque, pré-assemblage, tests d’ajustement. Le bateau n’est pas immobilisé pendant cette phase (3 à 7 jours selon surface)." },
  { step: 'Pose à quai', desc: "1 à 3 jours sur le bateau selon surface : Port des Minimes, La Pallice, La Flotte, Saint-Martin. Colle polyuréthane marine, soudure à chaud, finitions, restitution propre." },
]

const refitSteps = [
  { n: '01', t: 'Audit à quai (J0)', d: "Inspection du carré, des quatre cabines et des coursives. Mesure d'humidité du support composite (testeur capacitif, seuil 4%). Photos de chaque trappe technique, chaque bavette, chaque jonction de cloison." },
  { n: '02', t: 'Calque et calepinage (J0-J2)', d: "Calque papier kraft par zone, transfert sur les plans atelier. Calepinage des lés en tenant compte du sens de fibre, des raccords sur la poutre centrale et des chutes minimisées." },
  { n: '03', t: 'Dépose ancien revêtement (J3-J4)', d: "Retrait de l'ancien sol, raclage des résidus de colle acrylique sur le contreplaqué marine ou le gel coat. Diagnostic d'éventuelles infiltrations sous le sol." },
  { n: '04', t: 'Préparation du support (J4)', d: "Dégraissage à l'alcool isopropylique, ponçage léger, application d'un primaire polyuréthane compatible polyester. Séchage 2 à 4 heures selon température." },
  { n: '05', t: 'Confection atelier (J5-J10)', d: "Découpe des lés selon calque, pré-assemblage, contrôle dimensionnel. Soudure à chaud des joints en atelier sur les grandes pièces du carré." },
  { n: '06', t: 'Pose à quai (J11-J13)', d: "Encollage zone par zone, marouflage au rouleau lourd, remise en place des trappes de visite. Soudure à chaud des joints restants directement sur le bateau." },
  { n: '07', t: 'Finitions et seuils (J13)', d: "Joints de finition à la jonction des cloisons, profilés inox sur les seuils de cabines, nettoyage à l'aspirateur professionnel. Aucune trace de colle visible." },
  { n: '08', t: 'Réception (J14)', d: "Visite avec le propriétaire ou skipper. Remise des PV feu matériaux, fiche d'entretien personnalisée, garantie pose 2 ans. Bateau utilisable sous 24h." },
]

const faq = [
  { q: 'Quels modèles de catamaran avez-vous déjà équipés ?', a: "Nous intervenons régulièrement sur les Lagoon (380, 42, 46, 50), les Bali (4.2, 4.6, 5.4), les Fountaine Pajot (Astrea, Saona, Elba), ainsi que sur des Catana et Outremer pour la croisière hauturière. Chaque modèle a ses spécificités : la poutre centrale Lagoon est différente d’une Bali à plancher ouvert, le calepinage change complètement." },
  { q: 'Faut-il déposer l’ancienne moquette avant pose ?', a: "Oui, systématiquement. La dépose permet d’inspecter le support, vérifier qu’il n’y a pas eu d’infiltration ou de moisissure, traiter si besoin. Une pose par-dessus ancienne moquette est un raccourci qui se paie 18 mois plus tard. Nous comptons la dépose dans le devis, sans surfacturer." },
  { q: 'Combien de temps prend la pose sur un Lagoon 42 ou équivalent ?', a: "Pour un catamaran de 12-14 mètres avec carré + 4 cabines + coursives, comptez 5 à 7 jours en atelier (confection) puis 2 à 3 jours à quai pour la pose. Le bateau est utilisable à partir du soir de la dernière journée de pose (séchage colle polyuréthane 24h)." },
  { q: 'La moquette est-elle compatible avec un usage charter intensif ?', a: "Oui, à condition de monter en grammage (1100 à 1400 g/m²) et de choisir un coloris foncé qui pardonne. Pour les flottes de charter à La Rochelle, nous proposons des cycles d’entretien (injection-extraction) tous les 2 ans pour préserver l’investissement." },
  { q: 'Que se passe-t-il en cas de dégât d’eau localisé ?', a: "C’est l’avantage du polypropylène : il sèche en 24-48h à l’air et au ventilateur sans se déformer. Si la zone est trop atteinte (eau croupie sous le sol pendant des semaines), nous pouvons remplacer uniquement le lé concerné. C’est tout l’intérêt du calepinage par zone." },
  { q: 'Posez-vous aussi sur catamaran neuf en sortie de chantier ?', a: "Oui. Plusieurs propriétaires nous confient le revêtement de leur catamaran neuf dès la livraison, pour remplacer la moquette d’origine (souvent posée pour respecter un cahier des charges générique, pas optimale pour l’usage qu’ils en feront)." },
  { q: 'Intervenez-vous hors saison estivale ?', a: "C’est même préférable. La haute saison (mai-septembre) est compliquée pour les propriétaires utilisateurs. Nous faisons la majorité de nos chantiers catamaran entre octobre et avril, en parallèle de l’hivernage ou de l’arrêt technique annuel." },
]

export default function MoquetteCatamaranPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/moquette-catamaran#service',
        name: 'Pose de moquette pour catamaran',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Port des Minimes', 'La Pallice', 'Charente-Maritime'],
        serviceType: 'Moquette marine catamaran voile et moteur',
        description: 'Conception, confection atelier et pose à quai de moquette marine pour catamaran : carré, cabines, coques. Conforme Bfl-s1 et IMO FTP.',
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
          { '@type': 'ListItem', position: 3, name: 'Moquette catamaran', item: 'https://cbsols.fr/moquette-catamaran' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moquette catamaran</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moquette catamaran,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>deux coques, un standard.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Carré, cabines, coursives : conception et pose pour catamarans de croisière, charter et propriétaires privés. Lagoon, Bali, Fountaine Pajot, Catana, Outremer. {company.experience} d&apos;expérience artisan, pose au Port des Minimes et dans tous les ports charentais.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=moquette-catamaran" variant="primary" size="md">Demander un devis</Button>
                <Button href="/moquette-bateau" variant="outline" size="md">Voir la page moquette bateau</Button>
              </div>
            </div>
            {/* TODO: ajouter photo carré catamaran */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Spécificité catamaran</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Sur un catamaran, l&apos;humidité ne vient pas que de la mer. Elle vient aussi du carré qui respire pour deux coques. C&apos;est pour ça qu&apos;on ne pose jamais de feutre. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle zone du catamaran ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre zones, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre traitements.</em>
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

      {/* Spécificités catamaran */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pourquoi le catamaran demande une approche dédiée</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois particularités qu&apos;on ne retrouve pas sur <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un voilier monocoque.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Le carré central exposé</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Le carré d&apos;un catamaran moderne (Lagoon 42, Bali 4.6, Saona 47) est un grand salon vitré quasi panoramique. Le sol y prend en plein soleil 6 à 10 heures par jour. Les fibres laines mal traitées y perdent leur teinte en deux saisons. Polypropylène teint masse, UV-stable, c&apos;est la base.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>La ventilation entre coques</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Le carré central est isolé thermiquement mais les coques restent plus fraîches : l&apos;air circule en permanence et apporte la condensation. Sous une moquette mal posée (feutre absorbant), l&apos;eau stagne entre support et fibre. On retrouve la moisissure à la dépose. Solution : mousse cellules fermées et colle qui &laquo; respire &raquo; sans laisser passer l&apos;eau.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>La bavette de poutre centrale</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur la plupart des catamarans de série, le carré comporte une poutre transversale habillée d&apos;une bavette : c&apos;est le passage technique entre les deux coques. Le calepinage doit l&apos;épouser sans tendre la fibre. Erreur courante : un seul lé coupé à l&apos;arrache, qui décolle au bout d&apos;un an. Réponse : deux ou trois lés, joint soudé à chaud, recouvrement en gorge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après spécificités */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en tête ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Parlons-en directement.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Chaque catamaran a ses contraintes. Valentin Prévoteau se déplace au Port des Minimes ou La Flotte pour relever les cotes.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=moquette-catamaran" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Marques de catamaran */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Catamarans que nous équipons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Une connaissance fine des <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>plans de pont.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {['Lagoon', 'Bali Catamarans', 'Fountaine Pajot', 'Catana', 'Outremer', 'Nautitech'].map((m) => (
              <div key={m} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)' }}>{m}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.4rem' }}>Croisière, charter, propriétaires privés</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            La majorité de la flotte de location à La Rochelle est composée de Lagoon et Bali. Nous connaissons les plans de carré, les emplacements de trappes techniques, les passages de câbles sous les coursives. Sur un Outremer ou un Catana destinés à la grande croisière, l&apos;exigence poids et performance change la donne : nous montons sur des grammages plus légers et privilégions les coloris très clairs pour limiter l&apos;échauffement.
          </p>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Produits que nous posons sur catamaran</div>
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

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Sur un Lagoon 42 ou un Bali 4.6, je peux deviner le calepinage avant même de monter à bord. Mais je le valide toujours sur place. Rien ne remplace une visite à quai. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=moquette-catamaran-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, 27 ans d&apos;expérience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            De la visite à quai <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;à la restitution.</em>
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

      {/* Étude de cas : refit catamaran 45' */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Type de chantier : refit complet catamaran 45 pieds</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Huit étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatorze jours de bout en bout.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Pour un Lagoon 45 ou équivalent (carré 22 m² + 4 cabines de 8 à 10 m² + coursives), voici le déroulé type d&apos;un refit complet. La durée varie selon l&apos;état du support, la dépose à effectuer et le choix matériau. Surface totale traitée : environ 75 à 90 m².
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {refitSteps.map((s) => (
              <div key={s.n} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{s.n}. {s.t}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Préparation du support */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Préparation du support</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Sur catamaran, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>tout se joue avant la colle.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Gel coat et contreplaqué marine</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Le sol d&apos;un catamaran moderne combine deux supports : du gel coat polyester sur les zones du carré et du contreplaqué marine multiplis dans les cabines. Chacun exige une préparation différente. Sur gel coat : ponçage doux à l&apos;abrasif 180, dégraissage à l&apos;alcool isopropylique pour neutraliser les résidus de cire de démoulage. Sur contreplaqué : vérification de l&apos;humidité (seuil 4%), traitement d&apos;une zone humide au déshumidificateur 24h avant pose si nécessaire.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Primaire d&apos;accrochage polyester</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Une colle polyuréthane n&apos;adhère pas directement à un gel coat poli. Nous appliquons un primaire spécifique polyester (généralement à base d&apos;époxy modifié) au rouleau, en deux passes croisées. Temps de séchage entre passes : 2 heures à 20°C. Délai avant collage : 4 à 6 heures. Cette étape, souvent zappée par les poseurs non spécialistes, est la cause numéro un des décollements à 18 mois.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Trappes de visite et passages techniques</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Chaque catamaran a ses trappes : accès cales, batteries, vannes de coque, water-makers. Nous les démontons systématiquement avant pose, calepinons le revêtement par-dessus, puis recoupons proprement au cutter sur place avec joint de finition. Une trappe ré-encadrée d&apos;un profilé inox sur mesure devient invisible. C&apos;est une signature de chantier soigné.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Joints de dilatation et courbures</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur les zones où le pont s&apos;échauffe au soleil (carré tribord, devant les baies vitrées), nous laissons un jeu de dilatation de 2 à 3 mm en périphérie, masqué par les plinthes ou la finition murale. Pour les courbures complexes (entrée de descente, mainfold), confection en plusieurs lés avec joint soudé à chaud en gorge, plus discret qu&apos;un seul lé tendu qui finit toujours par marquer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entretien et durée de vie */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Entretien long terme</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Dix ans de moquette, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>c&apos;est aussi un entretien adapté.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Aspiration hebdomadaire</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Aspirateur à brosse rotative, filtration HEPA. Sur un catamaran utilisé, le sel cristallise dans les fibres après chaque navigation : sans aspiration régulière, il abrase la fibre par friction sous les pas. Une aspiration sérieuse par semaine d&apos;utilisation suffit à doubler la durée de vie effective du revêtement.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Nettoyage profond annuel</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Une fois par an, en début ou fin de saison, nettoyage à l&apos;injection-extraction avec produit neutre sans rinçage. Sur polypropylène marine, la technique est sûre (la fibre ne reprend pas d&apos;eau). Sur laine traitée, préférer le shampoing à sec qui n&apos;altère pas le traitement ignifuge. Séchage à pleine ventilation 24 à 48h.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Hivernage et anti-moisissure</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Pour un catamaran hiverné fermé (octobre-mars), traitement antimicrobien en pulvérisation et ouverture des trappes de cabines pour ventilation forcée par déshumidificateur. Pose de tapis absorbants amovibles devant les descentes intérieures : ils captent l&apos;eau de pluie qui rentre par la capote et protègent la moquette du carré.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Moquette catamaran, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses précises.</em>
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

      {/* CTA après FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Catamaran à équiper ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Devis sous 48h après visite à quai.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Modèle, port d&apos;attache, état du sol actuel : trois informations suffisent pour caler une visite.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=moquette-catamaran-faq" variant="primary" size="md">Demander un devis</Button>
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
            <Link href="/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette yacht →</Link>
            <Link href="/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette péniche →</Link>
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
            Votre catamaran <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>mérite mieux.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite gratuite à quai. Port des Minimes, La Pallice, La Flotte, Saint-Martin-de-Ré.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-catamaran" variant="primary" size="md">Demander un devis</Button>
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
