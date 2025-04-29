"use client";

import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <div className='bg-[#F8F8FD] pb-10 md:pb-[103px]'>
            <div className='container px-4 sm:px-6 lg:px-8'>
                <nav className='flex flex-col md:flex-row justify-between items-center py-4 md:py-[14px] gap-4 md:gap-0'>
                    <div className='flex flex-col md:flex-row items-center gap-4 md:gap-[48px] w-full md:w-auto'>
                        <img
                            src="/Logo.svg"
                            alt="logo"
                            className='w-32 md:w-auto'
                        />
                        <ul className='flex items-center gap-4 md:gap-[16px] text-sm md:text-[16px] text-[#515B6F]'>
                            <li>
                                <Link href="/find-jobs" className="hover:text-[#3A33C7] transition whitespace-nowrap">
                                    Find Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="/browse-companies" className="hover:text-[#3A33C7] transition whitespace-nowrap">
                                    Browse Companies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex gap-3 md:gap-[16px] w-full md:w-auto justify-center md:justify-normal'>
                        <Link href="/login">
                            <button className='px-4 md:px-[24px] py-2 md:py-[12px] hover:bg-[#3A33C7] hover:text-[#F0F0F0] transition duration-500 ease-in-out text-sm md:text-[16px] font-bold whitespace-nowrap'>
                                Login
                            </button>
                        </Link>
                        <span className='border-[#D6DDEB] border-r hidden md:block'></span>
                        <Link href="/register">
                            <button className='px-4 md:px-[24px] py-2 md:py-[12px] hover:bg-[#3A33C7] hover:text-[#F0F0F0] transition duration-500 ease-in-out text-sm md:text-[16px] font-bold whitespace-nowrap'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </nav>

                <div className='mt-8 md:mt-[82px]'>
                    <div className='max-w-full md:max-w-[490px]'>
                        <img 
                            src="/Title.svg" 
                            alt="group" 
                            className='w-full max-w-[400px] md:max-w-none' 
                        />
                        <p className='font-normal text-base md:text-[20px] leading-[160%] mt-3 md:mt-[13px] text-[#515B6F]'>
                            Great platform for the job seeker that searching for new career heights and passionate about startups.
                        </p>
                    </div>
                    <div className='search_bar max-w-full md:max-w-[852px] flex flex-col sm:flex-row flex-wrap mt-6 md:mt-[23px] bg-[#FFFFFF] p-4 md:p-[16px] items-center shadow-md gap-4 sm:gap-0'>
                        <div className='flex items-center gap-4 md:gap-[16px] px-3 md:px-[18px] w-full sm:w-auto'>
                            <img src="/Search.svg" alt="search" className='w-5 h-5' />
                            <input 
                                type="text" 
                                placeholder='Job title or keyword' 
                                className='w-full sm:w-[200px] md:w-[233px] font-normal text-sm md:text-[16px] leading-[160%] border-b border-[#D6DDEB] py-2 md:py-[10px]' 
                            />
                        </div>
                        <div className='flex items-center gap-4 md:gap-[16px] px-3 md:px-[18px] w-full sm:w-auto'>
                            <img src="/Location.svg" alt="location" className='w-5 h-5' />
                            <select className='w-full sm:w-[200px] md:w-[233px] font-normal text-sm md:text-[16px] leading-[160%] border-b border-[#D6DDEB] py-2 md:py-[13px]'>
                                <option>Florence, Italy</option>
                                <option>Rome, Italy</option>
                                <option>Venice, Italy</option>
                            </select>
                        </div>
                        <button className='px-6 md:px-[39.5px] py-3 md:py-[14px] bg-[#3A33C7] text-[#F0F0F0] text-base md:text-[18px] font-bold w-full sm:w-auto text-center'>
                            Search my job
                        </button>
                    </div>
                    <p className='mt-4 md:mt-[16px] text-[#202430] font-normal text-sm md:text-base leading-[160%] text-center md:text-left'>
                        Popular: UI Designer, UX Researcher, Android, Admin
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;