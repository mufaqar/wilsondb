import type { Block } from 'payload'

export const CaseStudyHero: Block = {
  slug: 'case-study-hero',
  labels: {
    singular: 'Hero Section (Case Study)',
    plural: 'Hero Section (Case Study)',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      required: true,
    },
    {
      name: 'tags',
      type: 'group',
      label: 'Tags',
      required: true,
      fields: [
        {
          name: 'date',
          type: 'date',
          label: 'Date',
          required: true,
        },
        {
          name: 'readTime',
          type: 'number',
          label: 'Read Time (in minutes)',
          required: true,
        },
      ],
    },
  ],
}
