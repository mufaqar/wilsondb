'use client'

import type { Media, Page } from '@/payload-types'
import Image from 'next/image'

type HelpYouBlockProps = Extract<Page['layout'][0], { blockType: 'help-you-section' }>

export default function HelpYouClient({ heading, description, image }: HelpYouBlockProps) {
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
    <section className="bg-background md:py-24 py-16 md:px-0 px-4">
      <div className="container mx-auto flex md:flex-row flex-col gap-8 items-center">
        <div className="md:w-[45%] w-full">
          <Image
            src={getMediaUrl(image)}
            alt={getMediaAlt(image)}
            width={549}
            height={318}
            className="rounded-[20px]"
          />
        </div>
        <div className="md:w-[55%] w-full">
          <h2 className="text-3xl md:text-6xl font-medium text-black">{heading}</h2>{' '}
          <p className="text-black text-lg md:text-xl font-medium mt-5">{description}</p>
        </div>
      </div>
    </section>
  )
}
