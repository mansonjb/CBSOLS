import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { WhatsAppInlineCTA } from '@/components/WhatsAppInlineCTA'

export const metadata: Metadata = {
  title: 'Nettoyage de Moquettes Professionnel | CB Sols La Rochelle',
  description:
    "Nettoyage de moquettes par injection-extraction à La Rochelle, Île de Ré et Charente-Maritime. Hôtels, bureaux, EHPAD, particuliers. Devis gratuit, intervention sans interruption d'activité.",
  alternates: { canonical: 'https://cbsols.fr/nettoyage-moquettes' },
  keywords: [
    'nettoyage moquette La Rochelle',
    'injection extraction moquette',
    'nettoyage moquette hôtel',
    'nettoyage moquette bureau',
    'détachage moquette professionnelle',
    'nettoyage moquette EHPAD',
  ],
}

const reasons = [
  {
    title: 'Préserver la durée de vie',
    body:
      "Une moquette nettoyée régulièrement dure 12 à 15 ans en bureau classement 33, contre 5 à 7 ans sans entretien. La saleté incrustée use mécaniquement les fibres à chaque passage, comme du papier de verre.",
  },
  {
    title: 'Restaurer les couleurs',
    body:
      "Le ternissement n'est pas une usure, c'est une couche de poussière micrométrique sur les fibres. Une injection-extraction professionnelle restaure 80 à 95 % de l'éclat d'origine, parfois sur des moquettes de 10 ans.",
  },
  {
    title: 'Améliorer la qualité de l\'air',
    body:
      "Une moquette stocke 4 à 8 fois son poids en poussières, allergènes et squames. L'aspirateur n'extrait que la surface. L'injection-extraction sort les particules profondes — bénéfice direct pour les bureaux, hôtels et EHPAD.",
  },
  {
    title: 'Éliminer odeurs et taches',
    body:
      "Café, vin, urine d'animaux, traces alimentaires : nos produits de prétraitement adaptés à chaque type de tache, suivis de l'extraction haute pression, retirent ce qu'aucun nettoyage maison ne peut sortir.",
  },
  {
    title: 'Conformité hygiène professionnelle',
    body:
      "En hôtellerie, restauration, santé et collectivités, le nettoyage périodique est documentable (certificat de passage) — utile pour les contrôles d'hygiène, les normes ISO, les audits de chaîne.",
  },
  {
    title: 'Préparer à l\'usage intensif',
    body:
      "Avant la haute saison hôtelière, après un événement professionnel, à la rentrée scolaire pour les EHPAD/écoles : un nettoyage de fond redonne à la moquette toute sa résistance pour la période d'usage à venir.",
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Diagnostic et préparation',
    body:
      "Inspection des zones, identification des taches récalcitrantes (vin, encre, gras), test de tenue des couleurs sur une zone discrète. Aspiration mécanique préalable pour retirer les particules sèches.",
  },
  {
    num: '02',
    title: 'Prétraitement ciblé',
    body:
      "Application de détachants spécifiques selon la nature des taches. Temps de pose contrôlé (5 à 15 min). Brossage léger pour pénétrer les fibres sans les agresser.",
  },
  {
    num: '03',
    title: 'Injection-extraction haute pression',
    body:
      "Notre injecteur-extracteur professionnel (40 à 80 bars selon le textile) projette une solution chaude détergente dans la moquette puis l'aspire instantanément, en sortant la saleté en suspension. Une seule passe par 1,5 m² suffit.",
  },
  {
    num: '04',
    title: 'Rinçage à l\'eau claire',
    body:
      "Deuxième passe à l'eau claire pour éliminer les résidus de produit. Sans cette étape, la moquette se ressalit deux fois plus vite. C'est ce qui distingue un nettoyage pro d'un loueur de machine grand public.",
  },
  {
    num: '05',
    title: 'Brossage et séchage',
    body:
      "Brossage des fibres dans le sens du poil pour redresser la mèche, suivi d'un séchage actif (ventilation 2 à 4 h). La pièce redevient utilisable en demi-journée pour la majorité des chantiers.",
  },
  {
    num: '06',
    title: 'Inspection finale',
    body:
      "Validation visuelle et au toucher avec vous. Si une tache résiste, deuxième passage ciblé. Remise d'une fiche d'intervention récapitulative (utile pour vos archives et contrôles).",
  },
]

const frequences = [
  {
    secteur: 'Hôtellerie — chambres',
    freq: '1 à 2 fois par an',
    detail: "Après chaque haute saison + nettoyage de printemps. Détachage ponctuel entre deux passages selon les retours femmes de chambre.",
  },
  {
    secteur: 'Hôtellerie — couloirs et halls',
    freq: '2 à 4 fois par an',
    detail: "Trafic intensif, taches alimentaires fréquentes. Un planning trimestriel sécurise la durée de vie de la moquette.",
  },
  {
    secteur: 'Bureaux et open spaces',
    freq: '1 fois par an',
    detail: "Idéalement en juillet-août sur jours fériés ou pendant les fermetures. Possible en intervention week-end.",
  },
  {
    secteur: 'Restauration — moquettes salle',
    freq: '2 à 3 fois par an',
    detail: "Vin, café, projections : la périodicité dépend du type de service. Détachage ponctuel inclus dans nos contrats annuels.",
  },
  {
    secteur: 'EHPAD et établissements de santé',
    freq: '2 à 4 fois par an',
    detail: "Hygiène prioritaire. Nous travaillons en zones, sans fermeture du service. Produits compatibles avec normes RABC.",
  },
  {
    secteur: 'Résidentiel haut de gamme',
    freq: 'Tous les 12 à 24 mois',
    detail: "Maisons secondaires sur l'Île de Ré : un nettoyage avant haute saison protège votre moquette toute l'année.",
  },
]

const faqItems = [
  {
    q: "Combien de temps faut-il avant de pouvoir remarcher dessus ?",
    a: "Avec un séchage actif (ventilation), la moquette est utilisable en 2 à 4 heures. Sans ventilation, comptez 6 à 12 heures. Nous adaptons toujours notre intervention à votre planning d'activité.",
  },
  {
    q: "Le nettoyage abîme-t-il la moquette ?",
    a: "Non, à condition d'utiliser le bon matériel et les bons produits. L'inverse est vrai : ne pas nettoyer une moquette professionnelle l'abîme bien plus vite (les particules abrasives usent les fibres à chaque passage). Nous testons toujours la tenue des couleurs avant traitement complet.",
  },
  {
    q: "Quelle différence avec un loueur de machine grand public ?",
    a: "Trois différences majeures : (1) la pression d'extraction (40-80 bars vs 5-15 bars chez les loueurs grand public, donc moins d'humidité résiduelle et meilleur résultat) ; (2) le rinçage à l'eau claire systématique (oublié dans 90 % des locations DIY) ; (3) les produits adaptés au type de fibre (laine, polyamide, polypropylène réagissent différemment).",
  },
  {
    q: "Pouvez-vous intervenir sans fermer mon hôtel ou mon bureau ?",
    a: "Oui. Pour les hôtels, nous travaillons chambre par chambre sur les libérations, ou par étage en basse saison. Pour les bureaux, intervention le week-end ou le soir après 18 h. Aucune perte d'exploitation.",
  },
  {
    q: "Combien coûte un nettoyage de moquette professionnel ?",
    a: "Le tarif dépend de la surface, de l'état initial, du type de fibre et de l'accessibilité. À titre indicatif, comptez 4 à 8 € HT/m² pour un nettoyage simple de bureaux, 6 à 12 € HT/m² pour de la moquette hôtelière premium avec détachage approfondi. Devis gratuit après visite.",
  },
  {
    q: "Garantissez-vous le résultat ?",
    a: "Nous garantissons l'extraction maximale possible compte tenu de l'âge et de l'état de la moquette. Certaines taches très anciennes (encre séchée depuis 5 ans, brûlures) ne partent jamais à 100 %. Nous identifions ces cas en amont, pas de mauvaise surprise.",
  },
  {
    q: "Proposez-vous des contrats annuels ?",
    a: "Oui, pour les hôtels, restaurants, bureaux et EHPAD nous proposons des contrats annuels avec planning fixe (1 à 4 passages/an), tarifs négociés, intervention prioritaire en cas d'urgence (tache, événement). Demandez-nous une proposition sur mesure.",
  },
  {
    q: "Intervenez-vous sur les tapis sur mesure ?",
    a: "Oui, nous nettoyons aussi nos propres tapis sur mesure et ceux d'autres fabricants. Les tapis de grande dimension peuvent être traités sur place ; les tapis précieux (laine, soie) peuvent être emportés à l'atelier pour traitement spécifique.",
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
  name: 'Nettoyage de moquettes professionnel',
  description:
    "Nettoyage par injection-extraction de moquettes en hôtellerie, bureaux, EHPAD, restauration et résidentiel premium. La Rochelle, Île de Ré, Charente-Maritime.",
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
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5' },
  },
}

export default function NettoyageMoquettesPage() {
  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr' },
          { name: 'Services', url: 'https://cbsols.fr/services' },
          { name: 'Nettoyage de moquettes', url: 'https://cbsols.fr/nettoyage-moquettes' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            {/* Breadcrumb */}
            <nav aria-label="Fil d'ariane" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <Link href="/services" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Nettoyage de moquettes</span>
            </nav>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(196,113,74,0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>
                Service · Entretien professionnel
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '900px' }}>
              Nettoyage de moquettes<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>par injection-extraction.</em>
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '700px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Restaurer une moquette professionnelle plutôt que la remplacer. Une intervention périodique préserve la fibre, restaure les couleurs, élimine 95 % des allergènes et double la durée de vie de votre revêtement. Nous intervenons à La Rochelle, sur l&apos;Île de Ré, Île d&apos;Oléron et toute la Charente-Maritime.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/contact?service=nettoyage" variant="primary" size="lg">Demander un devis</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        {/* Stats inline */}
        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '2rem' }}>
            {[
              { val: '×2', label: 'Durée de vie de la moquette' },
              { val: '95%', label: "D'allergènes extraits" },
              { val: '40–80', label: 'Bars de pression d\'extraction' },
              { val: '2–4 h', label: 'De séchage actif' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</div>
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
              Une moquette nettoyée dure deux fois plus longtemps.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '640px', lineHeight: 1.7 }}>
              Le nettoyage périodique n&apos;est pas un confort, c&apos;est une mesure conservatoire. Six raisons concrètes de le programmer.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
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

        {/* Process technique */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Notre méthode</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              L&apos;injection-extraction <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en six étapes.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '720px', lineHeight: 1.7 }}>
              Une intervention type sur 100 m² dure 3 à 4 heures, du diagnostic au séchage. Voici exactement ce que nous faisons à chaque passage.
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

        {/* Fréquences par secteur */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Fréquences recommandées</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              À quel rythme nettoyer selon votre activité ?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {frequences.map((f, i) => (
                <div key={f.secteur} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.75rem 0', borderBottom: i < frequences.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{f.secteur}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.detail}</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, padding: '0.5rem 1rem', border: '1px solid rgba(196,113,74,0.3)', borderRadius: '999px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {f.freq}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp inline */}
        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <WhatsAppInlineCTA context="nettoyage de moquette" />
          </div>
        </section>

        {/* Contrat annuel */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Contrat annuel</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                  Pourquoi prévoir l&apos;entretien <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>plutôt que de subir.</em>
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Pour les hôtels, restaurants, bureaux et EHPAD, nous proposons des contrats d&apos;entretien annuels avec planning fixe (1 à 4 passages par an), tarifs négociés et intervention prioritaire en cas d&apos;urgence (tache, événement client).
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Cette approche est trois à cinq fois moins coûteuse qu&apos;un remplacement complet, et elle préserve la garantie fabricant de votre revêtement.
                </p>
                <Button href="/contact?service=nettoyage-contrat" variant="primary" size="md">
                  Demander une proposition
                </Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Planning fixe annuel', desc: 'Vous savez quand on intervient, pas de relance à faire.' },
                  { label: 'Tarif négocié', desc: '15 à 25 % en dessous du tarif au coup par coup.' },
                  { label: 'Détachage d\'urgence inclus', desc: 'Une tache après un événement ? On passe sous 48 h.' },
                  { label: 'Certificat de passage', desc: 'Document horodaté pour vos audits hygiène et chaîne.' },
                ].map((item) => (
                  <div key={item.label} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Questions fréquentes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              FAQ — Nettoyage de moquettes
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

        {/* Cross-sell */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Aller plus loin</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Vous remplacez plutôt que vous entretenez ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {[
                { href: '/services/pose-moquette', title: 'Pose de moquette neuve', desc: 'EGE, Balsan, Interface : sélection en showroom, pose par notre équipe.' },
                { href: '/solutions/moquette-hotel', title: 'Moquette hôtelière', desc: 'Solutions dédiées chambres, couloirs, espaces communs.' },
                { href: '/guide/entretien-moquette-professionnelle', title: 'Guide entretien moquette', desc: 'Aspirateur, taches, fréquences, produits : le guide complet.' },
                { href: '/realisations', title: 'Voir nos réalisations', desc: 'Hôtel La Baronnie, Restaurant Coutanceau, Golf de la Prée…' },
              ].map((c) => (
                <Link key={c.href} href={c.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <article style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'transform 0.2s, box-shadow 0.2s' }} className="service-card">
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3 }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, flex: 1 }}>{c.desc}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginTop: '0.5rem' }}>
                      Voir →
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(196,113,74,0.1) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Une moquette à <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>remettre à neuf ?</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Décrivez-nous la surface, l&apos;usage et l&apos;ancienneté du dernier nettoyage. Nous revenons vers vous sous 48 h avec un chiffrage précis et une proposition de planning.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?service=nettoyage" variant="primary" size="lg">Demander un devis</Button>
              <Button href="/showroom" variant="outline" size="md">Visiter le showroom</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
