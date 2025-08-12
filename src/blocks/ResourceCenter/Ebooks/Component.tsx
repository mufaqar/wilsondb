import EBookBox from './Ebook'

export default function Ebooks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="md:text-6xl text-3xl font-medium text-black text-center mb-10">
          Info Sheets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <EBookBox
            title={'Our Guide on Common Security Risks and How to Solve Them'}
            link={'Download'}
            image={'/images/sheet_img.png'}
            description={
              'Avoid your business running into high-risk problems that could damage your...'
            }
          />
          <EBookBox
            title={'Our Guide on Common Security Risks and How to Solve Them'}
            link={'Download'}
            image={'/images/sheet_img.png'}
            description={
              'Avoid your business running into high-risk problems that could damage your...'
            }
          />
          <EBookBox
            title={'Our Guide on Common Security Risks and How to Solve Them'}
            link={'Download'}
            image={'/images/sheet_img.png'}
            description={
              'Avoid your business running into high-risk problems that could damage your...'
            }
          />
        </div>
      </div>
    </section>
  )
}
