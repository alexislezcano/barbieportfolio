'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from './Container'
import { staggerContainer, staggerItem } from '@/lib/motion'
import type { Project } from '@/types/project'

interface ProjectDetailProps {
  project: Project
  nextProject?: Project
}

function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-36 pb-16">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={staggerItem}
              className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-8"
            >
              {project.category}&nbsp;&nbsp;—&nbsp;&nbsp;{project.year}
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl font-light text-neutral-900 dark:text-neutral-100 leading-none tracking-tight mb-8"
            >
              {project.title}
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed"
            >
              {project.description}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── Cover image ─────────────────────────────────────────── */}
      <section className="pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative aspect-video bg-neutral-100 dark:bg-neutral-900 overflow-hidden"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </motion.div>
        </Container>
      </section>

      {/* ── Project details row ──────────────────────────────────── */}
      <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Client', value: project.client },
              { label: 'Year', value: project.year },
              { label: 'Category', value: project.category },
              { label: 'Services', value: project.services.join(', ') },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-2">
                  {label}
                </p>
                <p className="text-sm font-light text-neutral-900 dark:text-neutral-100 leading-relaxed">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-6">
                Process
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-100 leading-tight">
                Approach & Thinking
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-[1.85]"
            >
              {project.fullDescription}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ── Image gallery ───────────────────────────────────────── */}
      <section className="pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {project.images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: i * 0.08,
                }}
                className={[
                  'relative overflow-hidden bg-neutral-100 dark:bg-neutral-900',
                  i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square',
                ].join(' ')}
              >
                <Image
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Result ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-8">
              Result
            </p>
            <p className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-neutral-100 leading-relaxed">
              {project.outcome}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Back to work + next project ─────────────────────────── */}
      <section className="border-t border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="flex flex-col sm:flex-row items-stretch">
            {/* Back to all work */}
            <Link
              href="/#projects"
              className="group flex-1 flex items-center gap-3 py-12 sm:border-r border-neutral-200 dark:border-neutral-800 text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <span className="rotate-180 inline-block">
                <ArrowRight />
              </span>
              All Projects
            </Link>

            {/* Next project */}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex-1 flex items-center justify-between gap-6 py-12 sm:pl-12"
              >
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-2">
                    Next Project
                  </p>
                  <h3 className="text-xl md:text-2xl font-light text-neutral-900 dark:text-neutral-100 group-hover:opacity-50">
                    {nextProject.title}
                  </h3>
                </div>
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 group-hover:bg-neutral-900 group-hover:border-neutral-900 dark:group-hover:bg-neutral-100 dark:group-hover:border-neutral-100">
                  <ArrowRight className="text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-50 dark:group-hover:text-neutral-900" />
                </div>
              </Link>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
