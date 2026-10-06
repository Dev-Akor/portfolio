import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // AkorLabs brand blue (#2147ff); primary-600 passes WCAG AA as text on white
        primary: {
          50: '#eef1ff',
          100: '#e0e5ff',
          200: '#c6cfff',
          300: '#a3b0ff',
          400: '#7a88ff',
          500: '#4c5fff',
          600: '#2147ff',
          700: '#1a36d6',
          800: '#1b2fa8',
          900: '#1c2c84',
          950: '#121a4d',
        },
        // AkorLabs brand red, used sparingly for the company mark
        brand: {
          red: '#e0241b',
          'red-light': '#ff5b4f',
          navy: '#0b1030',
          // Shared gold accent (Kira Scales)
          gold: '#fbbf24',
          'gold-dark': '#f59e0b',
        },
        // Neutrals tinted towards the AkorLabs blue so surfaces read as brand, not plain white/grey
        gray: {
          50: '#f4f6fd',
          100: '#e9edfa',
          200: '#d8def3',
          300: '#b9c2e3',
          400: '#8791bd',
          500: '#5f6a98',
          600: '#454f7c',
          700: '#323b65',
          800: '#1f2750',
          900: '#141a3d',
          950: '#0b1030',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        brand: ['var(--font-brand)', 'var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': { color: theme('colors.primary.700') },
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              fontFamily: 'var(--font-display), var(--font-sans), sans-serif',
              letterSpacing: '-0.02em',
            },
            code: {
              color: theme('colors.primary.600'),
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': { color: theme('colors.primary.300') },
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.primary.400'),
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'brand-cell': 'brandCell 1.6s ease-in-out infinite',
      },
      keyframes: {
        brandCell: {
          '0%, 100%': { opacity: '0.15' },
          '30%, 60%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
