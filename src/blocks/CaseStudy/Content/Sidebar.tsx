import React from 'react'
import RichText from '@/components/RichText'
import type { Page } from '@/payload-types'
import Link from 'next/link'

type SidebarProps = {
  sidebar: Extract<Page['layout'][0], { blockType: 'case-study-cn' }>['sb']
}

export default function Sidebar({ sidebar }: SidebarProps) {
  if (!sidebar) return null

  const { title, description, 'button-text': buttonText, btn_link } = sidebar

  return (
    <div>
      <div className="bg-background py-11 px-9 rounded-[25px]">
        <h3 className="md:text-[32px] md:leading-[36px] text-2xl font-semibold text-black mb-3">
          {title}
        </h3>
        {description && (
          <div className="text-black text-lg md:text-xl font-normal mb-5">
            <RichText data={description} enableGutter={false} />
          </div>
        )}
        {btn_link && (
          <Link href={btn_link.url || ''} className="secondary_btn">
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  )
}
