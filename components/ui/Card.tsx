interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  dark?: boolean;
}

export function Card({
  children,
  className = "",
  hoverable = true,
  dark = false,
}: CardProps) {
  const base = dark
    ? "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]"
    : "bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]";

  const hover = hoverable
    ? dark
      ? "hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.08)]"
      : "hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5"
    : "";

  return (
    <div
      className={`rounded-[var(--radius-lg)] p-8 transition-all duration-300 ${base} ${hover} ${className}`}
    >
      {children}
    </div>
  );
}
