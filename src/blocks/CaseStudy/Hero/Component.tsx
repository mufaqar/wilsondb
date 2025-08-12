import React from 'react'
import RichText from '@/components/RichText'
import type { Page } from '@/payload-types'

type CaseStudyHeroProps = Extract<Page['layout'][0], { blockType: 'case-study-hero' }>

export const CaseStudyHeroBlock: React.FC<CaseStudyHeroProps> = (props) => {
  const { title, description, tags } = props

  return (
    <section className="bg-background py-10 md:py-20">
      <div className="container mx-auto md:px-0 px-4">
        <div className="max-w-[848px]">
          <h1 className="text-4xl md:text-[68px] md:leading-[65px] font-normal text-black tracking-[-4px]">
            {title}
          </h1>
          {description && (
            <div className="text-black text-lg md:text-xl font-normal mt-2">
              <RichText data={description} enableGutter={false} />
            </div>
          )}
          {tags && (
            <ul className="flex gap-2 mt-6">
              {tags.date && (
                <li className="text-sm font-normal text-[#49575A] p-3 border border-[#CFDCEC] rounded-md">
                  {new Date(tags.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </li>
              )}
              {tags.readTime && (
                <li className="text-sm font-normal text-[#49575A] p-3 border border-[#CFDCEC] rounded-md">
                  {tags.readTime} min read
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default CaseStudyHeroBlock
