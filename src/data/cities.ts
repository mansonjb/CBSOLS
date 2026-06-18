export interface City {
  slug: string
  name: string
  department: string
  zone: 'la-rochelle' | 'ile-de-re' | 'ile-doleron' | 'charente-maritime'
  description: string
  population?: number
  localContext?: string
  localFootnote?: string
}

export const cities: City[] = [
  // La Rochelle et agglomération
  {
    slug: 'la-rochelle',
    name: 'La Rochelle',
    department: '17',
    zone: 'la-rochelle',
    description: 'capitale de la Charente-Maritime',
    population: 80000,
    localContext:
      "La Rochelle, c'est notre terrain de tous les jours. On y intervient autant dans les bureaux et les cabinets du centre-ville et des Minimes que dans les beaux immeubles anciens du Vieux-Port, où chaque parquet a son histoire. Le quartier vit, se rénove en continu, et les attentes y sont élevées : un sol doit être beau, durable et bien fini. L'air marin et l'humidité demandent qu'on prenne le temps de vérifier le support avant de poser, surtout dans les rez-de-chaussée des constructions anciennes. C'est une étape qu'on ne saute jamais, parce que c'est elle qui garantit que le sol tiendra dix ou quinze ans sans bouger. Notre atelier de Villedoux est à un quart d'heure, ce qui nous permet d'être réactifs et de suivre chaque chantier de près.",
    localFootnote:
      "Dans le centre ancien classé, les sols visibles depuis la rue peuvent demander l'accord des Bâtiments de France. Nous nous en occupons en amont pour vous éviter les mauvaises surprises.",
  },
  {
    slug: 'aytre',
    name: 'Aytré',
    department: '17',
    zone: 'la-rochelle',
    description: 'commune limitrophe de La Rochelle',
    population: 9000,
    localContext:
      "Aytré combine une zone industrielle active (Alstom et sous-traitants ferroviaires), un tissu pavillonnaire des années 1970-90 et une frange littorale exposée aux embruns. Le bâti résidentiel mêle maisons traditionnelles charentaises basses et programmes neufs en accession, avec une part croissante de chapes liquides dans les opérations récentes du nord de la commune.",
    localFootnote:
      "Sur les pavillons d'avant 1980 côté plage, l'humidité résiduelle des dalles béton banché reste un point de vigilance avant pose collée.",
  },
  {
    slug: 'chatelaillon-plage',
    name: 'Châtelaillon-Plage',
    department: '17',
    zone: 'la-rochelle',
    description: 'station balnéaire de l\'agglomération rochelaise',
    population: 6500,
    localContext:
      "Châtelaillon-Plage est une station balnéaire familiale que l'on connaît bien. On y croise de tout : les villas du front de mer avec leurs jolies façades anciennes, les maisons des années soixante, les copropriétés qui se louent l'été et les programmes neufs un peu en retrait de la plage. Chaque type de logement appelle une solution différente, et c'est justement ce qui rend les chantiers intéressants ici. La mer est juste là, et l'air salé comme l'humidité de l'hiver se font sentir dans les pièces du bas, surtout quand elles sont peu isolées. Avant de poser quoi que ce soit, on vérifie donc l'état du support, et on conseille des revêtements qui tiendront dans la durée malgré ce climat exigeant. Notre atelier de Villedoux est à une quinzaine de minutes, ce qui facilite le suivi de chaque chantier.",
    localFootnote:
      "Quelques villas anciennes du front de mer sont protégées au titre du patrimoine. Quand un sol est visible depuis la rue, nous validons le projet avec les Bâtiments de France avant de commencer.",
  },
  {
    slug: 'angoulins',
    name: 'Angoulins-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'commune balnéaire proche de La Rochelle',
    population: 4000,
    localContext:
      "Angoulins-sur-Mer présente un tissu essentiellement résidentiel : pavillons des années 1970-90, maisons charentaises traditionnelles en pierre et enduit chaux, lotissements pavillonnaires récents. La proximité immédiate du littoral et la nappe phréatique haute exposent les dalles béton de plain-pied à des remontées capillaires régulières, notamment sur les constructions antérieures aux normes RT.",
    localFootnote:
      "Anticiper la présence d'anciens carrelages collés au bitume sur les pavillons des années 1970. Diagnostic amiante préalable obligatoire.",
  },
  {
    slug: 'nieul-sur-mer',
    name: 'Nieul-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'commune résidentielle au nord de La Rochelle',
    population: 5500,
    localContext:
      "Nieul-sur-Mer combine un noyau ancien autour de l'église, des pavillons des années 1960-90 sur ZAC et une part croissante de programmes neufs en lots groupés au nord. La frange côtière (Lauzières, Pampin) ajoute des résidences de plain-pied exposées au vent et au sel. Bâti résidentiel dominant, peu de tertiaire, avec rénovations de longères en pierre vers les hameaux.",
    localFootnote:
      "Sur les longères charentaises rénovées, les sols d'origine en tomette ou pierre nécessitent un ragréage fibré avant pose d'un revêtement souple.",
  },
  {
    slug: 'lhoumeau',
    name: "L'Houmeau",
    department: '17',
    zone: 'la-rochelle',
    description: 'commune résidentielle de l\'agglomération rochelaise',
    population: 4200,
    localContext:
      "L'Houmeau est une commune résidentielle adossée au littoral nord rochelais, au bâti pavillonnaire dominé par les constructions des années 1970-2000 et quelques programmes récents en lotissement. La proximité immédiate de la côte et de l'anse de Pampin expose les rez-de-chaussée à l'humidité hivernale, particulièrement sur les maisons sans vide sanitaire des premières opérations.",
    localFootnote:
      "Plusieurs lotissements de la commune ont des dalles béton de faible épaisseur. Vérifier la planéité avant pose de stratifié ou LVT clipsable.",
  },
  {
    slug: 'lagord',
    name: 'Lagord',
    department: '17',
    zone: 'la-rochelle',
    description: 'commune résidentielle dynamique près de La Rochelle',
    population: 7500,
    localContext:
      "Lagord est l'une des communes les plus dynamiques de l'agglomération avec un fort développement résidentiel récent : nombreux programmes collectifs et lots libres livrés depuis 2010, en complément d'un parc pavillonnaire des années 1970-2000. Présence également d'équipements tertiaires (clinique, ZAC Beauregard) et d'un petit tissu commercial le long de la D105.",
    localFootnote:
      "Les programmes neufs récents sont en chape liquide ciment ou anhydrite. Délai de séchage à respecter (1 mm/jour pour l'anhydrite) avant pose collée.",
  },
  {
    slug: 'perigny',
    name: 'Périgny',
    department: '17',
    zone: 'la-rochelle',
    description: 'commune de l\'agglomération rochelaise',
    population: 5000,
    localContext:
      "Périgny, c'est avant tout l'une des grandes zones d'activités de l'agglomération, avec ses entrepôts, ses ateliers, ses showrooms et de nombreux bureaux de PME. On y intervient beaucoup pour des locaux professionnels, où le sol doit encaisser un passage intense au quotidien sans se dégrader. La commune compte aussi des quartiers pavillonnaires plus calmes et quelques programmes récents, où l'on retrouve une demande plus classique de rénovation et de pose neuve. Notre rôle, ici, est surtout de bien cerner l'usage réel de chaque espace avant de recommander un revêtement : un bureau, un commerce et un atelier n'ont pas les mêmes contraintes. Basés à Villedoux, à quelques minutes, nous connaissons bien le tissu local et ses besoins.",
    localFootnote:
      "Dans les locaux où circulent des chariots et des transpalettes, on privilégie un sol PVC robuste pensé pour le trafic intense, plutôt qu'un revêtement clipsable plus fragile.",
  },
  {
    slug: 'puilboreau',
    name: 'Puilboreau',
    department: '17',
    zone: 'la-rochelle',
    description: 'commune en forte expansion près de La Rochelle',
    population: 8500,
    localContext:
      "Puilboreau combine la grande zone commerciale Beaulieu (plus de 100 enseignes), un tissu tertiaire en croissance et un parc résidentiel qui s'étend rapidement avec de nombreux programmes neufs collectifs et individuels. La commune voit beaucoup de pose en première main sur chape liquide récente, et de remplacement de sols PVC en surfaces commerciales fréquentées.",
    localFootnote:
      "Sur la zone Beaulieu, les renouvellements de bail imposent souvent des poses en horaires décalés. Colle à séchage rapide à privilégier.",
  },
  {
    slug: 'saint-xandre',
    name: 'Saint-Xandre',
    department: '17',
    zone: 'la-rochelle',
    description: 'commune résidentielle proche de La Rochelle',
    population: 3800,
    localContext:
      "Saint-Xandre est une commune résidentielle péri-urbaine au bâti dominé par les pavillons des années 1970-2000 et quelques lotissements neufs récents. Le centre-bourg conserve quelques maisons charentaises en pierre, enduit chaux et tomettes d'origine. Faible présence tertiaire, demande tournée vers la rénovation pavillonnaire et la pose en programmes neufs.",
    localFootnote:
      "Plusieurs maisons du centre-bourg conservent des tomettes anciennes ou des planchers bois. Privilégier la dépose conservatoire si rénovation patrimoniale.",
  },
  {
    slug: 'villedoux',
    name: 'Villedoux',
    department: '17',
    zone: 'la-rochelle',
    description: 'commune rurale de l\'agglo rochelaise, siège de CB Sols',
    population: 2100,
    localContext:
      "Villedoux est une commune rurale en bordure de marais, au tissu mixte agricole et pavillonnaire. Le bâti combine fermes et longères charentaises traditionnelles, pavillons des années 1980-2000 et quelques opérations neuves récentes. La proximité du marais et la nappe haute exigent une vérification systématique de l'humidité des supports en rez-de-chaussée.",
    localFootnote:
      "En bordure de marais, beaucoup de dalles anciennes sans rupture de capillarité. Barrière anti-humidité quasi systématique avant pose souple.",
  },
  // Île de Ré
  {
    slug: 'saint-martin-de-re',
    name: 'Saint-Martin-de-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'chef-lieu de l\'Île de Ré, ville fortifiée classée UNESCO',
    population: 2700,
    localContext:
      "Saint-Martin-de-Ré est un lieu à part, classé au patrimoine mondial de l'UNESCO, avec ses fortifications, ses maisons basses en pierre blanche et ses ruelles autour du port. La plupart des logements sont des résidences secondaires ou des locations de vacances, ce qui veut dire des sols qui doivent rester impeccables saison après saison. Poser un revêtement ici demande du soin et le respect de l'esprit des lieux : on ne traite pas une maison rétaise ancienne comme une construction récente. L'air salé et l'humidité de l'hiver imposent presque toujours de protéger le support avant la pose, faute de quoi un sol souple ne tiendrait pas. C'est une précaution que nous prenons systématiquement. Depuis notre atelier de Villedoux, l'île est facilement accessible et nous y travaillons régulièrement.",
    localFootnote:
      "Le secteur est protégé de près. Tout matériau visible depuis la rue, parquet, plinthe ou seuil, doit être validé avant les travaux. Nous nous chargeons de ces démarches auprès des Bâtiments de France.",
  },
  {
    slug: 'la-flotte',
    name: 'La Flotte-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'village côtier de l\'Île de Ré',
    population: 3000,
    localContext:
      "La Flotte-en-Ré, classée parmi les Plus Beaux Villages de France, présente un bâti ancien dense en pierre calcaire et enduit chaux autour du port, complété par des résidences secondaires et locatives en périphérie. Beaucoup de maisons de pêcheurs anciennes, souvent sans vide sanitaire, exposées à la salinité marine et à l'humidité hivernale soutenue.",
    localFootnote:
      "Cœur de village en zone classée : les sols visibles depuis la rue (entrée, vitrine commerciale) requièrent l'avis de l'ABF.",
  },
  {
    slug: 'le-bois-plage-en-re',
    name: 'Le Bois-Plage-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'commune balnéaire de l\'Île de Ré',
    population: 2500,
    localContext:
      "Le Bois-Plage-en-Ré mêle un vieux village de maisons rétaises basses à une grande densité de résidences secondaires et de campings nichés dans la pinède, tout près des plages. C'est une commune qui vit au rythme des saisons, et beaucoup de propriétaires de locations font remettre leurs sols à neuf chaque année pour accueillir les vacanciers dans les meilleures conditions. On intervient donc autant sur des maisons anciennes pleines de caractère que sur des hébergements plus récents. La proximité de la plage et le sable qui s'invite partout nous orientent vers des revêtements faciles à entretenir et résistants à l'usage. Notre connaissance de l'île et notre atelier proche, à Villedoux, nous permettent de tenir les délais courts qu'imposent les changements de saison.",
    localFootnote:
      "Pour les locations en bord de plage, nous conseillons des revêtements résistants qui supportent bien le sable et le passage répété des vacanciers.",
  },
  {
    slug: 'rivedoux-plage',
    name: 'Rivedoux-Plage',
    department: '17',
    zone: 'ile-de-re',
    description: 'première commune de l\'Île de Ré en arrivant du pont',
    population: 2200,
    localContext:
      "Rivedoux-Plage est la première commune rétaise en sortie de pont, au bâti récent dominé par les résidences secondaires des années 1970-2000 et lotissements littoraux. Moins de patrimoine classé qu'à Saint-Martin, mais une exposition directe à l'air marin et au vent atlantique. Présence de quelques immeubles collectifs en front de mer, rares sur l'île.",
    localFootnote:
      "Frange côtière très exposée au sel : préférer plinthes PVC ou résine plutôt que MDF mélaminé qui se déglingue sous embruns répétés.",
  },
  {
    slug: 'ars-en-re',
    name: 'Ars-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'village authentique classé de l\'Île de Ré',
    population: 1300,
    localContext:
      "Ars-en-Ré, classé Plus Beaux Villages de France, conserve un cœur ancien dense de maisons rétaises basses en pierre et chaux autour du port et du clocher noir et blanc. Bâti à dominante patrimoniale, fort taux de résidences secondaires, peu de constructions neuves. L'humidité hivernale et la salinité atmosphérique pèsent sur les anciens planchers et dalles béton non isolées.",
    localFootnote:
      "Cœur de village classé : reprises de sol dans les commerces du port systématiquement instruites avec l'ABF.",
  },
  {
    slug: 'la-couarde-sur-mer',
    name: 'La Couarde-sur-Mer',
    department: '17',
    zone: 'ile-de-re',
    description: 'commune balnéaire centrale de l\'Île de Ré',
    population: 1400,
    localContext:
      "La Couarde-sur-Mer occupe une position centrale sur l'île avec un bourg ancien aux maisons rétaises traditionnelles et un arrière-pays de résidences secondaires en pinède. Bâti à dominante patrimoniale en pierre et enduit chaux, complété par des constructions plus récentes vers la plage et le camping. Demande locale tirée par la rénovation saisonnière.",
    localFootnote:
      "Sur les maisons anciennes en pierre, planéité souvent défavorable : prévoir ragréage P3 sur tomettes ou dalles béton vieillies.",
  },
  {
    slug: 'sainte-marie-de-re',
    name: 'Sainte-Marie-de-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'commune dynamique du sud de l\'Île de Ré',
    population: 3200,
    localContext:
      "Sainte-Marie-de-Ré est l'une des communes rétaises les plus peuplées à l'année, avec un tissu résidentiel actif combinant maisons rétaises anciennes du bourg et de La Noue, lotissements récents et programmes neufs. Bâti mixte avec une part significative de constructions des années 1980-2010, et une demande tirée par les résidences principales en plus du saisonnier.",
    localFootnote:
      "Plusieurs zones de la commune sont sous AVAP. Toute pose visible côté rue doit être validée en amont par la mairie.",
  },
  {
    slug: 'loix',
    name: 'Loix',
    department: '17',
    zone: 'ile-de-re',
    description: 'petit village ostréicole de l\'Île de Ré',
    population: 800,
    localContext:
      "Loix est un petit village ostréicole isolé à l'écart de la départementale, au bâti dense traditionnel en pierre et chaux autour de l'église fortifiée. Forte présence de cabanes ostréicoles dans les marais, résidences secondaires majoritaires et faible présence commerciale. Salinité élevée, humidité du marais, et beaucoup de dalles anciennes mal isolées du sol.",
    localFootnote:
      "Cœur de village classé et marais classé Natura 2000 : permis et travaux de sol sensibles à coordonner avec ABF et mairie.",
  },
  {
    slug: 'les-portes-en-re',
    name: 'Les Portes-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'commune à la pointe nord-ouest de l\'Île de Ré',
    population: 700,
    localContext:
      "Les Portes-en-Ré ferme la pointe nord-ouest de l'île, avec une très forte proportion de résidences secondaires huppées dans la pinède et autour du Fier d'Ars. Bâti rétais traditionnel au village complété par des villas contemporaines discrètes dans les bois. Exposition directe aux vents d'ouest et à la salinité, faible présence à l'année.",
    localFootnote:
      "Chantiers majoritairement saisonniers entre octobre et avril. Logistique livraison à anticiper, peu de stockage local possible.",
  },
  // Charente-Maritime
  {
    slug: 'rochefort',
    name: 'Rochefort',
    department: '17',
    zone: 'charente-maritime',
    description: 'ville historique de Charente-Maritime',
    population: 23000,
    localContext:
      "Rochefort a gardé l'empreinte de son passé d'arsenal royal, avec son centre-ville aux rues tirées au cordeau et ses immeubles en pierre de taille. C'est une ville qui se rénove, où l'on intervient aussi bien dans de beaux appartements anciens du centre que dans les bureaux administratifs, les établissements de santé et les pavillons des quartiers plus récents. Chaque chantier a sa logique : un appartement ancien demande qu'on respecte l'existant, là où un espace professionnel privilégie la robustesse. Notre travail consiste à trouver le bon revêtement pour chaque usage, en tenant compte de l'état réel du sol en place, que l'on vérifie toujours avant de poser. Rochefort se trouve à une trentaine de minutes de notre atelier de Villedoux, dans une zone que nous parcourons régulièrement.",
    localFootnote:
      "Dans le cœur historique protégé, les reprises de sol dans les parties communes des immeubles anciens demandent un avis préalable. Nous anticipons ces autorisations pour vous.",
  },
  {
    slug: 'saintes',
    name: 'Saintes',
    department: '17',
    zone: 'charente-maritime',
    description: 'sous-préfecture de Charente-Maritime',
    population: 25000,
    localContext:
      "Saintes est une ville d'histoire, marquée par son amphithéâtre romain, son abbaye et ses pierres blondes de Saintonge. En cœur de ville, on travaille surtout sur du bâti ancien, dans des logements et des commerces où le sol participe pleinement au cachet des lieux. Autour, les faubourgs et les quartiers pavillonnaires apportent une demande plus courante de rénovation. La pierre locale est tendre et un peu poreuse, et les sols anciens posés à même la terre peuvent retenir l'humidité. Avant de poser un revêtement collé, nous prenons donc le temps de mesurer l'état du support : c'est ce qui évite les décollements et les mauvaises surprises quelques mois plus tard. Saintes fait partie des villes de Charente-Maritime que nous desservons depuis notre atelier de Villedoux.",
    localFootnote:
      "La pierre de Saintonge laisse passer l'humidité. Sur un sol ancien posé directement sur la terre, nous vérifions toujours le taux d'humidité avant une pose collée.",
  },
  {
    slug: 'royan',
    name: 'Royan',
    department: '17',
    zone: 'charente-maritime',
    description: 'station balnéaire emblématique de la côte atlantique',
    population: 18000,
    localContext:
      "Royan a une identité architecturale unique, née de sa reconstruction d'après-guerre, avec son église en béton, son marché central et ses villas aux lignes modernes. Le front de mer aligne les copropriétés des années cinquante et soixante, où l'on intervient souvent pour rénover des appartements de vacances. On y trouve aussi de belles villas anciennes préservées et des programmes neufs. Cette diversité fait que chaque projet est différent, et nous aimons adapter le revêtement à l'esprit du logement comme à son usage réel. Comme partout sur la côte, l'humidité des rez-de-chaussée mérite qu'on s'y attarde avant la pose. Royan se situe à environ trois quarts d'heure de notre atelier de Villedoux, sur un secteur que nous couvrons régulièrement.",
    localFootnote:
      "Le centre reconstruit est reconnu au titre du patrimoine du XXe siècle. Dans les parties communes, le choix des sols et des plinthes peut être encadré, ce que nous prenons en compte dès le départ.",
  },
  {
    slug: 'surgeres',
    name: 'Surgères',
    department: '17',
    zone: 'charente-maritime',
    description: 'commune agricole dynamique de Charente-Maritime',
    population: 6500,
    localContext:
      "Surgères est une ville à la fois agricole et tournée vers l'agroalimentaire, bien connue pour sa filière laitière. Autour de son église romane et de son château, le centre-bourg garde un charme ancien, et tout autour s'étendent les quartiers pavillonnaires. On y intervient pour des projets variés : des maisons en rénovation, des commerces du centre, mais aussi des locaux professionnels qui ont des exigences particulières. Cette double facette, résidentielle et professionnelle, fait la richesse des chantiers ici. Dans chaque cas, nous commençons par comprendre l'usage de la pièce avant de proposer un sol adapté, qu'il s'agisse de confort à la maison ou de résistance dans un espace de travail. Surgères fait partie des communes que nous desservons depuis notre atelier de Villedoux.",
    localFootnote:
      "Dans les locaux liés à l'agroalimentaire, l'hygiène prime : on y pose des sols étanches et faciles à nettoyer, conçus pour répondre aux normes du secteur.",
  },
  {
    slug: 'saint-jean-dangely',
    name: "Saint-Jean-d'Angély",
    department: '17',
    zone: 'charente-maritime',
    description: 'commune historique de Charente-Maritime',
    population: 7500,
    localContext:
      "Saint-Jean-d'Angély a conservé un cœur médiéval magnifique, autour de son abbaye royale et de ses maisons à pans de bois, sur l'un des chemins vers Compostelle. C'est une ville où le patrimoine se vit au quotidien, et où poser un sol demande de la délicatesse et le sens du détail. On y rénove autant des logements anciens et des commerces du centre que des maisons plus récentes dans les quartiers en périphérie. Travailler dans le bâti ancien suppose de s'adapter à des planchers qui ne sont jamais parfaitement réguliers : c'est là que l'expérience de CB Sols, accumulée depuis 1999, fait la différence. Saint-Jean-d'Angély compte parmi les villes de Charente-Maritime que nous desservons depuis notre atelier de Villedoux.",
    localFootnote:
      "Le centre ancien est protégé. Les travaux de sol dans les bâtiments classés demandent une autorisation préalable, démarche dont nous nous occupons en amont du chantier.",
  },
  {
    slug: 'marennes',
    name: 'Marennes-Hiers-Brouage',
    department: '17',
    zone: 'charente-maritime',
    description: 'capitale de l\'huître de l\'estuaire de la Seudre',
    population: 5500,
    localContext:
      "Marennes-Hiers-Brouage regroupe la commune de Marennes (capitale ostréicole), la citadelle classée de Brouage et Hiers. Bâti dominé par les maisons basses en pierre et chaux, cabanes ostréicoles dans les claires, et un centre-bourg commerçant. Forte activité ostréicole avec ses besoins propres (locaux d'expédition, vestiaires), et résidentiel marqué par les marais.",
    localFootnote:
      "Brouage en secteur classé : reprises de sol dans les commerces et logements intra-muros instruites avec l'ABF du département.",
  },
  {
    slug: 'saujon',
    name: 'Saujon',
    department: '17',
    zone: 'charente-maritime',
    description: 'commune thermale de Charente-Maritime',
    population: 6000,
    localContext:
      "Saujon est une ville thermale reconnue, où les établissements de santé et les résidences pour curistes occupent une place importante aux côtés du centre-bourg ancien et des quartiers pavillonnaires. C'est un contexte que nous apprécions, car les sols y jouent un vrai rôle : dans une chambre ou un couloir d'établissement de soins, le revêtement doit être confortable, silencieux et facile à entretenir, tout en restant accueillant. Nous intervenons aussi bien sur ces espaces collectifs que chez les particuliers qui rénovent leur logement. Comprendre l'usage de chaque pièce avant de poser, c'est notre manière de garantir un résultat qui dure. Saujon fait partie des communes de Charente-Maritime que nous desservons depuis notre atelier de Villedoux.",
    localFootnote:
      "Dans les établissements de santé, les sols doivent répondre à des exigences précises de confort sonore et de sécurité incendie. Nous posons des revêtements certifiés pour ces usages.",
  },
  {
    slug: 'fouras',
    name: 'Fouras',
    department: '17',
    zone: 'charente-maritime',
    description: 'presqu\'île balnéaire face à l\'Île d\'Aix',
    population: 4000,
    localContext:
      "Fouras occupe une presqu'île face à l'Île d'Aix, avec un bâti balnéaire combinant villas Belle Époque préservées, maisons charentaises de pêcheurs, copropriétés des années 1960-80 et programmes neufs. Forte saisonnalité, exposition directe aux embruns sur trois côtés, et un patrimoine militaire (fort Vauban, fort Énet) qui structure l'identité de la commune.",
    localFootnote:
      "Villas Belle Époque souvent inscrites : préservation conseillée des carreaux ciment d'entrée et tomettes d'origine en rénovation.",
  },
  {
    slug: 'tonnay-charente',
    name: 'Tonnay-Charente',
    department: '17',
    zone: 'charente-maritime',
    description: 'commune de l\'agglomération rochefortaise',
    population: 8000,
    localContext:
      "Tonnay-Charente, ancien port de commerce fluvial, conserve un cœur ancien adossé au fleuve Charente avec quais et entrepôts XIXe partiellement reconvertis. Tissu résidentiel pavillonnaire des années 1960-2000 dominant, complété par des programmes neufs récents et une zone d'activités. Présence d'un pont suspendu remarquable structurant.",
    localFootnote:
      "Anciens entrepôts portuaires reconvertis en logements : dalles béton industrielles épaisses souvent saines, ragréage léger suffisant.",
  },
  {
    slug: 'pons',
    name: 'Pons',
    department: '17',
    zone: 'charente-maritime',
    description: 'étape historique sur le chemin de Saint-Jacques-de-Compostelle',
    population: 4500,
    localContext:
      "Pons est une étape jacquaire classée UNESCO avec un donjon roman, un hôpital des pèlerins et un cœur médiéval en pierre de taille calcaire. Tissu mixte ancien commerce/résidentiel, faubourgs XIXe, et lotissements pavillonnaires en périphérie. Patrimoine architectural fort, demande locale tirée par la rénovation du bâti ancien et le résidentiel pavillonnaire.",
    localFootnote:
      "Bâtiments inscrits UNESCO : interventions sur sols visibles depuis les rues du parcours jacquaire soumises à validation ABF.",
  },
  {
    slug: 'jonzac',
    name: 'Jonzac',
    department: '17',
    zone: 'charente-maritime',
    description: 'sous-préfecture de Charente-Maritime',
    population: 3500,
    localContext:
      "Jonzac est une sous-préfecture thermale et viticole (cognac, pineau) avec un château médiéval, des thermes modernes et un centre-ville commerçant en pierre calcaire. Tissu mixte combinant tertiaire administratif, équipements de santé, résidences pour curistes et pavillonnaire. Climat plus continental que le littoral, moins d'humidité atmosphérique mais davantage d'amplitude thermique.",
    localFootnote:
      "Climat plus sec qu'en zone côtière : risque accru de tuilage sur parquets massifs si hygrométrie intérieure non régulée en hiver.",
  },
  // Plus agglomération rochelaise
  {
    slug: 'dompierre-sur-mer',
    name: 'Dompierre-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: "commune résidentielle de l'agglomération de La Rochelle",
    population: 6200,
    localContext:
      "Dompierre-sur-Mer est une commune résidentielle en expansion à l'est de La Rochelle, traversée par le canal de Marans. Bâti dominé par les pavillons des années 1980-2010 et plusieurs programmes neufs récents en lotissements groupés. Centre-bourg ancien autour de l'église, faible tertiaire, demande locale tirée par la rénovation pavillonnaire et la pose en neuf.",
    localFootnote:
      "Programmes neufs récents fréquents : penser à demander le PV de séchage de chape liquide avant de planifier la pose.",
  },
  {
    slug: 'croix-chapeau',
    name: 'Croix-Chapeau',
    department: '17',
    zone: 'la-rochelle',
    description: "commune de l'agglomération rochelaise",
    population: 2800,
    localContext:
      "Croix-Chapeau est une petite commune péri-urbaine au sud-est de La Rochelle, au bâti essentiellement pavillonnaire des années 1980-2010, complété par quelques maisons charentaises anciennes au centre-bourg et lotissements neufs en extension. Caractère rural marqué, peu de commerces, demande tournée vers la rénovation et la pose en construction neuve.",
    localFootnote:
      "Bâti récent dominant : peu de problématiques amiante ou plomb, mais vérifier la planéité des dalles avant pose de LVT clipsable.",
  },
  {
    slug: 'saint-rogatien',
    name: 'Saint-Rogatien',
    department: '17',
    zone: 'la-rochelle',
    description: "commune résidentielle proche de La Rochelle",
    population: 3500,
    localContext:
      "Saint-Rogatien est une commune résidentielle calme au sud de La Rochelle, au tissu pavillonnaire dominant des années 1970-2000 et lotissements neufs en extension. Petit centre-bourg avec quelques maisons charentaises anciennes en pierre et chaux. Faible tertiaire, demande locale principalement résidentielle, en rénovation comme en construction neuve.",
    localFootnote:
      "Pavillons des années 1970-80 : dalles béton parfois fissurées par tassements différentiels, prévoir ragréage fibré P3.",
  },
  {
    slug: 'yves',
    name: 'Yves',
    department: '17',
    zone: 'la-rochelle',
    description: "commune littorale de l'agglomération rochelaise",
    population: 1200,
    localContext:
      "Yves est une petite commune littorale entre La Rochelle et Châtelaillon, bordée par la baie d'Yves classée réserve naturelle. Bâti pavillonnaire dominant des années 1970-2000, quelques maisons anciennes au bourg, et un caractère rural préservé. Forte humidité atmosphérique liée à la proximité immédiate de la baie et des marais, exposition au vent d'ouest.",
    localFootnote:
      "Frange littorale humide et nappe haute : test au CM-mètre conseillé sur dalles béton de plain-pied avant pose collée.",
  },
  {
    slug: 'salles-sur-mer',
    name: 'Salles-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: "commune de l'agglomération de La Rochelle",
    population: 3100,
    localContext:
      "Salles-sur-Mer est une commune péri-urbaine au sud de La Rochelle, au tissu pavillonnaire dominant des années 1970-2010 et plusieurs lotissements récents. Bourg ancien préservé avec maisons charentaises en pierre et chaux, équipements scolaires structurants. Demande locale résidentielle tirée par la rénovation pavillonnaire et les programmes neufs en accession.",
    localFootnote:
      "Lotissements récents avec chape liquide anhydrite. Ponçage et primaire d'accrochage obligatoires avant tout sol collé.",
  },
  // Île d'Oléron
  {
    slug: 'saint-pierre-doleron',
    name: "Saint-Pierre-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "chef-lieu de l'Île d'Oléron",
    population: 6700,
    localContext:
      "Saint-Pierre-d'Oléron, chef-lieu de l'île, concentre les services administratifs, le marché et un tissu commercial actif autour de la lanterne des Morts. Bâti dominé par les maisons oléronaises basses à enduit chaux et façades blanches, complété par des lotissements pavillonnaires et résidences secondaires. Salinité atmosphérique forte et humidité hivernale soutenue, comme sur l'ensemble de l'île.",
    localFootnote:
      "Maisons oléronaises anciennes souvent posées à même la terre : barrière anti-humidité ou film polyane systématique avant pose souple.",
  },
  {
    slug: 'saint-georges-doleron',
    name: "Saint-Georges-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "commune centrale de l'Île d'Oléron",
    population: 3500,
    localContext:
      "Saint-Georges-d'Oléron couvre une large partie centre-nord de l'île avec plusieurs hameaux (Boyardville, Sauzelle, La Menounière). Bâti oléronais traditionnel en chaux blanche dans les bourgs, résidences secondaires dans les pinèdes et zones de camping importantes. Forte saisonnalité, exposition continue à l'air marin sur la quasi-totalité du territoire.",
    localFootnote:
      "Boyardville et la côte est : projets en zone Natura 2000 et loi Littoral. Anticiper les délais d'instruction des autorisations.",
  },
  {
    slug: 'dolus-doleron',
    name: "Dolus-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "commune balnéaire de l'Île d'Oléron",
    population: 3200,
    localContext:
      "Dolus-d'Oléron, au centre de l'île, combine un bourg ancien aux maisons oléronaises et une vaste façade littorale ouest (La Rémigeasse, La Perroche) très prisée pour les résidences secondaires en pinède. Bâti mixte ancien et constructions des années 1970-2000, fort taux de saisonnalité et demande tirée par la remise à neuf des locatifs touristiques.",
    localFootnote:
      "Pinèdes littorales : nombreuses maisons sur vide sanitaire ventilé. Vérifier l'état du plancher bois avant pose de stratifié.",
  },
  {
    slug: 'le-grand-village-plage',
    name: 'Le Grand-Village-Plage',
    department: '17',
    zone: 'ile-doleron',
    description: "station balnéaire de l'Île d'Oléron",
    population: 1100,
    localContext:
      "Le Grand-Village-Plage est une petite commune balnéaire du sud-ouest de l'île, au bâti majoritairement composé de résidences secondaires des années 1960-2000 dans la pinède littorale, complété par un petit bourg ancien. Forte saisonnalité, exposition directe aux vents d'ouest et à la salinité, faible activité commerciale hors période estivale.",
    localFootnote:
      "Saison de pose courte (octobre-avril) hors fréquentation touristique : planification anticipée recommandée pour les locatifs.",
  },
  {
    slug: 'le-chateau-doleron',
    name: "Le Château-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "commune fortifiée de l'Île d'Oléron",
    population: 4000,
    localContext:
      "Le Château-d'Oléron est entourée d'une citadelle Vauban classée monument historique, avec un port ostréicole actif (cabanes colorées) et un centre-ville commerçant en pierre et chaux. Bâti mixte ancien intra-muros, faubourgs et lotissements pavillonnaires en périphérie. Forte présence ostréicole structurant le tissu économique et architectural.",
    localFootnote:
      "Intra-muros de la citadelle classée : tout sol visible depuis l'espace public soumis à autorisation préalable de l'ABF.",
  },
  {
    slug: 'saint-trojan-les-bains',
    name: 'Saint-Trojan-les-Bains',
    department: '17',
    zone: 'ile-doleron',
    description: "station thermale et balnéaire de l'Île d'Oléron",
    population: 1500,
    localContext:
      "Saint-Trojan-les-Bains est une station thermale et climatique du sud de l'île, avec un centre médical important (Centre Hélio-Marin), un bâti villageois oléronais et un parc de villas balnéaires Belle Époque sous les pins. Forte saisonnalité, demande tirée par les établissements de santé et les résidences secondaires en bord d'estuaire de la Seudre.",
    localFootnote:
      "Centre Hélio-Marin et établissements de soins : sols PVC acoustiques + classement feu Cfl-s1 conformes à la réglementation ERP type U.",
  },
  // Plus Charente-Maritime
  {
    slug: 'saint-palais-sur-mer',
    name: 'Saint-Palais-sur-Mer',
    department: '17',
    zone: 'charente-maritime',
    description: 'station balnéaire proche de Royan',
    population: 4000,
    localContext:
      "Saint-Palais-sur-Mer est une station balnéaire familiale de la côte de Beauté, au bâti dominé par les villas balnéaires Belle Époque et années 1930 préservées, complété par des copropriétés des années 1960-80 et des programmes neufs. Forte densité de résidences secondaires, saisonnalité marquée, exposition directe aux embruns atlantiques.",
    localFootnote:
      "Villas Belle Époque souvent inscrites au patrimoine du XXe : carreaux ciment et tomettes d'origine à conserver en rénovation.",
  },
  {
    slug: 'meschers-sur-gironde',
    name: 'Meschers-sur-Gironde',
    department: '17',
    zone: 'charente-maritime',
    description: 'commune balnéaire de l\'estuaire de la Gironde',
    population: 3200,
    localContext:
      "Meschers-sur-Gironde est une commune balnéaire pleine de caractère, posée au bord de l'estuaire, célèbre pour ses falaises calcaires et ses grottes creusées dans la roche. On y trouve des maisons charentaises traditionnelles, de jolies villas du début du siècle dernier et des pavillons plus récents, sans oublier les cabanes de pêche sur pilotis qui font le charme du paysage. Cette diversité de logements nous amène à proposer des solutions sur mesure, en fonction de l'âge et de l'orientation de chaque maison. La proximité de l'eau et la roche poreuse demandent une attention particulière à l'humidité, que nous évaluons toujours avant de poser. Meschers fait partie des communes du sud du département que nous desservons depuis notre atelier de Villedoux.",
    localFootnote:
      "La roche calcaire laisse passer l'humidité. Dans les maisons adossées à la falaise, nous mesurons soigneusement l'humidité du sol et veillons à une bonne ventilation avant la pose.",
  },
  {
    slug: 'saint-georges-de-didonne',
    name: 'Saint-Georges-de-Didonne',
    department: '17',
    zone: 'charente-maritime',
    description: 'station balnéaire de l\'estuaire de la Gironde',
    population: 5000,
    localContext:
      "Saint-Georges-de-Didonne est une station balnéaire mitoyenne de Royan, au bâti combinant villas balnéaires fin XIXe et années 1930, copropriétés des années 1960-80 sur le front de mer, et lotissements pavillonnaires en arrière-pays. Forte saisonnalité, exposition directe à l'estuaire de la Gironde et au vent atlantique.",
    localFootnote:
      "Copropriétés balnéaires des années 1960 : dalles béton banché souvent humides en rez-de-chaussée, test CM-mètre conseillé.",
  },
  {
    slug: 'port-des-barques',
    name: 'Port-des-Barques',
    department: '17',
    zone: 'charente-maritime',
    description: "commune littorale face à l'Île Madame",
    population: 1800,
    localContext:
      "Port-des-Barques est une petite commune littorale à l'embouchure de la Charente, reliée à l'Île Madame par une passe accessible à marée basse. Bâti pavillonnaire dominant des années 1970-2000, quelques maisons anciennes de pêcheurs au bourg, et présence ostréicole. Exposition directe au vent et aux embruns, humidité atmosphérique très soutenue.",
    localFootnote:
      "Bord d'embouchure humide : préférer sols PVC ou résine en rez-de-chaussée plutôt que parquet, même contrecollé.",
  },
  {
    slug: 'marans',
    name: 'Marans',
    department: '17',
    zone: 'charente-maritime',
    description: 'commune fluviale au nord de la Charente-Maritime',
    population: 4500,
    localContext:
      "Marans est une ancienne ville-port en bordure du Marais poitevin, traversée par la Sèvre Niortaise. Bâti combinant maisons anciennes en pierre et chaux du centre-bourg, anciens entrepôts portuaires reconvertis, et lotissements pavillonnaires en périphérie. Présence agricole forte (céréales, élevage) et proximité immédiate de zones de marais classées.",
    localFootnote:
      "Bordure de marais et nappe phréatique haute : barrière anti-humidité quasi systématique en rez-de-chaussée du bâti ancien.",
  },
  {
    slug: 'courcon',
    name: 'Courçon',
    department: '17',
    zone: 'charente-maritime',
    description: 'commune du Marais Poitevin en Charente-Maritime',
    population: 2400,
    localContext:
      "Courçon est un bourg rural du Marais poitevin, au bâti combinant maisons charentaises anciennes en pierre et chaux, fermes maraîchines et lotissements pavillonnaires récents. Caractère agricole et résidentiel péri-urbain, à mi-chemin entre La Rochelle et Niort. Bordure de marais imposant les mêmes précautions hydriques que sur l'aval.",
    localFootnote:
      "Fermes maraîchines avec dalles anciennes sur terre battue : reprise complète du support souvent nécessaire avant pose neuve.",
  },
  {
    slug: 'cognac',
    name: 'Cognac',
    department: '16',
    zone: 'charente-maritime',
    description: 'capitale mondiale du cognac, à la frontière de la zone CB Sols',
    population: 19000,
    localContext:
      "Cognac est mondialement connue pour son eau-de-vie, avec ses grandes maisons de négoce et ses chais alignés le long de la Charente. Son centre ancien en pierre de taille et ses quartiers résidentiels offrent une belle variété de projets. La ville marque la limite de notre zone d'intervention, et nous nous y déplaçons pour des chantiers où l'exigence est de mise, qu'il s'agisse de logements de caractère ou d'espaces liés à l'univers du vin et de l'œnotourisme. Le climat y est plus sec qu'en bord de mer, ce qui change les précautions à prendre : un parquet, par exemple, demande une hygrométrie bien régulée pour rester stable. Nous tenons compte de ces particularités pour conseiller le revêtement le plus adapté à chaque lieu.",
    localFootnote:
      "Dans les chais et les espaces d'accueil œnotouristique, l'air est chargé de vapeurs d'alcool en permanence. On y privilégie des sols résistants comme le PVC compact ou la résine plutôt qu'un stratifié.",
  },
]

export const cityZoneLabels: Record<City['zone'], string> = {
  'la-rochelle': 'Agglomération de La Rochelle',
  'ile-de-re': 'Île de Ré',
  'ile-doleron': "Île d'Oléron",
  'charente-maritime': 'Charente-Maritime',
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}

/**
 * Renvoie le label de zone précédé de la bonne préposition avec élision le cas échéant.
 * Exemple : zoneWithPrep('la-rochelle', 'de') → "de l'Agglomération de La Rochelle"
 *          zoneWithPrep('charente-maritime', 'de') → "de la Charente-Maritime"
 *          zoneWithPrep('la-rochelle', 'dans') → "dans l'Agglomération de La Rochelle"
 */
export function zoneWithPrep(zone: City['zone'], prep: 'de' | 'dans'): string {
  const label = cityZoneLabels[zone]
  const startsWithVowel = /^[aeiouyàâäéèêëîïôöùûüAEIOUYÀÂÄÉÈÊËÎÏÔÖÙÛÜ]/.test(label)
  if (prep === 'de') {
    return startsWithVowel ? `de l'${label}` : `de la ${label}`
  }
  // 'dans'
  return startsWithVowel ? `dans l'${label}` : `dans la ${label}`
}
