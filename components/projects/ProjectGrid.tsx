'use client'

import { useMemo, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ProjectGridProps {
  /** Rendered cards, keyed by project slug (cards stay server components) */
  cards: { slug: string; category: string; node: ReactNode }[]
  categories: string[]
}

export function ProjectGrid({ cards, categories }: ProjectGridProps) {
  const [active, setActive] = useState('All')
  const visible = useMemo(
    () => (active === 'All' ? cards : cards.filter((c) => c.category === active)),
    [active, cards]
  )

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {['All', ...categories].map((category) => {
          const count = category === 'All' ? cards.length : cards.filter((c) => c.category === category).length
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                active === category
                  ? 'border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900'
                  : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-white'
              )}
            >
              {category}
              <span className="ml-1.5 font-mono text-xs opacity-60">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((c) => (
          <div key={c.slug} className="flex">
            {c.node}
          </div>
        ))}
      </div>
    </div>
  )
}
