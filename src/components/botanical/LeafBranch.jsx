/**
 * A single sketched branch with alternating leaves, used as corner
 * ornaments and section-divider flourishes. Flip/rotate via className.
 */
export default function LeafBranch({ className = "", strokeColor = "#9AA88F" }) {
  return (
    <svg
      viewBox="0 0 180 90"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 86C40 60 70 50 176 6"
        stroke={strokeColor}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {[
        { x: 30, y: 74, r: -20 },
        { x: 55, y: 62, r: -15 },
        { x: 82, y: 46, r: -10 },
        { x: 110, y: 32, r: -5 },
        { x: 138, y: 20, r: 2 },
      ].map((leaf, i) => (
        <g key={i} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`}>
          <path
            d="M0 0C6 -10 6 -20 0 -26C-6 -20 -6 -10 0 0Z"
            stroke={strokeColor}
            strokeWidth="1"
            opacity={0.75}
          />
          <path d="M0 -2V-24" stroke={strokeColor} strokeWidth="0.6" opacity={0.6} />
        </g>
      ))}
    </svg>
  );
}
