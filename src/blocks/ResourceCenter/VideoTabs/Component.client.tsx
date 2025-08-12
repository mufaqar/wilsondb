'use client'

import { useState } from 'react'
import VideoCard from './VideoCard'

const tabs = [
  { name: 'All', key: 'all' },
  { name: 'Featured', key: 'featured' },
  { name: 'About Us', key: 'about' },
  { name: 'Cyber Security', key: 'cyber' },
  { name: 'Compliance', key: 'compliance' },
  { name: 'Risk Management', key: 'risk' },
  { name: 'Other Services', key: 'other' },
  { name: 'Track Record', key: 'track' },
  { name: 'Insights', key: 'insight' },
]

const allPosts = [
  {
    id: 1,
    title: 'Cyber Security Consulting Services',
    description:
      'WCG offers an extensive range of cyber security, IT governance, risk management and compliance services that will transform your technological and security weaknesses into strengths.',
    tag: 'About Us',
    category: 'about',
    image: '/images/video_img.png',
  },
  {
    id: 2,
    title: 'How To Meet GDPR Requirements',
    description: 'Protect your company from potential financial or reputation harm...',
    tag: 'Featured',
    category: 'featured',
    image: '/images/video_img.png',
  },
  {
    id: 3,
    title: 'Our Track Records',
    description: 'WCG has an excellent track record of supporting our clients...',
    tag: 'About Us',
    category: 'track',
    image: '/images/video_img.png',
  },
]

export default function VideoTabs() {
  const [selectedTab, setSelectedTab] = useState('all')

  const filteredPosts =
    selectedTab === 'all' ? allPosts : allPosts.filter((post) => post.category === selectedTab)

  return (
    <section className="py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <h2 className="md:text-6xl text-3xl font-medium text-white text-center mb-10">
          Our Videos
        </h2>
        {/* Tabs */}
        <div className="flex flex-wrap gap-0 justify-center mb-8 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 text-base font-normal ${
                selectedTab === tab.key
                  ? 'text-wils_orang border-b-2 border-wilstext-wils_orang'
                  : 'text-[#969696] hover:text-wils_orang border-b border-[#969696] hover:border-b-2 hover:border-wils_orang'
              }`}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredPosts.map((post) => (
            <div key={post.id}>
              <VideoCard
                title={post?.title}
                description={post?.description}
                image={post?.image}
                type={post?.tag}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
