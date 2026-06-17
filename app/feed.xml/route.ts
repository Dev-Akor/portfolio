import { Feed } from 'feed'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { siteConfig } from '@/lib/utils'

export async function GET() {
  const posts = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  const feed = new Feed({
    title: `${siteConfig.name} — Blog`,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: 'en',
    image: siteConfig.ogImage,
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Solomon Akor`,
    author: {
      name: 'Solomon Akor',
      email: siteConfig.email,
      link: siteConfig.url,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteConfig.url}${post.url}`,
      link: `${siteConfig.url}${post.url}`,
      description: post.description,
      author: [{ name: post.author ?? 'Solomon Akor', email: siteConfig.email }],
      date: new Date(post.date),
      category: [{ name: post.category }],
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
