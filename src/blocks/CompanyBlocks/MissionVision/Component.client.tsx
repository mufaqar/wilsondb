'use client'

import Image from 'next/image'
import { useState } from 'react'

import type { Media, Page } from '@/payload-types'

type MissionVisionBlockProps = Extract<Page['layout'][0], { blockType: 'mission-vision' }>

export default function MissionVisionClient(props: MissionVisionBlockProps) {
  const { tabs = [], id } = props
  const [activeIndex, setActiveIndex] = useState(0)

  const getMediaUrl = (media: string | number | Media | undefined) => {
    if (typeof media === 'string') return media
    if (typeof media === 'number') return '' // Handle ID case
    return media?.url || ''
  }

  const getMediaAlt = (media: string | number | Media | undefined) => {
    if (typeof media === 'string') return ''
    if (typeof media === 'number') return '' // Handle ID case
    return media?.alt || ''
  }

  if (!tabs?.length) return null

  return (
    <section className="md:py-24 py-16 md:px-0 px-4" id={id || 'mission'}>
      <div className="container mx-auto md:px-0 px-4 flex md:flex-col flex-col gap-6 items-center">
        {/* Sidebar */}
        <div className="grid md:grid-cols-2 grid-cols-2 md:gap-14 gap-2 justify-between items-center mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full flex items-center md:gap-3 gap-0.5 md:py-9 py-2 md:px-0 px-0.5 text-left transition md:text-6xl md:leading-normal text-xl leading-5 text-[#9D9D9D] font-normal group ${
                activeIndex === index
                  ? 'font-normal text-black'
                  : 'hover:font-normal hover:text-black'
              }`}
            >
              <Image
                src={getMediaUrl(activeIndex === index ? tab.activeIcon : tab.icon)}
                alt={
                  getMediaAlt(activeIndex === index ? tab.activeIcon : tab.icon) || tab.label || ''
                }
                width={70}
                height={70}
                className={`rounded-xl md:h-[70px] md:w-[70px] h-[40px] w-[40px]`}
              />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-[1070px] mx-auto rounded-[20px] py-11 px-4 sm:px-7 lg:px-9 mb-5 shadow-[0px_0px_0px_3px] shadow-[#28A0CF1F]">
          <p className="md:text-2xl text-xl font-medium text-black text-center">
            {tabs[activeIndex]?.description}
          </p>
        </div>
      </div>
    </section>
  )
}
