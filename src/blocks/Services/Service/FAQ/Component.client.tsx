'use client'

import type { Page } from '@/payload-types'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

type FAQBlockProps = Extract<Page['layout'][0], { blockType: 'faq-section' }>

export default function FAQClient({ title, description, faqs }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // 👈 default open

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-16 gap-8 md:mb-20 mb-12">
        <div className="md:w-[40%] w-full">
          <h2 className="text-3xl md:text-6xl font-medium text-black">{title}</h2>
          <p className="text-black text-lg md:text-xl font-medium max-w-2xl mx-auto mt-2 md:mb-10 mb-8">
            {description}
          </p>
        </div>
        <div className="md:w-[60%] w-full flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              onClick={() => toggleFAQ(index)}
              className="py-5 border-b border-[#E5E5E5]"
            >
              <h4 className="flex justify-between cursor-pointer">
                <span className="md:text-xl text-lg font-medium text-black mb-3 flex w-full">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 text-wils_orang ${
                    openIndex === index ? '-rotate-180' : ''
                  }`}
                />
              </h4>
              {openIndex === index && (
                <p className="text-black md:text-xl text-lg font-normal">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
