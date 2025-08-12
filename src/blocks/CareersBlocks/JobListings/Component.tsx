import type { Page } from '@/payload-types'
import JobListingsClient from './Component.client'

// Extract the correct types from the generated Payload types
type JobListingsBlockProps = Extract<Page['layout'][0], { blockType: 'job-listings' }> & {
  id?: string
}

export default function JobListings(props: JobListingsBlockProps) {
  const { heading = { text: 'Current Opportunities' }, jobs } = props

  // Ensure jobs is always an array, filtering out any invalid entries
  const jobsList = (jobs || []).filter(Boolean)

  return <JobListingsClient heading={heading} jobs={jobsList} />
}
