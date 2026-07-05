"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

/* ── Stats strip ──────────────────────────────────────────────────────────── */
const STATS = [
  { n: "20+", label: "Projects Delivered" },
  { n: "4+",  label: "Years Experience"   },
  { n: "5★",  label: "Client Rating"      },
  { n: "∞",   label: "Cups of Coffee"     },
] as const

export function HeroSection(): JSX.Element {
  const rootRef  = useRef<HTMLElement>(null)
  const gridRef  = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const subRef   = useRef<HTMLDivElement>(null)
  const ctaRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress

          /* Grid: perspective flattens + fades on scroll */
          if (gridRef.current) {
            const rx = 72 - p * 30        // 72deg → 42deg
            const opacity = 1 - p * 1.4
            gsap.set(gridRef.current, {
              rotateX: rx,
              opacity: Math.max(0, opacity),
            })
          }

          /* Headline lines exit in 3 directions */
          if (line1Ref.current)
            gsap.set(line1Ref.current, { x: -p * 280, opacity: 1 - p * 2 })
          if (line2Ref.current)
            gsap.set(line2Ref.current, { y: -p * 160, opacity: 1 - p * 1.8 })
          if (line3Ref.current)
            gsap.set(line3Ref.current, { x: p * 280, opacity: 1 - p * 2 })
          if (subRef.current)
            gsap.set(subRef.current, { y: p * 60, opacity: 1 - p * 3 })
          if (ctaRef.current)
            gsap.set(ctaRef.current, { y: p * 80, opacity: 1 - p * 3 })
        },
      })

      /* Entrance animations (load) */
      const entranceTl = gsap.timeline({ delay: 0.1 })
      entranceTl
        .from(line1Ref.current, { x: -60, opacity: 0, duration: 0.9, ease: "power3.out" }, 0)
        .from(line2Ref.current, { y:  40, opacity: 0, duration: 0.9, ease: "power3.out" }, 0.08)
        .from(line3Ref.current, { x:  60, opacity: 0, duration: 0.9, ease: "power3.out" }, 0.16)
        .from(subRef.current,   { y:  20, opacity: 0, duration: 0.7, ease: "power2.out" }, 0.35)
        .from(ctaRef.current,   { y:  20, opacity: 0, duration: 0.7, ease: "power2.out" }, 0.45)

      return () => { tl.kill() }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      id="hero"
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* ── 3D Perspective Grid ────────────────────────────────────── */}
      <div className="perspective-root" aria-hidden="true">
        <div ref={gridRef} className="grid-plane">
          <div className="grid-lines" />
          <div className="grid-fade"  />
        </div>
      </div>

      {/* ── Ambient glow orbs ──────────────────────────────────────── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          top: "10%", right: "-10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "5%", left: "-5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)",
          filter: "blur(80px)",
        }} />
        {/* Large faint background lettering */}
        <div
          className="font-display select-none"
          style={{
            position: "absolute",
            bottom: "12%", right: "-1%",
            fontSize: "clamp(5rem, 15vw, 15rem)",
            color: "rgba(99,102,241,0.03)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          STS
        </div>
      </div>

      {/* ── Available badge ────────────────────────────────────────── */}
      <div
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "2rem", position: "relative", zIndex: 10 }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0.4rem 0.875rem 0.4rem 0.5rem",
              borderRadius: 99,
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.18)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "rgba(52,211,153,0.9)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
              <span className="ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#34d399", opacity: 0.6 }} aria-hidden="true" />
              <span style={{ position: "relative", display: "block", width: 8, height: 8, borderRadius: "50%", background: "#34d399" }} />
            </span>
            Available for new projects
          </div>
        </div>

        {/* ── Headline — 3 lines that exit on scroll ──────────────── */}
        <h1 aria-label="I build. I market. You grow." style={{ marginBottom: "2.5rem" }}>
          <div
            ref={line1Ref}
            className="font-display"
            style={{ fontSize: "clamp(4.5rem, 10vw, 10rem)", color: "#ffffff", display: "block" }}
          >
            I BUILD.
          </div>
          <div
            ref={line2Ref}
            className="font-display"
            style={{ fontSize: "clamp(4.5rem, 10vw, 10rem)", color: "rgba(255,255,255,0.45)", display: "block" }}
          >
            I MARKET.
          </div>
          <div
            ref={line3Ref}
            className="font-display"
            style={{ fontSize: "clamp(4.5rem, 10vw, 10rem)", color: "var(--accent)", display: "block" }}
          >
            YOU GROW.
          </div>
        </h1>

        {/* Sub-copy */}
        <div ref={subRef} style={{ marginBottom: "2.5rem", maxWidth: "30rem" }}>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--text-2)" }}>
            Freelance web developer &amp; digital marketer based in{" "}
            <span style={{ color: "#fff", fontWeight: 600 }}>Bangalore</span>.
            {" "}20+ projects shipped across real estate, retail, healthcare, and tech.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="btn btn-primary"
          >
            View My Work
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn btn-ghost"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* ── Stats strip ───────────────────────────────────────────── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "2.5rem",
          paddingBottom: "5rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {STATS.map(({ n, label }, i) => (
          <div
            key={label}
            style={{
              padding: "1.5rem 1rem 1.5rem",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <div
              className="font-display"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                lineHeight: 1,
                marginBottom: "0.375rem",
                background: "linear-gradient(135deg, #ffffff 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {n}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
