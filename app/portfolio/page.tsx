"use client"

import { useState } from "react"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import Link from "next/link"

// ─── Base URL for Pavan's project images (shared projects) ───
const IMG = "https://www.pavankumar.co/assets/projects"

const categories = ["All", "Business Websites", "Web Apps", "E-Commerce"]

const projects = [
  // ── Shared projects with Pavan (have proper mockup images) ──
  {
    id: "bangalore-gastro",
    title: "Bangalore Gastro Centre",
    description: "A comprehensive digital platform for a NABH-accredited gastroenterology hospital — doctor listings, appointment booking, blogs, courses, and Drupal CMS for independent content management.",
    tech: ["Next.js", "React", "Drupal"],
    category: "Business Websites",
    url: "https://www.bangaloregastrocentre.com",
    img: `${IMG}/bgc_phone.webp`,
    tag: "Healthcare",
  },

  {
    id: "yuvi-builders",
    title: "Yuvi Builders",
    description: "Advanced real estate platform with dynamic property listings, filtering, sorting, and Drupal CMS for easy content management.",
    tech: ["Next.js", "React", "Drupal"],
    category: "Business Websites",
    url: "https://www.yuvibuilders.com",
    img: `${IMG}/yuvibuilders.webp`,
    tag: "Real Estate",
  },
  {
    id: "samagra-interiors",
    title: "Samagra Interiors",
    description: "Premium web platform for an interior design firm specializing in residential and commercial spaces across Bangalore and Thrissur.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    category: "Business Websites",
    url: "https://www.samagrainteriors.com",
    img: `${IMG}/samagra_interiors_phone.webp`,
    tag: "Interior Design",
  },
  {
    id: "neo-leather",
    title: "Neo Leather",
    description: "High-performance static website for a premium leather furniture brand. Built with SSG for blazing fast load times and SEO optimization.",
    tech: ["Next.js", "React", "CSS"],
    category: "Business Websites",
    url: "https://www.neoleather.in",
    img: `${IMG}/neoleather.webp`,
    tag: "Furniture",
  },
  {
    id: "harvis-infra",
    title: "Harvis Infra",
    description: "Dynamic web platform for a road construction materials supplier — showcasing bitumen, steel, cement, and infrastructure solutions.",
    tech: ["Next.js", "React", "CSS"],
    category: "Business Websites",
    url: "https://www.harvisinfra.com",
    img: `${IMG}/harvis.webp`,
    tag: "Infrastructure",
  },
  {
    id: "neo-heights",
    title: "Neo Heights",
    description: "Modern high-performance website for an industrial construction company. Built with Next.js and Drupal CMS for project showcasing.",
    tech: ["Next.js", "React", "Drupal"],
    category: "Business Websites",
    url: "https://neo-heights.vercel.app",
    img: `${IMG}/neoheights.webp`,
    tag: "Construction",
  },
  {
    id: "snip-dark",
    title: "Snip Dark Salon Spa",
    description: "Luxury salon & spa website with premium dark aesthetic, service catalogue, gallery, and booking integration built on WordPress.",
    tech: ["WordPress", "Elementor", "Yoast SEO"],
    category: "Business Websites",
    url: "https://www.snipdark.com",
    img: `${IMG}/snipdark_phone.webp`,
    tag: "Beauty & Wellness",
  },
  {
    id: "antara-studios",
    title: "Antara Studios",
    description: "Interior design & architectural firm website showcasing turnkey interiors, architecture, construction, renovation, and landscaping services.",
    tech: ["WordPress", "Elementor"],
    category: "Business Websites",
    url: "https://www.antarastudios.com",
    img: `${IMG}/antara_studios.webp`,
    tag: "Architecture",
  },
  {
    id: "tuff-ppf",
    title: "TUFF PPF",
    description: "Corporate website for a paint protection film manufacturer showcasing the Titan, Spectre, and Pro-R product lines with technical specs.",
    tech: ["WordPress", "Elementor", "CSS"],
    category: "Business Websites",
    url: "https://www.tuffppf.com",
    img: `${IMG}/tuff_ppf.webp`,
    tag: "Automotive",
  },
  {
    id: "turbo-tints",
    title: "Turbo Tints",
    description: "Professional automotive customization website — window tinting, interior modifications, and bike PPF services showcase.",
    tech: ["WordPress", "Elementor", "CSS"],
    category: "Business Websites",
    url: "https://www.turbotints.in",
    img: `${IMG}/turbo_tint.webp`,
    tag: "Automotive",
  },
  {
    id: "iconhomz",
    title: "IconHomz",
    description: "Modern, visually appealing website for a renowned Bangalore builder showcasing residential projects and commitment to quality.",
    tech: ["WordPress", "Elementor", "CSS"],
    category: "Business Websites",
    url: "https://www.iconhomz.com",
    img: `${IMG}/iconhomz.webp`,
    tag: "Real Estate",
  },
  {
    id: "saaranj",
    title: "Saaranj Ventures",
    description: "Comprehensive corporate website for a leading construction and manufacturing company in Bengaluru.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Business Websites",
    url: "https://www.saaranj.com",
    img: `${IMG}/saaranj.webp`,
    tag: "Construction",
  },
  {
    id: "occasion-bangalore",
    title: "The Occasion Bangalore",
    description: "Elegant website for a premium event venue — showcasing luxurious spaces and comprehensive services for weddings and corporate events.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Business Websites",
    url: "https://www.theoccasionbangalore.com",
    img: `${IMG}/the_occasion.webp`,
    tag: "Events",
  },
  {
    id: "bgc-foundation",
    title: "BGC Foundation",
    description: "Comprehensive website for a foundation showcasing humanitarian initiatives, community programs, and social impact work.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    category: "Business Websites",
    url: "https://www.bgcfoundation.org",
    img: `${IMG}/bgc_foundation.webp`,
    tag: "Non-Profit",
  },

  // ── Sarvesh's own projects (no Pavan image — gradient fallback) ──
  {
    id: "sangeetha-tyres",
    title: "Sangeetha Tyres",
    description: "Full-featured automotive services platform with tyre catalogue, Firebase-powered appointment booking, and quote system.",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    category: "Business Websites",
    url: "https://www.sangeethatyres.in",
    img: null,
    tag: "Automotive",
    gradient: "from-amber-900/30 to-orange-900/20",
  },
  {
    id: "maatikosh",
    title: "Maatikosh",
    description: "Shopify store for handmade ceramic products — earthy artisanal aesthetic, product storytelling, and seamless checkout.",
    tech: ["Shopify"],
    category: "E-Commerce",
    url: "https://maatikosh.com",
    img: null,
    tag: "E-Commerce",
    gradient: "from-emerald-900/30 to-teal-900/20",
  },
  {
    id: "ramya-katta",
    title: "Ramya Katta Couture",
    description: "Premium fashion Shopify store with exclusive couture collections, lookbooks, size guides, and seamless checkout.",
    tech: ["Shopify"],
    category: "E-Commerce",
    url: "https://ramyakatta.com",
    img: null,
    tag: "Fashion",
    gradient: "from-rose-900/30 to-pink-900/20",
  },
  {
    id: "prasiddhi-cloud9",
    title: "Prasiddhi Cloud 9",
    description: "High-converting real estate campaign landing page with property showcase, amenities, floor plans, and lead capture.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Business Websites",
    url: "https://campaign.prasiddhigroup.com",
    img: null,
    tag: "Real Estate",
    gradient: "from-violet-900/30 to-purple-900/20",
  },
  {
    id: "vedaearth",
    title: "VedaEarth Lounge Spa",
    description: "Premium women's wellness lounge — luxury aesthetic WordPress site with Zoho Creator POS integration.",
    tech: ["WordPress"],
    category: "Business Websites",
    url: "https://vedaearthloungespa.com",
    img: null,
    tag: "Wellness",
    gradient: "from-green-900/30 to-emerald-900/20",
  },
]

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
      : projects.filter((p) => p.category === activeCategory)

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
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-zinc-800 bg-[#111111] hover:border-amber-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Image / Fallback */}
              <div className="relative overflow-hidden aspect-square bg-[#1a1a1a]">
                {project.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.img}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${(project as any).gradient || "from-zinc-900 to-zinc-800"} flex items-center justify-center`}
                  >
                    <span
                      className="text-white/20 font-bold text-center px-6 leading-tight"
                      style={{
                        fontFamily: "var(--font-sora, Sora, sans-serif)",
                        fontSize: "clamp(1.5rem, 4vw, 2rem)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {project.title}
                    </span>
                  </div>
                )}

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
                      tagColors[project.tag] || "text-amber-400"
                    }`}
                  >
                    {project.tag}
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
            </a>
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
