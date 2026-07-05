"use client"

import { useRef } from "react"
import { Code2, TrendingUp, Globe, ShoppingCart } from "lucide-react"

/* 3D hover tilt via inline handler — no GSAP import needed */
function tilt(e: React.MouseEvent<HTMLDivElement>): void {
  const el   = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x    = (e.clientX - rect.left) / rect.width  - 0.5
  const y    = (e.clientY - rect.top)  / rect.height - 0.5
  el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(4px)`
}

function resetTilt(e: React.MouseEvent<HTMLDivElement>): void {
  e.currentTarget.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)"
}

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    desc:  "Custom websites & web apps using Next.js, React, WordPress, and Shopify. Performance-first, conversion-optimised, and pixel-perfect.",
    items: ["Next.js / React", "WordPress & CMS", "Shopify Stores", "Landing Pages"],
    accent: "#6366f1",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc:  "SEO, Google Ads, and content strategy that drives real traffic and measurable ROI — not just vanity metrics.",
    items: ["Technical SEO", "Google Ads", "Content Strategy", "Local Search"],
    accent: "#818cf8",
  },
  {
    icon: Globe,
    title: "SEO & Growth",
    desc:  "End-to-end search optimisation from keyword research to on-page SEO, backlinks, and Core Web Vitals.",
    items: ["Keyword Research", "On-page SEO", "Link Building", "CWV Audits"],
    accent: "#a78bfa",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc:  "Shopify and WooCommerce stores built to convert — product pages, checkout flows, integrations, and email automation.",
    items: ["Shopify Custom Themes", "WooCommerce", "Payment Gateways", "Email Flows"],
    accent: "#f59e0b",
  },
] as const

export function ServicesSection(): JSX.Element {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        background: "var(--bg)",
        paddingTop: "8rem", paddingBottom: "8rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>Services</div>
        <h2
          id="services-heading"
          className="font-heading"
          style={{
            fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
            color: "var(--text)",
            marginBottom: "4rem",
          }}
        >
          Everything you need
          <br />
          <span style={{ color: "var(--accent)" }}>to grow online.</span>
        </h2>

        {/* 2×2 grid of 3D-tiltable cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          {SERVICES.map(({ icon: Icon, title, desc, items, accent }) => (
            <div
              key={title}
              className="service-card"
              onMouseMove={tilt}
              onMouseLeave={resetTilt}
              style={{
                padding: "2.5rem",
                background: "var(--bg-card)",
                cursor: "default",
                transition: "transform 250ms var(--ease-expo)",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${accent}14`,
                  border: `1px solid ${accent}28`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: accent }} aria-hidden="true" />
              </div>

              {/* Title + desc */}
              <h3 className="font-heading" style={{ fontSize: "1.1875rem", color: "var(--text)", marginBottom: "0.75rem" }}>
                {title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "1.75rem" }}>
                {desc}
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-2)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        width: 4, height: 4, borderRadius: "50%",
                        background: accent, flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
