"use client"

interface P { size?: number }

/* ── File Explorer ─────────────────────────────────────────── */
export function ExplorerIcon({ size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M3 9C3 7.9 3.9 7 5 7H13.5L16.5 10H27C28.1 10 29 10.9 29 12V25C29 26.1 28.1 27 27 27H5C3.9 27 3 26.1 3 25V9Z" fill="#B36A00"/>
      <path d="M3 12C3 10.9 3.9 10 5 10H27C28.1 10 29 10.9 29 12V25C29 26.1 28.1 27 27 27H5C3.9 27 3 26.1 3 25V12Z" fill="url(#exp-f)"/>
      <path d="M3 12C3 10.9 3.9 10 5 10H27C28.1 10 29 10.9 29 12V13.5H3V12Z" fill="rgba(255,240,180,0.2)"/>
      <defs>
        <linearGradient id="exp-f" x1="3" y1="10" x2="29" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD84C"/>
          <stop offset="60%" stopColor="#F0A800"/>
          <stop offset="100%" stopColor="#C87800"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Notepad ────────────────────────────────────────────────── */
export function NotepadIcon({ size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="6" y="3" width="20" height="27" rx="2" fill="url(#np-paper)"/>
      <rect x="6" y="3" width="5" height="27" rx="2" fill="url(#np-bind)"/>
      {[9,14,19,24].map(y => <circle key={y} cx="8.5" cy={y} r="1.2" fill="rgba(0,0,0,0.35)"/>)}
      {[11,15,19,23].map(y => <line key={y} x1="13" y1={y} x2="24" y2={y} stroke="rgba(0,100,200,0.25)" strokeWidth="1.2"/>)}
      <defs>
        <linearGradient id="np-paper" x1="6" y1="3" x2="26" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAFAFA"/>
          <stop offset="100%" stopColor="#ECECEC"/>
        </linearGradient>
        <linearGradient id="np-bind" x1="6" y1="3" x2="11" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE55C"/>
          <stop offset="100%" stopColor="#FFBB00"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Task Manager ───────────────────────────────────────────── */
export function TaskManagerIcon({ size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="5" fill="url(#tm-bg)"/>
      <rect x="6" y="20" width="4" height="8"  rx="1.5" fill="url(#tm-b1)"/>
      <rect x="12" y="15" width="4" height="13" rx="1.5" fill="url(#tm-b2)"/>
      <rect x="18" y="10" width="4" height="18" rx="1.5" fill="url(#tm-b3)"/>
      <polyline points="8,19 14,13 20,9 26,5" stroke="#00E676" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8"  cy="19" r="2" fill="#00E676"/>
      <circle cx="14" cy="13" r="2" fill="#00E676"/>
      <circle cx="20" cy="9"  r="2" fill="#00E676"/>
      <defs>
        <linearGradient id="tm-bg" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A2640"/>
          <stop offset="100%" stopColor="#0D1520"/>
        </linearGradient>
        <linearGradient id="tm-b1" x1="6" y1="20" x2="10" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#29B463"/><stop offset="100%" stopColor="#1A7A3C"/>
        </linearGradient>
        <linearGradient id="tm-b2" x1="12" y1="15" x2="16" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34C472"/><stop offset="100%" stopColor="#229A50"/>
        </linearGradient>
        <linearGradient id="tm-b3" x1="18" y1="10" x2="22" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4AD480"/><stop offset="100%" stopColor="#2DAE5E"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Mail ───────────────────────────────────────────────────── */
export function MailIcon({ size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="6" width="28" height="20" rx="3" fill="url(#mail-body)"/>
      <path d="M2 9L16 18L30 9" stroke="none"/>
      <path d="M2 9.5C2 8.1 3.1 7 4.5 7H27.5C28.9 7 30 8.1 30 9.5L16 19L2 9.5Z" fill="url(#mail-flap)"/>
      <path d="M2 9.5L16 19L30 9.5V24C30 25.1 29.1 26 28 26H4C2.9 26 2 25.1 2 24V9.5Z" fill="url(#mail-body2)"/>
      <defs>
        <linearGradient id="mail-body" x1="2" y1="6" x2="30" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B90E0"/><stop offset="100%" stopColor="#0058A8"/>
        </linearGradient>
        <linearGradient id="mail-body2" x1="2" y1="10" x2="30" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1680CC"/><stop offset="100%" stopColor="#0050A0"/>
        </linearGradient>
        <linearGradient id="mail-flap" x1="2" y1="7" x2="30" y2="19" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2AAAFF"/><stop offset="100%" stopColor="#0E88E0"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Settings ───────────────────────────────────────────────── */
export function SettingsIcon({ size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M13.3 2.8L12.5 6.3C11.5 6.7 10.6 7.2 9.8 7.9L6.4 6.8L3.8 11.2L6.4 13.6C6.3 14.1 6.3 14.6 6.3 15.1C6.3 15.6 6.3 16.1 6.4 16.6L3.8 18.9L6.4 23.3L9.8 22.2C10.6 22.9 11.5 23.4 12.5 23.8L13.3 27.2H18.7L19.5 23.7C20.5 23.3 21.4 22.8 22.2 22.1L25.6 23.2L28.2 18.8L25.6 16.4C25.7 15.9 25.7 15.4 25.7 14.9C25.7 14.4 25.7 13.9 25.6 13.4L28.2 11.1L25.6 6.7L22.2 7.8C21.4 7.1 20.5 6.6 19.5 6.2L18.7 2.8H13.3Z" fill="url(#set-g)"/>
      <circle cx="16" cy="15" r="4.5" fill="#141414"/>
      <circle cx="16" cy="15" r="3" fill="url(#set-c)"/>
      <defs>
        <linearGradient id="set-g" x1="3.8" y1="2.8" x2="28.2" y2="27.2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BEBECE"/><stop offset="100%" stopColor="#8888AA"/>
        </linearGradient>
        <linearGradient id="set-c" x1="13" y1="12" x2="19" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9898C8"/><stop offset="100%" stopColor="#6060A0"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Terminal ───────────────────────────────────────────────── */
export function TerminalIcon({ size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="3" width="28" height="26" rx="5" fill="url(#term-bg)"/>
      <rect x="2" y="3" width="28" height="7" rx="5" fill="rgba(255,255,255,0.04)"/>
      <rect x="2" y="8" width="28" height="2" fill="rgba(255,255,255,0.04)"/>
      <circle cx="8"  cy="6.5" r="1.5" fill="#FF5F57" opacity="0.9"/>
      <circle cx="13" cy="6.5" r="1.5" fill="#FEBC2E" opacity="0.9"/>
      <circle cx="18" cy="6.5" r="1.5" fill="#28C840" opacity="0.9"/>
      <path d="M7 14L12 17.5L7 21" stroke="#00F090" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="14" y="16.5" width="9" height="2" rx="1" fill="#00F090" opacity="0.7"/>
      <rect x="7"  y="23" width="13" height="1.5" rx="0.75" fill="rgba(0,240,144,0.3)"/>
      <defs>
        <linearGradient id="term-bg" x1="2" y1="3" x2="30" y2="29" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1C1C30"/><stop offset="100%" stopColor="#0C0C1C"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Calculator ─────────────────────────────────────────────── */
export function CalculatorIcon({ size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="2" width="24" height="28" rx="5" fill="url(#calc-bg)"/>
      <rect x="7" y="5" width="18" height="8" rx="2" fill="#0A1C3A"/>
      <text x="23" y="11.5" textAnchor="end" fontSize="5.5" fill="#60CDFF" fontFamily="'Consolas',monospace" fontWeight="300">0</text>
      {[[7,17],[13,17],[19,17],[7,21],[13,21],[19,21],[7,25],[13,25],[19,25]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="5" height="3.5" rx="1.2" fill="rgba(255,255,255,0.1)"/>
      ))}
      <rect x="25" y="17" width="2.5" height="3.5" rx="1" fill="url(#calc-op)"/>
      <rect x="25" y="21" width="2.5" height="3.5" rx="1" fill="url(#calc-op)"/>
      <rect x="25" y="25" width="2.5" height="3.5" rx="1" fill="url(#calc-op)"/>
      <defs>
        <linearGradient id="calc-bg" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3C3C4C"/><stop offset="100%" stopColor="#28283A"/>
        </linearGradient>
        <linearGradient id="calc-op" x1="25" y1="17" x2="27.5" y2="28.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF9A00"/><stop offset="100%" stopColor="#E07800"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Minesweeper ────────────────────────────────────────────── */
export function MinesweeperIcon({ size = 24 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="5" fill="url(#mine-bg)"/>
      {[
        {x:4, y:4, c:"rgba(255,255,255,0.12)"},{x:12,y:4, c:"rgba(255,255,255,0.12)"},{x:20,y:4, c:"#1A6BC0"},
        {x:4, y:12,c:"#B01010"},{x:12,y:12,c:"rgba(255,255,255,0.12)"},{x:20,y:12,c:"rgba(255,255,255,0.12)"},
        {x:4, y:20,c:"rgba(255,255,255,0.12)"},{x:12,y:20,c:"rgba(255,255,255,0.12)"},{x:20,y:20,c:"rgba(255,255,255,0.12)"},
      ].map((c,i)=><rect key={i} x={c.x} y={c.y} width="7" height="7" rx="1.5" fill={c.c}/>)}
      <circle cx="7.5" cy="15.5" r="2.5" fill="#FF2020"/>
      <rect x="23" y="4.5" width="1.2" height="5" fill="white"/>
      <path d="M24.2 5L28 7L24.2 9Z" fill="#FF2020"/>
      <defs>
        <linearGradient id="mine-bg" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A5AB0"/><stop offset="100%" stopColor="#0A3080"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Generic icon lookup ────────────────────────────────────── */
import type { AppId } from "@/contexts/WindowContext"

export function AppIcon({ id, size = 24 }: { id: AppId; size?: number }) {
  switch (id) {
    case "fileExplorer": return <ExplorerIcon    size={size} />
    case "notepad":      return <NotepadIcon      size={size} />
    case "taskManager":  return <TaskManagerIcon  size={size} />
    case "mail":         return <MailIcon         size={size} />
    case "settings":     return <SettingsIcon     size={size} />
    case "terminal":     return <TerminalIcon     size={size} />
    case "calculator":   return <CalculatorIcon   size={size} />
    case "minesweeper":  return <MinesweeperIcon  size={size} />
    default:             return null
  }
}
