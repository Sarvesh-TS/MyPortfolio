import type { Metadata } from "next"
import { Code, Search, Megaphone, ShoppingCart, Globe, Shield, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance services by Sarvesh T S — Web Development, SEO, Digital Marketing, WordPress, Shopify, and Cybersecurity consulting in Bangalore.",
}

const services = [
  {
    id: "web-dev",
    number: "01",
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built from scratch using Next.js, React, or WordPress. Every project is optimized for speed, SEO, and conversion. I've delivered 20+ client projects across healthcare, real estate, retail, and tech.",
    deliverables: [
      "Custom design & development",
      "Mobile-responsive layout",
      "Fast-loading, SEO-optimized code",
      "Contact forms & lead capture",
      "CMS integration (WordPress, Drupal)",
      "Ongoing maintenance & support",
    ],
    stacks: ["Next.js", "React", "WordPress", "Drupal", "Tailwind CSS", "Firebase"],
  },
  {
    id: "seo",
    number: "02",
    icon: Search,
    title: "SEO & Growth",
    description:
      "Strategic SEO that gets your business ranked on Google. From technical audits and on-page optimization to local SEO and content strategy — I help businesses get found by the right audience at the right time.",
    deliverables: [
      "Technical SEO audit",
      "Keyword research & strategy",
      "On-page optimization",
      "Local SEO for Google Maps",
      "Content structure & meta optimization",
      "Monthly performance reports",
    ],
    stacks: ["Google Search Console", "Ahrefs", "Yoast SEO", "Screaming Frog", "PageSpeed Insights"],
  },
  {
    id: "digital-marketing",
    number: "03",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "End-to-end digital marketing campaigns that build your brand, grow your audience, and drive measurable results. From social media strategy to paid advertising, I help businesses market effectively online.",
    deliverables: [
      "Social media strategy & management",
      "Google Ads & Meta Ads campaigns",
      "Content marketing & copywriting",
      "Email marketing campaigns",
      "Analytics & performance tracking",
      "Competitor analysis",
    ],
    stacks: ["Google Ads", "Meta Ads Manager", "Mailchimp", "Google Analytics", "Canva", "Buffer"],
  },
  {
    id: "wordpress",
    number: "04",
    icon: Globe,
    title: "WordPress & CMS",
    description:
      "Professional WordPress websites built with Elementor, custom themes, and best practices. Easy-to-manage CMS setups so you can update your own content without any technical knowledge.",
    deliverables: [
      "Custom WordPress theme / Elementor build",
      "Plugin setup & configuration",
      "WooCommerce integration",
      "Speed & security optimization",
      "Admin training & documentation",
      "Hosting setup & migration",
    ],
    stacks: ["WordPress", "Elementor", "WooCommerce", "Yoast SEO", "WP Rocket", "Cloudflare"],
  },
  {
    id: "shopify",
    number: "05",
    icon: ShoppingCart,
    title: "Shopify Stores",
    description:
      "Beautiful, conversion-optimized Shopify stores for products and fashion brands. I handle everything from theme setup and product configuration to payment integration and launch.",
    deliverables: [
      "Custom Shopify theme setup",
      "Product catalogue & collections",
      "Payment gateway integration",
      "Inventory & variant management",
      "Mobile-optimized shopping experience",
      "SEO for product pages",
    ],
    stacks: ["Shopify", "Liquid", "Shopify Payments", "Google Shopping", "Meta Pixel"],
  },
  {
    id: "cybersecurity",
    number: "06",
    icon: Shield,
    title: "Cybersecurity Consulting",
    description:
      "Vulnerability assessments, penetration testing, and security audits for websites and applications. Currently interning at Cloudflare, Bangalore — bringing enterprise-level security thinking to small and medium businesses.",
    deliverables: [
      "Web application vulnerability assessment",
      "Penetration testing (VAPT)",
      "SQL Injection & XSS testing",
      "Security audit & detailed report",
      "Remediation recommendations",
      "GRC alignment (ISO 27001, NIST)",
    ],
    stacks: ["Burp Suite", "Nmap", "Wireshark", "OWASP ZAP", "Metasploit", "Splunk"],
  },
]

const process = [
  { step: "01", title: "Discovery", desc: "We discuss your goals, audience, timeline, and budget. I ask the right questions to understand exactly what you need." },
  { step: "02", title: "Proposal", desc: "I send a clear proposal with scope, timeline, and pricing. No surprises, no hidden fees." },
  { step: "03", title: "Build", desc: "I design and develop your project with regular check-ins and updates. You're involved at every step." },
  { step: "04", title: "Launch", desc: "We review, test, and launch. I provide handover documentation and support after go-live." },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#080808] pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <section className="py-16">
          <span className="section-label block mb-5">What I Offer</span>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-sora, Sora, sans-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
            }}
          >
            Services
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            From a simple landing page to a full-stack web application — I handle design, development,
            marketing, and security so you can focus on running your business.
          </p>
        </section>

        {/* Services List */}
        <section className="py-8">
          <div className="space-y-px">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                id={svc.id}
                className="group relative border border-zinc-800 rounded-2xl bg-[#0f0f0f] p-8 lg:p-10 hover:border-amber-500/30 transition-all duration-300 mb-4"
              >
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="text-amber-500/40 font-bold"
                        style={{ fontFamily: "var(--font-sora, Sora, sans-serif)", fontSize: "3rem", lineHeight: 1 }}
                      >
                        {svc.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500/30 transition-colors">
                        <svc.icon className="w-5 h-5 text-amber-400" />
                      </div>
                    </div>
                    <h2
                      className="text-white font-bold text-2xl mb-4"
                      style={{ fontFamily: "var(--font-sora, Sora, sans-serif)", letterSpacing: "-0.025em" }}
                    >
                      {svc.title}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base">{svc.description}</p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {svc.stacks.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — Deliverables */}
                  <div>
                    <h3 className="text-zinc-300 font-semibold text-sm mb-5 uppercase tracking-wider">What you get</h3>
                    <ul className="space-y-3">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-400 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-20 border-t border-zinc-900">
          <span className="section-label block mb-6">How It Works</span>
          <h2
            className="text-white mb-14"
            style={{
              fontFamily: "var(--font-sora, Sora, sans-serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
            }}
          >
            My Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-zinc-800 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="relative">
                  <div
                    className="text-amber-500/30 font-bold mb-4"
                    style={{ fontFamily: "var(--font-sora, Sora, sans-serif)", fontSize: "2.5rem", lineHeight: 1 }}
                  >
                    {p.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-sora, Sora, sans-serif)" }}>
                    {p.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="relative rounded-3xl border border-zinc-800 bg-[#0f0f0f] p-12 lg:p-16 overflow-hidden text-center">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 60%)" }}
            />
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "var(--font-sora, Sora, sans-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to start your project?
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto mb-8">
              Let&rsquo;s discuss your goals and build something together.
            </p>
            <Link href="/contact" className="btn-gold inline-flex">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
