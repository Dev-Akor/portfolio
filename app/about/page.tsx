import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  HiAcademicCap, HiBuildingOffice, HiGlobeAlt, HiCodeBracket, HiBriefcase, HiRocketLaunch,
  HiEnvelope, HiSignalSlash, HiShieldCheck, HiWrenchScrewdriver, HiUserPlus,
} from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { createMetadata } from '@/lib/metadata'
import { brandTiles, cn, siteConfig } from '@/lib/utils'
import { Logo } from '@/components/brand/Logo'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'AkorLabs Technologies is a Nigerian software company building offline-first, payment-ready platforms for African businesses. Founded by Solomon Akor, alongside Maldra Limited and Kira Scales Limited.',
  url: '/about',
  keywords: [
    'AkorLabs Technologies', 'AkorLabs', 'Solomon Akor', 'software company Nigeria',
    'Maldra Limited', 'Kira Scales Limited', 'software development Lagos',
  ],
})

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.company.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/akorlabs-mark.png`,
    description: siteConfig.company.description,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      url: `${siteConfig.url}/about#founder`,
      sameAs: [siteConfig.github, siteConfig.linkedin],
    },
    location: { '@type': 'Place', name: 'Nigeria' },
  },
}

const principles = [
  {
    icon: HiSignalSlash,
    title: 'Built for real conditions',
    description:
      'Networks drop and devices are cheap. Our software keeps working offline and reconciles correctly when the connection returns.',
  },
  {
    icon: HiShieldCheck,
    title: 'Correct before clever',
    description:
      'Money, stock and shipments are recorded in audited ledgers and state machines, enforced by the database rather than trusted to the app.',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Operators, not just engineers',
    description:
      'We run businesses ourselves, so we design around the counter, the warehouse and the weighbridge, not around a demo.',
  },
]

const companies = [
  {
    name: siteConfig.company.name,
    kind: 'Software',
    registration: siteConfig.company.registration,
    description:
      'Designs, builds and supports software products and client platforms. Engineered Maldra and ApplyAI, and delivered a logistics and dispatch platform for a Nigerian courier company.',
    href: '/projects',
    cta: 'See our work',
  },
  {
    name: 'Maldra Limited',
    kind: 'SaaS',
    registration: null,
    description:
      'Operates Maldra, the offline-first business-management platform for African SMEs, and the Maldra Invoice & Quote Maker. Built by AkorLabs Technologies.',
    href: '/projects/maldra-business-app',
    cta: 'About Maldra',
  },
  {
    name: siteConfig.kira.name,
    kind: 'Industrial weighing',
    registration: siteConfig.kira.rc,
    description: `Supplies, installs, calibrates and maintains weighbridges and industrial scales across Nigeria. Head office at ${siteConfig.kira.address}, with a branch in Idumota.`,
    href: '/kira',
    cta: 'About Kira Scales',
  },
]

const journey = [
  {
    icon: HiAcademicCap,
    period: '2016–2020',
    title: 'Computer Science degree',
    description:
      'A foundation in algorithms, data structures, software engineering and system design.',
  },
  {
    icon: HiBriefcase,
    period: '2020–2021',
    title: 'Warehouse & commodity operations',
    description:
      'Managed cocoa warehouse operations in West Africa, with first-hand exposure to logistics, measurement and supply chains — and their inefficiencies.',
  },
  {
    icon: HiGlobeAlt,
    period: '2021–2022',
    title: 'Weighbridge technology abroad',
    description:
      'Saw European weighbridge and industrial weighing infrastructure up close, identified an underserved market at home, and came back with a plan.',
  },
  {
    icon: HiBuildingOffice,
    period: '2022–present',
    title: 'Co-Founder & Managing Director — Kira Scales Limited',
    description:
      'Co-founded Kira Scales Limited and leads it as Managing Director: client delivery, field engineering, calibration projects and business development.',
  },
  {
    icon: HiCodeBracket,
    period: '2023–present',
    title: 'Software engineering',
    description:
      'Turned operational experience into software: first Kira Scales’ own e-commerce platform, then production systems for retail, logistics and invoicing on web and mobile.',
  },
  {
    icon: HiRocketLaunch,
    period: '2026–present',
    title: 'Founder & Lead Engineer — AkorLabs Technologies',
    description:
      'Registered AkorLabs Technologies as the software company behind Maldra, ApplyAI and client platforms.',
  },
]

const stack = {
  Web: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Payload CMS'],
  Mobile: ['Flutter & Dart', 'React Native & Expo', 'SQLite / offline storage', 'Bluetooth printing'],
  Backend: ['NestJS & Node.js', 'PostgreSQL & row-level security', 'Supabase', 'MongoDB', 'PHP & MySQL'],
  Delivery: ['Docker', 'Vercel & Render', 'GitHub Actions CI', 'Paystack', 'Sentry'],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      {/* Header */}
      <section className="band-blue">
        <div className="container-custom section-padding">
          <p className="eyebrow-on-dark mb-5">About AkorLabs</p>
          <h1 className="heading-xl mb-6 max-w-4xl text-white">
            A software company built inside real businesses.
          </h1>
          <div className="grid max-w-5xl gap-6 text-lg leading-relaxed text-primary-100 md:grid-cols-2">
            <p>
              AkorLabs Technologies builds production software for African businesses: point of sale and inventory,
              logistics and dispatch, e-commerce and payments, on the web and on the phones people actually use.
            </p>
            <p>
              We started inside an operating company. The systems we build first had to work for our own counters,
              warehouses and weighbridges, and that&apos;s still the standard we hold every product and client platform to.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding space-y-24">
        {/* Principles */}
        <section aria-labelledby="principles-heading">
          <p className="eyebrow mb-3">How we work</p>
          <h2 id="principles-heading" className="heading-lg mb-10 text-gray-900 dark:text-white">What we believe</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 80} className="panel p-6">
                <span className={cn('mb-5 flex h-10 w-10 items-center justify-center rounded-xl', brandTiles[i % brandTiles.length])}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Companies */}
        <section id="companies" className="scroll-mt-24" aria-labelledby="companies-heading">
          <p className="eyebrow mb-3">Our companies</p>
          <h2 id="companies-heading" className="heading-lg mb-10 text-gray-900 dark:text-white">Three companies, one standard</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {companies.map((c) => (
              <article key={c.name} className="flex flex-col panel p-6">
                <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">{c.kind}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-gray-900 dark:text-white">{c.name}</h3>
                {c.registration && <p className="mt-1 font-mono text-xs text-gray-500 dark:text-gray-400">{c.registration}</p>}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{c.description}</p>
                <Link href={c.href} className="mt-5 text-sm font-semibold text-primary-600 hover:underline dark:text-primary-400">
                  {c.cta} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="scroll-mt-24" aria-labelledby="founder-heading">
          <p className="eyebrow mb-3">Founder</p>
          <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
                <Image
                  src={siteConfig.founder.image}
                  alt={`Portrait of ${siteConfig.founder.name}`}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <dl className="space-y-3 panel p-5 text-sm dark:border-gray-800">
                {[
                  { dt: 'AkorLabs', dd: 'Founder & Lead Engineer' },
                  { dt: 'Kira Scales', dd: 'Co-Founder & Managing Director' },
                  { dt: 'Education', dd: 'Computer Science' },
                  { dt: 'Languages', dd: 'English, Yoruba, Igbo, Arabic' },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="grid grid-cols-[96px_1fr] gap-2">
                    <dt className="text-gray-500 dark:text-gray-400">{dt}</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{dd}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-2">
                <a href={`mailto:${siteConfig.email}`} className="chip py-1.5 hover:border-primary-300">
                  <HiEnvelope className="h-3.5 w-3.5" aria-hidden="true" /> Email
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="chip py-1.5 hover:border-primary-300">
                  <FaLinkedin className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
                </a>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="chip py-1.5 hover:border-primary-300">
                  <FaGithub className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>

            <div className="min-w-0">
              <h2 id="founder-heading" className="heading-lg mb-2 text-gray-900 dark:text-white">{siteConfig.founder.name}</h2>
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {siteConfig.founder.role}, AkorLabs Technologies · Co-Founder &amp; Managing Director, Kira Scales Limited
              </p>
              <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-400">
                <p>
                  Solomon studied Computer Science, then spent years in the physical economy: managing cocoa warehouses,
                  commodity operations and, after seeing modern weighbridge infrastructure abroad, co-founding Kira Scales
                  Limited to supply, install and calibrate industrial weighing equipment across Nigeria.
                </p>
                <p>
                  Running field operations showed him what business software usually gets wrong. He began building it
                  himself: Kira Scales&apos; e-commerce platform, a logistics and dispatch system, and Maldra, an offline-first
                  business platform for African SMEs. AkorLabs Technologies is the company those systems now come from.
                </p>
              </div>

              <ol className="relative mt-10 space-y-6 border-l border-gray-200 pl-8 dark:border-gray-800">
                {journey.map(({ icon: Icon, period, title, description }) => (
                  <li key={title} className="relative">
                    <span className="absolute -left-[49px] top-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-primary-50 dark:border-gray-950 dark:bg-primary-950">
                      <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    </span>
                    <p className="font-mono text-xs text-gray-500 dark:text-gray-400">{period}</p>
                    <h3 className="mt-1 font-bold text-gray-900 dark:text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="scroll-mt-24" aria-labelledby="team-heading">
          <p className="eyebrow mb-3">Team</p>
          <h2 id="team-heading" className="heading-lg mb-4 text-gray-900 dark:text-white">A founder-led team</h2>
          <p className="mb-8 max-w-2xl text-gray-600 dark:text-gray-400">
            AkorLabs is founder-led today, with the founder personally accountable for every system we ship. As we grow,
            the people behind our work will be introduced here.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4 panel p-4">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                <Image src={siteConfig.founder.image} alt="" fill sizes="56px" className="object-cover object-top" />
              </span>
              <span>
                <span className="block font-semibold text-gray-900 dark:text-white">{siteConfig.founder.name}</span>
                <span className="block text-sm text-gray-500 dark:text-gray-400">{siteConfig.founder.role}</span>
              </span>
            </div>
            <Link
              href="/contact?subject=Working%20with%20AkorLabs"
              className="flex items-center gap-4 rounded-2xl border border-dashed border-gray-300 p-4 transition-colors hover:border-primary-400 dark:border-gray-700"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900">
                <HiUserPlus className="h-6 w-6 text-gray-500" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-gray-900 dark:text-white">Work with us</span>
                <span className="block text-sm text-gray-500 dark:text-gray-400">Engineers &amp; designers</span>
              </span>
            </Link>
          </div>
        </section>

        {/* Stack */}
        <section aria-labelledby="stack-heading">
          <p className="eyebrow mb-3">Technology</p>
          <h2 id="stack-heading" className="heading-lg mb-10 text-gray-900 dark:text-white">Our stack</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-4 text-xs font-semibold text-gray-500 dark:text-gray-400">{group}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Vision + CTA */}
        <section className="overflow-hidden rounded-3xl bg-gray-900 text-white">
          <div className="grid gap-10 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
            <div className="max-w-2xl">
              <Logo onDark className="mb-6" markClassName="h-10 w-10" />
              <h2 className="mb-4 font-display text-3xl font-bold">Where we&apos;re going</h2>
              <p className="leading-relaxed text-gray-300">
                Our goal is to be the technology partner African businesses trust with their operations: growing our own
                products like Maldra and ApplyAI, building platforms for companies that need them done properly, and
                growing a team that holds the same standard.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact?subject=Project%20enquiry" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-primary-50">
                Start a project
              </Link>
              <Link href="/projects" className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
                See our work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
