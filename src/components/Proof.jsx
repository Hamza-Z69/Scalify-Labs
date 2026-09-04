import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../lib/store.jsx'
import { gsap, ScrollTrigger, scrollTo } from '../lib/smooth.js'
import './Proof.css'

const META = [
  { m: 'BUDGET', tag: 'piloté · 2025', hi: false },
  { m: 'ROAS', tag: 'médian · 90 j', hi: true },
  { m: 'CPA', tag: 'comptes repris', hi: false },
]

// Chiffre qui « scramble » à toute vitesse puis se verrouille
function Scramble({ value, run }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const chars = value.split('')
    const digitPos = chars.map((c, i) => (/\d/.test(c) ? i : -1)).filter(i => i >= 0)
    const zeros = chars.map(c => (/\d/.test(c) ? '0' : c)).join('')
    if (!run) { el.textContent = zeros; return }
    if (reduce || !digitPos.length) { el.textContent = value; return }
    el.textContent = zeros
    const STEP = 42, DUR = 850
    let elapsed = 0
    const iv = setInterval(() => {
      elapsed += STEP
      const p = Math.min(1, elapsed / DUR)
      const locked = Math.floor(p * digitPos.length)
      el.textContent = chars.map((c, i) => {
        if (!/\d/.test(c)) return c
        const rank = digitPos.indexOf(i)
        if (rank < locked || p >= 1) return value[i]
        return String(Math.floor(Math.random() * 10))
      }).join('')
      if (p >= 1) { clearInterval(iv); el.textContent = value }
    }, STEP)
    return () => clearInterval(iv)
  }, [run, value])
  return <span ref={ref}>{value}</span>
}

function NumberPanel({ m, meta, i, total }) {
  const ref = useRef(null)
  const [run, setRun] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); io.disconnect() } }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div className={`proof__panel ${meta.hi ? 'is-hi' : ''}`} ref={ref}>
      <span className="proof__ghost" aria-hidden>0{i + 1}</span>
      <span className="proof__idx mono">0{i + 1} — 0{total}</span>
      <div className="proof__num display"><Scramble value={m.big} run={run} /></div>
      <p className="proof__label">{m.label}</p>
      <div className="proof__metaline mono"><span className="proof__dot" />{meta.m} · {meta.tag}</div>
    </div>
  )
}

export default function Proof() {
  const { t } = useStore()
  const section = useRef(null)
  const track = useRef(null)
  const bg = useRef(null)
  const rail = useRef(null)
  const items = t.proof.items

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('all', () => {
      const el = track.current
      const dist = () => Math.max(0, el.scrollWidth - window.innerWidth)
      const tw = gsap.to(el, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: {
          trigger: section.current, start: 'top top', end: () => '+=' + dist(),
          pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: (self) => { if (rail.current) rail.current.style.transform = `scaleX(${self.progress})` },
        },
      })
      const bgTw = gsap.to(bg.current, {
        x: () => -dist() * 0.4, ease: 'none',
        scrollTrigger: { trigger: section.current, start: 'top top', end: () => '+=' + dist(), scrub: 1, invalidateOnRefresh: true },
      })
      const rid = setTimeout(() => ScrollTrigger.refresh(), 600)
      return () => { tw.scrollTrigger?.kill(); tw.kill(); bgTw.scrollTrigger?.kill(); bgTw.kill(); clearTimeout(rid) }
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="preuve" className="proof proof--h section--cream" ref={section}>
      <div className="proof__bg" ref={bg} aria-hidden>
        <div className="proof__bg-inner">
          <div className="proof__bg-sym">×&nbsp;&nbsp;€&nbsp;&nbsp;%&nbsp;&nbsp;×&nbsp;&nbsp;€&nbsp;&nbsp;%&nbsp;&nbsp;×&nbsp;&nbsp;€&nbsp;&nbsp;%&nbsp;&nbsp;×&nbsp;&nbsp;€&nbsp;&nbsp;%</div>
          <div className="proof__bg-word">RENTABLE&nbsp;&nbsp;RENTABLE&nbsp;&nbsp;RENTABLE</div>
          <div className="proof__bg-sym alt">€&nbsp;&nbsp;%&nbsp;&nbsp;×&nbsp;&nbsp;€&nbsp;&nbsp;%&nbsp;&nbsp;×&nbsp;&nbsp;€&nbsp;&nbsp;%&nbsp;&nbsp;×&nbsp;&nbsp;€&nbsp;&nbsp;%&nbsp;&nbsp;×</div>
          <div className="proof__bg-word out">RENTABLE&nbsp;&nbsp;RENTABLE&nbsp;&nbsp;RENTABLE</div>
        </div>
      </div>

      <div className="proof__viewport">
        <div className="proof__track" ref={track}>
          <div className="proof__intro">
            <div className="kicker">{t.proof.kicker}</div>
            <h2 className="proof__title display">Les chiffres<br /><em className="serif-italic accent">parlent.</em></h2>
            <p className="proof__introsub">Pas de promesses — des résultats mesurés, vérifiables, sur comptes réels.</p>
          </div>

          {items.map((m, i) => (
            <NumberPanel key={i} m={m} meta={META[i] || META[0]} i={i} total={items.length} />
          ))}

          <div className="proof__outro">
            <p className="display">Vos chiffres,<br /><em className="serif-italic accent">les prochains.</em></p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="btn btn--primary" data-cursor>
              {t.nav.cta} <span className="btn__arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="proof__railwrap" aria-hidden><span className="proof__rail" ref={rail} /></div>
    </section>
  )
}
