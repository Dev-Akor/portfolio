'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaArrowRight, FaCode, FaBuilding } from 'react-icons/fa6'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { cn, siteConfig } from '@/lib/utils'

const roles = [
  'Software Developer',
  'Head of Operations',
  'Business Executive',
  'Problem Solver',
  'Entrepreneur',
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding min-h-[90vh] flex items-center bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-gray-950 dark:via-blue-950/10 dark:to-indigo-950/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Available for opportunities
            </div>

            {/* Heading */}
            <h1 className="heading-xl text-gray-900 dark:text-white mb-4 animate-slide-up">
              Hi, I&apos;m{' '}
              <span className="text-primary-600 dark:text-primary-400">Solomon Akor</span>
            </h1>

            {/* Animated role */}
            <div className="h-12 md:h-14 flex items-center mb-6 animate-slide-up">
              <p
                className={cn(
                  'text-xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 transition-all duration-400',
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                )}
              >
                {roles[roleIndex]}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-10 animate-slide-up">
              Software Developer and Co-Founder of{' '}
              <Link href="/kira" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                Kira Scales Limited
              </Link>
              . I build modern web applications and lead operations in Nigeria&apos;s industrial weighing sector.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-slide-up mb-10">
              <Link href="/projects" className="btn-primary">
                <FaCode className="w-4 h-4" />
                View Projects
                <FaArrowRight className="w-3 h-3" />
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read Blog
              </Link>
              <Link
                href="/kira"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
              >
                <FaBuilding className="w-4 h-4" />
                Kira Scales
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                dev-akor
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-indigo-500 rounded-full opacity-20 blur-xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/images/solomon-akor.jpg"
                  alt="Solomon Akor — Software Developer and Co-Founder of Kira Scales Limited"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-200 dark:border-gray-800 max-w-lg animate-fade-in">
          {[
            { value: '5+', label: 'Projects Built' },
            { value: '3+', label: 'Years Coding' },
            { value: '4', label: 'Languages' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
