import React from 'react';
import Image from 'next/image';

interface JobCard {
    id: number;
    image?: string;
    button?: string;
    title: string;
    location: string;
    company: string;
    description?: string;
    category: string[];
}

const FeaturedJobs = () => {
    const jobCards: JobCard[] = [
        {
            id: 1,
            image: '/Company Logo1.svg',
            title: "Email Marketing",
            company: "Revolut",
            location: "Madrid, Spain",
            description: "Revolut is looking for Email Marketing to help team manage our email campaigns.",
            category: ["Marketing", "Design"],
            button: "Full Time"
        },
        {
            id: 2,
            image: '/Company2.svg',
            title: "Brand Designer",
            company: "Dropbox",
            location: "San Fransisco, US",
            description: "Dropbox is looking for Brand Designer to help the team t ...",
            category: ["Design", "Business"],
            button: "Full Time"
        },
        {
            id: 3,
            image: '/Company3.svg',
            title: "Email Marketing",
            company: "Pitch",
            location: "Berlin, Germany",
            description: "Pitch is looking for Customer Manager to join marketing t ...",
            category: ["Marketing"],
            button: "Full Time"
        },
        {
            id: 4,
            image: '/Company4.svg',
            title: "Visual Designer",
            company: "Blinklist",
            location: "Granada, Spain",
            description: "Blinkist is looking for Visual Designer to help team desi ...",
            category: ["Design"],
            button: "Full Time"
        },
        {
            id: 5,
            image: '/Company5.svg',
            title: "Product Designer",
            company: "ClassPass",
            location: "Manchester, UK",
            description: "ClassPass is looking for Product Designer to help us...",
            category: [ "Marketing","Design"],
            button: "Full Time"
        },
        {
            id: 6,
            image: '/Company6.svg',
            title: "Lead Designer",
            company: "Canva",
            location: "Ontario, Canada",
            description: "Canva is looking for Lead Engineer to help develop n ...",
            category: [ "Design", "Business"],
            button: "Full Time"
        },
        {
            id: 7,
            image: '/Company7.svg',
            title: "Brand Strategist",
            company: "GoDaddy",
            location: "Marseille, France",
            description: "GoDaddy is looking for Brand Strategist to join the team...",
            category: [ "Marketing"],
            button: "Full Time"
        },
        {
            id: 8,
            image: '/Company8.svg',
            title: "Data Analyst",
            company: "Twitter",
            location: "San Diego, US",
            description: "Twitter is looking for Data Analyst to help team desi ...",
            category: [ "Technology"],
            button: "Full Time"
        },
    ];

    const getCategoryStyle = (category: string) => {
        switch (category.toLowerCase()) {
            case 'marketing':
                return 'bg-[#FFFAEB] text-[#FFB836] text-[14px] px-[16px] py-[4px] rounded-full font-medium'; // Yellow
            case 'business':
                return 'bg-[#F0F7FF] text-[#26A4FF] text-[14px] px-[16px] py-[4px] rounded-full font-medium'; // Blue
            case 'technology':
                return 'bg-[#FF65501A] text-[#FF6550] text-[14px] px-[16px] py-[4px] rounded-full font-medium'; // Darker blue
            case 'human resource':
                return 'bg-[#F0F7FF] text-[#26A4FF] text-[14px] px-[16px] py-[4px] rounded-full font-medium'; // Same as design
            case 'sales':
                return 'bg-[#FFF5F5] text-[#FF5630] text-[14px] px-[16px] py-[4px] rounded-full font-medium'; // Red
            case 'finance':
                return 'bg-[#F5FEF8] text-[#12B76A] text-[14px] px-[16px] py-[4px] rounded-full font-medium'; // Green
            case 'engineering':
                return 'bg-[#F5F3FF] text-[#7F56D9] text-[14px] px-[16px] py-[4px] rounded-full font-medium'; // Purple
            case 'design':
                return 'bg-[#F5FEF8] text-[#12B76A] text-[14px] px-[16px] py-[4px] rounded-full font-medium'; // Same as finance
            default:
                return 'bg-gray-100 text-gray-800 text-[14px] px-[16px] py-[4px] rounded-full font-medium';
        }
    };

    return (
        <div className="container">
            <h1 className="text-[48px] font-bold mb-[48px]">Featured<span className='text-[#26A4FF]'>jobs</span></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobCards.map(job => (
                    <div key={job.id}>
                        <div className='max-w-[274px] border p-[24px] border-[#D6DDEB] hover:shadow-[0_12px_24px_-6px_rgba(45,67,121,0.1)]'>
                            <div className='flex justify-between items-start'>
                                {job.image && (
                                    <Image
                                        src={job.image}
                                        alt={`${job.company} logo`}
                                        width={48}
                                        height={48}
                                    />
                                )}
                                <button className='text-[16px] font-[400] text-[#4640DE] border border-[#4640DE] py-[4px] px-[12px] hover:text-[#FFFFFF] hover:bg-[#4640DE]'>{job.button}</button>
                            </div>
                            <h3 className='text-[18px] font-[600] text-[#25324B] mt-[16px]'>{job.title}</h3>
                            <div className='flex text-[#515B6F] text-[16px] font-[400] gap-[8px] '>
                                {job.company}  <span className='text-[#7C8493]'>•</span>  <span className=' line-clamp-1 overflow-hidden text-ellipsis'>{job.location}</span>
                            </div>
                            <h2 className='text-[#7C8493] text-[16px] font-[400] mt-[16px] line-clamp-2 overflow-hidden text-ellipsis'>{job.description}</h2>
                            <div className='mt-[16px] flex flex-wrap gap-[8px]'>
                                {job.category.map((cat) => (
                                    <span key={cat} className={`${getCategoryStyle(cat)} gap-[8px]`}>
                                        {cat}
                                    </span>
                                ))}                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedJobs;