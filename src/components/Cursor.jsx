import React, { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const d = dot.current, r = ring.current, l = label.current
    let mx = window.innerWidth / 2, my = window.innerHeight / 2
    let rx = mx, ry = my
    let raf

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      d.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
      const el = e.target.closest('[data-cursor]')
      if (el) {
        r.classList.add('is-hover')
        const txt = el.getAttribute('data-cursor')
        if (txt) { r.classList.add('is-label'); l.textContent = txt }
        else r.classList.remove('is-label')
      } else {
        r.classList.remove('is-hover', 'is-label')
      }
    }
    const down = () => r.classList.add('is-down')
    const up = () => r.classList.remove('is-down')

    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      r.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    loop()
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring">
        <span ref={label} className="cursor-ring__label" />
      </div>
    </>
  )
}
