import Image from 'next/image'

export default function ExtraInfo() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 flex md:flex-row flex-col gap-6 items-center">
        <div className="md:w-[40%] w-full">
          <h2 className="md:text-[50px] md:leading-[50px] text-3xl font-medium text-black">
            Common security problems which you can fix instantly with our FREE guide:
          </h2>
        </div>
        <div className="md:w-[60%] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
          <div className="md:py-14 py-10 px-5 rounded-[20px] bg-white">
            <div className="flex gap-4 items-start">
              <Image src="/images/circle_check.svg" alt="circle_check" width={41} height={41} />
              <h3 className="md:text-2xl text-xl font-semibold text-black">Prevent data breach</h3>
            </div>
          </div>
          <div className="md:py-14 py-10 px-5 rounded-[20px] bg-white">
            <div className="flex gap-4 items-start">
              <Image src="/images/circle_check.svg" alt="circle_check" width={41} height={41} />
              <h3 className="md:text-2xl text-xl font-semibold text-black">
                Avoid poor password protection
              </h3>
            </div>
          </div>
          <div className="md:py-14 py-10 px-5 rounded-[20px] bg-white">
            <div className="flex gap-4 items-start">
              <Image src="/images/circle_check.svg" alt="circle_check" width={41} height={41} />
              <h3 className="md:text-2xl text-xl font-semibold text-black">
                Defend yourself from suspicious malware
              </h3>
            </div>
          </div>
          <div className="md:py-14 py-10 px-5 rounded-[20px] bg-white">
            <div className="flex gap-4 items-start">
              <Image src="/images/circle_check.svg" alt="circle_check" width={41} height={41} />
              <h3 className="md:text-2xl text-xl font-semibold text-black">
                Be aware of unprotected APIs
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
