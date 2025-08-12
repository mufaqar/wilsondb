import type { Page } from '@/payload-types'
import { SimpleInformationClient } from './Component.client'

type SimpleInformationBlockProps = Extract<Page['layout'][0], { blockType: 'info' }> & {
  id?: string
}

export default function SimpleInformation(props: SimpleInformationBlockProps) {
  return <SimpleInformationClient {...props} />
}
