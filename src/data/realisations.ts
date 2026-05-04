/**
 * Réalisations CB Sols, données réelles récupérées depuis l'ancien site WP.
 * Chaque projet a sa propre page /realisations/[slug] générée statiquement.
 */

export interface Realisation {
  slug: string
  title: string
  /** Phrase courte affichée sur la grille, meta description */
  description: string
  /** Image principale (WebP local) */
  image: string
  /** Date de publication (ISO date, jour précis) */
  date: string
  /** Année affichée */
  year: string
  /** Secteur d'activité, utilisé pour filtre / badge */
  sector: string
  /** Ville d'intervention */
  location: string
  /** Nom du client / lieu (peut rester vide pour particulier) */
  client?: string
  /** Type de prestation principale, affiché en sous-titre */
  type: string
  /** Surface estimée, quand connue */
  surface?: string
  /** Paragraphes du contenu détaillé */
  body: string[]
  /** Lien externe vers le site officiel du client (CTA "Visiter le site du client") */
  clientLink?: { url: string; label: string }
}

export const realisations: Realisation[] = [
  {
    slug: 'tapis-sur-mesure-hotel-la-baronnie',
    title: 'Tapis sur mesure, Hôtel La Baronnie',
    description: "Confection d'un tapis sur mesure pour l'hôtel La Baronnie, au cœur de Saint-Martin-de-Ré.",
    image: '/images/projects/tapis-sur-mesure-hotel.webp',
    date: '2025-11-20',
    year: '2025',
    sector: 'Hôtellerie',
    location: 'Saint-Martin-de-Ré',
    client: 'Hôtel La Baronnie',
    type: 'Tapis sur mesure',
    body: [
      "Nous avons récemment eu le plaisir de réaliser un projet aussi technique que prestigieux : la confection d'un tapis sur mesure destiné à l'hôtel La Baronnie, au cœur de Saint-Martin-de-Ré, sur l'île de Ré. C'est un établissement chargé d'histoire qui exigeait un produit élégant, durable et parfaitement intégré à son décor.",
      "Le tapis a été pensé pour répondre aux contraintes d'un espace hôtelier haut de gamme : résistance au passage, élégance des finitions, harmonie avec la décoration existante. Chaque dimension a été relevée sur site et chaque matière sélectionnée pour s'inscrire dans la durée.",
      "Notre savoir-faire en confection sur mesure permet d'offrir aux hôteliers et résidences de prestige une pièce unique, parfaitement intégrée à leur identité visuelle.",
    ],
  },
  {
    slug: 'moquettes-sols-golf-de-la-pree',
    title: 'Moquettes et sols, Golf de la Prée',
    description: "Pose des moquettes et sols au Golf de la Prée à Marsilly. Clous podotactiles, nez de marche antidérapants, conformité accessibilité.",
    image: '/images/projects/moquettes-et-sols-golf.webp',
    date: '2025-11-19',
    year: '2025',
    sector: 'Sport & Loisirs',
    location: 'Marsilly',
    client: 'Golf de la Prée',
    type: 'Moquette + sols PVC',
    body: [
      "Nous avons récemment réalisé la pose des moquettes et sols du Golf de la Prée à Marsilly, à proximité de La Rochelle. Un projet d'envergure, dans un lieu reconnu pour la qualité de ses infrastructures et la fréquentation de son club-house.",
      "L'objectif était d'apporter une finition élégante, durable et parfaitement conforme aux normes d'accessibilité, tout en respectant l'esthétique contemporaine du site. Nous avons assuré la pose complète des moquettes et des sols dans plusieurs espaces stratégiques : salles de restauration, bureaux administratifs, zones d'accueil et circulations.",
      "Le projet incluait la pose de clous podotactiles en acier zingué et de nez de marche antidérapants pour garantir la sécurité de tous les usagers, conformément aux normes ERP en vigueur.",
    ],
  },
  {
    slug: 'pose-moquette-bistro-grande-terrasse',
    title: 'Pose moquette, Bistro de la Grande Terrasse',
    description: "Rénovation de la moquette du Bistro de la Grande Terrasse à Châtelaillon-Plage. Confort visuel et acoustique renforcé.",
    image: '/images/projects/pose-moquette-bistro-de-la-grande-terrasse.webp',
    date: '2025-12-05',
    year: '2025',
    sector: 'Restauration',
    location: 'Châtelaillon-Plage',
    client: 'Bistro de la Grande Terrasse',
    type: 'Moquette acoustique salle',
    body: [
      "Notre entreprise vient de réaliser un nouveau projet pour le Bistro de la Grande Terrasse. Après la rénovation complète de l'hôtel en 2017, l'établissement souhaitait actualiser l'ambiance de son espace de restauration. Nous avons ainsi remplacé l'ancienne moquette du bistro par un modèle plus contemporain.",
      "Ce choix marque une nouvelle étape dans la modernisation du lieu. Il permet aussi d'offrir un confort visuel et acoustique renforcé.",
      "CB Sols a assuré chaque étape du projet. Nous avons préparé les supports, vérifié les niveaux et contrôlé l'adhérence. L'équipe a ensuite découpé et posé la moquette dans le respect du planning d'exploitation, sans interrompre l'activité du restaurant.",
    ],
  },
  {
    slug: 'moquettes-restaurant-gaya-grande-terrasse',
    title: 'Moquettes, Restaurant Gaya, La Grande Terrasse',
    description: "Pose des moquettes du Gaya, gastronomie de La Grande Terrasse à Châtelaillon. Création signée ABP Architectes.",
    image: '/images/projects/pose-des-moquettes-salle-de-restaurant.webp',
    date: '2024-07-09',
    year: '2024',
    sector: 'Restauration gastronomique',
    location: 'Châtelaillon-Plage',
    client: 'Restaurant Gaya, La Grande Terrasse',
    type: 'Moquette sur mesure salle',
    body: [
      "Nous avons mené un projet d'exception de pose des moquettes de la salle du restaurant Gaya, lieu de gastronomie niché à La Grande Terrasse de Châtelaillon-Plage. Pose complète de moquettes spécialement fabriquées pour le projet, afin d'offrir un revêtement entièrement sur mesure.",
      "Le dessin imaginé par l'agence ABP Architectes constitue une création unique qui s'harmonise parfaitement avec l'atmosphère maritime, contemporaine et chic de la salle. Chaque motif, nuance et texture a été pensé avec une précision méticuleuse, permettant de traduire l'identité du lieu jusque dans le sol.",
      "La fabrication sur mesure garantit une moquette parfaitement adaptée aux dimensions exactes de l'espace et au cahier des charges acoustique d'un restaurant gastronomique.",
    ],
  },
  {
    slug: 'moquettes-restaurant-etoile-la-rochelle',
    title: "Moquettes, Restaurant 3★ face à l'océan",
    description: "Moquettes sur mesure pour un restaurant gastronomique étoilé situé face à l'océan à La Rochelle.",
    image: '/images/projects/pose-des-moquettes-dun-restaurant-etoile.webp',
    date: '2025-11-14',
    year: '2025',
    sector: 'Restauration étoilée',
    location: 'La Rochelle',
    client: 'Restaurant 3★',
    type: 'Moquette sur mesure',
    body: [
      "Dans ce restaurant 3★ idéalement situé face à l'océan à La Rochelle, nous avons eu l'honneur de réaliser un projet d'exception où chaque étape, de la conception à la pose, a été menée avec un soin absolu. Pensées en parfaite harmonie avec l'esprit du lieu, les moquettes ont été entièrement fabriquées sur mesure afin de répondre aux exigences esthétiques, acoustiques et fonctionnelles de cet établissement gastronomique.",
      "Dès les premières esquisses, nous avons collaboré étroitement avec l'architecte d'intérieur pour sélectionner des textures raffinées et des teintes évoquant subtilement l'univers marin tout en s'intégrant à l'élégance contemporaine de la salle.",
      "Cette intervention illustre notre capacité à intervenir sur des projets gastronomiques de très haut niveau, où l'exigence du résultat ne souffre aucun compromis.",
    ],
    clientLink: {
      url: 'https://christophercoutanceau.com/',
      label: 'Restaurant Christopher Coutanceau',
    },
  },
  {
    slug: 'pose-moquettes-circulations-grande-terrasse',
    title: "Moquettes circulations, Hôtel La Grande Terrasse 4★",
    description: "Pose des moquettes des circulations de l'hôtel 4★ La Grande Terrasse Hôtel & Spa à Châtelaillon-Plage.",
    image: '/images/projects/pose-des-moquettes-des-circulations.webp',
    date: '2023-12-11',
    year: '2023',
    sector: 'Hôtellerie 4★',
    location: 'Châtelaillon-Plage',
    client: 'La Grande Terrasse Hôtel & Spa',
    type: 'Moquette circulations',
    body: [
      "Nous avons réalisé un projet d'exception au sein de l'hôtel 4★ La Grande Terrasse à Châtelaillon-Plage, en Charente-Maritime. Ce projet unique consistait en la pose intégrale de moquettes dans l'ensemble des circulations de l'établissement, un lieu emblématique où le confort, l'esthétique et la qualité d'exécution tiennent une place essentielle.",
      "Dès le début du projet, nous avons accordé une attention particulière à la sélection des matériaux afin de répondre aux exigences haut de gamme de l'hôtel. La moquette choisie, à la fois élégante et robuste, devait offrir une sensation de douceur agréable au passage, mais aussi résister à l'usage quotidien d'un établissement à fort trafic.",
      "L'intervention a été planifiée pour s'inscrire dans le rythme de l'hôtel, sans perturber la clientèle ni le service.",
    ],
  },
  {
    slug: 'sols-bureau-cabinet-comptable-groupe-excel',
    title: 'Sols de bureau, Cabinet comptable Groupe Excel',
    description: "Pose de lames PVC pour le sol de bureau du Groupe Excel à La Rochelle. Dessin par la décoratrice Anne Boullet.",
    image: '/images/projects/sols-de-bureau-cabinet-comptable.webp',
    date: '2024-01-11',
    year: '2024',
    sector: 'Tertiaire',
    location: 'La Rochelle',
    client: 'Groupe Excel La Rochelle',
    type: 'Lames PVC plombantes',
    body: [
      "Dans le cadre de l'aménagement des nouveaux locaux du Groupe Excel La Rochelle, notre entreprise a réalisé un projet particulièrement soigné : la pose des sols de bureau de ce cabinet comptable. Le projet a été pensé et dessiné par la décoratrice d'intérieur Anne Boullet.",
      "Cette collaboration nous a permis de mettre en valeur notre savoir-faire autour d'un projet où précision, esthétique et durabilité étaient au cœur des attentes. Le choix des lames PVC s'est imposé naturellement, non seulement pour leur grande résistance aux passages intensifs inhérents à un environnement professionnel, mais aussi pour leur capacité à donner du caractère à l'espace.",
      "Le motif imaginé par la décoratrice a été reproduit avec précision : chaque lame a été positionnée en suivant un calepinage rigoureux pour respecter le dessin d'origine.",
    ],
  },
  {
    slug: 'pose-sols-cabinet-axa-la-rochelle',
    title: "Pose des sols, Cabinet d'assurances AXA, La Rochelle",
    description: "Rénovation complète des revêtements du cabinet AXA Moiroud Labarrère à La Rochelle, avec tapis logo personnalisé.",
    image: '/images/projects/pose-sols-cabinet-dassurances.webp',
    date: '2025-11-20',
    year: '2025',
    sector: 'Tertiaire',
    location: 'La Rochelle',
    client: 'AXA Moiroud Labarrère',
    type: 'Sols PVC + tapis logo',
    body: [
      "Nous sommes récemment intervenus pour poser les sols du cabinet d'assurances AXA Moiroud Labarrère. Il s'agit d'un projet complet de rénovation des revêtements de sol. L'objectif était clair : offrir à ce lieu très fréquenté un environnement à la fois élégant, résistant et parfaitement adapté aux exigences d'un espace professionnel accueillant du public au quotidien.",
      "Dès l'entrée, nous avons installé un tapis de propreté personnalisé, intégré dans la zone de passage. Ce tapis, conçu sur mesure, reprend fidèlement le logo de l'assurance AXA. Il renforce ainsi l'identité visuelle de l'agence dès le seuil franchi.",
      "Pour les autres espaces, bureaux, salles de réunion, circulations, nous avons sélectionné des revêtements adaptés à chaque usage : moquette pour le confort acoustique des bureaux, sol PVC pour la résistance des zones à fort trafic.",
    ],
  },
  {
    slug: 'pose-moquettes-sols-maison-de-maitre',
    title: "Moquettes et sols, Maison de maître",
    description: "Projet complet de pose des moquettes et sols pour une maison de maître particulière, plusieurs typologies de pièces.",
    image: '/images/projects/pose-moquettes-et-sols-maison.webp',
    date: '2025-11-20',
    year: '2025',
    sector: 'Résidentiel haut de gamme',
    location: 'La Rochelle',
    type: 'Moquette + sol PVC multi-pièces',
    body: [
      "Nous sommes intervenus récemment sur un projet complet regroupant plusieurs types de travaux de pose des moquettes et sols pour une maison de maître.",
      "Nous avons posé les sols dans la cuisine. Le revêtement choisi est résistant, facile à entretenir et adapté à un usage quotidien. Nous avons préparé le support, nivelé les zones irrégulières et appliqué le sol avec soin.",
      "Dans la salle de bain, nous avons posé une moquette spécialement conçue pour résister à l'humidité. Le matériau choisi est adapté aux pièces d'eau. Il offre un confort agréable sous le pied et une grande durabilité. Ce projet illustre notre capacité à adapter chaque revêtement aux contraintes spécifiques de chaque espace.",
    ],
  },
  {
    slug: 'pose-lames-pvc-couloir-sanitaires',
    title: "Lames PVC couloir et sanitaires + moquette chambres",
    description: "Pose de lames PVC dans couloir et sanitaires, moquette dans les chambres pour un maximum de confort.",
    image: '/images/projects/pose-de-lames-pvc-dans-le-couloir.webp',
    date: '2025-04-11',
    year: '2025',
    sector: 'Résidentiel',
    location: 'La Rochelle',
    type: 'PVC + moquette',
    body: [
      "Nous avons réalisé un projet complet visant à améliorer à la fois l'esthétique, le confort et la fonctionnalité des différents espaces pour des particuliers. L'intervention a débuté par la préparation minutieuse des supports, étape essentielle pour garantir la durabilité et la qualité des revêtements.",
      "Dans le couloir principal et dans les sanitaires, nous avons procédé à la pose de lames PVC, matériau particulièrement adapté aux zones de passage intensif grâce à sa résistance, sa facilité d'entretien et sa capacité à offrir une ambiance moderne et harmonieuse.",
      "Dans les chambres, nous avons opté pour la pose de moquette afin de privilégier le confort, la chaleur et l'isolation acoustique. Une combinaison cohérente entre les espaces de circulation techniques et les espaces de vie.",
    ],
  },
  {
    slug: 'amphitheatre-pvc-podotactiles',
    title: 'Amphithéâtre, PVC en lés, clous podotactiles, nez de marche',
    description: "Habillage des marches d'amphithéâtre en PVC en lés avec clous podotactiles acier zingué et nez de marche aluminium.",
    image: '/images/projects/amphitheatre-en-pvc.webp',
    date: '2023-12-04',
    year: '2023',
    sector: 'Collectivité / ERP',
    location: 'Charente-Maritime',
    type: 'PVC en lés + accessibilité PMR',
    body: [
      "L'habillage des marches de l'amphithéâtre en PVC en lés constitue une étape essentielle pour garantir l'esthétique, la sécurité et la durabilité de l'ouvrage. Notre intervention commence par une préparation minutieuse des supports, assurant une parfaite planéité et une adhérence optimale des revêtements.",
      "Les lés de PVC sont posés de manière à épouser chaque marche sans plis ni déformations, assurant une finition homogène sur l'ensemble des circulations. Le PVC est choisi pour sa robustesse et sa facilité d'entretien.",
      "Parallèlement, l'installation de clous podotactiles en acier zingué renforce la sécurité des usagers, notamment des personnes malvoyantes. L'implantation respecte les normes en vigueur en matière d'alignement et d'espacement. La découpe et la pose des nez de marche en aluminium ainsi que des cornières finalisent l'ouvrage.",
    ],
  },
  {
    slug: 'lames-plombantes-bureaux-multicolore',
    title: 'Lames plombantes multi-coloris, Bureaux',
    description: "Bureaux uniques avec pose de lames plombantes mêmes dimensions mais différents coloris, espace modulable et structuré.",
    image: '/images/projects/pose-de-lames-plombantes.webp',
    date: '2023-12-04',
    year: '2023',
    sector: 'Tertiaire',
    location: 'Charente-Maritime',
    type: 'Lames PVC plombantes',
    body: [
      "Dans le cadre d'un projet particulièrement exigeant, nous avons été sollicités pour réaliser l'aménagement intégral de bureaux. Nous avons réalisé la pose de lames plombantes de mêmes dimensions, mais déclinées dans différents coloris.",
      "Ce projet, à la fois technique et esthétique, repose sur une volonté claire du client : créer un espace de travail unique, modulable et visuellement structuré, tout en préservant une atmosphère chaleureuse et professionnelle.",
      "Nous commençons par une analyse précise des volumes, de la luminosité et des flux de circulation. Nous déterminons ensuite la répartition des coloris pour traduire visuellement les zones d'usage tout en gardant une cohérence d'ensemble.",
    ],
  },
  {
    slug: 'lames-pvc-multicolore-salon-cuisine',
    title: 'Lames PVC multi-coloris, Séparation salon, cuisine, salle de bain',
    description: "Séparation salon / cuisine d'un habitat avec lames PVC de différents coloris. Délimitation sans cloison.",
    image: '/images/projects/pose-pvc-de-differents-coloris.webp',
    date: '2023-12-04',
    year: '2023',
    sector: 'Résidentiel',
    location: 'La Rochelle',
    type: 'Lames PVC zonage',
    body: [
      "Dans le cadre de ce projet, nous sommes intervenus pour repenser entièrement l'organisation visuelle et fonctionnelle des espaces de vie. Nous avons joué exclusivement sur le revêtement de sol afin de créer des séparations naturelles sans recourir à des cloisons.",
      "Dans la pièce principale, la demande était de distinguer clairement l'espace salon de l'espace cuisine tout en conservant une continuité harmonieuse. Pour y parvenir, nous avons sélectionné des lames PVC de différents coloris, soigneusement choisies pour leurs nuances complémentaires.",
      "Nous avons opté pour des teintes chaleureuses et légèrement contrastées qui structurent les zones tout en préservant l'unité visuelle du lieu. Une approche élégante du zonage par le sol, qui évite cloisonnement et perte de lumière.",
    ],
  },
]

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return realisations.find((r) => r.slug === slug)
}
