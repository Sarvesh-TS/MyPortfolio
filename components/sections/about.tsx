"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* ── Animated stat counter ────────────────────────────────────────────────── */
function Counter({
  to,
  suffix = "",
}: {
  to: number
  suffix?: string
}): JSX.Element {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  useEffect(() => {
    if (!isInView) return
    const duration = 1600
    const start = performance.now()

    const tick = (now: number): void => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, to])

  return (
    <div ref={ref} aria-label={`${count}${suffix}`}>
      {count}
      {suffix}
    </div>
  )
}

const STATS = [
  { value: 20, suffix: "+", label: "Client Projects" },
  { value: 4, suffix: "+", label: "Years Coding" },
  { value: 5, suffix: "★", label: "Client Rating" },
  { value: 3, suffix: "×", label: "Internships Done" },
] as const

export function About(): JSX.Element {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="label mb-5">About Me</p>
            <h2
              id="about-heading"
              className="font-heading mb-6"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "var(--text)",
                lineHeight: 1.1,
              }}
            >
              Developer by trade,
              <br />
              marketer by instinct.
            </h2>
            <p
              className="leading-relaxed mb-4"
              style={{
                color: "var(--text-muted)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                maxWidth: "34rem",
              }}
            >
              I&apos;m a B.Tech Cybersecurity student at Jain University and a
              full-service freelancer — building websites, running SEO
              campaigns, and managing digital marketing for clients across
              Bangalore and beyond.
            </p>
            <p
              className="leading-relaxed"
              style={{
                color: "var(--text-muted)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                maxWidth: "34rem",
              }}
            >
              20+ projects delivered: hospital portals, real-estate platforms,
              Shopify stores, WordPress builds, and Google Ads campaigns. I
              care about results, not just deliverables.
            </p>
          </motion.div>

          {/* Right — animated stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-8 rounded-2xl text-center"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: EASE,
                }}
                whileHover={{
                  borderColor: "var(--accent-muted)",
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className="font-display mb-2"
                  style={{ fontSize: "3rem", color: "var(--accent)", lineHeight: 1 }}
                >
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
