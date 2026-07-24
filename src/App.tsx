import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { archetypes } from './data/archetypes'
import Home from './pages/Home'
import ArchetypesPage from './pages/ArchetypesPage'
import ArchetypeDetailPage from './pages/ArchetypeDetailPage'
import AbilitiesPage from './pages/AbilitiesPage'
import AbilityDetailPage from './pages/AbilityDetailPage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import StaticPage from './pages/StaticPage'
import ResultPage from './pages/ResultPage'
import Ad from './components/Ad'
import CookieConsent from './components/CookieConsent'

function NotFound() {
  return (
    <div style={{ minHeight: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, textAlign: 'center' }}>
      <Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Lost in the Archives | Your Lore</title></Helmet>
      <div className="eyebrow">Error 404</div>
      <h1 className="gradient-text" style={{ fontSize: 'clamp(4rem,12vw,8rem)', fontWeight: 900, fontFamily: 'var(--font-heading)', lineHeight: 0.9 }}>404</h1>
      <p style={{ color: 'var(--text-soft)', maxWidth: 360, fontSize: 15, lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>This page has been lost to the archives. The lore you seek may be in another codex.</p>
      <Link to="/" className="btn btn-gold">Return to the Beginning</Link>
    </div>
  )
}

const navLinks = [
  { to: '/archetypes', label: 'Archetypes' },
  { to: '/abilities', label: 'Abilities' },
  { to: '/blog', label: 'Lorekeeper' },
  { to: '/about', label: 'About' },
]

function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  useEffect(() => { setMenuOpen(false) }, [loc.pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg-glass)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', height: 64, padding: '0 24px', gap: 24 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--gold)' }}>YOUR LORE</span>
          </Link>
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center', marginLeft: 'auto' }} className="nav-desktop">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className="nav-link" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 13, fontWeight: 600, padding: '6px 12px', borderRadius: 6, transition: 'color 0.15s ease', fontFamily: 'var(--font-body)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-soft)' }}>{l.label}</Link>
            ))}
          </nav>
          <Link to="/" className="btn btn-gold nav-desktop" style={{ padding: '8px 20px', fontSize: 12 }}>Discover</Link>
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" style={{ display: 'none', background: 'var(--bg-card)', border: '1px solid var(--border)', padding: 8, cursor: 'pointer', color: 'var(--text)', borderRadius: 8, marginLeft: 'auto' }} className="menu-toggle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">{menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>}</svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="slide-down nav-mobile" style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--border)', padding: '12px 24px', gap: 2, background: 'var(--bg-elevated)' }}>
            {navLinks.map(l => (<Link key={l.to} to={l.to} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: 15, fontWeight: 600, padding: '12px 0', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-body)' }}>{l.label}</Link>))}
            <Link to="/" className="btn btn-gold" style={{ marginTop: 12, padding: '12px 24px' }}>Discover Your Lore</Link>
          </nav>
        )}
      </header>
      <main style={{ flex: 1, maxWidth: 1200, margin: '0 auto', padding: '40px 24px', width: '100%' }}>{children}</main>
      <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-elevated)', padding: '56px 24px 32px', marginTop: 64 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
            <div style={{ maxWidth: 320 }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--gold)' }}>YOUR LORE</span>
              <p style={{ fontSize: 14, color: 'var(--text-soft)', lineHeight: 1.7, marginTop: 12, maxWidth: 280, fontFamily: 'var(--font-body)' }}>{archetypes.length} character archetypes with unique backstories, abilities, and quests. Discover your character lore. Free, no sign-up.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Explore</span>
              <Link to="/archetypes" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Archetypes</Link>
              <Link to="/abilities" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Abilities</Link>
              <Link to="/blog" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Lorekeeper</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Learn</span>
              <Link to="/blog/psychology-of-character-archetypes" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Psychology of Archetypes</Link>
              <Link to="/blog/8-character-archetypes-every-story" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>8 Universal Archetypes</Link>
              <Link to="/blog/how-to-write-your-own-character-lore" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Write Your Lore</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Site</span>
              <Link to="/about" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>About</Link>
              <Link to="/privacy" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Privacy</Link>
              <Link to="/terms" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Terms</Link>
              <Link to="/contact" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Contact</Link>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: 24 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ color: 'var(--text-faint)', fontSize: 12, letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>YOUR LORE · 2026 · For entertainment purposes only.</span>
            <span style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>lore.csskey.com</span>
          </div>
        </div>
      </footer>
      <style>{`@media (max-width: 860px) { .nav-desktop { display: none !important; } .menu-toggle { display: flex !important; } }`}</style>
      <CookieConsent />
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archetypes" element={<ArchetypesPage />} />
        <Route path="/archetypes/:slug" element={<ArchetypeDetailPage />} />
        <Route path="/abilities" element={<AbilitiesPage />} />
        <Route path="/abilities/:slug" element={<AbilityDetailPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<StaticPage page="about" />} />
        <Route path="/privacy" element={<StaticPage page="privacy" />} />
        <Route path="/terms" element={<StaticPage page="terms" />} />
        <Route path="/contact" element={<StaticPage page="contact" />} />
        <Route path="/r/:code" element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Ad />
    </Layout>
  )
}
