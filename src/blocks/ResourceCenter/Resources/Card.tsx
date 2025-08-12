'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ResourceCardProps {
  title: string
  description: string
  image: string
  type: string
  tag: string
  date: string
  slug: string
  client: string
}

const ResourceCard: FC<ResourceCardProps> = ({
  title,
  description,
  image,
  type,
  tag,
  date,
  slug,
  client,
}) => {
  const caseStudyUrl = `/case-studies/${slug}`

  return (
    <div className="rounded-t-[24px] overflow-hidden">
      <div className="relative h-[284px] rounded-[24px]">
        <p className="text-xs font-normal text-white bg-wils_orang px-2.5 py-3.5 absolute right-0 left-[57px] rounded-tr-[24px]">
          {tag}
        </p>
        <Image
          src={image}
          alt={title}
          className="object-cover object-top w-full h-full rounded-[24px]"
          width={288}
          height={284}
        />
        <div className="absolute top-0 left-0 bottom-0 w-[57px] bg-foreground flex justify-center items-start pt-4 rounded-bl-[24px]">
          <Image src="/images/logo-icon-white.png" alt="site-icon" width={22} height={27} />
        </div>
      </div>
      <div>
        <Link href={caseStudyUrl} className="text-xs font-bold text-wils_orang my-3 flex w-fit">
          {type}
        </Link>
        <Link
          href={caseStudyUrl}
          className="text-xl md:text-2xl font-semibold tracking-[-0.4px] text-black mb-3.5"
        >
          {title}
        </Link>
        <p className="text-base font-normal text-black mb-6">{description}</p>
        <ul className="flex gap-2 mt-6">
          {date && (
            <li className="text-sm font-normal text-[#49575A] p-2.5 border border-[#CFDCEC] rounded-md">
              {date}
            </li>
          )}
          <li className="text-sm font-normal text-[#49575A] p-2.5 border border-[#CFDCEC] rounded-md">
            {client} min read
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ResourceCard
