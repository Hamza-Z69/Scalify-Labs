import React, { useEffect, useState } from 'react'
import { useStore } from '../lib/store.jsx'
import { useReveal, useMagnetic } from '../lib/anim.js'
import { RotatingWord } from './bits.jsx'
import { scrollTo } from '../lib/smooth.js'
import MeshCanvas from '../webgl/MeshCanvas.jsx'
import './Sectors.css'

function SectorCard({ it, idx }) {
  const onMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    el.style.transform = `perspective(700px) rotateX(${(0.5 - py) * 6}deg) rotateY(${(px - 0.5) * 6}deg) translateY(-4px)`
  }
  const onLeave = (e) => { e.currentTarget.style.transform = '' }
  return (
    <div className="sec__card" onMouseMove={onMove} onMouseLeave={onLeave} data-cursor>
      <span className="sec__card-glow" />
      <span className="sec__card-idx">{String(idx + 1).padStart(2, '0')}</span>
      <span className="sec__card-name display">{it.name}</span>
      <span className="sec__card-desc">{it.desc}</span>
    </div>
  )
}

function Row({ items, start, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className="sec__row">
      <div className={`sec__row-track ${reverse ? 'is-rev' : ''}`}>
        {doubled.map((it, i) => (
          <SectorCard it={it} idx={start + (i % items.length)} key={i} />
        ))}
      </div>
    </div>
  )
}

export default function Sectors() {
  const { t } = useStore()
  const ref = useReveal({ y: 32, stagger: 0.1 })
  const cta = useMagnetic(0.3)
  const [ni, setNi] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setNi((n) => (n + 1) % t.sectors.niches.length), 2200)
    return () => clearInterval(id)
  }, [t])

  const [tPre, tAccent] = t.sectors.title
  const half = Math.ceil(t.sectors.items.length / 2)
  const rowA = t.sectors.items.slice(0, half)
  const rowB = t.sectors.items.slice(half)

  return (
    <section id="secteurs" className="section sec" ref={ref}>
      <MeshCanvas intensity={0.42} bgVar="--bg" lineVar="--accent" />
      <div className="sec__veil" />
      <div className="wrap">
        <header className="sec__head">
          <div className="sec__head-l">
            <div className="kicker" data-reveal>{t.sectors.kicker}</div>
            <h2 className="sec__title display" data-reveal>
              {tPre}<br /><em className="serif-italic accent">{tAccent}</em>
            </h2>
          </div>
          <div className="sec__head-r" data-reveal>
            <div className="sec__notlisted">
              <span className="sec__nl-k">{t.sectors.notListed}</span>
              <span className="sec__nl-t">
                {t.sectors.notListedPre}
                <RotatingWord words={t.sectors.niches} index={ni} className="accent serif-italic" />
                {t.sectors.notListedPost}
              </span>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="sec__ask" data-cursor>{t.sectors.ask} →</a>
            </div>
          </div>
        </header>
      </div>

      <div className="sec__rows" data-reveal>
        <Row items={rowA} start={0} />
        <Row items={rowB} start={half} reverse />
      </div>

      {/* Bande Franchise */}
      <div className="wrap">
        <div className="fr__band" data-reveal>
          <span className="fr__netbg" aria-hidden />
          <div className="fr__band-l">
            <div className="fr__tag"><span className="fr__pulse" />{t.franchise.tag}</div>
            <h3 className="fr__title display">{t.franchise.title}</h3>
            <p className="fr__desc">{t.franchise.desc}</p>
            <a ref={cta} href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="btn btn--primary fr__cta" data-cursor>
              {t.franchise.cta} <span className="btn__arrow">→</span>
            </a>
          </div>
          <div className="fr__engines">
            {t.franchise.engines.map((e, i) => (
              <article className="fr__engine" key={i}>
                <div className="fr__engine-top">
                  <span className="fr__engine-num display">0{i + 1}</span>
                  <span className="fr__engine-label">{e.label}</span>
                </div>
                <div className="fr__engine-name display">{e.name}</div>
                <p className="fr__engine-desc">{e.desc}</p>
                <div className="fr__engine-metric">{e.metric}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
