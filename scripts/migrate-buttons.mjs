#!/usr/bin/env node
/**
 * Migrate inline Link CTAs to use the <Button> component.
 *
 * Patterns handled:
 *  - Primary: <Link href="..." style={{ ... backgroundColor: 'var(--terra)', color: '#fff', ... }}>TEXT</Link>
 *  - Outline: <Link href="..." style={{ ... border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', ... }}>TEXT</Link>
 *  - Tel link: <a href="tel:..." style={{ ... border: '1.5px solid var(--border-strong)', ... }}>{company.phone}</a>
 *
 * Heuristic for size:
 *  - padding '1rem 2.5rem' → size="lg"
 *  - padding '0.875rem ...' or '0.95rem ...' → size="md"
 *  - padding '0.55rem ...' → size="sm"
 */
import { readFile, writeFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue
      yield* walk(p)
    } else if (entry.name.endsWith('.tsx')) {
      yield p
    }
  }
}

function detectSize(styleStr) {
  if (/padding:\s*'1rem 2\.5rem'/.test(styleStr)) return 'lg'
  if (/padding:\s*'0\.55rem/.test(styleStr)) return 'sm'
  return 'md'
}

// Match a single <Link ...>TEXT</Link> with single-line text content (no nested tags)
// Inline style block must contain backgroundColor: 'var(--terra)' to count as primary CTA
const PRIMARY_RE = /<Link\s+href=({[^}]+}|"[^"]+"|`[^`]+`)\s+style=\{\{\s*([^}]*?backgroundColor:\s*'var\(--terra\)'[^}]*?)\s*\}\}>\s*([^<{][^<]*)\s*<\/Link>/g

// Outline = border + dark-2 + uppercase, no terra bg
const OUTLINE_RE = /<Link\s+href=({[^}]+}|"[^"]+"|`[^`]+`)\s+style=\{\{\s*([^}]*?border:\s*'1\.5px solid var\(--border-strong\)'[^}]*?color:\s*'var\(--dark-2\)'[^}]*?)\s*\}\}>\s*([^<{][^<]*)\s*<\/Link>/g

// Tel/mailto outline
const TEL_RE = /<a\s+href=({[^}]+}|`tel:[^`]+`|"tel:[^"]+")\s+style=\{\{\s*([^}]*?border:\s*'1\.5px solid var\(--border-strong\)'[^}]*?)\s*\}\}>\s*\{?([^<}]+?)\}?\s*<\/a>/g

const ROOT = new URL('../src/', import.meta.url).pathname
const REPORT = []

for await (const file of walk(ROOT)) {
  // Skip the Button component itself + already-migrated files we don't want to touch
  if (file.endsWith('Button.tsx')) continue
  if (file.endsWith('CookieBanner.tsx')) continue
  if (file.endsWith('ContactForm.tsx') || file.endsWith('QuickQuoteForm.tsx')) continue

  let src = await readFile(file, 'utf8')
  let modified = false
  let count = 0

  // Rewrite primary CTAs
  src = src.replace(PRIMARY_RE, (m, href, styleStr, text) => {
    const size = detectSize(styleStr)
    count++
    modified = true
    return `<Button href=${href} variant="primary" size="${size}">${text.trim()}</Button>`
  })

  // Rewrite outline Link CTAs
  src = src.replace(OUTLINE_RE, (m, href, styleStr, text) => {
    const size = detectSize(styleStr)
    count++
    modified = true
    return `<Button href=${href} variant="outline" size="${size}">${text.trim()}</Button>`
  })

  // Rewrite tel/mailto outline anchors
  src = src.replace(TEL_RE, (m, href, styleStr, text) => {
    const size = detectSize(styleStr)
    count++
    modified = true
    return `<Button href=${href} external variant="outline" size="${size}">{${text.trim()}}</Button>`
  })

  if (modified) {
    // Ensure Button is imported
    if (!/from\s+['"]@\/components\/Button['"]/.test(src)) {
      // Insert after the last "next/" import or first import
      const importMatch = src.match(/^(import[\s\S]+?from\s+['"][^'"]+['"]\n)+/m)
      if (importMatch) {
        const insertPos = importMatch.index + importMatch[0].length
        src = src.slice(0, insertPos) + `import { Button } from '@/components/Button'\n` + src.slice(insertPos)
      }
    }
    await writeFile(file, src)
    REPORT.push({ file: file.replace(ROOT, 'src/'), count })
  }
}

console.log('\nMigration report:')
console.log('────────────────────────────────────────')
let total = 0
for (const r of REPORT) {
  console.log(`  ${r.file.padEnd(50)} ${r.count} CTA${r.count > 1 ? 's' : ''}`)
  total += r.count
}
console.log('────────────────────────────────────────')
console.log(`  Total: ${total} CTA${total > 1 ? 's' : ''} migrated across ${REPORT.length} file${REPORT.length > 1 ? 's' : ''}`)
