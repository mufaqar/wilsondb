import { MenuItem } from '@/types/Menus'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import MegaMenu from './Nav/MegaMenu'

interface HeaderNavProps {
  menuItems: MenuItem[]
  mblMenu: boolean
  activeSubmenu: string | null
  setActiveSubmenu: (submenu: string | null) => void
  activeMegaMenu: string | null
  setActiveMegaMenu: (megaMenu: string | null) => void
  setmblMenu: (menu: boolean) => void
  onMobileItemClick: () => void
  mobileMenuEnabled: boolean
}

export default function HeaderNav({
  menuItems,
  mblMenu,
  activeSubmenu,
  setActiveSubmenu,
  activeMegaMenu,
  setActiveMegaMenu,
  setmblMenu,
  onMobileItemClick,
  mobileMenuEnabled,
}: HeaderNavProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleItemClick = (item: MenuItem, event: React.MouseEvent) => {
    if (item.submenu) {
      event.preventDefault()
      const isSubmenuOpen = activeSubmenu === item.name
      setActiveSubmenu(isSubmenuOpen ? null : item.name)
    } else if (item.megaMenu) {
      event.preventDefault()
      // For mega menu items in mobile, toggle the mega menu
      if (mblMenu) {
        const isMegaMenuOpen = activeMegaMenu === item.name
        setActiveMegaMenu(isMegaMenuOpen ? null : item.name)
      }
    } else {
      // For items without submenu/megamenu, close mobile menu and call mobile click handler
      setmblMenu(false)
      onMobileItemClick()
    }
  }

  const handleMegaMenuEnter = (itemName: string, hasMegaMenu: boolean) => {
    if (!hasMegaMenu || mblMenu) return
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveMegaMenu(itemName)
  }

  const handleMegaMenuLeave = () => {
    if (mblMenu) return
    // Add a delay before closing the mega menu
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150) // 150ms delay
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null)
        setActiveSubmenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [setActiveMegaMenu, setActiveSubmenu])

  if (!mobileMenuEnabled && mblMenu) {
    return null
  }

  return (
    <nav ref={menuRef}>
      <ul
        className={` lg:flex-row flex-col md:gap-0 gap-0 lg:static lg:bg-transparent z-50 justify-center ${
          mblMenu ? 'flex absolute bg-background left-0 right-0 p-5 top-[100px]' : 'lg:flex hidden'
        }`}
      >
        {menuItems.map((item) => {
          const isSubmenuOpen = activeSubmenu === item.name
          const isMegaMenuOpen = activeMegaMenu === item.name
          const hasDropdown = item.submenu || item.megaMenu

          return (
            <li key={item.name} className="relative group list-none">
              <Link
                href={item.href}
                onClick={(e) => handleItemClick(item, e)}
                onMouseEnter={() => handleMegaMenuEnter(item.name, !!item.megaMenu)}
                onMouseLeave={handleMegaMenuLeave}
                className={`${
                  isMegaMenuOpen || isSubmenuOpen ? 'text-secondary' : 'text-black'
                } px-4 py-2 hover:text-secondary text-lg font-normal flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200 no-underline whitespace-nowrap`}
              >
                {item.name}
                {hasDropdown && (
                  <FaChevronDown
                    className={`w-3 h-3 mt-1 transition-transform duration-200 ${
                      isMegaMenuOpen || isSubmenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {/* Render mega menu */}
              {isMegaMenuOpen && item.megaMenu && (
                <div
                  onMouseEnter={() => handleMegaMenuEnter(item.name, !!item.megaMenu)}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <MegaMenu sections={item.megaMenu} />
                </div>
              )}

              {/* Render regular submenu */}
              {item.submenu && (
                <ul
                  className={`
            z-50 transition-all duration-200
            ${
              mblMenu
                ? isSubmenuOpen
                  ? 'block relative bg-background mt-1 pl-4'
                  : 'hidden'
                : 'absolute left-0 top-full mt-2 w-52 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible'
            }
          `}
                >
                  {item.submenu.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        href={subItem.href}
                        className="block px-4 py-2 text-black hover:text-secondary text-lg font-medium transition-colors duration-200 no-underline"
                        onClick={onMobileItemClick}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
