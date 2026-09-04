import React, { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Triangle, Vec2, Vec3 } from 'ogl'

const vert = /* glsl */ `
  attribute vec2 uv; attribute vec2 position; varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`

// Grille déformée (effet lentille) qui gonfle vers le curseur — façon wodniack
const frag = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse;
  uniform vec3 uBg; uniform vec3 uLine;

  void main(){
    float aspect = uRes.x / uRes.y;
    vec2 p = (vUv - 0.5); p.x *= aspect;
    vec2 m = (uMouse - 0.5); m.x *= aspect;

    vec2 d = p - m;
    float r = length(d);
    // gonflement vers le curseur + respiration
    float strength = 0.34 + 0.06 * sin(uTime * 0.5);
    vec2 warp = p - d * strength * exp(-r * r * 5.5);
    // ondulation globale légère
    warp += 0.012 * vec2(sin(warp.y * 3.2 + uTime * 0.25), cos(warp.x * 3.0 - uTime * 0.2));

    float dens = 11.0;
    vec2 g = fract(warp * dens);
    vec2 dl = min(g, 1.0 - g) / dens;
    float dmin = min(dl.x, dl.y);
    float thick = 0.0016;
    float line = 1.0 - smoothstep(thick * 0.35, thick, dmin);

    vec3 col = mix(uBg, uLine, line * 0.92);
    gl_FragColor = vec4(col, 1.0);
  }
`

function cssVar(n, f){ const v = getComputedStyle(document.documentElement).getPropertyValue(n).trim(); return v || f }
function hexToRGB(hex){ hex = hex.replace('#',''); if(hex.length===3) hex = hex.split('').map(c=>c+c).join(''); const n=parseInt(hex,16); return [((n>>16)&255)/255,((n>>8)&255)/255,(n&255)/255] }

export default function GridCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const host = ref.current; if (!host) return
    let renderer, mesh, program, raf
    try { renderer = new Renderer({ alpha: false, antialias: true, dpr: Math.min(window.devicePixelRatio, 1.8) }) } catch(e){ return }
    const gl = renderer.gl; host.appendChild(gl.canvas)
    const target = new Vec2(0.5, 0.5), mouse = new Vec2(0.5, 0.5)
    const geometry = new Triangle(gl)
    program = new Program(gl, { vertex: vert, fragment: frag, uniforms: {
      uTime:{value:0}, uRes:{value:new Vec2(1,1)}, uMouse:{value:mouse},
      uBg:{value:new Vec3(...hexToRGB(cssVar('--accent','#e77d3c')))},
      uLine:{value:new Vec3(...hexToRGB('#160d05'))},
    }})
    mesh = new Mesh(gl, { geometry, program })
    const resize = () => { renderer.setSize(host.clientWidth, host.clientHeight); program.uniforms.uRes.value.set(gl.canvas.width, gl.canvas.height) }
    resize(); window.addEventListener('resize', resize)
    const onMove = (e) => {
      const r = host.getBoundingClientRect()
      target.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height)
    }
    window.addEventListener('mousemove', onMove)
    const setColors = () => { program.uniforms.uBg.value = new Vec3(...hexToRGB(cssVar('--accent','#e77d3c'))) }
    const obs = new MutationObserver(setColors); obs.observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] })
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const start = performance.now()
    const loop = () => {
      mouse.x += (target.x - mouse.x) * 0.08; mouse.y += (target.y - mouse.y) * 0.08
      program.uniforms.uTime.value = reduce ? 6 : (performance.now()-start)/1000
      renderer.render({ scene: mesh }); raf = requestAnimationFrame(loop)
    }
    loop()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMove); obs.disconnect(); gl.canvas.remove(); const ext=gl.getExtension('WEBGL_lose_context'); if(ext) ext.loseContext() }
  }, [])
  return <div ref={ref} className="grid-canvas" aria-hidden style={{ position:'absolute', inset:0 }} />
}
