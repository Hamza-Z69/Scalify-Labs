import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../lib/store.jsx'
import { gsap, ScrollTrigger } from '../lib/smooth.js'
import MeshCanvas from '../webgl/MeshCanvas.jsx'
import LogoMarquee from './LogoMarquee.jsx'
import './Intro.css'

const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/#<>*·'

// Mot rotatif avec effet de décodage (scramble façon terminal)
function ScrambleWord({ words, className }) {
  const [i, setI] = useState(0)
  const [display, setDisplay] = useState(words[0])
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 3200)
    return () => clearInterval(id)
  }, [words.length])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDisplay(words[i]); return }
    const target = words[i]
    const dur = 620
    const start = performance.now()
    let raf
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / dur)
      const settled = Math.floor(t * target.length)
      let s = ''
      for (let k = 0; k < target.length; k++) {
        s += k < settled ? target[k] : (target[k] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])
      }
      setDisplay(s)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setDisplay(target)
    }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [i, words])
  return <span className={`intro__scramble ${className || ''}`}>{display}</span>
}

export default function Intro() {
  const { t } = useStore()
  const root = useRef(null)
  const marquee = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const st = el.querySelector('.intro__statement')
      if (!reduce) {
        gsap.set(st, { y: 40, opacity: 0 })
        ScrollTrigger.create({
          trigger: st, start: 'top 74%', once: true,
          onEnter: () => { gsap.to(st, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }); el.classList.add('is-in') },
        })
      } else { el.classList.add('is-in') }
    }, el)
    return () => ctx.revert()
  }, [t])

  return (
    <section id="presentation" className="intro" ref={root}>
      <MeshCanvas intensity={0.7} bgVar="--bg" lineVar="--accent" />
      <div className="intro__veil" />

      <div className="intro__logos intro__logos--top"><LogoMarquee /></div>

      <div className="intro__inner wrap">
        <div className="intro__label"><span className="intro__label-dot" />{t.intro.label}</div>
        <p className="intro__statement">
          {t.hero.sub_pre}
          <ScrambleWord words={t.hero.rotating} className="accent" />
          {t.hero.sub_post}
          <span className="intro__ul">{t.hero.sub_accent}</span>
        </p>
      </div>

      <div className="intro__bigtype" aria-hidden>
        <div className="intro__bigtype-track" ref={marquee}>
          {[...t.intro.bigWords, ...t.intro.bigWords].map((w, i) => (
            <span className="intro__bigword" key={i}>{w}<span className="intro__star">✦</span></span>
          ))}
        </div>
      </div>

    </section>
  )
}
