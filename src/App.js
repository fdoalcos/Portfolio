import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';

function App() {

  const navBarRef = useRef();

  let scrollY = 0;


  const controlDirect = () => {
    if (window.scrollY > scrollY) {
      navBarRef.current.style.top = '-80px'
    } else {
      navBarRef.current.style.top = '0'
    }
    scrollY = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', controlDirect);
    return () => {
      window.removeEventListener('scroll', controlDirect);
    }
  }, [])


  return (
    <div className="">
      <div ref={navBarRef} className='mainNavBar hidden blockNavBar' id="Navbar">
        <Navbar />
      </div>
      <div className='hidden blockNavBar2'>
        <Navbar2 />
      </div>
      <div className='MainContainer'>
        <div className='Hidden' id="Home">
          <Home />
        </div>
        <div className='Hidden' id="AboutMe">
          <AboutMe />
        </div>
        <div className='Hidden' id="Skills">
          <Skills />
        </div>
        <div className='Hidden' id="Projects">
          <Projects />
          {/* still need to change this item */}
        </div>
        <div className='Hidden' id="Contact">
          <Contact />
        </div>  
        <div className='Hidden'>
          <Footer />    
        </div>
      </div>
      
    </div>
  );
}

export default App;
