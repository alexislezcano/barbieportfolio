'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    /*
      data-gsap-card   → GSAP: entrance (opacity, y)
      FM whileHover    → card lift (y: -4) — runs after entrance, no conflict
    */
    <motion.article
      data-gsap-card
      className="group"
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }}
    >
      <Link href={`/projects/${project.slug}`} className="block">

        {/*
          data-gsap-img-container → GSAP Part 3: brightness filter
          Plain div — no FM, no transform conflict
        */}
        <div
          data-gsap-img-container
          className="relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-5"
        >
          {/*
            data-gsap-parallax → GSAP Part 4: y parallax + scale 1.12 (headroom)
            Plain div — GSAP owns transform, no FM here
          */}
          <div
            data-gsap-parallax
            className="absolute inset-0"
            style={{ willChange: 'transform' }}
          >
            {/*
              CSS-only hover zoom — no inline style from GSAP on this element.
              group-hover:scale-[1.03] applies via stylesheet, not inline style,
              so it doesn't conflict with GSAP's inline transform on the parent.
            */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 dark:group-hover:bg-neutral-950/20 transition-colors duration-500" />
        </div>

        {/* Meta */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1 group-hover:opacity-50 transition-opacity duration-300">
              {project.title}
            </h3>
            <p className="text-xs tracking-wide text-neutral-400 dark:text-neutral-600">
              {project.category}
            </p>
          </div>
          <span className="text-xs text-neutral-300 dark:text-neutral-700 mt-0.5 shrink-0">
            {project.year}
          </span>
        </div>

      </Link>
    </motion.article>
  )
}
