// EN-only FAQ content, colocated under /en (FR data left untouched).
// Faithful native-English translation of src/data/faqs.ts. Facts, figures and standards preserved.
export interface EsFaq {
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

export const esFaqs: EsFaq[] = [
  {
    slug: 'difference-moquette-contrat-particulier',
    question: '¿Cuál es la diferencia entre una moqueta contract y una moqueta residencial?',
    metaTitle: 'Moqueta contract vs residencial | CB Sols lo explica',
    metaDescription: 'Moqueta contract o moqueta residencial: ¿cuáles son las diferencias reales? Normas, durabilidad, precio. CB Sols lo explica de forma sencilla.',
    category: 'Moqueta',
    shortAnswer: 'La moqueta contract está concebida para un uso profesional intensivo: clasificaciones de uso más altas (32-33), certificaciones contra incendios obligatorias (Bfl-s1) y una resistencia mecánica muy superior a la de una moqueta residencial.',
    sections: [
      {
        title: 'Las clasificaciones de uso: el criterio fundamental',
        body: "La principal diferencia entre una moqueta contract y una residencial reside en su clasificación de uso europea. Las moquetas se clasifican del 21 (residencial ligero) al 34 (comercial muy intensivo).\n\nMoqueta residencial: clasificaciones 21 a 23. Concebida para una vivienda familiar con un tránsito limitado. Vida útil: de 5 a 10 años según el uso.\n\nMoqueta contract: clasificaciones 31 a 34. Concebida para oficinas, hoteles, comercios, establecimientos sanitarios. Resistencia probada para cientos de miles de pisadas. Vida útil: de 10 a 20 años según la clasificación y el mantenimiento.\n\nPor debajo de la clasificación 31, una moqueta no está certificada para uso profesional. Colocarla en un hotel o una oficina es una no conformidad reglamentaria, con posibles consecuencias para el seguro en caso de siniestro.",
      },
      {
        title: 'Las certificaciones contra incendios: obligatorias en el ámbito profesional',
        body: "La moqueta residencial no exige ninguna certificación contra incendios particular. Para los establecimientos de pública concurrencia (hoteles, restaurantes, oficinas, administraciones), la normativa francesa impone una clasificación mínima contra incendios.\n\nLa euroclase europea clasifica los revestimientos de A1 (incombustible) a F (no probado). Para la mayoría de los edificios de pública concurrencia, la moqueta de suelo debe ser al menos Cfl-s1 o Bfl-s1 según el tipo de edificio y la planta.\n\nCB Sols facilita de forma sistemática los certificados de conformidad contra incendios con cada proyecto. Estos documentos se exigen en las inspecciones de la comisión de seguridad.",
      },
      {
        title: 'Construcción y durabilidad: lo que se ve (y lo que no)',
        body: "Visualmente, una moqueta contract y una residencial pueden parecerse. Las diferencias están en la construcción:\n\n- Peso superior (910-2000 g/m² en contract hotelero frente a 300-500 g/m² residencial)\n- Reverso reforzado (doble capa de látex, yute o fieltro)\n- Fibras más resistentes (nailon resistente frente a poliéster económico)\n- Tratamientos antimanchas y antibacterianos\n\nUna moqueta residencial colocada en el pasillo de un hotel estará desgastada en 2 o 3 años. La misma superficie con una moqueta EGE Hospitality clasificación 33 durará de 10 a 15 años.",
      },
      {
        title: 'Precio: una diferencia justificada',
        body: "La moqueta contract cuesta más de comprar. Una moqueta residencial se encuentra a 8-15 €/m² material. Una moqueta contract de oficina estándar cuesta 35-55 €/m², y una moqueta de hotel de gama alta (EGE) 35-85 €/m².\n\nPero, teniendo en cuenta la vida útil, la moqueta contract suele salir más barata. Si una moqueta residencial dura 3 años en uso profesional (y luego hay que sustituirla) frente a 12 años para una moqueta contract, el coste anual es radicalmente distinto.\n\nCB Sols coloca moqueta contract tanto para profesionales como para clientes particulares exigentes: en un proyecto en el que la moqueta tiene que durar (una vivienda principal, una casa familiar, un espacio de mucho tránsito), la contract sigue siendo la elección adecuada. Tanto para particulares como para profesionales, no colocamos moqueta residencial en un uso que la condene al fracaso. Es una cuestión de responsabilidad.",
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
    question: '¿Se puede colocar moqueta sobre el embaldosado existente?',
    metaTitle: 'Colocar moqueta sobre embaldosado | Consejos de experto CB Sols',
    metaDescription: '¿Se puede colocar moqueta sobre embaldosado? Condiciones, métodos, ventajas e inconvenientes. Guía técnica de CB Sols en Charente-Maritime.',
    category: 'Técnica de colocación',
    shortAnswer: 'Sí, con condiciones. El embaldosado debe estar plano (tolerancia de 2 mm bajo una regla de 2 m), limpio, sin baldosas sueltas y con las juntas en buen estado. Es obligatoria una capa de nivelación de regularización.',
    sections: [
      {
        title: 'Las condiciones para colocar sobre embaldosado',
        body: "Colocar moqueta sobre embaldosado es técnicamente posible, pero el soporte debe cumplir varios criterios:\n\n1. Planeidad: la tolerancia máxima es de 2 mm bajo una regla de 2 metros. Las baldosas combadas o agrietadas, o las juntas demasiado salientes, se marcarán a través de la moqueta y crearán zonas de abrasión prematura.\n\n2. Solidez: cada baldosa debe estar perfectamente adherida. Una baldosa hueca (que suena a hueco al golpearla) debe recolocarse. Una moqueta sobre una baldosa suelta acabará también despegándose, o incluso creando un escalón peligroso.\n\n3. Limpieza: el embaldosado debe estar desengrasado y libre de cualquier cola o residuo que impida la adherencia. CB Sols realiza una limpieza y aplica una imprimación de adherencia si hace falta.\n\n4. Juntas: las juntas de cemento en buen estado son aceptables. Las juntas agrietadas, sueltas o muy anchas deben rehacerse. Las juntas demasiado salientes pueden rebajarse mecánicamente.",
      },
      {
        title: 'Los métodos de fijación',
        body: "Son posibles dos métodos de fijación para la moqueta sobre embaldosado:\n\nEncolado (el método más habitual en el trabajo profesional): se aplica una cola de suelo adecuada únicamente sobre la capa de nivelación colocada previamente. Es el método más sólido y duradero, recomendado para los espacios de mucho tránsito y las moquetas pesadas.\n\nVarillas de agarre: se clavan o encolan tiras de agarre por el perímetro de la sala. La moqueta se tensa sobre ellas. Este método es posible pero menos recomendable sobre embaldosado, ya que el anclaje de las tiras es menos seguro que sobre hormigón.\n\nCB Sols determina el mejor método al elaborar el presupuesto, tras evaluar el tipo de embaldosado y el uso previsto.",
      },
      {
        title: '¿Hay que retirar las baldosas?',
        body: "No, en la mayoría de los casos. Retirar las baldosas es lento, costoso, genera muchos escombros y arriesga dañar el soporte. Salvo que el embaldosado esté en muy mal estado (múltiples baldosas sueltas, agrietamiento profundo), es mejor colocar la moqueta por encima tras la preparación.\n\nLa única situación en la que la retirada es imprescindible: si la acumulación de niveles (embaldosado antiguo + cualquier revestimiento previo + moqueta nueva) crea un escalón inaceptable respecto a los umbrales de las puertas o las zonas colindantes.\n\nCB Sols evalúa de forma sistemática la acumulación de niveles al elaborar el presupuesto para anticipar estos problemas.",
      },
      {
        title: 'La capa de nivelación de regularización: imprescindible',
        body: "Incluso sobre un embaldosado limpio y plano, las juntas crean un relieve (normalmente de 1 a 3 mm) que se marca y se desgasta de forma prematura bajo la moqueta. La solución: una fina capa de nivelación (autonivelante) aplicada sobre todo el embaldosado para crear una superficie perfectamente plana.\n\nEsta capa cuesta entre 8 y 25 €/m² (estándar P3 6-10 €/m², con fibras 12-30 €/m² sobre madera o espesores grandes). Seca en 4 a 48 horas antes de revestir según el producto. CB Sols comprueba siempre la planeidad tras la capa antes de pasar a la colocación.\n\nPara los proyectos en los que la rapidez es crucial, existen capas de fraguado ultrarrápido (transitables en 30 minutos).",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'duree-vie-moquette-professionnelle',
    datePublished: '2025-09-15',
    dateModified: '2026-03-10',
    question: '¿Cuál es la vida útil de una moqueta profesional?',
    metaTitle: 'Vida útil de una moqueta profesional | CB Sols',
    metaDescription: '¿Cuánto dura una moqueta profesional? Hotel, oficina, administración: vidas útiles reales según el uso y el mantenimiento. Guía CB Sols.',
    category: 'Moqueta',
    shortAnswer: 'Una moqueta profesional bien elegida y bien mantenida dura de 8 a 15 años según el uso. En hoteles: de 8 a 12 años en las habitaciones, de 5 a 8 años en los pasillos. En una oficina clasificación 33: de 12 a 15 años.',
    sections: [
      {
        title: 'Vidas útiles por sector y tipo de uso',
        body: "La vida útil de una moqueta profesional varía considerablemente con la intensidad del tránsito:\n\nHoteles, habitaciones (clasificación 33, peso mínimo de 910 g/m²): de 8 a 12 años con un mantenimiento regular. Las habitaciones de mucha ocupación (más del 90 %) en el segmento de lujo se renuevan con más frecuencia para mantener la imagen.\n\nHoteles, pasillos (clasificación 33-34, alta resistencia): de 5 a 8 años. Los pasillos soportan un tránsito mucho mayor que las habitaciones: carros de limpieza, equipaje, ir y venir constante.\n\nOficinas, espacio diáfano (clasificación 33, losetas): de 10 a 15 años con aspirado semanal e inyección-extracción de agua caliente anual. Las losetas permiten sustituir individualmente las zonas más desgastadas.\n\nCines y salas de espectáculos (clasificación 34): de 12 a 18 años. A pesar del tránsito intenso, la afluencia se concentra en franjas horarias cortas y la limpieza es regular.",
      },
      {
        title: 'Los factores que alargan o acortan la vida útil',
        body: "El mantenimiento es el factor número uno. Una moqueta mal mantenida (aspirado irregular, manchas sin tratar, sin inyección-extracción de agua caliente) puede ver su vida útil reducida a la mitad. A la inversa, un programa de mantenimiento riguroso la prolonga de forma considerable.\n\nEl producto elegido es decisivo. Un peso superior (1100 g/m² frente a 700 g/m²) marca una diferencia notable en el pasillo de un hotel. Lo mismo ocurre con el tipo de fibra: el nailon 6.6 es más resistente a la abrasión que el nailon 6, a su vez superior al poliéster.\n\nEl soporte y la colocación influyen en cómo aguanta con el tiempo. Una moqueta mal encolada se despega por los bordes y forma ondulaciones, causas de un desgaste prematuro y de riesgo de tropiezo. CB Sols prepara siempre el soporte y elige la cola adecuada para garantizar una fijación duradera.\n\nEl clima local también influye en la Charente-Maritime. La humedad alta de las zonas costeras puede afectar al reverso de la moqueta si el soporte no está perfectamente seco.",
      },
      {
        title: 'Las señales que indican que es hora de sustituirla',
        body: "¿Cómo saber cuándo hay que sustituir una moqueta? Varias señales son inequívocas:\n\nApelmazamiento: las fibras están aplastadas y ya no se recuperan tras aspirar. La moqueta pierde su pelo y parece un fieltro desgastado. En esta fase, ningún mantenimiento puede devolverle el aspecto.\n\nManchas persistentes: las manchas que resisten la inyección-extracción de agua caliente profesional suelen ser permanentes. Indican que las fibras están químicamente degradadas.\n\nZonas de desgaste muy localizadas (pasos de puertas, delante de las sillas): en las zonas de losetas, pueden sustituirse esas losetas solas. En la moqueta en rollo, hay que valorar si colocar una tira de sustitución es estéticamente aceptable.\n\nProblemas de adherencia: bordes levantados, ampollas, ondulaciones. Estos defectos estructurales comprometen la seguridad y, por lo general, no tienen arreglo.",
      },
      {
        title: 'Planificar la sustitución para reducir al mínimo el impacto',
        body: "Para los hoteles y establecimientos en funcionamiento, la sustitución de la moqueta se planifica, no se padece. CB Sols recomienda:\n\nRealizar una auditoría cada 5 años para evaluar el estado y anticipar las sustituciones. CB Sols realiza estas auditorías gratuitamente para sus clientes hoteleros.\n\nProgramar la obra en temporada baja. Para un hotel de la Charente-Maritime, la franja ideal va de noviembre a febrero.\n\nPlantearse una sustitución por fases: algunos hoteles prefieren renovar un tercio de las habitaciones cada 3 o 4 años en lugar de todas a la vez. Este enfoque reparte la inversión y reduce el impacto en la actividad.\n\nPresupuestar la sustitución con antelación. CB Sols puede elaborar una estimación plurianual para ayudarle a provisionar esta inversión.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['moquette-hotel'],
  },
  {
    slug: 'sol-pvc-cuisine-professionnelle-norme',
    datePublished: '2025-10-30',
    dateModified: '2026-03-25',
    question: '¿Cuáles son las normas para el suelo de PVC en una cocina profesional?',
    metaTitle: 'Normas del suelo de PVC para cocinas profesionales | CB Sols',
    metaDescription: '¿Qué normas para el suelo de PVC en una cocina profesional? APPCC, antideslizante R11, clasificación contra incendios, juntas soldadas en caliente. CB Sols lo explica.',
    category: 'Suelo de PVC',
    shortAnswer: 'Un suelo de PVC para cocina profesional debe tener una clasificación R10 o R11 (antideslizante), ser resistente a las grasas y los desinfectantes, estar soldado en caliente (cero juntas) y cumplir los requisitos APPCC. Gerflor Mipolam Granit y Taralay Premium son las referencias.',
    sections: [
      {
        title: 'La norma APPCC y sus implicaciones para el suelo',
        body: "El APPCC (Análisis de Peligros y Puntos de Control Crítico) es el sistema de gestión de la seguridad alimentaria obligatorio en todos los establecimientos de restauración profesional. Para los suelos, exige:\n\n- Un revestimiento impermeable: sin porosidad que permita que las bacterias se instalen\n- Una superficie lisa o ligeramente texturada: limpiable con eficacia y sin zonas de retención\n- Sin juntas anchas o accesibles: las juntas de cemento son una fuente de contaminación bacteriana\n- Resistencia a los productos de limpieza y desinfección: álcalis concentrados, desinfectantes clorados, ácidos\n\nEl PVC en láminas soldado en caliente cumple todos estos requisitos. Es la solución APPCC por excelencia: sin junta visible, 100 % impermeable, resistente a los productos de uso habitual en las cocinas.\n\nEl embaldosado con juntas epoxi también puede ser conforme al APPCC, pero mantener el relieve es más exigente. El embaldosado con juntas de cemento es técnicamente no conforme con el APPCC.",
      },
      {
        title: 'La clasificación antideslizante: exigida por el Código de Trabajo',
        body: "El Código de Trabajo francés (artículos R4214-1 y siguientes) exige revestimientos de suelo antideslizantes en los locales con riesgo de resbalón. Las cocinas profesionales se clasifican como locales de alto riesgo.\n\nLa clasificación alemana R (DIN 51130) es la referencia: R9 (riesgo bajo), R10 (riesgo moderado), R11 (riesgo alto con aceites y grasas), R12 (riesgo muy alto).\n\nPara las distintas zonas de una cocina:\n- Comedor (zona seca): R9 mínimo\n- Cocina estándar: R10 mínimo\n- Zona de freidoras, fregadero, zona húmeda caliente: R11 obligatorio\n- Zona de desembalaje y lavado de verduras: R11-R12\n\nCB Sols selecciona de forma sistemática productos R11 mínimo para todas las cocinas profesionales. Un suelo de cocina resbaladizo es un accidente laboral que espera su momento.",
      },
      {
        title: 'La soldadura en caliente: técnica y necesidad',
        body: "La soldadura en caliente es una técnica que crea una unión estanca entre dos láminas de suelo de PVC fundiendo un cordón de soldadura (de la misma composición que el suelo) en la ranura mecanizada entre las dos láminas.\n\nPor qué es obligatoria en una cocina: sin soldadura, la unión entre dos láminas es una junta que, por muy ajustada que sea, deja que los líquidos, la grasa y los microorganismos se filtren bajo el revestimiento. En una cocina profesional, sometida a una limpieza a alta presión, esa filtración es inevitable y rápida.\n\nLa soldadura en caliente exige un equipo específico (una pistola de soldar y boquillas calibradas) y formación técnica. CB Sols forma a sus colocadores en esta técnica y realiza la soldadura en todos sus proyectos de cocina profesional.\n\nLos zócalos sanitarios (el PVC soldado que sube de 10 a 15 cm por las paredes) completan la estanqueidad eliminando la unión suelo/pared, otro punto crítico de contaminación.",
      },
      {
        title: 'Los productos de referencia y sus certificaciones',
        body: "Tres familias de productos son adecuadas para las cocinas profesionales:\n\nGerflor Mipolam Granit: PVC homogéneo, clasificación estándar R10 (R11 bajo pedido), resistencia química P2, certificación NSF para espacios alimentarios. Amplia gama de colores. Vida útil: 20-30 años.\n\nGerflor Taralay Premium Contract: PVC homogéneo, clasificación R10/R11, certificado para locales de restauración, emisiones de COV muy bajas (certificación Indoor Air). Vida útil comparable.\n\nGerflor Taralay Impression Compact: PVC heterogéneo, R10, alta resistencia química, numerosos diseños. Una buena opción para las cocinas en las que el aspecto es prioritario con una resistencia suficiente.\n\nCB Sols suministra las tres marcas y puede mostrarle muestras en la sala de exposición o durante una visita al elaborar el presupuesto.",
      },
    ],
    relatedFaqs: ['pose-moquette-sur-carrelage'],
    relatedSolutions: ['sol-pvc-restaurant'],
  },
  {
    slug: 'devis-revetement-sol-gratuit',
    datePublished: '2025-12-02',
    dateModified: '2026-04-05',
    question: '¿Cómo conseguir un presupuesto gratuito para su revestimiento de suelo?',
    metaTitle: 'Presupuesto gratuito de revestimiento de suelo | Respuesta en 48 h',
    metaDescription: '¿Cómo conseguir un presupuesto gratuito para su revestimiento de suelo? El proceso de CB Sols, los plazos, lo que incluye. Presupuesto en 48 h en Charente-Maritime.',
    category: 'Presupuesto y proceso',
    shortAnswer: 'CB Sols se desplaza gratuitamente por toda la Charente-Maritime para medir, evaluar el soporte y facilitar un presupuesto detallado en 48 horas. Póngase en contacto por teléfono, formulario o correo electrónico con sus planos.',
    sections: [
      {
        title: 'El proceso de CB Sols: del primer contacto al presupuesto',
        body: "Conseguir un presupuesto con CB Sols es sencillo y rápido. Este es el proceso:\n\n1. Primer contacto: llame al 06 85 05 28 80, rellene el formulario en cbsols.fr/contact o envíe un correo a contact@cbsols.fr con una descripción de su proyecto. Si tiene planos o fotos, adjúntelos.\n\n2. Concertar una cita: CB Sols le llama en un plazo de 24 horas en días laborables para concertar una visita. Para los proyectos con planos precisos, puede facilitarse una estimación por correo antes de la visita.\n\n3. Visita: Valentin Prévoteau o un miembro del equipo se desplaza gratuitamente por toda la Charente-Maritime. La visita dura de 30 a 60 minutos según la complejidad. Medimos, evaluamos el estado del soporte y hablamos de sus expectativas estéticas y técnicas.\n\n4. Entrega del presupuesto: el presupuesto se envía por correo en un plazo de 48 horas desde la visita. Está desglosado línea por línea: material, cualquier retirada, preparación del soporte, colocación y acabados. Nada oculto.",
      },
      {
        title: 'Lo que incluye un presupuesto de CB Sols',
        body: "Un presupuesto de CB Sols es completo y transparente. Incluye:\n\n- Una descripción precisa de la obra (superficies, productos, métodos)\n- El detalle sin IVA de cada partida: suministro del material, retirada del revestimiento antiguo (si procede), preparación del soporte (capa de nivelación, imprimación), colocación, soldadura (si procede), acabados (zócalos, umbrales)\n- El precio con IVA indicando el tipo de IVA aplicable (20 % profesional, 10 % renovación residencial en viviendas de más de 2 años)\n- Los plazos de ejecución y la fecha de disponibilidad del equipo\n- El periodo de validez del presupuesto (por lo general 3 meses)\n\nEl presupuesto no conlleva ninguna obligación. Puede pedir productos o métodos alternativos: CB Sols presenta de forma sistemática al menos dos opciones de gama.",
      },
      {
        title: '¿Se puede tener una estimación sin visita?',
        body: "Sí, en algunos casos. Si tiene planos precisos con las superficies en m², fotos del soporte existente e información sobre el tipo de revestimiento deseado, CB Sols puede elaborar una estimación por correo o por teléfono.\n\nEsta estimación se da a título orientativo con un margen (+/- 20 % según el estado real del soporte). Le permite confirmar que el proyecto es viable dentro de su presupuesto antes de concertar una visita.\n\nPara los proyectos grandes (hoteles, grandes superficies de oficinas), la visita siempre es necesaria para un presupuesto preciso y vinculante.\n\nPara enviar sus planos: contact@cbsols.fr o por WhatsApp al 06 85 05 28 80.",
      },
      {
        title: 'La zona de actuación: toda la Charente-Maritime y alrededores',
        body: "CB Sols trabaja en toda la Charente-Maritime (departamento 17): La Rochelle y su área metropolitana, la Île de Ré, la Île d'Oléron, Rochefort, Saintes, Royan, Jonzac y todas las localidades del departamento.\n\nPara los proyectos grandes (hoteles, campings, administraciones), CB Sols también se desplaza a los departamentos vecinos: Charente (16), Vendée (85), Gironde (33). La logística de los desplazamientos se integra en el presupuesto sin sorpresas.\n\nLa distancia no es un obstáculo: CB Sols ha realizado proyectos por toda la costa atlántica. La Île de Ré, la Île d'Oléron y los emplazamientos insulares forman parte de nuestra zona de experiencia habitual.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'sol-pvc-restaurant'],
  },
  {
    slug: 'moquette-allergenes-entretien',
    datePublished: '2026-01-18',
    dateModified: '2026-04-12',
    question: 'Moqueta y alérgenos: ¿qué hay que saber sobre el mantenimiento?',
    metaTitle: 'Moqueta y alérgenos | Higiene, mantenimiento | CB Sols',
    metaDescription: 'Moqueta y alergias: mitos, la realidad científica y el mantenimiento adecuado. Guía CB Sols para disfrutar de una moqueta sana en Charente-Maritime.',
    category: 'Moqueta',
    shortAnswer: 'Al contrario de lo que se cree, la moqueta es el único revestimiento de suelo capaz de atrapar las partículas finas (polvo, polen, alérgenos) en lugar de dejar que circulen por el aire. Con un mantenimiento adecuado (aspirado semanal con filtro HEPA, inyección-extracción de agua caliente cada 2 o 3 años), es perfectamente adecuada para las personas alérgicas.',
    sections: [
      {
        title: 'Por qué la moqueta es en realidad la aliada de los alérgicos',
        body: "La idea extendida de que la moqueta es perjudicial para los alérgicos viene de la moqueta residencial de gama baja mal mantenida. Estudios recientes (en particular el estudio DAAB en Alemania y varias publicaciones científicas europeas) demuestran lo contrario: la moqueta atrapa las partículas finas a ras de suelo en lugar de dejar que circulen por el aire.\n\nSobre un suelo duro (baldosa, madera, PVC), cada movimiento vuelve a poner en suspensión el polvo, el polen y los ácaros del suelo. Sobre una moqueta, estas partículas quedan retenidas en las fibras, donde la aspiradora puede capturarlas de forma definitiva.\n\nEl resultado medido: el aire de una habitación enmoquetada bien mantenida contiene de media la mitad de partículas finas en suspensión que una habitación equivalente con suelo duro.",
      },
      {
        title: 'El mantenimiento adecuado para una moqueta sana',
        body: "Para que una moqueta desempeñe plenamente su papel de filtro pasivo, el mantenimiento sigue tres principios:\n\n1. Aspirado semanal con filtro HEPA: una aspiradora equipada con un filtro HEPA (norma EN 1822) captura el 99,97 % de las partículas de 0,3 micras. Aspire cada habitación una vez por semana, dos en el dormitorio si es usted alérgico.\n\n2. Limpieza por inyección-extracción de agua caliente cada 2 o 3 años: esta limpieza en profundidad extrae el agua sucia y las partículas incrustadas. CB Sols ofrece un servicio anual o bienal según sus necesidades. Secado de 4 a 6 horas.\n\n3. Tratamiento preventivo: las moquetas profesionales (gamas EGE, clasificación 33) están tratadas de fábrica contra los ácaros y las bacterias. Este tratamiento sigue activo de 10 a 15 años.",
      },
      {
        title: 'La elección de moqueta adecuada para un dormitorio',
        body: "Para un dormitorio, en especial una habitación infantil o la de una persona alérgica, recomendamos una moqueta que sea:\n\n- De bucle de tufting o de terciopelo de pelo corto cortado (las fibras largas retienen más polvo difícil de extraer)\n- Con un tratamiento antiácaros y antibacteriano certificado\n- Con un peso de entre 700 y 1100 g/m² (un compromiso de confort / facilidad de aspirado)\n- Compatible con suelo radiante si procede\n\nLas gamas EGE Hospitality y EGE Highline cumplen estos criterios y son las referencias que colocamos tanto para hoteleros como para clientes particulares.",
      },
    ],
    relatedFaqs: ['difference-moquette-contrat-particulier', 'duree-vie-moquette-professionnelle'],
    relatedSolutions: ['moquette-hotel', 'moquette-bureau'],
  },
  {
    slug: 'pvc-salle-de-bains-particulier',
    datePublished: '2026-02-22',
    dateModified: '2026-04-20',
    question: '¿Se puede colocar PVC en un cuarto de baño (más cálido, menos resbaladizo)?',
    metaTitle: 'Suelo de PVC en un cuarto de baño | Estanco, antideslizante | CB Sols',
    metaDescription: 'Suelo de PVC en un cuarto de baño: 100 % estanco, antideslizante R10/R11, cálido al pisar. Guía CB Sols para clientes particulares en Charente-Maritime.',
    category: 'Suelo de PVC',
    shortAnswer: 'Sí. El PVC en láminas profesional con juntas soldadas en caliente (Gerflor Taralay, objectflor) es 100 % estanco, antideslizante R10 o R11 según la gama y notablemente más cálido que la baldosa. Es una excelente alternativa para un cuarto de baño particular.',
    sections: [
      {
        title: 'Por qué el PVC tiene sentido en un cuarto de baño',
        body: "El PVC moderno no tiene nada que ver con el linóleo de gama baja. Las gamas profesionales que colocamos en los cuartos de baño ofrecen tres ventajas clave frente a la baldosa:\n\n1. Confort térmico: el PVC es notablemente menos frío al pie descalzo que la baldosa o la piedra. Su conductividad térmica es unas tres veces menor. Ideal al salir de la ducha o la bañera.\n\n2. Seguridad: las gamas para cuarto de baño tienen una clasificación R10 o R11 (antideslizante en presencia de agua). A modo de comparación, el embaldosado estándar es R9 o menos una vez mojado.\n\n3. Estanqueidad perfecta: colocado en láminas (rollos) con juntas soldadas en caliente, el PVC es 100 % estanco. Sin juntas de cemento que se ennegrecen con el tiempo, sin riesgo de filtración bajo la ducha.",
      },
      {
        title: 'Las gamas adecuadas para un cuarto de baño particular',
        body: "Para un cuarto de baño particular, dos opciones principales:\n\nPVC en láminas (rollos): la solución más segura, sobre todo con una ducha a ras de suelo. Gerflor Taralay Premium u objectflor expona: 2-3 mm de espesor, R10/R11, juntas soldadas en caliente invisibles, vida útil de 15-28 años.\n\nLamas LVT a clic: para un cuarto de baño con plato de ducha o bañera (sin ducha a ras de suelo), se pueden usar lamas LVT premium. Aspecto madera o piedra muy realista, colocación más rápida. Gerflor Creation 55 u objectflor LooseLay: vida útil de más de 20 años, pero la estanqueidad depende de la calidad de las uniones.\n\nEvaluamos en la visita qué solución se adapta mejor a su cuarto de baño.",
      },
      {
        title: 'Preparación del soporte y colocación',
        body: "Un cuarto de baño particular se prepara con rigor:\n\n1. Cualquier retirada del embaldosado antiguo si está demasiado irregular (algo raro; el PVC a menudo se coloca encima tras una capa de nivelación)\n2. Una capa de regularización P3 con fibras para neutralizar las juntas y crear una superficie perfectamente plana (tolerancia de 2 mm bajo una regla de 2 m)\n3. Una imprimación de adherencia adecuada\n4. Colocación encolada del PVC en láminas o colocación flotante a clic del LVT\n5. Soldadura en caliente de las juntas (solo PVC en láminas) con un cordón de soldadura a juego con el color\n6. Acabados: zócalo sanitario (de 5 a 10 cm por la pared) o un zócalo encajado, sellado de silicona sanitaria alrededor de la ducha/bañera\n\nPrevea de 1 a 2 días según la superficie. El cuarto de baño puede usarse 24 horas después de la colocación.",
      },
    ],
    relatedFaqs: ['sol-pvc-cuisine-professionnelle-norme', 'pose-moquette-sur-carrelage'],
    relatedSolutions: ['sol-pvc-hotel', 'sol-pvc-restaurant'],
  },
]

export function getEsFaqBySlug(slug: string): EsFaq | undefined {
  return esFaqs.find((f) => f.slug === slug)
}
