// FooterFull.jsx — footer + Joi memorial
function FooterFull() {
  return (
    <footer className="pc-footer">
      <div className="pc-footer-inner">
        <div className="pc-footer-row">
          <span className="pc-footer-mark">Privacat Insights<span className="pc-dot">.</span></span>
          <ul className="pc-footer-links">
            <li><a href="https://insights.priva.cat" target="_blank" rel="noopener">Newsletter ↗</a></li>
            <li><a href="https://www.linkedin.com/in/privacat/" target="_blank" rel="noopener">LinkedIn ↗</a></li>
            <li><a href="https://bsky.app/profile/priva.cat" target="_blank" rel="noopener">Bluesky ↗</a></li>
            <li><a href="mailto:carey@priva.cat">Email</a></li>
            <li><a href="/privacy.html">Privacy Notice</a></li>
          </ul>
        </div>
        <div className="pc-footer-rule" />
        <div className="pc-footer-bottom">
          <span className="pc-footer-copy">© 2026 Carey Lening · Utrecht, NL</span>
          <span className="pc-footer-meta">Built quietly. No analytics, no trackers, no nonsense.</span>
        </div>
      </div>
    </footer>
  );
}
window.FooterFull = FooterFull;
