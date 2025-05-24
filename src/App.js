import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Notice: no BrowserRouter or Router here

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
