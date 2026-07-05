"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const TILES = [
  // Row 1 — 2 medium tiles
  { id:"projects", size:"md", color:"#0067c0", icon:"📁", label:"Projects",   value:"20+",   sub:"delivered" },
  { id:"about",    size:"md", color:"#5c6bc0", icon:"👤", label:"About Me",   value:"4+",    sub:"years exp" },
  // Row 2 — 1 wide tile
  { id:"hero",     size:"lg", color:"#1a1a2e", icon:"💼", label:"Sarvesh T S · Freelance Web Dev & Digital Marketer", value:"", sub:"Bangalore, India" },
  // Row 3 — 2 medium tiles
  { id:"seo",      size:"md", color:"#107c10", icon:"🔍", label:"SEO",         value:"85%",   sub:"ranking rate" },
  { id:"ads",      size:"md", color:"#e65100", icon:"📢", label:"Google Ads",  value:"3x",    sub:"avg ROAS" },
  // Row 4 — 4 small tiles
  { id:"react",    size:"sm", color:"#282c34", icon:"⚛️", label:"React",       value:"",      sub:"" },
  { id:"nextjs",   size:"sm", color:"#000",    icon:"▲",  label:"Next.js",    value:"",      sub:"" },
  { id:"wp",       size:"sm", color:"#21759b", icon:"🅆",  label:"WordPress",  value:"",      sub:"" },
  { id:"figma",    size:"sm", color:"#f24e1e", icon:"🎨", label:"Figma",      value:"",      sub:"" },
  // Row 5 — 1 wide tile (contact)
  { id:"contact",  size:"lg", color:"#0067c0", icon:"✉️", label:"Let's Work Together", value:"", sub:"sarveshts2k4@gmail.com · +91 9880231133" },
  // Row 6 — 2 medium tiles
  { id:"satisfaction", size:"md", color:"#4caf50", icon:"⭐", label:"Satisfaction", value:"100%", sub:"client rating" },
  { id:"avail",    size:"md", color:"#1b5e20", icon:"🟢", label:"Available",   value:"Now",   sub:"for projects" },
] as const

type TileSize = "sm"|"md"|"lg"

const SIZE_STYLE: Record<TileSize, React.CSSProperties> = {
  sm: { gridColumn: "span 1", aspectRatio: "1" },
  md: { gridColumn: "span 2", aspectRatio: "1" },
  lg: { gridColumn: "span 4", aspectRatio: "3/1" },
}

export function LiveTiles() {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState("")

  useEffect(() => {
    setMounted(true)
    const tick = () => setTime(new Date().toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="tiles-bg">
      {/* Windows Phone top bar */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:44, background:"rgba(0,0,0,0.9)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 16px", zIndex:100 }}>
        <span style={{ color:"#fff", fontSize:16, fontWeight:300 }}>{time}</span>
        <div style={{ display:"flex", gap:8, color:"#fff", fontSize:12 }}>
          <span>●●●●</span>
          <span>WiFi</span>
          <span>🔋</span>
        </div>
      </div>

      <div className="tiles-header">Sarvesh TS</div>

      <div className="tiles-grid">
        {TILES.map((tile, i) => (
          <motion.div
            key={tile.id}
            className="tile"
            style={{
              ...SIZE_STYLE[tile.size as TileSize],
              background: tile.color,
            }}
            initial={{ opacity:0, scale:0.85 }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.85 }}
            transition={{ delay: i * 0.05, duration: 0.3, ease:[0.2,0,0,1] }}
            whileTap={{ scale: 0.94 }}
          >
            {tile.id === "hero" ? (
              <div style={{ padding: 12 }}>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginBottom:8 }}>📌 Pinned</div>
                <div style={{ fontSize:16, fontWeight:600, color:"#fff", lineHeight:1.4 }}>{tile.label}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginTop:4 }}>{tile.sub}</div>
              </div>
            ) : tile.id === "contact" ? (
              <a href="mailto:sarveshts2k4@gmail.com" style={{ padding:12, textDecoration:"none", display:"flex", flexDirection:"column", justifyContent:"flex-end", height:"100%" }}>
                <div style={{ fontSize:22, marginBottom:4 }}>✉️</div>
                <div style={{ fontSize:15, fontWeight:600, color:"#fff" }}>{tile.label}</div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.7)", marginTop:2 }}>{tile.sub}</div>
              </a>
            ) : tile.size === "sm" ? (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%" }}>
                <div style={{ fontSize:24 }}>{tile.icon}</div>
                <div style={{ fontSize:9, color:"rgba(255,255,255,0.8)", textTransform:"uppercase", letterSpacing:"0.04em", marginTop:4 }}>{tile.label}</div>
              </div>
            ) : (
              <>
                <div className="tile-icon">{tile.icon}</div>
                {tile.value && <div className="tile-value">{tile.value}</div>}
                {tile.sub   && <div className="tile-sub">{tile.sub}</div>}
                <div className="tile-label">{tile.label}</div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom nav bar */}
      <div style={{ position:"fixed", bottom:0, left:0, right:0, height:56, background:"rgba(0,0,0,0.9)", display:"flex", alignItems:"center", justifyContent:"space-around", padding:"0 8px" }}>
        {["←","⊙","▣"].map((b,i) => (
          <button key={i} style={{ background:"transparent", border:"none", color:"rgba(255,255,255,0.7)", fontSize:20, cursor:"pointer", padding:"12px 24px" }}>{b}</button>
        ))}
      </div>
    </div>
  )
}
