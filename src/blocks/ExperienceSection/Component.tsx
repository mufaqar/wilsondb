import Image from 'next/image'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { ContactFormSetting } from '@/payload-types'

export default async function ExperienceSection() {
  const contactSettings = (await getCachedGlobal(
    'contact-form-settings',
    1,
  )()) as ContactFormSetting

  return (
    <section className="bg-background md:py-24 py-16">
      <div className="container mx-auto md:px-5 px-4 flex md:flex-row flex-col md:gap-16 gap-8">
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-6xl font-medium text-black">
            {contactSettings?.title || 'Want to Make Your Own Success Story?'}
          </h2>
          <p className="text-black text-lg md:text-xl font-medium max-w-[430px] mt-2">
            {contactSettings?.description ||
              "Join the many of happy clients we've served in the past, contact us today!"}
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          {contactSettings?.quote?.showQuote && (
            <div>
              <Image src="/images/qoute.svg" alt="quote" width={47} height={47} />
              <p className="text-black md:text-lg text-base font-normal mt-4 mb-[22px]">
                {contactSettings.quote.quote}
              </p>
              <div>
                <span className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {contactSettings.quote.stars && i < contactSettings.quote.stars ? (
                        <svg className="w-5 h-5 text-[#FAAE4B] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-[#FAAE4B59] fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                        </svg>
                      )}
                    </span>
                  ))}
                </span>
                <p className="md:text-lg text-base font-semibold text-black mt-[18px]">
                  {contactSettings.quote.author}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
