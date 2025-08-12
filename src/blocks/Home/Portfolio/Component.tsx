'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Media } from '@/payload-types'
import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'

// Interface for the block data
interface PortfolioBlockProps {
  header: {
    title: string
    description: string
  }
  statistics: Array<{
    value: string
    label: string
    highlighted?: boolean
  }>
  clientLogos?: Array<{
    logo: string | Media
    website?: string
  }>
  layout: {
    bgColor: 'white' | 'background' | 'gray-50' | 'foreground'
    statsColumns: '2' | '3' | '4' | '5'
    headerLayout: 'sideBySide' | 'stacked' | 'centered'
    enableDividers: boolean
  }
  style: {
    statValueColor: 'wils_orang' | 'primary' | 'secondary' | 'black' | 'white'
    textTheme: 'dark' | 'light'
    logoSize: 'small' | 'medium' | 'large'
    statsSize: 'small' | 'medium' | 'large'
  }
  sections: {
    showStats: boolean
    showLogos: boolean
    showBorder: boolean
  }
}

type Props = {
  className?: string
} & PortfolioBlockProps

export default function Portfolio(props: Props) {
  const { header, statistics, clientLogos, layout, style, sections, className } = props

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
    white: 'bg-white',
    background: 'bg-background',
    'gray-50': 'bg-gray-50',
    foreground: 'bg-foreground',
  }

  const textColorStyles = {
    dark: 'text-black',
    light: 'text-white',
  }

  const statValueColors = {
    wils_orang: 'text-wils_orang',
    primary: 'text-primary',
    secondary: 'text-secondary',
    black: 'text-black',
    white: 'text-white',
  }

  const columnStyles = {
    '2': 'lg:grid-cols-2',
    '3': 'lg:grid-cols-3',
    '4': 'lg:grid-cols-4',
    '5': 'lg:grid-cols-5',
  }

  const logoSizes = {
    small: { container: 'w-[180px] h-[90px]', image: { width: 140, height: 90 } },
    medium: { container: 'w-[242px] h-[116px]', image: { width: 185, height: 116 } },
    large: { container: 'w-[300px] h-[140px]', image: { width: 230, height: 140 } },
  }

  const statsSizes = {
    small: { value: 'md:text-3xl text-2xl', label: 'text-xs' },
    medium: { value: 'md:text-4xl text-3xl', label: 'text-sm' },
    large: { value: 'md:text-[56px] text-4xl', label: 'text-sm' },
  }

  const headerLayouts = {
    sideBySide: 'flex md:flex-row flex-col gap-5 items-center',
    stacked: 'flex flex-col gap-5 items-start',
    centered: 'flex flex-col gap-5 items-center text-center',
  }

  const getDelay = useAutoDelay()

  return (
    <section className={`${backgroundStyles[layout.bgColor]} py-16 ${className || ''}`}>
      <div className="container mx-auto md:px-5 px-4">
        {/* Header Section */}
        <AnimateOnScroll type="fade-up" delay={getDelay()}>
          <div className={headerLayouts[layout.headerLayout]}>
            <div>
              <h2
                className={`md:text-6xl text-3xl font-normal ${textColorStyles[style.textTheme]}`}
              >
                {header.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < header.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>
            <div>
              <p className={`text-lg font-normal ${textColorStyles[style.textTheme]} font-satoshi`}>
                {header.description}
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Statistics Section */}

        {sections.showStats && statistics && statistics.length > 0 && (
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 ${columnStyles[layout.statsColumns]} gap-5 ${
              layout.enableDividers ? 'md:divide-x divide-[#E3E3E3]' : ''
            } my-16 pb-16 ${sections.showBorder ? 'border-b border-black/15' : ''}`}
          >
            {statistics.map((stat, index) => (
              <AnimateOnScroll key={index} type="zoom-in" delay={getDelay()}>
                <div className={`px-6 ${stat.highlighted ? 'relative' : ''}`}>
                  {stat.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg -m-2" />
                  )}
                  <div className="relative">
                    <h2
                      className={`${statsSizes[style.statsSize].value} font-medium tracking-[-4px] ${statValueColors[style.statValueColor]} mb-4`}
                    >
                      {stat.value}
                    </h2>
                    <div
                      className={`${textColorStyles[style.textTheme]} uppercase ${statsSizes[style.statsSize].label} font-bold tracking-wider`}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {/* Client Logos Section */}
        {sections.showLogos && clientLogos && clientLogos.length > 0 && (
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {clientLogos.map((client, index) => {
              const logoUrl = getMediaUrl(client.logo)
              const logoAlt = getMediaAlt(client.logo)
              const logoConfig = logoSizes[style.logoSize]

              const logoElement = (
                <AnimateOnScroll key={index} type="zoom-in" delay={getDelay()}>
                  <div
                    className={`${logoConfig.container} flex items-center justify-center`}
                    key={index}
                  >
                    <Image
                      src={logoUrl}
                      alt={logoAlt}
                      width={logoConfig.image.width}
                      height={logoConfig.image.height}
                      className="object-contain w-auto h-auto mx-auto"
                    />
                  </div>
                </AnimateOnScroll>
              )

              if (client.website) {
                return (
                  <AnimateOnScroll key={index} type="zoom-in" delay={getDelay()}>
                    <Link
                      key={index}
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-75"
                    >
                      {logoElement}
                    </Link>
                  </AnimateOnScroll>
                )
              }

              return logoElement
            })}
          </div>
        )}
      </div>
    </section>
  )
}
