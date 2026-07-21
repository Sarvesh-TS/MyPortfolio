"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useWindows, type AppId } from "@/contexts/WindowContext"
import { AppIcon } from "@/components/win/WinIcons"

const PINNED: { id: AppId; label: string }[] = [
  { id: "fileExplorer", label: "File Explorer" },
  { id: "mail",         label: "Mail"          },
  { id: "settings",     label: "Settings"      },
  { id: "taskManager",  label: "Task Manager"  },
  { id: "notepad",      label: "Notepad"       },
  { id: "terminal",     label: "Terminal"      },
  { id: "calculator",   label: "Calculator"    },
  { id: "minesweeper",  label: "Minesweeper"   },
]

export function StartMenu() {
  const { startOpen, closeStart, openApp } = useWindows()

  return (
    <AnimatePresence>
      {startOpen && (
        <>
          <div style={{ position:"fixed", inset:0, zIndex:9400 }} onClick={closeStart} />
          <motion.div
            className="start-menu mica"
            style={{ zIndex:9500 }}
            initial={{ opacity:0, y:14, scale:0.97 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:14, scale:0.97 }}
            transition={{ duration:0.18, ease:[0.2,0,0,1] }}
          >
            {/* Search bar */}
            <div className="start-search">
              <div style={{ position:"relative" }}>
                <div style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", opacity:0.4, pointerEvents:"none" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <input
                  placeholder="Search for apps, files, settings…"
                  style={{ paddingLeft: 36 }}
                  readOnly
                />
              </div>
            </div>

            {/* Pinned */}
            <div className="start-pinned">
              <div className="start-section-label">Pinned</div>
              <div className="start-apps">
                {PINNED.map(app => (
                  <div
                    key={app.id}
                    className="start-app"
                    onClick={() => { openApp(app.id); closeStart() }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === "Enter" && (openApp(app.id), closeStart())}
                  >
                    <div className="start-app-icon" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <AppIcon id={app.id} size={24} />
                    </div>
                    <span className="start-app-name">{app.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="start-footer mica">
              <div className="start-user">
                <div className="start-user-avatar">S</div>
                <span style={{ fontSize:13, color:"var(--win-text)" }}>Sarvesh TS</span>
              </div>
              <button className="btn-subtle" style={{ fontSize:12, padding:"4px 14px", display:"flex", alignItems:"center", gap:6 }} onClick={() => { closeStart(); setTimeout(() => window.location.reload(), 200) }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Shut down
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
