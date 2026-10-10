/* Original inline-SVG illustrations (no image files needed):
   janur/penjor arcs, palm fronds, joglo garden scenes, lily-of-the-valley sprig, rose vine.
   Colours come from CSS variables (see .art rules in styles.css). */
window.Art = (() => {
  const paths = (list, step = 0.07) => list.map((d, i) => `<path pathLength="1" style="animation-delay:${Math.min(i * step, 3).toFixed(2)}s" d="${d}"/>`).join("");
  const f1 = n => n.toFixed(1);

  /* Procedural palm frond: curved midrib + paired leaflets. ang: 0 = up, positive = right. */
  function frond(x, y, len, ang, bend = 0.3, n = 9) {
    const a = ang * Math.PI / 180, tx = x + Math.sin(a) * len, ty = y - Math.cos(a) * len;
    const cx = x + Math.sin(a) * len * 0.5 + Math.cos(a) * len * bend, cy = y - Math.cos(a) * len * 0.5 + Math.sin(a) * len * bend;
    const d = [`M${x} ${y}Q${f1(cx)} ${f1(cy)} ${f1(tx)} ${f1(ty)}`];
    for (let i = 1; i <= n; i++) {
      const t = i / (n + 1), u = 1 - t;
      const px = u * u * x + 2 * u * t * cx + t * t * tx, py = u * u * y + 2 * u * t * cy + t * t * ty;
      const dx = 2 * u * (cx - x) + 2 * t * (tx - cx), dy = 2 * u * (cy - y) + 2 * t * (ty - cy), m = Math.hypot(dx, dy);
      const ux = dx / m, uy = dy / m, L = len * 0.27 * (1 - t * 0.55);
      [-1, 1].forEach(s => { const r = s * 0.95, vx = ux * Math.cos(r) - uy * Math.sin(r), vy = ux * Math.sin(r) + uy * Math.cos(r);
        d.push(`M${f1(px)} ${f1(py)}l${f1(vx * L)} ${f1(vy * L)}`); });
    }
    return d;
  }

  /* Janur / penjor: a hanging arc with woven strands and a small lantern at the tip */
  const bez = t => { const u = 1 - t; return [3 * u * u * t * 58 + 3 * u * t * t * 118 + t * t * t * 122, u * u * u * 8 - 6 * u * u * t + 102 * u * t * t + 120 * t * t * t]; };
  function penjorPaths() {
    const d = ["M0 8C58 -2 118 34 122 120", "M0 14C56 5 112 38 116 120"];
    [0.18, 0.32, 0.46, 0.6, 0.74, 0.88].forEach((t, i) => { const [x, y] = bez(t), L = 14 + i * 5;
      d.push(`M${f1(x)} ${f1(y)}v${L}`, `M${f1(x - 3)} ${f1(y + L)}l3 6 3-6`); });
    d.push("M119 120v14", "M119 134l-8 14 8 14 8-14z", "M111 148h16", "M119 162v22", "M115 184h8");
    return d;
  }
  const penjor = side => `<div class="pj ${side}" aria-hidden="true"><svg class="art draw" viewBox="0 0 140 200">${paths(penjorPaths())}</svg></div>`;
  const fronds = side => `<div class="fr ${side}" aria-hidden="true"><svg class="art draw" viewBox="-10 20 190 280">${paths([
    ...frond(0, 260, 150, 52, 0.25, 9), ...frond(0, 260, 120, 82, 0.18, 8), ...frond(0, 260, 110, 24, 0.4, 7)], 0.03)}</svg></div>`;

  /* Joglo (Javanese house) line drawing, shared by several scenes */
  const palm = x => `<g transform="translate(${x} 0)">${paths([
    "M0 182Q5 130-2 84", "M-2 84q-26-4-38 14", "M-2 84q-16-24-36-18", "M-2 84q4-28 30-30", "M-2 84q24-12 40 4", "M-2 84q22 6 32 26"])}</g>`;
  const roofList = [
    "M60 134L150 64L240 134", "M150 54h20l16 38H134z", "M146 54h28",
    "M84 130L136 92h48l52 38z", "M78 132Q160 116 242 132",
    "M112 118l22-18M132 122l26-24M160 122l22-24M186 122l22-18",
    "M96 132v38M132 132v38M188 132v38M224 132v38", "M88 170h144",
    "M146 138h28v32h-28zM160 138v32", "M96 154h36M188 154h36", "M146 170v6h28v-6", "M10 182h300"];
  const bush = x => `M${x} 182q6-14 14-2q8-12 14 2`;

  const scene = () => `<svg class="art scene draw" viewBox="0 0 320 200" aria-hidden="true">${palm(44)}<g transform="translate(320 0) scale(-1 1)">${palm(44)}</g>${paths(roofList)}${paths([bush(66), bush(240)])}</svg>`;

  /* "The Day": joglo at the end of a winding garden path */
  const way = () => `<svg class="art way draw" viewBox="0 0 320 252" aria-hidden="true">${palm(44)}<g transform="translate(320 0) scale(-1 1)">${palm(44)}</g>${paths(roofList)}${paths([
    "M148 178C146 204 112 220 100 250", "M172 178C174 204 208 220 220 250", "M155 196h10M151 214h18M145 233h30", bush(66), bush(240), bush(14), bush(292)])}</svg>`;

  /* "Our love story": joglo inside a garden arch, with moon, hills and fireflies */
  function archScene() {
    const arch = "M20 374V150A130 130 0 0 1 280 150V374z", inner = "M30 374V152A120 120 0 0 1 270 152V374";
    const flies = [[70, 120], [112, 86], [236, 150], [58, 214], [250, 226], [150, 60]].map(([x, y], i) => `<circle class="ff" style="animation-delay:${(i * 0.6).toFixed(1)}s" cx="${x}" cy="${y}" r="1.8"/>`).join("");
    return `<svg class="art draw" viewBox="0 0 300 380" aria-hidden="true"><defs><clipPath id="arch-c"><path d="${arch}"/></clipPath></defs>
      <path class="l nd" style="fill-opacity:.2;stroke:none" d="${arch}"/>
      <g clip-path="url(#arch-c)"><circle class="l nd" cx="214" cy="106" r="26"/><circle cx="214" cy="106" r="35"/>
      ${paths(["M20 266L80 206L122 242L186 180L240 234L280 216"])}${flies}
      <g transform="translate(45 195) scale(.7)">${paths(roofList)}</g>
      <g transform="translate(0 162)">${palm(26)}</g><g transform="translate(300 162) scale(-1 1)">${palm(26)}</g>
      ${paths([...frond(76, 378, 62, 28, 0.3, 6), ...frond(224, 378, 62, -28, -0.3, 6)], 0.04)}</g>${paths([arch, inner], 0.4)}</svg>`;
  }

  /* Lily-of-the-valley sprig */
  const bell = (x, y) => `<path class="f" transform="translate(${x} ${y})" d="M-6 0q0-9 6-9t6 9q-3 3-6 3t-6-3z"/>`;
  const sprigSvg = `<svg class="art corner" viewBox="0 0 100 160" aria-hidden="true">
    <path class="l" d="M20 158C0 118 8 78 40 66C46 106 36 136 20 158z"/>
    <path class="l" d="M24 150C50 130 70 140 92 120C70 100 40 110 24 150z"/>
    <path d="M20 158C30 96 52 44 84 12"/>${[[80, 22], [70, 42], [60, 62], [51, 82]].map(([x, y]) => bell(x, y)).join("")}</svg>`;
  const corner = side => { const t = document.createElement("div"); t.innerHTML = sprigSvg; const el = t.firstElementChild; el.classList.add(side); return el; };

  const divider = () => `<svg class="art" viewBox="0 0 120 20" aria-hidden="true">
    <path d="M0 10H46M74 10H120"/><path d="M60 3v14M60 10q-7-7-12-2M60 10q7-7 12-2"/></svg>`;

  /* Rose vine for the bottom of the RSVP card */
  const leaf = (x, y, f) => `<path class="l nd" d="M${x} ${y}q${10 * f} -16 ${24 * f} -8q${-8 * f} 14 ${-24 * f} 8z"/>`;
  const rose = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><circle class="rs" r="11"/><circle class="rs" r="7"/><circle class="rs" r="3"/></g>`;
  const vine = () => `<svg class="art vine draw" viewBox="0 0 400 100" aria-hidden="true">${paths(["M-10 74C40 54 80 90 130 70S220 52 270 74 360 88 410 60"], 0.2)}
    ${[30, 78, 150, 238, 300, 362].map((x, i) => leaf(x, 72 + (i % 2 ? -6 : 6), i % 2 ? 1 : -1)).join("")}${rose(110, 64, 1)}${rose(200, 54, 1.25)}${rose(318, 72, 1)}</svg>`;

  /* Composed backdrops */
  const stars = () => [[12, 18], [86, 12], [24, 62], [76, 58], [8, 84], [92, 80]].map(([l, t], i) => `<i class="tw" style="left:${l}%;top:${t}%;animation-delay:${i * 0.7}s;font-size:${8 + (i % 3) * 2}px">✦</i>`).join("");
  const backdrop = () => penjor("l") + penjor("r") + fronds("l") + fronds("r") + stars() + `<div class="bt">${scene()}</div>`;
  const heroDeco = () => penjor("l") + penjor("r") + fronds("l") + fronds("r") + `<div class="bt">${scene()}</div>`;

  /* Round lace frame for the countdown portrait */
  const ring = (n, rx, ry, r, extra) => Array.from({ length: n }, (_, i) => { const q = i / n * 6.2832;
    return `<circle cx="${(150 + rx * Math.cos(q)).toFixed(1)}" cy="${(190 + ry * Math.sin(q)).toFixed(1)}" r="${r}" ${extra}/>`; }).join("");
  const lace = () => `<svg viewBox="0 0 300 380" aria-hidden="true">${ring(46, 128, 168, 15, 'fill="#FFFFFF" stroke="#E2D8C4" stroke-width="1"')}
    <ellipse cx="150" cy="190" rx="116" ry="156" fill="#FFFFFF"/>${ring(46, 118, 158, 2.6, 'fill="#E2D8C4"')}${ring(46, 108, 148, 1.2, 'fill="#CBD1BC"')}</svg>`;
  const vinyl = () => `<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="98" fill="#1D1D1B"/>
    ${[86, 74, 62, 50].map(r => `<circle cx="100" cy="100" r="${r}" fill="none" stroke="#3A3A36"/>`).join("")}
    <path d="M100 100V2A98 98 0 0 1 172 28z" fill="#fff" opacity=".07"/><circle cx="100" cy="100" r="32" fill="#56603F"/>
    <text x="100" y="97" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="12" fill="#F5EFE3">C &amp; A</text><circle cx="100" cy="108" r="2.5" fill="#F5EFE3"/></svg>`;

  return { scene, way, archScene, corner, divider, lace, vinyl, vine, penjor, fronds, backdrop, heroDeco };
})();
