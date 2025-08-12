import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import HeroSection from '@/blocks/HeroHome/Component'
import HeroServices from '@/blocks/Services/HeroServices/Component'
import HeroService from '@/blocks/Services/Service/Hero/Component'
import ServiceAbout from '@/blocks/Services/Service/About/Component'
import OurServices from './Home/OurServices/Component'
import Industries from './Home/Industries/Component'
import Portfolio from './Home/Portfolio/Component'
import CaseStudies from './Home/CaseStudies/Component'
import FeaturedBlogs from './Home/Blogs/Component'
import ServicesTabs from './Services/OurServices/Component'
import ContactForm from './ContactForm/Component'
import CareerTabsBlock from './CareersBlocks/CareerTabs/Component'
import CompanyContentBlock from './CareersBlocks/CompanyContent/Component'
import ImageTextSectionBlock from './CareersBlocks/ImageTextSection/Component'
import JobListingsBlock from './CareersBlocks/JobListings/Component'
import SimpleInformationBlock from './CareersBlocks/SimpleInformation/Component'
import CompanyHeroBlock from './CompanyBlocks/CompanyHero/Component'
import ITExpertsBlock from './CompanyBlocks/ITExperts/Component'
import MissionVisionBlock from './CompanyBlocks/MissionVision/Component'
import LeadershipPointsBlock from './CompanyBlocks/LeadershipPoints/Component'
import TestimonialSliderBlock from './CompanyBlocks/TestimonialSlider/Component'
import Resources from './ResourceCenter/Resources/Component'
import InfoTabs from './ResourceCenter/InfoTabs/Component'
import ExtraInfoBlock from './ResourceCenter/ExtraInfo/Component'
import EbooksBlock from './ResourceCenter/Ebooks/Component'
import VideoTabsBlock from './ResourceCenter/VideoTabs/Component'
import CaseStudyHeroBlock from './CaseStudy/Hero/Component'
import CaseStudyContentBlock from './CaseStudy/Content/Component'
import ExperienceSection from './ExperienceSection/Component'
import HelpYou from './Services/Service/HelpYou/Component'
import WhyWCG from './Services/Service/WhyWCG/Component'
import FAQ from './Services/Service/FAQ/Component'
import ServicesRecommendations from './Services/Service/ServicesRecommendations/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  'hero-home': HeroSection,
  'hero-services': HeroServices,
  'hero-service': HeroService,
  'service-about': ServiceAbout,
  'our-services': OurServices,
  industries: Industries,
  portfolio: Portfolio,
  'case-studies': CaseStudies,
  'featured-blogs': FeaturedBlogs,
  srv: ServicesTabs,
  'contact-form': ContactForm,
  'career-tabs': CareerTabsBlock,
  'co-content': CompanyContentBlock,
  'image-text-section': ImageTextSectionBlock,
  'job-listings': JobListingsBlock,
  info: SimpleInformationBlock,
  'co-hero': CompanyHeroBlock,
  'it-experts': ITExpertsBlock,
  'mission-vision': MissionVisionBlock,
  'leadership-points': LeadershipPointsBlock,
  testimonials: TestimonialSliderBlock,
  resources: Resources,
  'info-tabs': InfoTabs,
  'extra-info': ExtraInfoBlock,
  ebooks: EbooksBlock,
  'video-tabs': VideoTabsBlock,
  'case-study-hero': CaseStudyHeroBlock,
  'case-study-cn': CaseStudyContentBlock,
  'experience-section': ExperienceSection,
  'help-you-section': HelpYou,
  'why-wcg-section': WhyWCG,
  'faq-section': FAQ,
  'services-more': ServicesRecommendations,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
