"use client"
import { type ReactNode } from "react"
import { motion, useMotionValue } from "framer-motion"
import { useWindows, type AppId } from "@/contexts/WindowContext"
import { AppIcon } from "@/components/win/WinIcons"

interface Props { id: AppId; children: ReactNode }

const WIN_TITLES: Record<AppId, string> = {
  fileExplorer: "File Explorer",
  notepad:      "about.txt — Notepad",
  taskManager:  "Task Manager",
  mail:         "Mail",
  terminal:     "Windows Terminal",
  calculator:   "Calculator",
  settings:     "Settings",
  minesweeper:  "Minesweeper",
}

export function Window({ id, children }: Props) {
  const { windows, closeApp, minimizeApp, maximizeApp, focusApp } = useWindows()
  const win = windows.find(w => w.id === id)
  if (!win || !win.isOpen) return null

  // ── useMotionValue fixes drag vs animate conflict ─────────────
  const xMV = useMotionValue(win.position.x)
  const yMV = useMotionValue(win.position.y)

  const sharedProps = {
    onPointerDown: () => focusApp(id),
    className: "win-window mica" as const,
  }

  /* Maximized ─ full screen, no drag */
  if (win.isMaximized) {
    return (
      <motion.div
        {...sharedProps}
        style={{
          position: "fixed",
          inset: 0,
          bottom: "var(--taskbar-h)",
          zIndex: win.zIndex,
          borderRadius: 0,
          pointerEvents: win.isMinimized ? "none" : "auto",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: win.isMinimized ? 0 : 1 }}
        transition={{ duration: 0.12, ease: [0.2, 0, 0, 1] }}
      >
        <WindowHighlight />
        <TitleBar id={id} isMaximized onClose={() => closeApp(id)} onMinimize={() => minimizeApp(id)} onMaximize={() => maximizeApp(id)} />
        <div className="win-content" onPointerDown={e => e.stopPropagation()}>{children}</div>
      </motion.div>
    )
  }

  /* Normal ─ draggable */
  return (
    <motion.div
      {...sharedProps}
      drag
      dragMomentum={false}
      dragElastic={0}
      style={{
        x: xMV,
        y: yMV,
        position: "absolute",
        width: win.size.width,
        height: win.size.height,
        zIndex: win.zIndex,
        pointerEvents: win.isMinimized ? "none" : "auto",
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{
        opacity: win.isMinimized ? 0 : 1,
        scale:   win.isMinimized ? 0.88 : 1,
      }}
      transition={{ duration: 0.16, ease: [0.2, 0, 0, 1] }}
    >
      <WindowHighlight />
      <TitleBar id={id} isMaximized={false} onClose={() => closeApp(id)} onMinimize={() => minimizeApp(id)} onMaximize={() => maximizeApp(id)} />
      <div className="win-content" onPointerDown={e => e.stopPropagation()}>{children}</div>
    </motion.div>
  )
}

/* Subtle top-edge highlight — exactly like Win11 */
function WindowHighlight() {
  return (
    <div style={{
      position: "absolute",
      top: 0, left: 0, right: 0,
      height: 1,
      background: "rgba(255,255,255,0.13)",
      borderRadius: "8px 8px 0 0",
      zIndex: 2,
      pointerEvents: "none",
    }} />
  )
}

function TitleBar({ id, isMaximized, onClose, onMinimize, onMaximize }: {
  id: AppId
  isMaximized: boolean
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
}) {
  return (
    <div className="win-titlebar" style={{ cursor: isMaximized ? "default" : "move" }}>
      <div style={{ width: 16, height: 16, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <AppIcon id={id} size={16} />
      </div>
      <span className="win-titlebar-title">{WIN_TITLES[id]}</span>
      <div className="win-controls">
        <button className="win-btn" onClick={onMinimize} aria-label="Minimize">
          <svg width="10" height="1" viewBox="0 0 10 1"><rect width="10" height="1" fill="currentColor"/></svg>
        </button>
        <button className="win-btn" onClick={onMaximize} aria-label="Maximize">
          {isMaximized
            ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2.5" y="0.5" width="7" height="7"/><path d="M0.5 2.5H1.5V9.5H8.5V8.5" stroke="currentColor"/></svg>
            : <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="0.5" width="9" height="9"/></svg>
          }
        </button>
        <button className="win-btn close" onClick={onClose} aria-label="Close">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
