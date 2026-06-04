import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Île d'Yeu | Maisons et Hôtels Vendée | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure à l'Île d'Yeu. Maisons de pêcheurs Port-Joinville, villas côte sauvage, hôtels boutique. Logistique insulaire maîtrisée par CB Sols, 27 ans de savoir-faire.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-ile-d-yeu' },
  keywords: ['revêtement sol Île d\'Yeu', 'moquette maison Yeu', 'sol pied dans le sable Vendée', 'artisan sol Île d\'Yeu'],
  openGraph: {
    title: "Revêtement de sol à l'Île d'Yeu, le charme insulaire",
    description: "Moquette, sol PVC et tapis sur mesure à l'Île d'Yeu. Logistique maîtrisée depuis Fromentine, intervention hors saison. CB Sols, 27 ans.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-ile-d-yeu.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Maisons de pêcheurs rénovées Port-Joinville", desc: "Les maisons traditionnelles du port et du centre, en pierre blanche ou crépies, gardent une authenticité forte qu'il faut respecter. Pièces de petite et moyenne dimension, escaliers étroits, parquets parfois inégaux qu'il faut ragréer en amont. Moquette laine bouclée, sisal scellé ou PVC effet bois clair selon la pièce, en accord avec l'esprit village et le mobilier rustique-chic des rénovations contemporaines. Pose dans un esprit maison de famille." },
  { title: "Villas familiales côte sauvage", desc: "Le sud de l'île, entre Pointe du But et Anse des Vieilles, accueille des villas familiales tournées vers l'océan. Pièces ouvertes sur la lande et les criques, grandes baies pour capter la lumière, mode de vie pieds nus toute la belle saison. Sols clairs, sisal naturel, PVC effet bois, tapis chinés dans les salons. Matières choisies pour supporter le sable, l'humidité et le mode de vie insulaire estival." },
  { title: "Hôtels boutique et chambres d'hôtes de charme", desc: "L'Île d'Yeu compte une dizaine d'établissements hôteliers et de maisons d'hôtes haut de gamme, souvent installés dans d'anciennes maisons de notables ou de capitaines. Chambres, salons d'accueil, salles à manger. Moquette hôtellerie densité maîtrisée, traitement anti-tache, palette en accord avec la pierre blanche et les boiseries d'origine. Pose en saison creuse pour ne pas perturber la basse activité d'hiver." },
  { title: "Locations saisonnières premium", desc: "Maisons familiales devenues locations courtes, gîtes de prestige, villas privatives à la semaine. Le sol doit tenir la rotation intensive des familles d'été et garder un aspect propre toute la saison. PVC haute densité effet bois pour les pièces de vie, moquette bouclée robuste dans les chambres, profilés de seuil costauds pour les valises et les chariots. Compromis entre durabilité et esthétique chaleureuse." },
]

const exigences = [
  { title: "Logistique insulaire maîtrisée", desc: "L'Île d'Yeu est à 40 minutes de bateau depuis Fromentine, en traversée passagers et fret. Les matières et l'outillage doivent être planifiés à la rotation près, embarqués à des horaires précis, déchargés à Port-Joinville avec un véhicule sur place pour l'acheminement final. Nous gérons toute cette chaîne logistique, de la commande à la mise en œuvre, sans que vous ayez à gérer la moindre rotation de fret. C'est notre cœur de métier sur les chantiers insulaires." },
  { title: "Saisonnalité stricte", desc: "L'Île d'Yeu est très saturée d'avril à fin septembre, avec des traversées et un hébergement saturés. La fenêtre d'intervention idéale court d'octobre à mars, avec un pic d'activité chantiers en novembre, février et mars. Nous planifions vos travaux 4 à 6 mois en amont pour caler les bonnes traversées, l'hébergement de l'équipe sur place, et la livraison des matières dans les bons créneaux fret." },
  { title: "Pièces de petite dimension", desc: "Les maisons insulaires traditionnelles présentent souvent des pièces de petite taille, des escaliers étroits, des plafonds bas. La manutention des rouleaux de moquette et des lés de PVC se prépare au centimètre près, parfois avec des découpes préliminaires à l'atelier pour passer dans les ouvertures de porte. Cette préparation amont fait gagner des heures sur place et évite les mauvaises surprises de manutention." },
  { title: "Climat insulaire", desc: "L'air de Yeu est très chargé en humidité et en sel, vents d'ouest dominants. Les matières que nous proposons sont sélectionnées pour leur stabilité dans cet environnement : laines vierges traitées, sisals scellés, tissés vinyle qui supportent l'humidité, PVC haute densité pour les pièces directement exposées au sable et au sel. Les colles et primaires sont également choisis pour leur tenue marine de long terme." },
  { title: "Respect du bâti local", desc: "Les maisons de l'île, en pierre blanche ou enduites à la chaux, ont leur âme. Les rénovations contemporaines visent généralement à conserver cette identité : sols clairs, matières naturelles ou évoquant le naturel, palettes cohérentes avec la pierre, le bois flotté et les enduits clairs. Nous orientons systématiquement les choix vers cette cohérence, sans rigidité, en laissant la place aux choix personnels du propriétaire." },
  { title: "Retour matières et déchets", desc: "Sur une île, on ne laisse pas les déchets de chantier. Tout ce qui est déposé, découpé, emballé repart avec nous vers le continent par la traversée retour. Cette gestion intégrée fait partie de notre prestation et c'est apprécié par les propriétaires qui ne veulent pas avoir à organiser une benne ou un évacuation eux-mêmes après notre départ. Le bilan logistique d'un chantier insulaire se mesure aussi à ce qu'on remporte." },
]

const materiaux = [
  { name: "Sisal scellé et fibres naturelles", desc: "C'est la matière phare pour les villas et maisons de famille de l'île. Naturelle, sable, écru ou taupe doux, le sisal apporte une cohérence parfaite avec l'esprit insulaire et la pierre blanche locale. Scellé contre le sable et l'humidité, il supporte un usage familial estival classique. Choisi en pose collée sur sous-couche feutre, durée de vie 10 à 15 ans en résidence secondaire." },
  { name: "Sols PVC effet bois clair", desc: "Pour les pièces de vie ouvertes sur la cour ou la terrasse, les cuisines, les vérandas. Les imitations chêne blanchi, pin lavé ou bois flotté donnent une ambiance maison de plage très convaincante, avec un entretien minimal et une excellente tenue au sable et à l'eau ramenés de la plage. Idéal pour les locations saisonnières où le sol prend cher l'été. Gammes Gerflor et Forbo." },
  { name: "Moquette laine bouclée pour chambres", desc: "Pour les chambres parentales et les chambres d'enfants des maisons familiales. La laine bouclée apporte la chaleur des pieds nus le matin, supporte le sable rapporté de la plage, et présente une bonne durabilité dans le temps avec un entretien simple. Palette de coloris coordonnable aux boiseries et aux enduits chaulés des intérieurs insulaires." },
  { name: "Tissés vinyle Bolon pour entrées et sas", desc: "Pour les entrées de maison face plage, les sas entre extérieur et intérieur, les arrière-cuisines. Le Bolon se lave à grande eau, supporte le sable et l'humidité du vent d'ouest, et propose une esthétique tissée contemporaine en accord avec les rénovations chic-marines. Très bon investissement pour les zones de transition." },
  { name: "Tapis sur mesure et tapis chinés", desc: "Pour les salons des maisons de famille, les pieds de lit des chambres parentales, les couloirs étroits des maisons de pêcheurs. Dimensions calées à la pièce, bordure travaillée, motif coordonné au décor. Délai usine 8 à 14 semaines selon complexité. Idéal pour habiller un sol existant sans lourdes interventions, parfait pour les rénovations légères avant location estivale." },
]

const marques = [
  { name: "Bolon", desc: "Tissé vinyle suédois, référence des intérieurs contemporains bord de mer. Lavable, robuste, palette dense pour villas et maisons insulaires." },
  { name: "Gerflor", desc: "Sols PVC Mipolam et Texline. Imitations bois et minéral pour rénovations de maisons de pêcheurs et locations saisonnières." },
  { name: "Forbo", desc: "Sols PVC Sphera et Marmoleum naturels. Solutions résidentielles éprouvées pour villas familiales et maisons de famille." },
  { name: "EGE Carpets", desc: "Manufacture danoise. Gammes Hospitality utilisées dans les hôtels boutique et maisons d'hôtes de prestige de l'île." },
  { name: "Brintons", desc: "Axminster britannique. Pour les rénovations patrimoniales des grandes maisons de notables historiques de Port-Joinville." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design contemporain. Pour les rénovations d'auteur et les locations premium." },
  { name: "Tisca Tiara", desc: "Manufacture suisse de tapis et moquette laine haut de gamme. Pour les villas familiales d'exception de la côte sauvage." },
  { name: "Romus", desc: "Profilés de seuil, plinthes, nez de marche. Compléments pour les escaliers étroits des maisons insulaires et les seuils sablés." },
]

const quartiers = [
  { nom: "Port-Joinville", detail: "Capitale de l'île, port de pêche et de plaisance, maisons de notables historiques, hôtels et restaurants. Cœur de l'activité insulaire et logistique d'arrivée des matières." },
  { nom: "Saint-Sauveur", detail: "Village central de l'île, église romane, maisons traditionnelles en pierre blanche. Calme et patrimoine, résidences familiales et maisons d'hôtes." },
  { nom: "La Meule", detail: "Petit port sauvage du sud-ouest, criques préservées, maisons de pêcheurs rénovées en résidences de charme. Cadre exceptionnel et exigence d'authenticité." },
  { nom: "Pointe du But", detail: "Extrémité ouest de l'île, phare et lande sauvage. Villas familiales contemporaines tournées vers l'océan, mode de vie face aux éléments." },
  { nom: "Port de la Meule", detail: "Mouillage protégé du sud, cabanes de pêcheurs, restaurants iodés. Maisons familiales rénovées avec accès direct aux criques voisines." },
  { nom: "Plage des Sabias", detail: "Plage du nord-ouest, criques de sable doré. Villas familiales en surplomb, résidences secondaires de prestige, vue panoramique sur l'océan." },
  { nom: "Vieux Château", detail: "Forteresse médiévale spectaculaire sur la falaise sud. Quelques maisons et villas dans les environs immédiats, secteur classé et préservé." },
  { nom: "Côte sauvage", detail: "Tout le sud et l'ouest de l'île, lande, criques, falaises. Villas isolées et résidences contemporaines tournées vers l'océan, exigence d'autonomie logistique." },
  { nom: "Anse des Vieilles", detail: "Plage de sable doré protégée, côte sud-est. Villas familiales et résidences secondaires dans les pins maritimes, ambiance Méditerranée atlantique." },
  { nom: "Port de Ker Châlon", detail: "Mouillage du nord-est, maisons traditionnelles, ostréiculture historique. Résidences de famille rénovées et programmes patrimoniaux." },
  { nom: "Quai de la Chapelle", detail: "Front de port de Port-Joinville, immeubles XIXe, restaurants, hôtels avec vue sur le port. Cœur de la vie sociale insulaire." },
  { nom: "Plage des Soux", detail: "Plage familiale du nord, accès facile, villas et résidences face mer. Quartier balnéaire calme et résidentiel apprécié des familles." },
]

const process = [
  { step: 'Premier contact', desc: "Échange par téléphone ou mail. Recueil des éléments clés du projet insulaire : type de bien, surfaces, calendrier souhaité, usage (résidence principale, secondaire, location, hôtel). Discussion sur la fenêtre d'intervention hors saison qui conviendra le mieux." },
  { step: 'Visite à Port-Joinville', desc: "Déplacement organisé sous 3 à 5 semaines, traversée incluse. Prise de cotes précise, repérage des contraintes d'accès maison, photos pour coordination coloris. Échantillons présentés sur place sous la lumière insulaire, validation à plusieurs moments si possible." },
  { step: 'Devis et logistique fret', desc: "Devis détaillé sous huitaine, incluant le poste logistique fret traversée et hébergement de l'équipe. Validation des coloris, des tapis sur mesure, des seuils. Commande lancée à confirmation, délai usine 3 à 12 semaines selon gamme." },
  { step: 'Confection atelier Villedoux', desc: "Pré-découpe et pré-assemblage des matières à La Rochelle. Marquage précis des découpes pour passer les ouvertures de porte des maisons traditionnelles. Cette préparation amont est cruciale pour les chantiers insulaires où chaque manutention sur place est coûteuse." },
  { step: 'Traversée et pose à Yeu', desc: "Matières et outillage embarqués à Fromentine sur la traversée fret programmée. Équipe traverse en passagers la veille, hébergement à Port-Joinville. Pose en 4 à 8 jours selon projet, déchets remportés à la traversée retour, finitions vérifiées avec vous avant départ." },
]

const faq = [
  { q: "Vous déplacez-vous à l'Île d'Yeu depuis La Rochelle ?", a: "Oui, régulièrement. L'Île d'Yeu est à environ 180 kilomètres de notre atelier de Villedoux, en deux temps : 2 heures de route jusqu'à Fromentine, puis 40 minutes de traversée passagers et fret jusqu'à Port-Joinville. C'est une zone d'intervention naturelle pour nous, dans la continuité de notre travail sur les îles charentaises (Ré, Oléron) et la côte vendéenne. Nous gérons l'intégralité de la chaîne logistique : réservation des traversées passagers et fret, hébergement de l'équipe à Port-Joinville, véhicule sur place pour l'acheminement des matières, et organisation du retour des déchets de chantier vers le continent. Vous n'avez rien à organiser de votre côté." },
  { q: "Comment se passe la logistique fret pour les matières ?", a: "C'est précisément ce que nous gérons en amont, et c'est ce qui distingue un chantier insulaire bien préparé d'un chantier improvisé. Les rouleaux de moquette, les paquets de PVC, les colles, les outils et le mobilier de chantier sont embarqués à Fromentine sur la traversée fret programmée par la Compagnie Vendéenne ou la Régie Yeu Continent, selon nos partenaires habituels. Nous réservons les créneaux fret 3 à 4 semaines en amont pour les bons horaires, particulièrement en début et en fin de chantier où les volumes sont les plus importants. À l'arrivée à Port-Joinville, un véhicule loué sur place assure le dernier kilomètre jusqu'au chantier. Toute cette organisation est incluse dans le devis." },
  { q: "Quand intervenir sur un bien à l'Île d'Yeu ?", a: "La fenêtre idéale court d'octobre à mars, hors saison touristique. Pour les villas familiales et les résidences secondaires, c'est la période où les propriétaires sont moins présents et où le chantier ne perturbe pas la vie de famille estivale. Pour les hôtels et chambres d'hôtes, c'est généralement la fermeture annuelle, courante de novembre à février. Pour les locations saisonnières, on vise impérativement la basse saison pour rendre le bien prêt avant Pâques. Nous évitons systématiquement avril à septembre où les traversées sont saturées et l'hébergement de l'équipe difficile à caler. Les meilleurs créneaux se planifient 4 à 6 mois en amont, surtout pour les chantiers avec tapis sur mesure ou projets de plus grande ampleur." },
  { q: "Quelle matière choisir pour une maison de famille à Yeu ?", a: "Cela dépend de l'usage et de la pièce. Pour les pièces de vie et les vérandas ouvertes sur la cour, nous orientons souvent vers du PVC effet bois clair ou du sisal scellé, deux matières qui supportent le sable, l'humidité du vent d'ouest et le mode de vie pieds nus de l'été insulaire. Pour les chambres, la moquette laine bouclée apporte la chaleur du matin et le silence des nuits. Pour les entrées de maison face plage, le tissé vinyle Bolon est imbattable : il se lave à grande eau, supporte le sable et tient dans le temps. Nous validons toujours les choix à l'échantillonnage, in situ, sous la lumière insulaire qui transforme particulièrement les teintes naturelles." },
  { q: "Pouvez-vous travailler dans les maisons de pêcheurs étroites ?", a: "Oui, c'est même un terrain où notre préparation atelier prend tout son sens. Les maisons traditionnelles de Port-Joinville et des villages présentent souvent des ouvertures de porte étroites, des escaliers serrés et des pièces de petite dimension. Nous préparons les découpes en amont à l'atelier de Villedoux, parfois en plusieurs morceaux qui se raccordent à blanc pour passer les ouvertures, puis se réassemblent sur place avec une finition invisible. Cette méthode est ce qui fait la différence entre un chantier qui se déroule sereinement et un chantier où on bloque sur une manutention impossible. Sur les escaliers étroits, nous proposons aussi des solutions de pose en escalier qui n'imposent pas de monter de grandes pièces d'un seul tenant." },
  { q: "Comment gérez-vous les déchets de chantier sur l'île ?", a: "C'est un point auquel nous attachons beaucoup d'importance, et que les propriétaires apprécient particulièrement. Tout ce qui est déposé, découpé, emballé pendant le chantier est rassemblé, mis en sacs et palettes, et repart avec nous vers le continent par la traversée retour fret. Vous n'avez ni benne à organiser, ni déchets à porter en déchetterie locale, ni évacuation à gérer après notre départ. C'est inclus dans la prestation logistique du chantier insulaire, et c'est un service que nous proposons systématiquement sur tous les chantiers d'île, à Yeu comme à Ré ou à Oléron. Le bilan logistique d'un chantier insulaire bien préparé se mesure aussi à ce qu'on remporte." },
  { q: "Posez-vous aussi des tapis sur mesure à Yeu ?", a: "Oui, c'est une part de notre activité particulièrement pertinente sur les maisons de famille insulaires. Tapis cousus main, dimensions calées au centimètre près sur la pièce, bordure travaillée, motif coordonné au décor existant. Nous proposons des sisals naturels chinés, des laines unies en tonalités chaudes, des créations contemporaines pour les villas modernes de la côte sauvage. Le tapis sur mesure est souvent ce qui transforme un salon de maison de pêcheur rénovée, en apportant la chaleur acoustique et visuelle qui manquait, sans masquer le sol existant. Délai usine 8 à 14 semaines, à anticiper dans le planning global du chantier insulaire pour caler la livraison sur la fenêtre de pose." },
]

export default function RevetementSolIleDYeuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-ile-d-yeu#service',
        name: "Revêtement de sol à l'Île d'Yeu",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: "L'Île-d'Yeu" },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à l'Île d'Yeu",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour maisons de pêcheurs, villas de la côte sauvage, hôtels boutique et locations saisonnières premium à l'Île d'Yeu. Logistique fret depuis Fromentine entièrement gérée.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: "Revêtement de sol à l'Île d'Yeu", item: 'https://cbsols.fr/revetement-sol-ile-d-yeu' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Île d&apos;Yeu</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à l&apos;Île d&apos;Yeu,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>le charme insulaire.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à l&apos;Île d&apos;Yeu. Maisons de pêcheurs de Port-Joinville, villas de la côte sauvage, hôtels boutique et locations saisonnières premium. Logistique fret depuis Fromentine intégralement gérée par nos soins. CB Sols intervient depuis 27 ans.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=ile-d-yeu" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Logistique insulaire intégrée</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « À Yeu, le métier commence à Fromentine. On planifie les rotations fret, on traverse avec l&apos;équipe, on remporte les déchets. C&apos;est ce que CB Sols fait sur les îles depuis 27 ans. »
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
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même approche insulaire.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Yeu ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur l&apos;île, devis tout compris.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Logistique fret, hébergement, retour déchets : tout est inclus. Visite organisée sous 3 à 5 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?from=ile-d-yeu-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités insulaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers de Yeu.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir sur une île, ce n&apos;est pas reproduire un chantier de continent. Voici les six points sur lesquels nous structurons notre méthode, de la planification fret au retour des déchets.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux pour Yeu</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous traversons jusqu&apos;à l&apos;île.</em>
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
              « Une maison de pêcheur à Port-Joinville, ça se prépare en atelier comme un chantier de précision. On y arrive avec les matières prêtes, on pose vite, on repart avec les déchets. C&apos;est la promesse insulaire. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=ile-d-yeu-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite à domicile sur l&apos;île</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets vendéens.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lieux et villages</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            L&apos;Île d&apos;Yeu, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Port-Joinville à la côte sauvage.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble de l&apos;île, du port et des villages aux criques sauvages du sud, là où se concentrent les maisons de famille et les rénovations patrimoniales.
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
            Vingt minutes au téléphone pour clarifier les gammes possibles, la fenêtre d&apos;intervention et le budget tout compris.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=ile-d-yeu-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Port-Joinville.</em>
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
            Revêtement de sol à Yeu, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Pas de hotline. Conseil clair, ordre de grandeur honnête, suite donnée seulement si le projet a du sens.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre les îles du grand Ouest, de Ré à Yeu en passant par Oléron.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/ile-de-re" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Île de Ré →</Link>
            <Link href="/ile-doleron" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Île d&apos;Oléron →</Link>
            <Link href="/revetement-sol-cap-ferret" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Cap Ferret →</Link>
            <Link href="/revetement-sol-arcachon" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Arcachon →</Link>
            <Link href="/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette bateau →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet sur Yeu <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en toute sérénité.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Port-Joinville. Devis tout compris (fret, hébergement, retour déchets), finitions soignées, intervention hors saison. 27 ans de savoir-faire CB Sols au service des îles du grand Ouest.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=ile-d-yeu-final" variant="primary" size="md">Demander un devis</Button>
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
