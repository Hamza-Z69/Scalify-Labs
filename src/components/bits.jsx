import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/smooth.js'

/* Count-up animé au scroll. Parse "> 100k€", "×4,3", "−38%", "> 25". */
export function CountUp({ value, className }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const m = value.match(/-?[\d.,]+/)
    if (!m || reduce) { el.textContent = value; return }
    const numStr = m[0]
    const target = parseFloat(numStr.replace(',', '.'))
    const decimals = (numStr.split(/[.,]/)[1] || '').length
    const prefix = value.slice(0, m.index)
    const suffix = value.slice(m.index + numStr.length)
    const obj = { v: 0 }
    const st = ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => gsap.to(obj, {
        v: target, duration: 1.6, ease: 'power3.out',
        onUpdate: () => {
          const s = obj.v.toFixed(decimals).replace('.', ',')
          el.textContent = prefix + s + suffix
        },
      }),
    })
    el.textContent = prefix + '0'.padEnd(decimals ? decimals + 2 : 1, '0').replace(/^(\d)(\d+)/, '$1,$2') + suffix
    return () => st.kill()
  }, [value])
  return <span ref={ref} className={className}>{value}</span>
}

/* Mot rotatif inline, aligné sur la ligne de base (sizer invisible en flux) */
export function RotatingWord({ words, index, className = '' }) {
  return (
    <span className="rotw">
      <span className={`rotw__sizer ${className}`}>{words[index]}</span>
      {words.map((w, i) => (
        <span key={i} className={`rotw__w ${className} ${i === index ? 'is-in' : i === (index - 1 + words.length) % words.length ? 'is-out' : ''}`}>{w}</span>
      ))}
    </span>
  )
}

/* Marquee infini (kinetic band) */
export function Marquee({ items, speed = 40, className = '' }) {
  const track = useRef(null)
  useEffect(() => {
    const el = track.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let x = 0
    let raf
    const w = el.scrollWidth / 2
    const loop = () => {
      x -= speed / 60
      if (-x >= w) x = 0
      el.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(raf)
  }, [speed])
  const doubled = [...items, ...items]
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee__track" ref={track}>
        {doubled.map((it, i) => (
          <span className="marquee__item" key={i}>{it}<span className="marquee__dot">✦</span></span>
        ))}
      </div>
    </div>
  )
}
