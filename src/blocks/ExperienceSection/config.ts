import { Block } from 'payload'

export const ExperienceSection: Block = {
  slug: 'experience-section',
  labels: { singular: 'Experience Section', plural: 'Experience Sections' },
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
