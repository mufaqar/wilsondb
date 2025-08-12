import type { Block } from 'payload'

export const ServiceAbout: Block = {
  slug: 'service-about',
  labels: {
    singular: 'Service About (Service)',
    plural: 'Service About (Service)',
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
          defaultValue: 'What is IT Change Management?',
          admin: {
            description: 'Main section heading',
          },
        },
      ],
    },

    // Content Section
    {
      name: 'content',
      type: 'group',
      label: 'Content Section',
      fields: [
        {
          name: 'image',
          type: 'group',
          label: 'Featured Image',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
              required: true,
              admin: {
                description: 'Featured image for the content section',
              },
            },
          ],
        },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Content Paragraphs',
          minRows: 1,
          admin: {
            description: 'Add content paragraphs for this section',
          },
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Paragraph Text',
              required: true,
              admin: {
                description: 'Content paragraph',
              },
            },
          ],
          defaultValue: [
            {
              text: 'As the IT landscape rapidly evolves, organizations must position themselves to effectively respond to these structural and technological changes. IT Change Management is essential for organizations that face shifting business models. Change must be managed to derive maximum benefit from new opportunities and to avoid reactive situations.',
            },
            {
              text: 'IT Change Management helps organizations request, prioritize, authorize, approve, schedule, and implement any changes. A great IT Change Management process helps organizations control risks and keep interruptions to your services at a minimum.',
            },
            {
              text: 'IT Change Management consists of three classes of change: Standard, normal, and emergency changes. Each change class is managed in its own distinct way.',
            },
          ],
        },
      ],
    },

    // Steps Section
    {
      name: 'steps',
      type: 'array',
      label: 'Steps/Cards',
      minRows: 1,
      maxRows: 3,
      admin: {
        description: 'Add steps or information cards (maximum 3)',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Step Title',
          required: true,
          admin: {
            description: 'Title for this step/card',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Step Description',
          required: true,
          admin: {
            description: 'Description text for this step/card',
          },
        },
        {
          name: 'icon-unhovered',
          type: 'upload',
          relationTo: 'media',
          label: 'Step Icon (Unhovered)',
          required: true,
          admin: {
            description: 'Icon image for this step/card (Unhovered)',
          },
        },
        {
          name: 'icon-hovered',
          type: 'upload',
          relationTo: 'media',
          label: 'Step Icon (Hovered)',
          required: true,
          admin: {
            description: 'Icon image for this step/card (Hovered)',
          },
        },
      ],
      defaultValue: [
        {
          title: 'Standard changes',
          description:
            'are changes to a service or to the IT infrastructure. Here, the implementation process and the risks are known upfront. These changes are managed according to policies that an IT organization already has in place.',
        },
        {
          title: 'Normal changes',
          description:
            'are changes that have to go through a change process before they can be approved and implemented. If they are high-risk, a change advisory board* decides whether they will be implemented.',
        },
        {
          title: 'Emergency changes',
          description: 'are changes that must be performed as soon as possible.',
        },
      ],
    },
  ],
}
