import { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { AboutSummary } from '@/components/home/AboutSummary'
import { Skills } from '@/components/home/Skills'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { LatestArticles } from '@/components/home/LatestArticles'
import { siteConfig } from '@/lib/utils'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Solomon Akor — Software Developer & Head of Operations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@solomonakor',
    images: [siteConfig.ogImage],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Solomon Akor',
  url: siteConfig.url,
  image: `${siteConfig.url}/images/solomon-akor.jpg`,
  jobTitle: 'Software Developer',
  description:
    'Software Developer, Head of Operations, and Co-Founder of Kira Scales Limited. Building modern web applications and leading industrial weighing solutions across Nigeria.',
  email: siteConfig.email,
  nationality: 'Nigerian',
  knowsLanguage: ['English', 'Yoruba', 'Igbo', 'Arabic'],
  alumniOf: { '@type': 'Organization', name: 'Computer Science' },
  knowsAbout: [
    'Software Development',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Industrial Weighing',
    'Business Operations',
    'Entrepreneurship',
  ],
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.twitter],
  worksFor: {
    '@type': 'Organization',
    name: 'Kira Scales Limited',
    url: siteConfig.kiraScales,
    description: 'Industrial weighing solutions provider in Nigeria',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Solomon Akor',
  url: siteConfig.url,
  description: siteConfig.description,
  author: { '@type': 'Person', name: 'Solomon Akor', url: siteConfig.url },
  inLanguage: 'en-US',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <AboutSummary />
      <Skills />
      <FeaturedProjects />
      <LatestArticles />
    </>
  )
}
