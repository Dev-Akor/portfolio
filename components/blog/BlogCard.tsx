'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HiClock, HiCalendar, HiTag } from 'react-icons/hi2'
import { formatDateShort } from '@/lib/utils'
import type { Post } from 'contentlayer/generated'

interface BlogCardProps {
  post: Post
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`card group overflow-hidden flex flex-col ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      {/* Featured Image */}
      {post.featuredImage && (
        <div
          className={`relative bg-gray-100 dark:bg-gray-800 overflow-hidden flex-shrink-0 ${
            featured ? 'md:w-72 h-48 md:h-auto' : 'h-48'
          }`}
        >
          <Image
            src={post.featuredImage}
            alt={`Featured image for: ${post.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={featured ? '(max-width: 768px) 100vw, 288px' : '(max-width: 768px) 100vw, 50vw'}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category & Featured badge */}
        <div className="flex items-center gap-2 mb-3">
          <Link
            href={`/blog/category/${post.category.toLowerCase()}`}
            className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {post.category}
          </Link>
          {post.featured && (
            <span className="badge bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <Link href={post.url}>
          <h2
            className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug ${
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            }`}
          >
            {post.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 text-xs text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <HiTag className="w-3 h-3" />
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-4 mt-auto">
          <span className="flex items-center gap-1.5">
            <HiCalendar className="w-3.5 h-3.5" />
            {formatDateShort(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <HiClock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
          {post.author && (
            <span className="ml-auto font-medium text-gray-600 dark:text-gray-400 truncate">
              {post.author}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
