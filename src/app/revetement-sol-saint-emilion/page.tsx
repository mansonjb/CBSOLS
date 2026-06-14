import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { Building2, Castle, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revêtement de Sol Saint-Émilion | Châteaux Viticoles Gironde",
  description: "Pose de moquette, sol PVC et tapis sur mesure pour châteaux viticoles de Saint-Émilion et grands crus du Libournais. Caveaux de réception, salles de dégustation, suites privées. CB Sols, 27 ans d'expérience.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-saint-emilion' },
  keywords: ['revêtement sol Saint-Émilion', 'moquette château viticole', 'sol PVC chai dégustation', 'tapis sur mesure Libournais', 'artisan sol Gironde'],
  openGraph: {
    title: "Revêtement de sol à Saint-Émilion, le sol des grands crus",
    description: "Moquette, sol PVC et tapis sur mesure pour châteaux viticoles à Saint-Émilion et dans le Libournais. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-saint-emilion.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Caveaux de réception et de dégustation", desc: "Votre caveau est la première impression que vous donnez à un courtier ou un client privé. Moquette laine pour absorber les conversations. PVC effet pierre dans les circulations. Tapis sur mesure dans le salon d'accueil." },
  { title: "Salles à manger de domaine", desc: "Vous recevez à la table de la propriété. On pose une moquette laine sur thibaude feutre pour l'acoustique. Un tapis sur mesure sous la table d'apparat. On vient en intersaison, jamais pendant les vendanges." },
  { title: "Suites d'hôtes en château viticole", desc: "Vous accueillez vos visiteurs en chambres d'hôtes premium. Moquette laine dans les chambres, PVC effet bois côté salle de bains, tapis sur mesure dans le salon privatif. Le ton se pose dès qu'on ouvre la porte." },
  { title: "Bureaux et boutiques de vente directe", desc: "Vous tenez un bureau de propriétaire et une boutique au domaine. PVC acoustique pour travailler tranquille, dalles moquette ailleurs. On accorde la palette au mobilier ancien que vous avez déjà." },
]

const exigences = [
  { title: "On respecte le calendrier des vendanges", desc: "Septembre-octobre : interdiction de gêner les vendanges. L'hiver et le plein été sont les bonnes fenêtres pour intervenir. On cale tout très en amont avec le maître de chai. Vous ne perdez pas une journée de production." },
  { title: "Les tomettes anciennes, on les garde", desc: "Beaucoup de châteaux ont leurs tomettes ou leurs dalles d'origine dans les salles d'apparat. On préfère un beau tapis sur mesure, posé en réversible, plutôt qu'une moquette collée. Si vous changez d'envie un jour, le sol historique est intact." },
  { title: "Acoustique pour les dégustations", desc: "Une dégustation se passe à voix mesurée, avec des termes précis. Une salle nue résonne, ça fatigue les invités et ça dilue le propos. Une moquette laine ou un grand tapis sur sous-couche feutre transforment l'écoute. La conversation gagne en finesse." },
  { title: "L'accueil œnotouristique, un détail compte", desc: "Vos visiteurs payent pour une expérience complète : verre, lumière, sol sous les pieds. Un caveau soigné sous les semelles raconte la même chose que le grand vin dans le verre. On accorde la matière au discours du domaine. Tout fait sens." },
  { title: "Coordination avec architecte et régisseur", desc: "Sur un grand cru, il y a souvent un architecte parisien et un régisseur sur place. On s'intègre à cette équipe, on fournit les fiches techniques et les attestations, on envoie des échantillons à valider sous l'éclairage du chai. Vous gardez la main, on suit." },
  { title: "On vient depuis La Rochelle, vite", desc: "Le Libournais est à deux heures de notre atelier. On y monte régulièrement, on connaît les routes du Saint-Émilionnais. Vous appelez, on passe mesurer dans la semaine. Pas de surcoût caché pour le déplacement, pas d'intermédiaire." },
]

const materiaux = [
  { name: "Moquette laine vierge Wilton et Axminster custom", desc: "Notre matière reine pour les salons de réception et les suites d'hôtes Relais & Châteaux. L'Axminster britannique permet jusqu'à trente-six couleurs dans un même motif. On peut donc intégrer votre blason familial ou un dessin maison. Compter huit à douze semaines en custom, quatre à huit semaines pour un Wilton classique." },
  { name: "Moquette EGE Hospitality classement Bfl-s1", desc: "Pour un caveau de dégustation ou une salle qui reçoit du public, il faut une moquette qui passe la sécurité incendie. EGE Hospitality est ignifugée en cœur de fibre, donc classée Bfl-s1. Choix de couleurs large pour s'aligner sur votre signalétique. Et elle tient les rythmes des primeurs en avril et des vendanges en septembre." },
  { name: "Sols PVC Tarkett iQ Granit Acoustic et Forbo Coral", desc: "Pour les circulations de caveau et les entrées de chais ouverts au public, on part sur du PVC professionnel. L'isolation acoustique va jusqu'à dix-neuf décibels. Aspect uni mat ou effet pierre, on s'accorde à votre architecture. On soude les lés à chaud, la finition est continue, l'entretien se fait en cinq minutes." },
  { name: "Tapis sur mesure Hereke et Aubusson reconstitués", desc: "Pour un salon d'apparat ou une bibliothèque de château, le tapis sur mesure fait le travail. On reproduit un motif historique en laine vierge, bordure cousue main, dimensions au centimètre près. On peut glisser un détail viticole discret, une feuille de vigne ou une grappe stylisée. Compter dix à seize semaines de tissage." },
  { name: "Sols Bolon tissé vinyle haut de gamme", desc: "Pour les espaces œnotouristiques contemporains et les boutiques de vente directe, le Bolon coche toutes les cases. Les coloris naturels s'accordent avec la pierre et le bois du domaine. Le tissage vinyle suédois encaisse l'usage intensif. Et le sol vieillit noblement sur vingt ans, sans jamais marquer." },
  { name: "Profilés laiton brossé et bronze patiné Romus", desc: "Les seuils et les nez de marche, on les soigne. On coordonne avec la quincaillerie d'origine du château et les ferrures bronze des portes d'apparat. Sur les chantiers patrimoniaux particuliers, on peut faire graver le millésime ou l'initiale du domaine sur le profilé. C'est ce genre de détail qui marque." },
]

const marques = [
  { name: "EGE Hospitality", desc: "Le danois, c'est notre référence pour les grands crus et les Relais & Châteaux. Leurs gammes Highline et Hospitality passent la sécurité incendie sans difficulté, et elles posent un cadre immédiatement." },
  { name: "Brintons", desc: "L'Axminster britannique, l'aristocratie de la moquette. Jusqu'à trente-six couleurs sur un motif. Quand vous voulez intégrer un blason ou un dessin maison dans la trame, on appelle Brintons." },
  { name: "Tisca Tiara", desc: "Le suisse, c'est le très haut de gamme. On les sort pour les suites de palace et les chambres d'hôtes Relais & Châteaux. Quand le budget suit, le résultat est sans équivalent." },
  { name: "Tarkett iQ Granit Acoustic", desc: "Le PVC professionnel par excellence, avec une isolation acoustique jusqu'à dix-neuf décibels. Notre standard pour les caveaux de dégustation et les salons d'accueil qui demandent du calme." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Les Coral sont parfaits pour les entrées œnotouristiques à fort trafic." },
  { name: "Bolon", desc: "Le suédois du tissé vinyle. Esthétique contemporaine que l'on retrouve dans les chais modernes et les boutiques de vente directe. Compter facilement vingt ans de tenue." },
  { name: "Object Carpet", desc: "Les allemands, pour les bureaux de propriété et les salles du conseil de famille. Design contemporain, finitions parfaites. Quand vous voulez sortir des codes classiques." },
  { name: "Hereke", desc: "Les tapis turcs tissés main, en soie ou en laine vierge fine. On les pose dans les bibliothèques et les salons d'apparat des châteaux historiques. C'est le genre d'objet qui se transmet." },
]

const quartiers = [
  { nom: "Saint-Émilion village", detail: "Cité médiévale classée UNESCO. Châteaux du cœur de l'appellation, boutiques de vente directe, hôtels et restaurants gastronomiques." },
  { nom: "Premiers Grands Crus Classés A", detail: "Cheval Blanc, Ausone, Pavie, Angélus. Domaines emblématiques aux exigences absolues. Caveaux de réception et suites d'hôtes." },
  { nom: "Pomerol", detail: "Appellation voisine, domaines de très haute renommée. Châteaux familiaux, salles de dégustation, bureaux de propriété." },
  { nom: "Lalande-de-Pomerol", detail: "Appellation satellite de Pomerol. Propriétés familiales en pleine valorisation œnotouristique." },
  { nom: "Castillon-la-Bataille", detail: "Côtes-de-Castillon, appellation montante. Domaines familiaux et propriétés en restructuration œnotouristique." },
  { nom: "Saint-Christophe-des-Bardes", detail: "Commune satellite de Saint-Émilion. Châteaux familiaux, propriétés discrètes du grand cru." },
  { nom: "Saint-Étienne-de-Lisse", detail: "Commune de l'appellation Saint-Émilion. Domaines familiaux, propriétés patrimoniales classées." },
  { nom: "Saint-Hippolyte", detail: "Commune historique de l'appellation. Châteaux familiaux et domaines patrimoniaux du grand cru." },
  { nom: "Vignonet", detail: "Commune de la plaine de l'appellation. Domaines familiaux, propriétés viticoles classées grand cru." },
  { nom: "Libourne", detail: "Sous-préfecture, centre administratif du Libournais. Bureaux et sièges sociaux des grandes maisons de négoce." },
  { nom: "Fronsac", detail: "Appellation voisine, en pleine valorisation. Domaines familiaux et propriétés à fort potentiel œnotouristique." },
  { nom: "Côtes-de-Bourg", detail: "Appellation au nord du Libournais. Domaines familiaux et propriétés en développement œnotouristique premium." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : nature du projet (caveau, salle de dégustation, suites, bureaux), surface estimée, calendrier viticole du domaine, fenêtre d'intervention possible. Contact direct avec le régisseur ou la directrice œnotouristique du château." },
  { step: 'Visite au domaine', desc: "Déplacement organisé sous 2 à 3 semaines, calé sur le calendrier viticole. Prise de cotes au laser, repérage des contraintes patrimoniales et œnotouristiques, photos des boiseries et matières existantes, échange avec le régisseur sur les fenêtres d'intervention possibles." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement au château, à la directrice œnotouristique ou à l'architecte d'intérieur. Validation finale sous l'éclairage du caveau ou de la salle de réception, jamais en salle d'expo. La lumière des caveaux transforme les coloris." },
  { step: 'Confection atelier La Rochelle', desc: "3 à 16 semaines selon gamme : Axminster custom (blason intégré possible), Wilton, laine vierge, PVC découpé, tapis sur mesure Hereke. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. La préparation amont est essentielle pour tenir une pose finale en 2 à 5 jours au domaine." },
  { step: 'Pose au château', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur la fenêtre viticole. Coordination avec le régisseur, le maître de chai et la directrice œnotouristique. Nettoyage complet, finitions vérifiées avec le maître d'ouvrage ou son architecte." },
]

const faq = [
  { q: "Vous venez vraiment à Saint-Émilion depuis La Rochelle ?", a: "Oui, c'est dans nos cordes. Saint-Émilion est à 2h15 par l'autoroute. On vient mesurer une première fois, puis on revient poser. L'hébergement est inclus dans le devis. On cale les interventions sur le calendrier viticole du domaine, pas sur le nôtre. La fenêtre idéale, c'est janvier à mars, parfois juillet-août. On planifie avec votre régisseur, jamais à l'aveugle." },
  { q: "Pourquoi le calendrier viticole change-t-il tout ?", a: "Un château vit au rythme des vignes. En septembre-octobre, les vendanges mobilisent tout le monde, impossible de poser. La vinification occupe les chais jusqu'en décembre. En avril, les primeurs amènent les courtiers et les journalistes du monde entier. L'embouteillage prend l'été. Les vraies fenêtres sont étroites. On planifie six à douze mois à l'avance pour caler une période sereine pour vous." },
  { q: "Vous travaillez sur les Premiers Grands Crus Classés A ?", a: "Oui, et c'est là que nos vingt-sept ans de métier prennent tout leur sens. Cheval Blanc, Ausone, Pavie, Angélus, ce niveau de prestige impose des exigences absolues. Discrétion totale, NDA si vous le demandez, finitions millimétrées, coordination avec votre architecte d'intérieur parisien ou international. On a la documentation et la méthode pour rentrer dans ces dossiers sans accroc." },
  { q: "Vous pouvez intégrer le blason du domaine dans la moquette ?", a: "Oui, c'est même un terrain qu'on adore. Une Axminster custom permet jusqu'à trente-six couleurs sur un même motif. C'est largement assez pour reproduire un blason, une feuille de vigne stylisée ou un monogramme. On valide le motif sur cartouche, parfois avec une ou deux épreuves intermédiaires pour ajuster les teintes. Sur un tapis Aubusson tissé main, la finesse est encore supérieure, avec dix à seize semaines de tissage." },
  { q: "Quels matériaux pour un caveau de dégustation ?", a: "Un caveau accueille du public, donc il faut du classé Bfl-s1 minimum. Notre combinaison type, c'est une moquette laine ignifugée EGE Hospitality dans la zone de dégustation pour l'acoustique et le confort. Et un sol PVC Tarkett ou Forbo Coral dans les circulations pour la résistance et l'entretien rapide. Vous avez l'expérience œnotouristique, et le dossier de sécurité est carré." },
  { q: "Vous travaillez avec les architectes d'intérieur des grands crus ?", a: "Régulièrement. Les grands crus travaillent souvent avec des cabinets parisiens ou bordelais réputés, parfois des designers internationaux pour les espaces contemporains. On intervient en sous-traitance de leur prescription, l'architecte reste l'interlocuteur principal. On envoie les échantillons à son agence pour validation, et on fournit toute la documentation technique : fiches matière, PV feu, traçabilité, schémas de pose." },
  { q: "Combien de temps tient un sol dans un château viticole ?", a: "Quinze à vingt ans facilement, bien choisis et bien posés. Une Wilton laine dans une salle à manger d'apparat à usage modéré tient vingt ans en se patinant. Un PVC Tarkett dans un caveau à fort passage tient quinze ans avec un nettoyage pro annuel. Un tapis Hereke dans un salon, ça se transmet de génération en génération, comme vos vins. Le secret c'est de mettre la bonne matière au bon endroit." },
]

export default function RevetementSolSaintEmilionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-saint-emilion#service',
        name: "Revêtement de sol à Saint-Émilion et dans le Libournais",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Saint-Émilion' },
          { '@type': 'City', name: 'Libourne' },
          { '@type': 'City', name: 'Pomerol' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure pour châteaux viticoles de Saint-Émilion et du Libournais",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour caveaux de réception, salles de dégustation, suites d'hôtes et bureaux de propriété des châteaux viticoles de Saint-Émilion, Pomerol et du Libournais.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Saint-Émilion', item: 'https://cbsols.fr/revetement-sol-saint-emilion' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="saint-emilion" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Saint-Émilion</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Saint-Émilion,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>le sol des grands crus.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure pour châteaux viticoles de Saint-Émilion, Pomerol et du Libournais. Caveaux de réception, salles de dégustation, suites d&apos;hôtes Relais & Châteaux. Atelier La Rochelle, intervention calée sur le calendrier viticole.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=saint-emilion" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Travailler dans un grand cru, c&apos;est entrer dans une maison où chaque détail compte, du verre à la lumière du caveau. Le sol doit être à la hauteur. C&apos;est exactement ce que CB Sols fait depuis 27 ans. »
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
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même excellence œnotouristique.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet dans un château ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite au domaine, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec votre régisseur, votre directrice œnotouristique ou votre architecte. Visite organisée hors fenêtre vendanges et primeurs, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=saint-emilion-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Saint-Émilion</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux châteaux viticoles.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir dans un grand cru du Libournais ne ressemble à aucun autre chantier. Le calendrier viticole, le patrimoine, l&apos;exigence œnotouristique dictent une méthode spécifique que nous appliquons systématiquement.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et savoir-faire pour les châteaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons en grand cru.</em>
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
              « Dans un grand cru, on accueille des clients du bout du monde qui vont raconter le domaine pendant des années. Le caveau, le salon, le tapis sous la table d&apos;apparat, tout participe de cette première impression. C&apos;est un privilège de poser un sol dans ces maisons. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=saint-emilion-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite calée sur calendrier viticole</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos chantiers grand cru.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Appellations et communes où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Tout le Libournais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Pomerol aux Côtes-de-Bourg.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble du Libournais, des appellations les plus prestigieuses aux propriétés satellites en plein développement œnotouristique premium.
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
            Un appel pour caler la fenêtre viticole.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, identifier la fenêtre d&apos;intervention compatible avec votre calendrier viticole, et un ordre de grandeur budgétaire.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=saint-emilion-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Saint-Émilion.</em>
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
            Revêtement de sol à Saint-Émilion, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Pas de hotline. Conseil clair, ordre de grandeur honnête, planification adaptée à votre calendrier viticole.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionSubtitle="Notre savoir-faire couvre d'autres univers susceptibles de vous interesser. Prenez le temps de parcourir, posez vos questions, nous y repondrons."
        items={[
          { href: "/revetement-sol-bordeaux", title: "Revetement sol Bordeaux", teaser: "Hotels particuliers, lofts d'echoppes, maisons de pierre. Sols qui dialoguent avec l'architecture.", icon: MapPin },
          { href: "/revetement-sol-arcachon", title: "Revetement sol Arcachon", teaser: "Maisons de bassin et villas dunaires. Sols qui supportent le sable, la lumiere et la vie au quotidien.", icon: MapPin },
          { href: "/revetement-sol-cap-ferret", title: "Revetement sol Cap Ferret", teaser: "Cabanes ostreicoles, villas pieds dans le sable. La discretion d'un savoir-faire qui se voit a peine.", icon: Waves },
          { href: "/moquette-chateau", title: "Moquette de chateau", teaser: "Salles de reception, escaliers monumentaux, chambres d'hotes. Une laine qui se garde un demi-siecle.", icon: Castle },
          { href: "/architectes", title: "Pour les architectes", teaser: "Documentation matiere, echantillons annotes, devis detailles. Notre role, c'est de servir votre vision.", icon: Building2 },
          { href: "/particuliers", title: "Pour les particuliers", teaser: "Moquette, sol PVC, tapis sur mesure : notre savoir-faire au service de votre maison.", icon: Home },
          { href: "/showroom", title: "Showroom Villedoux", teaser: "Venez voir et toucher les matieres. Sur rendez-vous, a Villedoux pres de La Rochelle.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gerant vous repond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre château <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite au domaine, calée sur votre calendrier viticole. Devis détaillé, finitions à la hauteur du grand cru, discrétion garantie. 27 ans de savoir-faire au service de Saint-Émilion et du Libournais.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=saint-emilion-final" variant="primary" size="md">Demander un devis</Button>
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
