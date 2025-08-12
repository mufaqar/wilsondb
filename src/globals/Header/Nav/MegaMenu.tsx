'use client'

import Link from 'next/link'

interface MegaMenuProps {
  sections: {
    title: string
    items: { name: string; href: string }[]
  }[]
}

export default function MegaMenu({ sections }: MegaMenuProps) {
  return (
    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-full md:mt-6 md:w-[1240px] md:rounded-[40px] md:bg-white md:pt-9 md:pb-20 md:px-16 flex md:flex-row flex-col md:flex-wrap md:gap-[100px] space-y-4 z-50 px-4 md:shadow-lg">
      {sections.map((section) => (
        <div key={section.title} className="min-w-[211px] max-w-[313px]">
          <h4 className="md:text-2xl text-lg font-medium text-black border-b border-black/10 pb-5 mb-5">
            {section.title}
          </h4>
          <ul className="space-y-4 w-fit list-disc marker:text-secondary marker:text-xl pl-5">
            {section.items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-lg font-normal text-black hover:text-secondary transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
