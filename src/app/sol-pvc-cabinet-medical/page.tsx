import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Sol PVC Cabinet Médical | Pose Cabinet Dentiste, Kiné, Vétérinaire | CB Sols",
  description: "Pose de sol PVC pour cabinet médical, dentiste, kiné, ostéopathe, vétérinaire. Sols faciles à désinfecter, ambiance calme et accueillante. CB Sols intervient depuis 27 ans, atelier près de La Rochelle.",
  alternates: { canonical: 'https://cbsols.fr/sol-pvc-cabinet-medical' },
  keywords: ['sol PVC cabinet médical', 'sol cabinet dentiste', 'sol cabinet kiné', 'sol vétérinaire', 'revêtement salle d\'attente'],
  openGraph: {
    title: "Sol PVC pour cabinet médical, propreté et calme",
    description: "Pose de sol PVC pour cabinets de santé : dentiste, kiné, ostéo, vétérinaire. Faciles à désinfecter, accueillants, sans odeur. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-cabinet-medical.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Salles d'attente accueillantes", desc: "C'est la première pièce que le patient voit. On y privilégie un sol au toucher chaleureux, à l'apparence claire et ordonnée, qui absorbe les bruits de pas et les conversations. Les coloris pastel, bois naturel ou minéral doux fonctionnent très bien, sans donner l'impression d'un univers froid. Le PVC acoustique apporte un vrai gain sur le confort sonore, particulièrement appréciable en pédiatrie ou en orthodontie où le passage est dense." },
  { title: "Cabinets de consultation", desc: "Ici la priorité est au calme et à la facilité d'entretien. Un sol uni ou très légèrement marbré, dans une tonalité douce, met le patient à l'aise sans distraire le praticien. La surface se nettoie à l'eau légèrement javellisée entre deux rendez-vous, sans s'abîmer ni laisser de traces. Les soudures à chaud entre les lés rendent la pose étanche et durable, sans interstice où la poussière vient se loger." },
  { title: "Salles de soins et blocs", desc: "Pour les actes techniques, on monte d'un cran sur les performances. Le PVC se prolonge en plinthe arrondie le long des murs, ce qui supprime les angles vifs et facilite le passage de la serpillière. Le sol résiste aux produits désinfectants utilisés quotidiennement et au passage des chariots de soins. On choisit une teinte claire qui permet de repérer immédiatement la moindre trace à essuyer." },
  { title: "Couloirs, accueil et zones de passage", desc: "Les axes de circulation concentrent l'usure visible : roulettes de fauteuils, talons, chariots, livraisons. On y pose un PVC plus dense, à motif chiné qui pardonne les marques, avec une bonne tenue dans le temps. La continuité de teinte entre les pièces donne une impression d'ensemble soignée, et les seuils sont travaillés pour ne pas accrocher les roulettes des fauteuils de patients." },
]

const exigences = [
  { title: "Un coup d'éponge et c'est propre", desc: "Le sol se nettoie à l'eau, à l'eau javellisée diluée ou au détergent classique du cabinet. Aucun produit spécifique à commander. Les lés sont soudés à chaud, sans joint où les bactéries pourraient s'installer. Votre équipe de ménage garde ses habitudes." },
  { title: "Moins de bruit, plus de calme", desc: "Un cabinet calme rassure le patient. Le PVC acoustique coupe les bruits de pas et les conversations qui passent à travers les murs. La salle d'attente devient feutrée, la consultation aussi. Vos patients le sentent dès qu'ils s'assoient." },
  { title: "Vous rouvrez dès le lendemain", desc: "Les sols qu'on pose sont notés A+ pour la qualité de l'air. Pas d'odeur qui traîne, pas de produit qui s'évapore pendant des semaines. Vous fermez vendredi soir, vous reprenez lundi matin. Aucun risque pour les patients sensibles." },
  { title: "Fauteuils et chariots, le sol tient", desc: "Roulettes, fauteuils, chariots de soins : ça roule, ça pivote, ça concentre les charges. Le PVC professionnel encaisse sans creuser ni marquer. Vous en avez pour quinze ans tranquilles, parfois plus. Pas de refonte du sol à mi-carrière." },
  { title: "Un cabinet, pas un hôpital", desc: "Effet bois clair, béton doux, vert d'eau, terre, ocre : on choisit des palettes accueillantes. Le patient entre dans un lieu apaisant, pas dans une salle technique. Et ça soutient votre image de praticien attentif. Le détail compte." },
  { title: "On vient quand vous fermez", desc: "Un cabinet ne peut pas rester fermé une semaine. On cale le chantier sur vos vacances ou le week-end. Vendredi soir au lundi matin, c'est jouable pour beaucoup de cabinets. Vos patients ne voient pas la différence, vos consultations reprennent à l'heure." },
]

const materiaux = [
  { name: "Sols PVC acoustiques en lés", desc: "C'est la solution la plus utilisée en cabinet médical. Lés de 2 mètres soudés à chaud entre eux, plinthes à gorge arrondie remontées sur 10 cm, finition continue sans joint. Excellente performance acoustique, entretien simple, durabilité 15 à 20 ans selon l'intensité de passage. Compatible avec les protocoles d'hygiène habituels des cabinets de santé. Gammes principalement Gerflor Mipolam Symbioz et Tarkett iQ Granit." },
  { name: "Sols PVC effet bois et minéral", desc: "Pour les cabinets qui cherchent une ambiance plus chaleureuse, les imitations bois clair, chêne blanchi ou béton ciré apportent du caractère sans renoncer aux performances hygiéniques. La pose reste continue, l'effet visuel est très convaincant à hauteur de regard. Particulièrement adapté aux salles d'attente et aux cabinets de médecine douce ou de kinésithérapie. Gammes Forbo Sphera et Polyflor." },
  { name: "Dalles PVC plombantes ou clipsables", desc: "Pour les rénovations rapides ou les cabinets en location, les dalles permettent une pose sans colle, déposable et remplaçable en cas de dégât localisé. Moins étanche qu'un lé soudé, donc à réserver aux zones non humides : bureau du praticien, accueil, salle d'attente. Très bon rapport qualité-prix pour un rafraîchissement complet de cabinet existant." },
  { name: "Moquettes et tapis pour cabinets psy et thérapeutes", desc: "Dans certaines spécialités comme la psychologie, l'ostéopathie douce, la sophrologie ou l'art-thérapie, la moquette retrouve toute sa pertinence. Elle apaise, accueille, change le rapport corporel au lieu. Nous proposons des moquettes laine traitées anti-acariens, ou des dalles textiles plombantes faciles à remplacer ponctuellement. Gammes Object Carpet et Forbo Flotex." },
  { name: "Plinthes à gorge et profilés de seuil", desc: "Le détail qui fait la différence sur un sol médical. La plinthe en gorge arrondie supprime l'angle droit entre sol et mur, ce qui évite l'accumulation de poussière dans les coins et facilite le nettoyage à la serpillière. Les profilés de seuil entre les pièces sont choisis pour ne pas accrocher les roulettes des fauteuils et chariots." },
]

const marques = [
  { name: "Gerflor", desc: "Référence française du sol PVC professionnel. Gamme Mipolam Symbioz très utilisée en santé, classement feu Bfl-s1, classement A+ pour l'air intérieur." },
  { name: "Tarkett", desc: "Gamme iQ Granit et iQ Optima largement présentes dans les hôpitaux français et les cabinets de ville. Très bonne tenue dans le temps, palette de coloris étendue." },
  { name: "Forbo", desc: "Gammes Sphera et Surestep en PVC, plus Marmoleum en linoléum naturel pour les cabinets attachés à l'origine bio-sourcée du revêtement." },
  { name: "Polyflor", desc: "Manufacture britannique, sols PVC haute densité avec des effets bois et béton de très bonne facture visuelle. Bon compromis esthétique et performances." },
  { name: "Object Carpet", desc: "Manufacture allemande de moquettes design contemporaines. Utilisée pour les cabinets de thérapeutes et les espaces d'accueil qui visent une ambiance résidentielle." },
  { name: "Forbo Flotex", desc: "Tissé vinyle, à mi-chemin entre la moquette et le PVC. Lavable à grande eau, antibactérien, parfait pour les zones où la chaleur du textile est recherchée sans renoncer à l'hygiène." },
  { name: "Romus", desc: "Profilés de seuil, plinthes, nez de marche. Compléments indispensables d'une pose médicale soignée, larges gammes pour s'adapter à toutes les configurations." },
  { name: "Sika et Bostik", desc: "Colles techniques et primaires de préparation de support. Choisis pour leur compatibilité air intérieur et leur tenue dans le temps face aux nettoyages répétés." },
]

const quartiers = [
  { nom: "Cabinets dentaires", detail: "Salle d'attente, secrétariat, salles de soins équipées de fauteuils. Sol PVC acoustique en lés soudés, plinthes en gorge, palette claire qui valorise la luminosité." },
  { nom: "Cabinets médecins généralistes", detail: "Bureau de consultation, salle d'examen, accueil. Sol facile à entretenir entre deux patients, ambiance neutre et professionnelle, finition continue sans joints visibles." },
  { nom: "Cabinets de kinésithérapie", detail: "Salle de rééducation, plateau de gymnastique, box de soins. Sol résistant aux roulettes, aux tapis de gym déposés au sol, et aux séances de longue durée avec passage régulier." },
  { nom: "Cabinets d'ostéopathie", detail: "Table de soins, bureau, accueil. Ambiance souvent chaleureuse, effet bois clair ou minéral doux, parfois moquette dans les espaces de détente patient." },
  { nom: "Cabinets vétérinaires", detail: "Salle d'attente, salle de consultation, salle de chirurgie, hospitalisation. Sol antidérapant, lavable, résistant aux griffes et aux produits désinfectants utilisés en pratique vétérinaire." },
  { nom: "Cabinets d'ophtalmologie", detail: "Salle d'attente souvent dense, salles d'examen technique, secrétariat. Sol clair, neutre, acoustique pour absorber les bruits liés au passage soutenu." },
  { nom: "Cabinets de dermatologie", detail: "Bureau de consultation, salle de soins, accueil. Sol facile à nettoyer entre deux patients, palette douce et apaisante pour rassurer face aux examens cutanés." },
  { nom: "Cabinets de sage-femme", detail: "Salle d'attente accueillante, salle d'examen, espace d'allaitement. Ambiance douce, chaleureuse, sol confortable pour les nourrissons posés au sol lors des consultations." },
  { nom: "Cabinets d'orthodontie", detail: "Salle d'attente adolescents et enfants, salles de soins multiples. Sol gai sans être enfantin, résistant au passage intensif, acoustique pour limiter le brouhaha." },
  { nom: "Cabinets de pédiatrie", detail: "Accueil familial, salle de jeu d'attente, salle d'examen. Effet bois clair ou couleurs douces, sol confortable pour les enfants au sol, lavable facilement." },
  { nom: "Cabinets de psychologie et psychothérapie", detail: "Bureau du thérapeute, salle d'attente discrète. La moquette ou un tapis épais retrouve ici tout son sens : chaleur, intimité, isolation acoustique vis-à-vis des pièces voisines." },
  { nom: "Centres de santé pluri-professionnels", detail: "Plusieurs cabinets, espaces communs d'accueil, salle de réunion. Cohérence visuelle entre les espaces, signalétique implicite par les variations de teinte, robustesse pour le passage de plusieurs files de patients." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique pour cadrer le projet : nombre de pièces, surface estimée, spécialité du cabinet, calendrier de fermeture envisageable. Nous identifions tout de suite si la rénovation peut être étalée sur plusieurs week-ends ou s'il faut viser une semaine de congés." },
  { step: 'Visite du cabinet', desc: "Déplacement sur place sous 1 à 2 semaines. Prise de cotes, vérification de l'état du support existant, repérage des contraintes d'accès et de manutention. Échantillons présentés directement dans votre cabinet, sous votre éclairage de travail, pour choisir la teinte définitive." },
  { step: 'Devis et choix matière', desc: "Devis détaillé chiffré sous huitaine : surfaces par pièce, gamme proposée, plinthes, seuils, durée de chantier, planning. Validation finale des coloris, des plinthes et des profilés. Commande des matières lancée dès accord, délai usine 2 à 5 semaines selon gamme." },
  { step: 'Préparation atelier', desc: "Découpe et pré-assemblage des lés à l'atelier de Villedoux. Vérification des dimensions, marquage des découpes pour les ouvertures de passage des fauteuils, des prises de courant au sol et des éventuelles arrivées d'eau. Cette préparation amont réduit le temps passé dans votre cabinet." },
  { step: 'Pose dans votre cabinet', desc: "Intervention sur la fenêtre de fermeture convenue : week-end prolongé, vacances, semaine de congés. Dépose de l'ancien sol, ragréage si nécessaire, pose des lés, soudures à chaud, plinthes, finitions, nettoyage. Cabinet rendu prêt à rouvrir le jour de reprise des consultations." },
]

const faq = [
  { q: "Quel sol PVC choisir pour une salle de soins ?", a: "Pour une salle de soins, nous orientons vers un PVC professionnel en lés de 2 mètres, soudés à chaud entre eux, avec plinthes en gorge arrondie remontées sur 10 centimètres environ. La surface devient continue et étanche, sans joint où la poussière ou les bactéries pourraient se loger. Côté coloris, on privilégie une teinte claire, légèrement chinée, qui permet de repérer immédiatement une trace à essuyer. Les gammes Gerflor Mipolam Symbioz et Tarkett iQ Granit sont nos choix les plus fréquents en cabinet, avec un classement A+ pour la qualité de l'air intérieur et une excellente tenue aux produits de désinfection courants. La durée de vie utile dépasse 15 ans en cabinet classique." },
  { q: "Est-ce que le sol PVC est facile à désinfecter ?", a: "Oui, c'est l'une de ses qualités principales. Le PVC professionnel se nettoie à l'eau, à l'eau additionnée de javel diluée, ou avec un détergent désinfectant classique des établissements de santé. Pas de produit spécifique à commander, pas de précaution particulière pour le personnel d'entretien. Les soudures à chaud entre les lés rendent la surface continue, sans interstice où l'humidité ou les micro-organismes viendraient se loger. La plinthe à gorge arrondie supprime l'angle droit entre sol et mur, ce qui facilite le passage de la serpillière dans les coins. Concrètement, un protocole de nettoyage quotidien standard suffit à maintenir un cabinet impeccable." },
  { q: "Quel délai pour rénover un cabinet médical ?", a: "Tout dépend de la surface et de l'état du support existant. Pour un cabinet de 80 à 120 mètres carrés, comptez 2 à 4 jours de chantier sur place, idéalement positionnés pendant une fermeture classique : week-end prolongé, ouverture vacances scolaires, semaine de congés annuels. En amont, il faut prévoir 1 à 2 semaines pour la visite et le devis, puis 2 à 5 semaines de délai usine pour la commande des matières selon la gamme retenue. Le pré-assemblage à l'atelier de Villedoux permet de réduire le temps passé dans votre cabinet, ce qui est apprécié quand la fenêtre de fermeture est serrée." },
  { q: "Peut-on poser un sol PVC en gardant le cabinet ouvert ?", a: "C'est possible dans certains cas, en organisant le chantier pièce par pièce sur plusieurs semaines, avec un balisage clair entre la zone en travaux et la zone en activité. Cette formule allonge le chantier global mais évite la fermeture complète. Elle convient bien aux gros cabinets pluri-professionnels où certaines salles peuvent rester en service pendant que d'autres sont rénovées. Pour un cabinet plus modeste, il est généralement plus simple et moins coûteux de fermer 2 à 4 jours pendant une période de congés. Nous évaluons ensemble la meilleure stratégie lors de la visite, en fonction de votre activité et de vos contraintes." },
  { q: "Quel sol pour un cabinet vétérinaire ?", a: "Le cabinet vétérinaire a quelques spécificités. Il faut un sol antidérapant pour la sécurité des animaux paniqués ou anesthésiés, lavable à grande eau, résistant aux griffures de chien et de chat, et capable d'encaisser des produits désinfectants un peu plus agressifs que dans un cabinet humain. Les gammes Forbo Surestep ou Gerflor Tarasafe répondent à ce cahier des charges, avec une surface légèrement granuleuse qui offre l'adhérence nécessaire. La pose en lés soudés avec remontée en plinthe est ici quasi-obligatoire, en particulier dans la salle de chirurgie, l'hospitalisation et la zone d'examen. Les contrôles vétérinaires sanitaires se passent ensuite sans souci." },
  { q: "Est-ce que les sols PVC dégagent des odeurs ?", a: "Les gammes professionnelles que nous posons sont classées A+ pour les émissions dans l'air intérieur, c'est le meilleur classement de l'étiquetage sanitaire français. Concrètement, vous percevrez une légère odeur de neuf le jour de la pose, qui se dissipe en 24 à 48 heures avec une aération normale. Pas de composé volatil qui s'évapore pendant des semaines, pas d'inconfort pour les patients sensibles à leur reprise de rendez-vous. C'est un point que nous vérifions systématiquement dans le choix des gammes proposées, car un cabinet médical ne peut pas se permettre d'odeur résiduelle après chantier. La colle et le primaire sont également choisis dans des références à très faibles émissions." },
  { q: "Intervenez-vous en dehors de la Charente-Maritime ?", a: "Oui, régulièrement. Notre atelier est à Villedoux près de La Rochelle, et nous intervenons sur l'ensemble du grand Ouest : Vendée, Deux-Sèvres, Charente, Vienne, Gironde et bien au-delà. Pour les cabinets médicaux, nous avons une expérience de chantiers à Nantes, Bordeaux, Niort, Poitiers, Angoulême et La Roche-sur-Yon. Le déplacement et l'hébergement sont inclus dans le devis pour les chantiers à plus de 2 heures de route. La logistique d'une rénovation de cabinet se planifie en général sur 6 à 10 semaines entre la première visite et la pose, ce qui laisse largement le temps d'organiser une intervention à distance dans de bonnes conditions." },
]

export default function SolPvcCabinetMedicalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/sol-pvc-cabinet-medical#service',
        name: "Sol PVC pour cabinet médical",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: "Pose de sol PVC en cabinet médical, dentaire, kiné, vétérinaire",
        description: "Pose de sol PVC professionnel pour cabinets médicaux : dentiste, généraliste, kiné, ostéopathe, vétérinaire, ophtalmo, sage-femme. Soudures à chaud, plinthes en gorge, classement A+ air intérieur.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Sol PVC cabinet médical', item: 'https://cbsols.fr/sol-pvc-cabinet-medical' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sol PVC cabinet médical</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Sol PVC pour cabinet médical,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>propreté et calme.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de sol PVC professionnel pour cabinets de santé : dentiste, médecin généraliste, kiné, ostéopathe, vétérinaire, ophtalmologue, sage-femme, pédiatre. Sols faciles à désinfecter, acoustiques, accueillants. CB Sols intervient depuis 27 ans, atelier à Villedoux près de La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=sol-pvc-cabinet-medical" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Intervention sans fermer longtemps</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « On intervient pendant la fermeture du cabinet : un samedi prolongé, une semaine de vacances. Le praticien rouvre le lundi sur un sol propre, calme, sans odeur. C&apos;est ce que CB Sols fait depuis 27 ans. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, gérant de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour quel type de zone */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelles zones du cabinet</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre zones, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre choix de sol.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un cabinet à rénover ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échantillons présentés dans votre cabinet, sous votre éclairage. Devis détaillé sous huitaine, planning calé sur vos fermetures.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?from=sol-pvc-cabinet-medical-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités cabinet */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qu&apos;un sol médical doit faire</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux cabinets de santé.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Un cabinet médical n&apos;est pas un bureau standard. Voici les six points sur lesquels nous orientons systématiquement le choix du sol et de sa pose, en restant accessible, sans noyer le praticien sous le jargon technique.
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
            Les sols <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous posons en cabinet.</em>
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
              « Un cabinet médical, c&apos;est un sol qui doit rassurer le patient et faciliter la vie du praticien. Calme, propre, accueillant, sans odeur. Le reste, c&apos;est de la technique qu&apos;on garde pour nous. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=sol-pvc-cabinet-medical-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite directement dans votre cabinet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marques partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit références <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de confiance pour la santé.</em>
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

      {/* Spécialités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécialités où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Douze spécialités, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>des choix de sol adaptés.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Chaque spécialité médicale a ses usages, ses contraintes et son rapport au patient. Voici comment nous adaptons les sols selon les cabinets que nous rénovons régulièrement.
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
            Vingt minutes au téléphone pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre cabinet.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-cabinet-medical-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la prise de contact à la réouverture.</em>
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
            Sol PVC en cabinet médical, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Conseil clair, sans jargon, ordre de grandeur honnête, suite donnée seulement si le projet a du sens pour vous.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre l&apos;ensemble des établissements recevant des publics sensibles.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/sol-pvc-laboratoire-pharmaceutique" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC laboratoire →</Link>
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
            Votre cabinet rénové <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>sans casse-tête.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place dans votre cabinet. Devis détaillé, sol classé A+, pose pendant votre fermeture, réouverture sans odeur. 27 ans de savoir-faire CB Sols au service des praticiens de santé.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-cabinet-medical-final" variant="primary" size="md">Demander un devis</Button>
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
