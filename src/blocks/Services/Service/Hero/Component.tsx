import React from 'react'
import type { Media } from '@/payload-types'
import Hero from '@/components/Hero/Main'

interface HeroServiceBlockProps {
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
} & HeroServiceBlockProps

export default function HeroService(props: Props) {
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
      showRoundedCorners={true} // Inner service pages can have rounded corners
    />
  )
}
