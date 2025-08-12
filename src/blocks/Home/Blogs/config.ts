import { Block } from 'payload'

export const FeaturedBlogs: Block = {
  slug: 'featured-blogs',
  labels: { singular: 'Featured Blogs (Global)', plural: 'Featured Blogs (Global)' },
  fields: [
    // Title Override Configuration
    {
      name: 'titleConfig',
      type: 'group',
      label: 'Title Configuration',
      fields: [
        {
          name: 'useCustomTitle',
          type: 'checkbox',
          label: 'Override Title',
          required: false,
          defaultValue: false,
          admin: {
            description: 'Check to override the global title with a custom one',
          },
        },
        {
          name: 'customTitle',
          type: 'text',
          label: 'Custom Title',
          admin: {
            condition: (_, siblingData) => siblingData.useCustomTitle,
            description: 'Custom title for this section (overrides global title)',
            placeholder: 'e.g., "Latest Resources", "Featured Content"',
          },
        },
      ],
    },

    // Information note
    {
      name: 'contentNote',
      type: 'text',
      admin: {
        readOnly: true,
        description:
          'This block displays resources from the "Featured Resources Defaults" global. To manage the actual content, go to Globals → Resources Defaults.',
      },
    },
  ],
}
