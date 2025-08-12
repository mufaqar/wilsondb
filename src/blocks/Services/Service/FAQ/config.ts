import { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faq-section',
  labels: { singular: 'FAQ Section', plural: 'FAQ Sections' },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQs',
      admin: {
        description: 'Add FAQs here',
      },
      maxRows: 4,
      required: false,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: false,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: false,
        },
      ],
    },
  ],
}
