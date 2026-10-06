import { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { getProjects, getProjectCategories } from '@/lib/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = createMetadata({
  title: 'Projects',
  description:
    'Case studies of production software built by AkorLabs Technologies: an offline-first POS platform, an invoicing app, a logistics dispatch system, an e-commerce CMS and more.',
  url: '/projects',
})

export default function ProjectsPage() {
  const projects = getProjects()
  const [lead, ...rest] = projects
  const categories = getProjectCategories(rest)

  return (
    <div>
      <header className="band-blue">
        <div className="container-custom pb-28 pt-16 md:pb-32 md:pt-20">
          <p className="eyebrow-on-dark mb-5">Our work</p>
          <h1 className="heading-xl mb-6 max-w-3xl text-white">Production software, built end to end.</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-primary-100 md:text-xl">
            Platforms we&apos;ve designed, built and shipped, from database schema to app store build. Most codebases
            are private or under client NDA, so each case study explains the architecture and the hard problems
            instead. Want to see the code?{' '}
            <Link href="/contact?subject=Code%20walkthrough" className="font-semibold text-brand-gold hover:underline">
              Ask for a walkthrough
            </Link>
            .
          </p>
        </div>
      </header>

      <div className="relative -mt-20 pb-16 md:pb-24">
        <div className="container-custom">

          {lead && (
            <Reveal className="mb-16">
              <ProjectCard project={lead} size="large" priority />
            </Reveal>
          )}

          <ProjectGrid
            categories={categories}
            cards={rest.map((project) => ({
              slug: project.slug,
              category: project.category,
              node: <ProjectCard project={project} className="w-full" />,
            }))}
          />
        </div>
      </div>
    </div>
  )
}
