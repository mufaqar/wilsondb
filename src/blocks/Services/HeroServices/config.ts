import type { Block } from 'payload'

export const HeroServices: Block = {
  slug: 'hero-services',
  labels: {
    singular: 'Hero Section (Services)',
    plural: 'Hero Section (Services)',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Hero Title',
      required: true,
      admin: {
        description: 'Main headline text for the hero section',
      },
    },
    {
      name: 'shortinfo',
      type: 'textarea',
      label: 'Description',
      required: true,
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
          required: true,
          defaultValue: 'Request Consultation',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          required: true,
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
          required: true,
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
          required: true,
          admin: {
            description: 'Primary background image for the hero section',
          },
        },
        {
          name: 'overlayIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Overlay Icon',
          required: true,
          admin: {
            description: 'Icon that appears overlaid on the main image',
          },
        },
      ],
    },
  ],
}
