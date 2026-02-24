'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  /**
   * When true the section contents are wrapped in a stagger container
   * and each direct child should use the `data-animate` convention.
   * Defaults to false — plain fade-up on the section itself.
   */
  stagger?: boolean
}

/**
 * Generic section reveal wrapper.
 * Uses framer-motion's useInView so the animation triggers only
 * once, as the section scrolls into the viewport.
 */
export default function SectionWrapper({
  children,
  className = '',
  id,
  stagger = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  if (stagger) {
    return (
      <motion.section
        ref={ref}
        id={id}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
      >
        {children}
      </motion.section>
    )
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      variants={staggerItem}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.section>
  )
}
