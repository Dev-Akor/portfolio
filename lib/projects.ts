import { allProjects, type Project } from 'contentlayer/generated'

export type ProjectStatus = NonNullable<Project['status']>

export const statusMeta: Record<ProjectStatus, { label: string; className: string; dot: string }> = {
  live: {
    label: 'Live in production',
    className: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20',
    dot: 'bg-emerald-500',
  },
  beta: {
    label: 'Beta',
    className: 'bg-sky-50 text-sky-700 ring-sky-600/20 dark:bg-sky-500/10 dark:text-sky-400 dark:ring-sky-400/20',
    dot: 'bg-sky-500',
  },
  'in-development': {
    label: 'In development',
    className: 'bg-amber-50 text-amber-800 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20',
    dot: 'bg-amber-500',
  },
  completed: {
    label: 'Completed',
    className: 'bg-gray-100 text-gray-700 ring-gray-500/20 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-400/20',
    dot: 'bg-gray-400',
  },
  archived: {
    label: 'Archived',
    className: 'bg-gray-100 text-gray-600 ring-gray-500/20 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-400/20',
    dot: 'bg-gray-400',
  },
}

export const visibilityMeta: Record<Project['visibility'], { label: string; note: string }> = {
  public: {
    label: 'Open source',
    note: 'The source code is public.',
  },
  private: {
    label: 'Private codebase',
    note: 'The source code is private. We can walk you through the architecture and code on a call.',
  },
  confidential: {
    label: 'Client work · NDA',
    note: 'Built for a client under confidentiality terms, so the client name and code are not shown. We’re happy to discuss the engineering on a call.',
  },
}

/** Projects ordered for display: explicit `order` first, then newest. Returns a new array. */
export function getProjects(): Project[] {
  return [...allProjects].sort((a, b) => {
    const byOrder = (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
    return byOrder !== 0 ? byOrder : new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured)
}

export function getProjectCategories(projects: Project[]): string[] {
  return Array.from(new Set(projects.map((p) => p.category)))
}

export function walkthroughHref(project: Pick<Project, 'title'>): string {
  return `/contact?subject=${encodeURIComponent(`Code walkthrough: ${project.title}`)}`
}
