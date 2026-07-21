"use client"
import { useRef, useState } from "react"
import type { FormEvent } from "react"
import emailjs from "@emailjs/browser"

type Status = "idle"|"loading"|"success"|"error"

export function Mail() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>("idle")

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus("loading")

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are not configured in environment variables.")
      setStatus("error")
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setStatus("success")
      formRef.current.reset()
    } catch { setStatus("error") }
  }

  return (
    <div style={{ display:"flex", height:"100%" }}>
      {/* Sidebar */}
      <div style={{ width:160, borderRight:"1px solid rgba(255,255,255,0.06)", padding:"12px 8px", display:"flex", flexDirection:"column", gap:2 }}>
        <div style={{ padding:"6px 12px", fontSize:12, color:"var(--win-accent)", background:"rgba(0,103,192,0.15)", borderRadius:4 }}>✉ New Message</div>
        {["📥 Inbox","📤 Sent","📋 Drafts","🗑 Deleted"].map(l => (
          <div key={l} style={{ padding:"6px 12px", fontSize:12, color:"var(--win-text-2)", borderRadius:4, cursor:"default" }}>{l}</div>
        ))}
        <div style={{ height:1, background:"rgba(255,255,255,0.06)", margin:"8px 0" }} />
        <div style={{ padding:"6px 12px", fontSize:11, color:"var(--win-text-muted)" }}>📬 From clients</div>
        <div style={{ padding:"8px 12px", borderRadius:6, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)", margin:"0 4px" }}>
          <div style={{ fontSize:11, fontWeight:600, color:"var(--win-text)", marginBottom:2 }}>Yuvi Builders</div>
          <div style={{ fontSize:10, color:"var(--win-text-muted)", lineHeight:1.5 }}>"Sarvesh delivered exactly what we envisioned..."</div>
        </div>
        <div style={{ padding:"8px 12px", borderRadius:6, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)", margin:"4px 4px 0" }}>
          <div style={{ fontSize:11, fontWeight:600, color:"var(--win-text)", marginBottom:2 }}>BGC Hospital</div>
          <div style={{ fontSize:10, color:"var(--win-text-muted)", lineHeight:1.5 }}>"Traffic up 180% after the redesign!"</div>
        </div>
      </div>

      {/* Compose */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        <div style={{ padding:"10px 16px", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"flex", gap:8 }}>
          <span style={{ fontSize:13, fontWeight:600, color:"var(--win-text)" }}>New Message</span>
        </div>
        <form ref={formRef} onSubmit={submit} style={{ flex:1, display:"flex", flexDirection:"column", padding:16, gap:10, overflow:"auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            <div>
              <div style={{ fontSize:11, color:"var(--win-text-muted)", marginBottom:4 }}>To</div>
              <input className="win-input" value="sarveshts2k4@gmail.com" readOnly style={{ background:"rgba(255,255,255,0.04)", color:"var(--win-text-2)" }} />
            </div>
            <div>
              <div style={{ fontSize:11, color:"var(--win-text-muted)", marginBottom:4 }}>Your Name *</div>
              <input name="user_name" type="text" required placeholder="John Doe" className="win-input" autoComplete="name" />
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            <div>
              <div style={{ fontSize:11, color:"var(--win-text-muted)", marginBottom:4 }}>Your Email *</div>
              <input name="user_email" type="email" required placeholder="you@email.com" className="win-input" autoComplete="email" />
            </div>
            <div>
              <div style={{ fontSize:11, color:"var(--win-text-muted)", marginBottom:4 }}>Subject *</div>
              <input name="subject" type="text" required placeholder="New website / SEO..." className="win-input" />
            </div>
          </div>
          <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
            <div style={{ fontSize:11, color:"var(--win-text-muted)", marginBottom:4 }}>Message *</div>
            <textarea name="message" required placeholder="Tell me about your project…" className="win-input" style={{ flex:1, minHeight:120 }} />
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <button type="submit" disabled={status==="loading"||status==="success"} className="btn-accent" style={{ padding:"8px 24px" }}>
              {status==="loading" ? "Sending…" : status==="success" ? "✓ Sent!" : "📤 Send"}
            </button>
            {status==="error" && <span style={{ fontSize:12, color:"#f87171" }}>Failed — try again</span>}
            {status==="success" && <span style={{ fontSize:12, color:"#4ade80" }}>I'll reply soon! 👋</span>}
          </div>
        </form>
      </div>
    </div>
  )
}
