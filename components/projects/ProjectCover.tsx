import Image from 'next/image'
import type { Project } from 'contentlayer/generated'
import { cn } from '@/lib/utils'

interface ProjectCoverProps {
  project: Pick<Project, 'title' | 'shortTitle' | 'cover' | 'coverAlt' | 'icon' | 'category'>
  priority?: boolean
  sizes?: string
  className?: string
}

/** The project's cover image, or a generated brand panel when there is no image to show. */
export function ProjectCover({ project, priority, sizes = '(min-width: 1024px) 50vw, 100vw', className }: ProjectCoverProps) {
  if (project.cover) {
    return (
      <div className={cn('relative overflow-hidden bg-gray-100 dark:bg-gray-900', className)}>
        <Image
          src={project.cover}
          alt={project.coverAlt ?? project.title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    )
  }

  const name = project.shortTitle ?? project.title
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-800 to-gray-950',
        className
      )}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        {project.icon && (
          <Image src={project.icon} alt="" width={72} height={72} className="rounded-2xl shadow-2xl ring-1 ring-white/10" />
        )}
        <span className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{name}</span>
        <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-gray-950">{project.category}</span>
      </div>
    </div>
  )
}
