import { MetadataRoute } from 'next'
import { allPosts, allProjects } from 'contentlayer/generated'
import { siteConfig } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.url}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteConfig.url}/kira`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteConfig.url}/blog/category/tech`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${siteConfig.url}/blog/category/business`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${siteConfig.url}/blog/category/scales`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  ]

  const blogPages: MetadataRoute.Sitemap = allPosts
    .filter((p) => !p.draft)
    .map((post) => ({
      url: `${siteConfig.url}${post.url}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  const projectPages: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${siteConfig.url}${project.url}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const tagPages: MetadataRoute.Sitemap = Array.from(
    new Set(allPosts.flatMap((p) => p.tags ?? []))
  ).map((tag) => ({
    url: `${siteConfig.url}/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...blogPages, ...projectPages, ...tagPages]
}
