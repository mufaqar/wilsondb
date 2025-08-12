'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { JSX } from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

import type { Footer, Media } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'

// Icon mapping
const iconMap: Record<string, JSX.Element> = {
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
  phone: <FaPhoneAlt />,
  address: <FaLocationDot />,
}

interface FooterClientProps {
  data: Footer
}

export function FooterClient({ data }: FooterClientProps) {
  const logoMedia = data.logo as Media
  const logoUrl = logoMedia?.url ? getMediaUrl(logoMedia.url) : '/images/logo.png'
  const logoAlt = logoMedia?.alt || 'Logo'

  // Helper function to get link URL (based on CMSLink component logic)
  const getLinkUrl = (link: any) => {
    if (!link) return '#'

    const href =
      link.type === 'reference' &&
      typeof link.reference?.value === 'object' &&
      link.reference.value.slug
        ? `${link.reference?.relationTo !== 'pages' ? `/${link.reference?.relationTo}` : ''}/${link.reference.value.slug}`
        : link.url

    return href || '#'
  }

  return (
    <footer className="bg-foreground pt-[96px] md:px-0 px-4">
      {/* Subscription Center - Static */}
      <div className="container mx-auto rounded-[20px] py-11 px-4 sm:px-7 lg:px-9 mb-5 shadow-[0px_0px_0px_3px] shadow-[#28A0CF1F]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div>
            <h2 className="md:text-5xl text-3xl font-medium text-white mb-3">
              Subscription Center
            </h2>
            <p className="md:text-xl text-lg font-normal text-white">
              Stay In The Know With Our Newsletter
            </p>
          </div>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="text-lg font-normal text-white placeholder:text-white border border-white/60 px-4 py-3 rounded-[8px] focus:outline-0 w-full"
            />
            <button className="bg-wils_orang hover:bg-primary text-white px-5 py-3.5 rounded-lg md:text-xl text-base font-semibold md:px-[60px]">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex md:flex-row flex-col md:gap-10 gap-8">
          {/* Logo & Description */}
          <div className="w-full md:w-[475px]">
            <Link href="/">
              <Image src={logoUrl} alt={logoAlt} width={327} height={64} />
            </Link>
            <p className="text-base font-normal text-white mt-4 mb-10">{data.description}</p>
            <h6 className="text-base font-medium text-white mb-4">Follow Us On</h6>
            <ul className="flex flex-wrap gap-4">
              {data.socialLinks?.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.url} className="text-xl text-[#EF6C33] hover:text-white">
                    {iconMap[item.iconLabel || ''] || <FaFacebook />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-[220px]">
            <h6 className="text-lg font-bold text-wils_orang mb-4">Quick Links</h6>
            <ul className="flex flex-col gap-4">
              {data.quickLinks?.map((linkItem, idx) => (
                <li key={idx}>
                  <Link
                    href={getLinkUrl(linkItem.link)}
                    className="text-base font-normal text-white hover:text-wils_orang"
                  >
                    {linkItem.link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-bold text-wils_orang mb-4">Our Services</h6>
            <ul className="flex flex-col gap-4">
              {data.services?.map((serviceItem, idx) => (
                <li key={idx}>
                  <Link
                    href={getLinkUrl(serviceItem.link)}
                    className="text-base font-normal text-white hover:text-wils_orang"
                  >
                    {serviceItem.link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-bold text-wils_orang mb-4">Contact Info</h6>
            <ul className="flex flex-col gap-4">
              {data.contactInfo?.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.url || '#'}
                    className="text-base font-normal text-white hover:text-wils_orang flex gap-3.5 items-center underline"
                  >
                    <span className="text-wils_orang">
                      {iconMap[item.iconLabel || ''] || <FaEnvelope />}
                    </span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 pb-[50px] pt-[38px] border-t border-white/15 flex justify-between flex-wrap gap-4">
        <p className="text-base font-normal text-white">
          {data.copyrightText?.replace('{year}', new Date().getFullYear().toString()) ||
            `© ${new Date().getFullYear()} Wilson Consulting Group. All Rights Reserved.`}
        </p>
        <ul className="flex flex-wrap gap-4">
          {data.bottomLinks?.map((linkItem, idx) => (
            <li key={idx}>
              <Link
                href={getLinkUrl(linkItem.link)}
                className="text-base font-normal text-white hover:text-wils_orang"
              >
                {linkItem.link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
