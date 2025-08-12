'use client'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const ServiceRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ title?: string }>()

  const label = data?.data?.title
    ? `Service ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.title}`
    : `Service ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return <div>{label}</div>
}
