'use client'

import { useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from './Container'
import ProjectCard from './ProjectCard'
import type { Project } from '@/types/project'

const EASE_EDITORIAL = [0.25, 0.46, 0.45, 0.94] as const

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations('ProjectGrid')

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const section = sectionRef.current!
      const cards = gsap.utils.toArray<HTMLElement>('[data-gsap-card]', section)
      const imgContainers = gsap.utils.toArray<HTMLElement>('[data-gsap-img-container]', section)
      const parallaxEls = gsap.utils.toArray<HTMLElement>('[data-gsap-parallax]', section)

      // ─── INIT ───────────────────────────────────────────────────────────────
      // Cards invisible until entrance fires — prevents FOUC
      gsap.set(cards, { opacity: 0, y: 80 })
      // Parallax wrappers: scale 1.12 provides ±15px headroom; start shifted up
      gsap.set(parallaxEls, { scale: 1.12, y: -15 })
      // All images start at reduced brightness — active card will brighten
      gsap.set(imgContainers, { filter: 'brightness(0.8)' })

      // ─── PART 2 — Entrance ──────────────────────────────────────────────────
      // Each card fades up individually as it scrolls into view.
      // delay = (i % 3) * 0.1 staggers cards within the same grid row (0, 100, 200ms).
      cards.forEach((card, i) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: (i % 3) * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
        })
      })

      // ─── PART 3 — Active focus: brightness scrub ────────────────────────────
      // Each image container brightens as its card scrolls to viewport center,
      // then dims again as it scrolls out. Runs on a separate plain div so there
      // is zero conflict with Framer Motion on the article element.
      imgContainers.forEach((container, i) => {
        const card = cards[i]

        // Brighten: card enters → card center reaches mid-viewport
        gsap.fromTo(
          container,
          { filter: 'brightness(0.8)' },
          {
            filter: 'brightness(1)',
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 65%',
              end: 'center 50%',
              scrub: 1.5,
            },
          }
        )

        // Dim: card center passes mid-viewport → card leaves
        gsap.fromTo(
          container,
          { filter: 'brightness(1)' },
          {
            filter: 'brightness(0.8)',
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'center 50%',
              end: 'bottom 35%',
              scrub: 1.5,
            },
          }
        )
      })

      // ─── PART 4 — Subtle parallax depth ─────────────────────────────────────
      // Image wrapper moves from y:-15 to y:15 across the full scroll distance.
      // The scale:1.12 (set above) provides 18px of headroom so edges never show.
      // scrub:true makes it perfectly sync with scroll speed (no lag).
      parallaxEls.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: -15 },
          {
            y: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i],
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section ref={sectionRef} id="projects" className="py-16 md:py-36">
      <Container>

        {/* Section header — Framer Motion whileInView, unrelated to GSAP */}
        <motion.div
          className="flex items-end justify-between mb-10 md:mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
            {t('label')}
          </p>
          <span className="text-xs text-neutral-400 dark:text-neutral-700 tabular-nums">
            {String(projects.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Grid — plain div, GSAP drives all card animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </Container>
    </section>
  )
}
