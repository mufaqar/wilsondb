import Image from 'next/image'
import type { Media } from '@/payload-types'

// TypeScript interface matching the Payload config
interface ImageTextSectionBlockProps {
  sectionConfig: {
    backgroundColor:
      | 'foreground'
      | 'background'
      | 'white'
      | 'primary'
      | 'secondary'
      | 'gray-50'
      | 'gray-100'
    paddingY: 'small' | 'medium' | 'large' | 'extra-large'
    containerPadding: 'standard' | 'large' | 'none'
  }
  layout: {
    imagePosition: 'left' | 'right'
    imageWidth: '1/3' | '2/5' | '1/2' | '3/5' | '2/3'
    contentGap: 'small' | 'medium' | 'large' | 'extra-large'
    verticalAlignment: 'items-start' | 'items-center' | 'items-end' | 'items-stretch'
    mobileLayout: 'image-first' | 'text-first'
  }
  image: {
    media: string | Media
    imageAspectRatio: 'auto' | 'aspect-video' | 'aspect-4/3' | 'aspect-3/2' | 'aspect-square'
    objectFit: 'object-cover' | 'object-contain' | 'object-fill' | 'object-scale-down'
  }
  textContent: {
    content: string
    textSpacing: 'tight' | 'normal' | 'relaxed' | 'loose'
  }
  typography: {
    textSize: 'small' | 'medium' | 'large'
    textWeight: 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold'
    textColor:
      | 'text-white'
      | 'text-black'
      | 'text-gray-600'
      | 'text-gray-800'
      | 'text-primary'
      | 'text-secondary'
      | 'text-wils_orang'
  }
}

type Props = {
  className?: string
  id?: string
} & ImageTextSectionBlockProps

export default function ImageTextSection(props: Props) {
  const { sectionConfig, layout, image, textContent, typography, className = '', id } = props

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

  // Helper functions for dynamic styling
  const getBackgroundClass = (bg: string) => {
    switch (bg) {
      case 'background':
        return 'bg-background'
      case 'white':
        return 'bg-white'
      case 'primary':
        return 'bg-primary'
      case 'secondary':
        return 'bg-secondary'
      case 'gray-50':
        return 'bg-gray-50'
      case 'gray-100':
        return 'bg-gray-100'
      default:
        return 'bg-foreground'
    }
  }

  const getPaddingClass = (padding: string) => {
    switch (padding) {
      case 'small':
        return 'py-12 md:py-16'
      case 'large':
        return 'py-20 md:py-24'
      case 'extra-large':
        return 'py-24 md:py-32'
      default:
        return 'py-16 md:py-20'
    }
  }

  const getContainerPaddingClass = (padding: string) => {
    switch (padding) {
      case 'large':
        return 'px-6'
      case 'none':
        return 'px-0'
      default:
        return 'px-4'
    }
  }

  const getContentGapClass = (gap: string) => {
    switch (gap) {
      case 'small':
        return 'gap-5 md:gap-8'
      case 'large':
        return 'gap-6 md:gap-16'
      case 'extra-large':
        return 'gap-8 md:gap-20'
      default:
        return 'gap-5 md:gap-12'
    }
  }

  const getImageWidthClass = (width: string) => {
    switch (width) {
      case '1/3':
        return 'md:w-1/3'
      case '1/2':
        return 'md:w-1/2'
      case '3/5':
        return 'md:w-3/5'
      case '2/3':
        return 'md:w-2/3'
      default:
        return 'md:w-2/5'
    }
  }

  const getTextWidthClass = (imageWidth: string) => {
    switch (imageWidth) {
      case '1/3':
        return 'md:w-2/3'
      case '1/2':
        return 'md:w-1/2'
      case '3/5':
        return 'md:w-2/5'
      case '2/3':
        return 'md:w-1/3'
      default:
        return 'md:w-3/5'
    }
  }

  const getTextSizeClass = (size: string) => {
    switch (size) {
      case 'small':
        return 'text-base md:text-lg'
      case 'large':
        return 'text-xl md:text-2xl'
      default:
        return 'text-lg md:text-xl'
    }
  }

  const getTextSpacingClass = (spacing: string) => {
    switch (spacing) {
      case 'tight':
        return 'space-y-3'
      case 'normal':
        return 'space-y-4'
      case 'loose':
        return 'space-y-6'
      default:
        return 'space-y-5'
    }
  }

  const getFlexOrderClasses = () => {
    if (layout.imagePosition === 'right') {
      return {
        container: 'md:flex-row-reverse',
        mobileOrder: layout.mobileLayout === 'text-first' ? 'flex-col-reverse' : 'flex-col',
      }
    }
    return {
      container: 'md:flex-row',
      mobileOrder: layout.mobileLayout === 'text-first' ? 'flex-col-reverse' : 'flex-col',
    }
  }

  const flexOrder = getFlexOrderClasses()

  // Early return if no content
  if (!textContent.content || !image.media) {
    return null
  }

  return (
    <section
      className={`${getPaddingClass(sectionConfig.paddingY)} ${getBackgroundClass(sectionConfig.backgroundColor)} ${className}`}
      id={id}
    >
      <div
        className={`container mx-auto ${getContainerPaddingClass(sectionConfig.containerPadding)} flex ${flexOrder.mobileOrder} ${flexOrder.container} ${layout.verticalAlignment} justify-between ${getContentGapClass(layout.contentGap)}`}
      >
        {/* Image Section */}
        <div className={`${getImageWidthClass(layout.imageWidth)} w-full`}>
          <Image
            src={getMediaUrl(image.media)}
            alt={getMediaAlt(image.media)}
            width={549}
            height={280}
            className={`w-full h-auto ${image.imageAspectRatio !== 'auto' ? image.imageAspectRatio : ''} ${image.objectFit}`}
          />
        </div>

        {/* Text Section */}
        <div
          className={`${getTextWidthClass(layout.imageWidth)} w-full ${getTextSpacingClass(textContent.textSpacing)}`}
        >
          <p
            className={`
              ${getTextSizeClass(typography.textSize)} 
              ${typography.textWeight} 
              ${typography.textColor}
            `}
          >
            {textContent.content}
          </p>
        </div>
      </div>
    </section>
  )
}
