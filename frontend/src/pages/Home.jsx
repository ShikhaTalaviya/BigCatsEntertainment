import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AllFilms from '../components/AllFilms';
import FoundersDesk from '../components/FoundersDesk';
import WhatWeDo from '../components/WhatWeDo';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <AllFilms />
      <FoundersDesk />
      <WhatWeDo />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
