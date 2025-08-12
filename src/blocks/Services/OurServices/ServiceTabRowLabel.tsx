'use client'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const ServiceTabRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ label?: string }>()

  const label = data?.data?.label
    ? `Service Tab ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.label}`
    : `Service Tab ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return <div>{label}</div>
}
