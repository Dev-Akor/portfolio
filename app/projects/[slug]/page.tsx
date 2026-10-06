import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { HiArrowLeft, HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'
import { siteConfig } from '@/lib/utils'
import { createMetadata } from '@/lib/metadata'
import { getProjects } from '@/lib/projects'
import { mdxComponents } from '@/components/mdx'
import { ProjectCover } from '@/components/projects/ProjectCover'
import { CodeAccess, StatusBadge, TechChip, VisibilityBadge } from '@/components/projects/ProjectMeta'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjects().find((p) => p.slug === params.slug)
  if (!project) return {}

  return createMetadata({
    title: `${project.title} Case Study`,
    description: project.description,
    url: project.url,
    image: project.cover,
    keywords: [project.title, project.category, ...project.technologies, 'Solomon Akor', 'AkorLabs Technologies'],
  })
}

export default function ProjectPage({ params }: Props) {
  const projects = getProjects()
  const index = projects.findIndex((p) => p.slug === params.slug)
  if (index === -1) notFound()

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const MDXContent = useMDXComponent(project.body.code)

  const facts = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    { label: 'Client', value: project.client },
    { label: 'Company', value: project.company },
    { label: 'Built by', value: project.builtBy },
    { label: 'Platforms', value: project.platforms?.join(' · ') },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: project.category,
    operatingSystem: project.platforms?.join(', '),
    author: { '@type': 'Person', name: 'Solomon Akor', url: siteConfig.url },
    ...(project.company ? { publisher: { '@type': 'Organization', name: project.company } } : {}),
    ...(project.builtBy ? { creator: { '@type': 'Organization', name: project.builtBy } } : {}),
    url: project.liveUrl ?? `${siteConfig.url}${project.url}`,
    dateCreated: project.date,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="band-navy">
        <div className="container-custom pb-12 pt-10 md:pb-16 md:pt-14">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-brand-gold"
          >
            <HiArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> All projects
          </Link>

          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
              <VisibilityBadge visibility={project.visibility} />
              <span className="rounded-full bg-brand-gold px-2.5 py-1 text-xs font-semibold text-gray-950">{project.category}</span>
            </div>
            <h1 className="heading-xl mb-6 text-white">{project.title}</h1>
            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">{project.description}</p>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <dl className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse justify-end rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
                  <dt className="mt-1 text-sm text-gray-300">{m.label}</dt>
                  <dd className="font-display text-3xl font-bold tracking-tight text-brand-gold">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </header>

      {(project.cover || project.icon) && (
        <div className="container-custom -mb-4 mt-10">
          <ProjectCover
            project={project}
            priority
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="aspect-[16/9] w-full rounded-2xl border border-gray-200 shadow-lg dark:border-gray-800 md:aspect-[21/9]"
          />
        </div>
      )}

      {/* Body */}
      <div className="section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <article className="prose prose-gray min-w-0 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-h2:mt-14 prose-h2:text-3xl prose-a:text-primary-600 dark:prose-a:text-primary-400">
            {project.highlights && project.highlights.length > 0 && (
              <div className="band-blue not-prose mb-12 rounded-2xl p-6 md:p-8">
                <p className="mb-4 w-fit rounded-full bg-brand-gold px-2.5 py-0.5 text-xs font-semibold text-gray-950">Highlights</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-white">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <MDXContent components={mdxComponents} />

            {project.gallery && project.gallery.length > 0 && (
              <section className="not-prose mt-16">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((img) => (
                    <figure key={img.src} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                      <div className="relative aspect-[4/3]">
                        <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 380px, 100vw" className="object-cover object-top" />
                      </div>
                      {img.caption && (
                        <figcaption className="border-t border-gray-200 px-4 py-3 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6 panel p-6">
              {facts.length > 0 && (
                <dl className="space-y-4">
                  {facts.map((f) => (
                    <div key={f.label}>
                      <dt className="text-xs font-semibold text-gray-500 dark:text-gray-400">{f.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div>
                <p className="mb-3 text-xs font-semibold text-gray-500 dark:text-gray-400">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <TechChip key={tech} name={tech} />
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-6 dark:border-gray-800">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm">
                    Visit live site <HiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                <CodeAccess project={project} />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Next project */}
      {next && next.slug !== project.slug && (
        <Link
          href={next.url}
          className="group block border-t border-gray-200 bg-gray-50 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:bg-gray-900"
        >
          <div className="container-custom flex items-center justify-between gap-6 py-12 md:py-16">
            <div>
              <p className="eyebrow mb-2">Next project</p>
              <p className="font-display text-2xl font-bold text-gray-900 dark:text-white md:text-4xl">{next.title}</p>
            </div>
            <HiArrowRight className="h-8 w-8 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-600" aria-hidden="true" />
          </div>
        </Link>
      )}
    </>
  )
}
