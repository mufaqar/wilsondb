import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import type { Media } from '@/payload-types'

export interface ServiceItem {
  title: string
  description?: string
  icon: string | Media
  activeIcon: string | Media
  backgroundIcon: string | Media
  link?: {
    enabled: boolean
    url?: string
    openInNewTab?: boolean
  }
}

interface Props {
  data: ServiceItem
  isLast?: boolean
}

export default function ServiceCard({ data, isLast }: Props) {
  const [isHovered, setIsHovered] = useState(false)
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

  const CardContent = () => (
    <div
      className={`relative overflow-hidden rounded-[20px] md:px-8 px-5 pt-8 pb-16 w-full max-h-[328px] h-full transition-all duration-200 hover:shadow-lg hover:shadow-wils_orang/20 cursor-pointer
        ${isLast ? 'md:col-span-2' : 'md:grid-cols-1'}
        bg-[#F7F7F8] hover:bg-background group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-6 relative md:w-[80px] md:h-[80px] w-[60px] h-[50px]">
        {/* Normal Icon */}
        <Image
          src={getMediaUrl(data.icon)}
          alt={getMediaAlt(data.icon) || data.title}
          width={80}
          height={80}
          className={`absolute top-0 left-0 md:w-[80px] md:h-[80px] w-[60px] h-[50px] transition-opacity duration-300 ease-in-out ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Active Icon */}
        <Image
          src={getMediaUrl(data.activeIcon)}
          alt={getMediaAlt(data.activeIcon) || data.title}
          width={80}
          height={80}
          className={`absolute top-0 left-0 md:w-[80px] md:h-[80px] w-[60px] h-[50px] transition-opacity duration-300 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <h3 className="md:text-[33px] md:leading-[33px] text-[28px] leading-[28px] font-normal mb-2 transition-colors duration-200 group-hover:text-wils_orang">
        {data.title}
      </h3>
      {data.description && (
        <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">{data.description}</p>
      )}
      <Image
        src={getMediaUrl(data.backgroundIcon)}
        alt={getMediaAlt(data.backgroundIcon) || `${data.title}-background`}
        width={145}
        height={200}
        className="absolute -right-5 bottom-0 md:h-[200px] h-[184px] object-contain opacity-70 transition-opacity duration-200 group-hover:opacity-90"
      />
    </div>
  )

  // If link is enabled, wrap in Link component
  if (data.link?.enabled && data.link?.url) {
    return (
      <Link
        href={data.link.url}
        target={data.link.openInNewTab ? '_blank' : '_self'}
        rel={data.link.openInNewTab ? 'noopener noreferrer' : undefined}
        className="block transition-transform duration-200 "
      >
        <CardContent />
      </Link>
    )
  }

  // Otherwise return the card without link
  return <CardContent />
}
