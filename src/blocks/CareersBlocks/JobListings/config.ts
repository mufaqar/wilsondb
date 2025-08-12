import type { Block } from 'payload'

export const JobListings: Block = {
  slug: 'job-listings',
  labels: {
    singular: 'Job Listings',
    plural: 'Job Listings',
  },
  fields: [
    // Section Heading
    {
      name: 'heading',
      type: 'group',
      label: 'Heading',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Heading Text',
          required: true,
          admin: {
            description: 'Main heading for the job listings section',
          },
        },
      ],
    },

    // Jobs Array
    {
      name: 'jobs',
      type: 'array',
      label: 'Job Listings',
      minRows: 0,
      admin: {
        description: 'Add job positions available',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Job Title',
          required: true,
          admin: {
            description: 'Position title (e.g., "Senior Software Engineer")',
          },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Job Location',
          required: true,
          admin: {
            description: 'Location or work arrangement (e.g., "Remote", "Washington, DC")',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Job Description',
          required: true,
          admin: {
            description: 'Brief description of the role and requirements',
          },
        },
        {
          name: 'featured',
          type: 'checkbox',
          label: 'Featured Job',
          defaultValue: false,
          admin: {
            description: 'Mark as featured to highlight this position',
          },
        },
      ],
    },
  ],
}
