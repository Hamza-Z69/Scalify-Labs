"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "default" | "large" | "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent-primary)] text-white rounded-full hover:bg-[var(--accent-primary-hover)]",
  secondary:
    "border-2 border-[var(--text-primary)] text-[var(--text-primary)] bg-transparent rounded-full hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]",
  ghost:
    "text-[var(--accent-primary)] bg-transparent border-none hover:text-[var(--accent-primary-hover)] gap-2 group",
};

const sizeStyles: Record<string, string> = {
  default: "px-6 py-2.5 text-[14px]",
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-2.5 text-[14px]",
  large: "px-8 py-3.5 text-[16px]",
  lg: "px-8 py-3.5 text-[16px]",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${
    variant === "ghost" ? "" : sizeStyles[size]
  } ${className}`;

  const content =
    variant === "ghost" ? (
      <>
        {children}
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
