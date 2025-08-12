import { getMediaUrl } from '@/utilities/getMediaUrl'
import { Check } from 'lucide-react'
import Image from 'next/image'

// TypeScript interface matching the simplified Payload config
interface LeadershipPointsBlockProps {
  heading: {
    text: string
  }
  points: Array<{
    text: string
    featured?: boolean
  }>
}

type Props = {
  className?: string
  id?: string
} & LeadershipPointsBlockProps

export default function LeadershipPoints(props: Props) {
  const { heading, points, className = '', id } = props

  // Early return if no content
  if (!heading.text || !points || points.length === 0) {
    return null
  }

  const checkPoint = getMediaUrl(`/api/media/file/prime_check-circle-1.svg`)

  return (
    <section className={`py-16 md:py-20 bg-foreground ${className}`} id={id}>
      <div className="container mx-auto md:px-0 px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Heading Section */}
          <div className="w-full md:w-[42%]">
            <h2 className="text-3xl md:text-6xl font-medium text-white capitalize">
              {heading.text}
            </h2>
          </div>

          {/* Points Section */}
          <div className="w-full md:w-[58%]">
            <div className="space-y-0">
              {points.map((point, index) => (
                <div
                  key={index}
                  className={`
                    flex items-start gap-4 py-6
                    ${index < points.length - 1 ? 'border-b border-white/20' : ''}
                    ${point.featured ? 'bg-white/5' : ''}
                  `}
                >
                  {/* Check Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <Image src={checkPoint} alt="Check" width={41} height={41} />
                  </div>

                  {/* Point Text */}
                  <p className="text-xl md:text-2xl font-medium text-white flex-1">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
