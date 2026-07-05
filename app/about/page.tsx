import type { Metadata } from "next"
import { Briefcase, GraduationCap, Award, Users, Shield, Code, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sarvesh T S — B.Tech Cybersecurity student at Jain University, Security Intern at Cloudflare, and freelance web developer with 20+ client projects.",
}

const experience = [
  {
    role: "Security Intern",
    company: "Cloudflare",
    location: "Bangalore",
    period: "Feb 2026 — Present",
    current: true,
    points: [
      "Assisting the GRC team with the Korean ISMS audit — collecting evidence, validating security controls, and ensuring alignment with regulatory requirements.",
      "Developed an automated monitoring dashboard to track cybersecurity news and regulatory updates, delivering targeted alerts to relevant stakeholders.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Blaasys Pvt Ltd",
    location: "",
    period: "Aug 2025 — Feb 2026",
    current: false,
    points: [
      "Implemented security features from scratch across internal systems.",
      "Conducted regular vulnerability scans and audits to maintain system integrity, and set up automation across the infrastructure.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Adiroha Solutions",
    location: "Bangalore",
    period: "May 2025 — Jul 2025",
    current: false,
    points: [
      "Conducted Vulnerability Assessment and Penetration Testing (VAPT) using Burp Suite, Nmap, and DirBuster.",
      "Prepared detailed security reports for issues like SQL Injection, XSS, and Authentication Bypass.",
    ],
  },
]

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering (Cybersecurity)",
    institution: "Jain University, Bangalore",
    period: "2022 — 2026",
    score: "CGPA: 7.8",
  },
  {
    degree: "Pre-University (Physics, Chemistry, Mathematics, Computer Science)",
    institution: "Swargarani PU College, Bangalore",
    period: "2020 — 2022",
    score: "78%",
  },
  {
    degree: "Indian Certificate of Secondary Education (ICSE)",
    institution: "Baldwin Co-education Extension High School",
    period: "2020",
    score: "88%",
  },
]

const skills = {
  "Programming": ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "Bash", "PowerShell"],
  "Networking": ["TCP/IP", "DNS", "HTTP/S", "Routing/Switching", "Firewalls", "VPNs", "Cisco Packet Tracer"],
  "Cybersecurity Tools": ["Wireshark", "Nmap", "Burp Suite", "OWASP ZAP", "Snyk", "Nessus", "Splunk", "Hydra", "Metasploit"],
  "Web & Dev": ["React", "Next.js", "Node.js", "Flask", "Django", "WordPress", "Shopify", "Firebase", "Tailwind CSS"],
  "Frameworks & Standards": ["NIST CSF", "ISO 27001", "MITRE ATT&CK", "PCI-DSS", "GDPR", "SOC 2", "STRIDE", "OWASP"],
}

const certifications = [
  "Certified Network Defender (EC-Council)",
  "Google Cybersecurity (Coursera)",
]

const accomplishments = [
  {
    title: "Smart India Hackathon 2024 — Grand Finalist",
    detail: "IIT Jammu",
    icon: Award,
  },
  {
    title: "Cybersecurity Lead — Google Developer Students Club",
    detail: "Aug 2023 — Aug 2024",
    icon: Users,
  },
  {
    title: "Tech Lead — Salus Club",
    detail: "Aug 2023 — Aug 2025",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* ── HERO BIO ─────────────────────────────────── */}
        <section className="pb-20 border-b border-zinc-900">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label block mb-5">About Me</span>
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: "var(--font-sora, Sora, sans-serif)",
                  fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.0,
                }}
              >
                Sarvesh T S
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-5">
                I&rsquo;m a B.Tech Cybersecurity student at Jain University, Bangalore, currently interning at{" "}
                <span className="text-white font-medium">Cloudflare</span> as a Security Intern. Alongside my
                studies and security work, I run a freelance practice in web development, SEO, and digital
                marketing — with{" "}
                <span className="text-amber-400 font-medium">20+ client projects</span> delivered across
                healthcare, real estate, IT, e-commerce, and more.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed mb-8">
                I bridge two worlds: the technical depth of cybersecurity and the creative side of building
                web products that businesses rely on. Whether it&rsquo;s a hospital website, a Shopify store,
                or a penetration test — I deliver with precision and care.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-gold">
                  Work With Me
                </Link>
                <a
                  href="/SarveshTS.pdf"
                  download
                  className="btn-outline-gold"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right — quick facts */}
            <div className="space-y-4">
              {[
                { label: "Location", value: "Bangalore, India" },
                { label: "Currently", value: "Security Intern at Cloudflare" },
                { label: "Education", value: "B.Tech CSE (Cybersecurity) — Jain University" },
                { label: "Freelance", value: "Web Dev · SEO · Digital Marketing" },
                { label: "Email", value: "sarveshts2k4@gmail.com", href: "mailto:sarveshts2k4@gmail.com" },
                { label: "Phone", value: "+91 9880231133", href: "tel:+919880231133" },
                { label: "LinkedIn", value: "linkedin.com/in/sarveshts", href: "https://linkedin.com/in/sarveshts", external: true },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800 bg-[#0f0f0f]"
                >
                  <span className="text-zinc-600 text-sm font-medium w-24 flex-shrink-0 pt-0.5">{fact.label}</span>
                  {fact.href ? (
                    <a
                      href={fact.href}
                      target={fact.external ? "_blank" : undefined}
                      rel={fact.external ? "noopener noreferrer" : undefined}
                      className="text-amber-400 text-sm hover:text-amber-300 transition-colors flex items-center gap-1"
                    >
                      {fact.value}
                      {fact.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  ) : (
                    <span className="text-zinc-200 text-sm">{fact.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────── */}
        <section className="py-20 border-b border-zinc-900">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <span className="section-label">Work Experience</span>
          </div>

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-zinc-800 bg-[#0f0f0f] hover:border-amber-500/20 transition-all"
              >
                {job.current && (
                  <span className="absolute top-8 right-8 inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Current
                  </span>
                )}
                <div className="mb-4">
                  <h3
                    className="text-white font-bold text-xl mb-1"
                    style={{ fontFamily: "var(--font-sora, Sora, sans-serif)", letterSpacing: "-0.02em" }}
                  >
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-amber-400 font-semibold text-sm">{job.company}</span>
                    {job.location && <span className="text-zinc-600 text-sm">{job.location}</span>}
                    <span className="text-zinc-600 text-sm">{job.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 flex-shrink-0 mt-2" />
                      <span className="text-zinc-400 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ────────────────────────────────── */}
        <section className="py-20 border-b border-zinc-900">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="section-label">Education</span>
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-3 gap-4 p-6 rounded-xl border border-zinc-800 bg-[#0f0f0f] items-center"
              >
                <div className="sm:col-span-2">
                  <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-sora, Sora, sans-serif)" }}>
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-500 text-sm">{edu.institution}</p>
                </div>
                <div className="flex sm:flex-col sm:items-end gap-4 sm:gap-1">
                  <span className="text-zinc-500 text-sm">{edu.period}</span>
                  <span className="text-amber-400 text-sm font-semibold">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ───────────────────────────────────── */}
        <section className="py-20 border-b border-zinc-900">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-5 h-5 text-amber-400" />
            <span className="section-label">Skills & Tools</span>
          </div>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="grid sm:grid-cols-4 gap-4 items-start">
                <span className="text-zinc-600 text-sm font-medium">{category}</span>
                <div className="sm:col-span-3 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs hover:border-amber-500/30 hover:text-amber-400 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ───────────────────────────── */}
        <section className="py-20 border-b border-zinc-900">
          <div className="flex items-center gap-3 mb-12">
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="section-label">Certifications</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-800 bg-[#0f0f0f]"
              >
                <Shield className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-zinc-300 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── ACCOMPLISHMENTS ──────────────────────────── */}
        <section className="py-20">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="section-label">Accomplishments</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {accomplishments.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-zinc-800 bg-[#0f0f0f] hover:border-amber-500/20 transition-all"
              >
                <item.icon className="w-6 h-6 text-amber-400 mb-4" />
                <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-sora, Sora, sans-serif)" }}>
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
