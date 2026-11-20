// EN-only sector content, colocated under /en (FR data left untouched).
export interface EsSector {
  slug: string
  name: string
  tagline: string
  description: string
  challenges: string[]
  solutions: string[]
  referencesExamples: string[]
  recommendedServices: string[] // EN service slugs (shared slugs)
  metaTitle: string
  metaDescription: string
  faqs: { question: string; answer: string }[]
}

export const esSectors: EsSector[] = [
  {
    slug: 'hotellerie',
    name: 'Hoteles y alojamientos',
    tagline: 'Suelos a la altura de sus estrellas',
    description:
      'La hostelería exige revestimientos de suelo que combinen una estética impecable, resistencia a una afluencia intensiva y facilidad de mantenimiento diario. CB Sols trabaja con hoteles de 2 a 5 estrellas, residencias turísticas y casas de huéspedes de primera de toda Charente-Maritime desde hace más de 28 años.',
    challenges: [
      'Afluencia intensiva en pasillos y zonas comunes',
      'Rotación rápida entre huéspedes',
      'Coherencia visual entre espacios',
      'Normativa contra incendios M1/M2',
      'Accesibilidad para huéspedes con movilidad reducida',
    ],
    solutions: [
      'Moqueta de alta gama certificada Bfl-s1 para las habitaciones',
      'Vinilo resistente para zonas comunes y pasillos',
      'Alfombras de logotipo a medida para los vestíbulos',
      'Salones de lectura suaves y con acústica controlada',
      'Contrato de mantenimiento anual (limpieza por inyección-extracción)',
    ],
    referencesExamples: [
      'Hoteles de la Isla de Ré (habitaciones con moqueta + baños con vinilo)',
      'Residencias turísticas en La Rochelle',
      'Casas de huéspedes de primera en Charente-Maritime',
    ],
    recommendedServices: ['pose-moquette', 'tapis-sur-mesure', 'nettoyage-moquette'],
    metaTitle: 'Revestimiento de suelo para hoteles | CB Sols',
    metaDescription:
      'CB Sols, socio en revestimiento de suelo para hoteles y alojamientos en Charente-Maritime. Suelos a la altura de sus estrellas. Presupuesto gratis, plazos rápidos.',
    faqs: [
      { question: '¿Pueden renovar las habitaciones sin cerrar el hotel?', answer: 'Sí. Trabajamos habitación por habitación o planta por planta, planificando en torno a la ocupación para que siga alquilando habitaciones mientras avanza la renovación.' },
      { question: '¿Su moqueta tiene clasificación al fuego para uso hotelero?', answer: 'Instalamos moqueta certificada Bfl-s1 que cumple la normativa contra incendios para alojamientos de pública concurrencia, con la documentación que lo acredita.' },
      { question: '¿Ofrecen mantenimiento periódico?', answer: 'Ofrecemos contratos anuales de limpieza por inyección-extracción que mantienen pasillos y zonas comunes en su mejor aspecto entre temporadas.' },
    ],
  },
  {
    slug: 'restauration',
    name: 'Restaurantes y cervecerías',
    tagline: 'El ambiente empieza bajo los pies de sus clientes',
    description:
      'En la restauración, el suelo contribuye directamente al ambiente y al confort acústico. CB Sols equipa restaurantes gastronómicos, cervecerías y cafés con soluciones que absorben el ruido y resisten la afluencia, las copas que caen y una limpieza diaria intensiva.',
    challenges: [
      'Ruido en el comedor (confort acústico)',
      'Resistencia a los derrames y a los objetos que caen',
      'Limpieza diaria intensiva',
      'Un aspecto acorde con el posicionamiento del restaurante',
      'Tiempo de instalación mínimo (cierre reducido)',
    ],
    solutions: [
      'Moqueta de alto rendimiento acústico para los comedores',
      'Vinilo resistente para cocinas profesionales',
      'Alfombras a medida para delimitar zonas en el comedor',
      'Instalación en 48 h para reducir el cierre al mínimo',
    ],
    referencesExamples: [
      'Restaurante con estrella Michelin en La Rochelle (moqueta + alfombra a medida)',
      'Bistrós y cervecerías en la Isla de Ré',
      'Restaurantes de hotel en Charente-Maritime',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-les', 'tapis-sur-mesure', 'tapis-de-proprete'],
    metaTitle: 'Revestimiento de suelo para restaurantes | CB Sols',
    metaDescription:
      'CB Sols, socio en revestimiento de suelo para restaurantes y cervecerías en Charente-Maritime. El ambiente empieza bajo los pies de sus clientes. Presupuesto gratis.',
    faqs: [
      { question: '¿Qué suelo mantiene silencioso un comedor?', answer: 'La moqueta acústica absorbe las conversaciones y los pasos mucho mejor que los suelos duros, elevando el confort en una sala concurrida. Podemos combinarla con alfombras a medida para zonificar el espacio.' },
      { question: '¿Qué suelo conviene a una cocina profesional?', answer: 'Vinilo en rollo termosoldado: sin juntas, estanco y resistente a la grasa y a la limpieza intensiva, la elección correcta detrás del pase.' },
      { question: '¿Con qué rapidez pueden instalar para perder menos negocio?', answer: 'Muchos proyectos de comedor se instalan en 48 horas, planificados en torno al servicio para reducir el cierre al mínimo.' },
    ],
  },
  {
    slug: 'bureaux-entreprises',
    name: 'Oficinas y empresas',
    tagline: 'Un suelo que inspira rendimiento',
    description:
      'Los espacios de trabajo modernos necesitan revestimientos que favorezcan la concentración, absorban el ruido y reflejen la imagen de la empresa. CB Sols acompaña a pymes, despachos y grandes cuentas de toda Charente-Maritime en la creación de espacios de trabajo de alto rendimiento.',
    challenges: [
      'Confort acústico para la concentración',
      'Una imagen profesional y moderna',
      'Resistencia a las sillas de ruedas',
      'Mantenimiento diario por los equipos de limpieza',
      'Obra sin interrupción de la actividad',
    ],
    solutions: [
      'Losetas de moqueta (sustitución parcial posible)',
      'Suelo de vinilo resistente a las ruedas de oficina',
      'Felpudo de logotipo en la puerta',
      'Obra en local ocupado o por fases para que la actividad nunca se detenga',
    ],
    referencesExamples: [
      'Gestorías en La Rochelle',
      'Aseguradoras en Charente-Maritime',
      'Oficinas diáfanas de pymes en La Rochelle',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-lames-dalles', 'tapis-de-proprete'],
    metaTitle: 'Revestimiento de suelo para oficinas | CB Sols',
    metaDescription:
      'CB Sols, socio en revestimiento de suelo para oficinas y empresas en Charente-Maritime. Un suelo que inspira rendimiento. Presupuesto gratis, plazos rápidos.',
    faqs: [
      { question: '¿Por qué losetas de moqueta en vez de moqueta en rollo en una oficina?', answer: 'Las losetas permiten sustituir una zona gastada o manchada sin rehacer todo el suelo, lo que mantiene el mantenimiento a largo plazo sencillo y rentable.' },
      { question: '¿El suelo resistirá las sillas de ruedas?', answer: 'Sí. Especificamos moqueta y vinilo homologados para el uso con ruedas, de modo que el rodar diario no desgaste ni marque la superficie.' },
      { question: '¿Pueden trabajar mientras seguimos abiertos?', answer: 'Instalamos en local ocupado o por fases, zona por zona o fuera del horario, para que sus equipos sigan trabajando durante todo el proceso.' },
    ],
  },
  {
    slug: 'collectivites',
    name: 'Organismos públicos y centros educativos',
    tagline: 'Durabilidad y seguridad para los espacios públicos',
    description:
      'Los contratos del sector público exigen revestimientos certificados y duraderos que cumplan las normas de seguridad. CB Sols responde a licitaciones y trabaja con ayuntamientos, centros educativos, mediatecas y salas polivalentes de toda Charente-Maritime.',
    challenges: [
      'Cumplimiento de la normativa contra incendios (Euroclase)',
      'Resistencia a una afluencia muy intensiva',
      'Un presupuesto controlado (licitaciones públicas)',
      'Ventanas de obra ajustadas (vacaciones escolares)',
      'Accesibilidad obligatoria para movilidad reducida',
    ],
    solutions: [
      'Vinilo en rollo certificado Bfl-s1 para las zonas de paso',
      'Vinilo resistente para anfiteatros y salas polivalentes',
      'Moqueta acústica para bibliotecas y mediatecas',
      'Presentación a licitaciones',
    ],
    referencesExamples: [
      'Anfiteatro universitario en La Rochelle (vinilo en rollo)',
      'Mediatecas en Charente-Maritime',
      'Salas de reuniones de organismos públicos',
    ],
    recommendedServices: ['sol-pvc-les', 'sol-pvc-lames-dalles', 'pose-moquette'],
    metaTitle: 'Revestimiento de suelo para organismos públicos y centros educativos | CB Sols',
    metaDescription:
      'CB Sols, socio en revestimiento de suelo para organismos públicos y centros educativos en Charente-Maritime. Durabilidad y seguridad para los espacios públicos. Presupuesto gratis.',
    faqs: [
      { question: '¿Responden a licitaciones públicas?', answer: 'Sí. Respondemos con regularidad a licitaciones del sector público y aportamos la documentación técnica certificada que exigen.' },
      { question: '¿Pueden trabajar dentro de las ventanas de las vacaciones escolares?', answer: 'Planificamos los proyectos en torno a ventanas ajustadas como las vacaciones escolares, de modo que aulas y salas estén listas para la reapertura.' },
      { question: '¿Su suelo está certificado para edificios públicos?', answer: 'Instalamos vinilo y moqueta certificados Bfl-s1 que cumplen los requisitos Euroclase de reacción al fuego para locales públicos.' },
    ],
  },
  {
    slug: 'commerces',
    name: 'Comercios y retail',
    tagline: 'El suelo que luce sus productos',
    description:
      'En el retail, el suelo guía al cliente, marca el ambiente y debe resistir miles de visitas al día. CB Sols equipa comercios, salas de exposición y espacios comerciales con soluciones que combinan estética y rendimiento.',
    challenges: [
      'Resistencia a una afluencia muy intensiva',
      'Lucir los productos (reflejos, colores)',
      'Instalación rápida para limitar el cierre',
      'Mantenimiento diario sencillo',
      'Una imagen de marca coherente',
    ],
    solutions: [
      'Lamas y losetas LVT de alta resistencia',
      'Moqueta de bucle muy resistente para boutiques',
      'Felpudo de logotipo en la puerta',
      'Obra en local ocupado',
    ],
    referencesExamples: [
      'Boutiques del centro de La Rochelle',
      'Salas de exposición comerciales en Charente-Maritime',
    ],
    recommendedServices: ['sol-pvc-lames-dalles', 'tapis-de-proprete', 'pose-moquette'],
    metaTitle: 'Revestimiento de suelo para comercios y retail | CB Sols',
    metaDescription:
      'CB Sols, socio en revestimiento de suelo para comercios y retail en Charente-Maritime. El suelo que luce sus productos. Presupuesto gratis, plazos rápidos.',
    faqs: [
      { question: '¿Qué suelo soporta una gran afluencia de retail?', answer: 'LVT de alta resistencia o una moqueta de bucle resistente, ambos homologados para un tránsito intensivo y fáciles de mantener limpios en el día a día.' },
      { question: '¿Pueden instalar fuera del horario de apertura?', answer: 'Sí. Trabajamos en local ocupado o fuera del horario para que la tienda siga operando mientras instalamos.' },
      { question: '¿El suelo puede llevar nuestra imagen de marca?', answer: 'Colores, acabados y felpudos de logotipo se pueden elegir para encajar con su marca y marcar el ambiente adecuado desde la puerta.' },
    ],
  },
  {
    slug: 'campings-tourisme',
    name: 'Campings y turismo',
    tagline: 'Calidad de acogida, del suelo al techo',
    description:
      'Charente-Maritime está entre los departamentos franceses con más campings. CB Sols equipa mobile homes de alta gama, bungalós y las zonas comunes de campings de 4 y 5 estrellas con revestimientos que resisten la humedad y se adaptan a un uso estacional intensivo.',
    challenges: [
      'Humedad y cambios de temperatura',
      'Afluencia intensiva durante el verano',
      'Sustitución rápida entre temporadas',
      'Presupuesto optimizado (rentabilidad estacional)',
      'Un aspecto moderno y acogedor',
    ],
    solutions: [
      'Vinilo 100 % impermeable para mobile homes',
      'Vinilo en rollo para los bloques sanitarios compartidos',
      'Felpudos de entrada para las puertas de los bungalós',
      'Contrato de mantenimiento anual fuera de temporada',
    ],
    referencesExamples: [
      'Campings de 4/5 estrellas en la Isla de Ré',
      'Residencias turísticas en Charente-Maritime',
    ],
    recommendedServices: ['sol-pvc-lames-dalles', 'sol-pvc-les', 'tapis-de-proprete'],
    metaTitle: 'Revestimiento de suelo para campings y turismo | CB Sols',
    metaDescription:
      'CB Sols, socio en revestimiento de suelo para campings y turismo en Charente-Maritime. Calidad de acogida, del suelo al techo. Presupuesto gratis.',
    faqs: [
      { question: '¿Qué suelo soporta la humedad en un mobile home?', answer: 'Vinilo 100 % impermeable: aguanta la humedad y los cambios de temperatura mucho mejor que cualquier suelo textil en una unidad estacional.' },
      { question: '¿Pueden sustituir los suelos rápido entre temporadas?', answer: 'Sí. El vinilo se instala rápido y sin obras pesadas, de modo que las unidades quedan listas para alquilar de nuevo con una inactividad mínima.' },
      { question: '¿Y los bloques sanitarios compartidos?', answer: 'El vinilo en rollo termosoldado da un suelo sin juntas, estanco y fácil de limpiar que resiste el uso constante del verano.' },
    ],
  },
  {
    slug: 'golf-sport',
    name: 'Golf e instalaciones deportivas',
    tagline: 'Rendimiento y elegancia para sus espacios',
    description:
      'Los clubes de golf y las instalaciones deportivas de primera necesitan revestimientos adaptados a sus espacios particulares: un club social elegante, vestuarios resistentes, pasillos con mucho tránsito estacional. CB Sols ha equipado varios clubes de golf en Charente-Maritime.',
    challenges: [
      'Resistencia a la humedad en los vestuarios',
      'Elegancia en el club social y la zona de comedor',
      'Resistencia a los zapatos de golf (clavos)',
      'Mantenimiento simplificado',
    ],
    solutions: [
      'Moqueta de uso intensivo para el club social y el restaurante',
      'Vinilo resistente para los vestuarios',
      'Alfombras a medida para los salones VIP',
      'Felpudos de entrada en la puerta',
    ],
    referencesExamples: [
      'Club de golf de Charente-Maritime (moqueta + suelos de vestuario)',
      'Country clubs en la zona de La Rochelle',
    ],
    recommendedServices: ['pose-moquette', 'sol-pvc-les', 'tapis-sur-mesure'],
    metaTitle: 'Revestimiento de suelo para golf e instalaciones deportivas | CB Sols',
    metaDescription:
      'CB Sols, socio en revestimiento de suelo para clubes de golf e instalaciones deportivas en Charente-Maritime. Rendimiento y elegancia para sus espacios. Presupuesto gratis.',
    faqs: [
      { question: '¿Qué suelo conviene a un club social?', answer: 'La moqueta de uso intensivo aporta calidez y elegancia a salones y comedores, mientras que el vinilo resistente se encarga de las zonas de vestuario más húmedas.' },
      { question: '¿El suelo resistirá los clavos de golf?', answer: 'Especificamos revestimientos homologados para el tránsito y los clavos, de modo que los pasillos del campo al club social aguantan toda la temporada.' },
      { question: '¿Cómo mantienen higiénicos los vestuarios?', answer: 'El vinilo resistente al agua, fácil de limpiar y de secado rápido, mantiene las zonas de vestuario húmedas sanas y salubres.' },
    ],
  },
]

export function getEsSectorBySlug(slug: string): EsSector | undefined {
  return esSectors.find((s) => s.slug === slug)
}
