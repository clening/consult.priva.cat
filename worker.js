// Serves the static site + proxies Substack RSS at /feed-proxy.
//
// Why the proxy: Substack's feed has no Access-Control-Allow-Origin, so the
// browser can't fetch it directly from a different origin. The Worker fetches
// it server-side and re-emits with same-origin headers.
//
// Why we check upstream status: Substack rate-limits aggressive requests with
// a plaintext "Too Many Requests" body. Without an .ok check the Worker would
// happily forward that as application/xml AND let Cloudflare's edge cache it
// for an hour, making the dispatches section look broken to every visitor
// until the cache expired.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/feed-proxy') {
      const rss = await fetch('https://insights.priva.cat/feed', {
        headers: {
          // Substack rate-limits unidentified Workers user-agents more
          // aggressively. A real-looking UA reduces 429s.
          'User-Agent': 'Mozilla/5.0 (compatible; consult.priva.cat RSS proxy; +https://consult.priva.cat)',
          'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
        },
      });

      if (!rss.ok) {
        return new Response(`upstream feed error: ${rss.status} ${rss.statusText}`, {
          status: 502,
          headers: { 'Cache-Control': 'no-store' },
        });
      }

      return new Response(await rss.text(), {
        headers: {
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // Everything else: serve static files.
    return env.ASSETS.fetch(request);
  },
};
