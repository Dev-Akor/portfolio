import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import Link from 'next/link'
import { FaGithub, FaArrowUpRightFromSquare, FaArrowLeft } from 'react-icons/fa6'
import { formatDate, siteConfig } from '@/lib/utils'
import { createMetadata } from '@/lib/metadata'
import { cn } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = allProjects.find((p) => p.slug === params.slug)
  if (!project) return {}

  return createMetadata({
    title: project.title,
    description: project.description,
    url: project.url,
    image: project.featuredImage,
    type: 'article',
  })
}

const statusColors: Record<string, string> = {
  active: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  archived: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
}

export default function ProjectPage({ params }: Props) {
  const project = allProjects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const MDXContent = useMDXComponent(project.body.code)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    author: { '@type': 'Person', name: 'Solomon Akor', url: siteConfig.url },
    url: `${siteConfig.url}${project.url}`,
    dateCreated: project.date,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-10 text-sm"
          >
            <FaArrowLeft className="w-3 h-3" /> Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={cn('badge text-xs', statusColors[project.status ?? 'active'])}>
                {project.status ?? 'active'}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                {formatDate(project.date)}
              </span>
            </div>
            <h1 className="heading-xl text-gray-900 dark:text-white mb-5">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm gap-2"
                >
                  <FaGithub className="w-4 h-4" /> View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <FaArrowUpRightFromSquare className="w-3.5 h-3.5" /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="card p-6 mb-10">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* MDX Content */}
          <article className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary-600 dark:prose-a:text-primary-400">
            <MDXContent />
          </article>
        </div>
      </div>
    </>
  )
}
