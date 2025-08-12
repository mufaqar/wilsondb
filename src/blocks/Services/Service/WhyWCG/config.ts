import { Block } from 'payload'

export const WhyWCG: Block = {
  slug: 'why-wcg-section',
  labels: { singular: 'Why WCG Section', plural: 'Why WCG Sections' },
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
      required: false,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: false,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: false,
        },
      ],
    },
  ],
}
