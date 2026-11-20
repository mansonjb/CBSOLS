// EN-only city content, colocated under /en (FR data left untouched).
// Faithful native-English translation of src/data/cities.ts. No invented facts.
export interface EsCity {
  slug: string
  name: string
  department: string
  zone: 'la-rochelle' | 'ile-de-re' | 'ile-doleron' | 'charente-maritime'
  description: string
  population?: number
  localContext?: string
  localFootnote?: string
}

export const esCities: EsCity[] = [
  // La Rochelle and surrounding area
  {
    slug: 'la-rochelle',
    name: 'La Rochelle',
    department: '17',
    zone: 'la-rochelle',
    description: 'capital de Charente-Maritime',
    population: 80000,
    localContext:
      "La Rochelle es nuestro terreno de cada día. Trabajamos tanto en las oficinas y consultas del centro y de Les Minimes como en los hermosos edificios antiguos del Vieux-Port, donde cada suelo de madera tiene su propia historia. El barrio está vivo, en constante renovación, y las exigencias son altas: un suelo tiene que ser bonito, duradero y bien rematado. El aire marino y la humedad hacen que nos tomemos el tiempo de comprobar el soporte antes de colocar, sobre todo en las plantas bajas de los edificios antiguos. Es un paso que nunca saltamos, porque es lo que garantiza que el suelo aguante diez o quince años sin moverse. Nuestro taller de Villedoux está a un cuarto de hora, lo que nos permite ser reactivos y seguir de cerca cada proyecto.",
    localFootnote:
      "En el centro antiguo protegido, los suelos visibles desde la calle pueden requerir la aprobación del organismo francés del patrimonio (Bâtiments de France). Nos encargamos de ese trámite por adelantado para ahorrarle sorpresas desagradables.",
  },
  {
    slug: 'aytre',
    name: 'Aytré',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad limítrofe con La Rochelle',
    population: 9000,
    localContext:
      "Aytré combina un polígono industrial activo (Alstom y sus subcontratistas ferroviarios), un tejido residencial de los años 1970-90 y una franja costera expuesta a la brisa marina. El parque residencial mezcla casas charentesas bajas y tradicionales con promociones recientes de propietarios, con una proporción creciente de recrecidos autonivelantes en las nuevas urbanizaciones del norte de la localidad.",
    localFootnote:
      "En las casas anteriores a 1980 del lado de la playa, la humedad residual en las soleras de hormigón vertido sigue siendo un punto a vigilar antes de una colocación encolada.",
  },
  {
    slug: 'chatelaillon-plage',
    name: 'Châtelaillon-Plage',
    department: '17',
    zone: 'la-rochelle',
    description: 'balneario dentro de la aglomeración de La Rochelle',
    population: 6500,
    localContext:
      "Châtelaillon-Plage es un balneario familiar que conocemos bien. Aquí se encuentra de todo: las villas frente al mar con sus bonitas fachadas antiguas, las casas de los años sesenta, los bloques de apartamentos de alquiler vacacional y las promociones más recientes algo retiradas de la playa. Cada tipo de vivienda requiere una solución diferente, y eso es precisamente lo que hace interesantes los proyectos aquí. El mar está ahí mismo, y el aire salino y la humedad invernal se dejan sentir en las estancias de planta baja, sobre todo las mal aisladas. Por eso, antes de colocar nada, comprobamos el estado del soporte y recomendamos revestimientos que duren a pesar de este clima exigente. Nuestro taller de Villedoux está a unos quince minutos, lo que hace sencillo el seguimiento de cada proyecto.",
    localFootnote:
      "Algunas villas antiguas frente al mar están protegidas como patrimonio. Cuando un suelo es visible desde la calle, validamos el proyecto con el organismo francés del patrimonio (Bâtiments de France) antes de empezar.",
  },
  {
    slug: 'angoulins',
    name: 'Angoulins-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad costera cerca de La Rochelle',
    population: 4000,
    localContext:
      "Angoulins-sur-Mer tiene un tejido esencialmente residencial: casas de los años 1970-90, casas charentesas tradicionales de piedra y revoco de cal, urbanizaciones recientes. La proximidad inmediata de la costa y el nivel freático alto exponen las soleras de hormigón de planta única a ascensos de humedad regulares, en particular en los edificios anteriores a las normativas térmicas.",
    localFootnote:
      "Hay que prever baldosas antiguas encoladas con betún en las casas de los años setenta. Es obligatorio un diagnóstico previo de amianto.",
  },
  {
    slug: 'nieul-sur-mer',
    name: 'Nieul-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad residencial al norte de La Rochelle',
    population: 5500,
    localContext:
      "Nieul-sur-Mer combina un núcleo antiguo en torno a la iglesia, casas de los años 1960-90 en zonas de urbanización y una proporción creciente de nuevas promociones agrupadas al norte. La franja costera (Lauzières, Pampin) suma viviendas de planta única expuestas al viento y a la sal. Predominantemente residencial, con poco espacio comercial y con rehabilitaciones de casas longeras de piedra hacia las aldeas.",
    localFootnote:
      "En las casas longeras charentesas rehabilitadas, los suelos originales de baldosa hexagonal o de piedra necesitan una capa niveladora reforzada con fibra antes de colocar un revestimiento resiliente.",
  },
  {
    slug: 'lhoumeau',
    name: "L'Houmeau",
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad residencial dentro de la aglomeración de La Rochelle',
    population: 4200,
    localContext:
      "L'Houmeau es una localidad residencial apoyada en la costa norte de La Rochelle, con un parque de viviendas dominado por construcciones de los años 1970-2000 y algunas promociones recientes. La proximidad inmediata de la costa y de la Anse de Pampin expone las plantas bajas a la humedad invernal, en particular en las casas sin cámara sanitaria de las urbanizaciones más antiguas.",
    localFootnote:
      "Varias urbanizaciones de la localidad tienen soleras de hormigón finas. Compruebe la planitud antes de colocar laminado o LVT de clic.",
  },
  {
    slug: 'lagord',
    name: 'Lagord',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad residencial dinámica cerca de La Rochelle',
    population: 7500,
    localContext:
      "Lagord es una de las localidades más dinámicas de la aglomeración de La Rochelle, con un fuerte crecimiento residencial reciente: numerosas promociones de apartamentos y parcelas de autoconstrucción entregadas desde 2010, junto a un parque de viviendas de los años 1970-2000. También hay equipamientos comerciales (una clínica, la zona de actividad de Beauregard) y un pequeño tejido comercial a lo largo de la D105.",
    localFootnote:
      "Las promociones de obra nueva recientes usan recrecido autonivelante de cemento o de anhidrita. Hay que respetar el tiempo de secado (1 mm/día para la anhidrita) antes de una colocación encolada.",
  },
  {
    slug: 'perigny',
    name: 'Périgny',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad dentro de la aglomeración de La Rochelle',
    population: 5000,
    localContext:
      "Périgny es ante todo uno de los grandes parques empresariales de la aglomeración, con sus naves, talleres, salas de exposición y numerosas oficinas de pymes. Trabajamos allí mucho en locales profesionales, donde el suelo tiene que soportar un tránsito intenso a diario sin deteriorarse. La localidad tiene también barrios residenciales más tranquilos y algunas promociones recientes, con una demanda más convencional de rehabilitación y de obra nueva. Nuestro papel aquí es sobre todo entender el uso real de cada espacio antes de recomendar un revestimiento: una oficina, una tienda y un taller no tienen las mismas exigencias. Con sede en Villedoux, a unos minutos, conocemos bien el tejido local y sus necesidades.",
    localFootnote:
      "En locales por donde circulan carros y transpaletas, preferimos un suelo vinílico robusto diseñado para tránsito intenso antes que un revestimiento de clic más frágil.",
  },
  {
    slug: 'puilboreau',
    name: 'Puilboreau',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad en rápido crecimiento cerca de La Rochelle',
    population: 8500,
    localContext:
      "Puilboreau combina el gran parque comercial de Beaulieu (más de 100 tiendas), un tejido comercial en crecimiento y un parque residencial que se expande con rapidez, con numerosas promociones nuevas de apartamentos e individuales. La localidad registra mucha primera colocación sobre recrecido autonivelante reciente, así como la sustitución de suelos vinílicos en espacios comerciales de gran afluencia.",
    localFootnote:
      "En el parque de Beaulieu, las renovaciones de arrendamiento exigen a menudo una colocación fuera del horario de apertura. Es preferible un adhesivo de fraguado rápido.",
  },
  {
    slug: 'saint-xandre',
    name: 'Saint-Xandre',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad residencial cerca de La Rochelle',
    population: 3800,
    localContext:
      "Saint-Xandre es una localidad residencial periurbana con un tejido dominado por casas de los años 1970-2000 y algunas urbanizaciones nuevas recientes. El centro del pueblo conserva algunas casas charentesas de piedra con revoco de cal y baldosa hexagonal original. Poca presencia comercial, con una demanda orientada a la rehabilitación de viviendas y a la colocación en obra nueva.",
    localFootnote:
      "Varias casas del centro del pueblo conservan baldosa hexagonal o suelos de madera originales. Para las rehabilitaciones de patrimonio, prefiera un levantado cuidadoso.",
  },
  {
    slug: 'villedoux',
    name: 'Villedoux',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad rural de la aglomeración de La Rochelle, sede de CB Sols',
    population: 2100,
    localContext:
      "Villedoux es una localidad rural en el límite de las marismas, con un tejido mixto agrícola y residencial. El parque de edificios combina granjas y casas longeras charentesas tradicionales, casas de los años 1980-2000 y algunas promociones nuevas recientes. La proximidad de la marisma y el nivel freático alto obligan a comprobar de forma sistemática la humedad del soporte en las plantas bajas.",
    localFootnote:
      "En el borde de la marisma, muchas soleras antiguas no tienen barrera capilar. Casi siempre se necesita una barrera antihumedad antes de un revestimiento resiliente.",
  },
  // Île de Ré
  {
    slug: 'saint-martin-de-re',
    name: 'Saint-Martin-de-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'capital de la Île de Ré, villa fortificada declarada Patrimonio de la Humanidad por la UNESCO',
    population: 2700,
    localContext:
      "Saint-Martin-de-Ré es un lugar aparte, inscrito en el Patrimonio Mundial de la UNESCO, con sus fortificaciones, sus casas bajas de piedra blanca y sus callejones en torno al puerto. La mayoría de las viviendas son segundas residencias o alquileres vacacionales, lo que significa suelos que han de mantenerse impecables temporada tras temporada. Colocar un revestimiento aquí exige cuidado y respeto por el espíritu del lugar: no se trata una casa antigua de Ré como una construcción reciente. El aire salino y la humedad invernal obligan casi siempre a proteger el soporte antes de colocar, sin lo cual un suelo resiliente no aguantaría. Es una precaución que tomamos de forma natural. Desde nuestro taller de Villedoux la isla es de fácil acceso y trabajamos allí con regularidad.",
    localFootnote:
      "La zona está estrechamente protegida. Cualquier material visible desde la calle, suelo, rodapié o umbral, debe aprobarse antes de empezar la obra. Gestionamos estos trámites con el organismo francés del patrimonio (Bâtiments de France).",
  },
  {
    slug: 'la-flotte',
    name: 'La Flotte-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'pueblo costero de la Île de Ré',
    population: 3000,
    localContext:
      "La Flotte-en-Ré, incluida entre los Pueblos más Bonitos de Francia, tiene un denso tejido antiguo de edificios de piedra caliza y revoco de cal en torno al puerto, completado por segundas residencias y alquileres vacacionales en las afueras. Muchas casas antiguas de pescadores, a menudo sin cámara sanitaria, expuestas a la sal marina y a una humedad invernal sostenida.",
    localFootnote:
      "Núcleo del pueblo en zona protegida: los suelos visibles desde la calle (entrada, escaparate) requieren el dictamen del arquitecto del patrimonio (ABF).",
  },
  {
    slug: 'le-bois-plage-en-re',
    name: 'Le Bois-Plage-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'localidad costera de la Île de Ré',
    population: 2500,
    localContext:
      "Le Bois-Plage-en-Ré mezcla un pueblo antiguo de casas bajas de Ré con una alta densidad de segundas residencias y de campings enclavados en los pinares, junto a las playas. Es una localidad que vive al ritmo de las temporadas, y muchos propietarios de alquileres vacacionales renuevan sus suelos cada año para recibir a los veraneantes en las mejores condiciones. Por eso trabajamos tanto en casas antiguas con carácter como en alquileres más recientes. La proximidad de la playa y la arena que se cuela por todas partes nos orientan hacia revestimientos fáciles de mantener y resistentes a un uso intenso. Nuestro conocimiento de la isla y la cercanía de nuestro taller de Villedoux nos permiten cumplir los plazos cortos que impone el cambio de temporada.",
    localFootnote:
      "Para los alquileres junto a la playa, recomendamos revestimientos muy resistentes que toleren bien la arena y el tránsito repetido de los veraneantes.",
  },
  {
    slug: 'rivedoux-plage',
    name: 'Rivedoux-Plage',
    department: '17',
    zone: 'ile-de-re',
    description: 'primera localidad de la Île de Ré al llegar desde el puente',
    population: 2200,
    localContext:
      "Rivedoux-Plage es la primera localidad de Ré nada más pasar el puente, con un tejido reciente dominado por segundas residencias de los años 1970-2000 y urbanizaciones costeras. Menos patrimonio protegido que en Saint-Martin, pero una exposición directa al aire marino y al viento atlántico. Hay algunos bloques de apartamentos frente al mar, algo raro en la isla.",
    localFootnote:
      "Franja costera muy expuesta a la sal: prefiera rodapiés de PVC o de resina antes que los de MDF chapado en melamina, que se degradan con la brisa repetida.",
  },
  {
    slug: 'ars-en-re',
    name: 'Ars-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'pueblo auténtico y protegido de la Île de Ré',
    population: 1300,
    localContext:
      "Ars-en-Ré, incluido entre los Pueblos más Bonitos de Francia, conserva un denso núcleo antiguo de casas bajas de Ré de piedra y cal en torno al puerto y a su campanario blanco y negro. Un tejido predominantemente patrimonial, una alta proporción de segundas residencias y poca construcción nueva. La humedad invernal y la sal del ambiente afectan a los viejos suelos de madera y a las soleras de hormigón sin aislamiento.",
    localFootnote:
      "Núcleo del pueblo protegido: las sustituciones de suelo en las tiendas del puerto siempre se tramitan con el arquitecto del patrimonio (ABF).",
  },
  {
    slug: 'la-couarde-sur-mer',
    name: 'La Couarde-sur-Mer',
    department: '17',
    zone: 'ile-de-re',
    description: 'localidad costera central de la Île de Ré',
    population: 1400,
    localContext:
      "La Couarde-sur-Mer ocupa una posición central en la isla, con un pueblo antiguo de casas tradicionales de Ré y un interior de segundas residencias en los pinares. Un tejido predominantemente patrimonial de piedra y revoco de cal, completado por construcciones más recientes hacia la playa y el camping. La demanda local está impulsada por la rehabilitación estacional.",
    localFootnote:
      "En las casas antiguas de piedra, la planitud suele ser deficiente: prevea una capa niveladora P3 sobre la baldosa hexagonal o las soleras de hormigón envejecidas.",
  },
  {
    slug: 'sainte-marie-de-re',
    name: 'Sainte-Marie-de-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'localidad dinámica en el sur de la Île de Ré',
    population: 3200,
    localContext:
      "Sainte-Marie-de-Ré es una de las localidades más pobladas todo el año de Ré, con un tejido residencial activo que combina casas antiguas de Ré en el pueblo y en La Noue, urbanizaciones recientes y promociones nuevas. Un tejido mixto con una proporción significativa de construcciones de los años 1980-2010, y una demanda impulsada tanto por las residencias principales como por el mercado estacional.",
    localFootnote:
      "Varias zonas de la localidad están incluidas en un área de protección del patrimonio (AVAP). Cualquier colocación visible desde la calle debe aprobarse previamente en el ayuntamiento.",
  },
  {
    slug: 'loix',
    name: 'Loix',
    department: '17',
    zone: 'ile-de-re',
    description: 'pequeño pueblo ostrícola de la Île de Ré',
    population: 800,
    localContext:
      "Loix es un pequeño pueblo ostrícola apartado de la carretera principal, con un denso tejido tradicional de piedra y cal en torno a la iglesia fortificada. Una fuerte presencia de cabañas ostrícolas en las marismas, en su mayoría segundas residencias y poco comercio. Alta salinidad, humedad de marisma y muchas soleras antiguas mal aisladas del terreno.",
    localFootnote:
      "Núcleo del pueblo protegido y marisma incluida en Natura 2000: las licencias y las obras de suelo sensibles deben coordinarse con el ABF y el ayuntamiento.",
  },
  {
    slug: 'les-portes-en-re',
    name: 'Les Portes-en-Ré',
    department: '17',
    zone: 'ile-de-re',
    description: 'localidad en el extremo noroeste de la Île de Ré',
    population: 700,
    localContext:
      "Les Portes-en-Ré cierra el extremo noroeste de la isla, con una proporción muy alta de segundas residencias de gama alta en los pinares y en torno al Fier d'Ars. Un tejido tradicional de Ré en el pueblo, completado por discretas villas contemporáneas entre los pinos. Exposición directa a los vientos del oeste y a la sal, con poca presencia durante todo el año.",
    localFootnote:
      "Los proyectos son en su mayoría estacionales, entre octubre y abril. Hay que anticipar la logística de entrega, ya que es posible poco almacenamiento local.",
  },
  // Charente-Maritime
  {
    slug: 'rochefort',
    name: 'Rochefort',
    department: '17',
    zone: 'charente-maritime',
    description: 'ciudad histórica de Charente-Maritime',
    population: 23000,
    localContext:
      "Rochefort sigue llevando la huella de su pasado como arsenal real, con sus calles trazadas a regla y sus edificios de piedra de sillería. Es una ciudad en plena rehabilitación, donde trabajamos tanto en hermosos pisos antiguos del centro como en oficinas administrativas, locales sanitarios y casas de los barrios más nuevos. Cada proyecto tiene su propia lógica: un piso antiguo pide respetar lo que hay, mientras que un espacio profesional exige robustez. Nuestro trabajo es encontrar el revestimiento adecuado para cada uso, teniendo en cuenta el estado real del suelo existente, que siempre comprobamos antes de colocar. Rochefort está a unos treinta minutos de nuestro taller de Villedoux, en una zona que cubrimos con regularidad.",
    localFootnote:
      "En el centro histórico protegido, las sustituciones de suelo en las zonas comunes de los edificios antiguos requieren aprobación previa. Anticipamos esas autorizaciones por usted.",
  },
  {
    slug: 'saintes',
    name: 'Saintes',
    department: '17',
    zone: 'charente-maritime',
    description: 'subprefectura de Charente-Maritime',
    population: 25000,
    localContext:
      "Saintes es una ciudad impregnada de historia, marcada por su anfiteatro romano, su abadía y su piedra dorada de la Saintonge. En el centro trabajamos sobre todo en edificios antiguos, en viviendas y tiendas donde el suelo forma parte plena del carácter del lugar. Alrededor, los barrios periféricos y residenciales aportan una demanda de rehabilitación más cotidiana. La piedra local es blanda y algo porosa, y los suelos antiguos colocados directamente sobre la tierra pueden retener humedad. Antes de colocar un revestimiento encolado nos tomamos, por tanto, el tiempo de medir el estado del soporte: es lo que evita levantamientos y sorpresas desagradables unos meses después. Saintes está entre las ciudades de Charente-Maritime que atendemos desde nuestro taller de Villedoux.",
    localFootnote:
      "La piedra de la Saintonge deja pasar la humedad. En un suelo antiguo colocado directamente sobre la tierra, comprobamos siempre el nivel de humedad antes de una colocación encolada.",
  },
  {
    slug: 'royan',
    name: 'Royan',
    department: '17',
    zone: 'charente-maritime',
    description: 'balneario emblemático de la costa atlántica',
    population: 18000,
    localContext:
      "Royan tiene una identidad arquitectónica única, nacida de su reconstrucción de posguerra, con su iglesia de hormigón, su mercado central y sus villas de líneas modernas. El frente marítimo alinea bloques de apartamentos de los años cincuenta y sesenta, donde a menudo trabajamos para renovar pisos de vacaciones. También hay hermosas villas antiguas conservadas y promociones nuevas. Esta diversidad hace que cada proyecto sea distinto, y nos gusta ajustar el revestimiento al espíritu de la vivienda tanto como a su uso real. Como en toda la costa, conviene detenerse en la humedad de la planta baja antes de colocar. Royan está a unos cuarenta y cinco minutos de nuestro taller de Villedoux, en una zona que cubrimos con regularidad.",
    localFootnote:
      "El centro reconstruido está reconocido como patrimonio del siglo XX. En las zonas comunes, la elección de suelos y rodapiés puede estar regulada, algo que tenemos en cuenta desde el principio.",
  },
  {
    slug: 'surgeres',
    name: 'Surgères',
    department: '17',
    zone: 'charente-maritime',
    description: 'localidad agrícola dinámica de Charente-Maritime',
    population: 6500,
    localContext:
      "Surgères es una localidad a la vez agrícola y orientada a la industria agroalimentaria, muy conocida por su sector lácteo. En torno a su iglesia románica y a su castillo, el centro del pueblo conserva un encanto antiguo, y a su alrededor se extienden los barrios residenciales. Trabajamos allí en proyectos variados: casas en rehabilitación, tiendas del centro, pero también locales profesionales con exigencias particulares. Esta doble naturaleza, residencial y profesional, es lo que hace ricos los proyectos de aquí. En cada caso empezamos por entender el uso de la estancia antes de proponer un suelo adecuado, ya se trate del confort en casa o de la resistencia en un espacio de trabajo. Surgères está entre las localidades que atendemos desde nuestro taller de Villedoux.",
    localFootnote:
      "En los locales ligados a la industria agroalimentaria, la higiene es lo primero: colocamos suelos estancos y fáciles de limpiar, diseñados para cumplir las normas del sector.",
  },
  {
    slug: 'saint-jean-dangely',
    name: "Saint-Jean-d'Angély",
    department: '17',
    zone: 'charente-maritime',
    description: 'ciudad histórica de Charente-Maritime',
    population: 7500,
    localContext:
      "Saint-Jean-d'Angély ha conservado un magnífico corazón medieval, en torno a su abadía real y a sus casas con entramado de madera, en una de las rutas a Compostela. Es una ciudad donde el patrimonio se vive a diario, y donde colocar un suelo exige delicadeza y buen ojo para el detalle. Rehabilitamos tanto viviendas antiguas y tiendas del centro como casas más recientes de los barrios periféricos. Trabajar en edificios antiguos significa adaptarse a suelos que nunca están perfectamente nivelados: ahí es donde marca la diferencia la experiencia que CB Sols ha acumulado desde 1998. Saint-Jean-d'Angély está entre las ciudades de Charente-Maritime que atendemos desde nuestro taller de Villedoux.",
    localFootnote:
      "El centro antiguo está protegido. Las obras de suelo en edificios catalogados requieren autorización previa, un trámite que gestionamos antes del proyecto.",
  },
  {
    slug: 'marennes',
    name: 'Marennes-Hiers-Brouage',
    department: '17',
    zone: 'charente-maritime',
    description: 'capital ostrícola del estuario del Seudre',
    population: 5500,
    localContext:
      "Marennes-Hiers-Brouage reúne la localidad de Marennes (capital ostrícola), la ciudadela protegida de Brouage y Hiers. Un tejido dominado por casas bajas de piedra y cal, cabañas ostrícolas en los lechos de las salinas y un centro comercial de pueblo. Una fuerte industria ostrícola con sus propias necesidades (locales de expedición, vestuarios) y un carácter residencial moldeado por las marismas.",
    localFootnote:
      "Brouage, en sector protegido: las sustituciones de suelo en las tiendas y viviendas dentro de las murallas se tramitan con el arquitecto del patrimonio del departamento (ABF).",
  },
  {
    slug: 'saujon',
    name: 'Saujon',
    department: '17',
    zone: 'charente-maritime',
    description: 'ciudad termal de Charente-Maritime',
    population: 6000,
    localContext:
      "Saujon es una ciudad termal reconocida, donde los establecimientos sanitarios y las residencias para curistas ocupan un lugar importante junto al centro antiguo del pueblo y los barrios residenciales. Es un contexto que apreciamos, porque aquí los suelos desempeñan un papel real: en una habitación o un pasillo de un establecimiento asistencial, el revestimiento tiene que ser cómodo, silencioso y fácil de mantener, sin dejar de ser acogedor. Trabajamos tanto en estos espacios compartidos como para clientes particulares que rehabilitan su vivienda. Entender el uso de cada estancia antes de colocar es nuestra manera de garantizar un resultado que perdura. Saujon está entre las ciudades de Charente-Maritime que atendemos desde nuestro taller de Villedoux.",
    localFootnote:
      "En los establecimientos sanitarios, los suelos deben cumplir requisitos precisos de confort acústico y de seguridad contra incendios. Colocamos revestimientos certificados para estos usos.",
  },
  {
    slug: 'fouras',
    name: 'Fouras',
    department: '17',
    zone: 'charente-maritime',
    description: 'península costera frente a la Île d\'Aix',
    population: 4000,
    localContext:
      "Fouras ocupa una península frente a la Île d'Aix, con un tejido costero que combina villas de la Belle Époque conservadas, casas charentesas de pescadores, bloques de apartamentos de los años 1960-80 y promociones nuevas. Una fuerte estacionalidad, una exposición directa a la brisa marina por tres lados y un patrimonio militar (el fuerte Vauban, Fort Énet) que moldea la identidad de la localidad.",
    localFootnote:
      "Las villas de la Belle Époque suelen estar protegidas como patrimonio: en la rehabilitación se aconseja conservar las baldosas hidráulicas y hexagonales originales de la entrada.",
  },
  {
    slug: 'tonnay-charente',
    name: 'Tonnay-Charente',
    department: '17',
    zone: 'charente-maritime',
    description: 'localidad de la aglomeración de Rochefort',
    population: 8000,
    localContext:
      "Tonnay-Charente, antiguo puerto fluvial comercial, conserva un núcleo antiguo apoyado en el Charente, con muelles y almacenes del siglo XIX en parte rehabilitados. Un tejido de viviendas predominantemente residencial de los años 1960-2000, completado por promociones nuevas recientes y un parque empresarial. Un notable puente colgante es un hito estructurante.",
    localFootnote:
      "Antiguos almacenes portuarios convertidos en viviendas: soleras industriales de hormigón gruesas, a menudo en buen estado, con las que basta una capa niveladora ligera.",
  },
  {
    slug: 'pons',
    name: 'Pons',
    department: '17',
    zone: 'charente-maritime',
    description: 'etapa histórica en el Camino de Santiago de Compostela',
    population: 4500,
    localContext:
      "Pons es una etapa de peregrinación declarada Patrimonio de la Humanidad por la UNESCO, con una torre del homenaje románica, un hospital de peregrinos y un corazón medieval de piedra caliza de sillería. Un tejido mixto antiguo comercial y residencial, barrios periféricos del siglo XIX y urbanizaciones residenciales en las afueras. Un fuerte patrimonio arquitectónico, con una demanda local impulsada por la rehabilitación de edificios antiguos y de viviendas residenciales.",
    localFootnote:
      "Edificios declarados por la UNESCO: las obras en los suelos visibles desde las calles de la ruta de peregrinación están sujetas a la aprobación del ABF.",
  },
  {
    slug: 'jonzac',
    name: 'Jonzac',
    department: '17',
    zone: 'charente-maritime',
    description: 'subprefectura de Charente-Maritime',
    population: 3500,
    localContext:
      "Jonzac es una subprefectura termal y vitícola (coñac, pineau) con un castillo medieval, unos baños termales modernos y un centro comercial de piedra caliza. Un tejido mixto que combina oficinas administrativas, equipamientos sanitarios, residencias para curistas y vivienda. Un clima más continental que el de la costa, con menos humedad ambiental pero mayores oscilaciones de temperatura.",
    localFootnote:
      "Un clima más seco que el de la zona costera: mayor riesgo de abarquillamiento en los suelos de madera maciza si la humedad interior no se controla en invierno.",
  },
  // More of Greater La Rochelle
  {
    slug: 'dompierre-sur-mer',
    name: 'Dompierre-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad residencial dentro de la aglomeración de La Rochelle',
    population: 6200,
    localContext:
      "Dompierre-sur-Mer es una localidad residencial en expansión al este de La Rochelle, atravesada por el canal de Marans. Un tejido dominado por casas de los años 1980-2010 y varias promociones recientes de parcelas agrupadas. Un centro antiguo del pueblo en torno a la iglesia, poco espacio comercial, con una demanda local impulsada por la rehabilitación de casas y la colocación en obra nueva.",
    localFootnote:
      "Las promociones nuevas recientes son frecuentes: acuérdese de pedir el certificado de secado del recrecido autonivelante antes de programar la colocación.",
  },
  {
    slug: 'croix-chapeau',
    name: 'Croix-Chapeau',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad dentro de la aglomeración de La Rochelle',
    population: 2800,
    localContext:
      "Croix-Chapeau es una pequeña localidad periurbana al sureste de La Rochelle, con un tejido de viviendas mayoritariamente de los años 1980-2010, completado por algunas casas charentesas antiguas en el centro del pueblo y urbanizaciones nuevas en expansión. Un carácter rural marcado, pocos comercios, con una demanda orientada a la rehabilitación y a la colocación en obra nueva.",
    localFootnote:
      "Parque predominantemente reciente: pocos problemas de amianto o de plomo, pero compruebe la planitud de las soleras antes de colocar LVT de clic.",
  },
  {
    slug: 'saint-rogatien',
    name: 'Saint-Rogatien',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad residencial cerca de La Rochelle',
    population: 3500,
    localContext:
      "Saint-Rogatien es una tranquila localidad residencial al sur de La Rochelle, con un tejido de viviendas dominante de los años 1970-2000 y urbanizaciones nuevas en expansión. Un pequeño centro del pueblo con algunas casas charentesas antiguas de piedra y cal. Poco espacio comercial, con una demanda local principalmente residencial, tanto en rehabilitación como en obra nueva.",
    localFootnote:
      "Casas de los años 1970-80: soleras de hormigón a veces agrietadas por asientos diferenciales, prevea una capa niveladora P3 reforzada con fibra.",
  },
  {
    slug: 'yves',
    name: 'Yves',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad costera dentro de la aglomeración de La Rochelle',
    population: 1200,
    localContext:
      "Yves es una pequeña localidad costera entre La Rochelle y Châtelaillon, bordeada por la reserva natural de la Baie d'Yves. Un tejido de viviendas dominante de los años 1970-2000, algunas casas antiguas en el pueblo y un carácter rural conservado. Alta humedad ambiental ligada a la proximidad inmediata de la bahía y las marismas, con exposición al viento del oeste.",
    localFootnote:
      "Franja costera húmeda con nivel freático alto: se aconseja una prueba con higrómetro en las soleras de hormigón de planta única antes de una colocación encolada.",
  },
  {
    slug: 'salles-sur-mer',
    name: 'Salles-sur-Mer',
    department: '17',
    zone: 'la-rochelle',
    description: 'localidad dentro de la aglomeración de La Rochelle',
    population: 3100,
    localContext:
      "Salles-sur-Mer es una localidad periurbana al sur de La Rochelle, con un tejido de viviendas dominante de los años 1970-2010 y varias urbanizaciones recientes. Un pueblo antiguo conservado con casas charentesas de piedra y cal y equipamientos escolares estructurantes. Una demanda residencial local impulsada por la rehabilitación de casas y por nuevas promociones de propietarios.",
    localFootnote:
      "Urbanizaciones recientes con recrecido autonivelante de anhidrita. El lijado y una imprimación de adherencia son obligatorios antes de cualquier suelo encolado.",
  },
  // Île d'Oléron
  {
    slug: 'saint-pierre-doleron',
    name: "Saint-Pierre-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "capital de la Île d'Oléron",
    population: 6700,
    localContext:
      "Saint-Pierre-d'Oléron, capital de la isla, concentra los servicios administrativos, el mercado y un tejido comercial activo en torno a la Lanterne des Morts. Un tejido dominado por casas bajas de Oléron con revoco de cal y fachadas blancas, completado por urbanizaciones residenciales y segundas residencias. Una fuerte salinidad ambiental y una humedad invernal sostenida, como en toda la isla.",
    localFootnote:
      "Las casas antiguas de Oléron suelen estar colocadas directamente sobre la tierra: una barrera antihumedad o una lámina de polietileno es sistemática antes de un revestimiento resiliente.",
  },
  {
    slug: 'saint-georges-doleron',
    name: "Saint-Georges-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "localidad central de la Île d'Oléron",
    population: 3500,
    localContext:
      "Saint-Georges-d'Oléron cubre buena parte del centro-norte de la isla, con varias aldeas (Boyardville, Sauzelle, La Menounière). Un tejido tradicional de Oléron con revoco de cal blanca en los pueblos, segundas residencias en los pinares y grandes zonas de camping. Una fuerte estacionalidad y una exposición continua al aire marino en casi todo el territorio.",
    localFootnote:
      "Boyardville y la costa este: proyectos en zonas de Natura 2000 y de la Ley del Litoral. Anticipe los plazos de tramitación de las autorizaciones.",
  },
  {
    slug: 'dolus-doleron',
    name: "Dolus-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "localidad costera de la Île d'Oléron",
    population: 3200,
    localContext:
      "Dolus-d'Oléron, en el centro de la isla, combina un pueblo antiguo de casas de Oléron con un amplio frente costero occidental (La Rémigeasse, La Perroche) muy codiciado para segundas residencias en los pinares. Un tejido mixto de construcciones antiguas y de los años 1970-2000, una alta tasa de estacionalidad y una demanda impulsada por la puesta a punto de los alquileres vacacionales.",
    localFootnote:
      "Pinares costeros: muchas casas sobre cámara sanitaria ventilada. Compruebe el estado del suelo de madera antes de colocar laminado.",
  },
  {
    slug: 'le-grand-village-plage',
    name: 'Le Grand-Village-Plage',
    department: '17',
    zone: 'ile-doleron',
    description: "balneario de la Île d'Oléron",
    population: 1100,
    localContext:
      "Le Grand-Village-Plage es una pequeña localidad costera en el suroeste de la isla, con un tejido formado en su mayoría por segundas residencias de los años 1960-2000 en los pinares costeros, completado por un pequeño pueblo antiguo. Una fuerte estacionalidad, una exposición directa a los vientos del oeste y a la sal, y poca actividad comercial fuera del periodo estival.",
    localFootnote:
      "Una temporada de colocación corta (octubre-abril) fuera de la afluencia turística: se recomienda planificar con antelación para los alquileres vacacionales.",
  },
  {
    slug: 'le-chateau-doleron',
    name: "Le Château-d'Oléron",
    department: '17',
    zone: 'ile-doleron',
    description: "ciudad fortificada de la Île d'Oléron",
    population: 4000,
    localContext:
      "Le Château-d'Oléron está rodeado por una ciudadela Vauban catalogada como monumento histórico, con un puerto ostrícola activo (cabañas de colores) y un centro comercial de piedra y cal. Un tejido mixto, antiguo dentro de las murallas, con barrios periféricos y urbanizaciones residenciales en las afueras. Una fuerte presencia ostrícola moldea tanto el tejido económico como el arquitectónico.",
    localFootnote:
      "Dentro de las murallas de la ciudadela protegida: cualquier suelo visible desde el espacio público está sujeto a autorización previa del ABF.",
  },
  {
    slug: 'saint-trojan-les-bains',
    name: 'Saint-Trojan-les-Bains',
    department: '17',
    zone: 'ile-doleron',
    description: "balneario y estación termal de la Île d'Oléron",
    population: 1500,
    localContext:
      "Saint-Trojan-les-Bains es una estación termal y climática en el sur de la isla, con un importante centro médico (el Centre Hélio-Marin), un tejido de pueblo de Oléron y un parque de villas de veraneo de la Belle Époque bajo los pinos. Una fuerte estacionalidad, con una demanda impulsada por los establecimientos sanitarios y las segundas residencias al borde del estuario del Seudre.",
    localFootnote:
      "El Centre Hélio-Marin y los establecimientos asistenciales: suelos de PVC acústico + una clasificación al fuego Cfl-s1 conforme a la normativa de los edificios públicos de Tipo U.",
  },
  // More of Charente-Maritime
  {
    slug: 'saint-palais-sur-mer',
    name: 'Saint-Palais-sur-Mer',
    department: '17',
    zone: 'charente-maritime',
    description: 'balneario cerca de Royan',
    population: 4000,
    localContext:
      "Saint-Palais-sur-Mer es un balneario familiar de la Côte de Beauté, con un tejido dominado por villas de veraneo conservadas de la Belle Époque y de los años treinta, completado por bloques de apartamentos de los años 1960-80 y promociones nuevas. Una alta densidad de segundas residencias, una estacionalidad marcada y una exposición directa a la brisa marina atlántica.",
    localFootnote:
      "Las villas de la Belle Époque suelen estar protegidas como patrimonio del siglo XX: en la rehabilitación hay que conservar las baldosas hidráulicas y hexagonales originales.",
  },
  {
    slug: 'meschers-sur-gironde',
    name: 'Meschers-sur-Gironde',
    department: '17',
    zone: 'charente-maritime',
    description: 'localidad costera del estuario de la Gironde',
    population: 3200,
    localContext:
      "Meschers-sur-Gironde es una localidad costera llena de carácter, situada al borde del estuario, famosa por sus acantilados de piedra caliza y las cuevas excavadas en la roca. Se encuentran casas charentesas tradicionales, hermosas villas de principios del siglo pasado y casas más nuevas, sin olvidar las cabañas de pesca sobre pilotes que dan su encanto al paisaje. Esta diversidad de viviendas nos lleva a proponer soluciones a medida, según la antigüedad y la orientación de cada casa. La proximidad del agua y la roca porosa exigen una atención especial a la humedad, que evaluamos siempre antes de colocar. Meschers está entre las localidades del sur del departamento que atendemos desde nuestro taller de Villedoux.",
    localFootnote:
      "La piedra caliza deja pasar la humedad. En las casas apoyadas en el acantilado, medimos con cuidado la humedad del suelo y aseguramos una buena ventilación antes de colocar.",
  },
  {
    slug: 'saint-georges-de-didonne',
    name: 'Saint-Georges-de-Didonne',
    department: '17',
    zone: 'charente-maritime',
    description: 'balneario del estuario de la Gironde',
    population: 5000,
    localContext:
      "Saint-Georges-de-Didonne es un balneario contiguo a Royan, con un tejido que combina villas de veraneo de finales del siglo XIX y de los años treinta, bloques de apartamentos de los años 1960-80 frente al mar, y urbanizaciones residenciales en el interior. Una fuerte estacionalidad y una exposición directa al estuario de la Gironde y al viento atlántico.",
    localFootnote:
      "Bloques de apartamentos de veraneo de los años sesenta: soleras de hormigón vertido a menudo húmedas en la planta baja, se aconseja una prueba con higrómetro.",
  },
  {
    slug: 'port-des-barques',
    name: 'Port-des-Barques',
    department: '17',
    zone: 'charente-maritime',
    description: "localidad costera frente a la Île Madame",
    population: 1800,
    localContext:
      "Port-des-Barques es una pequeña localidad costera en la desembocadura del Charente, unida a la Île Madame por una calzada accesible con la marea baja. Un tejido de viviendas dominante de los años 1970-2000, algunas casas antiguas de pescadores en el pueblo y una presencia ostrícola. Una exposición directa al viento y a la brisa marina, y una humedad ambiental muy sostenida.",
    localFootnote:
      "Desembocadura húmeda del estuario: prefiera suelos de PVC o de resina antes que de madera en las plantas bajas, incluso la madera de ingeniería.",
  },
  {
    slug: 'marans',
    name: 'Marans',
    department: '17',
    zone: 'charente-maritime',
    description: 'localidad fluvial del norte de Charente-Maritime',
    population: 4500,
    localContext:
      "Marans es una antigua localidad portuaria al borde del Marais Poitevin, atravesada por el Sèvre Niortaise. Un tejido que combina casas antiguas de piedra y cal en el centro del pueblo, antiguos almacenes portuarios rehabilitados y urbanizaciones residenciales en las afueras. Una fuerte presencia agrícola (cereales, ganadería) y la proximidad inmediata de marismas protegidas.",
    localFootnote:
      "Borde de marisma y nivel freático alto: casi siempre se necesita una barrera antihumedad en la planta baja de los edificios antiguos.",
  },
  {
    slug: 'courcon',
    name: 'Courçon',
    department: '17',
    zone: 'charente-maritime',
    description: 'localidad del Marais Poitevin en Charente-Maritime',
    population: 2400,
    localContext:
      "Courçon es un pueblo rural del Marais Poitevin, con un tejido que combina casas charentesas antiguas de piedra y cal, granjas hortícolas y urbanizaciones residenciales recientes. Un carácter agrícola y residencial periurbano, a medio camino entre La Rochelle y Niort. El borde de la marisma exige las mismas precauciones relacionadas con el agua que aguas abajo.",
    localFootnote:
      "Granjas hortícolas con soleras antiguas sobre tierra desnuda: a menudo se necesita rehacer por completo el soporte antes de una nueva colocación.",
  },
  {
    slug: 'cognac',
    name: 'Cognac',
    department: '16',
    zone: 'charente-maritime',
    description: 'capital mundial del coñac, en el límite de la zona de CB Sols',
    population: 19000,
    localContext:
      "Cognac es conocida en todo el mundo por su aguardiente, con sus grandes casas comerciales y sus bodegas alineadas a lo largo del Charente. Su centro antiguo de piedra de sillería y sus barrios residenciales ofrecen una bonita variedad de proyectos. La ciudad marca el límite de nuestra zona de servicio, y nos desplazamos allí para proyectos donde la exigencia es la norma, ya sean viviendas con carácter o espacios ligados al mundo del vino y del enoturismo. El clima es más seco que junto al mar, lo que cambia las precauciones a tomar: un suelo de madera, por ejemplo, necesita una humedad bien regulada para mantenerse estable. Tenemos en cuenta estas particularidades para recomendar el revestimiento más adecuado a cada lugar.",
    localFootnote:
      "En las bodegas y en los espacios de recepción enoturística, el aire está cargado de forma permanente de vapor de alcohol. Preferimos suelos resistentes como el PVC compacto o la resina antes que un laminado.",
  },
]

export const esCityZoneLabels: Record<EsCity['zone'], string> = {
  'la-rochelle': 'Gran La Rochelle',
  'ile-de-re': 'Île de Ré',
  'ile-doleron': "Île d'Oléron",
  'charente-maritime': 'Charente-Maritime',
}

export function getEsCityBySlug(slug: string): EsCity | undefined {
  return esCities.find((c) => c.slug === slug)
}

/** Zone label preceded by the right Spanish preposition. */
export function esZoneWithPrep(zone: EsCity['zone'], prep: 'of' | 'in'): string {
  const p = prep === 'of' ? 'de' : 'en'
  return `${p} ${esCityZoneLabels[zone]}`
}

/** Rough typical establishment descriptor based on population. */
export function esCitySizeDescriptor(pop?: number): string {
  if (!pop) return 'localidad'
  if (pop > 50000) return 'ciudad'
  if (pop > 15000) return 'ciudad'
  if (pop > 5000) return 'localidad grande'
  if (pop > 2000) return 'localidad rural'
  return 'pueblo pequeño'
}

/** Approximate project count by zone for the credibility counter. */
export function esCityProjetCount(city: EsCity): number {
  const base: Record<EsCity['zone'], number> = {
    'la-rochelle': 180,
    'ile-de-re': 95,
    'ile-doleron': 55,
    'charente-maritime': 140,
  }
  const popBonus = Math.min(Math.floor((city.population ?? 3000) / 2000), 12)
  return base[city.zone] + popBonus
}
