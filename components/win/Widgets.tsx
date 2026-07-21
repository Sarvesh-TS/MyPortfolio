"use client"
import { useState, useEffect } from "react"
import { useWindows } from "@/contexts/WindowContext"

export function DesktopWidgets() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [bars, setBars] = useState(false)
  const { openApp } = useWindows()

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false }))
      setDate(now.toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" }))
    }
    tick()
    const id = setInterval(tick, 1000)
    setBars(true)
    return () => clearInterval(id)
  }, [])

  const STATS = [
    { label: "Projects",    value: "20+",  color: "#60cdff" },
    { label: "Experience",  value: "3+ yrs", color: "#a78bfa" },
    { label: "Satisfaction",value: "100%", color: "#4ade80" },
    { label: "On-Time",     value: "98%",  color: "#f59e0b" },
  ]

  const SKILLS = [
    { name: "React / Next.js",   pct: 92, color: "#60cdff" },
    { name: "WordPress & CMS",   pct: 88, color: "#818cf8" },
    { name: "SEO & Marketing",   pct: 85, color: "#4ade80" },
    { name: "UI/UX & Figma",     pct: 80, color: "#f59e0b" },
  ]

  const W: React.CSSProperties = {
    background: "rgba(255,255,255,0.055)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: "10px 12px",
  }

  return (
    <div style={{
      position: "absolute",
      top: 12, right: 12,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      width: 260,
      zIndex: 50,
      // Use 100% of the desktop area height (desktop already excludes taskbar)
      maxHeight: "calc(100% - 16px)",
      overflow: "hidden",
    }}>

      {/* Clock */}
      <div style={W}>
        <div style={{ fontSize: 44, fontWeight: 200, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>{time}</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>{date}</div>
        <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 7px #4ade80", flexShrink: 0, display: "block" }} />
          <span style={{ fontSize: 10, color: "#4ade80", fontWeight: 500 }}>Available for New Projects</span>
        </div>
      </div>

      {/* Stats */}
      <div style={W}>
        <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 7, fontWeight: 600 }}>Portfolio Stats</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 7, padding: "7px 10px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 20, fontWeight: 200, color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div style={W}>
        <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 8, fontWeight: 600 }}>Top Skills</div>
        {SKILLS.map((s, i) => (
          <div key={s.name} style={{ marginBottom: i < SKILLS.length - 1 ? 8 : 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.65)" }}>{s.name}</span>
              <span style={{ fontSize: 10, color: s.color }}>{s.pct}%</span>
            </div>
            <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
              <div style={{ height: "100%", width: bars ? `${s.pct}%` : "0%", borderRadius: 2, background: `linear-gradient(90deg, ${s.color}88, ${s.color})`, transition: `width 1.2s cubic-bezier(0.2,0,0,1) ${i * 110}ms`, boxShadow: `0 0 6px ${s.color}50` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div style={{ ...W, cursor: "pointer" }} onClick={() => openApp("mail")}>
        <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 7, fontWeight: 600 }}>Let's Work Together</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>📧  sarveshts2k4@gmail.com</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>📞  +91 9880231133</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>📍  Bangalore, India</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, padding: "6px 14px", background: "#0067c0", borderRadius: 4, color: "#fff" }}>✉ Open Mail</div>
      </div>
    </div>
  )
}
