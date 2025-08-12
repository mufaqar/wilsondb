'use client'

import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

// Job interface matching the config and Payload types
interface Job {
  title: string
  location: string
  description: string
  featured?: boolean | null
}

const JobCard = ({ title, location, description, featured }: Job) => {
  const isFeatured = Boolean(featured)

  const truncateDescription = (text: string, maxLength: number = 500) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <div
      className={`bg-[#F7F7F8] rounded-[20px] px-6 pt-8 pb-12 transition-all duration-200 hover:shadow-lg hover:shadow-wils_orang/20 ${
        isFeatured ? 'ring-2 ring-wils_orang ring-opacity-20' : ''
      }`}
    >
      <div className="flex items-center align-middle justify-start">
        <div className="flex items-center gap-2 mb-4 text-wils_orang text-xs font-semibold uppercase">
          <FaLocationDot />
          <span>{location}</span>
        </div>
        {isFeatured && (
          <div className="ml-auto mb-4">
            <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-wils_orang bg-opacity-10 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-medium text-black mb-4 tracking-[-0.3px]">{title}</h3>
      <p className="text-sm md:text-base text-black truncate">{truncateDescription(description)}</p>
    </div>
  )
}

// Simplified interface matching the actual config
interface JobListingsClientProps {
  heading: {
    text: string
  }
  jobs: Job[]
}

type Props = {
  className?: string
  id?: string
} & JobListingsClientProps

export default function JobListingsClient(props: Props) {
  const { heading, jobs, className = '', id } = props

  // Early return if no jobs
  if (!jobs || jobs.length === 0) {
    return (
      <section className={`py-16 bg-white ${className}`} id={id}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-7 md:mb-12">
            {heading.text}
          </h2>
          <p className="text-center text-gray-600">No job listings available at this time.</p>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 bg-white ${className}`} id={id}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-medium text-black text-center mb-7 md:mb-12">
          {heading.text}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              location={job.location}
              description={job.description}
              featured={job.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
