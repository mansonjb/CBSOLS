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
  { title: "Maisons de pêcheurs rénovées Port-Joinville", desc: "Vous avez une maison en pierre blanche au port. Les pièces sont petites, le parquet n'est jamais d'aplomb. On ragrée puis on pose moquette bouclée, sisal scellé ou PVC clair selon la pièce. L'esprit maison de famille est gardé." },
  { title: "Villas familiales côte sauvage", desc: "Votre villa donne sur la lande, entre Pointe du But et Anse des Vieilles. Vous vivez pieds nus tout l'été. Sols clairs, sisal naturel, PVC effet bois, tapis chiné au salon. Tout est choisi pour le sable et l'humidité." },
  { title: "Hôtels boutique et chambres d'hôtes", desc: "Vous tenez un petit hôtel installé dans une ancienne maison de capitaine. On vient en hiver, quand l'activité ralentit. Moquette densité maîtrisée, traitement anti-tache, palette accordée à la pierre blanche." },
  { title: "Locations saisonnières premium", desc: "Votre maison part en location toutes les semaines l'été. Le sol doit tenir la rotation et rester propre. PVC haute densité effet bois côté pièces de vie, moquette robuste dans les chambres, seuils renforcés pour les valises." },
]

const exigences = [
  { title: "Le bateau, c'est notre affaire", desc: "Quarante minutes de traversée depuis Fromentine, fret et passagers. On réserve les rotations, on charge à l'heure, on récupère le véhicule à Port-Joinville. Vous, vous ne touchez à rien. Les matières arrivent quand il faut, posées la semaine suivante." },
  { title: "Hors saison, c'est l'idéal", desc: "L'île est saturée d'avril à septembre : bateaux pleins, hébergement complet. On vient entre octobre et mars, avec un pic en février-mars. On planifie quatre à six mois en avance. La maison est calme, l'équipe travaille bien, vous récupérez tout pour l'été." },
  { title: "Petites pièces, on prépare au cordeau", desc: "Les maisons traditionnelles ont des portes étroites, des plafonds bas, des escaliers serrés. On fait les découpes en atelier avant d'embarquer. Les rouleaux passent au centimètre près. On gagne des heures sur place et on évite la mauvaise surprise d'une moquette qui ne passe pas." },
  { title: "Vent, sel et humidité, on connaît", desc: "L'air de Yeu charge en sel, le vent d'ouest cogne. On retient des laines traitées, des PVC haute densité, des colles compatibles bord de mer. Vos sols restent stables hiver comme été. Pas de joints qui se soulèvent au bout d'une saison." },
  { title: "On respecte l'âme des maisons en pierre", desc: "Les maisons blanches de l'île ont une cohérence simple : pierre, chaux, bois flotté. On propose des matières qui s'accordent à cette palette : sols clairs, fibres naturelles, unis doux. Vous gardez l'esprit du lieu, sans rigidité, avec vos goûts à vous." },
  { title: "On repart avec nos déchets", desc: "Sur une île, on ne laisse pas une benne en partant. Chutes, emballages, anciens revêtements : tout reprend le bateau avec nous. Vous n'avez rien à organiser après notre départ. La maison est propre, c'est tout." },
]

const materiaux = [
  { name: "Sisal scellé et fibres naturelles", desc: "Notre matière phare pour les maisons de famille de l'île. Sable, écru ou taupe doux, le sisal s'accorde parfaitement avec l'esprit insulaire et la pierre blanche locale. Une fois scellé, il encaisse le sable et l'humidité sans broncher. On le pose collé sur sous-couche feutre. Dix à quinze ans devant vous en résidence secondaire." },
  { name: "Sols PVC effet bois clair", desc: "Pour les pièces de vie, les cuisines et les vérandas ouvertes, le PVC effet bois fait merveille. Imitation chêne blanchi, pin lavé, bois flotté : on s'y trompe. L'entretien se fait en cinq minutes, et le sable rapporté de la plage glisse. Idéal pour une location saisonnière où le sol prend cher tout l'été." },
  { name: "Moquette laine bouclée pour chambres", desc: "Dans les chambres parentales et les chambres d'enfants, la laine bouclée change la vie. Le matin pieds nus, la chaleur est là. Le sable se retire à l'aspirateur, la durabilité est bonne, l'entretien simple. Choix large de coloris pour s'accorder aux boiseries et aux enduits chaulés de votre maison." },
  { name: "Tissés vinyle Bolon pour entrées et sas", desc: "Sur les entrées de maison face plage, le Bolon est imbattable. Le sable, l'humidité du vent d'ouest, les pieds mouillés, il encaisse tout. On le lave à grande eau, le matin il est sec. Esthétique tissée contemporaine qui s'accorde avec les rénovations chic-marines. C'est un investissement qui tient." },
  { name: "Tapis sur mesure et tapis chinés", desc: "Pour habiller un salon de maison de famille sans tout refaire, le tapis sur mesure est parfait. Dimensions à la pièce, bordure travaillée, motif accordé à votre décor. Compter huit à quatorze semaines de fabrication. C'est la rénovation légère idéale avant une location estivale, sans gros travaux." },
]

const marques = [
  { name: "Bolon", desc: "Le suédois du tissé vinyle, notre référence pour les intérieurs contemporains bord de mer. Lavable à grande eau, robuste, palette dense. On en pose sur la moitié des chantiers insulaires." },
  { name: "Gerflor", desc: "Le français de Lyon, qu'on connaît par cœur. Leurs imitations bois et minéral sont parfaites pour rénover une maison de pêcheur ou équiper une location saisonnière." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Idéal pour les villas familiales et les maisons de caractère." },
  { name: "EGE Carpets", desc: "Le danois, notre référence pour les hôtels boutiques et les maisons d'hôtes de prestige de l'île. Leur gamme Hospitality pose un cadre dès l'entrée." },
  { name: "Brintons", desc: "L'Axminster britannique, l'aristocratie de la moquette. On l'appelle pour les rénovations patrimoniales des grandes maisons de notables de Port-Joinville." },
  { name: "Object Carpet", desc: "Les allemands, pour les rénovations d'auteur et les locations premium. Design contemporain affirmé, finitions parfaites. Idéal quand on veut sortir des codes balnéaires classiques." },
  { name: "Tisca Tiara", desc: "Le suisse, c'est le très haut de gamme. On les sort pour les villas familiales d'exception de la côte sauvage. Quand le budget suit, le résultat est sans équivalent." },
  { name: "Romus", desc: "Notre fournisseur de profilés et nez de marche. Indispensable pour les escaliers étroits des maisons insulaires et pour habiller proprement les seuils sablés." },
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
  { q: "Vous venez vraiment à Yeu depuis La Rochelle ?", a: "Oui, régulièrement. L'Île d'Yeu est à deux heures de route jusqu'à Fromentine, puis quarante minutes de traversée jusqu'à Port-Joinville. On la traite dans la continuité de Ré et d'Oléron, c'est exactement la même logique insulaire. Nous prenons en charge toute la logistique : traversées passagers et fret, hébergement de l'équipe, véhicule sur place, et même le retour des déchets vers le continent. Vous n'organisez rien de votre côté." },
  { q: "Comment ça se passe pour le fret des matières ?", a: "C'est exactement ce qu'on prépare en amont, et ça change tout entre un chantier serein et un chantier improvisé. Les rouleaux, les colles, les outils s'embarquent à Fromentine sur la traversée fret de la Compagnie Vendéenne ou de la Régie Yeu Continent. On réserve les créneaux trois à quatre semaines en avance, surtout au début et à la fin du chantier. À l'arrivée, un véhicule loué sur place fait le dernier kilomètre. Tout est inclus dans le devis." },
  { q: "Quand vaut-il mieux intervenir à Yeu ?", a: "D'octobre à mars, hors saison touristique. Les propriétaires sont moins présents, les hôtels ferment, les traversées ne sont pas saturées. Pour les locations saisonnières, on vise impérativement la basse saison pour livrer avant Pâques. On évite avril à septembre, c'est l'enfer logistique. Les meilleurs créneaux se calent quatre à six mois à l'avance, surtout avec un tapis sur mesure ou un projet d'envergure." },
  { q: "Quelle matière pour une maison de famille à Yeu ?", a: "Ça dépend de la pièce. Pour les pièces de vie et les vérandas, on part sur du PVC effet bois ou du sisal scellé : ils encaissent le sable et le pieds nus de l'été. Dans les chambres, la moquette laine bouclée apporte la chaleur du matin. Sur les entrées face plage, le Bolon est imbattable, il se lave à grande eau. On valide toujours les choix sous la lumière insulaire, jamais en showroom." },
  { q: "Vous travaillez dans les maisons de pêcheurs étroites ?", a: "C'est même là qu'on excelle. Les maisons traditionnelles de Port-Joinville ont des portes étroites et des escaliers serrés. On prépare les découpes en amont à l'atelier, parfois en plusieurs morceaux qui passent les ouvertures puis se raccordent invisiblement sur place. C'est cette préparation qui fait la différence. Sur les escaliers étroits, on propose aussi des solutions de pose qui évitent de monter de grandes pièces d'un seul tenant." },
  { q: "Vous gérez les déchets de chantier ?", a: "Oui, tout repart avec nous sur la traversée retour. On rassemble, on emballe, on charge. Vous n'avez ni benne à organiser, ni déchetterie locale à trouver, ni évacuation à gérer. C'est compris dans la prestation insulaire, comme à Ré ou à Oléron. Un chantier insulaire bien préparé se mesure aussi à ce qu'on remporte avec nous." },
  { q: "Vous posez aussi des tapis sur mesure à Yeu ?", a: "Oui, et c'est particulièrement pertinent sur les maisons de famille. Tapis cousus main, dimensions au centimètre près, bordure travaillée, motif accordé à votre décor. Sisals chinés, laines unies en tonalités chaudes, créations contemporaines pour la côte sauvage. C'est souvent ce qui transforme un salon de maison rénovée, sans masquer le sol. Compter huit à quatorze semaines de fabrication, à caler dans le planning du chantier." },
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
