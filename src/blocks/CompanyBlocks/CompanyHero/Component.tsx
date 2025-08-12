import Image from 'next/image'
import type { Media } from '@/payload-types'

// TypeScript interface matching the simplified Payload config
interface CompanyHeroBlockProps {
  heading: {
    text: string
  }
  description: {
    text: string
  }
  featuredImage: {
    media: string | Media
  }
}

type Props = {
  className?: string
  id?: string
} & CompanyHeroBlockProps

export default function CompanyHero(props: Props) {
  const { heading, description, featuredImage, className = '', id } = props

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
  if (!heading.text || !description.text || !featuredImage.media) {
    return null
  }

  return (
    <section className={`py-16 bg-white ${className}`} id={id}>
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-7">
          {heading.text}
        </h2>

        {/* Description Text */}
        <p className="text-lg md:text-xl font-normal text-black text-center max-w-[947px] mx-auto mb-12">
          {description.text}
        </p>

        {/* Featured Image */}
        <Image
          src={getMediaUrl(featuredImage.media)}
          alt={getMediaAlt(featuredImage.media)}
          width={1162}
          height={654}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}
