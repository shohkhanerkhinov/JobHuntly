import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className='bg-[#202430] pt-[64px]'>
            <div className='container'>
                <div className='flex flex-wrap justify-between'>
                    <div className='max-w-[376px] mr-[17px]'>
                        <Image
                            src="/Logo-2.svg"
                            alt=""
                            width={160}
                            height={36}
                        />
                        <p className='font-normal text-base leading-[160%] tracking-normal text-[#D6DDEB] mt-[32px]'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                    </div>
                    <div className='flex flex-wrap gap-[93px]'>
                        <ul className='font-normal text-base leading-[160%] tracking-normal text-[#D6DDEB] gap-[16px]'>
                            <li className='pb-[18px] font-bold text-[FFFFFF]'>About</li>
                            <li className='pb-[16px]'>Companies</li>
                            <li className='pb-[16px]'>Pricing</li>
                            <li className='pb-[16px]'>Terms</li>
                            <li className='pb-[16px]'>Advice</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <ul className='font-normal text-base leading-[160%] tracking-normal text-[#D6DDEB] gap-[16px]'>
                            <li className='pb-[18px] font-bold text-[FFFFFF]'>Resources</li>
                            <li className='pb-[16px]'>Help Docs</li>
                            <li className='pb-[16px]'>Guide</li>
                            <li className='pb-[16px]'>Updates</li>
                            <li className='pb-[16px]'>Contact Us</li>
                        </ul>
                    </div>
                    <div className='max-w-[362px]'>
                        <h4 className='font-bold text-[18px] text-[#FFFFFF] mb-[18px]'>Get job notifications</h4>
                        <span className='font-normal text-[16px] text-[#D6DDEB]'>The latest job news, articles, sent to your inbox weekly.</span>
                        <div className='flex flex-wrap gap-[8px] mt-[40px]'><input type="email" className='py-[12px] px-[16px] bg-[#FFFFFF] text-[16px] font-normal' placeholder='Email Address' /> <button className='bg-[#4640DE] text-[#FFFFFF] font-[700] py-[12px] px-[24px]'>Subscribe</button></div>
                    </div>
                </div>
                <div className='w-full border mt-[80px] border-[#FFFFFF] '></div>
                <div className='flex flex-wrap py-[42px] items-center justify-between'>
                    <p className='text-[#FFFFFF] text-[16px] font-[500]'>2021 @ JobHuntly. All rights reserved.</p>
                    <div className='flex flex-wrap gap-[24px] items-center'>
                        <Image
                            src="/Facebook.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <Image
                            src="/Instagram.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <Image
                            src="/Dribbble.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <Image
                            src="/LinkedIn.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <Image
                            src="/Twitter.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer