import React from 'react'

export function PlatformLogo({ name, size = 18 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' }
  switch (name) {
    case 'instagram':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
      )
    case 'facebook':
      return (
        <svg {...p}>
          <path d="M14 8.5V7c0-.8.4-1.2 1.3-1.2H17V3h-2.4C12 3 11 4.5 11 6.7v1.8H9V11h2v10h3V11h2.2l.4-2.5H14z" fill="currentColor" />
        </svg>
      )
    case 'google':
      return (
        <svg {...p} viewBox="0 0 24 24">
          <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1S8.7 6 12 6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.5 14.6 2.6 12 2.6 6.9 2.6 2.8 6.7 2.8 11.9S6.9 21.2 12 21.2c5.5 0 9.1-3.9 9.1-9.3 0-.6-.06-1.1-.15-1.6H12z" />
        </svg>
      )
    case 'tiktok':
      return (
        <svg {...p}>
          <path d="M15 3c.3 2 1.6 3.4 3.6 3.6V9c-1.3.1-2.5-.3-3.6-1v6.2c0 3-2.1 5.1-4.9 5.1-2.6 0-4.6-2-4.6-4.6 0-2.7 2.2-4.7 5-4.4v2.6c-.4-.1-.8-.2-1.2-.1-1 .1-1.8.9-1.7 2 .1 1 .9 1.7 1.9 1.7 1.1 0 1.9-.8 1.9-2.2V3H15z" fill="currentColor" />
        </svg>
      )
    default:
      return null
  }
}

const strokeIcon = (paths, size = 22) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
)

export function ServiceIcon({ name }) {
  switch (name) {
    case 'acq': return strokeIcon(<><path d="M3 17l5-5 4 3 6-8" /><path d="M14 4h5v5" /></>)
    case 'data': return strokeIcon(<><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>)
    case 'strat': return strokeIcon(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" /></>)
    default: return null
  }
}

export function DevIcon({ name }) {
  switch (name) {
    case 'site': return strokeIcon(<><rect x="3" y="4" width="18" height="15" rx="2" /><path d="M3 8h18" /></>, 18)
    case 'app': return strokeIcon(<><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>, 18)
    case 'crm': return strokeIcon(<><path d="M4 19V9m5 10V5m5 14v-7m5 7V8" /></>, 18)
    default: return null
  }
}

export function StepArrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
