
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import { Link, animateScroll as scroll } from 'react-scroll';
function App() {

  return (
    <>
    <Navbar/>
    <About id='aboutlink'/>
    <Home id='homelink'/>
    <OurTeam id='teamlink'/>
    <Services id='servicelink'/>
    <Contact id='contactlink'/>
    </>
  )
}

export default App
