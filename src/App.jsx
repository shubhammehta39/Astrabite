import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Footer/>
      </Router>  
    </>
  )
}

export default App
