import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiEnvelope } from 'react-icons/hi2'
import { siteConfig } from '@/lib/utils'

const footerLinks = {
  Company: [
    { href: '/projects', label: 'Our work' },
    { href: '/about', label: 'About' },
    { href: '/about#founder', label: 'Founder' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  'Our companies': [
    { href: '/projects/maldra-business-app', label: 'Maldra Limited' },
    { href: '/kira', label: 'Kira Scales Limited' },
    { href: '/projects/applyai', label: 'ApplyAI' },
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
    <footer className="band-navy border-t-4 border-brand-red">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" aria-label="AkorLabs Technologies home page" className="w-fit">
              <Logo onDark />
            </Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              We build production software for African businesses: offline-first point of sale,
              logistics, e-commerce and payments. Founded by Solomon Akor.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.filter(({ href }) => href).map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 rounded-lg bg-white/10 text-gray-200 hover:bg-brand-gold hover:text-gray-950 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-brand-gold mb-4 text-sm">
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
                      className="text-sm text-gray-300 hover:text-white transition-colors"
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

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {year} {siteConfig.company.name} · {siteConfig.company.registration}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="/feed.xml" className="hover:text-white transition-colors">
              RSS Feed
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
