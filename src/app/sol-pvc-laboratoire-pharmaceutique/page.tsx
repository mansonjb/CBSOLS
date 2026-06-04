import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Sol PVC Laboratoire Pharmaceutique | Pose Labo, Pharmacie, Cosmétique | CB Sols",
  description: "Pose de sol PVC pour laboratoires pharmaceutiques, labos d'analyse, pharmacies d'officine, laboratoires cosmétique. Finition continue sans joints, rigueur du chantier, validé par les audits qualité. CB Sols, 27 ans de savoir-faire.",
  alternates: { canonical: 'https://cbsols.fr/sol-pvc-laboratoire-pharmaceutique' },
  keywords: ['sol PVC laboratoire', 'sol pharmacie', 'sol labo cosmétique', 'revêtement labo analyse', 'sol pharmaceutique'],
  openGraph: {
    title: "Sol PVC pour laboratoire, rigueur et finition",
    description: "Pose de sol PVC pour laboratoires pharmaceutique, cosmétique, analyse, pharmacie. Finition continue, plinthes à gorge, chantier rigoureux. CB Sols.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-laboratoire-pharmaceutique.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Laboratoires d'analyse", desc: "Analyse médicale, alimentaire, environnementale. Ce sont des espaces très techniques où chaque centimètre carré doit être propre, traçable, lisible visuellement. Nous posons en lés grande largeur soudés à chaud, avec une teinte claire qui permet de repérer immédiatement la moindre salissure. Les plinthes remontent à gorge arrondie sur 10 centimètres, ce qui supprime les angles et facilite l'entretien quotidien. La continuité visuelle du sol simplifie aussi les audits qualité, où l'auditeur cherche d'abord la cohérence d'ensemble." },
  { title: "Pharmacies d'officine", desc: "Surface de vente, back-office de préparation magistrale, zone de stockage. La pharmacie est un commerce, mais aussi un lieu de préparation et de conservation de médicaments. Le sol doit tenir le passage de la clientèle, l'entrée et la sortie de palettes de stock, le ménage quotidien et l'image soignée que le pharmacien souhaite donner. Une palette claire en zone vente, une teinte plus marquée en réserve, avec une continuité de gamme pour cohérence." },
  { title: "Laboratoires cosmétique", desc: "Formulation, essais, conditionnement, contrôle qualité. L'univers cosmétique a ses spécificités : pigments, huiles essentielles, alcools, produits acides parfois. Le sol doit tenir ces produits sans tacher, sans se déformer, sans changer de couleur. Nous orientons vers des PVC haute densité avec une finition mate qui ne marque pas les empreintes, dans des palettes claires qui valorisent la propreté de l'atelier de fabrication." },
  { title: "Magasin matières premières et zones tampons", desc: "Réception, stockage, mise en quarantaine, sas de transfert. Ces espaces voient passer des palettes, des transpalettes, des chariots élévateurs légers. Le sol doit résister mécaniquement sans se déformer, tout en gardant la continuité de finition avec les zones de production qu'il dessert. Nous calons les transitions de teinte sur les sas de manière à matérialiser visuellement les zones, sans ajouter de marquage au sol superflu." },
]

const exigences = [
  { title: "Finition continue sans joints visibles", desc: "C'est notre marque de fabrique sur ce type de chantier. Les lés se posent en grande largeur, 2 mètres standard, soudés à chaud entre eux. Les soudures sont arasées à la main pour disparaître visuellement dans la teinte du sol. À l'œil, le sol semble d'une seule pièce, ce qui est apprécié par les responsables qualité et fait bonne impression lors des audits clients ou internes." },
  { title: "Plinthes à gorge arrondie", desc: "Le PVC remonte sur le mur en gorge arrondie de 10 centimètres, suppression de l'angle droit sol-mur. Concrètement, moins de poussière dans les coins, nettoyage à la serpillière facilité, surface lavable d'un seul tenant. C'est un standard discret mais essentiel dans tout environnement laboratoire, et c'est un détail qui se voit immédiatement dans une visite d'audit." },
  { title: "Rigueur du planning et du chantier", desc: "Un labo ne s'arrête pas facilement. Les chantiers se calent au mètre près sur les fenêtres de production : arrêts techniques, semaines de maintenance, périodes basses. Nous préparons en amont à l'atelier de Villedoux, livrons précisément, posons vite et nettoyons à mesure. L'équipe arrive en chaussures de chantier propres, change si la zone le demande, et laisse les locaux prêts à reprendre la production." },
  { title: "Sols clairs pour lecture visuelle", desc: "On privilégie systématiquement les teintes claires, blanc cassé, gris très clair, beige doux. Ce choix n'est pas que esthétique : il permet aux opérateurs et aux responsables qualité de voir immédiatement une goutte au sol, un dépôt, une trace à reprendre. C'est un outil de travail discret mais quotidien, qui soutient la culture qualité de l'équipe sans en avoir l'air." },
  { title: "Compatibles avec vos audits qualité", desc: "Nous fournissons toute la documentation nécessaire pour vos dossiers : fiches techniques produit, classement feu, classement air intérieur A+, certificats de conformité, traçabilité des lots posés, schéma de pose, photos avant et après. Ce dossier accompagne votre prochain audit qualité sans préparation supplémentaire de votre côté." },
  { title: "Entretien quotidien simple", desc: "Pas de protocole alambiqué, pas de produit spécifique à commander en catalogue spécialisé. Le sol se nettoie avec les détergents que votre équipe utilise déjà : eau, détergent neutre, désinfectant si nécessaire. Nous remettons une fiche d'entretien simple en fin de chantier, qui tient sur une page et que votre équipe pourra suivre sans formation particulière." },
]

const materiaux = [
  { name: "Sols PVC en lés grande largeur soudés", desc: "C'est le standard du labo. Lés de 2 mètres, soudures à chaud entre lés et entre lé et plinthe, finition continue impeccable. Bonne tenue aux produits chimiques courants des labos (solvants, acides faibles, alcools), classement A+ pour la qualité de l'air intérieur. Compatibles salles propres pour la plupart des références. Gammes Gerflor Mipolam et Tarkett iQ Optima." },
  { name: "Sols PVC haute résistance pour zones humides", desc: "Pour les paillasses, les zones de lavage, les locaux où l'eau et les produits sont présents en permanence. Le PVC monte ici à 15 ou 20 centimètres en plinthe, parfois jusqu'au plan de travail. La surface est légèrement granuleuse pour l'adhérence, sans renoncer à la facilité de nettoyage. Gammes Forbo Surestep et Polyflor." },
  { name: "Sols antidérapants pour zones techniques", desc: "Locaux techniques, ateliers de maintenance, zones de circulation entre quais. L'antidérapance est un point de sécurité collaborateur et nous proposons des références qui ne sacrifient pas le nettoyage à la performance d'adhérence. Coloris souvent plus marqués pour matérialiser les zones de circulation." },
  { name: "Profilés de seuil et plinthes à gorge", desc: "Indispensables pour une finition de qualité laboratoire. Les profilés de seuil entre sas et zones de production sont choisis affleurants pour ne pas créer d'obstacle au passage des chariots et des transpalettes. Les plinthes à gorge sur 10 centimètres font la liaison continue entre sol et mur, sans angle ni joint visible." },
]

const marques = [
  { name: "Gerflor", desc: "Référence française du sol professionnel laboratoire. Gamme Mipolam très utilisée en production pharmaceutique et cosmétique, finition mate, palette claire étendue." },
  { name: "Tarkett", desc: "Gamme iQ Optima et iQ Granit largement présentes dans les laboratoires français et européens. Tenue chimique éprouvée, durabilité longue, traçabilité produit complète." },
  { name: "Forbo", desc: "Gamme Surestep pour les zones humides et Sphera pour les zones propres. Lignes complètes adaptées aux différents environnements labo et pharmacie." },
  { name: "Polyflor", desc: "Manufacture britannique, sols PVC haute densité pour environnements techniques exigeants. Bonnes performances chimiques et mécaniques, large catalogue." },
  { name: "Altro", desc: "Manufacture britannique spécialisée dans les sols techniques pour industrie pharmaceutique et alimentaire. Références antidérapantes haut de gamme." },
  { name: "Romus", desc: "Profilés de seuil, plinthes à gorge, nez de marche. Compléments indispensables d'une pose laboratoire soignée, larges gammes adaptées aux configurations." },
  { name: "Sika", desc: "Colles techniques et primaires de préparation. Choisis pour leur compatibilité avec les produits chimiques de labo et leur tenue dans le temps." },
  { name: "Wakol", desc: "Manufacture allemande de colles et résines pour sols techniques. Solutions éprouvées pour les supports difficiles et les chantiers exigeants en délais." },
]

const quartiers = [
  { nom: "Laboratoires d'analyse médicale", detail: "Préanalytique, biologie, hématologie, biochimie, microbiologie. Sol clair en lés soudés, plinthes à gorge, finition continue entre les paillasses et les zones de circulation." },
  { nom: "Laboratoires d'analyse alimentaire", detail: "Microbiologie alimentaire, contrôle qualité, sensoriel. Sol facile à laver, compatible passage de produits agroalimentaires, lisibilité visuelle des éventuelles éclaboussures." },
  { nom: "Laboratoires d'analyse environnementale", detail: "Eaux, sols, air, polluants. Espace technique varié, sols clairs et marqués selon les zones, robustesse au passage d'échantillons et de matériel terrain." },
  { nom: "Pharmacies d'officine", detail: "Surface de vente, comptoir, back-office, préparation magistrale, réserve. Continuité visuelle entre les espaces, palette claire et accueillante pour la zone vente." },
  { nom: "Laboratoires cosmétique formulation", detail: "Pesée, mélange, chauffage, échantillons. Sols résistants aux pigments, aux huiles essentielles et aux alcools, finition mate qui ne marque pas." },
  { nom: "Laboratoires cosmétique conditionnement", detail: "Lignes de remplissage, étiquetage, mise en carton. Sol durable au passage des chariots et palettes, antidérapant léger pour la sécurité des opérateurs." },
  { nom: "Laboratoires de contrôle qualité", detail: "Échantillonnage, analyses physico-chimiques, validation libération de lot. Sol clair pour la lecture visuelle, finition impeccable pour les audits clients." },
  { nom: "Magasin matières premières", detail: "Réception, mise en quarantaine, stockage, prélèvement. Sol résistant au passage des palettes et transpalettes, transition de teinte avec les sas." },
  { nom: "Sas de transfert et vestiaires", detail: "Habillage, déshabillage, lavage des mains. Sol antidérapant, plinthes étanches, palette claire pour matérialiser visuellement la transition vers la zone propre." },
  { nom: "Zones de production pharmaceutique", detail: "Fabrication, mise en forme, conditionnement primaire. Sol continu en grands lés, plinthes à gorge, palette claire, tenue aux produits de nettoyage de la zone." },
  { nom: "Laboratoires de recherche et développement", detail: "Paillasses, bureaux ouverts, espaces de prototypage. Sol qui combine la rigueur des espaces techniques et le confort acoustique des zones de réflexion." },
  { nom: "Officines pharmaceutiques avec robot", detail: "Surface de vente, zone robot, préparation. Sol parfaitement plan pour le déplacement du robot, durable au roulage et continu visuellement avec la zone client." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou mail pour cadrer le projet : type de laboratoire, surfaces concernées, zones à rénover, calendrier souhaité, contraintes de production. Nous identifions tout de suite si le chantier peut se caler sur un arrêt technique ou s'il faut viser une fermeture spécifique." },
  { step: 'Visite technique', desc: "Déplacement sur place sous 1 à 2 semaines. Prise de cotes précise, vérification de l'état du support, repérage des contraintes d'accès (vestiaires, sas, ascenseurs charge), photos pour préparation atelier. Échantillons présentés sur place sous votre éclairage de référence." },
  { step: 'Devis et dossier qualité', desc: "Devis détaillé chiffré sous huitaine avec planning précis. Nous joignons d'office les fiches techniques produit, le classement feu, le classement A+ air intérieur, et les certificats utiles à votre dossier qualité. Validation finale des coloris et confirmation des sas et zones de transition." },
  { step: 'Préparation atelier Villedoux', desc: "Pré-découpe des lés, marquage des découpes pour les paillasses, les arrivées techniques et les pieds d'équipement. Cette préparation amont est ce qui permet de tenir le délai serré une fois sur place, sans improvisation. Délai 2 à 5 semaines selon la gamme retenue." },
  { step: 'Pose dans votre laboratoire', desc: "Intervention sur la fenêtre convenue. Équipe en tenue propre, chaussures dédiées, planning calé sur vos contraintes. Dépose, ragréage si besoin, pose en lés, soudures à chaud, plinthes, finitions, nettoyage. Documentation finale remise à votre responsable qualité." },
]

const faq = [
  { q: "Vos sols sont-ils compatibles avec un environnement laboratoire ?", a: "Oui, c'est précisément ce que nous proposons sur ce type de chantier. Les gammes que nous posons en laboratoire sont conçues pour cet usage : finition continue en lés soudés à chaud, plinthes à gorge arrondie, palette claire pour la lecture visuelle, tenue aux produits de nettoyage et désinfection usuels du milieu. Les références principales sont Gerflor Mipolam, Tarkett iQ Optima et Forbo Surestep, toutes classées A+ pour la qualité de l'air intérieur et compatibles avec les pratiques de salle propre les plus courantes. Nous fournissons systématiquement les fiches techniques et les certificats de conformité qui alimentent votre dossier qualité, pour que la pose s'intègre sans frottement dans vos prochains audits." },
  { q: "Combien de temps faut-il pour rénover un laboratoire ?", a: "Tout dépend de la surface et du niveau de technicité de l'espace. Pour un laboratoire de 200 à 400 mètres carrés, comptez 5 à 10 jours de chantier sur place, idéalement positionnés pendant un arrêt technique programmé ou une fermeture annuelle. En amont, il faut prévoir 1 à 2 semaines pour la visite et le devis, puis 3 à 6 semaines de délai usine pour la commande des matières selon la gamme retenue. Le pré-assemblage à l'atelier de Villedoux est ce qui permet de tenir un planning serré une fois sur place. Pour les très grands labos ou les zones de production sensibles, nous pouvons aussi étaler le chantier zone par zone sur plusieurs week-ends." },
  { q: "Comment se passe la finition des soudures entre les lés ?", a: "C'est un point de qualité visuelle important sur lequel nous mettons toute notre attention. Une fois les lés posés et collés, nous fraisons les joints à la machine, déposons le cordon de soudure à chaud (PVC souple coloré à la teinte du sol), puis arasons à la main avec une lame spéciale dès que le cordon a refroidi. Le résultat à l'œil est une surface continue où la soudure ne se distingue pas, sauf à se pencher au sol pour la repérer. Cette finition est ce qui fait la différence entre un sol de bureau standard et un sol laboratoire de qualité audit, et c'est ce que nos clients responsables qualité apprécient particulièrement quand ils inspectent la livraison." },
  { q: "Quels documents fournissez-vous pour le dossier qualité ?", a: "Nous remettons systématiquement en fin de chantier un dossier de traçabilité complet : fiches techniques produit des références posées, classement feu, classement A+ pour la qualité de l'air intérieur, certificats de conformité européens, numéros de lot des matières posées par zone, schéma de pose avec orientation des lés, et photos avant et après chantier. Ce dossier accompagne directement vos audits qualité internes ou clients, sans préparation supplémentaire de votre part. Nous pouvons aussi fournir les fiches de données de sécurité des colles et primaires utilisés, et le PV de fin de chantier signé par notre chef d'équipe et votre responsable site." },
  { q: "Peut-on poser pendant que le laboratoire fonctionne ?", a: "C'est possible dans la majorité des cas, en travaillant zone par zone et en organisant un balisage clair entre la zone en chantier et la zone en activité. Cette formule allonge le chantier global mais évite l'arrêt complet de la production, ce qui est précieux pour beaucoup de structures. Nous organisons les transitions de zones sur les pauses de production ou en fin de journée, et nous arrivons sur site en chaussures dédiées que nous changeons au sas si la zone le demande. Pour les laboratoires les plus sensibles ou les très grands chantiers, il reste plus simple et plus rapide de viser un arrêt technique programmé ou la semaine de fermeture annuelle." },
  { q: "Quelle est la durée de vie d'un sol PVC en laboratoire ?", a: "Un sol PVC professionnel posé en laboratoire, avec un entretien quotidien normal, tient facilement 15 à 20 ans avec une bonne tenue visuelle sur toute la période. La gamme retenue, l'intensité du passage et la nature des produits utilisés font varier cette fourchette. Dans les laboratoires d'analyse classiques avec un passage modéré, on dépasse régulièrement les 20 ans. Dans les zones de production cosmétique ou pharmaceutique avec passage de palettes et chariots, on est plutôt sur 15 ans. La soudure à chaud entre les lés ne se dégrade pas dans le temps, c'est le revêtement lui-même qui montre éventuellement des marques après deux décennies de service intense." },
  { q: "Intervenez-vous en dehors de la Charente-Maritime ?", a: "Oui, très régulièrement. Notre atelier est à Villedoux près de La Rochelle, et nous intervenons sur tout le grand Ouest et au-delà pour ce type de chantier laboratoire qui demande une expertise précise. Nous avons des références à Nantes, Bordeaux, Niort, Poitiers, Angoulême, Tours, et plus loin selon les projets. Le déplacement et l'hébergement de l'équipe sont inclus dans le devis pour les chantiers à plus de 2 heures de route. La logistique d'une rénovation de laboratoire se planifie en général sur 8 à 14 semaines entre la première visite et la pose finale, ce qui laisse le temps d'organiser une intervention à distance dans de très bonnes conditions, avec une équipe complète mobilisée sur site jusqu'à la livraison." },
]

export default function SolPvcLaboratoirePharmaceutiquePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/sol-pvc-laboratoire-pharmaceutique#service',
        name: "Sol PVC pour laboratoire pharmaceutique",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: "Pose de sol PVC en laboratoire pharmaceutique, cosmétique, d'analyse, pharmacie",
        description: "Pose de sol PVC professionnel pour laboratoires : pharmaceutique, cosmétique, analyse médicale et alimentaire, pharmacies d'officine. Finition continue en lés soudés, plinthes à gorge, documentation qualité.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Sol PVC laboratoire pharmaceutique', item: 'https://cbsols.fr/sol-pvc-laboratoire-pharmaceutique' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sol PVC laboratoire</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Sol PVC pour laboratoire,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>rigueur et finition.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de sol PVC professionnel pour laboratoires pharmaceutique, cosmétique, d&apos;analyse, et pour pharmacies d&apos;officine. Finition continue en lés grande largeur soudés, plinthes à gorge, documentation qualité fournie. CB Sols intervient depuis 27 ans, atelier à Villedoux près de La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=sol-pvc-laboratoire-pharmaceutique" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Documentation qualité</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Un sol de labo, c&apos;est d&apos;abord une finition impeccable et un dossier qualité solide. On pose en grandes largeurs, on soude propre, et on remet la traçabilité complète. CB Sols fait ça depuis 27 ans. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, gérant de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour quel type de zone */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de laboratoire</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même rigueur de pose.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {usages.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline #1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un laboratoire à rénover ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite technique, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échantillons et cotes prises sur place. Devis détaillé sous huitaine, planning calé sur vos arrêts techniques ou fermetures annuelles.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?from=sol-pvc-laboratoire-pharmaceutique-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qu&apos;un sol de labo doit faire</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux laboratoires.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir dans un laboratoire, c&apos;est respecter une rigueur de chantier, de finition et de documentation. Voici les six points qui structurent notre méthode dès la première visite, sans jargon inutile.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {exigences.map((e, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matériaux */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Familles de produits</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les sols <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous posons en laboratoire.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {materiaux.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < materiaux.length - 1 ? '1px solid var(--border)' : 'none' }}>
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

      {/* Citation milieu */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « En labo, ce qui compte, c&apos;est ce qui se voit et ce qui se mesure : une finition continue, des plinthes propres, un dossier qualité complet. On livre les trois ensemble. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=sol-pvc-laboratoire-pharmaceutique-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite technique sur site</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marques partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit références <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets labo.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Zones et types de labo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Douze contextes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>des choix de sol adaptés.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Selon la zone du laboratoire, les contraintes ne sont pas les mêmes. Voici comment nous adaptons les sols selon les espaces que nous rénovons régulièrement.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {quartiers.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline #2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en réflexion ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Un appel pour cadrer le projet.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Vingt minutes au téléphone pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre laboratoire.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-laboratoire-pharmaceutique-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la prise de contact à la livraison.</em>
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
            Sol PVC en laboratoire, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Une question de plus ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Appelez Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Direct avec le gérant. Conseil clair, suite donnée seulement si le projet a du sens pour vous comme pour nous.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre les environnements exigeants en propreté et en finition.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/sol-pvc-cabinet-medical" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC cabinet médical →</Link>
            <Link href="/sol-pvc-creche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC crèche →</Link>
            <Link href="/sol-pvc-ecole" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC école →</Link>
            <Link href="/nettoyage-sols" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Nettoyage sols →</Link>
            <Link href="/marques" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Marques partenaires →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/contact" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Nous contacter →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre laboratoire rénové <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>dans les règles.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite technique sur site. Devis détaillé, finition continue en grands lés soudés, plinthes à gorge, dossier qualité fourni. 27 ans de savoir-faire CB Sols pour les laboratoires et pharmacies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-laboratoire-pharmaceutique-final" variant="primary" size="md">Demander un devis</Button>
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
