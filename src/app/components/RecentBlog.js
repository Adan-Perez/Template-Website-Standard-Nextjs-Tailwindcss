'use client';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const blogContent = {
    heading: {
        headingSubTitle: 'Our ideas & thoughts',
        headingTitle: "Look what's happening in our studio",
        description:
            'We are a group of creative people who design influential brands and digital experiences. We are passionate about what we do and it shows in our work.',
    },
    recentBlog: [
        {
            permaLink: '#_',
            featuredImg: '/images/blog_imgs/blog-1.webp',
            title: 'Future is now: CPU performance roadmap through 2025',
            excerpt:
                'The future of CPU performance is looking bright. Here’s what to expect in the coming years.',
            author: {
                name: 'John Doe',
                img: '/images/blog_imgs/author-1.webp',
                titleRole: 'Hardware Engineer',
            },
        },
        {
            permaLink: '#_',
            featuredImg: '/images/blog_imgs/blog-2.webp',
            title: 'What is the future of remote work?',
            excerpt:
                'Mmm… Remote work. What does the future hold for us? Let’s find out in this article.',
            author: {
                name: 'Randy Blue',
                img: '/images/blog_imgs/author-2.webp',
                titleRole: 'CEO & Founder',
            },
        },

        {
            permaLink: '#_',
            featuredImg: '/images/blog_imgs/blog-3.webp',
            title: 'Team is the most important thing in a startup',
            excerpt: 'We can learn a lot from the way startups work. Here’s why.',

            author: {
                name: 'Lily James',
                img: '/images/blog_imgs/author-3.webp',
                titleRole: 'Internet Entrepreneur',
            },
        },
        {
            permaLink: '#_',
            featuredImg: '/images/blog_imgs/blog-4.webp',
            title: 'Yes, you can be happier at work. Here’s how.',
            excerpt:
                'Know the best practices to improve your happiness at work. Probably the best article you’ll read today.',
            author: {
                name: 'Xander Cage',
                img: '/images/blog_imgs/author-4.webp',
                titleRole: 'Workplace Happiness Expert',
            },
        },
        {
            permaLink: '#_',
            featuredImg: '/images/blog_imgs/blog-5.webp',
            title: 'Elon Musk is the most important person in tech?',
            excerpt: 'What happens when you have a great leader?',
            author: {
                name: 'Helen Keller',
                img: '/images/blog_imgs/author-5.webp',
                titleRole: 'Information Security Analyst',
            },
        },
    ],
    cta: {
        href: '#_',
        label: 'View All Posts',
        labelSuffix: 'Click here',
    },
};

const RecentBlog = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(null);
    const [isBeginning, setIsBeginning] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        setIsEnd(sliderRef.current?.swiper.isEnd);
        setIsBeginning(sliderRef.current?.swiper.isBeginning);
    }, [slideIndex]);

    const prevHandler = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const nextHandler = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className='py-20 bg-light overflow-x-hidden'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-between items-center mb-10'>
                    <div className='lg:w-5/12 mb-10 lg:mb-0'>
                        <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-10]">
                            {blogContent.heading.headingSubTitle}
                        </span>

                        <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
                            {blogContent.heading.headingTitle}
                        </h2>
                        <p className='text-body leading-relaxed mb-5'>
                            {blogContent.heading.description}
                        </p>
                    </div>
                    <div className='lg:w-5/12 text-left lg:text-right'>
                        <div className='inline-flex ml-auto space-x-3'>
                            <div
                                onClick={prevHandler}
                                className={`${
                                    isBeginning == true
                                        ? 'opacity-30 bg-secondary cursor-auto'
                                        : 'opacity-100 hover:bg-primary'
                                } grupo transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-secondary rounded-full inline-flex justify-center items-center`}>
                                <BiChevronLeft
                                    className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                                        isBeginning == true
                                            ? 'group-hover:!text-primary'
                                            : 'group-hover:text-white hover:text-white'
                                    }`}
                                />
                            </div>

                            <div
                                onClick={nextHandler}
                                className={`${
                                    isEnd == true
                                        ? 'opacity-30 bg-secondary cursor-auto'
                                        : 'opacity-100 hover:bg-primary'
                                } grupo transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-secondary rounded-full inline-flex justify-center items-center`}>
                                <BiChevronRight
                                    className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                                        isEnd == true
                                            ? 'group-hover:!text-primary'
                                            : 'group-hover:text-white hover:text-white'
                                    }`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Swiper
                    breakpoints={{
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        968: {
                            width: 968,
                            slidesPerView: 2,
                        },
                    }}
                    ref={sliderRef}
                    speed={700}
                    spaceBetween={30}
                    onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
                    className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:bottom-5 before:bg-light">
                    {blogContent.recentBlog.map((blog, idx) => (
                        <SwiperSlide
                            key={blog.title}
                            className='overflow-visible h-full'>
                            <div className='p-5 rounded-lg bg-white relative mt-10'>
                                <Link
                                    href={blog.permaLink}
                                    className='relative -mt-10 inline-block overflow-hidden rounded-lg mb-4'>
                                    <Image
                                        src={blog.featuredImg}
                                        alt={blog.title}
                                        width={596}
                                        height={350}
                                        style={{ height: '350px' }}
                                    />

                                    <h2 className='text-heading text-lg font-bold leading-7 mb-5 mt-3'>
                                        {blog.title}
                                    </h2>

                                    <p className='relative mb-6'>{blog.excerpt}</p>
                                    <div className='flex items-center space-x-4'>
                                        <div className='flex-shrink-0'>
                                            <Image
                                                src={blog.author.img}
                                                alt={blog.author.name}
                                                width={50}
                                                height={50}
                                                className='rounded-full object-cover w-14 h-14'
                                            />
                                        </div>
                                        <div className='leading-5'>
                                            <strong className='text-primary'>
                                                {blog.author.name}
                                            </strong>
                                            <span className='text-body text-sm block'>
                                                {blog.author.titleRole}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='mx-auto flex items-center justify-center'>
                    <Link
                        href={blogContent.cta.href}
                        className='duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400'>
                        {blogContent.cta.label}{' '}
                        <strong className='text-primary pl-1 font-semibold'>
                            {blogContent.cta.labelSuffix}
                        </strong>
                        <span className='text-gray-300'> |</span>
                        <span className='bg-primary rounded-full w-8 h-8 flex items-center justify-center'>
                            <BiChevronRight className='text-white w-6 h-6' />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentBlog;
