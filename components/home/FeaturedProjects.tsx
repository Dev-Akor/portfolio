import Link from 'next/link'
import { FaGithub, FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'Smart Queue Management System',
    description:
      'Real-time queue management for businesses — reducing customer wait times, improving service delivery, and capturing operational data. Built with WebSockets for live updates.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'WebSocket', 'PostgreSQL'],
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    slug: 'smart-queue-management',
  },
  {
    title: 'Kira Scales Website',
    description:
      'Corporate web presence for Kira Scales Limited — showcasing weighbridge products and industrial scale services, with integrated contact and inquiry workflows.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Contentlayer'],
    status: 'Live',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    slug: 'kira-scales-website',
    liveUrl: 'https://kirascales.com',
  },
  {
    title: 'Developer Portfolio',
    description:
      'This site — a fully static, production-grade portfolio and content platform with MDX blog, dark mode, RSS feed, SEO, and structured data. Zero runtime dependencies.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'MDX', 'Contentlayer'],
    status: 'Active',
    statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    slug: 'developer-portfolio',
    githubUrl: 'https://github.com/dev-akor/portfolio',
  },
]

export function FeaturedProjects() {
  return (
    <section
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
      aria-labelledby="projects-heading"
    >
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
              Projects
            </p>
            <h2
              id="projects-heading"
              className="heading-lg text-gray-900 dark:text-white"
            >
              Featured Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all"
            aria-label="View all projects"
          >
            All Projects <FaArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card flex flex-col group hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <span className={cn('badge text-xs font-medium', project.statusColor)}>
                    {project.status}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors p-1"
                      >
                        <FaGithub className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} live site`}
                        className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors p-1"
                      >
                        <FaArrowUpRightFromSquare className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                <Link href={`/projects/${project.slug}`} className="group/title">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 group-hover/title:text-primary-600 dark:group-hover/title:text-primary-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 text-xs text-gray-400 dark:text-gray-600">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link href="/projects" className="btn-primary">
            View All Projects <FaArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
