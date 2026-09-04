import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../lib/store.jsx'
import { gsap, ScrollTrigger, scrollTo } from '../lib/smooth.js'
import { useReveal, useMagnetic } from '../lib/anim.js'
import { PlatformLogo, DevIcon } from './icons.jsx'
import './Services.css'

const VIDEOS = ['/videos/svc-acquisition.mp4', '/videos/svc-data.mp4', '/videos/svc-strategie.mp4']
const platLabel = (pf) => pf === 'tiktok' ? 'TikTok' : pf === 'google' ? 'Google' : pf === 'facebook' ? 'Facebook' : 'Instagram'
const SVC_DESC = {
  fr: { site: 'Vitrine & e-commerce', app: 'Web & mobile', crm: 'Pilotage & données' },
  en: { site: 'Landing & e-commerce', app: 'Web & mobile', crm: 'Ops & data' },
}

export default function Services() {
  const { t, lang } = useStore()
  const stage = useRef(null)
  const rail = useRef(null)
  const vids = useRef([])
  const [active, setActive] = useState(0)
  const cta = useMagnetic(0.3)
  const bandRef = useReveal({ y: 34, stagger: 0.1 })
  const pillars = t.services.pillars
  const [tPre, tAccent] = t.services.title

  // Pin + scrub : chaque levier prend l'écran
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: stage.current, start: 'top top', end: '+=' + pillars.length * 92 + '%',
      pin: true, anticipatePin: 1, invalidateOnRefresh: true,
      onUpdate: (self) => {
        setActive(Math.min(pillars.length - 1, Math.floor(self.progress * pillars.length * 0.999)))
        if (rail.current) rail.current.style.transform = `scaleX(${self.progress})`
      },
    })
    return () => st.kill()
  }, [pillars.length])

  // Vidéo plein cadre : seule la vidéo active joue
  useEffect(() => {
    vids.current.forEach((v, i) => {
      if (!v) return
      if (i === active) { if (!v.getAttribute('src')) v.setAttribute('src', VIDEOS[i]); v.play().catch(() => {}) }
      else v.pause()
    })
  }, [active])

  return (
    <section id="services" className="svc svc--cine">
      <div className="svc__stage" ref={stage}>
        <div className="svc__bg" aria-hidden>
          {pillars.map((p, i) => (
            <video key={i} ref={(el) => (vids.current[i] = el)} className={`svc__bgvid ${active === i ? 'is-on' : ''}`} muted loop playsInline preload="none" />
          ))}
          <div className="svc__veil" />
        </div>

        <div className="svc__top">
          <div className="kicker">{t.services.kicker}</div>
          <div className="svc__toptitle">{tPre} <em className="serif-italic accent">{tAccent}</em></div>
        </div>

        <div className="svc__panels">
          {pillars.map((p, i) => (
            <div key={i} className={`svc__panel ${active === i ? 'is-active' : active > i ? 'is-prev' : 'is-next'}`}>
              <span className="svc__ghost" aria-hidden>{p.k}</span>
              <span className="svc__idx mono">{p.k} — 0{pillars.length}</span>
              <h3 className="svc__name display">{p.name}</h3>
              <p className="svc__desc">{p.desc}</p>
              <div className="svc__tags">
                {p.platforms
                  ? p.platforms.map((pf) => <span className="svc__tag" key={pf}><PlatformLogo name={pf} size={14} />{platLabel(pf)}</span>)
                  : p.points.map((pt) => <span className="svc__tag" key={pt}>{pt}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="svc__railwrap" aria-hidden><span className="svc__rail" ref={rail} /></div>
      </div>

      <div className="svc__cta" ref={bandRef}>
        <div className="svc__cta-bg" aria-hidden>
          <div className="svc__cta-bgtrack">
            {[0, 1].map((g) => (
              <span className="svc__cta-word" key={g}>SUR-MESURE&nbsp;·&nbsp;DEVIS&nbsp;·&nbsp;SUR-MESURE&nbsp;·&nbsp;DEVIS&nbsp;·&nbsp;SUR-MESURE&nbsp;·&nbsp;DEVIS&nbsp;·&nbsp;</span>
            ))}
          </div>
        </div>
        <div className="wrap svc__cta-inner">
          <div className="svc__cta-head">
            <div className="svc__cta-l" data-reveal>
              <div className="kicker">{t.services.band.kicker}</div>
              <h3 className="svc__cta-title display">
                {t.services.band.title_pre}<em className="serif-italic accent">{t.services.band.title_accent}</em>
              </h3>
            </div>
            <a ref={cta} href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="btn btn--primary svc__cta-btn" data-cursor data-reveal>
              {t.services.band.cta} <span className="btn__arrow">→</span>
            </a>
          </div>
          <div className="svc__svc-grid" data-reveal>
            {t.services.band.items.map((x) => (
              <a key={x.i} href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="svc__svc-card" data-cursor>
                <span className="svc__svc-ic"><DevIcon name={x.i} /></span>
                <span className="svc__svc-txt">
                  <span className="svc__svc-name">{x.n}</span>
                  <span className="svc__svc-desc">{(SVC_DESC[lang] || SVC_DESC.fr)[x.i]}</span>
                </span>
                <span className="svc__svc-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
