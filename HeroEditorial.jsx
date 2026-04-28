// HeroEditorial.jsx — Variant B: editorial masthead front-page hero
function HeroEditorial({ onCTA }) {
  return (
    <section className="pc-hero pc-hero--editorial" id="top" data-screen-label="01 Hero (Editorial)">
      <div className="pc-hero-inner">
        <div className="pc-hero-masthead-rule">
          <span>Vol. VII · No. 04</span>
          <span>Privacat Insights<span className="pc-dot">.</span></span>
          <span>Utrecht · Est. 2026</span>
        </div>
        <div className="pc-hero-eyebrow">CAREY LENING · OPTIMISTIC CONTRARIAN</div>
        <h1 className="pc-hero-title">
          What happens<br/>when systems<br/>become <em>ungovernable</em>.
        </h1>
        <p className="pc-hero-tagline">
          A (mostly) weekly newsletter on tech extensity, regulatory failure,
          and the slow tangling of the systems we all depend on.
        </p>
        <div className="pc-hero-actions">
          <Button variant="primary" onClick={() => onCTA?.('writing')}>Read the latest →</Button>
          <a href="#about" className="pc-hero-scroll" onClick={(e) => { e.preventDefault(); onCTA?.('about'); }}>
            ↓ Who's writing
          </a>
        </div>
      </div>
      <div className="pc-edge-strip">
        <span><strong>20 yrs</strong> in privacy law</span>
        <span><strong>Ex-Palantir</strong> · <strong>Ex-Meta</strong></span>
        <span><strong>Based</strong> in Utrecht, NL</span>
        <span><strong>Available</strong> for advisory work</span>
      </div>
    </section>
  );
}
window.HeroEditorial = HeroEditorial;
