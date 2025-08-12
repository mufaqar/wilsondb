import { FC } from 'react'
import { FaSearch } from 'react-icons/fa'

interface ResourceSearchProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

const ResourceSearch: FC<ResourceSearchProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <form className="relative" onSubmit={(e) => e.preventDefault()}>
      <div className="w-full">
        <label htmlFor="search" className="text-sm font-semibold text-[#49575A] mb-2.5">
          Filter By Type
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search By Keyword"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="text-lg font-semibold text-[#49575A] placeholder:text-[#49575A] border border-[#CFDCEC] px-4 py-3 rounded-[8px] focus:outline-0 w-full"
        />
      </div>
      <button
        type="submit"
        className="text-wils_orang text-2xl absolute top-1/2 right-5 cursor-pointer"
      >
        <FaSearch />
      </button>
    </form>
  )
}

export default ResourceSearch
