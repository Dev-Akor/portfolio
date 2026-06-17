import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { HiClock, HiCalendar, HiUser, HiTag } from 'react-icons/hi2'
import { createMetadata } from '@/lib/metadata'
import { formatDate, siteConfig } from '@/lib/utils'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { BlogCard } from '@/components/blog/BlogCard'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return allPosts
    .filter((p) => !p.draft)
    .map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return createMetadata({
    title: post.title,
    description: post.description,
    url: post.url,
    image: post.featuredImage,
    type: 'article',
    publishedAt: post.date,
    authors: [post.author ?? 'Solomon Akor'],
    keywords: post.tags,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = allPosts.find((p) => p.slug === params.slug && !p.draft)
  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  const allSorted = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  const postIndex = allSorted.findIndex((p) => p.slug === post.slug)
  const prev = postIndex < allSorted.length - 1 ? allSorted[postIndex + 1] : null
  const next = postIndex > 0 ? allSorted[postIndex - 1] : null

  const related = allPosts
    .filter(
      (p) =>
        !p.draft &&
        p.slug !== post.slug &&
        (p.category === post.category ||
          (p.tags ?? []).some((t) => (post.tags ?? []).includes(t)))
    )
    .slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author ?? 'Solomon Akor',
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: 'Solomon Akor',
      url: siteConfig.url,
    },
    datePublished: post.date,
    url: `${siteConfig.url}${post.url}`,
    image: post.featuredImage
      ? `${siteConfig.url}${post.featuredImage}`
      : siteConfig.ogImage,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-10 text-sm"
            >
              <FaArrowLeft className="w-3 h-3" /> Back to Blog
            </Link>

            <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-16">
              {/* Main content */}
              <div className="min-w-0">
                {/* Header */}
                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <Link
                      href={`/blog/category/${post.category.toLowerCase()}`}
                      className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      {post.category}
                    </Link>
                    {post.featured && (
                      <span className="badge bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <h1 className="heading-xl text-gray-900 dark:text-white mb-5 leading-tight">
                    {post.title}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800">
                    <span className="flex items-center gap-2">
                      <HiUser className="w-4 h-4" />
                      {post.author ?? 'Solomon Akor'}
                    </span>
                    <span className="flex items-center gap-2">
                      <HiCalendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <HiClock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                  </div>
                </header>

                {/* Featured image */}
                {post.featuredImage && (
                  <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-10 bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 800px"
                    />
                  </div>
                )}

                {/* MDX Article */}
                <article className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-code:before:content-none prose-code:after:content-none">
                  <MDXContent />
                </article>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-wrap items-center gap-2">
                      <HiTag className="w-4 h-4 text-gray-400" />
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <ShareButtons title={post.title} url={post.url} />
                </div>

                {/* Author box */}
                <div className="mt-10 card p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-200 dark:border-primary-800">
                      <Image
                        src="/images/solomon-akor.jpg"
                        alt="Solomon Akor"
                        fill
                        className="object-cover object-top"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {post.author ?? 'Solomon Akor'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">
                        Software Developer · Head of Operations, Kira Scales Limited
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Computer Science graduate building modern web applications and leading industrial
                        operations across Nigeria. Writing about tech, business, and the weighing industry.
                      </p>
                      <Link
                        href="/about"
                        className="text-sm text-primary-600 dark:text-primary-400 hover:underline mt-2 inline-block"
                      >
                        About the author →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Prev/Next */}
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                  {prev && (
                    <Link href={prev.url} className="card p-4 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
                        <FaArrowLeft className="w-3 h-3" /> Previous
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 line-clamp-2 transition-colors">
                        {prev.title}
                      </p>
                    </Link>
                  )}
                  {next && (
                    <Link href={next.url} className="card p-4 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors sm:text-right">
                      <div className="flex items-center justify-end gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
                        Next <FaArrowRight className="w-3 h-3" />
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 line-clamp-2 transition-colors">
                        {next.title}
                      </p>
                    </Link>
                  )}
                </nav>

                {/* Related posts */}
                {related.length > 0 && (
                  <div className="mt-16">
                    <h2 className="heading-md text-gray-900 dark:text-white mb-6">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {related.map((p) => (
                        <BlogCard key={p.slug} post={p} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar TOC */}
              <aside className="hidden lg:block">
                <TableOfContents />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
