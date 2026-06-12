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
  { title: "Villas familiales pieds dans le sable", desc: "Vous passez l'été en famille face au Bassin. Le sable rentre, on l'assume. PVC effet bois pour les pièces de vie, moquette laine ou tapis sur mesure côté chambres. On pose hors juillet-août pour ne pas couper vos vacances." },
  { title: "Cabanes ostréicoles rénovées", desc: "Vous avez racheté une maison ostréicole à L'Herbe ou au Canon. Le plancher travaille avec le sel et l'humidité. On choisit une pose réversible qui ne brutalise rien. Le caractère du bâti reste intact." },
  { title: "Résidences secondaires haut de gamme", desc: "Votre maison de famille a un designer attitré, souvent à Paris. On échange par photos et échantillons. Moquette laine dans les chambres, PVC durable côté zones humides, tapis dans les pièces de vie." },
  { title: "Hôtels boutiques face Bassin", desc: "Vous tenez un petit hôtel ou des chambres d'hôtes avec vue. Tout doit être conforme ERP et tenir face au sel. On choisit des revêtements ignifugés, dans une palette douce qui colle au lieu." },
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
  { name: "Bolon tissé vinyle haut de gamme", desc: "Notre matière préférée pour le bord du Bassin. Le sable s'éponge à l'eau, le sel ne l'abîme pas. Les coloris naturels (lin, sable, écru) s'inscrivent parfaitement dans une villa du Cap. On la pose dans les entrées et les couloirs. Quinze à vingt ans en usage saisonnier, sans souci d'entretien." },
  { name: "Sols PVC Gerflor Texline et Tarkett iQ Granit", desc: "Pour les salles de bains et les buanderies, on part sur du PVC professionnel. Aspect mat ou effet bois flotté, on soude les lés à chaud. Du coup l'eau ne passe nulle part, ni dans les joints ni sous les plinthes. C'est exactement ce qu'il faut quand le climat est humide toute l'année." },
  { name: "Moquette polyamide premium EGE et Forbo Flotex", desc: "Dans les chambres et les bibliothèques, on cherche le confort sous les pieds. Le polyamide haute densité est doux mais résistant. Les coloris doux s'accordent avec l'ambiance Bassin. Le Flotex, lui, se lave carrément à grande eau, ce qui est précieux quand les enfants et les invités défilent tout l'été." },
  { name: "Tapis sur mesure laine vierge et fibres naturelles", desc: "Quand vous voulez habiller un salon ouvert sur le Bassin sans alourdir le décor, le tapis sur mesure fait le travail. Sisal, jonc de mer ou laine vierge bouclée selon votre ambiance. Bordure cousue main, dimensions au centimètre près. Six à dix semaines de fabrication. On pose sans coller, c'est totalement réversible." },
  { name: "Sols Vorwerk et Object Carpet pour les suites", desc: "Pour les suites parentales et les chambres d'amis premium, on monte d'un cran. Le toucher est exceptionnel, on dirait qu'on marche sur une thibaude feutre. Si vous louez votre villa en saison, on prend une gamme avec traitement ignifuge. Et entre les étages, l'isolation phonique est sérieuse." },
  { name: "Profilés laiton brossé et inox marine Romus", desc: "Pour les seuils et les nez de marche, on choisit la matière selon la zone. Sur les coursives exposées au sel, on part sur de l'inox marine 316L, le même que sur les bateaux. À l'intérieur, le laiton brossé patiné s'accorde avec les ferrures bronze des cabanes rénovées. Le détail compte." },
]

const marques = [
  { name: "Gerflor", desc: "Le français de Lyon, qu'on connaît par cœur. Leur Texline est parfaite pour les zones humides et les espaces saisonniers. Ça encaisse le sable et l'humidité année après année." },
  { name: "Forbo Flotex", desc: "Le sol textile qui se lave à grande eau, ce qui change la vie en villa familiale. Quand les invités enchaînent les week-ends, vous passez l'aspirateur, et au pire vous lavez vraiment." },
  { name: "Tarkett iQ Granit", desc: "Le PVC professionnel par excellence. Très résistant, très mat. On le soude à chaud pour une finition continue, sans joint visible. C'est notre standard sur les zones techniques." },
  { name: "Polyflor", desc: "Le britannique du PVC. Leurs gammes tiennent le sable et résistent aux UV, donc elles encaissent les baies vitrées plein sud ouvertes sur le Bassin." },
  { name: "EGE Carpets", desc: "Le danois, notre référence pour les hôtels boutiques et les suites de villas haut de gamme. Leurs gammes Highline et Hospitality posent un cadre immédiatement." },
  { name: "Object Carpet", desc: "Les allemands, pour les chambres parentales et les bureaux qui veulent sortir des codes classiques. Design contemporain, finitions parfaites." },
  { name: "Bolon", desc: "Le suédois du tissé vinyle. C'est notre référence pour le bord de mer. Résistance, esthétique, longévité, tout y est. On le retrouve sur la moitié des villas qu'on équipe au Cap." },
  { name: "Vorwerk", desc: "L'allemand de la moquette tuftée premium. Choix de coloris doux et naturels, toucher exceptionnel. Parfait pour une pièce de vie qu'on veut transformer en cocon." },
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
  { q: "Vous venez vraiment au Cap Ferret depuis La Rochelle ?", a: "Oui, sans souci. Le Cap est à 2h30 de notre atelier par l'autoroute. On gère cette distance depuis vingt-sept ans avec les chantiers de Ré et d'Oléron, c'est exactement la même logique. On vient mesurer une première fois, puis on revient poser. L'hébergement est inclus dans le devis. On évite juillet et août, on cale en mai-juin avant l'ouverture ou en septembre-octobre après la fermeture." },
  { q: "Quel revêtement choisir pour une villa pieds dans le sable ?", a: "Le sable s'invite partout, c'est l'ennemi numéro un d'un sol au Cap. Dans les entrées et les couloirs, on part sur du Bolon tissé vinyle ou du Gerflor Texline. Ça se nettoie à l'eau, ça vieillit bien face au sel. Dans les chambres et les bibliothèques, où vous voulez du moelleux sous les pieds, on remet du polyamide haute densité ou de la laine traitée. On cale l'arbitrage avec vous à la visite." },
  { q: "Quels matériaux résistent vraiment à l'humidité du Bassin ?", a: "L'humidité saline pose deux problèmes : elle attaque les fibres naturelles, et elle abîme les colles standard. On répond sur trois fronts. D'abord, on choisit des fibres synthétiques sur les zones exposées (polyamide haute densité, polypropylène marine, Bolon). Ensuite, on utilise des colles compatibles bord de mer. Et pour les villas fermées six mois par an, on évite les sous-couches qui stockent l'humidité." },
  { q: "Vous travaillez sur les cabanes ostréicoles rénovées ?", a: "Oui, et on adore ça. Les cabanes de L'Herbe, du Canon ou de Piraillan ont une âme à elles, faite de sel, de bois travaillé, de charpentes apparentes. On y intervient en mode délicat : pose libre, fibres naturelles, tapis sur mesure plutôt que moquette collée. L'idée, c'est que le sol disparaisse au profit du lieu. Pas qu'il vienne lui faire concurrence." },
  { q: "Pourquoi vous évitez juillet et août ?", a: "Parce que c'est l'enfer logistique. La circulation est saturée, les livraisons coincent, les familles sont sur place ou la villa est louée au tarif fort. On préfère caler en mai-juin avant l'ouverture, ou en septembre-octobre après la fermeture. À ces périodes, l'accès est fluide, les artisans locaux sont dispo, et votre villa est livrée propre pour la saison qui arrive." },
  { q: "Combien de temps tient un sol en bord de Bassin ?", a: "Quinze à vingt ans, bien choisi et bien posé. Un Bolon dans une entrée de villa familiale tient vingt ans en usage saisonnier. Un PVC Gerflor en salle de bains tient quinze ans tranquille. Une moquette polyamide premium dans une chambre, douze à quinze ans selon l'usage. Notre savoir-faire vient de vingt-sept ans de chantiers atlantiques, on connaît les pièges du bord de mer." },
  { q: "Vous travaillez avec les décorateurs et architectes du Bassin ?", a: "Régulièrement. La clientèle du Cap travaille souvent avec des décorateurs parisiens ou bordelais. On intervient en sous-traitance de leur prescription, l'architecte reste l'interlocuteur principal. On envoie les échantillons à son agence pour validation sous son éclairage de référence. Et on fournit toute la documentation technique pour son dossier de chantier." },
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
