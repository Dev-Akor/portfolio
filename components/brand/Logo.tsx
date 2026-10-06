import { cn } from '@/lib/utils'

// 4×4 module grid: blue blocks form the A (Akor), red blocks form the L (Labs). F = empty.
const GRID = ['RBBF', 'RFFB', 'RRRR', 'BFFB']
const POS = [2, 18, 34, 50]

export const markCells = GRID.flatMap((row, r) =>
  row.split('').flatMap((kind, c) => (kind === 'F' ? [] : [{ kind: kind as 'R' | 'B', x: POS[c], y: POS[r], key: `${r}-${c}` }]))
)

interface MarkProps {
  className?: string
  /** Render on a solid brand background (white blocks), e.g. app icons */
  inverted?: boolean
  /** Always use the dark-background colours, whatever the page theme */
  onDark?: boolean
  title?: string
}

export function LogoMark({ className, inverted, onDark, title }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn('h-8 w-8 shrink-0', className)} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      {markCells.map(({ kind, x, y, key }) => (
        <rect
          key={key}
          x={x}
          y={y}
          width={13}
          height={13}
          rx={3}
          className={
            inverted
              ? kind === 'R' ? 'fill-[#ff8f87]' : 'fill-white'
              : onDark
                ? kind === 'R' ? 'fill-brand-red-light' : 'fill-primary-400'
                : kind === 'R' ? 'fill-brand-red dark:fill-brand-red-light' : 'fill-primary-600 dark:fill-primary-400'
          }
        />
      ))}
    </svg>
  )
}

interface LogoProps {
  className?: string
  markClassName?: string
  /** Hide the "Technologies" line, for tight spaces */
  compact?: boolean
  /** Fixed light-on-dark colours, for dark panels in either theme */
  onDark?: boolean
}

/** Full AkorLabs Technologies lockup: module mark + wordmark. */
export function Logo({ className, markClassName, compact, onDark }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className={markClassName} onDark={onDark} />
      <span className="grid font-brand leading-none">
        <span className={cn('text-[1.15rem] font-bold tracking-tight', onDark ? 'text-white' : 'text-gray-900 dark:text-white')}>
          Akor<span className={onDark ? 'text-primary-400' : 'text-primary-600 dark:text-primary-400'}>Labs</span>
        </span>
        {!compact && (
          <span className={cn('mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.32em]', onDark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400')}>
            Technologies
          </span>
        )}
      </span>
    </span>
  )
}
