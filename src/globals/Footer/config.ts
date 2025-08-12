import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Footer Logo',
      required: true,
      admin: {
        description: 'Logo displayed in the footer. Recommended size: 327x64px',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Company Description',
      required: true,
      defaultValue:
        'Wilson Consulting Group (WCG) is an innovative global cybersecurity consulting firm headquartered in Washington D.C., with a European office in London, England.',
      admin: {
        description: 'Brief description of the company displayed below the logo',
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'iconLabel',
          label: 'Social Platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Social Media URL',
          required: true,
        },
      ],
      defaultValue: [
        { iconLabel: 'facebook', url: 'https://facebook.com' },
        { iconLabel: 'instagram', url: 'https://instagram.com' },
        { iconLabel: 'youtube', url: 'https://youtube.com' },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Footer/RowLabel#RowLabel',
        },
        description: 'Social media links displayed in the footer',
      },
    },
    {
      name: 'quickLinks',
      type: 'array',
      label: 'Quick Links',
      fields: [link({ appearances: false })],
      defaultValue: [
        { link: { type: 'custom', label: 'About us', url: '/about' } },
        { link: { type: 'custom', label: 'Our Services', url: '/services' } },
        { link: { type: 'custom', label: 'Cyber Security', url: '/cyber-security' } },
        { link: { type: 'custom', label: 'Industries we Serve', url: '/industries' } },
        { link: { type: 'custom', label: 'Career', url: '/careers' } },
        { link: { type: 'custom', label: 'Contact', url: '/contact' } },
        { link: { type: 'custom', label: 'Privacy Policy', url: '/privacy-policy' } },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Footer/RowLabel#RowLabel',
        },
        description: 'Navigation links in the quick links section',
      },
    },
    {
      name: 'services',
      type: 'array',
      label: 'Service Links',
      fields: [link({ appearances: false })],
      defaultValue: [
        {
          link: { type: 'custom', label: 'Cyber Security Assessment', url: '/services/assessment' },
        },
        {
          link: {
            type: 'custom',
            label: 'Risk Management and Assessment',
            url: '/services/risk-management',
          },
        },
        { link: { type: 'custom', label: 'Cloud Services', url: '/services/cloud' } },
        {
          link: {
            type: 'custom',
            label: 'Cybersecurity Maturity Model Certification (CMMC)',
            url: '/services/cmmc',
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Footer/RowLabel#RowLabel',
        },
        description: 'Service-related links in the footer',
      },
    },
    {
      name: 'contactInfo',
      type: 'array',
      label: 'Contact Information',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
            { label: 'Address', value: 'address' },
          ],
          required: true,
        },
        {
          name: 'iconLabel',
          type: 'text',
          label: 'Icon Type',
          defaultValue: 'email',
          admin: {
            description: 'Used to determine which icon to display (email, phone, address)',
          },
        },
        {
          name: 'text',
          type: 'text',
          label: 'Display Text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link URL',
          admin: {
            placeholder: 'mailto:email@example.com or tel:+1234567890',
            description: 'Optional clickable link (use mailto: for emails, tel: for phones)',
          },
        },
      ],
      defaultValue: [
        {
          type: 'email',
          iconLabel: 'email',
          text: 'sales@wilsoncgrp.com',
          url: 'mailto:sales@wilsoncgrp.com',
        },
        {
          type: 'address',
          iconLabel: 'address',
          text: '800 Maine Avenue SW, Suite 200, Washington DC 20024',
          url: 'https://maps.google.com/?q=800+Maine+Avenue+SW+Suite+200+Washington+DC+20024',
        },
        {
          type: 'phone',
          iconLabel: 'phone',
          text: '1.866.780.1655',
          url: 'tel:+18667801655',
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Footer/RowLabel#RowLabel',
        },
        description: 'Contact information displayed in the footer',
      },
    },
    {
      name: 'bottomLinks',
      type: 'array',
      label: 'Bottom Footer Links',
      fields: [link({ appearances: false })],
      defaultValue: [
        { link: { type: 'custom', label: 'Terms of Service', url: '/terms' } },
        { link: { type: 'custom', label: 'Privacy Policy', url: '/privacy' } },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Footer/RowLabel#RowLabel',
        },
        description: 'Links displayed in the bottom footer area',
      },
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Notice',
      required: true,
      defaultValue: '© {year} Wilson Consulting Group. All Rights Reserved.',
      admin: {
        description: 'Copyright text. Use {year} to automatically insert the current year.',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
