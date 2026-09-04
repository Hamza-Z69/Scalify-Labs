import React, { useEffect, useRef } from 'react'

export default function Loader({ onDone }) {
  const root = useRef(null)
  const count = useRef(null)
  const bar = useRef(null)
  const curtain = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { onDone?.(); if (root.current) root.current.style.display = 'none'; return }

    const DUR = 1800
    const start = performance.now()
    let raf, t1, t2, t3
    let done = false

    const finish = () => {
      if (curtain.current) curtain.current.classList.add('is-up')   // rideau terracotta couvre
      t1 = setTimeout(() => { if (!done) { done = true; onDone?.() } }, 640)  // le hero démarre derrière
      t2 = setTimeout(() => { root.current && root.current.classList.add('is-leaving') }, 720) // tout glisse vers le haut
      t3 = setTimeout(() => { if (root.current) root.current.style.display = 'none' }, 1680)
    }

    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / DUR)
      if (count.current) count.current.textContent = Math.round(p * 100)
      if (bar.current) bar.current.style.transform = `scaleX(${p})`
      if (p < 1) raf = requestAnimationFrame(tick)
      else finish()
    }
    raf = requestAnimationFrame(tick)

    return () => { cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <div className="loader" ref={root}>
      <div className="loader__inner">
        <div className="loader__count"><span ref={count}>0</span><em>%</em></div>
      </div>
      <div className="loader__bar"><span ref={bar} /></div>
      <div className="loader__curtain" ref={curtain} />
    </div>
  )
}
