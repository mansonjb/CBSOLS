import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, Building2, FlaskConical, GraduationCap, Home, Mail, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Suelo de PVC para farmacias | Higiene, conformidad y durabilidad',
  description: 'Cuidar el suelo de su farmacia protege su imagen y facilita el día a día de su equipo. CB Sols le acompaña, presupuesto en 48 h.',
  alternates: {
    canonical: 'https://cbsols.fr/es/sol-pvc-pharmacie',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-pharmacie', en: 'https://cbsols.fr/en/sol-pvc-pharmacie', es: 'https://cbsols.fr/es/sol-pvc-pharmacie', },
  },
  keywords: ['suelo de PVC para farmacia', 'revestimiento de suelo para farmacia', 'suelo higiénico para farmacia', 'suelo para laboratorio de farmacia', 'conformidad sanitaria', 'instalación de suelo para farmacia', 'suelo de farmacia fácil de limpiar'],
  openGraph: {
    title: 'Suelo de PVC para farmacias, hecho para durar',
    description: 'Suelo de PVC instalado en farmacias: higiene diaria, conformidad sanitaria, trabajo nocturno para no cerrar. CB Sols, más de 28 años de saber hacer cerca de La Rochelle.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-pharmacie.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  {
    title: 'La zona de venta',
    desc: 'Es la primera impresión que recibe el paciente al empujar su puerta. El farmacéutico pasa ocho horas al día allí, el cliente menos de un minuto, pero se queda con una imagen de ella. El suelo debe absorber el traqueteo de las ruedas de los carros, soportar el paso repetido de cientos de personas y conservar su brillo diez años después. En la zona de espera, añadimos con gusto algo de moqueta acústica para suavizar la sensación y calmar el ambiente.',
  },
  {
    title: 'El laboratorio y el robot',
    desc: 'Una zona técnica, a veces una zona húmeda. El suelo debe ser estanco para resistir los productos que se manipulan cada día, desde un simple jarabe derramado hasta un bote de desinfectante. Las juntas entre láminas se termosueldan, a más de cuatrocientos grados, para que ninguna gota pueda filtrarse. El color claro ayuda a detectar de inmediato una pastilla caída o un bote que gotea. Lo ve todo, lo limpia todo.',
  },
  {
    title: 'El almacén y el depósito',
    desc: 'Carros que pasan, palés llenos, entregas diarias. El suelo sufre en esta sala, poco visitada pero muy trabajada. Elegimos una clasificación de clase 34, un vinilo homogéneo y grueso que perdona los golpes de las transpaletas y que puede decaparse dos veces al año sin problema. El tono es deliberadamente neutro, para evitar que quede marca después de cada golpe. Veinte años por delante, sin preocupaciones.',
  },
  {
    title: 'Aseos de pacientes y de personal',
    desc: 'Antideslizante R10 al menos en la zona de aproximación, un zócalo sanitario redondeado y elevado todo alrededor para facilitar la limpieza diaria, un color elegido para que no se manche de forma visible. También podemos encargarnos del office y del vestuario del personal con la misma coherencia, lo que da una lectura homogénea de la trastienda y facilita la limpieza de la noche. Ninguna junta donde pueda instalarse el moho.',
  },
]

const exigences = [
  {
    title: 'La farmacia no cierra',
    desc: 'Trabajamos de noche, los domingos o durante los puentes largos. Usted baja la persiana a las 19 h del sábado, nosotros trabajamos toda la noche, y a las 8.30 h del lunes abre con normalidad. El robot, los dispensadores automáticos, las pantallas táctiles del mostrador: lo protegemos todo bajo lonas, aspiramos al final, nos vamos con nuestros residuos. Ni un metro cuadrado perdido para la actividad, ni un cartel que poner en la puerta. Sus pacientes ni siquiera saben que estuvimos allí.',
  },
  {
    title: 'La higiene es nuestro oficio diario',
    desc: 'El vinilo homogéneo se limpia como su mostrador, sin ninguna restricción especial. Ninguna junta que se obstruya con los meses, ninguna capa de uso que se descame tras cinco años, el material es denso de arriba abajo. Sus equipos aplican su protocolo habitual, agua y detergente neutro, y el suelo lo aguanta sin inmutarse. Los inspectores sanitarios que pasan ven un trabajo cuidado, conforme y duradero. Usted gana tranquilidad.',
  },
  {
    title: 'Zonas húmedas sin riesgo',
    desc: 'Aseos, laboratorio, office, vestuario. Subimos el vinilo formando un zócalo sanitario redondeado de ocho a diez centímetros todo alrededor de la sala, y termosoldamos las láminas entre sí. Resultado: el agua no se filtra por ningún sitio, ni bajo el suelo ni detrás de las paredes. Evita la trampa clásica del moho oculto tras un zócalo de madera mal colocado, que acaba oliendo y manchando el pladur dos años después. Un detalle invisible, pero decisivo.',
  },
  {
    title: 'Confort acústico',
    desc: 'Un suelo de vinilo acústico reduce el ruido de los pasos y de las ruedas de los carros entre 19 y 21 decibelios según la gama. Es casi la mitad del ruido ambiental que desaparece. Sus pacientes plantean su pregunta con más calma en el mostrador, su equipo termina el día menos cansado, y la sensación general del lugar se asienta. En una farmacia de centro de ciudad con mucha actividad, este simple cambio de suelo transforma la percepción de la sala. Sus clientes vuelven porque se sienten bien allí.',
  },
  {
    title: 'La conformidad, nos encargamos nosotros',
    desc: 'Una clasificación al fuego Bfl-s1 o Cfl-s1 según la categoría de pública concurrencia de su farmacia, antideslizante R10 en zonas de circulación y R11 alrededor de los puntos de agua, una etiqueta A+ para la calidad del aire interior. Facilitamos todos los certificados para adjuntar al expediente, y tratamos directamente con la autoridad sanitaria o con la oficina de control si hace falta. Usted no gestiona nada de esta parte administrativa, que conocemos bien tras veintisiete años de instalación en entornos regulados.',
  },
  {
    title: 'Elegir un suelo que dure quince años',
    desc: 'Nos comprometemos con el material, con la instalación, con el acabado. CB Sols trabaja el suelo de PVC desde hace veintisiete años; hemos visto obras cruzar dos décadas sin moverse un milímetro. Sin ampollas, sin amarilleo, sin juntas que se abran. Usted invierte una vez, vive tranquilo durante mucho tiempo, concentra su energía en la farmacia y no en el edificio. A eso lo llamamos una inversión que merece la pena.',
  },
]

const materiaux = [
  {
    name: 'Vinilo homogéneo en lámina ancha',
    desc: 'Gerflor Mipolam Symbioz o Tarkett iQ Granit. La referencia de la farmacia moderna y de todo establecimiento sanitario que se tome en serio la higiene. Termosoldaduras invisibles entre las láminas, una paleta de colores muy amplia, desde una luz clara que agranda la zona de venta hasta un color contemporáneo que realza la marca de la farmacia. De veinte a veintiocho años por delante, mantenimiento diario con agua y detergente neutro. Es nuestra elección por defecto para el 80 % de las farmacias que renovamos.',
  },
  {
    name: 'Vinilo acústico en lámina',
    desc: 'Gerflor Taralay Acoustic o Tarkett Acczent Excellence Acoustic. Para reducir el ruido de las ruedas de los carros y de los pasos en la zona de venta de una farmacia con mucha actividad. La capa acústica está integrada en el revestimiento, lo que simplifica mucho la instalación, y el resultado sonoro es inmediato desde la primera hora de apertura. Especialmente adecuado para farmacias de centro de ciudad y para farmacias de centro sanitario con un tránsito denso.',
  },
  {
    name: 'Lamas de vinilo LVT',
    desc: 'Forbo Allura o Gerflor Senso Lock. Un aspecto cálido con efecto madera clara, efecto piedra natural o efecto hormigón pulido, para dar un carácter más elegante a la zona de acogida y al rincón de consejo de ortopedia. Perfectamente compatible con el tránsito sostenido de una farmacia moderna, una vida útil de quince años, la opción de sustituir una sola lama si llegara a dañarse por la caída de material. Un muy buen compromiso entre aspecto y rendimiento.',
  },
  {
    name: 'Baldosas de moqueta acústica',
    desc: 'EGE Highline o Forbo Tessera. Para el rincón de espera, el despacho del titular, la sala de reuniones del equipo o la sala de descanso del personal. Aporta un confort visual y acústico inmediato, un formato de 50 por 50 centímetros para poder sustituir una sola baldosa si hace falta, por ejemplo tras una mancha de café. Bien adaptada a la trastienda y a los espacios que no reciben público, donde se busca una sensación de suavidad.',
  },
  {
    name: 'Perfiles de transición y zócalos',
    desc: 'Romus en latón cepillado, acero inoxidable cepillado o aluminio anodizado. Son los detalles que rematan una instalación y que marcan la diferencia entre un trabajo correcto y un trabajo cuidado. Un zócalo sanitario redondeado para todas las zonas húmedas, perfiles rectos perfectamente ajustados para los umbrales entre dos materiales distintos, por ejemplo en la transición entre la moqueta del rincón de espera y el vinilo de la zona de venta. No se fija en ellos, que es exactamente lo que buscamos.',
  },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés de suelos resilientes, con sede cerca de Lyon. Trabajamos sus gamas Mipolam y Taralay en más de ocho de cada diez farmacias. Sólido, bien documentado para los expedientes sanitarios, con colores contemporáneos que se encuentran en las farmacias recientes.' },
  { name: 'Tarkett', desc: 'El histórico fabricante sueco de vinilo profesional. Sus iQ Granit e iQ Optima equipan la mitad de los establecimientos sanitarios franceses. Muy buena durabilidad, una enorme elección de colores, fichas técnicas claras. Una apuesta segura en una farmacia.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo elaborado a partir de aceite de linaza, de origen biológico, perfecto para farmacias que valoran un enfoque ecológico con sus pacientes. Una instalación algo más técnica, un resultado único.' },
  { name: 'Polyflor', desc: 'El fabricante británico de vinilo de alta densidad. Sus efectos madera y hormigón son visualmente notables, a veces más convincentes que los de sus rivales continentales. El compromiso justo entre un aspecto premium y el rendimiento técnico en la zona de venta.' },
  { name: 'EGE', desc: 'El tejedor danés para la moqueta. Cuando se busca carácter en el espacio de espera, sus gamas Highline y ReForm dan una fuerte firma visual. Las colocamos con gusto en el despacho del titular o en la sala de reuniones.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para farmacias que buscan una sensación residencial en la sala de espera o en el rincón de consejo pediátrico. Un diseño contemporáneo con carácter, acabados perfectos, una paleta de colores muy amplia. Más caro, pero el efecto es inmediato.' },
  { name: 'Romus', desc: 'Nuestro proveedor de perfiles y zócalos. Imprescindible para una instalación cuidada en un entorno regulado. Su gama es amplia, siempre encontramos el perfil que conviene a cada configuración de umbral, a cada transición, a cada detalle de acabado.' },
  { name: 'Altro', desc: 'El fabricante británico de suelos antideslizantes de alto rendimiento. Lo sacamos para los aseos de pacientes y los laboratorios húmedos donde la seguridad va por delante del aspecto. Una clasificación R11 o R12 garantizada, certificada para el sector sanitario.' },
]

const lieux = [
  { nom: 'Farmacia histórica de centro de ciudad', detail: 'Un suelo antiguo que rehacer, a veces restricciones del arquitecto del patrimonio, acceso difícil para el material. Trabajamos de noche para no cortar la actividad del barrio. Un vinilo contemporáneo que dialoga con la carpintería original.' },
  { nom: 'Farmacia de barrio residencial', detail: 'Una farmacia de barrio, una clientela fiel, un equipo estable. El titular conoce a cada paciente. El suelo debe realzar ese vínculo sin una ruptura visual brutal. Una paleta suave, una sensación cálida, quince años tranquilos.' },
  { nom: 'Farmacia de parque comercial', detail: 'Una superficie más amplia, un flujo denso los sábados, a menudo un robot presente. Vinilo homogéneo en lámina ancha, termosoldaduras, una clasificación de clase 34 obligatoria. Instalación nocturna ajustada al cierre del parque comercial.' },
  { nom: 'Farmacia de costa', detail: 'Una fuerte estacionalidad, arena y sal arrastradas en las suelas en verano, un pico en julio y agosto. Un suelo resistente a la abrasión, tonos claros que acogen la luz del mar, instalación idealmente programada en enero o febrero.' },
  { nom: 'Farmacia rural y de pueblo', detail: 'Una clientela envejecida, a veces insegura al caminar. Antideslizante R10 en toda la zona de venta, zócalo redondeado, un contraste visual entre suelo y pared para los pacientes con baja visión. Una visita y un presupuesto en su casa sin coste.' },
  { nom: 'Farmacia de centro de salud', detail: 'Una plataforma con médicos, fisioterapeutas, enfermeros autónomos. Se busca coherencia visual entre las consultas y la farmacia. Vinilo contemporáneo con transiciones cuidadas, un suelo acústico para calmar el vestíbulo compartido, conformidad sanitaria garantizada.' },
  { nom: 'Farmacia hospitalaria', detail: 'Un establecimiento regulado, un concurso público o un pedido directo según el caso. Un pliego técnico muy preciso, clasificación al fuego, trazabilidad de los materiales, certificados PEFC o A+. Nos encargamos del expediente administrativo de principio a fin.' },
  { nom: 'Farmacia universitaria', detail: 'Un público de estudiantes y de personal hospitalario, un tránsito diurno muy sostenido. Vinilo de alta densidad, acústico para gestionar el bullicio, un tono atemporal que no pasa de moda. Instalación durante las vacaciones universitarias.' },
  { nom: 'Farmacia con robot y fuerte automatización', detail: 'El robot pesa varios cientos de kilos y permanece en su sitio durante la obra. Construimos a su alrededor, protegemos su estructura base, cortamos al milímetro. Instalación nocturna a lo largo de tres o cuatro noches por zonas.' },
  { nom: 'Farmacia con un espacio de ortopedia o material médico', detail: 'El pasillo de ortopedia pide un suelo que realce los productos expuestos, a veces un efecto madera para dar calidez al rincón de consejo. El material médico rodante exige un suelo resistente a las ruedas y a las patas de las sillas en demostración.' },
  { nom: 'Farmacia en renovación por un joven titular comprador', detail: 'Una adquisición reciente, un deseo de modernizar sin arrancarlo todo. Proponemos un compromiso inteligente entre conservar lo existente y una nueva firma visual. Un presupuesto honesto para no lastrar los primeros años de actividad.' },
  { nom: 'Farmacia en creación, un proyecto de acondicionamiento nuevo', detail: 'Obra nueva o un local en bruto que acondicionar. Dialogamos con el arquitecto de interiores desde la fase de estudio, elegimos la gama en coherencia con el mobiliario de acondicionamiento escogido por el farmacéutico. Todo queda listo para la apertura.' },
]

const process = [
  {
    step: 'Primer contacto',
    desc: 'Nos llama o nos envía un correo con unas palabras sobre su farmacia: superficie aproximada, suelo actual, calendario deseado, restricciones particulares como un robot. Hablamos unos veinte minutos por teléfono para encuadrar el proyecto e identificar la franja de instalación que no perturbará su actividad. Si encaja, reservamos la visita. Si sentimos que no es para nosotros, se lo decimos con franqueza y le orientamos hacia otra parte.',
  },
  {
    step: 'Visita gratuita a su farmacia',
    desc: 'Una visita in situ en una o dos semanas, idealmente al principio o al final del día para no entorpecer el ajetreo. Medición precisa, comprobación del soporte existente, estudio de las restricciones de acceso y de manipulación para el robot y los dispensadores automáticos. Llevamos muestras que usted observa directamente en su farmacia, bajo su luz de trabajo, para elegir un tono que funcione de verdad en su local. Sin compromiso en esta etapa.',
  },
  {
    step: 'Presupuesto detallado en 48 horas',
    desc: 'Recibe por correo un presupuesto línea por línea, sin jerga, con la gama propuesta, el detalle de las superficies por sala, los zócalos, los perfiles, la duración prevista de la obra y la franja de instalación ajustada a su cierre. Adjuntamos los certificados de clasificación al fuego, A+ y antideslizante, listos para entrar en su expediente sanitario. Usted compara con calma, plantea sus preguntas, y ajustamos juntos si hace falta antes de la aprobación.',
  },
  {
    step: 'Instalación completa en 1 a 3 noches',
    desc: 'Obra en la franja acordada, generalmente del sábado por la tarde al lunes por la mañana para una farmacia de 100 a 150 metros cuadrados. Retirada del suelo antiguo, nivelación si hace falta, colocación de las láminas, termosoldaduras, zócalo sanitario redondeado, perfiles de umbral, una limpieza completa. El robot y los dispensadores automáticos permanecen en su sitio, protegidos y encajonados alrededor. A las 8.30 h del lunes, su persiana sube sobre un suelo nuevo y limpio, listo para el primer paciente.',
  },
  {
    step: 'Recepción conjunta y garantía',
    desc: 'Recorremos juntos la obra terminada, comprobamos cada soldadura, cada zócalo, cada umbral. Usted firma el acta de recepción con o sin reservas. Le dejamos un expediente de fin de obra con todos los certificados, la guía de mantenimiento diario adaptada a la gama colocada, y nuestro contacto directo para cualquier pregunta. Una garantía de diez años sobre la instalación, una garantía del fabricante sobre el material, generalmente de diez a quince años según las gamas elegidas.',
  },
]

const faq = [
  {
    q: '¿Cuánto se tarda en rehacer el suelo de una farmacia?',
    a: 'Todo depende de la superficie y del estado del suelo existente. Para una farmacia de 80 a 120 metros cuadrados, cuente dos o tres noches in situ, generalmente del sábado por la tarde al lunes por la mañana. Para una farmacia más grande de 200 metros cuadrados con robot, más bien de tres a cuatro noches, a veces repartidas en dos fines de semana. Lo dimensionamos con precisión en la visita. Antes de la obra, cuente unas dos semanas entre la llamada inicial y el presupuesto firmado, y luego de dos a cinco semanas de plazo de fabricación en el proveedor según la gama elegida. La mayoría de nuestras obras se desarrollan en una franja total de seis a ocho semanas entre su primera llamada y la reapertura sobre el suelo nuevo. Este calendario le da tiempo para avisar a su equipo, organizar sus pedidos de stock para no verse pillado el lunes por la mañana y, eventualmente, comunicar a sus pacientes habituales la renovación que se avecina.',
  },
  {
    q: '¿De verdad hay que cerrar la farmacia?',
    a: 'No, y es precisamente nuestra especialidad. La gran mayoría de las farmacias que renovamos permanecen abiertas durante toda la obra, porque trabajamos de noche o el fin de semana durante sus horas de cierre habituales. Usted baja la persiana a las 19 h del sábado, nuestro equipo llega hacia las 20 h, y a las 8.30 h del lunes abre con normalidad sobre un suelo terminado. Sin pérdida de actividad, sin cartel que pegar en el escaparate, sin ningún paciente redirigido. Si la superficie es más grande o el suelo existente exige un gran recrecido, podemos repartir la obra en dos fines de semana sucesivos sin interrumpir la semana. En el caso particular de una farmacia muy condicionada por un robot fijo y dispensadores automáticos pesados, planificamos una franja nocturna más larga, por ejemplo del viernes por la tarde al lunes por la mañana en un puente largo. La regla para nosotros es cero días de cierre.',
  },
  {
    q: '¿Cuál es el presupuesto medio para 100 metros cuadrados?',
    a: 'Para dar un orden de magnitud honesto, cuente entre 6000 y 9000 euros sin IVA para 100 metros cuadrados en vinilo homogéneo colocado en láminas soldadas con zócalo, trabajo nocturno incluido. La horquilla varía según tres factores principales: la gama de vinilo elegida, porque un Mipolam Symbioz acústico de gama alta cuesta más que un iQ Granit estándar; el estado del soporte existente, porque un suelo que necesita un gran recrecido añade de tres a cinco euros por metro cuadrado; y la complejidad de acceso, sobre todo si hay que construir alrededor de un robot o retirar un embaldosado antiguo. Si añade moqueta acústica en el rincón de espera y en el despacho del titular, cuente un suplemento de 50 a 80 euros por metro cuadrado de moqueta colocada. Lo presupuestamos todo con precisión en el presupuesto en 48 horas tras la visita. Sin sorpresas durante la obra, ese es nuestro compromiso.',
  },
  {
    q: '¿El suelo de PVC es realmente compatible con las normas sanitarias?',
    a: 'Sí, completamente, e incluso es la solución más usada en la farmacia moderna precisamente por esa razón. Las gamas que colocamos combinan las clasificaciones esperadas en un edificio de pública concurrencia de quinta categoría: Bfl-s1 o Cfl-s1 para la resistencia al fuego, R10 o R11 para el antideslizante según la zona, una etiqueta A+ para la calidad del aire interior, una clasificación de clase 34 para un uso comercial intensivo. Facilitamos todos los certificados del fabricante para adjuntarlos directamente a su expediente de conformidad o presentarlos en caso de inspección sanitaria. Si la oficina de control plantea preguntas técnicas afinadas, tratamos directamente con ella en su nombre. En los más de 28 años de instalación en el sector sanitario que CB Sols lleva a sus espaldas, nunca se ha rechazado una recepción por un defecto de conformidad del suelo. Es un punto en el que puede confiar en nosotros sin preocuparse.',
  },
  {
    q: '¿Cómo se mantiene el suelo en el día a día sin dañarlo?',
    a: 'En el día a día es muy sencillo. Por la mañana, antes de abrir, una mopa de microfibra o un aspirador para retirar el polvo y la suciedad gruesa arrastrada en las suelas. Por la tarde, tras el cierre, una pasada con una fregona húmeda y un detergente neutro diluido a la dosis indicada por el fabricante, de tipo pH neutro o un equivalente profesional. No hace falta un producto especial de farmacia, su detergente habitual basta. Evite los detergentes demasiado ácidos o demasiado alcalinos, que con el tiempo apagan el aspecto del vinilo. Una vez al año, prevea un decapado y una nueva capa de protección por una empresa de limpieza profesional, cuente de dos a tres euros por metro cuadrado, lo que devuelve al suelo su brillo original para los doce meses siguientes. Con este sencillo protocolo, sus quince a veinte años de vida útil están asegurados. Le dejamos una guía de mantenimiento adaptada a la gama colocada el día de la recepción.',
  },
  {
    q: '¿Pueden colocar el suelo de PVC sobre un embaldosado existente?',
    a: 'Sí, en la gran mayoría de los casos, e incluso es una excelente manera de evitar el coste y el ruido de un desmontaje. Varias condiciones que comprobar primero. El embaldosado debe estar bien adherido al soporte, sin ninguna baldosa que suene a hueco al golpearla. Las juntas deben estar en buen estado, sin un rehundido excesivo. La planeidad general debe ser correcta, sin ninguna protuberancia o hundimiento de más de unos milímetros. Si se cumplen estas condiciones, aplicamos una imprimación de agarre específica, seguida de un recrecido autonivelante fibrado de dos a tres milímetros que borra las juntas de las baldosas y da una superficie perfectamente plana. Una vez seco en 24 a 48 horas, colocamos el vinilo encima como sobre un suelo nuevo. Un ahorro de tiempo y de ruido para sus vecinos. Si el embaldosado está en mal estado, lo retiramos, es más seguro. La visita lo decidirá.',
  },
  {
    q: '¿Cuánto dura un suelo de vinilo en una farmacia?',
    a: 'Con una gama profesional colocada correctamente, cuente de quince a veinte años de media en una farmacia, y hasta veintiocho años para los vinilos homogéneos de gama alta mantenidos según el protocolo estándar. Esta vida útil varía según tres factores. El tránsito primero: una farmacia de centro de ciudad con 400 clientes al día se desgasta más rápido que una farmacia rural con 80 clientes. El material después: un vinilo homogéneo de clase 34 dura más que un vinilo compacto de gama baja. El mantenimiento por último: respetar el protocolo diario y la nueva capa anual alarga de verdad la vida del suelo varios años. Nuestras obras más antiguas, colocadas en 2002, siguen en servicio en 2026 sin haberse movido. Usted invierte hoy y no volverá a plantearse la pregunta hasta la próxima década. Ese es el contrato moral que establecemos con usted al firmar el presupuesto.',
  },
]

export default function SolPvcPharmaciePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/sol-pvc-pharmacie#service',
        name: 'Suelo de PVC para farmacias',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: 'Suelo de PVC instalado en farmacias',
        description: 'Suelo de PVC profesional instalado para farmacias: zona de venta, laboratorio, robot, aseos. Termosoldaduras, zócalo sanitario, clasificación A+ de aire interior, conformidad sanitaria, trabajo nocturno para no cerrar.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Suelo de PVC para farmacias', item: 'https://cbsols.fr/es/sol-pvc-pharmacie' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="pharmacie" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelo de PVC para farmacias</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Suelo de PVC para farmacias,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>hecho para durar.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Suelo de PVC profesional instalado para su farmacia: zona de venta, laboratorio, robot, almacén, aseos. Suelos fáciles de limpiar, conformes con las normas sanitarias, acústicos. Trabajo nocturno para que su farmacia no cierre nunca. CB Sols trabaja el oficio desde hace más de 28 años, taller en Villedoux cerca de La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=pharmacie" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Más de 28 años de instalación en el sector sanitario</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Cuando colocas un suelo en una farmacia, lo colocas para quince años de servicio al público. Cada detalle cuenta, porque es el suelo que pisan los pacientes cuando están frágiles, y el suelo que su equipo mira cientos de veces al día. Hemos aprendido a hacerlo limpio, duradero, bonito.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, titular de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué zonas de la farmacia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro zonas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro elecciones de suelo.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {usages.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una farmacia que renovar?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita in situ, un presupuesto en 48 h.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Muestras presentadas en su farmacia, bajo su luz de trabajo. Un presupuesto detallado en 48 horas, un calendario ajustado a sus cierres para no perder ningún día de actividad.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?from=pharmacie" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que debe cumplir un suelo de farmacia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de la farmacia.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Una farmacia no es ni un despacho ni un comercio clásico. Estos son los seis puntos sobre los que orientamos sistemáticamente la elección del suelo y el método de instalación, sin ahogar al farmacéutico titular en jerga técnica.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {exigences.map((e, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Familias de productos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Los suelos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que colocamos en farmacias.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {materiaux.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < materiaux.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;La farmacia de hoy no tiene nada que ver con la de hace veinte años. El robot, los dispensadores automáticos, las pantallas, el mobiliario moderno: el suelo debe encajar en esa modernidad sin dejar de ser accesible, higiénico y duradero. Nuestro papel es ayudarle a elegir el material adecuado para los próximos veinte años.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, titular de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=pharmacie" variant="primary" size="md">Concertar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita directamente en su farmacia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marcas colaboradoras</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho referencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para su farmacia.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacy profiles */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Perfiles de farmacia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Doce perfiles de farmacia, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>elecciones de suelo a juego.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Cada farmacia tiene su ritmo, su clientela, su arquitectura. Así adaptamos la elección del suelo a los perfiles de farmacia que renovamos con regularidad en Charente-Maritime y más allá.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Una llamada para encuadrar el proyecto.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Veinte minutos por teléfono para aclarar las gamas posibles, un calendario realista en torno a su actividad y un orden de magnitud honesto del presupuesto para su farmacia.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=pharmacie" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la llamada a la reapertura.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#fff' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.step}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            El vinilo en una farmacia, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faq.map((f, i) => (
              <details key={i} style={{ border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', padding: '1.25rem 1.5rem' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{f.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75, margin: '1rem 0 0' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA after FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            ¿Una pregunta más? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Llame a Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Directamente con el titular. Consejo claro, sin jerga, un orden de magnitud honesto, un siguiente paso solo si el proyecto tiene verdadero sentido para usted y su farmacia.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestro saber hacer abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, plantee sus preguntas, las responderemos."
        items={[
          { href: '/es/sol-pvc-cabinet-medical', title: 'Suelo de PVC para consultas médicas', teaser: 'Un suelo que tranquiliza a sus pacientes desde la sala de espera y facilita su limpieza diaria.', icon: Stethoscope },
          { href: '/es/sol-pvc-laboratoire-pharmaceutique', title: 'Suelo de PVC para laboratorios', teaser: 'El rigor de acabado que exige una auditoría de calidad. Termosoldaduras, suelos claros, zócalo sanitario.', icon: FlaskConical },
          { href: '/es/sol-pvc-creche', title: 'Suelo de PVC para guarderías', teaser: 'Sin ftalatos, antibacteriano, certificado para la primera infancia. Tranquilidad para padres y personal.', icon: Baby },
          { href: '/es/sol-pvc-ecole', title: 'Suelo de PVC para colegios', teaser: 'Acústica calmada, mantenimiento rápido, durabilidad de quince años en un aula que no para.', icon: GraduationCap },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de PVC, alfombras a medida: nuestro saber hacer al servicio de su hogar.', icon: Home },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir su visión.', icon: Building2 },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El titular le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su farmacia renovada <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>sin un solo día de cierre.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita in situ en su farmacia. Un presupuesto en 48 horas, un suelo con clasificación A+, conformidad sanitaria, instalación nocturna, una reapertura sin olores. Más de 28 años de saber hacer de CB Sols al servicio de los farmacéuticos titulares.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=pharmacie" variant="primary" size="md">Solicitar un presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Cita en el showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            O <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
