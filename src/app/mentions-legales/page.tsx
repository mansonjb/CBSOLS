import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Mentions Légales | CB Sols Revêtements',
  description: "Mentions légales du site cbsols.fr : éditeur, hébergement, propriété intellectuelle, données personnelles.",
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://cbsols.fr/mentions-legales' },
}

const sections = [
  {
    title: 'Éditeur du site',
    lines: [
      'Raison sociale : CB Sols Revêtements',
      `Directeur de publication : ${company.director}`,
      'Siège social : 8 rue des Merises, ZA les Cerisiers, 17230 Villedoux',
      `Téléphone : ${company.phone}`,
      `Email : ${company.email}`,
      `SIRET : ${company.siret}`,
      'Forme juridique : Société',
      'TVA intracommunautaire : sur demande',
      'Activité : Pose de revêtements de sol (moquette, sol PVC, tapis sur mesure)',
      'Qualification : Qualibat 6111 — Revêtements de sols souples',
      'Assurance professionnelle et décennale souscrites.',
    ],
  },
  {
    title: 'Hébergement',
    lines: [
      'Hébergeur : Vercel Inc.',
      'Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
      'Site : https://vercel.com',
      "Le site est déployé via l'infrastructure Edge Vercel, avec serveurs de périphérie en Europe (Paris, Francfort).",
    ],
  },
  {
    title: 'Propriété intellectuelle',
    lines: [
      "L'ensemble du contenu présent sur le site cbsols.fr (textes, graphismes, images, logos, photographies de chantiers, vidéos, structure) est la propriété exclusive de CB Sols Revêtements, sauf mention contraire.",
      "Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, est interdite sans autorisation écrite préalable.",
      "Les logos des marques partenaires (EGE, Gerflor, Tarkett, Balsan, Interface, Forbo) restent la propriété de leurs détenteurs respectifs et sont affichés à titre informatif dans le cadre de la relation commerciale avec CB Sols Revêtements.",
      "Les logos des clients affichés dans la section « Ils nous ont fait confiance » sont utilisés avec leur accord, dans le cadre de références professionnelles.",
    ],
  },
  {
    title: 'Données personnelles (RGPD)',
    lines: [
      "Les informations recueillies via le formulaire de contact ou le formulaire de devis express (nom, téléphone, email, ville, type de projet, message) sont destinées exclusivement à CB Sols Revêtements pour traiter votre demande de devis ou de rendez-vous.",
      "Base légale du traitement : intérêt légitime de CB Sols Revêtements à répondre aux demandes commerciales, et consentement explicite de l'utilisateur lors de l'envoi du formulaire.",
      "Durée de conservation : 3 ans à compter du dernier contact pour les prospects, et pendant toute la durée de la relation commerciale puis 10 ans pour les clients (obligations comptables).",
      "Destinataires : uniquement l'équipe CB Sols Revêtements. Aucun transfert à des tiers, aucune vente de données.",
      "Vos droits : conformément au RGPD (règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition sur vos données personnelles. Pour exercer ces droits, contactez-nous à " + company.email + ".",
      "Vous pouvez également adresser une réclamation à la CNIL (www.cnil.fr) si vous estimez que vos droits n'ont pas été respectés.",
    ],
  },
  {
    title: 'Cookies et traceurs',
    lines: [
      "Le site cbsols.fr utilise un minimum de cookies nécessaires à son bon fonctionnement (session, préférence de thème clair/sombre).",
      "Aucun cookie publicitaire ni traceur tiers à des fins marketing n'est déposé sans votre consentement explicite.",
      "Un outil de mesure d'audience (Vercel Speed Insights) peut être utilisé pour mesurer anonymement les performances du site. Les données sont agrégées et ne permettent pas d'identifier les visiteurs.",
    ],
  },
  {
    title: 'Liens sortants',
    lines: [
      "Le site cbsols.fr peut contenir des liens vers d'autres sites (Google Maps, réseaux sociaux). CB Sols Revêtements n'est pas responsable du contenu de ces sites tiers, ni de l'usage qui pourrait en être fait.",
    ],
  },
  {
    title: 'Responsabilité',
    lines: [
      "CB Sols Revêtements s'efforce de fournir sur le site cbsols.fr des informations aussi précises que possible. Toutefois, nous ne saurions être tenus responsables des omissions, inexactitudes ou carences dans la mise à jour des informations, qu'elles proviennent de nous ou de tiers partenaires.",
      "Les photographies de réalisations présentes sur le site sont publiées avec l'accord des clients concernés, et à titre d'illustration. Les projets réels peuvent différer selon les contraintes du chantier, le choix des matériaux et les préférences du client.",
    ],
  },
  {
    title: 'Droit applicable et juridiction',
    lines: [
      "Le site cbsols.fr est soumis au droit français. En cas de litige, et après tentative de résolution amiable, compétence est attribuée aux tribunaux français, ressort de La Rochelle.",
    ],
  },
]

export default function MentionsLegalesPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Informations légales</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Mentions légales
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>
            En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site cbsols.fr l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
            Dernière mise à jour : 24 avril 2026
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
              Une question sur vos données ou nos conditions d&apos;utilisation ?
            </p>
            <Button href="/contact" variant="primary" size="md">Nous contacter</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
