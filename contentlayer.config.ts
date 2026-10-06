import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import readingTime from 'reading-time'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    author: { type: 'string', required: false },
    featuredImage: { type: 'string', required: false },
    featured: { type: 'boolean', required: false },
    draft: { type: 'boolean', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace('blog/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('blog/', ''),
    },
    readingTime: {
      type: 'string',
      resolve: (post) => readingTime(post.body.raw).text,
    },
  },
}))

const Metric = defineNestedType(() => ({
  name: 'Metric',
  fields: {
    value: { type: 'string', required: true },
    label: { type: 'string', required: true },
  },
}))

const GalleryImage = defineNestedType(() => ({
  name: 'GalleryImage',
  fields: {
    src: { type: 'string', required: true },
    alt: { type: 'string', required: true },
    caption: { type: 'string', required: false },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    // Short name for cards and navigation, e.g. "Maldra"
    shortTitle: { type: 'string', required: false },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
    technologies: { type: 'list', of: { type: 'string' }, required: true },
    platforms: { type: 'list', of: { type: 'string' }, required: false },
    role: { type: 'string', required: false },
    timeline: { type: 'string', required: false },
    client: { type: 'string', required: false },
    company: { type: 'string', required: false },
    // The company that engineered it, when different from the company that owns it
    builtBy: { type: 'string', required: false },
    // public: repo link shown. private: code on request. confidential: client NDA, no names or code.
    visibility: {
      type: 'enum',
      options: ['public', 'private', 'confidential'],
      default: 'private',
    },
    // Only rendered when visibility is public; never put private repo URLs here
    repoUrl: { type: 'string', required: false },
    liveUrl: { type: 'string', required: false },
    cover: { type: 'string', required: false },
    coverAlt: { type: 'string', required: false },
    icon: { type: 'string', required: false },
    metrics: { type: 'list', of: Metric, required: false },
    highlights: { type: 'list', of: { type: 'string' }, required: false },
    gallery: { type: 'list', of: GalleryImage, required: false },
    featured: { type: 'boolean', required: false },
    order: { type: 'number', required: false },
    status: {
      type: 'enum',
      options: ['live', 'beta', 'in-development', 'completed', 'archived'],
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) =>
        `/projects/${project._raw.flattenedPath.replace('projects/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (project) => project._raw.flattenedPath.replace('projects/', ''),
    },
  },
}))

const contentlayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark',
            light: 'github-light',
          },
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})

export default contentlayerConfig
