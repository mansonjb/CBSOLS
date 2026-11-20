import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Aviso legal | CB Sols Revêtements',
  description: 'Aviso legal de cbsols.fr: editor, alojamiento, propiedad intelectual, datos personales.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://cbsols.fr/es/mentions-legales',
    languages: { 'fr-FR': 'https://cbsols.fr/mentions-legales', en: 'https://cbsols.fr/en/mentions-legales', es: 'https://cbsols.fr/es/mentions-legales', },
  },
}

const sections = [
  {
    title: 'Editor del sitio',
    lines: [
      'Razón social: CB Sols Revêtements',
      `Director de la publicación: ${company.director}`,
      'Domicilio social: 8 rue des Merises, ZA les Cerisiers, 17230 Villedoux',
      `Teléfono: ${company.phone}`,
      `Correo electrónico: ${company.email}`,
      `SIRET: ${company.siret}`,
      'Forma jurídica: Sociedad',
      'IVA intracomunitario: bajo petición',
      'Actividad: Instalación de revestimientos de suelo (moqueta, suelo de vinilo, alfombras a medida)',
      'Experiencia: más de 500 proyectos realizados desde 1998',
      'Seguro de responsabilidad civil profesional y decenal en vigor.',
    ],
  },
  {
    title: 'Alojamiento',
    lines: [
      'Proveedor de alojamiento: Vercel Inc.',
      'Dirección: 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos',
      'Sitio web: https://vercel.com',
      'El sitio se despliega a través de la infraestructura Vercel Edge, con servidores perimetrales en Europa (París, Fráncfort).',
    ],
  },
  {
    title: 'Propiedad intelectual',
    lines: [
      'Todo el contenido del sitio cbsols.fr (textos, elementos gráficos, imágenes, logotipos, fotografías de proyectos, vídeos, estructura) es propiedad exclusiva de CB Sols Revêtements, salvo indicación en contrario.',
      'Queda prohibida cualquier reproducción, representación, modificación, publicación, transmisión o alteración, total o parcial, del sitio o de su contenido, por cualquier medio, sin autorización previa por escrito.',
      'Los logotipos de las marcas colaboradoras (EGE, Gerflor, objectflor, Bostik, Romus) siguen siendo propiedad de sus respectivos titulares y se muestran a título informativo en el marco de la relación comercial con CB Sols Revêtements.',
      'Los logotipos de clientes que aparecen en la sección «Confían en nosotros» se utilizan con su acuerdo, como referencias profesionales.',
    ],
  },
  {
    title: 'Datos personales (RGPD)',
    lines: [
      'La información recogida a través del formulario de contacto o del formulario de presupuesto exprés (nombre, teléfono, correo electrónico, municipio, tipo de proyecto, mensaje) está destinada exclusivamente a CB Sols Revêtements para gestionar su solicitud de presupuesto o de cita.',
      'Base jurídica del tratamiento: el interés legítimo de CB Sols Revêtements en responder a las consultas comerciales, y el consentimiento explícito del usuario al enviar el formulario.',
      'Plazo de conservación: 3 años desde el último contacto para los posibles clientes, y durante toda la duración de la relación comercial y después 10 años para los clientes (obligaciones contables).',
      'Destinatarios: únicamente el equipo de CB Sols Revêtements. Ninguna cesión a terceros, ninguna venta de datos.',
      'Sus derechos: de conformidad con el RGPD (Reglamento UE 2016/679) y la legislación francesa de protección de datos, usted dispone de un derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición respecto a sus datos personales. Para ejercer estos derechos, contáctenos en ' + company.email + '.',
      'También puede presentar una reclamación ante la CNIL (www.cnil.fr) si considera que sus derechos no se han respetado.',
    ],
  },
  {
    title: 'Cookies y rastreadores',
    lines: [
      'El sitio cbsols.fr utiliza un mínimo de cookies necesarias para su correcto funcionamiento (sesión, preferencia de tema claro/oscuro).',
      'Ninguna cookie publicitaria ni rastreador de marketing de terceros se instala sin su consentimiento explícito.',
      'Puede utilizarse una herramienta de medición de audiencia (Vercel Speed Insights) para medir el rendimiento del sitio de forma anónima. Los datos son agregados y no identifican a los visitantes.',
    ],
  },
  {
    title: 'Enlaces salientes',
    lines: [
      'El sitio cbsols.fr puede contener enlaces a otros sitios (Google Maps, redes sociales). CB Sols Revêtements no se hace responsable del contenido de estos sitios de terceros ni del uso que pueda hacerse de ellos.',
    ],
  },
  {
    title: 'Responsabilidad',
    lines: [
      'CB Sols Revêtements se esfuerza por facilitar en el sitio cbsols.fr una información lo más precisa posible. No obstante, no podemos ser considerados responsables de las omisiones, inexactitudes o carencias en la actualización de la información, ya provengan de nosotros o de socios externos.',
      'Las fotografías de proyectos del sitio se publican con el acuerdo de los clientes afectados y a título ilustrativo. Los proyectos reales pueden diferir según las limitaciones del proyecto, la elección de los materiales y las preferencias del cliente.',
    ],
  },
  {
    title: 'Legislación aplicable y jurisdicción',
    lines: [
      'El sitio cbsols.fr se rige por la legislación francesa. En caso de litigio, y tras un intento de resolución amistosa, la competencia corresponde a los tribunales franceses del partido judicial de La Rochelle.',
    ],
  },
]

export default function MentionsLegalesPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Información legal</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Aviso legal
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>
            En virtud del artículo 6 de la ley francesa n.º 2004-575 de 21 de junio de 2004 relativa a la confianza en la economía digital, se informa a los usuarios del sitio cbsols.fr de la identidad de las distintas partes implicadas en su creación y mantenimiento.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
            Última actualización: 24 de abril de 2026
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {sections.map((section) => (
              <div
                key={section.title}
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
                style={{ borderTop: '2px solid var(--terra)', paddingTop: '2rem', scrollMarginTop: '90px' }}
              >
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
                  {section.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {section.lines.map((line, i) => (
                    <p key={i} style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.75, margin: 0 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', margin: '0 0 1rem' }}>
              ¿Una pregunta sobre sus datos o nuestras condiciones de uso?
            </p>
            <Button href="/es/contact" variant="primary" size="md">Contáctenos</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
