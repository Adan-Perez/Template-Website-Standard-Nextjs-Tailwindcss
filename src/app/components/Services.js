import React from 'react';
import Image from 'next/image';

const servicesContent = {
    heading: {
        headingSubtitile: 'Our services',
        headingTitle: "Know that you're in good hands!",
        description:
            'We are a group of creative people who design influential brands and digital experiences. We are passionate about what we do and it shows in our work.',
    },
    items: [
        {
            icon: '/images/icons/icon-1.svg',
            title: 'Security',
            description: "App's security is our top priority",
        },
        {
            icon: '/images/icons/icon-2.svg',
            title: 'Performance',
            description: 'We use the latest technologies',
        },
        {
            icon: '/images/icons/icon-3.svg',
            title: 'Deployment for all platforms',
            description: 'The app works on all devices: Android, iOS, PC and Web',
        },
        {
            icon: '/images/icons/icon-4.svg',
            title: 'Connectivity',
            description:
                "No existing internet connection? No problem! We've got you covered",
        },
        {
            icon: '/images/icons/icon-5.svg',
            title: 'Servers and Databases',
            description: 'Your data is safe with us',
        },
        {
            icon: '/images/icons/icon-6.svg',
            title: 'Support',
            description: 'We are here for you 24/7',
        },
    ],
};

const Services = () => {
    return (
        <section className='py-20 bg-light'>
            <div className='container mx-auto px-4'>
                <div className='max-w-xl mx-auto text-center mb-20'>
                    <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-10]">
                        {servicesContent.heading.headingSubtitile}
                    </span>

                    <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
                        {servicesContent.heading.headingTitle}
                    </h2>

                    <h2 className='text-body leading-relaxed'>
                        {servicesContent.heading.description}
                    </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {servicesContent.items.map((item, idx) => (
                        <div className='flex space-x-10' key={item.title}>
                            <div className='w-14 shrink-0'>
                                <span className='inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl'>
                                    <Image
                                        src={item.icon}
                                        width={62}
                                        height={62}
                                        alt='Icon'
                                    />
                                </span>
                            </div>
                            <div>
                                <h3 className='text-heading font-bold text-md mb-3'>
                                    {item.title}
                                </h3>
                                <p className='leading-relaxed '>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
