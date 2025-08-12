import { Block } from 'payload'

export const Industries: Block = {
  slug: 'industries',
  labels: { singular: 'Industries We Serve (Home)', plural: 'Industries We Serve (Home)' },
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
          defaultValue: 'Industries We Serve',
          admin: {
            description: 'Main heading for the industries section',
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

    // Main Image Configuration
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Industry Image',
      required: false,
      admin: {
        description: 'Main image displayed on the left side of the section',
      },
    },

    // Industries Configuration
    {
      name: 'industries',
      type: 'array',
      label: 'Industries',
      required: true,
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Industry Title',
          required: true,
          admin: {
            description: 'Name of the industry sector',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Industry Description',
          required: true,
          admin: {
            description: 'Detailed description of how you serve this industry',
          },
        },
        {
          name: 'defaultOpen',
          type: 'checkbox',
          label: 'Open by Default',
          defaultValue: false,
          admin: {
            description: 'Should this industry be expanded by default when page loads',
          },
        },
      ],
      defaultValue: [
        {
          title: 'Government and public service',
          description:
            'Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.',
          defaultOpen: true,
        },
        {
          title: 'Healthcare Industry',
          description:
            'Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.',
          defaultOpen: false,
        },
        {
          title: 'Financial Institutions',
          description:
            'Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.',
          defaultOpen: false,
        },
        {
          title: 'Power and utilities',
          description:
            'Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.',
          defaultOpen: false,
        },
        {
          title: 'Oil and gas',
          description:
            'Government agencies are constantly looking for more efficient and effective IT governance, service, and security tools to address various challenges.',
          defaultOpen: false,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },

    // Icons Configuration
    {
      name: 'icons',
      type: 'group',
      label: 'Icons',
      fields: [
        {
          name: 'checkIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Check Icon',
          admin: {
            description: 'Icon displayed next to each industry (recommended: 41x41px)',
          },
        },
        {
          name: 'arrowIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Arrow Icon',
          admin: {
            description: 'Expandable arrow icon (recommended: 40x40px)',
          },
        },
      ],
    },

    // Call-to-Action Buttons Configuration
    {
      name: 'buttons',
      type: 'array',
      label: 'Call-to-Action Buttons',
      maxRows: 3,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          required: true,
        },
        {
          name: 'style',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
          ],
          defaultValue: 'primary',
          required: true,
        },
      ],
      defaultValue: [
        { text: 'Read More', url: '#', style: 'secondary' },
        { text: 'Services', url: '#', style: 'primary' },
      ],
      admin: {
        description: 'Buttons displayed at the bottom of the section',
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
            { label: 'Dark (Foreground)', value: 'foreground' },
            { label: 'Light Background', value: 'background' },
            { label: 'White', value: 'white' },
            { label: 'Primary', value: 'primary' },
          ],
          defaultValue: 'foreground',
          admin: {
            description: 'Background color for the entire section',
          },
        },
        {
          name: 'textColor',
          type: 'select',
          label: 'Text Color Theme',
          options: [
            { label: 'Light (White)', value: 'light' },
            { label: 'Dark (Black)', value: 'dark' },
          ],
          defaultValue: 'light',
          admin: {
            description: 'Text color theme based on background',
          },
        },
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
            description: 'Position of the main image relative to the accordion',
          },
        },
      ],
    },

    // Accordion Behavior Configuration
    {
      name: 'behavior',
      type: 'group',
      label: 'Accordion Behavior',
      fields: [
        {
          name: 'allowMultiple',
          type: 'checkbox',
          label: 'Allow Multiple Open',
          defaultValue: false,
          admin: {
            description: 'Allow multiple industries to be expanded simultaneously',
          },
        },
        {
          name: 'animationSpeed',
          type: 'select',
          label: 'Animation Speed',
          options: [
            { label: 'Fast', value: 'fast' },
            { label: 'Normal', value: 'normal' },
            { label: 'Slow', value: 'slow' },
          ],
          defaultValue: 'normal',
          admin: {
            description: 'Speed of expand/collapse animations',
          },
        },
      ],
    },
  ],
}
