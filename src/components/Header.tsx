import React from 'react'


function Header() {
    return (
        <div className='bg-[#F8F8FD] pb-[103px]'>
            <div className='container'>
                <nav className='flex justify-between items-center flex-wrap py-[14px]'>
                    <div className='flex items-center gap-[48px]'>
                        <img
                            src="/Logo.svg"
                            alt="logo"
                        />
                        <ul className='flex items-center gap-[16px] text-[16px] text-[#515B6F]'>
                            <li>Find Jobs</li>
                            <li>Browse Companies</li>
                        </ul>
                    </div>

                    <div className='flex gap-[16px]'>
                        <button className='px-[24px] py-[12px]  hover:bg-[#3A33C7] hover:text-[#F0F0F0] transition duration-500 ease-in-out text-[16px] font-bold'>Login</button>
                        <span className='border-[#D6DDEB] border-1'></span>
                        <button className='px-[24px] py-[12px]  hover:bg-[#3A33C7] hover:text-[#F0F0F0] transition duration-500 ease-in-out text-[16px] font-bold'>Sign Up</button>
                    </div>
                </nav>

                <div>
                    <div className='max-w-[490px] '>
                        {/* <h2 className='text-[72px] font-[600] leading-[100%] tracking-normal text-[#25324B]  mt-[82px]'>
                            Discover more than <span className='text-[#26A4FF]'>5000+ Jobs</span>
                        </h2> */}
                        <img src="/Title.svg" alt="group" className='mt-[82px]' />
                        <p className='font-normal text-[20px] leading-[160%] mt-[13px] text-[#515B6F]'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                    </div>
                    <div className='search_bar max-w-[852px] flex flex-wrap mt-[23px] bg-[#FFFFFF] p-[16px] items-center shadow-y-'>
                        <div className='flex items-center gap-[16px] px-[18px]'>
                            <img src="/Search.svg" alt="group" className='' />
                            <input type="text" placeholder='Job title or keyword' className='w-[233px] font-normal text-[16px] leading-[160%] border-b border-[#D6DDEB] py-[10px]' />
                        </div>
                        <div className='flex items-center gap-[16px] px-[18px]'>
                            <img src="/Location.svg" alt="location" />
                            <select className='w-[233px] font-normal text-[16px] leading-[160%] border-b border-[#D6DDEB] py-[13px]'>
                                <option>Florence, Italy</option>
                                <option>Florence, Italy</option>
                                <option>Florence, Italy</option>
                            </select>
                        </div>
                        <button className='px-[39.5px] py-[14px] bg-[#3A33C7] text-[#F0F0F0] text-[18px] font-bold'>Search my job</button>
                    </div>
                    <p className='mt-[16px] text-[#202430] font-normal text-base leading-[160%]'>Popular : UI Designer, UX Researcher, Android, Admin</p>
                </div>
            </div>
        </div>
    )
}

export default Header