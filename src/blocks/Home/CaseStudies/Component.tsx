'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Media } from '@/payload-types'
import { Button } from '@/components/ui/button'

// Interface for the block data
interface CaseStudiesBlockProps {
  header: {
    title: string
    description: string
  }
  contentType: 'manual' | 'posts' | 'mixed'
  caseStudies?: Array<{
    image: string | Media
    tag: string
    title: string
    description: string
    linkType: 'external' | 'internal' | 'none'
    externalUrl?: string
    internalPage?: unknown // Will be properly typed when pages collection is available
    featured?: boolean
  }>
  postSettings?: {
    maxPosts: number
    categoryFilter?: string
    sortBy: 'newest' | 'oldest' | 'featured'
  }
  layout: {
    bgColor: 'background' | 'white' | 'gray-50' | 'foreground'
    columns: '2' | '3' | '4'
    cardLayout: 'standard' | 'compact' | 'featured'
    showViewAll: boolean
  }
  style: {
    textTheme: 'dark' | 'light'
    imageBackground: 'primary' | 'secondary' | 'wils_orang' | 'white' | 'transparent'
    tagColor: 'wils_orang' | 'primary' | 'secondary' | 'black'
    cardRadius: 'none' | 'small' | 'medium' | 'large'
  }
  cta?: {
    text: string
    url: string
    style: 'primary' | 'secondary' | 'outline'
  }
}

type Props = {
  className?: string
} & CaseStudiesBlockProps

export default function CaseStudies(props: Props) {
  const { header, contentType, caseStudies, layout, style, cta, className } = props

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

  // Style mappings
  const backgroundStyles = {
    background: 'bg-background',
    white: 'bg-white',
    'gray-50': 'bg-gray-50',
    foreground: 'bg-foreground',
  }

  const textColorStyles = {
    dark: 'text-black',
    light: 'text-white',
  }

  const columnStyles = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-2 lg:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  }

  const imageBackgroundStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    wils_orang: 'bg-wils_orang',
    white: 'bg-white',
    transparent: 'bg-transparent',
  }

  const tagColorStyles = {
    wils_orang: 'text-wils_orang',
    primary: 'text-primary',
    secondary: 'text-secondary',
    black: 'text-black',
  }

  const cardRadiusStyles = {
    none: 'rounded-none',
    small: 'rounded-lg',
    medium: 'rounded-2xl',
    large: 'rounded-3xl',
  }

  const cardLayoutStyles = {
    standard: {
      container: 'h-full',
      imageHeight: 'h-[259px]',
      padding: 'px-4 pb-10 pt-5',
    },
    compact: {
      container: 'h-full',
      imageHeight: 'h-[200px]',
      padding: 'px-3 pb-8 pt-4',
    },
    featured: {
      container: 'h-full transform hover:scale-105 transition-transform duration-300',
      imageHeight: 'h-[300px]',
      padding: 'px-5 pb-12 pt-6',
    },
  }

  // Get case studies data based on content type
  const getCaseStudiesData = () => {
    if (contentType === 'manual' && caseStudies) {
      return caseStudies
    }
    // Future: Add logic for posts and mixed content
    return []
  }

  // Get link for case study
  const getCaseStudyLink = (caseStudy: any) => {
    switch (caseStudy.linkType) {
      case 'external':
        return caseStudy.externalUrl || '#'
      case 'internal':
        // Future: Handle internal page links when pages collection is available
        return caseStudy.internalPage?.slug || '#'
      case 'none':
      default:
        return '#'
    }
  }

  const caseStudiesData = getCaseStudiesData()
  const cardStyle = cardLayoutStyles[layout.cardLayout]

  return (
    <section className={`${backgroundStyles[layout.bgColor]} py-16 ${className || ''}`}>
      <div className="container mx-auto md:px-5 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-6xl font-medium ${textColorStyles[style.textTheme]}`}>
            {header.title}
          </h2>
          <p
            className={`${textColorStyles[style.textTheme]} text-base md:text-lg font-medium max-w-2xl mx-auto mt-2`}
          >
            {header.description}
          </p>
        </div>

        {/* Case Studies Grid */}
        {caseStudiesData.length > 0 && (
          <div className={`grid grid-cols-1 ${columnStyles[layout.columns]} gap-5 mb-12`}>
            {caseStudiesData.map((caseStudy, index) => {
              const imageUrl = getMediaUrl(caseStudy.image)
              const imageAlt = getMediaAlt(caseStudy.image)
              const caseStudyLink = getCaseStudyLink(caseStudy)
              const isClickable = caseStudy.linkType !== 'none'

              return (
                <div
                  key={index}
                  className={`${cardRadiusStyles[style.cardRadius]} bg-white ${cardStyle.container} ${
                    caseStudy.featured ? 'ring-2 ring-primary/20 shadow-lg' : ''
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`${imageBackgroundStyles[style.imageBackground]} ${cardRadiusStyles[style.cardRadius] === 'rounded-3xl' ? 'rounded-t-3xl' : cardRadiusStyles[style.cardRadius]} ${cardStyle.imageHeight} flex items-center justify-center`}
                  >
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={imageAlt || caseStudy.title}
                        width={224}
                        height={93}
                        className="w-full h-full"
                      />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className={`${cardStyle.padding} flex flex-col flex-grow`}>
                    {/* Tag Badge */}
                    {caseStudy.tag && (
                      <div
                        className={`md:text-lg text-base font-bold ${tagColorStyles[style.tagColor]} mb-3`}
                      >
                        {caseStudy.tag}
                      </div>
                    )}

                    {/* Title */}
                    {isClickable ? (
                      <Link
                        href={caseStudyLink}
                        className="md:text-3xl text-2xl font-medium text-black mb-2 hover:text-primary transition-colors"
                        {...(caseStudy.linkType === 'external'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {caseStudy.title}
                      </Link>
                    ) : (
                      <h3 className="md:text-3xl text-2xl font-medium text-black mb-2">
                        {caseStudy.title}
                      </h3>
                    )}

                    {/* Description */}
                    <p className="md:text-lg text-base text-black font-normal">
                      {caseStudy.description}
                    </p>

                    {/* Featured Badge */}
                    {caseStudy.featured && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Call-to-Action Button */}
        {layout.showViewAll && cta && (
          <div className="text-center">
            <Button
              asChild
              variant={
                cta.style === 'primary'
                  ? 'default'
                  : cta.style === 'secondary'
                    ? 'secondary'
                    : 'outline'
              }
              size="lg"
            >
              <Link href={cta.url}>{cta.text}</Link>
            </Button>
          </div>
        )}

        {/* Future: Add blog posts integration when Posts collection is available */}
        {contentType === 'posts' && (
          <div className="text-center py-12">
            <p className={`text-lg ${textColorStyles[style.textTheme]} opacity-75`}>
              Blog posts integration will be available when the Posts collection is configured.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
