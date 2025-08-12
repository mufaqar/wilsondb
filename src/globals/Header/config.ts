import type { GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'
import { link } from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    // Logo Configuration
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Logo image for the header',
          },
        },
      ],
    },

    // Navigation Configuration
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Items',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: {
            description: 'Display name for the navigation item',
          },
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          admin: {
            description: 'URL for the navigation item (use # for items with submenu only)',
          },
        },

        {
          name: 'useMegaMenu',
          type: 'checkbox',
          label: 'Use Mega Menu',
          defaultValue: false,
          admin: {
            description: 'Check to enable mega menu for this navigation item',
          },
        },
        {
          name: 'megaMenu',
          type: 'group',
          label: 'Mega Menu',
          admin: {
            description: 'Mega menu items that appear on hover/click',
            condition: (_, siblingData) => siblingData.useMegaMenu,
          },
          fields: [
            {
              name: 'sections',
              type: 'array',
              label: 'Mega Menu Sections',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Title for the menu section',
                  },
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Menu Items',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                      admin: {
                        description: 'Display name for the menu item',
                      },
                    },
                    link({ appearances: false, overrides: { required: true } }),
                  ],
                },
              ],
            },
          ],
        },
      ],
      maxRows: 8,
      defaultValue: [
        {
          name: 'Home',
          href: '/',
        },
        {
          name: 'About Us',
          href: '/',
          useMegaMenu: true,
          megaMenu: {
            sections: [
              {
                title: 'About Us',
                items: [
                  { name: 'Our Company', link: { url: '/our-company' } },
                  { name: 'Career', link: { url: '/career' } },
                ],
              },
              {
                title: 'Resources',
                items: [
                  { name: 'Resource Center', link: { url: '/resource-center' } },
                  { name: 'Career', link: { url: '/career' } },
                ],
              },
              {
                title: 'Blogs',
                items: [
                  { name: 'Covid-19 Facts', link: { url: '#' } },
                  { name: 'Black Lives Matter', link: { url: '#' } },
                ],
              },
            ],
          },
        },
        {
          name: 'Services',
          href: '/services',
          useMegaMenu: true,
          megaMenu: {
            sections: [
              {
                title: 'IT Governance Services',
                items: [
                  { name: 'IT Change Management', link: { url: '/services/it-change-management' } },
                  { name: 'IT Governance', link: { url: '/services/it-governance' } },
                  { name: 'Project Management', link: { url: '/services/project-management' } },
                ],
              },
              {
                title: 'Risk Management Services',
                items: [
                  {
                    name: 'Application Security Assessment',
                    link: { url: '/services/application-security-assessment' },
                  },
                  { name: 'Comprehensive Security Assessment', link: { url: '#' } },
                  { name: 'Penetration Testing', link: { url: '/services/penetration-testing' } },
                  { name: 'Security Assessment and Authorization (SA&A)', link: { url: '#' } },
                  { name: 'Network and Security Professional Development', link: { url: '#' } },
                  {
                    name: 'Security Plans, Policies and Procedures Development',
                    link: { url: '/services/security-policies-and-procedures-development' },
                  },
                  {
                    name: 'Vulnerability Assessment',
                    link: { url: '/services/vulnerability-assessment' },
                  },
                ],
              },
              {
                title: 'Compliance Services',
                items: [
                  {
                    name: 'Federal Information Security Mgt Act (FISMA) Assessment',
                    link: { url: '#' },
                  },
                  { name: 'Gramm-Leach Bliley Act (GLBA)', link: { url: '#' } },
                  {
                    name: 'Health Insurance Portability and Accountability Act (HIPAA)',
                    link: { url: '#' },
                  },
                  {
                    name: 'General Data Protection Regulation (GDPR) Compliance',
                    link: { url: '#' },
                  },
                  { name: 'Privacy Assessment', link: { url: '#' } },
                  { name: 'System and Organization Controls (SOC) Audit', link: { url: '#' } },
                  { name: 'California Consumer Privacy Act (CCPA)', link: { url: '#' } },
                  { name: 'Cybersecurity Maturity Model Certification (CMMC)', link: { url: '#' } },
                  { name: 'FedRAMP Advisory and Assessment Services', link: { url: '#' } },
                ],
              },
            ],
          },
        },
        {
          name: 'Industries We Serve',
          href: '/',
          useMegaMenu: true,
          megaMenu: {
            sections: [
              {
                title: 'Industries We Serve',
                items: [
                  { name: 'Government and Public Services', link: { url: '#' } },
                  { name: 'Healthcare', link: { url: '#' } },
                  { name: 'Financial Institutions', link: { url: '#' } },
                  { name: 'Power and Utilities', link: { url: '#' } },
                  { name: 'Oil and Gas', link: { url: '#' } },
                  { name: 'Banking and Capital Markets', link: { url: '#' } },
                  { name: 'Cyber security Assessment Case History', link: { url: '#' } },
                ],
              },
            ],
          },
        },
        {
          name: 'Career',
          href: '/career',
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Header/RowLabel#RowLabel',
        },
      },
    },

    // Search Button Configuration
    {
      name: 'searchButton',
      type: 'group',
      label: 'Search Button',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide the search button',
          },
        },
        {
          name: 'ariaLabel',
          type: 'text',
          defaultValue: 'Search',
          admin: {
            description: 'Accessibility label for the search button',
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
      ],
    },

    // Contact Button Configuration
    {
      name: 'contactButton',
      type: 'group',
      label: 'Contact Button',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide the contact button',
          },
        },
        {
          name: 'text',
          type: 'text',
          required: true,
          defaultValue: 'Contact Us',
          admin: {
            description: 'Text displayed on the contact button',
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          defaultValue: '/contact',
          admin: {
            description: 'URL for the contact button',
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
      ],
    },

    // Mobile Menu Configuration
    {
      name: 'mobileMenu',
      type: 'group',
      label: 'Mobile Menu Settings',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Enable mobile hamburger menu',
          },
        },
        {
          name: 'closeOnItemClick',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Close mobile menu when a navigation item is clicked',
            condition: (_, siblingData) => siblingData.enabled,
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
