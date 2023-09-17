import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    const heroContent = {
        text: {
            subheading: 'Welcome to Dev Studios',
            heading: 'Our goal is to create the website of your dreams',
            description:
                'We are a group of creative people who design influential brands and digital experiences. We are passionate about what we do and it shows in our work.',
        },
        images: {
            img1: '/images/hero_imgs/hero-img-1.webp',
            img2: '/images/hero_imgs/hero-img-2.webp',
            img3: '/images/hero_imgs/hero-img-3.webp',
            img4: '/images/hero_imgs/hero-img-4.webp',
            img5: '/images/hero_imgs/hero-img-5.webp',
        },
    };

    return (
        <section className='py-20'>
            <div className='container mx-auto px-4'>
                <div className='lg:flex justify-between items-center'>
                    <div className='lg:w-5/12 mb-10 lg:mb-0'>
                        <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                            {heroContent.text.subheading}
                        </span>

                        <h1 className='text-4xl lg:text-5xl font-bold text-heading mb-7'>
                            {heroContent.text.heading}
                        </h1>

                        <p className='leading-relaxed text-body mb-10'>
                            {heroContent.text.description}
                        </p>

                        <div className='flex space-x-3'>
                            <Link
                                href='#_'
                                className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#023e8a] hover:shadow-lg inline-block hover:-top-1 relative top-1'>
                                Get Started
                            </Link>
                            <Link
                                href='#_'
                                className='py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#0096c7] hover:shadow-lg inline-block hover:-top-1 relative top-1'>
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className='lg:w-5/12 space-y-2'>
                        <div className='flex space-x-2 items-stretch'>
                            <div className='w-6/12'>
                                <Image
                                    src={heroContent.images.img1}
                                    alt='hero image'
                                    width={397}
                                    height={406}
                                    className='object-cover h-full w-full rounded-2xl'
                                />
                            </div>

                            <div className='w-4/12 self-end space-y-2'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <Image
                                            src={heroContent.images.img2}
                                            width={437}
                                            height={437}
                                            alt='hero image 2'
                                            className='object-cover h-full w-full rounded-2xl'
                                        />
                                    </div>

                                    <div className='bg-blueLight rounded-2xl rounded-tr-[200px]'></div>
                                </div>

                                <div>
                                    <Image
                                        src={heroContent.images.img3}
                                        width={374}
                                        height={392}
                                        alt='hero image 3'
                                        className='object-cover h-full w-full rounded-2xl'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex space-x-2'>
                            <div className='w-5/12'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='bg-greenLight rounded-2xl rounded-bl-[200px]'></div>

                                    <div>
                                        <Image
                                            src={heroContent.images.img4}
                                            width={394}
                                            height={394}
                                            alt='hero image 4'
                                            className='object-cover h-full w-full rounded-2xl'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='w-5/12'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div>
                                        <Image
                                            src={heroContent.images.img5}
                                            width={394}
                                            height={394}
                                            alt='hero image 5'
                                            className='object-cover h-full w-full rounded-2xl'
                                        />
                                    </div>

                                    <div className='bg-greenLight rounded-2xl rounded-br-[200px]'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
