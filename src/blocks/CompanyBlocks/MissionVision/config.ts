import type { Block } from 'payload'

export const MissionVision: Block = {
  slug: 'mission-vision',
  labels: {
    singular: 'Mission & Vision (Our Company)',
    plural: 'Mission & Vision (Our Company)',
  },
  fields: [
    // Mission & Vision Tabs
    {
      name: 'tabs',
      type: 'array',
      label: 'Mission & Vision Tabs',
      minRows: 1,
      maxRows: 4,
      admin: {
        description: 'Add Mission, Vision, Values, etc.',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Tab Label',
          required: true,
          admin: {
            description: 'Tab title (e.g., "Mission", "Vision", "Values")',
          },
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Default Icon',
          required: true,
          admin: {
            description: 'Icon for inactive state',
          },
        },
        {
          name: 'activeIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Active Icon',
          required: true,
          admin: {
            description: 'Icon for active state',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          admin: {
            description: 'Content for this tab',
          },
        },
      ],
    },
  ],
}
