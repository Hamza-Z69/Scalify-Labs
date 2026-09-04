import React, { useEffect, useRef } from 'react'
import { useStore } from '../lib/store.jsx'
import { gsap, scrollTo } from '../lib/smooth.js'
import { useMagnetic } from '../lib/anim.js'
import HeroCanvas from '../webgl/HeroCanvas.jsx'
import LogoMarquee from './LogoMarquee.jsx'
import './Hero.css'

export default function Hero({ start = true }) {
  const { t, theme } = useStore()
  const root = useRef(null)
  const ctaA = useMagnetic(0.3)
  const ctaB = useMagnetic(0.3)

  // Intro cinétique — déclenchée une fois, à la fin du loader
  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = el.querySelectorAll('[data-hline] > span')
    const items = el.querySelectorAll('[data-hfade]')
    const ctx = gsap.context(() => {
      if (reduce) { gsap.set([lines, items], { y: 0, opacity: 1, yPercent: 0 }); return }
      gsap.set(lines, { yPercent: 115 })
      gsap.set(items, { y: 24, opacity: 0 })
      if (!start) return
      const tl = gsap.timeline({ delay: 0.15 })
      tl.to(lines, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12 })
        .to(items, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12 }, '-=0.6')
    }, el)
    return () => ctx.revert()
  }, [start])

  const [pre, accentWord, post] = t.hero.title

  return (
    <section id="top" className="hero" ref={root}>
      <HeroCanvas theme={theme} />
      <div className="hero__veil" />

      <div className="hero__inner wrap">
        <h1 className="hero__title display">
          <span className="line-mask" data-hline><span>{pre}</span></span>
          <span className="line-mask" data-hline>
            <span><em className="serif-italic accent">{accentWord}</em> {post}</span>
          </span>
        </h1>

        <div className="hero__cta" data-hfade>
          <a ref={ctaA} href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="btn btn--primary" data-cursor>
            {t.hero.cta_primary} <span className="btn__arrow">→</span>
          </a>
          <a ref={ctaB} href="#methode" onClick={(e) => { e.preventDefault(); scrollTo('#methode') }} className="btn btn--ghost" data-cursor>
            {t.hero.cta_secondary}
          </a>
        </div>

        <div className="hero__avail" data-hfade>{t.hero.availability}</div>
      </div>

      <div className="hero__logos" data-hfade>
        <LogoMarquee />
      </div>
    </section>
  )
}
