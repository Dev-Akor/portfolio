import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiGit, SiGithub, SiPostgresql, SiMongodb, SiVercel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import {
  HiBuildingOffice2, HiChartBarSquare, HiWrenchScrewdriver,
  HiUserGroup, HiGlobeAlt,
} from 'react-icons/hi2'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'REST APIs', icon: HiGlobeAlt },
    ],
  },
  {
    category: 'Tools & Deploy',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
  {
    category: 'Operations',
    skills: [
      { name: 'Team Leadership', icon: HiUserGroup },
      { name: 'Business Dev', icon: HiBuildingOffice2 },
      { name: 'Project Mgmt', icon: HiChartBarSquare },
      { name: 'Field Engineering', icon: HiWrenchScrewdriver },
    ],
  },
]

export function Skills() {
  return (
    <section
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
      aria-labelledby="skills-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            id="skills-heading"
            className="heading-lg text-gray-900 dark:text-white mb-4"
          >
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Technical skills for building production applications, backed by real-world
            operational and business leadership experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="card p-6">
              <h3 className="font-semibold text-primary-600 dark:text-primary-400 mb-5 text-xs uppercase tracking-wider">
                {category}
              </h3>
              <div className="space-y-2.5">
                {skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors flex-shrink-0">
                      <Icon
                        className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
