import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { archetypes } from '../data/archetypes'
import ShareButtons from '../components/ShareButtons'
import Ad from '../components/Ad'

const STAT_KEYS = ['strength', 'wisdom', 'charisma', 'cunning', 'resilience', 'magic'] as const

export default function ArchetypeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const archetype = archetypes.find(a => a.slug === slug)
  if (!archetype) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>
  const url = `https://lore.csskey.com/archetypes/${archetype.slug}`

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{archetype.name} - Character Archetype Guide | Your Lore</title>
        <meta name="description" content={`${archetype.name}: ${archetype.tagline} Backstory, abilities, fatal flaw, signature item, and quest.`} />
        <meta property="og:title" content={`${archetype.name} - Character Archetype Guide | Your Lore`} />
        <meta property="og:description" content={`${archetype.name}: ${archetype.tagline} Backstory, abilities, fatal flaw, signature item, and quest.`} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": `${archetype.name} — Character Archetype`, "description": archetype.tagline, "url": url, "author": { "@type": "Person", "name": "Elena Marchetti" }, "publisher": { "@type": "Organization", "name": "Your Lore" } })}</script>
      </Helmet>
      <div style={{ marginBottom: 24 }}><Link to="/archetypes" style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>← All Archetypes</Link></div>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>{archetype.emoji}</div>
        <h1 className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, marginBottom: 8 }}>{archetype.name}</h1>
        <p style={{ fontSize: 16, color: 'var(--gold)', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>"{archetype.tagline}"</p>
      </div>
      {/* Stats */}
      <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 24 }}>
        <h2 className="eyebrow" style={{ marginBottom: 16 }}>Attributes</h2>
        {STAT_KEYS.map(key => (
          <div key={key} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span className="mono" style={{ fontSize: 12, color: 'var(--text-soft)', textTransform: 'capitalize' }}>{key}</span>
              <span className="mono" style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>{archetype.stats[key]}/100</span>
            </div>
            <div style={{ height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${archetype.stats[key]}%`, background: 'linear-gradient(90deg, var(--gold-dark), var(--gold))', borderRadius: 3 }} />
            </div>
          </div>
        ))}
      </div>
      {/* Backstory */}
      <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 24 }}>
        <h2 className="eyebrow" style={{ marginBottom: 12 }}>Backstory</h2>
        {archetype.backstory.split('\n\n').map((para, i) => (
          <p key={i} className={i === 0 ? 'dropcap' : ''} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'justify', marginBottom: i < archetype.backstory.split('\n\n').length - 1 ? '1em' : 0 }}>{para}</p>
        ))}
      </div>
      {/* Abilities */}
      <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 24 }}>
        <h2 className="eyebrow" style={{ marginBottom: 12 }}>Abilities</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {archetype.abilities.map((ab, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: i < archetype.abilities.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14 }}>{String.fromCharCode(65 + i)}</span>
              <span style={{ fontSize: 15, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{ab}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Fatal Flaw & Signature Item */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        <div className="gold-card" style={{ padding: '24px 28px' }}>
          <h2 className="eyebrow" style={{ marginBottom: 8, color: 'var(--danger-bright)' }}>Fatal Flaw</h2>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>{archetype.fatalFlaw}</p>
        </div>
        <div className="gold-card" style={{ padding: '24px 28px' }}>
          <h2 className="eyebrow" style={{ marginBottom: 8 }}>Signature Item</h2>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{archetype.signatureItem}</p>
        </div>
      </div>
      {/* Quest */}
      <div className="gold-card" style={{ padding: '28px 32px', marginBottom: 24 }}>
        <h2 className="eyebrow" style={{ marginBottom: 12 }}>The Quest</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{archetype.quest}</p>
      </div>
      <Ad />
      {/* Allies & Enemies */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        <div><h2 className="eyebrow" style={{ color: 'var(--positive-bright)', marginBottom: 12 }}>Allies</h2><div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {archetype.allies.map((allyName, i) => { const ally = archetypes.find(a => a.name === allyName); return ally ? <Link key={i} to={`/archetypes/${ally.slug}`} style={{ textDecoration: 'none' }}><div className="gold-card" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: '1.5rem' }}>{ally.emoji}</span><span style={{ fontSize: 14, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{ally.name}</span></div></Link> : null })}
        </div></div>
        <div><h2 className="eyebrow" style={{ color: 'var(--danger-bright)', marginBottom: 12 }}>Enemies</h2><div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {archetype.enemies.map((enemyName, i) => { const enemy = archetypes.find(a => a.name === enemyName); return enemy ? <Link key={i} to={`/archetypes/${enemy.slug}`} style={{ textDecoration: 'none' }}><div className="gold-card" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: '1.5rem' }}>{enemy.emoji}</span><span style={{ fontSize: 14, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>{enemy.name}</span></div></Link> : null })}
        </div></div>
      </div>
      <div style={{ marginTop: 32 }}><ShareButtons url={url} title={`${archetype.name} — ${archetype.tagline}`} /></div>
    </div>
  )
}
