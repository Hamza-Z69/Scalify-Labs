export function ScalifyLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Scalify Labs — Digital Growth Agency"
    >
      {/* SCALIFY — bold condensed */}
      <text
        x="220" y="72"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', 'Arial Black', 'Helvetica Neue', sans-serif"
        fontWeight="900"
        fontSize="82"
        letterSpacing="-2"
        fill="#E8DCC8"
      >
        <tspan>SCAL</tspan>
        <tspan fill="#E8862A">i</tspan>
        <tspan>FY</tspan>
      </text>

      {/* LABS */}
      <text
        x="220" y="140"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', 'Arial Black', 'Helvetica Neue', sans-serif"
        fontWeight="900"
        fontSize="82"
        letterSpacing="-2"
        fill="#E8DCC8"
      >
        LABS
      </text>

      {/* DIGITAL GROWTH AGENCY */}
      <text
        x="220" y="170"
        textAnchor="middle"
        fontFamily="'DM Sans', 'Inter', sans-serif"
        fontWeight="600"
        fontSize="11.5"
        letterSpacing="5"
        fill="#E8862A"
      >
        DIGITAL GROWTH AGENCY
      </text>
    </svg>
  );
}
