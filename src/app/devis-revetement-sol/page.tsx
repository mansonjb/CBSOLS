import Link from 'next/link'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { ContactForm } from '@/components/ContactForm'
import { CallbackForm } from '@/components/CallbackForm'
import { RelatedCards } from '@/components/RelatedCards'
import { Building2, Hammer, Home, Image as ImageIcon, Mail, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Devis Revêtement de Sol Gratuit | Réponse sous 48h',
  description:
    'Demandez votre devis revêtement de sol gratuit et sans engagement : moquette, sol PVC, tapis sur mesure. Réponse sous 48h en Charente-Maritime. CB Sols, plus de 25 ans d\'expérience.',
  alternates: { canonical: 'https://cbsols.fr/devis-revetement-sol' },
  keywords: ['devis revêtement de sol', 'devis sol gratuit', 'devis moquette', 'devis sol PVC', 'devis tapis sur mesure', 'chiffrage revêtement sol Charente-Maritime'],
  openGraph: {
    title: 'Devis revêtement de sol gratuit, réponse sous 48h',
    description:
      'Moquette, sol PVC, tapis sur mesure : demandez votre devis gratuit et sans engagement en Charente-Maritime. CB Sols, plus de 25 ans d\'expérience, réponse sous 48h.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/devis-revetement-sol.jpg', width: 1200, height: 630 }],
  },
}

const reassurances = [
  { title: '100% gratuit', desc: 'Visite et chiffrage offerts' },
  { title: 'Réponse sous 48h', desc: 'Un interlocuteur unique' },
  { title: 'Sans engagement', desc: 'Vous restez libre' },
]

const etapes = [
  {
    step: 'Vous décrivez votre projet',
    desc: "Type de sol, pièce concernée, surface approximative, votre ville. Le formulaire prend deux minutes, et un doute sur la surface n'est pas un problème, on est là pour ça.",
  },
  {
    step: 'On échange et on mesure',
    desc: "Un appel pour cerner le besoin, puis une visite sur place quand c'est utile. On vérifie le support, on prend les cotes exactes, on vous conseille sur le bon matériau.",
  },
  {
    step: 'Vous recevez votre devis',
    desc: "Un document clair sous 48 heures, détaillé poste par poste. Vous prenez le temps de la réflexion. Vous êtes libre d'accepter ou non, sans aucune relance insistante.",
  },
]

const inclus = [
  "La fourniture du revêtement choisi, marque et gamme précisées",
  "La préparation du support, ragréage compris si nécessaire",
  "La pose par nos soins, jamais de sous-traitance",
  "Les finitions, plinthes, barres de seuil et raccords",
  "L'évacuation et le nettoyage du chantier en fin de pose",
  "La garantie décennale et notre engagement de finition",
]

const faq = [
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, entièrement. L'étude de votre projet, la visite sur place et le chiffrage détaillé ne vous coûtent rien et ne vous engagent à rien. Vous ne payez que si vous décidez de nous confier les travaux.",
  },
  {
    q: "Sous combien de temps ai-je une réponse ?",
    a: "Nous nous engageons à revenir vers vous sous 48 heures ouvrées après votre demande. Dans la pratique, un premier contact se fait souvent dès le lendemain pour cadrer le besoin et caler une visite si elle est utile. Le devis détaillé, lui, vous parvient dans les deux jours qui suivent notre échange ou notre passage. Si votre projet est urgent, dites-le nous, nous faisons au mieux pour accélérer. Vous n'attendez jamais sans nouvelles : si nous avons besoin d'une précision, nous vous appelons plutôt que de laisser votre demande dormir.",
  },
  {
    q: "Faut-il forcément que vous vous déplaciez ?",
    a: "Pas toujours. Pour un projet simple et bien décrit, une moquette dans une chambre par exemple, nous pouvons souvent établir un premier chiffrage à distance, sur la base de vos mesures et de quelques photos. En revanche, dès que le support est incertain, que la surface est importante ou que les finitions sont délicates, une visite reste la garantie d'un devis juste. Elle est gratuite et sans engagement. C'est souvent dix minutes sur place qui évitent une mauvaise surprise en cours de chantier.",
  },
  {
    q: "Intervenez-vous dans ma commune ?",
    a: "Nous intervenons sur l'ensemble de la Charente-Maritime, de La Rochelle à Royan en passant par Rochefort, Saintes, l'Île de Ré et l'Île d'Oléron. Nous nous déplaçons aussi régulièrement au-delà, en Nouvelle-Aquitaine, pour des chantiers particuliers ou professionnels. Si vous avez un doute sur votre commune, appelez-nous ou indiquez-la dans le formulaire : nous vous dirons franchement si le déplacement a du sens pour votre projet. Nous préférons être honnêtes en amont plutôt que de vous laisser espérer une intervention que nous ne pourrions pas assurer correctement.",
  },
  {
    q: "Suis-je engagé si j'accepte le devis ?",
    a: "Accepter le devis, c'est simplement valider que vous souhaitez démarrer les travaux aux conditions indiquées. Tant que vous ne l'avez pas signé, vous n'êtes engagé à rien, et même après la visite vous restez parfaitement libre. Une fois le devis signé, il fait office de contrat : il fixe le prix, les prestations et les délais convenus, ce qui vous protège autant que nous. Pas de montant qui change en cours de route, pas de prestation ajoutée sans votre accord. C'est précisément le rôle d'un devis détaillé.",
  },
  {
    q: "Pouvez-vous chiffrer la pose sur un sol existant ?",
    a: "Oui, et c'est très fréquent. Dans bien des cas, on peut poser un nouveau revêtement directement sur un carrelage, un ancien parquet ou une moquette existante, à condition que le support soit sain et stable. Cela évite le coût et le bruit d'une dépose. Tout dépend de l'état réel du sol en place : un carreau qui sonne creux, un parquet qui bouge ou une moquette gorgée d'humidité changent la donne. C'est justement ce que nous vérifions lors de la visite, pour vous dire ce qui est faisable et ce qui tiendra dans le temps. Le devis précise toujours la solution retenue.",
  },
  {
    q: "Le devis inclut-il la dépose de l'ancien sol ?",
    a: "Quand la dépose est nécessaire, elle figure clairement dans le devis, avec son coût détaillé et l'évacuation des gravats. Lorsqu'on peut poser directement sur le sol existant, cette ligne disparaît, et vous voyez tout de suite l'économie réalisée. Notre principe est simple : vous devez comprendre chaque poste de la facture, dépose comprise. Pas de forfait flou, pas de surprise le jour de l'intervention. Si après ouverture du chantier nous découvrons un imprévu sérieux sous l'ancien sol, nous vous prévenons et validons ensemble avant d'aller plus loin.",
  },
]

export default function DevisRevetementSolPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/devis-revetement-sol#service',
        name: 'Devis revêtement de sol gratuit',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: 'Devis et chiffrage de revêtement de sol',
        description:
          "Devis gratuit et sans engagement pour la pose de revêtements de sol : moquette, sol PVC, tapis sur mesure. Visite sur place, chiffrage détaillé poste par poste, réponse sous 48 heures en Charente-Maritime.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Devis revêtement de sol', item: 'https://cbsols.fr/devis-revetement-sol' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Devis revêtement de sol</span>
          </div>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>Devis gratuit · sans engagement</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Votre devis revêtement de sol,<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>gratuit et sous 48 heures.</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '2rem' }}>
              Vous avez un projet de moquette, de sol PVC ou de tapis sur mesure, à La Rochelle, sur l&apos;Île de Ré ou partout en Charente-Maritime. Vous voulez savoir combien ça coûte, sans vous engager. C&apos;est exactement à ça que sert cette page. Décrivez-nous votre projet en deux minutes, et CB Sols revient vers vous avec un chiffrage clair, détaillé, sans frais cachés.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="#devis" variant="primary" size="md">Demander mon devis gratuit</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Rappel rapide (option express, en haut de page) */}
      <section id="rappel" style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--dark)', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="devis-callback-band" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '0.85rem', fontWeight: 700 }}>Le plus rapide</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Pas le temps d&apos;écrire ?<br /><em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>On vous rappelle.</em>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(248, 245, 238, 0.78)', lineHeight: 1.75, margin: 0 }}>
                Laissez juste votre numéro et le moment qui vous arrange. Valentin ou son équipe vous rappelle, c&apos;est souvent plus simple pour parler de votre projet de vive voix. Le rappel est gratuit et sans engagement.
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: '14px', padding: '2rem' }}>
              <CallbackForm />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 820px) {
            .devis-callback-band { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>

      {/* Bandeau 3 réassurances */}
      <section style={{ padding: '2.5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {reassurances.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'color-mix(in srgb, var(--terra) 12%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10l4.5 4.5L16 6" stroke="var(--terra)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.01em' }}>{r.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi demander un devis */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pourquoi un devis détaillé</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em' }}>
            Un vrai devis, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pas une estimation au doigt mouillé.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Un sol, ça ne se chiffre pas sérieusement par téléphone en trente secondes. Le prix dépend de la surface réelle, de l&apos;état du support, du matériau choisi et des finitions. C&apos;est pour ça qu&apos;on prend le temps de bien comprendre votre projet avant d&apos;avancer le moindre montant. Vous recevez un devis ligne par ligne, où vous voyez exactement ce que vous payez : la fourniture, la préparation du support, la pose, les finitions.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
            Depuis plus de 25 ans, CB Sols pose des sols en Charente-Maritime, du particulier qui refait son salon à l&apos;hôtelier qui rénove ses chambres. Cette expérience, c&apos;est ce qui nous permet de vous dire d&apos;emblée ce qui est faisable, ce qui tiendra dans le temps, et à quel prix. Pas de mauvaise surprise en cours de chantier.
          </p>
        </div>
      </section>

      {/* Comment ça marche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Comment ça marche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Trois étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>zéro pression.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {etapes.map((e, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{e.step}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que comprend votre devis */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce que comprend votre devis</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Tout est écrit, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>rien n&apos;est caché.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {inclus.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', padding: '1rem 1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M4 10l4.5 4.5L16 6" stroke="var(--terra)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: '0.9rem', color: 'var(--dark)', lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation Valentin */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Un devis, ce n&apos;est pas qu&apos;un prix. C&apos;est le premier rendez-vous où on comprend ce que le client veut vraiment. Je préfère passer dix minutes de plus à mesurer juste, plutôt que d&apos;annoncer un chiffre que je devrai corriger après. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, gérant de CB Sols</div>
          </div>
        </div>
      </section>

      {/* Zone de conversion : formulaire devis (colonne unique) */}
      <section id="devis" style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>Demande de devis</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em' }}>
            Décrivez votre projet
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Plus vous nous en dites, plus le chiffrage sera précis. Mais l&apos;essentiel suffit pour démarrer. Vous préférez un appel ? <a href="#rappel" style={{ color: 'var(--terra)', fontWeight: 600, textDecoration: 'none' }}>Demandez plutôt à être rappelé</a>.
          </p>
          <Suspense fallback={<div style={{ minHeight: 400 }} />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* Barre de confiance */}
      <section style={{ padding: '3rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {[
              { big: 'Plus de 25 ans', small: "d'expérience" },
              { big: '41 avis Google', small: 'de clients satisfaits' },
              { big: 'Assurance décennale', small: 'sur tous nos travaux' },
            ].map((t, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.6rem)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em' }}>{t.big}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>{t.small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Le devis, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>questions concrètes.</em>
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

      <RelatedCards
        sectionSubtitle="Avant de demander votre devis, vous voulez peut-être en savoir plus sur ce que nous faisons. Parcourez nos prestations, nos réalisations et notre showroom."
        items={[
          { href: "/services", title: "Nos services", teaser: "Moquette, sol PVC, tapis sur mesure, nettoyage : l'ensemble de notre savoir-faire en un coup d'œil.", icon: Hammer },
          { href: "/particuliers", title: "Pour les particuliers", teaser: "Refaire un salon, une chambre, un escalier : notre accompagnement pour votre maison.", icon: Home },
          { href: "/secteurs", title: "Pour les professionnels", teaser: "Hôtels, bureaux, commerces, santé : des sols pensés pour leurs contraintes de métier.", icon: Building2 },
          { href: "/realisations", title: "Nos réalisations", teaser: "Des chantiers concrets en Charente-Maritime, avant et après, pour vous projeter.", icon: ImageIcon },
          { href: "/showroom", title: "Showroom Villedoux", teaser: "Venez voir et toucher les matières. Sur rendez-vous, près de La Rochelle.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gérant vous répond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Un projet de sol ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons-en.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Que ce soit pour une pièce ou pour un chantier complet, on vous répond avec le même soin. Le premier pas, c&apos;est ce devis gratuit.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="#devis" variant="primary" size="md">Demander mon devis gratuit</Button>
            <Button href="/realisations" variant="outline" size="md">Voir nos réalisations</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Ou <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
