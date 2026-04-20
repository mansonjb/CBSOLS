import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'

const ROOT = new URL('../public/images/', import.meta.url).pathname
const EXTS = new Set(['.jpg', '.jpeg', '.png'])
// Keep logo-cbsols.png untouched (header uses it directly as png mask)
const SKIP = new Set(['logo-cbsols.png'])

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else yield p
  }
}

let total = 0, before = 0, after = 0
for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase()
  if (!EXTS.has(ext)) continue
  if (SKIP.has(basename(file))) continue

  const out = file.replace(new RegExp(ext + '$', 'i'), '.webp')
  const s1 = (await stat(file)).size
  try {
    await sharp(file).webp({ quality: 82, effort: 5 }).toFile(out)
  } catch (e) {
    console.log(`SKIP ${basename(file)} — ${e.message}`)
    continue
  }
  const s2 = (await stat(out)).size
  before += s1; after += s2; total++
  const gain = Math.round(100 * (1 - s2 / s1))
  console.log(`${basename(file).padEnd(36)} ${(s1/1024).toFixed(0)}KB → ${(s2/1024).toFixed(0)}KB  (-${gain}%)`)
}
console.log(`\n${total} files — ${(before/1024/1024).toFixed(2)}MB → ${(after/1024/1024).toFixed(2)}MB  (-${Math.round(100*(1-after/before))}%)`)
