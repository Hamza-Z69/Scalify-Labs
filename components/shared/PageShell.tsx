"use client";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#050505", minHeight: "100vh", color: "#fafafa" }}>
      {/* Grain */}
      <div style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none", opacity: 0.03, background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} aria-hidden="true" />

      {/* Ambient */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 700, height: 700, top: "-15%", left: "20%", background: "radial-gradient(circle, rgba(232,134,42,0.05), transparent 65%)", animation: "f 25s ease-in-out infinite alternate" }} />
        <div style={{ position: "absolute", width: 500, height: 500, bottom: "-10%", right: "15%", background: "radial-gradient(circle, rgba(232,134,42,0.03), transparent 65%)", animation: "f 20s ease-in-out infinite alternate-reverse" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      <style>{`
        @keyframes f{0%{transform:translate(0,0)}50%{transform:translate(40px,-30px)}100%{transform:translate(-20px,20px)}}

        .g-card{background:rgba(255,255,255,.01);border:1px solid rgba(255,255,255,.06);border-radius:16px;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);transition:all .4s cubic-bezier(.22,1,.36,1)}
        .g-card:hover{border-color:rgba(232,134,42,.2);box-shadow:0 8px 32px rgba(0,0,0,.3)}

        .g-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;border-radius:14px;background:linear-gradient(104deg,rgba(253,253,253,.04) 5%,rgba(240,240,228,.08) 100%);backdrop-filter:blur(25px);-webkit-backdrop-filter:blur(25px);border:1.5px solid rgba(255,255,255,.08);color:#fafafa;font-size:14px;font-weight:500;text-decoration:none;transition:all .3s cubic-bezier(.22,1,.36,1)}
        .g-btn:hover{background:rgba(255,255,255,.9);color:#000;border-color:transparent}

        .g-btn-solid{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;border-radius:14px;background:#E8862A;border:none;color:#fff;font-size:14px;font-weight:600;text-decoration:none;transition:all .3s cubic-bezier(.22,1,.36,1);box-shadow:0 0 40px rgba(232,134,42,.2)}
        .g-btn-solid:hover{box-shadow:0 0 60px rgba(232,134,42,.4);transform:translateY(-2px)}

        .g-sep{height:1px;border:none;margin:0;background:linear-gradient(90deg,transparent 5%,rgba(255,255,255,.06) 50%,transparent 95%)}

        .g-label{display:inline-block;font-family:var(--font-jetbrains-mono),'JetBrains Mono',monospace;font-size:11px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#E8862A;margin-bottom:20px}

        .g-title{color:#fafafa;margin:0;font-size:clamp(1.5rem,3.5vw,2.4rem);font-weight:700;line-height:1.15}
        .g-title-hero{color:#fafafa;margin:0;font-size:clamp(2rem,5vw,3.5rem);font-weight:700;line-height:1.1}
        .g-text{color:rgba(250,250,250,.5)}
        .g-text-muted{color:rgba(250,250,250,.2)}

        .g-line{width:48px;height:1.5px;margin:32px auto 0;background:linear-gradient(90deg,transparent,#E8862A,transparent);border-radius:2px}
        .g-icon-box{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;background:rgba(232,134,42,.06);border:1px solid rgba(232,134,42,.08)}
        .g-pill{display:inline-block;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,.06);color:rgba(250,250,250,.5);font-size:13px;font-weight:500;background:rgba(255,255,255,.01)}
        .g-kpi{font-weight:700;background:linear-gradient(135deg,#fff 30%,#F0A050);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;line-height:1.1}
      `}</style>
    </div>
  );
}
