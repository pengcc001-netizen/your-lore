import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const PAGES: Record<string, { title: string; content: string }> = {
  about: { title: 'About', content: `## About Your Lore\n\nI built this site because character archetypes are how humans have always understood themselves. From the cave paintings of Lascaux to the latest anime, we tell stories about characters to understand who we are. Your Lore takes this ancient impulse and makes it personal.\n\nMy name is Elena Marchetti. I have been writing about mythology, archetypes, and narrative psychology for years. When I studied Carl Jung's work on the collective unconscious, I was struck by how universal character archetypes are. The Hero, the Trickster, the Mentor — these are not invented characters. They are patterns that emerge in every culture, every era, every story.\n\n### What You Will Find Here\n\n- 8 character archetypes with full backstories, abilities, and quests\n- A 12-question quiz that generates your character sheet\n- 40+ unique abilities across all archetypes\n- 6 character attributes (Strength, Wisdom, Charisma, Cunning, Resilience, Magic)\n- A blog about archetype psychology and character writing\n- Free to use, no sign-up\n\n### Why I Built This\n\nCharacter lore is more than entertainment. It is a mirror. When you read the backstory of The Chosen One, you see your own relationship with expectation. When you read about The Exile, you recognize your own experiences with rejection. The archetypes are not fiction. They are reflections.\n\n### Contact\n\nEmail: support@csskey.com` },
  privacy: { title: 'Privacy Policy', content: `## Privacy Policy\n\n**Last updated: July 2026**\n\n### Information We Collect\n\nYour Lore does not collect personal information. Your quiz answers are encoded in your browser and never sent to a server. We do not use accounts, logins, or tracking cookies.\n\n### How the Quiz Works\n\nWhen you take the character quiz, your answers are converted to an encoded string that is stored in the URL. This allows you to share your result without us storing any data. The encoded string is processed entirely in your browser.\n\n### Cookies\n\nWe do not set cookies directly. Google AdSense may set cookies as part of their ad-serving process. You can opt out at https://www.google.com/settings/ads.\n\n### Google AdSense\n\nWe use Google AdSense to display ads. Google uses cookies to serve ads based on your visit.\n\n### Contact\n\nQuestions? Email support@csskey.com` },
  terms: { title: 'Terms of Service', content: `## Terms of Service\n\n**Last updated: July 2026**\n\nBy using this site, you agree to these terms.\n\n### Use of Service\n\nThis site is for entertainment. Character archetypes, backstories, and abilities are creative content inspired by mythology and narrative psychology. They are not professional psychological advice.\n\n### Intellectual Property\n\nAll content is owned by us. You may share links freely.\n\n### Disclaimer\n\nThe site is provided "as is" without warranties.\n\n### Contact\n\nQuestions? Email support@csskey.com` },
  contact: { title: 'Contact', content: `## Contact\n\nFound a bug or have an archetype suggestion? Email works best.\n\n### Email\n\nsupport@csskey.com\n\n### Response Time\n\nMost emails get a reply within two business days.` },
}

export default function StaticPage({ page }: { page: string }) {
  const info = PAGES[page]
  if (!info) return (
      <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <h1 className="mono" style={{ fontSize: '1.5rem', marginBottom: 16 }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: 'var(--green)' }}>← Back to Home</Link>
      </div>
    )
  let isFirstParagraph = true
  const canonicalUrl = `https://lore.csskey.com/${page}`

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{info.title} - Your Lore</title>
        <meta name="description" content={`Your Lore ${info.title.toLowerCase()} page.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${info.title} - Your Lore`} />
        <meta property="og:description" content={`Your Lore ${info.title.toLowerCase()} page.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": info.title,
          "description": `Your Lore ${info.title.toLowerCase()} page.`,
          "url": canonicalUrl
        })}</script>
      </Helmet>
      <article>
        {info.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) return <h1 key={i} style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text)', marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--border)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>{line.replace('## ', '')}</h1>
          if (line.startsWith('### ')) return <h2 key={i} style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text)', margin: '36px 0 12px' }}>{line.replace('### ', '')}</h2>
          if (line.startsWith('**')) return <p key={i} style={{ fontWeight: 700, color: 'var(--gold)', margin: '20px 0 8px', fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{line.replace(/\*\*/g, '')}</p>
          if (line.trim() === '') { isFirstParagraph = false; return <div key={i} style={{ height: 16 }} /> }
          if (line.startsWith('Email')) return <p key={i} style={{ margin: '6px 0', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body)', color: 'var(--text)' }}><a href="mailto:support@csskey.com" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{line.split(': ')[1]}</a></p>
          if (line.startsWith('- ')) return <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', margin: '4px 0', paddingLeft: 20, position: 'relative', fontFamily: 'var(--font-body)' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>{line.replace('- ', '')}</p>
          const dropcapClass = isFirstParagraph ? 'dropcap' : ''
          isFirstParagraph = false
          return <p key={i} className={dropcapClass} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text)', margin: '8px 0', fontFamily: 'var(--font-body)', textAlign: 'justify', hyphens: 'auto' }}>{line}</p>
        })}
      </article>
    </div>
  )
}
