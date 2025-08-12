'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ComplianceExperts } from './ComplianceExperts'
import type { Media } from '@/payload-types'
import AnimateOnScroll, { useAutoDelay } from '@/components/AnimateOnScroll'

interface HeroHomeBlockProps {
  certificationBadge: {
    icon: string | Media
    text: string
  }
  headline: string
  description: string
  buttons: Array<{
    text: string
    url: string
    style: 'primary' | 'secondary'
  }>
  images: {
    mainImage: string | Media
    overlayImage?: string | Media
  }
  complianceSection: {
    enabled: boolean
    sectionLabel?: string
    title?: string
    description?: string
  }
}

type Props = {
  className?: string
} & HeroHomeBlockProps

export default function HeroSection(props: Props) {
  const { certificationBadge, headline, description, buttons, images, complianceSection } = props

  const getMediaUrl = (media: string | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    return media.url || ''
  }

  const getMediaAlt = (media: string | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    return media.alt || ''
  }

  const getDelay = useAutoDelay()

  return (
    <>
      <section className="bg-background md:px-14 py-10 md:pt-20 pb-[200px]">
        <div className="container mx-auto md:px-5 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <AnimateOnScroll delay={getDelay()} type="fade-up">
              <div className="Grad_BG w-fit p-[1px] rounded-full">
                <div className="flex items-center gap-2.5 bg-white pl-2.5 pr-5 py-2.5 md:w-[409px] rounded-full">
                  <Image
                    src={getMediaUrl(certificationBadge.icon)}
                    alt={getMediaAlt(certificationBadge.icon)}
                    width={32}
                    height={32}
                  />
                  <span className="text-base font-bold uppercase tracking-[2.6px]">
                    {certificationBadge.text}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={getDelay()} type="fade-up">
              <h1 className="text-4xl md:text-[77.6px] md:leading-[77.5px] font-normal text-black tracking-[-4px]">
                {headline.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < headline.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={getDelay()} type="fade-up">
              <p className="text-black text-base md:text-lg font-normal max-w-lg">{description}</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={getDelay()} type="fade-up">
              <div className="flex space-x-4 pt-2">
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
            </AnimateOnScroll>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <AnimateOnScroll type="zoom-in" delay={getDelay()}>
              <Image
                src={getMediaUrl(images.mainImage)}
                alt={getMediaAlt(images.mainImage)}
                width={590}
                height={501}
                className="rounded-xl object-cover w-full mx-auto md:h-[501px] h-full"
              />
            </AnimateOnScroll>
            <AnimateOnScroll type="fade-up" delay={getDelay()}>
              {images.overlayImage && (
                <Image
                  src={getMediaUrl(images.overlayImage)}
                  alt={getMediaAlt(images.overlayImage)}
                  width={179}
                  height={209}
                  className="absolute -bottom-14 md:-left-16 -left-10"
                />
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <AnimateOnScroll type="fade-up" delay={getDelay()}>
        {complianceSection.enabled && (
          <ComplianceExperts
            sectionLabel={complianceSection.sectionLabel || 'COMPLIANCE EXPERTS'}
            title={complianceSection.title || 'Trusted By Government And Industry Leaders'}
            description={
              complianceSection.description ||
              'Recognized for our expertise in regulatory compliance, we help organizations achieve FeqRAMP and StateRAMP authorizations with integrity, insight, and proven results.'
            }
          />
        )}
      </AnimateOnScroll>
    </>
  )
}
