'use client'

import type { Page } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import Image from 'next/image'

type WhyWCGBlockProps = Extract<Page['layout'][0], { blockType: 'why-wcg-section' }>

export default function WhyWCGClient({ cards, title }: WhyWCGBlockProps) {
  const checkPoint = getMediaUrl(`/api/media/file/prime_check-circle-1.svg`)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-medium text-center text-black mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item) => (
            <div
              key={item.id}
              className="bg-[#F7F7F8] rounded-[20px] px-5 py-10 shadow-sm flex flex-col gap-4 h-full"
            >
              <div className="flex gap-4 items-start">
                <Image src={checkPoint} alt={'check'} width={41} height={41} />
                <h3 className="md:text-2xl text-xl font-semibold text-black">{item.heading}</h3>
              </div>
              <p className="text-base text-black">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
