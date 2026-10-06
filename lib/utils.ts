import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, parseISO } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Blue, red and gold: the three AkorLabs brand colours, rotated across icon tiles
export const brandTiles = [
  'bg-primary-600 text-white',
  'bg-brand-red text-white',
  'bg-brand-gold text-gray-950',
]

export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? parseISO(date) : date
  return format(d, 'MMMM d, yyyy')
}

export function formatDateShort(date: string | Date): string {
  const d = typeof date === 'string' ? parseISO(date) : date
  return format(d, 'MMM d, yyyy')
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akorlabs.com').replace(/\/$/, '')

export const siteConfig = {
  name: 'AkorLabs Technologies',
  title: 'AkorLabs Technologies | Software for African Businesses',
  description:
    'AkorLabs Technologies builds production software for African businesses: offline-first point of sale, logistics, e-commerce and payment platforms across web, Android and iOS. Founded by Solomon Akor.',
  founder: {
    name: 'Solomon Akor',
    role: 'Founder & Lead Engineer',
    image: '/images/solomon-akor.jpg',
  },
  url: siteUrl,
  ogImage: `${siteUrl}/images/og-image.jpg`,
  email: 'hello@akorlabs.com',
  workEmail: 'work@akorlabs.com',
  github: 'https://github.com/dev-akor',
  linkedin: 'https://linkedin.com/in/solomonakor',
  twitter: 'https://twitter.com/solomonakor',
  // Set to a full wa.me link to show WhatsApp in the footer and contact page
  whatsapp: '',
  kiraScales: 'https://kirascales.com',
  company: {
    name: 'AkorLabs Technologies',
    description: 'Software company building products and platforms for African businesses.',
    // CAC business name registration
    registration: 'BN 9639007',
  },
  maldra: {
    name: 'Maldra Limited',
    rc: 'RC 9685788',
  },
  kira: {
    name: 'Kira Scales Limited',
    rc: 'RC 8223128',
    address: '38 Opebi Road, Ikeja, Lagos',
    phone: '0803 435 4829',
    phoneHref: 'tel:+2348034354829',
    email: 'sales@kirascales.com',
  },
}
