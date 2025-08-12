'use client'

import { useState, useMemo } from 'react'
import type { CaseStudy, Page } from '@/payload-types'

import ResourceCard from './Card'
import ResourceFilter from './Filter'
import ResourceSearch from './Search'

type LinkType = NonNullable<
  Extract<Page['layout'][0], { blockType: 'resources' }>['seeMoreBtn']
>['link']

type SeeMoreButtonType = {
  enabled?: boolean | null
  text?: string | null
  link?: LinkType | null
}

type SearchSettingsType = {
  enableSearch?: boolean | null
  enableIndustryFilter?: boolean | null
}

interface ResourcesClientProps {
  caseStudies: CaseStudy[]
  heading: string
  searchSettings?: SearchSettingsType
  seeMoreButton?: SeeMoreButtonType
}

interface MappedResource {
  title: string
  description: string
  image: string
  type: string
  tag: string
  date: string
  slug: string
  client: string
}

export default function ResourcesClient({
  caseStudies,
  heading,
  searchSettings,
  seeMoreButton,
}: ResourcesClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  // Map case studies to resource format
  const mappedResources: MappedResource[] = useMemo(() => {
    return caseStudies.map((caseStudy) => {
      const coverImage = caseStudy['cover-image']
      const imageUrl =
        coverImage && typeof coverImage === 'object' && coverImage.url
          ? coverImage.url
          : '/images/resource_feat.png'

      return {
        title: caseStudy.title,
        description: `Case Study for ${caseStudy.client}`,
        image: imageUrl,
        type: 'CASE STUDY',
        tag: caseStudy.industry || 'Other',
        date: caseStudy.publishedAt
          ? new Date(caseStudy.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : '',
        slug: caseStudy.slug || '',
        client: caseStudy.client,
      }
    })
  }, [caseStudies])

  // Get unique industries for filter
  const availableIndustries = useMemo(() => {
    const industries = caseStudies
      .map((cs) => cs.industry)
      .filter(Boolean)
      .filter((value, index, self) => self.indexOf(value) === index) as string[]

    return ['All', ...industries]
  }, [caseStudies])

  const toggleFilter = (list: string[], value: string, setList: (v: string[]) => void) => {
    if (value === 'All') {
      setList(['All'])
    } else {
      const newList = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list.filter((item) => item !== 'All'), value]
      setList(newList.length ? newList : ['All'])
    }
  }

  const filteredResources = mappedResources.filter((resource) => {
    const matchesSearch =
      searchSettings?.enableSearch !== false &&
      (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.client.toLowerCase().includes(searchQuery.toLowerCase()))

    const topicMatch =
      !searchSettings?.enableIndustryFilter ||
      selectedTopics.includes('All') ||
      selectedTopics.length === 0 ||
      selectedTopics.includes(resource.tag)

    const typeMatch =
      selectedTypes.includes('All') ||
      selectedTypes.length === 0 ||
      selectedTypes.includes(resource.type)

    return (!searchSettings?.enableSearch || matchesSearch) && topicMatch && typeMatch
  })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col justify-between gap-6 items-center md:mb-14 mb-9">
          <h2 className="md:text-6xl text-3xl font-medium text-black md:w-[35%] w-full">
            {heading}
          </h2>
          {searchSettings?.enableSearch !== false && (
            <div className="md:w-[65%] w-full">
              <ResourceSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {searchSettings?.enableIndustryFilter !== false && (
            <aside className="md:w-[30%] w-full">
              <ResourceFilter
                selectedTopics={selectedTopics}
                selectedTypes={selectedTypes}
                onTopicChange={(topic) => toggleFilter(selectedTopics, topic, setSelectedTopics)}
                onTypeChange={(type) => toggleFilter(selectedTypes, type, setSelectedTypes)}
                availableTopics={availableIndustries}
                availableTypes={['All', 'CASE STUDY']}
              />
            </aside>
          )}
          <div
            className={`${searchSettings?.enableIndustryFilter !== false ? 'md:w-[70%]' : 'w-full'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start`}
          >
            {filteredResources.length > 0 ? (
              filteredResources.map((item, idx) => (
                <ResourceCard key={`${item.slug}-${idx}`} {...item} />
              ))
            ) : (
              <p className="text-2xl font-normal text-black col-span-full text-center pt-10">
                No resources found.
              </p>
            )}
            {seeMoreButton?.enabled && (
              <div className="col-span-full mt-16">
                <button className="secondary_btn">
                  {seeMoreButton.text || 'See More Resources'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
