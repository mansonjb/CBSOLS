import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Saint-Émilion | Châteaux vinícolas de la Gironde',
  description: 'Instalación de moqueta, vinilo y alfombras a medida para los châteaux vinícolas de Saint-Émilion y los grands crus del Libournais. Bodegas de recepción, salas de cata, suites privadas. CB Sols, más de 28 años de experiencia.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-saint-emilion',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-saint-emilion', en: 'https://cbsols.fr/en/revetement-sol-saint-emilion', es: 'https://cbsols.fr/es/revetement-sol-saint-emilion', },
  },
  keywords: ['revestimiento de suelo Saint-Émilion', 'moqueta château vinícola', 'suelo de vinilo bodega de cata', 'alfombra a medida Libournais', 'artesano de suelos Gironde'],
  openGraph: {
    title: 'Revestimiento de suelo en Saint-Émilion, el suelo de los grands crus',
    description: 'Moqueta, vinilo y alfombras a medida para châteaux vinícolas en Saint-Émilion y el Libournais. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-saint-emilion.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Bodegas de recepción y de cata', desc: 'Su bodega es la primera impresión que usted da a un corredor o a un cliente privado. Moqueta de lana para absorber las conversaciones. Vinilo efecto piedra en las zonas de paso. Una alfombra a medida en el salón de recepción.' },
  { title: 'Comedores de la propiedad', desc: 'Usted recibe en la mesa de la propiedad. Instalamos una moqueta de lana sobre una base de fieltro para la acústica. Una alfombra a medida bajo la mesa de ceremonias. Venimos en temporada baja, nunca durante la vendimia.' },
  { title: 'Suites de huéspedes en un château vinícola', desc: 'Usted acoge a sus visitantes en habitaciones de huéspedes de primer nivel. Moqueta de lana en los dormitorios, vinilo efecto madera en el lado del baño, una alfombra a medida en el salón privado. El tono queda marcado desde el momento en que se abre la puerta.' },
  { title: 'Oficinas y tiendas de venta directa', desc: 'Usted gestiona un despacho de propietario y una tienda en la propiedad. Vinilo acústico para trabajar con tranquilidad, losetas de moqueta en el resto. Adaptamos la paleta al mobiliario antiguo que ya tiene.' },
]

const exigences = [
  { title: 'Respetamos el calendario de la vendimia', desc: 'Septiembre y octubre: no se molesta a la vendimia. El invierno y el pleno verano son las buenas ventanas para trabajar. Lo fijamos todo con mucha antelación con el maestro de bodega. Usted no pierde ni un día de producción.' },
  { title: 'Conservamos la terracota antigua', desc: 'Muchos châteaux conservan sus baldosas originales de terracota o de piedra en las salas de ceremonias. Preferimos una alfombra fina a medida, colocada de forma reversible, antes que una moqueta pegada. Si algún día usted cambia de opinión, el suelo histórico queda intacto.' },
  { title: 'Acústica para las catas', desc: 'Una cata se desarrolla con voz mesurada y términos precisos. Una sala desnuda resuena, cansa a los invitados y diluye el mensaje. Una moqueta de lana o una gran alfombra sobre una base de fieltro transforman la escucha. La conversación gana en finura.' },
  { title: 'Recepción enoturística, el detalle cuenta', desc: 'Sus visitantes pagan por una experiencia completa: la copa, la luz, el suelo bajo los pies. Una bodega cuidada bajo los pies cuenta la misma historia que el gran vino en la copa. Adaptamos el material al discurso de la propiedad. Todo cobra sentido.' },
  { title: 'Coordinación con el arquitecto y el director de la propiedad', desc: 'En un grand cru suele haber un arquitecto parisino y un director de la propiedad en el lugar. Nos integramos en ese equipo, aportamos las fichas técnicas y los certificados, enviamos muestras para validarlas bajo la luz de la bodega. Usted mantiene el control, nosotros acompañamos.' },
  { title: 'Venimos desde La Rochelle, rápido', desc: 'El Libournais está a dos horas de nuestro taller. Subimos con regularidad y conocemos las carreteras de Saint-Émilion. Usted llama y nosotros vamos a medir en la misma semana. Sin recargo oculto por desplazamiento, sin intermediarios.' },
]

const materiaux = [
  { name: 'Moqueta Wilton de lana virgen y Axminster a medida', desc: 'Nuestro material de referencia para salones de recepción y suites de huéspedes Relais & Châteaux. El Axminster británico permite hasta treinta y seis colores en un mismo motivo. Así podemos integrar el escudo de su familia o un dibujo de la casa. Cuente con ocho a doce semanas a medida y cuatro a ocho semanas para un Wilton clásico.' },
  { name: 'Moqueta EGE Hospitality, clasificación Bfl-s1', desc: 'Para una bodega de cata o una sala que recibe público, se necesita una moqueta que cumpla la seguridad contra incendios. EGE Hospitality está tratada contra el fuego en el núcleo de la fibra, por lo que alcanza la clasificación Bfl-s1. Una amplia gama de colores para alinearse con su señalética. Y soporta los ritmos de los primeurs en abril y de la vendimia en septiembre.' },
  { name: 'Vinilo Tarkett iQ Granit Acoustic y Forbo Coral', desc: 'Para la circulación de la bodega y las entradas de las bodegas abiertas al público, optamos por el vinilo profesional. El aislamiento acústico llega hasta diecinueve decibelios. Un aspecto liso mate o efecto piedra, lo adaptamos a su arquitectura. Soldamos las láminas en caliente, el acabado es continuo y el mantenimiento se hace en cinco minutos.' },
  { name: 'Alfombras Hereke y Aubusson reconstruidas', desc: 'Para un salón de recepción o una biblioteca de château, la alfombra a medida cumple su función. Reproducimos un motivo histórico en lana virgen, con una cenefa cosida a mano y dimensiones al centímetro. Podemos incluir un discreto detalle vinícola, una hoja de vid o un racimo estilizado. Cuente con diez a dieciséis semanas de tejido.' },
  { name: 'Vinilo flocado Bolon de alta gama', desc: 'Para los espacios enoturísticos contemporáneos y las tiendas de venta directa, Bolon cumple con todo. Los tonos naturales conviven con la piedra y la madera de la propiedad. El vinilo flocado sueco soporta un uso intensivo. Y el suelo envejece con nobleza durante veinte años, sin marcarse nunca.' },
  { name: 'Perfiles Romus de latón cepillado y bronce patinado', desc: 'Los umbrales y los cantos de escalón los cuidamos con esmero. Coordinamos con la herrajería original del château y con los herrajes de bronce de las puertas de ceremonias. En proyectos patrimoniales concretos, podemos grabar en el perfil la añada o la inicial de la propiedad. Es este tipo de detalle el que deja huella.' },
]

const marques = [
  { name: 'EGE Hospitality', desc: 'El danés es nuestra referencia para los grands crus y los Relais & Châteaux. Sus gamas Highline y Hospitality cumplen la seguridad contra incendios sin dificultad y marcan el tono de inmediato.' },
  { name: 'Brintons', desc: 'El Axminster británico, la aristocracia de la moqueta. Hasta treinta y seis colores en un motivo. Cuando se quiere integrar un escudo o un dibujo de la casa en el tejido, llamamos a Brintons.' },
  { name: 'Tisca Tiara', desc: 'El fabricante suizo, lo más alto de la gama. Lo sacamos para suites de palacio y habitaciones de huéspedes Relais & Châteaux. Cuando el presupuesto acompaña, el resultado no tiene igual.' },
  { name: 'Tarkett iQ Granit Acoustic', desc: 'El vinilo profesional por excelencia, con un aislamiento acústico de hasta diecinueve decibelios. Nuestro estándar para bodegas de cata y salones de recepción que piden calma.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos a Forbo. Su Marmoleum es un verdadero linóleo hecho con aceite de linaza. Los Coral son perfectos para las entradas enoturísticas de mucho tránsito.' },
  { name: 'Bolon', desc: 'El fabricante sueco de vinilo flocado. Un aspecto contemporáneo que encaja en las bodegas modernas y las tiendas de venta directa. Cuente fácilmente con veinte años de resistencia.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para despachos de la propiedad y salas de consejo familiares. Un diseño contemporáneo, acabados perfectos. Para cuando se quiere salir de los códigos clásicos.' },
  { name: 'Hereke', desc: 'Las alfombras turcas tejidas a mano, en seda o en fina lana virgen. Las instalamos en las bibliotecas y salones de recepción de châteaux históricos. Es el tipo de objeto que se hereda.' },
]

const quartiers = [
  { nom: 'Pueblo de Saint-Émilion', detail: 'Una ciudad medieval declarada Patrimonio de la UNESCO. Châteaux en el corazón de la denominación, tiendas de venta directa, hoteles y restaurantes gastronómicos.' },
  { nom: 'Premiers Grands Crus Classés A', detail: 'Cheval Blanc, Ausone, Pavie, Angélus. Propiedades emblemáticas con exigencias absolutas. Bodegas de recepción y suites de huéspedes.' },
  { nom: 'Pomerol', detail: 'La denominación vecina, con propiedades de altísima reputación. Châteaux familiares, salas de cata, despachos de la propiedad.' },
  { nom: 'Lalande-de-Pomerol', detail: 'Una denominación satélite de Pomerol. Propiedades familiares en pleno desarrollo enoturístico.' },
  { nom: 'Castillon-la-Bataille', detail: 'Côtes-de-Castillon, una denominación en ascenso. Propiedades familiares y fincas en reestructuración enoturística.' },
  { nom: 'Saint-Christophe-des-Bardes', detail: 'Un municipio satélite de Saint-Émilion. Châteaux familiares, propiedades de grand cru discretas.' },
  { nom: 'Saint-Étienne-de-Lisse', detail: 'Un municipio de la denominación Saint-Émilion. Propiedades familiares, fincas de patrimonio catalogado.' },
  { nom: 'Saint-Hippolyte', detail: 'Un municipio histórico de la denominación. Châteaux familiares y propiedades patrimoniales de grand cru.' },
  { nom: 'Vignonet', detail: 'Un municipio de la llanura de la denominación. Propiedades familiares, fincas vinícolas clasificadas como grand cru.' },
  { nom: 'Libourne', detail: 'La subprefectura, el centro administrativo del Libournais. Oficinas y sedes sociales de las grandes casas de comercio.' },
  { nom: 'Fronsac', detail: 'Una denominación vecina, en pleno desarrollo. Propiedades familiares y fincas con un fuerte potencial enoturístico.' },
  { nom: 'Côtes-de-Bourg', detail: 'Una denominación al norte del Libournais. Propiedades familiares y fincas en desarrollo enoturístico de primer nivel.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo electrónico. Recopilación de los puntos clave: naturaleza del proyecto (bodega, sala de cata, suites, oficinas), superficie estimada, calendario vinícola de la propiedad, posible ventana de obra. Contacto directo con el director de la propiedad o con el director de enoturismo del château.' },
  { step: 'Visita a la propiedad', desc: 'Una visita organizada en un plazo de 2 a 3 semanas, ajustada al calendario vinícola. Medición con láser, inventario de las limitaciones patrimoniales y enoturísticas, fotos de las carpinterías y materiales existentes, conversación con el director de la propiedad sobre las posibles ventanas de obra.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente al château, al director de enoturismo o al arquitecto de interiores. Validación final bajo la luz de la bodega o del salón de recepción, nunca en un showroom. La luz de las bodegas transforma los colores.' },
  { step: 'Fabricación en el taller de La Rochelle', desc: 'De 3 a 16 semanas según la gama: Axminster a medida (con posible integración del escudo), Wilton, lana virgen, vinilo cortado, alfombras Hereke a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. La preparación previa es esencial para mantener una instalación final de 2 a 5 días en la propiedad.' },
  { step: 'Instalación en el château', desc: 'Un equipo movilizado en el lugar, alojamiento incluido en el presupuesto, un calendario ajustado a la ventana vinícola. Coordinación con el director de la propiedad, el maestro de bodega y el director de enoturismo. Limpieza completa y acabados revisados con el cliente o su arquitecto.' },
]

const faq = [
  { q: '¿De verdad vienen a Saint-Émilion desde La Rochelle?', a: 'Sí, entra perfectamente en nuestro radio de acción. Saint-Émilion está a 2 h 15 por autopista. Vamos a medir una vez y después volvemos para instalar. El alojamiento está incluido en el presupuesto. Ajustamos la obra al calendario vinícola de la propiedad, no al nuestro. La ventana ideal va de enero a marzo, a veces julio y agosto. Planificamos con el director de su propiedad, nunca a ciegas.' },
  { q: '¿Por qué el calendario vinícola lo cambia todo?', a: 'Un château vive al ritmo de las viñas. En septiembre y octubre, la vendimia moviliza a todo el mundo y la instalación es imposible. La vinificación ocupa las bodegas hasta diciembre. En abril, los primeurs traen a corredores y periodistas de todo el mundo. El embotellado ocupa el verano. Las ventanas reales son estrechas. Planificamos con seis a doce meses de antelación para reservarle un periodo tranquilo.' },
  { q: '¿Trabajan en los Premiers Grands Crus Classés A?', a: 'Sí, y es ahí donde nuestros veintisiete años de oficio cobran todo su sentido. Cheval Blanc, Ausone, Pavie, Angélus: ese nivel de prestigio impone exigencias absolutas. Discreción total, un acuerdo de confidencialidad si usted lo pide, acabados milimétricos, coordinación con su arquitecto de interiores parisino o internacional. Tenemos la documentación y el método para entrar en estos expedientes sin contratiempos.' },
  { q: '¿Pueden integrar el escudo de la propiedad en la moqueta?', a: 'Sí, es incluso un terreno que nos encanta. Un Axminster a medida permite hasta treinta y seis colores en un solo motivo. Es más que suficiente para reproducir un escudo, una hoja de vid estilizada o un monograma. Validamos el motivo sobre un cartón, a veces con una o dos pruebas para ajustar los tonos. En una alfombra Aubusson tejida a mano, la finura es aún mayor, con diez a dieciséis semanas de tejido.' },
  { q: '¿Qué materiales para una bodega de cata?', a: 'Una bodega recibe público, por lo que necesita como mínimo una clasificación Bfl-s1. Nuestra combinación habitual es una moqueta de lana EGE Hospitality tratada contra el fuego en la zona de cata, por la acústica y el confort. Y un suelo de vinilo Tarkett o Forbo Coral en las zonas de paso, por la resistencia y el mantenimiento rápido. Usted tiene la experiencia enoturística y el expediente de seguridad queda resuelto.' },
  { q: '¿Trabajan con los arquitectos de interiores de los grands crus?', a: 'Con regularidad. Los grands crus suelen trabajar con estudios de renombre de París o de Burdeos, a veces con diseñadores internacionales para los espacios contemporáneos. Trabajamos como subcontratistas de su prescripción; el arquitecto sigue siendo el interlocutor principal. Enviamos las muestras a su estudio para su validación y aportamos toda la documentación técnica: fichas de materiales, informes de fuego, trazabilidad, planos de colocación.' },
  { q: '¿Cuánto dura un suelo en un château vinícola?', a: 'De quince a veinte años con facilidad, bien elegido y bien instalado. Un Wilton de lana en un comedor de ceremonias con uso moderado dura veinte años y adquiere pátina. Un vinilo Tarkett en una bodega de mucho tránsito dura quince años con una limpieza profesional anual. Una alfombra Hereke en un salón se hereda de generación en generación, como sus vinos. El secreto es poner el material adecuado en el lugar adecuado.' },
]

export default function RevetementSolSaintEmilionPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-saint-emilion#service',
        name: 'Revestimiento de suelo en Saint-Émilion y el Libournais',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Saint-Émilion' },
          { '@type': 'City', name: 'Libourne' },
          { '@type': 'City', name: 'Pomerol' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Instalación de moqueta, vinilo y alfombras a medida para châteaux vinícolas de Saint-Émilion y el Libournais',
        description: 'Diseño, fabricación en taller e instalación de moqueta, vinilo y alfombras a medida para bodegas de recepción, salas de cata, suites de huéspedes y despachos de propiedad de los châteaux vinícolas de Saint-Émilion, Pomerol y el Libournais.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Saint-Émilion', item: 'https://cbsols.fr/es/revetement-sol-saint-emilion' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="saint-emilion" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Saint-Émilion</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Saint-Émilion,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>el suelo de los grands crus.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Instalación de moqueta, vinilo y alfombras a medida para los châteaux vinícolas de Saint-Émilion, Pomerol y el Libournais. Bodegas de recepción, salas de cata, suites de huéspedes Relais & Châteaux. Un taller en La Rochelle, obras ajustadas al calendario vinícola.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=saint-emilion" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Trabajar en un grand cru es entrar en una casa donde cada detalle cuenta, desde la copa hasta la luz de la bodega. El suelo debe estar a la altura. Eso es exactamente lo que CB Sols hace desde hace más de 28 años.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project type */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué tipo de proyecto</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro ambientes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma excelencia enoturística.</em>
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

      {/* CTA inline #1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en un château?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita a la propiedad, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con el director de su propiedad, su director de enoturismo o su arquitecto. Una visita organizada fuera de las ventanas de vendimia y de primeurs, un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=saint-emilion-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Saint-Émilion</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los châteaux vinícolas.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en un grand cru del Libournais no se parece a ningún otro oficio. El calendario vinícola, el patrimonio y la exigencia enoturística dictan un método específico que aplicamos de forma sistemática.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y saber hacer para los châteaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos al grand cru.</em>
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
              &ldquo;En un grand cru recibimos a clientes de los confines de la tierra que contarán la historia de la propiedad durante años. La bodega, el salón, la alfombra bajo la mesa de ceremonias: todo participa en esa primera impresión. Es un privilegio instalar un suelo en estas casas.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=saint-emilion-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita ajustada al calendario vinícola</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos de grand cru.</em>
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

      {/* Appellations */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Denominaciones y municipios donde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Todo el Libournais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Pomerol a las Côtes-de-Bourg.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por todo el Libournais, desde las denominaciones más prestigiosas hasta las propiedades satélite en pleno desarrollo enoturístico de primer nivel.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {quartiers.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline #2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Una llamada para fijar la ventana vinícola.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, identificar la ventana de obra compatible con su calendario vinícola y dar un orden de magnitud del presupuesto.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=saint-emilion-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Saint-Émilion.</em>
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
            Revestimiento de suelo en Saint-Émilion, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directo con el propietario. Sin centralita. Consejo claro, un orden de magnitud honesto, una planificación adaptada a su calendario vinícola.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestro saber hacer abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, hacer sus preguntas, nosotros se las responderemos."
        items={[
          { href: '/es/revetement-sol-bordeaux', title: 'Revestimiento de suelo Burdeos', teaser: 'Casas señoriales, lofts en échoppes, casas de piedra. Suelos que dialogan con la arquitectura.', icon: MapPin },
          { href: '/es/revetement-sol-arcachon', title: 'Revestimiento de suelo Arcachon', teaser: 'Casas de la bahía y villas en las dunas. Suelos que resisten la arena, la luz y la vida diaria.', icon: MapPin },
          { href: '/es/revetement-sol-cap-ferret', title: 'Revestimiento de suelo Cap Ferret', teaser: 'Cabañas de ostras, villas con los pies en la arena. La discreción de un saber hacer que apenas se nota.', icon: Waves },
          { href: '/es/moquette-chateau', title: 'Moqueta para château', teaser: 'Salones de recepción, escaleras monumentales, habitaciones de huéspedes. Una lana que dura medio siglo.', icon: Castle },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir a su visión.', icon: Building2 },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestro saber hacer al servicio de su hogar.', icon: Home },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux, cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su château <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita a la propiedad, ajustada a su calendario vinícola. Un presupuesto detallado, acabados dignos del grand cru, discreción garantizada. Más de 28 años de saber hacer al servicio de Saint-Émilion y el Libournais.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=saint-emilion-final" variant="primary" size="md">Solicitar un presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Cita en el showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            O al <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
