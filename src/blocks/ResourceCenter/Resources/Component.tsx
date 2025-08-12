import type { CaseStudy, Page } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import ResourcesClient from './Component.client'

type ResourcesBlockProps = Extract<Page['layout'][0], { blockType: 'resources' }> & {
  id?: string
}

export default async function Resources(props: ResourcesBlockProps) {
  const {
    heading,
    populateBy,
    industries,
    limit: limitFromProps,
    selectedCaseStudies,
    searchSettings,
    seeMoreBtn,
  } = props

  const limit = limitFromProps || 9
  let caseStudies: CaseStudy[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const fetchedCaseStudies = await payload.find({
      collection: 'case-studies',
      depth: 1,
      limit,
      ...(industries && industries.length > 0
        ? {
            where: {
              industry: {
                in: industries,
              },
            },
          }
        : {}),
    })

    caseStudies = fetchedCaseStudies.docs
  } else {
    // Handle manual selection
    if (selectedCaseStudies?.length) {
      const filteredSelectedCaseStudies = selectedCaseStudies
        .map((caseStudy) => {
          if (typeof caseStudy === 'object') return caseStudy
        })
        .filter(Boolean) as CaseStudy[]

      caseStudies = filteredSelectedCaseStudies
    }
  }

  return (
    <ResourcesClient
      caseStudies={caseStudies}
      heading={heading || 'Our Resources'}
      searchSettings={searchSettings}
      seeMoreButton={seeMoreBtn}
    />
  )
}
