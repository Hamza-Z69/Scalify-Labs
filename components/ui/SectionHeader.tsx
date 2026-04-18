interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2
        className={`font-display font-bold ${
          dark ? "text-[var(--text-on-dark)]" : "text-[var(--text-primary)]"
        }`}
        style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-tight)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 leading-relaxed ${
            dark ? "text-[var(--text-on-dark-secondary)]" : "text-[var(--text-secondary)]"
          } ${centered ? "mx-auto" : ""}`}
          style={{ maxWidth: "600px", fontSize: "var(--text-body-lg)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
