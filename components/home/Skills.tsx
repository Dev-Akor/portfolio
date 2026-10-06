import {
  SiDocker, SiExpo, SiFlutter, SiGithubactions, SiMongodb, SiNestjs, SiNextdotjs,
  SiPayloadcms, SiPhp, SiPostgresql, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiVercel, SiDart,
} from 'react-icons/si'
import { HiArrowsRightLeft, HiCreditCard, HiLockClosed, HiSignalSlash } from 'react-icons/hi2'
import { Reveal } from '@/components/ui/Reveal'
import { brandTiles, cn } from '@/lib/utils'

const stack = [
  {
    category: 'Web',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Dart', icon: SiDart },
      { name: 'React Native', icon: SiReact },
      { name: 'Expo', icon: SiExpo },
    ],
  },
  {
    category: 'Backend & data',
    skills: [
      { name: 'NestJS', icon: SiNestjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Payload CMS', icon: SiPayloadcms },
      { name: 'PHP', icon: SiPhp },
    ],
  },
  {
    category: 'Delivery',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Vercel', icon: SiVercel },
      { name: 'GitHub Actions', icon: SiGithubactions },
    ],
  },
]

const capabilities = [
  {
    icon: HiSignalSlash,
    title: 'Offline-first systems',
    description: 'Apps that keep working on a bad connection and sync exactly once when it returns.',
  },
  {
    icon: HiCreditCard,
    title: 'Payments & billing',
    description: 'Paystack checkout and subscriptions with signed, idempotent webhooks and race-safe order states.',
  },
  {
    icon: HiLockClosed,
    title: 'Multi-tenant security',
    description: 'Tenant isolation and role rules enforced by the database with row-level security, not just app code.',
  },
  {
    icon: HiArrowsRightLeft,
    title: 'Workflows & state machines',
    description: 'Shipments, orders and purchase approvals modelled as audited state machines that can’t be bypassed.',
  },
]

export function Skills() {
  return (
    <section className="band-navy section-padding" aria-labelledby="skills-heading">
      <div className="container-custom">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow-on-dark mb-4">What we do</p>
          <h2 id="skills-heading" className="heading-lg mb-4 text-white">
            The hard parts, done properly
          </h2>
          <p className="text-gray-300">
            The features that make or break business software, and the stack we use to ship them on web and mobile.
          </p>
        </div>

        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 80} className="rounded-2xl bg-white p-6 shadow-lg shadow-black/20 dark:bg-gray-900">
              <span className={cn('mb-5 flex h-10 w-10 items-center justify-center rounded-xl', brandTiles[i % brandTiles.length])}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-brand-gold">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map(({ name, icon: Icon }) => (
                  <li key={name} className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
