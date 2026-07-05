"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const getGreeting = () => {
  const h = new Date().getHours()
  if (h < 12) return "Good morning"
  if (h < 17) return "Good afternoon"
  return "Good evening"
}

const P = {
  folder:   "M2 6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6Z",
  person:   "M12 2C9.79 2 8 3.79 8 6S9.79 10 12 10 16 8.21 16 6 14.21 2 12 2ZM12 12C7.33 12 4 14.33 4 16V18H20V16C20 14.33 16.67 12 12 12Z",
  chart:    "M4 20V14H8V20H4ZM10 20V8H14V20H10ZM16 20V2H20V20H16Z",
  mail:     "M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z",
  gear:     "M12 15.5C10.07 15.5 8.5 13.93 8.5 12S10.07 8.5 12 8.5 15.5 10.07 15.5 12 13.93 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12S19.47 11.34 19.43 11L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11C4.53 11.34 4.5 11.67 4.5 12S4.53 12.65 4.57 13L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z",
  terminal: "M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z",
  phone:    "M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z",
  github:   "M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.59 9.52 21.27 9.52 21C9.52 20.77 9.51 20.14 9.51 19.31C7 19.91 6.35 18.13 6.35 18.13C5.9 17.03 5.26 16.71 5.26 16.71C4.38 16.1 5.33 16.11 5.33 16.11C6.3 16.18 6.81 17.12 6.81 17.12C7.67 18.62 9.09 18.18 9.54 17.93C9.63 17.3 9.89 16.86 10.17 16.61C8.08 16.36 5.88 15.53 5.88 11.93C5.88 10.88 6.27 10.02 6.83 9.35C6.73 9.1 6.38 8.12 6.93 6.78C6.93 6.78 7.74 6.51 9.5 7.73C10.24 7.51 11.01 7.4 11.77 7.4C12.53 7.4 13.3 7.51 14.04 7.73C15.8 6.51 16.61 6.78 16.61 6.78C17.16 8.12 16.81 9.1 16.71 9.35C17.27 10.02 17.66 10.88 17.66 11.93C17.66 15.54 15.45 16.35 13.36 16.6C13.71 16.91 14.04 17.52 14.04 18.46C14.04 19.81 14.03 20.9 14.03 21C14.03 21.28 14.22 21.6 14.72 21.5C18.69 20.17 21.56 16.42 21.56 12C21.56 6.48 17.08 2 12 2Z",
  resume:   "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z",
  whatsapp: "M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.57 3.38 17.03L2 22L7.12 20.65C8.54 21.48 10.22 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z",
}

const APPS = [
  { name: "My Work",  bg: "#1565C0", p: P.folder,   href: null,                               ext: false },
  { name: "About Me", bg: "#7B1FA2", p: P.person,   href: null,                               ext: false },
  { name: "Skills",   bg: "#00695C", p: P.chart,    href: null,                               ext: false },
  { name: "Contact",  bg: "#C62828", p: P.mail,     href: "mailto:sarveshts2k4@gmail.com",    ext: true  },
  { name: "Services", bg: "#E65100", p: P.gear,     href: null,                               ext: false },
  { name: "Terminal", bg: "#1A1A2E", p: P.terminal, href: null,                               ext: false },
  { name: "GitHub",   bg: "#1B1F23", p: P.github,   href: "https://github.com/Sarvesh-TS",   ext: true  },
  { name: "LinkedIn", bg: "#0077B5", p: null,       href: "https://linkedin.com",              ext: true, text: "in" },
  { name: "WhatsApp", bg: "#075E54", p: P.whatsapp, href: "https://wa.me/919880231133",       ext: true  },
  { name: "Phone",    bg: "#2E7D32", p: P.phone,    href: "tel:+919880231133",                ext: true  },
  { name: "Resume",   bg: "#1A3A6B", p: P.resume,   href: "/SarveshTS.pdf",                   ext: false },
  { name: "More",     bg: "#37474F", p: null,       href: null,                               ext: false, text: "···" },
]

const DOCK_NAMES = ["My Work", "Contact", "Phone", "GitHub"]

export function AndroidUI() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [greeting, setGreeting] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }))
      setDate(now.toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" }))
      setGreeting(getGreeting())
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const handle = (app: typeof APPS[number]) => {
    if (app.href) {
      if (app.ext) window.open(app.href, "_blank")
      else window.location.href = app.href
    }
  }

  const dockApps = APPS.filter(a => DOCK_NAMES.includes(a.name))

  return (
    <div style={{ minHeight: "100dvh", maxHeight: "100dvh", overflow: "hidden", position: "relative", background: "#000", fontFamily: "'Google Sans','Roboto',system-ui,sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/wallpaper.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.6) 100%)" }} />

      {/* Status bar */}
      <div style={{ position: "relative", zIndex: 10, height: 30, padding: "0 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", letterSpacing: "0.01em" }}>{time}</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white" opacity="0.9"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="2.5" height="12" rx="0.5"/></svg>
          <svg width="15" height="11" viewBox="0 0 24 18" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"><path d="M1 6C5.4 2.2 18.6 2.2 23 6"/><path d="M4 9.8C7.2 7 16.8 7 20 9.8"/><path d="M7.5 13.5C9.4 11.9 14.6 11.9 16.5 13.5"/><circle cx="12" cy="17" r="1.2" fill="white" stroke="none"/></svg>
          <svg width="23" height="12" viewBox="0 0 23 12" fill="none" opacity="0.9"><rect x="0" y="1" width="19" height="10" rx="2" stroke="white" strokeWidth="1.4"/><rect x="1.5" y="2.5" width="13" height="7" rx="1" fill="white"/><rect x="20" y="4" width="2.5" height="4" rx="1" fill="white"/></svg>
        </div>
      </div>

      {/* Content area */}
      <div style={{ position: "relative", zIndex: 10, height: "calc(100dvh - 30px - 36px)", display: "flex", flexDirection: "column", padding: "0 18px" }}>

        {/* Clock + greeting */}
        <div style={{ textAlign: "center", marginTop: 16, marginBottom: 18 }}>
          <div style={{ fontSize: "clamp(60px,18vw,80px)", fontWeight: 200, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>{time}</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginTop: 8 }}>{date}</div>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>{greeting}, Sarvesh &bull; Bangalore 📍</div>
        </div>

        {/* Search bar */}
        <div style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderRadius: 32, padding: "9px 16px", display: "flex", alignItems: "center", gap: 10, marginBottom: 22, border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)", flex: 1 }}>Ask about my work…</span>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4285F4"/></svg>
          </div>
        </div>

        {/* App grid */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px 6px" }}>
            {APPS.map((app, i) => (
              <motion.div key={app.name} initial={{ opacity: 0, scale: 0.75, y: 12 }} animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.75, y: mounted ? 0 : 12 }} transition={{ delay: i * 0.045, duration: 0.28, ease: [0.2,0,0,1] }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }} whileTap={{ scale: 0.84 }} onClick={() => handle(app)}>
                <div style={{ width: 58, height: 58, borderRadius: "24%", background: `linear-gradient(145deg, ${app.bg}EE, ${app.bg}BB)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px ${app.bg}60, 0 2px 4px rgba(0,0,0,0.4)` }}>
                  {app.text ? (
                    <span style={{ fontSize: app.text === "···" ? 20 : 22, fontWeight: 700, color: "#fff", fontFamily: "Georgia,serif", fontStyle: app.text === "in" ? "italic" : "normal" }}>{app.text}</span>
                  ) : app.p ? (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d={app.p}/></svg>
                  ) : null}
                </div>
                <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.88)", textAlign: "center", textShadow: "0 1px 5px rgba(0,0,0,0.9)", lineHeight: 1.25, maxWidth: 64 }}>{app.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dock */}
      <div style={{ position: "absolute", bottom: 44, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <div style={{ background: "rgba(255,255,255,0.13)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", borderRadius: 32, padding: "12px 18px", display: "flex", gap: 14, border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
          {dockApps.map(app => (
            <motion.div key={app.name} whileTap={{ scale: 0.84 }} onClick={() => handle(app)} style={{ cursor: "pointer" }}>
              <div style={{ width: 54, height: 54, borderRadius: "24%", background: `linear-gradient(145deg, ${app.bg}EE, ${app.bg}BB)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 12px ${app.bg}60` }}>
                {app.p ? <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d={app.p}/></svg> : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gesture bar */}
      <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <div style={{ width: 128, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.4)" }} />
      </div>
    </div>
  )
}
