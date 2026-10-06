import { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { AboutSummary } from '@/components/home/AboutSummary'
import { Skills } from '@/components/home/Skills'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { LatestArticles } from '@/components/home/LatestArticles'
import { siteConfig } from '@/lib/utils'

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
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
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
}

const founderJsonLd = {
  '@type': 'Person',
  name: siteConfig.founder.name,
  jobTitle: siteConfig.founder.role,
  image: `${siteConfig.url}${siteConfig.founder.image}`,
  url: `${siteConfig.url}/about#founder`,
  sameAs: [siteConfig.github, siteConfig.linkedin],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.company.name,
  alternateName: 'AkorLabs',
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/akorlabs-mark.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  founder: founderJsonLd,
  areaServed: 'Africa',
  location: { '@type': 'Place', name: 'Nigeria' },
  knowsAbout: [
    'Software development',
    'Offline-first applications',
    'Point of sale systems',
    'Logistics software',
    'Payments integration',
    'Mobile apps',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.company.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { '@type': 'Organization', name: siteConfig.company.name },
  inLanguage: 'en-US',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <AboutSummary />
      <LatestArticles />
    </>
  )
}
