'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BiChevronRight } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from 'react-icons/hi2';

const footerContent = {
    about: {
        logo: '/images/logo.png',
        description:
            'We are a group of creative people who design influential brands and digital experiences. We are passionate about what we do and it shows in our work.',
        cta: {
            href: '#_',
            label: 'Learn More',
        },
    },
    footerLinks: [
        {
            heading: 'Company',
            links: [
                {
                    href: '#_',
                    label: 'About',
                },
                {
                    href: '#_',
                    label: 'Projects',
                },
                {
                    href: '#_',
                    label: 'How we work',
                },
                {
                    href: '#_',
                    label: 'Contact',
                },
                {
                    href: '#_',
                    label: 'Work with us',
                },
            ],
        },
        {
            heading: 'Services',
            links: [
                {
                    href: '#_',
                    label: 'Web Development',
                },
                {
                    href: '#_',
                    label: 'Mobile App Development',
                },
                {
                    href: '#_',
                    label: 'UI/UX Design',
                },
                {
                    href: '#_',
                    label: 'Cloud Computing',
                },
            ],
        },
    ],

    contact: {
        heading: 'Contact Us',
        description:
            "We'd love to hear from you! Send us a message using the form opposite, or email us. We'd love to hear from you! Send us a message using the form opposite, or email us.",
        address: {
            street: '123 Main Street',
            phone: '+1 (555) 555-5555',
            website: 'github.com/Adan-Perez',
        },
    },
    copyRight: {
        labelOne: '© ' + new Date().getFullYear() + ' made with ',
        labelTwo: 'by Adan Perez',
    },
};

const Footer = () => {
    return (
        <footer role='contentinfo' className='py-20 bg-white'>
            <div className='container px-4 mx-auto'>
                <div className='block lg:flex gap-20 mb-10 pb-10'>
                    <div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
                        <Link href='/' className='mb-4 inline-block'>
                            <Image
                                src={footerContent.about.logo}
                                alt='Logo'
                                width={87}
                                height={30}
                            />
                        </Link>

                        <p className='leading-relaxed mb-7'>
                            {footerContent.about.description}
                        </p>

                        <p>
                            <Link
                                href={footerContent.about.cta.href}
                                className='flex space-x-2 outline-none items-center font-semibold text-primary group'>
                                <span>{footerContent.about.cta.label}</span>
                                <span className='w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary'>
                                    <BiChevronRight className='text-lg' />
                                </span>
                            </Link>
                        </p>
                    </div>
                    <div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
                        <div className='grid grid-cols-2 gap-10'>
                            {footerContent.footerLinks.map((footerLink, idx) => (
                                <div key={footerLink.heading}>
                                    <h3 className='font-semibold text-heading mb-5'>
                                        {footerLink.heading}
                                    </h3>
                                    <ul className='p-0 m-0'>
                                        {footerLink.links.map((link, idx) => (
                                            <li className='mb-3' key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className='group flex items-center duration-300 transition-all ease-in-out hover:text-primary'>
                                                    <span>{link.label}</span>
                                                    <span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'>
                                                        <BiChevronRight className='text-xl' />
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-4/12 w-full'>
                        <h3 className='font-semibold text-heading mb-5'>
                            {footerContent.contact.heading}
                        </h3>
                        <p className='leading-relaxed mb-7'>
                            {footerContent.contact.description}
                        </p>
                        <ul>
                            <li className='flex items-start space-x-3 mb-5'>
                                <HiLocationMarker className='text-xl text-primary' />
                                <span className='text-body'>
                                    {footerContent.contact.address.street}
                                </span>
                            </li>
                            <li className='flex items-start space-x-3 mb-5'>
                                <HiPhone className='text-xl text-primary' />
                                <span className='text-body'>
                                    {footerContent.contact.address.phone}
                                </span>
                            </li>
                            <li className='flex items-start space-x-3 mb-5'>
                                <HiMiniGlobeAmericas className='text-xl text-primary' />
                                <span className='text-body'>
                                    {footerContent.contact.address.website}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='text-center pt-10 border-t border-gray-200'>
                    <p>
                        {footerContent.copyRight.labelOne}{' '}
                        <HiMiniHeart className='text-red-600 inline-block' />{' '}
                        <Link href='https://github.com/Adan-Perez'>
                            <span className='text-primary hover:text-secondary'>
                                {footerContent.copyRight.labelTwo}
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
