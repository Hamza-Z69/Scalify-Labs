"use client";

import { useState, useMemo } from "react";

const sectors = [
  { label: "Restauration", cpl: 55 },
  { label: "Retail", cpl: 65 },
  { label: "Services", cpl: 45 },
  { label: "Beauté", cpl: 50 },
  { label: "Éducation", cpl: 60 },
];

const inputClasses =
  "w-full rounded-[10px] border px-4 py-3 text-sm outline-none transition-colors duration-200";

const inputStyle: React.CSSProperties = {
  background: "rgba(232,134,42,0.04)",
  borderColor: "rgba(232,134,42,0.10)",
  color: "#f0ece5",
};

const focusBorder = "rgba(232,134,42,0.30)";
const restBorder = "rgba(232,134,42,0.10)";

const selectChevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(240,236,229,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`;

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  return (
    <span
      style={{
        transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
        display: "inline-block",
      }}
    >
      {Math.round(value).toLocaleString("fr-FR")}
      {suffix && <span className="text-[0.55em] ml-1">{suffix}</span>}
    </span>
  );
}

export function RoiSimulator() {
  const [budget, setBudget] = useState(15000);
  const [sectorIndex, setSectorIndex] = useState(0);

  const results = useMemo(() => {
    const cpl = sectors[sectorIndex].cpl;
    const leads = Math.round(budget / cpl);
    const qualified = Math.round(leads * 0.35);
    const costPerQualified = qualified > 0 ? Math.round(budget / qualified) : 0;
    return { leads, qualified, costPerQualified };
  }, [budget, sectorIndex]);

  return (
    <div className="g-card p-8 md:p-10">
      <h2
        className="font-serif text-[clamp(1.3rem,3vw,1.75rem)] font-bold text-center"
        style={{ color: "#f0ece5" }}
      >
        Estimez votre potentiel
      </h2>
      <p className="g-text text-center text-sm mt-2 mb-8">
        Simulez vos résultats selon votre budget et votre secteur.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Budget slider */}
        <div>
          <label
            className="block text-[11px] font-semibold uppercase tracking-[0.08em] mb-2"
            style={{ color: "rgba(240,236,229,0.55)" }}
          >
            Budget publicitaire mensuel
          </label>
          <input
            type="range"
            min={5000}
            max={100000}
            step={5000}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="roi-slider w-full"
          />
          <div
            className="mt-2 text-center font-serif text-lg font-bold"
            style={{ color: "#E8862A" }}
          >
            {budget.toLocaleString("fr-FR")} MAD
          </div>
        </div>

        {/* Sector select */}
        <div>
          <label
            className="block text-[11px] font-semibold uppercase tracking-[0.08em] mb-2"
            style={{ color: "rgba(240,236,229,0.55)" }}
          >
            Secteur d&apos;activité
          </label>
          <select
            value={sectorIndex}
            onChange={(e) => setSectorIndex(Number(e.target.value))}
            className={inputClasses}
            style={{
              ...inputStyle,
              appearance: "none",
              backgroundImage: selectChevron,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
              paddingRight: "40px",
              colorScheme: "dark",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = focusBorder; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = restBorder; }}
          >
            {sectors.map((s, i) => (
              <option
                key={s.label}
                value={i}
                style={{ background: "#1a1510", color: "#f0ece5" }}
              >
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="g-card p-6 text-center">
          <div className="g-kpi font-serif text-[clamp(1.75rem,3.5vw,2.5rem)]">
            <AnimatedNumber value={results.leads} />
          </div>
          <p className="g-text-muted mt-2 text-[11px] tracking-wider uppercase font-semibold">
            Leads estimés/mois
          </p>
        </div>
        <div className="g-card p-6 text-center">
          <div className="g-kpi font-serif text-[clamp(1.75rem,3.5vw,2.5rem)]">
            <AnimatedNumber value={results.qualified} />
          </div>
          <p className="g-text-muted mt-2 text-[11px] tracking-wider uppercase font-semibold">
            Candidats qualifiés
          </p>
        </div>
        <div className="g-card p-6 text-center">
          <div className="g-kpi font-serif text-[clamp(1.75rem,3.5vw,2.5rem)]">
            <AnimatedNumber value={results.costPerQualified} suffix="MAD" />
          </div>
          <p className="g-text-muted mt-2 text-[11px] tracking-wider uppercase font-semibold">
            Coût par qualifié
          </p>
        </div>
      </div>

      <p className="g-text-muted text-center text-xs mt-6">
        Estimations basées sur nos benchmarks sectoriels — résultats réels variables.
      </p>

      {/* Slider styles */}
      <style>{`
        .roi-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 2px;
          background: rgba(232,134,42,0.15);
          outline: none;
          cursor: pointer;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #E8862A;
          cursor: pointer;
          box-shadow: 0 0 12px rgba(232,134,42,0.4);
          transition: box-shadow 0.2s ease;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 20px rgba(232,134,42,0.6);
        }
        .roi-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #E8862A;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 12px rgba(232,134,42,0.4);
        }
      `}</style>
    </div>
  );
}
