import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from './smooth.js'

/* Reveal générique : fade + montée au scroll (masqué -> visible) */
export function useReveal(opts = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.hasAttribute('data-reveal') ? [el] : el.querySelectorAll('[data-reveal]')
    if (!targets.length) return
    const ctx = gsap.context(() => {
      gsap.set(targets, { y: opts.y ?? 28, opacity: 0 })
      ScrollTrigger.batch(targets, {
        start: opts.start ?? 'top 88%',
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            stagger: opts.stagger ?? 0.08, overwrite: true,
          }),
      })
    }, el)
    return () => ctx.revert()
  }, [])
  return ref
}

/* Découpe un texte en lignes masquées animables (mesure des retours ligne réels) */
export function splitLines(el) {
  if (!el) return []
  const text = el.textContent
  el.textContent = ''
  const words = text.split(' ')
  const spans = words.map((w, i) => {
    const s = document.createElement('span')
    s.style.display = 'inline-block'
    s.textContent = w + (i < words.length - 1 ? ' ' : '')
    el.appendChild(s)
    return s
  })
  // Regroupe par ligne selon offsetTop
  const lines = []
  let cur = null, top = null
  spans.forEach((s) => {
    if (s.offsetTop !== top) { top = s.offsetTop; cur = []; lines.push(cur) }
    cur.push(s)
  })
  // Reconstruit : chaque ligne dans un masque
  el.textContent = ''
  const inner = []
  lines.forEach((lineSpans) => {
    const mask = document.createElement('span')
    mask.className = 'line-mask'
    const line = document.createElement('span')
    lineSpans.forEach((s) => line.appendChild(s))
    mask.appendChild(line)
    el.appendChild(mask)
    inner.push(line)
  })
  return inner
}

/* Effet magnétique sur un élément (boutons) */
export function magnetic(el, strength = 0.35) {
  if (!el || window.matchMedia('(hover: none)').matches) return () => {}
  const onMove = (e) => {
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    gsap.to(el, { x: x * strength, y: y * strength, duration: 0.6, ease: 'power3.out' })
  }
  const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', onLeave)
  return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
}

export function useMagnetic(strength) {
  const ref = useRef(null)
  useEffect(() => magnetic(ref.current, strength), [])
  return ref
}
