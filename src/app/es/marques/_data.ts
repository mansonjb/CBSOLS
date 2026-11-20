// EN-only brand content, colocated under /en (FR data left untouched).
export interface EsBrand {
  slug: string
  name: string
  fullName: string
  country: string
  logoSrc: string
  metaTitle: string
  metaDescription: string
  tagline: string
  intro: string
  expertise: string[]
  topCollections: { name: string; desc: string; useCases: string }[]
  certifications: string[]
  why: string
  services: string[]
}

export const esBrands: EsBrand[] = [
  {
    slug: 'ege',
    name: 'EGE',
    fullName: 'EGE Carpets',
    country: 'Dinamarca',
    logoSrc: '/images/brands/ege.webp',
    metaTitle: 'EGE Carpets | Distribuidor autorizado CB Sols, La Rochelle e Isla de Ré',
    metaDescription: 'CB Sols es distribuidor autorizado de EGE Carpets en Charente-Maritime. Moqueta danesa de referencia para hoteles y oficinas. Sala de exposición en Villedoux. Presupuesto gratis.',
    tagline: 'La referencia danesa en moqueta para hoteles',
    intro: 'EGE es el fabricante danés de moqueta más respetado en interiores hoteleros y comerciales de alta gama de toda Europa. Fundada en 1938 en Herning, Dinamarca, la marca enmoqueta los hoteles y las sedes centrales más destacados del mundo. CB Sols es distribuidor autorizado de EGE en Charente-Maritime desde 2012.',
    expertise: [
      'Moqueta de hotel de la colección Hospitality',
      'Moqueta para oficinas y espacios comerciales',
      'Alfombras Axminster y Wilton a medida',
      'Losetas de moqueta para oficinas diáfanas',
      'Revestimientos acústicos de alto rendimiento',
    ],
    topCollections: [
      { name: 'Hospitality', desc: 'Colección insignia para hostelería: motivos elaborados, clasificación Bfl-s1, pesos de 910 a 2000 g/m²', useCases: 'Habitaciones de hotel, pasillos, vestíbulos' },
      { name: 'Reform', desc: 'Losetas de moqueta modulares para el espacio de trabajo: reciclables, certificadas Cradle to Cradle Silver', useCases: 'Oficinas, espacios diáfanos, salas de reuniones' },
      { name: 'Sense', desc: 'Colección suave residencial y hotelera: texturas de terciopelo y bucle, tonos neutros', useCases: 'Habitaciones de hotel boutique, viviendas de alta gama' },
    ],
    certifications: ['Cradle to Cradle Silver', 'ISO 14001', 'Ecolabel UE', 'Oeko-Tex Standard 100', 'Bfl-s1 (clasificación al fuego UE)'],
    why: 'EGE es la marca que CB Sols recomienda en primer lugar para los proyectos hoteleros exigentes. La calidad del acabado, la profundidad de las gamas y la disponibilidad de certificaciones técnicas hacen de EGE una apuesta segura tanto para los comités de seguridad como para los arquitectos de interiores.',
    services: ['pose-moquette', 'tapis-sur-mesure'],
  },
  {
    slug: 'gerflor',
    name: 'Gerflor',
    fullName: 'Gerflor',
    country: 'Francia',
    logoSrc: '/images/brands/gerflor.svg',
    metaTitle: 'Gerflor | Distribuidor autorizado CB Sols, Charente-Maritime',
    metaDescription: 'CB Sols instala suelos Gerflor en Charente-Maritime. Vinilo profesional para hoteles, restaurantes y organismos públicos. Presupuesto gratis en La Rochelle y la Isla de Ré.',
    tagline: 'El líder francés del suelo de vinilo profesional',
    intro: 'Gerflor es el líder francés en revestimientos de suelo de PVC para profesionales. Fundada en 1937 en Villeurbanne, la marca equipa hospitales, hoteles y organismos públicos de todo el mundo. Sus productos cubren todos los usos: del LVT de diseño al vinilo homogéneo para cocinas profesionales.',
    expertise: [
      'Vinilo homogéneo para cocinas y zonas húmedas',
      'LVT (Luxury Vinyl Tile) para la hostelería',
      'Revestimientos de suelo para organismos públicos',
      'Soluciones acústicas',
      'Rincones de lectura y salas de cine',
    ],
    topCollections: [
      { name: 'Creation 55 Clic', desc: 'LVT de instalación por clic de alta resistencia: aspecto madera u hormigón ultrarrealista, 5,5 mm de grosor', useCases: 'Hoteles, comercios, oficinas' },
      { name: 'Taralay Impression', desc: 'Vinilo heterogéneo compacto de referencia: clasificación 43/34, motivos variados', useCases: 'Pasillos de organismos públicos, comercios, restaurantes' },
      { name: 'Mipolam Symbioz', desc: 'Vinilo homogéneo para entornos médicos: higiene certificada, resistencia química R10', useCases: 'Clínicas, salas de cuidados' },
    ],
    certifications: ['ISO 14001', 'Cradle to Cradle', 'FloorScore', 'NF Environnement', 'Antideslizante R10/R11'],
    why: 'Gerflor es un socio de larga data de CB Sols. La gama homogénea ofrece la mejor resistencia química del mercado, y la red técnico-comercial de Gerflor facilita enormemente los pliegos técnicos para las licitaciones públicas. CB Sols participa además en el programa de reciclaje Second Life de Gerflor (recortes reciclados en colaboración con Paprec).',
    services: ['sol-pvc-les', 'sol-pvc-lames-dalles'],
  },
  {
    slug: 'objectflor',
    name: 'objectflor',
    fullName: 'objectflor (Expona / Polyflor)',
    country: 'Alemania / Reino Unido',
    logoSrc: '/images/brands/objectflor.svg',
    metaTitle: 'objectflor | Distribuidor CB Sols, Charente-Maritime',
    metaDescription: 'CB Sols suministra objectflor en Charente-Maritime. Lamas y losetas de vinilo de alta resistencia para oficinas, hoteles y comercios. Presupuesto gratis.',
    tagline: 'Vinilo de diseño alemán de alta gama',
    intro: 'objectflor es la marca alemana de referencia en revestimientos de vinilo de diseño de alta resistencia. Distribuidor exclusivo de las colecciones Expona y Polyflor en Europa, la marca se dirige a espacios de trabajo de primera, hoteles boutique y retail de gama alta. Sus lamas LVT con aspecto textil, madera o piedra están entre las más convincentes del mercado.',
    expertise: [
      'Lamas LVT de diseño de alta resistencia',
      'Losetas de vinilo modulares para el espacio de trabajo',
      'Soluciones de vinilo heterogéneo Expona',
      'Efectos madera, piedra, hormigón pulido y textil',
      'Colecciones a medida para proyectos profesionales',
    ],
    topCollections: [
      { name: 'Expona Commercial', desc: 'Lamas de vinilo de primera de 3 mm: capa de uso de 0,7 mm, clasificación 33/42, más de 130 diseños', useCases: 'Hoteles, oficinas, comercios, restaurantes' },
      { name: 'Expona Domestic', desc: 'Gama residencial: lamas LVT con capa de uso de 0,3 mm, más económica', useCases: 'Viviendas, segundas residencias' },
      { name: 'Polyflor Bloc', desc: 'Vinilo homogéneo de 2 mm para uso intensivo: resistencia química, fácil mantenimiento', useCases: 'Cocinas profesionales, talleres, vestuarios' },
    ],
    certifications: ['EN 14041', 'Bfl-s1', 'EN 14904 (suelos deportivos)', 'A+ COV', 'Ecolabel UE'],
    why: 'objectflor es la elección de CB Sols cuando la estética importa tanto como la resistencia. La capa de uso de 0,7 mm del Expona Commercial es una de las más gruesas del mercado, y da una vida útil efectiva de más de 20 años en una oficina. Para los proyectos exigentes dirigidos por arquitectos, es a menudo la marca que inclina la decisión.',
    services: ['sol-pvc-lames-dalles', 'sol-pvc-les'],
  },
  {
    slug: 'bostik',
    name: 'Bostik',
    fullName: 'Bostik (Grupo Arkema)',
    country: 'Francia',
    logoSrc: '/images/brands/bostik.svg',
    metaTitle: 'Bostik | Adhesivos y preparación de soportes, socio de CB Sols',
    metaDescription: 'Bostik es el socio de adhesivos y preparación de soportes de CB Sols: morteros de nivelación, imprimaciones, adhesivos técnicos para moqueta y vinilo. Agarre garantizado.',
    tagline: 'La referencia en adhesivos y preparación de soportes',
    intro: 'Bostik (Grupo Arkema) es el líder mundial en adhesivos y preparación de soportes para revestimientos de suelo. Fundada en 1889, la marca equipa a los instaladores profesionales de suelos con una gama completa de adhesivos, morteros de nivelación, imprimaciones y resinas. CB Sols utiliza Bostik de serie en la preparación para garantizar el agarre de cada instalación.',
    expertise: [
      'Morteros autonivelantes P3 y reforzados con fibra',
      'Imprimaciones de agarre y antihumedad',
      'Adhesivos acrílicos para moqueta',
      'Adhesivos técnicos para vinilo homogéneo',
      'Selladores de junta termosoldada',
    ],
    topCollections: [
      { name: 'Stickoflex', desc: 'Adhesivo acrílico de alto rendimiento: para moqueta pesada en rollo o en losetas, fraguado rápido', useCases: 'Moqueta de hotel y oficina, losetas modulares' },
      { name: 'Solplan', desc: 'Mortero autonivelante P3 reforzado con fibra: grosor de 1 a 30 mm, soporte de madera u hormigón', useCases: 'Todos los proyectos de reforma' },
      { name: 'Eponal', desc: 'Resina barrera antihumedad epoxi: protege contra la humedad ascendente', useCases: 'Plantas bajas sobre cámara sanitaria o bodega' },
    ],
    certifications: ['EMICODE EC1 Plus (emisiones muy bajas)', 'NF DTU 53.12', 'Calidad del aire A+', 'Bfl-s1 (sistema completo)'],
    why: 'Bostik es nuestro socio de adhesivos y preparación desde los inicios de CB Sols. El revestimiento adecuado con el adhesivo equivocado es un proyecto fallido. Bostik garantiza la compatibilidad del sistema (adhesivo + mortero de nivelación + imprimación) para que podamos respaldar nuestra garantía decenal de obra con total tranquilidad.',
    services: ['pose-moquette', 'sol-pvc-les', 'sol-pvc-lames-dalles'],
  },
  {
    slug: 'romus',
    name: 'Romus',
    fullName: 'Romus',
    country: 'Francia',
    logoSrc: '/images/brands/romus.svg',
    metaTitle: 'Romus | Perfiles y remates para suelos, socio de CB Sols',
    metaDescription: 'Romus suministra los perfiles, mamperlanes y tapajuntas que utiliza CB Sols: aluminio, latón, acero inoxidable. Para un acabado profesional en cada proyecto.',
    tagline: 'La referencia en perfiles y remates de acabado',
    intro: 'Romus es el fabricante francés especializado en perfiles de acabado para revestimientos de suelo: mamperlanes, tapajuntas, juntas de dilatación, cantoneras. Fundada en 1973, la empresa, con sede cerca de Saint-Étienne, abastece a los instaladores profesionales de suelos con una gama completa en aluminio anodizado, latón, acero inoxidable y PVC. CB Sols trabaja con Romus desde el principio.',
    expertise: [
      'Mamperlanes de aluminio, latón y acero inoxidable',
      'Tapajuntas y perfiles de transición',
      'Juntas de dilatación y de separación',
      'Perfiles de remate y rodapié técnico',
      'Soluciones de accesibilidad para movilidad reducida (botones táctiles)',
    ],
    topCollections: [
      { name: 'Aluminio anodizado', desc: 'La gama estándar del mercado: duradera, económica, amplia variedad de acabados', useCases: 'Oficinas, hoteles, comercios, edificios públicos' },
      { name: 'Latón macizo', desc: 'Acabado de alta gama con pátina natural: pulido o cepillado, muy larga vida', useCases: 'Hoteles de prestigio, restaurantes gastronómicos' },
      { name: 'Acero inoxidable cepillado', desc: 'Aspecto industrial e higiene máxima: recomendado en zonas húmedas o alimentarias', useCases: 'Cocinas profesionales, vestuarios, suelos industriales' },
    ],
    certifications: ['NF Environnement', 'EN 13501-1 (reacción al fuego)', 'NF P 98-351 (accesibilidad para movilidad reducida)'],
    why: 'Romus es nuestro socio para el acabado de cada proyecto. Un buen revestimiento con un mamperlán barato es el único detalle que abarata todo lo demás. La gama Romus nos permite adaptar el acabado al nivel del proyecto, de un estándar de edificio público al latón de un hotel de prestigio.',
    services: ['pose-moquette', 'sol-pvc-lames-dalles'],
  },
]

export function getEsBrandBySlug(slug: string): EsBrand | undefined {
  return esBrands.find((b) => b.slug === slug)
}
