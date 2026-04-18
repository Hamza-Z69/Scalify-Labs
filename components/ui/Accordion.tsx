"use client";

import { useState, useId } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-5 shrink-0">
      <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[var(--text-primary)] -translate-y-1/2 transition-transform duration-300" />
      <span
        className={`absolute top-1/2 left-0 w-full h-[2px] bg-[var(--text-primary)] -translate-y-1/2 transition-all duration-300 ${
          open ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
        }`}
      />
    </div>
  );
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const headingId = `${baseId}-heading-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div key={i} className="border-b border-[var(--border-default)]">
            <button
              id={headingId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-[16px] md:text-[18px] font-semibold text-[var(--text-primary)]">
                {item.question}
              </span>
              <PlusMinusIcon open={isOpen} />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className="grid transition-all duration-300"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transitionTimingFunction: "var(--ease-out-expo)",
              }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-[var(--text-secondary)] leading-relaxed pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
