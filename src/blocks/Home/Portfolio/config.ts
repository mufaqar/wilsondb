import { Block } from 'payload'

export const Portfolio: Block = {
  slug: 'portfolio',
  labels: { singular: 'Portfolio (Home)', plural: 'Portfolio (Home)' },
  fields: [
    // Section Header Configuration
    {
      name: 'header',
      type: 'group',
      label: 'Section Header',
      fields: [
        {
          name: 'title',
          type: 'textarea',
          label: 'Section Title',
          required: true,
          defaultValue: 'Proven Results that Speak for Themselves',
          admin: {
            description: 'Main heading for the portfolio section (supports line breaks)',
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

    // Statistics Configuration
    {
      name: 'statistics',
      type: 'array',
      label: 'Statistics',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Statistic Value',
          required: true,
          admin: {
            description: 'The numerical value or percentage (e.g., "500+", "99.9%")',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Statistic Label',
          required: true,
          admin: {
            description: 'Description of what the statistic represents',
          },
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          label: 'Highlight Statistic',
          defaultValue: false,
          admin: {
            description: 'Apply special styling to emphasize this statistic',
          },
        },
      ],
      defaultValue: [
        { value: '500+', label: 'PROJECTS COMPLETED', highlighted: false },
        { value: '200+', label: 'SATISFIED CLIENTS', highlighted: false },
        { value: '15+', label: 'COUNTRIES SERVED', highlighted: false },
        { value: '99.9%', label: 'UPTIME ACHIEVED', highlighted: true },
      ],
      admin: {
        initCollapsed: true,
      },
    },

    // Client Logos Configuration
    {
      name: 'clientLogos',
      type: 'array',
      label: 'Client Logos',
      maxRows: 12,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Client Logo',
          required: true,
          admin: {
            description: 'Client or partner logo image',
          },
        },
        {
          name: 'website',
          type: 'text',
          label: 'Client Website',
          admin: {
            description: 'Optional: Link to client website',
          },
        },
      ],
      admin: {
        description: 'Upload client and partner logos to display',
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
            { label: 'Dark', value: 'foreground' },
          ],
          defaultValue: 'white',
          admin: {
            description: 'Background color for the entire section',
          },
        },
        {
          name: 'statsColumns',
          type: 'select',
          label: 'Statistics Columns (Desktop)',
          options: [
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
            { label: '5 Columns', value: '5' },
          ],
          defaultValue: '4',
          admin: {
            description: 'Number of columns for statistics on desktop',
          },
        },
        {
          name: 'headerLayout',
          type: 'select',
          label: 'Header Layout',
          options: [
            { label: 'Side by Side', value: 'sideBySide' },
            { label: 'Stacked', value: 'stacked' },
            { label: 'Centered', value: 'centered' },
          ],
          defaultValue: 'sideBySide',
          admin: {
            description: 'Layout arrangement for title and description',
          },
        },
        {
          name: 'enableDividers',
          type: 'checkbox',
          label: 'Enable Statistics Dividers',
          defaultValue: true,
          admin: {
            description: 'Show vertical divider lines between statistics',
          },
        },
      ],
    },

    // Styling Configuration
    {
      name: 'style',
      type: 'group',
      label: 'Styling Options',
      fields: [
        {
          name: 'statValueColor',
          type: 'select',
          label: 'Statistics Value Color',
          options: [
            { label: 'Orange (Brand)', value: 'wils_orang' },
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Black', value: 'black' },
            { label: 'White', value: 'white' },
          ],
          defaultValue: 'wils_orang',
          admin: {
            description: 'Color for the statistic values',
          },
        },
        {
          name: 'textTheme',
          type: 'select',
          label: 'Text Color Theme',
          options: [
            { label: 'Dark (Black)', value: 'dark' },
            { label: 'Light (White)', value: 'light' },
          ],
          defaultValue: 'dark',
          admin: {
            description: 'Overall text color theme for the section',
          },
        },
        {
          name: 'logoSize',
          type: 'select',
          label: 'Client Logo Size',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
          defaultValue: 'medium',
          admin: {
            description: 'Size of client logo containers',
          },
        },
        {
          name: 'statsSize',
          type: 'select',
          label: 'Statistics Text Size',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
          defaultValue: 'large',
          admin: {
            description: 'Size of statistics values and labels',
          },
        },
      ],
    },

    // Section Control
    {
      name: 'sections',
      type: 'group',
      label: 'Section Visibility',
      fields: [
        {
          name: 'showStats',
          type: 'checkbox',
          label: 'Show Statistics Section',
          defaultValue: true,
          admin: {
            description: 'Display the statistics grid',
          },
        },
        {
          name: 'showLogos',
          type: 'checkbox',
          label: 'Show Client Logos Section',
          defaultValue: true,
          admin: {
            description: 'Display the client logos grid',
          },
        },
        {
          name: 'showBorder',
          type: 'checkbox',
          label: 'Show Section Border',
          defaultValue: true,
          admin: {
            description: 'Show border between statistics and logos sections',
          },
        },
      ],
    },
  ],
}
