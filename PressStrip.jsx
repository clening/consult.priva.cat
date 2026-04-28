// PressStrip.jsx — split into bylines + quoted-in
function PressStrip() {
  return (
    <section className="pc-press" data-screen-label="06 Press">
      <div className="pc-press-inner">
        <span className="pc-press-label">Words / bylines —</span>
        <div className="pc-press-row">
          <span className="pc-press-mark pc-press-mark--bold">Techdirt</span>
          <span className="pc-press-mark">LessWrong</span>
          <span className="pc-press-mark pc-press-mark--mono">Privacat Insights</span>
        </div>
        <span className="pc-press-label" style={{ marginTop: 16 }}>Quoted in —</span>
        <div className="pc-press-row">
          <span className="pc-press-mark pc-press-mark--bold">Forbes</span>
          <span className="pc-press-mark">Digiday</span>
          <span className="pc-press-mark pc-press-mark--mono">Popular Science</span>
          <span className="pc-press-mark">The Irish Independent</span>
          <span className="pc-press-mark pc-press-mark--bold">CNET</span>
          <span className="pc-press-mark pc-press-mark--mono">RTÉ</span>
          <span className="pc-press-mark pc-press-mark--mono">TodayFM</span>
        </div>
      </div>
    </section>
  );
}
window.PressStrip = PressStrip;
