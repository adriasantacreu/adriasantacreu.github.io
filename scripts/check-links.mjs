// Comprovador d'enllaços interns del build estàtic.
//
// El build i l'astro check passen perfecte encara que es generin rutes que no existeixen
// (els 404 de /en/projects i /es/projects hi van passar mesos en verd). Aquest script
// mira, per cada href relatiu de cada pàgina generada, que la pàgina destí existeixi
// de veritat al dist. Els enllaços externs no es comproven: el CI no ha de dependre
// que un altre web estigui en peu.
//
// Ús: node scripts/check-links.mjs [dist]   (per defecte dist)

import { existsSync, readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"

const dist = process.argv[2] ?? "dist"

// Recorregut manual en comptes de fs.globSync, que demana Node 22 i el CI va amb Node 20.
function htmlFiles(dir) {
  const found = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) found.push(...htmlFiles(path))
    else if (entry.name.endsWith(".html")) found.push(path)
  }
  return found
}

const broken = new Map()

for (const file of htmlFiles(dist)) {
  const html = readFileSync(file, "utf8")
  const from = `/${file.slice(dist.length + 1)}`
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1]
    if (/^(https?:|mailto:|tel:|data:|#)/.test(href)) continue
    const clean = href.split("#")[0].split("?")[0]
    if (!clean) continue
    if (existsSync(join(dist, clean, "index.html"))) continue
    if (existsSync(join(dist, clean))) continue
    if (!broken.has(clean)) broken.set(clean, [])
    broken.get(clean).push(from)
  }
}

for (const [href, froms] of [...broken].sort()) {
  console.log(`Enllaç trencat: ${href} (des de ${froms.length} pàgina/es, ex. ${froms[0]})`)
}

const pages = htmlFiles(dist).length
if (broken.size > 0) {
  console.error(`\n${broken.size} enllaç/os trencat/s en ${pages} pàgines`)
  process.exit(1)
}
console.log(`Cap enllaç intern trencat en ${pages} pàgines.`)
