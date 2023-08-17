import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Intro from './components/Intro';
import Servicedetail from './components/Servicedetail';
import Card from './components/Card';
import Final from './components/Final';
import Newservice from './components/Newservice';
function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Intro/>}></Route>
          <Route path='/servicedesc' element={<Servicedetail/>}></Route>
          <Route path='/card' element={<Card/>}></Route>
          <Route path='/final' element={<Newservice/>}></Route>

        </Routes>
      </Router>  
      {/* <Footer/> */}
    </>
  )
}

export default App
