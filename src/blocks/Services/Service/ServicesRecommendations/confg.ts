import { link } from '@/fields/link'
import { Block } from 'payload'

export const ServicesRecommendations: Block = {
  slug: 'services-more',
  labels: { singular: 'Services Recommendations', plural: 'Services Recommendations' },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: false,
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: false,
        },
        {
          name: 'icon',
          type: 'upload',
          label: 'Icon',
          required: false,
          relationTo: 'media',
        },
        {
          name: 'bg-image',
          type: 'upload',
          label: 'Decorative Background Image',
          required: false,
          relationTo: 'media',
        },
        link({
          overrides: {
            name: 'link',
            label: 'Link',
            required: false,
          },
          short: true,
        }),
      ],
    },
  ],
}
