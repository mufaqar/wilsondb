import React from 'react'
import type { Media } from '@/payload-types'
import Hero from '@/components/Hero/Main'

interface HeroServicesBlockProps {
  title: string
  shortinfo: string
  ctaButton: {
    text: string
    url: string
    style: 'primary_btn' | 'secondary_btn'
    openInNewTab: boolean
  }
  images: {
    mainImage: string | Media
    overlayIcon: string | Media
  }
}

type Props = {
  className?: string
} & HeroServicesBlockProps

export default function HeroServices(props: Props) {
  const { title, shortinfo, ctaButton, images, className } = props

  return (
    <Hero
      title={title}
      description={shortinfo}
      mainImage={images.mainImage}
      overlayIcon={images.overlayIcon}
      ctaButton={{
        text: ctaButton.text,
        url: ctaButton.url,
        style: ctaButton.style,
        openInNewTab: ctaButton.openInNewTab,
      }}
      className={className}
      showRoundedCorners={false} // Services hero typically doesn't have rounded corners
    />
  )
}
