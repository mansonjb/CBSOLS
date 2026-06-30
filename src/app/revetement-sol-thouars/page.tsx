import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Castle, Home, Mail, MapPin, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revêtement de Sol à Thouars | Devis Gratuit sous 48h",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Thouars. Maisons de caractère, commerces, cabinets, collectivités, EHPAD. CB Sols intervient depuis plus de 25 ans avec un déplacement maîtrisé : visite de mesures puis pose groupée depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-thouars' },
  keywords: ['revêtement sol Thouars', 'moquette Thouars', 'sol PVC Thouars', 'pose tapis Thouars', 'artisan sol Thouars'],
  openGraph: {
    title: "Revêtement de sol à Thouars, le soin du patrimoine",
    description: "Moquette, sol PVC et tapis sur mesure à Thouars. Ville d'art et d'histoire, maisons de caractère, commerces, collectivités, EHPAD. CB Sols, plus de 25 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-thouars.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Maisons de caractère et patrimoine", desc: "Vous habitez une maison de caractère près du château des ducs de la Trémoïlle, au-dessus du Thouet. Le bâti mérite des égards. On pose une moquette laine ou un tapis sur mesure en réversible, sans abîmer les sols anciens. On respecte le caractère du lieu sans en rajouter." },
  { title: "Commerces et boutiques du centre", desc: "Vous tenez un commerce dans cette ville d'art et d'histoire. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. Sol résistant au passage, facile à entretenir, et un rendu qui valorise votre boutique dans un cadre patrimonial." },
  { title: "Cabinets, collectivités et services", desc: "Vous recevez du public dans un cabinet, une mairie, un bâtiment communal. On choisit des sols conformes aux exigences ERP, on fournit les PV feu et la documentation, on phase les travaux pour ne pas perturber l'accueil. Un seul interlocuteur du devis à la livraison." },
  { title: "EHPAD et résidences seniors", desc: "Vous gérez un EHPAD ou une résidence médicalisée à Thouars. PVC homogène Bfl-s1 dans les couloirs, moquette laine en chambres d'invités, antidérapant R10 dans les salles de bains. On fournit la documentation ERP et les PV feu pour la commission de sécurité." },
]

const exigences = [
  { title: "Un déplacement organisé, jamais improvisé", desc: "Thouars est à environ deux heures de notre atelier. On ne fait pas l'aller-retour à la légère. On organise une visite de prise de mesures en début de projet, puis on revient poser une fois la confection terminée. Le déplacement est maîtrisé, le calendrier annoncé, et tout est compris dans le devis." },
  { title: "Une visite de mesures, puis une pose groupée", desc: "Vu la distance, on regroupe le travail. La visite sert à tout caler : cotes, supports, coloris, accès. La pose, elle, se fait d'une traite, l'équipe restant sur place jusqu'à la livraison. Vous n'avez pas une série de passages à coordonner, juste deux temps forts clairs." },
  { title: "On respecte le bâti et les sols anciens", desc: "Thouars est une ville d'art et d'histoire, riche de maisons de caractère. On pose en réversible chaque fois que possible : sans clouer, sans coller agressivement. Si vous voulez retirer la moquette dans dix ans, le sol d'origine sera intact. C'est ça, respecter un bien de patrimoine." },
  { title: "On travaille quand vous ne travaillez pas", desc: "Sur un commerce ou un cabinet, on ne peut pas couper l'activité. On vient donc le soir, le week-end ou le jour de fermeture. Vous rouvrez le lendemain matin, le sol est posé et nettoyé. Aucune journée de chiffre d'affaires perdue." },
  { title: "Les normes, on s'en occupe", desc: "EHPAD, collectivité, cabinet : il y a des règles strictes sur la sécurité incendie et l'hygiène. On choisit les bons produits pour vous, on fournit les attestations, on dialogue avec le bureau de contrôle. Vous n'avez rien à comprendre des fiches techniques." },
  { title: "Un seul interlocuteur, du début à la fin", desc: "Sur un chantier, vous avez déjà assez de prestataires à suivre. Nous, on est un seul nom dans votre carnet. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps et vous savez toujours à qui parler." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée", desc: "Pour les salons des maisons de caractère de Thouars. La laine se patine en vieillissant, elle ne s'écrase pas. Au toucher elle est ferme, à l'œil elle se distingue. On choisit avec vous un uni ou un motif discret pour respecter la pierre et les boiseries d'origine." },
  { name: "Tapis sur mesure pour sols anciens", desc: "Quand vous voulez habiller un plancher ancien sans le masquer, le tapis sur mesure fait le travail. Laine vierge, bordure cousue main, dimensions au centimètre près. On peut rester sur un uni sobre ou reproduire un motif discret. Compter huit à quatorze semaines." },
  { name: "Sols PVC acoustiques Gerflor et Tarkett", desc: "On en pose dans les cabinets et les collectivités de Thouars. La sous-couche absorbe les bruits de pas, l'accueil se fait dans le calme. Le choix de couleurs est large, on peut s'aligner sur votre identité. Le sol tient facilement quinze ans, souvent vingt." },
  { name: "Sols PVC homogènes pour EHPAD", desc: "Sur les couloirs et les chambres d'EHPAD, on part sur du PVC homogène. C'est le même matériau de haut en bas, donc pas de couche d'usure à percer. On soude les lés à chaud, l'eau ne passe nulle part. Vingt à vingt-cinq ans devant vous, même avec un trafic intense." },
  { name: "Sols PVC effet bois pour commerces", desc: "Pour une boutique ou un commerce, le PVC effet bois fait merveille. Le rendu visuel est convaincant, le sol résiste au passage et se nettoie en cinq minutes. Posé en réversible, il convient au bâti ancien. On peut même le poser sur un chauffage au sol." },
  { name: "Profilés laiton et alu brossé Romus", desc: "Pour les seuils et les nez de marche, on soigne le détail. On coordonne avec votre quincaillerie existante, ce qui compte sur une maison de caractère. Sur les chantiers un peu exigeants, on peut faire fabriquer du sur mesure. C'est le genre de détail qui se remarque à la livraison." },
]

const marques = [
  { name: "Gerflor", desc: "Le français de Lyon, que nous connaissons en profondeur. Leurs PVC Mipolam et Taralay sont notre référence polyvalente sur les cabinets, les commerces et les collectivités. Choix large, acoustique sérieuse, entretien simple." },
  { name: "Tarkett", desc: "Pour les espaces tertiaires et les bâtiments publics qui demandent un vrai confort acoustique, on part sur du Tarkett iQ Granit. Il vieillit bien et tolère bien le passage régulier de l'accueil du public." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Les certifications environnementales sont solides, on les sort souvent en EHPAD et en collectivité." },
  { name: "EGE Carpets", desc: "Le tisseur danois, notre référence pour un cabinet ou une salle de réunion qui s'impose. Leurs dalles intègrent déjà la sous-couche acoustique, ce qui facilite la pose et adoucit la pièce." },
  { name: "objectflor", desc: "Pour les commerces et les boutiques, leurs lames PVC effet bois sont une valeur sûre. Le rendu est crédible, la pose réversible va vite, et la résistance au passage tient dans la durée." },
  { name: "Bostik", desc: "Pour les colles et les ragréages, on travaille avec Bostik. Ce sont des produits fiables qui garantissent une pose durable, surtout sur les supports anciens des maisons de caractère." },
  { name: "objectflor Expona", desc: "Quand un commerce veut un sol design qui en jette sans sacrifier la résistance, leurs gammes Expona font le travail. Effet bois, béton ou pierre, le choix est large et le rendu haut de gamme." },
  { name: "Romus", desc: "Pour les accessoires de finition, profilés et nez de marche, Romus est notre référence. Du laiton brossé à l'alu, on trouve toujours la finition qui s'accorde avec un intérieur de caractère." },
]

const quartiers = [
  { nom: "Centre historique", detail: "Abords du château des ducs de la Trémoïlle, maisons de caractère dominant le Thouet. Patrimoine remarquable, commerces et résidences à équiper avec soin." },
  { nom: "Quartier du château", detail: "Habitat ancien et maisons de maître au-dessus de la vallée. Projets de rénovation patrimoniale et résidences de standing." },
  { nom: "Bords du Thouet", detail: "Maisons anciennes et habitat de caractère le long de la rivière. Rénovations résidentielles attachées au bâti d'origine." },
  { nom: "Faubourgs commerçants", detail: "Rues commerçantes et services du centre élargi. Commerces, boutiques et cabinets de profession libérale à moderniser." },
  { nom: "Zone d'activités", detail: "Négoce, coopératives et agroalimentaire. Bureaux d'entreprise, espaces d'accueil et locaux tertiaires." },
  { nom: "Quartiers résidentiels", detail: "Lotissements récents et maisons familiales. Clientèle particuliers attachée aux finitions soignées et au conseil personnalisé." },
  { nom: "Sainte-Verge", detail: "Commune limitrophe nord, habitat pavillonnaire et maisons de bourg. Particuliers et petites unités tertiaires." },
  { nom: "Saint-Varent", detail: "Bourg du Thouarsais, maisons anciennes et habitat de caractère. Projets résidentiels de rénovation et habitat patrimonial." },
  { nom: "Saint-Jean-de-Thouars", detail: "Commune voisine au cadre résidentiel, maisons familiales et habitat ancien. Rénovations attachées à la qualité d'exécution." },
  { nom: "Louzy", detail: "Bourg limitrophe, lotissements et maisons de campagne rénovées. Clientèle résidentielle soucieuse des finitions." },
  { nom: "Argenton-l'Église", detail: "Commune du Thouarsais aux portes du Maine-et-Loire. Maisons familiales, rénovations résidentielles et habitat ancien." },
  { nom: "Oiron", detail: "Bourg patrimonial réputé pour son château. Maisons de caractère et projets de rénovation attentifs au bâti." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet (maison de caractère, commerce, cabinet, collectivité, EHPAD), surface estimée, calendrier souhaité, contraintes patrimoniales ou ERP éventuelles. On cadre ensemble la suite et on fixe la date de visite." },
  { step: 'Visite à Thouars', desc: "Déplacement organisé depuis Villedoux, environ 2h de route. Prise de cotes au laser, sondage des supports anciens, repérage des accès, photos pour coordination coloris et raccords. Vu la distance, cette visite sert à tout caler en une fois pour préparer une pose groupée." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Thouars, chez vous ou au cabinet. Validation finale sous l'éclairage du lieu de pose. Pour les EHPAD et collectivités, transmission des fiches techniques, PV feu et certifications environnementales requises." },
  { step: 'Confection atelier', desc: "3 à 10 semaines selon gamme : moquette tissée, dalles, PVC découpé, tapis sur mesure. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose groupée rapide et soignée à Thouars." },
  { step: 'Pose à Thouars', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités ou la fenêtre du chantier. Pose groupée d'une traite, l'équipe reste jusqu'à la livraison. Phasage en horaires décalés possible pour les commerces et cabinets. Nettoyage complet à la fin." },
]

const faq = [
  { q: "Vous venez vraiment à Thouars depuis La Rochelle ?", a: "Oui. Thouars, c'est environ 150 km, autour de 2h par la route. Vu la distance, on organise le travail proprement : une visite de prise de mesures en début de projet pour tout caler, puis on revient poser d'une traite une fois la confection terminée. L'équipe reste sur place jusqu'à la livraison. L'hébergement et le déplacement sont compris dans le devis. Vous n'avez pas une série d'allers-retours à coordonner." },
  { q: "Comment vous gérez la distance jusqu'à Thouars ?", a: "Par l'organisation. On ne multiplie pas les passages : une visite de mesures qui sert à tout repérer, puis une pose groupée. Pendant la visite, on prend les cotes, on sonde les supports, on cale les coloris et les accès. La pose se fait ensuite d'une seule fois, l'équipe restant sur place. Le déplacement est maîtrisé et chiffré dans le devis, sans surcoût caché." },
  { q: "Vous intervenez sur les maisons de caractère du centre ?", a: "Bien sûr. Thouars est une ville d'art et d'histoire, riche de maisons de caractère autour du château des ducs de la Trémoïlle. On y intervient en réversible chaque fois que possible : on pose sans clouer, sans coller agressivement. Si vous voulez tout reprendre dans dix ans, le sol d'origine sera intact. Les moquettes laine et les tapis sur mesure y trouvent leur place." },
  { q: "Comment ça se passe sur un EHPAD côté normes ERP ?", a: "Les EHPAD relèvent du règlement ERP type J. Il faut du Bfl-s1 ou Cfl-s1 selon la zone, des produits qui supportent le bionettoyage, des fiches d'entretien claires. On choisit les bons produits pour vous. On fournit tous les PV feu et attestations pour la commission de sécurité. Et on planifie zone par zone pour ne pas perturber la vie des résidents." },
  { q: "Vous intervenez sur les commerces du centre ?", a: "Oui. Pour une boutique ou un commerce, le sol doit valoriser vos produits, résister au passage et respecter le caractère du lieu. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. On protège l'existant, on nettoie tout à la livraison, et le lendemain matin vous rouvrez dans un espace prêt à accueillir vos clients." },
  { q: "Combien de temps tient un sol PVC dans un commerce ou une collectivité ?", a: "Compter facilement quinze à vingt ans, parfois plus. Un PVC homogène vieillit bien parce qu'il n'a pas de couche d'usure à percer, c'est le même matériau de haut en bas. Sur les zones très passantes comme un accueil ou une entrée de boutique, on prend un classement 34, qui tolère mieux le trafic. Un nettoyage professionnel une fois par an suffit à conserver l'aspect du premier jour." },
  { q: "Vous travaillez avec les collectivités de Thouars ?", a: "Oui. Mairie, équipement public, bâtiment communal : ces chantiers demandent des sols conformes aux exigences ERP, des fiches techniques complètes, des PV feu et un phasage qui respecte l'accueil du public. On est outillé pour ça : documentation à jour, dialogue avec le bureau de contrôle, planning calé sur vos fenêtres d'intervention. Vu la distance, on organise une pose groupée pour limiter les déplacements." },
]

export default function RevetementSolThouarsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-thouars#service',
        name: "Revêtement de sol à Thouars",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Thouars' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Thouars et dans les Deux-Sèvres",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour maisons de caractère, commerces, cabinets, collectivités et EHPAD à Thouars, avec un déplacement organisé en pose groupée.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Thouars', item: 'https://cbsols.fr/revetement-sol-thouars' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="thouars" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Thouars</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Thouars,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>le soin du patrimoine.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Thouars. Maisons de caractère, commerces, cabinets, collectivités, EHPAD. Atelier basé près de La Rochelle, déplacement maîtrisé : une visite de prise de mesures, puis une pose groupée jusqu&apos;à la livraison.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=thouars" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Thouars est à deux heures, mais ça ne nous arrête pas. On organise : une visite pour tout caler, puis une pose groupée d&apos;une traite. C&apos;est cette méthode qui permet à CB Sols d&apos;intervenir loin, sérieusement, depuis plus de 25 ans. »
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Thouars ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec vous, votre architecte ou votre responsable d&apos;établissement. Visite de prise de mesures pour tout caler, devis détaillé sous 48 heures.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=thouars-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Thouars */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Thouars</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers thouarsais.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Thouars, ce n&apos;est pas reproduire un chantier standard. La distance impose une vraie organisation et le patrimoine demande des égards. Voici les six points sur lesquels on structure notre méthode dès la première visite.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Thouars</div>
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
              « Une maison de caractère qui domine le Thouet, ça se traite avec des égards. On pose en réversible, on respecte les sols anciens, et on organise le chantier pour venir une fois et bien faire. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=thouars-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite sur site à Thouars</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets thouarsais.</em>
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
            Thouars et le Thouarsais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;aux communes voisines.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur Thouars et l&apos;ensemble du Thouarsais, ainsi que sur les communes voisines, là où se concentrent les projets résidentiels patrimoniaux, commerciaux et médico-sociaux.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, l&apos;organisation du déplacement, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier thouarsais.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=thouars-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Thouars.</em>
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
            Revêtement de sol à Thouars, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Votre projet thouarsais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Thouars. Devis détaillé sous 48 heures, finitions soignées, pose groupée et déplacement maîtrisé. CB Sols, plus de 25 ans de savoir-faire au service des projets en Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=thouars-final" variant="primary" size="md">Demander un devis</Button>
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
