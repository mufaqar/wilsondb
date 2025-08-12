import React from 'react'
import RichText from '@/components/RichText'
import type { Media, Page } from '@/payload-types'
import Sidebar from './Sidebar'
import Image from 'next/image'

type CaseStudyContentProps = Extract<Page['layout'][0], { blockType: 'case-study-cn' }>

export const CaseStudyContentBlock: React.FC<CaseStudyContentProps> = (props) => {
  const {
    'main-title': mainTitle,
    'main-content': mainContent,
    content,
    'main-image': mainImage,
    sb: sidebar,
  } = props

  const getMediaAlt = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return ''
    if (typeof media === 'number') return '' // Handle ID case
    return media.alt || ''
  }

  const getMediaUrl = (media: string | number | Media | undefined): string => {
    if (!media) return ''
    if (typeof media === 'string') return media
    if (typeof media === 'number') return '' // Handle ID case
    return media.url || ''
  }

  return (
    <>
      <section className="md:py-24 py-16">
        <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-16 gap-6">
          <div className="md:w-[62%] w-full space-y-10">
            <h2 className="text-4xl md:text-[68px] md:leading-[65px] font-normal text-black tracking-[-4px]">
              {mainTitle}
            </h2>
            {mainContent && (
              <div className="text-black text-lg md:text-xl font-normal">
                <RichText data={mainContent} enableGutter={false} />
              </div>
            )}
            {content &&
              content.map((item, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-4xl md:text-[45px] md:leading-[33px] font-normal text-wils_orang tracking-[-4px]">
                    {item['sub-title']}
                  </h2>
                  {item['sub-content'] && (
                    <div className="text-black text-lg md:text-xl font-normal">
                      <RichText data={item['sub-content']} enableGutter={false} />
                    </div>
                  )}
                </div>
              ))}
          </div>
          <aside className="md:w-[38%] w-full">
            <Sidebar sidebar={sidebar} />
          </aside>
        </div>
      </section>

      {mainImage && (
        <section className="md:pb-16 pb-10">
          <div className="container mx-auto">
            <Image
              src={getMediaUrl(mainImage as Media)}
              alt={getMediaAlt(mainImage as Media) || 'Main Image'}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      )}
    </>
  )
}

export default CaseStudyContentBlock
