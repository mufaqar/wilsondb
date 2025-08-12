import type { Page } from '@/payload-types'
import FAQClient from './Component.client'

type FAQBlockProps = Extract<Page['layout'][0], { blockType: 'faq-section' }>

export default function FAQ(props: FAQBlockProps) {
  return <FAQClient {...props} />
}
