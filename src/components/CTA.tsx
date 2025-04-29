import React from 'react'
import Image from 'next/image'

function CTA() {
  return (
    <div className='container px-4 sm:px-6 lg:px-8 xl:px-0'>
      <div
        className="w-full flex flex-col md:flex-row h-auto md:h-[414px] my-8 md:my-[72px] p-6 md:p-[70px] relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            '<svg width="1192" height="414" viewBox="0 0 1192 414" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z" fill="#4640DE"/></svg>'
          )}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='block z-20 md:w-1/2'>
          <h2 className="max-w-[364px] py-4 md:py-[23px] text-white font-semibold text-3xl sm:text-4xl md:text-[48px] leading-[110%] tracking-normal">
            Start posting jobs today
          </h2>
          <span className='text-white text-base block'>Start posting jobs for only $10.</span>
          <button className='bg-white py-3 px-6 text-[#4640DE] text-base font-bold mt-6 hover:bg-gray-100 transition-colors'>
            Sign Up For Free
          </button>
        </div>

        <div className="md:w-1/2 relative h-64 md:h-auto mt-8 md:mt-0">
          <Image
            src="/Dashboard Company.svg"
            alt="Company Dashboard"
            fill
            className="object-contain object-right"
            style={{
              zIndex: 10
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CTA