import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revêtement de Sol aux Sables-d'Olonne | Devis Gratuit sous 48h",
  description: "Pose de moquette, sol PVC et tapis sur mesure aux Sables-d'Olonne. Villas front de mer, résidences secondaires de standing, hôtels et restaurants du Remblai, appartements vue océan. CB Sols intervient depuis plus de 25 ans, déplacement organisé depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-les-sables-d-olonne' },
  keywords: ["revêtement sol Les Sables-d'Olonne", "moquette Les Sables-d'Olonne", "sol PVC Les Sables-d'Olonne", "pose tapis villa bord de mer Vendée", "artisan sol Les Sables-d'Olonne"],
  openGraph: {
    title: "Revêtement de sol aux Sables-d'Olonne, l'esprit du bord de mer",
    description: "Moquette, sol PVC et tapis sur mesure aux Sables-d'Olonne. Villas front de mer, résidences secondaires, hôtels et restaurants du Remblai. CB Sols, plus de 25 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-les-sables-d-olonne.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Villas et résidences secondaires pieds dans le sable", desc: "Vous passez l'été face à l'océan, sur le Remblai ou du côté de la Chaume. Le sable rentre, le sel s'invite. On pose du PVC effet bois dans les pièces de vie et de la moquette laine côté chambres. On vient idéalement hors juillet-août, pour ne pas couper votre saison." },
  { title: "Hôtels et restaurants du bord de mer", desc: "Vous tenez un hôtel ou un restaurant sur le front de mer sablais. Tout doit tenir face au passage estival et rester conforme ERP. On choisit des revêtements ignifugés, faciles à entretenir, dans une palette qui colle à l'ambiance balnéaire. On phase la pose hors saison touristique." },
  { title: "Appartements de standing vue océan", desc: "Vous avez un appartement avec vue sur la Grande Plage ou le port. Vous cherchez un sol qui valorise le bien et supporte les locations saisonnières. Moquette laine pour le confort, PVC durable côté zones humides, tapis sur mesure dans le séjour. On travaille proprement, en copropriété." },
  { title: "Commerces et boutiques du centre balnéaire", desc: "Vous tenez une boutique près du Remblai ou des halles. On pose la nuit ou le jour de fermeture, vous ne perdez pas une journée de vente. Sol résistant au passage et au sable, facile à nettoyer, dans un rendu qui met vos produits en valeur." },
]

const exigences = [
  { title: "Le sel et le sable, on en tient compte", desc: "Aux Sables-d'Olonne, l'air est chargé de sel et le sable s'invite partout, dans les entrées comme sous les meubles. Un revêtement standard s'use deux fois plus vite. On retient des fibres dures, des PVC résistants et des colles compatibles bord de mer. Votre sol garde sa tenue et sa couleur, saison après saison." },
  { title: "On vient hors juillet-août", desc: "L'été sablais, c'est plein, c'est bouché, la ville vit au rythme du Remblai et des plages. On cale les chantiers entre septembre et juin, quand l'accès est fluide et la villa calme. Vous récupérez votre bien prêt pour la saison, sans avoir vu un seul rouleau de moquette pendant vos vacances." },
  { title: "Maison fermée six mois, nous prenons en charge", desc: "Beaucoup de résidences secondaires restent closes hors saison. La chaleur monte, l'humidité varie, le sol travaille. On évite les colles trop lentes et les matières fragiles aux écarts. Vous ouvrez la maison en juin, tout est en place comme le jour de la pose." },
  { title: "On travaille quand vous ne travaillez pas", desc: "Sur un hôtel, un restaurant ou un commerce du bord de mer, on ne peut pas couper l'activité en pleine saison. On vient donc le soir, le jour de fermeture ou hors période touristique. Vous rouvrez sans avoir perdu une journée de chiffre d'affaires." },
  { title: "Les normes, on s'en occupe", desc: "Un hôtel, un restaurant, une résidence touristique : il y a des règles strictes sur la sécurité incendie. On choisit les bons produits pour vous, on fournit les attestations et les PV feu, on dialogue avec le bureau de contrôle. Vous n'avez rien à comprendre des fiches techniques." },
  { title: "Un seul interlocuteur, du devis à la facture", desc: "Sur le littoral, vous jonglez déjà avec le gardien, la conciergerie, le syndic. Nous, on est un seul nom dans votre carnet. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps et de la sérénité." },
]

const materiaux = [
  { name: "Sols PVC effet bois Gerflor et Tarkett", desc: "Notre matière de prédilection pour les pièces de vie face à l'océan. Le rendu visuel est convaincant, le sol résiste au sable et au passage estival, et se nettoie en cinq minutes. On peut même le poser sur un chauffage au sol. Compter facilement quinze à vingt ans en usage saisonnier." },
  { name: "Sols PVC homogènes pour zones humides", desc: "Pour les salles de bains, les buanderies et les coins cuisine, on part sur du PVC homogène ou du Forbo. On soude les lés à chaud, donc l'eau ne passe nulle part, ni dans les joints ni sous les plinthes. C'est exactement ce qu'il faut quand le climat est humide toute l'année." },
  { name: "Moquette laine vierge et polyamide premium", desc: "Dans les chambres et les suites, on cherche le confort sous les pieds. La laine vierge se patine sans s'écraser, le polyamide haute densité reste doux et résistant. Les coloris naturels, lin, sable, écru, s'accordent avec une ambiance balnéaire. Douze à vingt ans selon la gamme et l'usage." },
  { name: "Sols PVC Bfl-s1 pour hôtels et restaurants", desc: "Sur les établissements recevant du public, on part sur du PVC classé feu, résistant au passage intense. Le matériau supporte le va-et-vient estival, se nettoie facilement et tient les exigences ERP. On fournit les PV feu pour la commission de sécurité." },
  { name: "Tapis sur mesure laine et fibres naturelles", desc: "Pour habiller un salon ouvert sur l'océan sans alourdir le décor, le tapis sur mesure fait le travail. Sisal, jonc de mer ou laine vierge bouclée selon votre ambiance. Bordure cousue main, dimensions au centimètre près. On pose sans coller, c'est totalement réversible." },
  { name: "Profilés laiton brossé et inox marine Romus", desc: "Pour les seuils et les nez de marche, on choisit la matière selon la zone. Sur les coursives exposées au sel, on part sur de l'inox marine, le même que sur les bateaux. À l'intérieur, le laiton brossé patiné s'accorde avec les intérieurs de bord de mer. Le détail compte." },
]

const marques = [
  { name: "Gerflor", desc: "Le français de Lyon, que nous connaissons en profondeur. Leurs PVC effet bois et leur gamme Texline sont parfaits pour les pièces de vie et les zones humides du bord de mer. Ils résistent au sable et à l'humidité année après année." },
  { name: "Tarkett", desc: "Pour les espaces qui demandent un vrai confort acoustique, on part sur du Tarkett iQ Granit. Il vieillit bien et reste notre référence sur les sols soumis à un passage régulier, hôtels et résidences touristiques compris." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin, et leur Flotex se lave à grande eau, ce qui change la vie en villa familiale du littoral." },
  { name: "EGE Carpets", desc: "Le tisseur danois, notre référence pour les hôtels boutiques et les suites de villas haut de gamme du front de mer. Leurs dalles intègrent déjà la sous-couche acoustique, ce qui facilite la pose." },
  { name: "objectflor", desc: "Pour les commerces et les pièces de vie, leurs lames PVC effet bois sont une valeur sûre. Le rendu est crédible, la pose va vite, et la résistance au sable et au passage tient dans la durée." },
  { name: "Bostik", desc: "Pour les colles et les ragréages, on travaille avec Bostik. Ce sont des produits fiables, compatibles bord de mer, qui garantissent une pose durable même sur les supports soumis à l'humidité saline." },
  { name: "objectflor Expona", desc: "Quand un hôtel ou un commerce veut un sol design qui en jette sans sacrifier la résistance, leurs gammes Expona font le travail. Effet bois, béton ou pierre, le choix est large et le rendu haut de gamme." },
  { name: "Romus", desc: "Pour les accessoires de finition, profilés et nez de marche, Romus est notre référence. Du laiton brossé à l'inox marine, on trouve toujours la finition qui s'accorde avec un intérieur de bord de mer." },
]

const quartiers = [
  { nom: "Le Remblai", detail: "Front de mer emblématique, face à la Grande Plage. Appartements vue océan, résidences de standing, hôtels et restaurants à équiper." },
  { nom: "La Chaume", detail: "Ancien quartier de pêcheurs, de l'autre côté du chenal. Maisons de caractère, villas familiales et habitat traditionnel à rénover." },
  { nom: "Le centre-ville", detail: "Halles, rues commerçantes, port de plaisance. Commerces, cabinets et appartements de centre à équiper et moderniser." },
  { nom: "La Rudelière", detail: "Quartier résidentiel proche des plages. Villas familiales et résidences secondaires attachées aux finitions soignées." },
  { nom: "Le quartier de la gare", detail: "Habitat de ville et petites unités tertiaires. Cabinets, copropriétés et maisons en cours de modernisation." },
  { nom: "Olonne-sur-Mer", detail: "Commune voisine intégrée aux Sables-d'Olonne. Lotissements, maisons familiales et zones d'activité tertiaires." },
  { nom: "Château-d'Olonne", detail: "Secteur résidentiel et balnéaire au sud de la ville. Villas de standing, résidences secondaires et programmes contemporains." },
  { nom: "La Pironnière", detail: "Quartier proche des plages du sud, ambiance calme et résidentielle. Villas familiales et résidences secondaires en bord d'océan." },
  { nom: "Les Roches Noires", detail: "Secteur balnéaire en bord de plage. Appartements vue mer, résidences de standing et hôtellerie de front de mer." },
  { nom: "Le port", detail: "Port de pêche et de plaisance, départ du Vendée Globe. Restaurants, commerces et locaux d'activité liés au nautisme." },
  { nom: "Talmont-Saint-Hilaire", detail: "Commune littorale voisine, stations et villages balnéaires. Résidences secondaires et villas familiales en bord de mer." },
  { nom: "Les Sables sud et plages", detail: "Quartiers résidentiels proches des plages du sud sablais. Clientèle attachée à l'authenticité et au cadre océanique." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de bien (villa, appartement, hôtel, restaurant, commerce), surface estimée, calendrier souhaité, période d'usage (saison, hors saison, location). Si le projet est piloté par un architecte ou un décorateur, nous prenons contact directement." },
  { step: "Visite aux Sables-d'Olonne", desc: "Déplacement organisé depuis Villedoux, environ 1h45 de route, idéalement hors juillet-août. Prise de cotes au laser, repérage des contraintes d'accès et de copropriété, photos pour coordination coloris. Pour les hôtels, restaurants et commerces, on identifie les fenêtres d'intervention hors saison." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement aux Sables-d'Olonne, chez vous ou à l'établissement. Validation finale sous l'éclairage du lieu : la lumière de l'océan transforme les coloris. Pour les ERP, transmission des fiches techniques, PV feu et certifications requises." },
  { step: 'Confection atelier', desc: "3 à 10 semaines selon gamme : moquette tissée, dalles, PVC découpé, tapis sur mesure. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale rapide et soignée aux Sables-d'Olonne." },
  { step: "Pose aux Sables-d'Olonne", desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités et l'ouverture ou la fermeture de saison. Phasage hors période touristique pour les établissements en activité. Coordination avec votre conciergerie locale. Nettoyage complet à la livraison." },
]

const faq = [
  { q: "Vous venez vraiment aux Sables-d'Olonne depuis La Rochelle ?", a: "Oui, sans difficulté. Les Sables-d'Olonne, c'est environ 120 km, autour de 1h45 par la route. On maîtrise cette distance depuis plus de 25 ans avec les chantiers de Ré, d'Oléron et de toute la façade atlantique, la logique est la même. On vient mesurer une première fois, puis on revient poser. L'hébergement et le déplacement sont compris dans le devis. On évite juillet et août, on cale au printemps ou à l'automne." },
  { q: "Quel revêtement choisir pour une villa pieds dans le sable ?", a: "Le sable et le sel sont les ennemis numéro un d'un sol au bord de l'océan. Dans les pièces de vie et les entrées, on part sur du PVC effet bois ou homogène : l'entretien se fait à l'eau, le matériau vieillit bien face au sel. Dans les chambres, là où vous voulez du moelleux sous les pieds, on remet de la laine vierge ou du polyamide haute densité. On cale l'arbitrage avec vous à la visite." },
  { q: "Vous intervenez sur les hôtels et restaurants du Remblai ?", a: "Oui, c'est un de nos terrains naturels. Un hôtel ou un restaurant de front de mer demande des sols conformes ERP, résistants au passage estival et faciles à entretenir. On choisit des revêtements ignifugés Bfl-s1, on pose hors saison touristique pour ne pas couper l'activité, et on fournit tous les PV feu pour la commission de sécurité. Vous rouvrez prêt pour la saison." },
  { q: "Pourquoi vous évitez juillet et août aux Sables-d'Olonne ?", a: "Parce que c'est l'enfer logistique en pleine saison. La ville est saturée, les livraisons coincent, les villas sont occupées ou louées au tarif fort, les hôtels et restaurants tournent à plein. On préfère caler au printemps avant l'ouverture, ou à l'automne après la fermeture. À ces périodes, l'accès est fluide et votre bien est livré propre pour la saison qui arrive." },
  { q: "Vous travaillez en appartement et en copropriété sur le front de mer ?", a: "Oui, régulièrement. Un appartement vue océan, ça demande un travail propre et respectueux des parties communes. On protège l'ascenseur, les paliers et les couloirs, on respecte les horaires du règlement de copropriété, on évacue les déchets au fur et à mesure. Moquette laine pour le confort, PVC durable côté zones humides, tapis sur mesure dans le séjour. Vos voisins ne nous remarquent presque pas." },
  { q: "Combien de temps tient un sol en bord d'océan ?", a: "Quinze à vingt ans, bien choisi et bien posé. Un PVC effet bois dans une pièce de vie tient facilement vingt ans en usage saisonnier. Un PVC homogène en salle de bains tient quinze ans tranquille. Une moquette laine ou polyamide premium dans une chambre, douze à quinze ans selon l'usage. Notre savoir-faire vient de plus de 25 ans de chantiers atlantiques, on connaît les pièges du bord de mer." },
  { q: "Vous pouvez poser en horaires décalés sur un commerce ou un restaurant en activité ?", a: "Oui, c'est même la norme sur ce type de chantier. On organise les interventions le soir, le jour de fermeture ou hors période touristique. On pré-assemble un maximum en atelier à Villedoux, donc la pose sur site va vite. On protège vos rayonnages, votre mobilier et votre salle avant de commencer. Le lendemain, vous rouvrez normalement, sol posé et nettoyé." },
]

export default function RevetementSolLesSablesDOlonnePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-les-sables-d-olonne#service',
        name: "Revêtement de sol aux Sables-d'Olonne",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: "Les Sables-d'Olonne" },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure aux Sables-d'Olonne et en Vendée littorale",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour villas front de mer, résidences secondaires, hôtels, restaurants et appartements de standing aux Sables-d'Olonne.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: "Revêtement de sol aux Sables-d'Olonne", item: 'https://cbsols.fr/revetement-sol-les-sables-d-olonne' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="les-sables-d-olonne" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Les Sables-d&apos;Olonne</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol aux Sables-d&apos;Olonne,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>l&apos;esprit du bord de mer.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure aux Sables-d&apos;Olonne. Villas front de mer, résidences secondaires de standing, hôtels et restaurants du Remblai, appartements vue océan. Atelier basé près de La Rochelle, intervention saisonnière organisée hors juillet-août.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=les-sables-d-olonne" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Le sel et le sable s&apos;invitent partout aux Sables. Choisir la bonne fibre, c&apos;est ce qui fait qu&apos;un sol tient dix ans ou vingt ans. Depuis plus de 25 ans, CB Sols travaille au bord de l&apos;Atlantique, la Vendée littorale parle la même langue. »
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
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même intelligence du littoral.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet aux Sables-d&apos;Olonne ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite hors saison, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec vous, votre architecte d&apos;intérieur ou votre conciergerie. Visite de prise de mesures organisée hors juillet-août, devis détaillé sous 48 heures.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=les-sables-d-olonne-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Les Sables-d&apos;Olonne</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six contraintes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres au bord de l&apos;océan.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir aux Sables-d&apos;Olonne n&apos;est pas un chantier ordinaire. Le climat marin, la saisonnalité touristique, le sable et l&apos;accès dictent une méthode spécifique, que nous appliquons systématiquement.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et savoir-faire pour Les Sables-d&apos;Olonne</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons en Vendée littorale.</em>
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
              « Une villa des Sables vit en saison et se referme le reste de l&apos;année. Le sol doit accepter ce cycle, supporter le sel, résister au sable. C&apos;est un métier de patience et de bons choix dès le départ. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=les-sables-d-olonne-citation" variant="primary" size="md">Prendre rendez-vous</Button>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quartiers et communes où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Les Sables et le littoral, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;aux communes voisines.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur Les Sables-d&apos;Olonne et l&apos;ensemble du littoral vendéen, là où se concentrent les villas familiales, les résidences secondaires et l&apos;hôtellerie de bord de mer.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste (hors juillet-août) et un ordre de grandeur budgétaire pour votre bien sablais.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=les-sables-d-olonne-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux aux Sables-d&apos;Olonne.</em>
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
            Revêtement de sol aux Sables-d&apos;Olonne, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Pas de hotline. Conseil clair, ordre de grandeur honnête, calendrier réaliste qui tient compte de la saisonnalité du littoral vendéen.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionSubtitle="Notre savoir-faire couvre d'autres villes et univers susceptibles de vous intéresser. Prenez le temps de parcourir, posez vos questions, nous y répondrons."
        items={[
          { href: "/ile-de-re", title: "Île de Ré", teaser: "Maisons de village et villas du littoral. Sols qui supportent le sel, le sable et la vie au quotidien.", icon: Waves },
          { href: "/revetement-sol-cap-ferret", title: "Revêtement sol Cap Ferret", teaser: "Villas du Bassin d'Arcachon. Sols qui résistent au sel, au sable et à la lumière de l'océan.", icon: MapPin },
          { href: "/particuliers", title: "Pour les particuliers", teaser: "Moquette, sol PVC, tapis sur mesure : notre savoir-faire au service de votre maison.", icon: Home },
          { href: "/secteurs", title: "Nos secteurs", teaser: "Tertiaire, santé, hôtellerie, commerce. Des solutions pensées pour chaque type d'établissement.", icon: Building2 },
          { href: "/realisations", title: "Nos réalisations", teaser: "Découvrez nos chantiers récents en images. Le rendu, les finitions, le détail qui compte.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gérant vous répond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre bien sablais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en mains expertes.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite hors saison aux Sables-d&apos;Olonne. Devis détaillé sous 48 heures, matières adaptées au bord de mer, finitions soignées. Plus de 25 ans de savoir-faire atlantique au service de la Vendée littorale.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=les-sables-d-olonne-final" variant="primary" size="md">Demander un devis</Button>
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
