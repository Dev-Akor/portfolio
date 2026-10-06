import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/utils'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'AkorLabs',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0e22',
    theme_color: '#2147ff',
    icons: [
      { src: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/brand/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
