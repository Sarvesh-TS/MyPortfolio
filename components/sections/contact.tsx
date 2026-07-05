"use client"

import { useRef, useState } from "react"
import type { FormEvent } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  Mail,
  Phone,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "sarveshts2k4@gmail.com",
    href: "mailto:sarveshts2k4@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9880231133",
    href: "tel:+919880231133",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sarveshts",
    href: "https://linkedin.com/in/sarveshts",
    external: true,
  },
] as const

export function Contact(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus("loading")

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
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
          <p className="label mb-4">Get In Touch</p>
          <h2
            id="contact-heading"
            className="font-heading"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)" }}
          >
            Let&apos;s work together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — contact info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="leading-relaxed"
              style={{ color: "var(--text-muted)", fontSize: "1.0625rem" }}
            >
              Whether you have a project in mind, want to discuss a
              collaboration, or just want to say hi — I&apos;d love to hear
              from you.
            </p>

            <div className="space-y-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)"
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--accent-muted)" }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "var(--accent)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {label}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — EmailJS form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            aria-label="Contact form"
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="user_name"
                  className="text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Name <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="input"
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="user_email"
                  className="text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Email <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="input"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-sm font-medium"
                style={{ color: "var(--text)" }}
              >
                Subject <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                className="input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium"
                style={{ color: "var(--text)" }}
              >
                Message <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="input"
                style={{ resize: "none" }}
              />
            </div>

            {/* Submit row */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-primary"
              >
                {status === "loading" && (
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                )}
                {status === "success" && (
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                )}
                {(status === "idle" || status === "error") && (
                  <Send className="w-4 h-4" aria-hidden="true" />
                )}
                {status === "loading"
                  ? "Sending…"
                  : status === "success"
                  ? "Message Sent!"
                  : "Send Message"}
              </button>

              {status === "error" && (
                <span
                  role="alert"
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#f87171" }}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Something went wrong. Please try again.
                </span>
              )}

              {status === "success" && (
                <span
                  role="status"
                  className="text-sm"
                  style={{ color: "#4ade80" }}
                >
                  I&apos;ll get back to you soon!
                </span>
              )}
            </div>

            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              * Required fields. Your data is only used to reply to your
              message.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
