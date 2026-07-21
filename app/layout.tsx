import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const SITE_URL = "https://sarveshts.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sarvesh T S — Freelance Web Developer & Digital Marketer",
    template: "%s | Sarvesh T S",
  },
  description:
    "Freelance web developer, SEO strategist, and digital marketer based in Bangalore. 20+ client projects delivered. Trusted by businesses across industries.",
  keywords: [
    "freelance web developer bangalore",
    "sarvesh t s",
    "next.js developer india",
    "wordpress developer",
    "shopify developer",
    "SEO expert bangalore",
    "digital marketing freelancer",
    "cybersecurity consultant",
    "ethical hacking",
    "React developer",
    "business website bangalore",
  ],
  authors: [{ name: "Sarvesh T S", url: SITE_URL }],
  creator: "Sarvesh T S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Sarvesh T S — Freelance Web Developer & Digital Marketer",
    description:
      "Freelance web developer & digital marketer based in Bangalore. 20+ client projects. Trusted by businesses across industries.",
    siteName: "Sarvesh T S Portfolio",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Sarvesh T S Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvesh T S — Freelance Web Developer & Digital Marketer",
    description: "Freelance web developer & digital marketer. 20+ client projects delivered.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body
        style={{
          margin: 0,
          overflow: "hidden",
          background: "#000",
          fontFamily: "'Segoe UI Variable','Segoe UI',system-ui,sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  )
}
