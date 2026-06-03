import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Saint-Émilion | Châteaux Viticoles Gironde | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure pour châteaux viticoles de Saint-Émilion et grands crus du Libournais. Caveaux de réception, salles de dégustation, suites privées. CB Sols, 27 ans d'expérience.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-saint-emilion' },
  keywords: ['revêtement sol Saint-Émilion', 'moquette château viticole', 'sol PVC chai dégustation', 'tapis sur mesure Libournais', 'artisan sol Gironde'],
  openGraph: {
    title: "Revêtement de sol Saint-Émilion, le sol des grands crus",
    description: "Moquette, sol PVC et tapis sur mesure pour châteaux viticoles de Saint-Émilion et du Libournais. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-saint-emilion.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Caveaux de réception et de dégustation", desc: "Les châteaux viticoles classés grands crus accueillent une clientèle internationale exigeante : courtiers, journalistes spécialisés, clients privés, journalistes œnotouristiques. Le caveau de dégustation est leur première impression. Moquette laine acoustique pour absorber les conversations, sol PVC effet pierre pour les zones de circulation, tapis sur mesure dans les salons d'accueil." },
  { title: "Salles à manger de domaine et tables d'hôtes", desc: "Les déjeuners de propriété, les dîners de gala et les tables d'hôtes œnotouristiques sont au cœur de l'expérience grand cru. Moquette laine sur thibaude feutre pour l'acoustique, tapis sur mesure sous la table d'apparat, finitions coordonnées aux boiseries du château. Pose calée en intersaison pour ne pas perturber le calendrier viticole." },
  { title: "Suites d'hôtes et chambres en château viticole", desc: "L'œnotourisme premium se développe avec exigence. Suites Relais & Châteaux, chambres d'hôtes haut de gamme dans les propriétés familiales, gîtes de vendanges premium. Moquette laine vierge pour les chambres, sol PVC effet bois pour les salles de bains, tapis sur mesure dans les salons privatifs. Finitions soignées qui posent immédiatement le ton." },
  { title: "Bureaux de propriété et boutiques de vente directe", desc: "Le bureau du propriétaire, la salle de réunion du conseil de famille, la boutique de vente directe au domaine. Sols PVC acoustiques pour les espaces de travail, moquette dalles pour les zones tertiaires, finitions coordonnées au mobilier souvent ancien. Coordination avec l'architecte d'intérieur du domaine quand il en existe un." },
]

const exigences = [
  { title: "Calendrier viticole, calendrier roi", desc: "Le calendrier viticole dicte tout. Vendanges en septembre-octobre, vinification jusqu'en décembre, assemblage en hiver, primeurs en avril, embouteillage en été. Toute intervention sur un château doit s'inscrire dans une fenêtre de calme, généralement entre janvier et mars ou en juillet-août selon le domaine. Nous calons notre planning très en amont avec le maître de chai ou le régisseur." },
  { title: "Respect du bâti patrimonial", desc: "Les châteaux viticoles du Libournais conjuguent souvent un corps principal ancien (XVIIe ou XVIIIe pour les domaines historiques) et des extensions plus récentes (chais modernes signés d'architectes contemporains). Notre intervention respecte cette double nature : conservation du caractère patrimonial des salles d'apparat, modernité assumée dans les espaces œnotouristiques contemporains." },
  { title: "Accueil œnotouristique premium", desc: "La clientèle œnotouristique d'un grand cru attend une expérience cohérente, où chaque détail compte : qualité du verre, lumière du caveau, acoustique du salon, sol sous les pas. Nos préconisations s'inscrivent dans cette logique d'expérience totale, en coordination avec le directeur œnotouristique ou la directrice de la communication du domaine." },
  { title: "Acoustique des salles de dégustation", desc: "Une dégustation se passe à voix mesurée, avec des phrases techniques précises. La réverbération d'une salle nue gêne l'échange, fatigue les voix, dilue le propos. Une moquette laine sur thibaude feutre, ou un tapis sur mesure de bonne épaisseur, transforment l'acoustique d'une salle de dégustation et la rendent immédiatement plus confortable pour la conversation experte." },
  { title: "Réversibilité dans les pièces patrimoniales", desc: "Les salles d'apparat des grands crus présentent souvent des parquets anciens, des tomettes anciennes, des dalles de pierre d'origine. Nous proposons systématiquement des solutions réversibles pour ces pièces : tapis sur mesure plutôt que moquette collée, dalles textiles plombantes plutôt que collées, sous-couches non agressives. Le bâti patrimonial reste intouché." },
  { title: "Coordination architectes et maîtres d'œuvre", desc: "Les chantiers de grands crus impliquent souvent un architecte d'intérieur parisien ou bordelais, un maître d'œuvre local, parfois un designer ou un scénographe pour les espaces œnotouristiques. Nous intégrons cette chaîne et fournissons toute la documentation technique nécessaire : fiches matière, PV feu, certificats d'origine, traçabilité, échantillons à valider sous l'éclairage du caveau." },
]

const materiaux = [
  { name: "Moquette laine vierge Wilton et Axminster custom", desc: "Pour les salons de réception, salles à manger de propriété et suites d'hôtes Relais & Châteaux. Tissage haut de gamme britannique, motifs sur mesure jusqu'à 36 couleurs (possibilité d'intégrer le motif du blason familial ou l'identité graphique du domaine). Délai usine 8 à 12 semaines pour Axminster custom, 4 à 8 semaines pour Wilton." },
  { name: "Moquette EGE Hospitality classement Bfl-s1", desc: "Pour les caveaux de réception, salles de dégustation et bureaux de propriété recevant du public. Traitement ignifuge en cœur de fibre, classement Bfl-s1 conforme ERP, large palette de coloris coordonnables à la signalétique et au mobilier du domaine. Tient les rythmes de saison haute (avril primeurs, septembre-octobre vendanges) sans perte de tenue." },
  { name: "Sols PVC Tarkett iQ Granit Acoustic et Forbo Coral", desc: "Pour les zones de circulation des caveaux, les entrées de chais œnotouristiques et les espaces tertiaires du domaine. Performance acoustique haut de gamme (jusqu'à 19 dB d'isolation), aspect uni mat ou effet pierre, entretien simple compatible passage intensif. Pose en lés soudés à chaud, finition continue." },
  { name: "Tapis sur mesure Hereke et Aubusson reconstitués", desc: "Pour les salons d'apparat et les bibliothèques de château. Reproduction de motifs historiques en laine vierge, bordure cousue main, dimensions calées au centimètre sur la pièce. Possibilité d'intégrer un motif viticole discret (feuille de vigne, grappe stylisée) en coordination avec l'identité du domaine. Délai 10 à 16 semaines." },
  { name: "Sols Bolon tissé vinyle haut de gamme", desc: "Pour les espaces œnotouristiques contemporains, les boutiques de vente directe, les chais modernes ouverts au public. Tissage vinyle suédois, palette de coloris naturels coordonnables à la pierre et au bois du domaine, résistance exceptionnelle à l'usage soutenu, vieillissement noble sur 20 ans." },
  { name: "Profilés laiton brossé et bronze patiné Romus", desc: "Pour les seuils, raccords entre essences et nez de marche. Coordination avec la quincaillerie d'origine du château, les ferrures bronze des portes d'apparat et les boiseries cirées. Possibilité de profilés sur mesure gravés avec le millésime ou l'initiale du domaine pour les chantiers à exigence patrimoniale particulière." },
]

const marques = [
  { name: "EGE Hospitality", desc: "Manufacture danoise référence de l'hôtellerie premium. Classement Bfl-s1 conforme ERP, gammes Highline et Hospitality utilisées en grands crus et Relais & Châteaux." },
  { name: "Brintons", desc: "Axminster britannique haut de gamme, motifs sur mesure jusqu'à 36 couleurs. Possibilité d'intégrer le blason ou l'identité graphique du domaine." },
  { name: "Tisca Tiara", desc: "Manufacture suisse de moquette laine de très haut de gamme. Référence des suites de palace et des chambres d'hôtes Relais & Châteaux." },
  { name: "Tarkett iQ Granit Acoustic", desc: "Sol PVC professionnel à hautes performances acoustiques (jusqu'à 19 dB). Idéal caveaux de dégustation et salons d'accueil." },
  { name: "Forbo", desc: "Linoléum Marmoleum naturel et sols Coral d'entrée. Solutions sanitaires éprouvées pour zones œnotouristiques à fort trafic." },
  { name: "Bolon", desc: "Tissé vinyle suédois, esthétique contemporaine adaptée aux chais modernes et boutiques de vente directe œnotouristique." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design contemporain. Pour les bureaux de propriété et salles de réunion du conseil de famille." },
  { name: "Hereke", desc: "Tapis turcs d'apparat, tissage main, soie ou laine vierge fine. Pour les bibliothèques et salons d'apparat des châteaux historiques." },
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
  { q: "Comment se passe une intervention dans un château viticole de Saint-Émilion ?", a: "Notre atelier de Villedoux, près de La Rochelle, est à environ 2h15 de Saint-Émilion par l'autoroute. C'est une distance raisonnable que nous gérons en deux temps : une visite de prise de cotes en début de projet, puis une intervention de pose calée sur le calendrier viticole du domaine. L'hébergement et la logistique sont inclus dans le devis. La fenêtre idéale d'intervention est généralement entre janvier et mars (après les fêtes, avant les primeurs d'avril), ou en juillet-août selon le rythme du domaine. Nous calons systématiquement notre planning en coordination étroite avec le régisseur ou le maître de chai, pour ne pas interférer avec la vie viticole du château." },
  { q: "Pourquoi le calendrier viticole est-il déterminant pour vos chantiers ?", a: "Un château viticole vit au rythme des vignes, pas au rythme du calendrier civil. Les vendanges en septembre-octobre mobilisent toute la propriété et rendent toute intervention impossible. La vinification, jusqu'en décembre, occupe les chais et les équipes. Les primeurs en avril remplissent les caveaux de courtiers et de journalistes du monde entier. L'embouteillage en été mobilise les chais. Les fenêtres réellement disponibles pour un chantier de revêtement de sol sont donc étroites, généralement de janvier à mars, et parfois de juillet à août. Valentin Prévoteau et son équipe planifient toujours très en amont, parfois 6 à 12 mois avant l'intervention, pour caler une fenêtre sereine pour le domaine." },
  { q: "Travaillez-vous sur les Premiers Grands Crus Classés A ?", a: "Oui, et c'est un terrain où notre savoir-faire prend tout son sens. Cheval Blanc, Ausone, Pavie, Angélus et les autres Premiers Grands Crus Classés A imposent des exigences absolues, comparables à celles de nos chantiers de Monaco ou des châteaux historiques que nous avons couverts ailleurs en France. Discrétion totale, NDA signé sur demande, finitions millimétrées, coordination avec un architecte d'intérieur souvent parisien ou international. Notre 27 ans de savoir-faire nous permet d'intervenir sur ces domaines avec la sérénité nécessaire et la documentation technique exigée par ce niveau de prestige." },
  { q: "Pouvez-vous intégrer le blason ou le motif identitaire du domaine ?", a: "Oui, c'est même un de nos terrains de prédilection. Une moquette Axminster custom permet jusqu'à 36 couleurs dans un même motif, ce qui suffit largement pour reproduire un blason familial, une feuille de vigne stylisée, une grappe d'identité ou un monogramme. Le motif est validé en amont sur cartouche couleur, avec parfois une à deux épreuves intermédiaires pour ajuster les teintes. Pour les tapis sur mesure Aubusson ou Hereke, le motif est tissé main et offre une finesse d'exécution supérieure encore, à condition d'accepter le délai de 10 à 16 semaines de tissage." },
  { q: "Quels matériaux pour un caveau de dégustation ?", a: "Un caveau de dégustation accueille du public et impose donc un classement feu (Bfl-s1 au minimum) pour les revêtements collés au sol. Notre préconisation type combine une moquette laine ignifugée EGE Hospitality dans la zone de dégustation pour l'acoustique et le confort de marche, et un sol PVC Tarkett iQ Granit Acoustic ou Forbo Coral dans les zones de circulation et d'entrée pour la résistance au piétinement et l'entretien simple. Cette combinaison offre l'expérience œnotouristique attendue tout en garantissant la conformité ERP et la durabilité sur le long terme. Les fiches matière et PV feu sont fournis au maître d'ouvrage pour le dossier de sécurité." },
  { q: "Travaillez-vous avec les architectes d'intérieur des grands crus ?", a: "Oui, régulièrement. Les grands crus de Saint-Émilion et du Libournais travaillent souvent avec des architectes d'intérieur parisiens ou bordelais réputés, parfois avec des designers internationaux pour les espaces œnotouristiques contemporains. Nous intervenons en sous-traitance de leur prescription, avec l'architecte comme interlocuteur principal pour les choix matières et le calepinage. Les échantillons sont envoyés directement à son agence pour validation. Nous fournissons toute la documentation technique nécessaire : fiches matière, PV feu, certificats d'origine, traçabilité, attestations de classement Bfl-s1, schémas de pose et coupes techniques." },
  { q: "Quelle durabilité attendre dans un château viticole ?", a: "Bien choisis et bien posés, les revêtements de sol d'un château viticole tiennent largement 15 à 20 ans. Une moquette laine Wilton dans une salle à manger d'apparat à usage modéré dure facilement 20 ans en se patinant. Un sol PVC Tarkett iQ Granit Acoustic dans un caveau de dégustation à fort passage tient 15 ans avec un entretien professionnel annuel. Un tapis sur mesure Hereke dans un salon d'apparat se transmet de génération en génération, comme les vins du domaine. Le secret est de choisir la bonne matière pour le bon usage : la laine pour le confort des pièces de réception, le PVC ou le Bolon pour la résistance des zones de circulation, le tapis sur mesure pour signer l'identité d'une pièce d'exception." },
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
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol Saint-Émilion', item: 'https://cbsols.fr/revetement-sol-saint-emilion' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Saint-Émilion</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol Saint-Émilion,<br />
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
                « Travailler dans un grand cru, c&apos;est entrer dans une maison où chaque détail compte, du verre à la lumière du caveau. Le sol doit être à la hauteur. C&apos;est exactement ce que je fais depuis 27 ans. »
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
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, 27 ans de savoir-faire</div>
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
            Revêtement sol Saint-Émilion, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre les châteaux, les hôtels particuliers et tous les projets d&apos;exception, en Gironde et au-delà.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette château →</Link>
            <Link href="/revetement-sol-bordeaux" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Bordeaux →</Link>
            <Link href="/revetement-sol-cap-ferret" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Cap Ferret →</Link>
            <Link href="/sols-monaco" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sols Monaco →</Link>
            <Link href="/ile-de-re" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Île de Ré →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

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
