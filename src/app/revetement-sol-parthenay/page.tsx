import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Castle, Home, Mail, MapPin, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revêtement de Sol à Parthenay | Devis Gratuit sous 48h",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Parthenay. Maisons anciennes du centre médiéval, commerces, cabinets, collectivités. CB Sols intervient depuis plus de 25 ans avec une vraie prudence sur les supports anciens, déplacement depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-parthenay' },
  keywords: ['revêtement sol Parthenay', 'moquette Parthenay', 'sol PVC Parthenay', 'pose tapis Parthenay', 'artisan sol Parthenay'],
  openGraph: {
    title: "Revêtement de sol à Parthenay, le respect du bâti ancien",
    description: "Moquette, sol PVC et tapis sur mesure à Parthenay. Cité médiévale, maisons anciennes, commerces, collectivités. CB Sols, plus de 25 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-parthenay.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Maisons anciennes du centre médiéval", desc: "Vous habitez une maison ancienne en pierre près de la porte Saint-Jacques ou rue de la Vau Saint-Jacques. Le bâti est précieux et fragile. On pose en réversible, sans clou ni colle agressive, pour respecter les sols anciens. Vous gardez la valeur patrimoniale du bien." },
  { title: "Commerces et boutiques du centre", desc: "Vous tenez un commerce dans la cité médiévale ou ses abords. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. Sol résistant au passage, facile à entretenir, et un rendu qui valorise votre boutique sans dénaturer le lieu." },
  { title: "Cabinets et professions libérales", desc: "Vous recevez vos clients dans un cabinet de Parthenay. Un sol soigné rassure dès la salle d'attente. On pose du PVC acoustique dans les espaces de travail et de la moquette laine là où vous recevez. On vient quand vous ne consultez pas." },
  { title: "Collectivités et services publics", desc: "Vous gérez un bâtiment communal, une mairie, un équipement public. On choisit des sols conformes aux exigences ERP, on fournit les PV feu et la documentation, on dialogue avec le bureau de contrôle. On phase les travaux pour ne pas perturber l'accueil du public." },
]

const exigences = [
  { title: "La prudence sur les supports anciens", desc: "Le centre médiéval de Parthenay garde des sols anciens : tomettes, planchers d'origine, supports irréguliers. On ne pose jamais à l'aveugle. On sonde le support, on vérifie l'humidité, on choisit le bon ragréage ou la bonne sous-couche. Pas de mauvaise surprise une fois la pose terminée." },
  { title: "Le secteur sauvegardé, on respecte", desc: "Parthenay protège son patrimoine médiéval. Certains travaux visibles depuis la rue ou touchant au bâti classé demandent de la prudence. Sur un sol intérieur, on reste discret et réversible, et on s'aligne avec votre architecte si le projet touche à quelque chose de protégé." },
  { title: "Une pose réversible qui respecte le bâti", desc: "Dans une maison ancienne en pierre, on pose sans clouer, sans coller agressivement. Si vous voulez retirer la moquette dans dix ans, le sol d'origine sera intact. C'est ça, respecter un bien qui a traversé les siècles." },
  { title: "Une visite groupée, puis une pose calée", desc: "Parthenay est à bonne distance de notre atelier. On organise donc une visite de prise de mesures en début de projet, puis on revient poser une fois la confection terminée. Vous n'avez pas dix allers-retours à gérer, juste deux rendez-vous clairs et un calendrier tenu." },
  { title: "On travaille quand vous ne travaillez pas", desc: "Sur un commerce ou un cabinet, on ne peut pas couper l'activité. On vient donc le soir, le week-end ou le jour de fermeture. Vous rouvrez le lendemain matin, le sol est posé et nettoyé. Aucune journée de chiffre d'affaires perdue." },
  { title: "Un seul interlocuteur, du début à la fin", desc: "Sur un chantier, vous avez déjà assez de prestataires à suivre. Nous, on est un seul nom dans votre carnet. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps et vous savez toujours à qui parler." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée", desc: "Pour les salons des maisons anciennes du centre médiéval. La laine se patine en vieillissant, elle ne s'écrase pas. Au toucher elle est ferme, à l'œil elle se distingue. On choisit avec vous un uni ou un motif discret pour respecter la pierre et les boiseries d'origine." },
  { name: "Tapis sur mesure pour sols anciens", desc: "Quand vous voulez habiller un plancher ou des tomettes sans les masquer, le tapis sur mesure fait le travail. Laine vierge, bordure cousue main, dimensions au centimètre près. On peut rester sur un uni sobre ou reproduire un motif discret. Compter huit à quatorze semaines." },
  { name: "Sols PVC acoustiques Gerflor et Tarkett", desc: "On en pose dans les cabinets et les collectivités de Parthenay. La sous-couche absorbe les bruits de pas, l'accueil se fait dans le calme. Le choix de couleurs est large, on peut s'aligner sur votre identité. Le sol tient facilement quinze ans, souvent vingt." },
  { name: "Sols PVC effet bois réversibles", desc: "Parfois le sol d'origine n'est plus récupérable. Plutôt qu'une dépose invasive, on vous propose un PVC effet bois de belle qualité, posé en réversible. Le rendu visuel reste convaincant, compatible avec une revente patrimoniale. On peut même le poser sur un chauffage au sol." },
  { name: "Moquette dalles EGE et Forbo", desc: "Le bon choix pour un cabinet ou un bâtiment public. Les dalles font 50×50 cm. Si quelqu'un renverse un café, on remplace juste la dalle abîmée. La sous-couche acoustique adoucit la pièce. Vous tenez quinze à vingt ans en usage tertiaire classique." },
  { name: "Profilés laiton et alu brossé Romus", desc: "Pour les seuils et les nez de marche, on soigne le détail. On coordonne avec votre quincaillerie existante, ce qui compte sur une maison ancienne. Sur les chantiers un peu exigeants, on peut faire fabriquer du sur mesure. C'est le genre de détail qui se remarque à la livraison." },
]

const marques = [
  { name: "Gerflor", desc: "Le français de Lyon, que nous connaissons en profondeur. Leurs PVC Mipolam et Taralay sont notre référence polyvalente sur les cabinets et les collectivités. Choix large, acoustique sérieuse, entretien simple." },
  { name: "Tarkett", desc: "Pour les espaces tertiaires et les bâtiments publics qui demandent un vrai confort acoustique, on part sur du Tarkett iQ Granit. Il vieillit bien et tolère bien le passage régulier de l'accueil du public." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Les certifications environnementales sont solides, on les sort souvent en cabinet et en collectivité." },
  { name: "EGE Carpets", desc: "Le tisseur danois, notre référence pour un cabinet ou une salle de réunion qui s'impose. Leurs dalles intègrent déjà la sous-couche acoustique, ce qui facilite la pose et adoucit la pièce." },
  { name: "objectflor", desc: "Pour les commerces et les boutiques du centre, leurs lames PVC effet bois sont une valeur sûre. Le rendu est crédible, la pose réversible va vite, et la résistance au passage tient dans la durée." },
  { name: "Bostik", desc: "Pour les colles et les ragréages, on travaille avec Bostik. Ce sont des produits fiables qui garantissent une pose durable, surtout sur les supports anciens et irréguliers des maisons médiévales." },
  { name: "objectflor Expona", desc: "Quand un commerce veut un sol design qui en jette sans sacrifier la résistance, leurs gammes Expona font le travail. Effet bois, béton ou pierre, le choix est large et le rendu haut de gamme." },
  { name: "Romus", desc: "Pour les accessoires de finition, profilés et nez de marche, Romus est notre référence. Du laiton brossé à l'alu, on trouve toujours la finition qui s'accorde avec un intérieur ancien." },
]

const quartiers = [
  { nom: "Centre médiéval", detail: "Porte Saint-Jacques, rue de la Vau Saint-Jacques, château. Maisons anciennes en pierre, secteur sauvegardé, commerces de caractère à équiper avec prudence." },
  { nom: "Quartier Saint-Laurent", detail: "Habitat ancien et maisons de bourg, commerces de proximité. Projets de rénovation patrimoniale et résidences attachées au bâti d'origine." },
  { nom: "Abords du marché aux bestiaux", detail: "Quartier historique du célèbre marché aux bestiaux. Commerces, services et locaux d'activité à moderniser." },
  { nom: "Faubourgs résidentiels", detail: "Lotissements récents et maisons familiales. Clientèle particuliers attachée aux finitions soignées et au conseil personnalisé." },
  { nom: "Quartier de la gare", detail: "Habitat pavillonnaire et petites unités tertiaires. Cabinets, copropriétés et maisons individuelles en cours de modernisation." },
  { nom: "Châtillon-sur-Thouet", detail: "Commune limitrophe, zones d'activité et habitat résidentiel. Bureaux d'entreprise, commerces et maisons familiales." },
  { nom: "Pompaire", detail: "Bourg résidentiel aux portes de Parthenay. Lotissements, maisons de campagne rénovées et projets de caractère." },
  { nom: "Le Tallud", detail: "Commune voisine au cadre rural verdoyant. Maisons familiales, longères rénovées et habitat ancien à équiper avec soin." },
  { nom: "Secondigny", detail: "Bourg de la Gâtine, maisons anciennes en pierre et habitat patrimonial. Projets résidentiels de rénovation et restauration de bâti." },
  { nom: "Ménigoute", detail: "Petit bourg de la Gâtine, maisons de caractère et habitat ancien. Clientèle résidentielle soucieuse du respect du bâti." },
  { nom: "Saint-Aubin-le-Cloud", detail: "Commune limitrophe, habitat pavillonnaire et maisons de bourg. Particuliers attachés aux finitions et au conseil." },
  { nom: "Vasles", detail: "Bourg de la Gâtine entre Parthenay et Poitiers. Maisons familiales, rénovations résidentielles et habitat ancien." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet (maison ancienne, commerce, cabinet, collectivité), surface estimée, calendrier souhaité, contraintes patrimoniales ou ERP éventuelles. On cadre ensemble la suite et on fixe la date de visite." },
  { step: 'Visite à Parthenay', desc: "Déplacement organisé depuis Villedoux, environ 1h45 de route. Prise de cotes au laser, sondage des supports anciens, vérification d'humidité, photos pour coordination coloris et raccords. Sur le bâti ancien, ce repérage est décisif pour éviter toute mauvaise surprise." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Parthenay, chez vous ou au cabinet. Validation finale sous l'éclairage du lieu de pose. Pour les collectivités, transmission des fiches techniques, PV feu et certifications environnementales requises." },
  { step: 'Confection atelier', desc: "3 à 10 semaines selon gamme : moquette tissée, dalles, PVC découpé, tapis sur mesure. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale rapide et soignée à Parthenay." },
  { step: 'Pose à Parthenay', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités ou la fenêtre du chantier. Pose réversible sur le bâti ancien, phasage en horaires décalés possible pour les commerces et cabinets. Nettoyage complet à la livraison." },
]

const faq = [
  { q: "Vous venez vraiment à Parthenay depuis La Rochelle ?", a: "Oui. Parthenay, c'est environ 130 km, autour de 1h45 par la route. On organise la visite de prise de mesures en début de projet, puis on revient poser une fois la confection terminée. L'hébergement et le déplacement sont compris dans le devis. Sur les chantiers plus importants, l'équipe reste sur place jusqu'à la livraison. Vous n'avez pas une série d'allers-retours à coordonner, juste deux rendez-vous clairs." },
  { q: "Vous intervenez dans les maisons anciennes du centre médiéval ?", a: "Bien sûr, c'est même un terrain où notre prudence fait la différence. Le centre de Parthenay garde de belles maisons en pierre, avec des sols anciens fragiles. On sonde toujours le support avant de poser, on vérifie l'humidité, on choisit la bonne sous-couche. Et on pose en réversible chaque fois que possible : si vous voulez tout reprendre dans dix ans, le sol d'origine sera intact." },
  { q: "Comment vous gérez les contraintes du secteur sauvegardé ?", a: "Parthenay protège son patrimoine médiéval, et on respecte ça. Sur un sol intérieur, l'architecte des Bâtiments de France n'est presque jamais saisi directement. Mais on reste discret et réversible, on documente l'intervention par habitude, et si le projet touche à quelque chose de visible ou de protégé, on s'aligne avec votre architecte. Vous avez un dossier propre du début à la fin." },
  { q: "Vous prenez des précautions sur les supports anciens ?", a: "Toujours. C'est même le cœur du métier sur un bâti ancien. On ne pose jamais à l'aveugle : on sonde le plancher ou les tomettes, on mesure l'humidité, on regarde la planéité. Selon ce qu'on trouve, on choisit le bon ragréage, la bonne sous-couche, la bonne colle réversible. Ce repérage en amont, c'est ce qui évite les cloques et les décollements une fois la pose terminée." },
  { q: "Vous intervenez sur les commerces du centre ?", a: "Oui. Pour une boutique ou un commerce, le sol doit valoriser vos produits, résister au passage et respecter le caractère du lieu. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. On protège l'existant, on nettoie tout à la livraison, et le lendemain matin vous rouvrez dans un espace prêt à accueillir vos clients." },
  { q: "Combien de temps tient un sol PVC dans un cabinet ou une collectivité ?", a: "Compter facilement quinze à vingt ans, parfois plus. Un PVC homogène vieillit bien parce qu'il n'a pas de couche d'usure à percer, c'est le même matériau de haut en bas. Sur les zones très passantes comme un accueil de mairie, on prend un classement 34, qui tolère mieux le trafic. Un nettoyage professionnel une fois par an suffit à conserver l'aspect du premier jour." },
  { q: "Vous travaillez avec les collectivités de Parthenay ?", a: "Oui. Mairie, équipement public, bâtiment communal : ces chantiers demandent des sols conformes aux exigences ERP, des fiches techniques complètes, des PV feu et un phasage qui respecte l'accueil du public. On est outillé pour ça : documentation à jour, dialogue avec le bureau de contrôle, planning calé sur vos fenêtres d'intervention. On peut intervenir en horaires décalés pour ne pas couper le service." },
]

export default function RevetementSolParthenayPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-parthenay#service',
        name: "Revêtement de sol à Parthenay",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Parthenay' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Parthenay et dans les Deux-Sèvres",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour maisons anciennes, commerces, cabinets et collectivités à Parthenay, avec une attention particulière aux supports anciens.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Parthenay', item: 'https://cbsols.fr/revetement-sol-parthenay' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="parthenay" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Parthenay</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Parthenay,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>le respect du bâti ancien.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Parthenay. Maisons anciennes du centre médiéval, commerces, cabinets, collectivités. Atelier basé près de La Rochelle, déplacement organisé avec une vraie prudence sur les supports anciens et les contraintes du secteur sauvegardé.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=parthenay" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Une maison du centre médiéval de Parthenay, ça ne se traite pas comme un sol neuf. On sonde le support, on pose en réversible, on respecte ce que le bâti a déjà traversé. C&apos;est le métier que CB Sols fait depuis plus de 25 ans. »
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
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même exigence patrimoniale.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Parthenay ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec vous, votre architecte ou votre responsable d&apos;établissement. Visite de prise de mesures et sondage des supports, devis détaillé sous 48 heures.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=parthenay-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Parthenay */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Parthenay</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers parthenaisiens.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Parthenay, ce n&apos;est pas reproduire un chantier standard. La cité médiévale impose une vraie prudence sur le bâti ancien. Voici les six points sur lesquels on structure notre méthode dès la première visite.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Parthenay</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons en Deux-Sèvres.</em>
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
              « Sur un plancher ancien ou des tomettes du centre médiéval, on ne pose jamais à l&apos;aveugle. On sonde, on vérifie l&apos;humidité, on choisit la bonne réponse. C&apos;est cette prudence qui évite les mauvaises surprises. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=parthenay-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite sur site à Parthenay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets parthenaisiens.</em>
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
            Parthenay et la Gâtine, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;aux communes voisines.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur Parthenay et l&apos;ensemble de la Gâtine, ainsi que sur les communes voisines, là où se concentrent les projets résidentiels patrimoniaux, commerciaux et publics.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, les précautions sur le bâti ancien, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier parthenaisien.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=parthenay-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Parthenay.</em>
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
            Revêtement de sol à Parthenay, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
          { href: "/revetement-sol-niort", title: "Revêtement sol Niort", teaser: "Sièges sociaux, hôtels particuliers, EHPAD. Notre savoir-faire au cœur des Deux-Sèvres.", icon: MapPin },
          { href: "/services", title: "Nos services", teaser: "Moquette, sol PVC, tapis sur mesure, nettoyage. Tout notre métier au service de votre projet.", icon: Building2 },
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
            Votre projet parthenaisien <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Parthenay. Devis détaillé sous 48 heures, finitions soignées, pose réversible et respect du bâti ancien. CB Sols, plus de 25 ans de savoir-faire au service des projets en Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=parthenay-final" variant="primary" size="md">Demander un devis</Button>
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
