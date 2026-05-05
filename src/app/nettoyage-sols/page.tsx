import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { WhatsAppInlineCTA } from '@/components/WhatsAppInlineCTA'

export const metadata: Metadata = {
  title: 'Nettoyage de Sols Professionnel | Brossage Rotowash CB Sols La Rochelle',
  description:
    "Nettoyage en profondeur de tous types de sols (PVC, lino, carrelage, pierre, béton ciré) au brossage mécanique Rotowash. Hôtels, restaurants, bureaux et collectivités à La Rochelle, Île de Ré et Charente-Maritime.",
  alternates: { canonical: 'https://cbsols.fr/nettoyage-sols' },
  keywords: [
    'nettoyage de sols La Rochelle',
    'brossage mécanique Rotowash',
    'nettoyage sol PVC',
    'nettoyage carrelage professionnel',
    'rénovation sols entreprise',
    'décrassage sol commerce',
  ],
}

const supportedSurfaces = [
  { label: 'Sols PVC en lés ou dalles', desc: 'Décrasse en profondeur les sillons et joints, restaure la couleur d\'origine.' },
  { label: 'Lino & vinyle', desc: 'Élimine les couches de cire ancienne et la saleté incrustée.' },
  { label: 'Carrelage & joints', desc: 'Brossage mécanique précis qui ressort la blancheur des joints sans abîmer l\'émail.' },
  { label: 'Pierre naturelle', desc: 'Décapage en douceur avec brosses adaptées, suivi d\'un imprégnation possible.' },
  { label: 'Béton brut & ciré', desc: 'Restitue l\'aspect d\'origine, prépare aux traitements de protection.' },
  { label: 'Sols industriels', desc: 'Ateliers, entrepôts, garages : décrassage profond, dégraissage maîtrisé.' },
]

const reasons = [
  {
    title: 'Restauration sans remplacement',
    body:
      "Avant de décider de remplacer un sol, faites-le nettoyer professionnellement. Sur un PVC ou un carrelage de plus de 5 ans, le brossage mécanique récupère 70 à 90 % de l'aspect d'origine, pour 5 à 10 fois moins cher qu'une dépose / repose.",
  },
  {
    title: 'Hygiène professionnelle documentée',
    body:
      "Pour les ERP, hôtels, restaurants et collectivités, un nettoyage périodique est documentable (certificat d'intervention). Utile pour les contrôles d'hygiène, les normes ISO, les audits de chaîne ou les diagnostics avant cession.",
  },
  {
    title: 'Préservation des matériaux',
    body:
      "Un sol mal nettoyé s'use plus vite : la saleté incrustée agit comme du papier de verre à chaque passage. Un brossage mécanique professionnel élimine ces particules abrasives et redonne au revêtement sa résistance d'origine.",
  },
  {
    title: 'Préparation avant traitement',
    body:
      "Pose d'une cire de protection, métallisation, imprégnation hydrofuge sur pierre, vitrification : tous ces traitements exigent un sol parfaitement décrassé en profondeur. Le brossage Rotowash est l'étape préalable indispensable.",
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Diagnostic du support',
    body:
      "Identification du type de revêtement, de son état général, des taches et zones spécifiques (graisses, traces de produits, marques de chariots). Test de tenue sur une zone discrète pour valider la procédure.",
  },
  {
    num: '02',
    title: 'Aspiration & prétraitement',
    body:
      "Aspiration mécanique préalable pour retirer toutes les particules sèches. Application d'un détergent neutre adapté au revêtement, temps de pose contrôlé (3 à 8 min selon la nature des salissures).",
  },
  {
    num: '03',
    title: 'Brossage mécanique Rotowash',
    body:
      "La machine Rotowash effectue un brossage rotatif à haute fréquence avec deux rouleaux contrarotatifs. Cette action mécanique extrait la saleté en profondeur sans abîmer le matériau. Une seule passe couvre 1 m² en environ 30 à 45 secondes.",
  },
  {
    num: '04',
    title: "Rinçage à l'eau déminéralisée",
    body:
      "Rinçage final à l'eau déminéralisée pour ne laisser aucun résidu de détergent ni dépôt calcaire. C'est ce rinçage qui garantit que votre sol ne se ressalit pas deux fois plus vite, c'est aussi ce qui distingue un travail professionnel d'une location DIY.",
  },
  {
    num: '05',
    title: 'Séchage & finition',
    body:
      "La Rotowash extrait simultanément l'eau utilisée. Le sol est sec en 30 à 60 minutes selon la ventilation. Possibilité d'enchaîner avec une cire de protection, une métallisation ou un traitement hydrofuge.",
  },
  {
    num: '06',
    title: 'Inspection finale',
    body:
      "Tour de propriétaire avec vous, validation des zones traitées. Si une tache résiste, second passage ciblé. Remise d'une fiche d'intervention détaillée (utile pour vos archives et contrôles internes).",
  },
]

const cas = [
  { secteur: 'Cuisine professionnelle', freq: '1 à 2× / an', detail: 'Décrassage profond des sols soudés à chaud, joints de remontée, raccords siphons. Hygiène HACCP-compatible.' },
  { secteur: 'Salles de restauration', freq: '2× / an', detail: 'Sols PVC, carrelage, parquet vitrifié : restauration des couleurs et élimination des taches alimentaires anciennes.' },
  { secteur: 'Hôtels, circulations', freq: '2 à 3× / an', detail: 'Sols PVC effet bois, carrelage marbré, marbre : restauration de la brillance et préparation au cirage de protection.' },
  { secteur: 'Bureaux', freq: '1× / an', detail: 'Décrassage des sols PVC, idéal en juillet-août pour repartir sur un sol propre à la rentrée.' },
  { secteur: 'Commerces & boutiques', freq: '1 à 2× / an', detail: 'Carrelage, pierre, béton ciré : redonne l\'image neuve aux espaces de vente, indispensable avant événements ou ouvertures.' },
  { secteur: 'Collectivités & ERP', freq: '2 à 4× / an', detail: 'Halls, couloirs, vestiaires : nettoyage profond avec certificat d\'intervention pour contrôles internes.' },
]

const faqItems = [
  {
    q: "Quels types de sols la Rotowash peut-elle nettoyer ?",
    a: "Pratiquement tous les sols durs : PVC en lés ou dalles, lino, vinyle, carrelage et joints, pierre naturelle, marbre, béton brut ou ciré, sols industriels époxy. Elle ne convient pas aux moquettes (pour cela, voir notre service nettoyage de moquettes par injection-extraction).",
  },
  {
    q: "Combien de temps avant de pouvoir remarcher dessus ?",
    a: "La Rotowash extrait l'eau au fur et à mesure du brossage. Le sol est utilisable entre 30 minutes et 1 heure après l'intervention. Pour les chantiers professionnels, nous adaptons toujours notre planning à vos contraintes d'exploitation.",
  },
  {
    q: "Le brossage mécanique abîme-t-il le sol ?",
    a: "Non, à condition d'utiliser les bonnes brosses. Les brosses sont adaptées à chaque type de revêtement : douces pour la pierre et le marbre, médium pour le PVC et le lino, dures pour le carrelage et le béton. Le test sur zone discrète valide systématiquement la procédure.",
  },
  {
    q: "Pourquoi rincer à l'eau déminéralisée ?",
    a: "L'eau du robinet contient du calcaire qui, en séchant, laisse un voile blanc et fixe à nouveau les particules de poussière. L'eau déminéralisée s'évapore proprement et laisse un sol vraiment propre, qui reste propre plus longtemps.",
  },
  {
    q: "Combien coûte un nettoyage Rotowash ?",
    a: "Le tarif dépend de la surface, du type de sol, de l'état initial et de l'accessibilité. À titre indicatif, comptez 5 à 12 € HT/m² pour un nettoyage simple sur grande surface, 10 à 18 € HT/m² pour une restauration profonde sur petite surface complexe. Devis gratuit après visite.",
  },
  {
    q: "Pouvez-vous intervenir sans interrompre l'activité ?",
    a: "Oui. Pour les commerces et restaurants, nous intervenons hors horaires d'ouverture. Pour les hôtels, par zones. Pour les bureaux, le week-end ou en soirée. Le séchage rapide (30 à 60 min) facilite ces interventions sans interruption.",
  },
  {
    q: "Proposez-vous des contrats annuels ?",
    a: "Oui. Pour les hôtels, restaurants, bureaux et commerces, nous proposons des contrats d'entretien périodique avec planning fixe (1 à 4 passages par an), tarifs négociés et intervention prioritaire en cas d'urgence (tache, événement client).",
  },
  {
    q: "Quelle différence avec une société de nettoyage classique ?",
    a: "Une société de nettoyage classique fait du quotidien : aspiration, lavage à plat. La Rotowash est une intervention de fond, périodique, qui décrasse en profondeur ce que le nettoyage quotidien ne peut pas atteindre. Les deux sont complémentaires, pas concurrents.",
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nettoyage de sols professionnel par brossage Rotowash',
  description:
    "Nettoyage en profondeur de tous types de sols (PVC, lino, carrelage, pierre, béton ciré) au brossage mécanique Rotowash. La Rochelle, Île de Ré, Charente-Maritime.",
  serviceType: 'Nettoyage et entretien de revêtement de sol',
  areaServed: { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
  provider: {
    '@type': 'LocalBusiness',
    name: company.legalName,
    telephone: company.phoneClean,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '41', bestRating: '5' },
  },
}

export default function NettoyageSolsPage() {
  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr' },
          { name: 'Services', url: 'https://cbsols.fr/services' },
          { name: 'Nettoyage de sols', url: 'https://cbsols.fr/nettoyage-sols' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <nav aria-label="Fil d'ariane" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <Link href="/services" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Nettoyage de sols</span>
            </nav>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44,85,48,0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>
                Service · Brossage mécanique Rotowash
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '900px' }}>
              Nettoyage de sols<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>tous revêtements.</em>
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              PVC, lino, carrelage, pierre naturelle, béton ciré, sols industriels : restaurez l&apos;aspect d&apos;origine au lieu de remplacer. Notre brossage mécanique Rotowash décrasse en profondeur ce qu&apos;aucun nettoyage quotidien n&apos;atteint. Intervention en Charente-Maritime, Île de Ré et Île d&apos;Oléron.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/contact?service=nettoyage-sols" variant="primary" size="lg">Demander un devis</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        {/* Stats inline */}
        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {[
              { val: '70–90 %', label: "D'aspect d'origine restauré" },
              { val: '5 à 10×', label: 'Moins cher qu\'une dépose/repose' },
              { val: '30–60 min', label: 'De séchage' },
              { val: 'Tous sols', label: 'PVC · pierre · carrelage · béton' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 800, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pourquoi nettoyer */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Pourquoi nettoyer</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              Restaurer plutôt que remplacer.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '640px', lineHeight: 1.7 }}>
              Le brossage mécanique professionnel n&apos;est pas un confort, c&apos;est une décision économique. Quatre raisons concrètes de le programmer.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {reasons.map((r, i) => (
                <div key={r.title} style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)' }}>
                  <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '1rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Surfaces traitées */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Surfaces traitées</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              Tous les sols durs, des plus délicats aux plus exposés.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {supportedSurfaces.map((s) => (
                <div key={s.label} style={{ padding: '1.5rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>
                    {s.label}
                  </h3>
                  <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '720px', fontStyle: 'italic' }}>
              Pour les <strong style={{ color: 'var(--dark)', fontStyle: 'normal' }}>moquettes</strong>, voir notre service dédié de <Link href="/nettoyage-moquettes" style={{ color: 'var(--terra)', textDecoration: 'underline' }}>nettoyage par injection-extraction</Link>, la technique est différente (eau injectée puis aspirée vs brossage mécanique).
            </p>
          </div>
        </section>

        {/* Process technique */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Notre méthode</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Le brossage Rotowash <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en six étapes.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '720px', lineHeight: 1.7 }}>
              La machine Rotowash combine brossage mécanique rotatif, lavage et extraction simultanés. Une intervention type sur 100 m² dure 2 à 3 heures, du diagnostic au séchage.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {processSteps.map((step) => (
                <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 700, marginBottom: '0.75rem' }}>{step.num}</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)', lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cas d'usage */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Cas d&apos;usage</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              Quand programmer un brossage selon votre activité ?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cas.map((c, i) => (
                <div key={c.secteur} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.75rem 0', borderBottom: i < cas.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{c.secteur}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{c.detail}</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, padding: '0.5rem 1rem', border: '1px solid rgba(44,85,48,0.3)', borderRadius: '999px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {c.freq}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp inline */}
        <section style={{ padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <WhatsAppInlineCTA context="nettoyage de sol" />
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Questions fréquentes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              FAQ, Nettoyage de sols
            </h2>
            {faqItems.map((item, i) => (
              <details key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{item.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginTop: '1rem' }}>{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Un sol à <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>remettre à neuf ?</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Décrivez-nous le type de sol, la surface et l&apos;état général. Nous revenons vers vous sous 48 h avec un chiffrage précis.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?service=nettoyage-sols" variant="primary" size="lg">Demander un devis</Button>
              <Button href="/nettoyage-moquettes" variant="outline" size="md">Nettoyage de moquettes</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
