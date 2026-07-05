"use client"

import { useRef, useState, useEffect } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* ── Project cards shown in the stacked deck ─────────────────────────────── */
const CARDS = [
  {
    id: "bgc",
    title: "Bangalore Gastro Centre",
    tag: "Healthcare",
    img: "https://www.pavankumar.co/assets/projects/bgc_phone.webp",
    accent: "#6366f1",
  },
  {
    id: "yuvi",
    title: "Yuvi Builders",
    tag: "Real Estate",
    img: "https://www.pavankumar.co/assets/projects/yuvibuilders.webp",
    accent: "#22d3ee",
  },
  {
    id: "samagra",
    title: "Samagra Interiors",
    tag: "Interior Design",
    img: "https://www.pavankumar.co/assets/projects/samagra_interiors_phone.webp",
    accent: "#a78bfa",
  },
] as const

/* ── Socials ──────────────────────────────────────────────────────────────── */
const SOCIALS = [
  {
    href: "https://github.com/Sarvesh-TS",
    icon: Github,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://linkedin.com/in/sarveshts",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "mailto:sarveshts2k4@gmail.com",
    icon: Mail,
    label: "Email",
    external: false,
  },
  {
    href: "tel:+919880231133",
    icon: Phone,
    label: "Phone",
    external: false,
  },
] as const

/* ── Project Card ─────────────────────────────────────────────────────────── */
function ProjectCard({
  title,
  tag,
  img,
  accent,
}: {
  title: string
  tag: string
  img: string
  accent: string
}): JSX.Element {
  return (
    <div
      className="w-64 sm:w-72 rounded-2xl overflow-hidden select-none"
      style={{
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        boxShadow: `0 32px 72px rgba(0,0,0,0.55), 0 0 60px ${accent}14`,
      }}
    >
      {/* Screenshot */}
      <div
        className="overflow-hidden"
        style={{ aspectRatio: "4/3", background: "var(--surface)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover"
          loading="eager"
          draggable={false}
        />
      </div>

      {/* Footer */}
      <div className="px-5 py-4">
        <span
          className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2"
          style={{ background: `${accent}18`, color: accent }}
        >
          {tag}
        </span>
        <p
          className="font-heading text-sm leading-snug"
          style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
        >
          {title}
        </p>
      </div>
    </div>
  )
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
export function Hero(): JSX.Element {
  // Page-level scroll (raw pixels)
  const { scrollY } = useScroll()

  // Smooth spring for buttery animation feel
  const s = useSpring(scrollY, { stiffness: 80, damping: 24 })

  // Text drifts up as you scroll away
  const textY = useTransform(s, [0, 700], [0, -90])

  // ── Card 1 (front) → flies upper-left ──────────────────
  const c1x = useTransform(s, [0, 650], [0, -230])
  const c1y = useTransform(s, [0, 650], [0, -150])
  const c1r = useTransform(s, [0, 650], [-8, -28])
  const c1s = useTransform(s, [0, 650], [1, 0.9])

  // ── Card 2 (mid) → flies right ─────────────────────────
  const c2x = useTransform(s, [0, 650], [0, 190])
  const c2y = useTransform(s, [0, 650], [0, 70])
  const c2r = useTransform(s, [0, 650], [2, 20])

  // ── Card 3 (back) → flies lower-left ───────────────────
  const c3x = useTransform(s, [0, 650], [0, -110])
  const c3y = useTransform(s, [0, 650], [0, 250])
  const c3r = useTransform(s, [0, 650], [11, -7])
  const c3s = useTransform(s, [0, 650], [1, 0.88])

  // Whole stack fades out after spread
  const stackOpacity = useTransform(s, [500, 750], [1, 0])

  return (
    <section
      id="hero"
      aria-label="Hero — Sarvesh T S"
      className="relative min-h-screen flex items-center overflow-hidden dot-grid"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2"
        style={{
          width: 640,
          height: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="container relative z-10 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">

          {/* ── Left: Copy ──────────────────────────────────────── */}
          <motion.div style={{ y: textY }}>

            {/* Available badge */}
            <motion.div
              className="flex items-center gap-2.5 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--text-muted)" }}
              >
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display mb-6"
              style={{
                fontSize: "clamp(3.2rem, 5.5vw, 5.2rem)",
                color: "var(--text)",
                lineHeight: 1.0,
              }}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
            >
              I build.
              <br />I market.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent-l) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                You grow.
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              className="leading-relaxed mb-10"
              style={{
                color: "var(--text-muted)",
                fontSize: "1.125rem",
                maxWidth: "38rem",
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            >
              Freelance web developer &amp; digital marketer based in{" "}
              <span style={{ color: "var(--text)", fontWeight: 600 }}>
                Bangalore
              </span>
              . 20+ projects delivered across real estate, retail, healthcare,
              and tech.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
            >
              <button
                id="hero-cta-work"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                id="hero-cta-contact"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
              >
                Hire Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
            >
              {SOCIALS.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)"
                    e.currentTarget.style.color = "var(--accent)"
                    e.currentTarget.style.transform = "scale(1.06)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)"
                    e.currentTarget.style.color = "var(--text-muted)"
                    e.currentTarget.style.transform = "scale(1)"
                  }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Stacked project cards (desktop only) ────── */}
          <motion.div
            className="relative h-[520px] hidden lg:block"
            style={{ opacity: stackOpacity }}
            aria-hidden="true"
          >
            {/* Card 3 — back */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ x: c3x, y: c3y, rotate: c3r, scale: c3s, zIndex: 1 }}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.52, ease: EASE }}
            >
              <ProjectCard {...CARDS[2]} />
            </motion.div>

            {/* Card 2 — middle */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ x: c2x, y: c2y, rotate: c2r, zIndex: 2 }}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
            >
              <ProjectCard {...CARDS[1]} />
            </motion.div>

            {/* Card 1 — front */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ x: c1x, y: c1y, rotate: c1r, scale: c1s, zIndex: 3 }}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24, ease: EASE }}
            >
              <ProjectCard {...CARDS[0]} />
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div
                className="text-xs tracking-widest uppercase"
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                }}
              >
                Scroll to explore
              </div>
              <motion.div
                className="w-px h-8"
                style={{ background: "var(--border)" }}
                animate={{ scaleY: [1, 0.3, 1], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
