import { GlobalConfig } from 'payload'

export const ContactFormSettings: GlobalConfig = {
  slug: 'contact-form-settings',
  label: 'Contact / Newsletter Settings',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      defaultValue: 'Want to Make Your Own Success Story?',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      defaultValue: "Join the many of happy clients we've served in the past, contact us today!",
    },
    {
      name: 'quote',
      label: 'Quote Configuration',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'showQuote',
          label: 'Show Quote',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'quote',
          label: 'Quote',
          type: 'text',
          required: true,
          defaultValue:
            '“We’re here to help you every step of the way. Whether you’re just starting out or looking to scale, we’ve got you covered.”',
          admin: {
            condition: (_, siblingData) => siblingData.showQuote,
          },
        },
        {
          name: 'stars',
          label: 'Stars',
          type: 'number',
          max: 5,
          min: 1,
          required: true,
          defaultValue: 5,
          admin: {
            condition: (_, siblingData) => siblingData.showQuote,
          },
        },
        {
          name: 'author',
          label: 'Author',
          type: 'text',
          required: true,
          defaultValue: 'John Doe',
          admin: {
            condition: (_, siblingData) => siblingData.showQuote,
          },
        },
      ],
    },
  ],
}
