import { readdir, stat, unlink } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'

const ROOT = new URL('../public/images/', import.meta.url).pathname
const EXTS = new Set(['.jpg', '.jpeg', '.png'])
const KEEP = new Set(['logo-cbsols.png', 'forbo.png', 'hotel-room.jpg'])

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else yield p
  }
}

let n = 0, freed = 0
for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase()
  if (!EXTS.has(ext)) continue
  if (KEEP.has(basename(file))) continue
  // Only delete if a .webp sibling exists
  const webp = file.replace(new RegExp(ext + '$', 'i'), '.webp')
  try {
    await stat(webp)
  } catch { continue }
  const s = (await stat(file)).size
  await unlink(file)
  freed += s; n++
}
console.log(`deleted ${n} originals — freed ${(freed/1024/1024).toFixed(2)}MB`)
