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
  { title: "Hôtels particuliers du centre historique", desc: "Donjon, Notre-Dame, place de la Brèche, rue Victor-Hugo. Maisons bourgeoises niortaises, salons d'apparat sous plafonds moulurés, bibliothèques et chambres parentales. Moquette laine vierge tissée, tapis sur mesure bordés main, raccords sur parquets anciens validés en amont avec le propriétaire ou l'architecte d'intérieur. Respect du caractère patrimonial sans surcharger." },
  { title: "Sièges sociaux et grands plateaux tertiaires", desc: "Niort est la capitale française des grandes mutuelles d'assurance et concentre un parc tertiaire considérable. Sols PVC acoustiques pour open spaces, dalles moquette pour bureaux de direction, salles du conseil habillées en moquette laine. Coordination avec les services généraux et phasage en horaires décalés pour ne pas gêner l'activité." },
  { title: "Restaurants des Halles et tables du centre", desc: "Quartier des Halles classées, place du Temple, rue Saint-Jean. Salles à manger, salons privés, espaces de réception. Moquette hôtellerie haute densité, traitement anti-tache, isolation acoustique pour préserver la conversation. Pose nocturne ou jour de fermeture pour ne pas perdre un service. Coordination avec le restaurateur et son équipe." },
  { title: "EHPAD et résidences seniors médicalisées", desc: "Sol PVC homogène classement Bfl-s1 pour les couloirs et salles communes, moquette laine traitée pour les chambres d'invités et salons familles, sols antidérapants R10 dans les salles de bains. Respect des normes ERP type J, fiches techniques et PV feu pour la commission de sécurité. Intervention sans perturber la vie des résidents." },
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
  { name: "Sols PVC acoustiques Gerflor et Tarkett", desc: "Pour les plateaux tertiaires des mutuelles et les espaces open space. Sous-couche acoustique intégrée, finition mate ou satinée, large palette de coloris coordonnables à la charte graphique de l'entreprise. Pose en lés soudés à chaud, durabilité 15 à 20 ans en conditions tertiaires normales." },
  { name: "Moquette dalles EGE et Forbo", desc: "Pour les bureaux de direction, salles du conseil et espaces d'accueil des sièges sociaux tertiaires. Format 50×50 cm permettant le remplacement partiel en cas de salissure localisée. Classement 33 commercial intense, sous-couche acoustique, durabilité 15 à 20 ans en bureau." },
  { name: "Moquette laine vierge tissée Wilton", desc: "Pour les salons d'apparat des hôtels particuliers du centre historique et les chambres parentales d'exception. Tissage dense, vieillissement noble, toucher ferme. Disponible en uni, chiné ou motif géométrique discret pour s'inscrire dans un décor bourgeois niortais classique." },
  { name: "Sols PVC homogènes EHPAD et santé", desc: "Pour les couloirs, salles communes et chambres des EHPAD niortais. Classement Bfl-s1, résistance chimique aux produits de bionettoyage, soudure à chaud des lés pour étanchéité parfaite, remontées en plinthes dans les zones humides. Durée de vie 20 à 25 ans en usage intensif." },
  { name: "Tapis sur mesure salons et bureaux de direction", desc: "Pour les salles du conseil tertiaires et les bureaux de présidence. Laine vierge, bordure cousue main, dimensions calées au centimètre. Reproduction discrète d'un motif maison ou uni d'apparat. Délai 8 à 14 semaines selon gamme. Habillage qui pose le ton dès l'entrée." },
  { name: "Profilés laiton et alu brossé Romus", desc: "Pour les seuils, nez de marche et raccords entre revêtements. Coordination avec les quincailleries existantes des bâtiments historiques niortais, profilés sur mesure possibles pour les chantiers tertiaires à exigence particulière. Finitions soignées qui font la différence à la livraison." },
]

const marques = [
  { name: "Gerflor", desc: "Sol PVC Mipolam et Taralay, références du tertiaire tertiaire et du médico-social. Gamme acoustique, large choix de coloris, compatible chauffage au sol, entretien simple. Référence pour les sièges sociaux niortais." },
  { name: "Tarkett", desc: "Sol PVC iQ Granit et iQ Optima, performances acoustiques élevées et durabilité éprouvée. Solution privilégiée pour les open spaces des mutuelles et les plateaux tertiaires haut de gamme à Niort." },
  { name: "Forbo", desc: "Sols Marmoleum naturels (linoléum) et Flotex tissé vinyle. Certifications environnementales fortes, solutions sanitaires pour EHPAD et établissements de santé niortais." },
  { name: "EGE Carpets", desc: "Manufacture danoise référence du contract européen. Gammes Highline et Hospitality pour les bureaux de direction et salles du conseil tertiaires. Dalles avec sous-couche acoustique intégrée." },
  { name: "Brintons", desc: "Axminster britannique haut de gamme, motifs personnalisables. Pour les salons d'apparat des hôtels particuliers du centre historique niortais et les espaces de prestige." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design contemporain. Gammes pour bureaux d'affaires haut de gamme et espaces tertiaires de prestige tertiaires." },
  { name: "Bolon", desc: "Sols tissés vinyle suédois design. Résistance et confort pour zones de passage des sièges sociaux et restaurants design niortais." },
  { name: "Polyflor", desc: "Sols PVC britanniques homogènes, gamme étendue pour le médico-social, antidérapance R10 et R11, résistance aux produits de désinfection EHPAD." },
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
  { q: "Vous déplacez-vous régulièrement à Niort depuis La Rochelle ?", a: "Oui, très régulièrement. Niort se situe à environ 80 km de notre atelier de Villedoux, soit une heure de route par la N11. C'est une zone d'intervention naturelle pour nous, dans la continuité de notre savoir-faire patrimonial et tertiaire déjà bien établi sur le Poitou-Charentes. Nous organisons les déplacements en deux temps : une visite de prise de cotes en début de projet, puis l'intervention de pose en fin de chantier. L'hébergement et la logistique sont inclus dans le devis. Pour les chantiers de plusieurs jours sur les plateaux tertiaires tertiaires, nous mobilisons une équipe complète qui reste sur place jusqu'à la finition." },
  { q: "Travaillez-vous sur les grands sièges sociaux et plateaux tertiaires de Niort ?", a: "Oui, le pôle tertiaire niortais est l'un de nos terrains naturels d'intervention. Les sièges sociaux et plateaux de grandes surfaces représentent un parc considérable avec des exigences précises : appels d'offres formalisés, fiches techniques complètes, PV feu, certifications environnementales, planning ferme avec phasage en horaires décalés. CB Sols est outillé pour répondre à ces standards : dossier de candidature à jour, documentation matière complète, attestations de conformité et processus de chantier rodés. Nous coordonnons avec les services généraux ou le facility manager externalisé." },
  { q: "Intervenez-vous dans les hôtels particuliers du centre historique de Niort ?", a: "Oui. Le centre historique niortais autour du donjon, de Notre-Dame, des Halles classées et de la place de la Brèche concentre un patrimoine d'immeubles bourgeois XIXe et d'hôtels particuliers avec des exigences techniques fortes : parquets anciens à préserver, boiseries d'origine à respecter, raccords précis sur planchers d'époque. Notre équipe intervient en coordination avec l'architecte d'intérieur ou le propriétaire, avec une attention particulière portée à la réversibilité des poses chaque fois que possible. Les tapis sur mesure et moquettes laine tissées trouvent là leur écrin naturel, dans le respect du caractère du lieu." },
  { q: "Comment gérez-vous les normes ERP pour les EHPAD et établissements de santé ?", a: "Les EHPAD et cliniques privées niortaises relèvent du règlement ERP type J avec exigences fortes sur la réaction au feu (Bfl-s1 ou Cfl-s1 selon la zone), l'hygiène et l'accessibilité. Nos produits sélectionnés disposent des classements requis, des certifications sanitaires (Cradle to Cradle, Oeko-Tex, A+ COV) et des fiches d'entretien adaptées au protocole bionettoyage en vigueur dans les établissements médico-sociaux. Nous fournissons l'intégralité des PV feu, fiches techniques et attestations de conformité pour le dossier de la commission de sécurité. Les poses sont planifiées sans perturber la vie des résidents, par phasage zone par zone." },
  { q: "Travaillez-vous sur les restaurants des Halles et du centre de Niort ?", a: "Oui. Les restaurants gastronomiques du quartier des Halles, de la place du Temple et de la rue Saint-Jean accordent une importance majeure à l'ambiance acoustique et à la qualité visuelle du sol. Une moquette laine sur thibaude feutre apporte une chute notable de la réverbération, ce qui transforme l'expérience client à table. Nous travaillons en pose nocturne ou jour de fermeture hebdomadaire pour ne pas perdre un service, avec une équipe rodée aux contraintes de la restauration : protection des cuisines, nettoyage intégral à la livraison, planning calé sur les disponibilités du restaurateur." },
  { q: "Quelle est la durabilité d'un sol PVC dans un plateau tertiaire tertiaire ?", a: "Un sol PVC professionnel acoustique Gerflor Mipolam ou Tarkett iQ Granit, posé en lés soudés à chaud dans un plateau tertiaire tertiaire à Niort, dure facilement 15 à 20 ans avec un entretien correct. Le sol PVC homogène présente l'avantage de bien vieillir : pas de couche supérieure à user, pas de délamination possible. Pour les zones à fort passage comme les accueils ou les couloirs de circulation, on visera plutôt un homogène classement 34 qui pardonnera mieux les marques de roulettes de fauteuils et les passages répétés. Un nettoyage professionnel annuel suffit à maintenir l'aspect d'origine. Les dalles moquette pour bureaux de direction tiennent 15 à 20 ans en bureau classique." },
  { q: "Pouvez-vous intervenir en horaires décalés sur un siège social en activité ?", a: "Oui, c'est même la norme sur les plateaux tertiaires tertiaires en activité. Nous organisons les interventions en soirée, le week-end ou en horaires décalés selon le phasage défini avec les services généraux. Les pré-assemblages en atelier à Villedoux permettent de réduire au minimum la durée de pose sur site. Le matériel et les outils sont conçus pour limiter le bruit et les nuisances. Nous protégeons systématiquement les postes de travail et le mobilier informatique avant intervention, et nous restituons l'espace nettoyé et opérationnel à l'heure convenue. Cette organisation permet de tenir les contraintes d'exploitation des mutuelles sans interrompre leur activité." },
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
