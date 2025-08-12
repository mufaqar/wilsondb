'use client'

import type { Page, Media } from '@/payload-types'
import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'
import Image from 'next/image'

type SimpleInformationBlockProps = Extract<Page['layout'][0], { blockType: 'info' }> & {
  id?: string
}

export function SimpleInformationClient(props: SimpleInformationBlockProps) {
  const {
    title = 'Default Title',
    description = 'Default description text.',
    image,
    layout = {
      imagePosition: 'left',
      backgroundColor: 'bg-white',
      spacing: 'py-16',
    },
  } = props

  // Helper function to get image URL from Media object
  const getImageUrl = (media: Media | number | undefined): string => {
    if (!media) return '/images/placeholder.png'
    if (typeof media === 'number') return '/images/placeholder.png'
    return media.url || '/images/placeholder.png'
  }

  // Helper function to get image alt text
  const getImageAlt = (media: Media | number | undefined, fallback: string): string => {
    if (!media) return fallback
    if (typeof media === 'number') return fallback
    return media.alt || fallback
  }

  const getDelay = useAutoDelay()
  const imageUrl = getImageUrl(image)
  const imageAlt = getImageAlt(image, title)
  const isImageLeft = layout.imagePosition === 'left'

  return (
    <section className={`${layout.spacing} ${layout.backgroundColor}`}>
      <div className="container mx-auto px-4 flex md:flex-row flex-col items-center justify-between md:gap-12 gap-5">
        {/* Image Section */}
        <div className={`md:w-[45%] w-full ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
          <AnimateOnScroll type="fade-up" delay={getDelay()}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={645}
              height={630}
              className="w-full h-auto"
            />
          </AnimateOnScroll>
        </div>

        {/* Content Section */}
        <div className={`md:w-[55%] w-full space-y-5 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
          <AnimateOnScroll type="fade-up" delay={getDelay()}>
            <h2 className="text-3xl md:text-6xl font-medium text-black capitalize mb-7">{title}</h2>
          </AnimateOnScroll>
          <AnimateOnScroll type="fade-up" delay={getDelay()}>
            <p className="md:text-xl text-lg font-normal text-black">{description}</p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
