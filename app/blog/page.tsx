import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { BlogSearch } from '@/components/blog/BlogSearch'

export const metadata: Metadata = createMetadata({
  title: 'Blog',
  description:
    'Articles by Solomon Akor on technology, software development, business, entrepreneurship, and the industrial weighing industry.',
  url: '/blog',
})

export default function BlogPage() {
  const posts = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Writing
          </p>
          <h1 className="heading-xl text-gray-900 dark:text-white mb-5">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Thoughts on technology, software development, business, and the weighing industry.
            Written for developers, entrepreneurs, and industry professionals.
          </p>
        </div>

        <BlogSearch posts={posts} />
      </div>
    </div>
  )
}
