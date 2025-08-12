export const footerSeed = {
  logo: '', // Will be populated with uploaded logo ID
  description:
    'Wilson Consulting Group (WCG) is an innovative global cybersecurity consulting firm headquartered in Washington D.C., with a European office in London, England.',

  socialLinks: [
    {
      iconLabel: 'facebook' as const,
      url: 'https://www.facebook.com/wilsonconsultinggroup',
    },
    {
      iconLabel: 'linkedin' as const,
      url: 'https://www.linkedin.com/company/wilson-consulting-group',
    },
    {
      iconLabel: 'twitter' as const,
      url: 'https://twitter.com/wilsoncgrp',
    },
  ],

  quickLinks: [
    { link: { type: 'custom' as const, label: 'About us', url: '/about' } },
    { link: { type: 'custom' as const, label: 'Our Services', url: '/services' } },
    { link: { type: 'custom' as const, label: 'Cyber Security', url: '/cybersecurity' } },
    { link: { type: 'custom' as const, label: 'Industries we Serve', url: '/industries' } },
    { link: { type: 'custom' as const, label: 'Career', url: '/careers' } },
    { link: { type: 'custom' as const, label: 'Contact', url: '/contact' } },
    { link: { type: 'custom' as const, label: 'Privacy Policy', url: '/privacy' } },
  ],

  services: [
    {
      link: {
        type: 'custom' as const,
        label: 'Cyber Security Assessment',
        url: '/services/cybersecurity-assessment',
      },
    },
    {
      link: {
        type: 'custom' as const,
        label: 'Risk Management and Assessment',
        url: '/services/risk-management',
      },
    },
    { link: { type: 'custom' as const, label: 'Cloud Services', url: '/services/cloud' } },
    {
      link: {
        type: 'custom' as const,
        label: 'Cybersecurity Maturity Model Certification (CMMC)',
        url: '/services/cmmc',
      },
    },
  ],

  contactInfo: [
    {
      type: 'email' as const,
      iconLabel: 'email',
      text: 'sales@wilsoncgrp.com',
      url: 'mailto:sales@wilsoncgrp.com',
    },
    {
      type: 'address' as const,
      iconLabel: 'address',
      text: '800 Maine Avenue SW, Suite 200, Washington DC 20024',
      url: 'https://maps.google.com/?q=800+Maine+Avenue+SW+Suite+200+Washington+DC+20024',
    },
    {
      type: 'phone' as const,
      iconLabel: 'phone',
      text: '1.866.780.1655',
      url: 'tel:+18667801655',
    },
  ],

  bottomLinks: [
    { link: { type: 'custom' as const, label: 'Terms of Service', url: '/terms' } },
    { link: { type: 'custom' as const, label: 'Privacy Policy', url: '/privacy' } },
  ],

  copyrightText: '© {year} Wilson Consulting Group. All Rights Reserved.',
}
