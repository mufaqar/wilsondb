'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface VideoCardProps {
  title: string
  description: string
  image: string
  type: string
}

const VideoCard: FC<VideoCardProps> = ({ title, description, image, type }) => {
  return (
    <div className="rounded-t-[24px] overflow-hidden">
      <div className="relative h-[387px] rounded-[24px]">
        <Image
          src={image}
          alt={title}
          className="object-cover object-top w-full h-full rounded-[24px]"
          width={398}
          height={387}
        />
      </div>
      <div>
        <Link href="#" className="text-xs font-bold text-wils_orang my-3 flex w-fit">
          {type}
        </Link>
        <Link
          href="#"
          className="text-xl md:text-2xl font-medium tracking-[-0.4px] text-white flex w-fit mb-3.5"
        >
          {title}
        </Link>
        <p className="text-base font-normal text-white mb-6">{description}</p>
      </div>
    </div>
  )
}

export default VideoCard
