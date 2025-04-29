import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className='bg-[#202430] pt-12 md:pt-[64px]'>
            <div className='container px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between'>
                    <div className='max-w-full lg:max-w-[376px] lg:mr-4 xl:mr-[17px]'>
                        <div className="relative w-40 h-9">
                            <Image
                                src="/Logo-2.svg"
                                alt="JobHuntly logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className='font-normal text-sm sm:text-base leading-[160%] text-[#D6DDEB] mt-6 sm:mt-[32px]'>
                            Great platform for the job seeker that passionate about startups. Find your dream job easier.
                        </p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-[93px]'>
                        <ul className='font-normal text-sm sm:text-base leading-[160%] text-[#D6DDEB] space-y-3 sm:space-y-4'>
                            <li className='font-bold text-white text-base sm:text-lg pb-2 sm:pb-[18px]'>About</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Companies</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Pricing</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Terms</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Advice</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</li>
                        </ul>
                        <ul className='font-normal text-sm sm:text-base leading-[160%] text-[#D6DDEB] space-y-3 sm:space-y-4'>
                            <li className='font-bold text-white text-base sm:text-lg pb-2 sm:pb-[18px]'>Resources</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Help Docs</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Guide</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Updates</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Contact Us</li>
                        </ul>
                    </div>

                    <div className='max-w-full sm:max-w-[362px]'>
                        <h4 className='font-bold text-base sm:text-[18px] text-white mb-4 sm:mb-[18px]'>
                            Get job notifications
                        </h4>
                        <p className='font-normal text-sm sm:text-[16px] text-[#D6DDEB]'>
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-[8px] mt-6 sm:mt-[40px]'>
                            <input 
                                type="email" 
                                className='py-2 sm:py-[12px] px-3 sm:px-[16px] bg-white text-sm sm:text-[16px] font-normal flex-grow' 
                                placeholder='Email Address' 
                            />
                            <button className='bg-[#4640DE] text-white font-bold py-2 sm:py-[12px] px-4 sm:px-[24px] hover:bg-[#3A33C7] transition-colors'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full border-t border-[#FFFFFF]/20 mt-12 sm:mt-[80px]'></div>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 py-6 sm:py-[42px] items-center justify-between'>
                    <p className='text-white text-sm sm:text-[16px] font-medium order-2 sm:order-1'>
                        2021 @ JobHuntly. All rights reserved.
                    </p>
                    <div className='flex gap-4 sm:gap-[24px] items-center order-1 sm:order-2'>
                        {['Facebook', 'Instagram', 'Dribbble', 'LinkedIn', 'Twitter'].map((social) => (
                            <div key={social} className="relative w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 transition-opacity">
                                <Image
                                    src={`/${social}.svg`}
                                    alt={`${social} icon`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer