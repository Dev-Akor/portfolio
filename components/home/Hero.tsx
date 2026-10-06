import Link from 'next/link'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi2'
import { siteConfig } from '@/lib/utils'
import { LogoMark } from '@/components/brand/Logo'

const stats = [
  { value: '5', label: 'Systems live in production' },
  { value: '3', label: 'Platforms: web, Android, iOS' },
  { value: '100%', label: 'Built in-house, database to app store' },
]

export function Hero() {
  return (
    <section className="band-blue relative overflow-hidden">
      <div className="container-custom relative pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-8 inline-flex animate-fade-in items-center gap-2.5 rounded-full bg-white py-1.5 pl-2 pr-4 text-sm font-medium text-gray-900 shadow-sm">
              <LogoMark className="h-4 w-4" />
              Software company in Nigeria
            </p>

            <h1 className="heading-xl mb-6 animate-slide-up text-white">
              We build software that keeps African businesses{' '}
              <span className="relative whitespace-nowrap text-brand-gold">
                running.
                <span className="absolute -bottom-1 left-0 h-1.5 w-[calc(100%-0.3em)] rounded-sm bg-brand-red" aria-hidden="true" />
              </span>
            </h1>

            <p className="mb-10 max-w-xl animate-slide-up text-lg leading-relaxed text-primary-100">
              AkorLabs Technologies designs and ships point of sale, logistics, e-commerce and payment platforms that
              keep working when the network doesn&apos;t. We build our own products and deliver platforms for clients.
            </p>

            <div className="flex animate-slide-up flex-wrap gap-3">
              <Link href="/projects" className="btn-gold">
                See our work <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn-outline-light">
                Start a project
              </Link>
            </div>
          </div>

          {/* Product shot with founder card */}
          <div className="relative mx-auto w-full max-w-lg animate-fade-in lg:max-w-none">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border-4 border-white/15 shadow-2xl shadow-black/30">
              <Image
                src="/images/projects/maldra/counter-desktop.webp"
                alt="Maldra, a business platform built by AkorLabs, running the checkout on a shop counter"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
            <Link
              href="/about#founder"
              className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl bg-white py-2.5 pl-2.5 pr-4 shadow-xl transition-transform hover:-translate-y-0.5 sm:-left-6"
            >
              <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand-gold">
                <Image src={siteConfig.founder.image} alt="" fill sizes="40px" className="object-cover object-top" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-gray-900">{siteConfig.founder.name}</span>
                <span className="block text-xs text-gray-500">{siteConfig.founder.role}</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-white/15 bg-black/10">
        <dl className="container-custom grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-row-reverse items-baseline justify-end gap-3">
              <dt className="text-sm leading-snug text-primary-100">{label}</dt>
              <dd className="font-display text-4xl font-bold tracking-tight text-brand-gold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
