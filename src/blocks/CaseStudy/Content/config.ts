import { link } from '@/fields/link'
import type { Block } from 'payload'

export const CaseStudyContent: Block = {
  slug: 'case-study-cn',
  labels: {
    singular: 'Content Section (Case Study)',
    plural: 'Content Section (Case Study)',
  },
  fields: [
    {
      name: 'main-title',
      type: 'text',
      label: 'Main Title',
      required: false,
    },
    {
      name: 'main-content',
      type: 'richText',
      label: 'Main Content',
      required: false,
    },
    {
      name: 'content',
      type: 'array',
      label: 'Content',
      required: false,
      fields: [
        {
          name: 'sub-title',
          type: 'text',
          label: 'Sub Title',
          required: false,
        },
        {
          name: 'sub-content',
          type: 'richText',
          label: 'Sub Content',
          required: false,
        },
      ],
    },
    {
      name: 'main-image',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Image',
      required: false,
    },
    {
      name: 'sb',
      type: 'group',
      label: 'Sidebar',
      required: false,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: false,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
          required: false,
        },
        {
          name: 'button-text',
          type: 'text',

          label: 'Button Text',
          required: false,
        },
        link({
          overrides: {
            label: 'Button Link',
            required: false,
            name: 'btn_link',
          },
          short: true,
        }),
      ],
    },
  ],
}
