"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface MetricCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  dark?: boolean;
  className?: string;
}

export function MetricCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  dark = false,
  className = "",
}: MetricCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    const duration = 1800;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, animate]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div
        className="font-display font-extrabold text-[var(--accent-primary)]"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <p
        className={`mt-2 text-[14px] font-medium ${
          dark ? "text-[var(--text-on-dark-secondary)]" : "text-[var(--text-secondary)]"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
