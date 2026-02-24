'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from './Container'
import { staggerContainer, staggerItem } from '@/lib/motion'

const roles = ['Diseñadora Gráfica', 'Motion Graphics', 'Dirección de Arte']

const EASE_EDITORIAL = [0.25, 0.46, 0.45, 0.94] as const

const portraitVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 1.03,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: EASE_EDITORIAL,
      delay: 0.3,
    },
  },
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center py-10 md:py-28">

          {/* Left — text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            {/* Label */}
            <motion.p
              variants={staggerItem}
              className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-6 md:mb-10"
            >
              Portfolio — 2026
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={staggerItem}
              className="text-[clamp(3.2rem,8vw,7rem)] font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-[0.92] mb-8"
            >
              Barbs
              <br />
              Corbelleri
            </motion.h1>

            {/* Roles */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 md:mb-10"
            >
              {roles.map((role, i) => (
                <span
                  key={role}
                  className="text-sm text-neutral-500 dark:text-neutral-500 tracking-wide"
                >
                  {role}
                  {i < roles.length - 1 && (
                    <span className="ml-3 text-neutral-300 dark:text-neutral-700">·</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={staggerItem}
              className="text-base md:text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed mb-10 md:mb-14"
            >
              Diseño experiencias visuales que combinan estética, estrategia y movimiento.
            </motion.p>

            {/* CTA */}
            <motion.div variants={staggerItem}>
              <Link
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 text-xs font-medium tracking-widest uppercase hover:opacity-75 transition-opacity duration-200"
              >
                Ver proyectos
                <ArrowRight />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — portrait */}
          <motion.div
            variants={portraitVariant}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="
                relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[420px]
                aspect-[3/4]
                overflow-hidden
                bg-neutral-100 dark:bg-transparent
                shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]
                dark:shadow-none
                hover:shadow-[0_16px_56px_-12px_rgba(0,0,0,0.18)]
                dark:hover:shadow-none
                transition-shadow duration-500
              "
            >
              <Image
                src="/images/profile/barbie-profile.jpg"
                alt="Barbs Corbelleri — Diseñadora Gráfica & Directora de Arte"
                fill
                priority
                sizes="(max-width: 768px) 340px, 420px"
                className="object-cover object-top"
              />
            </motion.div>
          </motion.div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-neutral-300 dark:text-neutral-700">
        Deslizar hacia abajo
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-neutral-400 to-transparent dark:from-neutral-600"
        />
      </motion.div>
    </section>
  )
}
