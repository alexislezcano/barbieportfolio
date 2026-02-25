'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Container from './Container'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Tool {
  name: string
  icon: React.ReactNode
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────

/** Adobe Creative Suite — square lettermark (matches brand identity) */
function AdobeIcon({ abbr }: { abbr: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontSize="13.5"
        fontWeight="400"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"
        letterSpacing="0.5"
      >
        {abbr}
      </text>
    </svg>
  )
}

/** Figma — Simple Icons path (fill-based) */
function FigmaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zm-4.5 9H12v7H8.5a3.5 3.5 0 1 1 0-7zM12 15.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM15.5 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
    </svg>
  )
}

/** Blender — sphere + orbital ring (communicates 3D software) */
function BlenderIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* Outer sphere */}
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.2" />
      {/* Orbital ring — tilted ellipse */}
      <ellipse
        cx="20"
        cy="20"
        rx="16"
        ry="7"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(-20 20 20)"
      />
      {/* Center pole */}
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
    </svg>
  )
}

// ─── Tool data ────────────────────────────────────────────────────────────────

const TOOLS: Tool[] = [
  { name: 'Photoshop',    icon: <AdobeIcon abbr="Ps" /> },
  { name: 'Illustrator',  icon: <AdobeIcon abbr="Ai" /> },
  { name: 'After Effects', icon: <AdobeIcon abbr="Ae" /> },
  { name: 'Premiere Pro', icon: <AdobeIcon abbr="Pr" /> },
  { name: 'Figma',        icon: <FigmaIcon /> },
  { name: 'Blender',      icon: <BlenderIcon /> },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function ToolsInfiniteSlider() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const t = useTranslations('Tools')

  // Triple the array to guarantee no visible gap on very wide screens
  const items = [...TOOLS, ...TOOLS, ...TOOLS]

  return (
    <section
      ref={ref}
      aria-label={t('label')}
      className="py-14 md:py-20 border-t border-neutral-200 dark:border-neutral-800"
    >
      {/* Section label — fades in on scroll */}
      <Container>
        <motion.p
          className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-10 md:mb-14"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('label')}
        </motion.p>
      </Container>

      {/* Slider — full-width, edge-masked */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        className="relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        }}
      >
        {/*
          Infinite loop:
          – Items tripled → width = 3×
          – x moves from 0% to -33.33% (= one full set width) → seamless
        */}
        <motion.div
          className="flex items-center"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            duration: 32,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {items.map((tool, i) => (
            <ToolItem key={i} tool={tool} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── Single tool item ─────────────────────────────────────────────────────────

function ToolItem({ tool }: { tool: Tool }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 px-9 md:px-14 select-none cursor-default"
      style={{ opacity: 0.55 }}
      whileHover={{ opacity: 1, scale: 1.04 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {/* Icon */}
      <div className="w-9 h-9 md:w-11 md:h-11 text-neutral-800 dark:text-neutral-200 flex-shrink-0">
        {tool.icon}
      </div>

      {/* Label */}
      <span className="text-[9px] md:text-[10px] font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
        {tool.name}
      </span>
    </motion.div>
  )
}
