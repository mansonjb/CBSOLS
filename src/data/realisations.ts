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
  /** Galerie de photos additionnelles, affichée en plein-largeur sous le body */
  gallery?: { src: string; caption?: string }[]
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
    gallery: [
      { src: '/images/projects/tapis-sur-mesure-hotel-la-baronnie/01.jpg', caption: 'Tapis sur mesure dans le salon de l\'hôtel La Baronnie' },
      { src: '/images/projects/tapis-sur-mesure-hotel-la-baronnie/02.jpg', caption: "Ambiance générale, intégration du tapis au décor de l'hôtel" },
      { src: '/images/projects/tapis-sur-mesure-hotel-la-baronnie/03.jpg', caption: 'Détail du motif choisi pour le tapis' },
      { src: '/images/projects/tapis-sur-mesure-hotel-la-baronnie/04.jpg', caption: 'Angle du tapis avec finition surjet' },
      { src: '/images/projects/tapis-sur-mesure-hotel-la-baronnie/05.jpg', caption: 'Surjet sur mesure, finition haut de gamme' },
      { src: '/images/projects/tapis-sur-mesure-hotel-la-baronnie/06.jpg', caption: 'Zoom sur la matière du tapis' },
      { src: '/images/projects/tapis-sur-mesure-hotel-la-baronnie/07.jpg', caption: 'Tapis en place, vue rapprochée du coin' },
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
    gallery: [
      { src: '/images/projects/moquettes-sols-golf-de-la-pree/01.jpg', caption: 'Jonction moquette / sol PVC, salle de restauration' },
      { src: '/images/projects/moquettes-sols-golf-de-la-pree/02.jpg', caption: 'Pose moquette et nez de marche, circulation' },
      { src: '/images/projects/moquettes-sols-golf-de-la-pree/03.jpg', caption: 'Zoom sur la moquette du Golf de la Prée' },
      { src: '/images/projects/moquettes-sols-golf-de-la-pree/04.jpg', caption: 'Moquette des bureaux administratifs' },
      { src: '/images/projects/moquettes-sols-golf-de-la-pree/05.jpg', caption: 'Détail de la jonction moquette / sol souple' },
      { src: '/images/projects/moquettes-sols-golf-de-la-pree/06.jpg', caption: 'Clous podotactiles en acier zingué, conformité PMR' },
      { src: '/images/projects/moquettes-sols-golf-de-la-pree/07.jpg', caption: 'Vue de la salle de restauration achevée' },
    ],
  },
  {
    slug: 'pose-moquette-bistro-grande-terrasse',
    title: 'Pose moquette, Bistrot de la Grande Terrasse',
    description: "Rénovation de la moquette du Bistrot de la Grande Terrasse à Châtelaillon-Plage. Confort visuel et acoustique renforcé.",
    image: '/images/projects/pose-moquette-bistro-de-la-grande-terrasse.webp',
    date: '2025-12-05',
    year: '2025',
    sector: 'Restauration',
    location: 'Châtelaillon-Plage',
    client: 'Bistrot de la Grande Terrasse',
    type: 'Moquette acoustique salle',
    body: [
      "Notre entreprise vient de réaliser un nouveau projet pour le Bistrot de la Grande Terrasse. Après la rénovation complète de l'hôtel en 2017, l'établissement souhaitait actualiser l'ambiance de son espace de restauration. Nous avons ainsi remplacé l'ancienne moquette du bistro par un modèle plus contemporain.",
      "Ce choix marque une nouvelle étape dans la modernisation du lieu. Il permet aussi d'offrir un confort visuel et acoustique renforcé.",
      "CB Sols a assuré chaque étape du projet. Nous avons préparé les supports, vérifié les niveaux et contrôlé l'adhérence. L'équipe a ensuite découpé et posé la moquette dans le respect du planning d'exploitation, sans interrompre l'activité du restaurant.",
    ],
    gallery: [
      { src: '/images/projects/pose-moquette-bistro-grande-terrasse/01.jpg', caption: 'Ambiance générale du Bistrot après pose de la nouvelle moquette' },
      { src: '/images/projects/pose-moquette-bistro-grande-terrasse/02.jpg', caption: 'Salle du bistro et son mobilier sur la nouvelle moquette' },
      { src: '/images/projects/pose-moquette-bistro-grande-terrasse/03.jpg', caption: 'Carte du Bistrot de la Grande Terrasse' },
      { src: '/images/projects/pose-moquette-bistro-grande-terrasse/04.jpg', caption: 'Ambiance moquette, teintes contemporaines' },
      { src: '/images/projects/pose-moquette-bistro-grande-terrasse/05.jpg', caption: 'Zoom sur la texture et le motif de la moquette' },
      { src: '/images/projects/pose-moquette-bistro-grande-terrasse/06.jpg', caption: "Vue d'ensemble de la salle posée" },
      { src: '/images/projects/pose-moquette-bistro-grande-terrasse/07.jpg', caption: 'Coin de salle, finition propre en périphérie' },
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
    gallery: [
      { src: '/images/projects/moquettes-restaurant-gaya-grande-terrasse/01.jpg', caption: 'Salle du Gaya avec moquette sur mesure ABP Architectes' },
      { src: '/images/projects/moquettes-restaurant-gaya-grande-terrasse/02.jpg', caption: 'Détail de la pose, ambiance maritime contemporaine' },
      { src: '/images/projects/moquettes-restaurant-gaya-grande-terrasse/03.jpg', caption: 'Vue de la salle à manger gastronomique' },
      { src: '/images/projects/moquettes-restaurant-gaya-grande-terrasse/04.jpg', caption: 'Motifs et nuances dessinés pour le restaurant Gaya' },
      { src: '/images/projects/moquettes-restaurant-gaya-grande-terrasse/05.jpg', caption: 'Ambiance chic du restaurant après pose' },
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
      label: 'Restaurant 3 étoiles',
    },
    gallery: [
      { src: '/images/projects/moquettes-restaurant-etoile-la-rochelle/01.jpg', caption: 'Salle de restauration face à l\'océan, moquette sur mesure' },
      { src: '/images/projects/moquettes-restaurant-etoile-la-rochelle/02.jpg', caption: 'Détail texture de la moquette' },
      { src: '/images/projects/moquettes-restaurant-etoile-la-rochelle/03.jpg', caption: 'Gros plan, teintes inspirées de l\'océan' },
      { src: '/images/projects/moquettes-restaurant-etoile-la-rochelle/04.jpg', caption: 'Tables dressées sur la moquette posée' },
      { src: '/images/projects/moquettes-restaurant-etoile-la-rochelle/05.jpg', caption: 'Sol moquette, salle gastronomique étoilée' },
      { src: '/images/projects/moquettes-restaurant-etoile-la-rochelle/06.jpg', caption: 'Salle et tables, détail de la pose' },
      { src: '/images/projects/moquettes-restaurant-etoile-la-rochelle/07.jpg', caption: 'Vue d\'ensemble de la salle du restaurant étoilé' },
    ],
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
    gallery: [
      { src: '/images/projects/pose-moquettes-circulations-grande-terrasse/01.jpg', caption: 'Moquette des circulations de l\'hôtel La Grande Terrasse' },
      { src: '/images/projects/pose-moquettes-circulations-grande-terrasse/02.jpg', caption: 'Pose moquette dans les couloirs de l\'hôtel 4 étoiles' },
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
    gallery: [
      { src: '/images/projects/sols-bureau-cabinet-comptable-groupe-excel/01.jpg', caption: 'Lames PVC imitation bois, bureau du Groupe Excel' },
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
    gallery: [
      { src: '/images/projects/pose-sols-cabinet-axa-la-rochelle/01.jpg', caption: 'Moquette des bureaux du cabinet AXA' },
      { src: '/images/projects/pose-sols-cabinet-axa-la-rochelle/02.jpg', caption: "Hall d'accueil du cabinet d'assurance" },
      { src: '/images/projects/pose-sols-cabinet-axa-la-rochelle/03.jpg', caption: 'Raccordement des sols PVC en lés' },
      { src: '/images/projects/pose-sols-cabinet-axa-la-rochelle/04.jpg', caption: 'Tapis de propreté personnalisé au logo AXA' },
      { src: '/images/projects/pose-sols-cabinet-axa-la-rochelle/05.jpg', caption: 'Moquette à damier pour les bureaux' },
      { src: '/images/projects/pose-sols-cabinet-axa-la-rochelle/06.jpg', caption: 'Moquette de l\'espace de circulation' },
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
    gallery: [
      { src: '/images/particuliers/photo-7.jpg', caption: "Vue d'ensemble de la cuisine ouverte avec sol PVC parquet et zone terrazzo" },
      { src: '/images/particuliers/photo-2.jpg', caption: "Cuisine équipée, sol PVC effet parquet avec délimitation terrazzo sous l'îlot" },
      { src: '/images/particuliers/photo-3.jpg', caption: "Détail de la transition terrazzo / parquet sous l'îlot central" },
      { src: '/images/particuliers/photo-9.jpg', caption: "Transition diagonale terrazzo / parquet à un seuil de porte" },
      { src: '/images/particuliers/photo-5.jpg', caption: "Plongée sur la finition entre parquet et terrazzo" },
      { src: '/images/particuliers/photo-6.jpg', caption: "Espace repas, lame PVC effet bois et bande terrazzo" },
      { src: '/images/particuliers/photo-4.jpg', caption: "Vue depuis la cuisine vers le salon, parquet continu" },
      { src: '/images/particuliers/photo-1.jpg', caption: "Couloir de la maison ancienne, parquet PVC posé sur l'existant" },
      { src: '/images/particuliers/photo-8.jpg', caption: "Détail de la pose au pied d'un meuble, parquet PVC continu" },
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
    gallery: [
      { src: '/images/projects/pose-lames-pvc-couloir-sanitaires/01.jpg', caption: 'Lames PVC et moquette posées dans le couloir' },
      { src: '/images/projects/pose-lames-pvc-couloir-sanitaires/02.jpg', caption: 'Détail de la finition moquette / lames PVC' },
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
    gallery: [
      { src: '/images/projects/amphitheatre-pvc-podotactiles/01.jpg', caption: 'Amphithéâtre habillé en PVC en lés avec nez de marche aluminium' },
      { src: '/images/projects/amphitheatre-pvc-podotactiles/02.jpg', caption: 'Installation des clous podotactiles en acier zingué' },
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
    gallery: [
      { src: '/images/projects/lames-plombantes-bureaux-multicolore/01.jpg', caption: 'Lames plombantes PVC posées en coloris variés' },
      { src: '/images/projects/lames-plombantes-bureaux-multicolore/02.jpg', caption: 'Bureau aménagé avec revêtement PVC en lames plombantes' },
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
    gallery: [
      { src: '/images/projects/lames-pvc-multicolore-salon-cuisine/01.jpg', caption: 'Sol PVC, séparation salon / cuisine par les lames' },
      { src: '/images/projects/lames-pvc-multicolore-salon-cuisine/02.jpg', caption: 'Séparation salon / cuisine et incrustation d\'un tapis d\'accueil' },
      { src: '/images/projects/lames-pvc-multicolore-salon-cuisine/03.jpg', caption: 'Salle de bain, lames imitation bois et dalles terrazzo' },
    ],
  },
]

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return realisations.find((r) => r.slug === slug)
}
