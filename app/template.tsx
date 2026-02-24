'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/lib/motion'

/**
 * template.tsx re-mounts on every navigation (unlike layout.tsx).
 * This gives us a genuine enter animation on each route change.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
