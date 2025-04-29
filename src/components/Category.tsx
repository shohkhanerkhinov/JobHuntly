import React from 'react'
import Image from 'next/image';

function Category() {
  const categories = [
    { id: 1, title: 'Design', jobsAvailable: 235, icon: '/Icon1.svg' },
    { id: 2, title: 'Sales', jobsAvailable: 756, icon: '/Icon2.svg' },
    { id: 3, title: 'Marketing', jobsAvailable: 140, icon: '/Vector.svg' },
    { id: 4, title: 'Finance', jobsAvailable: 325, icon: '/Icon4.svg' },
    { id: 5, title: 'Technology', jobsAvailable: 436, icon: '/Icon5.svg' },
    { id: 6, title: 'Engineering', jobsAvailable: 542, icon: '/Icon6.svg' },
    { id: 7, title: 'Business', jobsAvailable: 211, icon: '/Icon7.svg' },
    { id: 8, title: 'Human Resource', jobsAvailable: 346, icon: '/Icon8.svg' },
  ];

  return (
    <div className='container mx-auto px-4 py-12 max-w-7xl'>
      <div className='mt-12 md:mt-[72px] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-12'>
        <h2 className='text-[#25324B] font-semibold text-3xl sm:text-4xl md:text-[48px] leading-[110%]'>
          Explore by <span className='text-[#26A4FF]'>category</span>
        </h2>
        <span className='text-sm sm:text-base md:text-[16px] text-[#4640DE] font-semibold cursor-pointer hover:underline whitespace-nowrap self-end sm:self-auto'>
          Show all jobs →
        </span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-[32px] border border-[#D6DDEB] hover:bg-[#4640DE] transition-all duration-300 cursor-pointer group"
          >
            <div className="w-[49px] h-[49px] flex items-center justify-center mb-4 group-hover:bg-white/20">
              <Image
                src={category.icon}
                alt={category.title}
                width={48}
                height={48}
                className="object-contain group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-[24px] font-semibold text-[#25324B] mt-[32px] group-hover:text-white">
              {category.title}
            </h3>
            <p className="text-[18px] flex gap-[16px] text-[#7C8493] mt-[12px] group-hover:text-white">
              {category.jobsAvailable} jobs available
              <Image
                src="/Iconright.svg"
                width={24}
                height={24}
                alt="arrow"
                className="inline-block group-hover:brightness-0 group-hover:invert"
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category