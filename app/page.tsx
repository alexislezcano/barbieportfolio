import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { getAllProjects } from '@/lib/projects'

export default function HomePage() {
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
