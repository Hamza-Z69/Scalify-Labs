/**
 * SCALIFY LABS — Full wordmark rendered as styled text.
 * Matches the logo identity: bold condensed, cream text, orange "i".
 * Can be used at any scale via the `size` prop.
 */

interface LogoWordmarkProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  showTagline?: boolean;
}

const sizeMap = {
  sm: { main: "text-[1.8rem]", tagline: "text-[0.55rem]", gap: "mt-1", tracking: "tracking-[0.15em]" },
  md: { main: "text-[2.8rem]", tagline: "text-[0.7rem]", gap: "mt-1.5", tracking: "tracking-[0.15em]" },
  lg: { main: "text-[4.5rem]", tagline: "text-[0.9rem]", gap: "mt-2", tracking: "tracking-[0.18em]" },
  xl: { main: "text-[6rem]", tagline: "text-[1rem]", gap: "mt-2", tracking: "tracking-[0.2em]" },
  hero: { main: "text-[clamp(4rem,10vw,9rem)]", tagline: "text-[clamp(0.7rem,1.2vw,1.1rem)]", gap: "mt-3", tracking: "tracking-[0.22em]" },
};

export function LogoWordmark({ size = "md", className = "", showTagline = true }: LogoWordmarkProps) {
  const s = sizeMap[size];

  return (
    <div className={`select-none ${className}`}>
      {/* SCALIFY */}
      <div
        className={`font-display font-extrabold leading-[0.85] ${s.main}`}
        style={{ color: "var(--text-on-dark)" }}
      >
        <span>SCAL</span>
        <span style={{ color: "var(--accent-primary)" }}>i</span>
        <span>FY</span>
      </div>
      {/* LABS */}
      <div
        className={`font-display font-extrabold leading-[0.85] ${s.main}`}
        style={{ color: "var(--text-on-dark)" }}
      >
        LABS
      </div>
      {/* Tagline */}
      {showTagline && (
        <div
          className={`font-semibold uppercase ${s.gap} ${s.tagline} ${s.tracking}`}
          style={{ color: "var(--accent-primary)" }}
        >
          Franchise Growth Agency
        </div>
      )}
    </div>
  );
}
