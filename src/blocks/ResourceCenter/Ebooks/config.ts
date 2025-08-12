import type { Block } from 'payload'

export const Ebooks: Block = {
  slug: 'ebooks',
  labels: {
    singular: 'Ebooks (Resource Center)',
    plural: 'Ebooks (Resource Center)',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'E-Books',
      required: true,
    },

    {
      name: 'eBooks',
      type: 'array',
      label: 'EBooks',
      minRows: 1,
      admin: {
        description: 'Add ebooks with downloadable PDFs',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Book Title',
          required: true,
          admin: {
            description: 'Title for the ebook (e.g., "Guide on Security Risks")',
          },
        },
        {
          name: 'displayImage',
          type: 'upload',
          label: 'Display Image',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Image shown on the ebook cover',
          },
        },
        {
          name: 'pdfFile',
          type: 'upload',
          label: 'PDF File',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'PDF file that is downloadable by users',
          },
        },
        {
          name: 'downloadText',
          type: 'text',
          label: 'Download Button Text',
          defaultValue: 'Download',
          admin: {
            description: 'Text for the download link',
          },
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description Tag',
          defaultValue: 'What You Need to Know?',
          admin: {
            description: 'Small description shown in the orange tag',
          },
        },
      ],
    },
  ],
}
