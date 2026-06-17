import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { allProjects } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Projects',
  description:
    'Explore projects built by Solomon Akor — web applications, tools, and digital products using Next.js, TypeScript, Node.js, and more.',
  url: '/projects',
})

const statusColors: Record<string, string> = {
  active: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  archived: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
}

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Portfolio
          </p>
          <h1 className="heading-xl text-gray-900 dark:text-white mb-6">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A collection of projects I&apos;ve built — from web applications and tools to
            business platforms. Each one solves a real problem.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            <p>Projects coming soon. Check back shortly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article key={project.slug} className="card p-6 flex flex-col group">
                <div className="flex items-start justify-between mb-5">
                  <span className={cn('badge text-xs', statusColors[project.status ?? 'active'])}>
                    {project.status ?? 'active'}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                      >
                        <FaArrowUpRightFromSquare className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <Link href={project.url}>
                  <h2 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h2>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.url}
                  className="mt-5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  View Details →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
