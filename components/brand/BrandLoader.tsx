import { cn } from '@/lib/utils'
import { markCells } from './Logo'

// The A lights up first, then the red L, in the same order as the brand animation
const ORDER = ['0-1', '0-2', '1-3', '3-3', '3-0', '0-0', '1-0', '2-0', '2-1', '2-2', '2-3']

/** Animated AkorLabs mark used for the splash and route loading screens. */
export function BrandLoader({ className, label = 'Loading' }: { className?: string; label?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn('h-14 w-14', className)} role="img" aria-label={label}>
      {markCells.map(({ kind, x, y, key }) => (
        <rect
          key={key}
          x={x}
          y={y}
          width={13}
          height={13}
          rx={3}
          className={cn(
            'animate-brand-cell',
            kind === 'R' ? 'fill-brand-red dark:fill-brand-red-light' : 'fill-primary-600 dark:fill-primary-400'
          )}
          style={{ animationDelay: `${ORDER.indexOf(key) * 90}ms` }}
        />
      ))}
    </svg>
  )
}
