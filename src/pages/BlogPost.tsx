import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import ShareButtons from '../components/ShareButtons'
import Ad from '../components/Ad'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>
  const url = `https://lore.csskey.com/blog/${post.slug}`
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{post.title} | Your Lore</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": post.title, "description": post.excerpt, "url": url, "author": { "@type": "Person", "name": post.author }, "publisher": { "@type": "Organization", "name": "Your Lore" }, "datePublished": post.date, "dateModified": post.date, "mainEntityOfPage": url, "keywords": post.tags.join(', ') })}</script>
      </Helmet>
      <div style={{ marginBottom: 24 }}><Link to="/blog" style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>← All Articles</Link></div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <span className="chip chip-gold">{post.category}</span>
        <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.1em', alignSelf: 'center' }}>{post.date} · BY {post.author.toUpperCase()}</span>
      </div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: 16, color: 'var(--text)' }}>{post.title}</h1>
      <p style={{ fontSize: 16, color: 'var(--text-soft)', lineHeight: 1.7, marginBottom: 32, fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>{post.excerpt}</p>
      <article className="prose">
        {post.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: '1.5rem', margin: '1.8em 0 0.6em', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{line.replace('## ', '')}</h2>
          if (line.trim() === '') return <div key={i} style={{ height: 16 }} />
          return <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', margin: '8px 0', fontFamily: 'var(--font-body)', textAlign: 'justify', hyphens: 'auto' }}>{line}</p>
        })}
      </article>
      <Ad />
      <div style={{ marginTop: 32, marginBottom: 40 }}><ShareButtons url={url} title={post.title} /></div>
      {related.length > 0 && (
        <section>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Keep Reading</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {related.map(p => (<Link key={p.slug} to={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}><div className="gold-card" style={{ padding: '16px 20px' }}><div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', letterSpacing: '0.1em', marginBottom: 4 }}>{p.date}</div><div style={{ fontSize: 14, color: 'var(--text)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{p.title}</div></div></Link>))}
          </div>
        </section>
      )}
    </div>
  )
}
