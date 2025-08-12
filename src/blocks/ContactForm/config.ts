import { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contact-form',
  labels: { singular: 'Contact Form (Global)', plural: 'Contact Forms (Global)' },
  fields: [
    {
      name: 'contentNote',
      type: 'text',
      admin: {
        readOnly: true,
        description:
          'This block displays the contact form the "Contact Form" global. To manage the actual content, go to Globals → Contact / Newsletter Settings',
      },
    },
  ],
}
