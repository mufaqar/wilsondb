import type { Page } from '@/payload-types'
import WhyWCGClient from './Component.client'

type WhyWCGBlockProps = Extract<Page['layout'][0], { blockType: 'why-wcg-section' }>

export default function WhyWCG(props: WhyWCGBlockProps) {
  return <WhyWCGClient {...props} />
}
