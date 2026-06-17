import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { HiClock, HiCalendar } from 'react-icons/hi2'
import { allPosts } from 'contentlayer/generated'
import { formatDateShort } from '@/lib/utils'
import { compareDesc } from 'date-fns'

export function LatestArticles() {
  const posts = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="section-padding" aria-labelledby="articles-heading">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
              Writing
            </p>
            <h2 id="articles-heading" className="heading-lg text-gray-900 dark:text-white">
              Latest Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all"
            aria-label="View all blog articles"
          >
            All Articles <FaArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>

        <div className="space-y-6">
          {posts.map((post, idx) => (
            <article key={post.slug}>
              <Link
                href={post.url}
                className="group block card p-6 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="hidden sm:block text-4xl font-bold text-gray-100 dark:text-gray-800 leading-none mt-1 select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="badge bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <HiCalendar className="w-3.5 h-3.5" />
                        {formatDateShort(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <HiClock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link href="/blog" className="btn-primary">
            Read All Articles <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}
