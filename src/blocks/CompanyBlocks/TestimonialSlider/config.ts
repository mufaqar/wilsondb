import type { Block } from 'payload'

export const TestimonialSlider: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials (Our Company)',
    plural: 'Testimonials (Our Company)',
  },
  fields: [
    // Section Heading
    {
      name: 'heading',
      type: 'group',
      label: 'Section Heading',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Heading Text',
          required: true,
          admin: {
            description: 'Main heading for the testimonials section',
          },
        },
      ],
    },

    // Testimonials Array
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      admin: {
        description: 'Add executive testimonials or team member profiles',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
          admin: {
            description: 'Full name of the person',
          },
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role/Position',
          required: true,
          admin: {
            description: 'Job title or position',
          },
        },
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote/Biography',
          required: true,
          admin: {
            description: 'Main testimonial text or biography content',
          },
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Profile Image',
          required: true,
          admin: {
            description: 'Profile photo or avatar image',
          },
        },
        {
          name: 'featured',
          type: 'checkbox',
          label: 'Featured Testimonial',
          defaultValue: false,
          admin: {
            description: 'Mark as featured for special styling',
          },
        },
      ],
    },

    // Layout Configuration
    {
      name: 'layout',
      type: 'group',
      label: 'Layout',
      fields: [
        {
          name: 'slideLayout',
          type: 'select',
          label: 'Slide Layout',
          options: [
            { label: 'Image Left, Text Right', value: 'image-left' },
            { label: 'Image Right, Text Left', value: 'image-right' },
          ],
          defaultValue: 'image-left',
        },
      ],
    },
  ],
}
