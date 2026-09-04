import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../lib/store.jsx'
import { gsap, ScrollTrigger } from '../lib/smooth.js'
import './Method.css'

export default function Method() {
  const { t } = useStore()
  const stage = useRef(null)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)
  const fills = useRef([])
  const pcts = useRef([])
  const panelPct = useRef(null)
  const steps = t.method.steps
  const [tPre, tAccent] = t.method.title

  useEffect(() => {
    const n = steps.length
    const st = ScrollTrigger.create({
      trigger: stage.current, start: 'top top', end: '+=' + n * 110 + '%',
      pin: true, anticipatePin: 1, scrub: 0.4, invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress
        const a = Math.min(n - 1, Math.floor(p * n))
        const sub = Math.min(1, Math.max(0, p * n - a))
        if (a !== activeRef.current) { activeRef.current = a; setActive(a) }
        fills.current.forEach((el, i) => { if (el) el.style.width = i === a ? (sub * 100).toFixed(0) + '%' : '' })
        pcts.current.forEach((el, i) => { if (el && i === a) el.textContent = Math.round(sub * 100) })
        if (panelPct.current) panelPct.current.textContent = Math.round(sub * 100)
      },
    })
    return () => st.kill()
  }, [steps.length])

  const cur = steps[active]

  return (
    <section id="methode" className="pl section--cream">
      <div className="pl__stage" ref={stage}>
        <div className="wrap pl__inner">
          <header className="pl__head">
            <div className="kicker">{t.method.kicker}</div>
            <h2 className="pl__title display">{tPre} <em className="serif-italic accent">{tAccent}</em></h2>
          </header>

          <div className="pl__cols">
            <div className="pl__term">
              <div className="pl__termbar"><i /><i /><i /><span>scalify — pipeline d'acquisition</span></div>
              <div className="pl__body">
                <div className="pl__cmd"><span className="pl__p">$</span>&nbsp;scalify run --votre-compte</div>
                {steps.map((s, i) => {
                  const cls = i < active ? 'is-done' : i === active ? 'is-run' : 'is-queue'
                  return (
                    <div className={`pl__row ${cls}`} key={i}>
                      <span className="pl__rid">[{s.k}]</span>
                      <span className="pl__rname">{s.name}</span>
                      <span className="pl__track"><span className="pl__rail" /><span className="pl__fill" ref={(el) => (fills.current[i] = el)} /></span>
                      <span className="pl__status">
                        <span className="pl__ok">✓ done</span>
                        <span className="pl__pct"><span ref={(el) => (pcts.current[i] = el)}>0</span>%</span>
                        <span className="pl__q">queued</span>
                      </span>
                      <span className="pl__when">{s.d}</span>
                      <p className="pl__desc">▸ {s.desc}</p>
                    </div>
                  )
                })}
                <div className="pl__cmd"><span className="pl__p">›</span>&nbsp;<span className="pl__cursor" /></div>
              </div>
            </div>

            <aside className="pl__detail">
              <span className="pl__detail-ghost" aria-hidden>{cur.k}</span>
              <div className="pl__detail-in" key={active}>
                <div className="pl__detail-meta mono">
                  <span className="pl__detail-num">{cur.k} / 0{steps.length}</span>
                  <span className="pl__detail-when">{cur.d}</span>
                </div>
                <h3 className="pl__detail-name display">{cur.name}</h3>
                <p className="pl__detail-desc">{cur.desc}</p>
              </div>
              <div className="pl__detail-run mono"><span className="pl__detail-dot" />en cours · <span ref={panelPct}>0</span>%</div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
