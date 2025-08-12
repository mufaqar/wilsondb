import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Media } from '@/payload-types'
import { cn } from '@/utilities/ui'

interface HeroButton {
  text: string
  url: string
  style?: 'primary_btn' | 'secondary_btn'
  openInNewTab?: boolean
}

interface HeroProps {
  title: string
  description: string
  mainImage: string | Media
  overlayIcon?: string | Media
  ctaButton?: HeroButton
  className?: string
  showRoundedCorners?: boolean
}

export default function Hero({
  title,
  description,
  mainImage,
  overlayIcon,
  ctaButton,
  className = '',
  showRoundedCorners = true,
}: HeroProps) {
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

  // Default CTA button if none provided
  const defaultButton: HeroButton = {
    text: 'Request Consultation',
    url: '#',
    style: 'secondary_btn',
    openInNewTab: false,
  }

  const button = ctaButton || defaultButton

  return (
    <section
      className={`bg-background md:px-14 py-10 md:py-20 ${showRoundedCorners ? 'rounded-b-[35px]' : ''} ${className}`}
    >
      <div className="container mx-auto md:px-0 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-[77.6px] md:leading-[77.5px] font-normal text-black tracking-[-4px]">
            {title}
          </h1>
          <p className="text-black text-lg md:text-xl font-normal max-w-[31rem]">{description}</p>
          {button && (
            <button className={cn(button.style || 'secondary_btn', 'px-4 py-2 text-nowrap')}>
              <Link
                href={button.url}
                rel={button.openInNewTab ? 'noopener noreferrer' : undefined}
                target={button.openInNewTab ? '_blank' : '_self'}
              >
                {button.text}
              </Link>
            </button>
          )}
        </div>

        {/* Right Content */}
        <div className="relative">
          <Image
            src={getMediaUrl(mainImage)}
            alt={getMediaAlt(mainImage) || 'hero-image'}
            width={590}
            height={365}
            className="rounded-xl object-cover w-full mx-auto h-full"
          />
          {overlayIcon && (
            <Image
              src={getMediaUrl(overlayIcon)}
              alt={getMediaAlt(overlayIcon) || 'overlay-icon'}
              width={179}
              height={209}
              className="absolute -bottom-14 md:-left-16 -left-10"
            />
          )}
        </div>
      </div>
    </section>
  )
}
