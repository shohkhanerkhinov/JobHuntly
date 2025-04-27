import React from 'react';
import Image from 'next/image';

interface JobCard {
    id: number;
    image: string;
    title: string;
    company: string;
    location: string;
    category: string[];
    button: string;
}

const LatestJobs = () => {
    const jobCards: JobCard[] = [
        {
            id: 1,
            image: '/logo1.svg',
            title: "Social Media Assistant",
            company: "Nomad",
            location: "Paris, France",
            category: ["Marketing", "Design"],
            button: "Full-Time"
        },
        {
            id: 2,
            image: '/logo2.svg',
            title: "Social Media Assistant",
            company: "Netify",
            location: "Paris, France",
            category: ["Marketing", "Design"],
            button: "Full-Time"
        },

        {
            id: 3,
            image: '/logo3.svg',
            title: "Brand Designer",
            company: "Dropbox",
            location: "San Francisco, USA",
            category: ["Marketing", "Design"],
            button: "Full-Time"
        },
        {
            id: 4,
            image: '/logo4.svg',
            title: "Brand Designer",
            company: "Maze",
            location: "San Francisco, USA",
            category: ["Marketing", "Design"],
            button: "Full-Time"
        },
        {
            id: 5,
            image: '/logo5.svg',
            title: "Interactive Developer",
            company: "Torridorm",
            location: "Hamburg, Germany",
            category: ["Marketing", "Design"],
            button: "Full-Time"
        },
        {
            id: 6,
            image: '/logo6.svg',
            title: "Interactive Developer",
            company: "Udacity",
            location: "Hamburg, Germany",
            category: ["Marketing", "Design"],
            button: "Full-Time"
        },
        {
            id: 7,
            image: '/logo7.svg',
            title: "HR Manager",
            company: "Packer",
            location: "Lucern, Switzerland",
            category: ["Marketing", "Design"],
            button: "Full-Time"
        },
        {
            id: 8,
            image: '/logo8.svg',
            title: "HR Manager",
            company: "Wobflow",
            location: "Lucern, Switzerland",
            category: ["Marketing", "Design"],
            button: "Full-Time"
        }
    ];

    const getCategoryStyle = (category: string) => {
        switch (category.toLowerCase()) {
            case 'marketing':
                return 'bg-[#FFFFFF] text-[#FFB836]';
            case 'design':
                return 'bg-[#F0F7FF] text-[#26A4FF]';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="w-full relative">
            <div
                className="absolute inset-0 -z-10 "
                style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                        '<svg width="1440" height="877" viewBox="0 0 1440 877" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1440 877V0H129L0 64V877H1440Z" fill="#F8F8FD"/></svg>'
                    )}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </div>
            <div className="absolute inset-0 -z-10 w-full h-full">
                <Image
                    src="/Pattern.svg"
                    alt="Background pattern"
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'right top', // Adjust as needed
                        opacity: 0.6
                    }}
                    priority
                    quality={100}
                />
            </div>

            <div className='container'>
                <div className='flex flex-wrap justify-between items-end mb-12 pt-[72px]'>
                    <h2 className="text-[48px] font-bold">Latest <span className='text-[#26A4FF]'>jobs open</span></h2>
                    <span className="text-[#4640DE] text-[16px] font-medium flex items-center gap-2 cursor-pointer hover:underline">
                        Show all jobs
                        <Image
                            src="/Iconright.svg"
                            alt="Arrow icon"
                            width={16}
                            height={16}
                        />
                    </span>
                </div>

                <div className="grid pb-[60px] grid-cols-1 sm:grid-cols-2 gap-6">
                    {jobCards.map(job => (
                        <div
                            key={job.id}
                            className="max-w-[580px] flex flex-wrap py-[24px] px-[40px] hover:shadow-[0_12px_24px_-6px_rgba(45,67,121,0.1)] transition-all bg-white"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <Image
                                    src={job.image}
                                    alt={`${job.company} logo`}
                                    width={64}
                                    height={64}
                                    className="object-contain mr-[34px]"
                                />

                            </div>

                            <div>
                                <h3 className="text-[20px] font-bold text-[#25324B] mb-[8px]">{job.title}</h3>

                                <div className="flex items-center text-[#515B6F] text-[16px] gap-1 mb-[8px]">
                                    <span>{job.company}</span>
                                    <span className="text-[#7C8493]">•</span>
                                    <span className="truncate">{job.location}</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[#56CDAD] flex items-center bg-[#56CDAD1A] text-[14px] px-[10px] rounded-full">
                                        {job.button}
                                    </span>
                                    <span className='w-[1px] bg-[#D6DDEB]'></span>
                                    {job.category.map(cat => (
                                        <span
                                            key={cat}
                                            className={`${getCategoryStyle(cat)} text-[14px] border flex items-center px-[10px]  py-[4px] rounded-full font-medium`}
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestJobs;