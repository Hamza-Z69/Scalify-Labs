import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../lib/store.jsx'
import { scrollTo } from '../lib/smooth.js'
import { SECTION_IDS } from '../content.js'
import './Mascot.css'

const SIZE = 82

export default function Mascot() {
  const { t, lang } = useStore()
  const wrap = useRef(null)
  const [sec, setSec] = useState('top')
  const [pose, setPose] = useState('idle')   // idle | held | sleep | celebrate
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const [entered, setEntered] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [cookie, setCookie] = useState(false)   // bandeau cookies porté par la mascotte
  const firstBubble = useRef(true)
  const poseRef = useRef('idle'); poseRef.current = pose
  const uiRef = useRef(false); uiRef.current = menu || cookie   // panneau/menu ouvert → on fige le renard

  const P = useRef({
    pos: { x: 0, y: 0 }, prev: { x: 0, y: 0 }, vel: { x: 0, y: 0 },
    home: { x: 0, y: 0 }, ptr: { x: 0, y: 0 }, target: { x: 0, y: 0 },
    held: false, flung: false, settleT: 0, lastActivity: Date.now(), down: null,
  })

  // Physique + suivi
  useEffect(() => {
    const s = P.current
    const follow = window.matchMedia('(hover: hover) and (pointer: fine)').matches  // pas de suivi sur tactile
    const sx = window.innerWidth - SIZE - 22, sy = window.innerHeight - SIZE - 22
    s.pos = { x: sx, y: sy }; s.prev = { x: sx, y: sy }; s.home = { x: sx, y: sy }; s.ptr = { x: sx, y: sy }
    setTimeout(() => setEntered(true), 800)
    let raf
    const loop = () => {
      const w = window.innerWidth, h = window.innerHeight
      const maxX = w - SIZE - 12, maxY = h - SIZE - 20
      if (!s.held && !s.flung) { s.home.x = (follow && !uiRef.current) ? Math.max(12, Math.min(maxX, s.ptr.x - SIZE / 2)) : maxX; s.home.y = maxY }
      s.prev.x = s.pos.x; s.prev.y = s.pos.y
      if (s.held) {
        s.pos.x += (s.target.x - s.pos.x) * 0.5; s.pos.y += (s.target.y - s.pos.y) * 0.5
        s.vel.x = s.pos.x - s.prev.x; s.vel.y = s.pos.y - s.prev.y
      } else if (s.flung) {
        s.vel.y += 0.9; s.pos.x += s.vel.x; s.pos.y += s.vel.y
        if (s.pos.x < 12) { s.pos.x = 12; s.vel.x *= -0.62 }
        if (s.pos.x > maxX) { s.pos.x = maxX; s.vel.x *= -0.62 }
        if (s.pos.y > maxY) { s.pos.y = maxY; s.vel.y *= -0.5; s.vel.x *= 0.86 }
        if (s.pos.y < 8) { s.pos.y = 8; s.vel.y *= -0.5 }
        s.vel.x *= 0.99
        if (Math.abs(s.vel.x) < 0.8 && Math.abs(s.vel.y) < 1.2 && s.pos.y >= maxY - 1) {
          if (!s.settleT) s.settleT = Date.now()
          if (Date.now() - s.settleT > 450) { s.flung = false; s.settleT = 0 }
        } else s.settleT = 0
      } else {
        s.pos.x += (s.home.x - s.pos.x) * 0.06; s.pos.y += (s.home.y - s.pos.y) * 0.06
      }
      const lean = Math.max(-14, Math.min(14, (s.pos.x - s.prev.x) * 1.2))
      const sc = s.held ? 1.1 : 1
      if (wrap.current) wrap.current.style.transform = `translate3d(${s.pos.x}px, ${s.pos.y}px, 0) rotate(${lean}deg) scale(${sc})`
      if (Date.now() - s.lastActivity > 9000 && !s.held && !s.flung && poseRef.current === 'idle') setPose('sleep')
      raf = requestAnimationFrame(loop)
    }
    loop()
    const onMove = (e) => {
      s.ptr = { x: e.clientX, y: e.clientY }; s.lastActivity = Date.now()
      if (poseRef.current === 'sleep') setPose('idle')
      if (s.held && s.down) s.target = { x: e.clientX - s.down.ox, y: e.clientY - s.down.oy }
    }
    window.addEventListener('pointermove', onMove)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', onMove) }
  }, [])

  // Section (pour la bulle)
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting && e.target.id) setSec(e.target.id) }),
      { threshold: 0.5 })
    ;[...SECTION_IDS, 'work'].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const d = firstBubble.current ? 3500 : 0
    firstBubble.current = false
    const o = setTimeout(() => setOpen(true), d)
    const c = setTimeout(() => setOpen(false), d + 4200)
    return () => { clearTimeout(o); clearTimeout(c) }
  }, [sec])

  // Consentement cookies (1re visite) — présenté par la mascotte
  useEffect(() => {
    let stored = null
    try { stored = localStorage.getItem('scalify-consent') } catch (_) {}
    if (!stored) { const tmo = setTimeout(() => setCookie(true), 2200); return () => clearTimeout(tmo) }
  }, [])
  const chooseCookie = (val) => {
    try { localStorage.setItem('scalify-consent', val) } catch (_) {}
    setCookie(false)
    if (val === 'accepted') { setPose('celebrate'); setConfetti(true); setTimeout(() => setConfetti(false), 1400); setTimeout(() => setPose('idle'), 2000) }
    // Hook analytics : charger le tracking ici uniquement si val === 'accepted'
  }

  useEffect(() => {
    const onSent = () => {
      setPose('celebrate'); setConfetti(true)
      setTimeout(() => setConfetti(false), 1600)
      setTimeout(() => setPose('idle'), 2400)
    }
    window.addEventListener('scalify:sent', onSent)
    return () => window.removeEventListener('scalify:sent', onSent)
  }, [])

  // Fermer le menu si on clique ailleurs
  useEffect(() => {
    if (!menu) return
    const onDoc = (e) => { if (!e.target.closest?.('.mascot')) setMenu(false) }
    window.addEventListener('pointerdown', onDoc)
    return () => window.removeEventListener('pointerdown', onDoc)
  }, [menu])

  const onDown = (e) => {
    const s = P.current
    e.currentTarget.setPointerCapture?.(e.pointerId)
    s.down = { ox: e.clientX - s.pos.x, oy: e.clientY - s.pos.y, x: e.clientX, y: e.clientY, t: Date.now() }
    s.target = { x: s.pos.x, y: s.pos.y }; s.held = true; s.flung = false; s.lastActivity = Date.now()
    setPose('held')
  }
  const onUp = (e) => {
    const s = P.current
    if (!s.down) return
    const moved = Math.hypot(e.clientX - s.down.x, e.clientY - s.down.y)
    const dt = Date.now() - s.down.t
    s.held = false
    if (moved < 6 && dt < 300) setMenu((m) => !m)   // clic = ouvre/ferme le menu
    else { s.flung = true; setMenu(false) }
    setPose('idle'); s.down = null
  }

  const line = (t.mascot.lines[sec] || t.mascot.lines.top)
  const goTo = (id) => { setMenu(false); scrollTo('#' + id) }

  return (
    <div className={`mascot ${entered ? 'is-in' : ''}`} ref={wrap}>
      {cookie && (
        <div className="mascot__cookie">
          <div className="mascot__cookie-q">{t.mascot.cookie.q}</div>
          <p className="mascot__cookie-txt">{t.mascot.cookie.txt} <a className="mascot__cookie-link" href="/confidentialite" target="_blank" rel="noopener">{lang === 'en' ? 'Learn more' : 'En savoir plus'}</a></p>
          <div className="mascot__cookie-btns">
            <button className="mascot__cookie-ok" onClick={() => chooseCookie('accepted')}>{t.mascot.cookie.accept}</button>
            <button className="mascot__cookie-no" onClick={() => chooseCookie('refused')}>{t.mascot.cookie.refuse}</button>
          </div>
        </div>
      )}
      {menu && (
        <div className="mascot__menu">
          {[['top', 'Haut'], ['preuve', 'Résultats'], ['secteurs', 'Pour qui'], ['contact', 'Audit gratuit']].map(([id, lb], i) => (
            <button key={id} onClick={() => goTo(id)} className={i === 3 ? 'is-accent' : ''}>{lb} <span>{id === 'top' ? '↑' : '→'}</span></button>
          ))}
          <button className="mascot__menu-ck" onClick={() => { setMenu(false); setCookie(true) }}>{t.mascot.cookie.menu}</button>
        </div>
      )}
      <button className={`mascot__bubble ${open && !menu && !cookie ? 'is-open' : ''}`} onClick={() => scrollTo('#contact')}>{line}</button>

      <button className={`mascot__fox pose-${pose} ${sec === 'work' && pose === 'idle' ? 'is-hint' : ''}`} onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={onUp} aria-label="Mascotte">
        {confetti && <span className="mascot__confetti">{'✦●✦●✦●'.split('').map((c, i) => <i key={i} style={{ '--i': i }}>{c}</i>)}</span>}
        <span className="mascot__zzz">z</span>
        <img className="mascot__img" src="/kurama.png" alt="Mascotte" draggable="false" />
      </button>
    </div>
  )
}
