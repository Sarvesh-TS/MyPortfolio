"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id:     "bgc",
    num:    "01",
    title:  "Bangalore Gastro Centre",
    desc:   "Hospital portal with doctor listings, appointment booking, SEO across 40+ pages, and a full Drupal CMS backend.",
    tags:   ["Next.js", "Drupal", "SEO"],
    tag:    "Healthcare",
    url:    "https://www.bangaloregastrocentre.com",
    img:    "https://www.pavankumar.co/assets/projects/bgc_phone.webp",
    accent: "#6366f1",
  },
  {
    id:     "yuvi",
    num:    "02",
    title:  "Yuvi Builders",
    desc:   "Real-estate platform with dynamic property listings, advanced filters, interactive map, and CMS-powered content.",
    tags:   ["Next.js", "React", "Drupal"],
    tag:    "Real Estate",
    url:    "https://www.yuvibuilders.com",
    img:    "https://www.pavankumar.co/assets/projects/yuvibuilders.webp",
    accent: "#818cf8",
  },
  {
    id:     "samagra",
    num:    "03",
    title:  "Samagra Interiors",
    desc:   "Premium interior design portfolio — residential & commercial project galleries, case studies, and lead-capture forms.",
    tags:   ["Next.js", "Tailwind", "Figma"],
    tag:    "Interior Design",
    url:    "https://www.samagrainteriors.com",
    img:    "https://www.pavankumar.co/assets/projects/samagra_interiors_phone.webp",
    accent: "#a78bfa",
  },
  {
    id:     "snip",
    num:    "04",
    title:  "Snip Dark Salon Spa",
    desc:   "Luxury salon & spa with a dark premium aesthetic. Online booking, service menu, gallery — WordPress custom theme.",
    tags:   ["WordPress", "Elementor", "WooCommerce"],
    tag:    "Beauty & Wellness",
    url:    "https://www.snipdark.com",
    img:    "https://www.pavankumar.co/assets/projects/snipdark_phone.webp",
    accent: "#f472b6",
  },
  {
    id:     "occasion",
    num:    "05",
    title:  "The Occasion Bangalore",
    desc:   "Premium event venue site — weddings, corporates, celebrations. Conversion-focused layout with enquiry funnels.",
    tags:   ["Next.js", "Tailwind", "SEO"],
    tag:    "Events & Hospitality",
    url:    "https://www.theoccasionbangalore.com",
    img:    "https://www.pavankumar.co/assets/projects/the_occasion.webp",
    accent: "#f59e0b",
  },
] as const

type Project = typeof PROJECTS[number]

/** Floating image that follows the cursor — visible only on desktop hover */
function HoverImage({ src, alt, visible, x, y }: { src: string; alt: string; visible: boolean; x: number; y: number }): JSX.Element {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: x + 24,
        top:  y - 80,
        width: 240,
        height: 160,
        borderRadius: 12,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transform: `scale(${visible ? 1 : 0.88}) rotate(${visible ? -1.5 : 0}deg)`,
        transition: "opacity 280ms cubic-bezier(0.16,1,0.3,1), transform 280ms cubic-bezier(0.16,1,0.3,1)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
    </div>
  )
}

export function WorkSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const [hovered, setHovered]   = useState<Project | null>(null)
  const [cursor,  setCursor]    = useState({ x: 0, y: 0 })

  /* Track cursor */
  useEffect(() => {
    const move = (e: MouseEvent): void => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  /* GSAP scroll entrance — 3D flip each row */
  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRef.current?.querySelectorAll<HTMLElement>(".work-row").forEach((row) => {
        gsap.from(row, {
          rotateX: 14,
          y: 48,
          opacity: 0,
          transformOrigin: "top center",
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-labelledby="work-heading"
      style={{
        background: "var(--bg)",
        paddingTop: "7rem",
        paddingBottom: "7rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Floating cursor image */}
      <HoverImage
        src={hovered?.img ?? ""}
        alt={hovered?.title ?? ""}
        visible={!!hovered}
        x={cursor.x}
        y={cursor.y}
      />

      <div className="container">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>Featured Work</div>
            <h2
              id="work-heading"
              className="font-heading"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "var(--text)" }}
            >
              Projects that{" "}
              <span style={{ color: "var(--accent)" }}>made an impact.</span>
            </h2>
          </div>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn btn-ghost"
            style={{ alignSelf: "flex-end", fontSize: "0.875rem" }}
          >
            Start a project <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Project rows */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-row"
              aria-label={`View ${p.title}`}
              onMouseEnter={() => setHovered(p)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr auto",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.625rem 1rem",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
                cursor: "pointer",
                transition: "background 180ms ease",
                borderRadius: 8,
                background: hovered?.id === p.id ? "rgba(99,102,241,0.04)" : "transparent",
              }}

            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-sora, Sora, sans-serif)",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.18)",
                  letterSpacing: "0.06em",
                }}
              >
                {p.num}
              </span>

              {/* Info */}
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.375rem",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    className="font-heading"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "var(--text)" }}
                  >
                    {p.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.6rem",
                      borderRadius: 99,
                      background: `${p.accent}18`,
                      color: p.accent,
                      flexShrink: 0,
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    maxWidth: "44rem",
                    marginBottom: "0.625rem",
                  }}
                >
                  {p.desc}
                </p>

                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.7rem",
                        padding: "0.15rem 0.5rem",
                        borderRadius: 5,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                className="w-5 h-5 flex-shrink-0"
                style={{
                  color: p.accent,
                  opacity: hovered?.id === p.id ? 1 : 0.25,
                  transition: "opacity 200ms ease, transform 200ms ease",
                  transform: hovered?.id === p.id ? "translate(2px,-2px)" : "translate(0,0)",
                }}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
