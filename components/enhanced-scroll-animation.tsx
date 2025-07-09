"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type React from "react"

interface EnhancedScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "flipIn" | "rotateIn"
  duration?: number
}

export function EnhancedScrollAnimation({
  children,
  className = "",
  delay = 0,
  animation = "slideUp",
  duration = 0.6,
}: EnhancedScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const animations = {
    slideUp: {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -60, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60, scale: 0.95 },
      visible: { opacity: 1, x: 0, scale: 1 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -60, scale: 0.95 },
      visible: { opacity: 1, x: 0, scale: 1 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    flipIn: {
      hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
      visible: { opacity: 1, rotateY: 0, scale: 1 },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -180, scale: 0.8 },
      visible: { opacity: 1, rotate: 0, scale: 1 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({
  children,
  className = "",
  animation = "slideUp",
}: {
  children: React.ReactNode
  className?: string
  animation?: "slideUp" | "zoomIn" | "flipIn"
}) {
  const animations = {
    slideUp: {
      hidden: { opacity: 0, y: 40, scale: 0.9 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
    flipIn: {
      hidden: { opacity: 0, rotateY: -90 },
      visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
    },
  }

  return (
    <motion.div variants={animations[animation]} className={className}>
      {children}
    </motion.div>
  )
}
