"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { PageTransition } from "@/components/page-transition"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [hasVisited, setHasVisited] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Check if user has visited before in this session
    const visited = sessionStorage.getItem("hasVisited")

    // Show preloader only on first visit to home page
    if (!visited && pathname === "/") {
      setHasVisited(false)
      setIsLoading(true)
    } else {
      setHasVisited(true)
      setIsLoading(false)
    }
  }, [pathname])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setHasVisited(true)
    sessionStorage.setItem("hasVisited", "true")
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <AnimatePresence mode="wait">
        {isLoading && !hasVisited ? (
          <Preloader key="preloader" onComplete={handleLoadingComplete} />
        ) : (
          <>
            <Navigation key="navigation" />
            <PageTransition>{children}</PageTransition>
            <Footer key="footer" />
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}
