import type { Block } from 'payload'

export const ITExperts: Block = {
  slug: 'it-experts',
  labels: {
    singular: 'IT Experts (Our Company)',
    plural: 'IT Experts (Our Company)',
  },
  fields: [
    // Heading Configuration
    {
      name: 'heading',
      type: 'group',
      label: 'Heading',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Heading Text',
          required: true,
          admin: {
            description: 'Main heading for the IT experts section',
          },
        },
      ],
    },

    // Layout Configuration
    {
      name: 'layout',
      type: 'group',
      label: 'Layout',
      fields: [
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
      ],
    },

    // Image Configuration
    {
      name: 'image',
      type: 'group',
      label: 'Image',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
          admin: {
            description: 'Image for the IT experts section',
          },
        },
      ],
    },

    // Text Content
    {
      name: 'textContent',
      type: 'group',
      label: 'Text Content',
      fields: [
        {
          name: 'content',
          type: 'textarea',
          label: 'Content',
          required: true,
          admin: {
            description: 'Main content text for the section',
          },
        },
      ],
    },
  ],
}
