'use client'
import { FC, useState } from 'react'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

interface ResourceFilterProps {
  selectedTopics: string[]
  selectedTypes: string[]
  onTopicChange: (topic: string) => void
  onTypeChange: (type: string) => void
  availableTopics: string[]
  availableTypes: string[]
}

const ResourceFilter: FC<ResourceFilterProps> = ({
  selectedTopics,
  selectedTypes,
  onTopicChange,
  onTypeChange,
  availableTopics,
  availableTypes,
}) => {
  const [showAllTopics, setShowAllTopics] = useState(false)
  const [showAllTypes, setShowAllTypes] = useState(false)

  const displayedTopics = showAllTopics ? availableTopics : availableTopics.slice(0, 3)
  const displayedTypes = showAllTypes ? availableTypes : availableTypes.slice(0, 3)

  const renderCheckbox = (
    label: string,
    selectedList: string[],
    onChange: (val: string) => void,
  ) => (
    <label className="flex items-center space-x-2 cursor-pointer" key={label}>
      <input type="checkbox" className="peer hidden" />
      <div
        onClick={() => onChange(label)}
        className={`w-7 h-7 border border-[#CFDCEC] rounded-sm flex items-center justify-center ${
          selectedList.includes(label) ? 'bg-wils_orang border-wils_orang' : ''
        }`}
      >
        {selectedList.includes(label) && <FaCheck className="w-4 h-4 text-white" />}
      </div>
      <span
        className={`text-xl font-normal ${
          selectedList.includes(label) ? 'text-wils_orang font-bold' : 'text-[#969696]'
        }`}
      >
        {label}
      </span>
    </label>
  )

  return (
    <div className="w-full bg-white border border-[#CFDCEC] rounded-[20px] p-4 space-y-10">
      <div>
        <h4 className="text-2xl font-bold text-black mb-4">Filter By Topics:</h4>
        <div className="space-y-6">
          {displayedTopics.map((topic) => renderCheckbox(topic, selectedTopics, onTopicChange))}
        </div>
        {availableTopics.length > 3 && (
          <button
            type="button"
            onClick={() => setShowAllTopics(!showAllTopics)}
            className="text-xl font-bold text-wils_orang flex gap-3 items-center mt-6"
          >
            {showAllTopics ? 'See Less' : 'See More'} <FaArrowRight />
          </button>
        )}
      </div>

      <div>
        <h4 className="text-2xl font-bold text-black mb-4">Filter By Types:</h4>
        <div className="space-y-6">
          {displayedTypes.map((type) => renderCheckbox(type, selectedTypes, onTypeChange))}
        </div>
        {availableTypes.length > 3 && (
          <button
            type="button"
            onClick={() => setShowAllTypes(!showAllTypes)}
            className="text-xl font-bold text-wils_orang flex gap-3 items-center mt-6"
          >
            {showAllTypes ? 'See Less' : 'See More'} <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  )
}

export default ResourceFilter
