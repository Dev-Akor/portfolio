import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Image from 'next/image'
import { ContactForm } from '@/components/contact/ContactForm'
import { HiEnvelope, HiMapPin } from 'react-icons/hi2'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { siteConfig } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    'Get in touch with Solomon Akor for software development projects, collaborations, or Kira Scales business inquiries.',
  url: '/contact',
})

const contactInfo = [
  {
    icon: HiEnvelope,
    label: 'General',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: HiEnvelope,
    label: 'Business',
    value: siteConfig.workEmail,
    href: `mailto:${siteConfig.workEmail}`,
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'Send a message',
    href: siteConfig.whatsapp,
    external: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Solomon Akor',
    href: siteConfig.linkedin,
    external: true,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'dev-akor',
    href: siteConfig.github,
    external: true,
  },
  {
    icon: HiMapPin,
    label: 'Location',
    value: 'Nigeria',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Get in Touch
          </p>
          <h1 className="heading-xl text-gray-900 dark:text-white mb-5">Contact</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether you have a project in mind, want to collaborate, or have a question about
            Kira Scales — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {/* Profile card */}
            <div className="card p-6 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-200 dark:border-primary-800">
                <Image
                  src="/images/solomon-akor.jpg"
                  alt="Solomon Akor"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Solomon Akor</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Software Developer</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Head of Operations, Kira Scales</p>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-5">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, external }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time note */}
            <div className="card p-5 bg-primary-50 dark:bg-primary-900/10 border-primary-100 dark:border-primary-900/30">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold">Response time:</span> I typically respond within
                24–48 hours on business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
