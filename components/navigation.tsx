"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Menu, X } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const LINKS = [
  { label: "Work",     id: "work"     },
  { label: "Services", id: "services" },
  { label: "Contact",  id: "contact"  },
]

function scrollTo(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Navigation(): JSX.Element {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  /* Scroll-progress bar */
  useEffect(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: "top top", end: "max", scrub: 0.3 },
    })
    const onScroll = (): void => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "nav-blur" : ""}`}
    >
      {/* Progress bar */}
      <div
        ref={barRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 2,
          background: "linear-gradient(90deg, var(--accent), #a78bfa)",
          transformOrigin: "left",
          transform: "scaleX(0)",
        }}
      />

      <div className="container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="font-heading text-base text-white"
            style={{ letterSpacing: "-0.03em" }}
            aria-label="Scroll to top"
          >
            Sarvesh <span style={{ color: "var(--accent)" }}>TS</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)" }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Hire Me CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="btn btn-primary hidden md:inline-flex"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
            >
              Hire Me
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden nav-blur border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="container py-6 flex flex-col gap-5">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => { scrollTo(l.id); setOpen(false) }}
                className="text-left text-base font-medium"
                style={{ color: "var(--text-2)" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { scrollTo("contact"); setOpen(false) }}
              className="btn btn-primary w-fit"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
