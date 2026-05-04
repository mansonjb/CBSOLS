import React from 'react'

/**
 * Petit renderer markdown-light pour le corps des guides.
 * Supporte :
 * - Paragraphes séparés par double retour (\n\n)
 * - Bold inline avec **texte**
 * - Listes : lignes consécutives commençant par "• " ou "- "
 * - Sous-titres "intra-section" : ligne se terminant par ":" et précédée d'une ligne vide
 *
 * On évite volontairement une lib markdown lourde, les guides
 * ont un format restreint et stable. Ce parser couvre 100 % des cas.
 */
function renderInline(text: string): React.ReactNode[] {
  // Découpe sur les **bold**
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ color: 'var(--dark)', fontWeight: 700 }}>
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}

interface Block {
  kind: 'paragraph' | 'list' | 'subheading'
  content: string | string[]
}

function parseBody(body: string): Block[] {
  const blocks: Block[] = []
  const paragraphs = body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)

  const isBullet = (l: string) => /^[•\-]\s/.test(l)

  for (const para of paragraphs) {
    const lines = para.split('\n').map((l) => l.trim()).filter(Boolean)

    // Cas A, toutes les lignes sont des puces : liste pure
    if (lines.length > 1 && lines.every(isBullet)) {
      blocks.push({
        kind: 'list',
        content: lines.map((l) => l.replace(/^[•\-]\s+/, '')),
      })
      continue
    }

    // Cas B, paragraphe intro + suite de puces (ex: titre suivi d'une liste)
    // On split au premier bullet rencontré
    const firstBulletIdx = lines.findIndex(isBullet)
    if (firstBulletIdx > 0 && lines.slice(firstBulletIdx).every(isBullet)) {
      const intro = lines.slice(0, firstBulletIdx).join(' ')
      const items = lines.slice(firstBulletIdx).map((l) => l.replace(/^[•\-]\s+/, ''))

      // Si l'intro est un sous-titre court (ex: **Matières disponibles**) on l'émet
      // comme subheading, sinon comme paragraphe.
      const isShortHeading = /^\*\*[^*]+\*\*\s*:?\s*$/.test(intro) && intro.length < 80
      if (isShortHeading) {
        blocks.push({ kind: 'subheading', content: intro.replace(/^\*\*|\*\*\s*:?$/g, '').trim() })
      } else {
        blocks.push({ kind: 'paragraph', content: intro })
      }
      blocks.push({ kind: 'list', content: items })
      continue
    }

    // Cas C, Sous-titre court terminant par ":" ou en gras seul
    if (lines.length === 1 && lines[0].length < 80 && /^\*\*[^*]+\*\*\s*:?\s*$/.test(lines[0])) {
      blocks.push({ kind: 'subheading', content: lines[0].replace(/^\*\*|\*\*\s*:?$/g, '').trim() })
      continue
    }

    // Cas D, paragraphe standard (rejoint les lignes)
    blocks.push({ kind: 'paragraph', content: lines.join(' ') })
  }

  return blocks
}

export function GuideContent({ body }: { body: string }) {
  const blocks = parseBody(body)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
      {blocks.map((b, i) => {
        if (b.kind === 'subheading') {
          return (
            <h3
              key={i}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--dark)',
                margin: '0.5rem 0 0',
                letterSpacing: '-0.01em',
              }}
            >
              {b.content as string}
            </h3>
          )
        }

        if (b.kind === 'list') {
          return (
            <ul
              key={i}
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
              }}
            >
              {(b.content as string[]).map((item, j) => (
                <li
                  key={j}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '20px 1fr',
                    gap: '0.65rem',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: 'var(--terra)',
                      marginTop: '0.55em',
                      justifySelf: 'center',
                    }}
                  />
                  <span style={{ fontSize: '0.95rem', color: 'var(--dark-2)', lineHeight: 1.7 }}>
                    {renderInline(item)}
                  </span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} style={{ fontSize: '0.95rem', color: 'var(--dark-2)', lineHeight: 1.8, margin: 0 }}>
            {renderInline(b.content as string)}
          </p>
        )
      })}
    </div>
  )
}
