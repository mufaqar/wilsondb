'use client'

import type { Media, Page } from '@/payload-types'
import Image from 'next/image'

type ServicesRecommendationsBlockProps = Extract<Page['layout'][0], { blockType: 'services-more' }>

export default function ServicesRecommendationsClient({
  title,
  cards,
}: ServicesRecommendationsBlockProps) {
  if (!cards) return null

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
    <section className="md:py-20 py-16">
      <div className="max-w-[587px] mx-auto md:px-0 px-4 mb-9">
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center capitalize">
          {title}
        </h2>
      </div>
      <div className="container mx-auto md:px-0 px-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-[20px] md:px-8 px-5 pt-8 pb-16 w-full max-h-[328px] h-full`}
          >
            <div className="mb-6">
              <Image
                src={getMediaUrl(item.icon)}
                alt={getMediaAlt(item.icon)}
                width={52}
                height={52}
                className="md:w-[52px] md:h-[52px] w-[60px] h-[50px]"
              />
            </div>
            <h3 className="md:text-[33px] md:leading-[33px] text-[28x] leading-[28x] font-normal mb-2">
              {item.title}
            </h3>
            <Image
              src={getMediaUrl(item['bg-image'])}
              alt={getMediaAlt(item['bg-image'])}
              width={125}
              height={100}
              className="absolute -right-5 bottom-0 md:h-[150px] h-[150px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
