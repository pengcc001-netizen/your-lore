import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { archetypes } from '../data/archetypes'
import Ad from '../components/Ad'

export default function ArchetypesPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>All Character Archetypes - {archetypes.length} Types | Your Lore</title>
        <meta name="description" content={`Browse all ${archetypes.length} character archetypes — from The Chosen One to The Sovereign. Each with unique backstory, abilities, fatal flaw, and quest.`} />
        <meta property="og:title" content={`All Character Archetypes - ${archetypes.length} Types | Your Lore`} />
        <meta property="og:description" content={`Browse all ${archetypes.length} character archetypes — from The Chosen One to The Sovereign. Each with unique backstory, abilities, fatal flaw, and quest.`} />
        <meta property="og:url" content="https://lore.csskey.com/archetypes" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "All Character Archetypes",
          "description": `Browse all ${archetypes.length} character archetypes — from The Chosen One to The Sovereign. Each with unique backstory, abilities, fatal flaw, and quest.`,
          "url": "https://lore.csskey.com/archetypes"
        })}</script>
      </Helmet>
      <div className="eyebrow" $$$ >$$$</div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: 16 }}>The Archetypes</h1>
      <p style={{ color: 'var(--text-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: 'var(--font-body)' }}>
        {archetypes.length} archetypes appear in every story ever told. Each has a unique backstory, set of abilities, fatal flaw, signature item, and quest. Discover which one matches you.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: 40 }}>
        {archetypes.map((a) => (
          <Link key={a.slug} to={`/archetypes/${a.slug}`} style={{ textDecoration: 'none' }}>
            <div className="gold-card" style={{ padding: '28px 24px', height: '100%' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{a.emoji}</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{a.name}</h2>
              <p style={{ fontSize: 13, color: 'var(--gold)', fontStyle: 'italic', marginBottom: 12, fontFamily: 'var(--font-body)' }}>"{a.tagline}"</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {a.abilities.slice(0, 3).map((ab, i) => <span key={i} className="chip chip-gold" style={{ fontSize: 11 }}>{ab}</span>)}
                {a.abilities.length > 3 && <span className="chip chip-neutral" style={{ fontSize: 11 }}>+{a.abilities.length - 3}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Ad />
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link to="/" className="btn btn-gold">Discover Your Archetype →</Link>
      </div>
    </div>
  )
}
