import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Tapis & Escalier sur Mesure | Pose Artisanale La Rochelle, Île de Ré',
  description: "Pose de tapis sur mesure pour escalier en bois ou en pierre, entrée, salon. Fabrication & pose artisanale, marques EGE & Romus (profilés). Le bon savoir-faire pour un rendu impeccable.",
  alternates: { canonical: 'https://cbsols.fr/particuliers/tapis-escalier-sur-mesure' },
}

const cas = [
  { title: 'Escalier en bois', desc: 'Tapis sur mesure découpé et posé marche par marche, contremarche tendue, profilés Romus en laiton ou inox pour le nez de marche. Préserve le bois, étouffe le bruit, donne du caractère.' },
  { title: 'Escalier en pierre ou béton', desc: 'Pose collée avec contremarches habillées. Idéal en résidence secondaire ou maison ancienne où l\'escalier est froid et sonore. Rendu hôtellerie de charme.' },
  { title: 'Entrée & couloir', desc: 'Tapis sur mesure aux dimensions exactes de votre entrée, avec finition surjet ou bordure tissée. Possibilité de motif personnalisé en collection EGE Custom.' },
  { title: 'Salon, bibliothèque, chambre', desc: 'Grand tapis sur mesure pour délimiter un espace, feutrer un salon, créer une zone lecture. Découpe, finition et livraison à domicile.' },
]

const produits = [
  { name: 'EGE Axminster Custom', desc: 'Le tissé haut de gamme du danois EGE : motifs sur mesure, jusqu\'à 24 couleurs, qualité de palace. Délai 6-10 semaines, mais le résultat est incomparable.' },
  { name: 'EGE Highline / Cantana', desc: 'Tuftées prestige pour découpe en tapis sur mesure. Plus rapides à produire (3-5 semaines), gamme de coloris très large.' },
  { name: 'Profilés Romus', desc: 'Nez de marche en laiton, inox ou aluminium pour escalier. Choix de la finition (poli, brossé, vieilli) en showroom selon le style de votre maison.' },
]

const process = [
  { step: 'Visite', desc: 'Mesures précises de l\'escalier (toutes les marches, contremarches, palier intermédiaire), de la cage, et discussion du style recherché.' },
  { step: 'Showroom', desc: 'Sélection du matériau et des profilés en conditions réelles. Comparaison de plusieurs gammes et coloris sous lumière naturelle.' },
  { step: 'Devis', desc: 'Devis détaillé : matériau au m², profilés, fabrication sur mesure, pose. Délai de fabrication communiqué dès la commande.' },
  { step: 'Fabrication', desc: 'Découpe et confection chez le fabricant ou en atelier (selon la gamme). Délai 3 à 10 semaines selon le produit choisi.' },
  { step: 'Pose', desc: 'Pose marche par marche avec colle adaptée, tension précise des contremarches, fixation des profilés. Travail méticuleux, finitions soignées.' },
]

const faq = [
  { q: 'Quel est le délai pour un tapis d\'escalier sur mesure ?', a: "Comptez 4 à 12 semaines entre la commande et la pose, selon la gamme : 3-5 semaines pour les tuftées EGE Highline, 6-10 semaines pour les Axminster Custom, plus 1 à 2 jours de pose. Nous communiquons un délai précis au devis." },
  { q: 'Combien coûte un tapis d\'escalier sur mesure ?', a: "Très variable selon la gamme et le nombre de marches. À titre indicatif : un escalier droit standard de 14 marches en EGE Highline démarre autour de 1800-2500 €, profilés et pose inclus. Un escalier tournant en Axminster Custom monte rapidement à 4000-6000 €. Devis précis après visite." },
  { q: 'Peut-on poser un tapis sur un escalier ancien (bois, pierre) ?', a: "Oui, presque toujours. Le support doit être stable et propre. Sur escalier en pierre, un primaire d'accrochage est nécessaire. Sur bois ancien, vérification de la fixité des marches. Dans tous les cas, nous évaluons à la visite." },
  { q: 'Le tapis abîme-t-il le bois de l\'escalier ?', a: "Non, au contraire : il le protège de l'usure et des chocs. À la dépose éventuelle, la colle se retire proprement (sur bois vernis ou peint). Sur bois brut, des traces résiduelles peuvent rester. Nous le précisons toujours." },
  { q: 'Pourquoi peu d\'artisans font ce métier ?', a: "Parce que c'est exigeant : prise de cotes précise, fabrication sur mesure, pose minutieuse marche par marche. C'est un savoir-faire qui se perd dans les enseignes nationales. Nous le pratiquons depuis 27 ans, principalement pour des hôtels et maisons de famille." },
]

export default function TapisEscalierPage() {
  return (
    <div style={{ paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/particuliers" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Particuliers</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Tapis & escalier sur mesure</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Tapis & escalier<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>sur mesure.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Habiller un escalier en bois ou en pierre, créer une entrée d&apos;exception, feutrer un salon : un savoir-faire artisanal rare, que nous pratiquons depuis 27 ans pour les hôtels de charme et les maisons de famille de la région.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=tapis-escalier" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">RDV showroom</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tapis-hotel-baronnie.webp" alt="Tapis sur mesure pour escalier" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* Cas */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de projet ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre prestations <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>artisanales.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Produits & finitions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Le danois EGE pour la matière, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Romus pour les profilés.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {produits.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < produits.length - 1 ? '1px solid var(--border)' : 'none' }}>
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

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>fabrication sur mesure.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Tapis & escalier, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses précises.</em>
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

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Un escalier <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>à transformer ?</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Devis sur mesure après visite, fabrication artisanale, pose méticuleuse. Toute la Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=tapis-escalier" variant="primary" size="md">Demander un devis</Button>
            <Button href="/showroom" variant="outline" size="md">RDV showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Ou <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
