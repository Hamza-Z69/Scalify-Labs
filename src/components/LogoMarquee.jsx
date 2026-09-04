import React from 'react'
import { BRANDS, BrandLogo } from './brandLogos.jsx'
import './LogoMarquee.css'

export default function LogoMarquee({ reverse = false }) {
  const doubled = [...BRANDS, ...BRANDS]
  return (
    <div className="logomarq" aria-hidden>
      <div className={`logomarq__track ${reverse ? 'is-rev' : ''}`}>
        {doubled.map((b, i) => (
          <span className="logomarq__item" key={i}>
            <BrandLogo path={b.path} size={22} />
            <span className="logomarq__name">{b.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
