import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Image from 'next/image'
import Link from 'next/link'
import {
  HiTruck, HiWrenchScrewdriver, HiBuildingOffice2, HiShieldCheck,
  HiPhone, HiArrowTopRightOnSquare,
} from 'react-icons/hi2'

export const metadata: Metadata = createMetadata({
  title: 'Kira Scales Limited — Industrial Weighing Solutions Nigeria',
  description:
    'Kira Scales Limited supplies, installs, calibrates, and maintains weighbridges and industrial scales across Nigeria. Serving quarries, factories, farms, and logistics companies.',
  url: '/kira',
  keywords: [
    'Kira Scales Limited', 'weighbridge Nigeria', 'truck scale Nigeria',
    'industrial scales Nigeria', 'weighbridge calibration Nigeria',
    'weighbridge installation Nigeria', 'floor scales Nigeria',
    'weighbridge supplier Nigeria', 'axle load weighbridge',
  ],
})

const kiraJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kira Scales Limited',
  url: 'https://kirascales.com',
  description:
    'Nigeria\'s trusted industrial weighing solutions provider. We supply, install, calibrate, and maintain weighbridges and industrial scales for businesses across Nigeria.',
  founder: { '@type': 'Person', name: 'Solomon Akor', url: 'https://solomonakor.dev' },
  location: { '@type': 'Place', name: 'Nigeria' },
  areaServed: 'Nigeria',
  serviceType: [
    'Weighbridge Installation',
    'Weighbridge Calibration',
    'Industrial Scale Supply',
    'Maintenance & Support',
    'Technical Consulting',
  ],
}

const services = [
  {
    icon: HiTruck,
    title: 'Weighbridge Installation',
    description:
      'Complete turnkey weighbridge installation for factories, quarries, farms, and logistics companies. We handle civil works, electronics, and software integration.',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Weighbridge Calibration',
    description:
      'NAFDAC-compliant calibration services for existing weighbridges. We ensure accuracy, issue certificates, and maintain compliance with regulatory standards.',
  },
  {
    icon: HiShieldCheck,
    title: 'Maintenance & Support',
    description:
      'Preventive and corrective maintenance contracts to keep your weighing systems operating at peak performance. 24/7 emergency support available.',
  },
  {
    icon: HiBuildingOffice2,
    title: 'Industrial Scale Supply',
    description:
      'Supply of high-quality platform scales, floor scales, bench scales, and specialized industrial weighing equipment from trusted international manufacturers.',
  },
  {
    icon: HiPhone,
    title: 'Technical Consulting',
    description:
      'Expert consulting on selecting the right weighing solution for your specific application, including load capacity, connectivity, and integration requirements.',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Software Integration',
    description:
      'Integration of weighing systems with existing ERP, logistics, and inventory management software for seamless data capture and reporting.',
  },
]

const products = [
  {
    name: 'Weighbridges',
    description: 'Pit and pitless weighbridges from 20 to 150 tonnes capacity',
    specs: ['20T – 150T capacity', 'Digital load cells', 'OIML certified', 'Printer integration'],
  },
  {
    name: 'Truck Scales',
    description: 'Portable and permanent truck weighing systems',
    specs: ['Axle load measurement', 'Portable options', 'Remote monitoring', 'Data export'],
  },
  {
    name: 'Floor Scales',
    description: 'Heavy-duty floor scales for warehouse and factory use',
    specs: ['Up to 10T capacity', 'Stainless steel platforms', 'IP65 protection', 'Multiple sizes'],
  },
  {
    name: 'Platform Scales',
    description: 'Precision platform scales for mid-range weighing applications',
    specs: ['High accuracy', 'LCD display', 'RS-232 connectivity', 'Rechargeable battery'],
  },
]

const reasons = [
  { title: 'Industry Expertise', description: 'Years of experience in the Nigerian industrial and agricultural sectors.' },
  { title: 'Quality Equipment', description: 'We supply only certified equipment from reputable international manufacturers.' },
  { title: 'Professional Installation', description: 'Factory-trained technicians ensuring correct installation and commissioning.' },
  { title: 'Reliable Support', description: 'Dedicated after-sales support and maintenance service agreements.' },
  { title: 'Regulatory Compliance', description: 'All calibrations are done to Nigerian standards and regulatory requirements.' },
  { title: 'Competitive Pricing', description: 'Cost-effective solutions without compromising on quality or service.' },
]

export default function KiraPage() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(kiraJsonLd) }}
    />
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
              Business Profile
            </p>
            <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
              Kira Scales Limited
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Nigeria&apos;s trusted provider of industrial weighing solutions.
              We supply, install, calibrate, and maintain weighbridges and industrial
              scales for businesses across Nigeria.
            </p>
            <p className="text-gray-500 dark:text-gray-500 mb-10">
              Serving agriculture, logistics, manufacturing, quarrying, and mining sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://kirascales.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Kira Scales Website
                <HiArrowTopRightOnSquare className="w-4 h-4" />
              </a>
              <Link href="/contact" className="btn-secondary">
                Request a Quote
              </Link>
            </div>
          </div>

          {/* On-site photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src="/images/solomon-akor-site.jpg"
              alt="Solomon Akor on-site in safety gear at a weighbridge installation — Kira Scales Limited operations"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-sm">Solomon Akor</p>
              <p className="text-white/80 text-xs">Head of Operations — Kira Scales Limited</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mb-20">
          <h2 className="heading-md text-gray-900 dark:text-white text-center mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(({ name, description, specs }) => (
              <div key={name} className="card p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{description}</p>
                <ul className="space-y-1.5">
                  {specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="heading-md text-gray-900 dark:text-white text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            End-to-end weighing solutions — from supply and installation to calibration and ongoing support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-5 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Kira */}
        <div className="mb-20">
          <h2 className="heading-md text-gray-900 dark:text-white text-center mb-12">
            Why Choose Kira Scales?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="w-2 flex-shrink-0 flex items-start pt-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Weighing Solution?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Whether you need a new weighbridge installed, an existing one calibrated, or a
            spare parts supply, our team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://kirascales.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Visit Our Website
              <HiArrowTopRightOnSquare className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
