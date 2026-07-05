import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sarvesh T S — Freelance Web Developer & Digital Marketer",
  description: "Freelance web developer and digital marketer based in Bangalore. 20+ client projects. Windows 11-style portfolio.",
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin:0, overflow:"hidden", background:"#000", fontFamily:"'Segoe UI Variable','Segoe UI',system-ui,sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
