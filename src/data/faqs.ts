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
    metaTitle: 'Moquette Contrat vs Moquette Particulier | Différences CB Sols',
    metaDescription: 'Moquette contrat ou moquette résidentielle : quelles différences concrètes ? Normes, durabilité, prix. CB Sols explique tout simplement.',
    category: 'Moquette',
    shortAnswer: "La moquette contrat est conçue pour les usages professionnels intensifs : classements d'usage supérieurs (32-33), certifications incendie obligatoires (Bfl-s1) et résistance mécanique bien supérieure à la moquette résidentielle.",
    sections: [
      {
        title: 'Les classements d\'usage : le critère fondamental',
        body: "La différence principale entre moquette contrat et moquette résidentielle tient dans son classement d'usage européen. Les moquettes sont classées de 21 (résidentiel léger) à 34 (commercial très intensif).\n\nMoquette résidentielle : classements 21 à 23. Conçue pour un foyer familial avec un trafic limité. Durée de vie : 5 à 10 ans selon l'usage.\n\nMoquette contrat : classements 31 à 34. Conçue pour les bureaux, hôtels, commerces, établissements de santé. Résistance testée pour des centaines de milliers de passages. Durée de vie : 10 à 20 ans selon le classement et l'entretien.\n\nEn dessous du classement 31, une moquette n'est pas certifiée pour un usage professionnel. La poser dans un hôtel ou des bureaux constitue une non-conformité réglementaire, avec des conséquences potentielles sur les assurances en cas de sinistre.",
      },
      {
        title: 'Les certifications incendie : obligatoires en professionnel',
        body: "La moquette résidentielle ne nécessite pas de certification incendie particulière. Pour les établissements recevant du public (hôtels, restaurants, bureaux, collectivités), la réglementation française impose un classement incendie minimum.\n\nLe classement européen Euroclasse classe les revêtements de A1 (incombustible) à F (non testé). Pour la majorité des ERP, la moquette de sol doit être au minimum Cfl-s1 ou Bfl-s1 selon le type de bâtiment et l'étage.\n\nCB Sols fournit systématiquement les attestations de conformité incendie avec chaque projet. Ces documents sont nécessaires lors des visites de la commission de sécurité.",
      },
      {
        title: 'Construction et durabilité : ce qui se voit (et ne se voit pas)',
        body: "Visuellement, une moquette contrat et une moquette résidentielle peuvent se ressembler. Les différences sont dans la construction :\n\n- Grammage plus élevé (910-2000 g/m² en contrat hôtelier vs 300-500 g/m² en résidentiel)\n- Dos renforcé (latex double couche, jute ou feutre)\n- Fibres plus robustes (nylon résistant vs polyester économique)\n- Traitements anti-taches et anti-bactériens\n\nUne moquette résidentielle posée dans un couloir d'hôtel sera usée en 2 à 3 ans. La même surface avec une moquette EGE Hospitality classement 33 tiendra 10 à 15 ans.",
      },
      {
        title: 'Le prix : un écart qui se justifie',
        body: "La moquette contrat coûte plus cher à l'achat. Une moquette résidentielle peut se trouver à 8-15 €/m² fournie. Une moquette contrat de bureau standard est à 35-55 €/m², et une moquette hôtelière haut de gamme (EGE) à 35-85 €/m².\n\nMais rapportée à la durée de vie, la moquette contrat est souvent moins chère. Si une moquette résidentielle dure 3 ans dans un usage professionnel (puis doit être remplacée) contre 12 ans pour une moquette contrat, le coût annuel est radicalement différent.\n\nCB Sols pose de la moquette contrat aussi bien pour les professionnels que pour les particuliers exigeants : sur un projet où la moquette doit durer (résidence principale, maison de famille, espace à fort passage), le contrat reste le bon choix. Pour les particuliers comme pour les pros, nous ne posons pas de moquette résidentielle sur un usage qui la mettrait en échec. C'est une question de responsabilité.",
      },
    ],
    relatedFaqs: ['duree-vie-moquette-professionnelle', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'pose-moquette-sur-carrelage',
    question: 'Peut-on poser de la moquette sur du carrelage existant ?',
    metaTitle: 'Poser Moquette sur Carrelage | Conseils Expert CB Sols',
    metaDescription: 'Peut-on poser de la moquette sur du carrelage ? Conditions, méthodes, avantages et inconvénients. Guide technique par CB Sols en Charente-Maritime.',
    category: 'Technique de Pose',
    shortAnswer: "Oui, sous conditions. Le carrelage doit être plan (tolérance 2mm sous règle de 2m), propre, sans carreau décollé et les joints en bon état. Un ragréage de surfaçage est obligatoire.",
    sections: [
      {
        title: 'Les conditions pour poser sur du carrelage',
        body: "La pose de moquette sur du carrelage est techniquement possible, mais le support doit répondre à plusieurs critères :\n\n1. Planéité : la tolérance maximum est de 2mm sous une règle de 2 mètres. Des carreaux bombés, fissurés ou des joints en relief trop importants se verront à travers la moquette et créeront des zones d'abrasion prématurée.\n\n2. Solidité : tous les carreaux doivent être parfaitement collés. Un carreau creux (qui sonne creux quand on le frappe) doit être reposé. Une moquette sur un carreau décollé finira par se décoller aussi, voire par créer un dénivelé dangereux.\n\n3. Propreté : le carrelage doit être dégraissé et exempt de toute colle ou résidu qui empêcherait l'adhérence. CB Sols réalise un nettoyage et un primaire d'accrochage si nécessaire.\n\n4. Joints : des joints en ciment en bon état sont acceptables. Des joints fissurés, décollés ou très larges doivent être refaits. Les joints trop en relief peuvent être arasés mécaniquement.",
      },
      {
        title: 'Les méthodes de fixation',
        body: "Deux méthodes de fixation sont possibles pour la moquette sur carrelage :\n\nLa colle (méthode la plus courante en professionnel) : un adhésif de sol adapté est appliqué uniquement sur le ragréage préalablement réalisé. C'est la méthode la plus solide et la plus pérenne, recommandée pour les espaces à fort trafic et les moquettes lourdes.\n\nLes bandes gripper : des bandes striées sont clouées ou collées en périphérie de la pièce. La moquette est tendue dessus. Cette méthode est possible mais moins recommandée sur carrelage car l'ancrage des bandes est moins solide que sur béton.\n\nCB Sols détermine la meilleure méthode lors du devis, après évaluation du type de carrelage et de l'usage prévu.",
      },
      {
        title: 'Faut-il déposer le carrelage ?',
        body: "Non, dans la majorité des cas. La dépose de carrelage est longue, coûteuse, génère des gravats importants et risque d'endommager le support. Sauf si le carrelage est en très mauvais état (décollements multiples, fissurations profondes), il est préférable de poser la moquette dessus après préparation.\n\nLa seule situation où la dépose est impérative : si l'accumulation de niveaux (ancien carrelage + éventuel précédent revêtement + nouvelle moquette) crée un dénivelé inacceptable par rapport aux seuils de portes ou aux zones contiguës.\n\nCB Sols évalue systématiquement la hauteur des niveaux lors du devis pour anticiper ces problèmes.",
      },
      {
        title: 'Le ragréage de surfaçage : incontournable',
        body: "Même sur un carrelage propre et plan, les joints créent des reliefs (généralement 1 à 3 mm) qui se voient et s'usent prématurément sous la moquette. La solution : un ragréage de surfaçage fin (autolissant) appliqué sur l'ensemble du carrelage pour créer une surface parfaitement plane.\n\nCe ragréage coûte entre 8 et 25 €/m² (P3 standard 6-10 €/m², fibré 12-30 €/m² sur bois ou fortes épaisseurs). Il sèche en 4 à 48 heures avant recouvrement selon les produits. CB Sols réalise toujours la vérification de planéité après ragréage avant de passer à la pose.\n\nPour les projets où la rapidité est cruciale, il existe des ragréages à prise ultra-rapide (marchable en 30 minutes).",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'duree-vie-moquette-professionnelle',
    question: 'Quelle est la durée de vie d\'une moquette professionnelle ?',
    metaTitle: 'Durée de Vie Moquette Professionnelle | CB Sols',
    metaDescription: "Combien de temps dure une moquette professionnelle ? Hôtel, bureau, collectivité : durées de vie réelles selon l'usage et l'entretien. Guide CB Sols.",
    category: 'Moquette',
    shortAnswer: "Une moquette professionnelle bien choisie et bien entretenue dure 8 à 15 ans selon l'usage. En hôtellerie : 8 à 12 ans en chambre, 5 à 8 ans en couloir. En bureau classement 33 : 12 à 15 ans.",
    sections: [
      {
        title: 'Durées de vie par secteur et type d\'usage',
        body: "La durée de vie d'une moquette professionnelle varie considérablement selon l'intensité du trafic :\n\nHôtellerie, chambres (classement 33, grammage 910 g/m² minimum) : 8 à 12 ans avec un entretien régulier. Les chambres à fort taux d'occupation (90%+) en haut de gamme sont à renouveler plus souvent pour maintenir l'image.\n\nHôtellerie, couloirs (classement 33-34, haute résistance) : 5 à 8 ans. Les couloirs subissent un trafic beaucoup plus intense que les chambres : chariots de ménage, bagages, va-et-vient constant.\n\nBureaux, open space (classement 33, dalles) : 10 à 15 ans avec aspirateur hebdomadaire et injection-extraction annuelle. Les dalles permettent le remplacement partiel des zones les plus usées.\n\nCinémas et salles de spectacle (classement 34) : 12 à 18 ans. Malgré le fort trafic, les passages sont concentrés sur des plages horaires courtes et le nettoyage est régulier.",
      },
      {
        title: 'Les facteurs qui allongent ou raccourcissent la durée de vie',
        body: "L'entretien est le facteur numéro 1. Une moquette mal entretenue (aspiration irrégulière, taches non traitées, pas d'injection-extraction) peut voir sa durée de vie divisée par deux. Inversement, un programme d'entretien rigoureux prolonge significativement sa vie.\n\nLe produit choisi est déterminant. Un grammage supérieur (1100 g/m² vs 700 g/m²) fait une différence notable en couloir hôtelier. Le type de fibre aussi : le nylon 6.6 est plus résistant à l'abrasion que le nylon 6, lui-même supérieur au polyester.\n\nLe support et la pose influencent la tenue dans le temps. Une moquette mal collée se décolle aux bords et forme des plis, causes d'usure prématurée et de risques de chute. CB Sols prépare toujours le support et choisit l'adhésif adapté pour garantir une tenue dans la durée.\n\nLes conditions climatiques locales jouent aussi un rôle en Charente-Maritime. L'hygrométrie élevée en zone côtière peut affecter le dos de la moquette si le sous-sol n'est pas parfaitement sec.",
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
    relatedSolutions: ['moquette-hotel'],
  },
  {
    slug: 'sol-pvc-cuisine-professionnelle-norme',
    question: 'Quelles sont les normes du sol PVC pour une cuisine professionnelle ?',
    metaTitle: 'Normes Sol PVC Cuisine Professionnelle | CB Sols',
    metaDescription: 'Quelles normes pour le sol PVC en cuisine professionnelle ? HACCP, antidérapance R11, classement incendie, soudure à chaud. CB Sols explique.',
    category: 'Sol PVC',
    shortAnswer: "Un sol PVC de cuisine professionnelle doit être classé R10 ou R11 (antidérapance), résistant aux graisses et désinfectants, soudé à chaud (zéro joint) et conforme aux exigences HACCP. Gerflor Mipolam Granit et Taralay Premium sont les références.",
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
        body: "La soudure à chaud est une technique qui consiste à créer une jonction étanche entre deux lés de sol PVC en faisant fondre un cordon de soudure (de même composition que le sol) dans la gorge usinée entre les deux lés.\n\nPourquoi c'est obligatoire en cuisine : sans soudure, la jonction entre deux lés est un joint qui, même très serré, permet aux liquides, graisses et micro-organismes de s'infiltrer sous le revêtement. En cuisine professionnelle, soumise à des nettoyages haute pression, cette infiltration est inévitable et rapide.\n\nLa soudure à chaud nécessite un matériel spécifique (pistolet de soudure et bus calibrés) et une formation technique. CB Sols forme ses poseurs à cette technique et réalise la soudure sur tous ses projets cuisine professionnelle.\n\nLes remontées en plinthes (le sol PVC soudé qui remonte de 10 à 15 cm sur les murs) complètent le dispositif d'étanchéité en éliminant la jonction sol/mur, autre point critique de contamination.",
      },
      {
        title: 'Les produits de référence et leurs certifications',
        body: "Trois familles de produits sont adaptées aux cuisines professionnelles :\n\nGerflor Mipolam Granit : sol PVC homogène, classement R10 standard (R11 sur demande), résistance chimique P2, certification NSF pour les espaces alimentaires. Grande gamme de coloris. Durée de vie : 20-30 ans.\n\nGerflor Taralay Premium Contract : sol PVC homogène, classement R10/R11, certifié lieux de restauration, émissions VOC très faibles (certification Indoor Air). Durée de vie comparable.\n\nGerflor Taralay Premium Contract : sol PVC hétérogène, R10, résistance chimique élevée, nombreux décors. Bonne option pour les cuisines où l'esthétique prime avec une résistance suffisante.\n\nCB Sols distribue ces trois marques et peut vous présenter des échantillons en showroom ou en visite sur site lors du devis.",
      },
    ],
    relatedFaqs: ['sol-pvc-cuisine-professionnelle-norme', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['sol-pvc-restaurant'],
  },
  {
    slug: 'devis-revetement-sol-gratuit',
    question: 'Comment obtenir un devis gratuit pour son revêtement de sol ?',
    metaTitle: 'Devis Revêtement de Sol Gratuit | CB Sols Charente-Maritime',
    metaDescription: 'Comment obtenir un devis gratuit pour votre revêtement de sol ? Process CB Sols, délais, ce qui est inclus. Devis sous 48h en Charente-Maritime.',
    category: 'Devis & Process',
    shortAnswer: "CB Sols se déplace gratuitement dans toute la Charente-Maritime pour mesurer, évaluer le support et remettre un devis chiffré sous 48h. Contactez par téléphone, formulaire ou email avec vos plans.",
    sections: [
      {
        title: 'Le process CB Sols : du premier contact au devis',
        body: "Obtenir un devis avec CB Sols est simple et rapide. Voici le processus :\n\n1. Premier contact : appelez le 06 85 05 28 80, remplissez le formulaire sur cbsols.fr/contact ou envoyez un email à contact@cbsols.fr avec une description de votre projet. Si vous avez des plans ou des photos, joignez-les.\n\n2. Prise de rendez-vous : CB Sols vous rappelle sous 24h en semaine pour convenir d'un rendez-vous sur site. Pour les projets avec des plans précis, une estimation peut être fournie par email avant la visite.\n\n3. Visite sur site : Valentin Prévoteau ou un membre de l'équipe se déplace gratuitement dans toute la Charente-Maritime. La visite dure 30 à 60 minutes selon la complexité du projet. Nous mesurons, évaluons l'état du support, discutons de vos attentes esthétiques et techniques.\n\n4. Remise du devis : le devis est remis par email dans les 48h suivant la visite. Il est détaillé poste par poste : fourniture, dépose éventuelle, préparation du support, pose et finitions. Rien de caché.",
      },
      {
        title: 'Ce que comprend le devis CB Sols',
        body: "Un devis CB Sols est complet et transparent. Il comprend :\n\n- La description précise des travaux (surfaces, produits, méthodes)\n- Le détail HT de chaque poste : fourniture matériaux, dépose de l'ancien revêtement (si applicable), préparation du support (ragréage, primaire), pose, soudure (si applicable), finitions (plinthes, seuils)\n- Le prix TTC avec indication du taux de TVA applicable (20% professionnel, 10% rénovation résidentielle +2 ans)\n- Les délais de réalisation et la date de disponibilité de l'équipe\n- La durée de validité du devis (généralement 3 mois)\n\nLe devis est sans engagement. Vous pouvez demander des alternatives de produits ou de méthodes : CB Sols présente systématiquement au moins deux options de gamme.",
      },
      {
        title: 'Peut-on avoir une estimation sans visite ?',
        body: "Oui, dans certains cas. Si vous disposez de plans précis avec les surfaces en m², des photos du support existant et des informations sur le type de revêtement souhaité, CB Sols peut établir une estimation budgétaire par email ou téléphone.\n\nCette estimation est donnée à titre indicatif avec une fourchette (+/- 20% selon l'état réel du support). Elle permet de valider la faisabilité du projet dans votre budget avant d'organiser une visite.\n\nPour les projets importants (hôtels, grandes surfaces de bureaux), la visite sur site est systématiquement nécessaire pour un devis précis et engageant.\n\nPour envoyer vos plans : contact@cbsols.fr ou via WhatsApp au 06 85 05 28 80.",
      },
      {
        title: 'La zone d\'intervention : toute la Charente-Maritime et au-delà',
        body: "CB Sols intervient dans toute la Charente-Maritime (département 17) : La Rochelle et son agglomération, Île de Ré, Île d'Oléron, Rochefort, Saintes, Royan, Jonzac et toutes les communes du département.\n\nPour les projets importants (hôtels, campings, collectivités), CB Sols se déplace également dans les départements voisins : Charente (16), Vendée (85), Gironde (33). La logistique du déplacement est intégrée dans le devis sans surprise.\n\nLa distance n'est pas un obstacle : CB Sols a réalisé des projets sur toute la façade atlantique. L'Île de Ré, l'Île d'Oléron et les sites insulaires font partie de notre zone d'expertise habituelle.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'sol-pvc-restaurant'],
  },
  {
    slug: 'moquette-allergenes-entretien',
    question: 'Moquette et allergènes : que faut-il savoir sur l\'entretien ?',
    metaTitle: 'Moquette & Allergènes | Hygiène, Entretien | CB Sols',
    metaDescription: "Moquette et allergies : idées reçues, réalité scientifique et entretien adapté. Guide CB Sols pour profiter d'une moquette saine en Charente-Maritime.",
    category: 'Moquette',
    shortAnswer: "Contrairement aux idées reçues, la moquette est le seul revêtement de sol capable de piéger les particules fines (poussières, pollens, allergènes) au lieu de les laisser circuler dans l'air. Avec un entretien adapté (aspirateur HEPA hebdomadaire, injection-extraction tous les 2 à 3 ans), elle convient parfaitement aux personnes allergiques.",
    sections: [
      {
        title: 'Pourquoi la moquette est en réalité l\'alliée des allergiques',
        body: "L'idée reçue selon laquelle la moquette serait néfaste pour les allergiques vient des moquettes résidentielles bas de gamme mal entretenues. Les études récentes (notamment l'étude DAAB en Allemagne et plusieurs publications scientifiques européennes) démontrent l'inverse : la moquette piège les particules fines au sol au lieu de les laisser circuler dans l'air.\n\nSur un sol dur (carrelage, parquet, PVC), chaque déplacement remet en suspension les poussières, pollens et acariens présents au sol. Sur une moquette, ces particules sont retenues dans les fibres, où l'aspirateur peut les capturer définitivement.\n\nLe résultat mesuré : l'air d'une pièce moquettée bien entretenue contient en moyenne deux fois moins de particules fines en suspension qu'une pièce avec sol dur équivalent.",
      },
      {
        title: 'L\'entretien adapté pour une moquette saine',
        body: "Pour qu'une moquette joue pleinement son rôle d'aspirateur passif, l'entretien suit trois principes :\n\n1. Aspirateur HEPA hebdomadaire : un aspirateur équipé d'un filtre HEPA (norme EN 1822) capture 99,97% des particules de 0,3 microns. Aspirez chaque pièce une fois par semaine, deux fois en chambre si vous êtes allergique.\n\n2. Nettoyage par injection-extraction tous les 2 à 3 ans : ce nettoyage en profondeur extrait l'eau souillée et les particules incrustées. CB Sols propose un service annuel ou bisannuel selon vos besoins. Séchage 4 à 6 heures.\n\n3. Traitement préventif : les moquettes professionnelles (gammes EGE, classement 33) sont traitées en usine contre les acariens et les bactéries. Ce traitement reste actif 10 à 15 ans.",
      },
      {
        title: 'Le bon choix de moquette pour une chambre',
        body: "Pour une chambre, particulièrement une chambre d'enfant ou une chambre de personne allergique, nous recommandons une moquette :\n\n- Tuftée bouclée ou velours coupé court (les fibres longues retiennent davantage de poussière difficile à extraire)\n- Avec traitement antiacarien et antibactérien certifié\n- Grammage entre 700 et 1100 g/m² (compromis confort / facilité d'aspiration)\n- Compatible chauffage au sol si applicable\n\nLes gammes EGE Hospitality et EGE Highline répondent à ces critères et sont les références que nous posons aussi bien chez les hôteliers que chez les particuliers.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'pvc-salle-de-bains-particulier',
    question: 'Peut-on poser du PVC dans une salle de bains (moins froid, moins glissant) ?',
    metaTitle: 'Sol PVC en Salle de Bains | Étanche, Antidérapant | CB Sols',
    metaDescription: "Sol PVC en salle de bains : 100% étanche, antidérapant R10/R11, chaleur sous les pieds. Guide CB Sols pour particuliers en Charente-Maritime.",
    category: 'Sol PVC',
    shortAnswer: "Oui. Le PVC professionnel en lés soudés à chaud (Gerflor Taralay, objectflor) est 100% étanche, antidérapant R10 ou R11 selon la gamme, et nettement moins froid qu'un carrelage. C'est une excellente alternative pour une salle de bains particulier.",
    sections: [
      {
        title: 'Pourquoi le PVC en salle de bains a du sens',
        body: "Le PVC moderne n'a plus rien à voir avec le lino bas de gamme. Les gammes professionnelles que nous posons en salle de bains présentent trois avantages clés face au carrelage :\n\n1. Confort thermique : le PVC est nettement moins froid au contact pieds nus que le carrelage ou la pierre. Sa conductivité thermique est environ trois fois inférieure. Idéal en sortie de douche ou de bain.\n\n2. Sécurité : les gammes salle de bains sont classées R10 ou R11 (antidérapant en présence d'eau). Pour comparaison, un carrelage standard est R9 voire moins une fois mouillé.\n\n3. Étanchéité parfaite : posé en lés (rouleaux) avec soudure à chaud des joints, le PVC est 100% étanche. Pas de joints en ciment qui noircissent avec le temps, pas de risque d'infiltration sous la douche.",
      },
      {
        title: 'Les gammes adaptées à la SDB particulier',
        body: "Pour une salle de bains particulier, deux options principales :\n\nPVC en lés (rouleaux) : c'est la solution la plus sûre, surtout en cas de douche italienne. Gerflor Taralay Premium ou objectflor expona : épaisseur 2-3 mm, R10/R11, soudure à chaud invisible, durée de vie 15-25 ans.\n\nLames LVT clipsées : pour une salle de bains avec douche à receveur ou baignoire (sans douche italienne), on peut utiliser des lames LVT premium. Esthétique parquet ou pierre très réaliste, pose plus rapide. Gerflor Creation 55 ou objectflor LooseLay : durée de vie 20+ ans, mais l'étanchéité dépend de la qualité des jonctions.\n\nNous évaluons à la visite quelle solution est la mieux adaptée à votre SDB.",
      },
      {
        title: 'Préparation du support et pose',
        body: "Une SDB particulier se prépare avec rigueur :\n\n1. Dépose éventuelle de l'ancien carrelage si trop irrégulier (rare, le PVC se pose souvent dessus après ragréage)\n2. Ragréage de surfaçage P3 fibré pour neutraliser les joints et créer une surface parfaitement plane (tolérance 2 mm sous règle de 2 m)\n3. Primaire d'accrochage adapté\n4. Pose collée du PVC en lés ou pose flottante clipsée des LVT\n5. Soudure à chaud des joints (PVC en lés uniquement) avec cordon de soudure assorti à la couleur\n6. Finitions : remontée en plinthe (sur 5 à 10 cm) ou plinthe rapportée, joint silicone sanitaire au pourtour de la douche/baignoire\n\nCompter 1 à 2 jours selon la surface. La SDB peut être utilisée 24h après la pose.",
      },
    ],
    relatedFaqs: ['sol-pvc-cuisine-professionnelle-norme', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['sol-pvc-hotel', 'sol-pvc-cuisine'],
  },
]

export function getFaqBySlug(slug: string): Faq | undefined {
  return faqs.find((f) => f.slug === slug)
}
