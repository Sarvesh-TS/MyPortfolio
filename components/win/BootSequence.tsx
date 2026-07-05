"use client"
import { useEffect, useState } from "react"

interface Props { onDone: () => void }

const WIN_COLORS = ["#f25022","#7fba00","#00a4ef","#ffb900"]

export function BootSequence({ onDone }: Props) {
  const [phase, setPhase] = useState<"loading" | "fade">("loading")

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fade"), 3200)
    const t2 = setTimeout(onDone, 3800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div
      className="boot-screen"
      style={{ opacity: phase === "fade" ? 0 : 1, transition: "opacity 600ms ease" }}
    >
      {/* Windows 11 logo — 4 colored squares */}
      <div className="win-logo">
        {WIN_COLORS.map((c, i) => (
          <div
            key={i}
            className="win-logo-sq"
            style={{
              background: c,
              animation: `bootLogoIn 600ms ease forwards`,
              animationDelay: `${i * 80}ms`,
              opacity: 0,
              transform: "scale(0.6)",
            }}
          />
        ))}
      </div>

      {/* Loading dots */}
      <div className="boot-dots">
        {[0,1,2,3,4].map(i => (
          <div key={i} className="boot-dot" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>

      <style>{`
        @keyframes bootLogoIn {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
