// RSS feed proxy — fetches Substack RSS server-side to bypass CORS
export default {
  async fetch() {
    const rss = await fetch('https://insights.priva.cat/feed');
    return new Response(await rss.text(), {
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
};
