import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import { getFeaturedProjects } from '@/lib/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'

export function FeaturedProjects() {
  const [lead, ...rest] = getFeaturedProjects()
  if (!lead) return null

  return (
    <section className="section-padding" aria-labelledby="projects-heading">
      <div className="container-custom">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 id="projects-heading" className="heading-lg text-gray-900 dark:text-white">
              Platforms in production
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-2 font-medium text-primary-600 transition-all hover:gap-3 dark:text-primary-400 sm:flex"
          >
            All projects <HiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <Reveal>
          <ProjectCard project={lead} size="large" />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="flex">
              <ProjectCard project={project} className="w-full" />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link href="/projects" className="btn-primary">
            All projects <HiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
