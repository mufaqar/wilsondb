import { link } from '@/fields/link'
import type { Block } from 'payload'

export const ServicesTabs: Block = {
  slug: 'srv',
  interfaceName: 'ServicesTabsBlock',
  labels: {
    singular: 'Services Tabs',
    plural: 'Services Tabs',
  },
  fields: [
    // Section Header
    {
      name: 'sectionHeader',
      type: 'group',
      label: 'Section Header (Optional)',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show Section Header',
          defaultValue: false,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          admin: {
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
          admin: {
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
      ],
    },

    // Service Tabs Configuration
    {
      name: 'sctabs',
      type: 'array',
      label: 'Service Tabs',
      minRows: 1,
      maxRows: 10,
      admin: {
        initCollapsed: true,
        description:
          'Add and manage service category tabs. Each tab can contain multiple services.',
        components: {
          RowLabel: '@/blocks/Services/OurServices/ServiceTabRowLabel.tsx#ServiceTabRowLabel',
        },
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Service Category Name',
          required: true,
          admin: {
            description:
              'This will be displayed as the tab name (e.g., "IT Governance Services", "Cloud Services")',
            placeholder: 'Enter the service category name...',
          },
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Icon (Normal State)',
          required: true,
          admin: {
            description: 'Icon displayed when this tab is not selected',
          },
        },
        {
          name: 'activeIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Icon (Active/Selected State)',
          required: true,
          admin: {
            description: 'Icon displayed when this tab is selected/active',
          },
        },

        // Services under this tab
        {
          name: 'services',
          type: 'array',
          label: 'Services in this Category',
          minRows: 0,
          maxRows: 20,
          admin: {
            initCollapsed: true,
            description:
              'Add individual services for this category. Leave empty to show "no services" message.',
            components: {
              RowLabel: '@/blocks/Services/OurServices/ServiceRowLabel.tsx#ServiceRowLabel',
            },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Service Name',
              required: true,
              admin: {
                description:
                  'The name of this specific service (e.g., "IT Change Management", "Risk Assessment")',
                placeholder: 'Enter the service name...',
              },
            },
            {
              name: 'icon-active',
              type: 'upload',
              relationTo: 'media',
              label: 'Service Icon (Hovered State)',
              required: true,
              admin: {
                description: 'Main icon representing this service in a hover state',
              },
            },
            {
              name: 'icon-normal',
              type: 'upload',
              relationTo: 'media',
              label: 'Service Icon (Normal State)',
              required: true,
              admin: {
                description: 'Main icon representing this service in a normal state',
              },
            },
            {
              name: 'backgroundIcon',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Decorative Icon',
              required: true,
              admin: {
                description: 'Large decorative icon shown in bottom-right of service card',
              },
            },
            {
              name: 'lk',
              type: 'group',
              label: 'Service Link (Optional)',
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Make this service clickable',
                  defaultValue: false,
                },
                link({
                  overrides: {
                    name: 'link',
                    label: 'Service Link',
                    admin: {
                      condition: (_, siblingData) => siblingData.enabled,
                    },
                  },
                  short: true,
                }),
              ],
            },
          ],
        },
      ],
    },

    // Empty State Configuration
    {
      name: 'emptyState',
      type: 'group',
      label: 'Empty State Configuration',
      admin: {
        description: 'Configure what appears when a service category has no services',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'No Services Title',
          defaultValue: 'No Services Available',
          required: true,
          admin: {
            placeholder: 'e.g., "Coming Soon" or "Services Under Development"',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'No Services Description',
          defaultValue:
            'We are currently updating our services in this category. Please check back soon or contact us for more information.',
          admin: {
            placeholder: 'Explain why there are no services or what users should do next...',
          },
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Empty State Icon (Optional)',
          admin: {
            description: 'Optional icon to display when there are no services',
          },
        },
      ],
    },

    // Layout and Styling Options
    {
      name: 'layout',
      type: 'group',
      label: 'Layout & Styling',
      admin: {
        description: 'Control the visual appearance and layout of the services section',
      },
      fields: [
        {
          name: 'bgColor',
          type: 'select',
          label: 'Section Background Color',
          options: [
            { label: 'White', value: 'bg-white' },
            { label: 'Light Gray', value: 'bg-gray-50' },
            { label: 'Background', value: 'bg-background' },
          ],
          defaultValue: 'bg-white',
        },
        {
          name: 'ctnerSpacing',
          type: 'select',
          label: 'Container Spacing',
          options: [
            { label: 'Small (py-8)', value: 'py-8' },
            { label: 'Medium (py-16)', value: 'py-16' },
            { label: 'Large (py-24)', value: 'py-24' },
          ],
          defaultValue: 'py-16',
        },
        {
          name: 'tabsLayout',
          type: 'select',
          label: 'Tabs Layout (Mobile)',
          options: [
            { label: '2 Columns', value: 'grid-cols-2' },
            { label: '1 Column', value: 'grid-cols-1' },
            { label: '3 Columns', value: 'grid-cols-3' },
          ],
          defaultValue: 'grid-cols-2',
          admin: {
            description: 'How service category tabs are arranged on mobile devices',
          },
        },
        {
          name: 'gridCols',
          type: 'select',
          label: 'Services Grid Layout',
          options: [
            {
              label: '1 Column (Mobile) / 2 Columns (Desktop)',
              value: 'grid-cols-1 md:grid-cols-2',
            },
            {
              label: '1 Column (Mobile) / 3 Columns (Desktop)',
              value: 'grid-cols-1 md:grid-cols-3',
            },
            {
              label: '2 Columns (Mobile) / 3 Columns (Desktop)',
              value: 'grid-cols-2 md:grid-cols-3',
            },
            {
              label: '2 Columns (Mobile) / 4 Columns (Desktop)',
              value: 'grid-cols-2 md:grid-cols-4',
            },
          ],
          defaultValue: 'grid-cols-1 md:grid-cols-2',
          admin: {
            description: 'How individual services are arranged in the grid',
          },
        },
      ],
    },
  ],
}
