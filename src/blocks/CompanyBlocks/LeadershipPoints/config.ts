import type { Block } from 'payload'

export const LeadershipPoints: Block = {
  slug: 'leadership-points',
  labels: {
    singular: 'Leadership (Our Company)',
    plural: 'Leadership (Our Company)',
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
            description: 'Main heading for the leadership section',
          },
        },
      ],
    },

    // Leadership Points
    {
      name: 'points',
      type: 'array',
      label: 'Leadership Points',
      minRows: 1,
      admin: {
        description: 'Add leadership points or key messages',
      },
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Point Text',
          required: true,
          admin: {
            description: 'Text for this leadership point',
          },
        },
        {
          name: 'featured',
          type: 'checkbox',
          label: 'Featured Point',
          defaultValue: false,
          admin: {
            description: 'Mark as featured for special styling',
          },
        },
      ],
    },
  ],
}
