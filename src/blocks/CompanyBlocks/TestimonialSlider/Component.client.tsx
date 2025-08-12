'use client'

import React, { useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import type { Media, Page } from '@/payload-types'

type TestimonialSliderBlockProps = Extract<Page['layout'][0], { blockType: 'testimonials' }>

export default function TestimonialSliderClient(props: TestimonialSliderBlockProps) {
  const { heading, testimonials = [] } = props
  const sliderRef = useRef<Slider | null>(null)

  // Helper function to get media URL
  const getMediaUrl = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    if (typeof media === 'number') return '' // Handle ID case
    return media.url || ''
  }

  // Helper function to get media alt text
  const getMediaAlt = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    if (typeof media === 'number') return '' // Handle ID case
    return media.alt || ''
  }

  // Navigation functions
  const next = () => sliderRef.current?.slickNext()
  const previous = () => sliderRef.current?.slickPrev()

  // Slider settings
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  // Early return if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="md:py-20 py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-12">
          {heading?.text || 'Executive management'}
        </h2>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="!flex md:flex-row flex-col gap-11">
              <div className="md:w-1/2 w-full">
                <Image
                  src={getMediaUrl(testimonial.avatar)}
                  alt={getMediaAlt(testimonial.avatar) || testimonial.name}
                  width={564}
                  height={389}
                  className=""
                />
              </div>
              <div className="md:w-1/2 w-full">
                <p className="text-black md:text-xl text-lg font-normal">{testimonial.quote}</p>
                <div className="md:mt-12 mt-8">
                  <p className="md:text-2xl text-xl font-semibold text-black mb-2.5">
                    {testimonial.name}
                  </p>
                  <p className="md:text-xl text-lg font-normal text-black">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Navigation Buttons */}
        <div className="md:mt-14 mt-8 flex justify-center gap-4">
          <button
            onClick={previous}
            className="md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-full text-[#9D9D9D] hover:text-wils_orang border border-black/15 flex items-center justify-center hover:border-wils_orang hover:scale-105 transition cursor-pointer"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-full text-[#9D9D9D] hover:text-wils_orang border border-black/15 flex items-center justify-center hover:border-wils_orang hover:scale-105 transition cursor-pointer"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
