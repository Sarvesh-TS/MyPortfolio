"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    "Initializing Portfolio...",
    "Injecting Skills...",
    "Loading Security Protocols...",
    "Launching Interface...",
  ]

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        } else {
          clearInterval(stepInterval)
          setTimeout(() => onComplete(), 800)
          return prev
        }
      })
    }, 600)

    return () => clearInterval(stepInterval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Terminal Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-slate-700 rounded-lg p-8 backdrop-blur-sm shadow-2xl max-w-md mx-auto"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-slate-400 text-sm font-mono">portfolio.exe</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-4 font-mono text-left">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: index <= currentStep ? 1 : 0.3,
                  x: index <= currentStep ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-sky-400">$</span>
                <span className={index <= currentStep ? "text-white" : "text-slate-500"}>{step}</span>
                {index === currentStep && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="text-sky-400"
                  >
                    |
                  </motion.span>
                )}
                {index < currentStep && <span className="text-green-400 ml-auto">✓</span>}
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-slate-700 rounded-full h-1">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-sky-500 to-blue-500 h-1 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="absolute w-1 h-1 bg-sky-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                className="w-full h-full bg-sky-400 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
