import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { getAllProjects } from '@/lib/projects'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const projects = getAllProjects()

  return (
    <>
      <Hero />
      <ProjectGrid projects={projects} />
      <About />
      <Contact />
    </>
  )
}
