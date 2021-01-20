import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './index'
import './index.css'
function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Cards />
    <Products />
    <Footer />
    </>
  );
}

export default App;
