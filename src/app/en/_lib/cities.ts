// EN-only city content, colocated under /en (FR data left untouched).
// Faithful native-English translation of src/data/cities.ts. No invented facts.
export interface EnCity {
  slug: string
  name: string
  department: string
  zone: 'la-rochelle' | 'ile-de-re' | 'ile-doleron' | 'charente-maritime'
  description: string
  population?: number
  localContext?: string
  localFootnote?: string
}

export const enCities: EnCity[] = [
  // La Rochelle and surrounding area
  {
    slug: 'la-rochelle',
    name: 'La Rochelle',
    department: '17',
    zone: 'la-rochelle',
    description: 'capital of Charente-Maritime',
    population: 80000,
    localContext:
      "La Rochelle is our everyday ground. We work there as much in the offices and practices of the city centre and Les Minimes as in the fine old buildings of the Vieux-Port, where every timber floor has its own history. The district is alive, forever being renovated, and expectations run high: a floor has to be handsome, durable and well finished. The sea air and the damp mean we take the time to check the substrate before laying, especially on ground floors in older buildings. It is a step we never skip, because it is what guarantees the floor will hold for ten or fifteen years without moving. Our Villedoux workshop is a quarter of an hour away, which lets us stay responsive and follow every project closely.",
    localFootnote:
      "In the listed old centre, floors visible from the street may require the approval of the French heritage authority (Bâtiments de France). We handle that beforehand to spare you any nasty surprises.",
  },
  {
    slug: 'aytre',
    name: 'Aytré',
    department: '17',
    zone: 'la-rochelle',
    description: 'town bordering La Rochelle',
    population: 9000,
    localContext:
      "Aytré combines an active industrial estate (Alstom and its rail subcontractors), a 1970s-90s housing fabric and a coastal fringe exposed to sea spray. The residential stock mixes low traditional Charentais houses with new owner-occupier schemes, with a growing share of liquid screeds in the recent developments in the north of the town.",
    localFootnote:
      "On pre-1980 houses on the beach side, residual damp in poured concrete slabs remains a point to watch before a glued-down installation.",
  },
  {
    slug: 'chatelaillon-plage',
    name: 'Châtelaillon-Plage',
    department: '17',
    zone: 'la-rochelle',
    description: 'seaside resort within Greater La Rochelle',
    population: 6500,
    localContext:
      "Châtelaillon-Plage is a family seaside resort we know well. You find everything here: the seafront villas with their handsome old façades, the 1960s houses, the holiday-let blocks and the newer schemes set back from the beach. Each type of home calls for a different solution, and that is exactly what makes the projects interesting here. The sea is right there, and the salt air and winter damp make themselves felt in the ground-floor rooms, especially the poorly insulated ones. So before laying anything we check the state of the substrate and recommend coverings that will last despite this demanding climate. Our Villedoux workshop is about fifteen minutes away, which makes following each project straightforward.",
    localFootnote:
      "A few old seafront villas are heritage-protected. When a floor is visible from the street, we clear the project with the French heritage authority (Bâtiments de France) before starting.",
  },
  {
    slug: 'angoulins',
    name: 'Angoulins-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'seaside town near La Rochelle',
    population: 4000,
    localContext:
      "Angoulins-sur-Mer has an essentially residential fabric: 1970s-90s houses, traditional Charentais stone-and-lime-render houses, recent housing estates. The immediate proximity of the coast and the high water table expose single-storey concrete slabs to regular rising damp, particularly on buildings predating the thermal regulations.",
    localFootnote:
      "Anticipate old tiles glued down with bitumen on 1970s houses. A prior asbestos survey is mandatory.",
  },
  {
    slug: 'nieul-sur-mer',
    name: 'Nieul-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'residential town north of La Rochelle',
    population: 5500,
    localContext:
      "Nieul-sur-Mer combines an old core around the church, 1960s-90s houses on development zones and a growing share of new grouped-lot schemes to the north. The coastal fringe (Lauzières, Pampin) adds single-storey homes exposed to wind and salt. Predominantly residential, little commercial space, with stone longhouse renovations towards the hamlets.",
    localFootnote:
      "On renovated Charentais longhouses, the original hexagonal-tile or stone floors need a fibre-reinforced levelling compound before a resilient covering is laid.",
  },
  {
    slug: 'lhoumeau',
    name: "L'Houmeau",
    department: '17',
    zone: 'la-rochelle',
    description: 'residential town within Greater La Rochelle',
    population: 4200,
    localContext:
      "L'Houmeau is a residential town backing onto the northern La Rochelle coast, with a housing fabric dominated by 1970s-2000s builds and a few recent estate schemes. The immediate proximity of the coast and the Anse de Pampin exposes ground floors to winter damp, particularly on houses without a crawl space in the earliest developments.",
    localFootnote:
      "Several of the town's estates have thin concrete slabs. Check flatness before laying laminate or click-fit LVT.",
  },
  {
    slug: 'lagord',
    name: 'Lagord',
    department: '17',
    zone: 'la-rochelle',
    description: 'dynamic residential town near La Rochelle',
    population: 7500,
    localContext:
      "Lagord is one of the most dynamic towns in Greater La Rochelle, with strong recent residential growth: many apartment schemes and self-build plots delivered since 2010, alongside a 1970s-2000s housing stock. There are also commercial facilities (a clinic, the Beauregard development zone) and a small retail fabric along the D105.",
    localFootnote:
      "The recent new-build schemes use cement or anhydrite liquid screed. The drying time must be respected (1 mm/day for anhydrite) before a glued-down installation.",
  },
  {
    slug: 'perigny',
    name: 'Périgny',
    department: '17',
    zone: 'la-rochelle',
    description: 'town within Greater La Rochelle',
    population: 5000,
    localContext:
      "Périgny is above all one of the major business parks of the conurbation, with its warehouses, workshops, showrooms and many SME offices. We work there a great deal on professional premises, where the floor has to take heavy daily traffic without breaking down. The town also has quieter residential districts and a few recent schemes, with a more conventional demand for renovation and new installation. Our role here is mainly to understand the real use of each space before recommending a covering: an office, a shop and a workshop do not have the same constraints. Based in Villedoux, a few minutes away, we know the local fabric and its needs well.",
    localFootnote:
      "In premises where trolleys and pallet trucks move about, we favour a robust vinyl floor designed for heavy traffic rather than a more fragile click-fit covering.",
  },
  {
    slug: 'puilboreau',
    name: 'Puilboreau',
    department: '17',
    zone: 'la-rochelle',
    description: 'fast-growing town near La Rochelle',
    population: 8500,
    localContext:
      "Puilboreau combines the large Beaulieu retail park (over 100 stores), a growing commercial fabric and a residential stock expanding quickly with many new apartment and individual schemes. The town sees a lot of first-time laying on recent liquid screed, and replacement of vinyl floors in busy retail spaces.",
    localFootnote:
      "On the Beaulieu park, lease renewals often require out-of-hours installation. A fast-setting adhesive is preferable.",
  },
  {
    slug: 'saint-xandre',
    name: 'Saint-Xandre',
    department: '17',
    zone: 'la-rochelle',
    description: 'residential town near La Rochelle',
    population: 3800,
    localContext:
      "Saint-Xandre is a peri-urban residential town with a fabric dominated by 1970s-2000s houses and a few recent new estates. The village centre keeps some Charentais stone houses with lime render and original hexagonal tiles. Little commercial presence, with demand geared towards house renovation and new-build installation.",
    localFootnote:
      "Several houses in the village centre keep original hexagonal tiles or timber floors. Favour careful lifting for heritage renovations.",
  },
  {
    slug: 'villedoux',
    name: 'Villedoux',
    department: '17',
    zone: 'la-rochelle',
    description: 'rural town in Greater La Rochelle, home of CB Sols',
    population: 2100,
    localContext:
      "Villedoux is a rural town on the edge of the marshes, with a mixed agricultural and residential fabric. The building stock combines traditional Charentais farms and longhouses, 1980s-2000s houses and a few recent new schemes. The proximity of the marsh and the high water table call for a systematic check of substrate damp on ground floors.",
    localFootnote:
      "On the marsh edge, many old slabs have no capillary break. An anti-damp barrier is almost always needed before a resilient covering.",
  },
  // Île de Ré
  {
    slug: 'saint-martin-de-re',
    name: 'Saint-Martin-de-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'main town of Île de Ré, a UNESCO-listed fortified town',
    population: 2700,
    localContext:
      "Saint-Martin-de-Ré is a place apart, a UNESCO World Heritage site, with its fortifications, its low white-stone houses and its lanes around the harbour. Most of the homes are second homes or holiday lets, which means floors that have to stay immaculate season after season. Laying a covering here calls for care and respect for the spirit of the place: you do not treat an old Ré house like a recent build. The salt air and winter damp almost always mean protecting the substrate before laying, without which a resilient floor would not hold. It is a precaution we take as a matter of course. From our Villedoux workshop the island is easy to reach and we work there regularly.",
    localFootnote:
      "The area is closely protected. Any material visible from the street, flooring, skirting or threshold, must be approved before work begins. We handle these steps with the French heritage authority (Bâtiments de France).",
  },
  {
    slug: 'la-flotte',
    name: 'La Flotte-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'coastal village on Île de Ré',
    population: 3000,
    localContext:
      "La Flotte-en-Ré, listed among the Most Beautiful Villages of France, has a dense old fabric of limestone and lime-render buildings around the harbour, rounded out by second homes and holiday lets on the outskirts. Many old fishermen's houses, often without a crawl space, exposed to sea salt and sustained winter damp.",
    localFootnote:
      "Village heart in a listed zone: floors visible from the street (entrance, shopfront) require the opinion of the heritage architect (ABF).",
  },
  {
    slug: 'le-bois-plage-en-re',
    name: 'Le Bois-Plage-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'seaside town on Île de Ré',
    population: 2500,
    localContext:
      "Le Bois-Plage-en-Ré blends an old village of low Ré houses with a high density of second homes and campsites nestled in the pine woods, right by the beaches. It is a town that lives by the seasons, and many holiday-let owners have their floors refreshed every year to welcome holidaymakers in the best conditions. So we work as much on characterful old houses as on newer lets. The proximity of the beach and the sand that gets in everywhere steer us towards coverings that are easy to maintain and stand up to heavy use. Our knowledge of the island and our nearby Villedoux workshop let us meet the short deadlines the change of season imposes.",
    localFootnote:
      "For beachside lets, we recommend hard-wearing coverings that cope well with sand and the repeated traffic of holidaymakers.",
  },
  {
    slug: 'rivedoux-plage',
    name: 'Rivedoux-Plage',
    department: '17',
    zone: 'ile-de-re',
    description: 'first town on Île de Ré arriving from the bridge',
    population: 2200,
    localContext:
      "Rivedoux-Plage is the first Ré town off the bridge, with a recent fabric dominated by 1970s-2000s second homes and coastal estates. Less listed heritage than in Saint-Martin, but direct exposure to the sea air and the Atlantic wind. There are a few seafront apartment blocks, rare on the island.",
    localFootnote:
      "Coastal fringe very exposed to salt: favour PVC or resin skirting over melamine-faced MDF, which falls apart under repeated spray.",
  },
  {
    slug: 'ars-en-re',
    name: 'Ars-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'listed authentic village on Île de Ré',
    population: 1300,
    localContext:
      "Ars-en-Ré, listed among the Most Beautiful Villages of France, keeps a dense old heart of low Ré stone-and-lime houses around the harbour and its black-and-white bell tower. A predominantly heritage fabric, a high rate of second homes, little new construction. Winter damp and atmospheric salt weigh on the old timber floors and uninsulated concrete slabs.",
    localFootnote:
      "Listed village heart: floor replacements in the harbour shops are always processed with the heritage architect (ABF).",
  },
  {
    slug: 'la-couarde-sur-mer',
    name: 'La Couarde-sur-Mer',
    department: '17',
    zone: 'ile-de-re',
    description: 'central seaside town on Île de Ré',
    population: 1400,
    localContext:
      "La Couarde-sur-Mer holds a central position on the island, with an old village of traditional Ré houses and a hinterland of second homes in the pine woods. A predominantly heritage fabric in stone and lime render, rounded out by newer builds towards the beach and the campsite. Local demand is driven by seasonal renovation.",
    localFootnote:
      "On old stone houses, flatness is often poor: allow for a P3 levelling compound over hexagonal tiles or aged concrete slabs.",
  },
  {
    slug: 'sainte-marie-de-re',
    name: 'Sainte-Marie-de-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'dynamic town in the south of Île de Ré',
    population: 3200,
    localContext:
      "Sainte-Marie-de-Ré is one of the most year-round populated towns on Ré, with an active residential fabric combining old Ré houses in the village and at La Noue, recent estates and new schemes. A mixed fabric with a significant share of 1980s-2010s builds, and demand driven by primary residences as well as the seasonal market.",
    localFootnote:
      "Several areas of the town fall under a heritage protection area (AVAP). Any street-facing installation must be approved by the town hall beforehand.",
  },
  {
    slug: 'loix',
    name: 'Loix',
    department: '17',
    zone: 'ile-de-re',
    description: 'small oyster-farming village on Île de Ré',
    population: 800,
    localContext:
      "Loix is a small oyster-farming village set apart from the main road, with a dense traditional stone-and-lime fabric around the fortified church. A strong presence of oyster huts in the marshes, mostly second homes and little retail. High salinity, marsh damp, and many old slabs poorly insulated from the ground.",
    localFootnote:
      "Listed village heart and Natura 2000-listed marsh: planning permits and sensitive floor works to be coordinated with the ABF and the town hall.",
  },
  {
    slug: 'les-portes-en-re',
    name: 'Les Portes-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'town at the north-western tip of Île de Ré',
    population: 700,
    localContext:
      "Les Portes-en-Ré closes off the north-western tip of the island, with a very high proportion of upmarket second homes in the pine woods and around the Fier d'Ars. A traditional Ré fabric in the village, rounded out by discreet contemporary villas in the woods. Direct exposure to westerly winds and salt, little year-round presence.",
    localFootnote:
      "Projects are mostly seasonal, between October and April. Delivery logistics must be anticipated, with little local storage possible.",
  },
  // Charente-Maritime
  {
    slug: 'rochefort',
    name: 'Rochefort',
    department: '17',
    zone: 'charente-maritime',
    description: 'historic town in Charente-Maritime',
    population: 23000,
    localContext:
      "Rochefort still bears the mark of its past as a royal arsenal, with its ruler-straight streets and its ashlar stone buildings. It is a town being renovated, where we work as much in fine old town-centre flats as in administrative offices, healthcare premises and houses in the newer districts. Each project has its own logic: an old flat asks you to respect what is there, whereas a professional space calls for robustness. Our job is to find the right covering for each use, taking account of the real condition of the existing floor, which we always check before laying. Rochefort is about thirty minutes from our Villedoux workshop, in an area we cover regularly.",
    localFootnote:
      "In the protected historic heart, floor replacements in the common areas of old buildings require prior approval. We anticipate these authorisations for you.",
  },
  {
    slug: 'saintes',
    name: 'Saintes',
    department: '17',
    zone: 'charente-maritime',
    description: 'sub-prefecture of Charente-Maritime',
    population: 25000,
    localContext:
      "Saintes is a town steeped in history, marked by its Roman amphitheatre, its abbey and its golden Saintonge stone. In the town centre we work mostly on old buildings, in homes and shops where the floor plays a full part in the character of the place. Around it, the suburbs and residential districts bring a more everyday demand for renovation. The local stone is soft and a little porous, and old floors laid straight onto the earth can hold damp. Before laying a glued-down covering we therefore take the time to measure the condition of the substrate: this is what prevents lifting and nasty surprises a few months later. Saintes is among the Charente-Maritime towns we serve from our Villedoux workshop.",
    localFootnote:
      "Saintonge stone lets damp through. On an old floor laid directly onto the earth, we always check the moisture level before a glued-down installation.",
  },
  {
    slug: 'royan',
    name: 'Royan',
    department: '17',
    zone: 'charente-maritime',
    description: 'emblematic seaside resort on the Atlantic coast',
    population: 18000,
    localContext:
      "Royan has a unique architectural identity, born of its post-war reconstruction, with its concrete church, its central market and its villas with modern lines. The seafront lines up 1950s and 1960s apartment blocks, where we often work to renovate holiday flats. There are also fine preserved old villas and new schemes. This diversity means every project is different, and we enjoy matching the covering to the spirit of the home as much as to its real use. As everywhere on the coast, ground-floor damp is worth dwelling on before laying. Royan is about forty-five minutes from our Villedoux workshop, in an area we cover regularly.",
    localFootnote:
      "The reconstructed centre is recognised as 20th-century heritage. In common areas, the choice of floors and skirting may be regulated, which we take into account from the outset.",
  },
  {
    slug: 'surgeres',
    name: 'Surgères',
    department: '17',
    zone: 'charente-maritime',
    description: 'dynamic farming town in Charente-Maritime',
    population: 6500,
    localContext:
      "Surgères is a town at once agricultural and turned towards food processing, well known for its dairy sector. Around its Romanesque church and its château, the village centre keeps an old charm, and all around stretch the residential districts. We work there on varied projects: houses being renovated, town-centre shops, but also professional premises with particular requirements. This dual nature, residential and professional, is what makes the projects here rich. In each case we start by understanding the use of the room before proposing a suitable floor, whether it is about comfort at home or resistance in a workspace. Surgères is among the towns we serve from our Villedoux workshop.",
    localFootnote:
      "In premises linked to food processing, hygiene comes first: we lay watertight, easy-to-clean floors designed to meet the sector's standards.",
  },
  {
    slug: 'saint-jean-dangely',
    name: "Saint-Jean-d'Angély",
    department: '17',
    zone: 'charente-maritime',
    description: 'historic town in Charente-Maritime',
    population: 7500,
    localContext:
      "Saint-Jean-d'Angély has kept a magnificent medieval heart, around its royal abbey and its half-timbered houses, on one of the routes to Compostela. It is a town where heritage is lived day to day, and where laying a floor calls for delicacy and an eye for detail. We renovate old homes and town-centre shops as much as newer houses in the outlying districts. Working on old buildings means adapting to floors that are never perfectly level: this is where the experience CB Sols has built up since 1998 makes the difference. Saint-Jean-d'Angély is among the Charente-Maritime towns we serve from our Villedoux workshop.",
    localFootnote:
      "The old centre is protected. Floor works in listed buildings require prior authorisation, a step we handle ahead of the project.",
  },
  {
    slug: 'marennes',
    name: 'Marennes-Hiers-Brouage',
    department: '17',
    zone: 'charente-maritime',
    description: 'oyster capital of the Seudre estuary',
    population: 5500,
    localContext:
      "Marennes-Hiers-Brouage brings together the town of Marennes (oyster capital), the listed citadel of Brouage and Hiers. A fabric dominated by low stone-and-lime houses, oyster huts in the salt-marsh beds, and a retail village centre. A strong oyster-farming industry with its own needs (dispatch premises, changing rooms), and a residential character shaped by the marshes.",
    localFootnote:
      "Brouage in a listed sector: floor replacements in shops and homes within the walls are processed with the département's heritage architect (ABF).",
  },
  {
    slug: 'saujon',
    name: 'Saujon',
    department: '17',
    zone: 'charente-maritime',
    description: 'spa town in Charente-Maritime',
    population: 6000,
    localContext:
      "Saujon is a recognised spa town, where healthcare establishments and residences for spa guests hold an important place alongside the old village centre and the residential districts. It is a context we appreciate, because floors play a real role here: in a room or corridor of a care establishment, the covering has to be comfortable, quiet and easy to maintain, while staying welcoming. We work as much on these shared spaces as for private clients renovating their homes. Understanding the use of each room before laying is our way of guaranteeing a result that lasts. Saujon is among the Charente-Maritime towns we serve from our Villedoux workshop.",
    localFootnote:
      "In healthcare establishments, floors must meet precise requirements for sound comfort and fire safety. We lay coverings certified for these uses.",
  },
  {
    slug: 'fouras',
    name: 'Fouras',
    department: '17',
    zone: 'charente-maritime',
    description: 'seaside peninsula facing Île d\'Aix',
    population: 4000,
    localContext:
      "Fouras occupies a peninsula facing Île d'Aix, with a seaside fabric combining preserved Belle Époque villas, Charentais fishermen's houses, 1960s-80s apartment blocks and new schemes. Strong seasonality, direct exposure to sea spray on three sides, and a military heritage (the Vauban fort, Fort Énet) that shapes the town's identity.",
    localFootnote:
      "Belle Époque villas are often heritage-listed: preserving the original encaustic-cement entrance tiles and hexagonal tiles is advised in renovation.",
  },
  {
    slug: 'tonnay-charente',
    name: 'Tonnay-Charente',
    department: '17',
    zone: 'charente-maritime',
    description: 'town within Greater Rochefort',
    population: 8000,
    localContext:
      "Tonnay-Charente, a former river trading port, keeps an old heart backing onto the Charente with quays and 19th-century warehouses partly converted. A predominantly 1960s-2000s residential housing fabric, rounded out by recent new schemes and a business park. A notable suspension bridge is a structuring landmark.",
    localFootnote:
      "Old port warehouses converted into homes: thick industrial concrete slabs, often sound, with a light levelling compound enough.",
  },
  {
    slug: 'pons',
    name: 'Pons',
    department: '17',
    zone: 'charente-maritime',
    description: 'historic stop on the road to Santiago de Compostela',
    population: 4500,
    localContext:
      "Pons is a UNESCO-listed pilgrim stop with a Romanesque keep, a pilgrims' hospital and a medieval heart in limestone ashlar. A mixed old commercial/residential fabric, 19th-century suburbs and residential estates on the outskirts. Strong architectural heritage, with local demand driven by the renovation of old buildings and residential housing.",
    localFootnote:
      "UNESCO-listed buildings: work on floors visible from the streets of the pilgrim route is subject to ABF approval.",
  },
  {
    slug: 'jonzac',
    name: 'Jonzac',
    department: '17',
    zone: 'charente-maritime',
    description: 'sub-prefecture of Charente-Maritime',
    population: 3500,
    localContext:
      "Jonzac is a spa and wine-growing sub-prefecture (cognac, pineau) with a medieval château, modern thermal baths and a limestone retail town centre. A mixed fabric combining administrative offices, healthcare facilities, residences for spa guests and housing. A more continental climate than the coast, less atmospheric damp but greater temperature swings.",
    localFootnote:
      "A drier climate than the coastal zone: a higher risk of cupping on solid wood floors if indoor humidity is not controlled in winter.",
  },
  // More of Greater La Rochelle
  {
    slug: 'dompierre-sur-mer',
    name: 'Dompierre-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'residential town within Greater La Rochelle',
    population: 6200,
    localContext:
      "Dompierre-sur-Mer is an expanding residential town east of La Rochelle, crossed by the Marans canal. A fabric dominated by 1980s-2010s houses and several recent grouped-lot schemes. An old village centre around the church, little commercial space, with local demand driven by house renovation and new-build installation.",
    localFootnote:
      "Recent new schemes are frequent: remember to ask for the liquid-screed drying certificate before scheduling the installation.",
  },
  {
    slug: 'croix-chapeau',
    name: 'Croix-Chapeau',
    department: '17',
    zone: 'la-rochelle',
    description: 'town within Greater La Rochelle',
    population: 2800,
    localContext:
      "Croix-Chapeau is a small peri-urban town south-east of La Rochelle, with a largely 1980s-2010s housing fabric, rounded out by a few old Charentais houses in the village centre and new estates in extension. A marked rural character, few shops, with demand geared towards renovation and new-build installation.",
    localFootnote:
      "Predominantly recent stock: few asbestos or lead issues, but check the flatness of slabs before laying click-fit LVT.",
  },
  {
    slug: 'saint-rogatien',
    name: 'Saint-Rogatien',
    department: '17',
    zone: 'la-rochelle',
    description: 'residential town near La Rochelle',
    population: 3500,
    localContext:
      "Saint-Rogatien is a quiet residential town south of La Rochelle, with a dominant 1970s-2000s housing fabric and new estates in extension. A small village centre with a few old Charentais stone-and-lime houses. Little commercial space, with local demand mainly residential, in both renovation and new build.",
    localFootnote:
      "1970s-80s houses: concrete slabs sometimes cracked by differential settlement, allow for a fibre-reinforced P3 levelling compound.",
  },
  {
    slug: 'yves',
    name: 'Yves',
    department: '17',
    zone: 'la-rochelle',
    description: 'coastal town within Greater La Rochelle',
    population: 1200,
    localContext:
      "Yves is a small coastal town between La Rochelle and Châtelaillon, bordered by the Baie d'Yves nature reserve. A dominant 1970s-2000s housing fabric, a few old houses in the village, and a preserved rural character. High atmospheric damp linked to the immediate proximity of the bay and marshes, with exposure to the westerly wind.",
    localFootnote:
      "Damp coastal fringe with a high water table: a moisture-meter test is advised on single-storey concrete slabs before a glued-down installation.",
  },
  {
    slug: 'salles-sur-mer',
    name: 'Salles-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'town within Greater La Rochelle',
    population: 3100,
    localContext:
      "Salles-sur-Mer is a peri-urban town south of La Rochelle, with a dominant 1970s-2010s housing fabric and several recent estates. A preserved old village with Charentais stone-and-lime houses and structuring school facilities. Local residential demand driven by house renovation and new owner-occupier schemes.",
    localFootnote:
      "Recent estates with anhydrite liquid screed. Sanding and a bonding primer are mandatory before any glued-down floor.",
  },
  // Île d'Oléron
  {
    slug: 'saint-pierre-doleron',
    name: "Saint-Pierre-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "main town of Île d'Oléron",
    population: 6700,
    localContext:
      "Saint-Pierre-d'Oléron, the island's main town, concentrates the administrative services, the market and an active retail fabric around the Lanterne des Morts. A fabric dominated by low Oléron houses with lime render and white façades, rounded out by residential estates and second homes. Strong atmospheric salinity and sustained winter damp, as across the whole island.",
    localFootnote:
      "Old Oléron houses are often laid straight onto the earth: an anti-damp barrier or polythene film is systematic before a resilient covering.",
  },
  {
    slug: 'saint-georges-doleron',
    name: "Saint-Georges-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "central town of Île d'Oléron",
    population: 3500,
    localContext:
      "Saint-Georges-d'Oléron covers a large part of the centre-north of the island with several hamlets (Boyardville, Sauzelle, La Menounière). A traditional Oléron fabric in white lime render in the villages, second homes in the pine woods and large campsite areas. Strong seasonality, continuous exposure to the sea air across nearly all of the territory.",
    localFootnote:
      "Boyardville and the east coast: projects in Natura 2000 and Coastal Law zones. Anticipate the processing times for authorisations.",
  },
  {
    slug: 'dolus-doleron',
    name: "Dolus-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "seaside town on Île d'Oléron",
    population: 3200,
    localContext:
      "Dolus-d'Oléron, in the centre of the island, combines an old village of Oléron houses with a vast western coastal frontage (La Rémigeasse, La Perroche) much sought after for second homes in the pine woods. A mixed fabric of old and 1970s-2000s builds, a high rate of seasonality and demand driven by the refreshing of holiday lets.",
    localFootnote:
      "Coastal pine woods: many houses on a ventilated crawl space. Check the condition of the timber floor before laying laminate.",
  },
  {
    slug: 'le-grand-village-plage',
    name: 'Le Grand-Village-Plage',
    department: '17',
    zone: 'ile-doleron',
    description: "seaside resort on Île d'Oléron",
    population: 1100,
    localContext:
      "Le Grand-Village-Plage is a small seaside town in the south-west of the island, with a fabric made up mostly of 1960s-2000s second homes in the coastal pine woods, rounded out by a small old village. Strong seasonality, direct exposure to westerly winds and salt, little commercial activity outside the summer period.",
    localFootnote:
      "A short laying season (October-April) outside the tourist influx: advance planning is recommended for holiday lets.",
  },
  {
    slug: 'le-chateau-doleron',
    name: "Le Château-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "fortified town on Île d'Oléron",
    population: 4000,
    localContext:
      "Le Château-d'Oléron is surrounded by a Vauban citadel listed as a historic monument, with an active oyster harbour (colourful huts) and a retail town centre in stone and lime. A mixed fabric, old within the walls, with suburbs and residential estates on the outskirts. A strong oyster-farming presence shapes both the economic and architectural fabric.",
    localFootnote:
      "Within the walls of the listed citadel: any floor visible from public space is subject to prior authorisation from the ABF.",
  },
  {
    slug: 'saint-trojan-les-bains',
    name: 'Saint-Trojan-les-Bains',
    department: '17',
    zone: 'ile-doleron',
    description: "spa and seaside resort on Île d'Oléron",
    population: 1500,
    localContext:
      "Saint-Trojan-les-Bains is a spa and climatic resort in the south of the island, with an important medical centre (the Centre Hélio-Marin), an Oléron village fabric and a stock of Belle Époque seaside villas beneath the pines. Strong seasonality, with demand driven by healthcare establishments and second homes on the edge of the Seudre estuary.",
    localFootnote:
      "The Centre Hélio-Marin and care establishments: acoustic PVC floors + a Cfl-s1 fire rating compliant with Type U public-building regulations.",
  },
  // More of Charente-Maritime
  {
    slug: 'saint-palais-sur-mer',
    name: 'Saint-Palais-sur-Mer',
    department: '17',
    zone: 'charente-maritime',
    description: 'seaside resort near Royan',
    population: 4000,
    localContext:
      "Saint-Palais-sur-Mer is a family seaside resort on the Côte de Beauté, with a fabric dominated by preserved Belle Époque and 1930s seaside villas, rounded out by 1960s-80s apartment blocks and new schemes. A high density of second homes, marked seasonality, direct exposure to Atlantic sea spray.",
    localFootnote:
      "Belle Époque villas are often listed as 20th-century heritage: original encaustic-cement tiles and hexagonal tiles to be kept in renovation.",
  },
  {
    slug: 'meschers-sur-gironde',
    name: 'Meschers-sur-Gironde',
    department: '17',
    zone: 'charente-maritime',
    description: 'seaside town on the Gironde estuary',
    population: 3200,
    localContext:
      "Meschers-sur-Gironde is a seaside town full of character, set on the edge of the estuary, famous for its limestone cliffs and the caves carved into the rock. You find traditional Charentais houses, handsome villas from the early last century and newer houses, not to mention the stilted fishing huts that give the landscape its charm. This diversity of homes leads us to propose bespoke solutions, depending on the age and orientation of each house. The proximity of the water and the porous rock call for particular attention to damp, which we always assess before laying. Meschers is among the towns in the south of the département we serve from our Villedoux workshop.",
    localFootnote:
      "The limestone lets damp through. In houses backing onto the cliff, we carefully measure the floor's moisture and ensure good ventilation before laying.",
  },
  {
    slug: 'saint-georges-de-didonne',
    name: 'Saint-Georges-de-Didonne',
    department: '17',
    zone: 'charente-maritime',
    description: 'seaside resort on the Gironde estuary',
    population: 5000,
    localContext:
      "Saint-Georges-de-Didonne is a seaside resort adjoining Royan, with a fabric combining late-19th-century and 1930s seaside villas, 1960s-80s apartment blocks on the seafront, and residential estates in the hinterland. Strong seasonality, direct exposure to the Gironde estuary and the Atlantic wind.",
    localFootnote:
      "1960s seaside apartment blocks: poured concrete slabs often damp on the ground floor, a moisture-meter test is advised.",
  },
  {
    slug: 'port-des-barques',
    name: 'Port-des-Barques',
    department: '17',
    zone: 'charente-maritime',
    description: "coastal town facing Île Madame",
    population: 1800,
    localContext:
      "Port-des-Barques is a small coastal town at the mouth of the Charente, linked to Île Madame by a causeway accessible at low tide. A dominant 1970s-2000s housing fabric, a few old fishermen's houses in the village, and an oyster-farming presence. Direct exposure to wind and sea spray, very sustained atmospheric damp.",
    localFootnote:
      "Damp estuary mouth: favour PVC or resin floors over wood on ground floors, even engineered wood.",
  },
  {
    slug: 'marans',
    name: 'Marans',
    department: '17',
    zone: 'charente-maritime',
    description: 'river town in the north of Charente-Maritime',
    population: 4500,
    localContext:
      "Marans is a former port town on the edge of the Marais Poitevin, crossed by the Sèvre Niortaise. A fabric combining old stone-and-lime houses in the village centre, converted former port warehouses, and residential estates on the outskirts. A strong agricultural presence (cereals, livestock) and the immediate proximity of listed marshland.",
    localFootnote:
      "Marsh edge and high water table: an anti-damp barrier is almost always needed on the ground floor of old buildings.",
  },
  {
    slug: 'courcon',
    name: 'Courçon',
    department: '17',
    zone: 'charente-maritime',
    description: 'town of the Marais Poitevin in Charente-Maritime',
    population: 2400,
    localContext:
      "Courçon is a rural village of the Marais Poitevin, with a fabric combining old Charentais stone-and-lime houses, market-garden farms and recent residential estates. An agricultural and peri-urban residential character, halfway between La Rochelle and Niort. The marsh edge calls for the same water-related precautions as downstream.",
    localFootnote:
      "Market-garden farms with old slabs over bare earth: a full rework of the substrate is often needed before a new installation.",
  },
  {
    slug: 'cognac',
    name: 'Cognac',
    department: '16',
    zone: 'charente-maritime',
    description: 'world capital of cognac, at the edge of the CB Sols area',
    population: 19000,
    localContext:
      "Cognac is known worldwide for its eau-de-vie, with its great trading houses and its cellars lined up along the Charente. Its old ashlar-stone centre and its residential districts offer a fine variety of projects. The town marks the limit of our service area, and we travel there for projects where high standards are a given, whether homes of character or spaces tied to the world of wine and wine tourism. The climate is drier than by the sea, which changes the precautions to take: a wood floor, for example, needs well-regulated humidity to stay stable. We take these particulars into account to recommend the covering best suited to each place.",
    localFootnote:
      "In the cellars and wine-tourism reception spaces, the air is permanently laden with alcohol vapour. We favour resistant floors such as compact PVC or resin over a laminate.",
  },
]

export const enCityZoneLabels: Record<EnCity['zone'], string> = {
  'la-rochelle': 'Greater La Rochelle',
  'ile-de-re': 'Île de Ré',
  'ile-doleron': "Île d'Oléron",
  'charente-maritime': 'Charente-Maritime',
}

export function getEnCityBySlug(slug: string): EnCity | undefined {
  return enCities.find((c) => c.slug === slug)
}

/** Zone label preceded by the right English preposition. */
export function enZoneWithPrep(zone: EnCity['zone'], prep: 'of' | 'in'): string {
  return `${prep} ${enCityZoneLabels[zone]}`
}

/** Rough typical establishment descriptor based on population. */
export function enCitySizeDescriptor(pop?: number): string {
  if (!pop) return 'town'
  if (pop > 50000) return 'city'
  if (pop > 15000) return 'town'
  if (pop > 5000) return 'sizeable town'
  if (pop > 2000) return 'rural town'
  return 'small village'
}

/** Approximate project count by zone for the credibility counter. */
export function enCityProjetCount(city: EnCity): number {
  const base: Record<EnCity['zone'], number> = {
    'la-rochelle': 180,
    'ile-de-re': 95,
    'ile-doleron': 55,
    'charente-maritime': 140,
  }
  const popBonus = Math.min(Math.floor((city.population ?? 3000) / 2000), 12)
  return base[city.zone] + popBonus
}
