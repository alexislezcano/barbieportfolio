import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProjectBySlug, getNextProject, getAllProjects } from '@/lib/projects'
import ProjectDetail from '@/components/ProjectDetail'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const nextProject = getNextProject(params.slug)

  return <ProjectDetail project={project} nextProject={nextProject} />
}
