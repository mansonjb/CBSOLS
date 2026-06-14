import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Sol PVC Pharmacie d'Officine | Hygiène, Conformité et Durabilité",
  description: "Soigner le sol de votre officine, c'est protéger votre image et faciliter le quotidien de l'équipe. CB Sols vous accompagne, devis sous 48h.",
  alternates: { canonical: 'https://cbsols.fr/sol-pvc-pharmacie' },
  keywords: ['sol PVC pharmacie', 'revêtement sol officine', 'sol pharmacie hygiène', 'sol PVC laboratoire pharmacie', 'conformité ARS', 'pose sol pharmacie', 'sol pharmacie facile nettoyer'],
  openGraph: {
    title: "Sol PVC pour pharmacie d'officine, la propreté qui se voit",
    description: "Pose de sol PVC en officine : hygiène quotidienne, conformité ARS, intervention de nuit pour ne pas fermer. CB Sols, 27 ans de savoir-faire près de La Rochelle.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-pharmacie.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  {
    title: "L'espace de vente",
    desc: "C'est la première impression que reçoit le patient en poussant votre porte. Le pharmacien y passe huit heures par jour, le client moins d'une minute, mais il en garde une image. Le sol doit absorber les bruits de roulettes des cabas, supporter le passage répété de centaines de personnes, et garder son éclat dix ans plus tard. Sur la zone d'attente, on ajoute volontiers un peu de moquette acoustique pour adoucir l'ambiance et calmer l'air.",
  },
  {
    title: "Le préparatoire et le robot",
    desc: "Zone technique, parfois zone humide. Le sol doit être étanche pour résister aux produits qu'on manipule chaque jour, du simple sirop renversé au flacon de désinfectant. Les soudures entre lés se font à chaud, à plus de quatre cents degrés, pour qu'aucune goutte ne s'infiltre. La couleur claire aide à repérer immédiatement une chute de comprimé ou une fuite de flacon. Vous voyez tout, vous nettoyez tout.",
  },
  {
    title: "La réserve et le stockage",
    desc: "Passage de chariots, palettes pleines, livraisons quotidiennes. Le sol prend cher dans cette pièce qu'on visite peu mais qui travaille beaucoup. On choisit un classement 34, un PVC homogène épais qui pardonne les chocs des transpalettes et qu'on peut décaper deux fois par an sans l'abîmer. La teinte est volontairement neutre, pour éviter de marquer une trace après chaque accrochage. Vingt ans devant vous, tranquille.",
  },
  {
    title: "Les sanitaires patients et personnel",
    desc: "Antidérapant R10 minimum dans la zone d'approche, remontée en plinthe arrondie sur toute la périphérie pour faciliter le nettoyage quotidien, choix d'un coloris qui ne se tache pas visuellement. On peut traiter aussi le coin tisanerie et le vestiaire du personnel dans la même cohérence, ce qui donne une lecture homogène de l'arrière-officine et facilite le ménage du soir. Aucun joint où la moisissure pourrait s'installer.",
  },
]

const exigences = [
  {
    title: "L'officine ne ferme pas",
    desc: "On intervient la nuit, le dimanche ou pendant les ponts. Vous fermez votre rideau le samedi soir à 19 heures, on travaille de nuit, lundi matin à 8h30 vous ouvrez normalement. Le robot, les automates, les écrans tactiles du comptoir : on protège tout sous bâche, on aspire en fin de chantier, on repart avec nos déchets. Aucun mètre carré perdu pour l'activité, aucun message à mettre sur la porte. Vos patients ne savent même pas qu'on est passés.",
  },
  {
    title: "L'hygiène, c'est notre métier de tous les jours",
    desc: "Le sol PVC homogène se nettoie comme votre comptoir, sans contrainte particulière. Pas de joints qui se chargent au fil des mois, pas de couche d'usure qui s'écaille au bout de cinq ans, le matériau est dense de haut en bas. Vos équipes appliquent leur protocole habituel, eau et détergent neutre, le sol suit sans faiblir. Les inspecteurs de l'ARS qui passent y voient un travail soigné, conforme, durable. Vous gagnez en tranquillité d'esprit.",
  },
  {
    title: "Les zones humides sans risque",
    desc: "Sanitaires, préparatoires, coin tisanerie, vestiaire. On remonte le PVC en plinthe à gorge arrondie sur huit à dix centimètres tout autour de la pièce, on soude les lés à chaud entre eux. Résultat : l'eau ne s'infiltre nulle part, ni sous le sol, ni derrière les murs. Vous évitez le piège classique de la moisissure cachée derrière une plinthe bois mal posée, qui finit par sentir et par tacher le placo deux ans plus tard. Détail invisible, mais décisif.",
  },
  {
    title: "Le confort sonore",
    desc: "Un sol PVC acoustique réduit les bruits de pas et de roulettes de 19 à 21 décibels selon les gammes. C'est presque la moitié du bruit ambiant en moins. Vos patients posent leur question plus sereinement au comptoir, votre équipe finit la journée moins fatiguée, l'ambiance générale du lieu se calme. Sur une officine très passante de centre-ville, ce simple changement de sol transforme la perception de la pièce. Vos clients reviennent parce qu'ils s'y sentent bien.",
  },
  {
    title: "La conformité, on s'en occupe pour vous",
    desc: "Classement feu Bfl-s1 ou Cfl-s1 selon l'ERP de votre officine, antidérapant R10 dans les zones de circulation et R11 aux abords des points d'eau, label A+ pour la qualité de l'air intérieur. On fournit toutes les attestations à joindre au dossier, on dialogue directement avec l'ARS ou le bureau de contrôle si nécessaire. Vous ne vous occupez de rien sur cette partie administrative, qu'on connaît bien après vingt-sept ans de pose en milieu réglementé.",
  },
  {
    title: "Choisir un sol qui dure quinze ans",
    desc: "On s'engage sur le matériau, sur la pose, sur la finition. CB Sols travaille en sol PVC depuis vingt-sept ans, on a vu des chantiers traverser deux décennies sans bouger d'un millimètre. Pas de cloque, pas de jaunissement, pas de joint qui s'ouvre. Vous investissez une fois, vous vivez tranquille longtemps, vous concentrez votre énergie sur la pharmacie et pas sur le bâtiment. C'est ce qu'on appelle un investissement utile.",
  },
]

const materiaux = [
  {
    name: "PVC homogène en lés grande largeur",
    desc: "Gerflor Mipolam Symbioz ou Tarkett iQ Granit. La référence de l'officine moderne et de tout établissement de santé qui prend l'hygiène au sérieux. Soudures à chaud invisibles entre les lés, palette de coloris très large, du clair lumineux qui agrandit l'espace de vente au coloré contemporain qui valorise la marque de l'officine. Vingt à vingt-cinq ans devant vous, entretien quotidien à l'eau et au détergent neutre. C'est notre choix par défaut pour 80 % des pharmacies que nous rénovons.",
  },
  {
    name: "PVC acoustique en lés",
    desc: "Gerflor Taralay Acoustic ou Tarkett Acczent Excellence Acoustic. Pour réduire les bruits de roulettes de cabas et de pas dans la zone de vente d'une officine très passante. La sous-couche acoustique est intégrée au revêtement, ce qui simplifie énormément la pose, et le résultat sonore est immédiat dès la première heure d'ouverture. Particulièrement adapté aux officines de centre-ville et aux pharmacies de pôle de santé où la fréquentation est dense.",
  },
  {
    name: "Lames vinyle LVT",
    desc: "Forbo Allura ou Gerflor Senso Lock. Esthétique chaude effet bois clair, effet pierre naturelle ou effet béton ciré, pour donner un caractère plus haut de gamme à la zone d'accueil et au coin conseil orthopédie. Parfaitement compatible avec le passage soutenu d'une officine moderne, durée de vie de quinze ans, possibilité de remplacer une lame isolée si jamais elle est abîmée par une chute de matériel. Très bon compromis entre apparence et performance.",
  },
  {
    name: "Moquette dalles acoustiques",
    desc: "EGE Highline ou Forbo Tessera. Pour le coin attente, le bureau du titulaire, la salle de réunion d'équipe ou la salle de pause du personnel. Apporte un confort visuel et sonore immédiat, format 50 par 50 centimètres pour pouvoir remplacer une dalle isolée si nécessaire, par exemple en cas de tache de café. Convient bien à l'arrière-officine et aux espaces qui ne reçoivent pas le public, là où l'on veut un sentiment de douceur.",
  },
  {
    name: "Profilés de transition et plinthes",
    desc: "Romus en laiton brossé, inox brossé ou aluminium anodisé. Ce sont les détails qui finissent une pose et qui font la différence entre un travail correct et un travail soigné. Plinthe à gorge arrondie pour toutes les zones humides, profilés droits parfaitement ajustés pour les seuils entre deux matériaux différents, par exemple à la transition entre la moquette du coin attente et le PVC de la zone de vente. Vous ne les remarquez pas, c'est exactement ce qu'on cherche.",
  },
]

const marques = [
  { name: "Gerflor", desc: "Le français des sols souples, basé près de Lyon. On travaille leurs gammes Mipolam et Taralay dans plus de huit pharmacies sur dix. Solide, bien documenté pour les dossiers ARS, des coloris contemporains qu'on retrouve dans les officines récentes." },
  { name: "Tarkett", desc: "Le suédois historique du PVC professionnel. Leurs iQ Granit et iQ Optima équipent la moitié des établissements de santé français. Très bonne tenue dans le temps, choix de couleurs énorme, fiches techniques limpides. Une valeur sûre en officine de pharmacie." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin, biosourcé, parfait pour les officines qui valorisent une démarche écologique auprès de leur patientèle. Pose un peu plus technique, résultat unique." },
  { name: "Polyflor", desc: "Le britannique du PVC haute densité. Leurs effets bois et béton sont d'une facture visuelle remarquable, parfois plus convaincants que les concurrents continentaux. Le bon compromis entre esthétique premium et performances techniques en zone de vente." },
  { name: "EGE", desc: "Le tisseur danois pour la moquette. Quand vous voulez du caractère dans l'espace attente, leurs gammes Highline et ReForm donnent une signature visuelle forte. On les pose volontiers dans le bureau du titulaire ou la salle de réunion." },
  { name: "Object Carpet", desc: "Les allemands, pour les officines qui visent une ambiance résidentielle dans la salle d'attente ou le coin conseil pédiatrie. Design contemporain affirmé, finitions parfaites, palette de couleurs très large. Plus cher, mais l'effet est immédiat." },
  { name: "Romus", desc: "Notre fournisseur de profilés et de plinthes. Indispensable pour une pose soignée en milieu réglementé. Leur gamme est large, on trouve toujours le profilé qui convient à chaque configuration de seuil, chaque transition, chaque détail de finition." },
  { name: "Altro", desc: "Le britannique du sol antidérapant à haute performance. On va le chercher pour les sanitaires patients et les préparatoires humides où la sécurité passe avant l'esthétique. Classement R11 ou R12 garanti, certifié pour le milieu santé." },
]

const lieux = [
  { nom: "Pharmacie de centre-ville historique", detail: "Sol vintage à reprendre, contraintes ABF parfois, accès difficile pour le matériel. On intervient la nuit pour ne pas couper l'activité commerciale du quartier. PVC contemporain qui dialogue avec les boiseries d'origine." },
  { nom: "Pharmacie de quartier résidentiel", detail: "Officine de proximité, clientèle fidélisée, équipe stable. Le titulaire connaît chaque patient. Le sol doit valoriser ce lien sans rupture esthétique brutale. Palette douce, ambiance chaleureuse, durée quinze ans tranquille." },
  { nom: "Pharmacie de zone commerciale périphérique", detail: "Surface plus généreuse, flux dense le samedi, présence souvent d'un robot. PVC homogène en lés grande largeur, soudures à chaud, classement 34 obligatoire. Pose nocturne calée sur la fermeture de la galerie commerciale." },
  { nom: "Pharmacie de bord de mer", detail: "Saisonnalité forte, sable et sel apportés sous les semelles l'été, pic d'activité juillet-août. Sol résistant à l'abrasion, teintes claires qui supportent la lumière marine, pose programmée idéalement en janvier ou février." },
  { nom: "Pharmacie de campagne et de village", detail: "Patientèle vieillissante, parfois fragilité à la marche. Antidérapant R10 sur toute la zone de vente, plinthes arrondies, contraste visuel entre sol et mur pour les patients malvoyants. Visite et devis chez vous sans frais." },
  { nom: "Pharmacie de pôle de santé", detail: "Plateforme avec médecins, kinés, infirmiers libéraux. Cohérence visuelle souhaitée entre les cabinets et l'officine. PVC contemporain avec transitions soignées, sol acoustique pour calmer le hall commun, conformité ARS garantie." },
  { nom: "Pharmacie d'hôpital", detail: "Établissement réglementé, marché public ou commande directe selon les cas. Cahier des charges technique très précis, classement feu, traçabilité matière, attestations PEFC ou A+. On gère le dossier administratif de bout en bout." },
  { nom: "Pharmacie universitaire", detail: "Public étudiant et personnel hospitalier, passage très soutenu en journée. Sol PVC haute densité, acoustique pour gérer le brouhaha, teinte intemporelle qui ne se démode pas. Pose pendant les vacances universitaires." },
  { nom: "Officine avec robot et automatisation forte", detail: "Le robot pèse plusieurs centaines de kilos et reste en place pendant les travaux. On compose autour de lui, on protège son bas de structure, on découpe au millimètre. Pose nocturne sur trois ou quatre nuits selon la surface." },
  { nom: "Officine avec espace orthopédie ou matériel médical", detail: "Le rayon orthopédie demande un sol valorisant les produits exposés, parfois effet bois pour réchauffer le coin conseil. Le matériel médical roulant impose un sol résistant aux roulettes et aux pieds de fauteuils en démonstration." },
  { nom: "Officine en rénovation chez un jeune titulaire repreneur", detail: "Reprise récente, envie de moderniser sans tout casser. On propose un compromis intelligent entre conservation de l'existant et signature visuelle nouvelle. Devis honnête pour ne pas plomber les premières années d'exploitation." },
  { nom: "Officine en création, projet d'installation neuve", detail: "Construction neuve ou local à aménager en blanc. On dialogue avec l'architecte d'intérieur dès la phase études, on choisit la gamme en cohérence avec le mobilier d'agencement choisi par le pharmacien. Tout est prêt pour l'ouverture." },
]

const process = [
  {
    step: 'Premier contact',
    desc: "Vous nous appelez ou vous envoyez un mail avec quelques mots sur votre officine : surface approximative, sol actuel, calendrier souhaité, contraintes particulières comme la présence d'un robot. On échange une vingtaine de minutes au téléphone pour cadrer le projet et identifier la fenêtre de pose qui ne perturbera pas votre activité. Si on sent que ça colle, on prend rendez-vous pour la visite. Si on sent que ce n'est pas pour nous, on vous le dit franchement et on vous oriente.",
  },
  {
    step: 'Visite gratuite de votre officine',
    desc: "Déplacement sur place sous une à deux semaines, idéalement en début ou fin de journée pour ne pas gêner le rush. Prise de cotes précise, vérification du support existant, repérage des contraintes d'accès et de manutention pour le robot et les automates. On apporte des échantillons que vous regardez directement dans votre officine, sous votre éclairage de travail, pour choisir une teinte qui fonctionnera vraiment chez vous. Aucun engagement à ce stade.",
  },
  {
    step: 'Devis détaillé sous 48 heures',
    desc: "Vous recevez par mail un devis ligne par ligne, sans jargon, avec la gamme proposée, le détail des surfaces par pièce, les plinthes, les profilés, la durée prévisionnelle du chantier et la fenêtre de pose calée sur votre fermeture. On joint les attestations classement feu, A+, antidérapant, prêtes à intégrer à votre dossier ARS. Vous comparez sereinement, vous posez vos questions, on ajuste ensemble si besoin avant validation.",
  },
  {
    step: 'Pose intégrale entre 1 et 3 nuits',
    desc: "Intervention sur la fenêtre convenue, en général du samedi soir au lundi matin pour une officine de 100 à 150 mètres carrés. Dépose de l'ancien sol, ragréage si nécessaire, pose des lés, soudures à chaud, plinthes en gorge arrondie, profilés de seuil, nettoyage complet. Le robot et les automates restent en place, protégés et compostés autour. Lundi matin à 8h30, votre rideau se lève sur un sol neuf, propre, prêt à recevoir le premier patient.",
  },
  {
    step: 'Réception conjointe et garantie',
    desc: "On fait le tour ensemble du chantier terminé, on contrôle chaque soudure, chaque plinthe, chaque seuil. Vous signez le procès-verbal de réception avec ou sans réserve. On vous laisse un dossier de fin de chantier avec toutes les attestations, le guide d'entretien quotidien adapté à la gamme posée, et nos coordonnées directes en cas de question. Garantie décennale sur la pose, garantie fabricant sur le matériau, généralement dix à quinze ans selon les gammes choisies.",
  },
]

const faq = [
  {
    q: "Combien de temps faut-il pour refaire le sol d'une officine ?",
    a: "Tout dépend de la surface et de l'état du sol existant. Pour une pharmacie de 80 à 120 mètres carrés, comptez deux à trois nuits sur place, en général du samedi soir au lundi matin. Pour une officine plus grande de 200 mètres carrés avec robot, plutôt trois à quatre nuits, parfois étalées sur deux week-ends. On dimensionne précisément à la visite. En amont du chantier, prévoyez environ deux semaines entre l'appel initial et le devis signé, puis deux à cinq semaines de délai de fabrication chez le fournisseur selon la gamme choisie. La majorité de nos chantiers d'officine se déroulent dans une fenêtre totale de six à huit semaines entre votre premier coup de fil et la réouverture sur le sol neuf. Ce calendrier vous laisse le temps de prévenir votre équipe, d'organiser vos commandes de marchandises pour ne pas être pris de court le lundi matin, et de communiquer éventuellement auprès des patients réguliers sur la rénovation à venir.",
  },
  {
    q: "Faut-il vraiment fermer la pharmacie ?",
    a: "Non, et c'est précisément notre spécialité. La grande majorité des officines que nous rénovons restent ouvertes pendant toute la durée du chantier, parce qu'on travaille la nuit ou le week-end pendant vos heures de fermeture habituelles. Vous baissez votre rideau le samedi soir à 19 heures, notre équipe arrive vers 20 heures, et le lundi matin à 8h30 vous ouvrez normalement sur un sol fini. Aucune perte d'activité, aucun message à coller sur la vitrine, aucun patient redirigé. Si la surface est plus grande ou si le sol existant demande un gros ragréage, on peut étaler sur deux week-ends successifs sans interrompre la semaine. Dans le cas particulier d'une officine très contrainte par un robot fixe et des automates lourds, on planifie une fenêtre nocturne plus longue, par exemple du vendredi soir au lundi matin pendant un week-end de pont. La règle pour nous, c'est zéro journée fermée.",
  },
  {
    q: "Quel est le budget moyen pour 100 mètres carrés ?",
    a: "Pour donner un ordre d'idée honnête, comptez entre 6 000 et 9 000 euros HT pour 100 mètres carrés en PVC homogène posé en lés soudés avec plinthes en gorge, intervention nocturne incluse. La fourchette varie selon trois facteurs principaux : la gamme de PVC choisie, parce qu'un Mipolam Symbioz acoustique haut de gamme coûte plus cher qu'un iQ Granit standard, l'état du support existant, parce qu'un sol qui demande un gros ragréage ajoute trois à cinq euros au mètre carré, et la complexité d'accès, notamment si on doit composer autour d'un robot ou évacuer un ancien carrelage. Si vous ajoutez de la moquette acoustique dans le coin attente et le bureau du titulaire, comptez un supplément de 50 à 80 euros au mètre carré moquette posée. On chiffre tout précisément au devis sous 48 heures après la visite. Aucune surprise en cours de chantier, c'est notre engagement.",
  },
  {
    q: "Le sol PVC, est-ce vraiment compatible avec les normes ARS ?",
    a: "Oui, totalement, et c'est même la solution la plus utilisée en officine moderne précisément pour cette raison. Les gammes que nous posons cumulent les classements attendus en ERP de cinquième catégorie : Bfl-s1 ou Cfl-s1 pour la résistance au feu, R10 ou R11 pour l'antidérapant selon les zones, label A+ pour la qualité de l'air intérieur, classement 34 pour l'usage commercial intensif. On vous fournit l'ensemble des attestations fabricant à joindre directement à votre dossier de conformité ou à présenter en cas de contrôle ARS. Si le bureau de contrôle a des questions techniques pointues, on dialogue directement avec lui à votre place. Sur les 27 ans de pose en milieu santé que cumule CB Sols, jamais une réception d'officine n'a été refusée pour défaut de conformité du sol. C'est un point sur lequel vous pouvez vous reposer sur nous sans inquiétude.",
  },
  {
    q: "Comment entretenir le sol au quotidien sans l'abîmer ?",
    a: "Au quotidien, c'est très simple. Le matin avant ouverture, un balai microfibre ou un aspirateur pour enlever les poussières et les saletés grossières ramenées par les semelles. Le soir après fermeture, un passage à la serpillière humide avec un détergent neutre dilué selon la dose indiquée par le fabricant, type Carolin pH neutre ou équivalent professionnel. Pas besoin de produit spécial pharmacie, votre détergent habituel suffit. Évitez les détergents trop acides ou trop alcalins, qui à la longue ternissent l'aspect du PVC. Une fois par an, prévoyez un décapage et une métallisation par une entreprise de nettoyage professionnel, comptez deux à trois euros au mètre carré, qui redonne au sol son éclat d'origine pour les douze mois suivants. Avec ce protocole simple, vos quinze à vingt ans de durée de vie sont assurés. On vous laisse un guide d'entretien personnalisé à la gamme posée le jour de la réception.",
  },
  {
    q: "Peut-on poser un sol PVC sur le carrelage existant ?",
    a: "Oui, dans la grande majorité des cas, et c'est même un excellent moyen d'éviter le coût et le bruit d'une dépose. Plusieurs conditions à vérifier d'abord. Le carrelage doit être bien adhérent au support, sans carreau qui sonne creux à la frappe. Les joints doivent être en bon état, sans creusement excessif. La planéité globale doit être correcte, sans bosse ou flèche supérieure à quelques millimètres. Si ces conditions sont réunies, on applique un primaire d'accrochage spécifique, suivi d'un ragréage autolissant fibré de deux à trois millimètres qui efface les joints du carrelage et donne une surface parfaitement plane. Une fois sec en 24 à 48 heures, on pose le PVC dessus comme sur un sol neuf. Économie de temps et de bruit pour vos patients d'à côté. Si le carrelage est en mauvais état, on dépose, c'est plus sûr. La visite tranchera.",
  },
  {
    q: "Combien de temps tient un sol PVC en officine ?",
    a: "Avec une gamme professionnelle posée correctement, comptez quinze à vingt ans en moyenne en officine de pharmacie, et jusqu'à vingt-cinq ans pour les PVC homogènes haut de gamme entretenus selon le protocole standard. Cette durée varie selon trois facteurs. Le passage d'abord : une officine de centre-ville avec 400 clients par jour use plus vite qu'une pharmacie de campagne avec 80 clients. Le matériau ensuite : un PVC homogène de classement 34 dure plus longtemps qu'un PVC compact bas de gamme. L'entretien enfin : le respect du protocole quotidien et de la métallisation annuelle prolonge réellement la vie du sol de plusieurs années. Nos plus anciens chantiers d'officine, posés en 2002, sont encore en service en 2026 sans avoir bougé. Vous investissez aujourd'hui, vous ne vous reposerez la question que dans la prochaine décennie. C'est le contrat moral qu'on passe avec vous en signant le devis.",
  },
]

export default function SolPvcPharmaciePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/sol-pvc-pharmacie#service',
        name: "Sol PVC pour pharmacie d'officine",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: "Pose de sol PVC en pharmacie d'officine",
        description: "Pose de sol PVC professionnel pour pharmacies d'officine : zone de vente, préparatoire, robot, sanitaires. Soudures à chaud, plinthes en gorge, classement A+ air intérieur, conformité ARS, intervention nocturne pour ne pas fermer.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: "Sol PVC pharmacie d'officine", item: 'https://cbsols.fr/sol-pvc-pharmacie' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sol PVC pharmacie d&apos;officine</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Sol PVC pour pharmacie d&apos;officine,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la propreté qui se voit.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de sol PVC professionnel pour votre officine : zone de vente, préparatoire, robot, réserve, sanitaires. Sols faciles à nettoyer, conformes ARS, acoustiques. Intervention nocturne pour ne jamais fermer votre pharmacie. CB Sols intervient depuis 27 ans, atelier à Villedoux près de La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=pharmacie" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>27 ans de pose en milieu santé</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Quand on pose un sol dans une pharmacie, on pose pour quinze ans de service public. Chaque détail compte parce que c&apos;est le sol que les patients foulent quand ils sont fragiles, et c&apos;est le sol que votre équipe regarde des centaines de fois par jour. On a appris à le faire propre, durable, beau. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, gérant de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelles zones de l&apos;officine</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre zones, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre choix de sol.</em>
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

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Une officine à rénover ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis sous 48h.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échantillons présentés dans votre officine, sous votre éclairage de travail. Devis détaillé sous 48 heures, planning calé sur vos fermetures pour ne perdre aucune journée d&apos;activité.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?from=pharmacie" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qu&apos;un sol d&apos;officine doit faire</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres à la pharmacie d&apos;officine.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            L&apos;officine n&apos;est ni un bureau, ni une boutique de retail classique. Voici les six points sur lesquels nous orientons systématiquement le choix du sol et la méthode de pose, sans noyer le pharmacien titulaire sous le jargon technique.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Familles de produits</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les sols <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous posons en pharmacie.</em>
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
              « L&apos;officine d&apos;aujourd&apos;hui n&apos;a plus rien à voir avec celle d&apos;il y a vingt ans. Le robot, les automates, les écrans, les linéaires modernes : le sol doit s&apos;inscrire dans cette modernité tout en restant accessible, hygiénique et durable. Notre rôle, c&apos;est de vous aider à choisir le bon matériau pour les vingt prochaines années. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=pharmacie" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite directement dans votre officine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marques partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit références <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour votre pharmacie.</em>
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

      {/* Typologies d'officines */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Typologies d&apos;officines</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Douze profils d&apos;officine, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>des choix de sol adaptés.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Chaque pharmacie a son rythme, sa patientèle, son architecture. Voici comment nous adaptons le choix du sol selon les profils d&apos;officines que nous rénovons régulièrement en Charente-Maritime et au-delà.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en réflexion ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Un appel pour cadrer le projet.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Vingt minutes au téléphone pour clarifier les gammes possibles, le calendrier réaliste autour de votre activité, et un ordre de grandeur budgétaire honnête pour votre officine.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=pharmacie" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de l&apos;appel à la réouverture.</em>
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
            Sol PVC en pharmacie, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Direct avec le gérant. Conseil clair, sans jargon, ordre de grandeur honnête, suite donnée seulement si le projet a vraiment du sens pour vous et votre officine.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre l&apos;ensemble des établissements de santé et des publics sensibles, ainsi que les architectes et particuliers qui nous confient leurs projets.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/sol-pvc-cabinet-medical" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC cabinet médical →</Link>
            <Link href="/sol-pvc-laboratoire-pharmaceutique" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC laboratoire →</Link>
            <Link href="/sol-pvc-creche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC crèche →</Link>
            <Link href="/secteurs/collectivites" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Collectivités →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
            <Link href="/contact" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Nous contacter →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre officine rénovée <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>sans une seule journée fermée.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place dans votre pharmacie. Devis sous 48 heures, sol classé A+, conformité ARS, pose nocturne, réouverture sans odeur. 27 ans de savoir-faire CB Sols au service des pharmaciens titulaires.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=pharmacie" variant="primary" size="md">Demander un devis</Button>
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
