import { injectDefaultResources } from '@/hooks/injectDefaults'
import type { Field } from 'payload'

export function FeaturedResourcesFields(useInjectDefaults: boolean): Field[] {
  return [
    {
      name: 'resources',
      type: 'array',
      label: 'Resources List',
      maxRows: 3,
      admin: {
        description: 'Resources list',
      },
      hooks: {
        afterRead: useInjectDefaults ? [injectDefaultResources] : [],
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Resource Image',
          required: true,
          admin: {
            description:
              'Featured image for the case study (recommended: 224x93px or similar aspect ratio)',
          },
        },
        {
          name: 'tag',
          type: 'text',
          label: 'Category Tag',
          defaultValue: 'Resource',
          admin: {
            description: 'Category or type label (e.g., "Case Study", "Success Story")',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Resource Title',
          required: true,
          admin: {
            description: 'Title of the case study',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Resource Description',
          required: true,
          admin: {
            description: 'Brief description or excerpt of the case study',
          },
        },
        {
          name: 'linkType',
          type: 'select',
          label: 'Link Type',
          options: [
            { label: 'External URL', value: 'external' },
            { label: 'Internal Page', value: 'internal' },
            { label: 'No Link', value: 'none' },
          ],
          defaultValue: 'external',
        },
        {
          name: 'externalUrl',
          type: 'text',
          label: 'External URL',
          admin: {
            condition: (_, siblingData) => siblingData.linkType === 'external',
            description: 'External link to resource',
          },
        },
        {
          name: 'internalPage',
          type: 'relationship',
          relationTo: 'pages',
          label: 'Internal Page',
          admin: {
            condition: (_, siblingData) => siblingData.linkType === 'internal',
            description: 'Link to internal page',
          },
        },
      ],
    },
  ]
}
