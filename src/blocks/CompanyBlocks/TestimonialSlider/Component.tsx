import TestimonialSliderClient from './Component.client'
import type { Page } from '@/payload-types'

type TestimonialSliderBlockProps = Extract<Page['layout'][0], { blockType: 'testimonials' }>

export default function TestimonialSlider(props: TestimonialSliderBlockProps) {
  return <TestimonialSliderClient {...props} />
}
