'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FaArrowDown } from 'react-icons/fa'

interface EBookProps {
  title: string
  link: string
  image: string
  description: string
}

const EBookBox: FC<EBookProps> = ({ title, link, image, description }) => {
  return (
    <div className="rounded-t-[24px] overflow-hidden">
      <div className="relative h-[284px] rounded-[24px]">
        <p className="text-xs font-normal text-white bg-wils_orang px-2.5 py-3.5 absolute right-0 left-[57px] rounded-tr-[24px]">
          What You Need to Know?
        </p>
        <Image
          src={image}
          alt={title}
          className="object-cover object-top w-full h-full rounded-[24px]"
          width={288}
          height={284}
        />
        <div className="absolute top-0 left-0 bottom-0 w-[57px] bg-foreground flex justify-center items-start pt-4 rounded-bl-[24px]">
          <Image src="/images/site-icon.png" alt="site-icon" width={22} height={27} />
        </div>
      </div>
      <div className="mt-3">
        <Link href="#" className="text-xl md:text-3xl font-bold tracking-[-0.4px] text-[black]">
          {title}
        </Link>
        <p>{description}</p>
        <Link
          href="#"
          className="text-base font-normal text-wils_orang flex gap-2 items-center border-b border-b-wils_orang w-fit mt-5"
        >
          {link} <FaArrowDown />{' '}
        </Link>
      </div>
    </div>
  )
}

export default EBookBox
