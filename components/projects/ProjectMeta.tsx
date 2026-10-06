import Link from 'next/link'
import type { Project } from 'contentlayer/generated'
import { HiLockClosed, HiShieldCheck } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa6'
import { cn } from '@/lib/utils'
import { statusMeta, visibilityMeta, walkthroughHref } from '@/lib/projects'
import { techIcon } from '@/lib/tech-icons'

export function StatusBadge({ status, className }: { status?: Project['status']; className?: string }) {
  if (!status) return null
  const meta = statusMeta[status]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset',
        meta.className,
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', meta.dot, status === 'live' && 'animate-pulse')} />
      {meta.label}
    </span>
  )
}

export function TechChip({ name }: { name: string }) {
  const Icon = techIcon(name)
  return (
    <span className="chip">
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
      {name}
    </span>
  )
}

export function VisibilityBadge({ visibility }: { visibility: Project['visibility'] }) {
  if (visibility === 'public') return null
  const Icon = visibility === 'confidential' ? HiShieldCheck : HiLockClosed
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-900/5 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-900/10 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10">
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {visibilityMeta[visibility].label}
    </span>
  )
}

/** Source-code access block: a repo link for public projects, a walkthrough request otherwise. */
export function CodeAccess({ project }: { project: Project }) {
  if (project.visibility === 'public' && project.repoUrl) {
    return (
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center text-sm">
        <FaGithub className="h-4 w-4" aria-hidden="true" /> View source
      </a>
    )
  }

  const Icon = project.visibility === 'confidential' ? HiShieldCheck : HiLockClosed
  return (
    <div className="rounded-xl border border-dashed border-gray-300 p-4 dark:border-gray-700">
      <p className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
        <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400" aria-hidden="true" />
        {visibilityMeta[project.visibility].label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {visibilityMeta[project.visibility].note}
      </p>
      <Link
        href={walkthroughHref(project)}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:underline dark:text-primary-400"
      >
        Request a walkthrough →
      </Link>
    </div>
  )
}
