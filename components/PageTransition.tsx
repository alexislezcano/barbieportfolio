'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/lib/motion'

/**
 * Standalone page transition wrapper.
 * Can be used to wrap specific content when template.tsx
 * isn't the right level of granularity.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}
