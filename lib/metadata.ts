import type { Metadata } from 'next'
import { siteConfig } from './utils'

interface PageMetadataProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedAt?: string
  authors?: string[]
  keywords?: string[]
}

export function createMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  publishedAt,
  authors,
  keywords,
}: PageMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | Solomon Akor` : siteConfig.title
  const absoluteUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`
  const absoluteImage = image?.startsWith('http') ? image : `${siteConfig.url}${image}`

  return {
    title: pageTitle,
    description,
    keywords: keywords ?? [
      'Solomon Akor',
      'Software Developer Nigeria',
      'Head of Operations',
      'Kira Scales Limited',
      'Next.js Developer',
      'React',
      'TypeScript',
      'Nigeria Tech',
      'Industrial Weighing Nigeria',
    ],
    authors: authors ? authors.map((a) => ({ name: a })) : [{ name: 'Solomon Akor' }],
    creator: 'Solomon Akor',
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: absoluteUrl },
    openGraph: {
      title: pageTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: pageTitle }],
      locale: 'en_US',
      type,
      ...(type === 'article' && publishedAt ? { publishedTime: publishedAt } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [absoluteImage],
      creator: '@solomonakor',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
