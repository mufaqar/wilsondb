'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import type { Media, Page } from '@/payload-types'

type ServiceAboutBlockProps = Extract<Page['layout'][0], { blockType: 'service-about' }>

const ServiceAboutClient: React.FC<ServiceAboutBlockProps> = ({ heading, content, steps }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const getMediaUrl = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    if (typeof media === 'number') return '' // Handle ID case
    return media.url || ''
  }

  const getMediaAlt = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    if (typeof media === 'number') return '' // Handle ID case
    return media.alt || ''
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-12">
          {heading?.text}
        </h2>
        <div className="flex md:flex-row flex-col items-center justify-between gap-5 mb-16">
          <div className="md:w-2/5 w-full">
            <Image
              src={getMediaUrl(content?.image?.media)}
              alt={getMediaAlt(content?.image?.media)}
              width={520}
              height={440}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-3/5 w-full space-y-5">
            {content?.paragraphs?.map((paragraph, index) => (
              <p key={paragraph.id || index} className="md:text-xl text-lg font-normal text-black">
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps?.map((step, index) => (
            <div
              key={step.id || index}
              className={`
                rounded-[20px] px-8 py-9 w-full h-full transition-all duration-300 cursor-pointer group
                bg-white shadow-[0px_0px_0px_1px] shadow-[#DDEAF9] hover:shadow-[0px_3px_0px_0px] hover:shadow-wils_orang hover:bg-background
                ${hoveredStep === index ? 'transform scale-105' : 'transform scale-100'}
              `}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="mb-6 relative overflow-hidden">
                {/* Default Icon (Unhovered) */}
                <Image
                  src={getMediaUrl(step['icon-unhovered'])}
                  alt={getMediaAlt(step['icon-unhovered'])}
                  width={80}
                  height={80}
                  className={`
                    md:w-[80px] md:h-[80px] w-[60px] h-[60px] transition-all duration-300
                    ${hoveredStep === index ? 'opacity-0' : 'opacity-100'}
                  `}
                />

                {/* Hover Icon */}
                <Image
                  src={getMediaUrl(step['icon-hovered'])}
                  alt={getMediaAlt(step['icon-hovered'])}
                  width={80}
                  height={80}
                  className={`
                    absolute top-0 left-0 md:w-[80px] md:h-[80px] w-[60px] h-[60px] transition-all duration-300
                    ${hoveredStep === index ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              </div>

              <h3
                className={`
                md:text-3xl text-xl font-semibold mb-2 transition-colors duration-300
                ${hoveredStep === index ? 'text-wils_orang' : 'text-black'}
              `}
              >
                {step.title}
              </h3>

              <p
                className={`
                md:text-xl text-lg font-normal transition-colors duration-300
                ${hoveredStep === index ? 'text-black' : 'text-gray-600'}
              `}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAboutClient
