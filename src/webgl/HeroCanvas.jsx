import React, { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Triangle, Vec2, Vec3 } from 'ogl'

const vert = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`

// Domain-warped fbm — nappe organique « aurora » aux couleurs de marque
const frag = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uRes;
  uniform vec2  uMouse;
  uniform vec3  uBg;
  uniform vec3  uAccent;
  uniform vec3  uAccent2;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
  float noise(vec2 p){
    vec2 i=floor(p), f=fract(p);
    vec2 u=f*f*(3.0-2.0*f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),
               mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
  }
  float fbm(vec2 p){
    float v=0.0, a=0.5;
    for(int i=0;i<6;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = (gl_FragCoord.xy - 0.5*uRes) / uRes.y;
    float t = uTime * 0.05;

    vec2 m = (uMouse - 0.5) * 0.6;
    vec2 q = vec2(fbm(p + t + m), fbm(p + vec2(5.2,1.3) - t));
    vec2 r = vec2(fbm(p + 1.8*q + vec2(1.7,9.2) + 0.15*t),
                  fbm(p + 1.8*q + vec2(8.3,2.8) - 0.12*t));
    float f = fbm(p + 2.2*r);

    // Champs de couleur
    vec3 col = uBg;
    col = mix(col, uAccent, smoothstep(0.28, 0.95, f) * 0.55);
    col = mix(col, uAccent2, smoothstep(0.55, 1.05, length(r)) * 0.25);
    col += uAccent * 0.10 * smoothstep(0.7, 0.0, length(p - m*1.2));

    // Vignette + subtile bande lumineuse
    float vig = smoothstep(1.25, 0.2, length(p));
    col *= mix(0.55, 1.06, vig);

    // Grain léger
    float g = hash(gl_FragCoord.xy + uTime);
    col += (g - 0.5) * 0.025;

    gl_FragColor = vec4(col, 1.0);
  }
`

function cssVar(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return v || fallback
}
function hexToRGB(hex) {
  hex = hex.replace('#', '')
  if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('')
  const n = parseInt(hex, 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

export default function HeroCanvas({ theme }) {
  const ref = useRef(null)
  useEffect(() => {
    const host = ref.current
    if (!host) return
    let renderer, mesh, program, raf
    try {
      renderer = new Renderer({ alpha: false, antialias: false, dpr: Math.min(window.devicePixelRatio, 1.8) })
    } catch (e) { return }
    const gl = renderer.gl
    host.appendChild(gl.canvas)

    const mouse = new Vec2(0.5, 0.5)
    const setColors = () => {
      program.uniforms.uBg.value = new Vec3(...hexToRGB(cssVar('--bg', '#0e0a06')))
      program.uniforms.uAccent.value = new Vec3(...hexToRGB(cssVar('--accent', '#e77d3c')))
      program.uniforms.uAccent2.value = new Vec3(...hexToRGB(cssVar('--accent-2', '#ffb47e')))
    }

    const geometry = new Triangle(gl)
    program = new Program(gl, {
      vertex: vert, fragment: frag,
      uniforms: {
        uTime: { value: 0 },
        uRes: { value: new Vec2(1, 1) },
        uMouse: { value: mouse },
        uBg: { value: new Vec3(...hexToRGB(cssVar('--bg', '#0e0a06'))) },
        uAccent: { value: new Vec3(...hexToRGB(cssVar('--accent', '#e77d3c'))) },
        uAccent2: { value: new Vec3(...hexToRGB(cssVar('--accent-2', '#ffb47e'))) },
      },
    })
    mesh = new Mesh(gl, { geometry, program })

    const resize = () => {
      const w = host.clientWidth, h = host.clientHeight
      renderer.setSize(w, h)
      program.uniforms.uRes.value.set(gl.canvas.width, gl.canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => { mouse.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight) }
    window.addEventListener('mousemove', onMove)

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const start = performance.now()
    const loop = () => {
      program.uniforms.uTime.value = reduce ? 12 : (performance.now() - start) / 1000
      renderer.render({ scene: mesh })
      raf = requestAnimationFrame(loop)
    }
    loop()

    // Réagit au changement de thème
    const themeObs = new MutationObserver(setColors)
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      themeObs.disconnect()
      gl.canvas.remove()
      const ext = gl.getExtension('WEBGL_lose_context'); if (ext) ext.loseContext()
    }
  }, [])

  return <div ref={ref} className="hero-canvas" aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />
}
