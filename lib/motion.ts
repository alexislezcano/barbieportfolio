import { Variants } from 'framer-motion'

// Easing curve — editorial, smooth, non-mechanical
const EASE_EDITORIAL = [0.25, 0.46, 0.45, 0.94] as const

// Fade up — primary reveal animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_EDITORIAL,
    },
  },
}

// Pure fade — for overlays, images, background elements
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Scale in — subtle, refined entry for cards
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE_EDITORIAL,
    },
  },
}

// Stagger container — orchestrates children with a cascade
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

// Grid stagger container — tighter stagger optimised for project grids
export const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// Stagger item — used as a child of staggerContainer
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_EDITORIAL,
    },
  },
}

// Grid stagger — slightly tighter for project grids
export const gridItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_EDITORIAL,
    },
  },
}

// Page transition — cross-fade between routes
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeIn',
    },
  },
}
