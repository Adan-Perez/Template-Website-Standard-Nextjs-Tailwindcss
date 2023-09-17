'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';
import { BiChevronRight } from 'react-icons/bi';
import logo from '../../../public/images/logo.png';

const navigationMenu = [
    {
        href: '#',
        label: 'Home',
    },
    {
        href: '#',
        label: 'Projects',
    },
    {
        href: '#',
        label: 'How we work',
    },
    {
        href: '#',
        label: 'About',
    },
    {
        href: '#',
        label: 'Contact',
    },
];

function Navigation() {
    const [navOpen, setNavOpen] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
    });

    const mobileMenuHandler = () => {
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });

            if (dimensions.width > 768 && navOpen) {
                setNavOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <>
            <header className='py-7'>
                <div className='container px-4 mx-auto'>
                    <div className='flex items-center justify-between'>
                        {/* Logo */}
                        <div>
                            <Link href='/'>
                                <Image
                                    className='cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300 hover:scale-105'
                                    src={logo}
                                    alt='Logo'
                                    width={85}
                                    height={30}
                                />
                            </Link>
                        </div>
                        {/* Navigation Menu */}
                        <div className='hidden lg:block text-center'>
                            <ul className='flex space-x-7'>
                                {navigationMenu.map((item, idx) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className='text-heading font-semibold  hover:text-primary transition-all ease-in-out duration-300'>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* CTA */}
                        <div>
                            <Link
                                href='#'
                                className='px-4 py-4 bg-primary text-white rounded-lg hidden lg:inline-block'>
                                Get Started
                            </Link>
                            <button
                                className='block lg:hidden'
                                onClick={mobileMenuHandler}>
                                <HiBars3 className='text-3xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}

            <div
                className={
                    navOpen
                        ? 'block py-0 fixed w-screen z-[9999]'
                        : 'hidden py-0 fixed w-screen z-[9999]'
                }>
                <div
                    className='h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50'
                    onClick={mobileMenuHandler}></div>
                <div className='bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed'>
                    <div className='flex items-center h-14 px-10 border-b'>
                        <button
                            className='flex items-center space-x-3'
                            onClick={mobileMenuHandler}>
                            <GrClose className='text-heading' />
                            <span className='text-heading font-semibold text-lg'>
                                Close
                            </span>
                        </button>
                    </div>

                    <div className='h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth'>
                        <ul className='block mb-7'>
                            {navigationMenu.map((item, idx) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className='group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary'>
                                        <span>{item.label}</span>
                                        <span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'>
                                            <BiChevronRight className='text-xl' />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;
