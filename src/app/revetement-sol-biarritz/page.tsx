import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Mail, MapPin, Sparkles, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revêtement de Sol à Biarritz | Villas Côte Basque",
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
  { title: "Villas Belle Époque front de mer", desc: "Vous avez une villa sur le front de mer ? On pose une moquette laine ou un tapis cousu main sans rien clouer. On respecte le parquet d'origine et les boiseries. Si vous voulez retirer dans dix ans, tout reste intact." },
  { title: "Résidences contemporaines de prestige", desc: "Votre architecte a livré une villa toute neuve face océan. On choisit des sols clairs qui captent la lumière. Sisal scellé ou moquette bouclée dans les chambres, tapis sobre dans le salon. On valide chaque échantillon avec l'agence." },
  { title: "Hôtels Relais & Châteaux et 5 étoiles", desc: "Vous gérez un palace ou un Relais & Châteaux. On vient la nuit ou en basse saison. Moquette ignifugée haute densité, tapis cousus main pour les suites. Vos clients ne voient jamais le chantier." },
  { title: "Cabinets d'architectes et bureaux d'exception", desc: "Vous recevez vos clients dans un bureau du centre. Un sol soigné pose le ton dès l'entrée. PVC acoustique pour les espaces de travail, moquette laine pour l'accueil. On cale tout sur votre mobilier." },
]

const exigences = [
  { title: "On respecte les villas Belle Époque", desc: "Biarritz garde un patrimoine rare : Belle Époque, néo-basque, modernisme. Beaucoup de villas ont leurs parquets d'origine. On pose en réversible, on accorde les coloris aux boiseries existantes. Notre intervention reste discrète, c'est ce qui se fait ici." },
  { title: "La lumière océan, on la teste sur place", desc: "L'éclairage de la Côte Basque change tout. Une laine vue en showroom n'a rien à voir avec la même posée face à l'océan. On apporte les échantillons chez vous, on les regarde le matin et l'après-midi. Vous choisissez sans mauvaise surprise." },
  { title: "Sel et humidité, on choisit en conséquence", desc: "L'air basque est doux mais chargé. Les mauvais sols gondolent au bout d'un hiver. On retient des fibres traitées, des colles compatibles bord de mer, des sous-couches stables. Vous gardez un sol propre, ferme, hiver après hiver." },
  { title: "On vient hors juillet-août", desc: "L'été à Biarritz, c'est bondé. On cale les chantiers entre novembre et avril, parfois septembre-octobre. Les projets se planifient quatre à six mois en amont. Vous récupérez la villa prête pour la saison, sans avoir vu un seul rouleau passer." },
  { title: "Trois heures et demie de route", desc: "Biarritz est à 340 km de notre atelier. Quand on descend, on descend avec l'équipe complète et on dort sur place. Les matières sont préparées à Villedoux avant le départ. Sur site, on pose vite, sans navettes inutiles." },
  { title: "On dialogue avec votre architecte", desc: "Beaucoup de projets passent par des agences à Paris, Londres, Madrid. On s'adapte : échantillons envoyés à l'agence, photos partagées à chaque étape, validations à distance. Votre architecte garde la main, vous suivez en transparence. Personne n'est laissé de côté." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée premium", desc: "Notre matière reine pour les salons d'apparat des villas Belle Époque. La laine se patine, ne s'écrase pas, vieillit noblement. On choisit avec vous un uni profond, un chiné discret ou un motif sur mesure pour s'accorder aux boiseries d'origine et aux enduits chaulés basques. Quinze à vingt ans devant vous tranquillement." },
  { name: "Moquette hôtellerie haut de gamme", desc: "Pour les Relais & Châteaux et les 5 étoiles biarrots, on part sur des gammes ignifugées en cœur de fibre. Elles passent la sécurité incendie sans difficulté. Le choix de coloris est large, on s'aligne sur votre décoration. Et elles encaissent les rythmes de service intense sans perdre leur tenue visuelle entre deux remplacements." },
  { name: "Tapis sur mesure cousus main", desc: "Pour les salons de villas d'exception et les suites de palace, le tapis sur mesure fait toute la différence. Dimensions au centimètre près, bordure cousue main, motif accordé à votre décor. Reproductions classiques ou créations contemporaines, selon le projet. Compter dix à seize semaines de fabrication. C'est ce qui habille un parquet d'origine sans le masquer." },
  { name: "Sols PVC haute densité pour zones humides", desc: "Pour les salles de bains, les espaces fitness et les zones spa des hôtels, on soude les lés à chaud. La plinthe remonte en gorge arrondie, donc l'eau ne passe nulle part. La surface est légèrement antidérapante pour vos clients pieds nus. Et ça supporte le nettoyage intensif des établissements de prestige sans broncher." },
  { name: "Sisal scellé pour résidences contemporaines", desc: "Dans une villa moderne face océan, le sisal scellé apporte le côté brut recherché. Il s'inscrit parfaitement dans l'esprit Côte Basque, les bois flottés, les enduits naturels. Coloris chinés sable, écru, taupe doux. Il résiste à un usage familial classique et au sable rapporté de la plage." },
]

const marques = [
  { name: "EGE Carpets", desc: "Le danois, notre référence pour les Relais & Châteaux et les 5 étoiles de la Côte Basque. Leurs gammes Highline et Hospitality posent un cadre dès l'entrée." },
  { name: "Brintons", desc: "L'Axminster britannique, l'aristocratie de la moquette. Jusqu'à trente-six couleurs sur un motif. On l'appelle pour les villas Belle Époque biarrotes et les grands intérieurs patrimoniaux." },
  { name: "Tisca Tiara", desc: "Le suisse, c'est le très haut de gamme. On les sort pour les villas familiales d'exception et les suites des palaces basques. Quand le budget suit, le résultat est sans équivalent." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum, leurs Surestep encaissent les zones humides des hôtels sans broncher." },
  { name: "Object Carpet", desc: "Les allemands, pour les cabinets d'architectes basques et les résidences d'auteur du plateau de l'Atalaye. Design contemporain affirmé, finitions parfaites." },
  { name: "Bolon", desc: "Le suédois du tissé vinyle, notre référence pour les intérieurs contemporains bord d'océan. Lavable, robuste, palette dense. Idéal pour les villas modernes et les restaurants vue mer." },
  { name: "Hereke", desc: "Les tapis turcs tissés main, soie ou laine vierge. On les pose dans les bibliothèques et salons des villas Belle Époque historiques. C'est le genre d'objet qui se transmet." },
  { name: "Gerflor", desc: "Le français de Lyon, qu'on connaît par cœur. Leurs Mipolam et Texline sont notre passe-partout pour les bureaux d'architectes et les zones humides des hôtels et villas." },
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
  { q: "Vous venez vraiment à Biarritz depuis La Rochelle ?", a: "Oui, sur les projets qui le justifient. Biarritz est à 340 km, soit 3h30 à 4h de route. On y descend pour les villas patrimoniales, les Relais & Châteaux, les résidences d'architecte. L'équipe complète se déplace et reste sur place pour la durée du chantier, hébergement inclus. On prépare tout en amont à l'atelier, donc la pose sur site va vite : quatre à huit jours pour une villa familiale, après une ou deux visites préparatoires." },
  { q: "Vous travaillez dans les villas Belle Époque biarrotes ?", a: "Oui, c'est là qu'on prend beaucoup de plaisir. La Côte des Basques, l'Impérial et l'Atalaye gardent un patrimoine de villas Belle Époque et néo-basques superbe. Les parquets, les boiseries, les ferronneries Art Déco demandent du respect. On pose chaque fois que possible en réversible, sans clouer, sans coller agressivement. On coordonne avec votre architecte du patrimoine, qu'il soit en France ou à l'étranger." },
  { q: "Vous intervenez dans les hôtels de prestige de la côte ?", a: "Oui, c'est une part importante de notre activité ici. La Côte Basque concentre des Relais & Châteaux, des palaces historiques et des hôtels boutique haut de gamme. On pose la nuit ou pendant les fermetures saisonnières pour ne pas perturber l'exploitation. Les EGE Highline et Hospitality sont nos références principales, traitées ignifuges en cœur de fibre. On remet la traçabilité matière et les PV feu directement au directeur pour son dossier." },
  { q: "Quand vaut-il mieux intervenir à Biarritz ?", a: "De novembre à avril, hors saison. Pour les villas familiales, c'est la période où les propriétaires sont moins présents. Pour les hôtels et restaurants, c'est la fermeture annuelle ou la basse saison, en général entre mi-novembre et fin février. On évite juillet et août, et les grandes périodes de festivals basques où la côte est saturée. Les bons créneaux se planifient quatre à six mois à l'avance, surtout avec un tapis sur mesure dans le lot." },
  { q: "Vous travaillez avec les architectes parisiens ou internationaux ?", a: "Fréquemment. Les projets de prestige biarrots sont souvent prescrits par des agences basées à Paris, Londres, Madrid ou New York. On s'adapte au mode de travail à distance : on envoie les échantillons à leur agence, on partage des photos détaillées à chaque étape, on valide les choix avant lancement de la confection. Et on fournit toute la documentation technique pour leur dossier de chantier premium." },
  { q: "Comment vous gérez l'humidité marine ?", a: "L'air basque est chargé d'humidité et de sel, ça demande de l'attention. On oriente vers des laines vierges traitées hydrofuges, du Bolon qui ne gondole pas, du PVC haute densité pour les pièces exposées aux embruns. Les colles et les sous-couches sont choisies pour leur tenue marine. Sur les villas en première ligne, on renforce parfois la préparation du support avec un traitement anti-humidité préalable." },
  { q: "Vous posez aussi des tapis sur mesure à Biarritz ?", a: "Oui, c'est une part importante du métier sur la Côte Basque. Tapis cousus main, dimensions au centimètre près, bordure travaillée, motif accordé au décor. Reproductions Aubusson ou Hereke pour les intérieurs Belle Époque, créations contemporaines pour les villas d'architecte. Compter dix à seize semaines de fabrication. C'est souvent ce qui transforme un salon, surtout quand on habille un parquet d'origine sans le masquer." },
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
      <StickyDevisButton from="biarritz" />
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

      <RelatedCards
        sectionSubtitle="Notre savoir-faire couvre d'autres univers susceptibles de vous interesser. Prenez le temps de parcourir, posez vos questions, nous y repondrons."
        items={[
          { href: "/revetement-sol-saint-jean-de-luz", title: "Revetement sol Saint-Jean-de-Luz", teaser: "Maisons basques et villas de bord de mer. Le confort d'un sol pense pour resister au sel.", icon: MapPin },
          { href: "/revetement-sol-arcachon", title: "Revetement sol Arcachon", teaser: "Maisons de bassin et villas dunaires. Sols qui supportent le sable, la lumiere et la vie au quotidien.", icon: MapPin },
          { href: "/revetement-sol-cap-ferret", title: "Revetement sol Cap Ferret", teaser: "Cabanes ostreicoles, villas pieds dans le sable. La discretion d'un savoir-faire qui se voit a peine.", icon: Waves },
          { href: "/revetement-sol-bordeaux", title: "Revetement sol Bordeaux", teaser: "Hotels particuliers, lofts d'echoppes, maisons de pierre. Sols qui dialoguent avec l'architecture.", icon: MapPin },
          { href: "/sols-monaco", title: "Sols Monaco", teaser: "Yachts, appartements et villas. Le niveau d'exigence et la discretion qu'attend une clientele internationale.", icon: Sparkles },
          { href: "/architectes", title: "Pour les architectes", teaser: "Documentation matiere, echantillons annotes, devis detailles. Notre role, c'est de servir votre vision.", icon: Building2 },
          { href: "/showroom", title: "Showroom Villedoux", teaser: "Venez voir et toucher les matieres. Sur rendez-vous, a Villedoux pres de La Rochelle.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gerant vous repond directement.", icon: Mail },
        ]}
      />

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
