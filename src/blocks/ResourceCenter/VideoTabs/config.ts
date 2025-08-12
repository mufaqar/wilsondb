import type { Block } from 'payload'

export const VideoTabs: Block = {
  slug: 'video-tabs',
  labels: {
    singular: 'Video Tabs (Resource Center)',
    plural: 'Video Tabs (Resource Center)',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      label: 'Section Title',
      admin: {
        description:
          'The title heading displayed above the video tabs (e.g., “Videos” or “Media Highlights”)',
      },
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      minRows: 1,
      fields: [
        {
          name: 'tabLabel',
          type: 'text',
          required: true,
          label: 'Tab Label',
          admin: {
            description: 'Label shown on the tab (e.g., “Interviews”, “Webinars”, “Demos”)',
          },
        },
        {
          name: 'videos',
          type: 'array',
          label: 'Videos in Tab',
          minRows: 1,
          fields: [
            {
              name: 'videoTitle',
              type: 'text',
              required: true,
              label: 'Video Title',
            },
            {
              name: 'videoURL',
              type: 'text',
              required: true,
              label: 'Video URL',
              admin: {
                description: 'Link to the video (e.g., from Vimeo or YouTube)',
              },
            },
            {
              name: 'thumbnail',
              type: 'upload',
              relationTo: 'media',
              label: 'Thumbnail Image',
              admin: {
                description: 'Optional image to display as the video preview.',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Video Description',
              admin: {
                description: 'Optional brief description of the video content.',
              },
            },
          ],
        },
      ],
    },
  ],
}
