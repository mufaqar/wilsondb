import type { Block } from 'payload'

export const CompanyHero: Block = {
  slug: 'co-hero',
  labels: {
    singular: 'Company Hero (Our Company)',
    plural: 'Company Hero (Our Company)',
  },
  fields: [
    // Content Configuration
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
            description: 'Main heading for the hero section',
          },
        },
      ],
    },

    // Description Configuration
    {
      name: 'description',
      type: 'group',
      label: 'Description',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Description Text',
          required: true,
          admin: {
            description: 'Supporting description text',
          },
        },
      ],
    },

    // Featured Image
    {
      name: 'featuredImage',
      type: 'group',
      label: 'Featured Image',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
          admin: {
            description: 'Main hero image',
          },
        },
      ],
    },
  ],
}
