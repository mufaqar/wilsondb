import type { Block } from 'payload'

export const InfoTabs: Block = {
  slug: 'info-tabs',
  labels: {
    singular: 'Info Tabs (Resource Center)',
    plural: 'Info Tabs (Resource Center)',
  },
  fields: [
    // Section heading
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Info Sheets',
      required: true,
    },

    // Info sheets array
    {
      name: 'infoSheets',
      type: 'array',
      label: 'Info Sheets',
      minRows: 1,
      admin: {
        description: 'Add info sheets with downloadable PDFs',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Sheet Title',
          required: true,
          admin: {
            description: 'Title for the info sheet (e.g., "Penetration Testing")',
          },
        },
        {
          name: 'displayImage',
          type: 'upload',
          label: 'Display Image',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Image shown on the info sheet card',
          },
        },
        {
          name: 'pdfFile',
          type: 'upload',
          label: 'PDF File',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'PDF file that users will download',
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

    // View All button settings
    {
      name: 'viewAllButton',
      type: 'group',
      label: 'View All Button',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show View All Button',
          defaultValue: true,
        },
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'View All',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Button Link',
          defaultValue: '/resources',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
            description: 'URL where the View All button should link to',
          },
        },
      ],
    },
  ],
}
