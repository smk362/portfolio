import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
