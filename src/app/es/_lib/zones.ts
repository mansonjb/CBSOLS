// EN-only zone content, colocated under /en (FR data left untouched).
import type { EsCity } from './cities'

export type ZoneKey = 'la-rochelle' | 'ile-de-re' | 'ile-doleron' | 'charente-maritime'

export interface EsZoneContent {
  key: ZoneKey
  label: string
  photo: string
  tagline: string
  specificsTitle: string
  specificsBody: string
  challenges: { label: string; desc: string }[]
  testimonial: { quote: string; author: string }
  projectHighlights: { title: string; sector: string; year: string; img: string; desc: string }[]
  zoneFaq: { q: string; a: string }[]
  typicalEstablishments: string[]
}

export const esZones: Record<ZoneKey, EsZoneContent> = {
  'la-rochelle': {
    key: 'la-rochelle',
    label: 'Gran La Rochelle',
    photo: '/images/restaurant-etoile-real.webp',
    tagline: 'Respuesta rápida desde Villedoux, a 10 min del centro.',
    specificsTitle: 'Las particularidades de los edificios de La Rochelle',
    specificsBody:
      "La Gran La Rochelle mezcla edificios antiguos de piedra (casas señoriales, bloques del puerto) con construcción reciente en los parques empresariales. El parque histórico tiene suelos irregulares, a veces húmedos, que exigen una preparación cuidadosa del soporte. En la costa, la proximidad del océano requiere materiales que toleren bien la humedad ambiental. Recomendamos mantas técnicas adecuadas, ventilación del soporte cuando hace falta y productos de colocación compatibles con las condiciones costeras.",
    challenges: [
      { label: 'Edificios antiguos de piedra', desc: 'Suelos irregulares; a menudo se requiere una capa niveladora reforzada con fibra antes de colocar.' },
      { label: 'Humedad costera', desc: 'Productos de colocación y mantas específicos para ambientes marinos.' },
      { label: 'Proyectos urbanos', desc: 'Acceso para aparcar, horarios de tiendas, propiedad horizontal: logística adaptada.' },
      { label: 'Alta densidad de edificios públicos', desc: 'Hoteles, restaurantes, oficinas: normativa contra incendios M3/M4 gestionada.' },
    ],
    testimonial: {
      quote:
        'Un equipo puntual, proyecto entregado a tiempo pese a la temporada alta. La visita previa a la sala de exposición nos ayudó mucho a elegir el material adecuado para nuestra clientela.',
      author: 'Hostelería · La Rochelle',
    },
    projectHighlights: [
      { title: 'Restaurante gastronómico con 3 estrellas', sector: 'Alta cocina', year: '2025', img: '/images/restaurant-etoile-real.webp', desc: 'Moqueta a medida coordinada con el esquema interior.' },
      { title: 'Restaurante Gaya', sector: 'Restaurante', year: '2025', img: '/images/restaurant-gaya.webp', desc: 'Reforma completa del comedor principal.' },
      { title: 'Oficinas en Charente-Maritime', sector: 'Comercial', year: '2024', img: '/images/moquette-bureau-real.webp', desc: 'Losetas de moqueta de alta resistencia, colocadas en local ocupado.' },
    ],
    zoneFaq: [
      {
        q: '¿Trabajan en los edificios antiguos del centro de La Rochelle?',
        a: "Sí, es incluso una parte importante de lo que hacemos. Los edificios del centro histórico tienen a menudo suelos de madera o soleras antiguas que necesitan un diagnóstico antes de colocar. Realizamos ese diagnóstico de forma gratuita al elaborar el presupuesto.",
      },
      {
        q: '¿Pueden colocar sin interrumpir la actividad de una tienda?',
        a: 'Sí. Para restaurantes, hoteles y tiendas de La Rochelle, ofrecemos trabajo en local ocupado: colocación por zonas, en rotación o en horas de poca afluencia. Las losetas de moqueta son especialmente adecuadas para este tipo de proyecto.',
      },
    ],
    typicalEstablishments: [
      'Hoteles del Vieux-Port',
      'Restaurantes gastronómicos',
      'Oficinas y sedes sociales',
      'Estudios de arquitectura',
      'Residencias de prestigio',
      'Clínicas y consultas médicas',
    ],
  },

  'ile-de-re': {
    key: 'ile-de-re',
    label: 'Île de Ré',
    photo: '/images/tapis-hotel-baronnie.webp',
    tagline: 'Un artesano de Ré, a 20 min por el puente desde Villedoux.',
    specificsTitle: 'Lo que hace particulares los proyectos de la Île de Ré',
    specificsBody:
      "La Île de Ré exige un nivel de gama alta casi en todas partes: hoteles con encanto, segundas residencias de lujo, residencias con arquitectos de interiores. La estacionalidad es central, con la mayoría de las rehabilitaciones entre octubre y abril, con plazos cortos. La alta humedad de la isla durante todo el año y la brisa salina orientan la elección de materiales: moquetas con mezcla de lana, suelos vinílicos dimensionalmente estables, tratamientos antihumedad. Conocemos los pueblos, los oficios complementarios y las normas urbanísticas propias de cada uno.",
    challenges: [
      { label: 'Estacionalidad', desc: 'Proyectos concentrados fuera de temporada, agendas reservadas con antelación.' },
      { label: 'Humedad alta', desc: 'Materiales y adhesivos seleccionados para ambientes húmedos.' },
      { label: 'Logística del puente', desc: 'Entregas de material coordinadas con el cruce del puente.' },
      { label: 'Exigencias hoteleras', desc: 'Hoteles con encanto, villas: acabados impecables.' },
    ],
    testimonial: {
      quote:
        'Valentin entendió el ambiente que queríamos para nuestras habitaciones. El resultado está a la altura de nuestras expectativas, y la colocación fue impecable y puntual.',
      author: 'Hostelería · Île de Ré',
    },
    projectHighlights: [
      { title: 'Hôtel La Baronnie', sector: 'Hostelería', year: '2025', img: '/images/tapis-hotel-real.webp', desc: 'Alfombra a medida con un motivo exclusivo + moqueta EGE en las habitaciones.' },
      { title: 'Alfombra a medida, detalle', sector: 'Hostelería', year: '2025', img: '/images/tapis-hotel-baronnie.webp', desc: 'Un motivo coordinado con la identidad del establecimiento.' },
      { title: 'Dormitorio de gama alta', sector: 'Residencial', year: '2025', img: '/images/moquette-chambre-motif.webp', desc: 'Moqueta con motivo gráfico, elegida en la sala de exposición.' },
    ],
    zoneFaq: [
      {
        q: '¿Pueden trabajar durante la temporada en la Île de Ré?',
        a: 'Sí, pero preferimos claramente el periodo de octubre a abril para las grandes rehabilitaciones. En temporada alta nos ocupamos de trabajos pequeños y reparaciones; la agenda se reserva con varios meses de antelación.',
      },
      {
        q: '¿Trabajan con arquitectos de interiores de la Île de Ré?',
        a: 'Sí, colaboramos con regularidad con varias agencias de arquitectura de interiores de la isla (Anne Boullet Studio, Atelier 715, ABP Architectes). Participamos en la elección de los materiales desde el principio y realizamos la colocación conforme al pliego de condiciones.',
      },
    ],
    typicalEstablishments: [
      'Hoteles con encanto',
      'Segundas residencias',
      'Villas de arquitectos',
      'Restaurantes de playa',
      'Casas de huéspedes',
      'Boutiques y galerías',
    ],
  },

  'ile-doleron': {
    key: 'ile-doleron',
    label: "Île d'Oléron",
    photo: '/images/golf-real.webp',
    tagline: 'Un artesano de Oléron, puente gratuito, acceso directo desde La Rochelle.',
    specificsTitle: 'Lo que es específico de Oléron',
    specificsBody:
      "La Île d'Oléron es la mayor isla francesa después de Córcega. Los tipos de edificio son variados: hoteles estacionales, campings de gama alta, segundas residencias, tiendas de pueblo. Como en Ré, la estacionalidad marca las agendas. El terreno arenoso y la proximidad inmediata del océano exigen suelos técnicos en los establecimientos de recepción. Los campings de varias estrellas invierten en revestimientos duraderos para sus mobil-homes y zonas comunes, un segmento en el que trabajamos con regularidad.",
    challenges: [
      { label: 'Campings de gama alta', desc: 'Vinilo técnico para mobil-homes, suelos acústicos para los comedores.' },
      { label: 'Fuerte estacionalidad', desc: 'Rehabilitaciones concentradas de noviembre a marzo.' },
      { label: 'Terreno arenoso', desc: 'Son imprescindibles alfombras de entrada de alto rendimiento.' },
      { label: 'Edificios públicos turísticos', desc: 'Normativa contra incendios, resistencia a un tránsito intenso.' },
    ],
    testimonial: {
      quote:
        'Colocación completa de nuestras zonas comunes en 10 días, un equipo serio y materiales conformes al pliego de condiciones. Recomendado para establecimientos turísticos.',
      author: "Camping de 5 estrellas · Île d'Oléron",
    },
    projectHighlights: [
      { title: 'Golf de la Prée', sector: 'Deporte y ocio', year: '2023', img: '/images/golf-real.webp', desc: 'Moqueta de contrato para la casa club + vinilo en los vestuarios.' },
      { title: 'Bistrot de la Grande Terrasse', sector: 'Restaurante', year: '2026', img: '/images/bistrot-restaurant-real.webp', desc: 'Moqueta acústica en el comedor.' },
      { title: 'Cocina profesional', sector: 'Restauración profesional', year: '2024', img: '/images/cuisine-pro-real.webp', desc: 'Suelo vinílico soldado en caliente, sin juntas.' },
    ],
    zoneFaq: [
      {
        q: '¿Trabajan en campings y mobil-homes en Oléron?',
        a: 'Sí, es una parte importante de nuestro trabajo en la isla. Colocamos suelos vinílicos técnicos en los mobil-homes, moqueta acústica en las zonas comunes y alfombras de entrada en los accesos.',
      },
      {
        q: '¿Qué plazos para un proyecto estacional en Oléron?',
        a: 'Para campings y hoteles, programamos las obras entre octubre y marzo. Un presupuesto solicitado en verano se planifica por lo general para el otoño siguiente. Para los proyectos residenciales pequeños, los plazos son más cortos (de 4 a 6 semanas).',
      },
    ],
    typicalEstablishments: [
      'Campings de 4 y 5 estrellas',
      'Hoteles estacionales',
      'Restaurantes frente al mar',
      'Segundas residencias',
      'Tiendas de pueblo',
      'Mobil-homes premium',
    ],
  },

  'charente-maritime': {
    key: 'charente-maritime',
    label: 'Charente-Maritime',
    photo: '/images/moquette-bureau-real.webp',
    tagline: 'Trabajamos en toda la Charente-Maritime desde Villedoux.',
    specificsTitle: 'Proyectos en todo el departamento',
    specificsBody:
      "Más allá de la costa, la Charente-Maritime cuenta con oficinas, organismos públicos, colegios, edificios agrícolas rehabilitados y un tejido residencial variado. Las exigencias técnicas difieren de las de la costa: menos humedad, más tránsito intenso en entornos comerciales, requisitos acústicos en los colegios y una normativa estricta de edificios públicos. Trabajamos en todo el departamento en proyectos estructurantes, con una logística bien afinada para las obras lejanas (Saintes, Royan, Cognac, Rochefort).",
    challenges: [
      { label: 'Oficinas y comercial', desc: 'Losetas de moqueta, resistencia a las sillas con ruedas, acústica.' },
      { label: 'Colegios', desc: 'Suelos vinílicos de edificios públicos, clasificación al fuego, mantenimiento fácil.' },
      { label: 'Edificios agrícolas', desc: 'Conversiones en casas rurales, suelos técnicos para salones de recepción.' },
      { label: 'Logística en todo el departamento', desc: 'Desplazamientos optimizados, presupuesto claro.' },
    ],
    testimonial: {
      quote:
        'Un proyecto de oficina de 350 m², colocado en un fin de semana, sin interrupción para los equipos. Trabajo cuidadoso, material acorde con la elección hecha en la sala de exposición.',
      author: 'Comercial · Charente-Maritime',
    },
    projectHighlights: [
      { title: 'Oficinas en Charente-Maritime', sector: 'Comercial', year: '2024', img: '/images/moquette-bureau-real.webp', desc: 'Losetas de moqueta, colocadas en local ocupado sin interrupción.' },
      { title: 'Cocina profesional', sector: 'Restauración profesional', year: '2024', img: '/images/cuisine-pro-real.webp', desc: 'Suelo vinílico soldado, máxima higiene.' },
      { title: 'Golf de la Prée', sector: 'Deporte y ocio', year: '2023', img: '/images/golf-real.webp', desc: 'Renovación de la casa club y los vestuarios.' },
    ],
    zoneFaq: [
      {
        q: '¿Trabajan lejos de La Rochelle (Saintes, Royan, Rochefort)?',
        a: 'Sí, cubrimos toda la Charente-Maritime. Los gastos de desplazamiento se incluyen en el presupuesto de forma transparente, sin sorpresas. Para los proyectos grandes suelen ser proporcionalmente muy reducidos.',
      },
      {
        q: '¿Trabajan para organismos públicos?',
        a: 'Sí. Estamos habilitados para responder a licitaciones públicas y a contratos privados de organismos públicos. Garantía decenal de la obra, seguros al día.',
      },
    ],
    typicalEstablishments: [
      'Oficinas y sedes sociales',
      'Clínicas',
      'Colegios e institutos',
      'Edificios agrícolas',
      'Tiendas y boutiques',
      'Viviendas plurifamiliares',
    ],
  },
}

export function getEsZoneContent(key: ZoneKey): EsZoneContent {
  return esZones[key]
}
