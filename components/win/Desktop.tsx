"use client"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useWindows, type AppId } from "@/contexts/WindowContext"
import { Window } from "@/components/win/Window"
import { StartMenu } from "@/components/win/StartMenu"
import { AppIcon, ExplorerIcon } from "@/components/win/WinIcons"
import { DesktopWidgets } from "@/components/win/Widgets"
import { FileExplorer } from "@/components/apps/FileExplorer"
import { TaskManager }  from "@/components/apps/TaskManager"
import { Notepad }      from "@/components/apps/Notepad"
import { Mail }         from "@/components/apps/Mail"
import { Settings }     from "@/components/apps/Settings"

/* ── Desktop icon definitions ───────────────────────────────── */
const ICONS: { id: AppId; label: string }[] = [
  { id: "fileExplorer", label: "My Projects" },
  { id: "notepad",      label: "About Me"    },
  { id: "taskManager",  label: "Task Manager"},
  { id: "mail",         label: "Mail"        },
  { id: "settings",     label: "Services"    },
  { id: "terminal",     label: "Terminal"    },
  { id: "calculator",   label: "Calculator"  },
  { id: "minesweeper",  label: "Minesweeper" },
]

/* ── Taskbar pinned apps ────────────────────────────────────── */
const TASKBAR_APPS: AppId[] = [
  "fileExplorer", "mail", "settings", "notepad", "taskManager", "terminal",
]

/* ── App content router ─────────────────────────────────────── */
function AppContent({ id }: { id: AppId }) {
  switch (id) {
    case "fileExplorer": return <FileExplorer />
    case "notepad":      return <Notepad />
    case "taskManager":  return <TaskManager />
    case "mail":         return <Mail />
    case "settings":     return <Settings />
    case "terminal":     return <TerminalApp />
    case "calculator":   return <CalcApp />
    case "minesweeper":  return <MineApp />
    default:             return null
  }
}

/* ── Context menu ───────────────────────────────────────────── */
interface CtxMenu { x: number; y: number }

export function Desktop() {
  const { openApp, closeStart, windows } = useWindows()
  const [ctx, setCtx]         = useState<CtxMenu | null>(null)
  const [selected, setSelected] = useState<AppId | null>(null)

  const handleRightClick = useCallback((e: React.MouseEvent) => {
    const el = e.target as HTMLElement
    if (el.closest(".win-window,.taskbar,.desktop-icon-wrap,.context-menu")) return
    e.preventDefault()
    setCtx({ x: e.clientX, y: e.clientY })
    closeStart()
  }, [closeStart])

  useEffect(() => {
    const close = () => setCtx(null)
    window.addEventListener("pointerdown", close)
    return () => window.removeEventListener("pointerdown", close)
  }, [])

  return (
    <div
      onContextMenu={handleRightClick}
      style={{
        position: "fixed",
        inset: 0,
        bottom: "var(--taskbar-h)",
        backgroundImage: "url('/wallpaper.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Desktop icons ──────────────────────────────────── */}
      <div style={{
        position: "absolute", top: 16, left: 16,
        display: "flex", flexDirection: "column", gap: 2,
        maxHeight: "calc(100% - 20px)",
        overflowY: "auto", overflowX: "visible",
        scrollbarWidth: "none",
        paddingBottom: 4,
      }}>
        {ICONS.map(icon => (
          <div
            key={icon.id}
            className="desktop-icon-wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
              padding: "8px 6px 6px",
              borderRadius: 6,
              cursor: "pointer",
              width: 76,
              textAlign: "center",
              background: selected === icon.id
                ? "rgba(0,103,192,0.38)"
                : "transparent",
              border: selected === icon.id
                ? "1px solid rgba(96,205,255,0.45)"
                : "1px solid transparent",
              transition: "background 100ms, border-color 100ms",
            }}
            onClick={() => setSelected(icon.id)}
            onDoubleClick={() => { openApp(icon.id); setSelected(null) }}
            onMouseEnter={e => {
              if (selected !== icon.id)
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"
            }}
            onMouseLeave={e => {
              if (selected !== icon.id)
                (e.currentTarget as HTMLElement).style.background = "transparent"
            }}
            role="button"
            tabIndex={0}
            aria-label={`Open ${icon.label}`}
            onKeyDown={e => e.key === "Enter" && openApp(icon.id)}
          >
            <div style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.7))" }}>
              <AppIcon id={icon.id} size={40} />
            </div>
            <span style={{
              fontSize: 11,
              color: "#fff",
              textShadow: "0 1px 4px rgba(0,0,0,0.95), 0 0 8px rgba(0,0,0,0.8)",
              lineHeight: 1.3,
              wordBreak: "break-word",
              maxWidth: 70,
              userSelect: "none",
            }}>
              {icon.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Windows ────────────────────────────────────────── */}
      {windows.map(w => (
        <Window key={w.id} id={w.id}>
          <AppContent id={w.id} />
        </Window>
      ))}

      {/* ── Widgets panel ──────────────────────────────────── */}
      <DesktopWidgets />

      {/* ── Start Menu ─────────────────────────────────────── */}
      <StartMenu />

      {/* ── Taskbar ────────────────────────────────────────── */}
      <Taskbar />

      {/* ── Right-click context menu ───────────────────────── */}
      <AnimatePresence>
        {ctx && (
          <motion.div
            className="context-menu"
            style={{ left: ctx.x, top: ctx.y }}
            initial={{ opacity: 0, scale: 0.94, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.1 }}
            onPointerDown={e => e.stopPropagation()}
          >
            <div className="context-item" onClick={() => { openApp("fileExplorer"); setCtx(null) }}>
              <ExplorerIcon size={16} /> View Projects
            </div>
            <div className="context-item" onClick={() => { openApp("notepad"); setCtx(null) }}>
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><rect x="6" y="3" width="20" height="27" rx="2" fill="#F0F0F0"/><rect x="6" y="3" width="5" height="27" rx="2" fill="#FFD04E"/></svg>
              About Sarvesh
            </div>
            <div className="context-item" onClick={() => { openApp("taskManager"); setCtx(null) }}>
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="5" fill="#1A2640"/><rect x="6" y="20" width="4" height="8" rx="1.5" fill="#29B463"/><rect x="12" y="15" width="4" height="13" rx="1.5" fill="#34C472"/><rect x="18" y="10" width="4" height="18" rx="1.5" fill="#4AD480"/></svg>
              Skills
            </div>
            <div className="context-sep" />
            <div className="context-item" onClick={() => { openApp("mail"); setCtx(null) }}>
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><rect x="2" y="6" width="28" height="20" rx="3" fill="#1B90E0"/><path d="M2 9.5L16 19L30 9.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/></svg>
              Send Message
            </div>
            <div className="context-sep" />
            <div className="context-item" onClick={() => { openApp("minesweeper"); setCtx(null) }}>
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="5" fill="#1A5AB0"/><circle cx="7.5" cy="15.5" r="2.5" fill="#FF2020"/></svg>
              Play Minesweeper
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Taskbar component ──────────────────────────────────────── */
function Taskbar() {
  const { windows, openApp, minimizeApp, toggleStart, startOpen, focusApp } = useWindows()
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    function tick() {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }))
      setDate(now.toLocaleDateString("en-IN", { month: "numeric", day: "numeric", year: "numeric" }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="taskbar">
      {/* Start button */}
      <button
        className="taskbar-btn"
        onClick={toggleStart}
        aria-label="Start"
        style={{ background: startOpen ? "rgba(255,255,255,0.1)" : undefined }}
      >
        <svg width="18" height="18" viewBox="0 0 88 88" fill="none">
          <rect x="0"  y="0"  width="40" height="40" fill="#f25022" rx="2"/>
          <rect x="48" y="0"  width="40" height="40" fill="#7fba00" rx="2"/>
          <rect x="0"  y="48" width="40" height="40" fill="#00a4ef" rx="2"/>
          <rect x="48" y="48" width="40" height="40" fill="#ffb900" rx="2"/>
        </svg>
      </button>

      <div className="taskbar-sep" />

      {/* Pinned + open apps */}
      <div className="taskbar-center">
        {TASKBAR_APPS.map(appId => {
          const win = windows.find(w => w.id === appId)
          const isOpen   = win?.isOpen ?? false
          const isActive = isOpen && !win?.isMinimized
          return (
            <button
              key={appId}
              className="taskbar-btn"
              title={appId}
              aria-label={appId}
              style={{
                background: isActive ? "rgba(255,255,255,0.09)" : undefined,
                borderRadius: 8,
              }}
              onClick={() => {
                if (!isOpen) { openApp(appId); return }
                if (isActive) minimizeApp(appId)
                else focusApp(appId)
              }}
            >
              <AppIcon id={appId} size={22} />
              {isOpen && (
                <div style={{
                  width: isActive ? 16 : 4,
                  height: 3,
                  borderRadius: 2,
                  background: "var(--win-accent)",
                  position: "absolute",
                  bottom: 3,
                  transition: "width 200ms ease",
                }} />
              )}
            </button>
          )
        })}
      </div>

      {/* System tray */}
      <div className="tray">
        <div className="tray-item" title="Network">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.8"><path d="M1.41 8.59C5.2 4.79 10.36 2.5 12 2.5s6.8 2.29 10.59 6.09l-1.42 1.41C17.78 6.59 13.57 4.5 12 4.5s-5.78 2.09-9.17 5.5L1.41 8.59zM12 10.5c-1.81 0-3.45.72-4.65 1.88L5.93 10.96C7.52 9.41 9.64 8.5 12 8.5s4.48.91 6.07 2.46l-1.42 1.42C15.45 11.22 13.81 10.5 12 10.5zm0 4c-.83 0-1.58.34-2.12.88L12 17.5l2.12-2.12C13.58 14.84 12.83 14.5 12 14.5z"/></svg>
        </div>
        <div className="tray-item" title="Sound">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.8"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </div>
        <div
          className="tray-item"
          style={{ textAlign: "right", lineHeight: 1.35, cursor: "default", padding: "3px 10px" }}
        >
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.9)" }}>{time}</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{date}</div>
        </div>
      </div>
    </div>
  )
}

/* ── Inline stub apps ───────────────────────────────────────── */
function TerminalApp() {
  const [lines, setLines] = useState<string[]>([
    "Windows Terminal  [Version 11.0 Build 22631]",
    "(c) Sarvesh TS. All rights reserved.",
    "",
    'Type "help" for a list of commands.',
    "",
  ])
  const [input, setInput] = useState("")

  const run = (cmd: string) => {
    const c = cmd.trim().toLowerCase()
    let out: string[] = []
    if (c === "help")     out = ["  projects  — list all projects", "  skills    — show skill levels", "  contact   — contact info", "  whoami    — about me", "  clear     — clear screen", "  exit      — close terminal"]
    else if (c === "projects") out = ["  \u25b6  Bangalore Gastro Centre  (Next.js + Drupal)", "  \u25b6  Yuvi Builders           (Next.js + Drupal)", "  \u25b6  Samagra Interiors       (Next.js + Tailwind)", "  \u25b6  Snip Dark Salon         (WordPress)", "  \u25b6  The Occasion Bangalore  (Next.js)", "  ... and 15+ more"]
    else if (c === "skills") out = ["  JavaScript  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591  95%", "  React/Next  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591  92%", "  WordPress   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591  88%", "  SEO         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591  85%", "  Figma       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591  80%"]
    else if (c === "contact") out = ["  Email  : sarveshts2k4@gmail.com", "  Phone  : +91 9880231133", "  GitHub : github.com/Sarvesh-TS", "  \u25cf Available for new projects"]
    else if (c === "whoami") out = ["  Sarvesh T S", "  Freelance Web Developer & Digital Marketer", "  Bangalore, India  |  IST (UTC+5:30)"]
    else if (c === "exit")  out = ["Closing terminal..."]
    else if (c === "clear") { setLines([]); setInput(""); return }
    else if (c === "")     out = []
    else out = [`'${cmd}': command not recognized. Type "help".`]
    setLines(l => [...l, `PS C:\\Users\\Sarvesh> ${cmd}`, ...out, ""])
    setInput("")
  }

  return (
    <div style={{ height: "100%", background: "#0c0c0c", display: "flex", flexDirection: "column", padding: "12px 16px", fontFamily: '"Cascadia Code","Consolas","Courier New",monospace', fontSize: 13 }}>
      <div style={{ flex: 1, overflowY: "auto", color: "#cccccc", lineHeight: 1.9 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ whiteSpace: "pre" }}>{l || "\u00a0"}</div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#cccccc", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 8, marginTop: 4 }}>
        <span style={{ color: "#60CDFF", fontWeight: 500 }}>PS C:\Users\Sarvesh&gt;</span>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && run(input)}
          style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#cccccc", fontFamily: "inherit", fontSize: 13 }}
          autoFocus
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  )
}

function CalcApp() {
  const [display, setDisplay] = useState("0")
  const [prev, setPrev]   = useState<number | null>(null)
  const [op, setOp]       = useState<string | null>(null)
  const [reset, setReset] = useState(false)

  const press = (v: string) => {
    if (!isNaN(Number(v)) || v === ".") {
      setDisplay(d => reset || d === "0" ? v : d.length < 12 ? d + v : d)
      setReset(false)
    } else if (v === "C")  { setDisplay("0"); setPrev(null); setOp(null) }
    else if (v === "±")    { setDisplay(d => String(-parseFloat(d))) }
    else if (v === "%")    { setDisplay(d => String(parseFloat(d) / 100)) }
    else if (v === "=") {
      if (prev !== null && op) {
        const cur = parseFloat(display)
        const r = op === "+" ? prev + cur : op === "−" ? prev - cur : op === "×" ? prev * cur : prev / cur
        setDisplay(String(parseFloat(r.toFixed(10))))
        setPrev(null); setOp(null); setReset(true)
      }
    } else { setPrev(parseFloat(display)); setOp(v); setReset(true) }
  }

  const ROWS = [["C","±","%","÷"],["7","8","9","×"],["4","5","6","−"],["1","2","3","+"],[["0",2],".","="]]
  const OPS = new Set(["÷","×","−","+","="])

  return (
    <div style={{ height: "100%", background: "#1c1c1c", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "24px 20px 12px", textAlign: "right", minHeight: 110 }}>
        {op && <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>{prev} {op}</div>}
        <div style={{ fontSize: 52, fontWeight: 100, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, wordBreak: "break-all", fontFamily: "inherit" }}>{display}</div>
      </div>
      <div style={{ flex: 1, padding: "0 8px 8px", display: "flex", flexDirection: "column", gap: 1 }}>
        {ROWS.map((row, ri) => (
          <div key={ri} style={{ flex: 1, display: "grid", gridTemplateColumns: ri === 4 ? "2fr 1fr 1fr" : "repeat(4,1fr)", gap: 1 }}>
            {row.map((b: any, ci) => {
              const key = Array.isArray(b) ? b[0] : b
              return (
                <button
                  key={ci}
                  onClick={() => press(key)}
                  style={{
                    borderRadius: 6, border: "none", fontSize: 20, fontFamily: "inherit", cursor: "pointer",
                    background: key === "C" || key === "±" || key === "%" ? "rgba(255,255,255,0.16)"
                      : OPS.has(key) ? "#0067C0"
                      : "rgba(255,255,255,0.07)",
                    color: "#fff",
                    transition: "filter 80ms, transform 60ms",
                  }}
                  onMouseDown={e => (e.currentTarget.style.transform = "scale(0.95)")}
                  onMouseUp={e => (e.currentTarget.style.transform = "")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "")}
                >
                  {key}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function MineApp() {
  const SIZE = 9, MINES = 10
  type Cell = { mine: boolean; revealed: boolean; flagged: boolean; adj: number }
  const make = (): Cell[][] => {
    const g: Cell[][] = Array.from({length:SIZE}, () => Array.from({length:SIZE}, () => ({mine:false,revealed:false,flagged:false,adj:0})))
    let p = 0; while (p < MINES) { const r=Math.floor(Math.random()*SIZE), c=Math.floor(Math.random()*SIZE); if(!g[r][c].mine){g[r][c].mine=true;p++} }
    for(let r=0;r<SIZE;r++) for(let c=0;c<SIZE;c++) { if(g[r][c].mine) continue; let cnt=0; for(let dr=-1;dr<=1;dr++) for(let dc=-1;dc<=1;dc++){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<SIZE&&nc>=0&&nc<SIZE&&g[nr][nc].mine)cnt++}; g[r][c].adj=cnt }
    return g
  }
  const [grid, setGrid] = useState(make)
  const [status, setStatus] = useState<"playing"|"won"|"lost">("playing")
  const COLORS = ["","#60cdff","#4ade80","#f87171","#818cf8","#f59e0b","#22d3ee","#aaa","#888"]

  const reveal = (r:number,c:number) => {
    if(status!=="playing") return
    const g = grid.map(row=>row.map(cell=>({...cell})))
    if(g[r][c].revealed||g[r][c].flagged) return
    if(g[r][c].mine){g.forEach(row=>row.forEach(cell=>{if(cell.mine)cell.revealed=true}));setGrid(g);setStatus("lost");return}
    const flood=(r:number,c:number)=>{if(r<0||r>=SIZE||c<0||c>=SIZE||g[r][c].revealed||g[r][c].flagged||g[r][c].mine)return;g[r][c].revealed=true;if(g[r][c].adj===0)for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++)flood(r+dr,c+dc)}
    flood(r,c);setGrid(g)
    if(g.flat().filter(x=>!x.mine).every(x=>x.revealed)) setStatus("won")
  }
  const flag=(e:React.MouseEvent,r:number,c:number)=>{e.preventDefault();if(status!=="playing")return;const g=grid.map(row=>row.map(cell=>({...cell})));if(!g[r][c].revealed)g[r][c].flagged=!g[r][c].flagged;setGrid(g)}

  return (
    <div style={{ height:"100%", background:"#1a1a1a", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:14 }}>
      <div style={{ display:"flex", gap:14, alignItems:"center" }}>
        <span style={{ fontSize:13, color:"var(--win-text-2)" }}>💣 {MINES} mines</span>
        <button onClick={()=>{setGrid(make());setStatus("playing")}} className="btn-subtle" style={{fontSize:12,padding:"4px 14px"}}>New Game</button>
        {status==="won"  && <span style={{color:"#4ade80",fontSize:13,fontWeight:600}}>You won! 🎉</span>}
        {status==="lost" && <span style={{color:"#f87171",fontSize:13,fontWeight:600}}>Game over 💥</span>}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:`repeat(${SIZE},30px)`, gap:2 }}>
        {grid.map((row,r)=>row.map((cell,c)=>(
          <button key={`${r}-${c}`} onClick={()=>reveal(r,c)} onContextMenu={e=>flag(e,r,c)} style={{
            width:30,height:30,borderRadius:4,border:"none",cursor:"pointer",
            fontSize:12,fontWeight:700,
            background:cell.revealed?(cell.mine?"#f87171":"rgba(255,255,255,0.06)"):"rgba(255,255,255,0.13)",
            color:cell.revealed&&!cell.mine&&cell.adj>0?COLORS[cell.adj]:"var(--win-text)",
            boxShadow:!cell.revealed?"inset 0 1px 0 rgba(255,255,255,0.1)":"none",
            transition:"background 80ms",
          }}>
            {cell.revealed?(cell.mine?"💥":cell.adj||""):(cell.flagged?"🚩":"")}
          </button>
        )))}
      </div>
      <div style={{fontSize:11,color:"var(--win-text-muted)"}}>Right-click to flag · Double-click icon to open apps</div>
    </div>
  )
}
