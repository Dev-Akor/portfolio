import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { HiAcademicCap, HiBuildingOffice, HiGlobeAlt, HiCodeBracket } from 'react-icons/hi2'

const journey = [
  {
    icon: HiAcademicCap,
    title: 'Computer Science',
    description: 'Computer Science graduate — strong foundation in software engineering, algorithms, and system design.',
  },
  {
    icon: HiBuildingOffice,
    title: 'Industry Operations',
    description: 'Led operations in cocoa warehousing and discovered industrial weighing during time in Europe.',
  },
  {
    icon: HiGlobeAlt,
    title: 'Co-Founder, Kira Scales',
    description: 'Co-founded Kira Scales Limited, now serving as Head of Operations for industrial weighing across Nigeria.',
  },
  {
    icon: HiCodeBracket,
    title: 'Software Developer',
    description: 'Building modern web applications with Next.js, TypeScript, and Node.js for real-world impact.',
  },
]

export function AboutSummary() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
              About Me
            </p>
            <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
              A developer who understands both code and operations
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I&apos;m Solomon Akor — Software Developer, Head of Operations, and Co-Founder of{' '}
                <Link href="/kira" className="text-primary-600 dark:text-primary-400 hover:underline">
                  Kira Scales Limited
                </Link>
                . My Computer Science background paired with hands-on industrial experience gives
                me a unique lens on building things that work in the real world.
              </p>
              <p>
                After recognizing a gap in Nigeria&apos;s industrial weighing sector, I co-founded Kira Scales —
                an industrial weighing solutions company supplying, installing, and calibrating weighbridges
                for businesses across Nigeria.
              </p>
              <p>
                Today I combine leadership in operations with software development, building tools
                and products that bridge the digital and industrial worlds.
              </p>
            </div>

            {/* Portrait — visible only on mobile (desktop shows the card grid) */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden my-8 lg:hidden shadow-lg">
              <Image
                src="/images/solomon-akor.jpg"
                alt="Solomon Akor — Software Developer and Head of Operations"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 0px"
              />
            </div>

            <Link href="/about" className="btn-primary mt-2 inline-flex">
              Read Full Story <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Journey cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {journey.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-5 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
