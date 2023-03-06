import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="MainContainer">
      <div id="Home">
        <Home />
      </div>
      <div id="AboutMe">
        <AboutMe />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Projects">
        <Projects />
        {/* still need to change this item */}
      </div>
      <div id="Contact">
        <Contact />
      </div>  
      <div>
        <Footer />    
      </div>
    </div>
  );
}

export default App;
