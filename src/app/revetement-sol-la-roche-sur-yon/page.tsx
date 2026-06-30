import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Castle, Home, Mail, MapPin, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revêtement de Sol à La Roche-sur-Yon | Devis Gratuit sous 48h",
  description: "Pose de moquette, sol PVC et tapis sur mesure à La Roche-sur-Yon. Bureaux et cabinets, commerces de centre-ville, EHPAD et résidences seniors, maisons bourgeoises à rénover. CB Sols intervient depuis plus de 25 ans, déplacement organisé depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-la-roche-sur-yon' },
  keywords: ['revêtement sol La Roche-sur-Yon', 'moquette La Roche-sur-Yon', 'sol PVC La Roche-sur-Yon', 'pose tapis La Roche-sur-Yon', 'artisan sol La Roche-sur-Yon'],
  openGraph: {
    title: "Revêtement de sol à La Roche-sur-Yon, le sérieux de la préfecture",
    description: "Moquette, sol PVC et tapis sur mesure à La Roche-sur-Yon. Bureaux, commerces, EHPAD, maisons bourgeoises. CB Sols, plus de 25 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-la-roche-sur-yon.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Bureaux, cabinets et professions libérales", desc: "Vous recevez vos clients dans un cabinet du centre de La Roche-sur-Yon. Un sol soigné rassure dès la salle d'attente. On pose du PVC acoustique dans les espaces de travail et de la moquette laine dans les bureaux où vous recevez. On vient quand vous ne consultez pas." },
  { title: "Commerces et boutiques de centre-ville", desc: "Vous tenez une boutique près de la place Napoléon ou dans une rue commerçante. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. Sol résistant au passage, facile à entretenir, et un rendu qui valorise vos produits." },
  { title: "EHPAD et résidences seniors", desc: "Vous gérez un EHPAD ou une résidence médicalisée yonnaise. PVC homogène Bfl-s1 dans les couloirs, moquette laine en chambres d'invités, antidérapant R10 dans les salles de bains. On fournit les PV feu et la documentation ERP pour la commission de sécurité." },
  { title: "Maisons bourgeoises et de ville à rénover", desc: "Vous rénovez une maison bourgeoise du centre yonnais, souvent au plan pentagonal de la ville napoléonienne. Les parquets anciens sont précieux. On pose une moquette laine ou un tapis sur mesure sans abîmer le bois, raccords validés avec vous. On respecte le caractère du lieu." },
]

const exigences = [
  { title: "Une visite groupée, puis une pose calée", desc: "La Roche-sur-Yon est à bonne distance de notre atelier. On organise donc une visite de prise de mesures en début de projet, puis on revient poser une fois la confection terminée. Vous n'avez pas dix allers-retours à gérer, juste deux rendez-vous clairs et un calendrier tenu." },
  { title: "On travaille quand vous ne travaillez pas", desc: "Sur un bureau, un cabinet ou un commerce, on ne peut pas couper l'activité. On vient donc le soir, le week-end ou le jour de fermeture. Vous rouvrez le lendemain matin, le sol est posé et nettoyé. Aucune journée de chiffre d'affaires perdue." },
  { title: "Moins de bruit, plus de calme", desc: "Dans un open space, une salle d'attente ou un cabinet, le bruit fatigue tout le monde. Une bonne moquette ou un sol PVC acoustique coupe la moitié du brouhaha. Les conversations passent mieux, vos clients patientent dans le calme. On le sent dès le premier jour." },
  { title: "On respecte les parquets anciens", desc: "Beaucoup de maisons bourgeoises du centre yonnais ont gardé leur parquet d'origine. On pose sans clouer, sans coller agressivement. Si vous voulez retirer la moquette dans dix ans, le bois en dessous sera intact. C'est ça, respecter une belle maison." },
  { title: "Les normes, on s'en occupe", desc: "EHPAD, cabinet, résidence, bureau ouvert au public : il y a des règles strictes sur la sécurité incendie et l'hygiène. On choisit les bons produits pour vous, on fournit les attestations, on dialogue avec le bureau de contrôle. Vous n'avez rien à comprendre des fiches techniques." },
  { title: "Un seul interlocuteur, du début à la fin", desc: "Sur un chantier, vous avez déjà assez de prestataires à suivre. Nous, on est un seul nom dans votre carnet. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps et vous savez toujours à qui parler." },
]

const materiaux = [
  { name: "Sols PVC acoustiques Gerflor et Tarkett", desc: "On en pose beaucoup dans les bureaux et les cabinets yonnais. La sous-couche absorbe les bruits de pas, vos clients patientent dans le calme. Le choix de couleurs est large, on peut s'aligner sur votre identité. Le sol tient facilement quinze ans, souvent vingt." },
  { name: "Moquette dalles EGE et Forbo", desc: "Le bon choix pour un cabinet, une administration ou un bureau de direction. Les dalles font 50×50 cm. Si quelqu'un renverse un café, on remplace juste la dalle abîmée. La sous-couche acoustique adoucit la pièce. Vous tenez quinze à vingt ans en usage tertiaire classique." },
  { name: "Moquette laine vierge tissée", desc: "Pour les salons des maisons bourgeoises du centre yonnais. La laine se patine en vieillissant, elle ne s'écrase pas. Au toucher elle est ferme, à l'œil elle se distingue. On choisit avec vous un uni ou un motif discret pour respecter les boiseries anciennes." },
  { name: "Sols PVC homogènes pour EHPAD", desc: "Sur les couloirs et les chambres d'EHPAD, on part sur du PVC homogène. C'est le même matériau de haut en bas, donc pas de couche d'usure à percer. On soude les lés à chaud, l'eau ne passe nulle part. Vingt à vingt-cinq ans devant vous, même avec un trafic intense." },
  { name: "Sols PVC effet bois pour commerces", desc: "Pour une boutique ou un commerce de centre-ville, le PVC effet bois fait merveille. Le rendu visuel est convaincant, le sol résiste au passage et se nettoie en cinq minutes. On peut même le poser sur un chauffage au sol. La pose est rapide et propre." },
  { name: "Profilés laiton et alu brossé Romus", desc: "Pour les seuils et les nez de marche, on soigne le détail. On coordonne avec votre quincaillerie existante, ce qui compte sur une maison ancienne. Sur les chantiers un peu exigeants, on peut faire fabriquer du sur mesure. C'est le genre de détail qui se remarque à la livraison." },
]

const marques = [
  { name: "Gerflor", desc: "Le français de Lyon, que nous connaissons en profondeur. Leurs PVC Mipolam et Taralay sont notre référence polyvalente sur les bureaux et les commerces yonnais. Choix large, acoustique sérieuse, entretien simple." },
  { name: "Tarkett", desc: "Pour les cabinets et les espaces tertiaires qui demandent un vrai confort acoustique, on part sur du Tarkett iQ Granit. Il vieillit bien et reste notre référence sur les sols soumis à un passage régulier." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Les certifications environnementales sont solides, on les sort souvent en EHPAD et en cabinet." },
  { name: "EGE Carpets", desc: "Le tisseur danois, notre référence pour un bureau de direction qui s'impose. Leurs dalles intègrent déjà la sous-couche acoustique, ce qui facilite la pose. On les recommande sur les cabinets et les salles de réunion." },
  { name: "objectflor", desc: "Pour les commerces et les boutiques de centre-ville, leurs lames PVC effet bois sont une valeur sûre. Le rendu est crédible, la pose va vite, et la résistance au passage tient dans la durée." },
  { name: "Bostik", desc: "Pour les colles et les ragréages, on travaille avec Bostik. Ce sont des produits fiables qui garantissent une pose durable, surtout sur les supports anciens ou irréguliers des maisons bourgeoises." },
  { name: "objectflor Expona", desc: "Quand un commerce veut un sol design qui en jette sans sacrifier la résistance, leurs gammes Expona font le travail. Effet bois, béton ou pierre, le choix est large et le rendu haut de gamme." },
  { name: "Romus", desc: "Pour les accessoires de finition, profilés et nez de marche, Romus est notre référence. Du laiton brossé à l'alu, on trouve toujours la finition qui s'accorde avec votre intérieur." },
]

const quartiers = [
  { nom: "Centre-ville", detail: "Place Napoléon, plan pentagonal, rues commerçantes. Commerces, cabinets de profession libérale, administrations et maisons bourgeoises à rénover." },
  { nom: "Quartier de la gare", detail: "Pôle tertiaire et d'échange, bureaux et professions libérales. Espaces de travail et locaux d'accueil à équiper." },
  { nom: "Les Pyramides", detail: "Quartier résidentiel et de services. Cabinets, copropriétés et maisons familiales en cours de modernisation." },
  { nom: "Le Bourg-sous-La-Roche", detail: "Ancien bourg intégré à la ville, habitat traditionnel et résidentiel. Maisons de caractère et projets de rénovation." },
  { nom: "Zone industrielle Acti-Sud", detail: "Pôle d'activité tertiaire et industriel au sud de la ville. Bureaux d'entreprise, salles de réunion et espaces d'accueil." },
  { nom: "Quartier de la Vigne-aux-Roses", detail: "Secteur résidentiel et de services. Lotissements, maisons familiales et petites unités tertiaires." },
  { nom: "Aubépin", detail: "Quartier résidentiel et de proximité. Copropriétés, cabinets et maisons individuelles à moderniser." },
  { nom: "Mouilleron-le-Captif", detail: "Commune voisine en plein essor, zones d'activité et habitat récent. Bureaux, commerces et résidences contemporaines." },
  { nom: "La Roche-sur-Yon nord", detail: "Quartiers résidentiels et lotissements récents. Clientèle particuliers attachée aux finitions soignées." },
  { nom: "Dompierre-sur-Yon", detail: "Commune limitrophe, habitat pavillonnaire et petites unités tertiaires. Cabinets et maisons familiales." },
  { nom: "Aizenay", detail: "Bourg dynamique au nord-ouest de l'agglomération. Commerces, cabinets et maisons de caractère à rénover." },
  { nom: "La Ferrière", detail: "Commune résidentielle de l'agglomération yonnaise. Lotissements, maisons familiales et locaux d'activité." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet (bureau, commerce, EHPAD, maison bourgeoise), surface estimée, calendrier souhaité, contraintes ERP éventuelles. On cadre ensemble la suite et on fixe la date de visite." },
  { step: 'Visite à La Roche-sur-Yon', desc: "Déplacement organisé depuis Villedoux, environ 1h45 de route. Prise de cotes au laser, repérage des contraintes d'accès, photos pour coordination coloris et raccords. Pour les commerces et cabinets, on identifie les fenêtres d'intervention en horaires décalés." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à La Roche-sur-Yon, chez vous ou au cabinet. Validation finale sous l'éclairage du lieu de pose. Pour les EHPAD, transmission des fiches techniques, PV feu et certifications environnementales requises." },
  { step: 'Confection atelier', desc: "3 à 10 semaines selon gamme : moquette tissée, dalles, PVC découpé, tapis sur mesure. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale rapide et soignée à La Roche-sur-Yon." },
  { step: 'Pose à La Roche-sur-Yon', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités ou la fenêtre du chantier. Phasage en horaires décalés possible pour les commerces et cabinets en activité. Nettoyage complet à la livraison." },
]

const faq = [
  { q: "Vous venez vraiment à La Roche-sur-Yon depuis La Rochelle ?", a: "Oui. La Roche-sur-Yon, c'est environ 140 km, autour de 1h45 par la route. On organise la visite de prise de mesures en début de projet, puis on revient poser une fois la confection terminée. L'hébergement et le déplacement sont compris dans le devis. Sur les chantiers plus importants, l'équipe reste sur place jusqu'à la livraison. Vous n'avez pas une série d'allers-retours à coordonner, juste deux rendez-vous clairs." },
  { q: "Vous travaillez sur les bureaux et cabinets de la préfecture ?", a: "Oui, c'est un de nos terrains naturels. La Roche-sur-Yon concentre administrations, cabinets de profession libérale et bureaux d'entreprise. Ça demande un sol soigné et un travail propre. On pose du PVC acoustique dans les espaces de travail et de la moquette laine là où vous recevez. On vient quand vous ne consultez pas, vous rouvrez le lendemain dans un cadre net." },
  { q: "Comment ça se passe sur un EHPAD côté normes ERP ?", a: "Les EHPAD relèvent du règlement ERP type J. Il faut du Bfl-s1 ou Cfl-s1 selon la zone, des produits qui supportent le bionettoyage, des fiches d'entretien claires. On choisit les bons produits pour vous. On fournit tous les PV feu et attestations pour la commission de sécurité. Et on planifie zone par zone pour ne pas perturber la vie des résidents." },
  { q: "Vous intervenez sur les maisons bourgeoises du centre ?", a: "Bien sûr. Le centre de La Roche-sur-Yon, ville napoléonienne au plan pentagonal, concentre de belles maisons bourgeoises, souvent avec leur parquet d'origine. On y intervient en réversible chaque fois que possible : on pose sans clouer, sans coller agressivement. Si vous voulez tout reprendre dans dix ans, le bois en dessous sera intact. Les moquettes laine et les tapis sur mesure y trouvent leur place." },
  { q: "Vous intervenez sur les commerces du centre-ville ?", a: "Oui. Pour une boutique ou un commerce, le sol doit valoriser vos produits et résister au passage. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. On protège l'existant, on nettoie tout à la livraison, et le lendemain matin vous rouvrez dans un espace prêt à accueillir vos clients." },
  { q: "Combien de temps tient un sol PVC sur un bureau ou un commerce ?", a: "Compter facilement quinze à vingt ans, parfois plus. Un PVC homogène vieillit bien parce qu'il n'a pas de couche d'usure à percer, c'est le même matériau de haut en bas. Sur les zones très passantes comme un accueil ou une entrée de boutique, on prend un classement 34, qui tolère mieux le trafic. Un nettoyage professionnel une fois par an suffit à conserver l'aspect du premier jour." },
  { q: "Vous pouvez poser en horaires décalés sur un bureau ou un commerce en activité ?", a: "Oui, c'est même la norme sur ce type de chantier. On organise les interventions en soirée, le week-end ou le jour de fermeture, selon votre rythme. On pré-assemble un maximum en atelier à Villedoux, donc la pose sur site va vite. On protège votre mobilier et vos postes de travail avant de commencer. Le lendemain, vous reprenez normalement, sol posé et nettoyé." },
]

export default function RevetementSolLaRocheSurYonPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-la-roche-sur-yon#service',
        name: "Revêtement de sol à La Roche-sur-Yon",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'La Roche-sur-Yon' },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à La Roche-sur-Yon et en Vendée",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour bureaux, cabinets, commerces, EHPAD et maisons bourgeoises à La Roche-sur-Yon.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à La Roche-sur-Yon', item: 'https://cbsols.fr/revetement-sol-la-roche-sur-yon' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="la-roche-sur-yon" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol La Roche-sur-Yon</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à La Roche-sur-Yon,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>le sérieux de la préfecture.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à La Roche-sur-Yon. Bureaux et cabinets de profession libérale, commerces de centre-ville, EHPAD et résidences seniors, maisons bourgeoises à rénover. Atelier basé près de La Rochelle, déplacement organisé en visite groupée puis pose calée.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=la-roche-sur-yon" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « La Roche-sur-Yon, c&apos;est une ville de bureaux, de cabinets et d&apos;administrations. On y vient avec une méthode simple : une visite de mesures, puis une pose groupée. Le déplacement est maîtrisé et le calendrier tenu, comme CB Sols le fait depuis plus de 25 ans. »
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à La Roche-sur-Yon ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec vous, votre responsable d&apos;établissement ou votre architecte. Visite de prise de mesures organisée rapidement, devis détaillé sous 48 heures.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=la-roche-sur-yon-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités La Roche-sur-Yon</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers yonnais.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à La Roche-sur-Yon, ce n&apos;est pas reproduire un chantier standard. Voici les six points sur lesquels on structure notre méthode dès la première visite, pour tenir le calendrier et maîtriser le déplacement.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour La Roche-sur-Yon</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons en Vendée.</em>
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
              « Un cabinet, une administration, un EHPAD, une maison bourgeoise du centre : chacun a ses contraintes. On les prend au sérieux dès la première visite, et on tient le calendrier qu&apos;on annonce. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=la-roche-sur-yon-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite sur site à La Roche-sur-Yon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets yonnais.</em>
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
            La Roche-sur-Yon et son agglomération, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;aux communes voisines.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur La Roche-sur-Yon et l&apos;ensemble de son agglomération, ainsi que sur les communes voisines, là où se concentrent les projets tertiaires, commerciaux, médico-sociaux et résidentiels.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier yonnais.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=la-roche-sur-yon-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à La Roche-sur-Yon.</em>
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
            Revêtement de sol à La Roche-sur-Yon, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
          { href: "/ile-de-re", title: "Île de Ré", teaser: "Maisons de village et villas du littoral. Sols qui supportent le sel, le sable et la vie au quotidien.", icon: MapPin },
          { href: "/revetement-sol-cap-ferret", title: "Revêtement sol Cap Ferret", teaser: "Villas du Bassin d'Arcachon. Sols qui résistent au sel, au sable et à la lumière de l'océan.", icon: MapPin },
          { href: "/particuliers", title: "Pour les particuliers", teaser: "Moquette, sol PVC, tapis sur mesure : notre savoir-faire au service de votre maison.", icon: Home },
          { href: "/secteurs", title: "Nos secteurs", teaser: "Tertiaire, santé, hôtellerie, commerce. Des solutions pensées pour chaque type d'établissement.", icon: Castle },
          { href: "/realisations", title: "Nos réalisations", teaser: "Découvrez nos chantiers récents en images. Le rendu, les finitions, le détail qui compte.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gérant vous répond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet yonnais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à La Roche-sur-Yon. Devis détaillé sous 48 heures, finitions soignées, déplacement maîtrisé et calendrier tenu. CB Sols, plus de 25 ans de savoir-faire au service des projets en Vendée.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=la-roche-sur-yon-final" variant="primary" size="md">Demander un devis</Button>
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
