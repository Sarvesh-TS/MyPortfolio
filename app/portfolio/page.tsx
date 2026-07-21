"use client"

import { useState } from "react"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const categories = ["All", "Healthcare", "Real Estate", "Construction", "Interior Design", "Automotive", "Beauty & Wellness", "Web App"]

import { projects } from "@/lib/portfolio-data"

const tagGradients: Record<string, string> = {
  Healthcare: "#7f1d1d",
  "Real Estate": "#4c1d95",
  "Interior Design": "#78350f",
  Furniture: "#713f12",
  Infrastructure: "#1e293b",
  Construction: "#7c2d12",
  "Beauty & Wellness": "#831843",
  Automotive: "#164e63",
  "Web App": "#0c4a6e",
  Wellness: "#064e3b",
  "Business Website": "#1e3a5f",
}

const tagColors: Record<string, string> = {
  Healthcare: "text-red-400",
  "IT Consulting": "text-blue-400",
  "Real Estate": "text-violet-400",
  "Interior Design": "text-amber-400",
  Furniture: "text-yellow-400",
  Infrastructure: "text-gray-400",
  Construction: "text-orange-400",
  "Beauty & Wellness": "text-pink-400",
  Architecture: "text-teal-400",
  Automotive: "text-cyan-400",
  Events: "text-indigo-400",
  "Non-Profit": "text-green-400",
  Sports: "text-lime-400",
  "Web App": "text-sky-400",
  "E-Commerce": "text-rose-400",
  Fashion: "text-fuchsia-400",
  Wellness: "text-emerald-400",
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.tags?.includes(activeCategory))

  return (
    <div className="min-h-screen bg-[#080808] pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* ── Header ─────────────────────────────────── */}
        <div className="mb-16">
          <span className="section-label block mb-5">My Work</span>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-sora, Sora, sans-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
            }}
          >
            Projects
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            20+ client websites and apps across healthcare, real estate, retail, IT, and more.
          </p>
        </div>

        {/* ── Filter Tabs ─────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-amber-500 text-zinc-900 border-amber-500"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:border-amber-500/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Projects Grid ───────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              
              
              className="group block rounded-2xl overflow-hidden border border-zinc-800 bg-[#111111] hover:border-amber-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Gradient card */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#1a1a1a]">
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${tagGradients[project?.tags?.[0]] || '#27272a'} 0%, #18181b 100%)` }}
                  >
                    <span
                      className="text-white/25 font-bold text-center px-6 leading-tight"
                      style={{
                        fontFamily: "var(--font-sora, Sora, sans-serif)",
                        fontSize: "clamp(1.5rem, 4vw, 2rem)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {project.title}
                    </span>
                  </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white font-semibold text-sm bg-amber-500 px-4 py-2 rounded-full">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      tagColors[project?.tags?.[0]] || "text-amber-400"
                    }`}
                  >
                    {project?.tags?.[0]}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-700 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3
                  className="text-white font-semibold mb-1.5 group-hover:text-amber-400 transition-colors"
                  style={{ fontFamily: "var(--font-sora, Sora, sans-serif)", letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── CTA ────────────────────────────────────── */}
        <div className="mt-24 text-center">
          <p className="text-zinc-500 text-sm mb-6">Have a project in mind?</p>
          <Link href="/contact" className="btn-gold inline-flex">
            Let&rsquo;s Work Together
          </Link>
        </div>

      </div>
    </div>
  )
}
