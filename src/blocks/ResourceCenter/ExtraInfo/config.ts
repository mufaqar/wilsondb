import type { Block } from 'payload'

export const ExtraInfo: Block = {
  slug: 'extra-info',
  labels: {
    singular: 'Extra Information Section (Resource Center)',
    plural: 'Extra Information Section (Resource Center)',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Common Security Problems You Can Fix Instantly',
      required: true,
    },
    {
      name: 'problems',
      type: 'array',
      label: 'Security Problems List',
      minRows: 2,
      admin: {
        description: 'Add the common security problems displayed on the page',
      },
      fields: [
        {
          name: 'problemTitle',
          type: 'text',
          label: 'Problem Title',
          required: true,
          admin: {
            description: 'E.g. "Prevent data breach"',
          },
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon or Image',
          required: true,
          admin: {
            description: 'Optional icon/image representing this problem',
          },
        },
      ],
    },
  ],
}
