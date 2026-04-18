interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`text-[var(--accent-primary)] ${className}`}>
      {children}
    </span>
  );
}
