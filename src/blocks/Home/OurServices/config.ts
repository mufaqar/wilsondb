import { Block } from 'payload'

export const OurServices: Block = {
  slug: 'our-services',
  labels: { singular: 'Our Services (Home)', plural: 'Our Services (Home)' },
  fields: [
    // Section Header Configuration
    {
      name: 'header',
      type: 'group',
      label: 'Section Header',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
          defaultValue: 'Our Services',
          admin: {
            description: 'Main heading for the services section',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
          required: true,
          defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          admin: {
            description: 'Descriptive text below the main heading',
          },
        },
      ],
    },

    // Services Configuration
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      required: true,
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'icon-hovered',
          type: 'upload',
          relationTo: 'media',
          label: 'Service Icon (Hovered)',
          required: true,
          admin: {
            description: 'Icon representing this service when hovered (recommended: 70x70px SVG)',
          },
        },
        {
          name: 'icon-normal',
          type: 'upload',
          relationTo: 'media',
          label: 'Service Icon (Normal)',
          required: true,
          admin: {
            description:
              'Icon representing this service when not hovered (recommended: 70x70px SVG)',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Service Title',
          required: true,
          admin: {
            description: 'Name of the service',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Service Description',
          required: true,
          admin: {
            description: 'Brief description of what this service offers',
          },
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          label: 'Highlight Service',
          defaultValue: false,
          admin: {
            description: 'Apply special highlighting style to this service card',
          },
        },
      ],
      defaultValue: [
        {
          title: 'Vulnerability Assessment',
          description:
            'Vulnerability Assessment is the practice of identifying, classifying, remediating.',
          highlighted: true,
        },
        {
          title: 'FedRAMP Advisory',
          description: 'Achieve and maintain your FedRAMP Authority to Operate (ATO)',
          highlighted: false,
        },
        {
          title: 'FISMA Assessment',
          description: 'Whereby is the super simple way to great connect over video.',
          highlighted: false,
        },
        {
          title: 'IT Governance',
          description: 'Whereby is the super simple way to great connect over video.',
          highlighted: false,
        },
        {
          title: 'CMMC Consulting',
          description:
            'Vulnerability Assessment is the practice of identifying, classifying remediating.',
          highlighted: false,
        },
        {
          title: 'GDPR Compliance Consulting',
          description: 'Whereby is the super simple way to great connect over video.',
          highlighted: false,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },

    // Layout Configuration
    {
      name: 'layout',
      type: 'group',
      label: 'Layout Options',
      fields: [
        {
          name: 'bgColor',
          type: 'select',
          label: 'Background Color',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Light Background', value: 'background' },
            { label: 'Gray', value: 'gray-50' },
          ],
          defaultValue: 'white',
          admin: {
            description: 'Background color for the entire section',
          },
        },
        {
          name: 'columns',
          type: 'select',
          label: 'Grid Columns (Desktop)',
          options: [
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
          ],
          defaultValue: '4',
          admin: {
            description: 'Number of columns to display on desktop screens',
          },
        },
        {
          name: 'specialLayout',
          type: 'checkbox',
          label: 'Enable Special Layout',
          defaultValue: true,
          admin: {
            description: 'First and last service cards span 2 columns on medium+ screens',
          },
        },
      ],
    },

    // Styling Configuration
    {
      name: 'style',
      type: 'group',
      label: 'Card Styling',
      fields: [
        {
          name: 'padding',
          type: 'select',
          label: 'Card Padding',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
          defaultValue: 'large',
          admin: {
            description: 'Padding inside service cards',
          },
        },
        {
          name: 'radius',
          type: 'select',
          label: 'Card Border Radius',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
          defaultValue: 'large',
          admin: {
            description: 'Rounded corners for service cards',
          },
        },
        {
          name: 'iconSize',
          type: 'select',
          label: 'Icon Size',
          options: [
            { label: 'Small (50px)', value: 'small' },
            { label: 'Medium (70px)', value: 'medium' },
            { label: 'Large (90px)', value: 'large' },
          ],
          defaultValue: 'medium',
          admin: {
            description: 'Size of service icons',
          },
        },
      ],
    },
  ],
}
