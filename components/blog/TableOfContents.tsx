'use client'

import { useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('article h2, article h3, article h4')
    )
    setHeadings(
      elements.map((el) => ({
        id: el.id,
        text: el.textContent?.replace(/#$/, '').trim() ?? '',
        level: Number(el.tagName.charAt(1)),
      }))
    )
  }, [])

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveId(entry.target.id)
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-80px 0px -60% 0px',
    })
    document.querySelectorAll('article h2, article h3, article h4').forEach((el) => {
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [handleObserver])

  if (headings.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
        On this page
      </p>
      <ul className="space-y-1">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                'block text-sm py-1 border-l-2 transition-all duration-150',
                level === 2 ? 'pl-3' : level === 3 ? 'pl-6' : 'pl-9',
                activeId === id
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400 font-medium'
                  : 'border-transparent text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
