export interface Guide {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  headline: string
  intro: string
  sections: { title: string; body: string }[]
  faq: { q: string; a: string }[]
  relatedSolutions: string[]
}

export const guides: Guide[] = [
  {
    slug: 'choisir-sa-moquette',
    title: 'Comment choisir sa moquette professionnelle',
    metaTitle: 'Comment Choisir sa Moquette Professionnelle — Guide CB Sols',
    metaDescription: 'Guide complet pour choisir la bonne moquette professionnelle : critères de choix, classements, grammages, marques. Par CB Sols, spécialiste en Charente-Maritime.',
    category: 'Guide Moquette',
    headline: 'Choisir sa moquette professionnelle',
    intro: 'Pas toutes les moquettes ne se valent. Entre une moquette de bureau, une moquette hôtelière et une moquette EHPAD, les exigences sont radicalement différentes. Ce guide vous aide à poser les bonnes questions avant de choisir.',
    sections: [
      {
        title: 'Les critères fondamentaux',
        body: "Le premier critère est le classement d'usage. En Europe, les moquettes sont classées de 21 (usage résidentiel léger) à 33 (usage commercial intense). Pour un bureau, visez un minimum 32. Pour un couloir d'hôtel ou un établissement de santé : 33. Ce classement détermine la durée de vie de votre investissement.\n\nLe grammage vient ensuite. Plus le grammage est élevé (exprimé en g/m²), plus la moquette est dense et résistante. Comptez 500 à 600 g/m² pour un bureau classique, 700 à 900 g/m² pour l'hôtellerie ou les établissements de santé.\n\nEnfin, la construction : tuftée, tissée, aiguilletée ou en dalle. La moquette en dalles (50×50 cm) est idéale pour les bureaux car elle permet le remplacement partiel. La moquette en lés convient mieux aux chambres d'hôtel et aux couloirs.",
      },
      {
        title: 'Les classements incendie à connaître',
        body: "Pour les établissements recevant du public (ERP), les hôtels, les EHPAD et les bureaux accueillant plus de 50 personnes, le classement incendie est obligatoire. Le classement européen Euroclasse distingue les réactions au feu de A1 (incombustible) à F (sans performance déterminée).\n\nPour la majorité des établissements professionnels, le minimum requis est Cfl-s1 ou Bfl-s1 selon le type de bâtiment. CB Sols vous guide dans le choix selon votre ERP et vous fournit les attestations de conformité pour vos dossiers administratifs.\n\nAttention : un hôtel classé sans moquette certifiée Bfl-s1 en couloir risque la non-conformité lors de la visite de la commission de sécurité.",
      },
      {
        title: 'Tuftée, tissée, aiguilletée : les différences',
        body: "La moquette tuftée est la plus répandue. Les fils sont piqués dans un support primaire puis fixés avec un latex. Bonne résistance, large choix esthétique, rapport qualité/prix optimal pour l'hôtellerie et les bureaux.\n\nLa moquette tissée (Wilton ou Axminster) est plus noble et plus coûteuse. Le motif est intégré dans la structure même du tissu, ce qui lui confère une durabilité exceptionnelle. Idéale pour les lobbys d'hôtels haut de gamme ou les espaces de réception.\n\nLa moquette aiguilletée (ou velours aiguilleté) est plus rigide, souvent sans envers. Elle résiste mieux aux fauteuils roulants et aux chariots, ce qui la rend adaptée aux EHPAD, aux couloirs hospitaliers et aux locaux techniques.",
      },
      {
        title: 'Les marques de référence',
        body: "CB Sols distribue les meilleures marques du marché contrat. EGE est la marque danoise de référence pour l'hôtellerie et les bureaux : gamme Hospitality, design scandinave, certifications environnementales. Balsan (groupe Tarkett) propose une gamme complète du bureau à l'hôtellerie avec un excellent rapport qualité/prix.\n\nInterfacee et Desso excellent dans les dalles de moquette pour bureaux avec des programmes de reprise en fin de vie. Pour les EHPAD et les établissements de santé, Forbo Tessera et Balta sont incontournables grâce à leurs certifications sanitaires.\n\nCB Sols dispose d'un showroom à Villedoux avec plusieurs centaines d'échantillons. Une visite vaut mieux que toutes les descriptions en ligne.",
      },
    ],
    faq: [
      { q: 'Quelle moquette pour un bureau open space ?', a: 'Pour un open space, optez pour une dalle de moquette classement 33, grammage 500-600 g/m², avec sous-couche intégrée pour le confort acoustique. Les dalles facilitent le remplacement en cas de détérioration localisée. EGE Carpets ou Interface sont de bonnes références.' },
      { q: 'Combien de temps dure une moquette professionnelle ?', a: 'Une moquette professionnelle bien choisie et bien entretenue dure 10 à 15 ans en bureaux, 8 à 12 ans en hôtellerie haute fréquentation. L\'entretien régulier par aspiration et le nettoyage annuel à l\'injection-extraction prolongent significativement sa durée de vie.' },
      { q: 'Peut-on poser la moquette sur du carrelage existant ?', a: 'Oui, sous conditions. Le carrelage doit être propre, plan (tolérances de 2mm sous la règle de 2m), et solidement ancré. Des résidus de colle ou des carreaux décollés nécessitent une remise à niveau préalable. CB Sols évalue systématiquement l\'état du support lors du devis.' },
      { q: 'La moquette convient-elle aux personnes allergiques ?', a: 'Les moquettes modernes avec certifications IAQ (Indoor Air Quality) sont adaptées aux personnes allergiques. Les certifications Oeko-Tex, Cradle to Cradle et le label Asthma & Allergy Foundation garantissent des émissions très faibles en COV. CB Sols sélectionne des produits certifiés pour les EHPAD et les établissements de santé.' },
    ],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau', 'moquette-ehpad'],
  },
  {
    slug: 'sol-pvc-ou-moquette',
    title: 'Sol PVC ou moquette : comment choisir',
    metaTitle: 'Sol PVC ou Moquette pour Professionnel — Comparatif CB Sols',
    metaDescription: 'Sol PVC vs moquette : comparatif complet pour les professionnels. Coût, durabilité, entretien, acoustique, confort. Quel revêtement choisir selon votre activité ?',
    category: 'Comparatif',
    headline: 'Sol PVC ou moquette',
    intro: "La question revient souvent : pour un bureau, un hôtel ou un restaurant, vaut-il mieux du sol PVC ou de la moquette ? La réponse dépend de vos priorités : confort acoustique, facilité d'entretien, esthétique, contraintes sanitaires. Voici le comparatif complet.",
    sections: [
      {
        title: "Confort acoustique : avantage moquette",
        body: "La moquette est imbattable pour l'absorption acoustique. Elle réduit les bruits d'impact (chutes d'objets, pas) de 25 à 35 dB selon les produits, et contribue à l'absorption des bruits aériens dans la pièce. Dans un hôtel, la moquette en couloir et en chambre réduit considérablement les nuisances entre chambres.\n\nLe sol PVC (même avec sous-couche) ne peut pas atteindre ces performances. Il existe des systèmes avec sous-couche acoustique spécifique qui améliorent l'indice d'impact, mais restent en dessous de la moquette.\n\nVerdic : si le confort acoustique est une priorité (hôtels, bureaux open space, EHPAD), la moquette est supérieure.",
      },
      {
        title: "Entretien et hygiène : avantage sol PVC",
        body: "Le sol PVC s'entretient avec une simple serpillère et des produits classiques. En cuisine professionnelle, en couloir d'hôpital ou dans un espace à fort risque de salissures liquides, le PVC est indispensable. Imperméable, il ne retient pas l'humidité et ne favorise pas le développement bactérien.\n\nLa moquette nécessite un aspirateur quotidien et un nettoyage professionnel annuel à l'injection-extraction. Dans les espaces à risque alimentaire ou sanitaire élevé, elle est proscrite.\n\nVerdic : pour les cuisines, les vestiaires, les locaux techniques, les espaces à trafic liquide — sol PVC obligatoire.",
      },
      {
        title: "Coût total de possession : c'est plus nuancé",
        body: "À l'achat, la moquette est souvent moins chère que le sol PVC haut de gamme. Mais sur 10 ans, l'entretien professionnel de la moquette (injection-extraction annuelle) représente un coût récurrent non négligeable.\n\nLe sol PVC dure généralement plus longtemps (15-20 ans vs 10-15 ans pour la moquette en usage intensif). En dalles PVC, le remplacement partiel est facilement envisageable.\n\nVerdic : le coût total sur 15 ans est comparable. La moquette est moins chère à installer mais coûte plus à entretenir. Le PVC s'amortit mieux sur le long terme.",
      },
      {
        title: "Esthétique et ambiance",
        body: "La moquette crée une atmosphère chaleureuse, confortable et feutrée. Elle reste le choix de référence pour les chambres d'hôtel, les salons d'accueil et les bureaux où l'on veut projeter une image premium. Les gammes modernes (EGE, Balsan) offrent une très grande variété de motifs et coloris.\n\nLe sol PVC a fait d'énormes progrès esthétiques. Les lames vinyle à décor bois ou pierre sont aujourd'hui très réalistes. Pour un restaurant, un espace de vente ou un espace mixte bureau/showroom, le sol PVC apporte une touche contemporaine et facile à personnaliser.\n\nVerdic : la moquette pour le feutré et le haut de gamme traditionnel ; le PVC pour le contemporain et le polyvalent.",
      },
    ],
    faq: [
      { q: "Peut-on mettre du sol PVC dans une chambre d'hôtel ?", a: "Oui, notamment le LVT (Luxury Vinyl Tile) ou les lames vinyle haute qualité. Certains hôtels design préfèrent cette option pour une esthétique contemporaine. L'inconvénient : moins de confort acoustique et de chaleur qu'une moquette. Pour les hôtels haut de gamme, la moquette reste le standard." },
      { q: "Sol PVC ou moquette pour un EHPAD ?", a: "Les deux sont utilisés en EHPAD selon les zones. Les chambres bénéficient de la moquette pour le confort et l'acoustique. Les couloirs et les espaces de vie peuvent recevoir du sol PVC pour faciliter le nettoyage industriel. Les zones médicales et les salles de bain imposent le sol PVC. CB Sols réalise régulièrement des EHPAD avec les deux matériaux." },
      { q: "Quelle est la durée de vie d'un sol PVC professionnel ?", a: "Un sol PVC professionnel (classement 34 ou 43) correctement posé et entretenu dure 15 à 20 ans. Les lames vinyle LVT haut de gamme peuvent dépasser 25 ans. La durée de vie dépend surtout du classement choisi et de la fréquence d'entretien." },
    ],
    relatedSolutions: ['sol-pvc-restaurant', 'sol-pvc-hotel', 'sol-pvc-ehpad'],
  },
  {
    slug: 'moquette-contrat-professionnelle',
    title: 'La moquette contrat : tout ce qu\'il faut savoir',
    metaTitle: 'Moquette Contrat Professionnelle : Guide Complet CB Sols',
    metaDescription: 'Qu\'est-ce que la moquette contrat ? Normes, certifications, différences avec la moquette résidentielle, prix. Guide expert par CB Sols en Charente-Maritime.',
    category: 'Guide Technique',
    headline: 'La moquette contrat pour les professionnels',
    intro: "La « moquette contrat » désigne les moquettes conçues pour les usages professionnels intensifs. Normes incendie, résistance au trafic, certifications environnementales : voici ce qui la distingue d'une moquette résidentielle ordinaire.",
    sections: [
      {
        title: "Définition et normes",
        body: "La moquette contrat est définie par son classement d'usage (33 ou 34 selon la norme EN 1307) et ses certifications incendie (Cfl-s1 minimum, souvent Bfl-s1 pour les ERP). Ces classements garantissent qu'elle a été testée pour résister à plusieurs centaines de milliers de passages et à des contraintes mécaniques supérieures à celles de la moquette résidentielle.\n\nEn France, le code du travail et les réglementations incendie imposent ces niveaux de performance dans les bureaux, commerces, hôtels et établissements de santé. Utiliser une moquette résidentielle dans ces espaces est une non-conformité réglementaire et un risque assurantiel.",
      },
      {
        title: "Les certifications à exiger",
        body: "Plusieurs certifications coexistent. La certification Cradle to Cradle (C2C) garantit que la moquette peut être recyclée en fin de vie — c'est un critère de plus en plus demandé dans les appels d'offres publics. La certification Oeko-Tex Standard 100 garantit l'absence de substances nocives pour la santé, importante pour les EHPAD et les espaces fréquentés par des personnes vulnérables.\n\nLe label GUT (Gemeinschaft umweltfreundlicher Teppichboden) est une certification allemande reconnue pour les faibles émissions de COV. La norme ISO 9001 s'applique au processus de fabrication.\n\nCB Sols vous fournit systématiquement les fiches techniques et certificats de conformité avec chaque commande.",
      },
      {
        title: "Prix et budgets",
        body: "La moquette contrat coûte entre 25 et 150 €/m² fournie selon la gamme et la construction. La fourchette haute correspond aux moquettes tissées Wilton ou Axminster sur mesure pour des lobbys hôteliers ou des restaurants gastronomiques.\n\nPour un bureau standard, comptez 30-50 €/m² fournie posée. Pour une chambre d'hôtel 3 étoiles : 40-65 €/m² fournie posée. Pour une moquette tuftée hôtelière haut de gamme EGE : 50-90 €/m² fournie posée.\n\nCes prix incluent la dépose de l'ancien revêtement, l'emport des gravats et la fourniture des matériaux de scellement. La pose seule représente généralement 8-15 €/m² selon la complexité du chantier.",
      },
    ],
    faq: [
      { q: "Quelle différence entre moquette contrat et moquette résidentielle ?", a: "La moquette contrat est conçue pour les usages professionnels intensifs avec des classements d'usage 32-33 (vs 21-22 pour le résidentiel), des certifications incendie obligatoires (Bfl-s1) et des tests de durabilité supérieurs. Elle est obligatoire dans les ERP, les hôtels classifiés et les bureaux professionnels." },
      { q: "Peut-on obtenir une moquette contrat sur mesure ?", a: "Oui. CB Sols propose des moquettes sur mesure avec motif exclusif ou logo intégré, en tisssage Axminster ou tuftage. Cette option est particulièrement prisée pour les lobbys d'hôtels et les espaces de réception haut de gamme. Délai : 6 à 12 semaines selon le fabricant." },
    ],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau', 'moquette-collectivite'],
  },
  {
    slug: 'entretien-moquette-professionnelle',
    title: 'Entretien de la moquette professionnelle',
    metaTitle: 'Entretien Moquette Professionnelle : Conseils & Fréquences CB Sols',
    metaDescription: 'Comment entretenir une moquette professionnelle ? Fréquences, méthodes (injection-extraction, shampooing), erreurs à éviter. Guide CB Sols Charente-Maritime.',
    category: 'Guide Entretien',
    headline: 'Entretenir sa moquette professionnelle',
    intro: "Une moquette professionnelle bien entretenue dure deux fois plus longtemps qu'une moquette mal entretenue. Ce guide détaille les méthodes, fréquences et erreurs à éviter pour maximiser votre investissement.",
    sections: [
      {
        title: "Les méthodes d'entretien",
        body: "L'aspiration est la base de l'entretien quotidien. Elle doit être effectuée avec un aspirateur professionnel à forte aspiration, de préférence avec brosse rotative pour les moquettes à poils. Fréquence recommandée : quotidienne dans les couloirs d'hôtel et espaces à fort trafic, hebdomadaire dans les bureaux.\n\nLe nettoyage à l'injection-extraction (hot-water extraction) est la méthode professionnelle de référence. Une machine injecte de l'eau chaude et un détergent dans les fibres puis aspire immédiatement le tout. Cette méthode élimine les salissures profondes, les allergènes et les bactéries. Elle doit être réalisée par un professionnel équipé.\n\nLe spray extraction (shampooing moquette) est une méthode plus rapide mais moins efficace en profondeur. Elle convient pour les entretiens intermédiaires.",
      },
      {
        title: "Fréquences recommandées par secteur",
        body: "Hôtellerie (chambres) : aspiration quotidienne par le personnel de ménage + injection-extraction 1 à 2 fois par an selon l'occupation. Couloirs : injection-extraction 2 à 3 fois par an.\n\nBureaux : aspiration hebdomadaire + injection-extraction annuelle. Pour un open space à fort trafic, injection-extraction 2 fois par an.\n\nEHPAD et établissements de santé : aspiration quotidienne + injection-extraction trimestrielle minimum. Les protocoles sanitaires peuvent imposer des fréquences supérieures.\n\nRestaurants et hôtels avec espaces F&B : injection-extraction mensuelle recommandée compte tenu des projections alimentaires.",
      },
      {
        title: "Les erreurs à éviter",
        body: "L'excès d'humidité est l'ennemi numéro 1 de la moquette. Un nettoyage trop humide sans séchage suffisant favorise le développement de moisissures et de mauvaises odeurs. La moquette doit être sèche dans les 6 heures suivant le nettoyage.\n\nL'utilisation de produits non adaptés peut dégrader les fibres et le dos de la moquette. Evitez les nettoyants à base d'acides forts ou d'hypochlorite de sodium. Utilisez exclusivement des produits recommandés par le fabricant.\n\nNe pas traiter les taches immédiatement est une erreur courante. Une tache de café ou de vin se traite en moins de 5 minutes avec une serviette propre par absorption (jamais en frottant) puis un produit détachant adapté. Après 30 minutes, la tache peut devenir permanente sur certaines fibres.",
      },
    ],
    faq: [
      { q: "Combien coûte un nettoyage par injection-extraction ?", a: "Le nettoyage professionnel par injection-extraction coûte en général entre 3 et 8 €/m² selon la superficie, l'état de la moquette et les conditions d'accès. CB Sols propose des contrats d'entretien annuels pour les hôtels et établissements professionnels." },
      { q: "Peut-on faire l'injection-extraction soi-même ?", a: "Il existe des machines en location, mais les résultats sont rarement à la hauteur d'un professionnel équipé d'une machine traîneau haute pression. La qualité d'aspiration et la puissance de chauffage des machines de location sont très inférieures au matériel professionnel. Pour les surfaces importantes ou les moquettes hôtelières, faites appel à un professionnel." },
    ],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau', 'moquette-ehpad'],
  },
  {
    slug: 'sol-pvc-cuisines-professionnelles',
    title: 'Sol PVC pour cuisines professionnelles',
    metaTitle: 'Sol PVC Cuisine Professionnelle — Choix, Normes et Pose CB Sols',
    metaDescription: 'Quel sol PVC pour une cuisine professionnelle ? Normes HACCP, antidérapance, résistance chimique, drainage. Guide et pose par CB Sols en Charente-Maritime.',
    category: 'Guide Sol PVC',
    headline: 'Sol PVC pour cuisines professionnelles',
    intro: "La cuisine professionnelle impose des exigences parmi les plus strictes de toute installation de revêtement de sol : normes HACCP, antidérapance obligatoire, résistance aux chocs thermiques, aux graisses et aux produits de nettoyage agressifs. Voici comment choisir.",
    sections: [
      {
        title: "Les normes et obligations",
        body: "Les cuisines professionnelles (restaurants, hôtels, collectivités) sont soumises aux réglementations HACCP qui imposent des revêtements imperméables, lisses ou faiblement rugueux, résistants aux produits de nettoyage et de désinfection, et sans joints inaccessibles à l'entretien.\n\nL'antidérapance est imposée par le code du travail pour les locaux à risque glissant. La classification R des sols donne le niveau d'antidérapance : R10 pour les cuisines sèches, R11 ou R12 pour les zones humides et grasses. CB Sols sélectionne des produits homologués R11 minimum pour toutes les cuisines professionnelles.\n\nLa résistance chimique est essentielle : produits de nettoyage alcalins concentrés, désinfectants chlorés, graisses alimentaires — le sol doit résister à des cycles quotidiens.",
      },
      {
        title: "Les types de sols PVC adaptés",
        body: "Le sol PVC homogène est le plus adapté aux cuisines professionnelles. Contrairement au sol PVC hétérogène (couches superposées), il est constitué d'une seule couche de matière qui monte jusqu'à la surface. Pas de couche supérieure à user, pas de délamination possible. Sa durée de vie est exceptionnelle — 20 à 30 ans en usage intensif.\n\nLes produits Tarkett iQ (Granit, Unicolore) et Forbo Eternal sont les références du marché pour les cuisines professionnelles. Ils offrent la classification R10/R11, la résistance chimique et les certifications sanitaires requises.\n\nLes remontées en plinthe sont obligatoires pour éviter les infiltrations sous le sol. CB Sols réalise des remontées en cuvette (sol PVC soudé qui remonte de 10 à 20 cm sur les murs) pour une étanchéité parfaite.",
      },
      {
        title: "La soudure à chaud : pourquoi c'est obligatoire",
        body: "Dans une cuisine professionnelle, les lés de sol PVC doivent être soudés à chaud, jamais encollés jointivement. La soudure à chaud crée une jonction étanche entre les lés en faisant fondre un cordon de soudure PVC de même composition dans la gorge de joint.\n\nSans soudure, les joints permettent aux liquides, graisses et micro-organismes de s'infiltrer sous le revêtement — ce qui est une non-conformité HACCP et une source de dégradation rapide du sol et du support.\n\nCB Sols dispose du matériel de soudure à chaud professionnel et forme ses poseurs à cette technique. Tous nos chantiers cuisine professionnelle incluent la soudure et les remontées étanches.",
      },
    ],
    faq: [
      { q: "Quel sol pour une cuisine de restaurant ?", a: "Sol PVC homogène R11 minimum, soudé à chaud avec remontées en cuvette. Classement résistance chimique P2 minimum. Références : Tarkett iQ Granit, Forbo Eternal Natural ou Heterogeneous. CB Sols réalise le devis sur mesure après visite du site." },
      { q: "Peut-on poser du sol PVC sur du carrelage en cuisine ?", a: "Oui, à condition que le carrelage soit parfaitement plan (tolérance 2mm/2m), tous les carreaux solidaires et les joints en bon état. Une remise à niveau par ragréage est souvent nécessaire. CB Sols évalue l'état du support et préconise la solution adaptée lors du devis." },
      { q: "Combien coûte un sol cuisine professionnelle ?", a: "Un sol PVC professionnel pour cuisine coûte entre 45 et 90 €/m² fourni posé, selon la qualité du produit, la surface et la complexité de la pose (remontées, soudure, mobilier à déplacer). CB Sols établit un devis gratuit et détaillé après visite." },
    ],
    relatedSolutions: ['sol-pvc-restaurant', 'sol-pvc-hotel'],
  },
  {
    slug: 'cout-pose-revetement-sol',
    title: 'Coût et prix de pose des revêtements de sol',
    metaTitle: 'Prix Pose Revêtement de Sol Professionnel 2025 — CB Sols',
    metaDescription: 'Grille de prix 2025 pour la pose de moquette, sol PVC et tapis professionnels. Tarifs CB Sols en Charente-Maritime. Devis gratuit.',
    category: 'Guide Tarifs',
    headline: 'Prix et coûts de pose',
    intro: "Combien coûte la pose d'un revêtement de sol professionnel ? Les tarifs varient selon les matériaux, les surfaces et les contraintes de chantier. Voici les fourchettes de prix pratiquées par CB Sols en Charente-Maritime en 2025.",
    sections: [
      {
        title: "Prix de pose de la moquette",
        body: "La pose de moquette professionnelle représente généralement entre 8 et 15 €/m² pour la main-d'œuvre seule, hors fourniture. Ce tarif inclut la préparation du support (si support sain), la découpe et la mise en œuvre avec les fixations appropriées (colle, gripper, double-face).\n\nLes travaux préparatoires sont facturés en sus : dépose de l'ancien revêtement (3-6 €/m²), évacuation des gravats, ragréage si nécessaire (8-20 €/m² selon l'épaisseur). La pose en escalier est majorée (forfait par marche ou tarif au ml).\n\nFournie posée : comptez 30-50 €/m² pour une moquette bureaux classique, 45-80 €/m² pour une moquette hôtelière haut de gamme, 55-120 €/m² pour un tapis Axminster sur mesure.",
      },
      {
        title: "Prix de pose du sol PVC",
        body: "La pose de sol PVC en lés se situe entre 10 et 18 €/m² pour la main-d'œuvre. La pose en dalles vinyle (LVT flottant) est légèrement moins onéreuse : 8-14 €/m². La soudure à chaud est facturée en supplément : comptez 3-5 €/ml de joint soudé.\n\nPour les cuisines professionnelles avec remontées en cuvette, prévoyez un supplément de 15-25 €/ml pour les remontées et raccordements étanches. Ces travaux sont exigeants techniquement et délicats — ne pas chercher à économiser sur ce poste.\n\nFourni posé : 35-65 €/m² pour un sol PVC hétérogène bureau, 50-90 €/m² pour un sol PVC homogène cuisine professionnelle, 40-75 €/m² pour des lames LVT hôtelières.",
      },
      {
        title: "Ce qui influence le prix",
        body: "La surface est le premier facteur : plus la surface est grande, plus le coût unitaire baisse. Un chantier de 20 m² coûte proportionnellement plus cher qu'un chantier de 200 m².\n\nL'état du support est souvent la variable cachée. Un ragréage sur 300 m² peut représenter 5 000 à 10 000 € supplémentaires. CB Sols préconise systématiquement lors du devis.\n\nLes contraintes de chantier (intervention de nuit, mobilier à déplacer, accès difficile, chantier en activité) entraînent des majorations de 10 à 30 %. CB Sols est habitué aux interventions sans arrêt d'activité dans les hôtels et les EHPAD.",
      },
    ],
    faq: [
      { q: "Comment obtenir un devis pour la pose de moquette ?", a: "Contactez CB Sols par téléphone ou via le formulaire de contact. Nous nous déplaçons gratuitement dans tout le département 17 pour évaluer votre projet et vous remettre un devis détaillé et chiffré sous 48h." },
      { q: "Le devis inclut-il la dépose de l'ancien revêtement ?", a: "Le devis CB Sols est toujours détaillé poste par poste : fourniture, dépose éventuelle, évacuation, préparation de support, pose et finitions. Rien de caché. Vous savez exactement pour quoi vous payez." },
      { q: "Y a-t-il un minimum de surface pour faire appel à CB Sols ?", a: "Non, il n'y a pas de surface minimum. CB Sols intervient pour des réparations ponctuelles comme pour des chantiers de plusieurs milliers de mètres carrés. Nous ajustons notre organisation à votre projet." },
    ],
    relatedSolutions: ['moquette-hotel', 'sol-pvc-restaurant', 'tapis-sur-mesure-hotel'],
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
