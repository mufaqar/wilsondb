import type { Page } from '@/payload-types'
import InfoSheetBox from './InfoSheetBox'
import Link from 'next/link'

// Type for the InfoTabs block props
type InfoTabsBlockProps = Extract<Page['layout'][0], { blockType: 'info-tabs' }> & {
  id?: string
}

export default function InfoTabs(props: InfoTabsBlockProps) {
  const {
    heading = 'Info Sheets',
    infoSheets = [],
    viewAllButton = { enabled: true, text: 'View All', link: '/resources' },
  } = props

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="md:text-6xl text-3xl font-medium text-black text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {infoSheets && infoSheets.length > 0 ? (
            infoSheets.map((sheet, index) => (
              <InfoSheetBox
                key={index}
                title={sheet.title}
                displayImage={sheet.displayImage}
                pdfFile={sheet.pdfFile}
                downloadText={sheet.downloadText || 'Download'}
                description={sheet.description || 'What You Need to Know?'}
              />
            ))
          ) : (
            <div>No sheets configured</div>
          )}
        </div>
        {viewAllButton?.enabled && (
          <div className="mt-16 justify-center items-center flex">
            <Link href={viewAllButton.link || '/resources'} className="secondary_btn mx-auto">
              {viewAllButton.text || 'View All'}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
