import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // const myRef = useRef();
  // const [isVisible, setVisible] = useState();
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       setVisible(entry.isIntersecting)
  //     })
  // })

  // }, [])

  // const elements = myRef.current.querySelectorAll('.Hidden')
  // elements.forEach(element => {
  //   observer.observe(element);
  // })


  return (
    <div className="MainContainer">
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
  );
}

export default App;
