import Link from 'next/link'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi2'
import { siteConfig } from '@/lib/utils'
import { LogoMark } from '@/components/brand/Logo'
import { Reveal } from '@/components/ui/Reveal'

const companies = [
  {
    name: 'AkorLabs Technologies',
    kind: 'Software',
    description:
      'Our software company. We engineer products like Maldra and ApplyAI, and deliver platforms for clients, from architecture to launch and support.',
    href: '/projects',
    logo: null,
  },
  {
    name: 'Maldra Limited',
    kind: 'SaaS',
    description:
      'Runs Maldra, the offline-first business-management platform for African SMEs, and the Maldra Invoice & Quote Maker. Built by AkorLabs.',
    href: '/projects/maldra-business-app',
    logo: '/images/projects/maldra/icon.png',
  },
  {
    name: 'Kira Scales Limited',
    kind: 'Industrial weighing',
    description:
      'Supplies, installs and calibrates weighbridges and industrial scales across Nigeria, from its head office in Ikeja and a branch in Idumota, Lagos.',
    href: '/kira',
    logo: '/images/kira-logo.png',
  },
]

export function AboutSummary() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900/40" aria-labelledby="companies-heading">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Our companies</p>
          <h2 id="companies-heading" className="heading-lg mb-4 text-gray-900 dark:text-white">
            Software built by people who run real businesses
          </h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            AkorLabs sits alongside two operating companies. We build software for the same problems we deal with every day:
            stock at the counter, deliveries on the road, and payments that have to reconcile.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={i * 100} className="flex">
              <Link
                href={c.href}
                className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:-translate-y-0.5 hover:border-primary-400 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-600"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-gray-200 dark:ring-gray-700">
                  {c.logo ? (
                    <Image src={c.logo} alt="" width={32} height={32} className="h-auto w-full object-contain" />
                  ) : (
                    <LogoMark className="h-7 w-7" />
                  )}
                </span>
                <span className="w-fit rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">{c.kind}</span>
                <span className="mt-1 font-display text-lg font-bold text-gray-900 dark:text-white">{c.name}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{c.description}</span>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Learn more <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Founder */}
        <Reveal className="mt-14">
          <div className="band-blue flex flex-col gap-6 rounded-2xl p-6 text-white sm:flex-row sm:items-center md:p-8">
            <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
              <Image src={siteConfig.founder.image} alt={`Portrait of ${siteConfig.founder.name}`} fill sizes="80px" className="object-cover object-top" />
            </span>
            <div className="flex-1">
              <p className="w-fit rounded-full bg-brand-gold px-2.5 py-0.5 text-xs font-semibold text-gray-950">Founder</p>
              <p className="mt-1 font-display text-xl font-bold">{siteConfig.founder.name}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary-100">
                Founder &amp; Lead Engineer of AkorLabs, and Co-Founder &amp; Managing Director of Kira Scales Limited. Before
                writing business software, Solomon ran warehouses, commodity operations and weighbridge installations.
              </p>
            </div>
            <Link href="/about#founder" className="btn-gold shrink-0 px-5 py-2.5 text-sm">
              Meet the founder <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
