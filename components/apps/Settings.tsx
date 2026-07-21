"use client"
import { useState } from "react"

const SERVICES = [
  {
    id: "web",
    icon: "🌐",
    title: "Web Development",
    subtitle: "Next.js · React · WordPress · Shopify",
    desc: "Custom websites and web apps built for performance, SEO, and conversion. From landing pages to full-stack platforms.",
    items: ["Custom Next.js / React sites","WordPress & Elementor","Shopify & WooCommerce","Landing page design & dev","Website speed optimization","CMS setup & training"],
    color: "#60cdff",
  },
  {
    id: "seo",
    icon: "🔍",
    title: "SEO & Content",
    subtitle: "Technical SEO · Content · Rankings",
    desc: "Get found on Google. Full technical SEO audits, on-page optimization, and content strategies that rank.",
    items: ["Technical SEO audit","On-page optimization","Google Search Console setup","Keyword research & strategy","Schema markup","Monthly reporting"],
    color: "#4ade80",
  },
  {
    id: "ads",
    icon: "📢",
    title: "Google Ads & PPC",
    subtitle: "Search · Display · Shopping · YouTube",
    desc: "ROI-focused paid campaigns. Setup, management, and monthly reporting to make every rupee count.",
    items: ["Google Search Ads","Display & Remarketing","Shopping campaigns","Conversion tracking","A/B ad testing","Monthly ROI reports"],
    color: "#f59e0b",
  },
  {
    id: "design",
    icon: "🎨",
    title: "UI/UX Design",
    subtitle: "Figma · Prototyping · Design Systems",
    desc: "Interfaces that look premium and convert. Figma designs, prototypes, and full handoff-ready design systems.",
    items: ["Figma mockups & prototypes","Brand identity & logo","Design system creation","Mobile-first responsive design","User flow mapping","Dev handoff"],
    color: "#a78bfa",
  },
]

const NAV = SERVICES.map(s => s.id)

export function Settings() {
  const [active, setActive] = useState("web")
  const svc = SERVICES.find(s => s.id === active)!

  return (
    <div style={{ display:"flex", height:"100%", fontSize:13 }}>
      {/* Left nav */}
      <div style={{ width:220, borderRight:"1px solid rgba(255,255,255,0.06)", padding:"16px 8px", display:"flex", flexDirection:"column", gap:2 }}>
        <div style={{ fontSize:11, color:"var(--win-text-muted)", letterSpacing:"0.08em", textTransform:"uppercase", padding:"0 12px", marginBottom:8 }}>My Services</div>
        {SERVICES.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              display:"flex", alignItems:"center", gap:12, padding:"10px 14px", borderRadius:6,
              background: active===s.id ? `${s.color}15` : "transparent",
              border: active===s.id ? `1px solid ${s.color}40` : "1px solid transparent",
              cursor:"pointer", textAlign:"left", transition:"all 120ms",
              fontFamily:"inherit",
            }}
          >
            <span style={{ fontSize:20 }}>{s.icon}</span>
            <div>
              <div style={{ fontSize:13, color: active===s.id ? "var(--win-text)" : "var(--win-text-2)", fontWeight: active===s.id ? 600 : 400 }}>{s.title}</div>
              <div style={{ fontSize:10, color:"var(--win-text-muted)", marginTop:1 }}>{s.subtitle}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Right content */}
      <div style={{ flex:1, padding:"24px 28px", overflowY:"auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
          <div style={{ width:52, height:52, borderRadius:12, background:`${svc.color}20`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>{svc.icon}</div>
          <div>
            <div style={{ fontSize:20, fontWeight:600, color:"var(--win-text)" }}>{svc.title}</div>
            <div style={{ fontSize:13, color:"var(--win-text-2)", marginTop:2 }}>{svc.subtitle}</div>
          </div>
        </div>

        <p style={{ fontSize:14, color:"var(--win-text-2)", lineHeight:1.8, marginBottom:24 }}>{svc.desc}</p>

        <div style={{ fontSize:11, color:"var(--win-text-muted)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:12 }}>What's Included</div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:28 }}>
          {svc.items.map(item => (
            <div key={item} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 14px", borderRadius:8, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ color:svc.color, fontSize:14 }}>✓</span>
              <span style={{ color:"var(--win-text)", fontSize:13 }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ display:"flex", gap:10 }}>
          <button
            className="btn-accent"
            style={{ padding:"10px 24px", fontSize:14 }}
            onClick={() => document.querySelector<HTMLElement>('[aria-label="mail"]')?.click()}
          >
            ✉️ Get a Quote
          </button>
          <a href="tel:+919880231133" className="btn-subtle" style={{ padding:"10px 20px", fontSize:14, textDecoration:"none", display:"flex", alignItems:"center", gap:6 }}>
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  )
}
