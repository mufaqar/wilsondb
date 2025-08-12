import { FeaturedResourcesFields } from '@/config/FeaturedReseources'
import { GlobalConfig } from 'payload'

export const FeaturedResourcesDefaults: GlobalConfig = {
  slug: 'resources-defaults',
  label: 'Resources Defaults',
  fields: [
    {
      name: 'resourcesConfig',
      type: 'group',
      label: 'Resources Configuration',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          defaultValue: 'Resources',
          required: true,
        },
      ],
    },

    ...FeaturedResourcesFields(false),
  ],
}
