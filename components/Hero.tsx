'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Transition, Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Container from './Container'
import { TextEffect } from './ui/text-effect'

const EASE_EDITORIAL = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

// Shared transition applied to each animated segment
const SEGMENT_TRANSITION: Transition = { duration: 0.4, ease: EASE_EDITORIAL }

// 1️⃣ Title characters — blur + soft lift, premium reveal
const titleItemVariants: Variants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit:   { opacity: 0, y: 10, filter: 'blur(6px)' },
}

// 2️⃣ Role words — subtle lift only, no blur
const rolesItemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: 6 },
}

// 3️⃣ Tagline words — micro-blur + lift, softest motion
const taglineItemVariants: Variants = {
  hidden: { opacity: 0, y: 8, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit:   { opacity: 0, y: 8, filter: 'blur(3px)' },
}

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
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  // Increments after the user settles on a theme to re-trigger TextEffect.
  // Debounced so rapid toggling only fires one animation after the last click.
  const [animKey, setAnimKey] = useState(0)
  const t = useTranslations('Hero')

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))

    let debounceTimer: ReturnType<typeof setTimeout>

    const observer = new MutationObserver(() => {
      // Always sync image crossfade immediately
      setIsDark(document.documentElement.classList.contains('dark'))
      // Debounce the TextEffect re-trigger — only fires once the user stops toggling
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => setAnimKey((k) => k + 1), 350)
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      observer.disconnect()
      clearTimeout(debounceTimer)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center py-10 md:py-28">

          {/* Left — text content */}
          <div className="order-2 md:order-1">

            {/* Label — instant fade, no delay */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-6 md:mb-10"
            >
              {t('label')}
            </motion.p>

            {/*
              1️⃣ Main Title — per character, blur + lift.
              animKey forces full re-play on theme switch.
            */}
            <h1 className="text-[clamp(3.2rem,8vw,7rem)] font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-[0.92] mb-8">
              <TextEffect
                key={`barbs-${animKey}`}
                per="char"
                as="span"
                delay={0.1}
                speedReveal={1.8}
                segmentTransition={SEGMENT_TRANSITION}
                variants={{ item: titleItemVariants }}
                className="block"
              >
                Barbs
              </TextEffect>
              <TextEffect
                key={`corbelleri-${animKey}`}
                per="char"
                as="span"
                delay={0.35}
                speedReveal={1.4}
                segmentTransition={SEGMENT_TRANSITION}
                variants={{ item: titleItemVariants }}
                className="block"
              >
                Corbelleri
              </TextEffect>
            </h1>

            {/*
              2️⃣ Subtitle — per word, gentle lift.
              Roles joined into one string so TextEffect
              can stagger each word uniformly.
            */}
            <TextEffect
              key={`roles-${animKey}`}
              per="word"
              as="p"
              delay={0.9}
              speedReveal={1.6}
              segmentTransition={SEGMENT_TRANSITION}
              variants={{ item: rolesItemVariants }}
              className="text-sm text-neutral-500 dark:text-neutral-500 tracking-wide mb-7 md:mb-10"
            >
              {`${t('role1')} · ${t('role2')} · ${t('role3')}`}
            </TextEffect>

            {/*
              3️⃣ Description — per word, micro-blur + lift.
              Softest motion in the hierarchy.
            */}
            <TextEffect
              key={`tagline-${animKey}`}
              per="word"
              as="p"
              delay={1.8}
              speedReveal={1.2}
              segmentTransition={SEGMENT_TRANSITION}
              variants={{ item: taglineItemVariants }}
              className="text-base md:text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed mb-10 md:mb-14"
            >
              {t('tagline')}
            </TextEffect>

            {/* CTA — enters after the full cascade settles */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6, ease: EASE_EDITORIAL }}
            >
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.getElementById('projects')
                  if (!target) return
                  // Subtract header height (h-20 = 80px + 3px border/progress)
                  const top = target.getBoundingClientRect().top + window.scrollY - 83
                  window.scrollTo({ top, behavior: 'smooth' })
                }}
                className="inline-flex items-center rounded-full gap-3 px-7 py-3.5 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 text-xs font-medium tracking-widest uppercase hover:opacity-75 transition-opacity duration-200"
              >
                {t('cta')}
                <ArrowRight />
              </Link>
            </motion.div>
          </div>

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
              className="relative overflow-hidden rounded-full w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px]"
            >
              {/* Dark mode image */}
              <Image
                src="/images/profile/barbie-profile.jpg"
                alt="Barbs Corbelleri — Diseñadora Gráfica & Directora de Arte"
                fill
                priority
                sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 360px"
                className={`object-cover object-top transition-opacity duration-[1500ms] ${
                  mounted && !isDark ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ position: 'absolute', zIndex: isDark ? 1 : 0 }}
              />

              {/* Light mode image */}
              <Image
                src="/images/profile/barbie-profile.png"
                alt="Barbs Corbelleri — Diseñadora Gráfica & Directora de Arte"
                fill
                priority
                sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 360px"
                className={`object-cover transition-opacity duration-[1500ms] ${
                  mounted && isDark ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ position: 'absolute', zIndex: isDark ? 0 : 1 }}
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
        <span className="text-[10px] tracking-widest uppercase text-neutral-500 dark:text-neutral-500">
          {t('scrollDown')}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-neutral-500 to-transparent dark:from-neutral-500"
        />
      </motion.div>
    </section>
  )
}
