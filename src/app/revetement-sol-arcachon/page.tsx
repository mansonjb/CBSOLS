import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Castle, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revêtement de Sol à Arcachon | Pose & Devis sous 48h",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Arcachon et autour du Bassin. Villas Ville d'Hiver, Pereire, Moulleau, hôtels boutique face Bassin. CB Sols, 27 ans de savoir-faire, déplacement depuis La Rochelle.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-arcachon' },
  keywords: ['revêtement sol Arcachon', 'moquette Arcachon', 'sol PVC Arcachon', 'pose tapis Arcachon', 'artisan sol Bassin'],
  openGraph: {
    title: "Revêtement de sol à Arcachon, l'esprit du Bassin",
    description: "Moquette, sol PVC et tapis sur mesure à Arcachon. Villas Ville d'Hiver, hôtels boutique, restaurants bord de mer. CB Sols, 27 ans.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-arcachon.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Villas familiales Ville d'Hiver et Pereire", desc: "Vous avez une villa classée Ville d'Hiver ou Pereire. Le parquet d'origine et les boiseries XIXe restent en place. On pose une moquette laine à motif discret, ou un tapis sur mesure dans le salon. Tout reste réversible." },
  { title: "Hôtels boutique face Bassin", desc: "Vous tenez un hôtel de charme au Moulleau ou face mer. On vient en basse saison, votre exploitation ne s'arrête pas. Moquette dense dans les chambres, tapis structurant dans le hall." },
  { title: "Restaurants bord de mer", desc: "Vous gérez une table iodée avec vue Bassin. On pose la nuit, vous ne perdez pas un service. Moquette tissée anti-tache et acoustique soignée, dans une palette qui colle aux bois flottés." },
  { title: "Résidences secondaires et villas contemporaines", desc: "Votre maison d'été est au Pyla ou à l'Aiguillon. Le sable rentre, les fenêtres restent ouvertes. PVC effet bois dans les pièces de vie, sisal ou bouclée dans les chambres. On adapte les matières à votre mode de vie balnéaire." },
]

const exigences = [
  { title: "On respecte la Ville d'Hiver", desc: "Chalets suisses, villas mauresques, néo-gothiques : la Ville d'Hiver est un livre d'histoire posé sur les dunes. On pose en réversible chaque fois que possible. Les parquets d'origine restent intacts. Notre passage est discret, c'est ce qu'on demande ici." },
  { title: "Pieds nus, sable, soleil", desc: "Au Moulleau, au Pyla, à Pereire, on vit pieds nus, baies ouvertes sur le Bassin. Le sable rentre, le soleil tape. On choisit des sols clairs qui captent la lumière, des matières qui ne craignent pas l'humidité. Vous gardez la sensation de vacances toute l'année." },
  { title: "Jamais en juillet-août", desc: "L'été à Arcachon, les rues sont pleines, les maisons aussi. On évite ces deux mois. Les bons créneaux : mars-avril avant la saison, octobre-novembre après. Vous récupérez la maison prête pour les vacances, sans avoir vu un seul artisan passer." },
  { title: "On vient avec toute l'équipe", desc: "Arcachon est à deux heures et demie de notre atelier. Quand on monte, on monte au complet, on dort sur place, et on enchaîne les jours. Les matières sont préparées à Villedoux avant le départ. Sur site, on pose vite et bien." },
  { title: "L'air du Bassin ne nous fait pas peur", desc: "L'humidité marine fait gondoler les sols mal choisis. On retient des laines traitées, des tissés vinyle, des PVC effet bois pour les pièces exposées. Vous gardez un sol stable, été comme hiver. Pas de joints qui se soulèvent au bout d'un an." },
  { title: "Un seul interlocuteur, du devis à la facture", desc: "Sur une villa du Bassin, vous jonglez avec l'architecte, le piscinier, le jardinier. Nous, on est un seul nom de plus. Devis, planning, livraison, facture : tout passe par la même personne. Vous gagnez du temps et de la tranquillité." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée pour Ville d'Hiver", desc: "Notre matière de référence dans les villas Belle Époque. La laine se patine, elle ne s'écrase pas. Au toucher elle est ferme, à l'œil elle se distingue. On choisit avec vous un uni profond ou un motif géométrique XIXe pour s'accorder aux boiseries d'origine. Compter facilement quinze à vingt ans de tenue." },
  { name: "Sisal et fibres naturelles", desc: "Pour une villa contemporaine tournée vers le Bassin, le sisal apporte ce côté brut qu'on cherche. Coloris chiné sable ou taupe doux, exactement dans l'esprit balnéaire arcachonnais. On le prend traité anti-tache et scellé, il encaisse un usage familial sans broncher. Bon rapport qualité-prix sur les grandes surfaces." },
  { name: "Tissés vinyle Bolon pour pieds dans le sable", desc: "Quand votre villa donne sur la plage, le Bolon fait tout. Le sable, l'humidité du Bassin, les pieds nus mouillés, il encaisse. On le lave à grande eau et au matin il est sec. Esthétique tissée contemporaine, et un choix énorme de coloris coordonnables avec le bois flotté et le bleu du Bassin." },
  { name: "Sols PVC effet bois clair", desc: "Pour les résidences modernes du Pyla et de Pereire, le PVC effet bois fait le travail. L'imitation chêne blanchi ou pin lavé est crédible, on s'y trompe. L'entretien se fait en cinq minutes, et le sol tient face au sable rapporté de la plage. Idéal pour une location saisonnière premium qui doit rester impeccable." },
  { name: "Tapis sur mesure cousus main", desc: "Quand vous voulez habiller un parquet d'origine sans le masquer, le tapis sur mesure fait toute la différence. Dimensions calées à la pièce, bordure cousue main, motif accordé à votre décor. Compter huit à seize semaines de fabrication. C'est ce qui transforme un salon de Ville d'Hiver." },
]

const marques = [
  { name: "Bolon", desc: "Le suédois du tissé vinyle, c'est notre référence pour les villas et restaurants face Bassin. Lavable à grande eau, robuste, palette dense. On en pose sur la moitié des chantiers du Cap." },
  { name: "EGE Carpets", desc: "Le danois, notre référence pour les hôtels boutiques du Moulleau et de Pereire. Leurs gammes Highline et Hospitality posent un cadre dès l'entrée." },
  { name: "Brintons", desc: "L'Axminster britannique, l'aristocratie de la moquette. On l'appelle pour les villas Belle Époque de Ville d'Hiver, là où vous voulez un salon d'apparat qui marque." },
  { name: "Tisca Tiara", desc: "Le suisse, c'est le très haut de gamme. On les sort sur les villas familiales d'exception et les suites des hôtels boutiques d'Arcachon. Quand le budget suit, le résultat est sans équivalent." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Idéal pour les zones humides et les résidences secondaires." },
  { name: "Gerflor", desc: "Le français de Lyon, qu'on connaît par cœur. Leurs imitations bois et minéral sont parfaites pour les résidences contemporaines et les locations saisonnières. Choix énorme, entretien simple." },
  { name: "Object Carpet", desc: "Les allemands, pour les résidences d'architecte du Pyla. Design contemporain affirmé, finitions parfaites. Quand vous voulez sortir des codes balnéaires classiques." },
  { name: "Romus", desc: "Notre fournisseur de profilés. Laiton brossé, bronze, inox marine. On choisit la finition selon la zone et l'ambiance. C'est ce qui fait la différence à la livraison." },
]

const quartiers = [
  { nom: "Ville d'Hiver", detail: "Quartier historique d'Arcachon, classé remarquable. Villas Belle Époque sur les dunes, parquets d'origine, boiseries XIXe. Cadre de travail patrimonial exigeant." },
  { nom: "Pereire", detail: "Front de mer entre plage Pereire et avenue du Général Leclerc. Villas familiales, résidences contemporaines, hôtels boutique avec vue sur le Bassin." },
  { nom: "Le Moulleau", detail: "Village balnéaire au sud d'Arcachon. Église Notre-Dame, hôtels de charme, restaurants iodés, villas en surplomb du Bassin. Ambiance maison de famille." },
  { nom: "Les Abatilles", detail: "Quartier résidentiel arcachonnais, villas de famille dans la pinède, calme et discrétion. Sources thermales historiques et hôtels de prestige." },
  { nom: "L'Aiguillon", detail: "Quartier nord d'Arcachon, port de plaisance et front de mer. Résidences contemporaines, hôtels avec marina, restaurants face port." },
  { nom: "Eyrac", detail: "Front de mer central d'Arcachon, entre jetée Thiers et jetée Legallais. Immeubles bourgeois, appartements vue mer, restaurants de plage." },
  { nom: "Le Pyla", detail: "La Teste-de-Buch, au pied de la Dune. Villas d'architectes contemporaines, résidences secondaires de prestige, vue exceptionnelle sur le Bassin." },
  { nom: "Centre-ville Arcachon", detail: "Boulevard de la Plage, avenue Gambetta, Notre-Dame. Immeubles XIXe, appartements de famille, commerces historiques de la station." },
  { nom: "La Teste-de-Buch", detail: "Commune historique du Bassin sud, résidences familiales, maisons ostréicoles rénovées, programmes résidentiels neufs en limite de pinède." },
  { nom: "Gujan-Mestras", detail: "Capitale ostréicole du Bassin, ports historiques, cabanes rénovées, maisons de pêcheurs réhabilitées en résidences de charme." },
  { nom: "Le Teich", detail: "Rive sud du Bassin, réserve ornithologique, résidences contemporaines en bord de réserve, hôtels nature et écolodges familiaux." },
  { nom: "Lanton", detail: "Rive nord-est du Bassin, villages d'ostréiculteurs, maisons de famille, programmes résidentiels neufs face Bassin et pinède." },
]

const process = [
  { step: 'Premier contact', desc: "Échange par téléphone ou mail. Recueil des éléments clés du projet à Arcachon : type de bien, surfaces, calendrier souhaité, contexte (résidence secondaire, location, hôtel, restaurant). Si le projet est piloté par un architecte d'intérieur, nous prenons contact directement avec son agence pour caler la suite." },
  { step: 'Visite sur le Bassin', desc: "Déplacement organisé sous 2 à 3 semaines. Prise de cotes, repérage des contraintes d'accès, photos pour coordination coloris boiseries et parquets. Échantillons présentés directement dans le bien sous la lumière du Bassin, qui transforme les perceptions de teinte." },
  { step: 'Choix matière et devis', desc: "Devis détaillé sous huitaine. Validation finale des coloris, des tapis sur mesure éventuels, des plinthes et profilés. Commande des matières lancée à la confirmation, délai usine 3 à 10 semaines selon gamme retenue." },
  { step: 'Confection atelier Villedoux', desc: "Pré-découpe et pré-assemblage des matières à La Rochelle. Vérification des dimensions à blanc avant transport. Cette préparation amont est ce qui permet de tenir une pose finale en 3 à 7 jours à Arcachon, sans aller-retour inutile sur la route Bordeaux-La Rochelle." },
  { step: 'Pose à Arcachon', desc: "Équipe mobilisée sur place, hébergement inclus. Planning calé sur vos disponibilités ou la fenêtre de chantier convenue, idéalement hors juillet-août. Coordination avec la conciergerie ou le syndic si copropriété. Nettoyage complet à la livraison, finitions vérifiées avec vous." },
]

const faq = [
  { q: "Vous venez vraiment à Arcachon depuis La Rochelle ?", a: "Oui, et souvent. Arcachon est à 250 km, soit 2h30 à 3h selon l'itinéraire. On y descend dans la continuité des chantiers du Cap, de Bordeaux et de Saint-Émilion. On organise la visite de cotes en début de projet, puis on revient poser à la fin. L'hébergement est inclus dans le devis. Sur un gros chantier, l'équipe reste sur place jusqu'à la livraison." },
  { q: "Vous travaillez dans les villas de Ville d'Hiver ?", a: "Oui, c'est là qu'on prend le plus de plaisir. Ville d'Hiver concentre des villas Belle Époque, des chalets suisses, des fabriques mauresques d'une qualité folle. Les parquets et les boiseries XIXe demandent du respect. On pose chaque fois que possible en réversible, sans clouer, sans coller agressivement. Les tapis sur mesure et les moquettes Brintons s'inscrivent là dedans naturellement." },
  { q: "Quand vaut-il mieux intervenir à Arcachon ?", a: "D'octobre à avril, hors saison touristique. C'est la période où les propriétaires sont moins présents et où le Bassin respire. Pour les hôtels et restaurants, on vise la fermeture annuelle, en général entre mi-novembre et mi-mars. On évite juillet et août, c'est l'enfer logistique. Les meilleurs créneaux se calent quatre à six mois à l'avance, surtout avec un tapis sur mesure dans le lot." },
  { q: "Quelle matière pour une villa face Bassin ?", a: "Ça dépend de l'usage. Dans une villa Belle Époque tournée vers le Bassin, la moquette laine sur thibaude reste la référence pour les salons et chambres. Dans une villa contemporaine avec accès direct à la plage, le sisal scellé ou le Bolon font le travail : ils encaissent le sable et l'humidité. Pour les chambres d'amis et les vérandas, le PVC effet bois clair est parfait. On valide toujours sous la lumière du Bassin, jamais en showroom." },
  { q: "Vous travaillez avec les architectes d'intérieur ?", a: "Régulièrement, c'est même un de nos modes de travail préférés. La scène architecturale du Bassin est active entre Bordeaux, le Cap et Arcachon. On intervient en sous-traitance de leur prescription, l'architecte reste l'interlocuteur principal. On envoie les échantillons à son agence pour validation, et on fournit toute la documentation technique pour son dossier de chantier." },
  { q: "Combien coûte la rénovation de sol d'une villa ?", a: "Très variable selon la surface et la gamme. Pour vous donner un ordre d'idée : une villa familiale de 200 m² entièrement en moquette laine avec quelques tapis sur mesure, c'est 30 à 60 000 euros tout compris, déplacement et pose inclus. Un projet plus modeste descend plus bas. Un hôtel boutique grimpe en proportion. On chiffre toujours après visite, avec un devis détaillé pièce par pièce, pour que vous ayez la répartition au clair." },
  { q: "Vous posez aussi des tapis sur mesure ?", a: "Oui, c'est une part importante du métier, et un terrain particulièrement pertinent à Arcachon. Tapis cousus main, dimensions au centimètre près, motif accordé à votre décor. Reproductions Aubusson ou Hereke pour Ville d'Hiver, créations contemporaines unies pour les villas modernes du Pyla. Compter huit à seize semaines de fabrication. C'est souvent ce qui transforme un salon, surtout quand on habille un parquet d'origine sans le masquer." },
]

export default function RevetementSolArcachonPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-arcachon#service',
        name: "Revêtement de sol à Arcachon",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Arcachon' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Arcachon et autour du Bassin",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour villas Belle Époque de Ville d'Hiver, hôtels boutique face Bassin, restaurants iodés et résidences contemporaines à Arcachon, Le Moulleau, Le Pyla.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Arcachon', item: 'https://cbsols.fr/revetement-sol-arcachon' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="arcachon" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Arcachon</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Arcachon,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>l&apos;esprit du Bassin.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Arcachon et autour du Bassin. Villas Belle Époque de Ville d&apos;Hiver, hôtels boutique du Moulleau, restaurants iodés, résidences contemporaines du Pyla. Atelier basé près de La Rochelle, déplacement régulier en Gironde.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=arcachon" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Arcachon, c&apos;est la Belle Époque qui rencontre la maison de plage. Habiller une villa de Ville d&apos;Hiver ou une résidence du Pyla, c&apos;est exactement ce que CB Sols fait depuis 27 ans, avec le même soin du patrimoine et du détail. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, gérant de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour quel type de projet */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de projet</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même exigence balnéaire.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Arcachon ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec vous ou votre architecte d&apos;intérieur. Visite organisée sous 2 à 3 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?from=arcachon-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Arcachon</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers du Bassin.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Arcachon, ce n&apos;est pas reproduire un chantier standard. Voici les six points sur lesquels nous structurons notre méthode dès la première visite, pour respecter à la fois le patrimoine et l&apos;esprit balnéaire.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Arcachon</div>
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

      {/* Citation */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Une villa de Ville d&apos;Hiver, ça ne se traite pas comme une location saisonnière. On respecte le parquet, on accorde la moquette à la boiserie, on pose un tapis qui se dépose sans abîmer. Le détail patrimonial, on le voit dès la première visite. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=arcachon-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite à domicile sur le Bassin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets arcachonnais.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quartiers et communes du Bassin</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Arcachon et le Bassin, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du Pyla à Lanton.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble du Bassin d&apos;Arcachon, des quartiers historiques de la station aux communes ostréicoles, là où se concentrent les projets résidentiels haut de gamme et les établissements de charme.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier arcachonnais.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=arcachon-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Arcachon.</em>
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
            Revêtement de sol à Arcachon, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Pas de hotline, pas de standard. Conseil clair, ordre de grandeur honnête, suite donnée seulement si le projet a du sens.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionSubtitle="Notre savoir-faire couvre d'autres univers susceptibles de vous interesser. Prenez le temps de parcourir, posez vos questions, nous y repondrons."
        items={[
          { href: "/revetement-sol-cap-ferret", title: "Revetement sol Cap Ferret", teaser: "Cabanes ostreicoles, villas pieds dans le sable. La discretion d'un savoir-faire qui se voit a peine.", icon: Waves },
          { href: "/revetement-sol-bordeaux", title: "Revetement sol Bordeaux", teaser: "Hotels particuliers, lofts d'echoppes, maisons de pierre. Sols qui dialoguent avec l'architecture.", icon: MapPin },
          { href: "/revetement-sol-biarritz", title: "Revetement sol Biarritz", teaser: "Villas de la Cote basque. Sols qui resistent au sel, au sable et a la lumiere de l'ocean.", icon: MapPin },
          { href: "/revetement-sol-saint-emilion", title: "Revetement sol Saint-Emilion", teaser: "Chateaux, chais et maisons de maitre. Des sols choisis pour le caractere et la patine du temps.", icon: Castle },
          { href: "/moquette-bateau", title: "Moquette de bateau", teaser: "Sols nautiques sur mesure : confort a bord, antiderapant, resistance au sel et a la lumiere.", icon: Waves },
          { href: "/architectes", title: "Pour les architectes", teaser: "Documentation matiere, echantillons annotes, devis detailles. Notre role, c'est de servir votre vision.", icon: Building2 },
          { href: "/showroom", title: "Showroom Villedoux", teaser: "Venez voir et toucher les matieres. Sur rendez-vous, a Villedoux pres de La Rochelle.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gerant vous repond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet arcachonnais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Arcachon. Devis détaillé, finitions premium, respect du patrimoine Belle Époque et esprit balnéaire contemporain. 27 ans de savoir-faire CB Sols au service du Bassin.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=arcachon-final" variant="primary" size="md">Demander un devis</Button>
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
