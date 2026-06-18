import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Castle, Mail, MapPin, Sparkles, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Sols & Moquette d'Exception à Monaco | Pose Premium",
  description: "CB Sols se déplace à Monaco pour les projets d'exception : appartements Carré d'Or, suites de palace, yachts du Port Hercule. Moquette, tapis sur mesure et sols haut de gamme. Finition premium, discrétion totale, 27 ans de savoir-faire.",
  alternates: { canonical: 'https://cbsols.fr/sols-monaco' },
  openGraph: {
    title: "Sols d'exception à Monaco",
    description: "Moquette, tapis sur mesure et sols haut de gamme pour les projets d'exception en Principauté. Atelier La Rochelle, équipe mobile, discrétion totale.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sols-monaco.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Appartements en Principauté", desc: "Vous avez un appartement Carré d'Or, à Monte-Carlo ou à la Tour Odéon. On pose une moquette laine vierge ou un tapis sur mesure dans vos salons et chambres. Raccords motif validés en amont, calage millimétré sur les boiseries. Votre architecte d'intérieur reste l'interlocuteur principal." },
  { title: "Suites de palace", desc: "Vous tenez une suite à l'Hôtel de Paris, à l'Hermitage ou au Métropole. On intervient en site occupé, par plages horaires négociées avec votre direction technique. Aucune gêne pour la clientèle, tout est nettoyé à chaque fin de journée." },
  { title: "Yachts du Port Hercule", desc: "Vous avez un refit prévu sur votre yacht. On pose dans le salon, la cabine propriétaire et les coursives. Laine traitée ignifuge, polypropylène premium pour les zones exposées. On se cale avec le capitaine et l'architecte naval." },
  { title: "Bureaux et family offices", desc: "Vous recevez des clients en bureau confidentiel. Le sol pose le ton dès l'entrée. Finition feutrée, isolation acoustique soignée. Pose en horaires décalés, votre activité ne s'arrête pas." },
]

const exigences = [
  { title: "Accès et logistique", desc: "Livraison camion réglementée en Principauté, créneaux horaires précis, parkings restreints, ascenseurs de service à réserver. Notre équipe anticipe et coordonne avec la conciergerie de l'immeuble, le syndic ou la direction technique de l'hôtel. Tous les rouleaux arrivent prêts à poser." },
  { title: "Discrétion totale", desc: "On signe le NDA si vous le demandez. Aucune photo diffusée, aucun nom évoqué. C'est la règle par défaut depuis vingt-sept ans, pas une option à cocher. Votre équipe et la nôtre travaillent en confiance." },
  { title: "Coordination avec les autres corps de métier", desc: "Sur un chantier de cette tenue, vous avez déjà l'architecte d'intérieur, l'ébéniste, le sellier. Nous, on s'intègre au planning sans retard. On passe en avant-dernier rang pour éviter qu'un autre corps de métier n'abîme la moquette neuve." },
  { title: "Finitions millimétrées", desc: "À Monaco, le détail compte. Calepinage précis, raccords motif validés en amont, profilés laiton brossé ou bronze patiné Romus, joints soudés à chaud. Pas de profilé alu standard, jamais. Les seuils s'accordent aux boiseries de la pièce." },
]

const materiaux = [
  { name: "Axminster custom", desc: "Tissage haut de gamme britannique, motifs sur mesure jusqu'à 36 couleurs, raccord motif strict. Référence des grands hôtels de palace et des intérieurs d'apparat. Délai usine 8 à 12 semaines, à anticiper dès la signature du devis." },
  { name: "Wilton tissé", desc: "Qualité hôtellerie de luxe, tissage dense, durée de vie 15 à 20 ans en usage privé soigné. Toucher ferme, vieillissement noble. Disponible en uni, chiné ou motif géométrique discret. Idéal pour les chambres parentales et les bibliothèques." },
  { name: "Tapis Aubusson et Savonnerie reconstitués", desc: "Pour les intérieurs néo-classiques et les hôtels patrimoniaux. Reproduction de motifs historiques en laine vierge, bordure cousue main, dimensions sur mesure. Délai 10 à 16 semaines selon complexité du motif." },
  { name: "Moquettes soie et laine vierge", desc: "Pour les salons d'apparat. Toucher exceptionnel, brillance subtile, traitement anti-tache compatible service ménage. À réserver aux pièces de représentation à trafic modéré." },
  { name: "Laine ignifugée EGE Highline", desc: "Pour les suites de palace et les yachts. Tenue au feu conforme, traitement ignifuge en cœur de fibre, large palette de coloris. La matière encaisse les rythmes intensifs sans perdre son aspect." },
  { name: "Profilés laiton brossé et bronze patiné Romus", desc: "Finitions des seuils, nez de marche et raccords entre essences. Coordination avec les boiseries et la quincaillerie de la pièce. Possibilité de profilés sur mesure pour les chantiers à exigence particulière." },
]

const quartiers = [
  { nom: "Carré d'Or", detail: "Épicentre du luxe monégasque, appartements premium et hôtels particuliers. Cœur de notre activité Principauté." },
  { nom: "Monte-Carlo", detail: "Casino, Hôtel de Paris, Hôtel Hermitage, One Monte-Carlo. Suites de palace, résidences d'exception, bureaux de direction." },
  { nom: "Larvotto", detail: "Front de mer, immeubles modernes et résidences neuves haut de gamme. Vues sur la Méditerranée, exigences acoustiques marquées." },
  { nom: "Fontvieille", detail: "Marina, résidences de prestige et Port de Fontvieille. Appartements vue port et yachts à quai." },
  { nom: "La Condamine", detail: "Port Hercule et résidences classiques. Refit yachts, appartements de caractère en bord de port." },
  { nom: "Tour Odéon", detail: "Appartements premium en hauteur, penthouse, double-niveau. Contraintes d'accès ascenseur de service strictes." },
  { nom: "Beausoleil", detail: "Commune limitrophe Monaco côté France. Résidences haut de gamme en surplomb de la Principauté." },
  { nom: "Cap-d'Ail", detail: "Côté France immédiat. Villas, propriétés en bord de mer, accès direct Monaco." },
  { nom: "Eze et Roquebrune-Cap-Martin", detail: "Résidences seigneuriales aux portes de Monaco. Propriétés patrimoniales, parc privé, exigence historique." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail, recueil des éléments clés : type de projet, surface estimée, calendrier, niveau de confidentialité attendu. NDA signé si demandé avant tout déplacement." },
  { step: 'Visite à Monaco', desc: "Déplacement organisé sous 1 à 2 semaines. Prise de cotes au laser ou au calque selon configuration, repérage des contraintes d'accès immeuble, photos pour coordination coloris boiseries." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Monaco, chez l'architecte d'intérieur ou sur le yacht. Validation finale sous éclairage du lieu, jamais en salle d'expo." },
  { step: 'Confection atelier', desc: "3 à 10 semaines selon gamme : Axminster custom, Wilton, soie, laine. Pré-assemblage à blanc en atelier La Rochelle pour valider l'ajustement avant transport en Principauté." },
  { step: 'Pose à Monaco', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur les disponibilités client. Nettoyage complet à la livraison, finitions vérifiées avec l'architecte ou le maître d'ouvrage." },
]

const faq = [
  { q: "Comment se passe un projet à Monaco quand votre atelier est à La Rochelle ?", a: "Notre atelier reste à Villedoux, près de La Rochelle, où la confection s'effectue. Pour Monaco, nous organisons les déplacements de l'équipe en deux temps : une visite de prise de cotes en début de projet, puis l'intervention de pose en fin de chantier. L'hébergement et la logistique sont inclus dans le devis. Les rouleaux arrivent prêts à poser, calepinés au millimètre, ce qui réduit la durée d'intervention sur place à 2 à 6 jours selon la surface." },
  { q: "Vous déplacez-vous pour les visites de prise de cotes ?", a: "Oui, systématiquement. Aucun projet Monaco n'est chiffré sans visite préalable. Les configurations d'appartements en Principauté présentent trop de spécificités : niveaux multiples, courbes douces, intégration aux boiseries existantes, contraintes acoustiques. La visite dure une demi-journée à une journée selon la surface, frais inclus dans le devis si le chantier est confirmé." },
  { q: "Travaillez-vous en site occupé dans les suites d'hôtel ?", a: "Oui, c'est même fréquent sur les palaces. Le travail s'organise par tranches : une suite ou deux suites par jour, plages horaires négociées avec la direction technique de l'hôtel, ascenseurs de service réservés, évacuation des chutes à chaque fin de journée. Aucune gêne pour la clientèle des suites voisines, c'est la condition non négociable d'un chantier hôtelier réussi." },
  { q: "Quels délais pour un tapis sur mesure Axminster ?", a: "Compter 8 à 12 semaines de délai usine pour un Axminster custom, motif à valider en amont sur cartouche couleur. Pour un Wilton tissé, 4 à 8 semaines. Pour un tapis Savonnerie reconstitué, 10 à 16 semaines selon complexité. Ces délais s'ajoutent à la confection atelier et à la pose. Un projet complet appartement Carré d'Or se planifie sur 4 à 6 mois entre signature et livraison, plus si le motif Axminster nécessite plusieurs allers-retours d'épreuves." },
  { q: "Signez-vous un accord de confidentialité (NDA) ?", a: "Oui, sans difficulté. La discrétion est la règle par défaut sur tous nos chantiers Monaco. Nous signons le NDA fourni par le client, son avocat ou son family office. Aucune photo n'est diffusée sans accord écrit, aucun nom n'est communiqué, aucune référence n'est utilisée dans nos communications. Notre équipe est formée à la confidentialité." },
  { q: "Comment se gère la livraison des matériaux à Monaco ?", a: "La Principauté impose des règles de circulation et de stationnement strictes pour les camions. Nos livraisons sont organisées en concertation avec la conciergerie de l'immeuble ou la direction technique de l'hôtel : créneau précis, ascenseur de service réservé, protection des sols et parois communes. Les rouleaux sont stockés sur le chantier ou dans un dépôt sécurisé sur place si l'appartement n'est pas encore disponible." },
  { q: "Travaillez-vous avec les architectes d'intérieur locaux ?", a: "Oui, régulièrement. Nous nous intégrons aux équipes de maîtrise d'œuvre déjà constituées, avec l'architecte d'intérieur en interlocuteur principal pour les choix matières et le calepinage. Les échantillons sont envoyés directement à son agence pour validation sous l'éclairage de référence du projet. Nous fournissons les fiches techniques, les PV feu et la traçabilité matière nécessaires aux dossiers de chantier premium." },
]

export default function SolsMonacoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/sols-monaco#service',
        name: "Sols et moquette d'exception à Monaco",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'Monaco' },
          { '@type': 'City', name: 'Monaco' },
          { '@type': 'City', name: 'Beausoleil' },
          { '@type': 'City', name: 'Roquebrune-Cap-Martin' },
          { '@type': 'City', name: "Cap-d'Ail" },
        ],
        serviceType: "Pose de moquette, tapis sur mesure et revêtements de sol haut de gamme en Principauté de Monaco",
        description: "Conception, confection atelier et pose de moquette, tapis sur mesure et sols haut de gamme pour appartements premium, suites de palace, yachts et bureaux à Monaco.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Sols Monaco', item: 'https://cbsols.fr/sols-monaco' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="monaco" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sols Monaco</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Sols d&apos;exception<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>à Monaco.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Travail de précision et finitions très haut de gamme. Atelier basé à La Rochelle, déplacement organisé pour les projets premium en Principauté : appartements Carré d&apos;Or, suites de palace, yachts du Port Hercule, bureaux d&apos;affaires.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=sols-monaco" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            {/* TODO photo : appartement Carré d'Or ou suite Hôtel de Paris */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Un chantier Monaco demande une préparation impeccable et une exécution sans à-peu-près. C&apos;est exactement le terrain où notre savoir-faire prend tout son sens. »
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
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même exigence de finition.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet en Principauté ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite confidentielle, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec votre architecte d&apos;intérieur, votre family office ou la direction technique de votre établissement. NDA signé sur demande avant déplacement.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=sols-monaco-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche du sur-mesure premium */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre approche du sur-mesure premium</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Une méthode pensée pour la Principauté, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du premier appel à la livraison.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Préparation amont</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Visite à Monaco organisée sous 1 à 2 semaines après contact. Prise de cotes au laser pour les grandes surfaces, calque papier kraft pour les zones courbes ou les seuils complexes. Repérage des contraintes d&apos;accès immeuble, photos de référence des boiseries existantes pour coordonner les coloris.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Choix matière</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Showroom Villedoux ou échantillons envoyés directement à Monaco, chez l&apos;architecte d&apos;intérieur, ou sur le yacht. Validation finale sous l&apos;éclairage du lieu, jamais en salle d&apos;expo : la lumière de la Côte d&apos;Azur transforme les coloris, surtout les laines à reflet soyeux.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Confection atelier La Rochelle</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>3 à 10 semaines selon gamme : Axminster custom, Wilton, soie, laine vierge. Pré-assemblage à blanc en atelier pour valider l&apos;ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale en 2 à 6 jours seulement à Monaco, où chaque journée d&apos;intervention coûte cher en logistique.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Livraison et pose à Monaco</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur les disponibilités du client ou la fenêtre de chantier. Coordination avec la conciergerie de l&apos;immeuble ou la direction technique. Nettoyage complet à la livraison, finitions vérifiées avec l&apos;architecte ou le maître d&apos;ouvrage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quatre exigences spécifiques aux chantiers Monaco */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Monaco</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Quatre exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>spécifiques aux chantiers Monaco.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir en Principauté n&apos;est pas un chantier standard transposé. Voici les quatre points sur lesquels nous structurons notre méthode dès la première visite.
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

      {/* CTA inline #2 - citation */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Quand on monte un projet à Monaco, on prépare tout en atelier : calques, raccords motif, finitions de seuil. La pose sur place doit être un geste précis, pas une improvisation. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, 27 ans de savoir-faire</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=sols-monaco-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>NDA signé sur demande</span>
            </div>
          </div>
        </div>
      </section>

      {/* Matériaux et savoir-faire pour Monaco */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et savoir-faire pour Monaco</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les gammes que nous mobilisons <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour la Principauté.</em>
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

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à la Principauté.</em>
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

      {/* Quartiers / lieux où nous intervenons */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quartiers et lieux où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Toute la Principauté, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>et ses communes limitrophes.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se mobilise sur l&apos;ensemble de la Principauté ainsi que sur les communes limitrophes côté France, là où se concentrent les projets premium de la Côte d&apos;Azur.
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

      {/* CTA inline #3 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en réflexion ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Échange confidentiel, sans engagement.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Un appel de 20 minutes suffit pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier Monaco.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=sols-monaco-cta3" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Sols Monaco, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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

      <RelatedCards
        sectionSubtitle="Notre savoir-faire couvre d'autres univers susceptibles de vous interesser. Prenez le temps de parcourir, posez vos questions, nous y repondrons."
        items={[
          { href: "/revetement-sol-biarritz", title: "Revetement sol Biarritz", teaser: "Villas de la Cote basque. Sols qui resistent au sel, au sable et a la lumiere de l'ocean.", icon: MapPin },
          { href: "/moquette-yacht", title: "Moquette de yacht", teaser: "Sols de yachts sur mesure : laines marines, gomme, pose nocturne au port. Une exigence sans compromis.", icon: Waves },
          { href: "/moquette-jet-prive", title: "Moquette de jet prive", teaser: "Sols d'avions d'affaires : certifications aeronautiques, laines techniques, finition haute couture.", icon: Sparkles },
          { href: "/moquette-chateau", title: "Moquette de chateau", teaser: "Salles de reception, escaliers monumentaux, chambres d'hotes. Une laine qui se garde un demi-siecle.", icon: Castle },
          { href: "/architectes", title: "Pour les architectes", teaser: "Documentation matiere, echantillons annotes, devis detailles. Notre role, c'est de servir votre vision.", icon: Building2 },
          { href: "/showroom", title: "Showroom Villedoux", teaser: "Venez voir et toucher les matieres. Sur rendez-vous, a Villedoux pres de La Rochelle.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gerant vous repond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet Monaco <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en mains expertes.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite confidentielle en Principauté. Devis détaillé, finitions premium, discrétion garantie. 27 ans de savoir-faire au service des projets d&apos;exception.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sols-monaco-final" variant="primary" size="md">Demander un devis</Button>
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
