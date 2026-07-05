"use client"

import { motion } from "framer-motion"
import { Code, Search, Megaphone, Layers, ShoppingBag } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  tags: readonly string[]
}

const SERVICES: readonly Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites built with Next.js, React, WordPress, and Shopify. Fast, responsive, and built to convert visitors into customers.",
    tags: ["Next.js", "React", "WordPress"],
  },
  {
    icon: Search,
    title: "SEO & Growth",
    description:
      "On-page, technical, and local SEO strategies that get your business found on Google and drive real organic traffic.",
    tags: ["On-Page SEO", "Technical SEO", "Local SEO"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Google Ads, social media management, and content marketing to build your brand and grow your online presence.",
    tags: ["Google Ads", "Social Media", "Content"],
  },
  {
    icon: Layers,
    title: "WordPress & CMS",
    description:
      "Custom WordPress themes, Elementor builds, and Drupal CMS integrations for clients who manage their own content.",
    tags: ["WordPress", "Elementor", "Drupal"],
  },
  {
    icon: ShoppingBag,
    title: "Shopify Stores",
    description:
      "Complete Shopify store setups with custom themes, app integrations, and conversion-optimised layouts.",
    tags: ["Shopify", "E-Commerce", "Liquid"],
  },
] as const

export function Services(): JSX.Element {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label mb-4">What I Do</p>
          <h2
            id="services-heading"
            className="font-heading"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)" }}
          >
            Services I Offer
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              className="card group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-muted)" }}
              >
                <service.icon
                  className="w-5 h-5"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3
                className="font-heading text-base mb-2"
                style={{ color: "var(--text)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md"
                    style={{
                      background: "var(--surface)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
