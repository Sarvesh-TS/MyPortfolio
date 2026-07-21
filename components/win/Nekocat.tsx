"use client"
import { useEffect, useRef } from "react"

const SPRITE = "/neko.gif"
const SIZE = 32
const SPEED = 3.5

type State = "idle"|"alert"|"scratchSelf"|"tired"|"sleeping"|"N"|"NE"|"E"|"SE"|"S"|"SW"|"W"|"NW"

// Sprite positions [col, row] in 32px units (negative = offset from origin)
const FRAMES: Record<State, [number,number][]> = {
  idle:       [[-3,-3]],
  alert:      [[-7,-3]],
  scratchSelf:[[-5,0],[-6,0],[-7,0]],
  tired:      [[-3,-2]],
  sleeping:   [[-2,0],[-2,-1]],
  N:  [[-1,-2],[-1,-3]],
  NE: [[0,-2],[0,-3]],
  E:  [[-3,0],[-3,-1]],
  SE: [[-5,-1],[-5,-2]],
  S:  [[-6,-3],[-7,-2]],
  SW: [[-5,-3],[-6,-1]],
  W:  [[-4,-2],[-4,-3]],
  NW: [[-1,0],[-1,-1]],
}

function getDirection(dx: number, dy: number): State {
  const a = (Math.atan2(dy, dx) * 180) / Math.PI
  if (a > -22.5  && a <=  22.5) return "E"
  if (a >  22.5  && a <=  67.5) return "SE"
  if (a >  67.5  && a <= 112.5) return "S"
  if (a > 112.5  && a <= 157.5) return "SW"
  if (a >  157.5 || a <= -157.5) return "W"
  if (a > -157.5 && a <= -112.5) return "NW"
  if (a > -112.5 && a <=  -67.5) return "N"
  return "NE"
}

export function Nekocat() {
  const elRef      = useRef<HTMLDivElement>(null)
  const pos        = useRef({ x: 32, y: 32 })
  const mouse      = useRef({ x: 200, y: 200 })
  const state      = useRef<State>("idle")
  const frame      = useRef(0)
  const idleTick   = useRef(0)
  const animTick   = useRef(0)
  const raf        = useRef<number>()

  useEffect(() => {
    const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener("mousemove", onMove)

    const loop = () => {
      const el = elRef.current
      if (!el) { raf.current = requestAnimationFrame(loop); return }

      const { x: nx, y: ny } = pos.current
      const { x: mx, y: my } = mouse.current
      const dx = mx - nx
      const dy = my - ny
      const dist = Math.hypot(dx, dy)

      animTick.current++

      if (dist < SPEED) {
        idleTick.current++
        if      (idleTick.current < 10)  state.current = "idle"
        else if (idleTick.current < 20)  state.current = "alert"
        else if (idleTick.current < 80)  state.current = "scratchSelf"
        else if (idleTick.current < 100) state.current = "tired"
        else                             state.current = "sleeping"
      } else {
        idleTick.current = 0
        state.current = getDirection(dx, dy)
        pos.current = { x: nx + (dx / dist) * SPEED, y: ny + (dy / dist) * SPEED }
      }

      // Advance animation frame every 16 RAF ticks (slower, more natural)
      if (animTick.current % 16 === 0) {
        frame.current = (frame.current + 1) % FRAMES[state.current].length
      }

      const [fx, fy] = FRAMES[state.current][frame.current % FRAMES[state.current].length]
      el.style.left             = `${pos.current.x - SIZE / 2}px`
      el.style.top              = `${pos.current.y - SIZE / 2}px`
      el.style.backgroundPosition = `${fx * SIZE}px ${fy * SIZE}px`

      raf.current = requestAnimationFrame(loop)
    }

    raf.current = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener("mousemove", onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      style={{
        position:        "fixed",
        width:           SIZE,
        height:          SIZE,
        backgroundImage: `url('${SPRITE}')`,
        backgroundRepeat:"no-repeat",
        imageRendering:  "pixelated",
        pointerEvents:   "none",
        zIndex:          9999,
        left:            200,
        top:             200,
      }}
    />
  )
}
