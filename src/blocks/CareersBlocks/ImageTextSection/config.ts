import type { Block } from 'payload'

export const ImageTextSection: Block = {
  slug: 'image-text-section',
  labels: {
    singular: 'Image Text Section',
    plural: 'Image Text Sections',
  },
  fields: [
    // Layout Configuration
    {
      name: 'layout',
      type: 'group',
      label: 'Layout',
      fields: [
        {
          name: 'imgPos',
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
            description: 'Image for the section',
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
            description: 'Main text content for the section',
          },
        },
      ],
    },
  ],
}
