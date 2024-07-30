import React from 'react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Data from './components/data/Data';
import Privacy from './components/privacy/Privacy';
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Data />
        <Privacy /> 
        <Footer />
    </>
  );
}

export default App;
