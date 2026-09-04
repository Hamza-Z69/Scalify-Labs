import React, { useEffect, useRef } from 'react'
import { useStore } from '../lib/store.jsx'
import { useReveal } from '../lib/anim.js'
import './Clients.css'

function Reel({ it }) {
  const wrap = useRef(null)
  const vid = useRef(null)
  useEffect(() => {
    const el = wrap.current, v = vid.current
    if (!el || !v) return
    v.play().catch(() => {})
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {}); else v.pause()
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <article className="reel" ref={wrap}>
      <div className="reel__media"><video ref={vid} src={it.src} muted loop playsInline autoPlay preload="metadata" /></div>
      <div className="reel__info">
        <span className="reel__metric">{it.metric}</span>
        <span className="reel__sector">{it.sector}</span>
      </div>
    </article>
  )
}

export default function Clients() {
  const { t } = useStore()
  const head = useReveal({ y: 34 })
  const rowAEl = useRef(null)
  const rowBEl = useRef(null)
  const items = t.clients.items
  const half = Math.ceil(items.length / 2)
  const rowA = items.slice(0, half)
  const rowB = items.slice(half)

  // Mobile : marquee en transform + drag horizontal (touch-action pan-y => le
  // scroll vertical de la page n'est jamais bloqué). L'auto reprend après le geste.
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return
    const wrap = (o, h) => { if (h <= 0) return o; while (o <= -h) o += h; while (o > 0) o -= h; return o }
    // dir < 0 : dérive vers la gauche (offset 0 -> -h) ; dir > 0 : vers la droite (-h -> 0)
    const rows = [{ el: rowAEl.current, dir: -1 }, { el: rowBEl.current, dir: 1 }]
      .filter((r) => r.el).map((r) => ({ ...r, offset: r.dir > 0 ? null : 0, drag: false, lastX: 0, paused: false, resumeT: 0 }))
    const cleanups = []
    rows.forEach((s) => {
      s.el.classList.add('is-manual')
      const half = () => s.el.scrollWidth / 2
      const apply = () => { s.el.style.transform = `translateX(${s.offset}px)` }
      const down = (e) => { s.drag = true; s.paused = true; clearTimeout(s.resumeT); s.lastX = e.clientX; try { s.el.setPointerCapture(e.pointerId) } catch (_) {} }
      const move = (e) => { if (!s.drag) return; const h = half(); s.offset = wrap((s.offset ?? 0) + (e.clientX - s.lastX), h); s.lastX = e.clientX; apply() }
      const up = (e) => { if (!s.drag) return; s.drag = false; try { s.el.releasePointerCapture(e.pointerId) } catch (_) {}; clearTimeout(s.resumeT); s.resumeT = setTimeout(() => { s.paused = false }, 1400) }
      s.el.addEventListener('pointerdown', down)
      s.el.addEventListener('pointermove', move)
      s.el.addEventListener('pointerup', up)
      s.el.addEventListener('pointercancel', up)
      cleanups.push(() => {
        s.el.removeEventListener('pointerdown', down); s.el.removeEventListener('pointermove', move)
        s.el.removeEventListener('pointerup', up); s.el.removeEventListener('pointercancel', up)
        s.el.classList.remove('is-manual'); s.el.style.transform = ''
      })
    })
    const SPEED = 0.5
    let raf
    const loop = () => {
      rows.forEach((s) => {
        const h = s.el.scrollWidth / 2
        if (h > 1) {
          if (s.offset === null) s.offset = -h
          if (!s.paused && !s.drag) { s.offset = wrap(s.offset + s.dir * SPEED, h); s.el.style.transform = `translateX(${s.offset}px)` }
        }
      })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); cleanups.forEach((c) => c()) }
  }, [])

  return (
    <section id="clients" className="clients">
      <div className="clients__head wrap" ref={head}>
        <div className="kicker" data-reveal>{t.clients.kicker}</div>
        <h2 className="clients__title display" data-reveal>
          {t.clients.title[0]} <em className="serif-italic accent">{t.clients.title[1]}</em>
        </h2>
        <p className="clients__sub" data-reveal>{t.clients.sub}</p>
      </div>

      <div className="reelwall">
        <div className="reelrow reelrow--l" ref={rowAEl}>
          {[...rowA, ...rowA].map((it, i) => <Reel key={'a' + i} it={it} />)}
        </div>
        <div className="reelrow reelrow--r" ref={rowBEl}>
          {[...rowB, ...rowB].map((it, i) => <Reel key={'b' + i} it={it} />)}
        </div>
      </div>
    </section>
  )
}
