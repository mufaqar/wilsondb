'use client'

import Image from 'next/image'
import { FC } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { motion } from 'motion/react'
import type { Media } from '@/payload-types'

interface InfoProps {
  title: string
  displayImage: Media | number
  pdfFile: Media | number
  downloadText?: string
  description?: string
}

const InfoSheetBox: FC<InfoProps> = ({
  title,
  displayImage,
  pdfFile,
  downloadText = 'Download',
  description = 'What You Need to Know?',
}) => {
  const getImageUrl = (image: Media | number): string => {
    if (typeof image === 'number') return image.toString()
    return image?.url || '/images/sheet_img.png'
  }

  const getPdfUrl = (pdf: Media | number): string => {
    if (typeof pdf === 'number') return pdf.toString()
    return pdf?.url || '#'
  }

  const getImageAlt = (image: Media | number, fallback: string): string => {
    if (typeof image === 'number') return fallback
    return image?.alt || fallback
  }

  const downloadUrl = getPdfUrl(pdfFile)
  const imageUrl = getImageUrl(displayImage)
  const imageAlt = getImageAlt(displayImage, title)

  return (
    <motion.div
      className="rounded-t-[24px] overflow-hidden cursor-pointer"
      initial={{ y: 0 }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-[284px] rounded-[24px]">
        <p className="text-xs font-normal text-white bg-wils_orang px-2.5 py-3.5 absolute right-0 left-[57px] rounded-tr-[24px] z-10">
          {description}
        </p>
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="object-cover object-top w-full h-full rounded-[24px]"
          width={288}
          height={284}
        />
        <div className="absolute top-0 left-0 bottom-0 w-[57px] bg-foreground flex justify-center items-start pt-4 rounded-bl-[24px]">
          <Image src="/images/logo-icon-white.png" alt="site-icon" width={22} height={27} />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-xl md:text-3xl font-bold tracking-[-0.4px] text-black">{title}</h3>
        <a
          href={downloadUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-normal text-[#00A2E7] flex gap-2 items-center border-b border-b-[#00A2E7] w-fit mt-5 hover:text-[#0082b3] transition-colors duration-200"
        >
          {downloadText} <FaArrowDown />
        </a>
      </div>
    </motion.div>
  )
}

export default InfoSheetBox
