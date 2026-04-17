import Link from 'next/link'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { cities } from '@/data/cities'
import { company } from '@/data/company'

const projects = [
  { title: 'Hôtel Île de Ré', type: 'Moquette & Douches PVC', sector: 'Hôtellerie 4★', bg: '#1a1410' },
  { title: 'Restaurant Gastronomique La Rochelle', type: 'Moquette acoustique sur mesure', sector: 'Restauration', bg: '#121610' },
  { title: 'Cabinet Comptable Rochefort', type: 'Dalles PVC bureau', sector: 'Tertiaire', bg: '#141012' },
  { title: 'Golf Charente-Maritime', type: 'Moquette contrat + vestiaires PVC', sector: 'Sport & Loisirs', bg: '#101412' },
  { title: 'EHPAD Saintes', type: 'PVC en lés + Douches PVC PMR', sector: 'Santé', bg: '#101214' },
  { title: 'Amphithéâtre Universitaire La Rochelle', type: 'Sol PVC haute résistance', sector: 'Collectivité', bg: '#12101a' },
]

export default function Home() {
  const zoneGroups = [
    { label: 'Agglo La Rochelle', cities: cities.filter((c) => c.zone === 'la-rochelle') },
    { label: 'Île de Ré', cities: cities.filter((c) => c.zone === 'ile-de-re') },
    { label: 'Charente-Maritime', cities: cities.filter((c) => c.zone === 'charente-maritime') },
  ]

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 2rem 5rem', position: 'relative', overflow: 'hidden', paddingTop: '72px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 40%, rgba(196,113,74,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(184,151,90,0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: 0.4, pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', padding: '0.375rem 1rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(196,113,74,0.08)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)' }}>
              Artisan certifié · Depuis 25 ans · La Rochelle & Île de Ré
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--cream)', maxWidth: '820px', marginBottom: '2rem' }}>
            Le sol qui définit<br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>votre espace.</em>
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '3rem' }}>
            Moquette, sol PVC, tapis sur mesure — CB Sols accompagne particuliers, hôtels, restaurants et entreprises en Charente-Maritime depuis 1999.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: 'var(--cream)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Devis gratuit
            </Link>
            <Link href="/realisations" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Voir les réalisations
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '3rem', marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
            {[{ value: '+25', label: "Années d'expérience" }, { value: '500+', label: 'Projets réalisés' }, { value: '31', label: 'Communes couvertes' }].map((stat) => (
              <div key={stat.value}>
                <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--cream)', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', right: '2rem', bottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', writingMode: 'vertical-rl' }}>Découvrir</span>
          <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--terra), transparent)' }} />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Expertise</div>
              <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--cream)', margin: 0, letterSpacing: '-0.03em' }}>Nos spécialités</h2>
            </div>
            <Link href="/services" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream-muted)', textDecoration: 'none' }}>Tous les services →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
            {services.map((service, i) => (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ backgroundColor: 'var(--bg-card)', padding: '2.5rem', height: '100%', transition: 'background-color 0.2s' }}>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1rem', lineHeight: 1.3 }}>{service.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 2rem' }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)' }}>En savoir plus →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Portfolio</div>
              <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--cream)', margin: 0, letterSpacing: '-0.03em' }}>Dernières réalisations</h2>
            </div>
            <Link href="/realisations" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream-muted)', textDecoration: 'none' }}>Voir tout →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {projects.map((project) => (
              <Link key={project.title} href="/realisations" style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: project.bg, border: '1px solid var(--border)', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s', cursor: 'pointer' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 20px)', pointerEvents: 'none' }} />
                  <div style={{ padding: '1.5rem', position: 'relative' }}>
                    <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>{project.sector}</div>
                    <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1rem', color: 'var(--cream)', marginBottom: '0.25rem' }}>{project.title}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{project.type}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS B2B */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Professionnels</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--cream)', margin: 0, letterSpacing: '-0.03em', maxWidth: '500px' }}>Solutions pour chaque secteur d'activité</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '360px', lineHeight: 1.7, margin: 0 }}>Hôtels, restaurants, bureaux, collectivités — CB Sols maîtrise les contraintes spécifiques de chaque environnement professionnel.</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
            {sectors.map((sector) => (
              <Link key={sector.slug} href={`/secteurs/${sector.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', transition: 'background-color 0.2s', cursor: 'pointer' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{sector.icon}</div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--cream)', margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>{sector.name}</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 1.5rem', lineHeight: 1.6 }}>{sector.tagline}</p>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)' }}>Voir →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Territoire</div>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--cream)', margin: 0, letterSpacing: '-0.03em' }}>
              Nous intervenons partout<br />en Charente-Maritime
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {zoneGroups.map((group) => (
              <div key={group.label}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>{group.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.cities.map((city) => (
                    <Link key={city.slug} href={`/revetement-sol-${city.slug}`} style={{ display: 'inline-block', padding: '0.375rem 0.875rem', fontSize: '0.75rem', color: 'var(--cream-muted)', textDecoration: 'none', border: '1px solid var(--border)', transition: 'all 0.2s', backgroundColor: 'transparent' }}>
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM CTA */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ padding: '4rem', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(196,113,74,0.08) 0%, transparent 50%), var(--bg-subtle)' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(196,113,74,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Showroom · Sur rendez-vous</div>
                <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                  Venez toucher, voir,<br /><em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>choisir.</em>
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '480px', margin: '0 0 0.75rem' }}>
                  Plus de 500 échantillons de moquettes, PVC et tapis vous attendent dans notre showroom de Villedoux. Un espace confidentiel, sur rendez-vous.
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>8 rue des Merises, ZA les Cerisiers — 17230 Villedoux (10 min de La Rochelle)</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '200px' }}>
                <Link href="/showroom" style={{ display: 'block', textAlign: 'center', padding: '1rem 2rem', backgroundColor: 'var(--terra)', color: 'var(--cream)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>Prendre RDV</Link>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'block', textAlign: 'center', padding: '1rem 2rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.8rem', textDecoration: 'none' }}>{company.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Notre différence</div>
              <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                25 ans de sol sous les pieds de la Charente-Maritime
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Valentin Prévoteau et son équipe posent des sols depuis 1999. Ce ne sont pas des sous-traitants — ce sont des artisans qui connaissent chaque chantier par son nom.
              </p>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--terra)', marginBottom: '2rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Showroom exclusif', desc: '500+ échantillons, conseil personnalisé sur RDV' },
                  { label: 'Devis sous 48h', desc: 'Réponse rapide, chiffrage précis et transparent' },
                  { label: 'Garantie décennale', desc: 'Tous nos travaux sont couverts' },
                  { label: 'Partenaires de référence', desc: 'EGE, Gerflor, Forbo, Tarkett — les meilleures marques' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.5rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--cream)', fontWeight: 500, marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/a-propos" style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>Notre histoire →</Link>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { bg: 'linear-gradient(135deg, #1a1210, #2a1a10)', label: 'Moquette', val: 'Textures premium' },
                { bg: 'linear-gradient(135deg, #101a14, #102010)', label: 'Sol PVC', val: 'Résistance & style' },
                { bg: 'linear-gradient(135deg, #12101a, #1a1030)', label: 'Tapis sur mesure', val: 'Création unique' },
                { bg: 'linear-gradient(135deg, #1a1500, #2a2000)', label: 'Douche PVC', val: 'Zéro joint' },
              ].map((item) => (
                <div key={item.label} style={{ background: item.bg, border: '1px solid var(--border)', padding: '1.5rem', aspectRatio: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--terra)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--cream-muted)' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Démarrons votre projet</div>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Votre projet mérite un artisan qui l'écoute.
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Devis gratuit sous 48h. Intervention sur La Rochelle, l'Île de Ré et toute la Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 3rem', backgroundColor: 'var(--terra)', color: 'var(--cream)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Demander un devis
            </Link>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500 }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
