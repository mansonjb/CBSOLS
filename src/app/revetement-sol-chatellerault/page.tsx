import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Castle, Home, Mail, MapPin, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revêtement de Sol à Châtellerault | Devis Gratuit sous 48h",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Châtellerault. Bureaux et locaux tertiaires, commerces, cabinets, collectivités, maisons anciennes du centre. CB Sols intervient depuis plus de 25 ans, déplacement organisé depuis Villedoux en visite groupée puis pose calée.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-chatellerault' },
  keywords: ['revêtement sol Châtellerault', 'moquette Châtellerault', 'sol PVC Châtellerault', 'pose tapis Châtellerault', 'artisan sol Châtellerault'],
  openGraph: {
    title: "Revêtement de sol à Châtellerault, le sérieux du Châtelleraudais",
    description: "Moquette, sol PVC et tapis sur mesure à Châtellerault. Bureaux, commerces, cabinets, collectivités, maisons du centre. CB Sols, plus de 25 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-chatellerault.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Bureaux et locaux tertiaires", desc: "Vous gérez un bureau, un siège local ou des espaces tertiaires à Châtellerault. Un sol soigné valorise l'image et un PVC acoustique change le confort au quotidien. On pose en horaires décalés, vos équipes retrouvent un espace prêt le lendemain. La visite de mesures puis la pose groupée tiennent le calendrier." },
  { title: "Commerces et boutiques du centre", desc: "Vous tenez une boutique ou un commerce près du pont Henri-IV ou dans une rue commerçante. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. Sol résistant au passage, facile à entretenir, et un rendu qui valorise vos produits." },
  { title: "Cabinets et collectivités", desc: "Vous recevez du public dans un cabinet, une étude ou un local de collectivité. PVC homogène et moquette acoustique, conformes ERP, posés proprement. On choisit les bons produits, on fournit les attestations et les PV feu, on dialogue avec le bureau de contrôle. Vous n'avez rien à comprendre des fiches techniques." },
  { title: "Maisons anciennes du centre à rénover", desc: "Vous rénovez une maison ancienne du centre châtelleraudais, en bord de Vienne ou dans le quartier patrimonial. Les parquets anciens sont précieux. On pose une moquette laine ou un tapis sur mesure sans abîmer le bois, raccords validés avec vous. On respecte le caractère du lieu." },
]

const exigences = [
  { title: "Une visite groupée, puis une pose calée", desc: "Châtellerault est à bonne distance de notre atelier, environ deux heures de route. On organise donc une visite de prise de mesures en début de projet, puis on revient poser une fois la confection terminée. Vous n'avez pas dix allers-retours à gérer, juste deux rendez-vous clairs et un calendrier tenu." },
  { title: "Une organisation pensée pour la distance", desc: "Sur un chantier à deux heures de l'atelier, l'improvisation coûte cher. On prépare donc tout en amont : cotes au laser à la visite, pré-assemblage à blanc à Villedoux, matériel calé avant le départ. L'équipe arrive sur place avec un plan précis, la pose se fait d'un bloc, sans temps mort." },
  { title: "On travaille quand vous ne travaillez pas", desc: "Sur un bureau, un commerce ou un cabinet, on ne peut pas couper l'activité. On vient donc le soir, le week-end ou le jour de fermeture. Vous rouvrez le lendemain matin, le sol est posé et nettoyé. Aucune journée de chiffre d'affaires perdue." },
  { title: "Moins de bruit, plus de calme", desc: "Dans un open space, une salle d'attente ou un local de collectivité, le bruit fatigue tout le monde. Une bonne moquette ou un sol PVC acoustique coupe la moitié du brouhaha. Les conversations passent mieux, vos visiteurs patientent dans le calme. On le sent dès le premier jour." },
  { title: "Les normes, on s'en occupe", desc: "Cabinet, collectivité, local recevant du public : il y a des règles strictes sur la sécurité incendie et l'hygiène. On choisit les bons produits pour vous, on fournit les attestations, on dialogue avec le bureau de contrôle. Vous n'avez rien à comprendre des fiches techniques." },
  { title: "Un seul interlocuteur, du début à la fin", desc: "Sur un chantier, vous avez déjà assez de prestataires à suivre. Nous, on est un seul nom dans votre carnet. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps et vous savez toujours à qui parler." },
]

const materiaux = [
  { name: "Sols PVC acoustiques Gerflor et Tarkett", desc: "On en pose beaucoup dans les bureaux et les locaux tertiaires châtelleraudais. La sous-couche absorbe les bruits de pas, vos équipes travaillent dans le calme. Le choix de couleurs est large, on peut s'aligner sur votre identité. Le sol tient facilement quinze ans, souvent vingt." },
  { name: "Moquette dalles EGE et Forbo", desc: "Le bon choix pour un bureau, un cabinet ou une collectivité. Les dalles font 50×50 cm. Si quelqu'un renverse un café, on remplace juste la dalle abîmée. La sous-couche acoustique adoucit la pièce. Vous tenez quinze à vingt ans en usage tertiaire classique." },
  { name: "Moquette laine vierge tissée", desc: "Pour les salons des maisons anciennes du centre châtelleraudais. La laine se patine en vieillissant, elle ne s'écrase pas. Au toucher elle est ferme, à l'œil elle se distingue. On choisit avec vous un uni ou un motif discret pour respecter les boiseries anciennes." },
  { name: "Sols PVC homogènes pour collectivités", desc: "Sur les couloirs et les locaux recevant du public, on part sur du PVC homogène. C'est le même matériau de haut en bas, donc pas de couche d'usure à percer. On soude les lés à chaud, l'eau ne passe nulle part. Vingt à vingt-cinq ans devant vous, même avec un trafic intense." },
  { name: "Sols PVC effet bois pour commerces", desc: "Pour une boutique ou un commerce de centre-ville, le PVC effet bois fait merveille. Le rendu visuel est convaincant, le sol résiste au passage et se nettoie en cinq minutes. On peut même le poser sur un chauffage au sol. La pose est rapide et propre." },
  { name: "Profilés laiton et alu brossé Romus", desc: "Pour les seuils et les nez de marche, on soigne le détail. On coordonne avec votre quincaillerie existante, ce qui compte sur une maison ancienne. Sur les chantiers un peu exigeants, on peut faire fabriquer du sur mesure. C'est le genre de détail qui se remarque à la livraison." },
]

const marques = [
  { name: "Gerflor", desc: "Le français de Lyon, que nous connaissons en profondeur. Leurs PVC Mipolam et Taralay sont notre référence polyvalente sur les bureaux et les commerces châtelleraudais. Choix large, acoustique sérieuse, entretien simple." },
  { name: "Tarkett", desc: "Pour les bureaux et les espaces tertiaires qui demandent un vrai confort acoustique, on part sur du Tarkett iQ Granit. Il vieillit bien et reste notre référence sur les sols soumis à un passage régulier." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Les certifications environnementales sont solides, on les sort souvent en collectivité et en cabinet." },
  { name: "EGE Carpets", desc: "Le tisseur danois, notre référence pour un bureau de direction qui s'impose. Leurs dalles intègrent déjà la sous-couche acoustique, ce qui facilite la pose. On les recommande sur les bureaux et les salles de réunion." },
  { name: "objectflor", desc: "Pour les commerces et les boutiques de centre-ville, leurs lames PVC effet bois sont une valeur sûre. Le rendu est crédible, la pose va vite, et la résistance au passage tient dans la durée." },
  { name: "Bostik", desc: "Pour les colles et les ragréages, on travaille avec Bostik. Ce sont des produits fiables qui garantissent une pose durable, surtout sur les supports anciens ou irréguliers des maisons du centre." },
  { name: "objectflor Expona", desc: "Quand un commerce veut un sol design qui en jette sans sacrifier la résistance, leurs gammes Expona font le travail. Effet bois, béton ou pierre, le choix est large et le rendu haut de gamme." },
  { name: "Romus", desc: "Pour les accessoires de finition, profilés et nez de marche, Romus est notre référence. Du laiton brossé à l'alu, on trouve toujours la finition qui s'accorde avec votre intérieur." },
]

const quartiers = [
  { nom: "Centre-ville", detail: "Pont Henri-IV, bords de la Vienne, rues commerçantes. Commerces, cabinets, locaux tertiaires et maisons anciennes du centre à rénover." },
  { nom: "Quartier de la Manu", detail: "Ancienne manufacture d'armes reconvertie en pôle culturel et tertiaire. Bureaux, espaces d'accueil et locaux d'activité à équiper." },
  { nom: "Châteauneuf", detail: "Rive droite de la Vienne, habitat ancien et résidentiel. Maisons de caractère et projets de rénovation patrimoniale." },
  { nom: "Ozon", detail: "Quartier résidentiel et de services. Copropriétés, cabinets et maisons familiales en cours de modernisation." },
  { nom: "Lac", detail: "Secteur résidentiel proche du plan d'eau. Lotissements, maisons familiales et petites unités tertiaires." },
  { nom: "Zone industrielle nord", detail: "Pôle d'activité industriel et tertiaire au nord de la ville, héritage automobile et mécanique. Bureaux d'entreprise et espaces d'accueil." },
  { nom: "Targé", detail: "Quartier résidentiel intégré à la ville. Maisons familiales, lotissements et locaux de proximité." },
  { nom: "Naintré", detail: "Commune voisine au sud, zones d'activité et habitat pavillonnaire. Bureaux, commerces et maisons familiales." },
  { nom: "Cenon-sur-Vienne", detail: "Commune limitrophe en bord de Vienne. Habitat résidentiel et petites unités commerciales à équiper." },
  { nom: "Antran", detail: "Bourg du nord châtelleraudais. Maisons de caractère, rénovations résidentielles et habitat ancien." },
  { nom: "Availles-en-Châtellerault", detail: "Commune résidentielle de l'agglomération. Lotissements, maisons familiales et locaux de proximité." },
  { nom: "Vouneuil-sur-Vienne", detail: "Bourg patrimonial en bord de Vienne. Maisons anciennes, projets de rénovation et habitat résidentiel." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet (bureau, commerce, cabinet, collectivité, maison ancienne), surface estimée, calendrier souhaité, contraintes ERP éventuelles. On cadre ensemble la suite et on fixe la date de visite." },
  { step: 'Visite à Châtellerault', desc: "Déplacement organisé depuis Villedoux, environ 2h de route. Prise de cotes au laser, repérage des contraintes d'accès, photos pour coordination coloris et raccords. Vu la distance, on prépare une visite complète pour ne revenir qu'une fois, le jour de la pose groupée." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Châtellerault, chez vous ou au bureau. Validation finale sous l'éclairage du lieu de pose. Pour les collectivités et cabinets, transmission des fiches techniques, PV feu et certifications environnementales requises." },
  { step: 'Confection atelier', desc: "3 à 10 semaines selon gamme : moquette tissée, dalles, PVC découpé, tapis sur mesure. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale rapide et groupée à Châtellerault." },
  { step: 'Pose à Châtellerault', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités ou la fenêtre du chantier. Pose groupée pour limiter les trajets, phasage en horaires décalés possible pour les commerces et bureaux en activité. Nettoyage complet à la livraison." },
]

const faq = [
  { q: "Vous venez vraiment à Châtellerault depuis La Rochelle ?", a: "Oui. Châtellerault, c'est environ 160 km, autour de 2h par la route. Vu la distance, on s'organise : une visite de prise de mesures complète en début de projet, puis une pose groupée une fois la confection terminée. On prépare tout en amont à l'atelier pour ne revenir qu'une fois. L'hébergement et le déplacement sont compris dans le devis. Vous n'avez pas une série d'allers-retours à coordonner, juste deux rendez-vous clairs." },
  { q: "Comment vous organisez un chantier à cette distance ?", a: "C'est tout l'enjeu. À deux heures de l'atelier, on ne peut pas se permettre d'improviser. On prend les cotes au laser à la visite, on pré-assemble un maximum à blanc à Villedoux, on cale le matériel avant de partir. L'équipe arrive à Châtellerault avec un plan précis et pose d'un bloc, sans temps mort. Cette méthode, on l'applique depuis plus de 25 ans sur tous nos chantiers éloignés." },
  { q: "Vous travaillez sur les bureaux et locaux tertiaires ?", a: "Oui, c'est un de nos terrains naturels. Châtellerault concentre du tertiaire, des cabinets et des locaux hérités de son passé industriel. Ça demande un sol soigné et un travail propre. On pose du PVC acoustique dans les espaces de travail et de la moquette dalles dans les bureaux. On vient en horaires décalés, vos équipes retrouvent un espace prêt le lendemain." },
  { q: "Vous intervenez sur les commerces du centre-ville ?", a: "Oui. Pour une boutique ou un commerce près du pont Henri-IV ou dans une rue commerçante, le sol doit valoriser vos produits et résister au passage. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. On protège l'existant, on nettoie tout à la livraison, et le lendemain matin vous rouvrez dans un espace prêt à accueillir vos clients." },
  { q: "Vous intervenez sur les collectivités et les cabinets ?", a: "Bien sûr. Un local de collectivité, un cabinet, une étude qui reçoit du public relèvent du règlement ERP. Il faut des produits classés feu, qui supportent un entretien intensif, avec des attestations claires. On choisit les bons produits pour vous, on fournit tous les PV feu pour la commission de sécurité, et on planifie l'intervention pour ne pas perturber l'accueil du public." },
  { q: "Vous intervenez sur les maisons anciennes du centre ?", a: "Bien sûr. Le centre de Châtellerault et les bords de la Vienne concentrent de belles maisons anciennes, souvent avec leur parquet d'origine. On y intervient en réversible chaque fois que possible : on pose sans clouer, sans coller agressivement. Si vous voulez tout reprendre dans dix ans, le bois en dessous sera intact. Les moquettes laine et les tapis sur mesure y trouvent leur place." },
  { q: "Combien de temps tient un sol PVC sur un bureau ou un commerce ?", a: "Compter facilement quinze à vingt ans, parfois plus. Un PVC homogène vieillit bien parce qu'il n'a pas de couche d'usure à percer, c'est le même matériau de haut en bas. Sur les zones très passantes comme un accueil ou une entrée de boutique, on prend un classement 34, qui tolère mieux le trafic. Un nettoyage professionnel une fois par an suffit à conserver l'aspect du premier jour." },
]

export default function RevetementSolChatelleraultPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-chatellerault#service',
        name: "Revêtement de sol à Châtellerault",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Châtellerault' },
          { '@type': 'AdministrativeArea', name: 'Vienne' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Châtellerault et dans la Vienne",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour bureaux, locaux tertiaires, commerces, cabinets, collectivités et maisons anciennes à Châtellerault.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Châtellerault', item: 'https://cbsols.fr/revetement-sol-chatellerault' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="chatellerault" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Châtellerault</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Châtellerault,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>le sérieux du Châtelleraudais.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Châtellerault. Bureaux et locaux tertiaires, commerces du centre, cabinets et collectivités, maisons anciennes en bord de Vienne. Atelier basé près de La Rochelle, déplacement organisé en visite groupée puis pose calée.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=chatellerault" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Châtellerault est à deux heures de l&apos;atelier. La distance ne fait pas peur quand l&apos;organisation est carrée : une visite de mesures, puis une pose groupée. C&apos;est la méthode que CB Sols applique depuis plus de 25 ans sur ses chantiers éloignés. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour quel type de projet */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de projet</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même rigueur d&apos;exécution.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Châtellerault ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec vous, votre responsable d&apos;établissement ou votre architecte. Visite de prise de mesures organisée et groupée, devis détaillé sous 48 heures.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=chatellerault-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Châtellerault</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers châtelleraudais.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Châtellerault, à deux heures de notre atelier, ce n&apos;est pas reproduire un chantier de proximité. Voici les six points sur lesquels on structure notre méthode dès la première visite, pour tenir le calendrier et maîtriser le déplacement.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Châtellerault</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons dans la Vienne.</em>
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
              « Un bureau, une collectivité, un commerce, une maison ancienne en bord de Vienne : chacun a ses contraintes. On les prend au sérieux dès la première visite, et on tient le calendrier qu&apos;on annonce, même à deux heures de route. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=chatellerault-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite sur site à Châtellerault</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets châtelleraudais.</em>
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

      {/* Quartiers */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quartiers et communes où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Châtellerault et le Châtelleraudais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;aux communes voisines.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur Châtellerault et l&apos;ensemble du Châtelleraudais, ainsi que sur les communes voisines, là où se concentrent les projets tertiaires, commerciaux, publics et résidentiels.
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
            Un appel pour défricher le sujet.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier châtelleraudais.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=chatellerault-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Châtellerault.</em>
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
            Revêtement de sol à Châtellerault, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Pas de hotline, pas de standard. Conseil clair, ordre de grandeur honnête, suite donnée seulement si le projet a du sens pour vous comme pour nous.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionSubtitle="Notre savoir-faire couvre d'autres villes et univers susceptibles de vous intéresser. Prenez le temps de parcourir, posez vos questions, nous y répondrons."
        items={[
          { href: "/revetement-sol-poitiers", title: "Revêtement sol Poitiers", teaser: "Préfecture de la Vienne, tertiaire et patrimoine. Notre savoir-faire au cœur du Poitou.", icon: MapPin },
          { href: "/revetement-sol-niort", title: "Revêtement sol Niort", teaser: "Sièges sociaux, hôtels particuliers, EHPAD. Notre savoir-faire au cœur des Deux-Sèvres.", icon: MapPin },
          { href: "/services", title: "Nos services", teaser: "Moquette, sol PVC, tapis sur mesure, nettoyage. Tout notre métier au service de votre projet.", icon: Building2 },
          { href: "/particuliers", title: "Pour les particuliers", teaser: "Moquette, sol PVC, tapis sur mesure : notre savoir-faire au service de votre maison.", icon: Home },
          { href: "/realisations", title: "Nos réalisations", teaser: "Découvrez nos chantiers récents en images. Le rendu, les finitions, le détail qui compte.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gérant vous répond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet châtelleraudais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Châtellerault. Devis détaillé sous 48 heures, finitions soignées, déplacement maîtrisé et calendrier tenu. CB Sols, plus de 25 ans de savoir-faire au service des projets dans la Vienne.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=chatellerault-final" variant="primary" size="md">Demander un devis</Button>
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
