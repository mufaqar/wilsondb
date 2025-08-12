import { Block } from 'payload'

export const HelpYou: Block = {
  slug: 'help-you-section',
  labels: { singular: 'Help You Section', plural: 'Help You Sections' },
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
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: false,
    },
  ],
}
