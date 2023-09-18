import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import RecentBlog from './components/RecentBlog';

function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Solutions />
            <Testimonials />
            <RecentBlog />
        </>
    );
}

export default Home;
