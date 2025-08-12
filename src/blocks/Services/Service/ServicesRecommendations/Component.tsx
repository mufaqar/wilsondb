import type { Page } from '@/payload-types'
import ServicesRecommendationsClient from './Component.client'

type ServicesRecommendationsBlockProps = Extract<Page['layout'][0], { blockType: 'services-more' }>

export default function ServicesRecommendations(props: ServicesRecommendationsBlockProps) {
  return <ServicesRecommendationsClient {...props} />
}
