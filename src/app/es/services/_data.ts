// EN-only service content, colocated under /en (FR data files left untouched).
export interface EsService {
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

export const esServices: EsService[] = [
  {
    slug: 'pose-moquette',
    name: 'Instalación de moqueta',
    shortName: 'Moqueta',
    aboutLabel: 'la moqueta',
    hasShowroom: true,
    description: 'Moqueta de alta gama a medida, instalada con calidad profesional para hogares y empresas.',
    longDescription:
      'La moqueta sigue siendo el revestimiento de suelo que ofrece el mejor confort acústico y térmico. El único revestimiento capaz de impedir que las partículas finas se dispersen, conviene por igual a espacios de vida, hoteles y oficinas. CB Sols selecciona con cuidado las mejores colecciones de sus marcas asociadas: EGE en la gama alta, completada con otras referencias elegidas según las particularidades de cada proyecto.',
    benefits: [
      'Confort acústico excepcional',
      'Aislamiento térmico natural',
      'Retiene las partículas finas',
      'Una enorme variedad de texturas y colores',
      'Durabilidad profesional certificada',
    ],
    useCases: ['Habitaciones de hotel', 'Suites principales', 'Habitaciones infantiles', 'Bibliotecas', 'Vestidores', 'Salas de reuniones', 'Oficinas', 'Escaleras', 'Vestíbulos'],
    brands: ['EGE'],
    geoVerb: 'Instalación de moqueta en',
    metaTitle: 'Instalación de moqueta en La Rochelle | Presupuesto gratis en 48 h',
    metaDescription:
      'Instalación profesional de moqueta en La Rochelle y alrededores. CB Sols: artesano especialista desde hace más de 28 años, presupuesto gratis. Hoteles, oficinas, viviendas particulares.',
    faqs: [
      { question: '¿Pueden instalar moqueta sobre un suelo existente?', answer: 'En la mayoría de los casos, sí. Primero evaluamos el soporte: un suelo sano, plano y seco puede a menudo enmoquetarse directamente, mientras que uno irregular o húmedo se prepara de antemano. Se lo decimos con claridad tras la visita.' },
      { question: '¿La moqueta es adecuada para un espacio profesional de gran tránsito?', answer: 'Por supuesto. Instalamos moqueta certificada de uso intensivo (clases 33 a 34) concebida para una afluencia intensa en hoteles, oficinas y salas de reuniones, con la resistencia al desgaste correspondiente.' },
      { question: '¿Cuánto dura una instalación de moqueta?', answer: 'Una estancia estándar se instala normalmente en un día. Los proyectos más grandes o de escaleras se planifican estancia por estancia para que su espacio siga utilizable durante todo el proceso.' },
    ],
  },
  {
    slug: 'sol-pvc-lames-dalles',
    name: 'Lamas y losetas LVT',
    shortName: 'Suelo LVT',
    aboutLabel: 'el suelo LVT',
    hasShowroom: true,
    description: 'Lamas y losetas de vinilo de alta gama, resistentes y estéticas. Para hogares y empresas.',
    longDescription:
      'La última generación de lamas y losetas de vinilo combina el aspecto de la madera o la piedra con una resistencia incomparable al agua y al desgaste. Ideales para comercios, viviendas y espacios compartidos, soportan una gran afluencia manteniéndose fáciles de mantener.',
    benefits: [
      'Resistente al agua y la humedad',
      'Fácil de mantener',
      'Aspecto madera o piedra muy realista',
      'Instalación rápida sin obras pesadas',
      'Adaptado a una afluencia intensiva',
    ],
    useCases: ['Viviendas unifamiliares', 'Dormitorios', 'Cuartos de baño', 'Comercios', 'Cocinas profesionales', 'Vestíbulos', 'Oficinas diáfanas', 'Reformas rápidas'],
    brands: ['Gerflor', 'objectflor'],
    geoVerb: 'Suelo LVT en',
    metaTitle: 'Lamas y losetas LVT en La Rochelle | Instalación y presupuesto en 48 h',
    metaDescription:
      'Suelo de lamas y losetas de vinilo instalado en La Rochelle. CB Sols instala marcas seleccionadas con cuidado (Gerflor, objectflor) para empresas y viviendas particulares. Presupuesto gratis.',
    faqs: [
      { question: '¿El suelo LVT es realmente impermeable?', answer: 'Las lamas y losetas en sí resisten el agua, por eso funcionan tan bien en cuartos de baño y cocinas. Para zonas totalmente húmedas recomendamos más bien el vinilo en rollo soldado, y le aconsejaremos estancia por estancia.' },
      { question: '¿El LVT se puede instalar sobre baldosas?', answer: 'A menudo sí, una vez rellenadas las juntas y nivelada la superficie. Un soporte sano y plano es la clave de un acabado impecable y duradero.' },
      { question: '¿Cómo de realista es el efecto madera o piedra?', answer: 'El LVT moderno reproduce la veta, los nudos y la textura con superficies gofradas que resultan convincentes a la vista y al tacto. Puede ver y tocar muestras en nuestra sala de exposición de Villedoux.' },
    ],
  },
  {
    slug: 'sol-pvc-les',
    name: 'Suelo de vinilo en rollo',
    shortName: 'Vinilo en rollo',
    aboutLabel: 'el suelo de vinilo en rollo',
    hasShowroom: true,
    description: 'Suelo de vinilo en rollo, instalado con cuidado con rodapié y juntas termosoldadas. Para hogares y empresas.',
    longDescription:
      'El vinilo en rollo es el revestimiento de suelo de referencia para los espacios profesionales exigentes. Instalado como una superficie continua con juntas termosoldadas, garantiza una estanqueidad perfecta: ideal para cocinas, salas de cuidados y espacios compartidos que requieren una limpieza intensiva.',
    benefits: [
      'Sin juntas = higiene máxima',
      'Uniones termosoldadas estancas',
      'Resistencia química y bacteriana',
      'Amplia variedad de colores y motivos',
      'Larga vida en entornos profesionales',
    ],
    useCases: ['Viviendas unifamiliares', 'Cocinas profesionales', 'Locales sanitarios', 'Laboratorios', 'Vestíbulos compartidos', 'Anfiteatros'],
    brands: ['Gerflor', 'objectflor'],
    geoVerb: 'Vinilo en rollo en',
    metaTitle: 'Suelo de vinilo en rollo en La Rochelle | Instalación profesional, presupuesto gratis',
    metaDescription:
      'Suelo de vinilo en rollo instalado en La Rochelle por CB Sols. Vinilo en rollo con juntas termosoldadas, ideal para profesionales sanitarios y organismos públicos.',
    faqs: [
      { question: '¿Por qué elegir vinilo en rollo en vez de lamas para una clínica?', answer: 'El vinilo en rollo termosoldado no tiene juntas abiertas, por lo que los líquidos y las bacterias no pueden penetrar. Esa superficie estanca y continua es exactamente lo que requieren los espacios sanitarios y de preparación de alimentos.' },
      { question: '¿Se puede subir el vinilo por la pared (zócalo sanitario)?', answer: 'Sí. Podemos formar un zócalo sanitario que sube el vinilo por la pared para una unión sin juntas y fácil de limpiar, práctica habitual en espacios clínicos y cocinas profesionales.' },
      { question: '¿Cómo de duraderas son las juntas soldadas?', answer: 'Realizada correctamente con un cordón de soldadura a juego, la junta es tan resistente como la propia lámina y se mantiene estanca durante toda la vida del suelo.' },
    ],
  },
  {
    slug: 'tapis-sur-mesure',
    name: 'Alfombras a medida',
    shortName: 'Alfombras a medida',
    aboutLabel: 'las alfombras a medida',
    hasShowroom: true,
    description: 'Alfombras decorativas hechas a medida con acabados de primera. Para hoteles, espacios de prestigio y hogares exigentes.',
    longDescription:
      'Una alfombra a medida es la firma de un espacio de prestigio. CB Sols trabaja con diseñadores y arquitectos de interiores para crear piezas únicas: forma, color, material y acabado del borde son todos personalizables. Ideal para vestíbulos de hotel, restaurantes gastronómicos y viviendas de lujo.',
    benefits: [
      'Dimensiones y forma al milímetro',
      'Variedad ilimitada de colores y materiales',
      'Bordes con cenefa, flecos o sobrehilado',
      'Posibilidad de logotipo o motivo',
      'Clase de desgaste adaptada al uso',
    ],
    useCases: ['Viviendas unifamiliares', 'Vestíbulos de hotel', 'Restaurantes gastronómicos', 'Salones de eventos', 'Viviendas de lujo', 'Boutiques de primera'],
    brands: ['EGE', 'Taller a medida CB Sols'],
    geoVerb: 'Alfombras a medida en',
    metaTitle: 'Alfombras a medida en La Rochelle | Fabricación artesanal',
    metaDescription:
      'Alfombras decorativas hechas a medida en La Rochelle. CB Sols crea alfombras únicas para hoteles, restaurantes y espacios de prestigio. Presupuesto personalizado.',
    faqs: [
      { question: '¿Pueden hacer una alfombra con una forma inusual?', answer: 'Sí. Cortamos y rematamos cualquier forma y tamaño, redonda, curva o siguiendo la planta exacta de una estancia, con el acabado de borde que elija.' },
      { question: '¿Pueden integrar un logotipo o un motivo?', answer: 'Podemos incorporar un logotipo, una cenefa o un motivo personalizado para vincular la alfombra a su marca o a su esquema interior. Comparta el diseño y le aconsejaremos sobre la mejor técnica.' },
      { question: '¿Qué acabados de borde hay disponibles?', answer: 'Bordes con cenefa, con flecos o sobrehilados (ribeteados), cada uno cambia el aspecto y el tacto de la pieza. Le mostraremos muestras para elegir.' },
    ],
  },
  {
    slug: 'tapis-de-proprete',
    name: 'Felpudos de entrada',
    shortName: 'Felpudos',
    aboutLabel: 'los felpudos de entrada',
    hasShowroom: true,
    description: 'Felpudos de entrada para empresas y hogares, que protegen sus suelos interiores y mantienen su imagen impecable.',
    longDescription:
      'El felpudo de entrada es el primer punto de contacto con su espacio. Protege sus suelos interiores, retiene hasta el 80 % de la suciedad en la puerta y contribuye a la imagen de su local. CB Sols ofrece soluciones a medida cortadas a las dimensiones exactas de su entrada, con posibilidad de logotipo integrado.',
    benefits: [
      'Retiene el 80 % de la suciedad en la misma puerta',
      'Protege sus revestimientos de suelo interiores',
      'Dimensiones y formas a medida',
      'Posibilidad de integrar el logotipo de la empresa',
      'Limpieza profesional disponible',
    ],
    useCases: ['Viviendas unifamiliares', 'Entradas de hotel', 'Comercios', 'Oficinas y empresas', 'Organismos públicos', 'Residencias'],
    brands: ['Romus'],
    geoVerb: 'Felpudos de entrada en',
    metaTitle: 'Felpudos de entrada a medida en La Rochelle | Presupuesto en 48 h',
    metaDescription:
      'Felpudos de entrada profesionales en La Rochelle. Hechos a medida, con posibilidad de logotipo. CB Sols protege sus suelos y mantiene su local impecable.',
    faqs: [
      { question: '¿De qué tamaño debe ser un felpudo de entrada?', answer: 'Por regla general, lo bastante largo para varios pasos, de modo que los zapatos queden limpios antes de llegar a su suelo interior. Medimos su entrada y le recomendamos el largo adecuado.' },
      { question: '¿Pueden añadir nuestro logotipo?', answer: 'Sí, podemos integrar el logotipo de su empresa en el felpudo, un detalle sencillo que realza el aspecto de una recepción o un escaparate.' },
      { question: '¿Ofrecen limpieza periódica?', answer: 'Podemos organizar la limpieza profesional de sus felpudos para que sigan reteniendo la suciedad y luciendo bien con el tiempo.' },
    ],
  },
  {
    slug: 'nettoyage-moquette',
    name: 'Limpieza de moqueta',
    shortName: 'Limpieza',
    aboutLabel: 'la limpieza de moqueta',
    hasShowroom: false,
    description: 'Limpieza profesional por inyección-extracción que devuelve la vida a las moquetas. Hogares y empresas.',
    longDescription:
      'La limpieza profesional por inyección-extracción es la forma más eficaz de renovar sus moquetas sin sustituirlas. CB Sols trabaja con equipos profesionales que inyectan una solución limpiadora y luego la aspiran junto con la suciedad incrustada. El resultado: una moqueta como nueva, seca en unas horas.',
    benefits: [
      'Elimina las manchas profundas',
      'Desinfecta y desodoriza',
      'Secado rápido (2 a 4 horas)',
      'Alarga la vida de la moqueta entre un 30 y un 50 %',
      'Tratamiento antimanchas disponible',
    ],
    useCases: ['Hoteles entre temporadas', 'Oficinas', 'Salas de conferencias', 'Residencias', 'Campings de primera'],
    brands: [],
    geoVerb: 'Limpieza de moqueta en',
    metaTitle: 'Limpieza de moqueta en La Rochelle | Inyección-extracción',
    metaDescription:
      'Limpieza profesional de moqueta en La Rochelle por inyección-extracción. CB Sols restaura el aspecto de sus moquetas. Plazos rápidos, presupuesto gratis.',
    faqs: [
      { question: '¿Cuánto tarda la moqueta en secarse?', answer: 'Normalmente de 2 a 4 horas con nuestro equipo de extracción, que aspira la mayor parte de la humedad. Una buena ventilación lo acelera aún más.' },
      { question: '¿La limpieza quitará las manchas antiguas?', answer: 'La extracción profunda levanta la mayor parte de la suciedad incrustada y muchas manchas. Algunas marcas muy fijadas no pueden garantizarse del todo, y le diremos con honestidad qué esperar antes de empezar.' },
      { question: '¿Pueden trabajar sin cerrar nuestro negocio?', answer: 'Sí. Planificamos en torno a su actividad, zona por zona o fuera del horario, para que hoteles y oficinas sigan funcionando mientras limpiamos.' },
    ],
  },
  {
    slug: 'revetement-sol',
    name: 'Revestimiento de suelo',
    shortName: 'Revestimiento de suelo',
    aboutLabel: 'el revestimiento de suelo',
    hasShowroom: true,
    description: 'Experiencia completa en revestimiento de suelo: asesoramiento, suministro, instalación y mantenimiento. Hogares y empresas.',
    longDescription:
      'Desde hace más de 28 años, CB Sols acompaña a clientes particulares y profesionales de toda Charente-Maritime en cada proyecto de revestimiento de suelo. Desde la selección de materiales en la sala de exposición hasta la instalación y el mantenimiento, CB Sols es su único interlocutor para un proyecto bien hecho de principio a fin.',
    benefits: [
      'Un único interlocutor de principio a fin',
      'Sala de exposición con más de 500 muestras',
      'Presupuesto gratis en 48 h',
      'Instalación por artesanos cualificados',
      'Garantía decenal de obra',
    ],
    useCases: ['Casas y pisos', 'Oficinas y comercios', 'Hoteles y restaurantes', 'Organismos públicos', 'Obra nueva y reforma'],
    brands: ['EGE', 'Gerflor', 'objectflor'],
    geoVerb: 'Revestimiento de suelo en',
    metaTitle: 'Revestimiento de suelo en La Rochelle | Presupuesto gratis en 48 h',
    metaDescription:
      'Revestimiento de suelo instalado en La Rochelle por CB Sols. Especialista desde hace más de 28 años en Charente-Maritime: moqueta, vinilo, alfombras. Presupuesto gratis, plazos rápidos.',
    faqs: [
      { question: '¿Se encargan del proyecto de principio a fin?', answer: 'Sí. Desde el asesoramiento en la sala de exposición y la selección de materiales hasta la instalación y el mantenimiento posterior, trata con un único equipo todo el tiempo, sin coordinar varios oficios.' },
      { question: '¿Con qué rapidez puedo tener un presupuesto?', answer: 'Nuestro objetivo es devolverle un presupuesto gratuito y detallado en las 48 horas siguientes a entender su proyecto.' },
      { question: '¿Cubren por igual la obra nueva y la reforma?', answer: 'Ambas. Trabajamos en construcción nueva y en proyectos de renovación, para hogares, empresas y organismos públicos de toda Charente-Maritime.' },
    ],
  },
  {
    slug: 'salle-cinema',
    name: 'Salas de cine en casa',
    shortName: 'Cine en casa',
    aboutLabel: 'la sala de cine en casa',
    hasShowroom: false,
    description: 'Acondicionamiento acústico y visual para salas de cine privadas y cines domésticos de alta gama.',
    longDescription:
      'Una sala de cine exige un suelo que absorba el ruido de impacto, no refleje la luz de la pantalla y resista el paso frecuente alrededor de asientos fijos. Instalamos moqueta de alta densidad (clases 33-34) con una base acústica reforzada y acabados oscuros adaptados a la proyección. CB Sols trabaja en cines domésticos privados en residencias de alta gama y en salas de proyección profesionales.',
    benefits: [
      'Absorción acústica óptima (-15 a -25 dB de ruido de impacto)',
      'Acabados oscuros antirreflejo para la proyección',
      'Aguanta perfectamente bajo asientos fijos y butacas reclinables',
      'Colores apagados que no distraen la vista',
      'Base reforzada para un confort duradero',
    ],
    useCases: ['Cines domésticos privados', 'Salas de proyección residenciales', 'Espacios multimedia de hotel', 'Salas de espectáculos', 'Auditorios'],
    brands: ['EGE'],
    geoVerb: 'Suelo de cine en casa en',
    metaTitle: 'Suelo de cine en casa en La Rochelle | Moqueta acústica',
    metaDescription:
      'Suelo para salas de cine y cines domésticos en La Rochelle. CB Sols: moqueta acústica de alta densidad, acabados antirreflejo, base reforzada. Presupuesto gratis.',
    faqs: [
      { question: '¿Por qué moqueta en vez de suelo duro en una sala de cine?', answer: 'La moqueta con base acústica absorbe el ruido de impacto y domina los reflejos, de modo que el sonido que oye es el de los altavoces, no el de la sala. Además elimina los reflejos de la pantalla.' },
      { question: '¿Qué colores funcionan mejor?', answer: 'Tonos profundos y apagados. Los acabados oscuros antirreflejo impiden que el suelo devuelva la luz de la pantalla hacia el público y mantienen la mirada en la imagen.' },
      { question: '¿El suelo aguanta asientos reclinables fijos?', answer: 'Sí. Especificamos moqueta de uso intensivo de alta densidad que conserva su estructura bajo asientos fijos y butacas reclinables sin aplastarse.' },
    ],
  },
  {
    slug: 'coin-lecture',
    name: 'Rincones de lectura',
    shortName: 'Rincón de lectura',
    aboutLabel: 'el rincón de lectura',
    hasShowroom: false,
    description: 'Espacios de lectura acogedores y con acústica controlada para hoteles, residencias y bibliotecas privadas.',
    longDescription:
      'Un buen rincón de lectura se siente tanto como se ve. El suelo debe absorber los pasos y el ruido ambiente, ofrecer calidez al tacto y a la vista, y durar. CB Sols selecciona moquetas de lana o terciopelo bouclé para espacios de lectura residenciales y hoteleros, pasillos literarios, salones de lectura, bibliotecas privadas y entreplantas de hoteles boutique. Se puede combinar una alfombra a medida para delimitar la zona.',
    benefits: [
      'Confort acústico que favorece la concentración',
      'Calidez al tacto y a la vista',
      'Colores y texturas que serenan',
      'Una zona delimitada por una alfombra a medida',
      'Soluciones adaptadas a espacios de alta gama',
    ],
    useCases: ['Salones de lectura de hotel', 'Bibliotecas privadas', 'Entreplantas de suite', 'Rincones de lectura residenciales', 'Espacios de estudio de alta gama'],
    brands: ['EGE', 'Taller de alfombras a medida CB Sols'],
    geoVerb: 'Rincones de lectura en',
    metaTitle: 'Suelo para rincón de lectura en La Rochelle | Acondicionamiento a medida',
    metaDescription:
      'Espacios y rincones de lectura creados en La Rochelle. Moqueta suave, alfombras a medida, una sensación acogedora y acústica controlada. CB Sols, presupuesto gratis.',
    faqs: [
      { question: '¿Qué hace que un suelo sea adecuado para un espacio de lectura?', answer: 'Suavidad y silencio. Una moqueta de lana o terciopelo bouclé absorbe los pasos y el ruido ambiente, aportando la calma que necesita un rincón de lectura, con calidez bajo los pies.' },
      { question: '¿Pueden delimitar el rincón dentro de una estancia más grande?', answer: 'Sí. Una alfombra a medida colocada sobre el suelo principal es una forma elegante de delimitar y anclar una zona de lectura dentro de un espacio abierto.' },
      { question: '¿Esto es solo para hoteles?', answer: 'En absoluto. Creamos rincones de lectura en hogares y bibliotecas particulares con la misma facilidad que en hoteles y residencias de alta gama.' },
    ],
  },
]

export function getEsServiceBySlug(slug: string): EsService | undefined {
  return esServices.find((s) => s.slug === slug)
}
