'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'
import { staggerContainer, staggerItem } from '@/lib/motion'

const socialLinks = [
  { label: 'Behance', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="py-16 md:py-44 border-t border-neutral-200 dark:border-neutral-800"
    >
      <Container>
        <div className="max-w-3xl">
          {/* Label */}
          <motion.p
            variants={staggerItem}
            className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-6 md:mb-10"
          >
            Contacto
          </motion.p>

          {/* Closing statement */}
          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 dark:text-neutral-100 leading-[1.1] tracking-tight mb-8 md:mb-12"
          >
            ¿Trabajamos juntos?
          </motion.h2>

          {/* Intro text */}
          <motion.p
            variants={staggerItem}
            className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.8] max-w-lg mb-10"
          >
            Si querés que trabajemos en tu próximo proyecto o colaborar en ideas creativas,
            podés escribirme.
          </motion.p>

          {/* Email */}
          <motion.a
            variants={staggerItem}
            href="mailto:bcorbelleri@gmail.com"
            className="inline-block text-base md:text-xl font-light text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 pb-1 mb-10 md:mb-16"
          >
            bcorbelleri@gmail.com
          </motion.a>

          {/* Social links */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-5 md:gap-8"
          >
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}
