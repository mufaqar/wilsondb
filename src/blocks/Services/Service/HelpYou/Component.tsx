import type { Page } from '@/payload-types'
import HelpYouClient from './Component.client'

type HelpYouBlockProps = Extract<Page['layout'][0], { blockType: 'help-you-section' }>

export default function HelpYou(props: HelpYouBlockProps) {
  return <HelpYouClient {...props} />
}
