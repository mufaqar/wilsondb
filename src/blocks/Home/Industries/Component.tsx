'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import type { Media } from '@/payload-types'
import { cn } from '@/utilities/ui'
import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'

// Interface for the block data
interface IndustriesBlockProps {
  header: {
    title: string
    description: string
  }
  mainImage: string | Media
  industries: Array<{
    title: string
    description: string
    defaultOpen?: boolean
  }>
  icons?: {
    checkIcon?: string | Media
    arrowIcon?: string | Media
  }
  buttons: Array<{
    text: string
    url: string
    style: 'primary' | 'secondary'
  }>
  layout: {
    bgColor: 'foreground' | 'background' | 'white' | 'primary'
    textColor: 'light' | 'dark'
    imagePosition: 'left' | 'right'
  }
  behavior: {
    allowMultiple: boolean
    animationSpeed: 'fast' | 'normal' | 'slow'
  }
}

type Props = {
  className?: string
} & IndustriesBlockProps

export default function Industries(props: Props) {
  const { header, mainImage, industries, icons, buttons, layout, behavior, className } = props

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Set initial open state based on defaultOpen configuration
  useEffect(() => {
    const defaultOpenIndex = industries.findIndex((industry) => industry.defaultOpen)
    if (defaultOpenIndex !== -1) {
      setOpenIndex(defaultOpenIndex)
    }
  }, [industries])

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
    foreground: 'bg-foreground',
    background: 'bg-background',
    white: 'bg-white',
    primary: 'bg-primary',
  }

  const textColorStyles = {
    light: 'text-white',
    dark: 'text-black',
  }

  const animationDurations = {
    fast: 'duration-150',
    normal: 'duration-300',
    slow: 'duration-500',
  }

  const toggleAccordion = (index: number) => {
    if (behavior.allowMultiple) {
      // If multiple open is allowed, this would need a different state structure
      // For now, keeping single open behavior even when allowMultiple is true
      setOpenIndex((prev) => (prev === index ? null : index))
    } else {
      setOpenIndex((prev) => (prev === index ? null : index))
    }
  }

  // Default fallback icons
  const checkIconUrl = getMediaUrl(icons?.checkIcon) || '/images/circle_check.svg'
  const arrowIconUrl = getMediaUrl(icons?.arrowIcon) || '/images/circle_arrow.svg'
  const mainImageUrl = getMediaUrl(mainImage)

  const getDelay = useAutoDelay()

  return (
    <section className={`${backgroundStyles[layout.bgColor]} md:py-24 py-16 ${className || ''}`}>
      <div className="container mx-auto md:px-5 px-4">
        {/* Header Section */}
        <AnimateOnScroll type="fade-up" delay={getDelay()}>
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-6xl font-medium ${textColorStyles[layout.textColor]}`}>
              {header.title}
            </h2>
            <p
              className={`${textColorStyles[layout.textColor]} text-base md:text-lg font-medium max-w-2xl mx-auto mt-2`}
            >
              {header.description}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Main Content Grid */}
        <AnimateOnScroll type="fade-up" delay={getDelay()}>
          <div
            className={`grid md:grid-cols-2 grid-cols-1 gap-8 ${layout.imagePosition === 'right' ? 'md:grid-flow-col-dense' : ''}`}
          >
            {/* Main Image */}
            <div className={cn(layout.imagePosition === 'right' ? 'md:col-start-2' : '')}>
              <Image
                src={mainImageUrl}
                alt={getMediaAlt(mainImage)}
                width={579}
                height={590}
                className="h-full w-full object-cover rounded-4xl"
              />
            </div>

            {/* Industries Accordion */}
            <div
              className={`flex flex-col gap-6 ${layout.imagePosition === 'right' ? 'md:col-start-1' : ''}`}
            >
              {industries.map((industry, index) => (
                <div
                  onClick={() => toggleAccordion(index)}
                  key={index}
                  className="flex flex-row cursor-pointer"
                >
                  {/* Check Icon */}
                  <div className="pt-5 w-1/12">
                    <Image
                      src={checkIconUrl}
                      alt={getMediaAlt(icons?.checkIcon) || 'Check icon'}
                      width={41}
                      height={41}
                    />
                  </div>

                  {/* Industry Content */}
                  <div className={`py-5 border-b border-white/20 w-11/12`}>
                    <h4 className="flex gap-3 justify-between cursor-pointer">
                      <span
                        className={`md:text-[28px] text-2xl font-medium ${textColorStyles[layout.textColor]} mb-3`}
                      >
                        {industry.title}
                      </span>
                      <Image
                        src={arrowIconUrl}
                        alt={getMediaAlt(icons?.arrowIcon) || 'Toggle arrow'}
                        width={40}
                        height={40}
                        className={`transition-transform ${animationDurations[behavior.animationSpeed]} ${
                          openIndex === index ? '-rotate-90' : ''
                        }`}
                      />
                    </h4>

                    {/* Accordion Content */}
                    {openIndex === index && (
                      <p
                        className={`${textColorStyles[layout.textColor]} md:text-xl text-lg font-normal transition-all ${animationDurations[behavior.animationSpeed]}`}
                      >
                        {industry.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Call-to-Action Buttons */}
        <AnimateOnScroll type="fade-up" delay={getDelay()}>
          {buttons && buttons.length > 0 && (
            <div className="flex space-x-4 justify-center mt-14 flex-wrap gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.url}
                  className={button.style === 'primary' ? 'primary_btn' : 'secondary_btn'}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
