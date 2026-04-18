type BadgeVariant = "orange" | "dark" | "outline" | "blue";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  pulse?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  orange:
    "bg-[var(--accent-primary-light)] text-[var(--accent-primary)]",
  dark:
    "bg-[var(--bg-dark)] text-[var(--text-on-dark)]",
  outline:
    "bg-transparent border border-[var(--border-default)] text-[var(--text-secondary)]",
  blue:
    "bg-[var(--accent-primary-light)] text-[var(--accent-primary)]",
};

export function Badge({
  children,
  variant = "orange",
  pulse = false,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] ${
        variantStyles[variant]
      } ${className}`}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-current opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
