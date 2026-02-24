'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { gridItem } from '@/lib/motion'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article variants={gridItem} className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 dark:group-hover:bg-neutral-950/20 transition-colors duration-500" />
        </div>

        {/* Meta */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1 group-hover:opacity-50">
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
