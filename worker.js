// Valid route patterns for lore.csskey.com
const STATIC_PAGES = new Set(['/', '/archetypes', '/abilities', '/blog', '/about', '/privacy', '/terms', '/contact']);

function isValidRoute(pathname) {
  if (STATIC_PAGES.has(pathname)) return true;
  // /archetypes/archetype-slug
  if (/^\/archetypes\/[a-z0-9-]+$/.test(pathname)) return true;
  // /blog/blog-slug
  if (/^\/blog\/[a-z0-9-]+$/.test(pathname)) return true;
  // /r/encoded-result (short shareable result links — noindex)
  if (/^\/r\/[A-Za-z0-9_-]+$/.test(pathname)) return true;
  return false;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    // Try to serve the exact static asset first
    let response = await env.ASSETS.fetch(request);

    // SPA fallback: if asset not found, serve index.html
    if (response.status === 404) {
      const indexRequest = new Request(new URL('/index.html', url.origin), {
        method: request.method,
        headers: request.headers,
      });
      response = await env.ASSETS.fetch(indexRequest);
    }

    // Only modify HTML responses
    const ct = response.headers.get('content-type') || '';
    if (!ct.includes('text/html')) return response;

    const html = await response.text();
    const canonical = url.origin + path;

    // Check if route is valid → 200, otherwise → 404 (soft-404 fix)
    const valid = isValidRoute(path);
    const statusCode = valid ? 200 : 404;

    // Inject canonical
    let cleaned = html
      .replace(/<link[^>]*rel=["']canonical["'][^>]*\/?>/gi, '')
      .replace('</head>', '  <link rel="canonical" href="' + canonical + '" />\n</head>');

    // Inject robots meta for 404 pages and /r/ result pages (ephemeral, noindex)
    const noindex = !valid || path.startsWith('/r/');
    if (noindex) {
      cleaned = cleaned
        .replace(/<meta name="robots" content="[^"]*"/i, '<meta name="robots" content="noindex,nofollow"');
      if (!cleaned.includes('name="robots" content="noindex')) {
        cleaned = cleaned.replace('</head>', '  <meta name="robots" content="noindex,nofollow" />\n</head>');
      }
    }

    return new Response(cleaned, {
      status: statusCode,
      headers: response.headers,
    });
  },
};
