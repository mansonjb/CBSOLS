// EN-only FAQ content, colocated under /en (FR data left untouched).
// Faithful native-English translation of src/data/faqs.ts. Facts, figures and standards preserved.
export interface EnFaq {
  slug: string
  question: string
  metaTitle: string
  metaDescription: string
  category: string
  shortAnswer: string
  sections: { title: string; body: string }[]
  relatedFaqs: string[]
  relatedSolutions: string[]
  datePublished?: string
  dateModified?: string
}

export const enFaqs: EnFaq[] = [
  {
    slug: 'difference-moquette-contrat-particulier',
    question: 'What is the difference between contract carpet and residential carpet?',
    metaTitle: 'Contract vs Residential Carpet | CB Sols Explains',
    metaDescription: 'Contract carpet or residential carpet: what are the real differences? Standards, durability, price. CB Sols explains it simply.',
    category: 'Carpet',
    shortAnswer: 'Contract carpet is built for intensive professional use: higher usage ratings (32-33), mandatory fire certifications (Bfl-s1) and far greater mechanical resistance than residential carpet.',
    sections: [
      {
        title: 'Usage ratings: the fundamental criterion',
        body: "The main difference between contract and residential carpet lies in its European usage rating. Carpets are rated from 21 (light residential) to 34 (very intensive commercial).\n\nResidential carpet: ratings 21 to 23. Designed for a family home with limited traffic. Lifespan: 5 to 10 years depending on use.\n\nContract carpet: ratings 31 to 34. Designed for offices, hotels, shops, healthcare establishments. Resistance tested for hundreds of thousands of footfalls. Lifespan: 10 to 20 years depending on the rating and upkeep.\n\nBelow rating 31, a carpet is not certified for professional use. Laying it in a hotel or office is a regulatory non-compliance, with potential consequences for insurance in the event of a claim.",
      },
      {
        title: 'Fire certifications: mandatory in professional settings',
        body: "Residential carpet does not require any particular fire certification. For establishments open to the public (hotels, restaurants, offices, public bodies), French regulations impose a minimum fire rating.\n\nThe European Euroclass rating classes coverings from A1 (non-combustible) to F (not tested). For most public-access buildings, floor carpet must be at least Cfl-s1 or Bfl-s1 depending on the type of building and the storey.\n\nCB Sols systematically supplies fire-compliance certificates with every project. These documents are required during safety-committee inspections.",
      },
      {
        title: 'Construction and durability: what you see (and don’t)',
        body: "Visually, a contract carpet and a residential carpet can look alike. The differences are in the construction:\n\n- Higher weight (910-2000 g/m² in hotel contract vs 300-500 g/m² residential)\n- Reinforced backing (double-layer latex, jute or felt)\n- Tougher fibres (resistant nylon vs economy polyester)\n- Stain-resist and antibacterial treatments\n\nA residential carpet laid in a hotel corridor will be worn out in 2 to 3 years. The same area with an EGE Hospitality carpet rated 33 will last 10 to 15 years.",
      },
      {
        title: 'Price: a gap that is justified',
        body: "Contract carpet costs more to buy. A residential carpet can be found at 8-15 €/m² supplied. A standard office contract carpet is 35-55 €/m², and a high-end hotel carpet (EGE) 35-85 €/m².\n\nBut set against the lifespan, contract carpet is often cheaper. If a residential carpet lasts 3 years in professional use (then has to be replaced) against 12 years for a contract carpet, the annual cost is radically different.\n\nCB Sols lays contract carpet for professionals and for demanding private clients alike: on a project where the carpet has to last (a main home, a family house, a high-traffic space), contract remains the right choice. For private clients as for professionals, we do not lay residential carpet on a use that would set it up to fail. It is a matter of responsibility.",
      },
    ],
    relatedFaqs: ['duree-vie-moquette-professionnelle', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
    datePublished: '2025-06-20',
    dateModified: '2026-01-15',
  },
  {
    slug: 'pose-moquette-sur-carrelage',
    datePublished: '2025-08-08',
    dateModified: '2026-02-28',
    question: 'Can carpet be laid over existing tiles?',
    metaTitle: 'Laying Carpet Over Tiles | Expert Advice CB Sols',
    metaDescription: 'Can you lay carpet over tiles? Conditions, methods, pros and cons. Technical guide by CB Sols in Charente-Maritime.',
    category: 'Laying Technique',
    shortAnswer: 'Yes, under conditions. The tiling must be flat (2 mm tolerance under a 2 m straightedge), clean, with no loose tiles and sound joints. A surfacing levelling compound is mandatory.',
    sections: [
      {
        title: 'The conditions for laying over tiles',
        body: "Laying carpet over tiles is technically possible, but the substrate must meet several criteria:\n\n1. Flatness: the maximum tolerance is 2 mm under a 2-metre straightedge. Bowed or cracked tiles, or over-proud joints, will show through the carpet and create zones of premature abrasion.\n\n2. Soundness: every tile must be perfectly bonded. A hollow tile (one that sounds hollow when tapped) must be re-laid. A carpet over a loose tile will eventually come loose too, or even create a dangerous step.\n\n3. Cleanliness: the tiling must be degreased and free of any adhesive or residue that would prevent bonding. CB Sols carries out a clean and a bonding primer if needed.\n\n4. Joints: sound cement joints are acceptable. Cracked, loose or very wide joints must be redone. Over-proud joints can be mechanically ground down.",
      },
      {
        title: 'Fixing methods',
        body: "Two fixing methods are possible for carpet over tiles:\n\nAdhesive (the most common method in professional work): a suitable floor adhesive is applied only over the levelling compound laid beforehand. It is the strongest and most durable method, recommended for high-traffic spaces and heavy carpets.\n\nGripper rods: gripper strips are nailed or glued around the perimeter of the room. The carpet is stretched over them. This method is possible but less recommended over tiles, as the anchoring of the strips is less secure than over concrete.\n\nCB Sols determines the best method when quoting, after assessing the type of tiling and the intended use.",
      },
      {
        title: 'Do the tiles need to be removed?',
        body: "No, in most cases. Removing tiles is slow, costly, generates a lot of rubble and risks damaging the substrate. Unless the tiling is in very poor condition (multiple loose tiles, deep cracking), it is better to lay the carpet over it after preparation.\n\nThe only situation where removal is essential: if the build-up of levels (old tiling + any previous covering + new carpet) creates an unacceptable step relative to door thresholds or adjoining areas.\n\nCB Sols systematically assesses the level build-up when quoting to anticipate these problems.",
      },
      {
        title: 'The surfacing levelling compound: essential',
        body: "Even over clean, flat tiling, the joints create relief (usually 1 to 3 mm) that shows and wears prematurely under the carpet. The solution: a fine surfacing (self-levelling) compound applied over the whole tiling to create a perfectly flat surface.\n\nThis compound costs between 8 and 25 €/m² (standard P3 6-10 €/m², fibre-reinforced 12-30 €/m² over wood or heavy thicknesses). It dries in 4 to 48 hours before covering depending on the product. CB Sols always checks flatness after the compound before moving to the laying.\n\nFor projects where speed is crucial, there are ultra-fast-setting compounds (walkable in 30 minutes).",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'duree-vie-moquette-professionnelle',
    datePublished: '2025-09-15',
    dateModified: '2026-03-10',
    question: 'What is the lifespan of a professional carpet?',
    metaTitle: 'Professional Carpet Lifespan | CB Sols',
    metaDescription: 'How long does a professional carpet last? Hotel, office, public body: real lifespans by use and upkeep. CB Sols guide.',
    category: 'Carpet',
    shortAnswer: 'A well-chosen, well-maintained professional carpet lasts 8 to 15 years depending on use. In hotels: 8 to 12 years in bedrooms, 5 to 8 years in corridors. In a rating-33 office: 12 to 15 years.',
    sections: [
      {
        title: 'Lifespans by sector and type of use',
        body: "The lifespan of a professional carpet varies considerably with traffic intensity:\n\nHotels, bedrooms (rating 33, 910 g/m² minimum weight): 8 to 12 years with regular upkeep. High-occupancy rooms (90%+) in the luxury segment are renewed more often to maintain image.\n\nHotels, corridors (rating 33-34, high resistance): 5 to 8 years. Corridors take far heavier traffic than bedrooms: housekeeping trolleys, luggage, constant to-and-fro.\n\nOffices, open-plan (rating 33, tiles): 10 to 15 years with weekly vacuuming and annual hot-water extraction. Tiles allow the most worn areas to be replaced individually.\n\nCinemas and performance halls (rating 34): 12 to 18 years. Despite heavy traffic, footfall is concentrated into short time slots and cleaning is regular.",
      },
      {
        title: 'The factors that lengthen or shorten the lifespan',
        body: "Upkeep is the number one factor. A poorly maintained carpet (irregular vacuuming, untreated stains, no hot-water extraction) can have its lifespan halved. Conversely, a rigorous maintenance programme significantly extends its life.\n\nThe chosen product is decisive. A higher weight (1100 g/m² vs 700 g/m²) makes a noticeable difference in a hotel corridor. So does the fibre type: nylon 6.6 is more abrasion-resistant than nylon 6, itself superior to polyester.\n\nThe substrate and the laying influence how it holds up over time. A poorly glued carpet comes loose at the edges and forms ripples, causes of premature wear and trip hazards. CB Sols always prepares the substrate and chooses the right adhesive to guarantee lasting hold.\n\nLocal climate also plays a role in Charente-Maritime. High humidity in coastal areas can affect the carpet backing if the subfloor is not perfectly dry.",
      },
      {
        title: 'The signs that tell you it is time to replace',
        body: "How do you know when a carpet needs replacing? Several signs are unmistakable:\n\nMatting: the fibres are flattened and no longer recover after vacuuming. The carpet loses its pile and looks like worn felt. At this stage, no upkeep can restore the look.\n\nPersistent stains: stains that resist professional hot-water extraction are generally permanent. They indicate the fibres are chemically degraded.\n\nVery localised wear zones (doorways, in front of chairs): in tiled areas, those tiles alone can be replaced. In broadloom, you must judge whether laying a replacement strip is aesthetically acceptable.\n\nBonding problems: edge lifting, blisters, ripples. These structural defects compromise safety and generally cannot be recovered.",
      },
      {
        title: 'Planning the replacement to minimise impact',
        body: "For hotels and establishments in operation, carpet replacement is planned, not endured. CB Sols advises:\n\nRun an audit every 5 years to assess condition and anticipate replacements. CB Sols carries out these audits free of charge for its hotel clients.\n\nPlan the work in low season. For a Charente-Maritime hotel, the ideal window is November to February.\n\nConsider phased replacement: some hotels prefer to renew a third of the rooms every 3 to 4 years rather than all at once. This approach spreads the investment and reduces the impact on activity.\n\nBudget the replacement in advance. CB Sols can draw up a multi-year budget estimate to help you set aside for this investment.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['moquette-hotel'],
  },
  {
    slug: 'sol-pvc-cuisine-professionnelle-norme',
    datePublished: '2025-10-30',
    dateModified: '2026-03-25',
    question: 'What are the standards for vinyl flooring in a professional kitchen?',
    metaTitle: 'Professional Kitchen Vinyl Flooring Standards | CB Sols',
    metaDescription: 'What standards for vinyl flooring in a professional kitchen? HACCP, R11 anti-slip, fire rating, heat-welded seams. CB Sols explains.',
    category: 'Vinyl Flooring',
    shortAnswer: 'A professional-kitchen vinyl floor must be rated R10 or R11 (anti-slip), resistant to grease and disinfectants, heat-welded (zero seams) and compliant with HACCP requirements. Gerflor Mipolam Granit and Taralay Premium are the benchmarks.',
    sections: [
      {
        title: 'The HACCP standard and its implications for the floor',
        body: "HACCP (Hazard Analysis Critical Control Point) is the food-safety management system mandatory in all professional catering establishments. For floors, it requires:\n\n- An impermeable covering: no porosity that would let bacteria take hold\n- A smooth or lightly textured surface: effectively cleanable with no retention zones\n- No wide or accessible joints: cement joints are a source of bacterial contamination\n- Resistance to cleaning and disinfection products: concentrated alkalis, chlorinated disinfectants, acids\n\nHeat-welded sheet vinyl meets all these requirements. It is the HACCP solution par excellence: no visible joint, 100% impermeable, resistant to the products commonly used in kitchens.\n\nTiling with epoxy joints can also be HACCP-compliant, but maintaining the relief is more demanding. Tiling with cement joints is technically non-compliant with HACCP.",
      },
      {
        title: 'The anti-slip classification: required by labour law',
        body: "French labour law (articles R4214-1 et seq.) requires anti-slip floor coverings in premises with a slip risk. Professional kitchens are classed as high-risk premises.\n\nThe German R classification (DIN 51130) is the reference: R9 (low risk), R10 (moderate risk), R11 (high risk with oils and grease), R12 (very high risk).\n\nFor the different zones of a kitchen:\n- Dining room (dry zone): R9 minimum\n- Standard kitchen: R10 minimum\n- Frying zone, wash-up, hot wet zone: R11 mandatory\n- Vegetable unpacking and washing zone: R11-R12\n\nCB Sols systematically selects R11-minimum products for all professional kitchens. A slippery kitchen floor is a workplace accident waiting to happen.",
      },
      {
        title: 'Heat welding: technique and necessity',
        body: "Heat welding is a technique that creates a watertight junction between two sheets of vinyl flooring by melting a weld cord (of the same composition as the floor) into the groove machined between the two sheets.\n\nWhy it is mandatory in a kitchen: without a weld, the junction between two sheets is a joint which, however tight, lets liquids, grease and micro-organisms seep under the covering. In a professional kitchen, subject to high-pressure cleaning, that seepage is inevitable and rapid.\n\nHeat welding requires specific equipment (a welding gun and calibrated nozzles) and technical training. CB Sols trains its fitters in this technique and carries out the welding on all its professional-kitchen projects.\n\nCoved skirtings (the welded vinyl running 10 to 15 cm up the walls) complete the watertightness by eliminating the floor/wall junction, another critical contamination point.",
      },
      {
        title: 'The benchmark products and their certifications',
        body: "Three families of products suit professional kitchens:\n\nGerflor Mipolam Granit: homogeneous vinyl, standard R10 rating (R11 on request), P2 chemical resistance, NSF certification for food spaces. A wide range of colours. Lifespan: 20-30 years.\n\nGerflor Taralay Premium Contract: homogeneous vinyl, R10/R11 rating, certified for catering venues, very low VOC emissions (Indoor Air certification). Comparable lifespan.\n\nGerflor Taralay Impression Compact: heterogeneous vinyl, R10, high chemical resistance, many designs. A good option for kitchens where looks come first with sufficient resistance.\n\nCB Sols supplies all three brands and can show you samples at the showroom or during an on-site visit when quoting.",
      },
    ],
    relatedFaqs: ['pose-moquette-sur-carrelage'],
    relatedSolutions: ['sol-pvc-restaurant'],
  },
  {
    slug: 'devis-revetement-sol-gratuit',
    datePublished: '2025-12-02',
    dateModified: '2026-04-05',
    question: 'How do you get a free quote for your floor covering?',
    metaTitle: 'Free Floor Covering Quote | Reply Within 48h',
    metaDescription: 'How to get a free quote for your floor covering? The CB Sols process, timescales, what is included. Quote within 48h in Charente-Maritime.',
    category: 'Quote & Process',
    shortAnswer: 'CB Sols travels free of charge across Charente-Maritime to measure, assess the substrate and provide a costed quote within 48 hours. Get in touch by phone, form or email with your plans.',
    sections: [
      {
        title: 'The CB Sols process: from first contact to quote',
        body: "Getting a quote with CB Sols is simple and quick. Here is the process:\n\n1. First contact: call 06 85 05 28 80, fill in the form at cbsols.fr/contact or send an email to contact@cbsols.fr with a description of your project. If you have plans or photos, attach them.\n\n2. Booking an appointment: CB Sols calls you back within 24 hours on weekdays to arrange an on-site visit. For projects with precise plans, an estimate can be provided by email before the visit.\n\n3. On-site visit: Valentin Prévoteau or a member of the team travels free of charge across the whole of Charente-Maritime. The visit takes 30 to 60 minutes depending on the complexity. We measure, assess the condition of the substrate, and discuss your aesthetic and technical expectations.\n\n4. Delivery of the quote: the quote is sent by email within 48 hours of the visit. It is itemised line by line: supply, any removal, substrate preparation, laying and finishes. Nothing hidden.",
      },
      {
        title: 'What a CB Sols quote includes',
        body: "A CB Sols quote is complete and transparent. It includes:\n\n- A precise description of the works (areas, products, methods)\n- The ex-VAT detail of each item: material supply, removal of the old covering (if applicable), substrate preparation (levelling compound, primer), laying, welding (if applicable), finishes (skirtings, thresholds)\n- The inc-VAT price with the applicable VAT rate stated (20% professional, 10% residential renovation on homes over 2 years old)\n- The completion timescales and the team's availability date\n- The validity period of the quote (generally 3 months)\n\nThe quote carries no obligation. You can ask for alternative products or methods: CB Sols systematically presents at least two range options.",
      },
      {
        title: 'Can you have an estimate without a visit?',
        body: "Yes, in some cases. If you have precise plans with areas in m², photos of the existing substrate and information on the type of covering wanted, CB Sols can draw up a budget estimate by email or phone.\n\nThis estimate is given for guidance with a range (+/- 20% depending on the real condition of the substrate). It lets you confirm the project is feasible within your budget before arranging a visit.\n\nFor large projects (hotels, large office areas), the on-site visit is always necessary for a precise, binding quote.\n\nTo send your plans: contact@cbsols.fr or via WhatsApp on 06 85 05 28 80.",
      },
      {
        title: 'The service area: all of Charente-Maritime and beyond',
        body: "CB Sols works across the whole of Charente-Maritime (département 17): La Rochelle and its conurbation, Île de Ré, Île d'Oléron, Rochefort, Saintes, Royan, Jonzac and every town in the département.\n\nFor large projects (hotels, campsites, public bodies), CB Sols also travels to neighbouring départements: Charente (16), Vendée (85), Gironde (33). The travel logistics are built into the quote with no surprises.\n\nDistance is no obstacle: CB Sols has carried out projects along the whole Atlantic coast. Île de Ré, Île d'Oléron and the island sites are part of our usual area of expertise.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'sol-pvc-restaurant'],
  },
  {
    slug: 'moquette-allergenes-entretien',
    datePublished: '2026-01-18',
    dateModified: '2026-04-12',
    question: 'Carpet and allergens: what do you need to know about upkeep?',
    metaTitle: 'Carpet & Allergens | Hygiene, Upkeep | CB Sols',
    metaDescription: 'Carpet and allergies: myths, the scientific reality and suitable upkeep. CB Sols guide to enjoying a healthy carpet in Charente-Maritime.',
    category: 'Carpet',
    shortAnswer: 'Contrary to popular belief, carpet is the only floor covering able to trap fine particles (dust, pollen, allergens) instead of letting them circulate in the air. With suitable upkeep (weekly HEPA vacuuming, hot-water extraction every 2 to 3 years), it is perfectly suited to allergy sufferers.',
    sections: [
      {
        title: 'Why carpet is in fact the allergy sufferer’s ally',
        body: "The received idea that carpet is harmful to allergy sufferers comes from poorly maintained, low-end residential carpet. Recent studies (notably the DAAB study in Germany and several European scientific publications) show the opposite: carpet traps fine particles at floor level instead of letting them circulate in the air.\n\nOn a hard floor (tiles, wood, vinyl), every movement sends the dust, pollen and dust mites on the floor back into suspension. On a carpet, these particles are held in the fibres, where the vacuum cleaner can capture them for good.\n\nThe measured result: the air in a well-maintained carpeted room contains on average half as many suspended fine particles as an equivalent room with a hard floor.",
      },
      {
        title: 'The right upkeep for a healthy carpet',
        body: "For a carpet to fully play its role as a passive filter, upkeep follows three principles:\n\n1. Weekly HEPA vacuuming: a vacuum fitted with a HEPA filter (standard EN 1822) captures 99.97% of particles of 0.3 microns. Vacuum each room once a week, twice in the bedroom if you are an allergy sufferer.\n\n2. Hot-water-extraction cleaning every 2 to 3 years: this deep clean extracts the soiled water and the embedded particles. CB Sols offers an annual or biennial service depending on your needs. Drying 4 to 6 hours.\n\n3. Preventive treatment: professional carpets (EGE ranges, rating 33) are factory-treated against dust mites and bacteria. This treatment stays active for 10 to 15 years.",
      },
      {
        title: 'The right carpet choice for a bedroom',
        body: "For a bedroom, especially a child's room or the room of an allergy sufferer, we recommend a carpet that is:\n\n- Tufted loop or short-cut velvet pile (long fibres hold more dust that is hard to extract)\n- With a certified anti-mite and antibacterial treatment\n- Weight between 700 and 1100 g/m² (a compromise of comfort / ease of vacuuming)\n- Underfloor-heating compatible if applicable\n\nThe EGE Hospitality and EGE Highline ranges meet these criteria and are the references we lay for hoteliers and private clients alike.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'pvc-salle-de-bains-particulier',
    datePublished: '2026-02-22',
    dateModified: '2026-04-20',
    question: 'Can you lay vinyl in a bathroom (warmer, less slippery)?',
    metaTitle: 'Vinyl Flooring in a Bathroom | Watertight, Anti-Slip | CB Sols',
    metaDescription: 'Vinyl flooring in a bathroom: 100% watertight, anti-slip R10/R11, warm underfoot. CB Sols guide for private clients in Charente-Maritime.',
    category: 'Vinyl Flooring',
    shortAnswer: 'Yes. Professional sheet vinyl with heat-welded seams (Gerflor Taralay, objectflor) is 100% watertight, anti-slip R10 or R11 depending on the range, and noticeably warmer than tiles. It is an excellent alternative for a private bathroom.',
    sections: [
      {
        title: 'Why vinyl makes sense in a bathroom',
        body: "Modern vinyl has nothing in common with low-end lino. The professional ranges we lay in bathrooms offer three key advantages over tiles:\n\n1. Thermal comfort: vinyl is noticeably less cold to bare feet than tiles or stone. Its thermal conductivity is about three times lower. Ideal stepping out of the shower or bath.\n\n2. Safety: the bathroom ranges are rated R10 or R11 (anti-slip in the presence of water). For comparison, standard tiling is R9 or less once wet.\n\n3. Perfect watertightness: laid in sheet (rolls) with heat-welded seams, vinyl is 100% watertight. No cement joints that blacken over time, no risk of seepage under the shower.",
      },
      {
        title: 'The ranges suited to a private bathroom',
        body: "For a private bathroom, two main options:\n\nSheet vinyl (rolls): the safest solution, especially with a walk-in shower. Gerflor Taralay Premium or objectflor expona: 2-3 mm thick, R10/R11, invisible heat-welded seams, lifespan 15-28 years.\n\nClick LVT planks: for a bathroom with a shower tray or bath (no walk-in shower), you can use premium LVT planks. Very realistic wood or stone look, faster laying. Gerflor Creation 55 or objectflor LooseLay: lifespan 20+ years, but watertightness depends on the quality of the junctions.\n\nWe assess at the visit which solution is best suited to your bathroom.",
      },
      {
        title: 'Substrate preparation and laying',
        body: "A private bathroom is prepared rigorously:\n\n1. Any removal of the old tiling if too uneven (rare; vinyl is often laid over it after a levelling compound)\n2. A P3 fibre-reinforced surfacing compound to neutralise the joints and create a perfectly flat surface (2 mm tolerance under a 2 m straightedge)\n3. A suitable bonding primer\n4. Glued-down laying of the sheet vinyl or floating click-laying of the LVT\n5. Heat welding of the seams (sheet vinyl only) with a weld cord matched to the colour\n6. Finishes: coved skirting (5 to 10 cm up the wall) or a fitted skirting, sanitary silicone seal around the shower/bath\n\nAllow 1 to 2 days depending on the area. The bathroom can be used 24 hours after laying.",
      },
    ],
    relatedFaqs: ['sol-pvc-cuisine-professionnelle-norme', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['sol-pvc-hotel', 'sol-pvc-restaurant'],
  },
]

export function getEnFaqBySlug(slug: string): EnFaq | undefined {
  return enFaqs.find((f) => f.slug === slug)
}
