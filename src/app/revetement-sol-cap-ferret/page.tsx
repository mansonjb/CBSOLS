import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Cap Ferret | Villas Bassin d'Arcachon | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure pour villas au Cap Ferret. Résidences secondaires, terrasses bois, pieds dans le sable. Artisan haut de gamme CB Sols, 27 ans d'expérience.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-cap-ferret' },
  keywords: ['revêtement sol Cap Ferret', 'moquette villa Cap Ferret', 'sol bord de mer Bassin Arcachon', 'pose tapis cabane Cap Ferret', 'artisan sol Arcachon'],
  openGraph: {
    title: "Revêtement de sol au Cap Ferret, l'art du bord de mer",
    description: "Moquette, sol PVC et tapis sur mesure pour villas au Cap Ferret et sur le Bassin d'Arcachon. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-cap-ferret.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Villas familiales pieds dans le sable", desc: "Les Quatre-Vingts-Quarante-Quatre Hectares, la pointe, Le Mimbeau. Salons ouverts sur le Bassin, chambres parentales, suites d'amis, espaces enfants. Moquette laine ou polyamide haut de gamme, sols PVC effet bois résistants au sable, tapis sur mesure dans les pièces de vie. Pose calée hors saison estivale pour respecter la vie de famille." },
  { title: "Cabanes tchanquées et maisons ostréicoles rénovées", desc: "Au village du Cap Ferret, à L'Herbe, au Canon, à Piraillan. Le bâti traditionnel ostréicole, parfois centenaire, demande un traitement particulier : planchers bois travaillés par le sel, humidité ambiante saline, charpentes apparentes. Solutions de revêtement réversibles, respectueuses du caractère ostréicole du bien." },
  { title: "Résidences secondaires haut de gamme", desc: "Villas d'architecte, propriétés patrimoniales familiales transmises de génération en génération, programmes neufs haut de gamme. Tapis sur mesure, moquette laine vierge dans les chambres parentales, sol PVC durable dans les zones humides. Coordination avec le décorateur de famille ou le designer parisien souvent associé au projet." },
  { title: "Hôtels boutiques et chambres d'hôtes face Bassin", desc: "L'hôtellerie boutique du Bassin se développe avec exigence. Suites avec vue, salons de réception, espaces spa et bien-être. Revêtements ignifugés conformes ERP, esthétique douce coordonnée à la palette atlantique du lieu, durabilité testée face au sable et à l'humidité saline." },
]

const exigences = [
  { title: "Le sable, on en tient compte", desc: "Au Cap Ferret, le sable s'invite partout : dans les chaussons, sous les meubles, dans les ourlets. Un revêtement standard s'use deux fois plus vite. On choisit des fibres dures qui supportent le grain de sable au quotidien. Vous gardez un sol propre plus longtemps." },
  { title: "Sel et soleil ne nous font pas peur", desc: "L'air du Bassin est chargé de sel, le soleil tape fort sur les baies vitrées. On retient des fibres traitées anti-UV et des colles compatibles bord de mer. Le sol garde sa couleur et sa tenue, saison après saison. Pas de mauvaise surprise au bout de deux étés." },
  { title: "Maison fermée six mois ? On gère", desc: "Beaucoup de villas restent closes hors saison. La chaleur monte, l'humidité varie, le sol travaille. On évite les colles trop lentes et les matières fragiles aux écarts. Vous ouvrez la maison en juin, tout est en place comme le jour de la pose." },
  { title: "On vient hors juillet-août", desc: "L'été au Cap Ferret, c'est plein, c'est bouché, c'est la vie de famille. On cale les chantiers entre septembre et juin. La maison est calme, les artisans aussi. Vous récupérez votre villa prête pour la saison, sans avoir vu un seul rouleau de moquette." },
  { title: "Ruelles étroites, on s'adapte", desc: "À L'Herbe, au Canon, à Piraillan, le camion ne passe pas jusqu'à la villa. On porte à la main, sur diables larges, en protégeant les terrasses bois et les cabanes voisines. Le voisinage reste tranquille, votre terrasse aussi. On laisse les lieux comme on les a trouvés." },
  { title: "Une seule personne, du devis à la facture", desc: "Sur le Bassin, vous jonglez déjà avec le gardien, le jardinier, le piscinier. Nous, on est un seul nom à votre carnet. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps et de la sérénité." },
]

const materiaux = [
  { name: "Bolon tissé vinyle haut de gamme", desc: "Tissage vinyle suédois, résistance exceptionnelle au sable et à l'humidité, palette de coloris naturels parfaitement adaptée à l'esthétique du Bassin. Idéal pour les zones de transition (entrées, couloirs, espaces ouverts sur terrasses). Durabilité 15 à 20 ans en usage saisonnier, entretien à l'eau simple, vieillissement noble." },
  { name: "Sols PVC Gerflor Texline et Tarkett iQ Granit", desc: "Pour les zones humides (salles de bains, buanderies, espaces spa) et les espaces de circulation. Aspect uni mat ou effet bois flotté, hautes performances acoustiques, entretien simple à l'eau et au savon. Pose en lés soudés à chaud pour une finition continue, étanche, parfaitement adaptée au climat marin." },
  { name: "Moquette polyamide premium EGE et Forbo Flotex", desc: "Pour les chambres et bibliothèques, là où le confort tactile prime. Polyamide haute densité traité anti-tache, palette douce coordonnée aux ambiances du Bassin (lin, sable, écru, gris bois flotté). Le Flotex est lavable à grande eau, atout précieux dans une villa familiale avec enfants et invités." },
  { name: "Tapis sur mesure laine vierge et fibres naturelles", desc: "Sisal, jonc de mer, laine vierge bouclée. Pour habiller un salon ouvert sur le Bassin sans alourdir le décor. Dimensions calées sur la pièce, bordure cousue main, possibilité de motifs marins discrets ou unis sable. Délai 6 à 10 semaines selon matière. Pose au sol existant, sans collage, totalement réversible." },
  { name: "Sols Vorwerk et Object Carpet pour suites", desc: "Pour les chambres parentales et suites d'amis premium. Toucher exceptionnel, traitement ignifuge si villa louée en saison, palette nuancée idéale pour des ambiances cocon. Pose sur thibaude feutre pour confort de marche et isolation phonique entre étages." },
  { name: "Profilés laiton brossé et inox marine Romus", desc: "Pour les seuils, raccords entre essences et nez de marche. Choix inox marine (316L) pour les zones très exposées au sel, laiton brossé patiné pour les espaces intérieurs. Coordination avec les ferrures bronze des cabanes ostréicoles rénovées et la quincaillerie marine des villas contemporaines." },
]

const marques = [
  { name: "Gerflor", desc: "Sol PVC Texline et Mipolam, idéal zones humides et espaces saisonniers. Durabilité éprouvée face au sable et à l'humidité." },
  { name: "Forbo Flotex", desc: "Sol textile lavable à grande eau, performance acoustique haut de gamme. Atout précieux en villa familiale du Bassin." },
  { name: "Tarkett iQ Granit", desc: "PVC professionnel mat de très haute durabilité. Posé en lés soudés à chaud pour une finition étanche et sans joint apparent." },
  { name: "Polyflor", desc: "Spécialiste britannique du sol PVC. Gammes résistantes au sable et compatibles UV pour les zones ouvertes sur l'extérieur." },
  { name: "EGE Carpets", desc: "Manufacture danoise, gammes Highline et Hospitality. Pour les hôtels boutiques et les suites de villas haut de gamme." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design. Pour les chambres parentales et bureaux de villa contemporaine." },
  { name: "Bolon", desc: "Tissé vinyle suédois haut de gamme. La référence pour le bord de mer : résistance, esthétique, longévité." },
  { name: "Vorwerk", desc: "Moquette tuftée premium, large palette de coloris doux et naturels. Toucher exceptionnel pour les pièces de vie cocon." },
]

const quartiers = [
  { nom: "Cap Ferret village", detail: "Cœur historique du Cap, près du phare et de la jetée Bélisaire. Villas familiales, hôtels boutiques, restaurants face Bassin." },
  { nom: "L'Herbe", detail: "Village ostréicole emblématique, cabanes serrées, chapelle algérienne. Cabanes rénovées en résidences haut de gamme." },
  { nom: "Le Canon", detail: "Village calme entre L'Herbe et Piraillan. Cabanes ostréicoles et villas familiales transmises sur plusieurs générations." },
  { nom: "Piraillan", detail: "Village paisible, port ostréicole, ambiance authentique. Maisons familiales et résidences secondaires haut de gamme." },
  { nom: "Grand Piquey", detail: "Quartier résidentiel familial, plages calmes côté Bassin. Villas patrimoniales et propriétés transmises de génération en génération." },
  { nom: "Petit Piquey", detail: "Quartier confidentiel, villas de famille discrètes, accès direct au Bassin. Clientèle attachée à l'authenticité du lieu." },
  { nom: "Claouey", detail: "Entrée nord de la presqu'île, port ostréicole et résidences secondaires. Mix villas anciennes et programmes contemporains haut de gamme." },
  { nom: "Lège", detail: "Commune d'accès à la presqu'île, plus continentale, mais déjà dans l'esprit Bassin. Villas familiales et résidences secondaires." },
  { nom: "Arès", detail: "Côté est du Bassin, ambiance familiale et patrimoniale. Villas anciennes, propriétés en bord d'eau, hôtels boutiques." },
  { nom: "Andernos-les-Bains", detail: "Station familiale historique du Bassin. Villas Belle Époque, résidences de famille, hôtels patrimoniaux." },
  { nom: "Cassy", detail: "Hameau résidentiel paisible côté Lanton. Villas familiales discrètes, propriétés en lisière de forêt et de Bassin." },
  { nom: "Taussat", detail: "Village confidentiel entre Cassy et Audenge. Villas anciennes, accès direct Bassin, ambiance préservée et résidentielle." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de bien (villa, cabane rénovée, hôtel), surface estimée, calendrier souhaité, période d'usage (saison, hors saison, location). Si le projet est piloté par un architecte ou un décorateur, nous prenons contact directement." },
  { step: 'Visite au Cap Ferret', desc: "Déplacement organisé sous 2 à 3 semaines, idéalement hors juillet-août. Prise de cotes au laser, repérage des contraintes d'accès (ruelles, sable, terrasses bois), photos des terrasses extérieures et des essences existantes pour coordination coloris. Frais inclus dans le devis si chantier confirmé." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement au Cap Ferret, à votre adresse ou chez l'architecte. Validation finale sous l'éclairage du lieu, jamais en salle d'expo : la lumière du Bassin transforme les coloris, surtout les laines et les fibres naturelles à reflet doux." },
  { step: 'Confection atelier La Rochelle', desc: "3 à 10 semaines selon gamme : Bolon, Wilton, polyamide, PVC découpé, tapis sur mesure. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale en 2 à 5 jours au Cap Ferret." },
  { step: 'Pose au Cap Ferret', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités et l'ouverture/fermeture de saison. Coordination avec votre gardien de villa ou votre conciergerie locale. Nettoyage complet, finitions vérifiées avec vous ou votre décorateur." },
]

const faq = [
  { q: "Comment se passe une intervention au Cap Ferret depuis La Rochelle ?", a: "Notre atelier est à Villedoux, près de La Rochelle, à environ 2h30 du Cap Ferret par l'autoroute. C'est une distance que nous gérons depuis longtemps avec les chantiers de l'île de Ré et d'Oléron, où les contraintes d'accès et la saisonnalité sont comparables. Pour le Cap Ferret, nous organisons les déplacements en deux temps : visite de prise de cotes, puis pose. L'hébergement est inclus dans le devis. Nous calons systématiquement nos interventions hors juillet-août, idéalement en mai-juin avant ouverture saison ou en septembre-octobre après fermeture, pour respecter la vie de famille et les contraintes logistiques de la presqu'île." },
  { q: "Quel revêtement choisir pour une villa pieds dans le sable ?", a: "Le sable est l'ennemi numéro un d'un revêtement de sol au Cap Ferret. Il s'invite partout, dans les fibres, sous les semelles, dans les joints. Pour les zones de circulation (entrées, couloirs, espaces ouverts sur terrasse), nous recommandons systématiquement du tissé vinyle Bolon ou du sol PVC effet bois Gerflor Texline. Ces matières résistent au sable, se nettoient à l'eau simple, vieillissent bien face au sel. Pour les chambres et les bibliothèques, où le confort tactile prime, on peut introduire de la moquette polyamide haute densité ou de la laine vierge traitée, en équilibre avec la résistance attendue. Le tout est une question d'arbitrage entre confort et durabilité, qui se cale lors de la visite." },
  { q: "Quels matériaux résistent vraiment à l'humidité saline du Bassin ?", a: "L'humidité saline pose deux problèmes : elle attaque les fibres naturelles non traitées, et elle altère les colles d'usage standard. Notre réponse est triple. Premièrement, nous privilégions les fibres synthétiques pour les zones exposées : polyamide haute densité anti-UV, polypropylène marine, tissé vinyle Bolon. Deuxièmement, nous utilisons des colles compatibles bord de mer, qui supportent les variations d'humidité sans perte de tenue. Troisièmement, pour les villas fermées plusieurs mois par an, nous proscrivons les sous-couches absorbantes au profit de sous-couches techniques fermées qui ne stockent pas l'humidité ambiante." },
  { q: "Travaillez-vous sur les cabanes tchanquées ou les maisons ostréicoles rénovées ?", a: "Oui, c'est un terrain où nous prenons un plaisir particulier. Les cabanes ostréicoles rénovées de L'Herbe, du Canon ou de Piraillan ont une âme très spécifique : planchers bois travaillés par le sel et l'eau, charpentes apparentes, ambiance authentique à préserver. Valentin Prévoteau privilégie sur ces biens des solutions très peu invasives : pose libre, fibres naturelles compatibles humidité, tapis sur mesure plutôt que moquette collée. L'idée est que le revêtement disparaisse au profit de l'âme du lieu, sans la dénaturer." },
  { q: "Pourquoi conseillez-vous d'intervenir hors juillet-août ?", a: "Le Cap Ferret en juillet-août, c'est une réalité spécifique : circulation saturée, livraisons impossibles, vie de famille concentrée, location éventuelle au tarif maximal. Pour toutes ces raisons, nous calons systématiquement nos interventions hors saison estivale. Le créneau idéal est mai-juin avant l'ouverture, ou septembre-octobre après la fermeture. À ces périodes, l'accès est fluide, les artisans locaux disponibles pour la coordination, et la villa peut être livrée propre pour la saison suivante. Cette planification protège le calendrier de tout le monde et garantit une exécution sereine." },
  { q: "Quelle durabilité attendre d'un revêtement en bord de Bassin ?", a: "Bien choisi et bien posé, un revêtement bord de Bassin dure 15 à 20 ans sans difficulté. Un tissé vinyle Bolon dans une entrée de villa familiale tient 20 ans en usage saisonnier intense. Un sol PVC Gerflor Texline en salle de bains tient 15 ans facilement. Une moquette polyamide premium dans une chambre parentale, 12 à 15 ans selon l'usage et l'entretien. Pour atteindre ces durées, deux conditions : choisir une matière adaptée au climat marin, et faire poser proprement par un artisan qui connaît les contraintes du bord de mer. Notre savoir-faire vient justement de 27 ans de chantiers atlantiques, d'Oléron à l'île de Ré, transposable directement sur le Bassin." },
  { q: "Travaillez-vous avec les décorateurs et architectes du Bassin ?", a: "Oui, régulièrement. La clientèle du Cap Ferret travaille souvent avec des décorateurs parisiens ou des architectes d'intérieur basés à Bordeaux ou Paris. Nous intervenons en sous-traitance de leur prescription, avec l'architecte ou le décorateur comme interlocuteur principal pour les choix matières et le calepinage. Les échantillons sont envoyés directement à son agence pour validation sous l'éclairage de référence du projet, qui peut être différent de celui de la villa. Nous fournissons les fiches techniques, les PV feu et la traçabilité matière nécessaires aux dossiers de chantier premium. Cette collaboration nous permet d'élargir le champ des matières proposées au-delà du catalogue habituel." },
]

export default function RevetementSolCapFerretPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-cap-ferret#service',
        name: "Revêtement de sol au Cap Ferret et Bassin d'Arcachon",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Cap Ferret' },
          { '@type': 'City', name: 'Lège-Cap-Ferret' },
          { '@type': 'City', name: 'Arès' },
          { '@type': 'City', name: 'Andernos-les-Bains' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure pour villas du Cap Ferret et du Bassin d'Arcachon",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour villas familiales, cabanes ostréicoles rénovées, résidences secondaires et hôtels boutiques du Cap Ferret et du Bassin d'Arcachon.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol au Cap Ferret', item: 'https://cbsols.fr/revetement-sol-cap-ferret' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Cap Ferret</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol au Cap Ferret,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>l&apos;art du bord de mer.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure pour villas du Cap Ferret et du Bassin d&apos;Arcachon. Résidences familiales pieds dans le sable, cabanes ostréicoles rénovées, hôtels boutiques face Bassin. Atelier La Rochelle, intervention saisonnière organisée.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=cap-ferret" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Le sable s&apos;invite partout au Cap Ferret. Choisir la bonne fibre, c&apos;est ce qui fait qu&apos;un sol tient dix ans ou vingt ans. Depuis 27 ans, CB Sols travaille au bord de l&apos;Atlantique, et le Bassin parle la même langue. »
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
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même intelligence du Bassin.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet sur le Bassin ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite hors saison, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec votre architecte d&apos;intérieur, votre décorateur de famille ou avec vous. Visite organisée hors juillet-août, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=cap-ferret-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Cap Ferret</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six contraintes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres au bord du Bassin.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir au Cap Ferret n&apos;est pas un chantier ordinaire. Le climat marin, la saisonnalité, le sable et l&apos;accès villas dictent une méthode spécifique, que nous appliquons systématiquement.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et savoir-faire pour le Cap Ferret</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons sur le Bassin.</em>
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
              « Une villa du Cap, ça vit en saison et ça dort le reste de l&apos;année. Le sol doit accepter ce cycle, supporter le sel, encaisser le sable. C&apos;est un métier de patience et de bons choix dès le départ. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=cap-ferret-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite hors saison</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>compatibles bord de mer.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Villages et communes où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Toute la presqu&apos;île, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>et le Bassin nord.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble de la presqu&apos;île du Cap Ferret et du Bassin nord, là où se concentrent les villas familiales et les résidences secondaires haut de gamme du Bassin.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste (hors juillet-août) et un ordre de grandeur budgétaire pour votre villa du Bassin.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=cap-ferret-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux au Cap Ferret.</em>
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
            Revêtement de sol au Cap Ferret, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Pas de hotline. Conseil clair, ordre de grandeur honnête, calendrier réaliste qui tient compte de la saisonnalité du Bassin.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre le Bassin, la Gironde et au-delà, sur tous les terrains atlantiques.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/revetement-sol-bordeaux" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Bordeaux →</Link>
            <Link href="/revetement-sol-saint-emilion" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Saint-Émilion →</Link>
            <Link href="/ile-de-re" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Île de Ré →</Link>
            <Link href="/ile-doleron" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Île d&apos;Oléron →</Link>
            <Link href="/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette château →</Link>
            <Link href="/sols-monaco" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sols Monaco →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre villa du Cap <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en mains expertes.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite hors saison au Cap Ferret. Devis détaillé, matières adaptées au bord de mer, finitions soignées. 27 ans de savoir-faire atlantique au service du Bassin d&apos;Arcachon.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=cap-ferret-final" variant="primary" size="md">Demander un devis</Button>
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
