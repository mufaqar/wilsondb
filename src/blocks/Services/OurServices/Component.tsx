import type { Page } from '@/payload-types'
import ServicesTabsClient from './Component.client'

// Extract the correct types from the generated Payload types
type ServicesTabsBlockProps = Extract<Page['layout'][0], { blockType: 'services-tabs' }> & {
  id?: string
}

export default function ServicesTabs(props: ServicesTabsBlockProps) {
  const {
    sectionHeader,
    sctabs = [],
    emptyState = {
      title: 'No Services Available',
      description:
        'We are currently updating our services in this category. Please check back soon or contact us for more information.',
    },
    layout = {
      bgColor: 'bg-white',
      ctnerSpacing: 'py-16',
      tabsLayout: 'grid-cols-2',
      gridCols: 'grid-cols-1 md:grid-cols-2',
    },
  } = props

  return (
    <ServicesTabsClient
      sectionHeader={sectionHeader}
      sctabs={sctabs}
      emptyState={emptyState}
      layout={layout}
    />
  )
}
