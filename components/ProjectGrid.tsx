'use client'

import { motion } from 'framer-motion'
import Container from './Container'
import ProjectCard from './ProjectCard'
import { gridContainer } from '@/lib/motion'
import type { Project } from '@/types/project'

const EASE_EDITORIAL = [0.25, 0.46, 0.45, 0.94] as const

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="projects" className="py-16 md:py-36">
      <Container>
        {/* Section header */}
        <motion.div
          className="flex items-end justify-between mb-10 md:mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
          Proyectos seleccionados
          </p>
          <span className="text-xs text-neutral-300 dark:text-neutral-700 tabular-nums">
            {String(projects.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
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
