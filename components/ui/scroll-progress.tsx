'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import type { SpringOptions } from 'framer-motion'

const DEFAULT_SPRING: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
}

interface ScrollProgressProps {
  className?: string
  springOptions?: SpringOptions
}

export function ScrollProgress({ className, springOptions }: ScrollProgressProps) {
  // No containerRef → tracks window scroll by default
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { ...DEFAULT_SPRING, ...springOptions })

  return (
    <motion.div
      className={className}
      style={{ scaleX, transformOrigin: 'left' }}
    />
  )
}
