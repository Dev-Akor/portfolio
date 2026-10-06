import type { IconType } from 'react-icons'
import {
  SiBootstrap, SiCloudflare, SiDart, SiDeno, SiDocker, SiExpo, SiFirebase, SiFlutter,
  SiGithubactions, SiGraphql, SiMdx, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs,
  SiPayloadcms, SiPhp, SiPostgresql, SiReact, SiRender, SiSentry, SiSqlite, SiSupabase,
  SiTailwindcss, SiTypescript, SiVercel,
} from 'react-icons/si'

// Keys are lowercase technology names as written in project frontmatter
const icons: Record<string, IconType> = {
  'next.js': SiNextdotjs,
  react: SiReact,
  'react native': SiReact,
  typescript: SiTypescript,
  'tailwind css': SiTailwindcss,
  flutter: SiFlutter,
  dart: SiDart,
  nestjs: SiNestjs,
  'node.js': SiNodedotjs,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  mongodb: SiMongodb,
  mysql: SiMysql,
  sqlite: SiSqlite,
  'payload cms': SiPayloadcms,
  php: SiPhp,
  docker: SiDocker,
  vercel: SiVercel,
  render: SiRender,
  'cloudflare pages': SiCloudflare,
  firebase: SiFirebase,
  'firebase cloud messaging': SiFirebase,
  deno: SiDeno,
  graphql: SiGraphql,
  sentry: SiSentry,
  'github actions': SiGithubactions,
  expo: SiExpo,
  bootstrap: SiBootstrap,
  mdx: SiMdx,
}

export function techIcon(name: string): IconType | undefined {
  return icons[name.toLowerCase()]
}
