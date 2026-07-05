"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

/* ── helpers ─────────────────────────────────────────────── */
const getGreeting = () => {
  const h = new Date().getHours()
  if (h < 12) return "Good morning"
  if (h < 17) return "Good afternoon"
  return "Good evening"
}

/* ── icon paths ──────────────────────────────────────────── */
const IP = {
  folder:  "M2 6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6Z",
  person:  "M12 2C9.79 2 8 3.79 8 6S9.79 10 12 10 16 8.21 16 6 14.21 2 12 2ZM12 12C7.33 12 4 14.33 4 16V18H20V16C20 14.33 16.67 12 12 12Z",
  chart:   "M4 20V14H8V20H4ZM10 20V8H14V20H10ZM16 20V2H20V20H16Z",
  mail:    "M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z",
  gear:    "M12 15.5C10.07 15.5 8.5 13.93 8.5 12S10.07 8.5 12 8.5 15.5 10.07 15.5 12 13.93 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12S19.47 11.34 19.43 11L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11C4.53 11.34 4.5 11.67 4.5 12S4.53 12.65 4.57 13L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z",
  term:    "M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z",
  phone:   "M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z",
  github:  "M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.59 9.52 21.27 9.52 21C9.52 20.77 9.51 20.14 9.51 19.31C7 19.91 6.35 18.13 6.35 18.13C5.9 17.03 5.26 16.71 5.26 16.71C4.38 16.1 5.33 16.11 5.33 16.11C6.3 16.18 6.81 17.12 6.81 17.12C7.67 18.62 9.09 18.18 9.54 17.93C9.63 17.3 9.89 16.86 10.17 16.61C8.08 16.36 5.88 15.53 5.88 11.93C5.88 10.88 6.27 10.02 6.83 9.35C6.73 9.1 6.38 8.12 6.93 6.78C6.93 6.78 7.74 6.51 9.5 7.73C10.24 7.51 11.01 7.4 11.77 7.4C12.53 7.4 13.3 7.51 14.04 7.73C15.8 6.51 16.61 6.78 16.61 6.78C17.16 8.12 16.81 9.1 16.71 9.35C17.27 10.02 17.66 10.88 17.66 11.93C17.66 15.54 15.45 16.35 13.36 16.6C13.71 16.91 14.04 17.52 14.04 18.46C14.04 19.81 14.03 20.9 14.03 21C14.03 21.28 14.22 21.6 14.72 21.5C18.69 20.17 21.56 16.42 21.56 12C21.56 6.48 17.08 2 12 2Z",
  resume:  "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z",
  wa:      "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  arrow:   "M5 12h14M12 5l7 7-7 7",
}

/* ── app definitions ─────────────────────────────────────── */
type App = {
  name: string; bg: string; icon: string | null; text?: string
  href: string | null; ext: boolean
}

const APPS: App[] = [
  { name:"My Work",  bg:"#1565C0", icon:IP.folder, href:null,                                ext:false },
  { name:"About Me", bg:"#7B1FA2", icon:IP.person, href:null,                                ext:false },
  { name:"Skills",   bg:"#00695C", icon:IP.chart,  href:null,                                ext:false },
  { name:"Contact",  bg:"#C62828", icon:IP.mail,   href:"mailto:sarveshts2k4@gmail.com",     ext:true  },
  { name:"Services", bg:"#E65100", icon:IP.gear,   href:null,                                ext:false },
  { name:"Terminal", bg:"#1A1A2E", icon:IP.term,   href:null,                                ext:false },
  { name:"GitHub",   bg:"#1B1F23", icon:IP.github, href:"https://github.com/Sarvesh-TS",    ext:true  },
  { name:"LinkedIn", bg:"#0077B5", icon:null, text:"in", href:"https://linkedin.com/in/sarveshts", ext:true },
  { name:"WhatsApp", bg:"#25D366", icon:IP.wa,     href:"https://wa.me/919880231133",        ext:true  },
  { name:"Phone",    bg:"#2E7D32", icon:IP.phone,  href:"tel:+919880231133",                 ext:true  },
  { name:"Resume",   bg:"#1A3A6B", icon:IP.resume, href:"/SarveshTS.pdf",                    ext:false },
  { name:"More",     bg:"#37474F", icon:null, text:"···", href:null,                         ext:false },
]

const DOCK_NAMES = ["My Work", "Contact", "WhatsApp", "Phone"]

const PROJECTS = [
  { name:"Bangalore Gastro Centre", type:"Healthcare",     color:"#6366f1", url:"https://www.bangaloregastrocentre.com" },
  { name:"Yuvi Builders",           type:"Real Estate",    color:"#f59e0b", url:"https://yuvibuilders.com"              },
  { name:"Samagra Interiors",       type:"Interior Design",color:"#10b981", url:"https://samagrainteriors.com"          },
  { name:"The Occasion Bangalore",  type:"Events",         color:"#ec4899", url:"https://theoccasionbangalore.com"      },
]

/* ── StatusBar ───────────────────────────────────────────── */
function StatusBar({ time }: { time: string }) {
  return (
    <div style={{ height:30, padding:"0 18px", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
      <span style={{ fontSize:13, fontWeight:600, color:"#fff", letterSpacing:"0.01em" }}>{time}</span>
      <div style={{ display:"flex", gap:6, alignItems:"center" }}>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white" opacity="0.9">
          <rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/>
          <rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="2.5" height="12" rx="0.5"/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 24 18" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9">
          <path d="M1 6C5.4 2.2 18.6 2.2 23 6"/><path d="M4 9.8C7.2 7 16.8 7 20 9.8"/>
          <path d="M7.5 13.5C9.4 11.9 14.6 11.9 16.5 13.5"/><circle cx="12" cy="17" r="1.2" fill="white" stroke="none"/>
        </svg>
        <svg width="23" height="12" viewBox="0 0 23 12" fill="none" opacity="0.9">
          <rect x="0" y="1" width="19" height="10" rx="2" stroke="white" strokeWidth="1.4"/>
          <rect x="1.5" y="2.5" width="13" height="7" rx="1" fill="white"/>
          <rect x="20" y="4" width="2.5" height="4" rx="1" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

/* ── Squircle icon ───────────────────────────────────────── */
function AppIcon({ app, size=58, onClick }: { app:App; size?:number; onClick:()=>void }) {
  return (
    <motion.div
      whileTap={{ scale:0.82 }}
      onClick={onClick}
      style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5, cursor:"pointer" }}
    >
      <div style={{
        width:size, height:size, borderRadius:"24%",
        background:`linear-gradient(145deg,${app.bg}EE,${app.bg}AA)`,
        display:"flex", alignItems:"center", justifyContent:"center",
        boxShadow:`0 4px 14px ${app.bg}55, 0 2px 4px rgba(0,0,0,0.4)`,
      }}>
        {app.text
          ? <span style={{ fontSize:size*0.38, fontWeight:700, color:"#fff", fontFamily:"Georgia,serif", fontStyle:app.text==="in"?"italic":"normal" }}>{app.text}</span>
          : <svg width={size*0.45} height={size*0.45} viewBox="0 0 24 24" fill="white"><path d={app.icon!}/></svg>
        }
      </div>
      <span style={{ fontSize:10.5, color:"rgba(255,255,255,0.88)", textAlign:"center", textShadow:"0 1px 5px rgba(0,0,0,0.9)", lineHeight:1.25, maxWidth:64 }}>{app.name}</span>
    </motion.div>
  )
}

/* ── Main component ──────────────────────────────────────── */
export function AndroidUI() {
  const [time, setTime]         = useState("")
  const [date, setDate]         = useState("")
  const [greeting, setGreeting] = useState("")
  const [mounted, setMounted]   = useState(false)
  const [screen, setScreen]     = useState(0)          // 0 = home, 1 = portfolio
  const touchStartX             = useRef<number | null>(null)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" }))
      setDate(now.toLocaleDateString("en-IN", { weekday:"long", month:"long", day:"numeric" }))
      setGreeting(getGreeting())
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  /* open link */
  const open = (href: string, ext: boolean) => {
    if (ext) window.open(href, "_blank", "noopener")
    else     window.location.href = href
  }

  const handleApp = (app: App) => { if (app.href) open(app.href, app.ext) }

  /* swipe detection */
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.targetTouches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx < -50) setScreen(s => Math.min(s + 1, 1))
    if (dx >  50) setScreen(s => Math.max(s - 1, 0))
    touchStartX.current = null
  }

  const dockApps = APPS.filter(a => DOCK_NAMES.includes(a.name))

  return (
    <div
      style={{ minHeight:"100dvh", maxHeight:"100dvh", overflow:"hidden", position:"relative", background:"#000", fontFamily:"'Google Sans','Roboto',system-ui,sans-serif" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* wallpaper */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"url('/wallpaper.png')", backgroundSize:"cover", backgroundPosition:"center" }}/>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.22) 45%,rgba(0,0,0,0.62) 100%)" }}/>

      {/* status bar – always on top */}
      <div style={{ position:"relative", zIndex:20 }}>
        <StatusBar time={time}/>
      </div>

      {/* ── sliding screens container ─────────────────────── */}
      <div style={{ position:"relative", zIndex:10, overflow:"hidden", height:"calc(100dvh - 30px - 96px)" }}>
        <motion.div
          style={{ display:"flex", width:"200vw", height:"100%" }}
          animate={{ x: screen === 0 ? 0 : "-50%" }}
          transition={{ type:"spring", stiffness:380, damping:36 }}
        >

          {/* ════════ SCREEN 1 — HOME ════════════════════════ */}
          <div style={{ width:"50%", height:"100%", flexShrink:0, padding:"0 18px", display:"flex", flexDirection:"column", overflow:"hidden" }}>

            {/* big clock */}
            <div style={{ textAlign:"center", marginTop:16, marginBottom:16 }}>
              <div style={{ fontSize:"clamp(58px,16vw,76px)", fontWeight:200, color:"#fff", lineHeight:1, letterSpacing:"-0.02em" }}>{time}</div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.8)", marginTop:8 }}>{date}</div>
              <div style={{ fontSize:12.5, color:"rgba(255,255,255,0.5)", marginTop:3 }}>{greeting}, Sarvesh · Bangalore 📍</div>
            </div>

            {/* search bar */}
            <div style={{ background:"rgba(255,255,255,0.14)", backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)", borderRadius:32, padding:"9px 16px", display:"flex", alignItems:"center", gap:10, marginBottom:18, border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 4px 16px rgba(0,0,0,0.2)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <span style={{ fontSize:13.5, color:"rgba(255,255,255,0.5)", flex:1 }}>Ask about my work…</span>
              <div style={{ width:26, height:26, borderRadius:"50%", background:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:13, fontWeight:800, background:"linear-gradient(135deg,#4285F4,#EA4335,#FBBC05,#34A853)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>G</span>
              </div>
            </div>

            {/* app grid */}
            <div style={{ flex:1, overflow:"hidden" }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px 6px" }}>
                {APPS.map((app, i) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity:0, scale:0.72, y:10 }}
                    animate={{ opacity:mounted?1:0, scale:mounted?1:0.72, y:mounted?0:10 }}
                    transition={{ delay:i*0.038, duration:0.26, ease:[0.2,0,0,1] }}
                  >
                    <AppIcon app={app} onClick={() => handleApp(app)}/>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ════════ SCREEN 2 — PORTFOLIO ═══════════════════ */}
          <div style={{ width:"50%", height:"100%", flexShrink:0, padding:"0 16px", overflowY:"auto", WebkitOverflowScrolling:"touch" as "auto" }}>

            {/* profile card */}
            <div style={{ textAlign:"center", marginTop:18, marginBottom:20 }}>
              <div style={{ width:70, height:70, borderRadius:"50%", background:"linear-gradient(135deg,#7B1FA2,#1565C0)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 10px", fontSize:28, fontWeight:800, color:"#fff", boxShadow:"0 6px 20px rgba(123,31,162,0.5)" }}>S</div>
              <div style={{ fontSize:21, fontWeight:700, color:"#fff", letterSpacing:"-0.01em" }}>Sarvesh T S</div>
              <div style={{ fontSize:12.5, color:"rgba(255,255,255,0.6)", marginTop:3 }}>Web Developer · Digital Marketer</div>
              <div style={{ fontSize:11.5, color:"rgba(255,255,255,0.4)", marginTop:2 }}>📍 Bangalore, India</div>
            </div>

            {/* stats row */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:7, marginBottom:18 }}>
              {([["20+","Projects"],["4+","Years"],["100%","Rating"]] as [string,string][]).map(([v,l]) => (
                <div key={l} style={{ background:"rgba(255,255,255,0.09)", backdropFilter:"blur(20px)", borderRadius:12, padding:"11px 6px", textAlign:"center", border:"1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontSize:21, fontWeight:200, color:"#60cdff" }}>{v}</div>
                  <div style={{ fontSize:9.5, color:"rgba(255,255,255,0.42)", marginTop:3, letterSpacing:"0.04em" }}>{l}</div>
                </div>
              ))}
            </div>

            {/* projects */}
            <div style={{ fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(255,255,255,0.38)", marginBottom:8, fontWeight:600 }}>Featured Projects</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:18 }}>
              {PROJECTS.map(p => (
                <motion.div
                  key={p.name}
                  whileTap={{ scale:0.97 }}
                  onClick={() => window.open(p.url, "_blank", "noopener")}
                  style={{ background:"rgba(255,255,255,0.08)", borderRadius:12, padding:"11px 13px", display:"flex", alignItems:"center", gap:12, cursor:"pointer", border:"1px solid rgba(255,255,255,0.07)" }}
                >
                  <div style={{ width:34, height:34, borderRadius:9, background:p.color+"25", border:`1px solid ${p.color}45`, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={p.color}><path d={IP.folder}/></svg>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:12.5, fontWeight:600, color:"#fff", lineHeight:1.25 }}>{p.name}</div>
                    <div style={{ fontSize:10.5, color:"rgba(255,255,255,0.42)", marginTop:2 }}>{p.type}</div>
                  </div>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round"><path d={IP.arrow}/></svg>
                </motion.div>
              ))}
            </div>

            {/* social links */}
            <div style={{ fontSize:10, letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(255,255,255,0.38)", marginBottom:10, fontWeight:600 }}>Connect</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginBottom:18 }}>
              {([
                { name:"GitHub",   bg:"#1B1F23", icon:IP.github, text:undefined, href:"https://github.com/Sarvesh-TS" },
                { name:"LinkedIn", bg:"#0077B5", icon:null, text:"in",           href:"https://linkedin.com/in/sarveshts" },
                { name:"WhatsApp", bg:"#25D366", icon:IP.wa, text:undefined,     href:"https://wa.me/919880231133" },
                { name:"Email",    bg:"#C62828", icon:IP.mail, text:undefined,   href:"mailto:sarveshts2k4@gmail.com" },
              ]).map(s => (
                <motion.div key={s.name} whileTap={{ scale:0.88 }} onClick={() => window.open(s.href, "_blank", "noopener")} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5, cursor:"pointer" }}>
                  <div style={{ width:52, height:52, borderRadius:"24%", background:`linear-gradient(145deg,${s.bg}EE,${s.bg}AA)`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 4px 12px ${s.bg}50` }}>
                    {s.text
                      ? <span style={{ fontSize:19, fontWeight:700, color:"#fff", fontFamily:"Georgia,serif", fontStyle:"italic" }}>{s.text}</span>
                      : <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d={s.icon!}/></svg>
                    }
                  </div>
                  <span style={{ fontSize:9.5, color:"rgba(255,255,255,0.7)", textShadow:"0 1px 4px rgba(0,0,0,0.8)" }}>{s.name}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileTap={{ scale:0.96 }}
              onClick={() => window.open("mailto:sarveshts2k4@gmail.com", "_blank")}
              style={{ width:"100%", background:"linear-gradient(135deg,#0067c0,#0092E4)", borderRadius:14, padding:"14px 0", border:"none", cursor:"pointer", marginBottom:20, boxShadow:"0 4px 16px rgba(0,103,192,0.4)" }}
            >
              <span style={{ fontSize:15, fontWeight:600, color:"#fff" }}>✉ Hire Me</span>
            </motion.button>
          </div>

        </motion.div>
      </div>

      {/* ── dock + page dots ──────────────────────────────── */}
      <div style={{ position:"absolute", bottom:40, left:0, right:0, zIndex:20, display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>

        {/* page dots */}
        <div style={{ display:"flex", gap:6, alignItems:"center" }}>
          {[0, 1].map(i => (
            <button
              key={i}
              onClick={() => setScreen(i)}
              style={{
                width: screen===i ? 18 : 6,
                height: 6,
                borderRadius: 3,
                background: screen===i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 260ms cubic-bezier(0.2,0,0,1)",
              }}
            />
          ))}
        </div>

        {/* frosted dock */}
        <div style={{ background:"rgba(255,255,255,0.13)", backdropFilter:"blur(32px)", WebkitBackdropFilter:"blur(32px)", borderRadius:32, padding:"10px 18px", display:"flex", gap:14, border:"1px solid rgba(255,255,255,0.12)", boxShadow:"0 8px 32px rgba(0,0,0,0.5)" }}>
          {dockApps.map(app => (
            <motion.div key={app.name} whileTap={{ scale:0.83 }} onClick={() => handleApp(app)} style={{ cursor:"pointer" }}>
              <div style={{ width:54, height:54, borderRadius:"24%", background:`linear-gradient(145deg,${app.bg}EE,${app.bg}AA)`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 4px 12px ${app.bg}55` }}>
                {app.text
                  ? <span style={{ fontSize:20, fontWeight:700, color:"#fff", fontFamily:"Georgia,serif", fontStyle:"italic" }}>{app.text}</span>
                  : <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d={app.icon!}/></svg>
                }
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* gesture bar */}
      <div style={{ position:"absolute", bottom:12, left:"50%", transform:"translateX(-50%)", zIndex:20 }}>
        <div style={{ width:128, height:5, borderRadius:3, background:"rgba(255,255,255,0.38)" }}/>
      </div>
    </div>
  )
}
