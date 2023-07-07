
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import About from './components/About'
import Home from './components/Home';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/services" element={<Services/>} />\
        <Route path="/ourteam" element={<OurTeam/>} />


      </Routes>  
    </Router>
    </>
  )
}

export default App
