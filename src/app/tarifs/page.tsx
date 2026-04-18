import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Tarifs et Prix | Pose Revêtement de Sol Professionnel CB Sols',
  description: 'Grille de tarifs 2025 pour la pose de moquette, sol PVC et tapis en Charente-Maritime. Fourchettes honnêtes, devis gratuit sous 48h. CB Sols à La Rochelle.',
  alternates: { canonical: 'https://cbsols.fr/tarifs' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quel est le prix de pose de la moquette professionnelle ?', acceptedAnswer: { '@type': 'Answer', text: 'La pose de moquette professionnelle coûte entre 30 et 80 €/m² fourni posé selon le produit. Bureaux : 30-50 €/m². Hôtellerie haut de gamme : 50-80 €/m².' } },
    { '@type': 'Question', name: 'Quel est le prix de pose du sol PVC ?', acceptedAnswer: { '@type': 'Answer', text: 'Le sol PVC professionnel coûte entre 35 et 90 €/m² fourni posé. LVT bureaux : 35-65 €/m². PVC homogène cuisine : 50-90 €/m².' } },
    { '@type': 'Question', name: 'Le déplacement pour le devis est-il payant ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Le déplacement et le devis sont gratuits partout en Charente-Maritime. CB Sols se déplace à La Rochelle, Île de Ré, Rochefort, Saintes et environs.' } },
  ],
}

const tarifs = [
  {
    category: 'Moquette',
    icon: '▦',
    items: [
      { label: 'Bureaux & open space (classement 32-33)', fourchette: '30 – 50 €/m²', detail: 'Balsan Contract, Interface, dalles ou lé', note: 'fourni posé' },
      { label: 'Hôtellerie chambre (classement 33, Bfl-s1)', fourchette: '45 – 70 €/m²', detail: 'EGE Hospitality, Balsan Hotel', note: 'fourni posé' },
      { label: 'Couloirs hôteliers (trafic intensif)', fourchette: '50 – 80 €/m²', detail: 'EGE, gammes haute résistance', note: 'fourni posé' },
      { label: 'EHPAD & santé (bactériostatique)', fourchette: '40 – 65 €/m²', detail: 'Balsan Health, Forbo', note: 'fourni posé' },
      { label: 'Tapis sur mesure (standard)', fourchette: '55 – 120 €/m²', detail: 'Tuftée ou bouclée sur mesure', note: 'fourni posé' },
      { label: 'Tapis Axminster / Wilton (motif exclusif)', fourchette: '120 – 300 €/m²', detail: 'Tissage haut de gamme, délai 6-12 sem.', note: 'fourni posé' },
    ],
  },
  {
    category: 'Sol PVC',
    icon: '▣',
    items: [
      { label: 'LVT flottant bureaux & commerces', fourchette: '35 – 60 €/m²', detail: 'Gerflor Creation, Tarkett Starfloor', note: 'fourni posé' },
      { label: 'LVT collé hôtellerie', fourchette: '45 – 75 €/m²', detail: 'Gerflor Creation, Karndean', note: 'fourni posé' },
      { label: 'PVC hétérogène lé (collectivités)', fourchette: '30 – 55 €/m²', detail: 'Tarkett iQ, Gerflor Taralay', note: 'fourni posé, soudure incluse' },
      { label: 'PVC homogène cuisine pro (R11)', fourchette: '55 – 90 €/m²', detail: 'Tarkett iQ Granit, Forbo Eternal', note: 'fourni posé, remontées en cuvette incluses' },
      { label: 'Douche intégrale PVC', fourchette: '800 – 2 500 €', detail: 'par douche, toutes dimensions', note: 'main d\'œuvre + matériel' },
    ],
  },
  {
    category: 'Travaux préparatoires',
    icon: '◈',
    items: [
      { label: 'Dépose ancien revêtement', fourchette: '4 – 8 €/m²', detail: 'Selon type et état', note: 'main d\'œuvre' },
      { label: 'Ragréage & nivellement', fourchette: '8 – 20 €/m²', detail: 'Selon épaisseur et surface', note: 'fourni posé' },
      { label: 'Évacuation gravats', fourchette: 'inclus', detail: 'Dans tous nos devis CB Sols', note: '' },
      { label: 'Majoration pose de nuit / weekend', fourchette: '+15 – 30%', detail: 'Pour chantiers sans interruption d\'activité', note: 'sur le total' },
    ],
  },
  {
    category: 'Entretien',
    icon: '◎',
    items: [
      { label: 'Nettoyage injection-extraction (moquette)', fourchette: '3 – 8 €/m²', detail: 'Tarif dégressif selon surface', note: 'main d\'œuvre' },
      { label: 'Contrat entretien annuel hôtel', fourchette: 'Sur devis', detail: 'Planning personnalisé, priorité calendrier', note: 'engagement annuel' },
      { label: 'Traitement anti-tache', fourchette: '2 – 4 €/m²', detail: 'Après pose ou nettoyage', note: 'en complément' },
    ],
  },
]

const faqs = [
  {
    q: 'Le devis est-il vraiment gratuit ?',
    a: 'Oui, sans exception. CB Sols se déplace gratuitement dans toute la Charente-Maritime pour mesurer, évaluer le support et vous remettre un devis détaillé et chiffré sous 48h. Aucun frais de déplacement, aucun engagement de commande.',
  },
  {
    q: 'Ces tarifs incluent-ils la TVA ?',
    a: 'Toutes les fourchettes affichées sont HT. La TVA applicable est 20% pour les professionnels et 10% pour les travaux de rénovation en logement de plus de 2 ans. Nos devis précisent toujours le détail HT/TTC.',
  },
  {
    q: 'Y a-t-il un minimum de surface pour intervenir ?',
    a: 'Non. CB Sols intervient pour des remplacements ponctuels (quelques m²) comme pour des chantiers de plusieurs milliers de mètres carrés. Le tarif par m² est naturellement plus favorable sur les grandes surfaces.',
  },
  {
    q: 'Peut-on obtenir un devis sans se déplacer au showroom ?',
    a: 'Oui. Envoyez-nous vos plans, photos et dimensions par email ou WhatsApp. CB Sols peut établir une estimation budgétaire à distance. La visite sur site reste nécessaire pour le devis définitif et le métrés précis.',
  },
  {
    q: 'Ces prix incluent-ils les lés de raccord et chutes ?',
    a: 'Oui. Les devis CB Sols intègrent toujours un coefficient de coupe adapté (5 à 15% selon la géométrie du chantier). Aucune surprise sur la quantité facturée.',
  },
]

export default function TarifsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 0%, rgba(196,113,74,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
              <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Tarifs</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Prix & tarifs
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: 'var(--terra)', margin: '0 0 1.5rem' }}>
              Des fourchettes honnêtes, sans langue de bois
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Ces fourchettes vous donnent une première orientation. Le prix final dépend de l'état du support, du produit choisi et des contraintes de chantier. Un devis gratuit sous 48h vous donnera le chiffre exact.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem 1.25rem', border: '1px solid var(--border-hover)', borderRadius: '12px', backgroundColor: 'rgba(196,113,74,0.05)', alignItems: 'flex-start', maxWidth: '520px' }}>
              <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>💡</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--dark-2)', lineHeight: 1.6, margin: 0 }}>
                <strong>Déplacement et devis toujours gratuits</strong> en Charente-Maritime. CB Sols se déplace à La Rochelle, Île de Ré, Rochefort, Saintes, Royan et dans tout le département 17.
              </p>
            </div>
          </div>
        </section>

        {/* Tarif tables */}
        {tarifs.map((section) => (
          <section key={section.category} style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '1.4rem' }}>{section.icon}</span>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.03em' }}>
                  {section.category}
                </h2>
              </div>
              <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
                {section.items.map((item, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', padding: '1.125rem 1.5rem', borderBottom: i < section.items.length - 1 ? '1px solid var(--border)' : 'none', backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg)', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.detail}{item.note ? ` · ${item.note}` : ''}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 800, color: 'var(--terra)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{item.fourchette}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>FAQ Tarifs</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              Questions sur les prix
            </h2>
            {faqs.map((item, i) => (
              <div key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{item.q}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.75 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              Obtenez votre devis exact
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: 'var(--muted)', margin: '0 0 2.5rem' }}>
              Gratuit · Détaillé · Sous 48h · Sans engagement
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Demander un devis
              </Link>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
