import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Image from 'next/image'
import {
  HiAcademicCap, HiBuildingOffice, HiGlobeAlt, HiCodeBracket,
  HiEnvelope, HiBriefcase,
} from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import { siteConfig } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'About Solomon Akor',
  description:
    'Solomon Akor is a Computer Science graduate, Software Developer, and Co-Founder of Kira Scales Limited. Learn about his journey from warehouse operations to industrial entrepreneurship and full-stack development.',
  url: '/about',
  keywords: [
    'Solomon Akor', 'Software Developer Nigeria', 'Kira Scales Limited',
    'Head of Operations', 'Computer Science', 'Next.js Developer Nigeria',
    'Industrial weighing Nigeria', 'entrepreneur Nigeria',
  ],
})

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kira Scales Limited',
  url: siteConfig.kiraScales,
  description: 'Industrial weighing solutions provider in Nigeria — weighbridges, truck scales, calibration, and installation services.',
  founder: {
    '@type': 'Person',
    name: 'Solomon Akor',
    url: siteConfig.url,
  },
  location: {
    '@type': 'Place',
    name: 'Nigeria',
  },
  knowsAbout: ['Weighbridges', 'Industrial Scales', 'Calibration', 'Truck Scales', 'Load Cells'],
}

const skills = {
  Frontend: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  Backend: ['Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Express.js'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Figma'],
  Learning: ['Python', 'Docker', 'AWS', 'GraphQL'],
}

const journey = [
  {
    icon: HiAcademicCap,
    period: '2016–2020',
    title: 'Computer Science Degree',
    description:
      'Built a strong foundation in algorithms, data structures, software engineering, and system design. This rigorous academic background shapes how I approach every problem — structured, systematic, and first-principles.',
  },
  {
    icon: HiBriefcase,
    period: '2020–2021',
    title: 'Warehouse & Commodity Operations',
    description:
      'Entered the commodities sector managing cocoa warehouse operations in West Africa. Gained ground-level exposure to industrial logistics, measurement, and supply chain management — and the inefficiencies that plagued them.',
  },
  {
    icon: HiGlobeAlt,
    period: '2021–2022',
    title: 'International Exposure — Weighbridge Technology',
    description:
      'Traveled abroad and encountered advanced European weighbridge and industrial weighing infrastructure. The contrast with Nigeria was striking. I identified a clear, underserved market and returned with a plan.',
  },
  {
    icon: HiBuildingOffice,
    period: '2022–Present',
    title: 'Co-Founder & Head of Operations — Kira Scales Limited',
    description:
      'Co-founded Kira Scales Limited, Nigeria\'s dedicated industrial weighing solutions company. As Head of Operations, I lead client delivery, field engineering, calibration projects, and business development across multiple industries.',
  },
  {
    icon: HiCodeBracket,
    period: '2023–Present',
    title: 'Software Developer',
    description:
      'Channeled the business and engineering insights from Kira Scales into software. Now building modern web applications with Next.js, TypeScript, and Node.js — creating digital tools that solve real operational challenges.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            About Me
          </p>
          <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
            Developer, Operator, Entrepreneur
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I&apos;m Solomon Akor — Software Developer, Head of Operations, and Co-Founder of{' '}
            <Link href="/kira" className="text-primary-600 dark:text-primary-400 hover:underline">
              Kira Scales Limited
            </Link>
            . I build software and lead industrial operations in Nigeria.
          </p>
        </div>

        {/* Profile + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            {/* Portrait on mobile */}
            <div className="flex justify-center lg:hidden mb-8">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                <Image
                  src="/images/solomon-akor.jpg"
                  alt="Solomon Akor — Software Developer and Head of Operations"
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                />
              </div>
            </div>
            <p>
              I&apos;m Solomon Akor — a Computer Science graduate, Software Developer, and
              Co-Founder of{' '}
              <Link href="/kira" className="text-primary-600 dark:text-primary-400 hover:underline">
                Kira Scales Limited
              </Link>
              . I lead operations and business development for Nigeria&apos;s dedicated industrial
              weighing company while building the software products that sit on top of it.
            </p>
            <p>
              My journey started with a Computer Science degree, then took a pivot into the physical
              world. Managing cocoa warehouses taught me that measurement, accountability, and
              logistics are the invisible backbone of Nigerian trade — and that they were
              systematically broken.
            </p>
            <p>
              Traveling abroad crystallized it: I saw weighbridge infrastructure that simply
              didn&apos;t exist at home. I came back with a mission. We co-founded Kira Scales
              Limited to supply, install, and calibrate industrial weighing equipment across
              Nigeria — and built a team that delivers on that promise.
            </p>
            <p>
              Running field operations gave me a new perspective on software. The best tools aren&apos;t
              built in isolation — they&apos;re built by people who understand the operational reality
              they&apos;re solving. That&apos;s why I&apos;m a developer: to close the gap between
              industry and technology in Africa.
            </p>
          </div>

          {/* Sidebar: portrait + quick facts + connect */}
          <div className="space-y-4">
            {/* Portrait — desktop only */}
            <div className="hidden lg:block relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4]">
              <Image
                src="/images/solomon-akor.jpg"
                alt="Solomon Akor — Software Developer, Head of Operations, Co-Founder of Kira Scales Limited"
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>

            {/* Quick facts */}
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { dt: 'Location', dd: 'Nigeria' },
                  { dt: 'Role', dd: 'Software Developer' },
                  { dt: 'Also', dd: 'Head of Operations' },
                  { dt: 'Company', dd: 'Kira Scales Limited' },
                  { dt: 'Education', dd: 'Computer Science' },
                  { dt: 'Languages', dd: 'English, Yoruba, Igbo, Arabic' },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex gap-2">
                    <dt className="text-gray-500 dark:text-gray-500 min-w-[90px] shrink-0">{dt}:</dt>
                    <dd className="text-gray-700 dark:text-gray-300 font-medium">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Connect */}
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <HiEnvelope className="w-4 h-4" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  github.com/dev-akor
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Journey timeline */}
        <div className="mb-20">
          <h2 className="heading-md text-gray-900 dark:text-white mb-10">My Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />
            <div className="space-y-8">
              {journey.map(({ icon: Icon, period, title, description }, idx) => (
                <div key={title} className="relative sm:pl-16">
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 items-center justify-center border-4 border-white dark:border-gray-950">
                    <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="card p-6">
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {period}
                      </span>
                      <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {description}
                    </p>
                    {/* Site photo on the operations card */}
                    {idx === 3 && (
                      <div className="mt-4 relative w-full h-48 rounded-xl overflow-hidden">
                        <Image
                          src="/images/solomon-akor-site.jpg"
                          alt="Solomon Akor on-site in engineering/safety gear at a weighbridge installation"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="heading-md text-gray-900 dark:text-white mb-10">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card p-6">
                <h3 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {[
            { value: '3+', label: 'Years in Industrial Operations' },
            { value: '5+', label: 'Weighbridge Projects Delivered' },
            { value: '4', label: 'Languages Spoken' },
            { value: '2', label: 'Tech Products Launched' },
          ].map(({ value, label }) => (
            <div key={label} className="card p-5 text-center">
              <div className="text-3xl font-black text-primary-600 dark:text-primary-400 mb-1">{value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{label}</div>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 rounded-2xl p-8 md:p-12">
          <h2 className="heading-md text-gray-900 dark:text-white mb-4">Vision & Goals</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            <p>
              My goal is to sit at the intersection of technology and industry in Africa —
              building software that transforms how businesses operate in logistics, measurement, and trade.
            </p>
            <p>
              Short-term: ship production-quality software products and scale Kira Scales
              Limited&apos;s operations beyond Lagos into new Nigerian markets.
            </p>
            <p>
              Long-term: grow Kira Scales into a technology-enabled industrial services platform,
              and build SaaS products that solve uniquely African infrastructure and business problems at scale.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Let&apos;s Work Together
            </Link>
            <Link href="/kira" className="btn-secondary">
              Explore Kira Scales
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
