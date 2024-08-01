import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Benefit from '../component/Benefits';
import Footer from '../component/Footer';


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Benefit />
            <Footer />
        </div>
    );
};

export default Home;