'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import type { Media } from '@/payload-types'
import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'

// Interface for the block data
interface OurServicesBlockProps {
  header: {
    title: string
    description: string
  }
  services: Array<{
    'icon-normal': string | Media
    'icon-hovered': string | Media
    title: string
    description: string
    highlighted?: boolean
  }>
  layout: {
    bgColor: 'white' | 'background' | 'gray-50'
    columns: '2' | '3' | '4'
    specialLayout: boolean
  }
  style: {
    padding: 'small' | 'medium' | 'large'
    radius: 'none' | 'small' | 'medium' | 'large'
    iconSize: 'small' | 'medium' | 'large'
  }
}

type Props = {
  className?: string
} & OurServicesBlockProps

export default function OurServices(props: Props) {
  const { header, services, layout, style, className } = props
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Helper function to get media URL
  const getMediaUrl = (media: string | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    return media.url || ''
  }

  // Helper function to get media alt text
  const getMediaAlt = (media: string | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    return media.alt || ''
  }

  // Style mappings
  const backgroundStyles = {
    white: 'bg-white',
    background: 'bg-background',
    'gray-50': 'bg-gray-50',
  }

  const paddingStyles = {
    small: 'px-4 pt-8 pb-10',
    medium: 'px-6 pt-12 pb-14',
    large: 'px-8 pt-14 pb-16',
  }

  const radiusStyles = {
    none: 'rounded-none',
    small: 'rounded-md',
    medium: 'rounded-lg',
    large: 'rounded-[20px]',
  }

  const iconSizes = {
    small: { width: 50, height: 50 },
    medium: { width: 70, height: 70 },
    large: { width: 90, height: 90 },
  }

  const gridColumnStyles = {
    '2': 'sm:grid-cols-2 lg:grid-cols-2',
    '3': 'sm:grid-cols-2 lg:grid-cols-3',
    '4': 'sm:grid-cols-2 lg:grid-cols-4',
  }

  const specialLayoutClass = layout.specialLayout ? 'first:md:col-span-2 last:md:col-span-2' : ''

  const getDelay = useAutoDelay()

  return (
    <section className={`${backgroundStyles[layout.bgColor]} py-16 ${className || ''}`}>
      <div className="container mx-auto md:px-5 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <AnimateOnScroll type="fade-up" delay={getDelay()}>
            <h2 className="text-3xl md:text-6xl font-medium text-black">{header.title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll type="fade-up" delay={getDelay()}>
            <p className="text-black text-base md:text-lg font-medium max-w-2xl mx-auto mt-2">
              {header.description}
            </p>
          </AnimateOnScroll>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 ${gridColumnStyles[layout.columns]} gap-6`}>
          {services.map((service, index) => (
            <AnimateOnScroll key={index} type="fade-up" delay={getDelay()}>
              <div
                className={`
                ${radiusStyles[style.radius]} 
                ${paddingStyles[style.padding]} 
                w-full max-h-[328px] h-full 
                ${specialLayoutClass}
                cursor-pointer transition-all duration-300 ease-in-out
                transform hover:scale-105 hover:-translate-y-2
                ${
                  service.highlighted
                    ? hoveredIndex === index
                      ? 'bg-background shadow-[0px_8px_25px_0px] shadow-wils_orang/30'
                      : 'bg-background shadow-[0px_3px_0px_0px] shadow-wils_orang'
                    : hoveredIndex === index
                      ? 'bg-background/30 shadow-[0px_3px_0px_0px] shadow-wils_orang'
                      : 'bg-white shadow-[0px_0px_0px_1px] shadow-[#DDEAF9]'
                }
              `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Service Icon */}
                <div className="mb-6 relative">
                  <div className="transition-all duration-300 ease-in-out">
                    <Image
                      src={getMediaUrl(
                        hoveredIndex === index ? service['icon-hovered'] : service['icon-normal'],
                      )}
                      alt={getMediaAlt(
                        hoveredIndex === index ? service['icon-hovered'] : service['icon-normal'],
                      )}
                      width={iconSizes[style.iconSize].width}
                      height={iconSizes[style.iconSize].height}
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                </div>

                {/* Service Content */}
                <h3
                  className={`md:text-2xl text-xl font-semibold mb-2 transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-wils_orang' : 'text-black'
                  }`}
                >
                  {service.title}
                </h3>
                <p className="md:text-lg text-base font-normal text-black transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
