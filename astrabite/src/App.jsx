
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
function App() {

  return (
    <>
    <Navbar/>
    <About/>
    <Home/>
    <OurTeam/>
    <Services/>
    <Contact/>
    </>
  )
}

export default App
