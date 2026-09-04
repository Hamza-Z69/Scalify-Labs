import React, { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Triangle, Vec2, Vec3 } from 'ogl'

const vert = /* glsl */ `
  attribute vec2 uv; attribute vec2 position; varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`

// Maillage de lignes verticales ondulantes (wireframe façon wodniack)
const frag = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse;
  uniform vec3 uBg; uniform vec3 uLine; uniform float uIntensity;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
  float noise(vec2 p){
    vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),u.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y);
  }

  void main(){
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / uRes.y;
    vec2 p = vec2(uv.x * aspect, uv.y);
    float t = uTime * 0.14;

    // Champ de distorsion (ondulation qui coule)
    float w = sin(p.y * 3.0 + t * 2.0) * 0.06
            + sin(p.y * 7.3 - t * 1.3) * 0.028
            + noise(p * vec2(1.4, 2.2) + vec2(t, 0.0)) * 0.11;
    w += (uMouse.x - 0.5) * 0.05;
    // convergence vers la gauche
    w += (0.5 - uv.x) * 0.12 * (0.6 + 0.4 * sin(t));

    float x = p.x + w;
    float dens = 46.0;
    float lx = fract(x * dens);
    float dist = min(lx, 1.0 - lx) / dens;
    float thickness = 0.0016;
    float line = 1.0 - smoothstep(thickness * 0.35, thickness, dist);

    // vignette douce
    float vig = smoothstep(1.15, 0.25, length(uv - 0.5));
    vec3 col = mix(uBg, uLine, line * uIntensity * (0.35 + 0.65 * vig));
    // grain
    col += (hash(gl_FragCoord.xy + uTime) - 0.5) * 0.02;
    gl_FragColor = vec4(col, 1.0);
  }
`

function cssVar(n, f){ const v=getComputedStyle(document.documentElement).getPropertyValue(n).trim(); return v||f }
function hexToRGB(hex){ hex=hex.replace('#',''); if(hex.length===3) hex=hex.split('').map(c=>c+c).join(''); const n=parseInt(hex,16); return [((n>>16)&255)/255,((n>>8)&255)/255,(n&255)/255] }

export default function MeshCanvas({ intensity = 0.6, bgVar = '--panel', lineVar = '--accent' }) {
  const ref = useRef(null)
  useEffect(() => {
    const host = ref.current; if (!host) return
    let renderer, mesh, program, raf
    try { renderer = new Renderer({ alpha: false, antialias: true, dpr: Math.min(window.devicePixelRatio, 1.8) }) } catch(e){ return }
    const gl = renderer.gl; host.appendChild(gl.canvas)
    const mouse = new Vec2(0.5, 0.5)
    const geometry = new Triangle(gl)
    const setColors = () => {
      program.uniforms.uBg.value = new Vec3(...hexToRGB(cssVar(bgVar, '#0a0704')))
      program.uniforms.uLine.value = new Vec3(...hexToRGB(cssVar(lineVar, '#e77d3c')))
    }
    program = new Program(gl, { vertex: vert, fragment: frag, uniforms: {
      uTime:{value:0}, uRes:{value:new Vec2(1,1)}, uMouse:{value:mouse},
      uBg:{value:new Vec3(...hexToRGB(cssVar(bgVar,'#0a0704')))},
      uLine:{value:new Vec3(...hexToRGB(cssVar(lineVar,'#e77d3c')))},
      uIntensity:{value:intensity},
    }})
    mesh = new Mesh(gl, { geometry, program })
    const resize = () => { renderer.setSize(host.clientWidth, host.clientHeight); program.uniforms.uRes.value.set(gl.canvas.width, gl.canvas.height) }
    resize(); window.addEventListener('resize', resize)
    const onMove = (e) => mouse.set(e.clientX/window.innerWidth, 1-e.clientY/window.innerHeight)
    window.addEventListener('mousemove', onMove)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const start = performance.now()
    const loop = () => { program.uniforms.uTime.value = reduce ? 8 : (performance.now()-start)/1000; renderer.render({ scene: mesh }); raf = requestAnimationFrame(loop) }
    loop()
    const obs = new MutationObserver(setColors); obs.observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMove); obs.disconnect(); gl.canvas.remove(); const ext=gl.getExtension('WEBGL_lose_context'); if(ext) ext.loseContext() }
  }, [])
  return <div ref={ref} className="mesh-canvas" aria-hidden style={{ position:'absolute', inset:0 }} />
}
