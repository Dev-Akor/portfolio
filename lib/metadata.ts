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
  // The root layout's title template appends the company name; social cards need it spelled out
  const socialTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const absoluteUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`
  const absoluteImage = image?.startsWith('http') ? image : `${siteConfig.url}${image}`

  return {
    title: title ?? { absolute: siteConfig.title },
    description,
    keywords: keywords ?? [
      'AkorLabs Technologies',
      'AkorLabs',
      'Solomon Akor',
      'Software Company Nigeria',
      'Software Development Company Lagos',
      'Full-Stack Software Engineer Nigeria',
      'Software Developer Nigeria',
      'Flutter Developer Nigeria',
      'Kira Scales Limited',
      'Next.js Developer',
      'React',
      'TypeScript',
      'Nigeria Tech',
      'Industrial Weighing Nigeria',
    ],
    authors: authors ? authors.map((a) => ({ name: a })) : [{ name: siteConfig.founder.name }],
    creator: siteConfig.name,
    alternates: { canonical: absoluteUrl },
    openGraph: {
      title: socialTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: socialTitle }],
      locale: 'en_US',
      type,
      ...(type === 'article' && publishedAt ? { publishedTime: publishedAt } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [absoluteImage],
    },
  }
}
