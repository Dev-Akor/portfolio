import Link from 'next/link'
import type { Project } from 'contentlayer/generated'
import { HiArrowUpRight } from 'react-icons/hi2'
import { cn } from '@/lib/utils'
import { ProjectCover } from './ProjectCover'
import { StatusBadge, TechChip, VisibilityBadge } from './ProjectMeta'

interface ProjectCardProps {
  project: Project
  className?: string
  /** Larger layout used for the lead project in a grid */
  size?: 'default' | 'large'
  priority?: boolean
}

export function ProjectCard({ project, className, size = 'default', priority }: ProjectCardProps) {
  const large = size === 'large'
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-600/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-600',
        large && 'lg:flex-row',
        className
      )}
    >
      <ProjectCover
        project={project}
        priority={priority}
        sizes={large ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
        className={cn('aspect-[16/10] w-full shrink-0', large && 'lg:aspect-auto lg:w-[55%]')}
      />

      <div className={cn('flex flex-1 flex-col p-6', large && 'lg:p-10')}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <VisibilityBadge visibility={project.visibility} />
        </div>

        <p className="mb-2 text-xs font-semibold text-primary-600 dark:text-primary-400">{project.category}</p>
        <h3 className={cn('font-bold leading-snug text-gray-900 dark:text-white', large ? 'text-2xl lg:text-3xl' : 'text-xl')}>
          <Link href={project.url} className="after:absolute after:inset-0 focus:outline-none">
            {project.title}
          </Link>
        </h3>
        <p className={cn('mt-3 flex-1 leading-relaxed text-gray-600 dark:text-gray-400', large ? 'text-base' : 'text-sm')}>
          {project.description}
        </p>

        {large && project.metrics && project.metrics.length > 0 && (
          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6 dark:border-gray-800">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-display text-2xl font-bold text-gray-900 dark:text-white">{m.value}</dd>
                <dd className="mt-0.5 text-xs leading-snug text-gray-500 dark:text-gray-400">{m.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, large ? 6 : 4).map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
          {project.technologies.length > (large ? 6 : 4) && (
            <span className="chip text-gray-500">+{project.technologies.length - (large ? 6 : 4)}</span>
          )}
        </div>

        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
          Read case study
          <HiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}
