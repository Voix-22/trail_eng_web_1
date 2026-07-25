/**
 * A hanging floral garland strung along a soft catenary curve — a nod to
 * the toran / floral garlands draped over doorways at Kerala engagements.
 * Purely decorative (aria-hidden), sits along the top edge of the hero.
 */
export default function Garland({ className = "" }) {
  const flowers = Array.from({ length: 9 }).map((_, i) => {
    const x = 20 + i * (360 / 8);
    // catenary-ish sag
    const t = x / 380;
    const y = 18 + 46 * Math.pow(Math.sin(Math.PI * t), 0.85);
    return { x, y };
  });

  return (
    <svg
      viewBox="0 0 380 90"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M4 10C90 78 290 78 376 10"
        stroke="#9AA88F"
        strokeWidth="1"
        opacity="0.5"
      />
      {flowers.map((f, i) => (
        <g key={i} transform={`translate(${f.x} ${f.y})`}>
          <circle r="5.5" fill="none" stroke="#EBC8D3" strokeWidth="1" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-6.5"
              rx="2.6"
              ry="4.2"
              fill="none"
              stroke="#EBC8D3"
              strokeWidth="0.8"
              transform={`rotate(${deg})`}
              opacity="0.85"
            />
          ))}
          <circle r="1.6" fill="#C8A26D" opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}
