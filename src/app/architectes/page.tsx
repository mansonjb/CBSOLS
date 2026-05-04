import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { ClientLogoCard } from '@/components/ClientLogoCard'
import { architectePartners } from '@/data/clients'

export const metadata: Metadata = {
  title: 'Architectes & Prescripteurs | CB Sols, Partenaire Revêtement de Sol',
  description: 'CB Sols accompagne architectes, décorateurs et maîtres d\'œuvre en Charente-Maritime. Fiches techniques, nuanciers, suivi de chantier dédié. Devis prescripteur sous 24h.',
  alternates: { canonical: 'https://cbsols.fr/architectes' },
}

const atouts = [
  {
    num: '01',
    title: 'Fiches techniques complètes',
    desc: 'Classements feu, acoustique, résistance chimique, formats de pose : tous les documents nécessaires à vos DOE et CCTP disponibles sur demande.',
  },
  {
    num: '02',
    title: 'Showroom sur rendez-vous prescripteur',
    desc: 'Visite privée du showroom à Villedoux. 500+ échantillons EGE, Gerflor, objectflor à emporter. Conseil technique de Valentin Prévoteau directement.',
  },
  {
    num: '03',
    title: 'Devis sous 24h (vs 48h standard)',
    desc: 'Les dossiers architectes sont traités en priorité. Envoyez vos plans DXF/PDF et vos spécifications : retour chiffré le lendemain.',
  },
  {
    num: '04',
    title: 'Intervention sans interruption d\'activité',
    desc: 'CB Sols organise les chantiers en rotation ou de nuit pour respecter le planning de votre maître d\'ouvrage. Zéro retard de livraison de notre fait.',
  },
  {
    num: '05',
    title: 'Suivi de chantier dédié',
    desc: 'Un interlocuteur unique du devis à la réception. Photos d\'avancement, compte rendu de pose, réserves levées dans les délais contractuels.',
  },
  {
    num: '06',
    title: 'Garantie décennale + certificats',
    desc: 'Attestation décennale à jour, assurance RC pro, certificats de conformité des produits : dossier complet pour votre DOE à la livraison.',
  },
]

const process = [
  { step: 'Brief', desc: 'Envoyez vos plans, votre programme et vos exigences techniques. CB Sols analyse la faisabilité et vous rappelle sous 4h.' },
  { step: 'Proposition', desc: 'Sélection de produits adaptés à vos spécifications (classements, esthétique, budget maître d\'ouvrage) avec alternatives.' },
  { step: 'Devis CCTP', desc: 'Devis détaillé par poste, compatible avec votre CCTP, incluant fiches techniques et références normatives.' },
  { step: 'Chantier', desc: 'Pose par l\'équipe CB Sols, pas de sous-traitance. Planning respect, photos d\'avancement si souhaité.' },
  { step: 'DOE', desc: 'Remise du dossier des ouvrages exécutés complet : produits posés, fiches techniques, attestations, garanties.' },
]

const secteurs = [
  { label: 'Hôtellerie & tourisme', desc: 'Îles de Ré et Oléron, La Rochelle, Royan : hôtels 2 à 5 étoiles, résidences, campings' },
  { label: 'Bureaux & tertiaire', desc: 'Open spaces, salles de réunion, accueil : dalles acoustiques, LVT, moquette contrat' },
  { label: 'Cliniques et cabinets', desc: 'Moquettes bactériostatiques, PVC homogènes certifiés, accessibilité PMR' },
  { label: 'Restauration & CHR', desc: 'Cuisines pro R11 soudées, salles acoustiques, espaces mixtes' },
  { label: 'Collectivités & ERP', desc: 'Appels d\'offres, classements feu, accessibilité : dossiers conformes' },
]

export default function ArchitectesPage() {
  return (
    <div style={{ paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 30%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Prescripteurs</span>
          </div>
          <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
            Architectes · Décorateurs · Maîtres d'œuvre
          </span>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            CB Sols,{' '}
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>votre partenaire sol.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Vous prescrivez les matériaux, CB Sols les pose. Devis sous 24h, fiches techniques complètes, chantiers menés sans interruption d'activité. Un interlocuteur technique unique de votre brief jusqu'au DOE.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/contact?from=architectes" variant="primary" size="md">Contacter CB Sols</Button>
            <Button href="/showroom" variant="outline" size="md">Visiter le showroom</Button>
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce que CB Sols apporte aux prescripteurs</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Un partenaire <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>qui simplifie votre travail</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {atouts.map((a) => (
              <div key={a.num} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>{a.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>{a.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Process prescripteur</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Du brief au DOE
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none', position: 'relative' }}>
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

      {/* Secteurs */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Secteurs d'intervention</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {secteurs.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.375rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--border-strong)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--muted)' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseil adapté au projet */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', maxWidth: '760px' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Conseil adapté au projet</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Aider à <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>faire les bons choix.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.75 }}>
              Spécifier un revêtement, c&apos;est arbitrer entre acoustique, durabilité, esthétique, normes, budget et délais. Notre rôle de partenaire technique : décrypter ces arbitrages avec vous et proposer la solution qui tient sur tous les axes, y compris ceux que le maître d&apos;ouvrage ne voit pas encore.
            </p>
          </div>

          {/* Grille des axes de conseil */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              {
                num: '01',
                title: 'Lecture du programme',
                desc: "Hôtel 4★, restaurant gastronomique, cabinet médical, bureau open-space : chaque typologie a ses exigences réglementaires (Bfl-s1, R10/R11, acoustique). Nous lisons votre programme et flaguons d'emblée les obligations qui orientent les choix.",
              },
              {
                num: '02',
                title: 'Sélection matières',
                desc: "Trois propositions classées par usage, esthétique et budget, avec leurs limites assumées. Nous ne poussons jamais une seule référence : votre client doit pouvoir trancher en connaissance de cause.",
              },
              {
                num: '03',
                title: 'Acoustique &amp; confort',
                desc: "Nous chiffrons l'impact acoustique attendu (réduction sonore en dB selon la moquette) et le confort thermique. Utile pour défendre une moquette face à un sol dur dans les arbitrages MOA.",
              },
              {
                num: '04',
                title: 'Pérennité &amp; entretien',
                desc: "Coût total de possession sur 10 ans (pose + entretien périodique + remplacement), pas seulement le prix d'achat. Nous présentons les arbitrages durabilité vs budget initial.",
              },
              {
                num: '05',
                title: 'Compatibilité support',
                desc: "Visite technique en amont du DCE pour vérifier la planéité, l'humidité résiduelle, le type de support. Nous identifions les travaux préparatoires nécessaires (ragréage, primaire, sous-couche).",
              },
              {
                num: '06',
                title: 'Phasage chantier',
                desc: "Pose en milieu occupé, intervention week-end, étapes par zones : nous proposons un phasage compatible avec votre planning d'opération et celui de votre maître d'ouvrage.",
              },
            ].map((c) => (
              <div key={c.num} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{c.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', lineHeight: 1.3, letterSpacing: '-0.01em' }} dangerouslySetInnerHTML={{ __html: c.title }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Livrables conseil */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start', padding: '2.5rem 0 0', borderTop: '1px solid var(--border)' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Livrables type</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.01em' }}>
                Ce que vous recevez en phase conseil
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'Note de positionnement : 2 à 3 références argumentées par espace',
                  'Fiches techniques fabricant (FDS, classements feu, certifications)',
                  'Échantillons physiques expédiés à l\'agence ou au showroom',
                  'Estimation budgétaire indicative au m² posé',
                  'Avis sur la compatibilité avec le support existant',
                  'Recommandations de phasage et délais réalistes',
                ].map((it) => (
                  <li key={it} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', borderLeft: '3px solid var(--terra)' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Comment ça démarre</div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem', counterReset: 'step' }}>
                {[
                  { t: 'Brief par mail ou téléphone', d: 'Programme, plans (DXF, PDF), exigences MOA, budget cible.' },
                  { t: 'Analyse sous 4 h ouvrées', d: 'Vous recevez nos premières questions techniques et la confirmation que le projet est dans nos cordes.' },
                  { t: 'Note de conseil sous 5 j', d: 'Sélection argumentée + alternatives. Vous restez maître de la prescription finale.' },
                  { t: 'Devis chiffré sur demande', d: 'Quand le client a tranché, nous chiffrons en détail (CCTP-compatible).' },
                ].map((s, i) => (
                  <li key={s.t} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <span style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      {i + 1}
                    </span>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{s.t}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                <Button href="/contact?from=architectes-conseil" variant="primary" size="md">
                  Démarrer un brief
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectes partenaires */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Ils nous prescrivent</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--text-on-dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
              Architectes &amp; agences partenaires
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
              Plusieurs agences d&apos;architecture d&apos;intérieur de Charente-Maritime nous confient régulièrement leurs chantiers. Une sélection ci-dessous.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {architectePartners.map((p) => (
              <ClientLogoCard key={p.alt} client={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Programme partenaire */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Programme partenaire</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                Une relation <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>longue durée.</em>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.8 }}>
                Nous travaillons avec un cercle restreint d&apos;architectes et de bureaux d&apos;études en Charente-Maritime. Notre objectif : devenir votre partenaire sol par défaut, pas un sous-traitant ponctuel.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Conditions tarifaires négociées', desc: 'Marges réduites pour vos projets B2B récurrents. Conditions discutées en bilatéral.' },
                { title: 'Délai de paiement adapté', desc: 'Facturation à 30 ou 45 jours selon volumes. Compatible avec vos cycles maître d\'ouvrage.' },
                { title: 'Showroom dédié sur RDV', desc: 'Créneaux privés pour vos rendez-vous clients. Possibilité d\'accueillir vos prospects directement.' },
                { title: 'Apporteur d\'affaires', desc: 'Si vous nous recommandez à un confrère ou un client hors prescription, nous proposons une commission négociable au cas par cas.' },
              ].map((item) => (
                <div key={item.title} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact direct */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Contact prescripteur</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Parlons de votre projet
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--dark-2)' }}>Valentin Prévoteau</strong>, {company.phone}
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
            Réponse sous 4h en semaine. Envoyez plans et spécifications à{' '}
            <a href={`mailto:${company.email}`} style={{ color: 'var(--terra)', textDecoration: 'none' }}>{company.email}</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/contact?from=architectes" variant="primary" size="md">Envoyer un brief</Button>
            <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
          </div>
        </div>
      </section>

    </div>
  )
}
