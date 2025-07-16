import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Brokerage/>
            <OpenAccount/>
            <Footer/>
        </>
     );
}

export default PricingPage;
