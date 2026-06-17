import { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { createMetadata } from '@/lib/metadata'
import { capitalize } from '@/lib/utils'
import { BlogSearch } from '@/components/blog/BlogSearch'

interface Props {
  params: { tag: string }
}

export async function generateStaticParams() {
  const tags = new Set<string>()
  allPosts.forEach((post) => {
    ;(post.tags ?? []).forEach((tag) =>
      tags.add(tag.toLowerCase().replace(/\s+/g, '-'))
    )
  })
  return Array.from(tags).map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const label = params.tag.replace(/-/g, ' ')
  return createMetadata({
    title: `Articles tagged: ${label}`,
    description: `Blog articles tagged with "${label}" by Solomon Akor.`,
    url: `/blog/tag/${params.tag}`,
  })
}

export default function TagPage({ params }: Props) {
  const label = params.tag.replace(/-/g, ' ')

  const posts = allPosts
    .filter(
      (p) =>
        !p.draft &&
        (p.tags ?? []).some(
          (t) => t.toLowerCase().replace(/\s+/g, '-') === params.tag
        )
    )
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Tag
          </p>
          <h1 className="heading-xl text-gray-900 dark:text-white mb-4">
            #{label}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {posts.length} article{posts.length !== 1 ? 's' : ''} with this tag
          </p>
        </div>

        <BlogSearch posts={posts} initialTag={params.tag} />
      </div>
    </div>
  )
}
