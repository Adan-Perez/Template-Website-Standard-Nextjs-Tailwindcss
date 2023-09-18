import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const testimonialContent = {
    heading: {
        headingSubTitle: 'Clients opinion',
        headingTitle: "Let's see what our clients say about us",
        description:
            'From the beginning, we have been working with the best companies around the world. We want to thank you for your trust in us and we hope to continue working together for many years.',

        cta: {
            cta_href: '#',
            cta_label: 'See all testimonials',
        },
    },
    testimonials: [
        {
            img: '/images/testimonials_imgs/testimonial-img-1.webp',
            name: 'Netflix',
            titleRole: 'Studios Marketing Director',
            testimonial:
                'Before working with Dev Studios, we had a hard time finding a reliable company to work with. They have been great to work with and we are very happy with the results.',
        },
        {
            img: '/images/testimonials_imgs/testimonial-img-2.webp',
            name: 'Susan Smith',
            titleRole: 'CEO of Amazon',
            testimonial:
                'Amazing work! They really helped us achieve our goals. The team was very professional and always available to answer our questions. We will definitely work with them again!',
        },
        {
            img: '/images/testimonials_imgs/testimonial-img-3.webp',
            name: 'John Doe',
            titleRole: 'Developer at Company',
            testimonial: 'Great company to work with. Highly recommended!',
        },
    ],
};

const Testimonials = () => {
    return (
        <section className='py-20 bg-light'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-between items-center'>
                    <div className='lg:w-4/12 lg:pr-24 mb-10 lg:mb-0'>
                        <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-blueLight before:left-0 before:top-0 before:bottom-0 before:z-[-10]">
                            {testimonialContent.heading.headingSubTitle}
                        </span>

                        <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
                            {testimonialContent.heading.headingTitle}
                        </h2>

                        <p className='text-body leading-relaxed mb-10'>
                            {testimonialContent.heading.description}
                        </p>

                        <p>
                            <Link
                                href={testimonialContent.heading.cta.cta_href}
                                className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#023e8a] hover:shadow-lg inline-block hover:-top-1 relative top-1'>
                                {testimonialContent.heading.cta.cta_label}
                            </Link>
                        </p>
                    </div>
                    <div className='lg:w-8/12'>
                        <div className='md:flex w-full space-x-0 md:space-x-6 items-end'>
                            <div className='md:w-6/12 mb-6 md:mb-0'>
                                {testimonialContent.testimonials.map(
                                    (testimonial, idx) => {
                                        if (idx == 2) return null;
                                        return (
                                            <div
                                                key={testimonial.name}
                                                className={`bg-white p-7 rounded-lg w-full shadow-2xl ${
                                                    idx == 1 ? '' : 'mb-6'
                                                }`}>
                                                <div className='flex space-x-4 items-center mb-4'>
                                                    <div className='relative'>
                                                        <Image
                                                            src={testimonial.img}
                                                            alt='testimonial image'
                                                            width={579}
                                                            height={720}
                                                            className='object-cover h-14 w-14 rounded-full'
                                                        />
                                                        <span className='absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                                            <Image
                                                                src='/images/quote.svg'
                                                                alt='quote'
                                                                width={14}
                                                                height={9}
                                                            />
                                                        </span>
                                                    </div>

                                                    <div className='leading-3'>
                                                        <strong className='block text-heading text-lg'>
                                                            {testimonial.name}
                                                        </strong>
                                                        <span className='text-sm text-body'>
                                                            {testimonial.titleRole}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <blockquote>
                                                        &quot;
                                                        {testimonial.testimonial}
                                                        &quot;
                                                    </blockquote>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <div className='md:w-6/12'>
                                <div>
                                    <div className='bg-purpleLigth hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-tr-[200px] mb-6 md:h-24 md:w-24'></div>

                                    <div className='bg-greenLight hidden  md:inline-block h-3 lg:p-2 rounded-lg w-full mb-6'></div>

                                    <div className='bg-white p-7 rounded-lg w-full mb-6 shadow-2xl'>
                                        <div className='flex space-x-4 items-center mb-4'>
                                            <div className='relative'>
                                                <Image
                                                    src={
                                                        testimonialContent
                                                            .testimonials[2].img
                                                    }
                                                    width={579}
                                                    height={720}
                                                    alt='Testimonial image'
                                                    className='object-cover h-14 w-14 rounded-full'
                                                />
                                                <span className='absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                                    <Image
                                                        src='/images/quote.svg'
                                                        alt='quote'
                                                        width={14}
                                                        height={9}
                                                    />
                                                </span>
                                            </div>

                                            <div className='leading-3'>
                                                <strong className='block text-heading text-lg'>
                                                    {
                                                        testimonialContent
                                                            .testimonials[2].name
                                                    }
                                                </strong>
                                                <span className='text-sm text-body'>
                                                    {
                                                        testimonialContent
                                                            .testimonials[2]
                                                            .titleRole
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <blockquote>
                                                &quot;
                                                {
                                                    testimonialContent
                                                        .testimonials[2].testimonial
                                                }
                                                &quot;
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
