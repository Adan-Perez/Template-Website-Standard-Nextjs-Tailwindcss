import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCheck } from 'react-icons/bi';

const solutionContent = {
    text: {
        headingSubtitle: 'Our solutions',
        headingTitle: "We've got you covered",
        description:
            'We offer a wide range of solutions for your business. Whether you need a website, mobile app, or custom software, we have the expertise to help you succeed.',
        features: [
            {
                title: 'Web Development',
            },
            {
                title: 'Mobile App Development',
            },
            {
                title: 'UI/UX Design',
            },
            {
                title: 'Cloud Computing',
            },
        ],
        cta: {
            btn1: {
                href: '#_',
                label: 'Get Started',
            },
            btn2: {
                href: '#_',
                label: 'Learn More',
            },
        },
    },
    images: {
        img1: '/images/solutions_imgs/solution-img-1.webp',
        img2: '/images/solutions_imgs/solution-img-2.webp',
        img3: '/images/solutions_imgs/solution-img-3.webp',
        img4: '/images/solutions_imgs/solution-img-4.webp',
    },
    experience: {
        years: '13+',
        label: 'Years of Experience',
    },
};

const Solutions = () => {
    return (
        <section className='py-32 bg-light overflow-x-hidden'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex space-x-2 justify-between'>
                    <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-16 before:bg-blueLight before:bottom-16">
                        <div className='flex gap-2'>
                            <div className='flex flex-col space-y-2'>
                                <div>
                                    <Image
                                        src={solutionContent.images.img1}
                                        width={626}
                                        height={640}
                                        className='object-cover h-full w-full rounded-lg'
                                        alt='Solution image'
                                    />
                                </div>
                                <div className='flex justify-end gap-2'>
                                    <div className='w-4/12 flex'>
                                        <div className='ml-auto'>
                                            <div className='bg-greenLight w-10 h-10 lg:w-24 rounded-2xl rounded-bl-[200px]'></div>
                                        </div>
                                    </div>
                                    <div className='w-6/12'>
                                        <Image
                                            src={solutionContent.images.img3}
                                            width={626}
                                            height={640}
                                            className='object-cover h-full w-full rounded-lg'
                                            alt='Solution image'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* End col */}
                            <div className='mt-auto'>
                                <div className='flex flex-col gap-2'>
                                    <div className='bg-purpleLigth w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]'></div>
                                </div>

                                <div>
                                    <Image
                                        src={solutionContent.images.img2}
                                        width={547}
                                        height={573}
                                        className='object-cover h-full w-full shadow-2xl rounded-lg'
                                        alt='Solution image'
                                    />
                                </div>

                                <div>
                                    <div className='p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5'>
                                        <strong className='block font-bold text-primary text-xl lg:text-5xl'>
                                            {solutionContent.experience.years}
                                        </strong>
                                        <span>
                                            {solutionContent.experience.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-5/12 relative z-10'>
                        <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-10]">
                            {solutionContent.text.headingSubtitle}
                        </span>

                        <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
                            {solutionContent.text.headingTitle}
                        </h2>

                        <p className='text-body leading-relaxed mb-10'>
                            {solutionContent.text.description}
                        </p>

                        <ul className='grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10'>
                            {solutionContent.text.features.map((feature, idx) => (
                                <li
                                    className='flex flex-grow items-center space-x-5'
                                    key={feature.title}>
                                    <span className='w-7 h-7 rounded-full bg-primary flex items-center justify-center'>
                                        <BiCheck className='text-white text-xl' />
                                    </span>
                                    <span className='text-body'>
                                        {feature.title}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className='flex space-x-3'>
                            <Link
                                href={solutionContent.text.cta.btn1.href}
                                className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#023e8a] hover:shadow-lg inline-block hover:-top-1 relative top-1'>
                                {solutionContent.text.cta.btn1.label}
                            </Link>
                            <Link
                                href={solutionContent.text.cta.btn2.href}
                                className='py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#0096c7] hover:shadow-lg inline-block hover:-top-1 relative top-1'>
                                {solutionContent.text.cta.btn2.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
