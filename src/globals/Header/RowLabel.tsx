'use client'
import { useRowLabel } from '@payloadcms/ui'

interface NewNavItem {
  name?: string
  href?: string
  submenu?: Array<{
    name: string
    href: string
  }>
}

export function RowLabel() {
  const data = useRowLabel<NewNavItem>()

  const label = data?.data?.name
    ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.name}`
    : 'Row'

  return <div>{label}</div>
}
