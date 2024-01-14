import React, { useEffect } from 'react';
import Banner from './component/banner/Banner';
import Work from './component/work/Work';
import Knowledge from './component/knowledge/Knowledge';
import Contact from '../contact/Contact';
import Features from './component/feature/Features';

const Home = () => {
    useEffect(() => {
        document.title = " Portfolio | Home"
     }, []);
    return (
        <>
            <Banner />
            <Work />
            <Knowledge />
            <Features />
            <Contact />
        </>
    );
};

export default Home;