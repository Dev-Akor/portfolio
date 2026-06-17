'use client'

import { useState, useMemo } from 'react'
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'
import { BlogCard } from './BlogCard'
import type { Post } from 'contentlayer/generated'

interface BlogSearchProps {
  posts: Post[]
  initialCategory?: string
  initialTag?: string
}

const categories = ['All', 'Tech', 'Business', 'Scales']

export function BlogSearch({ posts, initialCategory, initialTag }: BlogSearchProps) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(
    initialCategory ? capitalizeFirst(initialCategory) : 'All'
  )

  function capitalizeFirst(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        query === '' ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase()) ||
        (post.tags ?? []).some((tag) => tag.toLowerCase().includes(query.toLowerCase()))

      const matchesCategory =
        activeCategory === 'All' ||
        post.category.toLowerCase() === activeCategory.toLowerCase()

      const matchesTag = !initialTag ||
        (post.tags ?? []).some(
          (tag) => tag.toLowerCase().replace(/\s+/g, '-') === initialTag.toLowerCase()
        )

      return matchesQuery && matchesCategory && matchesTag
    })
  }, [posts, query, activeCategory, initialTag])

  const featured = filtered.filter((p) => p.featured)
  const regular = filtered.filter((p) => !p.featured)

  return (
    <div>
      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              aria-label="Clear search"
            >
              <HiXMark className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(query || activeCategory !== 'All' || initialTag) && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
          {query && ` for "${query}"`}
          {activeCategory !== 'All' && ` in ${activeCategory}`}
          {initialTag && ` tagged with "${initialTag}"`}
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          <HiMagnifyingGlass className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="font-medium">No articles found</p>
          <p className="text-sm mt-1">Try adjusting your search or filter</p>
          <button
            onClick={() => { setQuery(''); setActiveCategory('All') }}
            className="mt-4 text-primary-600 dark:text-primary-400 text-sm hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Featured posts */}
          {featured.length > 0 && !query && activeCategory === 'All' && !initialTag && (
            <div>
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">
                Featured
              </h2>
              <div className="space-y-6">
                {featured.map((post) => (
                  <BlogCard key={post.slug} post={post} featured />
                ))}
              </div>
            </div>
          )}

          {/* Regular posts */}
          {regular.length > 0 && (
            <div>
              {featured.length > 0 && !query && activeCategory === 'All' && !initialTag && (
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">
                  All Articles
                </h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regular.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}

          {/* When searching, show all results in grid */}
          {(query || activeCategory !== 'All' || initialTag) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
