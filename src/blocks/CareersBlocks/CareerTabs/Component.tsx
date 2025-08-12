'use client'
import { useState } from 'react'

// TypeScript interface matching the simplified Payload config
interface CareerTabsBlockProps {
  tabs: Array<{
    label: string
    content: Array<{
      paragraph: string
    }>
  }>
}

type Props = {
  className?: string
  id?: string
} & CareerTabsBlockProps

export default function CareerTabs(props: Props) {
  const { tabs, className = '', id } = props
  const [activeIndex, setActiveIndex] = useState(0)

  // Early return if no tabs
  if (!tabs || tabs.length === 0) {
    return null
  }

  return (
    <section className={`py-16 ${className}`} id={id}>
      <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col gap-6 items-start">
        {/* Sidebar */}
        <div className="md:w-[30%] w-full grid md:grid-cols-1 grid-cols-2 md:gap-0 gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-full flex items-center md:gap-3 gap-0.5 md:py-9 py-2 md:px-0 px-0.5 
                md:rounded-none rounded-[10px] md:text-left text-center md:justify-start justify-center 
                transition md:text-[26px] md:leading-normal text-lg leading-5 text-[#9D9D9D] font-normal 
                md:border-b md:border-black/15 md:border-0 border border-[#DDEAF9] group last:md:border-b-0
                ${
                  activeIndex === index
                    ? 'font-semibold text-wils_orang'
                    : 'hover:font-semibold hover:text-wils_orang'
                }
              `}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:w-[70%] p-8 rounded-[20px] space-y-6 shadow-[0px_0px_0px_1px] shadow-[#DDEAF9]">
          <h3 className="md:text-5xl text-3xl text-wils_orang font-normal mb-4">
            {tabs[activeIndex].label}
          </h3>
          {tabs[activeIndex].content.map((item, idx) => (
            <p key={idx} className="md:text-2xl text-xl font-medium text-black">
              {item.paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
