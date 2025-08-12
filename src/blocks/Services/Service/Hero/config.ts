import type { Block } from 'payload'

export const HeroService: Block = {
  slug: 'hero-service',
  labels: {
    singular: 'Hero Section (Inner Service)',
    plural: 'Hero Section (Inner Service)',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Hero Title',
      required: false,
      admin: {
        description: 'Main headline text for the hero section',
      },
    },
    {
      name: 'shortinfo',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'Supporting description text below the title',
      },
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call-to-Action Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          required: false,
          defaultValue: 'Request Consultation',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          required: false,
          defaultValue: '#',
        },
        {
          name: 'style',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary_btn' },
            { label: 'Secondary', value: 'secondary_btn' },
          ],
          defaultValue: 'secondary_btn',
          required: false,
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          label: 'Open in New Tab',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'images',
      type: 'group',
      label: 'Hero Images',
      fields: [
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Hero Image',
          required: false,
          admin: {
            description: 'Primary background image for the hero section',
          },
        },
        {
          name: 'overlayIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Overlay Icon',
          required: false,
          admin: {
            description: 'Icon that appears overlaid on the main image',
          },
        },
      ],
    },
  ],
}
