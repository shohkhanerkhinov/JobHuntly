import React from 'react'
import Image from 'next/image'

function Company() {
  return (
    <div className='container px-4 sm:px-6 lg:px-8'>
      <div className='py-8 md:py-[48px]'>
        <span className='font-normal text-base md:text-lg leading-[160%] text-[#202430]'>
          Companies we helped grow
        </span>
        <div className="flex items-center justify-center md:justify-between gap-4 sm:gap-6 md:gap-8 flex-wrap pt-6 md:pt-[32px]">
          <div className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14">
            <Image
              src="/vodafone-2017-logo.svg"
              alt="Vodafone logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14">
            <Image
              src="/intel-3.svg"
              alt="Intel logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14">
            <Image
              src="/tesla-9 1.svg"
              alt="Tesla logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14">
            <Image
              src="/amd-logo-1.svg"
              alt="AMD logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14">
            <Image
              src="/talkit 1.svg"
              alt="Talkit logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company