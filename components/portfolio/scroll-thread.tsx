"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollThread
 * ─────────────────────────────────────────────────────
 * A fixed, left-side thread (vertical line) + glowing dot
 * that travels down the page with the user's scroll.
 *
 * Thread gradient:  indigo (top) → amber (bottom)
 * The "line" grows as you scroll via stroke-dashoffset.
 * The dot sits at the leading edge of the grown line.
 *
 * Hidden on screens < 1024px (thread-offset layout only applies on desktop).
 */
export function ScrollThread(): JSX.Element {
  const lineRef     = useRef<HTMLDivElement>(null)
  const dotRef      = useRef<HTMLDivElement>(null)
  const glowRef     = useRef<HTMLDivElement>(null)
  const wrapRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const line  = lineRef.current
    const dot   = dotRef.current
    const glow  = glowRef.current

    if (!line || !dot || !glow) return

    // ── Line grows from 0% → 100% as page scrolls ──────────────
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          start: "top top",
          end: "max",
          scrub: 0.6,
        },
      }
    )

    // ── Dot moves from top → bottom of viewport as page scrolls ─
    gsap.to(dot, {
      y: "calc(100vh - 48px)",
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "max",
        scrub: 0.6,
      },
    })

    // ── Glow intensity pulses on section boundaries ──────────────
    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => {
          gsap.to(dot, {
            scale: 1.5,
            duration: 0.3,
            ease: "back.out(2)",
          })
          gsap.to(glow, {
            opacity: 1,
            scale: 2,
            duration: 0.3,
          })
        },
        onLeave: () => {
          gsap.to(dot, { scale: 1, duration: 0.25 })
          gsap.to(glow, { opacity: 0.4, scale: 1, duration: 0.25 })
        },
        onEnterBack: () => {
          gsap.to(dot, { scale: 1.5, duration: 0.3, ease: "back.out(2)" })
          gsap.to(glow, { opacity: 1, scale: 2, duration: 0.3 })
        },
        onLeaveBack: () => {
          gsap.to(dot, { scale: 1, duration: 0.25 })
          gsap.to(glow, { opacity: 0.4, scale: 1, duration: 0.25 })
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="fixed top-0 left-0 h-screen z-40 hidden lg:flex flex-col items-center"
      style={{ left: 40, width: 2, pointerEvents: "none" }}
    >
      {/* Track (full height, very faint) */}
      <div
        className="absolute inset-0 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(99,102,241,0.08), rgba(245,158,11,0.08))",
        }}
      />

      {/* Growing line (scaleY animated by GSAP) */}
      <div
        ref={lineRef}
        className="absolute top-0 left-0 w-full"
        style={{
          height: "100%",
          transformOrigin: "top center",
          background:
            "linear-gradient(to bottom, #6366f1 0%, #a78bfa 40%, #f59e0b 100%)",
          borderRadius: 2,
        }}
      />

      {/* Dot (travels down with scroll) */}
      <div
        ref={dotRef}
        className="absolute"
        style={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#6366f1",
          zIndex: 2,
        }}
      >
        {/* Glow ring around dot */}
        <div
          ref={glowRef}
          style={{
            position: "absolute",
            inset: -8,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
            opacity: 0.4,
          }}
        />
      </div>
    </div>
  )
}
