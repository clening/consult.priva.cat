// site-tweaks.jsx — Tweaks panel for the Privacat marketing site
function SiteTweaks() {
  const [tweaks, setTweak] = useTweaks(SITE_TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    const accentMap = {
      red:   { c: '#e3170a', d: '#b51209' },
      blue:  { c: '#2a4a8c', d: '#1a3060' },
      ink:   { c: '#0a0a0a', d: '#000000' },
      cream: { c: '#b8941f', d: '#8a6e15' },
    };
    const a = accentMap[tweaks.accent] || accentMap.red;
    root.style.setProperty('--site-accent', a.c);
    root.style.setProperty('--site-accent-deep', a.d);
    root.style.setProperty('--site-density', String(tweaks.density));
    root.style.setProperty('--site-radius', tweaks.radius + 'px');
  }, [tweaks]);

  const [variant, setVariant] = React.useState(() => (location.hash.slice(1) === 'b' ? 'b' : 'a'));
  React.useEffect(() => {
    const onHash = () => setVariant(location.hash.slice(1) === 'b' ? 'b' : 'a');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const setVariantHash = (v) => { location.hash = v; setVariant(v); };

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Homepage variant" />
      <TweakRadio
        label="Layout"
        value={variant}
        options={['a', 'b']}
        onChange={setVariantHash}
      />

      <TweakSection label="Brand accent" />
      <TweakRadio
        label="Color"
        value={tweaks.accent}
        options={['red', 'blue', 'ink', 'cream']}
        onChange={(v) => setTweak('accent', v)}
      />

      <TweakSection label="Spacing" />
      <TweakSlider
        label="Density"
        value={tweaks.density}
        min={0.6} max={1.2} step={0.05}
        unit="×"
        onChange={(v) => setTweak('density', v)}
      />
      <TweakSlider
        label="Corner radius"
        value={tweaks.radius}
        min={0} max={16} step={1}
        unit="px"
        onChange={(v) => setTweak('radius', v)}
      />

    </TweaksPanel>
  );
}

window.SiteTweaks = SiteTweaks;
