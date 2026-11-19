// EN-only service content, colocated under /en (FR data files left untouched).
export interface EnService {
  slug: string
  name: string
  shortName: string
  aboutLabel: string // used in "About {aboutLabel}, our clear answers."
  hasShowroom: boolean
  description: string
  longDescription: string
  benefits: string[]
  useCases: string[]
  brands: string[]
  geoVerb: string
  metaTitle: string
  metaDescription: string
  faqs: { question: string; answer: string }[]
}

export const enServices: EnService[] = [
  {
    slug: 'pose-moquette',
    name: 'Carpet Fitting',
    shortName: 'Carpet',
    aboutLabel: 'carpet',
    hasShowroom: true,
    description: 'Bespoke high-end carpet, fitted to a professional standard for homes and businesses.',
    longDescription:
      'Carpet remains the floor covering that offers the best acoustic and thermal comfort. The only covering able to stop fine particles from dispersing, it suits living spaces, hotels and offices alike. CB Sols carefully selects the finest collections from its partner brands: EGE at the top of the range, rounded out by other references chosen for the specifics of each project.',
    benefits: [
      'Outstanding acoustic comfort',
      'Natural thermal insulation',
      'Traps fine particles',
      'A vast choice of textures and colours',
      'Certified professional durability',
    ],
    useCases: ['Hotel bedrooms', 'Master suites', 'Children’s rooms', 'Libraries', 'Dressing rooms', 'Meeting rooms', 'Offices', 'Staircases', 'Hallways'],
    brands: ['EGE'],
    geoVerb: 'Carpet fitting in',
    metaTitle: 'Carpet Fitting La Rochelle | Free Quote Within 48h',
    metaDescription:
      'Professional carpet fitting in La Rochelle and the surrounding area. CB Sols: specialist craftsman for over 28 years, free quote. Hotels, offices, private homes.',
    faqs: [
      { question: 'Can you fit carpet over an existing floor?', answer: 'In most cases, yes. We assess the substrate first: a sound, flat, dry floor can often be carpeted directly, while an uneven or damp one is prepared beforehand. We tell you plainly after the site visit.' },
      { question: 'Is carpet suitable for a high-traffic professional space?', answer: 'Absolutely. We fit certified contract-grade carpet (classes 33 to 34) built for intensive footfall in hotels, offices and meeting rooms, with the wear resistance to match.' },
      { question: 'How long does a carpet installation take?', answer: 'A standard room is usually fitted in a day. Larger or stair projects are scheduled room by room so your space stays usable throughout.' },
    ],
  },
  {
    slug: 'sol-pvc-lames-dalles',
    name: 'LVT Planks & Tiles',
    shortName: 'LVT Flooring',
    aboutLabel: 'LVT flooring',
    hasShowroom: true,
    description: 'High-end vinyl planks and tiles, hard-wearing and good-looking. For homes and businesses.',
    longDescription:
      'The latest generation of vinyl planks and tiles combines the look of wood or stone with unmatched resistance to water and wear. Ideal for shops, homes and shared spaces, they stand up to heavy footfall while staying easy to maintain.',
    benefits: [
      'Resistant to water and damp',
      'Easy to maintain',
      'Very realistic wood or stone look',
      'Fast fitting with no heavy works',
      'Suited to intensive footfall',
    ],
    useCases: ['Detached houses', 'Bedrooms', 'Bathrooms', 'Shops', 'Commercial kitchens', 'Hallways', 'Open-plan offices', 'Quick refurbishments'],
    brands: ['Gerflor', 'objectflor'],
    geoVerb: 'LVT flooring in',
    metaTitle: 'LVT Planks & Tiles La Rochelle | Fitting & 48h Quote',
    metaDescription:
      'Vinyl plank and tile flooring fitted in La Rochelle. CB Sols installs carefully selected brands (Gerflor, objectflor) for businesses and private homes. Free quote.',
    faqs: [
      { question: 'Is LVT flooring genuinely waterproof?', answer: 'The planks and tiles themselves are water-resistant, which is why they work so well in bathrooms and kitchens. For fully wet rooms we recommend welded sheet vinyl instead, and we will advise you per room.' },
      { question: 'Can LVT be laid over tiles?', answer: 'Often yes, once the joints are filled and the surface levelled. A sound, flat substrate is the key to a flawless, long-lasting finish.' },
      { question: 'How realistic is the wood or stone effect?', answer: 'Modern LVT reproduces grain, knots and texture with embossed surfaces that look and feel convincing. You can see and touch samples at our Villedoux showroom.' },
    ],
  },
  {
    slug: 'sol-pvc-les',
    name: 'Sheet Vinyl Flooring',
    shortName: 'Sheet Vinyl',
    aboutLabel: 'sheet vinyl flooring',
    hasShowroom: true,
    description: 'Roll vinyl flooring, carefully fitted with skirting and heat-welded seams. For homes and businesses.',
    longDescription:
      'Sheet vinyl (roll vinyl) is the reference floor covering for demanding professional spaces. Laid as a continuous surface with heat-welded seams, it guarantees perfect watertightness: ideal for kitchens, treatment rooms and shared spaces that need intensive cleaning.',
    benefits: [
      'No seams = maximum hygiene',
      'Watertight heat-welded joints',
      'Chemical and bacterial resistance',
      'Wide choice of colours and patterns',
      'Long life in professional settings',
    ],
    useCases: ['Detached houses', 'Commercial kitchens', 'Healthcare premises', 'Laboratories', 'Shared hallways', 'Lecture halls'],
    brands: ['Gerflor', 'objectflor'],
    geoVerb: 'Sheet vinyl in',
    metaTitle: 'Sheet Vinyl Flooring La Rochelle | Pro Fitting, Free Quote',
    metaDescription:
      'Sheet vinyl flooring fitted in La Rochelle by CB Sols. Roll vinyl with heat-welded seams, ideal for healthcare professionals and public bodies.',
    faqs: [
      { question: 'Why choose sheet vinyl over planks for a clinic?', answer: 'Heat-welded sheet vinyl has no open joints, so liquids and bacteria cannot get in. That watertight, continuous surface is exactly what healthcare and food-prep spaces require.' },
      { question: 'Can the vinyl be coved up the wall?', answer: 'Yes. We can form a coved skirting that runs the vinyl up the wall for a seamless, easy-to-clean junction, standard practice in clinical and commercial kitchens.' },
      { question: 'How durable are the welded seams?', answer: 'Done properly with a matching weld cord, the seam is as strong as the sheet itself and stays watertight for the life of the floor.' },
    ],
  },
  {
    slug: 'tapis-sur-mesure',
    name: 'Bespoke Rugs',
    shortName: 'Bespoke Rugs',
    aboutLabel: 'bespoke rugs',
    hasShowroom: true,
    description: 'Made-to-measure decorative rugs with premium finishes. For hotels, prestige spaces and discerning homes.',
    longDescription:
      'A bespoke rug is the signature of a prestige space. CB Sols works with designers and interior architects to create one-off pieces: shape, colour, material and edge finish are all customisable. Ideal for hotel lobbies, fine-dining restaurants and luxury homes.',
    benefits: [
      'Dimensions and shape to the millimetre',
      'Unlimited choice of colours and materials',
      'Bordered, fringed or whipped edges',
      'Logo or motif possible',
      'Wear rating matched to the use',
    ],
    useCases: ['Detached houses', 'Hotel lobbies', 'Fine-dining restaurants', 'Function rooms', 'Luxury homes', 'Premium boutiques'],
    brands: ['EGE', 'CB Sols bespoke workshop'],
    geoVerb: 'Bespoke rugs in',
    metaTitle: 'Bespoke Rugs La Rochelle | Craftsman-Made',
    metaDescription:
      'Made-to-measure decorative rugs in La Rochelle. CB Sols creates one-off rugs for hotels, restaurants and prestige spaces. Tailored quote.',
    faqs: [
      { question: 'Can you make a rug to an unusual shape?', answer: 'Yes. We cut and finish to any shape and size, round, curved or following a room’s exact footprint, with the edge finish of your choice.' },
      { question: 'Can you weave in a logo or motif?', answer: 'We can incorporate a logo, border or custom motif to tie the rug to your brand or interior scheme. Share the artwork and we will advise on the best technique.' },
      { question: 'Which edge finishes are available?', answer: 'Bordered, fringed or whipped (serged) edges, each changing the look and feel of the piece. We will show you samples to choose from.' },
    ],
  },
  {
    slug: 'tapis-de-proprete',
    name: 'Entrance Matting',
    shortName: 'Entrance Mats',
    aboutLabel: 'entrance matting',
    hasShowroom: true,
    description: 'Entrance mats for businesses and homes, protecting your interior floors and keeping your image sharp.',
    longDescription:
      'Entrance matting is the first point of contact with your space. It protects your interior floors, traps up to 80% of dirt at the door and contributes to the image of your premises. CB Sols offers made-to-measure solutions cut to the exact dimensions of your entrance, with an integrated logo possible.',
    benefits: [
      'Traps 80% of dirt right at the door',
      'Protects your interior floor coverings',
      'Made-to-measure dimensions and shapes',
      'Company logo can be integrated',
      'Professional cleaning available',
    ],
    useCases: ['Detached houses', 'Hotel entrances', 'Shops', 'Offices & businesses', 'Public bodies', 'Residences'],
    brands: ['Romus'],
    geoVerb: 'Entrance matting in',
    metaTitle: 'Bespoke Entrance Matting La Rochelle | 48h Quote',
    metaDescription:
      'Professional entrance matting in La Rochelle. Made to measure, logo possible. CB Sols protects your floors and keeps your premises looking sharp.',
    faqs: [
      { question: 'What size should an entrance mat be?', answer: 'As a rule, long enough for several steps so shoes are wiped clean before reaching your interior floor. We measure your entrance and recommend the right run.' },
      { question: 'Can you add our logo?', answer: 'Yes, we can integrate your company logo into the mat, a simple touch that sharpens the look of a reception or shopfront.' },
      { question: 'Do you offer ongoing cleaning?', answer: 'We can arrange professional cleaning of your matting so it keeps trapping dirt and looking its best over time.' },
    ],
  },
  {
    slug: 'nettoyage-moquette',
    name: 'Carpet Cleaning',
    shortName: 'Cleaning',
    aboutLabel: 'carpet cleaning',
    hasShowroom: false,
    description: 'Professional hot-water-extraction cleaning that brings carpets back to life. Homes and businesses.',
    longDescription:
      'Professional cleaning by injection-extraction is the most effective way to renew your carpets without replacing them. CB Sols works with professional equipment that injects a cleaning solution and then draws it back out along with the ground-in dirt. The result: carpet as good as new, dry in a few hours.',
    benefits: [
      'Removes deep stains',
      'Disinfects and deodorises',
      'Fast drying (2 to 4 hours)',
      'Extends carpet life by 30 to 50%',
      'Stain-guard treatment available',
    ],
    useCases: ['Hotels between seasons', 'Offices', 'Conference rooms', 'Residences', 'Premium campsites'],
    brands: [],
    geoVerb: 'Carpet cleaning in',
    metaTitle: 'Carpet Cleaning La Rochelle | Hot-Water Extraction',
    metaDescription:
      'Professional carpet cleaning in La Rochelle by injection-extraction. CB Sols restores the look of your carpets. Fast turnaround, free quote.',
    faqs: [
      { question: 'How long does the carpet take to dry?', answer: 'Typically 2 to 4 hours with our extraction equipment, which pulls most of the moisture back out. Good airflow speeds it up further.' },
      { question: 'Will cleaning remove old stains?', answer: 'Deep extraction lifts most ground-in dirt and many stains. Some set-in marks cannot be fully guaranteed, and we will tell you honestly what to expect before we start.' },
      { question: 'Can you work without closing our business?', answer: 'Yes. We schedule around your activity, zone by zone or out of hours, so hotels and offices keep running while we clean.' },
    ],
  },
  {
    slug: 'revetement-sol',
    name: 'Floor Covering',
    shortName: 'Floor Covering',
    aboutLabel: 'floor covering',
    hasShowroom: true,
    description: 'Complete floor-covering expertise: advice, supply, fitting and maintenance. Homes and businesses.',
    longDescription:
      'For over 28 years, CB Sols has guided private and professional clients across Charente-Maritime through every floor-covering project. From selecting materials in the showroom through to fitting and maintenance, CB Sols is your single point of contact for a project done right from start to finish.',
    benefits: [
      'A single point of contact from start to finish',
      'Showroom with 500+ samples',
      'Free quote within 48h',
      'Fitting by qualified craftsmen',
      'Ten-year structural guarantee',
    ],
    useCases: ['Houses and flats', 'Offices and shops', 'Hotels and restaurants', 'Public bodies', 'New-build and refurbishment'],
    brands: ['EGE', 'Gerflor', 'objectflor'],
    geoVerb: 'Floor covering in',
    metaTitle: 'Floor Covering La Rochelle | Free Quote Within 48h',
    metaDescription:
      'Floor covering fitted in La Rochelle by CB Sols. Specialist for over 28 years in Charente-Maritime: carpet, vinyl, rugs. Free quote, fast turnaround.',
    faqs: [
      { question: 'Do you handle the project end to end?', answer: 'Yes. From showroom advice and material selection through to fitting and later maintenance, you deal with one team throughout, no juggling trades.' },
      { question: 'How fast can I get a quote?', answer: 'We aim to return a free, detailed quote within 48 hours of understanding your project.' },
      { question: 'Do you cover new-build and refurbishment alike?', answer: 'Both. We work on fresh construction and on renovation projects, for homes, businesses and public bodies across Charente-Maritime.' },
    ],
  },
  {
    slug: 'salle-cinema',
    name: 'Home Cinema Rooms',
    shortName: 'Home cinema',
    aboutLabel: 'the home cinema room',
    hasShowroom: false,
    description: 'Acoustic and visual fit-out for private cinema rooms and high-end home cinemas.',
    longDescription:
      'A cinema room demands a floor that absorbs impact noise, does not reflect the light of the screen and withstands frequent footfall around fixed seating. We install high-density carpet (classes 33-34) with a reinforced acoustic underlay and dark finishes suited to projection. CB Sols works on private home cinemas in high-end residences and on professional screening rooms.',
    benefits: [
      'Optimal acoustic absorption (-15 to -25 dB of impact noise)',
      'Dark, anti-glare finishes for projection',
      'Holds perfectly under fixed seats and recliners',
      'Muted colours that do not distract the eye',
      'Reinforced underlay for lasting comfort',
    ],
    useCases: ['Private home cinemas', 'Residential screening rooms', 'Hotel media spaces', 'Performance rooms', 'Auditoriums'],
    brands: ['EGE'],
    geoVerb: 'Home cinema flooring in',
    metaTitle: 'Home Cinema Flooring La Rochelle | Acoustic Carpet',
    metaDescription:
      'Flooring for cinema rooms and home cinemas in La Rochelle. CB Sols: high-density acoustic carpet, anti-glare finishes, reinforced underlay. Free quote.',
    faqs: [
      { question: 'Why carpet rather than hard flooring in a cinema room?', answer: 'Carpet with an acoustic underlay soaks up impact noise and tames reflections, so the sound you hear is the sound from the speakers, not the room. It also kills screen glare.' },
      { question: 'What colours work best?', answer: 'Deep, muted tones. Dark anti-glare finishes stop the floor bouncing screen light back at the audience and keep the eye on the picture.' },
      { question: 'Can the floor take fixed recliner seating?', answer: 'Yes. We specify high-density contract carpet that holds its structure under fixed seats and reclining chairs without crushing.' },
    ],
  },
  {
    slug: 'coin-lecture',
    name: 'Reading Nooks',
    shortName: 'Reading nook',
    aboutLabel: 'the reading nook',
    hasShowroom: false,
    description: 'Cosy, acoustically controlled reading spaces for hotels, residences and private libraries.',
    longDescription:
      'A good reading nook is felt as much as it is seen. The floor should absorb footsteps and ambient noise, offer warmth to the touch and the eye, and last. CB Sols selects wool or bouclé velvet carpets for residential and hotel reading spaces, literary corridors, reading lounges, private libraries and boutique-hotel mezzanines. A bespoke rug can be combined to anchor the zone.',
    benefits: [
      'Acoustic comfort that aids concentration',
      'Warmth to the touch and the eye',
      'Colours and textures that calm',
      'A zone defined by a bespoke rug',
      'Solutions suited to high-end spaces',
    ],
    useCases: ['Hotel reading lounges', 'Private libraries', 'Suite mezzanines', 'Residential reading nooks', 'High-end study spaces'],
    brands: ['EGE', 'CB Sols bespoke rug workshop'],
    geoVerb: 'Reading nooks in',
    metaTitle: 'Reading Nook Flooring La Rochelle | Bespoke Fit-Out',
    metaDescription:
      'Reading spaces and nooks created in La Rochelle. Soft carpet, bespoke rugs, a cosy feel and controlled acoustics. CB Sols, free quote.',
    faqs: [
      { question: 'What makes a floor right for a reading space?', answer: 'Softness and quiet. A wool or bouclé velvet carpet absorbs footsteps and ambient noise, giving the calm a reading corner needs, with warmth underfoot.' },
      { question: 'Can you define the nook within a larger room?', answer: 'Yes. A bespoke rug laid over the main floor is an elegant way to mark out and anchor a reading zone inside an open space.' },
      { question: 'Is this only for hotels?', answer: 'Not at all. We create reading nooks in private homes and libraries as readily as in hotels and high-end residences.' },
    ],
  },
]

export function getEnServiceBySlug(slug: string): EnService | undefined {
  return enServices.find((s) => s.slug === slug)
}
