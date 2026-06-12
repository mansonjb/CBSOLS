import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Niort | Moquette, PVC, Tapis Sur Mesure | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Niort. Hôtels particuliers du centre historique, sièges sociaux et grands plateaux tertiaires, restaurants des Halles, EHPAD. CB Sols intervient depuis 27 ans, déplacement régulier depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-niort' },
  keywords: ['revêtement sol Niort', 'moquette Niort', 'sol PVC Niort', 'pose tapis Niort', 'artisan sol Niort', 'sol PVC mutuelles Niort'],
  openGraph: {
    title: "Revêtement de sol à Niort, le sérieux des Deux-Sèvres",
    description: "Moquette, sol PVC et tapis sur mesure à Niort. Mutuelles, hôtels particuliers, restaurants, EHPAD. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-niort.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Hôtels particuliers du centre historique", desc: "Vous avez une maison bourgeoise vers Notre-Dame ou la Brèche. Moquette laine tissée, tapis cousu main, raccords sur le parquet ancien validés avec vous. On respecte le caractère du lieu sans en rajouter." },
  { title: "Sièges sociaux et plateaux tertiaires", desc: "Vous gérez un grand plateau de bureaux à Niort. PVC acoustique dans les open spaces, dalles moquette côté direction, moquette laine en salle du conseil. On phase avec vos services généraux." },
  { title: "Restaurants des Halles et du centre", desc: "Vous tenez une table vers les Halles ou place du Temple. On vient la nuit ou le jour de fermeture, vous ne perdez pas un service. Moquette dense anti-tache et acoustique soignée pour la conversation." },
  { title: "EHPAD et résidences seniors", desc: "Vous gérez un EHPAD ou une résidence médicalisée. PVC homogène Bfl-s1 dans les couloirs, moquette laine en chambres d'invités, antidérapant R10 dans les salles de bains. Doc ERP et PV feu fournis pour la commission." },
]

const exigences = [
  { title: "Travailler quand vous ne travaillez pas", desc: "Sur les grands plateaux de bureaux, on ne peut pas couper l'activité. On vient donc le soir et le week-end. Vous arrivez lundi matin, le sol est posé, les meubles sont en place. Aucune journée perdue pour vos équipes." },
  { title: "Moins de bruit, plus de calme", desc: "Dans un open space, le bruit ambiant fatigue tout le monde. Une bonne moquette ou un sol PVC acoustique coupe la moitié du brouhaha. Les conversations passent mieux, la concentration revient. Vos équipes le sentent dès le premier jour." },
  { title: "On respecte les parquets anciens", desc: "Beaucoup d'hôtels particuliers de Niort ont gardé leur parquet d'origine. On pose sans clouer, sans coller agressivement. Si vous voulez retirer la moquette dans dix ans, le parquet en dessous sera intact. C'est ça, respecter une belle maison." },
  { title: "Une heure de route, et on est chez vous", desc: "Niort est à 80 km de notre atelier, une heure par l'A10. C'est tout près. On y passe plusieurs fois par mois, on connaît les chantiers du coin. Vous appelez, on vient mesurer dans la semaine." },
  { title: "Les normes, on s'en occupe", desc: "EHPAD, clinique, école : il y a des règles strictes sur la sécurité incendie et l'hygiène. On choisit les bons produits pour vous, on fournit les attestations, on dialogue avec le bureau de contrôle. Vous n'avez rien à comprendre des fiches techniques." },
  { title: "Un seul interlocuteur, du début à la fin", desc: "Sur un gros chantier, vous avez déjà dix prestataires à gérer. Nous, on est un seul nom dans votre carnet. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps." },
]

const materiaux = [
  { name: "Sols PVC acoustiques Gerflor et Tarkett", desc: "On en pose beaucoup sur les grands plateaux de bureaux. La sous-couche absorbe les bruits de pas et de roulettes, vos équipes travaillent dans le calme. Choix large de couleurs, on peut s'aligner sur votre charte. Le sol dure facilement quinze ans, souvent vingt." },
  { name: "Moquette dalles EGE et Forbo", desc: "Le bon choix pour un bureau de direction ou une salle du conseil. Les dalles font 50×50 cm. Si quelqu'un renverse son café, on remplace juste la dalle abîmée. La sous-couche acoustique adoucit la pièce. Vous tenez quinze à vingt ans en bureau classique." },
  { name: "Moquette laine vierge tissée Wilton", desc: "Pour les salons des hôtels particuliers du centre historique. La laine se patine en vieillissant, elle ne s'écrase pas. Au toucher c'est ferme, à l'œil c'est noble. On choisit avec vous un uni ou un motif géométrique discret pour ne pas heurter les boiseries." },
  { name: "Sols PVC homogènes pour EHPAD", desc: "Sur les couloirs et les chambres d'EHPAD, on part sur du PVC homogène. C'est le même matériau de haut en bas, donc pas de couche d'usure à percer. On soude les lés à chaud, l'eau ne passe nulle part. Vingt à vingt-cinq ans devant vous, même avec un trafic intense." },
  { name: "Tapis sur mesure pour bureaux de direction", desc: "Quand vous voulez poser le ton dès l'entrée d'un bureau de présidence, le tapis sur mesure fait le travail. Laine vierge, bordure cousue main, dimensions au centimètre près. On peut reproduire un motif maison ou rester sur un uni d'apparat. Compter huit à quatorze semaines." },
  { name: "Profilés laiton et alu brossé Romus", desc: "Pour les seuils et les nez de marche, on soigne le détail. On coordonne avec votre quincaillerie existante, ce qui compte sur un bâtiment historique. Sur les chantiers tertiaires un peu exigeants, on peut faire fabriquer du sur mesure. C'est ce genre de chose qu'on remarque à la livraison." },
]

const marques = [
  { name: "Gerflor", desc: "Le français de Lyon, qu'on connaît par cœur. Leurs PVC Mipolam et Taralay sont notre passe-partout sur les grands plateaux de bureaux. Choix large, acoustique sérieuse, entretien simple." },
  { name: "Tarkett", desc: "Pour les open spaces qui demandent un vrai confort acoustique, on part sur du Tarkett iQ Granit. Ça vieillit bien, c'est notre référence sur les plateaux tertiaires haut de gamme niortais." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Les certifications environnementales sont solides, on les sort souvent en EHPAD." },
  { name: "EGE Carpets", desc: "Le danois, c'est notre référence quand on veut un bureau de direction qui en jette. Leurs dalles ont déjà la sous-couche acoustique intégrée, ça simplifie la pose. On les recommande sur les salles du conseil." },
  { name: "Brintons", desc: "L'Axminster britannique, l'aristocratie de la moquette. Quand vous voulez un salon d'apparat dans un hôtel particulier du centre, on appelle Brintons. Le motif personnalisable change tout." },
  { name: "Object Carpet", desc: "Les allemands, pour le design contemporain. Quand un bureau d'affaires veut sortir des codes classiques et marquer le coup, leurs gammes font le travail." },
  { name: "Bolon", desc: "Les sols tissés vinyle suédois, c'est du design qui tient. On les pose dans les halls de sièges sociaux et dans certains restaurants où le visuel compte autant que la résistance." },
  { name: "Polyflor", desc: "Les britanniques, pour le médico-social. Antidérapance R10 ou R11 selon la zone, résistance aux produits de désinfection. On les sort en EHPAD et en clinique sans hésiter." },
]

const quartiers = [
  { nom: "Centre historique", detail: "Donjon, Notre-Dame, Halles classées, place de la Brèche, rue Victor-Hugo. Hôtels particuliers, immeubles bourgeois XIXe, restaurants et boutiques de caractère." },
  { nom: "Saint-Liguaire", detail: "Quartier sud avec mix résidentiel pavillonnaire et tertiaire. Cabinets de profession libérale, copropriétés bourgeoises, projets résidentiels haut de gamme." },
  { nom: "Souché", detail: "Quartier nord-est résidentiel et commercial. Maisons familiales, équipements scolaires privés, cabinets médicaux." },
  { nom: "Sainte-Pezenne", detail: "Quartier résidentiel verdoyant, villas familiales et copropriétés récentes. Clientèle résidentielle attachée à la qualité d'exécution et aux finitions soignées." },
  { nom: "Le Clou Bouchet", detail: "Quartier en renouvellement urbain, programmes neufs et équipements collectifs. Sol PVC pour collectivités, halls de copropriétés et espaces communs." },
  { nom: "Bessines", detail: "Commune limitrophe sud, zone d'activités et plateaux tertiaires en développement. Sièges sociaux et plateformes logistiques tertiaires." },
  { nom: "Chauray", detail: "Cœur du pôle tertiaire avec sièges sociaux et bâtiments tertiaires majeurs. Open spaces, salles du conseil, bureaux de direction des grandes mutuelles d'assurance." },
  { nom: "Magné", detail: "Porte du Marais Poitevin, mix résidentiel et touristique. Maisons de campagne, gîtes de charme, restaurants gastronomiques de la Venise verte." },
  { nom: "Coulon (Marais Poitevin)", detail: "Capitale du Marais Poitevin, hôtels boutique, restaurants gastronomiques, maisons de batelier rénovées. Projets résidentiels de caractère et hébergement touristique haut de gamme." },
  { nom: "Frontenay-Rohan-Rohan", detail: "Commune historique au sud-ouest de Niort, château et maisons anciennes. Projets résidentiels patrimoniaux et restauration de bâti ancien." },
  { nom: "Aiffres", detail: "Commune résidentielle au sud, lotissements récents et maisons familiales. Clientèle particuliers attachée aux finitions de qualité et au conseil personnalisé." },
  { nom: "Vouillé", detail: "Commune limitrophe sud, mix pavillonnaire et zones d'activité économique. Cabinets de profession libérale et petites unités tertiaires." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet (tertiaire tertiaire, hôtel particulier, EHPAD, restaurant), surface estimée, calendrier souhaité, contraintes ERP éventuelles. Pour les appels d'offres tertiaires, nous récupérons le DCE complet." },
  { step: 'Visite à Niort', desc: "Déplacement organisé sous 1 à 2 semaines depuis Villedoux. Prise de cotes au laser, repérage des contraintes d'accès, photos pour coordination coloris et raccords. Pour les plateaux tertiaires, identification des phases de travaux en horaires décalés possibles." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Niort, au siège du donneur d'ordre ou chez l'architecte. Validation finale sous l'éclairage du lieu de pose. Pour les mutuelles, transmission des fiches techniques, PV feu et certifications environnementales requises." },
  { step: 'Confection atelier', desc: "3 à 10 semaines selon gamme : moquette Axminster custom, Wilton, dalles, PVC découpé. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale rapide et soignée à Niort." },
  { step: 'Pose à Niort', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités ou la fenêtre du chantier. Coordination avec services généraux ou conciergerie. Phasage en horaires décalés possibles pour les sièges en activité. Nettoyage complet à la livraison." },
]

const faq = [
  { q: "Vous venez vraiment à Niort depuis La Rochelle ?", a: "Oui, et souvent. Niort, c'est 80 km, une heure par la N11. C'est tout près. On y passe plusieurs fois par mois, on connaît les chantiers du coin. On organise la visite de prise de cotes en début de projet, puis on revient poser à la fin. L'hébergement et le déplacement sont compris dans le devis. Sur les gros chantiers, l'équipe reste sur place jusqu'à la livraison." },
  { q: "Vous travaillez sur les grands sièges sociaux du pôle tertiaire ?", a: "Oui, c'est même un de nos terrains naturels. Les services généraux ont des exigences précises : appel d'offres formalisé, fiches techniques complètes, PV feu, planning ferme avec phasage en horaires décalés. On est outillé pour ça : dossier de candidature à jour, documentation matière complète, processus de chantier rodé. On dialogue directement avec votre facility manager." },
  { q: "Vous intervenez dans les hôtels particuliers du centre ?", a: "Bien sûr. Le centre niortais autour du donjon et de la Brèche concentre des immeubles XIXe magnifiques. On y intervient avec votre architecte d'intérieur, et on pose chaque fois que possible en réversible. Si vous voulez tout reprendre dans dix ans, le parquet en dessous sera intact. Les tapis sur mesure et les moquettes laine tissées trouvent là leur écrin naturel." },
  { q: "Comment ça se passe sur un EHPAD côté normes ERP ?", a: "Les EHPAD relèvent du règlement ERP type J. Il faut du Bfl-s1 ou Cfl-s1 selon la zone, des produits qui supportent le bionettoyage, des fiches d'entretien claires. On choisit les bons produits pour vous. On fournit tous les PV feu et attestations pour la commission de sécurité. Et on planifie zone par zone pour ne pas perturber la vie des résidents." },
  { q: "Vous intervenez sur les restaurants du centre ?", a: "Oui. L'acoustique fait toute la différence à table, et une moquette laine sur thibaude feutre coupe la moitié de la réverbération. Vos clients passent une meilleure soirée. On pose la nuit ou le jour de fermeture, vous ne perdez pas un service. On protège les cuisines, on nettoie tout, le matin la salle est prête." },
  { q: "Combien de temps tient un sol PVC sur un plateau de bureaux ?", a: "Quinze à vingt ans facilement, parfois plus. Un PVC homogène vieillit bien parce qu'il n'a pas de couche d'usure à percer, c'est le même matériau de haut en bas. Sur les zones très passantes (accueil, couloirs), on prend un classement 34 qui pardonne mieux les roulettes. Un nettoyage pro une fois par an suffit à garder l'aspect du premier jour." },
  { q: "Vous pouvez poser en horaires décalés sur un siège en activité ?", a: "Oui, c'est même la norme. On organise les interventions en soirée ou le week-end selon le phasage défini avec vos services généraux. On pré-assemble un maximum en atelier à Villedoux, donc la pose sur site va vite. On protège vos postes de travail et votre mobilier informatique avant de commencer. Le lundi matin, vos équipes reprennent normalement, sol posé et nettoyé." },
]

export default function RevetementSolNiortPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-niort#service',
        name: "Revêtement de sol à Niort",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Niort' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Niort et dans les Deux-Sèvres",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour sièges de mutuelles, hôtels particuliers, restaurants, EHPAD et établissements tertiaires à Niort.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Niort', item: 'https://cbsols.fr/revetement-sol-niort' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Niort</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Niort,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>le sérieux des Deux-Sèvres.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Niort. Grands sièges sociaux et plateaux tertiaires, hôtels particuliers du centre historique, restaurants des Halles, EHPAD et résidences médicalisées. Atelier basé près de La Rochelle, déplacement à Niort organisé chaque mois.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=niort" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Niort, c&apos;est un terrain sérieux. Les services généraux des mutuelles ne plaisantent pas avec les fiches techniques et les délais. CB Sols a la documentation, la méthode et l&apos;équipe pour répondre à ces standards depuis 27 ans. »
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Niort ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec les services généraux, le responsable facility ou directement avec vous. Visite organisée sous 1 à 2 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=niort-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Niort */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Niort</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers niortais.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Niort, ce n&apos;est pas reproduire un chantier standard. Voici les six points sur lesquels nous structurons notre méthode dès la première visite, pour répondre aux exigences tertiaires et tenir le calendrier.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Niort</div>
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
              « Un plateau tertiaire tertiaire à Niort, c&apos;est précisément ce que CB Sols sait faire. La documentation, le phasage, le respect des horaires d&apos;exploitation, et la finition irréprochable au lever du jour. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=niort-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite sur site à Niort</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets niortais.</em>
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
            Niort et son agglomération, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;au Marais Poitevin.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble de la communauté d&apos;agglomération du Niortais ainsi que sur les communes limitrophes, là où se concentrent les projets résidentiels patrimoniaux, tertiaires tertiaires et médico-sociaux.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier niortais.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=niort-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Niort.</em>
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
            Revêtement de sol à Niort, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre les Deux-Sèvres, la Charente-Maritime et au-delà, sur tous les terrains d&apos;exception.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/revetement-sol-la-rochelle" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol La Rochelle →</Link>
            <Link href="/a-propos" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>À propos de CB Sols →</Link>
            <Link href="/sol-pvc-cabinet-medical" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC cabinet médical →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet niortais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Niort. Devis détaillé, finitions premium, respect des contraintes tertiaires et patrimoniales. CB Sols, 27 ans de savoir-faire au service des projets d&apos;exception en Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=niort-final" variant="primary" size="md">Demander un devis</Button>
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
