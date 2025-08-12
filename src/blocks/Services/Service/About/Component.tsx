import ServiceAboutClient from './Component.client'
import type { Page } from '@/payload-types'

type ServiceAboutBlockProps = Extract<Page['layout'][0], { blockType: 'service-about' }>

export default function ServiceAbout(props: ServiceAboutBlockProps) {
  return <ServiceAboutClient {...props} />
}
