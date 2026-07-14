import fs from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const base = 'https://lore.csskey.com'
const today = new Date().toISOString().split('T')[0]

const archetypesData = fs.readFileSync(resolve(root, 'src', 'data', 'archetypes.ts'), 'utf8')
const archetypeSlugs = [...archetypesData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1])
const abilitiesData = fs.readFileSync(resolve(root, 'src', 'data', 'abilities.ts'), 'utf8')
const abilitySlugs = [...abilitiesData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1])
const blogData = fs.readFileSync(resolve(root, 'src', 'data', 'blog.ts'), 'utf8')
const blogSlugs = [...new Set([...blogData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1]))]

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
const add = (p, pri) => { xml += `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod><priority>${pri}</priority></url>\n` }

add('/', 1.0); add('/archetypes', 0.9); add('/abilities', 0.7); add('/blog', 0.8)
add('/about', 0.5); add('/privacy', 0.3); add('/terms', 0.3); add('/contact', 0.5)
for (const slug of archetypeSlugs) add(`/archetypes/${slug}`, 0.8)
for (const slug of abilitySlugs) add(`/abilities/${slug}`, 0.6)
for (const slug of blogSlugs) add(`/blog/${slug}`, 0.7)
xml += '</urlset>\n'

fs.writeFileSync(resolve(root, 'public', 'sitemap.xml'), xml, 'utf8')
try { fs.writeFileSync(resolve(root, 'dist', 'sitemap.xml'), xml, 'utf8') } catch {}
const total = 8 + archetypeSlugs.length + abilitySlugs.length + blogSlugs.length
console.log(`Sitemap: ${total} URLs (${archetypeSlugs.length} archetypes, ${abilitySlugs.length} abilities, ${blogSlugs.length} blog)`)
