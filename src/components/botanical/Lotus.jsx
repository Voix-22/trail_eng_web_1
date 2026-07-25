/**
 * A hand-drawn line-art lotus, built from layered petal paths so it reads
 * as sketched rather than clip-art. Used sparingly as the invitation's
 * signature motif (hero, dividers, footer).
 */
export default function Lotus({ className = "", strokeColor = "#C8A26D" }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer petals */}
      <path
        d="M100 140C100 140 40 120 40 75C40 50 65 35 100 60C135 35 160 50 160 75C160 120 100 140 100 140Z"
        stroke={strokeColor}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Left mid petal */}
      <path
        d="M100 138C100 138 62 110 68 78C71 60 90 55 100 78"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Right mid petal */}
      <path
        d="M100 138C100 138 138 110 132 78C129 60 110 55 100 78"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Center petal */}
      <path
        d="M100 130C100 130 85 100 100 65C115 100 100 130 100 130Z"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Base leaves / sepals */}
      <path
        d="M60 132C75 145 125 145 140 132"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M50 140C75 155 125 155 150 140"
        stroke={strokeColor}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
