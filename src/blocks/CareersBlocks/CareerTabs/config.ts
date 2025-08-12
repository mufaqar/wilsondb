import type { Block } from 'payload'

export const CareerTabs: Block = {
  slug: 'career-tabs',
  labels: {
    singular: 'Career Tabs',
    plural: 'Career Tabs',
  },
  fields: [
    // Tabs Configuration
    {
      name: 'tabs',
      type: 'array',
      label: 'Tab Items',
      minRows: 1,
      maxRows: 10,
      admin: {
        description: 'Add tab items with labels and content',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Tab Label',
          required: true,
          admin: {
            description: 'The clickable tab title (e.g., "COVID-19 Facts:")',
          },
        },
        {
          name: 'content',
          type: 'array',
          label: 'Tab Content',
          minRows: 1,
          admin: {
            description: 'Add paragraphs of content for this tab',
          },
          fields: [
            {
              name: 'paragraph',
              type: 'textarea',
              label: 'Paragraph',
              required: true,
              admin: {
                description: 'A paragraph of content for this tab',
              },
            },
          ],
        },
      ],
    },
  ],
}
