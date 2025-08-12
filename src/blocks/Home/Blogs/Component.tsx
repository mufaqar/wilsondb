import React from 'react'

import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Media, ResourcesDefault } from '@/payload-types'
import { BlogsClient } from './Component.client'

interface FeaturedResource {
  id?: string | null
  image: number | Media
  tag?: string | null
  title: string
  description: string
  linkType?: 'external' | 'internal' | 'none' | null
  externalUrl?: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  internalPage?: any
}

interface BlogsBlockProps {
  titleConfig?: {
    useCustomTitle?: boolean
    customTitle?: string
  }
  blockType?: string
  blockName?: string
}

export default async function FeaturedBlogs({ titleConfig }: BlogsBlockProps) {
  const globalData = (await getCachedGlobal('resources-defaults', 1)()) as ResourcesDefault
  const featuredResources = globalData?.resources || []

  const title =
    titleConfig?.useCustomTitle && titleConfig?.customTitle
      ? titleConfig.customTitle
      : globalData?.resourcesConfig?.title || 'Discover Innovative Solutions'

  return <BlogsClient title={title} featuredResources={featuredResources} />
}
