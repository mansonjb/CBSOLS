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
    metaTitle: 'Comment Choisir sa Moquette Professionnelle | Guide CB Sols',
    metaDescription: 'Guide complet pour choisir la bonne moquette professionnelle : critères de choix, classements, grammages, marques. Par CB Sols, spécialiste en Charente-Maritime.',
    category: 'Guide Moquette',
    headline: 'Choisir sa moquette professionnelle',
    intro: 'Toutes les moquettes ne se valent pas. Entre une moquette de bureau, une moquette hôtelière et une moquette résidentielle, les exigences sont radicalement différentes. Ce guide vous aide à poser les bonnes questions avant de choisir.',
    sections: [
      {
        title: 'Les critères fondamentaux',
        body: "Le premier critère est le classement d'usage. En Europe, les moquettes sont classées de 21 (usage résidentiel léger) à 33 (usage commercial intense). Pour un bureau, visez un minimum 32. Pour un couloir d'hôtel ou un établissement de santé : 33. Ce classement détermine la durée de vie de votre investissement.\n\nLe grammage vient ensuite. Plus le grammage est élevé (exprimé en g/m²), plus la moquette est dense et résistante. Comptez 500 à 600 g/m² pour un bureau classique, 910 à 2000 g/m² pour l'hôtellerie ou les établissements de santé.\n\nEnfin, la construction : tuftée, tissée, aiguilletée ou en dalle. La moquette en dalles (50×50 cm) est idéale pour les bureaux car elle permet le remplacement partiel. La moquette en lés convient mieux aux chambres d'hôtel et aux couloirs.",
      },
      {
        title: 'Les classements incendie à connaître',
        body: "Pour les établissements recevant du public (ERP), les hôtels, les collectivités et les bureaux accueillant plus de 50 personnes, le classement incendie est obligatoire. Le classement européen Euroclasse distingue les réactions au feu de A1 (incombustible) à F (sans performance déterminée).\n\nPour la majorité des établissements professionnels, le minimum requis est Cfl-s1 ou Bfl-s1 selon le type de bâtiment. CB Sols vous guide dans le choix selon votre ERP et vous fournit les attestations de conformité pour vos dossiers administratifs.\n\nAttention : un hôtel classé sans moquette certifiée Bfl-s1 en couloir risque la non-conformité lors de la visite de la commission de sécurité.",
      },
      {
        title: 'Tuftée, tissée, aiguilletée : les différences',
        body: "La moquette tuftée est la plus répandue. Les fils sont piqués dans un support primaire puis fixés avec un latex. Bonne résistance, large choix esthétique, rapport qualité/prix optimal pour l'hôtellerie et les bureaux.\n\nLa moquette tissée (Wilton ou Axminster) est plus noble et plus coûteuse. Le motif est intégré dans la structure même du tissu, ce qui lui confère une durabilité exceptionnelle. Idéale pour les lobbys d'hôtels haut de gamme ou les espaces de réception.\n\nLa moquette aiguilletée (ou velours aiguilleté) est plus rigide, souvent sans envers. Elle résiste mieux aux fauteuils roulants et aux chariots, ce qui la rend adaptée aux collectivités et aux couloirs et aux locaux techniques.",
      },
      {
        title: 'Les marques de référence',
        body: "CB Sols distribue cinq marques sélectionnées avec soin pour le marché contrat. EGE est la marque danoise de référence pour l'hôtellerie et les bureaux : gamme Hospitality, design scandinave, certifications environnementales. EGE excelle aussi dans les dalles de moquette avec sous-couche acoustique intégrée, dont la durée de vie atteint 30 à 60 ans en usage bureau.\n\nPour les collectivités et les sols PVC, Gerflor est incontournable grâce à ses certifications sanitaires et sa résistance au trafic intensif. objectflor complète la gamme PVC avec un excellent rapport qualité/prix. Bostik fournit les colles et préparations de support, Romus les profilés et finitions.\n\nCB Sols dispose d'un showroom à Villedoux avec plus de 500 échantillons. Une visite vaut mieux que toutes les descriptions en ligne.",
      },
    ],
    faq: [
      { q: 'Quelle moquette pour un bureau open space ?', a: 'Pour un open space, optez pour une dalle de moquette classement 33, grammage 500-600 g/m², avec sous-couche acoustique intégrée pour le confort acoustique. Les dalles ont une durée de vie de 30 à 60 ans en usage bureau et facilitent le remplacement en cas de détérioration localisée. EGE est une excellente référence.' },
      { q: 'Combien de temps dure une moquette professionnelle ?', a: 'Une moquette professionnelle bien choisie et bien entretenue dure 10 à 15 ans en bureaux, 8 à 12 ans en hôtellerie haute fréquentation. L\'entretien régulier par aspiration et le nettoyage annuel à l\'injection-extraction prolongent significativement sa durée de vie.' },
      { q: 'Peut-on poser la moquette sur du carrelage existant ?', a: 'Oui, sous conditions. Le carrelage doit être propre, plan (tolérances de 2mm sous la règle de 2m), et solidement ancré. Des résidus de colle ou des carreaux décollés nécessitent une remise à niveau préalable. CB Sols évalue systématiquement l\'état du support lors du devis.' },
      { q: 'La moquette convient-elle aux personnes allergiques ?', a: 'Les moquettes modernes avec certifications IAQ (Indoor Air Quality) sont adaptées aux personnes allergiques. Les certifications Oeko-Tex, Cradle to Cradle et le label Asthma & Allergy Foundation garantissent des émissions très faibles en COV. CB Sols sélectionne des produits certifiés pour les collectivités. À noter : la moquette est aujourd\'hui le seul revêtement de sol qui empêche la dispersion des poussières et donc des allergènes dans l\'air.' },
    ],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'sol-pvc-ou-moquette',
    title: 'Sol PVC ou moquette : comment choisir',
    metaTitle: 'Sol PVC ou Moquette pour Professionnel | Comparatif CB Sols',
    metaDescription: 'Sol PVC vs moquette : comparatif complet pour les professionnels. Coût, durabilité, entretien, acoustique, confort. Quel revêtement choisir selon votre activité ?',
    category: 'Comparatif',
    headline: 'Sol PVC ou moquette',
    intro: "La question revient souvent : pour un bureau, un hôtel ou un restaurant, vaut-il mieux du sol PVC ou de la moquette ? La réponse dépend de vos priorités : confort acoustique, facilité d'entretien, esthétique, contraintes sanitaires. Voici le comparatif complet.",
    sections: [
      {
        title: "Confort acoustique : avantage moquette",
        body: "La moquette est imbattable pour l'absorption acoustique. Elle réduit les bruits d'impact (chutes d'objets, pas) de 25 à 35 dB selon les produits, et contribue à l'absorption des bruits aériens dans la pièce. Dans un hôtel, la moquette en couloir et en chambre réduit considérablement les nuisances entre chambres.\n\nLe sol PVC (même avec sous-couche) ne peut pas atteindre ces performances. Il existe des systèmes avec sous-couche acoustique spécifique qui améliorent l'indice d'impact, mais restent en dessous de la moquette.\n\nVerdict : si le confort acoustique est une priorité (hôtels, bureaux open space, collectivités), la moquette est supérieure.",
      },
      {
        title: "Entretien et hygiène : avantage sol PVC",
        body: "Le sol PVC s'entretient avec une simple serpillère et des produits classiques. En cuisine professionnelle, en couloir d'hôpital ou dans un espace à fort risque de salissures liquides, le PVC est indispensable. Imperméable, il ne retient pas l'humidité et ne favorise pas le développement bactérien.\n\nLa moquette nécessite un aspirateur quotidien et un nettoyage professionnel annuel à l'injection-extraction. Dans les espaces à risque alimentaire ou sanitaire élevé, elle est proscrite.\n\nVerdict : pour les cuisines, les vestiaires, les locaux techniques, les espaces à trafic liquide, sol PVC obligatoire.",
      },
      {
        title: "Coût total de possession : c'est plus nuancé",
        body: "À l'achat, la moquette est souvent moins chère que le sol PVC haut de gamme. Mais sur 10 ans, l'entretien professionnel de la moquette (injection-extraction annuelle) représente un coût récurrent non négligeable.\n\nLe sol PVC dure généralement plus longtemps (15-20 ans vs 10-15 ans pour la moquette en usage intensif). En dalles PVC, le remplacement partiel est facilement envisageable.\n\nVerdict : le coût total sur 15 ans est comparable. La moquette est moins chère à installer mais coûte plus à entretenir. Le PVC s'amortit mieux sur le long terme.",
      },
      {
        title: "Esthétique et ambiance",
        body: "La moquette crée une atmosphère chaleureuse, confortable et feutrée. Elle reste le choix de référence pour les chambres d'hôtel, les salons d'accueil et les bureaux où l'on veut projeter une image premium. Les gammes modernes EGE offrent une très grande variété de motifs et coloris.\n\nLe sol PVC a fait d'énormes progrès esthétiques. Les lames vinyle à décor bois ou pierre sont aujourd'hui très réalistes. Pour un restaurant, un espace de vente ou un espace mixte bureau/showroom, le sol PVC apporte une touche contemporaine et facile à personnaliser.\n\nVerdict : la moquette pour le feutré et le haut de gamme traditionnel, le PVC pour le contemporain et le polyvalent.",
      },
    ],
    faq: [
      { q: "Peut-on mettre du sol PVC dans une chambre d'hôtel ?", a: "Oui, notamment le LVT (Luxury Vinyl Tile) ou les lames vinyle haute qualité. Certains hôtels design préfèrent cette option pour une esthétique contemporaine. L'inconvénient : moins de confort acoustique et de chaleur qu'une moquette. Pour les hôtels haut de gamme, la moquette reste le standard." },
      { q: "Sol PVC ou moquette pour une collectivité ?", a: "Les deux sont utilisés selon les zones. Les espaces calmes bénéficient de la moquette pour le confort acoustique. Les couloirs et les espaces de vie collectifs reçoivent du sol PVC pour faciliter le nettoyage. Les zones humides imposent systématiquement le sol PVC. CB Sols combine régulièrement les deux matériaux dans une même collectivité." },
      { q: "Quelle est la durée de vie d'un sol PVC professionnel ?", a: "Un sol PVC professionnel (classement 34 ou 43) correctement posé et entretenu dure 15 à 20 ans. Les lames vinyle LVT haut de gamme peuvent dépasser 25 ans. La durée de vie dépend surtout du classement choisi et de la fréquence d'entretien." },
    ],
    relatedSolutions: ['sol-pvc-restaurant', 'sol-pvc-hotel'],
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
        body: "Plusieurs certifications coexistent. La certification Cradle to Cradle (C2C) garantit que la moquette peut être recyclée en fin de vie, un critère de plus en plus demandé dans les appels d'offres publics. La certification Oeko-Tex Standard 100 garantit l'absence de substances nocives pour la santé, importante pour les collectivités et les espaces fréquentés par des personnes vulnérables.\n\nLe label GUT (Gemeinschaft umweltfreundlicher Teppichboden) est une certification allemande reconnue pour les faibles émissions de COV. La norme ISO 9001 s'applique au processus de fabrication.\n\nCB Sols vous fournit systématiquement les fiches techniques et certificats de conformité avec chaque commande.",
      },
      {
        title: "Prix et budgets",
        body: "La moquette contrat coûte entre 25 et 150 €/m² fournie selon la gamme et la construction. La fourchette haute correspond aux moquettes tissées Wilton ou Axminster sur mesure pour des lobbys hôteliers ou des restaurants gastronomiques.\n\nPour un bureau standard, comptez 30-65 €/m² fournie posée. Pour une chambre d'hôtel 3 étoiles : 40-65 €/m² fournie posée. Pour une moquette tuftée hôtelière haut de gamme EGE : 50-90 €/m² fournie posée.\n\nCes prix incluent la dépose de l'ancien revêtement, l'emport des gravats et la fourniture des matériaux de scellement. La pose seule représente généralement 8-25 €/m² selon la complexité du projet.",
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
        body: "L'aspiration est la base de l'entretien quotidien. Elle doit être effectuée avec un aspirateur professionnel à forte aspiration, de préférence avec brosse rotative pour les moquettes à poils. Fréquence recommandée : quotidienne dans les couloirs d'hôtel et espaces à fort trafic, hebdomadaire dans les bureaux.\n\nLe nettoyage à l'injection-extraction est la méthode professionnelle de référence. Une machine injecte de l'eau et un détergent dans les fibres puis aspire immédiatement le tout. Cette méthode élimine les salissures profondes, les allergènes et les bactéries. Elle doit être réalisée par un professionnel équipé.\n\nLe spray extraction (shampooing moquette) est une méthode plus rapide mais moins efficace en profondeur. Elle convient pour les entretiens intermédiaires.\n\nChez CB Sols, le lavage et le rinçage se font à l'eau déminéralisée. Le rinçage permet d'enlever tous les résidus de shampoing et laisse les fibres de la moquette beaucoup plus souples, ce qui facilite l'aspiration des saletés dans les mois qui suivent le shampouinage.",
      },
      {
        title: "Fréquences recommandées par secteur",
        body: "Hôtellerie (chambres) : aspiration quotidienne par le personnel de ménage + injection-extraction 1 à 2 fois par an selon l'occupation. Couloirs : injection-extraction 2 à 3 fois par an.\n\nBureaux : aspiration hebdomadaire + injection-extraction annuelle. Pour un open space à fort trafic, injection-extraction 2 fois par an.\n\nRestaurants et hôtels avec espaces F&B : injection-extraction mensuelle recommandée compte tenu des projections alimentaires.",
      },
      {
        title: "Les erreurs à éviter",
        body: "L'excès d'humidité est l'ennemi numéro 1 de la moquette. Un nettoyage trop humide sans séchage suffisant favorise le développement de moisissures et de mauvaises odeurs. La moquette doit être sèche dans les 6 heures suivant le nettoyage.\n\nL'utilisation de produits non adaptés peut dégrader les fibres et le dos de la moquette. Evitez les nettoyants à base d'acides forts ou d'hypochlorite de sodium. Utilisez exclusivement des produits recommandés par le fabricant.\n\nNe pas traiter les taches immédiatement est une erreur courante. Une tache de café ou de vin se traite en moins de 5 minutes avec une serviette propre par absorption (jamais en frottant) puis un produit détachant adapté. Après 30 minutes, la tache peut devenir permanente sur certaines fibres.",
      },
    ],
    faq: [
      { q: "Combien coûte un nettoyage par injection-extraction ?", a: "Le nettoyage professionnel par injection-extraction coûte en général entre 12 et 15 €/m² selon la superficie, l'état de la moquette et les conditions d'accès. CB Sols propose des contrats d'entretien annuels pour les hôtels et établissements professionnels." },
      { q: "Peut-on faire l'injection-extraction soi-même ?", a: "Il existe des machines en location, mais les résultats sont rarement à la hauteur d'un professionnel équipé d'une machine traîneau haute pression. La qualité d'aspiration des machines de location est très inférieure au matériel professionnel. Pour les surfaces importantes ou les moquettes hôtelières, faites appel à un professionnel." },
    ],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'sol-pvc-cuisines-professionnelles',
    title: 'Sol PVC pour cuisines professionnelles',
    metaTitle: 'Sol PVC Cuisine Professionnelle | Choix, Normes et Pose CB Sols',
    metaDescription: 'Quel sol PVC pour une cuisine professionnelle ? Normes HACCP, antidérapance, résistance chimique, drainage. Guide et pose par CB Sols en Charente-Maritime.',
    category: 'Guide Sol PVC',
    headline: 'Sol PVC pour cuisines professionnelles',
    intro: "La cuisine professionnelle impose des exigences parmi les plus strictes de toute installation de revêtement de sol : normes HACCP, antidérapance obligatoire, résistance aux chocs thermiques, aux graisses et aux produits de nettoyage agressifs. Voici comment choisir.",
    sections: [
      {
        title: "Les normes et obligations",
        body: "Les cuisines professionnelles (restaurants, hôtels, collectivités) sont soumises aux réglementations HACCP qui imposent des revêtements imperméables, lisses ou faiblement rugueux, résistants aux produits de nettoyage et de désinfection, et sans joints inaccessibles à l'entretien.\n\nL'antidérapance est imposée par le code du travail pour les locaux à risque glissant. La classification R des sols donne le niveau d'antidérapance : R10 pour les cuisines sèches, R11 ou R12 pour les zones humides et grasses. CB Sols sélectionne des produits homologués R11 minimum pour toutes les cuisines professionnelles.\n\nLa résistance chimique est essentielle : produits de nettoyage alcalins concentrés, désinfectants chlorés, graisses alimentaires : le sol doit résister à des cycles quotidiens.",
      },
      {
        title: "Les types de sols PVC adaptés",
        body: "Le sol PVC homogène est le plus adapté aux cuisines professionnelles. Contrairement au sol PVC hétérogène (couches superposées), il est constitué d'une seule couche de matière qui monte jusqu'à la surface. Pas de couche supérieure à user, pas de délamination possible. Sa durée de vie est exceptionnelle : 20 à 30 ans en usage intensif.\n\nLes produits Gerflor Mipolam (Granit, Unicolore) et Taralay sont les références du marché pour les cuisines professionnelles. Ils offrent la classification R10/R11, la résistance chimique et les certifications sanitaires requises.\n\nLes remontées en plinthe sont obligatoires pour éviter les infiltrations sous le sol. CB Sols réalise des remontées en plinthes (sol PVC soudé qui remonte de 10 à 20 cm sur les murs) pour une étanchéité parfaite.",
      },
      {
        title: "La soudure à chaud : pourquoi c'est obligatoire",
        body: "Dans une cuisine professionnelle, les lés de sol PVC doivent être soudés à chaud, jamais encollés jointivement. La soudure à chaud crée une jonction étanche entre les lés en faisant fondre un cordon de soudure PVC de même composition dans la gorge de joint.\n\nSans soudure, les joints permettent aux liquides, graisses et micro-organismes de s'infiltrer sous le revêtement : non-conformité HACCP garantie et source de dégradation rapide du sol et du support.\n\nCB Sols dispose du matériel de soudure à chaud professionnel et forme ses poseurs à cette technique. Tous nos projets cuisine professionnelle incluent la soudure et les remontées étanches.",
      },
    ],
    faq: [
      { q: "Quel sol pour une cuisine de restaurant ?", a: "Sol PVC homogène R11 minimum, soudé à chaud avec remontées en plinthes. Classement résistance chimique P2 minimum. Références : Gerflor Mipolam Granit, Gerflor Taralay Premium Contract. CB Sols réalise le devis sur mesure après visite du site." },
      { q: "Peut-on poser du sol PVC sur du carrelage en cuisine ?", a: "Oui, à condition que le carrelage soit parfaitement plan (tolérance 2mm/2m), tous les carreaux solidaires et les joints en bon état. Une remise à niveau par ragréage est souvent nécessaire. CB Sols évalue l'état du support et préconise la solution adaptée lors du devis." },
      { q: "Combien coûte un sol cuisine professionnelle ?", a: "Un sol PVC professionnel pour cuisine coûte entre 45 et 90 €/m² fourni posé, selon la qualité du produit, la surface et la complexité de la pose (remontées, soudure, mobilier à déplacer). CB Sols établit un devis gratuit et détaillé après visite." },
    ],
    relatedSolutions: ['sol-pvc-restaurant', 'sol-pvc-hotel'],
  },
  {
    slug: 'cout-pose-revetement-sol',
    title: 'Coût et prix de pose des revêtements de sol',
    metaTitle: 'Prix Pose Revêtement de Sol Professionnel 2025 | CB Sols',
    metaDescription: 'Grille de prix 2025 pour la pose de moquette, sol PVC et tapis professionnels. Tarifs CB Sols en Charente-Maritime. Devis gratuit.',
    category: 'Guide Tarifs',
    headline: 'Prix et coûts de pose',
    intro: "Combien coûte la pose d'un revêtement de sol professionnel ? Les tarifs varient selon les matériaux, les surfaces et les contraintes de projet. Voici les fourchettes de prix pratiquées par CB Sols en Charente-Maritime en 2025.",
    sections: [
      {
        title: "Prix de pose de la moquette",
        body: "La pose de moquette professionnelle représente généralement entre 8 et 25 €/m² pour la main-d'œuvre seule, hors fourniture. Ce tarif inclut la préparation du support (si support sain), la découpe et la mise en œuvre avec les fixations appropriées (colle, gripper).\n\nLes travaux préparatoires sont facturés en sus : dépose de l'ancien revêtement (6-12 €/m²), évacuation des gravats, ragréage si nécessaire (P3 standard 6-10 €/m², fibré 12-30 €/m² selon support et épaisseur). La pose en escalier est majorée (forfait par marche ou tarif au ml).\n\nFournie posée : comptez 30-65 €/m² pour une moquette bureaux classique, 45-80 €/m² pour une moquette hôtelière haut de gamme, 55-120 €/m² pour un tapis Axminster sur mesure.",
      },
      {
        title: "Prix de pose du sol PVC",
        body: "La pose de sol PVC en lés se situe entre 9 et 23 €/m² pour la main-d'œuvre. La pose en dalles vinyle (LVT) est légèrement moins onéreuse : 9-22 €/m².\n\nPour les cuisines professionnelles avec remontées en plinthes, prévoyez un supplément de 15-25 €/ml pour les remontées et raccordements étanches. Ces travaux sont exigeants techniquement et délicats : pas question d'économiser sur ce poste.\n\nFourni posé : 35-65 €/m² pour un sol PVC hétérogène bureau, 50-90 €/m² pour un sol PVC homogène cuisine professionnelle, 40-75 €/m² pour des lames LVT hôtelières.",
      },
      {
        title: "Ce qui influence le prix",
        body: "La surface est le premier facteur : plus la surface est grande, plus le coût unitaire baisse. Un projet de 20 m² coûte proportionnellement plus cher qu'un projet de 200 m².\n\nL'état du support est souvent la variable cachée. Un ragréage sur 300 m² peut représenter 5 000 à 10 000 € supplémentaires. CB Sols préconise systématiquement lors du devis.\n\nLes contraintes de projet (intervention en horaires décalés, mobilier à déplacer, accès difficile, projet en activité) entraînent des majorations de 10 à 30 %. CB Sols est habitué aux interventions sans arrêt d'activité dans les hôtels et les collectivités.",
      },
    ],
    faq: [
      { q: "Comment obtenir un devis pour la pose de moquette ?", a: "Contactez CB Sols par téléphone ou via le formulaire de contact. Nous nous déplaçons gratuitement dans tout le département 17 pour évaluer votre projet et vous remettre un devis détaillé et chiffré sous 48h." },
      { q: "Le devis inclut-il la dépose de l'ancien revêtement ?", a: "Le devis CB Sols est toujours détaillé poste par poste : fourniture, dépose éventuelle, évacuation, préparation de support, pose et finitions. Rien de caché. Vous savez exactement pour quoi vous payez." },
      { q: "Y a-t-il un minimum de surface pour faire appel à CB Sols ?", a: "Non, il n'y a pas de surface minimum. CB Sols intervient pour des réparations ponctuelles comme pour des projets de plusieurs milliers de mètres carrés. Nous ajustons notre organisation à votre projet." },
    ],
    relatedSolutions: ['moquette-hotel', 'sol-pvc-restaurant', 'tapis-sur-mesure-hotel'],
  },
  {
    slug: 'entretien-moquette-hotel',
    title: 'Entretien de la moquette hôtelière : le guide complet',
    metaTitle: 'Entretien Moquette Hôtelière 2025 | Guide Expert CB Sols',
    metaDescription: "Comment entretenir la moquette d'un hôtel ? Fréquences, injection-extraction, produits, coûts. Guide complet par CB Sols, spécialiste hôtellerie Charente-Maritime.",
    category: 'Guide Hôtellerie',
    headline: "Entretien de la moquette d'hôtel",
    intro: "La moquette représente souvent le poste le plus important d'investissement dans la rénovation d'un hôtel. Un entretien rigoureux permet de multiplier sa durée de vie par deux, et d'éviter une rénovation prématurée qui perturbe l'activité. CB Sols accompagne ses clients hôteliers avec un programme d'entretien structuré.",
    sections: [
      {
        title: "L'aspiration quotidienne : la base non négociable",
        body: "Dans un hôtel, la moquette des chambres doit être aspirée à chaque changement de client et au minimum quotidiennement dans les parties communes à fort trafic. L'aspirateur utilisé a une importance capitale : un aspirateur de ménage classique ne suffit pas. Il faut un modèle professionnel avec filtration HEPA et brosse rotative adaptée au type de moquette (boucle ou velours).\n\nLes couloirs méritent une attention particulière. Ils reçoivent 3 à 5 fois plus de trafic que les chambres. Une aspiration biquotidienne en haute saison est recommandée pour les couloirs d'hôtels 3 étoiles et plus. L'accumulation de salissures sèches est l'ennemi principal de la moquette : elle crée une abrasion mécanique des fibres qui les détruit progressivement.\n\nCB Sols conseille systématiquement à ses clients hôteliers de vérifier l'équipement d'entretien de leurs équipes de ménage. Un bon aspirateur professionnel coûte 300 à 800 € mais préserve un investissement de 50 000 à 200 000 €.",
      },
      {
        title: "L'injection-extraction : fréquence et protocole",
        body: "Le nettoyage par injection-extraction est la méthode de référence pour le nettoyage en profondeur de la moquette hôtelière. Une machine professionnelle injecte de l'eau déminéralisée mélangée à un détergent adapté, puis aspire immédiatement le tout, emmenant avec elle les salissures incrustées, les résidus de savon des bagages et les allergènes accumulés.\n\nFréquences recommandées par zone :\n- Chambres : 2 fois par an minimum, idéalement en basse saison (octobre-novembre et mars-avril)\n- Couloirs : 3 à 4 fois par an, avec un passage impératif avant et après la haute saison\n- Lobby et réception : mensuel en haute saison, bimestriel en basse saison\n\nPour les hôtels à fort taux d'occupation (80%+), augmenter ces fréquences d'un cycle par an. CB Sols propose des contrats d'entretien annuels pour les hôtels de Charente-Maritime.",
      },
      {
        title: "Le traitement des taches : intervention immédiate",
        body: "En hôtellerie, les taches doivent être traitées dans les 5 à 10 minutes suivant leur apparition. Passé ce délai, certaines taches (vin rouge, café, huile de solaire, rouge à lèvres) peuvent devenir permanentes sur les fibres synthétiques.\n\nProtocole d'intervention rapide : (1) absorber le surplus avec un chiffon propre par tamponnement (jamais en frottant), (2) appliquer un détachant adapté à la tache en partant de l'extérieur vers le centre, (3) absorber à nouveau, (4) rincer légèrement à l'eau froide, (5) sécher rapidement avec un ventilateur si possible.\n\nCB Sols fournit, avec chaque projet de pose, un kit de détachants professionnels adaptés à la moquette installée, avec les fiches d'utilisation pour les équipes de ménage. Ce kit est la première ligne de défense contre les dégradations prématurées.",
      },
      {
        title: "Quand remplacer la moquette d'hôtel ?",
        body: "Même la meilleure moquette hôtelière a une durée de vie limitée. Les signes qui indiquent qu'un remplacement s'impose : les fibres sont aplaties et ne se relèvent plus après aspiration (phénomène de matting), les taches persistent malgré l'injection-extraction, les couleurs s'estompent de façon visible, la moquette présente des zones de décollement aux bords ou aux joints.\n\nEn moyenne, une moquette hôtelière bien entretenue dure 8 à 12 ans en chambre, 5 à 8 ans en couloir à fort trafic. Le remplacement de la moquette d'un hôtel se planifie en basse saison pour minimiser l'impact sur le CA. CB Sols travaille chambre par chambre pour maintenir le taux d'occupation.\n\nCB Sols propose des audits gratuits pour évaluer l'état de votre moquette et vous conseiller sur la stratégie de remplacement la plus rentable.",
      },
    ],
    faq: [
      { q: "Combien coûte l'entretien annuel de la moquette d'un hôtel ?", a: "Pour un hôtel de 30 chambres (surface totale moquette : 700 à 1 200 m²), le coût d'un contrat d'entretien annuel avec CB Sols est de 2 500 à 5 000 € HT selon la fréquence et l'éloignement. Ce coût représente 5 à 10% du coût de remplacement, un investissement rationnel pour prolonger la durée de vie de la moquette." },
      { q: "Peut-on nettoyer la moquette d'une chambre d'hôtel sans la mettre hors service ?", a: "Oui. Le temps de séchage après injection-extraction est de 2 à 4 heures selon la ventilation et la saison. CB Sols réalise les nettoyages sur les chambres libres, en rotation avec les chambres occupées. Aucune fermeture n'est nécessaire pour un hôtel de taille normale." },
      { q: "Existe-t-il des traitements préventifs pour la moquette d'hôtel ?", a: "Oui. Le traitement anti-tache Teflon ou Scotchgard appliqué après la pose ou après un nettoyage en profondeur crée une barrière invisible qui repousse les liquides et facilite l'absorption des taches. CB Sols propose ce traitement en option lors de chaque pose et chaque nettoyage annuel." },
    ],
    relatedSolutions: ['moquette-hotel', 'tapis-sur-mesure-hotel'],
  },
  {
    slug: 'prix-pose-sol-pvc',
    title: 'Prix de pose du sol PVC professionnel en 2025',
    metaTitle: 'Prix Pose Sol PVC Professionnel 2025 | Tarifs CB Sols',
    metaDescription: 'Quel est le prix de pose du sol PVC professionnel en 2025 ? Tarifs détaillés LVT, lés, cuisine pro, hôtel. Guide honnête par CB Sols, Charente-Maritime.',
    category: 'Guide Tarifs',
    headline: 'Prix de pose du sol PVC en 2025',
    intro: "Le prix de pose du sol PVC varie considérablement selon le type de produit, la surface et la complexité du projet. Ce guide détaille les fourchettes réelles pratiquées par CB Sols en 2025, sans langue de bois.",
    sections: [
      {
        title: "Sol PVC en lames et dalles (LVT) : 35 à 75 €/m²",
        body: "Les lames et dalles vinyle (LVT, Luxury Vinyl Tile) sont le segment le plus dynamique du marché. Leur pose est relativement rapide : en pose flottante, une équipe de 2 poseurs couvre 80 à 120 m² par jour.\n\nFourchettes 2025 (fourni posé) :\n- LVT flottant bureaux et commerces : 35 à 60 €/m²\n- LVT collé hôtellerie haut de gamme : 45 à 75 €/m²\n- Dalles vinyle design (motif bois ou pierre) : 40 à 70 €/m²\n\nLes facteurs qui font varier le prix : la qualité du produit choisi (épaisseur, classe d'usage, décor), la surface totale (tarif dégressif dès 200 m²), et l'état du support (ragréage éventuel). CB Sols établit toujours un devis détaillé poste par poste avant toute signature.",
      },
      {
        title: "Sol PVC en lés (rouleaux) : 30 à 90 €/m²",
        body: "Le sol PVC en lés (vendu en rouleaux de 2 m ou 4 m de large) couvre un large éventail d'usages et de prix. C'est la solution de référence pour les cuisines professionnelles, les couloirs d'hôpitaux, les espaces à trafic intense.\n\nFourchettes 2025 (fourni posé) :\n- PVC hétérogène lés collectivités (couloirs, écoles) : 30 à 55 €/m²\n- PVC lés hétérogène hôtellerie : 40 à 70 €/m²\n- PVC homogène cuisine professionnelle R11 : 55 à 90 €/m²\n\nSur les surfaces supérieures à 300 m², CB Sols applique des remises de volume qui peuvent atteindre 10 à 15% du tarif de base. Pour les hôtels qui commandent moquette + PVC en même temps, un tarif global est négocié.",
      },
      {
        title: "Les travaux annexes qui s'ajoutent au prix de base",
        body: "Le prix affiché par m² ne comprend pas toujours l'ensemble des travaux nécessaires. Il faut anticiper :\n\nDépose de l'ancien revêtement : 6 à 12 €/m² selon le type et l'état. Une moquette collée ancienne sur carrelage prend plus de temps qu'une moquette gripper récente.\n\nRagréage et nivellement : 6 à 10 €/m² pour un P3 standard, 12 à 30 €/m² pour un fibré (sur bois ou fortes épaisseurs). C'est souvent le poste le plus imprévisible : l'état du support ne se découvre vraiment qu'après dépose.\n\nRemontées en plinthes (cuisines, douches) : 15 à 30 €/ml selon la hauteur de remontée et la complexité. La soudure à chaud des joints en cuisine professionnelle est incluse dans le tarif de pose, pas facturée séparément.\n\nMajoration en site occupé (rotation, horaires décalés) : +15 à 30% sur le total main-d'œuvre selon la complexité du phasage. CB Sols est transparent sur ces majorations dans chaque devis.",
      },
      {
        title: "Comment obtenir le meilleur prix",
        body: "Plusieurs leviers permettent d'optimiser le coût total d'un projet de sol PVC :\n\nLa surface est votre principal levier. CB Sols applique des tarifs dégressifs significatifs à partir de 200 m², et davantage à partir de 500 m². Regrouper plusieurs zones ou plusieurs hébergements dans un même bon de commande est toujours rentable.\n\nLe timing est également important. Les projets planifiés 2 à 3 mois à l'avance permettent à CB Sols d'optimiser ses achats de matériaux. À l'inverse, les urgences ou les interventions hors horaires sont légitimement majorées.\n\nEnfin, le choix du produit. CB Sols ne cherche pas à vous vendre le produit le plus cher mais le mieux adapté à votre usage. Un LVT classe 33 suffit pour des bureaux à fréquentation normale : inutile de payer pour du classe 34. Le devis gratuit inclut systématiquement des alternatives de gamme.",
      },
    ],
    faq: [
      { q: "Le devis CB Sols est-il vraiment gratuit ?", a: "Oui, sans condition et sans engagement. CB Sols se déplace gratuitement dans toute la Charente-Maritime pour mesurer, évaluer le support et vous remettre un devis chiffré sous 48h. Même pour des surfaces de quelques dizaines de mètres carrés." },
      { q: "Peut-on avoir une estimation sans visite ?", a: "Oui. En nous envoyant vos plans (ou une estimation de surface) et des photos du support existant, CB Sols peut établir une estimation budgétaire par email. Cette estimation est sans engagement. La visite sur site reste nécessaire pour le devis définitif." },
      { q: "Les prix incluent-ils la TVA ?", a: "Les fourchettes de prix CB Sols sont exprimées HT. La TVA applicable est 20% pour les professionnels et 10% pour les travaux de rénovation dans des logements de plus de 2 ans (conformément à l'article 279-0 bis du CGI). Vos devis précisent toujours le détail HT/TTC." },
    ],
    relatedSolutions: ['sol-pvc-restaurant', 'sol-pvc-hotel'],
  },
  {
    slug: 'moquette-vs-parquet-bureau',
    title: 'Moquette ou parquet pour un bureau : comparatif complet',
    metaTitle: 'Moquette ou Parquet Bureau | Comparatif 2025 CB Sols',
    metaDescription: 'Moquette ou parquet pour vos bureaux ? Acoustique, entretien, durabilité, coût : comparatif complet et honnête pour faire le bon choix. Par CB Sols.',
    category: 'Comparatif',
    headline: 'Moquette ou parquet pour un bureau',
    intro: "C'est la question la plus fréquente lors des rénovations de bureaux : faut-il choisir la moquette ou le parquet (ou son imitation vinyle) ? Les deux options ont des qualités et des défauts spécifiques. Ce comparatif vous aide à choisir selon vos priorités.",
    sections: [
      {
        title: "Acoustique : avantage moquette, nettement",
        body: "C'est le critère le plus différenciant. La moquette est imbattable pour l'absorption acoustique dans les bureaux. Elle réduit les bruits d'impact (bruits de pas, chutes d'objets) de 20 à 35 dB selon les produits et les sous-couches utilisées. Dans un open space, cette réduction est directement perceptible : on travaille mieux quand on n'entend pas ses voisins marcher.\n\nLe parquet (même avec une sous-couche acoustique) est réverbérant. Les bruits de pas sont clairement audibles. Le sol PVC à décor bois offre de meilleures performances que le parquet massif ou stratifié, surtout avec une sous-couche acoustique spécifique, mais reste très en dessous de la moquette.\n\nSi vos collaborateurs travaillent concentrés (rédaction, analyse, programmation), la moquette est supérieure. Si l'espace est un showroom ou un espace de vente, le parquet ou le PVC peut être préféré pour son image visuelle.",
      },
      {
        title: "Entretien : avantage parquet (ou sol PVC)",
        body: "Le parquet et le sol PVC s'entretiennent avec une serpillère et des produits courants. Pas de nettoyage spécialisé nécessaire, pas de machine. Pour des bureaux à fort trafic ou des espaces où les salissures liquides sont fréquentes (espaces de restauration, cuisines communes), c'est un avantage réel.\n\nLa moquette demande une aspiration régulière (idéalement hebdomadaire) et un nettoyage à l'injection-extraction annuel par un professionnel. Ce coût récurrent doit être intégré dans le budget d'exploitation.\n\nNéanmoins, une tache de café sur un sol dur laisse une auréole même après nettoyage. Sur une moquette traitée anti-taches, les liquides perles et s'absorbent plus facilement si l'intervention est rapide.",
      },
      {
        title: "Durabilité et coût total : ils se valent sur 10 ans",
        body: "Un parquet massif en bois dur dure indéfiniment s'il est retimbré régulièrement. Mais en bureaux, il se raye rapidement (roulettes de chaises) et supporte mal les variations d'humidité. Le sol PVC à décor bois dure 15 à 25 ans en bureau avec peu d'entretien.\n\nLa moquette durablement bien entretenue tient 10 à 15 ans en bureau classique. Son coût d'installation est généralement inférieur au parquet massif ou au LVT haut de gamme.\n\nSur 10 ans, en intégrant le coût d'installation, les coûts d'entretien (nettoyage annuel) et l'amortissement, moquette et sol PVC sont souvent comparables. Le parquet massif a un coût initial élevé mais une valeur résiduelle supérieure.\n\nCB Sols vous présente, sur demande, une simulation de coût total sur 10 ans pour les options qui correspondent à votre budget et à votre usage.",
      },
      {
        title: "Esthétique et image de marque : une question de positionnement",
        body: "La moquette evoque la confidentialité, le sérieux, le confort. C'est le sol des cabinets d'avocats, des banques privées, des directions générales. Elle crée une ambiance feutrée qui rassure les clients et favorise la concentration.\n\nLe parquet ou le sol PVC à décor bois évoque le dynamisme, la modernité, la transparence. C'est le sol des agences créatives, des espaces coworking, des startups. Il photographie bien pour les photos de bureau sur les réseaux sociaux.\n\nIl n'y a pas de bonne ou mauvaise réponse : tout dépend de l'identité que vous voulez projeter. CB Sols vous apporte des échantillons en situation réelle lors du devis pour vous aider à trancher.",
      },
    ],
    faq: [
      { q: "Peut-on combiner moquette et parquet dans un même bureau ?", a: "Oui, et c'est souvent la meilleure solution. Par exemple : moquette dans les zones de travail concentré (open space, salles de réunion) et sol PVC ou parquet dans les circulations, l'entrée et la cuisine. CB Sols réalise des transitions propres entre les deux types de revêtements." },
      { q: "La moquette convient-elle aux chaises à roulettes ?", a: "Oui, à condition de choisir un produit classé 33 ou 34 (usage commercial intensif) avec une résistance spécifique aux roulettes. Les moquettes en dalles ou boucles velours sont particulièrement adaptées. Des protège-sols transparents peuvent compléter la protection sous les postes fixes." },
      { q: "Quel revêtement choisir pour un espace coworking ?", a: "Pour un espace coworking, CB Sols recommande souvent une combinaison : dalles moquette dans les espaces de travail (acoustique + remplacement partiel facile) et sol PVC dans les zones de passage, cuisine et reception (entretien simplifié). Cette approche combine les avantages des deux univers." },
    ],
    relatedSolutions: ['moquette-bureau', 'sol-pvc-hotel'],
  },
  {
    slug: 'choisir-revetement-sol-cuisine-pro',
    title: 'Choisir le bon revêtement de sol pour une cuisine professionnelle',
    metaTitle: 'Revêtement Sol Cuisine Professionnelle | Guide Choix CB Sols',
    metaDescription: 'Quel revêtement de sol pour une cuisine professionnelle ? Normes HACCP, antidérapance, résistance chimique, drainage. Guide expert par CB Sols.',
    category: 'Guide Technique',
    headline: 'Le sol idéal pour une cuisine professionnelle',
    intro: "Le choix du revêtement de sol d'une cuisine professionnelle n'est pas une décision esthétique : c'est une décision technique et réglementaire. Un mauvais choix génère des risques sanitaires, des accidents du travail et des non-conformités lors des inspections. CB Sols vous guide dans ce choix stratégique.",
    sections: [
      {
        title: "Les contraintes réglementaires : HACCP et code du travail",
        body: "La réglementation HACCP (Hazard Analysis Critical Control Point) impose pour les cuisines professionnelles des revêtements imperméables, lisses ou faiblement texturés, résistants aux agents nettoyants et désinfectants, sans joints inaccessibles. En pratique, cela signifie : zéro carrelage avec joints larges, zéro sol poreux.\n\nLe code du travail impose des performances antidérapantes minimales. La classification allemande R (DIN 51130) est la référence : R9 pour les zones à faible risque, R10 pour les cuisines standard, R11 pour les zones humides chaudes (fritures, plonge), R12 pour les zones avec huiles en grande quantité.\n\nEnfin, les normes incendie ERP (si votre restaurant est un établissement recevant du public) peuvent imposer des classements spécifiques. CB Sols vous fournit les attestations de conformité pour vos dossiers administratifs.",
      },
      {
        title: "Les solutions techniques recommandées",
        body: "Sol PVC homogène soudé à chaud : c'est la référence absolue pour les cuisines professionnelles. Le sol PVC homogène (Gerflor Mipolam Granit, Taralay Premium) est constitué d'une seule matière sur toute l'épaisseur, sans couche supérieure à s'user. La soudure à chaud des joints élimine toute infiltration. Les remontées en plinthes créent une étanchéité parfaite sol/mur. Durée de vie : 20 à 30 ans.\n\nCarrelage antidérapant R11/R12 avec résine époxy dans les joints : une alternative solide si vous souhaitez une esthétique carrelage. Les joints en résine époxy sont imperméables et résistants aux acides. L'entretien est plus contraignant (nettoyage des reliefs). CB Sols ne pose pas de carrelage mais peut coordonner avec votre carreleur.\n\nRésine de sol (résine époxy ou polyuréthane) : solution sans joint, imperméable à 100%, excellente résistance chimique. Idéale pour les cuisines de grande surface. Durée de vie variable selon la qualité de la mise en œuvre. CB Sols ne réalise pas les résines mais peut vous orienter vers un partenaire spécialisé.",
      },
      {
        title: "L'importance des raccordements et remontées",
        body: "Le sol seul ne suffit pas à garantir l'étanchéité d'une cuisine professionnelle. La jonction sol/mur est la zone la plus critique. Sans protection, les liquides, graisses et micro-organismes s'infiltrent sous le revêtement et dans les murs, créant des foyers bactériens invisibles.\n\nLa solution professionnelle : les remontées en plinthes. Le sol PVC remonte de 10 à 15 cm sur les murs, soudé à chaud dans les angles et au raccordement avec les équipements (plinthe de plan de travail, colonne de douche, siphon). Cette technique crée une enveloppe étanche.\n\nCB Sols maîtrise cette technique et réalise les remontées en plinthes sur tous ses projets de cuisine professionnelle. Les coins intérieurs et extérieurs sont les points les plus délicats, c'est là que l'expérience fait la différence.",
      },
      {
        title: "Drainage et siphons de sol",
        body: "Si votre cuisine dispose de siphons de sol (douches de nettoyage haute pression), le raccordement entre le sol PVC et le siphon est une étape critique. CB Sols réalise des bagues de raccordement étanches autour des siphons pour éviter toute infiltration.\n\nSi votre cuisine n'est pas équipée de siphons de sol mais que vous travaillez au nettoyage haute pression, réfléchissez à en faire installer (lot plomberie) avant la pose du sol. CB Sols peut coordonner les deux interventions pour un résultat optimal.\n\nEnfin, si votre cuisine a une pente vers les siphons, le ragréage préalable doit respecter et accentuer légèrement cette pente. CB Sols vérifie systématiquement la pente lors de l'évaluation du support.",
      },
    ],
    faq: [
      { q: "Le carrelage est-il autorisé dans une cuisine professionnelle ?", a: "Oui, à condition que les joints soient en résine époxy (imperméable) et non en ciment (poreux et bactérien). Les carreaux doivent être antidérapants R11 minimum. CB Sols ne pose pas de carrelage, mais recommande le sol PVC soudé pour sa supériorité sanitaire et sa facilité d'entretien." },
      { q: "Peut-on poser du sol PVC sur du carrelage dans une cuisine ?", a: "Oui, si le carrelage est parfaitement plan (tolérance 2mm sous règle de 2m), en bon état, sans carreau décollé et sans joints hauts. Un ragréage de surfaçage est souvent nécessaire pour effacer les reliefs des joints. CB Sols évalue ce point lors du devis." },
      { q: "Combien de temps dure la pose d'un sol cuisine professionnelle ?", a: "Pour une cuisine de 50 m², comptez 1 journée pour la préparation du support et la pose, plus demi-journée pour la soudure et les finitions. CB Sols intervient en site occupé, hors heures de service, pour les cuisines en activité. La cuisine peut être utilisée dès le lendemain de la finition." },
    ],
    relatedSolutions: ['sol-pvc-restaurant', 'sol-pvc-hotel'],
  },
  {
    slug: 'moquette-acoustique',
    title: 'La moquette acoustique : guide complet',
    metaTitle: 'Moquette Acoustique | Guide Complet 2025 CB Sols',
    metaDescription: "Tout savoir sur la moquette acoustique : performances, certifications, applications, prix. Guide expert par CB Sols, spécialiste en Charente-Maritime.",
    category: 'Guide Technique',
    headline: 'La moquette acoustique',
    intro: "La moquette est de loin le revêtement de sol le plus performant sur le plan acoustique. Réduction des bruits d'impact, absorption des bruits aériens, amélioration du confort des espaces : ce guide détaille les mécanismes et les choix à faire pour une performance optimale.",
    sections: [
      {
        title: "Comment la moquette absorbe le bruit",
        body: "La moquette agit à deux niveaux acoustiques distincts. Premièrement, elle réduit les bruits d'impact : une chute d'objet, des pas, une chaise que l'on traîne. Ces vibrations sont amorties dans les fibres et la sous-couche avant même de se transmettre à la dalle ou au plancher. Les mesures de Δw (delta w) quantifient cette performance : une moquette de bureau moyenne atteint Δw 25 à 30 dB, les moquettes acoustiques spécialisées dépassent les 35 dB.\n\nDeuxièmement, la moquette contribue à l'absorption acoustique de la pièce elle-même. Elle réduit le temps de réverbération (TR60) en absorbant une partie de l'énergie sonore qui rebondirait sur un sol dur. Dans un restaurant ou une salle de réunion, cet effet réduit le niveau de bruit ambiant de 3 à 8 dB, une différence clairement perceptible à l'oreille.\n\nLa combinaison moquette + plafond acoustique + panneaux muraux crée les meilleures conditions de travail et de confort. CB Sols peut vous orienter vers des acousticiens partenaires pour des projets nécessitant une étude acoustique formelle.",
      },
      {
        title: "Les paramètres qui influencent les performances",
        body: "Tous les types de moquette ne sont pas équivalents sur le plan acoustique. Les principaux paramètres sont :\n\nLa construction : la moquette tuftée velours est plus absorbante que la moquette boucle. La moquette aiguilletée, plus dense et plus rigide, est moins efficace en absorption mais mieux résistante au trafic intense.\n\nLe grammage et la hauteur de poil : plus la moquette est épaisse et dense, plus les performances acoustiques sont élevées. Une moquette de 700 g/m² sera plus performante qu'une moquette de 400 g/m².\n\nLa sous-couche : l'élément le plus impactant pour la réduction des bruits d'impact. Une sous-couche mousse ou feutre de 3 à 8 mm améliore considérablement le Δw. Certaines moquettes intègrent leur sous-couche (dos polyuréthane), d'autres nécessitent une sous-couche indépendante.\n\nCB Sols sélectionne le couple moquette + sous-couche en fonction de l'objectif acoustique de chaque projet.",
      },
      {
        title: "Applications prioritaires : où la moquette acoustique s'impose",
        body: "Hôtellerie : les couloirs et les chambres sont les zones où la moquette acoustique apporte la valeur la plus immédiate. Le silence nocturne conditionne directement les avis clients. Un hôtel bien insonorisé obtient des notes plus élevées sur les plateformes de réservation.\n\nBureaux open space : la cacophonie des grands open spaces est un facteur reconnu de stress et de baisse de productivité. La moquette acoustique, associée à des panneaux et à un plafond absorbant, est l'un des investissements les plus rentables pour améliorer les conditions de travail.\n\nCollectivités et écoles : le confort acoustique des espaces partagés améliore la concentration et réduit la fatigue auditive. La moquette dans les couloirs et les espaces communs contribue directement au bien-être des usagers.\n\nCinémas et salles de spectacle : le sol contribue à l'équilibre acoustique de la salle. Une moquette haute densité dans les allées et l'espace entre les sièges améliore la qualité perçue du son.",
      },
      {
        title: "Certifications et labels à connaître",
        body: "En France, les moquettes acoustiques ne disposent pas d'un label unique officiel. Les performances se lisent dans les fiches techniques des fabricants.\n\nLe Δw (norme ISO 10140) mesure la réduction des bruits d'impact. Une valeur de 20 dB est correcte, 30 dB est performant, 35 dB et plus est excellent pour une moquette professionnelle.\n\nL'αw (facteur d'absorption) mesure l'absorption acoustique de la pièce. Une moquette épaisse atteint αw 0,15 à 0,30, une contribution significative en complément des traitements de plafond.\n\nLa marque EGE publie systématiquement ces données dans ses fiches techniques. CB Sols vous accompagne dans la lecture de ces données pour choisir le produit le plus adapté à votre objectif acoustique.",
      },
    ],
    faq: [
      { q: "Quelle est la moquette la plus performante acoustiquement ?", a: "Les moquettes tuftées velours haute densité avec sous-couche mousse intégrée sont les plus performantes. La gamme EGE Hospitality atteint des Δw de 30 à 38 dB. Pour les applications très exigeantes (studios d'enregistrement, salles de spectacle), des solutions combinées moquette + sous-couche spécifique permettent des performances supérieures." },
      { q: "La moquette acoustique coûte-t-elle plus cher ?", a: "Pas nécessairement. Les surcoûts liés à une moquette acoustique de qualité représentent généralement 10 à 20% par rapport à une moquette standard de même gamme. Rapporté aux bénéfices (confort, satisfaction client, concentration), c'est l'un des meilleurs investissements que l'on puisse faire dans un espace professionnel." },
      { q: "La moquette acoustique s'entretient-elle différemment ?", a: "Non. L'entretien d'une moquette acoustique est identique à celui d'une moquette classique : aspiration régulière et injection-extraction annuelle. La sous-couche n'est pas affectée par le nettoyage en surface si le protocole est respecté (humidité contrôlée, séchage rapide)." },
    ],
    relatedSolutions: ['moquette-hotel', 'moquette-restaurant', 'moquette-bureau'],
  },
  {
    slug: 'comprendre-un-devis-pose-de-sol',
    title: 'Comprendre un devis de pose de sol',
    metaTitle: 'Comment lire un devis de pose de sol | Guide CB Sols 2026',
    metaDescription: "Apprenez à décrypter un devis de pose de sol ligne par ligne : préparation du support, dépose, ragréage, fourniture, pose, accessoires. Guide complet par un solier-moquettiste qualifié.",
    category: 'Guide Tarifs',
    headline: 'Comment lire et décrypter un devis de pose de sol',
    intro: "Un devis de pose de revêtement de sol n'est pas un simple total à signer. C'est un document technique qui doit détailler chaque poste pour vous permettre de comparer ce qui est comparable et de comprendre où va votre argent. Voici, ligne par ligne, ce que doit contenir un devis sérieux et comment l'interpréter.",
    sections: [
      {
        title: "Pourquoi un devis détaillé n'est pas un luxe",
        body: "Un devis groupé en deux ou trois lignes (« fourniture + pose ») cache souvent des approximations. À l'inverse, un devis détaillé en 6 à 10 postes vous protège contre les mauvaises surprises et vous permet de comparer rationnellement plusieurs entreprises.\n\nLes devis chez CB Sols suivent les indications du DTU 53.12 (Document Technique Unifié, revêtements de sol collés textiles et plastiques), référentiel national qui encadre les bonnes pratiques de pose. Si un devis ne fait aucune référence au type de support à traiter, à la nature de la dépose ou à la classe de ragréage, il y a un risque que ces sujets soient laissés au hasard ou facturés en supplément.",
      },
      {
        title: "1. La dépose de l'ancien revêtement",
        body: "C'est souvent le poste le plus sous-estimé. La dépose varie selon le type de revêtement existant et son poids, un parquet stratifié est un déchet lourd, plus coûteux au m² à retraiter qu'une moquette légère.\n\n**À vérifier dans le devis**\n\n• Le type de revêtement à déposer est-il précisé (moquette, PVC collé, parquet stratifié, carrelage…) ?\n• La surface concernée est-elle clarifiée (parfois différente de la surface à reposer) ?\n• L'évacuation des déchets en déchetterie est-elle incluse ? Avec attestation de retraitement pour les projets d'entreprise ?\n\nUn écart de 4 à 8 €/m² entre deux devis sur la dépose vient souvent de là : l'un inclut tout, l'autre vous laisse gérer l'évacuation.",
      },
      {
        title: "2. La barrière anti-humidité",
        body: "Poste obligatoire dans certains cas, et trop souvent oublié dans les devis bas de gamme. La barrière anti-humidité est imposée :\n\n• Sur les rez-de-chaussée qui ne disposent pas d'un film polyane anti-humidité sous la chape\n• Au-dessus d'un vide sanitaire ou d'une cave ventilée\n• Sur tout support présentant un taux d'humidité résiduelle supérieur aux seuils du DTU\n\nSi votre futur revêtement est posé sans cette barrière sur un support concerné, vous risquez : décollement de la moquette, cloques sur le PVC, moisissures sous le sol. Refus pur et simple de la garantie décennale.\n\nUn devis sérieux mentionne explicitement la mesure d'humidité préalable et l'application (ou non) d'un primaire d'accrochage anti-humidité.",
      },
      {
        title: "3. Le ragréage du support",
        body: "Indispensable dans la quasi-totalité des projets de rénovation pour garantir la planéité du support. C'est ce qui fait la différence entre une pose qui dure 15 ans et une pose qui marque les défauts du sol au bout de six mois.\n\nL'épaisseur et le type de ragréage varient selon le support.\n\n**Ragréage type P3 (autolissant standard)**\n\n6 à 10 €/m² selon l'épaisseur. Pour les supports béton à planéité moyenne, sans contrainte particulière.\n\n**Ragréage fibré**\n\n12 à 30 €/m². Obligatoire :\n\n• Sur support bois (parquet existant, dalles OSB)\n• Pour les fortes épaisseurs (>10 mm)\n• Sur supports présentant des micro-fissures\n\nMéfiez-vous des devis qui sautent purement et simplement le poste ragréage : soit votre support est exceptionnellement plan (rare), soit vous allez payer le rattrapage en SAV.",
      },
      {
        title: "4. La fourniture (matériau)",
        body: "Le prix dépend du type de revêtement, du fabricant, de la gamme et, surtout, du conditionnement.\n\n**Moquette en rouleau**\n\nGénéralement vendue en lés de 4 m de large. Le métré doit prévoir les chutes de coupe. Sur des espaces étroits, la perte peut atteindre 20 %, sur de grandes surfaces régulières elle tombe à 5 %.\n\n**Moquette dalles**\n\nPas de chute (sauf coupes en bordure). Plus chère au m² mais souvent moins de pose détruite.\n\n**Sol PVC en lés**\n\nConditionnement 2 m ou 4 m de large.\n\n**Sol PVC en lames ou dalles**\n\nPose sans chute, mais le calepinage demande plus de temps.\n\n**Effet quantité**\n\nPlus la surface est grande, moins le m² coûte cher (moins de manutention, négociation possible avec le fournisseur). Un même produit peut avoir un écart de 15 à 25 % entre 30 m² et 300 m².\n\n**Notre méthode chez CB Sols**\n\nNous nous occupons de la réception de la matière, de la vérification des quantités et des coloris (lot fabricant, sens de pose). Le débit se fait dans notre atelier où chaque rouleau est contrôlé avant départ projet.",
      },
      {
        title: "5. La pose",
        body: "Le prix de pose varie selon trois grandes catégories de variables.\n\n**Le revêtement et son mode de pose**\n\n• Moquette tendue : 10 à 18 €/m²\n• Moquette collée plein bain : 12 à 22 €/m²\n• PVC collé en lés avec soudures : 18 à 32 €/m² (les soudures à chaud sont chronophages)\n• PVC en lames clipsées : 15 à 25 €/m²\n\n**La complexité du calepinage**\n\n• Pose droite simple : tarif standard\n• Pose en bâton rompu : +15 à 30 %\n• Découpes spéciales (arrondis, incrustations, motifs sur mesure) : variable, souvent au temps passé\n\n**Les contraintes de projet**\n\n• Difficultés d'acheminement (étage sans ascenseur, accès piéton)\n• Difficultés de stationnement en centre-ville\n• Pose en milieu occupé ou hors heures ouvrées\n• Petites quantités (un appartement) coûtent plus cher au m² qu'un grand projet\n\nUn devis sérieux décompose ces variables au lieu de pratiquer un forfait « pose » opaque.",
      },
      {
        title: "6. Accessoires et accessibilité",
        body: "Les nez de marche, barres de seuils et profilés de finition sont des postes à part entière, souvent oubliés des comparatifs.\n\n**Matières disponibles**\n\n• Aluminium anodisé : standard, durable, économique\n• Laiton : finition haut de gamme, vieillit avec patine\n• Inox brossé : look industriel, très résistant\n• PVC : économique, mais vite marqué\n\n**Accessibilité PMR**\n\nDans les ERP, la mise en accessibilité impose des nez de marche contrastés et des clous podotactiles. C'est un poste qui peut représenter 5 à 15 % du projet sur un escalier ou un amphithéâtre. Le devis doit le mentionner clairement avec la conformité aux normes.",
      },
      {
        title: "Comment comparer deux devis honnêtement",
        body: "Voici les vrais points à mettre côte à côte :\n\n• **Surface en m² posés et en m² déposés**, ce ne sont pas toujours les mêmes\n• **Type et classe du ragréage prévu**\n• **Référence exacte du revêtement** (marque, gamme, lot, classement d'usage)\n• **Conditionnement de la fourniture** (rouleau de 4 m, dalles, lés)\n• **Mode de pose** (collée, tendue, libre, soudures)\n• **Accessoires détaillés** (nez de marche, barres de seuil, plinthes)\n• **Délai de garantie de la pose**, en plus de la décennale\n• **Mode de calcul des pertes de coupe**\n• **Frais de déplacement** (inclus ou en sus)\n\nUn écart de 20 % entre deux devis qui semblent comparables vient presque toujours d'un de ces postes. Demandez la précision avant de signer.",
      },
      {
        title: "Le facteur humain : un solier-moquettiste qualifié",
        body: "Au-delà du prix, la question est simple : qui pose votre sol ?\n\nChez CB Sols, nous sommes une équipe de soliers-moquettistes qualifiés et passionnés, et nous ne prenons jamais de sous-traitant. Chaque projet est posé par notre propre équipe, supervisé par Valentin Prévoteau. Cette continuité fait la différence sur :\n\n• La conformité au cahier des charges initial, un sous-traitant ne lit jamais les notes du devis aussi finement que celui qui l'a rédigé\n• Le respect des plannings, nos équipes ne sont pas en concurrence avec un autre projet\n• La levée des réserves, nous revenons sur place sans renvoi de balle\n\nUne entreprise qui sous-traite peut afficher un prix plus bas, l'écart paie le sous-traitant et la marge intermédiaire. Vérifiez ce point dans toute consultation : qui pose réellement le sol ?",
      },
    ],
    faq: [
      { q: "Faut-il toujours un ragréage avant la pose d'un sol ?", a: "Dans 90 % des projets de rénovation, oui. Le ragréage garantit la planéité requise par le DTU 53.12 pour la pose d'un revêtement souple. Sans ragréage, les défauts du support remonteront à travers le revêtement en quelques mois. Seuls les projets neufs avec chape ratissée parfaitement plane et sèche peuvent s'en passer." },
      { q: "Pourquoi le ragréage fibré coûte-t-il plus cher ?", a: "Le ragréage fibré contient des fibres de polypropylène qui le rendent plus résistant aux micro-mouvements et aux fissures. Il est obligatoire sur supports bois (parquet existant, OSB) et pour les fortes épaisseurs. Comptez 12 à 30 €/m² contre 6 à 10 €/m² pour un P3 standard." },
      { q: "La barrière anti-humidité est-elle systématique ?", a: "Non, elle est obligatoire seulement sur certains supports : rez-de-chaussée sans polyane sous chape, au-dessus de vide sanitaire ou cave ventilée, ou si la mesure d'humidité dépasse les seuils du DTU. Un solier qualifié mesure systématiquement l'humidité avant de chiffrer." },
      { q: "Pourquoi le prix au m² baisse avec la surface ?", a: "Les frais fixes (déplacement, mobilisation d'équipe, livraison fournitures) se diluent sur une surface plus grande. Sur les fournitures, le fabricant peut accorder des remises volume. Sur la pose, l'effet d'apprentissage joue : les premiers m² sont les plus longs, les suivants vont plus vite." },
      { q: "Que vérifier sur la fourniture annoncée ?", a: "Trois points : (1) la marque et la gamme exactes du revêtement (pas \"moquette équivalente\"), (2) le classement d'usage (32, 33, 34) qui doit correspondre à votre activité, (3) le numéro de lot fabricant qui garantit l'homogénéité de coloris. Un solier sérieux mentionne ces trois infos." },
      { q: "Comment savoir si un devis sous-traite ?", a: "Demandez explicitement : « C'est vous ou une équipe extérieure qui pose ? ». Vérifiez aussi sur les attestations d'assurance décennale : elles doivent être nominatives à l'entreprise qui pose. Une entreprise qui sous-traite va souvent essayer d'esquiver la question, c'est le signal." },
    ],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau', 'sol-pvc-restaurant'],
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
