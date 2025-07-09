"use client"

import type React from "react"

import { useEffect } from "react"

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Simple scroll animation implementation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all elements with data-aos attribute
    const elements = document.querySelectorAll("[data-aos]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}
