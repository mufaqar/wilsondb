import type { Block } from 'payload'

export const SimpleInformation: Block = {
  slug: 'info',
  labels: {
    singular: 'Information Section',
    plural: 'Information Sections',
  },
  fields: [
    // Section Title
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
      admin: {
        description: 'Main heading for the information section',
      },
    },

    // Section Description
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      required: true,
      admin: {
        description: 'Detailed description or content for the information section',
      },
    },

    // Feature Image
    {
      name: 'image',
      type: 'upload',
      label: 'Section Image',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Main image for the information section',
      },
    },

    // Layout Options
    {
      name: 'layout',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          options: [
            { label: 'Left Side', value: 'left' },
            { label: 'Right Side', value: 'right' },
          ],
          defaultValue: 'left',
          admin: {
            description: 'Choose which side the image should appear on',
          },
        },
        {
          name: 'backgroundColor',
          type: 'select',
          label: 'Section Background',
          options: [
            { label: 'White', value: 'bg-white' },
            { label: 'Light Gray', value: 'bg-gray-50' },
            { label: 'Background', value: 'bg-background' },
          ],
          defaultValue: 'bg-white',
        },
        {
          name: 'spacing',
          type: 'select',
          label: 'Section Spacing',
          options: [
            { label: 'Small (py-8)', value: 'py-8' },
            { label: 'Medium (py-16)', value: 'py-16' },
            { label: 'Large (py-24)', value: 'py-24' },
          ],
          defaultValue: 'py-16',
        },
      ],
    },
  ],
}
