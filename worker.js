// Serves static site + proxies Substack RSS at /feed-proxy
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/feed-proxy') {
      const rss = await fetch('https://insights.priva.cat/feed');
      return new Response(await rss.text(), {
        headers: {
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // Everything else: serve static files
    return env.ASSETS.fetch(request);
  },
};
