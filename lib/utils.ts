import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, parseISO } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? parseISO(date) : date
  return format(d, 'MMMM d, yyyy')
}

export function formatDateShort(date: string | Date): string {
  const d = typeof date === 'string' ? parseISO(date) : date
  return format(d, 'MMM d, yyyy')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export const siteConfig = {
  name: 'Solomon Akor',
  title: 'Solomon Akor | Software Developer & Head of Operations',
  description:
    'Solomon Akor — Software Developer, Head of Operations, and Co-Founder of Kira Scales Limited. Building modern web applications and leading industrial weighing solutions across Nigeria.',
  url: 'https://solomonakor.dev',
  ogImage: 'https://solomonakor.dev/images/og-image.png',
  email: 'akorsolomon.dev@gmail.com',
  github: 'https://github.com/dev-akor',
  linkedin: 'https://linkedin.com/in/solomonakor',
  twitter: 'https://twitter.com/solomonakor',
  whatsapp: 'https://wa.me/your-number',
  kiraScales: 'https://kirascales.com',
}
