import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiEnvelope } from 'react-icons/hi2'
import { siteConfig } from '@/lib/utils'

const footerLinks = {
  Navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/kira', label: 'Kira Scales' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  Blog: [
    { href: '/blog/category/tech', label: 'Technology' },
    { href: '/blog/category/business', label: 'Business' },
    { href: '/blog/category/scales', label: 'Scales Industry' },
  ],
  Connect: [
    { href: siteConfig.github, label: 'GitHub', external: true },
    { href: siteConfig.linkedin, label: 'LinkedIn', external: true },
    { href: `mailto:${siteConfig.email}`, label: 'Email' },
  ],
}

const socialLinks = [
  { href: siteConfig.github, label: 'GitHub', icon: FaGithub },
  { href: siteConfig.linkedin, label: 'LinkedIn', icon: FaLinkedin },
  { href: siteConfig.whatsapp, label: 'WhatsApp', icon: FaWhatsapp },
  { href: `mailto:${siteConfig.email}`, label: 'Email', icon: HiEnvelope },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <Image
                src="/images/logo.png"
                alt="Solomon Akor logo"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Solomon<span className="text-primary-600">Akor</span>
                <span className="text-primary-600">.</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Software Developer, Head of Operations & Co-Founder of Kira Scales Limited.
              Building products and writing about tech, business, and industrial solutions.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map(({ href, label, ...rest }) => {
                  const external = 'external' in rest ? rest.external : false
                  return (
                  <li key={href}>
                    <Link
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {year} Solomon Akor. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/sitemap.xml" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Sitemap
            </Link>
            <Link href="/feed.xml" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              RSS Feed
            </Link>
            <a
              href={siteConfig.kiraScales}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Kira Scales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
