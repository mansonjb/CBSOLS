import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Biarritz | Villas Côte Basque | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Biarritz et sur la Côte Basque. Villas Belle Époque, résidences contemporaines, hôtels Relais & Châteaux. CB Sols, 27 ans de savoir-faire, déplacement depuis La Rochelle.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-biarritz' },
  keywords: ['revêtement sol Biarritz', 'moquette villa Biarritz', 'sol Côte Basque', 'pose tapis Biarritz', 'artisan sol Biarritz'],
  openGraph: {
    title: "Revêtement de sol à Biarritz, l'élégance basque",
    description: "Moquette, sol PVC et tapis sur mesure à Biarritz. Villas Belle Époque front de mer, résidences contemporaines, hôtels d'exception. CB Sols, 27 ans.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-biarritz.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Villas Belle Époque front de mer", desc: "Le front de mer biarrot conserve un patrimoine remarquable de villas Belle Époque, néo-basques et années 30, avec parquets d'origine, escaliers monumentaux et boiseries d'apparat. Salons d'apparat tournés vers l'océan, chambres parentales sur les rotondes, bibliothèques familiales. Moquette laine tissée, tapis sur mesure cousus main, coordination avec les boiseries d'origine et les ferronneries Art Déco. La pose se pense en réversibilité chaque fois que possible." },
  { title: "Résidences contemporaines de prestige", desc: "Villas d'architectes du plateau de l'Atalaye, des hauteurs de Bidart, des collines de Guéthary. Grandes baies sur l'océan, lignes contemporaines, matériaux nobles, mobilier sur mesure. Sols clairs qui captent la lumière atlantique, moquette bouclée ou sisal scellé dans les chambres, tapis structurants dans les salons. Coordination avec l'architecte du projet pour cohérence d'ensemble." },
  { title: "Hôtels Relais & Châteaux et 5 étoiles", desc: "L'hôtellerie de prestige biarrote, palaces historiques et établissements Relais & Châteaux du Pays Basque. Suites, salons d'accueil, salles à manger, espaces de réception. Moquette hôtellerie haute densité avec traitement ignifuge en cœur de fibre, tapis cousus main pour les zones d'apparat, finitions haut de gamme conformes aux standards palace. Pose nocturne ou basse saison." },
  { title: "Cabinets d'architectes et bureaux d'exception", desc: "Cabinets d'architectes basques, bureaux de direction de groupes familiaux, espaces tertiaires haut de gamme du centre-ville. Sol PVC acoustique pour les zones de travail, moquette laine pour les bureaux d'accueil, finitions soignées qui posent le ton de la maison dès l'entrée. Coordination avec le mobilier sur mesure et la signalétique du lieu." },
]

const exigences = [
  { title: "Patrimoine Belle Époque et néo-basque", desc: "Biarritz et la Côte Basque concentrent un patrimoine architectural particulier, mêlant Belle Époque impériale, néo-basque années 30 et modernisme d'après-guerre. Pose réversible chaque fois que possible pour préserver les parquets d'origine, coordination des coloris avec les boiseries existantes et les enduits chaulés intérieurs, respect des proportions classiques des pièces d'apparat. La discrétion de l'intervention est ici une marque de qualité." },
  { title: "Lumière atlantique et grandes baies", desc: "L'éclairage côte basque est puissant, changeant selon les saisons et les heures. Les coloris se valident systématiquement sur place, jamais en showroom, car la lumière atlantique transforme particulièrement les laines à reflet soyeux et les unis mats. Nous présentons les échantillons à plusieurs moments de la journée pour confirmer la teinte définitive, particulièrement dans les pièces avec grandes baies océan." },
  { title: "Humidité marine et embruns", desc: "L'air basque est doux mais chargé d'humidité et de sel. Les matières que nous proposons sont sélectionnées pour leur stabilité dans cet environnement : laines vierges traitées, tissés vinyle qui supportent l'humidité sans gondoler, PVC haute densité pour les pièces directement exposées. Les colles et les sous-couches sont également choisies pour leur tenue en environnement marin." },
  { title: "Saisonnalité de la Côte Basque", desc: "Pour les villas familiales, les résidences secondaires, les hôtels et les restaurants, nous évitons systématiquement juillet et août, où l'occupation et la fréquentation sont à leur maximum. La fenêtre idéale court de novembre à avril, avec des pics d'activité en mars-avril et octobre-novembre. Les projets se planifient 4 à 6 mois en amont pour caler les meilleurs créneaux et les délais usine." },
  { title: "Logistique depuis La Rochelle", desc: "Biarritz est à environ 340 kilomètres et 3h30 de route de notre atelier de Villedoux. Nous mobilisons une équipe complète qui reste sur place le temps du chantier, avec hébergement inclus dans le devis. Les matières sont préparées et pré-assemblées en atelier, ce qui permet de tenir une pose finale rapide une fois sur site, sans navettes inutiles entre Charente-Maritime et Pays Basque." },
  { title: "Coordination architectes Côte Basque", desc: "La scène architecture d'intérieur du Pays Basque est dynamique et internationale, avec des projets souvent prescrits par des agences parisiennes, londoniennes ou madrilènes intervenant à distance. Nous nous adaptons à ces modes de travail : échantillons envoyés à l'agence quelle qu'en soit la localisation, photos détaillées partagées à chaque étape, validation à distance des choix de matière avant lancement de la confection." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée premium", desc: "Pour les salons d'apparat des villas Belle Époque, les chambres parentales, les bibliothèques. Tissage Wilton ou Axminster dense, palette de coloris coordonnable aux boiseries d'origine et aux enduits chaulés basques. Durée de vie 15 à 20 ans en usage privé soigné, vieillissement noble. Disponible en uni, chiné ou motif sur mesure. Gammes EGE Hospitality et Brintons." },
  { name: "Moquette hôtellerie haut de gamme", desc: "Pour les hôtels Relais & Châteaux et 5 étoiles de Biarritz. Traitement ignifuge en cœur de fibre, classement feu conforme à l'hébergement public, large palette de coloris coordonnables à la décoration. Tient les rythmes de service intense sans perte de tenue visuelle. Gammes EGE Highline et Tisca Tiara." },
  { name: "Tapis sur mesure cousus main", desc: "Pour les salons des villas d'exception, les pieds de lit des suites palace, les tables de salle à manger. Dimensions calées au centimètre près, bordure cousue main, motif coordonné au décor. Reproductions de motifs classiques ou créations contemporaines selon le projet. Délai 10 à 16 semaines selon complexité. Idéal pour habiller un parquet d'origine." },
  { name: "Sols PVC haute densité pour zones humides", desc: "Pour les salles de bain, vestiaires, espaces fitness des hôtels, cabines de change, zones spa. Lés soudés à chaud, plinthes à gorge arrondie, surface antidérapante légère pour la sécurité des pieds nus. Compatible nettoyage intensif des établissements de prestige. Gammes Forbo Surestep et Gerflor." },
  { name: "Sisal scellé pour résidences contemporaines", desc: "Pour les villas modernes face océan, les chambres d'amis, les vérandas. Le sisal scellé apporte une matière naturelle en cohérence avec l'esprit Côte Basque, supporte un usage familial classique et le sable ramené de la plage. Coloris chinés sable, écru, taupe doux, en accord avec les bois flottés et les enduits naturels." },
]

const marques = [
  { name: "EGE Carpets", desc: "Manufacture danoise référence de l'hôtellerie palace européenne. Gammes Highline et Hospitality utilisées dans les Relais & Châteaux et 5 étoiles de la Côte Basque." },
  { name: "Brintons", desc: "Axminster britannique haut de gamme, motifs sur mesure jusqu'à 36 couleurs. Référence des villas Belle Époque biarrotes et des grands intérieurs d'apparat patrimoniaux." },
  { name: "Tisca Tiara", desc: "Manufacture suisse de tapis et moquette laine de très haut de gamme. Pour les villas familiales d'exception et les suites des palaces basques." },
  { name: "Forbo", desc: "Sols PVC Sphera et Surestep, plus Marmoleum naturel. Solutions résidentielles et hôtelières éprouvées pour les zones humides et les espaces techniques." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design contemporain. Pour les cabinets d'architectes basques et les résidences d'auteur du plateau de l'Atalaye." },
  { name: "Bolon", desc: "Tissé vinyle suédois, référence des intérieurs contemporains bord d'océan. Lavable, robuste, palette dense pour villas modernes et restaurants vue mer." },
  { name: "Hereke", desc: "Tapis turcs d'apparat, tissage main, soie ou laine vierge. Pour les bibliothèques et salons de villas Belle Époque biarrotes historiques." },
  { name: "Gerflor", desc: "Sols PVC Mipolam et Texline. Pour les bureaux d'architectes, les espaces tertiaires et les zones humides des hôtels et villas." },
]

const quartiers = [
  { nom: "Côte des Basques", detail: "Front de mer historique de Biarritz, villas Belle Époque face océan, immeubles bourgeois XIXe. Vue exceptionnelle sur la baie, patrimoine architectural préservé." },
  { nom: "Le Phare", detail: "Pointe Saint-Martin, plateau de l'Atalaye, résidences face océan. Mix de villas anciennes restaurées et de programmes contemporains d'architecte." },
  { nom: "Impérial", detail: "Quartier de l'Hôtel du Palais, palaces historiques, villas Second Empire et Belle Époque. Cœur de l'histoire balnéaire biarrote, exigence maximale de respect du bâti." },
  { nom: "Saint-Charles", detail: "Quartier résidentiel calme et bourgeois, villas familiales, jardins et pinèdes. Clientèle attachée à la qualité d'exécution et à la discrétion de l'intervention." },
  { nom: "Aguiléra", detail: "Plateau résidentiel, villas années 30 et contemporaines, écoles internationales et résidences familiales. Programmes haut de gamme récents en pleine pinède." },
  { nom: "Bibi Beaurivage", detail: "Quartier balnéaire entre Côte des Basques et Bidart, villas face mer, résidences contemporaines avec vue panoramique sur l'océan." },
  { nom: "Anglet", detail: "Commune limitrophe nord, Chiberta, La Chambre d'Amour. Villas familiales dans la pinède, hôtels balnéaires, golf et clubs de tennis historiques." },
  { nom: "Bidart", detail: "Village authentique au sud, falaises et plages, villas néo-basques face océan, hôtels boutique et résidences contemporaines de prestige." },
  { nom: "Guéthary", detail: "Petit port basque préservé, villas familiales historiques, ambiance village. Programmes résidentiels rares et exigeants." },
  { nom: "Saint-Jean-de-Luz", detail: "Baie de Saint-Jean, port de pêche, vieille ville classée. Villas familiales, hôtels de charme face océan, résidences secondaires de prestige." },
  { nom: "Ciboure", detail: "De l'autre côté de la baie, port de Socoa, maisons basques traditionnelles, villas familiales sur les coteaux face Saint-Jean-de-Luz." },
  { nom: "Hendaye", detail: "Pointe sud du Pays Basque français, plage immense, villas Belle Époque, résidences contemporaines face océan et frontière espagnole." },
]

const process = [
  { step: 'Premier contact', desc: "Échange par téléphone ou mail. Recueil des éléments clés du projet basque : type de bien, surfaces, calendrier souhaité, contexte (résidence, hôtel, cabinet). Si le projet est piloté par un architecte d'intérieur parisien, londonien ou madrilène, nous prenons contact directement avec son agence." },
  { step: 'Visite Côte Basque', desc: "Déplacement organisé sous 3 à 4 semaines. Prise de cotes, repérage des contraintes d'accès villa ou hôtel, photos pour coordination coloris boiseries d'origine. Échantillons présentés sur place sous la lumière atlantique, à plusieurs moments de la journée." },
  { step: 'Choix matière et devis', desc: "Devis détaillé sous huitaine. Validation finale des coloris, tapis sur mesure, plinthes et profilés. Échanges éventuels avec l'agence d'architecture du projet pour validation à distance. Commande lancée à confirmation, délai usine 3 à 12 semaines selon gamme." },
  { step: 'Confection atelier Villedoux', desc: "Pré-découpe et pré-assemblage des matières à La Rochelle. Vérification des dimensions à blanc avant transport. Cette préparation amont est ce qui permet de tenir une pose finale en 4 à 8 jours à Biarritz, sans aller-retour inutile sur la route." },
  { step: 'Pose à Biarritz', desc: "Équipe mobilisée sur place, hébergement inclus. Planning calé sur vos disponibilités ou la fenêtre de chantier, idéalement hors saison estivale. Coordination avec la conciergerie de l'hôtel ou le gardien de la villa. Nettoyage complet à la livraison, finitions vérifiées avec vous ou l'architecte." },
]

const faq = [
  { q: "Vous déplacez-vous à Biarritz depuis La Rochelle ?", a: "Oui, sur projets de prestige. Biarritz est à environ 340 kilomètres de notre atelier de Villedoux, soit 3h30 à 4 heures de route. C'est une distance que nous assumons pour des chantiers qui le justifient : villas patrimoniales, hôtels Relais & Châteaux, résidences d'architectes, projets d'envergure. L'équipe complète se déplace et reste sur place le temps du chantier, hébergement inclus dans le devis. Les matières sont entièrement préparées en amont à l'atelier, ce qui réduit le temps passé sur place et limite les allers-retours. Pour un projet de villa familiale à Biarritz, on est typiquement sur 4 à 8 jours de pose sur site, après une à deux visites préparatoires." },
  { q: "Travaillez-vous dans les villas Belle Époque biarrotes ?", a: "Oui, c'est un terrain où notre approche patrimoniale trouve tout son sens. La Côte des Basques, l'Impérial et le plateau de l'Atalaye conservent un patrimoine de villas Belle Époque, Second Empire et néo-basques de très grande qualité. Parquets d'origine, boiseries d'apparat, ferronneries Art Déco demandent un respect particulier. Nos poses sont pensées en réversibilité chaque fois que possible, sans clouage ni colle agressive sur les supports historiques. Les tapis sur mesure laine, les moquettes Brintons ou EGE s'inscrivent naturellement dans ces décors d'époque. Nous coordonnons avec l'architecte du patrimoine ou l'architecte d'intérieur du projet, qu'il soit basé en France ou à l'étranger." },
  { q: "Intervenez-vous dans les hôtels de prestige de la Côte Basque ?", a: "Oui, c'est même une part importante de notre activité dans la région. La Côte Basque accueille des établissements Relais & Châteaux, des palaces historiques et des hôtels boutique de très haut niveau, qui demandent une parfaite tenue dans le temps et des finitions impeccables. Nous travaillons en pose nocturne ou pendant les fermetures saisonnières pour ne pas perturber l'exploitation. Les moquettes hôtellerie EGE Highline et Hospitality, traitées ignifuges et classées feu conformément aux exigences ERP, sont nos références principales. La traçabilité matière et les PV feu sont remis systématiquement au directeur d'établissement pour son dossier de conformité." },
  { q: "Quand faut-il intervenir sur un bien à Biarritz ?", a: "La fenêtre idéale court de novembre à avril, hors saison touristique. Pour les villas familiales et les résidences secondaires, c'est la période où les propriétaires sont moins présents et où le chantier ne perturbe pas la vie de famille. Pour les hôtels et restaurants, c'est la fermeture annuelle ou la basse saison qui est visée, généralement entre mi-novembre et fin février selon les établissements. Nous évitons systématiquement juillet et août, ainsi que les grandes périodes de festivals et événements basques où l'occupation de la côte est maximale. Les meilleurs créneaux se planifient 4 à 6 mois en amont, surtout pour les projets avec tapis sur mesure aux délais usine longs." },
  { q: "Travaillez-vous avec les architectes d'intérieur parisiens ou internationaux ?", a: "Oui, fréquemment. Les projets de prestige à Biarritz sont souvent prescrits par des agences d'architecture d'intérieur basées à Paris, Londres, Madrid ou New York, qui travaillent à distance avec leurs clients basques. Nous nous adaptons à ces modes de travail : envoi d'échantillons à l'agence quelle qu'en soit la localisation, photos détaillées partagées à chaque étape du chantier, validation à distance des choix de matière avant lancement de la confection. Nous fournissons les fiches techniques, les PV feu et la traçabilité matière nécessaires aux dossiers de chantier premium. Cette collaboration nous permet d'élargir les matières proposées au-delà du catalogue habituel." },
  { q: "Comment gérez-vous l'humidité marine pour les matières posées ?", a: "L'air de la Côte Basque est chargé d'humidité et de sel, ce qui impose une attention particulière au choix des matières et à la pose. Nous orientons vers des laines vierges traitées hydrofuges, des tissés vinyle Bolon qui supportent l'humidité sans gondoler, des PVC haute densité pour les pièces directement exposées aux embruns. Les colles et les sous-couches sont également choisies pour leur tenue en environnement marin, avec des références adaptées qui ne se ramollissent pas dans le temps. Sur les villas en première ligne face océan, nous renforçons aussi la préparation du support, parfois avec un traitement anti-humidité préalable, pour éviter toute mauvaise surprise à moyen terme." },
  { q: "Posez-vous aussi des tapis sur mesure à Biarritz ?", a: "Oui, c'est une part importante de notre activité sur la Côte Basque. Tapis cousus main, dimensions calées au centimètre près sur la pièce, bordure travaillée, motif coordonné au décor. Nous proposons des reproductions Aubusson, Hereke, Savonnerie pour les intérieurs Belle Époque et néo-basques, ainsi que des créations contemporaines unies ou graphiques pour les villas d'architectes modernes. Délai usine 10 à 16 semaines selon complexité et nombre de coloris. Un tapis sur mesure est souvent ce qui transforme un salon de villa biarrote, particulièrement quand il habille un parquet d'origine sans le masquer totalement, tout en apportant la chaleur acoustique nécessaire aux grands volumes." },
]

export default function RevetementSolBiarritzPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-biarritz#service',
        name: "Revêtement de sol à Biarritz",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Biarritz' },
          { '@type': 'AdministrativeArea', name: 'Pyrénées-Atlantiques' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Biarritz et Côte Basque",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour villas Belle Époque, hôtels Relais & Châteaux, résidences contemporaines et cabinets d'architectes à Biarritz, Anglet, Bidart, Saint-Jean-de-Luz.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Biarritz', item: 'https://cbsols.fr/revetement-sol-biarritz' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Biarritz</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Biarritz,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>l&apos;élégance basque.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Biarritz et sur la Côte Basque. Villas Belle Époque du front de mer, résidences contemporaines, hôtels Relais & Châteaux, cabinets d&apos;architectes. Atelier basé près de La Rochelle, déplacement organisé pour les projets de prestige.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=biarritz" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Projets de prestige</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Biarritz, c&apos;est l&apos;exigence Belle Époque face à l&apos;océan. Une villa de la Côte des Basques ou une suite de Relais & Châteaux, c&apos;est le même soin du détail que CB Sols apporte depuis 27 ans. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, gérant de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de projet</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même exigence basque.</em>
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

      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Biarritz ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec vous ou votre architecte. Visite organisée sous 3 à 4 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?from=biarritz-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Côte Basque</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers basques.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Biarritz et sur la Côte Basque demande une méthode adaptée. Voici les six points sur lesquels nous structurons notre approche, du choix des matières à la coordination internationale.
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Biarritz</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons en Pays Basque.</em>
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

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Une villa Belle Époque face à l&apos;océan, c&apos;est un parquet à respecter, une lumière à comprendre, un sel marin à anticiper. Trois métiers qu&apos;on fait depuis 27 ans. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=biarritz-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite à domicile à Biarritz</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets basques.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quartiers et communes Côte Basque</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Biarritz et la Côte Basque, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>d&apos;Anglet à Hendaye.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble de la Côte Basque, des quartiers historiques de Biarritz aux villages frontaliers du sud, là où se concentrent les projets résidentiels et hôteliers de prestige.
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

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en réflexion ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Un appel pour défricher le sujet.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Vingt minutes au téléphone pour clarifier les gammes possibles, le calendrier et un ordre de grandeur budgétaire pour votre chantier basque.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=biarritz-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Biarritz.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Revêtement de sol à Biarritz, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Une question de plus ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Appelez Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Direct avec le gérant. Pas de hotline. Conseil clair, suite donnée seulement si le projet a du sens pour vous comme pour nous.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre la Côte Basque, la Gironde, et au-delà sur tous les terrains d&apos;exception.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/revetement-sol-bordeaux" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Bordeaux →</Link>
            <Link href="/revetement-sol-cap-ferret" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Cap Ferret →</Link>
            <Link href="/revetement-sol-arcachon" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Arcachon →</Link>
            <Link href="/sols-monaco" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sols Monaco →</Link>
            <Link href="/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette château →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet biarrot <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Biarritz. Devis détaillé, finitions premium, respect du patrimoine basque et de la lumière atlantique. 27 ans de savoir-faire CB Sols au service de la Côte Basque.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=biarritz-final" variant="primary" size="md">Demander un devis</Button>
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
