'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from './Container'
import ProjectCard from './ProjectCard'
import { staggerContainer } from '@/lib/motion'
import type { Project } from '@/types/project'

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-16 md:py-36">
      <Container>
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 md:mb-20">
          <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
          Proyectos seleccionados
          </p>
          <span className="text-xs text-neutral-300 dark:text-neutral-700 tabular-nums">
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-20"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
