'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { FaBars, FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import type { Header, Media } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import HeaderNav from './HeaderNav'

interface HeaderClientProps {
  data: Header
}

export function HeaderClient({ data }: HeaderClientProps) {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  const [mblMenu, setmblMenu] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Convert config data to MenuItem format for HeaderNav
  const menuItems =
    data.navItems?.map((item) => {
      const menuItem: any = {
        name: item.name,
        href: item.href,
      }

      // Handle mega menu
      if (item.useMegaMenu && item.megaMenu?.sections) {
        menuItem.megaMenu = item.megaMenu.sections.map((section: any) => ({
          title: section.title,
          items:
            section.items?.map((menuItem: any) => ({
              name: menuItem.name,
              href: menuItem.link?.url || menuItem.link?.reference?.value || '#',
            })) || [],
        }))
      }

      return menuItem
    }) || []

  // Get logo details
  const logoMedia = data.logo?.image as Media
  const logoUrl = logoMedia?.url ? getMediaUrl(logoMedia.url) : '/images/logo.png'
  const logoAlt = logoMedia?.alt || 'Logo'

  // Mobile menu settings
  const mobileMenuEnabled = data.mobileMenu?.enabled !== false
  const closeOnItemClick = data.mobileMenu?.closeOnItemClick !== false

  // Search button settings
  const searchEnabled = data.searchButton?.enabled !== false
  const searchAriaLabel = data.searchButton?.ariaLabel || 'Search'

  // Contact button settings
  const contactEnabled = data.contactButton?.enabled !== false

  const handleMobileMenuItemClick = () => {
    if (closeOnItemClick) {
      setmblMenu(false)
    }
  }

  return (
    <>
      <header className="p-8 bg-background">
        <div className="container mx-auto md:px-5 px-4 py-3 bg-white rounded-[100px] flex justify-between items-center md:relative z-50">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex w-[128px] h-[52px] justify-center items-center">
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={128}
                height={52}
                className="object-contain max-w-full max-h-full"
              />
            </Link>
          </div>

          {/* Navigation */}
          <HeaderNav
            menuItems={menuItems}
            mblMenu={mblMenu}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={setActiveSubmenu}
            activeMegaMenu={activeMegaMenu}
            setActiveMegaMenu={setActiveMegaMenu}
            setmblMenu={setmblMenu}
            onMobileItemClick={handleMobileMenuItemClick}
            mobileMenuEnabled={mobileMenuEnabled}
          />

          {/* Right Side: Search + Contact */}
          <div className="flex items-center space-x-4">
            {searchEnabled && (
              <button
                className="bg-secondary rounded-full text-white hover:bg-primary md:w-[52px] w-[32px] md:h-[52px] h-[32px] flex items-center justify-center"
                aria-label={searchAriaLabel}
              >
                <FaSearch className="md:text-xl text-lg" />
              </button>
            )}
            {mobileMenuEnabled && (
              <button
                onClick={() => setmblMenu(!mblMenu)}
                className="lg:hidden flex text-2xl"
                aria-label={mblMenu ? 'Close menu' : 'Open menu'}
              >
                {!mblMenu ? <FaBars /> : <IoClose />}
              </button>
            )}
            {contactEnabled && data.contactButton?.text && data.contactButton?.href && (
              <Link
                href={data.contactButton.href}
                className="bg-primary hover:bg-secondary text-xl font-medium text-white px-7 py-3 rounded-[18px] md:inline-flex hidden"
              >
                {data.contactButton.text}
              </Link>
            )}
          </div>
        </div>
      </header>
      {activeMegaMenu !== null && (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-[#8181814D] z-10" />
      )}
    </>
  )
}
