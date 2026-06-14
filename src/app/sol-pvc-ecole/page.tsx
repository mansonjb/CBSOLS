import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Baby, BookOpen, Building2, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sol PVC École Maternelle et Primaire | Pose Établissements Scolaires',
  description: "Pose de sol PVC en école maternelle et primaire. Conformité ERP (Bfl-s1, U4P3, R10/R11), pose pendant les vacances scolaires, marchés publics. CB Sols accompagne mairies et écoles privées depuis 27 ans.",
  alternates: { canonical: 'https://cbsols.fr/sol-pvc-ecole' },
  openGraph: {
    title: "Sol PVC en école maternelle et primaire | Pose en établissements scolaires",
    description: "Sol PVC pour salles de classe, dortoirs maternelle, restaurants scolaires. Normes ERP, label A+, pose pendant les vacances scolaires.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-ecole.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: "Salles de classe maternelle et primaire", desc: "Sol PVC en lés grande largeur sur l'ensemble de la salle, soudure à chaud pour étanchéité continue, classement U4P3, glissance R10, esthétique chaleureuse. Pose en lés 2 mètres, calepinage en fonction de la lumière naturelle pour éviter les reflets sur les pupitres." },
  { title: 'Dortoirs maternelle', desc: "Sol PVC acoustique 3 à 4 mm avec amélioration du bruit d'impact, confort sous le pas de l'enseignante pendant la sieste. Coloris doux, formats unis ou bois discret pour préserver le calme visuel. Soudure à chaud pour faciliter le nettoyage des incidents." },
  { title: "Préau couvert et circulations", desc: "Sol PVC en lés résistant au passage intense des récréations, classement U4P3 minimum, glissance R10 même pieds mouillés, profilés de seuil aux jonctions avec les sols extérieurs. Pose collée pleine sur dalle béton préparée." },
  { title: 'Restaurant scolaire et self', desc: "Sol PVC compact ou hétérogène, glissance R11 en zone service, résistance aux chariots et au passage en pointe. Plinthes à gorge remontées sur 10 cm pour faciliter le lavage à grande eau et garantir l'hygiène." },
]

const produits = [
  { name: 'Sol PVC hétérogène en lés', desc: "Référence des écoles, en couche d'usure 0,7 à 1 mm, classement U4P3, glissance R10, label A+, traitement de surface anti-tache. Pose en lés 2 mètres soudés à chaud, durée de vie 15 à 20 ans en usage scolaire. Principales gammes mobilisées : Gerflor Taralay Premium et Tarkett iQ Granit." },
  { name: 'Sol PVC compact homogène', desc: "Pour les zones très sollicitées : couche d'usure dans la masse, ponçage de rénovation possible après 10 ans. Idéal pour circulations principales et restaurants scolaires. Gammes mobilisées : Tarkett iQ Optima et Gerflor Mipolam Symbioz." },
  { name: 'Sol PVC sécurité antidérapant', desc: "Pour sanitaires, vestiaires, abords de fontaines à eau. Glissance R11 voire R12, granulats anti-glisse dans la couche d'usure. Plinthes à gorge associées. Gammes mobilisées : Gerflor Tarasafe Standard et Forbo Surestep." },
]

const process = [
  { step: 'Visite sur site', desc: "Relevé des surfaces, état du support existant, identification des contraintes (chauffage au sol, dénivelés, sols amiantés éventuels), échange avec le directeur d'école ou les services techniques de la mairie." },
  { step: 'Devis et planning', desc: "Chiffrage détaillé par salle, fourniture et pose, ragréage, plinthes. Planning calé sur les vacances scolaires : juillet-août principalement, Toussaint pour petits chantiers. Coordination avec les autres corps d'état." },
  { step: 'Marché public', desc: "Pour les écoles publiques, constitution du mémoire technique, fiches techniques produits, FDES, certifications environnementales, planning détaillé. Suivi administratif jusqu'à notification." },
  { step: 'Préparation et pose', desc: "Dépose de l'ancien revêtement, ragréage autolissant, primaire d'accrochage, déroulage des lés 2 mètres, encollage, marouflage, soudure à chaud thermofusion entre lés. Plinthes à gorge en zones humides." },
  { step: 'Réception et entretien', desc: "Contrôle des soudures, vérification des coloris, nettoyage de mise en service, remise des fiches d'entretien aux agents techniques. Conseils d'entretien adaptés au type de revêtement posé." },
]

const faq = [
  { q: "Quand poser un sol PVC dans une école sans interrompre la scolarité ?", a: "La fenêtre principale reste les grandes vacances d'été, de début juillet à fin août, pour les chantiers de plusieurs salles de classe. Les vacances de la Toussaint permettent de traiter une ou deux salles. Noël et Pâques sont plus courts mais utilisables pour les petites surfaces comme un dortoir ou un local technique. Nous calons toujours le planning avec la mairie ou le directeur d'école, en intégrant le temps de séchage du ragréage, la pose, la soudure à chaud et la remise en service. Sur 27 ans de chantiers scolaires, nous n'avons jamais retardé une rentrée. Valentin Prévoteau pilote chaque planning personnellement pour garantir la livraison en temps." },
  { q: "Quelles normes ERP doit respecter un sol PVC en école ?", a: "Quatre exigences principales encadrent la pose en école. La réaction au feu doit être Bfl-s1 minimum, attestée par le PV de classement européen du fabricant. L'usage doit correspondre à U4P3 minimum pour les salles de classe et circulations, U4P4 pour les zones très sollicitées, U3P3 acceptable en zones humides spécifiques. La glissance doit atteindre R10 en zones sèches et R11 en sanitaires, douches et cuisines selon la norme DIN 51130. Enfin, le classement COV doit être A+ avec FDES disponible pour la qualité de l'air intérieur. Toutes les marques que nous posons respectent ces critères, nous fournissons systématiquement les PV au moment du devis." },
  { q: "Quel budget pour un sol PVC école au mètre carré posé ?", a: "Le budget varie selon la qualité du produit, la complexité du support et la surface globale. Pour un sol PVC hétérogène en lés type Gerflor Taralay Premium ou Tarkett iQ Granit, posé avec ragréage et plinthes, comptez 45 à 70 euros HT du mètre carré tout compris. Pour un sol PVC compact homogène destiné aux circulations principales, 60 à 95 euros HT. Pour un sol sécurité antidérapant en zone humide, 55 à 80 euros HT. Les grandes surfaces sur un même chantier permettent des prix dégressifs. Nous fournissons un devis détaillé poste par poste après visite sur site, sans surprise." },
  { q: "Comment se déroule un marché public pour la rénovation des sols d'une école ?", a: "La mairie ou la collectivité publie un DCE avec CCTP, CCAP, BPU et planning prévisionnel. Nous répondons par un mémoire technique détaillé : présentation de l'entreprise, références similaires sur des écoles équivalentes, fiches techniques produits avec PV de classement feu, FDES, certifications environnementales, planning de chantier calé sur les vacances scolaires, équipe affectée et compagnons qualifiés. Pour les écoles publiques en Charente-Maritime et départements limitrophes, nous répondons régulièrement sur des montants allant de 15 000 à 150 000 euros HT. Suivi administratif rigoureux jusqu'à notification, puis exécution dans le respect strict du planning." },
  { q: "Le sol PVC est-il vraiment sain pour les enfants en classe ?", a: "Les sols PVC modernes posés en école sont classés A+ pour les émissions de COV, soit le meilleur niveau de la classification française. Ils disposent d'une FDES vérifiée par tierce partie. Les phtalates problématiques sont depuis longtemps remplacés par des plastifiants conformes au règlement REACH. Certaines gammes vont plus loin : Tarkett iQ Granit, Gerflor Mipolam Symbioz et Forbo Sphera sont 100% recyclables, bio-attribués ou sans phtalates du tout. Pour une école neuve ou une rénovation importante, nous recommandons ces gammes premium. La pose en soudure à chaud thermofusion garantit en plus une étanchéité totale entre lés, sans joints poussiéreux." },
  { q: "Faut-il déposer l'ancien sol avant de poser un sol PVC neuf ?", a: "Dans la majorité des cas oui, par rigueur de pose. La dépose de l'ancien revêtement permet de retrouver un support sain, de mesurer la planéité réelle, de traiter les éventuels désordres (humidité remontante, fissures, amiante). Si l'ancien sol est un PVC ou un linoléum en bon état et parfaitement adhérent, une pose en recouvrement reste possible avec primaire spécifique, mais on perd 2 à 3 mm d'épaisseur de plinthe et on cumule deux strates fragiles. Si l'ancien revêtement contient de l'amiante (PVC posé avant 1997), un diagnostic préalable et un retrait par entreprise certifiée sont obligatoires. Nous accompagnons la mairie dans ces démarches." },
  { q: "Quelle durée de vie pour un sol PVC en école maternelle ou primaire ?", a: "Avec un produit U4P3 ou U4P4 et un entretien régulier par l'agent technique, comptez 15 à 20 ans en salle de classe et circulation normale. Les zones très passantes comme les préaux et restaurants scolaires se rapprochent des 15 ans. Les sols compacts homogènes type Tarkett iQ Optima ou Gerflor Mipolam Symbioz autorisent un ponçage et une rénovation de surface après 10 à 12 ans, prolongeant la durée totale à 25 ans. L'entretien adapté est déterminant : nettoyage quotidien à l'autolaveuse avec produit neutre, métallisation tous les 2 ans pour les sols filmogènes. Nous remettons une fiche d'entretien personnalisée à chaque livraison." },
]

const specs = [
  { title: 'Réaction au feu Bfl-s1', desc: "Classement européen obligatoire pour tout ERP de type R (établissements d'enseignement). Le PV est fourni par le fabricant et joint au dossier de réception. Nous ne posons que des produits classés Bfl-s1 ou supérieur en école." },
  { title: 'Classement UPEC U4P3 minimum', desc: "Pour les salles de classe et circulations courantes. U4P4 recommandé pour les zones très passantes (préaux, restaurants). U3P3 toléré uniquement en zones humides spécifiques. Garantit la résistance à l'usure, au poinçonnement et à l'eau." },
  { title: 'Glissance R10 et R11', desc: "R10 minimum en salles de classe et circulations selon DIN 51130. R11 obligatoire en sanitaires, vestiaires, restaurants scolaires et zones soumises à l'humidité. Sécurité essentielle pour les enfants." },
  { title: 'Classement COV A+', desc: "Meilleur niveau de la classification française des émissions de composés organiques volatils. FDES vérifiée par tierce partie. Indispensable pour la qualité de l'air intérieur dans une école accueillant des enfants." },
  { title: 'Pose en lés soudés à chaud', desc: "Lés de 2 mètres de large déroulés sur la salle, soudure à chaud thermofusion entre lés à l'aide d'un cordon PVC. Étanchéité totale, absence de joints poussiéreux, hygiène irréprochable. La signature d'une pose professionnelle." },
  { title: 'Planning vacances scolaires', desc: "Chantiers calés sur juillet-août principalement, Toussaint pour petites surfaces. Coordination avec les services techniques de la mairie, garantie de remise en service avant la rentrée. Nous n'avons jamais raté une rentrée en 27 ans." },
]

const marques = [
  { name: 'Gerflor Taralay Premium', detail: "Référence des écoles françaises depuis 30 ans. Hétérogène U4P3, R10, Bfl-s1, A+. Excellente tenue dans le temps, large gamme de coloris bois et unis." },
  { name: 'Tarkett iQ Granit', detail: "Sol PVC compact homogène, ponçable, durée de vie 25 ans. U4P3, Bfl-s1, A+. Très utilisé en circulation et restaurants scolaires pour sa robustesse." },
  { name: 'Forbo Surestep', detail: "Sol sécurité antidérapant R11, granulats anti-glisse dans la couche d'usure. Idéal pour sanitaires, vestiaires, abords de fontaines." },
  { name: 'Tarkett Acczent Excellence', detail: "Hétérogène acoustique 70 dB ou compact. U4P3, Bfl-s1, A+. Décors bois réalistes appréciés en maternelle pour leur effet rassurant." },
  { name: 'Gerflor Mipolam Symbioz', detail: "Compact homogène bio-attribué, 100% recyclable. Démarche environnementale forte, label A+. Solution premium pour écoles HQE." },
  { name: 'Polyflor Polysafe', detail: "Gamme sécurité britannique R11/R12, très utilisée en restaurant scolaire et zones humides. Garantie 15 ans coefficient de glissance." },
  { name: 'Forbo Sphera', detail: "Compact homogène sans phtalates, 100% recyclable, A+. Référence éco-responsable pour écoles labellisées." },
  { name: 'Tarkett iQ Optima', detail: "Compact homogène premium, garantie commerciale 30 ans en usage courant. Ponçage de rénovation possible plusieurs fois." },
]

const lieux = [
  { nom: 'Écoles publiques communales', detail: "Mairie maître d'ouvrage, marché public, réponse au DCE, mémoire technique et planning vacances scolaires." },
  { nom: 'Écoles privées sous contrat', detail: "Décision directe du directeur ou de l'OGEC. Devis privé, planning calé sur le calendrier scolaire de l'établissement." },
  { nom: 'Regroupements pédagogiques intercommunaux', detail: "RPI répartis sur plusieurs communes. Coordination avec syndicat intercommunal ou communauté de communes." },
  { nom: 'Écoles bilingues et internationales', detail: "Calendriers scolaires parfois décalés. Cahier des charges renforcé sur l'esthétique et les normes environnementales." },
  { nom: 'Écoles Montessori et alternatives', detail: "Exigence sur les matériaux naturels et la qualité de l'air. Orientation vers Forbo Sphera, Gerflor Mipolam Symbioz ou linoléum naturel." },
  { nom: 'Internats primaires', detail: "Dortoirs avec sol PVC acoustique, salles d'études, sanitaires et douches. Chantiers principalement en juillet-août." },
  { nom: 'Restaurants scolaires et selfs', detail: "Sols compacts ou sécurité R11, plinthes à gorge, résistance aux chariots, hygiène HACCP. Souvent chantier prioritaire d'été." },
  { nom: 'Accueils de loisirs sans hébergement ALSH', detail: "Salles d'activités mutualisées avec l'école, parfois en pose continue avec les salles de classe pour une finition homogène." },
  { nom: 'Périscolaire et garderies', detail: "Espaces utilisés matin et soir, sols acoustiques recommandés pour le confort des animateurs et des enfants." },
  { nom: "Écoles en Charente-Maritime", detail: "La Rochelle, Rochefort, Saintes, Royan, Aytré, Surgères, Marennes, Aigrefeuille. Déplacement gratuit, intervention rapide." },
  { nom: 'Écoles en Deux-Sèvres et Vendée', detail: "Niort, Fontenay-le-Comte, La Roche-sur-Yon. Marchés publics réguliers, équipe mobilisable sur grands chantiers d'été." },
  { nom: 'Écoles île de Ré et île d\'Oléron', detail: "Logistique insulaire maîtrisée, livraisons coordonnées avec les ponts et les marées pour les chantiers d'été." },
]

export default function SolPvcEcolePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/sol-pvc-ecole#service',
        name: 'Pose de sol PVC en école maternelle et primaire',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: "Pose de sol PVC en école maternelle et primaire, conformité ERP, marchés publics",
        description: "Fourniture et pose de sol PVC en lés grande largeur dans les écoles maternelles et primaires, conformité ERP Bfl-s1 U4P3 R10/R11, label A+, pose pendant les vacances scolaires.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Sol PVC en école', item: 'https://cbsols.fr/sol-pvc-ecole' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="ecole" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sol PVC école</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Sol PVC en école,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>le sol qui dure une génération.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Salles de classe maternelle et primaire, dortoirs, préaux, restaurants scolaires : sol PVC en lés grande largeur soudés à chaud, conformité ERP Bfl-s1, classement U4P3, glissance R10/R11, label A+. Pose pendant les vacances scolaires, mairies et écoles privées accompagnées. {company.experience} d&apos;expérience artisan.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=sol-pvc-ecole" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">Voir le showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>La règle d&apos;or scolaire</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Une école, ça se rénove en juillet-août, point. En 27 ans, CB Sols n&apos;a jamais raté une rentrée. C&apos;est la première promesse qu&apos;on fait au directeur ou à la mairie, et c&apos;est non négociable. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle zone de l&apos;école ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre espaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre solutions.</em>
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

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un chantier à planifier ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Anticipons ensemble les vacances d&apos;été.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Mairie ou direction d&apos;école : Valentin Prévoteau se déplace pour la visite préalable et le chiffrage détaillé.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-ecole" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités techniques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les exigences ERP en école</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Six exigences qui structurent <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>notre approche.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {specs.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les sols PVC que nous posons en école</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois familles, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un seul niveau d&apos;exigence.</em>
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
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            Nous travaillons avec les fabricants majeurs du sol PVC pour collectivités : Gerflor, Tarkett, Forbo, Polyflor. Chaque référence est sélectionnée pour son adéquation à l&apos;usage scolaire, ses classements ERP, et la disponibilité de sa FDES. Pour les écoles labellisées HQE ou en démarche environnementale poussée, nous proposons des gammes bio-attribuées ou 100% recyclables.
          </p>
        </div>
      </section>

      {/* Citation milieu + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Une soudure à chaud propre, un ragréage qui ne se voit pas, des plinthes à gorge bien remontées : ce sont les détails qui font qu&apos;une école garde son sol vingt ans sans souci. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=sol-pvc-ecole-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite préalable systématique, déplacement gratuit en Charente-Maritime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marques et références ERP</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Huit références, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>toutes conformes ERP type R.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Fabricants européens spécialisés en revêtements de sol pour collectivités. Chaque produit présenté dispose des PV de classement feu Bfl-s1, du classement UPEC adapté, d&apos;un FDES vérifié et du label A+ pour les émissions de COV.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lieux et établissements */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Là où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Tous les contextes d&apos;établissement <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du premier degré.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols intervient pour les écoles publiques sous marché, les écoles privées en gré à gré, les RPI, les internats et les structures périscolaires associées. Visite préalable systématique, mémoire technique soigné, planning calé sur les vacances scolaires.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((l, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{l.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un marché public à préparer ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Mémoire technique, PV, FDES : on a tout sous la main.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Dossier de réponse complet, références écoles similaires, planning détaillé sur vacances scolaires.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-ecole-mid" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche, de la visite à la rentrée</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du devis à la livraison.</em>
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
            Sol PVC en école, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses détaillées.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Une question restée sans réponse ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Décrivez votre école, on revient sous 48h.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Type d&apos;établissement, surfaces, contraintes calendaires : ces éléments suffisent pour démarrer un échange utile.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-ecole-faq" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <RelatedCards
        sectionSubtitle="Notre savoir-faire couvre d'autres univers susceptibles de vous interesser. Prenez le temps de parcourir, posez vos questions, nous y repondrons."
        items={[
          { href: "/sol-pvc-creche", title: "Sol PVC creche", teaser: "Sans phtalates, antibacterien, certifie pour la petite enfance. La serenite des parents et de l'equipe.", icon: Baby },
          { href: "/sol-pvc-college-lycee", title: "Sol PVC college et lycee", teaser: "Un sol qui encaisse mille passages par jour, resiste aux chaussures et garde son eclat sur la duree.", icon: BookOpen },
          { href: "/sol-pvc-cabinet-medical", title: "Sol PVC cabinet medical", teaser: "Un sol qui rassure vos patients des la salle d'attente et facilite votre nettoyage quotidien.", icon: Stethoscope },
          { href: "/sol-pvc-pharmacie", title: "Sol PVC pharmacie d'officine", teaser: "Hygiene quotidienne, conformite ARS, pose nocturne. Vingt ans de tenue dans une officine qui ne ferme pas.", icon: Pill },
          { href: "/architectes", title: "Pour les architectes", teaser: "Documentation matiere, echantillons annotes, devis detailles. Notre role, c'est de servir votre vision.", icon: Building2 },
          { href: "/showroom", title: "Showroom Villedoux", teaser: "Venez voir et toucher les matieres. Sur rendez-vous, a Villedoux pres de La Rochelle.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gerant vous repond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Une école à rénover ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons calendrier.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite préalable sur site, dossier ERP complet, planning calé sur les vacances scolaires. La rentrée se prépare avant la sortie.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-ecole" variant="primary" size="md">Demander un devis</Button>
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
