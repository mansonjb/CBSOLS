export interface Solution {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  serviceSlug: string
  serviceName: string
  sectorSlug: string
  sectorName: string
  headline: string
  tagline: string
  intro: string
  specificChallenges: string[]
  ourApproach: string[]
  keyProducts: { name: string; desc: string }[]
  references: string[]
  faq: { q: string; a: string }[]
}

export const solutions: Solution[] = [
  {
    slug: 'moquette-hotel',
    title: 'Moquette Hôtel',
    metaTitle: 'Moquette Hôtel Charente-Maritime — Pose Professionnelle CB Sols',
    metaDescription: 'Pose de moquette hôtelière en Charente-Maritime. CB Sols équipe hôtels 2 à 5 étoiles : chambres, couloirs, lobbys. Certifié EGE & Balsan. Devis gratuit.',
    serviceSlug: 'pose-moquette',
    serviceName: 'Pose de Moquette',
    sectorSlug: 'hotellerie',
    sectorName: 'Hôtellerie',
    headline: 'Moquette hôtelière',
    tagline: 'Des sols à la hauteur de vos étoiles',
    intro: "La moquette hôtelière n'est pas une moquette ordinaire. Elle doit absorber le bruit entre les chambres, résister à des milliers de passages par an, se nettoyer en 2h d'injection-extraction sans fermeture, et raconter l'identité visuelle de votre établissement. CB Sols installe des moquettes hôtelières en Charente-Maritime depuis 25 ans, de l'Île de Ré à Royan.",
    specificChallenges: [
      'Passages intensifs en couloirs (200+ allers-retours/jour)',
      'Normes incendie obligatoires : Bfl-s1 (classement EU)',
      'Cohérence esthétique entre chambres, couloirs et espaces communs',
      'Intervention sans fermeture de l\'établissement',
      'Résistance aux chariots de ménage et bagagerie',
    ],
    ourApproach: [
      'Sélection de moquettes EGE et Balsan certifiées Bfl-s1',
      'Consultation showroom pour choisir motifs et coloris en coordination avec votre décorateur',
      'Devis détaillé avec planning d\'intervention chambre par chambre',
      'Pose nocturne ou en rotation pour maintenir l\'activité',
      'Contrat d\'entretien annuel injection-extraction disponible',
    ],
    keyProducts: [
      { name: 'EGE Hospitality Collection', desc: 'Moquettes conçues spécifiquement pour l\'hôtellerie, certifiées Bfl-s1, résistance au trafic intense' },
      { name: 'Balsan Contract', desc: 'Large gamme de motifs et textures, excellente résistance, idéal pour les chambres et parties communes' },
      { name: 'Tapis sur mesure', desc: 'Création de tapis d\'accueil et de salon avec logo ou motif exclusif pour les lobbys et salons' },
    ],
    references: [
      'Hôtel La Baronnie — Saint-Martin-de-Ré : tapis sur mesure motif exclusif + moquette EGE, 600 m²',
      'Résidences de tourisme Île de Ré : chambres et couloirs, 8 hébergements équipés',
      'Hôtels La Rochelle centre : rénovation partielle par rotation, sans interruption d\'activité',
    ],
    faq: [
      { q: 'Quelle moquette choisir pour un hôtel 4 étoiles ?', a: 'Pour un hôtel 4 étoiles, nous recommandons une moquette tuftée ou tissée de la gamme EGE Hospitality ou Balsan Contract, en classement Bfl-s1. Le grammage minimal est 800g/m² en couloir, 600g/m² en chambre. CB Sols vous présente des échantillons en showroom et peut créer un motif exclusif pour votre établissement.' },
      { q: 'Peut-on poser la moquette sans fermer l\'hôtel ?', a: 'Oui. CB Sols travaille en rotation : nous posons dans les chambres vides pendant que les autres restent occupées. Pour les couloirs, nous intervenons la nuit ou en semaine creuse selon votre planning. Zéro fermeture nécessaire pour la majorité des chantiers hôteliers.' },
      { q: 'Combien coûte la moquette hôtelière ?', a: 'Une moquette hôtelière de qualité coûte entre 35 et 80€/m² posée, selon le produit choisi et la surface. CB Sols établit un devis gratuit et détaillé après visite. Pour un hôtel 20 chambres de 18m² (couloir compris), comptez un budget de 25 000 à 45 000€ fourni posé.' },
      { q: 'CB Sols intervient-il sur toute la Charente-Maritime ?', a: "Oui, nous équipons des hôtels de La Rochelle à l'Île de Ré, l'Île d'Oléron, Royan et tout le département 17." },
    ],
  },
  {
    slug: 'moquette-restaurant',
    title: 'Moquette Restaurant',
    metaTitle: 'Moquette Restaurant & Brasserie — Pose Pro Charente-Maritime',
    metaDescription: 'Moquette acoustique pour restaurants en Charente-Maritime. CB Sols : pose en 48h, produits professionnels, résistance aux taches. Devis gratuit.',
    serviceSlug: 'pose-moquette',
    serviceName: 'Pose de Moquette',
    sectorSlug: 'restauration',
    sectorName: 'Restauration',
    headline: 'Moquette pour restaurants',
    tagline: "L'acoustique, l'ambiance, la durabilité",
    intro: "En restauration, le sol est un outil acoustique autant qu'esthétique. Une moquette bien choisie réduit le niveau sonore de 8 à 12 dB dans une salle — la différence entre une ambiance agréable et un brouhaha invivable. CB Sols pose des moquettes dans des restaurants gastronomiques, brasseries et cafés de Charente-Maritime depuis 1999.",
    specificChallenges: [
      'Niveau sonore excessif (bruit de couverts, conversations, cuisine)',
      'Résistance aux taches : vin, sauces, café',
      'Facilité de nettoyage intensif quotidien',
      'Durée de pose minimale : fermeture 1 à 2 nuits maximum',
      'Esthétique adaptée au positionnement (gastro, brasserie, bistrot)',
    ],
    ourApproach: [
      'Sélection de produits hydrofuges traitement Scotchgard ou équivalent',
      'Devis sous 48h, pose en 1 à 2 nuits selon la surface',
      'Conseil esthétique en showroom : coloris, texture, niveau de structure',
      'Pose précise autour du mobilier sans déménagement complet',
    ],
    keyProducts: [
      { name: 'Balsan Acoustic', desc: 'Moquette acoustique haute performance, traitement taches, idéale pour les salles de restaurant' },
      { name: 'EGE Restaurant Collection', desc: 'Motifs discrets et résistants, absorption phonique certifiée, entretien facilité' },
      { name: 'Tapis de délimitation sur mesure', desc: 'Tapis sur mesure pour créer des zones (bar, salle privée, terrasse couverte)' },
    ],
    references: [
      'Restaurant Christopher Coutanceau — La Rochelle : moquette sur mesure, 220 m²',
      'Bistrot de la Grande Terrasse — La Rochelle : moquette acoustique, 280 m²',
      'Restaurant Gaya — La Rochelle : réfection complète salle principale, 180 m²',
    ],
    faq: [
      { q: 'La moquette est-elle hygiénique dans un restaurant ?', a: "Oui, avec les bons produits. Les moquettes professionnelles sont traitées anti-taches et anti-bactéries. Un nettoyage hebdomadaire à l'injection-extraction suffit pour maintenir une hygiène irréprochable. CB Sols vous recommande les produits d'entretien adaptés lors de la livraison." },
      { q: 'Peut-on poser en 1 nuit pour ne pas fermer le restaurant ?', a: "Oui pour les surfaces jusqu'à 150 m². Au-delà, nous intervenons sur 2 nuits consécutives. L'équipe CB Sols commence après le dernier service et finit avant l'ouverture. Zéro perturbation pour votre clientèle." },
      { q: 'Quelle moquette choisir pour un restaurant gastronomique ?', a: "Pour un établissement gastronomique, nous recommandons une moquette tissée ou tuftée niveau de gamme supérieur (EGE Prestige ou Balsan Contract Premium), dans des tons sobres qui valorisent la mise en scène de la salle. Le choix du motif se fait en showroom avec des échantillons en conditions réelles." },
    ],
  },
  {
    slug: 'moquette-bureau',
    title: 'Moquette Bureau & Open Space',
    metaTitle: 'Moquette Bureau Open Space — Pose Pro Charente-Maritime',
    metaDescription: 'Moquette dalles ou rouleaux pour bureaux en Charente-Maritime. CB Sols : pose le week-end, sans interruption activité. Résistance roulettes. Devis gratuit.',
    serviceSlug: 'pose-moquette',
    serviceName: 'Pose de Moquette',
    sectorSlug: 'bureaux-entreprises',
    sectorName: 'Bureaux & Entreprises',
    headline: 'Moquette pour bureaux',
    tagline: 'Concentrez-vous. Le sol travaille pour vous.',
    intro: "En bureau, la moquette améliore la concentration, réduit la fatigue auditive et absorbe les bruits de pas — un impact direct sur la productivité. CB Sols installe des moquettes dalles et rouleaux dans les bureaux, open spaces, salles de réunion et cabinets de Charente-Maritime, avec pose le week-end pour ne jamais interrompre votre activité.",
    specificChallenges: [
      'Résistance aux roulettes de chaises de bureau (abrasion)',
      'Acoustique : réduction des bruits de pas et conversations',
      'Intervention sans interrompre l\'activité',
      'Remplacement partiel possible (dalles)',
      'Image professionnelle et contemporaine',
    ],
    ourApproach: [
      'Dalles de moquette pour remplacement partiel facile',
      'Gammes spécifiques résistance roulettes (classe 33-34)',
      'Pose le week-end : installation vendredi soir, livraison lundi matin',
      'Conseil couleur et texture pour un espace de travail inspirant',
    ],
    keyProducts: [
      { name: 'Interface Modular Collection', desc: 'Dalles moquette premium, résistance roulettes classe 33, nombreux coloris et motifs géométriques' },
      { name: 'EGE Office', desc: 'Moquette bureau haute résistance, certification GUT (sans émission), idéale open space' },
      { name: 'Balsan Loop', desc: 'Boucle velours résistant aux roulettes, facile d\'entretien, nombreux coloris sobres et professionnels' },
    ],
    references: [
      'Bureaux Charente-Maritime — 350 m² : dalles moquette Interface, pose le week-end',
      'Cabinets comptables La Rochelle : moquette rouleau intégral, 180 m²',
      'Open space PME La Rochelle : rénovation par zones sans interruption, 220 m²',
    ],
    faq: [
      { q: 'Dalles ou moquette en rouleau pour un bureau ?', a: "Les dalles sont idéales si vous avez des passages de câbles à prévoir ou si vous souhaitez pouvoir remplacer des zones usées sans refaire tout le sol. La moquette en rouleau est moins chère et donne un rendu plus homogène. CB Sols vous conseille selon votre budget et l'usage de vos espaces." },
      { q: 'La pose peut-elle vraiment se faire en 1 week-end ?', a: "Oui. CB Sols est habitué aux chantiers de bureau réalisés intégralement en week-end. Pour un plateau de 300 m², une équipe de 2-3 poseurs travaille du vendredi soir au dimanche. Vous retrouvez vos bureaux opérationnels lundi matin." },
    ],
  },
  {
    slug: 'moquette-ehpad',
    title: 'Moquette EHPAD & Établissements de Santé',
    metaTitle: 'Moquette EHPAD Charente-Maritime — Normes, Pose, Entretien',
    metaDescription: 'Moquette pour EHPAD et établissements de santé en Charente-Maritime. CB Sols : produits certifiés, pose en milieu occupé, normes PMR. Devis gratuit.',
    serviceSlug: 'pose-moquette',
    serviceName: 'Pose de Moquette',
    sectorSlug: 'sante-ehpad',
    sectorName: 'Santé & EHPAD',
    headline: 'Moquette pour EHPAD',
    tagline: 'Confort, hygiène et sécurité pour vos résidents',
    intro: "La moquette dans un EHPAD n'est pas un luxe — c'est un choix médical. Elle réduit le bruit entre les chambres (confort des résidents), amortit les chutes (sécurité), et peut être conçue pour guider les personnes désorientées grâce aux contrastes de couleurs. CB Sols maîtrise les normes spécifiques aux établissements de santé et intervient en milieu occupé.",
    specificChallenges: [
      'Conformité normes incendie Euroclasse Bfl-s1',
      'Antidérapance et amortissement des chutes',
      'Résistance aux produits désinfectants',
      'Accessibilité PMR (pas de seuil, joints de dilatation)',
      'Pose en milieu occupé sans perturber les résidents',
    ],
    ourApproach: [
      'Sélection de produits certifiés RABC et Bfl-s1',
      'Contrastes de couleurs pour le guidage des personnes atteintes de troubles cognitifs',
      'Travail chambre par chambre pour ne pas déplacer les résidents',
      'Coordination avec les équipes soignantes pour minimiser les nuisances',
    ],
    keyProducts: [
      { name: 'EGE Healthcare', desc: 'Collection spécifique EHPAD et hôpitaux, Bfl-s1, antidérapance R9, résistance désinfectants' },
      { name: 'Balsan Santé', desc: 'Moquette certifiée établissements de santé, nombreux coloris pour guidage chromatique' },
    ],
    references: [
      'EHPAD Charente-Maritime : moquette couloirs et chambres, pose par zones',
      'Cabinets médicaux La Rochelle : sol acoustique salles d\'attente',
    ],
    faq: [
      { q: 'La moquette est-elle autorisée dans un EHPAD ?', a: "Oui, à condition qu'elle soit certifiée Bfl-s1 (résistance au feu) et RABC (hygiène). Les produits sélectionnés par CB Sols répondent à ces exigences. La moquette est d'ailleurs recommandée dans les espaces résidentiels (chambres, couloirs) pour son confort acoustique et sa capacité à amortir les chutes." },
      { q: 'Comment gérer la pose sans perturber les résidents ?', a: "CB Sols travaille chambre par chambre, en accord avec le planning établissement. Nous déplaçons le mobilier et le réinstallons avant que le résident retrouve sa chambre. Pour les couloirs, l'intervention se fait de nuit ou par moitiés." },
    ],
  },
  {
    slug: 'sol-pvc-restaurant',
    title: 'Sol PVC Restaurant & Cuisine Pro',
    metaTitle: 'Sol PVC Cuisine Professionnelle Charente-Maritime — CB Sols',
    metaDescription: 'Sol PVC pour cuisines professionnelles et restaurants en Charente-Maritime. Soudé à chaud, sans joints, nettoyage intensif. Devis gratuit CB Sols.',
    serviceSlug: 'sol-pvc-les',
    serviceName: 'Sol PVC Lés',
    sectorSlug: 'restauration',
    sectorName: 'Restauration',
    headline: 'Sol PVC pour restaurants',
    tagline: 'Hygiène maximale, résistance absolue',
    intro: "En cuisine professionnelle, le sol est une question d'hygiène réglementaire. Le PVC en lés soudé à chaud élimine tous les joints — aucun endroit où les bactéries peuvent s'accumuler. CB Sols installe des sols PVC dans les cuisines professionnelles, restaurants, brasseries et traiteurs de Charente-Maritime, avec des produits certifiés normes HACCP.",
    specificChallenges: [
      'Hygiène HACCP : zéro joint, zéro rétention bactérienne',
      'Résistance aux graisses, acides et produits de nettoyage industriels',
      'Antidérapance obligatoire (R10/R11 en cuisine chaude)',
      'Remontes en plinthe pour étanchéité totale',
      'Durabilité face aux équipements roulants lourds',
    ],
    ourApproach: [
      'PVC en lés soudé à chaud — zéro joint visible',
      'Remontées en plinthe soudées pour étanchéité sol/mur',
      'Produits certifiés R10/R11 selon zones (cuisine chaude, plonge)',
      'Couleur claire ou sombre selon les préconisations HACCP',
    ],
    keyProducts: [
      { name: 'Gerflor Taralay Premium', desc: 'PVC lés professionnel, R10/R11, résistance totale aux graisses et désinfectants, normes cuisine pro' },
      { name: 'Forbo Novilon', desc: 'Sol vinyle haute résistance pour cuisines professionnelles, nombreuses certifications hygiène' },
    ],
    references: [
      'Cuisine professionnelle La Rochelle : PVC soudé à chaud 80 m², remontées plinthes',
      'Restaurants étoilés Charente-Maritime : cuisines et offices équipés',
    ],
    faq: [
      { q: 'Quelle différence entre PVC lés soudé et PVC clipsé pour une cuisine pro ?', a: "Le PVC lés soudé à chaud crée un revêtement parfaitement continu, sans aucun joint. C'est la seule solution conforme aux normes HACCP pour une cuisine professionnelle. Le PVC clipsé (lames ou dalles) laisse des interstices qui retiennent les graisses et les bactéries — non recommandé en cuisine chaude." },
      { q: 'Combien de temps dure la pose d\'un sol PVC en cuisine professionnelle ?', a: "Pour une cuisine de 50 à 100 m², comptez 1 à 2 jours de pose. CB Sols s'adapte à vos horaires pour intervenir hors service (nuit ou jour de fermeture)." },
    ],
  },
  {
    slug: 'sol-pvc-hotel',
    title: 'Sol PVC Hôtel — Espaces Communs & Salles de Bain',
    metaTitle: 'Sol PVC Hôtel Charente-Maritime — Salles de Bain, Couloirs, Spa',
    metaDescription: 'Sol PVC et douche intégrale PVC pour hôtels en Charente-Maritime. CB Sols : résistance à l\'eau, esthétique premium, pose sans fermeture. Devis gratuit.',
    serviceSlug: 'sol-pvc-les',
    serviceName: 'Sol PVC',
    sectorSlug: 'hotellerie',
    sectorName: 'Hôtellerie',
    headline: 'Sol PVC pour hôtels',
    tagline: 'Élégance et résistance dans chaque salle de bain',
    intro: "Si la moquette règne dans les chambres et couloirs hôteliers, le PVC s'impose dans les salles de bain, les espaces spa, les cuisines et les circulations de service. CB Sols combine moquette et PVC dans une même intervention pour un résultat cohérent et parfaitement adapté à chaque zone de votre établissement.",
    specificChallenges: [
      'Résistance à l\'eau et à l\'humidité constante (SDB, spa)',
      'Esthétique premium assortie à la décoration de l\'hôtel',
      'Antidérapance dans les zones mouillées',
      'Facilité d\'entretien par les équipes de ménage',
      'Normes incendie',
    ],
    ourApproach: [
      'Douche intégrale PVC sans joints pour les SDB (étanchéité totale)',
      'Lames ou dalles PVC imitation bois/pierre pour les espaces communs',
      'Coordination avec la pose moquette pour un chantier unique',
      'Pose par rotation sans fermeture de l\'hôtel',
    ],
    keyProducts: [
      { name: 'Gerflor Texline', desc: 'PVC lés premium, esthétique bois ou pierre, parfait pour les couloirs et SDB hôtelières' },
      { name: 'Tarkett iD Inspiration', desc: 'Lames PVC haut de gamme, résistance à l\'eau totale, nombreux décors contemporains' },
    ],
    references: [
      'Hôtels Île de Ré : SDB douches intégrales PVC + moquette chambres',
      'Résidences de tourisme La Rochelle : sols PVC espaces communs et parties privatives',
    ],
    faq: [
      { q: 'Douche intégrale PVC ou faïence pour les SDB d\'hôtel ?', a: "La douche intégrale PVC est plus rapide à poser (1/2 journée par SDB vs 2 jours pour la faïence), 100% étanche dès la pose, et plus facile à entretenir. Pour un hôtel en rénovation qui veut minimiser la fermeture, c'est la solution privilégiée. Le rendu esthétique est aujourd'hui très proche de la faïence avec les collections modernes." },
    ],
  },
  {
    slug: 'sol-pvc-ehpad',
    title: 'Sol PVC EHPAD & Établissements de Santé',
    metaTitle: 'Sol PVC EHPAD Charente-Maritime — Normes, Antidérapant, Pose',
    metaDescription: 'Sol PVC pour EHPAD, cliniques et établissements de santé en Charente-Maritime. CB Sols : produits certifiés R9/R10, pose en milieu occupé. Devis gratuit.',
    serviceSlug: 'sol-pvc-les',
    serviceName: 'Sol PVC Lés',
    sectorSlug: 'sante-ehpad',
    sectorName: 'Santé & EHPAD',
    headline: 'Sol PVC pour EHPAD',
    tagline: 'Sécurité, hygiène et accessibilité',
    intro: "Le sol PVC en lés soudé à chaud est la solution de référence pour les circulations, salles de soins et espaces sanitaires des établissements de santé. Certifié R9 (antidérapant), sans joints, résistant à tous les désinfectants, il répond aux normes RABC et aux exigences PMR. CB Sols intervient en milieu occupé, en coordination avec vos équipes.",
    specificChallenges: [
      'Antidérapance réglementaire R9 minimum',
      'Résistance aux produits désinfectants et de blanchiment',
      'Accessibilité PMR (pas de seuil, transition douce)',
      'Normes incendie Bfl-s1',
      'Pose sans perturbation des résidents',
    ],
    ourApproach: [
      'PVC lés soudé à chaud, certification RABC et Bfl-s1',
      'Guidage chromatique par les sols pour les troubles cognitifs',
      'Pose zone par zone en accord avec le planning médical',
      'Formation des équipes d\'entretien sur les protocoles de nettoyage',
    ],
    keyProducts: [
      { name: 'Gerflor Tarasafe', desc: 'PVC antidérapant certifié R10/R11, spécial milieu médical, résistance désinfectants' },
      { name: 'Forbo Safestep', desc: 'Sol vinyle antidérapant pour établissements de santé, normes RABC, nombreux coloris' },
    ],
    references: [
      'EHPAD Charente-Maritime : circulations et chambres, pose par zones',
      'Cliniques La Rochelle : salles de soins et couloirs',
    ],
    faq: [
      { q: 'Quelle certification est obligatoire pour un sol PVC en EHPAD ?', a: "Le sol PVC en EHPAD doit être classé Bfl-s1 (résistance au feu selon la norme Euroclasse), R9 minimum en antidérapance, et compatible avec les protocoles RABC (contrôle bactériologique). Les produits CB Sols répondent à toutes ces exigences." },
    ],
  },
  {
    slug: 'tapis-sur-mesure-hotel',
    title: 'Tapis Sur Mesure Hôtel',
    metaTitle: 'Tapis Sur Mesure Hôtel Charente-Maritime — Création Exclusive CB Sols',
    metaDescription: 'Création de tapis sur mesure pour hôtels en Charente-Maritime. Motif exclusif, logo, dimensions custom. CB Sols : 25 ans d\'expertise. Devis gratuit.',
    serviceSlug: 'tapis-sur-mesure',
    serviceName: 'Tapis sur mesure',
    sectorSlug: 'hotellerie',
    sectorName: 'Hôtellerie',
    headline: 'Tapis sur mesure pour hôtels',
    tagline: 'L\'identité de votre établissement sous les pieds de vos clients',
    intro: "Un tapis sur mesure dans le lobby d'un hôtel, c'est souvent le premier souvenir qu'un client emporte. CB Sols crée des tapis avec motifs exclusifs, logo intégré et dimensions sur mesure pour les établissements hôteliers de Charente-Maritime — de l'hôtel boutique à la résidence de tourisme haut de gamme.",
    specificChallenges: [
      'Cohérence avec l\'identité visuelle de l\'établissement',
      'Résistance aux passages intensifs dans les zones d\'accueil',
      'Dimensions non standard (escaliers, formes complexes)',
      'Délais de fabrication à intégrer dans le planning de rénovation',
    ],
    ourApproach: [
      'Conception en collaboration avec votre décorateur ou architecte d\'intérieur',
      'Présentation de prototypes coloris avant fabrication',
      'Fabrication sur mesure avec partenaires EGE et Balsan',
      'Pose précise avec finitions bordures soignées',
    ],
    keyProducts: [
      { name: 'EGE Custom Collection', desc: 'Tapis sur mesure avec motif exclusif créé par vos soins ou par le studio design EGE' },
      { name: 'Balsan Axminster', desc: 'Tapis tissés Axminster, motifs complexes possibles, qualité hôtelière internationale' },
    ],
    references: [
      'Hôtel La Baronnie — Île de Ré : tapis motif exclusif pour espaces communs et chambres, 600 m²',
      'Résidences de tourisme Charente-Maritime : tapis lobby sur mesure',
    ],
    faq: [
      { q: 'Quel est le délai pour un tapis hôtelier sur mesure ?', a: "Comptez 6 à 10 semaines entre la validation du motif et la pose. CB Sols coordonne la fabrication avec nos partenaires (EGE, Balsan) et intègre la livraison dans votre planning de rénovation." },
      { q: 'Peut-on intégrer le logo de l\'hôtel dans un tapis ?', a: "Oui. Le logo peut être intégré dans le motif du tapis (technique de tissage ou impression) ou servir de point de départ pour créer un motif dérivé. CB Sols vous accompagne dans la définition du brief créatif." },
    ],
  },
  {
    slug: 'sol-pvc-camping',
    title: 'Sol PVC Camping & Mobil-Home',
    metaTitle: 'Sol PVC Camping Mobil-Home Charente-Maritime — Pose CB Sols',
    metaDescription: 'Sol PVC waterproof pour campings et mobil-homes en Charente-Maritime. CB Sols : résistance humidité, pose rapide, tarifs compétitifs. Devis gratuit.',
    serviceSlug: 'sol-pvc-lames-dalles',
    serviceName: 'Sol PVC Lames & Dalles',
    sectorSlug: 'campings-tourisme',
    sectorName: 'Campings & Tourisme',
    headline: 'Sol PVC pour campings',
    tagline: 'Résistant à la mer, aux locataires et au temps',
    intro: "La Charente-Maritime est la première région de camping de France. Avec 350+ campings, l'entretien et la rénovation des sols de mobil-homes, bungalows et espaces communs est un marché spécifique. CB Sols intervient avant chaque saison pour rénover les sols de vos hébergements locatifs avec des produits 100% waterproof, rapides à poser et esthétiques.",
    specificChallenges: [
      'Humidité et variations thermiques (condensation hivernale)',
      'Remplacement rapide entre saisons (délais courts)',
      'Budget optimisé pour la rentabilité locative',
      'Résistance aux locataires intensifs en juillet-août',
    ],
    ourApproach: [
      'Lames PVC clipsées waterproof — pose sans colle, rapide et propre',
      'Intervention intersaison (septembre-mars)',
      'Tarifs dégressifs pour les campings qui font rénover plusieurs hébergements',
      'Conseil gamme selon l\'étoilage du camping',
    ],
    keyProducts: [
      { name: 'Tarkett Starfloor Click', desc: 'Lames PVC 100% waterproof, pose flottante, résistance élevée, nombreux décors bois' },
      { name: 'Gerflor Virtuo Lock', desc: 'Sol PVC clipsé premium, dalle et lame, résistance totale à l\'eau et UV' },
    ],
    references: [
      'Campings 4/5 étoiles Île de Ré : rénovation sols mobil-homes intersaison',
      'Résidences de tourisme Charente-Maritime : bungalows et chalets équipés',
    ],
    faq: [
      { q: 'Quel sol pour un mobil-home au bord de la mer ?', a: "Le sol PVC clipsé waterproof est la référence pour les mobil-homes en zone côtière. Il résiste à 100% à l'humidité, ne gonfle pas, se pose sans colle et se remplace facilement. CB Sols recommande des gammes class 33 (usage intensif) pour les locations saisonnières." },
      { q: 'CB Sols peut-il rénover 20 mobil-homes en intersaison ?', a: "Oui. CB Sols est habitué aux chantiers de parc locatif. Nous établissons un planning sur 4 à 8 semaines selon la surface totale, avec une équipe dédiée. Devis global avec tarif dégressif." },
    ],
  },
  {
    slug: 'moquette-collectivite',
    title: 'Moquette Collectivités & Établissements Scolaires',
    metaTitle: 'Moquette Collectivités Charente-Maritime — Marchés Publics CB Sols',
    metaDescription: 'Moquette pour collectivités, écoles et mairies en Charente-Maritime. CB Sols répond aux appels d\'offres, pose en vacances scolaires. Devis gratuit.',
    serviceSlug: 'pose-moquette',
    serviceName: 'Pose de Moquette',
    sectorSlug: 'collectivites',
    sectorName: 'Collectivités',
    headline: 'Moquette pour collectivités',
    tagline: 'Conformité, durabilité, budget maîtrisé',
    intro: "Les marchés publics exigent des revêtements certifiés, durables et documentés. CB Sols répond aux appels d'offres des collectivités de Charente-Maritime : mairies, écoles, médiathèques, salles polyvalentes. Tous nos produits sont certifiés Bfl-s1, nos devis sont HT avec CCTP, et nos interventions sont planifiées sur les vacances scolaires.",
    specificChallenges: [
      'Conformité normes incendie Euroclasse obligatoire',
      'Réponse aux appels d\'offres (CCTP, fiches techniques)',
      'Intervention sur temps scolaire : vacances uniquement',
      'Budget public : rapport qualité/prix documenté',
    ],
    ourApproach: [
      'Dossiers techniques complets pour les marchés publics',
      'Produits certifiés avec fiches FDES disponibles',
      'Planification systématique sur les périodes de vacances',
      'Références collectivités disponibles sur demande',
    ],
    keyProducts: [
      { name: 'EGE Contract Series', desc: 'Moquette contract certifiée Bfl-s1, haute résistance, documentée pour marchés publics' },
      { name: 'Balsan Signature Collection', desc: 'Gamme collectivités, nombreuses certifications, excellent rapport qualité-durabilité-prix' },
    ],
    references: [
      'Médiathèques Charente-Maritime : moquette acoustique salles de lecture',
      'Amphithéâtre universitaire La Rochelle : sol rénovation',
      'Salles polyvalentes communes : rénovation en vacances scolaires',
    ],
    faq: [
      { q: 'CB Sols peut-il répondre à un appel d\'offres ?', a: "Oui. CB Sols fournit tous les documents nécessaires aux marchés publics : fiches techniques certifiées, FDES, références similaires, attestation assurance décennale, Kbis et certifications Qualibat." },
    ],
  },
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}
