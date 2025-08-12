import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Testimonial {
  name: string
  role: string
  rating?: number
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Bruce',
    role: 'Branch Manager',
    rating: 4,
    quote:
      'Wilson State Ramp made access so much easier for my family. The quality is top-notch, and the installation was quick and professional. Highly recommended!',
    avatar: '/images/avatar.png',
  },
]

function ContactForm() {
  return (
    <section className="bg-foreground md:py-24 py-16">
      <div className="container mx-auto md:px-5 px-4 flex md:flex-row flex-col md:gap-16 gap-8">
        <div className="md:w-[37%] w-full">
          <h2 className="text-3xl md:text-6xl font-medium text-white">
            Want to Make
            <br />
            Your Own Success Story?
          </h2>
          <p className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto mt-2 md:mb-10 mb-8">
            Join the many of happy clients we&apos;ve served in the past, contact us today!
          </p>

          {testimonials.map((t, index) => (
            <div key={index}>
              <Image src="/images/qoute.svg" alt="quote" width={47} height={47} />
              <p className="text-white md:text-lg text-base font-normal mt-4 mb-[22px]">
                {t.quote}
              </p>
              <div>
                <span className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {t.rating && i < t.rating ? (
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
                <p className="md:text-lg text-base font-semibold text-white mt-[18px]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="md:w-[63%] w-full">
          <form className="flex flex-col gap-6 w-full">
            <div className="flex md:flex-row flex-col gap-6">
              <div className="md:w-1/2 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className="text-lg font-normal text-white placeholder:text-white border border-white/60 px-4 py-3 rounded-[8px] focus:outline-0 w-full"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address*"
                  className="text-lg font-normal text-white placeholder:text-white border border-white/60 px-4 py-3 rounded-[8px] focus:outline-0 w-full"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-6">
              <div className="md:w-1/2 w-full">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number (Optional)"
                  className="text-lg font-normal text-white placeholder:text-white border border-white/60 px-4 py-3 rounded-[8px] focus:outline-0 w-full"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  className="text-lg font-normal text-white placeholder:text-white border border-white/60 px-4 py-3 rounded-[8px] focus:outline-0 w-full"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message*"
                rows={7}
                className="text-lg font-normal text-white placeholder:text-white border border-white/60 px-4 py-3 rounded-[8px] focus:outline-0 w-full"
              />
              <p className="md:text-base text-sm text-white max-w-2xl mt-4">
                By submitting this form, you are agreeing to Wilson Consulting Group’s{' '}
                <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
                <Link href="/terms-of-service">Terms of Service</Link>.
              </p>
            </div>
            <button className="bg-wils_orang hover:bg-primary text-white px-5 py-3.5 rounded-lg md:text-xl text-base font-semibold md:px-[60px] transition-all">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
