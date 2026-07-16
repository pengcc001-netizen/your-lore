import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { abilities } from '../data/abilities'
import { archetypes } from '../data/archetypes'
import Ad from '../components/Ad'

export default function AbilitiesPage() {
  const sorted = [...abilities].sort((a, b) => a.name.localeCompare(b.name))
  const archetypeMap = new Map(archetypes.map(a => [a.slug, a]))

  return (
    <div className="fade-in">
      <Helmet>
        <title>All Character Abilities - {sorted.length} Unique Powers | Your Lore</title>
        <meta name="description" content={`Browse ${sorted.length}+ character abilities across all archetypes. From Divine Protection to Shadow Step, discover the powers of each archetype.`} />
      </Helmet>
      <h2 className="eyebrow" style={{ marginBottom: 8 }}>Ability Database</h2>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: 16 }}>All Abilities</h1>
      <p style={{ color: 'var(--text-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: 'var(--font-body)' }}>
        {sorted.length} unique abilities across {archetypes.length} archetypes. Each ability belongs to a specific character type and reflects their strengths.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 40 }}>
        {sorted.map(ab => {
          const archetype = archetypeMap.get(ab.archetypeSlug)
          return (
            <Link key={ab.slug} to={`/abilities/${ab.slug}`} style={{ textDecoration: 'none' }}>
              <div className="gold-card" style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: '1.25rem' }}>{archetype?.emoji ?? '✦'}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{ab.name}</span>
                </div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: '0.06em' }}>{(archetype?.name ?? 'Unknown').toUpperCase()}</div>
              </div>
            </Link>
          )
        })}
      </div>
      <Ad />
    </div>
  )
}
