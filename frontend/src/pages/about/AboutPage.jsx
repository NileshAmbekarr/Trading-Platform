import React from 'react';
import Hero from './Hero';
import Team from './Team';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function AboutPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Team/>
            <OpenAccount/>
            <Footer/>
        </>
     );
}

export default AboutPage;
