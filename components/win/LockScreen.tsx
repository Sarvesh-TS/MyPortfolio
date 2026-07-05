"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Props { onUnlock: () => void }

export function LockScreen({ onUnlock }: Props) {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    function tick() {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }))
      setDate(now.toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="lock-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      onClick={onUnlock}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 0, 0, 1] }}
        style={{ textAlign: "center" }}
      >
        <div className="lock-time">{time}</div>
        <div className="lock-date">{date}</div>
      </motion.div>
      <div className="lock-hint">Click anywhere to unlock</div>
    </motion.div>
  )
}
