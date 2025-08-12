'use client'

import Image from 'next/image'
import { useState } from 'react'
import ServiceCard from './ServiceCard'
import type { Media } from '@/payload-types'

interface ServiceItem {
  title: string
  description?: string
  'icon-active': Media | number
  'icon-normal': Media | number
  backgroundIcon: Media | number
  lk?: {
    enabled: boolean
    link?: {
      type?: 'reference' | 'custom' | null
      newTab?: boolean | null
      reference?: { relationTo: string; value: string | number } | null
      url?: string | null
      label: string
      appearance?: 'default' | 'outline' | null
    }
  }
}

interface ServiceTab {
  label: string
  icon: Media | number
  activeIcon: Media | number
  services: ServiceItem[]
}

interface ServicesTabsClientProps {
  sectionHeader?: {
    enabled: boolean
    title?: string
    description?: string
  }
  sctabs: ServiceTab[]
  emptyState: {
    title: string
    description?: string
    icon?: Media | number
  }
  layout: {
    bgColor: string
    ctnerSpacing: string
    tabsLayout: string
    gridCols: string
  }
}

type Props = {
  className?: string
} & ServicesTabsClientProps

export default function ServicesTabsClient(props: Props) {
  const { sectionHeader, sctabs: serviceTabs, emptyState, layout } = props
  const [activeIndex, setActiveIndex] = useState(0)

  // Helper function to get media URL
  const getMediaUrl = (media: Media | number | undefined): string => {
    if (!media) return ''
    if (typeof media === 'number') return '' // Handle number IDs if needed
    return media.url || ''
  }

  // Helper function to get media alt text
  const getMediaAlt = (media: Media | number | undefined): string => {
    if (!media) return ''
    if (typeof media === 'number') return ''
    return media.alt || ''
  }

  // Map service data to match ServiceCard expectations
  const mapServiceData = (service: ServiceItem) => ({
    title: service.title,
    description: service.description,
    icon: getMediaUrl(service['icon-normal']),
    activeIcon: getMediaUrl(service['icon-active']),
    backgroundIcon: getMediaUrl(service.backgroundIcon),
    link: service.lk?.enabled
      ? {
          enabled: true,
          url: service.lk.link?.url || '#',
          openInNewTab: service.lk.link?.newTab || false,
        }
      : { enabled: false },
  })

  // Ensure we have valid data
  if (!serviceTabs || serviceTabs.length === 0) {
    return (
      <section className={`${layout.bgColor} ${layout.ctnerSpacing}`}>
        <div className="container mx-auto md:px-0 px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">No Service Categories Available</h2>
          <p className="text-gray-600">Please add service categories to display content.</p>
        </div>
      </section>
    )
  }

  const activeTab = serviceTabs[activeIndex]
  const hasServices = activeTab && activeTab.services && activeTab.services.length > 0

  return (
    <section className={`${layout.bgColor} ${layout.ctnerSpacing}`}>
      <div className="container mx-auto md:px-0 px-4">
        {/* Section Header */}
        {sectionHeader?.enabled && (
          <div className="text-center mb-12">
            {sectionHeader.title && (
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">{sectionHeader.title}</h2>
            )}
            {sectionHeader.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{sectionHeader.description}</p>
            )}
          </div>
        )}

        {/* Main Content */}
        <div className="flex md:flex-row flex-col gap-6 items-start">
          {/* Sidebar - Service Tabs */}
          <div className={`md:w-[30%] grid md:grid-cols-1 ${layout.tabsLayout} md:gap-0 gap-2`}>
            {serviceTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full flex items-center md:gap-3 gap-0.5 md:py-9 py-2 md:px-0 px-0.5 md:rounded-none rounded-[10px] text-left transition-all duration-200 md:text-[26px] md:leading-normal text-lg leading-5 text-[#9D9D9D] font-normal md:border-b md:border-black/15 md:border-0 border border-[#DDEAF9] group last:md:border-b-0 ${
                  activeIndex === index ? 'font-semibold text-wils_orang' : 'cursor-pointer'
                }`}
              >
                <Image
                  src={getMediaUrl(activeIndex === index ? tab.activeIcon : tab.icon)}
                  alt={getMediaAlt(activeIndex === index ? tab.activeIcon : tab.icon) || tab.label}
                  width={70}
                  height={70}
                  className={`${
                    activeIndex === index ? 'bg-[#FDF0ED]' : 'bg-white'
                  } rounded-xl group-hover transition-colors duration-200 md:h-[70px] md:w-[70px] h-[40px] w-[40px]`}
                />
                <span className="transition-colors duration-200">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div
            className={`md:w-[70%] md:p-8 grid ${layout.gridCols} gap-4 md:shadow-[0px_0px_0px_1px] shadow-[#DDEAF9] md:rounded-[20px]`}
          >
            {hasServices ? (
              activeTab.services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  data={mapServiceData(service)}
                  isLast={idx === activeTab.services.length - 1}
                />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 px-6 text-center">
                {emptyState.icon && (
                  <div className="mb-6">
                    <Image
                      src={getMediaUrl(emptyState.icon)}
                      alt={getMediaAlt(emptyState.icon) || 'No services'}
                      width={80}
                      height={80}
                      className="opacity-50"
                    />
                  </div>
                )}
                <h3 className="text-xl font-normal text-slate-800 mb-3">{emptyState.title}</h3>
                {emptyState.description && (
                  <p className="text-gray-600 max-w-md">{emptyState.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
