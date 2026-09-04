import React, { useEffect, useRef } from 'react'
import { useStore } from '../lib/store.jsx'
import { gsap, ScrollTrigger, scrollTo } from '../lib/smooth.js'
import { useMagnetic } from '../lib/anim.js'
import './HeroTunnel.css'

export default function HeroTunnel({ start = true }) {
  const { t } = useStore()
  const root = useRef(null)
  const plane = useRef(null)
  const ctaA = useMagnetic(0.3)
  const ctaB = useMagnetic(0.3)

  const [pre, accentWord, post] = t.hero.title
  const words = [...pre.split(' '), accentWord, ...post.split(' ')]
  const accentIdx = pre.split(' ').length

  // Rayons depuis le point de fuite
  const rays = Array.from({ length: 44 }, (_, i) => {
    const a = (i / 44) * Math.PI * 2
    return { x2: 500 + Math.cos(a) * 900, y2: 340 + Math.sin(a) * 900 }
  })

  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = el.querySelectorAll('.htun__line')
    const items = el.querySelectorAll('[data-hfade]')
    const ctx = gsap.context(() => {
      if (reduce) { gsap.set([lines, items], { opacity: 1, y: 0 }); return }
      gsap.set(lines, { opacity: 0, yPercent: 40 })
      gsap.set(items, { opacity: 0, y: 24 })
      if (!start) return
      const tl = gsap.timeline({ delay: 0.15 })
      tl.to(lines, { opacity: 1, yPercent: 0, duration: 1, ease: 'power3.out', stagger: 0.08 })
        .to(items, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }, '-=0.5')
    }, el)
    return () => ctx.revert()
  }, [start])

  // Le scroll fait défiler le titre du haut (VOTRE) vers le bas (RENTABLE)
  useEffect(() => {
    const mm = gsap.matchMedia()
    const build = (from, to, end) => () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end, pin: true, scrub: 0.5, anticipatePin: 1 },
      })
      tl.fromTo(plane.current, { '--ty': from }, { '--ty': to, ease: 'none', duration: 1 })
      return () => { tl.scrollTrigger?.kill(); tl.kill() }
    }
    mm.add('(min-width: 641px)', build(300, -320, '+=200%'))
    mm.add('(max-width: 640px)', build(10, -280, '+=150%'))
    return () => mm.revert()
  }, [])

  return (
    <section id="top" className="htun" ref={root}>
      <div className="htun__glow" />
      <svg className="htun__rays" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {rays.map((r, i) => <line key={i} x1="500" y1="340" x2={r.x2} y2={r.y2} stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.18" />)}
      </svg>

      <div className="htun__stage">
        <div className="htun__tilt">
          <div className="htun__plane" ref={plane}>
            {words.map((w, i) => (
              <div key={i} className={`htun__line ${i === accentIdx ? 'accent' : ''}`}>{w}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="htun__veil" />

      <div className="htun__bottom">
        <div className="htun__cta" data-hfade>
          <a ref={ctaA} href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="btn btn--primary" data-cursor>
            {t.hero.cta_primary} <span className="btn__arrow">→</span>
          </a>
          <a ref={ctaB} href="#methode" onClick={(e) => { e.preventDefault(); scrollTo('#methode') }} className="btn btn--ghost" data-cursor>
            {t.hero.cta_secondary}
          </a>
        </div>
        <div className="htun__avail" data-hfade>{t.hero.availability}</div>
      </div>
    </section>
  )
}
