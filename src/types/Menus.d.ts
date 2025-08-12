export interface SubMenuItem {
  name: string
  href: string
}

export interface MegaMenuSection {
  title: string
  items: { name: string; href: string }[]
}

export interface MenuItem {
  name: string
  href: string
  submenu?: SubMenuItem[]
  megaMenu?: MegaMenuSection[]
}
