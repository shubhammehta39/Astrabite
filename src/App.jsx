import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Home/>
        <Footer/>
      </Router>  
    </>
  )
}

export default App
