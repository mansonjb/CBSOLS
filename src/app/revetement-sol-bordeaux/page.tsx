import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Bordeaux | Moquette, PVC, Tapis Sur Mesure | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Bordeaux. Hôtels particuliers du Triangle d'Or, échoppes bordelaises, restaurants gastronomiques. CB Sols intervient depuis 27 ans, déplacement depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-bordeaux' },
  keywords: ['revêtement sol Bordeaux', 'moquette Bordeaux', 'sol PVC Bordeaux', 'pose tapis Bordeaux', 'artisan sol Bordeaux'],
  openGraph: {
    title: "Revêtement de sol à Bordeaux, l'élégance bordelaise",
    description: "Moquette, sol PVC et tapis sur mesure à Bordeaux. Hôtels particuliers, échoppes, restaurants gastronomiques. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-bordeaux.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Hôtels particuliers du Triangle d'Or", desc: "Vous avez un hôtel particulier aux Chartrons ou cours de l'Intendance. On pose une moquette laine ou un tapis cousu main dans vos salons. On raccorde proprement sur le parquet chêne d'origine. Votre décorateur garde la main du début à la fin." },
  { title: "Échoppes bordelaises rénovées", desc: "Vous rénovez une échoppe en pierre de Bordeaux. Les parquets sont fragiles, les ABF regardent tout. On propose des solutions réversibles, sans clou ni colle agressive. Vous gardez la valeur patrimoniale du bien." },
  { title: "Restaurants gastronomiques et tables étoilées", desc: "Vous tenez une table étoilée en centre-ville. On vient poser de nuit, vous ne perdez pas un service. Moquette dense traitée anti-tache, acoustique soignée pour la conversation à table." },
  { title: "Cabinets d'affaires et professions libérales", desc: "Vous recevez vos clients à Mériadeck ou Pey-Berland. Un sol soigné pose le ton dès l'entrée. PVC acoustique dans les open spaces, moquette laine pour les bureaux de direction." },
]

const exigences = [
  { title: "On respecte les parquets anciens", desc: "Les hôtels particuliers du Triangle d'Or ont gardé leurs parquets d'origine. On pose sans clouer, sans coller agressivement. Si vous voulez tout reprendre dans dix ans, le bois en dessous sera intact. C'est ça, respecter une belle maison." },
  { title: "Le centre piéton, on sait faire", desc: "Les rues du vieux Bordeaux sont étroites, le tram passe partout, la mairie veut un créneau précis. On s'occupe des autorisations de stationnement et on porte les rouleaux à la main sur les derniers mètres. Vous n'avez rien à gérer." },
  { title: "Deux cents kilomètres, c'est rien", desc: "Bordeaux est à deux heures de notre atelier par l'A10. On y descend plusieurs fois par mois, on connaît les chantiers du coin. Vous appelez, on vient mesurer dans la semaine. Pas de surcoût caché pour le déplacement." },
  { title: "Les Bâtiments de France, on connaît", desc: "Sur les façades classées, certains travaux passent devant l'ABF. On documente l'intervention, on fournit les fiches techniques, on dialogue avec l'architecte. Le dossier avance sans accroc et vous n'avez pas à vous plonger dans la paperasse." },
  { title: "Plus de calme dans les grands volumes", desc: "Les salons d'apparat font cinq mètres sous plafond, ça résonne. Une moquette laine sur sous-couche feutre coupe la moitié de l'écho. La pièce retrouve sa douceur, les conversations passent mieux. Et on garde le caractère du lieu." },
  { title: "Un seul interlocuteur, du début à la fin", desc: "Sur un chantier de prestige, vous avez déjà l'architecte, l'ébéniste, le peintre en décor. Nous, on est un seul nom à ajouter. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée Wilton et Axminster", desc: "C'est notre matière fétiche pour les salons d'apparat. La laine se patine, se densifie avec le temps. Au toucher, c'est ferme. À l'œil, ça vieillit noblement. On la pose souvent en uni ou avec un motif géométrique discret pour ne pas heurter les boiseries. Quinze à vingt ans devant vous, sans souci." },
  { name: "Tapis sur mesure Hereke et Aubusson reconstitués", desc: "Quand vous voulez habiller un parquet ancien sans le masquer, le tapis sur mesure fait le travail. On reproduit un motif historique en laine vierge, la bordure est cousue main, les dimensions sont calées au centimètre sur votre pièce. Compter dix à seize semaines de fabrication. Le résultat parle tout seul à l'arrivée." },
  { name: "Moquettes EGE Highline et Hospitality", desc: "Le bon choix pour un restaurant gastronomique ou un hôtel du centre. La fibre est traitée ignifuge en profondeur, donc conforme à l'usage public. Le choix de couleurs est large, on peut coordonner avec votre décoration existante. Et elle encaisse les services intenses sans bouger entre deux remplacements." },
  { name: "Sols PVC Gerflor Mipolam et Tarkett iQ Granit", desc: "Pour les cabinets d'affaires et les espaces tertiaires, c'est notre standard. Aspect uni mat élégant, vraies performances acoustiques, entretien qui se fait en cinq minutes. On soude les lés à chaud, vous n'avez aucun joint visible. Quinze ans devant vous tranquillement." },
  { name: "Sols PVC effet bois pour échoppes rénovées", desc: "Parfois le parquet d'origine n'est plus récupérable. Plutôt qu'une dépose invasive, on vous propose un PVC effet bois de très belle qualité. Visuellement, ça tient la route. C'est réversible, et compatible avec une revente patrimoniale. On peut même le poser sur un chauffage au sol." },
  { name: "Profilés laiton brossé et bronze patiné Romus", desc: "Les seuils et les nez de marche, on les soigne. On coordonne le profilé avec votre quincaillerie d'origine, vos poignées en bronze, vos boiseries cirées. Sur les chantiers vraiment exigeants, on peut faire fabriquer du sur mesure. C'est ce genre de détail qui fait la différence à la livraison." },
]

const marques = [
  { name: "EGE Carpets", desc: "Le danois, c'est notre référence quand on veut un salon d'hôtel particulier qui en jette. On les pose souvent dans les restaurants étoilés, leurs gammes Highline et Hospitality tiennent le rythme." },
  { name: "Brintons", desc: "L'Axminster britannique, c'est l'aristocratie de la moquette. On peut tisser jusqu'à trente-six couleurs sur un motif. Quand vous voulez un salon d'apparat qui marque, on appelle Brintons." },
  { name: "Tarkett", desc: "Sur un cabinet d'avocats ou un open space tertiaire, on part souvent sur du Tarkett iQ Granit. L'acoustique est sérieuse, ça vieillit bien, et la finition mate fait toujours son effet." },
  { name: "Gerflor", desc: "Le français de Lyon, qu'on connaît par cœur. Le choix de coloris est énorme, leurs imitations bois sont crédibles, et on peut tout poser sur chauffage au sol. C'est notre passe-partout PVC." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum, fait avec de l'huile de lin. C'est sain, c'est solide, et ça convient parfaitement aux cabinets médicaux." },
  { name: "Tisca Tiara", desc: "Le suisse, c'est le très haut de gamme. On les sort sur les projets résidentiels d'exception, ou pour habiller une suite de palace. Quand le budget suit, le résultat est sans équivalent." },
  { name: "Hereke", desc: "Les tapis turcs tissés main, en soie ou en laine vierge fine. On les pose dans les bibliothèques d'hôtels particuliers bordelais, ou dans un salon où vous voulez quelque chose qui se transmet." },
  { name: "Object Carpet", desc: "Les allemands, pour le design contemporain. Quand vous équipez un bureau d'affaires haut de gamme et que vous voulez sortir des codes classiques, leurs gammes sont parfaites." },
]

const quartiers = [
  { nom: "Triangle d'Or", detail: "Cœur du luxe bordelais entre cours Clemenceau, cours de l'Intendance et allées de Tourny. Hôtels particuliers, boutiques de luxe, sièges sociaux." },
  { nom: "Chartrons", detail: "Quartier historique du négoce du vin, échoppes et hôtels particuliers de négociants. Patrimoine XVIIIe à préserver, scène architecture intérieure active." },
  { nom: "Saint-Pierre", detail: "Vieux Bordeaux classé UNESCO, rues piétonnes, immeubles d'apparat. Restaurants gastronomiques, boutiques haut de gamme, résidences de caractère." },
  { nom: "Saint-Michel", detail: "Quartier en pleine mutation, anciens entrepôts reconvertis et lofts, cafés design. Projets résidentiels et tertiaires créatifs." },
  { nom: "Capucins", detail: "Quartier du marché central et de la gastronomie populaire. Restaurants, bistrots de chefs, échoppes rénovées en habitat haut de gamme." },
  { nom: "Quinconces", detail: "Vaste esplanade et immeubles bourgeois XIXe environnants. Cabinets de profession libérale, sièges d'entreprise, appartements d'apparat." },
  { nom: "Pey-Berland", detail: "Quartier de la cathédrale et de l'hôtel de ville. Immeubles tertiaires haut de gamme, cabinets d'avocats, professions libérales." },
  { nom: "Caudéran", detail: "Quartier résidentiel bourgeois, villas de famille, parcs privés. Belle clientèle résidentielle attachée à la qualité d'exécution." },
  { nom: "Bordeaux Lac", detail: "Pôle tertiaire moderne, sièges sociaux, hôtels d'affaires. Sols PVC acoustiques pour open spaces et moquettes dalles pour bureaux de direction." },
  { nom: "Bègles", detail: "Commune limitrophe sud, mix de résidentiel ancien et programmes neufs. Échoppes rénovées et maisons familiales en cours de modernisation." },
  { nom: "Talence", detail: "Université et résidences étudiantes, mais aussi quartiers résidentiels haut de gamme. Maisons de famille, copropriétés bourgeoises, cabinets médicaux." },
  { nom: "Pessac", detail: "Résidences pavillonnaires, facultés et cliniques privées. Projets résidentiels haut de gamme et cabinets de profession libérale en plein essor." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet, surface estimée, calendrier souhaité, contraintes ABF éventuelles. Si le projet est piloté par un architecte d'intérieur, nous prenons contact directement avec son agence pour caler la suite." },
  { step: 'Visite à Bordeaux', desc: "Déplacement organisé sous 1 à 2 semaines. Prise de cotes au laser ou au calque selon configuration, repérage des contraintes d'accès immeuble, photos pour coordination coloris boiseries et parquets existants. Frais inclus dans le devis si le chantier est confirmé." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Bordeaux, à votre adresse ou chez l'architecte. Validation finale sous l'éclairage du lieu, jamais en salle d'expo : la lumière atlantique bordelaise transforme les coloris, surtout les laines à reflet soyeux." },
  { step: 'Confection atelier La Rochelle', desc: "3 à 10 semaines selon gamme : Axminster custom, Wilton, soie, laine vierge, PVC découpé. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale en 2 à 5 jours à Bordeaux." },
  { step: 'Pose à Bordeaux', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités ou la fenêtre de chantier. Coordination avec la conciergerie ou le syndic. Nettoyage complet à la livraison, finitions vérifiées avec vous ou avec l'architecte." },
]

const faq = [
  { q: "Vous venez vraiment à Bordeaux depuis La Rochelle ?", a: "Oui, et souvent. Bordeaux, c'est deux heures par l'A10. On y descend plusieurs fois par mois. On organise la visite de prise de cotes en début de projet, puis on revient poser à la fin. L'hébergement et le déplacement sont inclus dans le devis, pas de surprise. Sur les gros chantiers, l'équipe reste sur place jusqu'à la finition." },
  { q: "Vous travaillez dans les hôtels particuliers du Triangle d'Or ?", a: "C'est même un de nos terrains préférés. Les hôtels particuliers XVIIIe et XIXe ont gardé leurs parquets, leurs boiseries, leur âme. On y intervient avec votre architecte d'intérieur, et on pose chaque fois que possible en réversible. Si vous voulez tout reprendre dans dix ans, le parquet en dessous sera intact. C'est ça qu'on appelle respecter une belle maison." },
  { q: "Comment ça se passe avec les Bâtiments de France ?", a: "Sur un sol intérieur, l'ABF n'est presque jamais saisi directement. Mais on documente quand même tout, par habitude : fiches matière, PV feu, photos avant et après. Vous avez un dossier propre si vous revendez le bien plus tard, ou si l'ABF revient pour un autre sujet. Quand le projet touche à quelque chose de visible depuis la rue, on s'aligne avec votre architecte." },
  { q: "Combien de temps pour un tapis sur mesure ?", a: "Compter dix à seize semaines pour un Aubusson ou un Savonnerie reconstitué, selon la complexité du motif. Huit à quatorze semaines pour un Hereke laine vierge avec bordure cousue main. Pour une Axminster custom, huit à douze semaines. Ajoutez la confection atelier et la pose à Bordeaux. Un salon d'apparat complet se planifie sur quatre à six mois, parfois plus si le motif demande plusieurs épreuves." },
  { q: "Vous intervenez dans les restaurants gastronomiques bordelais ?", a: "Oui, c'est un terrain où on nous attend. L'acoustique fait toute la différence à table, et une moquette laine sur thibaude feutre coupe la moitié de la réverbération. On pose la nuit ou le jour de fermeture, vous ne perdez pas un service. On protège les cuisines, on nettoie tout à la livraison, et au matin la salle est prête." },
  { q: "Une moquette laine, ça tient combien de temps ?", a: "Quinze à vingt ans facilement dans un hôtel particulier à usage privé. La laine vieillit bien : elle se patine, se densifie au lieu de s'écraser. Sur les vestibules et les escaliers, on choisit plutôt une laine tissée serrée avec un motif discret, ça pardonne mieux les marques de passage. Un nettoyage pro une fois par an suffit à garder l'aspect du premier jour." },
  { q: "Vous travaillez avec les architectes d'intérieur bordelais ?", a: "Régulièrement, oui. La scène architecturale est active autour des Bassins à flot, de Darwin, des Chartrons. On intervient en sous-traitance de leur prescription, l'architecte reste l'interlocuteur principal pour les choix matières. On envoie les échantillons à son agence pour validation sous l'éclairage du projet. Et on fournit tous les documents techniques pour son dossier de chantier." },
]

export default function RevetementSolBordeauxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-bordeaux#service',
        name: "Revêtement de sol à Bordeaux",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Bordeaux' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Bordeaux et en Gironde",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour hôtels particuliers, restaurants gastronomiques, cabinets d'affaires et résidences de caractère à Bordeaux.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Bordeaux', item: 'https://cbsols.fr/revetement-sol-bordeaux' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Bordeaux</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Bordeaux,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>l&apos;élégance bordelaise.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Bordeaux. Hôtels particuliers du Triangle d&apos;Or, échoppes bordelaises rénovées, restaurants gastronomiques, cabinets d&apos;affaires. Atelier basé à La Rochelle, déplacement à Bordeaux régulièrement organisé.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=bordeaux" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Bordeaux, c&apos;est une ville de patrimoine accessible depuis La Rochelle en deux heures. Respecter un parquet ancien d&apos;échoppe ou habiller un salon des Chartrons, c&apos;est exactement le métier que CB Sols fait depuis 27 ans. »
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Bordeaux ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec votre architecte d&apos;intérieur, votre décorateur ou directement avec vous. Visite organisée sous 1 à 2 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=bordeaux-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Bordeaux */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Bordeaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers bordelais.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Bordeaux, ce n&apos;est pas reproduire un chantier standard. Voici les six points sur lesquels nous structurons notre méthode dès la première visite, pour respecter le patrimoine et tenir le calendrier.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Bordeaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons en Gironde.</em>
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
              « Un parquet d&apos;échoppe bordelaise du XIXe, ça ne se touche pas comme un sol neuf. On pose une moquette qui se dépose proprement, qui ne marque pas le bois, qui respecte ce que la maison a déjà connu. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=bordeaux-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite à domicile à Bordeaux</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets bordelais.</em>
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
            Bordeaux et sa métropole, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;à Pessac et Talence.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble de Bordeaux Métropole ainsi que sur les communes limitrophes en première couronne, là où se concentrent les projets résidentiels et tertiaires haut de gamme.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier bordelais.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=bordeaux-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Bordeaux.</em>
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
            Revêtement de sol à Bordeaux, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Notre savoir-faire couvre la Gironde et au-delà, sur tous les terrains d&apos;exception.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/revetement-sol-cap-ferret" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Cap Ferret →</Link>
            <Link href="/revetement-sol-saint-emilion" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Saint-Émilion →</Link>
            <Link href="/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette château →</Link>
            <Link href="/sols-monaco" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sols Monaco →</Link>
            <Link href="/ile-de-re" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Île de Ré →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet bordelais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Bordeaux. Devis détaillé, finitions premium, respect du patrimoine. 27 ans de savoir-faire au service des projets d&apos;exception en Gironde.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=bordeaux-final" variant="primary" size="md">Demander un devis</Button>
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
