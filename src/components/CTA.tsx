import React from 'react'
import Image from 'next/image'

function CTA() {
  return (
    <div className='container'>
      <div
        className="w-full felx flex-wrap h-[414px] my-[72px] p-[70px] relative"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            '<svg width="1192" height="414" viewBox="0 0 1192 414" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z" fill="#4640DE"/></svg>'
          )}")`
        }}
      >
        <div className='block'>
          <h2 className="max-w-[364px] py-[23px] text-white font-semibold text-[48px] leading-[110%] tracking-normal">
            Start posting jobs today
          </h2>
          <span className='text-white text-[16px] block'>Start posting jobs for only $10.</span>
          <button className='bg-white py-[12px] px-[24px] text-[#4640DE] text-[16px] font-bold mt-[24px]'>
            Sign Up For Free
          </button>
        </div>

        <Image
          src="/Dashboard Company.svg"
          alt="Description"
          width={564}
          height={344}
          className="absolute"
          style={{

            left: '46.85%',
            top: '16.91%',
            zIndex: 10
          }}
        />
      </div>
    </div>
  )
}

export default CTA