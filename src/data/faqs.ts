export interface Faq {
  slug: string
  question: string
  metaTitle: string
  metaDescription: string
  category: string
  shortAnswer: string
  sections: { title: string; body: string }[]
  relatedFaqs: string[]
  relatedSolutions: string[]
}

export const faqs: Faq[] = [
  {
    slug: 'difference-moquette-contrat-particulier',
    question: 'Quelle est la différence entre moquette contrat et moquette pour particulier ?',
    metaTitle: 'Moquette Contrat vs Moquette Particulier — Différences CB Sols',
    metaDescription: 'Moquette contrat ou moquette résidentielle : quelles différences concrètes ? Normes, durabilité, prix. CB Sols explique tout simplement.',
    category: 'Moquette',
    shortAnswer: "La moquette contrat est conçue pour les usages professionnels intensifs : classements d'usage supérieurs (32-33), certifications incendie obligatoires (Bfl-s1) et résistance mécanique bien supérieure à la moquette résidentielle.",
    sections: [
      {
        title: 'Les classements d\'usage : le critère fondamental',
        body: "La différence principale entre moquette contrat et moquette résidentielle tient dans son classement d'usage européen. Les moquettes sont classées de 21 (résidentiel léger) à 34 (commercial très intensif).\n\nMoquette résidentielle : classements 21 à 23. Conçue pour un foyer familial avec un trafic limité. Durée de vie : 5 à 10 ans selon l'usage.\n\nMoquette contrat : classements 31 à 34. Conçue pour les bureaux, hôtels, commerces, établissements de santé. Résistance testée pour des centaines de milliers de passages. Durée de vie : 10 à 20 ans selon le classement et l'entretien.\n\nEn dessous du classement 31, une moquette n'est pas certifiée pour un usage professionnel. La poser dans un hôtel ou des bureaux constitue une non-conformité réglementaire — avec des conséquences potentielles sur les assurances en cas de sinistre.",
      },
      {
        title: 'Les certifications incendie : obligatoires en professionnel',
        body: "La moquette résidentielle ne nécessite pas de certification incendie particulière. Pour les établissements recevant du public (hôtels, restaurants, bureaux, EHPAD), la réglementation française impose un classement incendie minimum.\n\nLe classement européen Euroclasse classe les revêtements de A1 (incombustible) à F (non testé). Pour la majorité des ERP, la moquette de sol doit être au minimum Cfl-s1 ou Bfl-s1 selon le type de bâtiment et l'étage.\n\nCB Sols fournit systématiquement les attestations de conformité incendie avec chaque chantier. Ces documents sont nécessaires lors des visites de la commission de sécurité.",
      },
      {
        title: 'Construction et durabilité : ce qui se voit (et ne se voit pas)',
        body: "Visuellement, une moquette contrat et une moquette résidentielle peuvent se ressembler. Les différences sont dans la construction :\n\n- Grammage plus élevé (600-900 g/m² en contrat vs 300-500 g/m² en résidentiel)\n- Dos renforcé (latex double couche, jute ou feutre)\n- Fibres plus robustes (nylon résistant vs polyester économique)\n- Traitements anti-taches et anti-bactériens\n\nUne moquette résidentielle posée dans un couloir d'hôtel sera usée en 2 à 3 ans. La même surface avec une moquette EGE Hospitality classement 33 tiendra 10 à 15 ans.",
      },
      {
        title: 'Le prix : un écart qui se justifie',
        body: "La moquette contrat coûte plus cher à l'achat. Une moquette résidentielle peut se trouver à 8-15 €/m² fournie. Une moquette contrat de bureau standard est à 15-30 €/m², et une moquette hôtelière haut de gamme (EGE, Balsan) à 25-80 €/m².\n\nMais rapportée à la durée de vie, la moquette contrat est souvent moins chère. Si une moquette résidentielle dure 3 ans dans un usage professionnel (puis doit être remplacée) contre 12 ans pour une moquette contrat, le coût annuel est radicalement différent.\n\nCB Sols ne vend que de la moquette contrat pour les professionnels — jamais de la moquette résidentielle sur un chantier commercial. C'est une question de responsabilité.",
      },
    ],
    relatedFaqs: ['duree-vie-moquette-professionnelle', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'pose-moquette-sur-carrelage',
    question: 'Peut-on poser de la moquette sur du carrelage existant ?',
    metaTitle: 'Poser Moquette sur Carrelage — Conseils Expert CB Sols',
    metaDescription: 'Peut-on poser de la moquette sur du carrelage ? Conditions, méthodes, avantages et inconvénients. Guide technique par CB Sols en Charente-Maritime.',
    category: 'Technique de Pose',
    shortAnswer: "Oui, sous conditions. Le carrelage doit être plan (tolérance 2mm sous règle de 2m), propre, sans carreau décollé et les joints en bon état. Un ragréage de surfaçage est souvent nécessaire pour effacer les reliefs des joints.",
    sections: [
      {
        title: 'Les conditions pour poser sur du carrelage',
        body: "La pose de moquette sur du carrelage est techniquement possible, mais le support doit répondre à plusieurs critères :\n\n1. Planéité : la tolérance maximum est de 2mm sous une règle de 2 mètres. Des carreaux bombés, fissurés ou des joints en relief trop importants se verront à travers la moquette et créeront des zones d'abrasion prématurée.\n\n2. Solidité : tous les carreaux doivent être parfaitement collés. Un carreau creux (qui sonne creux quand on le frappe) doit être reposé. Une moquette sur un carreau décollé finira par se décoller aussi, voire par créer un dénivelé dangereux.\n\n3. Propreté : le carrelage doit être dégraissé et exempt de toute colle ou résidu qui empêcherait l'adhérence. CB Sols réalise un nettoyage et un primaire d'accrochage si nécessaire.\n\n4. Joints : des joints en ciment en bon état sont acceptables. Des joints fissurés, décollés ou très larges doivent être refaits. Les joints trop en relief peuvent être arasés mécaniquement.",
      },
      {
        title: 'Les méthodes de fixation',
        body: "Trois méthodes de fixation sont possibles pour la moquette sur carrelage :\n\nLa colle (méthode la plus courante en professionnel) : un adhésif de sol adapté est appliqué directement sur le carrelage. C'est la méthode la plus solide et la plus pérenne, recommandée pour les espaces à fort trafic et les moquettes lourdes.\n\nLes bandes gripper : des bandes striées sont clouées ou collées en périphérie de la pièce. La moquette est tendue dessus. Cette méthode est possible mais moins recommandée sur carrelage car l'ancrage des bandes est moins solide que sur béton.\n\nLa double-face : pour des poses temporaires ou sur de petites surfaces. Non recommandé pour les espaces professionnels.\n\nCB Sols détermine la meilleure méthode lors du devis, après évaluation du type de carrelage et de l'usage prévu.",
      },
      {
        title: 'Faut-il déposer le carrelage ?',
        body: "Non, dans la majorité des cas. La dépose de carrelage est longue, coûteuse (4 à 8 €/m²), génère des gravats importants et risque d'endommager le support. Sauf si le carrelage est en très mauvais état (décollements multiples, fissurations profondes), il est préférable de poser la moquette dessus après préparation.\n\nLa seule situation où la dépose est impérative : si l'accumulation de niveaux (ancien carrelage + éventuel précédent revêtement + nouvelle moquette) crée un dénivelé inacceptable par rapport aux seuils de portes ou aux zones contiguës.\n\nCB Sols évalue systématiquement la hauteur des niveaux lors du devis pour anticiper ces problèmes.",
      },
      {
        title: 'Le ragréage de surfaçage : souvent incontournable',
        body: "Même sur un carrelage propre et plan, les joints créent des reliefs (généralement 1 à 3 mm) qui se voient et s'usent prématurément sous la moquette. La solution : un ragréage de surfaçage fin (autolissant) appliqué sur l'ensemble du carrelage pour créer une surface parfaitement plane.\n\nCe ragréage coûte entre 8 et 15 €/m² selon l'épaisseur et la surface. Il sèche en 2 à 24 heures selon les produits. CB Sols réalise toujours la vérification de planéité après ragréage avant de passer à la pose.\n\nPour les chantiers où la rapidité est cruciale, il existe des ragréages à prise ultra-rapide (marchable en 30 minutes) qui permettent de poser la moquette dans la même journée.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'duree-vie-moquette-professionnelle',
    question: 'Quelle est la durée de vie d\'une moquette professionnelle ?',
    metaTitle: 'Durée de Vie Moquette Professionnelle — CB Sols',
    metaDescription: "Combien de temps dure une moquette professionnelle ? Hôtel, bureau, EHPAD : durées de vie réelles selon l'usage et l'entretien. Guide CB Sols.",
    category: 'Moquette',
    shortAnswer: "Une moquette professionnelle bien choisie et bien entretenue dure 8 à 15 ans selon l'usage. En hôtellerie : 8 à 12 ans en chambre, 5 à 8 ans en couloir. En bureau classement 33 : 12 à 15 ans.",
    sections: [
      {
        title: 'Durées de vie par secteur et type d\'usage',
        body: "La durée de vie d'une moquette professionnelle varie considérablement selon l'intensité du trafic :\n\nHôtellerie — chambres (classement 33, grammage 600-800 g/m²) : 8 à 12 ans avec un entretien régulier. Les chambres à fort taux d'occupation (90%+) en haut de gamme sont à renouveler plus souvent pour maintenir l'image.\n\nHôtellerie — couloirs (classement 33-34, haute résistance) : 5 à 8 ans. Les couloirs subissent un trafic beaucoup plus intense que les chambres — chariots de ménage, bagages, va-et-vient constant.\n\nBureaux — open space (classement 33, dalles) : 10 à 15 ans avec aspirateur hebdomadaire et injection-extraction annuelle. Les dalles permettent le remplacement partiel des zones les plus usées.\n\nEHPAD — chambres (classement 33, spécial santé) : 8 à 12 ans. Les contraintes sanitaires imposent une vigilance particulière sur les taches et l'hygiène.\n\nCinémas et salles de spectacle (classement 34) : 12 à 18 ans. Malgré le fort trafic, les passages sont concentrés sur des plages horaires courtes et le nettoyage est régulier.",
      },
      {
        title: 'Les facteurs qui allongent ou raccourcissent la durée de vie',
        body: "L'entretien est le facteur numéro 1. Une moquette mal entretenue (aspiration irrégulière, taches non traitées, pas d'injection-extraction) peut voir sa durée de vie divisée par deux. Inversement, un programme d'entretien rigoureux prolonge significativement sa vie.\n\nLe produit choisi est déterminant. Un grammage supérieur (800 g/m² vs 500 g/m²) fait une différence notable en couloir hôtelier. Le type de fibre aussi : le nylon 6.6 est plus résistant à l'abrasion que le nylon 6, lui-même supérieur au polyester.\n\nLe support et la pose influencent la tenue dans le temps. Une moquette mal collée se décolle aux bords et forme des plis — causes d'usure prématurée et de risques de chute. CB Sols prépare toujours le support et choisit l'adhésif adapté pour garantir une tenue dans la durée.\n\nLes conditions climatiques locales jouent aussi un rôle en Charente-Maritime. L'hygrométrie élevée en zone côtière peut affecter le dos de la moquette si le sous-sol n'est pas parfaitement sec.",
      },
      {
        title: 'Les signes qui indiquent qu\'il faut remplacer',
        body: "Comment savoir quand une moquette doit être remplacée ? Plusieurs signes ne trompent pas :\n\nLe matting : les fibres sont aplaties et ne se relèvent plus après aspiration. La moquette perd son aspect poileux et ressemble à un feutrine usée. À ce stade, aucun entretien ne peut récupérer l'aspect.\n\nLes taches persistantes : des taches qui résistent à l'injection-extraction professionnelle sont en général permanentes. Elles indiquent que les fibres sont dégradées chimiquement.\n\nLes zones d'usure très localisées (entrées de porte, devant des chaises) : dans les espaces en dalles, ces dalles seules peuvent être remplacées. En lés, il faut évaluer si la pose d'un lé de remplacement est esthétiquement acceptable.\n\nLes problèmes de collage : décollements en périphérie, cloques, ondulations. Ces défauts structurels compromettent la sécurité et ne peuvent généralement pas être rattrapés.",
      },
      {
        title: 'Planifier le remplacement pour minimiser l\'impact',
        body: "Pour les hôtels et les établissements en activité, le remplacement de la moquette se planifie, il ne subit pas. CB Sols conseille de :\n\nRéaliser un audit tous les 5 ans pour évaluer l'état et anticiper les remplacements. CB Sols réalise ces audits gratuitement pour ses clients hôteliers.\n\nPlanifier les travaux en basse saison. Pour un hôtel de la Charente-Maritime, la fenêtre idéale est de novembre à février.\n\nPrévoir le remplacement progressif : certains hôtels préfèrent renouveler un tiers des chambres tous les 3 à 4 ans plutôt que tout en une fois. Cette approche lisse les investissements et réduit l'impact sur l'activité.\n\nBudgéter le remplacement à l'avance. CB Sols peut établir une estimation budgétaire pluriannuelle pour vous aider à provisionner cet investissement.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['moquette-hotel', 'moquette-ehpad'],
  },
  {
    slug: 'sol-pvc-cuisine-professionnelle-norme',
    question: 'Quelles sont les normes du sol PVC pour une cuisine professionnelle ?',
    metaTitle: 'Normes Sol PVC Cuisine Professionnelle — CB Sols',
    metaDescription: 'Quelles normes pour le sol PVC en cuisine professionnelle ? HACCP, antidérapance R11, classement incendie, soudure à chaud. CB Sols explique.',
    category: 'Sol PVC',
    shortAnswer: "Un sol PVC de cuisine professionnelle doit être classé R10 ou R11 (antidérapance), résistant aux graisses et désinfectants, soudé à chaud (zéro joint) et conforme aux exigences HACCP. Tarkett iQ Granit et Forbo Eternal sont les références.",
    sections: [
      {
        title: 'La norme HACCP et ses implications sur le sol',
        body: "HACCP (Hazard Analysis Critical Control Point) est le système de gestion de la sécurité alimentaire obligatoire dans tous les établissements de restauration professionnelle. Pour les sols, il impose :\n\n- Revêtement imperméable : aucune porosité qui permettrait aux bactéries de s'incruster\n- Surface lisse ou faiblement texturée : nettoyable efficacement sans zones de rétention\n- Sans joints larges ou accessibles : les joints en ciment sont une source de contamination bactérienne\n- Résistance aux produits de nettoyage et de désinfection : alcalins concentrés, désinfectants chlorés, acides\n\nLe sol PVC en lés soudé à chaud répond à toutes ces exigences. C'est la solution HACCP par excellence : pas de joint visible, imperméable à 100%, résistant aux produits courants des cuisines.\n\nLe carrelage avec joints époxy peut aussi être conforme HACCP, mais l'entretien des reliefs est plus contraignant. Le carrelage avec joints ciment est techniquement non conforme HACCP.",
      },
      {
        title: 'La classification antidérapante : obligatoire par le code du travail',
        body: "Le code du travail (articles R4214-1 et suivants) impose des revêtements de sol antidérapants dans les locaux à risque de glissance. Les cuisines professionnelles sont classées locaux à risque élevé.\n\nLa classification allemande R (DIN 51130) est la référence : R9 (risque faible), R10 (risque modéré), R11 (risque élevé avec huiles et graisses), R12 (risque très élevé).\n\nPour les différentes zones d'une cuisine :\n- Salle de restaurant (zone sèche) : R9 minimum\n- Cuisine standard : R10 minimum\n- Zone de friture, plonge, zone humide chaude : R11 obligatoire\n- Zone de déballage et nettoyage des légumes : R11-R12\n\nCB Sols sélectionne systématiquement des produits R11 minimum pour toutes les cuisines professionnelles. Un sol glissant en cuisine est un accident du travail en attente de survenir.",
      },
      {
        title: 'La soudure à chaud : technique et nécessité',
        body: "La soudure à chaud est une technique qui consiste à créer une jonction étanche entre deux lés de sol PVC en faisant fondre un cordon de soudure (de même composition que le sol) dans la gorge usinée entre les deux lés.\n\nPourquoi c'est obligatoire en cuisine : sans soudure, la jonction entre deux lés est un joint qui, même très serré, permet aux liquides, graisses et micro-organismes de s'infiltrer sous le revêtement. En cuisine professionnelle, soumise à des nettoyages haute pression, cette infiltration est inévitable et rapide.\n\nLa soudure à chaud nécessite un matériel spécifique (pistolet de soudure et bus calibrés) et une formation technique. CB Sols forme ses poseurs à cette technique et réalise la soudure sur tous ses chantiers cuisine professionnelle.\n\nLes remontées en cuvette (le sol PVC soudé qui remonte de 10 à 15 cm sur les murs) complètent le dispositif d'étanchéité en éliminant la jonction sol/mur — autre point critique de contamination.",
      },
      {
        title: 'Les produits de référence et leurs certifications',
        body: "Trois familles de produits sont adaptées aux cuisines professionnelles :\n\nTarkett iQ Granit : sol PVC homogène, classement R10 standard (R11 sur demande), résistance chimique P2, certification NSF pour les espaces alimentaires. Grande gamme de coloris. Durée de vie : 20-30 ans.\n\nForbo Eternal Natural/Classic : sol PVC homogène, classement R10/R11, certifié lieux de restauration, émissions VOC très faibles (certification Indoor Air). Durée de vie comparable.\n\nGerflor Taralay Premium Contract : sol PVC hétérogène, R10, résistance chimique élevée, nombreux décors. Bonne option pour les cuisines où l'esthétique prime avec une résistance suffisante.\n\nCB Sols distribue ces trois marques et peut vous présenter des échantillons en showroom ou en visite sur site lors du devis.",
      },
    ],
    relatedFaqs: ['sol-pvc-cuisine-professionnelle-norme', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['sol-pvc-restaurant', 'sol-pvc-ehpad'],
  },
  {
    slug: 'devis-revetement-sol-gratuit',
    question: 'Comment obtenir un devis gratuit pour son revêtement de sol ?',
    metaTitle: 'Devis Revêtement de Sol Gratuit — CB Sols Charente-Maritime',
    metaDescription: 'Comment obtenir un devis gratuit pour votre revêtement de sol ? Process CB Sols, délais, ce qui est inclus. Devis sous 48h en Charente-Maritime.',
    category: 'Devis & Process',
    shortAnswer: "CB Sols se déplace gratuitement dans toute la Charente-Maritime pour mesurer, évaluer le support et remettre un devis chiffré sous 48h. Contactez par téléphone, formulaire ou email avec vos plans.",
    sections: [
      {
        title: 'Le process CB Sols : du premier contact au devis',
        body: "Obtenir un devis avec CB Sols est simple et rapide. Voici le processus :\n\n1. Premier contact : appelez le 05 46 00 00 00, remplissez le formulaire sur cbsols.fr/contact ou envoyez un email à contact@cbsols.fr avec une description de votre projet. Si vous avez des plans ou des photos, joignez-les.\n\n2. Prise de rendez-vous : CB Sols vous rappelle sous 24h en semaine pour convenir d'un rendez-vous sur site. Pour les projets avec des plans précis, une estimation peut être fournie par email avant la visite.\n\n3. Visite sur site : Valentin Prévoteau ou un membre de l'équipe se déplace gratuitement dans toute la Charente-Maritime. La visite dure 30 à 60 minutes selon la complexité du chantier. Nous mesurons, évaluons l'état du support, discutons de vos attentes esthétiques et techniques.\n\n4. Remise du devis : le devis est remis par email dans les 48h suivant la visite. Il est détaillé poste par poste : fourniture, dépose éventuelle, préparation du support, pose et finitions. Rien de caché.",
      },
      {
        title: 'Ce que comprend le devis CB Sols',
        body: "Un devis CB Sols est complet et transparent. Il comprend :\n\n- La description précise des travaux (surfaces, produits, méthodes)\n- Le détail HT de chaque poste : fourniture matériaux, dépose de l'ancien revêtement (si applicable), préparation du support (ragréage, primaire), pose, soudure (si applicable), finitions (plinthes, seuils)\n- Le prix TTC avec indication du taux de TVA applicable (20% professionnel, 10% rénovation résidentielle +2 ans)\n- Les délais de réalisation et la date de disponibilité de l'équipe\n- La durée de validité du devis (généralement 3 mois)\n\nLe devis est sans engagement. Vous pouvez demander des alternatives de produits ou de méthodes — CB Sols présente systématiquement au moins deux options de gamme.",
      },
      {
        title: 'Peut-on avoir une estimation sans visite ?',
        body: "Oui, dans certains cas. Si vous disposez de plans précis avec les surfaces en m², des photos du support existant et des informations sur le type de revêtement souhaité, CB Sols peut établir une estimation budgétaire par email ou téléphone.\n\nCette estimation est donnée à titre indicatif avec une fourchette (+/- 20% selon l'état réel du support). Elle permet de valider la faisabilité du projet dans votre budget avant d'organiser une visite.\n\nPour les projets importants (hôtels, EHPAD, grandes surfaces de bureaux), la visite sur site est systématiquement nécessaire pour un devis précis et engageant.\n\nPour envoyer vos plans : contact@cbsols.fr ou via WhatsApp au 05 46 00 00 00.",
      },
      {
        title: 'La zone d\'intervention : toute la Charente-Maritime et au-delà',
        body: "CB Sols intervient dans toute la Charente-Maritime (département 17) : La Rochelle et son agglomération, Île de Ré, Île d'Oléron, Rochefort, Saintes, Royan, Jonzac et toutes les communes du département.\n\nPour les projets importants (hôtels, campings, EHPAD), CB Sols se déplace également dans les départements voisins : Charente (16), Vendée (85), Gironde (33). La logistique du déplacement est intégrée dans le devis sans surprise.\n\nLa distance n'est pas un obstacle : CB Sols a réalisé des chantiers sur toute la façade atlantique. L'Île de Ré, l'Île d'Oléron et les sites insulaires font partie de notre zone d'expertise habituelle.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'sol-pvc-restaurant'],
  },
]

export function getFaqBySlug(slug: string): Faq | undefined {
  return faqs.find((f) => f.slug === slug)
}
