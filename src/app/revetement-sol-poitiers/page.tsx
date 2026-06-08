import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Poitiers | Laboratoires, Universités, Tertiaire | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Poitiers. Laboratoires universitaires, cabinets médicaux secteur CHU, sièges sociaux, hôtels du Futuroscope, écoles privées. CB Sols, 27 ans de savoir-faire, déplacement régulier depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-poitiers' },
  keywords: ['revêtement sol Poitiers', 'sol PVC laboratoire Poitiers', 'moquette tertiaire Poitiers', 'artisan sol Poitiers', 'sol PVC cabinet médical Poitiers'],
  openGraph: {
    title: "Revêtement de sol à Poitiers, rigueur universitaire",
    description: "Moquette, sol PVC et tapis sur mesure à Poitiers. Laboratoires, CHU, sièges sociaux, hôtels du Futuroscope. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-poitiers.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Laboratoires de recherche universitaires", desc: "Université de Poitiers, CNRS, laboratoires associés au CHU. Sols PVC homogènes résistance chimique P3, classement Bfl-s1, soudure à chaud des lés pour étanchéité parfaite, remontées en plinthes obligatoires. Conformité aux exigences ATEX et zones contrôlées. Pose en horaires décalés pour ne pas perturber les manipulations." },
  { title: "Cabinets médicaux secteur CHU", desc: "Plateau de Saint-Éloi, secteur du CHU de Poitiers, cabinets de spécialistes en zone hospitalière. Sols PVC homogènes antibactériens, classement Bfl-s1, résistance aux produits de désinfection chlorés et alcooliques, remontées en plinthes dans les zones humides. Documentation conformité ARS fournie systématiquement." },
  { title: "Sièges sociaux et plateaux tertiaires", desc: "Pôles tertiaires du centre-ville et de la zone d'activité de Chasseneuil. Dalles moquette acoustique, sols PVC pour open spaces, moquette laine pour bureaux de direction et salles du conseil. Coordination avec services généraux ou facility manager, phasage en horaires décalés possibles." },
  { title: "Hôtels du Futuroscope et centre", desc: "Hôtels d'affaires du Futuroscope, hôtels boutique du centre historique, hôtels-restaurants gastronomiques. Moquette hôtellerie haute densité avec traitement anti-tache, isolation acoustique pour chambres, sols PVC pour zones humides et restaurants. Pose calée sur basse saison pour ne pas perdre de nuitées." },
]

const exigences = [
  { title: "Rigueur technique laboratoires", desc: "Poitiers concentre un pôle universitaire et de recherche important avec laboratoires de chimie, biologie, pharmacie. Les sols doivent répondre à des exigences précises : résistance chimique aux acides et solvants (P3 minimum), classement antistatique pour les salles à équipements sensibles, surface décontaminable, soudure à chaud des lés sans joint apparent. Pas de compromis sur la documentation technique." },
  { title: "Conformité ERP type U et R", desc: "Les établissements de santé (cabinets médicaux secteur CHU, cliniques) relèvent du règlement ERP type U avec classement Bfl-s1 obligatoire et exigences sanitaires fortes. Les écoles privées poitevines relèvent du type R. Nos produits sélectionnés disposent des classements requis, des certifications sanitaires Cradle to Cradle ou A+ COV, des fiches d'entretien adaptées." },
  { title: "Logistique vers la Vienne", desc: "Poitiers se situe à environ 150 km de notre atelier de Villedoux, près de La Rochelle, soit moins de deux heures de route par l'autoroute A10. C'est une zone d'intervention naturelle et régulière, avec passages plusieurs fois par mois pour les chantiers en cours. Visite de prise de cotes organisée sous huitaine, pose programmée selon votre calendrier." },
  { title: "Coordination services techniques universités", desc: "Sur les chantiers universitaires et de recherche, l'interlocuteur est le service patrimoine, le service technique ou le responsable de plateforme. Nous calons les comptes-rendus de chantier, les bons de livraison, les attestations matière et les facturations selon leurs processus, en respectant les contraintes de marché public et de notification." },
  { title: "Phasage en site occupé", desc: "Les CHU, cliniques, écoles et bureaux poitevins fonctionnent rarement à l'arrêt. Les interventions se phasent en horaires décalés, en intersession scolaire ou par rotation de zones. Notre équipe est rodée à ce type de phasage : protection des matériels sensibles, nettoyage intégral à la livraison, restitution opérationnelle à l'heure convenue." },
  { title: "Acoustique des amphithéâtres et open spaces", desc: "Les amphithéâtres universitaires, les salles de cours et les open spaces tertiaires poitevins atteignent souvent des volumes importants avec parois dures. La moquette dalles avec sous-couche acoustique intégrée ou le sol PVC acoustique apportent une chute notable de la réverbération et améliorent le confort de travail ou d'écoute mesurable au sonomètre." },
]

const materiaux = [
  { name: "Sols PVC homogènes laboratoires Gerflor", desc: "Pour les laboratoires de chimie, biologie et pharmacie poitevins. Résistance chimique P3 aux acides et solvants, classement Bfl-s1, antistatique en option pour salles à équipements sensibles, soudure à chaud des lés, remontées en plinthes. Durée de vie 20 à 25 ans en usage intensif." },
  { name: "Sols PVC cabinets médicaux Tarkett", desc: "Pour les cabinets de spécialistes secteur CHU et plateaux médicaux. Aspect uni mat ou imitation pierre, traitement antibactérien intégré, résistance aux produits de désinfection chlorés et alcooliques, entretien simple. Conformité ARS et fiches techniques fournies." },
  { name: "Dalles moquette acoustique pour open spaces", desc: "Pour les sièges sociaux et plateaux tertiaires poitevins. Format 50×50 cm permettant le remplacement partiel, sous-couche acoustique intégrée, classement 33 commercial intense, large palette de coloris. Durabilité 15 à 20 ans en bureau classique." },
  { name: "Sols PVC écoles privées Forbo et Polyflor", desc: "Pour les écoles privées poitevines et établissements de formation. Linoléum Marmoleum naturel certifié A+ COV, ou sol PVC homogène Polyflor pour les zones humides et sanitaires. Classement Bfl-s1, résistance au trafic intense, fiches techniques pour la commission de sécurité ERP type R." },
  { name: "Moquette laine bureaux de direction Wilton", desc: "Pour les salles du conseil et bureaux de présidence des sièges sociaux poitevins. Tissage dense, toucher ferme, vieillissement noble. Disponible en uni, chiné ou motif géométrique discret. Habillage qui pose le ton dans les espaces de représentation tertiaire." },
  { name: "Profilés laiton et alu brossé Romus", desc: "Pour les seuils, nez de marche et raccords entre revêtements. Coordination avec quincailleries existantes des établissements poitevins, profilés sur mesure possibles pour les chantiers tertiaires à exigence particulière. Finitions soignées qui font la différence à la livraison." },
]

const marques = [
  { name: "Gerflor", desc: "Sol PVC Mipolam, Taralay et Tarafloor. Référence pour les laboratoires universitaires poitevins, le médico-social et les cabinets de spécialistes secteur CHU. Gamme antistatique et antibactérienne complète." },
  { name: "Tarkett", desc: "Sol PVC iQ Granit et iQ Optima. Performances acoustiques élevées, durabilité éprouvée, finition mate haut de gamme pour open spaces tertiaires et plateaux médicaux poitevins." },
  { name: "Forbo", desc: "Sols Marmoleum naturels (linoléum) et Flotex tissé vinyle. Solutions sanitaires éprouvées pour cabinets médicaux du CHU et écoles privées poitevines. Certifications environnementales fortes." },
  { name: "Polyflor", desc: "Sols PVC britanniques homogènes, gamme étendue pour le médico-social et l'éducation. Antidérapance R10 et R11, résistance aux produits de désinfection hospitalière, durée de vie exceptionnelle." },
  { name: "EGE Carpets", desc: "Manufacture danoise. Dalles moquette avec sous-couche acoustique intégrée pour open spaces tertiaires poitevins. Moquette Hospitality pour hôtels du Futuroscope et du centre historique." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design contemporain. Gammes pour sièges sociaux et bureaux d'affaires haut de gamme du tertiaire poitevin." },
  { name: "Brintons", desc: "Axminster britannique haut de gamme. Pour les hôtels boutique du centre historique de Poitiers et les espaces de prestige tertiaire ou hôtelier." },
  { name: "Bolon", desc: "Sols tissés vinyle suédois design. Résistance et confort pour halls d'accueil tertiaires, restaurants des hôtels du Futuroscope et espaces de réception." },
]

const quartiers = [
  { nom: "Centre-ville historique", detail: "Place du Maréchal-Leclerc, rue Carnot, Notre-Dame-la-Grande, baptistère Saint-Jean. Hôtels particuliers, immeubles bourgeois, restaurants gastronomiques, boutiques de caractère." },
  { nom: "Pont-Neuf", detail: "Quartier en lien avec le centre historique, immeubles XIXe et tertiaire urbain. Cabinets de profession libérale, commerces de centre-ville, copropriétés bourgeoises." },
  { nom: "Trois-Cités", detail: "Quartier ouest en bord de Clain, mix résidentiel et équipements collectifs. Programmes neufs, copropriétés récentes, équipements éducatifs et sportifs." },
  { nom: "Beaulieu", detail: "Quartier nord-est résidentiel avec maisons familiales et copropriétés. Cabinets médicaux de quartier, commerces de proximité, clientèle résidentielle stable." },
  { nom: "Saint-Éloi", detail: "Plateau du CHU et secteur hospitalier de Poitiers. Cabinets médicaux de spécialistes, laboratoires d'analyses, sièges d'organismes de santé. Pôle médical structurant." },
  { nom: "Bellejouanne", detail: "Quartier sud résidentiel et commercial. Maisons familiales, programmes neufs, équipements scolaires privés et publics." },
  { nom: "Université de Poitiers", detail: "Campus universitaire historique du Pont-Achard et campus de Sciences sur le plateau. Laboratoires de recherche, amphithéâtres, bâtiments administratifs universitaires." },
  { nom: "Futuroscope (Chasseneuil)", detail: "Pôle tertiaire et touristique majeur. Hôtels d'affaires, sièges sociaux, plateformes de R&D, centres de formation. Sols PVC acoustiques pour open spaces et moquette dalles pour bureaux." },
  { nom: "Buxerolles", detail: "Commune limitrophe nord, mix résidentiel haut de gamme et zones d'activité. Maisons familiales, copropriétés bourgeoises, cabinets de profession libérale." },
  { nom: "Migné-Auxances", detail: "Commune limitrophe nord-ouest, zones d'activité économique et résidentiel pavillonnaire. Sièges d'entreprises et plateformes logistiques." },
  { nom: "Saint-Benoît", detail: "Commune limitrophe sud, résidentielle haut de gamme avec belles villas et propriétés de famille. Clientèle résidentielle attachée à la qualité d'exécution." },
  { nom: "Vouneuil-sous-Biard", detail: "Commune limitrophe ouest, résidentiel et équipements. Maisons familiales, projets pavillonnaires haut de gamme, cabinets médicaux et professions libérales." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet (laboratoire, cabinet médical, tertiaire, hôtel, école), surface estimée, calendrier souhaité, contraintes ERP éventuelles. Pour les marchés publics universitaires, récupération du DCE complet." },
  { step: 'Visite à Poitiers', desc: "Déplacement organisé sous 1 à 2 semaines depuis Villedoux. Prise de cotes au laser, repérage des contraintes d'accès et des zones contrôlées, photos pour coordination coloris et raccords. Pour les laboratoires, identification des zones ATEX ou des contraintes antistatiques." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Poitiers, au responsable patrimoine ou chez l'architecte. Validation finale sous l'éclairage du lieu de pose. Transmission des fiches techniques, PV feu, certifications sanitaires et fiches d'entretien adaptées au protocole." },
  { step: 'Confection atelier', desc: "3 à 10 semaines selon gamme : sol PVC découpé, dalles moquette, moquette Wilton ou Axminster custom. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation est ce qui permet de tenir une pose finale rapide et soignée à Poitiers." },
  { step: 'Pose à Poitiers', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités, l'intersession ou la fenêtre du chantier. Coordination avec services techniques ou responsable de plateforme. Phasage en horaires décalés. Nettoyage complet à la livraison." },
]

const faq = [
  { q: "Vous déplacez-vous régulièrement à Poitiers depuis La Rochelle ?", a: "Oui, très régulièrement. Poitiers se situe à environ 150 km de notre atelier de Villedoux, soit moins de deux heures de route par l'autoroute A10. C'est une zone d'intervention naturelle pour nous, dans la continuité de notre savoir-faire patrimonial et tertiaire déjà bien établi sur le Poitou-Charentes. Nous organisons les déplacements en deux temps : une visite de prise de cotes en début de projet, puis l'intervention de pose en fin de chantier. L'hébergement et la logistique sont inclus dans le devis. Pour les chantiers de plusieurs jours sur les pôles universitaires ou hospitaliers, nous mobilisons une équipe complète qui reste sur place jusqu'à la finition." },
  { q: "Travaillez-vous sur les laboratoires de l'Université de Poitiers et du CNRS ?", a: "Oui, c'est un de nos terrains d'intervention naturels. Les laboratoires de chimie, biologie et pharmacie de l'Université de Poitiers, du CNRS et des structures associées au CHU imposent des exigences précises : résistance chimique P3 aux acides et solvants, classement Bfl-s1, antistatique pour les salles à équipements sensibles, soudure à chaud des lés sans joint apparent, remontées en plinthes obligatoires. Nos produits Gerflor Mipolam et Polyflor sont sélectionnés pour répondre à ces exigences. Documentation technique complète fournie pour le service patrimoine et la commission de sécurité." },
  { q: "Intervenez-vous sur les cabinets médicaux du secteur CHU de Saint-Éloi ?", a: "Oui. Le plateau de Saint-Éloi concentre un pôle médical majeur avec cabinets de spécialistes, laboratoires d'analyses et sièges d'organismes de santé. Les sols pour cabinets médicaux relèvent du règlement ERP type U avec exigences fortes : classement Bfl-s1, résistance aux produits de désinfection chlorés et alcooliques, surface décontaminable, remontées en plinthes dans les zones humides. Nous fournissons l'intégralité des PV feu, fiches techniques, certifications sanitaires et fiches d'entretien adaptées au protocole bionettoyage. Les poses sont planifiées en horaires décalés pour ne pas perturber l'activité des consultations." },
  { q: "Comment gérez-vous les exigences ERP pour les écoles privées poitevines ?", a: "Les écoles privées poitevines relèvent du règlement ERP type R avec classement Bfl-s1 obligatoire pour les revêtements de sol des circulations et salles de classe. Nous sélectionnons des produits Forbo Marmoleum (linoléum naturel certifié A+ COV) ou des sols PVC Polyflor adaptés au trafic intense scolaire. La pose se planifie en intersession (Toussaint, Noël, février, Pâques ou grandes vacances) pour livrer l'établissement à la rentrée. Nous fournissons l'intégralité de la documentation pour la commission de sécurité et la visite de contrôle." },
  { q: "Travaillez-vous sur les hôtels du Futuroscope ?", a: "Oui. Le Futuroscope concentre un pôle hôtelier d'affaires important avec établissements de chaînes internationales et hôtels indépendants. Les exigences sont précises : moquette hôtellerie haute densité avec traitement anti-tache, isolation acoustique pour les chambres, sols PVC pour les zones humides et restaurants, planning ferme calé sur les périodes de moindre affluence. CB Sols intervient sur ces chantiers avec une équipe rodée à l'hôtellerie d'affaires : pose chambre par chambre par rotation, nettoyage intégral à la livraison, restitution opérationnelle à l'heure convenue avec le directeur d'exploitation." },
  { q: "Quelle est la durabilité d'un sol PVC dans un laboratoire universitaire ?", a: "Un sol PVC homogène Gerflor Mipolam ou Polyflor, posé en lés soudés à chaud avec remontées en plinthes dans un laboratoire universitaire poitevin, dure facilement 20 à 25 ans en usage intensif avec un entretien correct. Le sol PVC homogène présente l'avantage de bien vieillir : une seule couche de matière qui monte jusqu'à la surface, pas de couche supérieure à user, pas de délamination possible. La résistance chimique P3 supporte les contacts ponctuels avec acides et solvants courants en laboratoire. Un nettoyage professionnel annuel et un bionettoyage quotidien selon protocole suffisent à maintenir l'aspect d'origine et la conformité sanitaire." },
  { q: "Pouvez-vous intervenir en horaires décalés sur un CHU ou une université en activité ?", a: "Oui, c'est même la norme sur les chantiers santé et universitaire en activité. Nous organisons les interventions en soirée, le week-end, en intersession universitaire ou en horaires décalés selon le phasage défini avec le service patrimoine ou le responsable de plateforme. Les pré-assemblages en atelier à Villedoux permettent de réduire au minimum la durée de pose sur site. Le matériel est conçu pour limiter le bruit et les nuisances. Nous protégeons systématiquement les équipements sensibles, le mobilier informatique et les matériels de laboratoire avant intervention, et nous restituons l'espace nettoyé et opérationnel à l'heure convenue. Cette organisation permet de tenir les contraintes d'exploitation sans interrompre l'activité." },
]

export default function RevetementSolPoitiersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-poitiers#service',
        name: "Revêtement de sol à Poitiers",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Poitiers' },
          { '@type': 'AdministrativeArea', name: 'Vienne' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Poitiers et dans la Vienne",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour laboratoires universitaires, cabinets médicaux secteur CHU, sièges sociaux, hôtels du Futuroscope et écoles privées à Poitiers.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Poitiers', item: 'https://cbsols.fr/revetement-sol-poitiers' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Poitiers</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Poitiers,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>rigueur universitaire.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Poitiers. Laboratoires de recherche universitaires, cabinets médicaux secteur CHU, sièges sociaux, hôtels du Futuroscope, écoles privées. Atelier basé à La Rochelle, déplacement à Poitiers organisé chaque mois.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=poitiers" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Poitiers, c&apos;est une ville de savoir : universités, recherche, CHU. Les exigences techniques ne pardonnent pas l&apos;à-peu-près. CB Sols a la documentation et la méthode pour répondre à ces standards depuis 27 ans. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de projet</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même exigence technique.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Poitiers ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec le service patrimoine, le responsable de plateforme ou directement avec vous. Visite organisée sous 1 à 2 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=poitiers-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Poitiers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers poitevins.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Poitiers, ce n&apos;est pas reproduire un chantier standard. Voici les six points sur lesquels nous structurons notre méthode dès la première visite, pour répondre aux exigences techniques et tenir le calendrier.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Poitiers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons dans la Vienne.</em>
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
              « Un laboratoire universitaire, ça ne s&apos;improvise pas. Résistance chimique, antistatique, soudures parfaites, documentation impeccable. CB Sols a fait ce métier depuis 27 ans, c&apos;est sa colonne vertébrale technique. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=poitiers-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite sur site à Poitiers</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets poitevins.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quartiers et communes où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Poitiers et Grand Poitiers, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;au Futuroscope.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble du Grand Poitiers ainsi que sur les communes limitrophes, là où se concentrent les pôles universitaires, hospitaliers, tertiaires et résidentiels haut de gamme.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier poitevin.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=poitiers-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Poitiers.</em>
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
            Revêtement de sol à Poitiers, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Pas de hotline, pas de standard. Conseil clair, ordre de grandeur honnête, suite donnée seulement si le projet a du sens pour vous comme pour nous.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre la Vienne, la Charente-Maritime et au-delà, sur tous les terrains techniques d&apos;exception.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/sol-pvc-laboratoire-pharmaceutique" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC laboratoire pharmaceutique →</Link>
            <Link href="/sol-pvc-cabinet-medical" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC cabinet médical →</Link>
            <Link href="/revetement-sol-la-rochelle" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol La Rochelle →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet poitevin <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Poitiers. Devis détaillé, finitions premium, conformité technique irréprochable. CB Sols, 27 ans de savoir-faire au service des laboratoires, du tertiaire et du médico-social poitevins.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=poitiers-final" variant="primary" size="md">Demander un devis</Button>
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
