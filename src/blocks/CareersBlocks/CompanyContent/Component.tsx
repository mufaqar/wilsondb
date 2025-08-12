import Image from 'next/image'
import type { Media } from '@/payload-types'

// TypeScript interface matching the simplified Payload config
interface CompanyContentBlockProps {
  featuredMedia: {
    media: string | Media
  }
  heading: {
    text: string
  }
  content: Array<{
    paragraph: string
  }>
}

type Props = {
  className?: string
  id?: string
} & CompanyContentBlockProps

export default function CompanyContent(props: Props) {
  const { featuredMedia, heading, content, className = '', id } = props

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
  if (!heading.text || !content || content.length === 0) {
    return null
  }

  return (
    <section className={`py-16 bg-white ${className}`} id={id}>
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-7">
          {heading.text}
        </h2>

        {/* Content Paragraphs */}
        <div className="max-w-[947px] mx-auto text-center">
          {content.map((item, index) => (
            <p
              key={index}
              className={`text-lg md:text-xl font-normal text-black ${
                index < content.length - 1 ? 'mb-4' : ''
              }`}
            >
              {item.paragraph}
            </p>
          ))}
        </div>

        {/* Featured Media */}
        {featuredMedia.media && (
          <Image
            src={getMediaUrl(featuredMedia.media)}
            alt={getMediaAlt(featuredMedia.media)}
            width={1162}
            height={654}
            className="w-full h-auto object-cover my-12"
          />
        )}
      </div>
    </section>
  )
}
