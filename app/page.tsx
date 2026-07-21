"use client"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { WindowProvider } from "@/contexts/WindowContext"
import { BootSequence } from "@/components/win/BootSequence"
import { LockScreen } from "@/components/win/LockScreen"
import { Desktop } from "@/components/win/Desktop"
import { AndroidUI } from "@/components/mobile/AndroidUI"

type Phase = "boot" | "lock" | "desktop"

export default function Home() {
  const [phase, setPhase] = useState<Phase>("boot")
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Mobile: show Android home screen
  if (isMobile === null) return <div style={{ background: "#000", position: "fixed", inset: 0 }} />
  if (isMobile) return <AndroidUI />

  return (
    <WindowProvider>
      <div style={{ position:"fixed", inset:0, background:"#000" }}>
        {/* Wallpaper always behind everything */}
        <div
          style={{
            position:"absolute", inset:0,
            backgroundImage:"url('/wallpaper.png')",
            backgroundSize:"cover",
            backgroundPosition:"center",
            zIndex:0,
          }}
        />

        <AnimatePresence mode="wait">
          {phase === "boot" && (
            <BootSequence key="boot" onDone={() => setPhase("lock")} />
          )}
          {phase === "lock" && (
            <LockScreen key="lock" onUnlock={() => setPhase("desktop")} />
          )}
        </AnimatePresence>

        {phase === "desktop" && (
          <div style={{ position:"absolute", inset:0, zIndex:10 }}>
            <Desktop />
          </div>
        )}
      </div>
    </WindowProvider>
  )
}
