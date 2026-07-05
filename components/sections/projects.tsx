"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const IMG = "https://www.pavankumar.co/assets/projects"

type Category = "All" | "Business" | "E-Commerce"

interface Project {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly tech: readonly string[]
  readonly category: Category
  readonly url: string
  readonly img: string | null
  readonly tag: string
  readonly gradient?: string
}

const PROJECTS: readonly Project[] = [
  {
    id: "bangalore-gastro",
    title: "Bangalore Gastro Centre",
    description:
      "Hospital website with doctor listings, appointment booking & Drupal CMS.",
    tech: ["Next.js", "React", "Drupal"],
    category: "Business",
    url: "https://www.bangaloregastrocentre.com",
    img: `${IMG}/bgc_phone.webp`,
    tag: "Healthcare",
  },
  {
    id: "yuvi-builders",
    title: "Yuvi Builders",
    description:
      "Real estate platform with dynamic listings, filters & Drupal CMS.",
    tech: ["Next.js", "React", "Drupal"],
    category: "Business",
    url: "https://www.yuvibuilders.com",
    img: `${IMG}/yuvibuilders.webp`,
    tag: "Real Estate",
  },
  {
    id: "samagra-interiors",
    title: "Samagra Interiors",
    description:
      "Premium interior design firm — residential & commercial spaces across Bangalore.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    category: "Business",
    url: "https://www.samagrainteriors.com",
    img: `${IMG}/samagra_interiors_phone.webp`,
    tag: "Interior Design",
  },
  {
    id: "neo-leather",
    title: "Neo Leather",
    description:
      "Premium leather furniture brand — SSG for blazing fast load times.",
    tech: ["Next.js", "React", "CSS"],
    category: "Business",
    url: "https://www.neoleather.in",
    img: `${IMG}/neoleather.webp`,
    tag: "Furniture",
  },
  {
    id: "neo-heights",
    title: "Neo Heights",
    description:
      "Industrial construction company — high-performance site with Drupal CMS.",
    tech: ["Next.js", "React", "Drupal"],
    category: "Business",
    url: "https://neo-heights.vercel.app",
    img: `${IMG}/neoheights.webp`,
    tag: "Construction",
  },
  {
    id: "snip-dark",
    title: "Snip Dark Salon Spa",
    description: "Luxury salon & spa website with a premium dark aesthetic.",
    tech: ["WordPress", "Elementor"],
    category: "Business",
    url: "https://www.snipdark.com",
    img: `${IMG}/snipdark_phone.webp`,
    tag: "Beauty & Wellness",
  },
  {
    id: "antara-studios",
    title: "Antara Studios",
    description:
      "Interior design & architectural firm showcasing turnkey interiors.",
    tech: ["WordPress", "Elementor"],
    category: "Business",
    url: "https://www.antarastudios.com",
    img: `${IMG}/antara_studios.webp`,
    tag: "Architecture",
  },
  {
    id: "tuff-ppf",
    title: "TUFF PPF",
    description:
      "Paint protection film manufacturer — product showcase with full specs.",
    tech: ["WordPress", "Elementor"],
    category: "Business",
    url: "https://www.tuffppf.com",
    img: `${IMG}/tuff_ppf.webp`,
    tag: "Automotive",
  },
  {
    id: "iconhomz",
    title: "IconHomz",
    description: "Bangalore real estate builder showcasing residential projects.",
    tech: ["WordPress", "Elementor"],
    category: "Business",
    url: "https://www.iconhomz.com",
    img: `${IMG}/iconhomz.webp`,
    tag: "Real Estate",
  },
  {
    id: "occasion-bangalore",
    title: "The Occasion Bangalore",
    description:
      "Premium event venue — weddings, corporate events, celebrations.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Business",
    url: "https://www.theoccasionbangalore.com",
    img: `${IMG}/the_occasion.webp`,
    tag: "Events",
  },
  {
    id: "harvis-infra",
    title: "Harvis Infra",
    description:
      "Road construction materials supplier — bitumen, steel, cement showcase.",
    tech: ["Next.js", "React", "CSS"],
    category: "Business",
    url: "https://www.harvisinfra.com",
    img: `${IMG}/harvis.webp`,
    tag: "Infrastructure",
  },
  {
    id: "maatikosh",
    title: "Maatikosh",
    description:
      "Shopify store for handmade ceramic products with an artisanal aesthetic.",
    tech: ["Shopify"],
    category: "E-Commerce",
    url: "https://maatikosh.com",
    img: null,
    tag: "Ceramics",
    gradient: "from-amber-900/40 to-orange-900/20",
  },
  {
    id: "ramya-katta",
    title: "Ramya Katta Couture",
    description:
      "Premium fashion Shopify store with exclusive couture collections.",
    tech: ["Shopify"],
    category: "E-Commerce",
    url: "https://ramyakatta.com",
    img: null,
    tag: "Fashion",
    gradient: "from-rose-900/40 to-pink-900/20",
  },
] as const

const CATEGORIES: readonly Category[] = ["All", "Business", "E-Commerce"]

export function Projects(): JSX.Element {
  const [active, setActive] = useState<Category>("All")

  const filtered: readonly Project[] =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        {/* Header + filter */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label mb-4">My Work</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              id="projects-heading"
              className="font-heading"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--text)",
              }}
            >
              Projects
            </h2>

            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter projects by category">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={active === cat}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border"
                  style={{
                    background: active === cat ? "var(--accent)" : "transparent",
                    color: active === cat ? "#fff" : "var(--text-muted)",
                    borderColor:
                      active === cat ? "var(--accent)" : "var(--border)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              className="group block rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.055,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
            >
              {/* Image / fallback */}
              <div
                className="relative overflow-hidden aspect-square"
                style={{ background: "var(--surface)" }}
              >
                {project.img !== null ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.img}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${project.gradient ?? "from-zinc-900 to-zinc-800"} flex items-center justify-center p-6`}
                  >
                    <span
                      className="font-display text-center leading-tight"
                      style={{
                        fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                        color: "rgba(255,255,255,0.18)",
                      }}
                    >
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                >
                  <span
                    className="flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="label" style={{ fontSize: "0.65rem" }}>
                    {project.tag}
                  </span>
                  <ExternalLink
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--border)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="font-heading text-sm mb-1.5 transition-colors duration-200"
                  style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs leading-relaxed line-clamp-2 mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-md"
                      style={{
                        background: "var(--surface)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
