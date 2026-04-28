// FootExtras.jsx — Substack subscribe + recent essays + Joi memorial
function FootExtras({ onSubscribe }) {
  // Latest dispatches — populate from Substack RSS in production.
  // Placeholder rows below; replace `essays` with real titles + dates before launch.
  const essays = [
    { num: '№ —', title: 'Latest essay headline goes here.', date: 'TBD' },
    { num: '№ —', title: 'Second-most-recent essay headline.', date: 'TBD' },
    { num: '№ —', title: 'Third-most-recent essay headline.', date: 'TBD' },
  ];

  const submit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    onSubscribe?.(email);
    e.target.reset();
  };

  return (
    <section className="pc-foot-extras" data-screen-label="07 Subscribe + Latest">
      <div className="pc-foot-extras-inner">
        <div className="pc-foot-subscribe">
          <span className="pc-eyebrow">↳ THE NEWSLETTER</span>
          <h3>Get it in your inbox<span className="pc-dot">.</span></h3>
          <p>
            (Mostly) weekly. Free. No tracking, no clickbait — just whatever's caught my
            attention in privacy, policy, and the tangle in between.
          </p>
          <form className="pc-foot-form" onSubmit={submit}>
            <input
              name="email"
              type="email"
              required
              placeholder="you@yourdomain.com"
              aria-label="Email address"
            />
            <button type="submit">Subscribe →</button>
          </form>
          <span className="pc-foot-fineprint">
            VIA SUBSTACK · UNSUBSCRIBE ANY TIME · NO SPAM
          </span>
        </div>
        <div className="pc-foot-essays">
          <div className="pc-foot-essays-label">
            <span>Latest dispatches</span>
            <a href="https://insights.priva.cat" target="_blank" rel="noopener">All essays ↗</a>
          </div>
          {essays.map(e => (
            <a
              key={e.num}
              className="pc-foot-essay"
              href="https://insights.priva.cat"
              target="_blank"
              rel="noopener"
            >
              <span className="pc-foot-essay-num">{e.num}</span>
              <span className="pc-foot-essay-title">{e.title}</span>
              <span className="pc-foot-essay-date">{e.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FootExtras = FootExtras;
