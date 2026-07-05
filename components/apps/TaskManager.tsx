"use client"
import { useEffect, useState } from "react"

const SKILLS = [
  { name:"JavaScript / TypeScript",  pct:95, category:"Language" },
  { name:"React / Next.js",          pct:92, category:"Framework" },
  { name:"WordPress & CMS",          pct:88, category:"Platform"  },
  { name:"Tailwind CSS / CSS3",      pct:90, category:"Styling"   },
  { name:"SEO & Technical SEO",      pct:85, category:"Marketing"  },
  { name:"Google Ads / PPC",         pct:78, category:"Marketing"  },
  { name:"Figma / UI Design",        pct:80, category:"Design"     },
  { name:"Node.js / APIs",           pct:75, category:"Backend"    },
  { name:"Shopify / WooCommerce",    pct:82, category:"E-Commerce" },
]

const PERF = [
  { label:"Projects Delivered", value:20, unit:"+", color:"#60cdff" },
  { label:"Years Experience",   value:4,  unit:"+", color:"#a78bfa" },
  { label:"Client Satisfaction",value:100, unit:"%", color:"#4ade80" },
  { label:"On-Time Delivery",   value:98, unit:"%", color:"#f59e0b" },
]

export function TaskManager() {
  const [tab, setTab] = useState<"processes"|"performance">("processes")
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", fontSize:13 }}>
      {/* Tabs */}
      <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0 16px" }}>
        {(["processes","performance"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding:"10px 16px",
              background:"transparent",
              border:"none",
              borderBottom: tab===t ? "2px solid var(--win-accent)" : "2px solid transparent",
              color: tab===t ? "var(--win-text)" : "var(--win-text-2)",
              cursor:"pointer",
              fontSize:13,
              fontFamily:"inherit",
              textTransform:"capitalize",
              transition:"color 120ms",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {tab==="processes" && (
        <div style={{ flex:1, overflowY:"auto", padding:"16px 20px" }}>
          <div style={{ marginBottom:16, fontSize:11, color:"var(--win-text-muted)", letterSpacing:"0.06em", textTransform:"uppercase" }}>Skills · CPU Usage</div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {SKILLS.map(s => (
              <div key={s.name}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                  <span style={{ color:"var(--win-text)" }}>{s.name}</span>
                  <span style={{ color:"var(--win-text-2)" }}>{s.pct}%</span>
                </div>
                <div style={{ height:6, borderRadius:3, background:"rgba(255,255,255,0.08)", overflow:"hidden" }}>
                  <div style={{
                    height:"100%",
                    width: animated ? `${s.pct}%` : "0%",
                    borderRadius:3,
                    background: `linear-gradient(90deg, var(--win-accent-dark), var(--win-accent))`,
                    transition:"width 1s cubic-bezier(0.2,0,0,1)",
                    transitionDelay: `${SKILLS.indexOf(s) * 60}ms`,
                  }} />
                </div>
                <div style={{ fontSize:10, color:"var(--win-text-muted)", marginTop:2 }}>{s.category}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab==="performance" && (
        <div style={{ flex:1, overflowY:"auto", padding:20 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            {PERF.map(p => (
              <div key={p.label} style={{ padding:20, borderRadius:8, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize:11, color:"var(--win-text-muted)", marginBottom:8, letterSpacing:"0.04em", textTransform:"uppercase" }}>{p.label}</div>
                <div style={{ fontSize:42, fontWeight:200, color:p.color, lineHeight:1 }}>
                  {animated ? p.value : 0}{p.unit}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:16, padding:16, borderRadius:8, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize:11, color:"var(--win-text-muted)", marginBottom:8, textTransform:"uppercase", letterSpacing:"0.04em" }}>Commit History (Last 6 months)</div>
            <div style={{ display:"flex", gap:3, alignItems:"flex-end", height:60 }}>
              {[30,45,60,40,75,90,55,80,95,70,85,60,40,75].map((h,i) => (
                <div key={i} style={{ flex:1, borderRadius:2, background:"var(--win-accent)", opacity:0.6, height: animated ? `${h}%` : "0%", transition:`height 0.8s cubic-bezier(0.2,0,0,1) ${i*40}ms` }} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div style={{ padding:"6px 20px", borderTop:"1px solid rgba(255,255,255,0.06)", fontSize:11, color:"var(--win-text-muted)" }}>
        Processes: {SKILLS.length} · Performance: Optimal
      </div>
    </div>
  )
}
