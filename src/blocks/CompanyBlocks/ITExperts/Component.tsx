import Image from 'next/image'
import type { Media } from '@/payload-types'

// TypeScript interface matching the simplified Payload config
interface ITExpertsBlockProps {
  heading: {
    text: string
  }
  layout: {
    imagePosition: 'left' | 'right'
  }
  image: {
    media: string | Media
  }
  textContent: {
    content: string
  }
}

type Props = {
  className?: string
  id?: string
} & ITExpertsBlockProps

export default function ITExperts(props: Props) {
  const { heading, layout, image, textContent, className = '', id } = props

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

  // Early return if no content
  if (!heading.text || !textContent.content || !image.media) {
    return null
  }

  const isImageLeft = layout.imagePosition === 'left'

  return (
    <section className={`py-16 md:py-20 bg-background ${className}`} id={id}>
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-12">
          {heading.text}
        </h2>

        {/* Image and Content Layout */}
        <div
          className={`flex flex-col md:flex-row gap-5 md:gap-12 items-center ${
            isImageLeft ? '' : 'md:flex-row-reverse'
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-2/5">
            <Image
              src={getMediaUrl(image.media)}
              alt={getMediaAlt(image.media)}
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-3/5">
            <p className="text-lg md:text-xl font-normal text-black space-y-5">
              {textContent.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
