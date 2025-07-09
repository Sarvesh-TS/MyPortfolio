import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./clientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sarvesh T S - Cybersecurity Expert & Web Developer",
    template: "%s | Sarvesh T S",
  },
  description:
    "Cybersecurity student and freelance web developer helping organizations stay secure and build strong digital presence through secure applications and modern websites.",
  keywords: [
    "cybersecurity",
    "web development",
    "ethical hacking",
    "penetration testing",
    "React",
    "Next.js",
    "security consulting",
  ],
  authors: [{ name: "Sarvesh T S" }],
  creator: "Sarvesh T S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarveshts.dev",
    title: "Sarvesh T S - Cybersecurity Expert & Web Developer",
    description:
      "Cybersecurity student and freelance web developer helping organizations stay secure and build strong digital presence.",
    siteName: "Sarvesh T S Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarvesh T S - Cybersecurity Expert & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvesh T S - Cybersecurity Expert & Web Developer",
    description:
      "Cybersecurity student and freelance web developer helping organizations stay secure and build strong digital presence.",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://sarveshts.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
