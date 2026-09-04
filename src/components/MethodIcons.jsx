import React from 'react'

// Icônes custom animées pour chaque étape (line-art, stroke = currentColor)
export function StepIcon({ name }) {
  const p = { viewBox: '0 0 120 120', fill: 'none', stroke: 'currentColor', strokeWidth: 4.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'audit': // Cadre de scan + barres + ligne qui balaie
      return (
        <svg {...p} className="micon micon--audit">
          <path d="M26 40 V26 H40" /><path d="M80 26 H94 V40" /><path d="M94 80 V94 H80" /><path d="M40 94 H26 V80" />
          <path d="M46 80 V66" /><path d="M60 80 V52" /><path d="M74 80 V60" />
          <line className="micon__scan" x1="30" y1="60" x2="90" y2="60" strokeWidth="3" />
        </svg>
      )
    case 'install': // Piles serveur + LEDs + signal
      return (
        <svg {...p} className="micon micon--install">
          <rect x="30" y="26" width="60" height="18" rx="5" /><rect x="30" y="51" width="60" height="18" rx="5" /><rect x="30" y="76" width="60" height="18" rx="5" />
          <circle className="micon__led" cx="42" cy="35" r="2.6" fill="currentColor" stroke="none" />
          <circle className="micon__led micon__led--2" cx="42" cy="60" r="2.6" fill="currentColor" stroke="none" />
          <circle className="micon__led micon__led--3" cx="42" cy="85" r="2.6" fill="currentColor" stroke="none" />
          <path d="M72 35 h10" strokeWidth="3" /><path d="M72 60 h10" strokeWidth="3" /><path d="M72 85 h10" strokeWidth="3" />
        </svg>
      )
    case 'scale': // Barres ascendantes + flèche
      return (
        <svg {...p} className="micon micon--scale">
          <path d="M32 92 V74" /><path d="M50 92 V60" /><path d="M68 92 V46" /><path d="M86 92 V32" />
          <path className="micon__arrow" d="M28 82 L92 30" strokeWidth="3.5" /><path className="micon__arrow" d="M74 30 H92 V48" strokeWidth="3.5" />
        </svg>
      )
    case 'report': // Écran + courbe + point pulse
      return (
        <svg {...p} className="micon micon--report">
          <rect x="24" y="30" width="72" height="52" rx="9" />
          <path className="micon__line" d="M34 68 L48 56 L60 63 L72 44 L86 52" strokeWidth="3.5" />
          <circle className="micon__pulse" cx="86" cy="52" r="4" fill="currentColor" stroke="none" />
          <path d="M50 90 H70" strokeWidth="3" />
        </svg>
      )
    default:
      return null
  }
}
