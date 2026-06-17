import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { createMetadata } from '@/lib/metadata'
import { capitalize } from '@/lib/utils'
import { BlogSearch } from '@/components/blog/BlogSearch'

interface Props {
  params: { category: string }
}

const validCategories = ['tech', 'business', 'scales']

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!validCategories.includes(params.category.toLowerCase())) return {}

  return createMetadata({
    title: `${capitalize(params.category)} Articles`,
    description: `Blog articles about ${params.category} by Solomon Akor.`,
    url: `/blog/category/${params.category}`,
  })
}

export default function CategoryPage({ params }: Props) {
  if (!validCategories.includes(params.category.toLowerCase())) notFound()

  const posts = allPosts
    .filter(
      (p) =>
        !p.draft &&
        p.category.toLowerCase() === params.category.toLowerCase()
    )
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Category
          </p>
          <h1 className="heading-xl text-gray-900 dark:text-white mb-4">
            {capitalize(params.category)}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        <BlogSearch posts={posts} initialCategory={params.category} />
      </div>
    </div>
  )
}
