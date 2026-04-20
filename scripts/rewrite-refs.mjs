import { readFile, writeFile } from 'node:fs/promises'

// Files to rewrite. Keep logo-cbsols.png as png (skipped in conversion).
// Also skip forbo.png and hotel-room.jpg (conversion failed).
const SKIP_BASENAMES = new Set(['logo-cbsols.png', 'forbo.png', 'hotel-room.jpg'])

const files = [
  'src/app/showroom/page.tsx',
  'src/app/realisations/page.tsx',
  'src/app/page.tsx',
  'src/components/Footer.tsx',
  'src/components/Header.tsx',
  'src/components/HeroSlider.tsx',
  'src/data/brands.ts',
]

const re = /(\/images\/[A-Za-z0-9_\-\/\.]+?)\.(jpg|jpeg|png)/g

for (const f of files) {
  const abs = new URL('../' + f, import.meta.url).pathname
  const src = await readFile(abs, 'utf8')
  const out = src.replace(re, (m, p1, ext) => {
    const base = p1.split('/').pop() + '.' + ext
    if (SKIP_BASENAMES.has(base)) return m
    return p1 + '.webp'
  })
  if (out !== src) {
    await writeFile(abs, out)
    const n = (src.match(re) || []).length - (out.match(re) || []).length
    console.log(`${f} — ${n} refs rewritten`)
  } else {
    console.log(`${f} — no change`)
  }
}
