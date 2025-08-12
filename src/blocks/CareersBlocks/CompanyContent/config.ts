import type { Block } from 'payload'

export const CompanyContent: Block = {
  slug: 'co-content',
  labels: {
    singular: 'Company Content',
    plural: 'Company Content',
  },
  fields: [
    // Featured Media
    {
      name: 'featuredMedia',
      type: 'group',
      label: 'Featured Media',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Media',
          admin: {
            description: 'Featured image or media for the section',
          },
        },
      ],
    },

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
            description: 'Main heading for the section',
          },
        },
      ],
    },

    // Content Paragraphs
    {
      name: 'content',
      type: 'array',
      label: 'Content Paragraphs',
      minRows: 1,
      admin: {
        description: 'Add paragraphs of content for this section',
      },
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          label: 'Paragraph Text',
          required: true,
          admin: {
            description: 'A paragraph of content for this section',
          },
        },
      ],
    },
  ],
}
