import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../lib/store.jsx'
import { scrollTo, getLenis } from '../lib/smooth.js'
import { useMagnetic } from '../lib/anim.js'
import './Nav.css'

export default function Nav() {
  const { t, lang, setLang, theme, setTheme } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const cta = useMagnetic(0.3)
  const lastY = useRef(0)

  useEffect(() => {
    const lenis = getLenis()
    const onScroll = ({ scroll }) => {
      const y = scroll ?? window.scrollY
      setScrolled(y > 40)
      setHidden(y > 400 && y > lastY.current && !open)
      lastY.current = y
    }
    if (lenis) lenis.on('scroll', onScroll)
    else window.addEventListener('scroll', () => onScroll({}))
    return () => { if (lenis) lenis.off('scroll', onScroll) }
  }, [open])

  useEffect(() => {
    const lenis = getLenis()
    if (open) lenis?.stop(); else lenis?.start()
  }, [open])

  const go = (e, id) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollTo('#' + id), open ? 500 : 0) }

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${hidden ? 'nav--hidden' : ''}`}>
        <a href="#top" onClick={(e) => go(e, 'top')} className="nav__logo" data-cursor>
          <img src="/logo-scalify.png" alt="Scalify Labs" />
        </a>

        <nav className="nav__links">
          {t.nav.links.map(([id, label]) => (
            <a key={id} href={'#' + id} onClick={(e) => go(e, id)} className="nav__link" data-cursor>
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <div className="nav__lang">
            {['fr', 'en'].map((l) => (
              <button key={l} className={lang === l ? 'is-active' : ''} onClick={() => setLang(l)} data-cursor>{l}</button>
            ))}
          </div>
          <button className="nav__theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Theme" data-cursor>
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <a ref={cta} href="#contact" onClick={(e) => go(e, 'contact')} className="btn btn--primary nav__cta" data-cursor>
            {t.nav.cta}
          </a>
          <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Menu" data-cursor>
            <span /><span />
          </button>
        </div>
      </header>

      <div className={`menu ${open ? 'is-open' : ''}`}>
        <nav className="menu__links">
          {t.nav.links.map(([id, label], i) => (
            <a key={id} href={'#' + id} onClick={(e) => go(e, id)} className="menu__link display" style={{ transitionDelay: `${0.05 + i * 0.05}s` }}>
              <span className="menu__num">0{i + 1}</span>{label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => go(e, 'contact')} className="menu__link display" style={{ transitionDelay: `${0.05 + t.nav.links.length * 0.05}s` }}>
            <span className="menu__num">0{t.nav.links.length + 1}</span>Contact
          </a>
        </nav>
        <div className="menu__foot">
          <a href="#contact" onClick={(e) => go(e, 'contact')} className="btn btn--primary">{t.nav.cta} →</a>
          <div className="menu__toggles">
            <div className="nav__lang">
              {['fr', 'en'].map((l) => (
                <button key={l} className={lang === l ? 'is-active' : ''} onClick={() => setLang(l)}>{l}</button>
              ))}
            </div>
            <button className="nav__theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? '☾' : '☀'}</button>
          </div>
        </div>
      </div>
    </>
  )
}
