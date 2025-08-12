import MissionVisionClient from './Component.client'
import type { Page } from '@/payload-types'

type MissionVisionBlockProps = Extract<Page['layout'][0], { blockType: 'mission-vision' }>

export default function MissionVision(props: MissionVisionBlockProps) {
  return <MissionVisionClient {...props} />
}
