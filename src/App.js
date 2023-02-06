import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <div id="Home">
        <Home />
      </div>
      <div id="AboutMe">
        <AboutMe />
      </div>
      <div id="Skills">
        <Skills />
      </div>

      
    </div>
  );
}

export default App;
