import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moquette & Revêtement de Sol pour Casino | CB Sols',
  description: "CB Sols accompagne casinos et établissements de jeux pour leurs revêtements de sol : moquette sur mesure, trafic intensif, acoustique, ERP et pose par phases sans fermer l'établissement. La Rochelle et Grand Ouest.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-casino' },
  openGraph: {
    title: 'Moquette & Revêtement de Sol pour Casino | CB Sols',
    description: "Revêtement de sol pour casinos : moquette sur mesure, résistance au trafic, confort acoustique, classement feu ERP et chantier par phases sans arrêter l'exploitation. CB Sols, artisan La Rochelle.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-casino.jpg', width: 1200, height: 630 }],
  },
}

// Les 4 piliers du positionnement
const piliers = [
  { title: 'Design sur mesure', desc: "Le sol d'un casino, c'est plusieurs centaines de mètres carrés qui participent directement à l'identité du lieu. Moquette tuftée ou imprimée, motif dessiné pour la maison, logo intégré, zoning qui sépare les ambiances : on traite le sol comme une pièce d'architecture intérieure, pas comme un consommable qu'on déroule vite fait." },
  { title: 'Résistance au trafic', desc: "Une salle de jeux tourne en continu, sept jours sur sept, jusqu'au bout de la nuit. Passages répétés, mobilier qu'on déplace, files qui piétinent au même endroit. On sélectionne des revêtements contract taillés pour ce régime, là où un sol grand public aurait déjà lâché en un an." },
  { title: 'Confort acoustique', desc: "Machines, jeux électroniques, conversations, musique, bars, restaurant : un casino concentre les sources sonores. Le sol textile absorbe les bruits de pas et d'impact et adoucit nettement l'ambiance sonore d'une salle chargée. C'est l'une des vraies raisons de la moquette en casino." },
  { title: "Continuité d'exploitation", desc: "Fermer pour refaire un sol, c'est du chiffre d'affaires en moins chaque nuit. On découpe le chantier en zones et on cale les interventions sur les horaires creux pour limiter au maximum l'impact sur votre activité. C'est là qu'on fait la vraie différence." },
]

// Section 1 : contraintes d'un sol de casino
const contraintes = [
  { title: 'Trafic très intensif', desc: "Zones de circulation et abords des machines encaissent des années de passages serrés. Le revêtement doit garder son aspect quand le reste aurait rendu les armes. On vise les classements d'usage les plus durs, adaptés à chaque zone." },
  { title: 'Amplitude horaire', desc: "Un établissement ouvert jusqu'à 3h ou 4h laisse peu de fenêtres pour intervenir. Le JOA de Châtelaillon-Plage, par exemple, ouvre 7j/7 de 9h30 à 3h, et jusqu'à 4h les vendredis, samedis et veilles de jours fériés. Le sol doit se poser dans ces créneaux étroits." },
  { title: 'Acoustique', desc: "Le sol textile réduit les bruits de pas et d'impact et participe au confort des joueurs, du personnel et des espaces de restauration. Les performances varient selon la référence : on choisit la construction en fonction de l'ambiance sonore visée, pièce par pièce." },
  { title: 'Taches et entretien', desc: "Boissons, restauration, circulation continue : la maintenabilité prime. On intègre dès le choix la facilité de nettoyage, la résistance et la possibilité de remplacer une zone localisée sans refaire tout l'espace." },
  { title: 'Image haut de gamme', desc: "Le sol est une surface visuelle majeure. Il porte l'ambiance, délimite les espaces, guide la circulation, met en valeur les tables et les machines. Une identité forte se construit aussi au sol, pas seulement aux murs." },
  { title: 'Réglementation ERP', desc: "Un casino est un ERP. Réaction au feu, accessibilité et contraintes réglementaires s'étudient selon la destination de chaque local. On intègre ces exigences dès la préconisation, pas en rattrapage devant la commission de sécurité." },
]

// Section 2 : zones (table complète)
const zones = [
  { zone: 'Salle des machines à sous', produit: 'Moquette contract ou revêtement en dalles', cle: 'Trafic intensif, acoustique, remplacement localisé' },
  { zone: 'Salle des jeux de table', produit: 'Moquette en lés, textile haut de gamme', cle: 'Image premium, confort, design personnalisé' },
  { zone: 'Accueil et entrée', produit: 'Tapis de propreté sur mesure, revêtement résistant', cle: 'Première impression, salissures extérieures, PMR' },
  { zone: 'Restaurant', produit: 'Textile contract ou PVC selon concept', cle: 'Taches, entretien, acoustique, esthétique' },
  { zone: 'Bar', produit: 'Revêtement résilient PVC', cle: 'Résistance aux liquides, entretien, sécurité' },
  { zone: 'Salle de spectacle', produit: 'Moquette contract classée feu', cle: 'Acoustique, ERP, fort passage' },
  { zone: 'Couloirs et circulations', produit: 'Revêtement en dalles ou PVC compact', cle: 'Très forte résistance, remplacement par dalle' },
  { zone: 'Back-office et bureaux', produit: 'Revêtement en dalles acoustiques', cle: 'Durabilité, maintenance, coût global' },
  { zone: 'Sanitaires', produit: 'PVC en lés soudé, remontée plinthe', cle: 'Environnement humide, nettoyage fréquent' },
  { zone: 'Escaliers', produit: 'Revêtement contract avec nez de marche', cle: 'Sécurité, résistance, exigences réglementaires' },
]

// Zones détaillées (cards) : 6 pour rester aligné 3x2
const zonesDetail = [
  { title: 'Salle des machines à sous', desc: "Le cœur battant, et le sol qui prend le plus cher. Trafic serré, bruit permanent, équipements électroniques partout, verres renversés. On y pose de la moquette contract, souvent en dalles : quand une zone fatigue devant un carré de machines, on remplace juste les dalles concernées, pas toute la salle." },
  { title: 'Salle des jeux de table', desc: "Ici, c'est l'image premium qui commande. Confort sous les pieds, acoustique feutrée, design soigné. Moquette en lés ou textile haut de gamme, motif coordonné au mobilier, raccords maîtrisés pour un rendu sans coupure visible autour des tables." },
  { title: 'Accueil et entrée', desc: "La première impression, et la ligne de défense contre le sable et l'eau du dehors. Tapis de propreté sur mesure encastré, zone technique qui piège les salissures, revêtement résistant au passage. Le tout pensé accessible, cheminements sans ressaut." },
  { title: 'Restaurant et bar', desc: "Deux ambiances, deux logiques. Au restaurant, textile contract ou PVC selon le concept, choisi pour encaisser les taches et garder l'acoustique. Au bar, priorité aux revêtements résilients qui résistent aux liquides et se nettoient vite, sans glisser." },
  { title: 'Circulations et couloirs', desc: "Le réseau qui relie tout, et qui use en continu. Très forte résistance exigée. Les dalles ont un vrai intérêt ici : une zone abîmée se remplace localement, sans immobiliser une longue circulation ni refaire des dizaines de mètres d'un coup." },
  { title: 'Back-office et sanitaires', desc: "Les coulisses. Côté bureaux, dalles acoustiques pour le confort des équipes et un coût global maîtrisé. Côté sanitaires, PVC en lés soudé remonté en plinthe à gorge, sans recoin où la saleté s'installe, taillé pour le nettoyage fréquent." },
]

// Dalles vs lés
const dallesVsLes = {
  les: {
    title: 'Moquette en lés',
    quand: 'À privilégier pour la continuité graphique',
    points: [
      'Rendu homogène, sans interruption du motif',
      'Grandes compositions et motifs complexes',
      'Aspect premium des salles de jeux de table',
      'Personnalisation graphique très poussée',
    ],
  },
  dalles: {
    title: 'Revêtement en dalles',
    quand: 'À privilégier pour la maintenance',
    points: [
      'Remplacement localisé des zones abîmées',
      'Intervention rapide, chantier par phases',
      'Idéal en cas de taches ponctuelles',
      'Stock de dalles de rechange facile à garder',
    ],
  },
}

// Process CB Sols (8 étapes)
const process = [
  { step: 'Visite et audit', desc: "On vient voir le sol vivant : supports, surfaces, flux, zones d'usure, contraintes techniques et surtout horaires d'exploitation. C'est là qu'on comprend le vrai chantier." },
  { step: 'Préconisation', desc: "À chaque zone son revêtement, choisi sur le trafic, le classement feu, l'acoustique et le design. On monte le dossier technique en même temps que le devis." },
  { step: 'Échantillons et design', desc: "Validation des textures, couleurs, motifs et personnalisation éventuelle. Le sol se décide sur échantillon, pas sur une photo de catalogue." },
  { step: 'Plan de phasage', desc: "Découpage en zones, ordre d'intervention, horaires, temps d'immobilisation. Le planning est calé avec vos équipes avant qu'on touche au premier mètre carré." },
  { step: 'Préparation des supports', desc: "Dépose éventuelle, préparation, ragréage selon besoin, traitement du support. Un beau sol commence par un support propre et sain." },
  { step: 'Pose', desc: "Réalisée par les équipes CB Sols. Pose soudée, calepinage, remontées en plinthe, finitions. Chaque zone repart propre et opérationnelle." },
  { step: 'Réception', desc: "Contrôle, finitions, documents techniques nécessaires selon le projet. On vous remet de quoi tracer les ouvrages et passer les contrôles sereinement." },
  { step: 'Entretien et maintenance', desc: "Nettoyage, maintenance, remplacement localisé, intervention ponctuelle. On reste votre interlocuteur dans la durée, pas seulement le jour de la pose." },
]

// Cibles
const cibles = [
  { nom: "Directions d'établissement", detail: "Directeur de casino, directeur d'établissement : l'interlocuteur qui pèse l'impact d'un chantier sur l'exploitation autant que le rendu final." },
  { nom: 'Responsables techniques et travaux', detail: "Responsable technique, maintenance ou travaux : celui qui veut du concret sur le feu, l'accessibilité et le phasage, pas du discours commercial." },
  { nom: 'Directions immobilières de groupes', detail: "Direction immobilière et travaux d'un groupe multi-sites : besoin d'un poseur fiable, capable de tenir un cahier des charges homogène d'un établissement à l'autre." },
  { nom: "Architectes et maîtres d'œuvre", detail: "Architecte, architecte d'intérieur, maître d'œuvre, contractant général : un exécutant qui comprend le dessin, respecte le calepinage et livre le dossier technique attendu." },
]

// Réalisations (preuves réelles, jamais présentées comme casino)
const preuves = [
  { nom: 'Hôtel La Baronnie', detail: "Tapis sur mesure pour un hôtel de caractère. Le geste exact de la moquette personnalisée : dessin, confection à l'atelier, finition soignée." },
  { nom: 'Restaurant étoilé, La Rochelle', detail: "Moquette d'un restaurant gastronomique. Exigence d'image premium, acoustique feutrée et entretien en environnement de restauration." },
  { nom: 'Bistro de la Grande Terrasse', detail: "Pose de moquette en établissement recevant du public à fort passage. Contrainte de trafic et de tenue dans le temps." },
  { nom: 'Golf de la Prée', detail: "Moquettes et sols d'un club sportif recevant du public. Coordination des zones et des ambiances sur un même site." },
]

// L'essentiel (GEO citable)
const essentiel = [
  "CB Sols pose et rénove les sols de casinos : salle des machines, jeux de table, accueil, restaurant, bar, circulations et back-office.",
  "La moquette reste le produit héros, mais chaque zone reçoit le revêtement adapté : moquette contract, dalles, textile haut de gamme, PVC résilient ou tapis sur mesure.",
  "Moquette sur mesure possible : motif dessiné pour la maison, logo intégré, zoning et coordination avec le mobilier.",
  "Classement feu, accessibilité et contraintes ERP intégrés dès le choix du revêtement, selon la destination de chaque local.",
  "Chantier organisé par zones et en horaires décalés pour limiter au maximum l'impact sur l'exploitation de l'établissement.",
  "Entreprise basée à Villedoux près de La Rochelle. Interventions en Charente-Maritime, Vendée, Nouvelle-Aquitaine et plus largement Grand Ouest selon les projets.",
]

// FAQ
const faq = [
  { q: 'Quelle moquette choisir pour un casino ?', a: "Il n'existe pas une seule moquette de casino, mais un revêtement adapté à chaque zone. En salle des machines et en circulation, on privilégie une moquette contract très résistante, souvent en dalles pour pouvoir remplacer localement. En jeux de table, on cherche l'image premium avec de la moquette en lés ou un textile haut de gamme. Le choix se fait sur le trafic, le classement feu de la zone, l'acoustique visée et le design. On tranche après une visite sur site, pas sur catalogue." },
  { q: 'Pourquoi utilise-t-on de la moquette dans les casinos ?', a: "Pour trois raisons concrètes. D'abord l'acoustique : un casino concentre machines, jeux électroniques, conversations, musique et restauration, et le sol textile absorbe une partie des bruits de pas et d'impact. Ensuite le confort et l'image : la moquette porte l'ambiance, délimite les espaces et met en valeur les tables et les machines. Enfin la personnalisation : elle permet d'intégrer un motif ou un logo propre à l'établissement. La moquette n'est pas un choix esthétique gratuit, c'est un choix fonctionnel." },
  { q: 'Dalles ou moquette en lés pour un casino ?', a: "Les deux se défendent, selon l'objectif. La moquette en lés donne un rendu homogène, sans interruption du motif, idéale pour les grandes compositions graphiques et l'aspect premium des jeux de table. Les dalles brillent sur la maintenance : une zone abîmée ou tachée se remplace localement, sans refaire des centaines de mètres carrés, ce qui est précieux dans un établissement en exploitation. Souvent, on combine les deux sur un même site : lés là où le design prime, dalles là où la maintenance prime." },
  { q: 'Peut-on créer une moquette personnalisée pour un casino ?', a: "Oui. La moquette se prête à la personnalisation : motif dessiné sur mesure, couleurs coordonnées au mobilier, zoning qui sépare les ambiances, répétition d'un dessin sur de grandes surfaces. Certaines gammes contract proposent des solutions de personnalisation dédiées. On valide toujours le rendu sur échantillon avant de lancer la production, pour éviter les mauvaises surprises à la pose." },
  { q: 'Peut-on intégrer le logo du casino dans la moquette ?', a: "Oui, selon la technique et la gamme retenues, il est possible d'intégrer un logo ou un motif de marque dans la moquette, en accueil comme dans les salles. C'est un point à cadrer dès la préconisation, car il conditionne le choix du produit et le calepinage. On étudie la faisabilité et le rendu avant de vous engager." },
  { q: 'Comment réduire le bruit dans une salle de machines à sous ?', a: "Le sol textile est l'un des leviers. Une moquette contract absorbe une partie des bruits de pas et d'impact et adoucit l'ambiance sonore d'une salle saturée de sources. À titre d'exemple, une référence comme la Balsan Top Design 1300 annonce une isolation aux bruits d'impact de 30 dB (ΔLw) et une absorption des bruits aériens de 0,25 (αw). Ces valeurs sont propres à cette référence : on choisit la construction en fonction du niveau de confort acoustique recherché." },
  { q: 'Quel revêtement choisir pour une salle de machines à sous ?', a: "Une moquette contract taillée pour le trafic intensif, très souvent en dalles. Les dalles permettent de remplacer une zone usée devant un carré de machines sans toucher au reste de la salle, et de gérer les taches localement. On sélectionne aussi les caractéristiques techniques utiles à cet environnement, comme les propriétés antistatiques, selon le cahier des charges de l'établissement." },
  { q: 'Quel revêtement choisir pour les jeux de table ?', a: "Ici, l'image et le confort priment. On oriente vers de la moquette en lés ou un revêtement textile haut de gamme, avec un motif personnalisé possible et des raccords maîtrisés autour des tables. L'acoustique feutrée et le rendu premium comptent autant que la résistance, car c'est une zone à forte valeur d'image." },
  { q: 'Quel sol choisir pour le restaurant et le bar d\'un casino ?', a: "Cela dépend du concept. Au restaurant, un textile contract ou un PVC selon l'ambiance, choisi pour encaisser les taches, garder l'acoustique et rester esthétique. Au bar, on privilégie souvent un revêtement résilient qui résiste aux liquides, se nettoie vite et reste sûr sous les pieds. Le bon choix se fait selon le concept du lieu et son niveau d'exploitation." },
  { q: 'Quel classement feu prévoir pour une moquette de casino ?', a: "Il n'y a pas de réponse unique valable partout. Un casino est un ERP, et le niveau de réaction au feu exigé dépend de la zone, de la configuration, du support et de la destination du local, selon le règlement de sécurité ERP. Une moquette contract comme la Balsan Top Design 1300 dispose par exemple d'un classement Bfl-s1. On étudie l'exigence applicable projet par projet et on sélectionne un produit qui la respecte, PV de classement à l'appui." },
  { q: 'Peut-on changer la moquette d\'un casino sans fermer l\'établissement ?', a: "C'est tout l'enjeu, et notre méthode est construite pour ça. Un casino ouvre en horaires très étendus, parfois jusqu'à 3h ou 4h du matin, et une fermeture complète coûte cher. On découpe le chantier en zones et on cale les interventions sur les créneaux creux, en rotation, pour limiter au maximum l'impact. On ne promet pas zéro fermeture dans tous les cas, mais on étudie le phasage qui perturbe le moins votre exploitation." },
  { q: 'Peut-on poser la moquette la nuit ?', a: "Oui. Dépose, préparation et pose peuvent être organisées en horaires décalés et par zones, afin de maintenir autant que possible l'activité de l'établissement. Le planning nocturne se cale avec vos équipes en amont, zone par zone, pour qu'une surface soit rendue propre et opérationnelle avant la réouverture." },
  { q: 'Comment entretenir une moquette de casino ?', a: "Avec un plan d'entretien : nettoyage périodique, traitement rapide des taches, et remplacement localisé quand une zone fatigue, surtout si le sol est posé en dalles. Garder un stock de dalles de rechange de la même série permet d'intervenir vite sans écart de teinte. Un entretien régulier prolonge nettement la durée de vie du revêtement." },
  { q: 'Quelle est la durée de vie d\'une moquette professionnelle dans un casino ?', a: "Il n'y a pas de chiffre unique honnête à donner. La durée de vie dépend du trafic de la zone, de la construction du revêtement, de son emplacement, de son entretien et de la possibilité de remplacer localement les parties usées. Une circulation très fréquentée ne vieillit pas comme un salon de jeux de table. C'est précisément pour ça qu'on raisonne par zone et qu'on garde la maintenance dans la boucle, plutôt que d'annoncer une périodicité fixe." },
]

export default function RevetementSolCasinoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-casino#service',
        name: 'Revêtement de sol et moquette pour casino',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose et rénovation de moquette et revêtement de sol pour casinos et établissements de jeux",
        description: "Revêtement de sol pour casinos : moquette sur mesure, dalles, textile haut de gamme et PVC résilient pour salle des machines, jeux de table, accueil, restaurant, bar et circulations. Trafic intensif, acoustique, classement feu ERP et pose par phases sans arrêter l'exploitation.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol casino', item: 'https://cbsols.fr/revetement-sol-casino' },
        ],
      },
      {
        '@type': 'HowTo',
        name: "Rénover le sol d'un casino sans arrêter l'exploitation",
        description: "Méthode CB Sols pour poser un revêtement de sol de casino en site occupé, du relevé à l'entretien.",
        step: process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.step, text: p.desc })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/revetement-sol-casino#webpage',
        url: 'https://cbsols.fr/revetement-sol-casino',
        name: 'Revêtement de sol et moquette pour casino',
        description: "Service CB Sols : moquette sur mesure et revêtement de sol pour casinos, adaptés au trafic intensif, à l'acoustique et aux contraintes ERP, posés par phases sans fermer l'établissement.",
        dateModified: '2026-09-22',
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/revetement-sol-casino#service' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement de sol casino</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Le sol d&apos;un casino{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>ne se refait pas comme un autre.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              Un casino n&apos;est pas une seule surface homogène. C&apos;est une salle de machines qui tourne en continu, des jeux de table qui veulent du premium, un accueil qui prend le sable du dehors, un restaurant, un bar, des circulations qui n&apos;arrêtent jamais. Chaque espace a son revêtement, choisi sur le trafic, l&apos;acoustique, le classement au feu et l&apos;image. Notre vrai métier ici, ce n&apos;est pas de dérouler une moquette : c&apos;est de refaire vos sols sans fermer l&apos;établissement. Derrière tout ça, {company.experience} de pose et un atelier à vingt minutes de La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/contact?from=revetement-sol-casino" variant="primary" size="md">Étudier votre projet</Button>
              <Button href="/showroom" variant="outline" size="md">Voir le showroom</Button>
            </div>
          </div>
        </div>
      </section>

      {/* L'essentiel (résumé citable) */}
      <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>L&apos;essentiel en bref</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.9rem 2.5rem' }}>
            {essentiel.map((t, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--dark)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--terra)', fontWeight: 800, flexShrink: 0, marginTop: '0.05rem' }}>•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 piliers du positionnement */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quatre exigences, en même temps</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Résistance, design, silence, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>continuité d&apos;exploitation.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {piliers.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 : contraintes */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qu&apos;un sol de casino doit encaisser</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Les six contraintes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>d&apos;un sol de casino.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {contraintes.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 : zones (cards) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Une solution par espace</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            On ne propose pas une moquette casino. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>On étudie chaque zone.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            Un casino se découpe en espaces qui n&apos;ont ni le même usage, ni le même passage, ni la même exigence d&apos;image. On sélectionne le revêtement adapté à chacun, plutôt que d&apos;imposer le même produit partout.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {zonesDetail.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau récap (quick reference) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quelques pistes par zone</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            À titre d&apos;exemple, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>ce qu&apos;on pourrait envisager.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '820px' }}>
            Rien de figé ici : ce sont des pistes courantes, pour donner une idée. Le vrai choix se cale sur votre projet, vos contraintes et votre budget, après une visite sur site.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Zone</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Piste possible</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Point clé</th>
                </tr>
              </thead>
              <tbody>
                {zones.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 700, color: 'var(--dark)' }}>{r.zone}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>{r.produit}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{r.cle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dalles vs lés */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Le choix qui revient toujours</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Dalles ou moquette en lés ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Ça dépend de la zone.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            Aucun des deux n&apos;est meilleur dans l&apos;absolu. Le choix dépend du projet, du support, du design recherché, de l&apos;usage de la zone et de votre stratégie de maintenance. Souvent, on combine les deux sur un même site.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[dallesVsLes.les, dallesVsLes.dalles].map((col, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.4rem', letterSpacing: '-0.02em' }}>{col.title}</h3>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{col.quand}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {col.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--terra)', fontWeight: 800, flexShrink: 0 }}>→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-alt)', fontSize: '0.9rem', color: 'var(--dark)', lineHeight: 1.7, margin: '2rem 0 0' }}>
            <strong>L&apos;argument qui compte :</strong> une zone endommagée ne doit pas forcément entraîner le remplacement de plusieurs centaines de mètres carrés. Avec des dalles bien choisies, on remplace ce qui est abîmé, et rien de plus.
          </p>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet de rénovation en préparation ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            On se déplace pour voir le sol et le chiffrer.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Plans, photos et surfaces suffisent pour une première analyse. Valentin passe sur place, regarde chaque zone, vous conseille le bon revêtement et le phasage, et vous remet un devis précis, sans engagement.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-casino" variant="primary" size="md">Étudier mon projet</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Entretien / shampooinage en prestation */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>On ne fait pas que poser</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            On entretient aussi les sols, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pas seulement le jour de la pose.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Une moquette de casino, ça se fatigue là où ça passe le plus, et ça se tache là où on boit. Plutôt que d&apos;attendre le remplacement, on propose une prestation d&apos;entretien : shampooinage, injection-extraction, détachage, remise en état des zones qui ont marqué. Un sol entretenu tient bien plus longtemps qu&apos;un sol qu&apos;on laisse vivre sans rien faire.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Shampooinage moquette', d: "Nettoyage en profondeur des fibres, par shampooinage ou injection-extraction, pour raviver la couleur et retirer ce que l'aspirateur ne prend pas. En intervention ponctuelle ou en passage régulier." },
              { t: 'Détachage et remise en état', d: "Traitement des taches de boisson et des zones les plus marquées, avant qu'elles ne s'incrustent. On récupère souvent une zone qu'on croyait bonne à changer." },
              { t: 'Contrat d\'entretien', d: "Un passage planifié à la fréquence qui vous arrange, avec priorité sur les zones à fort trafic. Le sol reste présentable toute l'année, sans y penser." },
              { t: 'Remplacement localisé', d: "Quand une zone en dalles est vraiment usée, on remplace juste ce qu'il faut. En gardant un stock de la même série, la teinte reste raccord." },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-casino-entretien" variant="primary" size="md">Demander un devis d&apos;entretien</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Section 3 : sur mesure */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Le sol comme signature</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            Plusieurs centaines de mètres carrés <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>qui portent l&apos;identité du lieu.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            Dans un casino, le sol est l&apos;une des plus grandes surfaces visuelles de l&apos;établissement. Il participe directement à l&apos;identité du lieu. La moquette se prête à un vrai travail de design : motif dessiné sur mesure, couleurs coordonnées au mobilier, logo intégré, zoning qui sépare les ambiances, répétition d&apos;un dessin sur de grandes compositions.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            On valide toujours le rendu sur échantillon avant de lancer la production. Certaines gammes contract proposent des solutions de personnalisation dédiées et référencent des applications en casino. C&apos;est le même geste que nos tapis sur mesure d&apos;hôtellerie, transposé à l&apos;échelle d&apos;une salle de jeux : le sol devient une composante de l&apos;architecture intérieure, pas un fond neutre.
          </p>
        </div>
      </section>

      {/* Section 8 : gros bloc "votre casino reste ouvert" (dark) */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '1.5rem' }}>L&apos;argument qui change tout</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.9rem, 3.4vw, 3rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '960px' }}>
            Votre casino reste ouvert. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>On travaille autour de vous.</em>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(248, 245, 238, 0.78)', maxWidth: '900px', margin: '0 0 2.5rem', lineHeight: 1.8 }}>
            Un casino ouvre en horaires très étendus, parfois jusqu&apos;à 3h ou 4h du matin. Fermer complètement l&apos;établissement pour refaire les sols, c&apos;est une contrainte économique et opérationnelle lourde. On ne vous demande pas ça. On découpe le chantier en zones et on cale les interventions sur les créneaux creux, en rotation, pour limiter au maximum l&apos;impact sur l&apos;exploitation. Dépose, préparation et pose peuvent être organisées en horaires décalés, zone par zone, pour maintenir autant que possible l&apos;activité. On ne promet pas zéro fermeture dans tous les cas, mais on construit le phasage qui perturbe le moins votre chiffre d&apos;affaires.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Intervention par zones', d: 'Le chantier avance surface par surface, jamais tout en même temps. Une zone finie est rendue avant qu&apos;on attaque la suivante.' },
              { t: 'Horaires décalés', d: 'Nuits et heures creuses. Dites-nous quand la salle est calme, on cale la pose sur ce créneau.' },
              { t: 'Coordination avec vos équipes', d: 'Le planning se valide avec vous en amont, en s&apos;alignant sur l&apos;exploitation et les autres intervenants.' },
              { t: 'Remise en service rapide', d: 'Chaque zone terminée repart propre et opérationnelle, prête à rouvrir au public.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid rgba(248, 245, 238, 0.15)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra-on-dark)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.7)', lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réaction au feu / ERP / accessibilité */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>ERP, feu, accessibilité</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            La réglementation s&apos;étudie, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>elle ne se récite pas.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            Un casino est un ERP. On évite les raccourcis du type « une moquette de casino doit obligatoirement être Bfl-s1 » : c&apos;est trop simplificateur et faux selon les espaces. Le règlement de sécurité prévoit différents niveaux de réaction au feu selon la nature de l&apos;établissement, la zone, la configuration, le support et la destination du local. Classement feu, accessibilité et contraintes ERP sont intégrés dès le choix du revêtement, et on sélectionne les solutions en fonction de la destination des espaces et des exigences techniques du projet.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            Côté accessibilité, on soigne la continuité des cheminements, les raccords entre matériaux, l&apos;absence de ressaut aux seuils, les tapis d&apos;entrée et l&apos;adhérence. Sans promesse globale de conformité sans connaître le contexte : chaque projet a son étude. Les textes officiels de référence sont le règlement de sécurité contre l&apos;incendie et la panique dans les ERP.
          </p>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Une fenêtre d&apos;exploitation à saisir ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Donnez-nous le créneau, on cale la pose dessus.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Nuits, jours de moindre fréquentation, rotation des salles : dites-nous quand l&apos;établissement respire, on organise le chantier autour de vous.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-casino-mid" variant="primary" size="md">Parler de votre projet</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>De la visite à l&apos;entretien</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Huit étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>calées sur votre exploitation.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
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

      {/* Cibles */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>À qui on parle</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Un interlocuteur <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>qui parle votre langue.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '1.25rem' }}>
            {cibles.map((m, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations / preuves */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qu&apos;on a déjà posé</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            On ne prétend pas avoir refait cinquante casinos. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>On maîtrise déjà leurs contraintes.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '900px' }}>
            Hôtellerie, restauration étoilée, établissements recevant du public, moquette personnalisée, sites en exploitation : ce sont exactement les contraintes techniques que partage un casino. Voici quelques réalisations où on les a déjà tenues.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {preuves.map((m, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/realisations" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--terra)', textDecoration: 'none' }}>Voir toutes nos réalisations →</Link>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre terrain</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            La façade Atlantique <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>et le Grand Ouest.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            Basé à Villedoux près de La Rochelle, CB Sols accompagne les établissements de Charente-Maritime, Vendée, Nouvelle-Aquitaine et plus largement du Grand Ouest selon les projets. La côte atlantique compte de nombreux casinos, de Châtelaillon-Plage et Fouras à Royan, en passant par Les Sables-d&apos;Olonne, Saint-Jean-de-Monts, Saint-Brevin, Pornic et La Baule. Autant d&apos;établissements pour qui un poseur régional, réactif et rompu aux contraintes ERP, change la donne face aux gros généralistes nationaux.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les questions qu&apos;on nous pose</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Sol de casino, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses d&apos;artisan.</em>
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

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            CB Sols intervient partout où le sol prend cher et où les normes ERP s&apos;appliquent : hôtel, collectivité, aéroport, cabine d&apos;avion d&apos;affaires. Mêmes exigences, même soin du détail.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/revetement-sol-aeroport" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol aéroport →</Link>
            <Link href="/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette jet privé →</Link>
            <Link href="/secteurs/hotellerie" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Hôtellerie →</Link>
            <Link href="/secteurs/collectivites" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Collectivités →</Link>
            <Link href="/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Pose de moquette →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Vous préparez la rénovation d&apos;un casino ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons-en pour de vrai.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Plans, photos et surfaces permettent déjà une première analyse. On étudie avec vous les revêtements, les contraintes techniques et le phasage pour limiter l&apos;impact des travaux sur votre exploitation. Relevé sur site en Charente-Maritime, Vendée et Nouvelle-Aquitaine.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-casino" variant="primary" size="md">Étudier mon projet</Button>
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
