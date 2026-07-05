"use client"
import { createContext, useContext, useReducer, useCallback, type ReactNode } from "react"

export type AppId =
  | "fileExplorer"
  | "notepad"
  | "taskManager"
  | "mail"
  | "terminal"
  | "calculator"
  | "settings"
  | "minesweeper"

export interface AppWindow {
  id: AppId
  title: string
  icon: string
  isOpen: boolean
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
  position: { x: number; y: number }
  size: { width: number; height: number }
}

interface State {
  windows: AppWindow[]
  topZ: number
  startOpen: boolean
}

type Action =
  | { type: "OPEN"; id: AppId }
  | { type: "CLOSE"; id: AppId }
  | { type: "MINIMIZE"; id: AppId }
  | { type: "MAXIMIZE"; id: AppId }
  | { type: "FOCUS"; id: AppId }
  | { type: "TOGGLE_START" }
  | { type: "CLOSE_START" }

const DEFAULTS: Record<AppId, Omit<AppWindow, "isOpen" | "isMinimized" | "isMaximized" | "zIndex">> = {
  fileExplorer: { id: "fileExplorer", title: "File Explorer",  icon: "📁", position: { x: 80,  y: 40  }, size: { width: 860, height: 540 } },
  notepad:      { id: "notepad",      title: "Notepad",        icon: "📝", position: { x: 160, y: 80  }, size: { width: 580, height: 440 } },
  taskManager:  { id: "taskManager",  title: "Task Manager",   icon: "📊", position: { x: 240, y: 60  }, size: { width: 640, height: 500 } },
  mail:         { id: "mail",         title: "Mail",           icon: "✉️", position: { x: 200, y: 100 }, size: { width: 700, height: 520 } },
  terminal:     { id: "terminal",     title: "Windows Terminal",icon: "💻", position: { x: 120, y: 120 }, size: { width: 680, height: 440 } },
  calculator:   { id: "calculator",   title: "Calculator",     icon: "🧮", position: { x: 600, y: 80  }, size: { width: 320, height: 480 } },
  settings:     { id: "settings",     title: "Settings",       icon: "⚙️", position: { x: 100, y: 60  }, size: { width: 780, height: 540 } },
  minesweeper:  { id: "minesweeper",  title: "Minesweeper",    icon: "💣", position: { x: 300, y: 80  }, size: { width: 400, height: 500 } },
}

const INITIAL_WINDOWS: AppWindow[] = (Object.keys(DEFAULTS) as AppId[]).map(id => ({
  ...DEFAULTS[id],
  isOpen: false,
  isMinimized: false,
  isMaximized: false,
  zIndex: 100,
}))

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN": {
      const topZ = state.topZ + 1
      return {
        ...state,
        topZ,
        startOpen: false,
        windows: state.windows.map(w =>
          w.id === action.id
            ? { ...w, isOpen: true, isMinimized: false, zIndex: topZ }
            : w
        ),
      }
    }
    case "CLOSE":
      return { ...state, windows: state.windows.map(w => w.id === action.id ? { ...w, isOpen: false, isMinimized: false, isMaximized: false } : w) }
    case "MINIMIZE":
      return { ...state, windows: state.windows.map(w => w.id === action.id ? { ...w, isMinimized: !w.isMinimized } : w) }
    case "MAXIMIZE":
      return { ...state, windows: state.windows.map(w => w.id === action.id ? { ...w, isMaximized: !w.isMaximized } : w) }
    case "FOCUS": {
      const topZ = state.topZ + 1
      return { ...state, topZ, windows: state.windows.map(w => w.id === action.id ? { ...w, zIndex: topZ, isMinimized: false } : w) }
    }
    case "TOGGLE_START": return { ...state, startOpen: !state.startOpen }
    case "CLOSE_START":  return { ...state, startOpen: false }
    default: return state
  }
}

interface Ctx {
  windows: AppWindow[]
  startOpen: boolean
  openApp:    (id: AppId) => void
  closeApp:   (id: AppId) => void
  minimizeApp:(id: AppId) => void
  maximizeApp:(id: AppId) => void
  focusApp:   (id: AppId) => void
  toggleStart:() => void
  closeStart: () => void
}

const WindowCtx = createContext<Ctx | null>(null)

export function WindowProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { windows: INITIAL_WINDOWS, topZ: 100, startOpen: false })
  const openApp    = useCallback((id: AppId) => dispatch({ type: "OPEN",    id }), [])
  const closeApp   = useCallback((id: AppId) => dispatch({ type: "CLOSE",   id }), [])
  const minimizeApp= useCallback((id: AppId) => dispatch({ type: "MINIMIZE",id }), [])
  const maximizeApp= useCallback((id: AppId) => dispatch({ type: "MAXIMIZE",id }), [])
  const focusApp   = useCallback((id: AppId) => dispatch({ type: "FOCUS",   id }), [])
  const toggleStart= useCallback(()          => dispatch({ type: "TOGGLE_START" }), [])
  const closeStart = useCallback(()          => dispatch({ type: "CLOSE_START"  }), [])
  return (
    <WindowCtx.Provider value={{ windows: state.windows, startOpen: state.startOpen, openApp, closeApp, minimizeApp, maximizeApp, focusApp, toggleStart, closeStart }}>
      {children}
    </WindowCtx.Provider>
  )
}

export function useWindows() {
  const ctx = useContext(WindowCtx)
  if (!ctx) throw new Error("useWindows outside WindowProvider")
  return ctx
}
