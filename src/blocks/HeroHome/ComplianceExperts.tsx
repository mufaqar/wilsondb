import React from 'react'

interface ComplianceExpertsProps {
  sectionLabel: string
  title: string
  description: string
}

export function ComplianceExperts({ sectionLabel, title, description }: ComplianceExpertsProps) {
  return (
    <div className="container mx-auto bg-white rounded-3xl py-16 px-4 sm:px-6 lg:px-8 mt-[-100px] mb-5 shadow-[0px_0px_0px_1px] shadow-[#DDEAF9]">
      <div className="border-wils_orang border-l-2 grid md:grid-cols-2 grid-cols-1 gap-6 items-center px-5">
        <div>
          <p className="textbase font-bold text-black">{sectionLabel}</p>
          <h2 className="md:text-5xl text-3xl font-medium text-black">{title}</h2>
        </div>
        <div>
          <p className="text-lg font-normal text-black">{description}</p>
        </div>
      </div>
    </div>
  )
}
