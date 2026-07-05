export function Footer(): JSX.Element {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
        padding: "2.5rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          className="font-heading"
          style={{ color: "var(--text)", fontSize: "0.9375rem" }}
        >
          Sarvesh <span style={{ color: "var(--accent)" }}>TS</span>
        </span>

        <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
          © {year} · Freelance Web Developer &amp; Digital Marketer · Bangalore
        </span>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "Work",     id: "work"     },
            { label: "Services", id: "services" },
            { label: "Contact",  id: "contact"  },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
              style={{ fontSize: "0.8125rem", color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer", transition: "color 150ms ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)" }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}
