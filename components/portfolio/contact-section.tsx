"use client"

import { useRef, useState } from "react"
import type { FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Send, Loader2, CheckCircle, AlertCircle, Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react"

type Status = "idle" | "loading" | "success" | "error"

const CONTACT = [
  { icon: Mail,     label: "Email",    value: "sarveshts2k4@gmail.com",   href: "mailto:sarveshts2k4@gmail.com",       external: false },
  { icon: Phone,    label: "Phone",    value: "+91 98802 31133",           href: "tel:+919880231133",                   external: false },
  { icon: Linkedin, label: "LinkedIn", value: "/in/sarveshts",             href: "https://linkedin.com/in/sarveshts",   external: true  },
  { icon: Github,   label: "GitHub",   value: "/Sarvesh-TS",               href: "https://github.com/Sarvesh-TS",       external: true  },
] as const

export function ContactSection(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>("idle")

  const submit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus("loading")
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "" }
      )
      setStatus("success")
      formRef.current.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        background: "var(--bg)",
        paddingTop: "7rem",
        paddingBottom: "7rem",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 350, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.09) 0%, transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>Let&apos;s Talk</div>
          <h2
            id="contact-heading"
            className="font-heading"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", color: "var(--text)", lineHeight: 1.0, maxWidth: "16ch" }}
          >
            Ready to{" "}
            <span style={{ color: "var(--accent)" }}>grow together?</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", maxWidth: "1000px" }}>

          {/* Contact links */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
            {CONTACT.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.125rem 1.25rem",
                  borderRadius: "var(--radius)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  transition: "border-color 150ms ease, background 150ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"
                  e.currentTarget.style.background = "var(--bg-card-2)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)"
                  e.currentTarget.style.background = "var(--bg-card)"
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 9, flexShrink: 0,
                  background: "var(--accent-dim)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon className="w-4 h-4" style={{ color: "var(--accent)" }} aria-hidden="true" />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.1rem" }}>
                    {label}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {value}
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--text-muted)" }} aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={submit}
            aria-label="Contact form"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
            }}
          >
            <div className="field">
              <label htmlFor="user_name">Name *</label>
              <input id="user_name" name="user_name" type="text" required placeholder="Your name" className="input" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="user_email">Email *</label>
              <input id="user_email" name="user_email" type="email" required placeholder="you@email.com" className="input" autoComplete="email" />
            </div>
            <div className="field" style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="subject">Subject *</label>
              <input id="subject" name="subject" type="text" required placeholder="New website / SEO / Google Ads…" className="input" />
            </div>
            <div className="field" style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required rows={4} placeholder="Tell me about your project…" className="input" />
            </div>
            <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn btn-primary"
                style={{ opacity: status === "loading" || status === "success" ? 0.7 : 1 }}
              >
                {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
                {status === "success" && <CheckCircle className="w-4 h-4" aria-hidden="true" />}
                {(status === "idle" || status === "error") && <Send className="w-4 h-4" aria-hidden="true" />}
                {status === "loading" ? "Sending…" : status === "success" ? "Message Sent!" : "Send Message"}
              </button>
              {status === "error" && (
                <span role="alert" style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", color: "#f87171" }}>
                  <AlertCircle className="w-4 h-4" aria-hidden="true" /> Failed. Try again.
                </span>
              )}
              {status === "success" && (
                <span role="status" style={{ fontSize: "0.875rem", color: "#4ade80" }}>
                  I&apos;ll get back to you soon! 👋
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
