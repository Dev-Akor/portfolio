import Image from 'next/image'
import type { ReactNode } from 'react'
import { HiArrowDown, HiLightBulb, HiExclamationTriangle, HiInformationCircle } from 'react-icons/hi2'
import { cn } from '@/lib/utils'

interface ArchitectureProps {
  title?: string
  layers: { name: string; nodes: string[] }[]
  caption?: string
}

/** Layered architecture diagram: each layer talks to the one below it. */
function Architecture({ title = 'System architecture', layers, caption }: ArchitectureProps) {
  return (
    <figure className="not-prose my-10">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60 dark:border-gray-800 dark:bg-gray-900/40">
        <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-3 dark:border-gray-800">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-500" aria-hidden="true" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{title}</span>
        </div>
        <ol className="relative space-y-0 bg-white p-5 dark:bg-gray-950 sm:p-6">
          {layers.map((layer, i) => (
            <li key={layer.name}>
              <div className="grid gap-3 sm:grid-cols-[9rem_1fr] sm:items-center">
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                  {layer.name}
                </span>
                <ul className="flex flex-wrap gap-2">
                  {layer.nodes.map((node) => (
                    <li
                      key={node}
                      className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200"
                    >
                      {node}
                    </li>
                  ))}
                </ul>
              </div>
              {i < layers.length - 1 && (
                <div className="flex h-9 items-center pl-4 sm:pl-[10rem]" aria-hidden="true">
                  <HiArrowDown className="h-4 w-4 text-primary-500/70" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
      {caption && <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">{caption}</figcaption>}
    </figure>
  )
}

const calloutStyles = {
  insight: { icon: HiLightBulb, className: 'border-primary-500/40 bg-primary-50/60 dark:bg-primary-500/5', iconClass: 'text-primary-600 dark:text-primary-400' },
  note: { icon: HiInformationCircle, className: 'border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50', iconClass: 'text-gray-500' },
  warning: { icon: HiExclamationTriangle, className: 'border-amber-500/40 bg-amber-50/60 dark:bg-amber-500/5', iconClass: 'text-amber-600 dark:text-amber-400' },
}

function Callout({ type = 'insight', title, children }: { type?: keyof typeof calloutStyles; title?: string; children: ReactNode }) {
  const { icon: Icon, className, iconClass } = calloutStyles[type]
  return (
    <aside className={cn('not-prose my-8 flex gap-4 rounded-xl border-l-4 p-5', className)}>
      <Icon className={cn('mt-0.5 h-5 w-5 shrink-0', iconClass)} aria-hidden="true" />
      <div className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
        {title && <p className="mb-1 font-semibold text-gray-900 dark:text-white">{title}</p>}
        {children}
      </div>
    </aside>
  )
}

interface ChallengeProps {
  n: number
  title: string
  children: ReactNode
}

/** Numbered engineering-challenge block used in case studies. */
function Challenge({ n, title, children }: ChallengeProps) {
  return (
    <section className="panel not-prose my-6 grid grid-cols-[2.5rem_1fr] gap-4 p-5 sm:p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red font-display text-base font-bold text-white">
        {n}
      </span>
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 [&_strong]:text-gray-900 dark:[&_strong]:text-white">
          {children}
        </div>
      </div>
    </section>
  )
}

function Figure({ src, alt, caption, width = 1600, height = 1000 }: { src: string; alt: string; caption?: string; width?: number; height?: number }) {
  return (
    <figure className="not-prose my-10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 768px, 100vw"
        className="w-full rounded-2xl border border-gray-200 dark:border-gray-800"
      />
      {caption && <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">{caption}</figcaption>}
    </figure>
  )
}

export const mdxComponents = { Architecture, Callout, Challenge, Figure }
