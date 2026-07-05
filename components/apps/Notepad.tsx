"use client"
export function Notepad() {
  const content = `about.txt - Sarvesh TS
===========================

Name        : Sarvesh T S
Location    : Bangalore, Karnataka, India
Phone       : +91 9880231133
Email       : sarveshts2k4@gmail.com
GitHub      : github.com/Sarvesh-TS
LinkedIn    : linkedin.com/in/sarveshts

---[ ABOUT ]---

Freelance web developer and digital marketer
based in Bangalore. I build websites that don't
just look good — they convert.

20+ client projects across healthcare, real
estate, retail, beauty, and hospitality.

I handle everything from design to deployment,
SEO to Google Ads. One person, full stack.

---[ WHAT I DO ]---

> Web Development   — Next.js, React, WordPress
> Digital Marketing — SEO, Google Ads, Content
> E-Commerce        — Shopify, WooCommerce
> UI/UX Design      — Figma to production

---[ PHILOSOPHY ]---

"A website is not a brochure. It's a salesman
that works 24/7. I build salesmen."

---[ AVAILABILITY ]---

Status      : ● AVAILABLE FOR PROJECTS
Response    : Usually within a few hours
Timezone    : IST (UTC+5:30)

Want to work together?
Open Mail.exe or call +91 9880231133

[EOF]`

  return (
    <div style={{
      height:"100%",
      display:"flex",
      flexDirection:"column",
      background:"#1e1e1e",
    }}>
      {/* Menu bar */}
      <div style={{ padding:"4px 8px", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"flex", gap:16 }}>
        {["File","Edit","View","Help"].map(m => (
          <span key={m} style={{ fontSize:13, color:"var(--win-text-2)", cursor:"default", padding:"2px 8px", borderRadius:3 }}>{m}</span>
        ))}
      </div>
      <pre style={{
        flex:1,
        padding:"16px 20px",
        fontFamily:'"Cascadia Code", "Consolas", monospace',
        fontSize:13,
        lineHeight:1.8,
        color:"rgba(255,255,255,0.85)",
        overflowY:"auto",
        whiteSpace:"pre-wrap",
        wordBreak:"break-word",
        userSelect:"text",
      }}>
        {content}
      </pre>
      <div style={{ padding:"4px 16px", borderTop:"1px solid rgba(255,255,255,0.06)", fontSize:11, color:"var(--win-text-muted)", display:"flex", gap:24 }}>
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span>Windows (CRLF)</span>
        <span>Plain Text</span>
      </div>
    </div>
  )
}
