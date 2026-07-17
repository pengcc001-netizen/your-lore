import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { abilities } from '../data/abilities'
import { archetypes } from '../data/archetypes'
import ShareButtons from '../components/ShareButtons'
import Ad from '../components/Ad'

export default function AbilityDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const ability = abilities.find(a => a.slug === slug)
  if (!ability) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Your Lore</title></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const archetype = archetypes.find(a => a.slug === ability.archetypeSlug)
  const url = `https://lore.csskey.com/abilities/${ability.slug}`
  const relatedAbilities = abilities
    .filter(a => a.archetypeSlug === ability.archetypeSlug && a.slug !== ability.slug)
    .slice(0, 4)

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{ability.name} 鈥?Character Ability | Your Lore</title>
        <meta name="description" content={`${ability.name}: a signature ability of ${archetype?.name ?? 'an archetype'}. ${ability.description.slice(0, 140)}...`} />
        <meta property="og:title" content={`${ability.name} 鈥?Character Ability | Your Lore`} />
        <meta property="og:description" content={`${ability.name}: a signature ability of ${archetype?.name ?? 'an archetype'}. ${ability.description.slice(0, 140)}...`} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${ability.name} 鈥?Character Ability`,
          "description": ability.description.slice(0, 200),
          "url": url,
          "author": { "@type": "Person", "name": "Elena Marchetti" },
          "publisher": { "@type": "Organization", "name": "Your Lore" },
          "mainEntityOfPage": url
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lore.csskey.com/" },
            { "@type": "ListItem", "position": 2, "name": "Abilities", "item": "https://lore.csskey.com/abilities" },
            { "@type": "ListItem", "position": 3, "name": ability.name, "item": url }
          ]
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 24 }}>
        <Link to="/abilities" style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>鈫?All Abilities</Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        {archetype && (
          <div style={{ fontSize: '3rem', marginBottom: 12, lineHeight: 1 }}>{archetype.emoji}</div>
        )}
        <h1 className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, marginBottom: 12 }}>{ability.name}</h1>
        {archetype && (
          <Link to={`/archetypes/${archetype.slug}`} style={{ textDecoration: 'none' }}>
            <span className="mono" style={{ fontSize: 12, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {archetype.name}
            </span>
          </Link>
        )}
      </div>

      {/* Description */}
      <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 24 }}>
        <h2 className="eyebrow" style={{ marginBottom: 16 }}>The Lore</h2>
        <p className="dropcap" style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'justify', margin: 0 }}>
          {ability.description}
        </p>
      </div>

      {/* Archetype card */}
      {archetype && (
        <Link to={`/archetypes/${archetype.slug}`} style={{ textDecoration: 'none' }}>
          <div className="gold-card" style={{ padding: '24px 28px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontSize: '2.25rem' }}>{archetype.emoji}</span>
            <div style={{ flex: 1 }}>
              <h2 className="eyebrow" style={{ marginBottom: 4 }}>Belongs To</h2>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>{archetype.name}</div>
              <div style={{ fontSize: 13, color: 'var(--text-soft)', fontStyle: 'italic', fontFamily: 'var(--font-body)', marginTop: 2 }}>"{archetype.tagline}"</div>
            </div>
            <span style={{ color: 'var(--gold)', fontSize: 20 }}>鈫?/span>
          </div>
        </Link>
      )}

      <Ad />

      {/* Related Abilities */}
      {relatedAbilities.length > 0 && (
        <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 24 }}>
          <h2 className="eyebrow" style={{ marginBottom: 16 }}>More from {archetype?.name ?? 'this archetype'}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {relatedAbilities.map((rel, i) => (
              <Link key={rel.slug} to={`/abilities/${rel.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 0',
                  borderBottom: i < relatedAbilities.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14 }}>
                    {String.fromCharCode(65 + i + 1)}
                  </span>
                  <span style={{ fontSize: 15, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{rel.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: 32 }}>
        <ShareButtons url={url} title={`${ability.name} 鈥?Character Ability | Your Lore`} />
      </div>
    </div>
  )
}
