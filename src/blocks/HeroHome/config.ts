import type { Block } from 'payload'

export const HeroHome: Block = {
  slug: 'hero-home',
  labels: { singular: 'Hero Section (Home)', plural: 'Hero Section (Home)' },
  fields: [
    // Certification Badge Section
    {
      name: 'certificationBadge',
      type: 'group',
      label: 'Certification Badge',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Certification Icon',
          required: true,
        },
        {
          name: 'text',
          type: 'text',
          label: 'Certification Text',
          required: true,
          defaultValue: 'CERTIFIED FEDRAMP & STATERAMP',
        },
      ],
    },

    // Main Content Section
    {
      name: 'headline',
      type: 'textarea',
      label: 'Main Headline',
      required: true,
      defaultValue: 'Fast-Track Your\nFedRAMP &\nStateRAMP',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      defaultValue:
        'Achieve or maintain your FedRAMP & StateRAMP authorization with our Advisory and Assessment Services.',
    },

    // Call-to-Action Buttons
    {
      name: 'buttons',
      type: 'array',
      label: 'Call-to-Action Buttons',
      maxRows: 2,
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
    },

    // Hero Images Section
    {
      name: 'images',
      type: 'group',
      label: 'Hero Images',
      fields: [
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Hero Image',
          required: true,
        },
        {
          name: 'overlayImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Overlay/Chart Image',
          required: false,
        },
      ],
    },

    // Compliance Experts Section
    {
      name: 'complianceSection',
      type: 'group',
      label: 'Compliance Experts Section',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show Compliance Experts Section',
          defaultValue: true,
        },
        {
          name: 'sectionLabel',
          type: 'text',
          label: 'Section Label',
          defaultValue: 'COMPLIANCE EXPERTS',
          admin: {
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
          defaultValue: 'Trusted By Government And Industry Leaders',
          admin: {
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
          required: true,
          defaultValue:
            'Recognized for our expertise in regulatory compliance, we help organizations achieve FeqRAMP and StateRAMP authorizations with integrity, insight, and proven results.',
          admin: {
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
      ],
    },
  ],
}
