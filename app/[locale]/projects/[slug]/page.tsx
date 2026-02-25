import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getProjectBySlug, getNextProject, getAllProjects } from '@/lib/projects'
import ProjectDetail from '@/components/ProjectDetail'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const nextProject = getNextProject(slug)

  return <ProjectDetail project={project} nextProject={nextProject} />
}
