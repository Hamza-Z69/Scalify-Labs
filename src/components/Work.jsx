import React, { useEffect, useRef } from 'react'
import { useStore } from '../lib/store.jsx'
import { gsap, ScrollTrigger, scrollTo } from '../lib/smooth.js'
import './Work.css'

function WorkCard({ it, i }) {
  const card = useRef(null)
  const vid = useRef(null)
  const poster = it.src.replace('/videos/', '/posters/').replace('.mp4', '.jpg')
  useEffect(() => {
    const el = card.current, v = vid.current
    if (!el || !v) return
    const setSrc = () => { if (!v.getAttribute('src')) { v.setAttribute('src', it.src); v.load?.() } }
    // Précharge la carte AVANT qu'elle n'entre à l'écran (marge horizontale large)
    const pre = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSrc() }, { rootMargin: '200px 1000px', threshold: 0 })
    // Joue uniquement quand la carte est réellement visible
    const play = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSrc(); v.play().catch(() => {}) } else v.pause() }, { threshold: 0.25 })
    pre.observe(el); play.observe(el)
    return () => { pre.disconnect(); play.disconnect() }
  }, [it.src])
  return (
    <article className={`work__card ${it.portrait ? 'work__card--portrait' : ''}`} ref={card} data-cursor="Voir">
      <div className="work__index">{String(i + 1).padStart(2, '0')}</div>
      <div className="work__media"><video ref={vid} muted loop playsInline preload="auto" poster={poster} /><span className="work__scan" /></div>
      <div className="work__meta">
        <span className="work__meta-l">
          <span className="work__label">{it.label}</span>
          {it.tag && <span className="work__tag">{it.tag}</span>}
        </span>
        <span className="work__code">#{it.code}</span>
      </div>
    </article>
  )
}

export default function Work() {
  const { t } = useStore()
  const section = useRef(null)
  const track = useRef(null)
  const bg = useRef(null)
  const [tA, tB] = t.work.title

  // Défilement horizontal pinné — PC ET mobile
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('all', () => {
      const el = track.current
      const dist = () => Math.max(0, el.scrollWidth - window.innerWidth)
      const tw = gsap.to(el, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: { trigger: section.current, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true },
      })
      const bgTw = gsap.to(bg.current, {
        x: () => -dist() * 0.35, ease: 'none',
        scrollTrigger: { trigger: section.current, start: 'top top', end: () => '+=' + dist(), scrub: 1, invalidateOnRefresh: true },
      })
      const onLoad = () => ScrollTrigger.refresh()
      window.addEventListener('load', onLoad)
      const rid = setTimeout(() => ScrollTrigger.refresh(), 600)
      return () => { tw.scrollTrigger?.kill(); tw.kill(); bgTw.scrollTrigger?.kill(); bgTw.kill(); window.removeEventListener('load', onLoad); clearTimeout(rid) }
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="work" className="work" ref={section}>
      <div className="work__bg" ref={bg} aria-hidden>
        {['WORK', 'WORK', 'WORK'].map((w, r) => (
          <div className="work__bg-line" key={r}>{`${w} ${w} ${w} ${w} ${w} ${w}`}</div>
        ))}
      </div>

      <div className="work__viewport">
        <div className="work__track" ref={track}>
          <div className="work__intro">
            <div className="kicker">{t.work.kicker}</div>
            <h2 className="work__title display">{tA}<br /><em className="serif-italic accent">{tB}</em></h2>
            <p className="work__sub">{t.work.sub}</p>
          </div>

          {t.work.items.map((it, i) => <WorkCard key={i} it={it} i={i} />)}

          <div className="work__outro">
            <p className="display">{tA} <em className="serif-italic accent">{tB}</em></p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="btn btn--primary" data-cursor>
              {t.nav.cta} <span className="btn__arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
