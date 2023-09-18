'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiChevronRight } from 'react-icons/bi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const statContent = {
    stats: [
        {
            number: '97.53%',
            label: 'Satisfaction Rate',
        },
        {
            number: '493',
            label: 'Completed Projects',
        },
        {
            number: '28',
            label: 'Business Partners',
        },
    ],
    getStarted: {
        heading: 'Looking for a new design?',
        description:
            "If you're looking for a new design for your website, we've got you covered. Our team of web designers and developers can build a website that fits your needs. ",
        img: '/images/woman-computer.svg',
        cta: {
            cta_href: '#_',
            cta_label: 'Continue Reading',
        },
    },
};

const Stats = () => {
    useEffect(() => {
        Aos.init({
            duration: 400,
            once: true,
            easing: 'slide',
        });
    });

    return (
        <section className='pt-20 pb-10'>
            <div className='container mx-auto px-4'>
                <div className='lg:flex justify-between items-center space-x-0'>
                    <div className='w-full lg:w-7/12 mb-20 lg:mb-0'>
                        <div className='grid grid-cols-3'>
                            {statContent.stats.map((stat, idx) => {
                                return (
                                    <div
                                        className='text-center lg:text-left '
                                        key={stat.label}
                                        data-aos='fade-up'
                                        data-aos-delay={idx * 100}>
                                        <strong className='text-primary text-4xl xl:text-[52px] font-bold block leading-tight'>
                                            {stat.number}
                                        </strong>
                                        <span className='text-body text-sm xl:text-base'>
                                            {stat.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12'>
                        <div
                            className='bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-32 lg:!pr-40 rounded-lg relative'
                            data-aos='fade-up'
                            data-aos-delay='300'>
                            <Image
                                src={statContent.getStarted.img}
                                alt='Get started'
                                width={128}
                                height={96}
                                className='absolute right-0 lg:right-6 -top-8 w-24 lg:w-32'
                            />

                            <h3 className='text-heading font-bold text-xl mb-3'>
                                {statContent.getStarted.heading}
                            </h3>

                            <p className='text-md mb-5'>
                                {statContent.getStarted.description}
                            </p>

                            <Link
                                href={statContent.getStarted.cta.cta_href}
                                className='flex space-x-2 outline-none items-center font-semibold text-primary group'>
                                <span>{statContent.getStarted.cta.cta_label}</span>
                                <span className='w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary'>
                                    <BiChevronRight className='text-lg' />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
