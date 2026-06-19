import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Poitiers | Laboratoires, Universités, Tertiaire",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Poitiers. Laboratoires universitaires, cabinets médicaux secteur CHU, sièges sociaux, hôtels du Futuroscope, écoles privées. CB Sols, plus de 25 ans de savoir-faire, déplacement régulier depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-poitiers' },
  keywords: ['revêtement sol Poitiers', 'sol PVC laboratoire Poitiers', 'moquette tertiaire Poitiers', 'artisan sol Poitiers', 'sol PVC cabinet médical Poitiers'],
  openGraph: {
    title: "Revêtement de sol à Poitiers, rigueur universitaire",
    description: "Moquette, sol PVC et tapis sur mesure à Poitiers. Laboratoires, CHU, sièges sociaux, hôtels du Futuroscope. CB Sols, plus de 25 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-poitiers.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Laboratoires de recherche universitaires", desc: "Vous dirigez un labo à l'Université ou au CNRS. On pose un PVC homogène résistant aux produits chimiques. Lés soudés à chaud, plinthes à gorge. On vient en dehors des manipulations." },
  { title: "Cabinets médicaux secteur CHU", desc: "Vous installez un cabinet près du CHU. PVC antibactérien classé Bfl-s1, qui tient l'alcool et le chlore. Plinthes remontées dans les zones humides. On vous fournit la doc ARS d'office." },
  { title: "Sièges sociaux et plateaux tertiaires", desc: "Vous gérez un siège à Chasseneuil ou en centre-ville. Dalles moquette acoustiques, PVC dans les open spaces, moquette laine pour la direction. On phase avec votre facility manager." },
  { title: "Hôtels du Futuroscope et centre", desc: "Vous tenez un hôtel d'affaires ou un boutique-hôtel. On vient en basse saison, vous gardez vos nuitées. Moquette dense anti-tache dans les chambres, PVC côté restaurant et zones humides." },
]

const exigences = [
  { title: "Les laboratoires, leurs contraintes nous sont familières", desc: "Acides, solvants, équipements sensibles : un sol de laboratoire doit tout résister. On retient des PVC techniques soudés à chaud, sans joint apparent, faciles à décontaminer. Les attestations sont fournies avec. Vos équipes travaillent sereinement, le bureau de contrôle valide sans réserve." },
  { title: "Les normes santé et école, on s'en occupe", desc: "Cliniques, cabinets, écoles : il y a des règles strictes sur la sécurité incendie et l'hygiène. On choisit les bons produits pour vous, on fournit les attestations, on dialogue avec le bureau de contrôle. Vous n'avez rien à comprendre des fiches techniques." },
  { title: "Environ deux heures de route, et on est là", desc: "Poitiers est à 150 km de notre atelier, environ deux heures par l'A10. C'est tout près. On y passe plusieurs fois par mois, on connaît les chantiers du coin. Vous appelez, on vient mesurer dans la semaine, sans surcoût caché." },
  { title: "Marchés publics, on suit le process", desc: "Sur un chantier universitaire ou hospitalier, l'interlocuteur est le service technique ou patrimoine. On cale les comptes-rendus, les bons de livraison, les attestations selon vos procédures. Vous gardez la traçabilité, on s'aligne sur votre rythme. Pas de friction administrative." },
  { title: "On vient quand vous ne travaillez pas", desc: "CHU, école, bureaux : ça ne s'arrête pas. On vient le soir, le week-end, en intersession. On protège les équipements sensibles, on rend la zone propre à l'heure dite. Vous arrivez le lundi, le sol est posé, les meubles en place. Pas une journée perdue." },
  { title: "Moins d'écho dans les amphis et open spaces", desc: "Un grand amphi ou un open space avec parois dures, ça résonne. Une moquette dalles à sous-couche acoustique ou un PVC acoustique coupent la moitié du brouhaha. Les conversations passent mieux, les cours s'écoutent. Vos équipes le sentent dès le premier jour." },
]

const materiaux = [
  { name: "Sols PVC homogènes laboratoires Gerflor", desc: "Pour un labo de chimie ou de pharmacie, on part sur du PVC homogène. C'est le même matériau de haut en bas, donc pas de couche d'usure à percer. Il encaisse les acides et les solvants, classement P3. On soude les lés à chaud et on remonte en plinthe. Vingt à vingt-cinq ans devant vous en usage intensif." },
  { name: "Sols PVC cabinets médicaux Tarkett", desc: "Dans un cabinet médical, le sol doit supporter le bionettoyage quotidien sans broncher. Tarkett intègre le traitement antibactérien dans la masse. Aspect uni mat ou imitation pierre selon votre ambiance. Il encaisse les désinfectants chlorés et alcooliques, et l'entretien se fait en cinq minutes. Conformité ARS, fiches fournies." },
  { name: "Dalles moquette acoustique pour open spaces", desc: "Sur les plateaux tertiaires, les dalles 50×50 cm sont notre standard. Si quelqu'un renverse son café, on remplace juste la dalle abîmée. La sous-couche acoustique coupe les bruits de pas et de roulettes, vos équipes travaillent au calme. Quinze à vingt ans en bureau classique, choix de couleurs énorme." },
  { name: "Sols PVC écoles privées Forbo et Polyflor", desc: "Pour une école privée, on regarde Forbo Marmoleum (un vrai linoléum à base d'huile de lin, certifié A+ COV) ou du Polyflor pour les zones humides. Tout est classé Bfl-s1, résiste au trafic d'enfants sans difficulté. On vous fournit le dossier complet pour la commission de sécurité ERP type R." },
  { name: "Moquette laine bureaux de direction Wilton", desc: "Pour une salle du conseil ou un bureau de présidence, la moquette laine pose le ton dès l'entrée. Tissage dense, toucher ferme, vieillissement noble. On choisit avec vous un uni profond, un chiné ou un motif géométrique discret. C'est ce genre de détail qui distingue un espace de représentation." },
  { name: "Profilés laiton et alu brossé Romus", desc: "Les seuils et les nez de marche, on les soigne. On coordonne avec votre quincaillerie existante, ce qui compte sur un bâtiment patrimonial. Sur les chantiers tertiaires exigeants, on peut faire fabriquer du sur mesure. C'est ce genre de chose qu'on remarque à la livraison, et qui fait la différence." },
]

const marques = [
  { name: "Gerflor", desc: "Le français de Lyon, qu'on connaît par cœur. Leurs PVC Mipolam et Taralay sont notre référence pour les laboratoires universitaires et les cabinets du secteur CHU. Gamme antistatique et antibactérienne complète." },
  { name: "Tarkett", desc: "Pour les open spaces qui demandent un vrai confort acoustique, on part sur du Tarkett iQ Granit. Il vieillit bien et reste notre référence sur les plateaux tertiaires et les plateaux médicaux poitevins." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum, fait avec de l'huile de lin. Les certifications environnementales sont solides, parfait pour les écoles privées et les cabinets du CHU." },
  { name: "Polyflor", desc: "Le britannique du PVC. Antidérapance R10 ou R11 selon la zone, résistance aux désinfectants hospitaliers. On les sort en milieu médical et éducatif sans hésiter, leur durée de vie est exceptionnelle." },
  { name: "EGE Carpets", desc: "Le danois, notre référence pour les bureaux de direction et les open spaces. Leurs dalles ont la sous-couche acoustique intégrée. La gamme Hospitality équipe aussi les hôtels du Futuroscope et du centre historique." },
  { name: "Object Carpet", desc: "Les allemands, pour les sièges sociaux et les bureaux d'affaires haut de gamme. Design contemporain, finitions parfaites. Quand vous voulez sortir des codes tertiaires classiques." },
  { name: "Brintons", desc: "L'Axminster britannique, l'aristocratie de la moquette. On l'appelle pour les hôtels boutiques du centre historique poitevin et les espaces de prestige." },
  { name: "Bolon", desc: "Le suédois du tissé vinyle. Esthétique contemporaine qui tient le passage intense. Parfait pour les halls d'accueil tertiaires et les restaurants des hôtels du Futuroscope." },
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
  { q: "Vous venez vraiment à Poitiers depuis La Rochelle ?", a: "Oui, et souvent. Poitiers est à 150 km, moins de deux heures par l'A10. C'est tout près. On y passe régulièrement, on connaît les chantiers du coin. On vient mesurer en début de projet, puis on revient poser à la fin. L'hébergement est inclus dans le devis. Sur les gros chantiers universitaires ou hospitaliers, l'équipe reste sur place jusqu'à la livraison." },
  { q: "Vous travaillez sur les laboratoires de l'Université et du CNRS ?", a: "Oui, c'est un de nos terrains naturels. Les labos de chimie et de pharmacie demandent des exigences précises : résistance chimique P3, classement Bfl-s1, antistatique sur les salles à équipements sensibles, lés soudés à chaud, plinthes remontées. On part sur du Gerflor Mipolam ou du Polyflor, et on fournit toute la documentation technique pour votre service patrimoine et la commission de sécurité." },
  { q: "Vous intervenez sur les cabinets du secteur CHU à Saint-Éloi ?", a: "Bien sûr. Le plateau Saint-Éloi concentre un pôle médical important. Les sols de cabinet relèvent du règlement ERP type U : classement Bfl-s1, résistance aux désinfectants chlorés et alcooliques, surface décontaminable, plinthes remontées dans les zones humides. On fournit tous les PV feu et fiches sanitaires. La pose se cale en horaires décalés pour ne pas perturber les consultations." },
  { q: "Comment ça se passe pour les écoles privées côté ERP ?", a: "Les écoles privées relèvent du règlement ERP type R, classement Bfl-s1 obligatoire sur les circulations et les salles. On sélectionne du Forbo Marmoleum (linoléum naturel certifié A+ COV) ou du Polyflor pour les zones humides. La pose se cale en intersession (Toussaint, Noël, février, Pâques ou grandes vacances) pour livrer l'établissement à la rentrée. Dossier complet fourni pour la commission de sécurité." },
  { q: "Vous travaillez sur les hôtels du Futuroscope ?", a: "Oui. Le Futuroscope concentre un pôle hôtelier d'affaires important. Les exigences sont précises : moquette haute densité anti-tache, isolation acoustique des chambres, PVC pour les zones humides et restaurants. On pose chambre par chambre par rotation, sans bloquer l'exploitation. Nettoyage intégral à la livraison, restitution opérationnelle à l'heure convenue avec le directeur d'exploitation." },
  { q: "Combien de temps tient un sol PVC dans un labo universitaire ?", a: "Vingt à vingt-cinq ans facilement, parfois plus. Le PVC homogène vieillit bien parce qu'il n'a pas de couche d'usure à percer, c'est le même matériau de haut en bas. La résistance chimique P3 supporte les contacts ponctuels avec acides et solvants courants. Un nettoyage pro annuel et un bionettoyage quotidien selon votre protocole suffisent à garder l'aspect du premier jour." },
  { q: "Vous pouvez intervenir en horaires décalés sur un CHU ou une université ?", a: "Oui, c'est même la norme. On organise les interventions en soirée, le week-end ou en intersession selon le phasage défini avec votre service patrimoine. On pré-assemble un maximum à l'atelier, donc la pose sur site va vite. On protège systématiquement les équipements sensibles, le mobilier informatique et les matériels de labo avant de commencer. À l'heure convenue, l'espace est nettoyé et opérationnel." },
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
                « Poitiers, c&apos;est une ville de savoir : universités, recherche, CHU. Les exigences techniques ne pardonnent pas l&apos;à-peu-près. CB Sols a la documentation et la méthode pour répondre à ces standards depuis plus de 25 ans. »
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
              « Un laboratoire universitaire, ça ne s&apos;improvise pas. Résistance chimique, antistatique, soudures parfaites, documentation impeccable. CB Sols a fait ce métier depuis plus de 25 ans, c&apos;est sa colonne vertébrale technique. »
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
            Visite sur place à Poitiers. Devis détaillé, finitions premium, conformité technique irréprochable. CB Sols, plus de 25 ans de savoir-faire au service des laboratoires, du tertiaire et du médico-social poitevins.
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
