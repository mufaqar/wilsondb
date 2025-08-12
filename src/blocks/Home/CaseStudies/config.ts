import { Block } from 'payload'

export const CaseStudies: Block = {
  slug: 'case-studies',
  labels: { singular: 'Case Studies (Home)', plural: 'Case Studies (Home)' },
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
          defaultValue: 'Client Case Studies',
          admin: {
            description: 'Main heading for the case studies section',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
          required: true,
          defaultValue: 'Check How We Have Helped Our Clients',
          admin: {
            description: 'Descriptive text below the main heading',
          },
        },
      ],
    },

    // Case Studies Content Type Selection
    {
      name: 'contentType',
      type: 'select',
      label: 'Content Type',
      options: [
        { label: 'Manual Case Studies', value: 'manual' },
        { label: 'Blog Posts (Future)', value: 'posts' },
        { label: 'Mixed Content', value: 'mixed' },
      ],
      defaultValue: 'manual',
      admin: {
        description: 'Choose how to populate case studies content',
      },
    },

    // Manual Case Studies Configuration
    {
      name: 'caseStudies',
      type: 'array',
      label: 'Manual Case Studies',
      maxRows: 12,
      admin: {
        condition: (_, siblingData) =>
          siblingData.contentType === 'manual' || siblingData.contentType === 'mixed',
        description: 'Manually created case study entries',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Case Study Image',
          required: true,
          admin: {
            description:
              'Featured image for the case study (recommended: 224x93px or similar aspect ratio)',
          },
        },
        {
          name: 'tag',
          type: 'text',
          label: 'Category Tag',
          defaultValue: 'Case Study',
          admin: {
            description: 'Category or type label (e.g., "Case Study", "Success Story")',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Case Study Title',
          required: true,
          admin: {
            description: 'Title of the case study',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Case Study Description',
          required: true,
          admin: {
            description: 'Brief description or excerpt of the case study',
          },
        },
        {
          name: 'linkType',
          type: 'select',
          label: 'Link Type',
          options: [
            { label: 'External URL', value: 'external' },
            { label: 'Internal Page', value: 'internal' },
            { label: 'No Link', value: 'none' },
          ],
          defaultValue: 'external',
        },
        {
          name: 'externalUrl',
          type: 'text',
          label: 'External URL',
          admin: {
            condition: (_, siblingData) => siblingData.linkType === 'external',
            description: 'External link to case study',
          },
        },
        {
          name: 'internalPage',
          type: 'relationship',
          relationTo: 'pages',
          label: 'Internal Page',
          admin: {
            condition: (_, siblingData) => siblingData.linkType === 'internal',
            description: 'Link to internal page',
          },
        },
        {
          name: 'featured',
          type: 'checkbox',
          label: 'Featured Case Study',
          defaultValue: false,
          admin: {
            description: 'Highlight this case study with special styling',
          },
        },
      ],
      defaultValue: [
        {
          tag: 'Case Study',
          title: 'Howard University – School of Social Work | Case History',
          description:
            "WCG conducted a review of the E. Franklin Frazier Center's systems, and then provided recommendations and developed a strategic plan.",
          linkType: 'external',
          externalUrl: '#',
          featured: false,
        },
        {
          tag: 'Case Study',
          title: 'Howard University – School of Social Work | Case History',
          description:
            "WCG conducted a review of the E. Franklin Frazier Center's systems, and then provided recommendations and developed a strategic plan.",
          linkType: 'external',
          externalUrl: '#',
          featured: false,
        },
        {
          tag: 'Case Study',
          title: 'Howard University – School of Social Work | Case History',
          description:
            "WCG conducted a review of the E. Franklin Frazier Center's systems, and then provided recommendations and developed a strategic plan.",
          linkType: 'external',
          externalUrl: '#',
          featured: true,
        },
      ],
    },

    // Future: Blog Posts Integration (Placeholder)
    {
      name: 'postSettings',
      type: 'group',
      label: 'Blog Posts Settings (Future)',
      admin: {
        condition: (_, siblingData) =>
          siblingData.contentType === 'posts' || siblingData.contentType === 'mixed',
        description: 'Settings for when blog posts collection is available',
      },
      fields: [
        {
          name: 'maxPosts',
          type: 'number',
          label: 'Maximum Posts to Show',
          defaultValue: 6,
          min: 1,
          max: 12,
        },
        {
          name: 'categoryFilter',
          type: 'text',
          label: 'Category Filter',
          admin: {
            description: 'Filter posts by category (future implementation)',
          },
        },
        {
          name: 'sortBy',
          type: 'select',
          label: 'Sort Posts By',
          options: [
            { label: 'Newest First', value: 'newest' },
            { label: 'Oldest First', value: 'oldest' },
            { label: 'Featured First', value: 'featured' },
          ],
          defaultValue: 'newest',
        },
      ],
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
            { label: 'Light Background', value: 'background' },
            { label: 'White', value: 'white' },
            { label: 'Gray', value: 'gray-50' },
            { label: 'Dark', value: 'foreground' },
          ],
          defaultValue: 'background',
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
          defaultValue: '3',
          admin: {
            description: 'Number of columns for case studies on desktop',
          },
        },
        {
          name: 'cardLayout',
          type: 'select',
          label: 'Card Layout Style',
          options: [
            { label: 'Standard Cards', value: 'standard' },
            { label: 'Compact Cards', value: 'compact' },
            { label: 'Featured Layout', value: 'featured' },
          ],
          defaultValue: 'standard',
          admin: {
            description: 'Visual style for case study cards',
          },
        },
        {
          name: 'showViewAll',
          type: 'checkbox',
          label: 'Show "View All" Button',
          defaultValue: true,
          admin: {
            description: 'Display a button to view all case studies',
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
          name: 'imageBackground',
          type: 'select',
          label: 'Card Image Background',
          options: [
            { label: 'Primary Color', value: 'primary' },
            { label: 'Secondary Color', value: 'secondary' },
            { label: 'Orange Brand', value: 'wils_orang' },
            { label: 'White', value: 'white' },
            { label: 'Transparent', value: 'transparent' },
          ],
          defaultValue: 'primary',
          admin: {
            description: 'Background color for card image sections',
          },
        },
        {
          name: 'tagColor',
          type: 'select',
          label: 'Tag Color',
          options: [
            { label: 'Orange Brand', value: 'wils_orang' },
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Black', value: 'black' },
          ],
          defaultValue: 'wils_orang',
          admin: {
            description: 'Color for category tags',
          },
        },
        {
          name: 'cardRadius',
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
            description: 'Rounded corners for case study cards',
          },
        },
      ],
    },

    // Call-to-Action Configuration
    {
      name: 'cta',
      type: 'group',
      label: 'Call-to-Action Button',
      admin: {
        condition: (_, siblingData) => siblingData.layout?.showViewAll,
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'View All Case Studies',
          admin: {
            description: 'Text displayed on the CTA button',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          defaultValue: '/case-studies',
          admin: {
            description: 'URL for the CTA button',
          },
        },
        {
          name: 'style',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'primary',
        },
      ],
    },
  ],
}
